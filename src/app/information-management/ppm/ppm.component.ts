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
  selector: 'ppm',
  templateUrl: './ppm.component.html',
  styleUrls: ['./ppm.component.scss'],
})
export class PpmComponent extends BaseComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'nip',
    'nama',
    'jenis_penelitian',
    'tahun_usulan',
    'tahun_pelaksanaan',
    'bidang_ilmu',
    'jumlah_mhs',
    'dana_usulan',
    'total_dana',
    'mitra',
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
    this.namaSingle = this.calculateNamaDistribution(this.dataSource.data)
    this.jenisPenelitianSingle = this.calculateJenisPenelitianDistribution(this.dataSource.data)
  }

  exportAsExcelFile(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'PPM');
    /* save to file */
    XLSX.writeFile(wb, 'PPM.xlsx');
  }

  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  showYAxisLabel = true
  xAxisLabelNama = 'Nama'
  yAxisLabelNama = 'Jumlah Penelitian'
  xAxisLabelJenis = 'Jenis Penelitian'
  yAxisLabelJenis = 'Jumlah'

  namaSingle: any[] = []
  jenisPenelitianSingle: any[] = []

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
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

  calculateNamaDistribution(data) {
    const namaCounts = {}
    data.forEach((item) => {
      const nama = item.nama
      namaCounts[nama] = (namaCounts[nama] || 0) + 1
    })

    return Object.keys(namaCounts).map((key) => ({
      name: key,
      value: namaCounts[key],
    }))
  }

  calculateJenisPenelitianDistribution(data) {
    const jenisPenelitianCounts = {}
    data.forEach((item) => {
      const jenisPenelitian = item.jenis_penelitian
      jenisPenelitianCounts[jenisPenelitian] = (jenisPenelitianCounts[jenisPenelitian] || 0) + 1
    })

    return Object.keys(jenisPenelitianCounts).map((key) => ({
      name: key,
      value: jenisPenelitianCounts[key],
    }))
  }
}
