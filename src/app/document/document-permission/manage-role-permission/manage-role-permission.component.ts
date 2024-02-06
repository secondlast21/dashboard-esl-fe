import { Component, Inject, OnInit } from '@angular/core'
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DocumentRolePermission } from '@core/domain-classes/document-role-permission'
import { Role } from '@core/domain-classes/role'
import { TranslationService } from '@core/services/translation.service'
import { ToastrService } from 'ngx-toastr'
import { BaseComponent } from 'src/app/base.component'
import { DocumentPermissionService } from '../document-permission.service'

@Component({
  selector: 'app-manage-role-permission',
  templateUrl: './manage-role-permission.component.html',
  styleUrls: ['./manage-role-permission.component.scss'],
})
export class ManageRolePermissionComponent extends BaseComponent implements OnInit {
  selectedRoles: Role[] = []
  minDate: Date
  permissionForm: UntypedFormGroup
  constructor(
    private documentPermissionService: DocumentPermissionService,
    private toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { roles: Role[]; documentId: string },
    private dialogRef: MatDialogRef<ManageRolePermissionComponent>,
    private fb: UntypedFormBuilder,
    private translationService: TranslationService
  ) {
    super()
    this.minDate = new Date()
  }

  ngOnInit(): void {
    this.createUserPermissionForm()
  }

  createUserPermissionForm() {
    this.permissionForm = this.fb.group({
      isTimeBound: new UntypedFormControl(false),
      startDate: [''],
      endDate: [''],
      isAllowDownload: new UntypedFormControl(false),
    })
  }

  timeBoundChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.permissionForm.get('startDate').setValidators([Validators.required])
      this.permissionForm.get('endDate').setValidators([Validators.required])
    } else {
      this.permissionForm.get('startDate').clearValidators()
      this.permissionForm.get('startDate').updateValueAndValidity()
      this.permissionForm.get('endDate').clearValidators()
      this.permissionForm.get('endDate').updateValueAndValidity()
    }
  }

  saveDocumentRolePermission() {
    if (!this.permissionForm.valid) {
      this.permissionForm.markAllAsTouched()
      return
    }
    if (this.selectedRoles.length == 0) {
      this.toastrService.error(this.translationService.getValue('PLEASE_SELECT_ATLEAST_ONE_ROLE'))
      return
    }

    let documentRolePermission: DocumentRolePermission[] = this.selectedRoles.map((role) => {
      return Object.assign(
        {},
        {
          id: '',
          documentId: this.data.documentId,
          roleId: role.id,
        },
        this.permissionForm.value
      )
    })

    this.sub$.sink = this.documentPermissionService.addDocumentRolePermission(documentRolePermission).subscribe(() => {
      this.toastrService.success(this.translationService.getValue('PERMISSION_ADDED_SUCCESSFULLY'))
      this.dialogRef.close(true)
    })
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
