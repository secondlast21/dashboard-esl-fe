import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { DocumentResource } from '@core/domain-classes/document-resource'
import { BaseComponent } from 'src/app/base.component'
import { ExcelService } from './excel.service'
import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';

@Component({
  selector: 'kemahasiswaan',
  templateUrl: './kemahasiswaan.component.html',
  styleUrls: ['./kemahasiswaan.component.scss'],
})
export class KemahasiswaanComponent extends BaseComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'nama',
    'tanggal_skl',
    'alamat_kantor',
    'no_telp',
    'tempat_kerja',
    'masa_tunggu_kerja',
    'gaji',
    'status_pegawai',
    'lingkup_perusahaan',
    'jenis_perusahaan',
    'kelanjutan_studi',
  ]

  constructor(private excelService: ExcelService) {
    super();
  }

  data: any;
  dapeg: any;
  display = 'none'

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const jsonData = XLSX.utils.sheet_to_json(ws);
      console.log(jsonData);
      this.excelService.setExcelData(jsonData); // Store data globally
    };
    reader.readAsBinaryString(target.files[0]);
  }
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  importExcel() {
    this.dataSource.data = this.excelService.getExcelData();
    console.log(this.dataSource.data);
    this.masaTungguKerjaSingle = this.calculateMasaTungguKerjaDistribution(this.dataSource.data)
    this.jabFungsiSingle = this.calculateJabatanTerakhirDistribution(this.dataSource.data)
  }

  exportAsExcelFile(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Kemahasiswaan');
    /* save to file */
    XLSX.writeFile(wb, 'Kemahasiswaan.xlsx');
  }

  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  showYAxisLabel = true
  xAxisLabelGol = 'Masa Tunggu Kerja'
  yAxisLabelGol = 'Jumlah'
  xAxisLabelJab = 'Jabatan'
  yAxisLabelJab = 'Jumlah'

  masaTungguKerjaSingle: any[] = []
  jabFungsiSingle: any[] = []

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.masaTungguKerjaSingle = this.calculateMasaTungguKerjaDistribution(this.dataSource.data)
    this.jabFungsiSingle = this.calculateJabatanTerakhirDistribution(this.dataSource.data)
  }

  pageSizeOptions: number[] = [5, 10, 20]
  pageIndex = 0
  pageSize = 10

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
  }

  openModal() {
    this.display = 'block'
  }
  onCloseHandled() {
    this.display = 'none'
  }

  calculateMasaTungguKerjaDistribution(data) {
    const masaTungguKerjaCounts = {}
    data.forEach((item) => {
      const masaTungguKerja = item.masa_tunggu_kerja
      masaTungguKerjaCounts[masaTungguKerja] = (masaTungguKerjaCounts[masaTungguKerja] || 0) + 1
    })

    return Object.keys(masaTungguKerjaCounts).map((key) => ({
      name: key,
      value: masaTungguKerjaCounts[key],
    }))
  }

  calculateJabatanTerakhirDistribution(data) {
    const jabTerakhirCounts = {}
    data.forEach((item) => {
      const jabTerakhir = item.tempat_kerja
      jabTerakhirCounts[jabTerakhir] = (jabTerakhirCounts[jabTerakhir] || 0) + 1
    })

    return Object.keys(jabTerakhirCounts).map((key) => ({
      name: key,
      value: jabTerakhirCounts[key],
    }))
  }
}
