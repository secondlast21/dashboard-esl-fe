import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { DocumentResource } from '@core/domain-classes/document-resource'
import { BaseComponent } from 'src/app/base.component'
@Component({
  selector: 'penunjang',
  templateUrl: './penunjang.component.html',
  styleUrls: ['./penunjang.component.scss'],
})
export class PenunjangComponent extends BaseComponent implements AfterViewInit {
  display = 'none'
  displayedColumns: string[] = [
    'nip',
    'nama',
    'jenis_penunjang',
    'nama_kegiatan',
    'deskripsi_kegiatan',
    'tempat_kegiatan',
    'tanggal_kegiatan'
  ]

  dataDosen = {
    totalData: 30,
    data_dosen: [
      // For Lorem Ipsum 1 (repeated 10 times)
      ...Array(10).fill({
        nip: '0123456781',
        nama: 'Lorem Ipsum 1',
        jenis_penunjang: 'Seminar',
        nama_kegiatan: 'Seminar Nasional',
        deskripsi_kegiatan: 'Presenting research findings',
        tempat_kegiatan: 'Conference Center',
        tanggal_kegiatan: '2023-01-01',
      }),
      // For Lorem Ipsum 2 (repeated 10 times)
      ...Array(10).fill({
        nip: '0123456782',
        nama: 'Lorem Ipsum 2',
        jenis_penunjang: 'Workshop',
        nama_kegiatan: 'Workshop on Advanced Technologies',
        deskripsi_kegiatan: 'Hands-on experience with new technologies',
        tempat_kegiatan: 'Tech Hub',
        tanggal_kegiatan: '2023-02-15',
      }),
      // For Lorem Ipsum 3 (repeated 10 times)
      ...Array(10).fill({
        nip: '0123456783',
        nama: 'Lorem Ipsum 3',
        jenis_penunjang: 'Conference',
        nama_kegiatan: 'International Research Conference',
        deskripsi_kegiatan: 'Sharing insights on global research trends',
        tempat_kegiatan: 'Global Convention Center',
        tanggal_kegiatan: '2023-03-22',
      }),
    ],
  };

  dataSource = new MatTableDataSource(this.dataDosen.data_dosen)

  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  showYAxisLabel = true
  xAxisLabelNama = 'Penunjang'
  yAxisLabelNama = 'Jumlah'
  xAxisLabelJab = 'Jabatan'
  yAxisLabelJab = 'Jumlah'

  namaSingle: any[] = []
  jabFungsiSingle: any[] = []

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.namaSingle = this.calculateNamaDistribution(this.dataDosen.data_dosen)
    this.jabFungsiSingle = this.calculateJabatanTerakhirDistribution(this.dataDosen.data_dosen)
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
