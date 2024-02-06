import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { DocumentResource } from '@core/domain-classes/document-resource'
import { BaseComponent } from 'src/app/base.component'
@Component({
  selector: 'kemahasiswaan',
  templateUrl: './kemahasiswaan.component.html',
  styleUrls: ['./kemahasiswaan.component.scss'],
})
export class KemahasiswaanComponent extends BaseComponent implements AfterViewInit {
  display = 'none'
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
  dataAlumni = {
    totalData: 25,
    data_alumni: [
      {
        nama: 'Lorem Ipsum 1',
        tanggal_skl: '2023-01-01',
        alamat_kantor: 'IPB University',
        no_telp: '0213456781',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 10,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 2',
        tanggal_skl: '2023-01-02',
        alamat_kantor: 'IPB University',
        no_telp: '0213456782',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 10,500,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 3',
        tanggal_skl: '2023-01-03',
        alamat_kantor: 'IPB University',
        no_telp: '0213456783',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 11,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 4',
        tanggal_skl: '2023-01-04',
        alamat_kantor: 'IPB University',
        no_telp: '0213456784',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 11,500,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 5',
        tanggal_skl: '2023-01-05',
        alamat_kantor: 'IPB University',
        no_telp: '0213456785',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 12,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 6',
        tanggal_skl: '2023-01-06',
        alamat_kantor: 'IPB University',
        no_telp: '0213456786',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 12,500,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 7',
        tanggal_skl: '2023-01-07',
        alamat_kantor: 'IPB University',
        no_telp: '0123456787',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 13,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 8',
        tanggal_skl: '2023-01-08',
        alamat_kantor: 'IPB University',
        no_telp: '0123456788',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 13,500,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 9',
        tanggal_skl: '2023-01-09',
        alamat_kantor: 'IPB University',
        no_telp: '0123456789',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 14,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 10',
        tanggal_skl: '2023-01-10',
        alamat_kantor: 'IPB University',
        no_telp: '01234567810',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '1 bulan',
        gaji: 'Rp 14,500,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 11',
        tanggal_skl: '2023-01-11',
        alamat_kantor: 'IPB University',
        no_telp: '0213456781',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 15,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 12',
        tanggal_skl: '2023-01-12',
        alamat_kantor: 'IPB University',
        no_telp: '0213456782',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 16,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 13',
        tanggal_skl: '2023-01-13',
        alamat_kantor: 'IPB University',
        no_telp: '0213456783',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 17,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 14',
        tanggal_skl: '2023-01-14',
        alamat_kantor: 'IPB University',
        no_telp: '0213456784',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 18,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 15',
        tanggal_skl: '2023-01-15',
        alamat_kantor: 'IPB University',
        no_telp: '0213456785',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 19,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 16',
        tanggal_skl: '2023-01-16',
        alamat_kantor: 'IPB University',
        no_telp: '0213456786',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 20,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 17',
        tanggal_skl: '2023-01-17',
        alamat_kantor: 'IPB University',
        no_telp: '0123456787',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 21,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 18',
        tanggal_skl: '2023-01-18',
        alamat_kantor: 'IPB University',
        no_telp: '0123456788',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 22,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 19',
        tanggal_skl: '2023-01-19',
        alamat_kantor: 'IPB University',
        no_telp: '0123456789',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 23,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 20',
        tanggal_skl: '2023-01-20',
        alamat_kantor: 'IPB University',
        no_telp: '01234567810',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 24,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 21',
        tanggal_skl: '2023-01-21',
        alamat_kantor: 'IPB University',
        no_telp: '0213456781',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 25,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 22',
        tanggal_skl: '2023-01-22',
        alamat_kantor: 'IPB University',
        no_telp: '0213456782',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 26,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 23',
        tanggal_skl: '2023-01-23',
        alamat_kantor: 'IPB University',
        no_telp: '0213456783',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '3 bulan',
        gaji: 'Rp 27,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 24',
        tanggal_skl: '2023-01-24',
        alamat_kantor: 'IPB University',
        no_telp: '0213456782',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 26,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
      {
        nama: 'Lorem Ipsum 25',
        tanggal_skl: '2023-01-25',
        alamat_kantor: 'IPB University',
        no_telp: '0213456783',
        tempat_kerja: 'Jakarta',
        masa_tunggu_kerja: '2 bulan',
        gaji: 'Rp 27,000,000',
        status_pegawai: 'Tetap',
        lingkup_perusahaan: 'Perguruan Tinggi',
        jenis_perusahaan: 'Negeri',
        kelanjutan_studi: 'S3'
      },
    ]
  }

  dataSource = new MatTableDataSource(this.dataAlumni.data_alumni)

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

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.masaTungguKerjaSingle = this.calculateMasaTungguKerjaDistribution(this.dataAlumni.data_alumni)
    this.jabFungsiSingle = this.calculateJabatanTerakhirDistribution(this.dataAlumni.data_alumni)
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
