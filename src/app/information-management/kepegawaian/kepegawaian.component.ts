import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { DocumentResource } from '@core/domain-classes/document-resource'
import { BaseComponent } from 'src/app/base.component'
import { ExcelService } from './excel.service'
import * as FileSaver from 'file-saver';

// Import necessary modules
import * as XLSX from 'xlsx';

@Component({
  selector: 'kepegawaian',
  templateUrl: './kepegawaian.component.html',
  styleUrls: ['./kepegawaian.component.scss'],
})
export class KepegawaianComponent extends BaseComponent implements AfterViewInit{
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [ 'nip','nama','status_kepegawaian', 'tempat_lahir', 'jenis_kelamin', 'alamat', 'telp_darurat',
                                  'pendidikan', 'status_pernikahan', 'nidn', 'no_serdos', 'gol_terakhir', 'jab_fungsi_terakhir',
                                  'no_bpjs', 'no_npwp', 'no_paspor',  
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
    this.golTerakhirSingle = this.calculateGolTerakhirDistribution(this.dataSource.data)
    this.jabFungsiSingle = this.calculateJabatanTerakhirDistribution(this.dataSource.data)
  }

  exportAsExcelFile(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Kepegawaian');
    /* save to file */
    XLSX.writeFile(wb, 'Kepegawaian.xlsx');
  }

  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  showYAxisLabel = true
  xAxisLabelGol = 'Golongan'
  yAxisLabelGol = 'Jumlah'
  xAxisLabelJab = 'Jabatan'
  yAxisLabelJab = 'Jumlah'

  golTerakhirSingle: any[] = []
  jabFungsiSingle: any[] = []

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

  calculateGolTerakhirDistribution(data) {
    const golTerakhirCounts = {}
    data.forEach((item) => {
      const golTerakhir = item.gol_terakhir
      golTerakhirCounts[golTerakhir] = (golTerakhirCounts[golTerakhir] || 0) + 1
    })

    return Object.keys(golTerakhirCounts).map((key) => ({
      name: key,
      value: golTerakhirCounts[key],
    }))
  }

  calculateJabatanTerakhirDistribution(data) {
    const jabTerakhirCounts = {}
    data.forEach((item) => {
      const jabTerakhir = item.jab_fungsi_terakhir
      jabTerakhirCounts[jabTerakhir] = (jabTerakhirCounts[jabTerakhir] || 0) + 1
    })

    return Object.keys(jabTerakhirCounts).map((key) => ({
      name: key,
      value: jabTerakhirCounts[key],
    }))
  }
}
