import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { DocumentResource } from '@core/domain-classes/document-resource'
import { BaseComponent } from 'src/app/base.component'

@Component({
  selector: 'kepegawaian',
  templateUrl: './ppm.component.html',
  styleUrls: ['./ppm.component.scss'],
})
export class PpmComponent extends BaseComponent implements AfterViewInit {
  display = 'none'
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

  dataPpm = {
    totalData: 30,
    data_penelitian: [
      {
        nip: '0123456781',
        nama: 'Lorem Ipsum',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '01/01/2022',
        tahun_pelaksanaan: '06/30/2022',
        bidang_ilmu: 'Field of Study 1',
        jumlah_mhs: '10',
        dana_usulan: '5000',
        total_dana: '10000',
        mitra: 'Partner 1',
      },
      {
        nip: '0123456782',
        nama: 'Lorem Ipsum',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '02/15/2022',
        tahun_pelaksanaan: '07/15/2022',
        bidang_ilmu: 'Field of Study 2',
        jumlah_mhs: '8',
        dana_usulan: '6000',
        total_dana: '12000',
        mitra: 'Partner 2',
      },
      {
        nip: '0123456783',
        nama: 'Lorem Ipsum',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '03/20/2022',
        tahun_pelaksanaan: '08/20/2022',
        bidang_ilmu: 'Field of Study 3',
        jumlah_mhs: '12',
        dana_usulan: '7500',
        total_dana: '15000',
        mitra: 'Partner 3',
      },
      {
        nip: '0123456784',
        nama: 'Lorem Ipsum',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '04/10/2022',
        tahun_pelaksanaan: '09/10/2022',
        bidang_ilmu: 'Field of Study 4',
        jumlah_mhs: '15',
        dana_usulan: '9000',
        total_dana: '18000',
        mitra: 'Partner 4',
      },
      {
        nip: '0123456785',
        nama: 'Lorem Ipsum',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '05/05/2022',
        tahun_pelaksanaan: '10/05/2022',
        bidang_ilmu: 'Field of Study 5',
        jumlah_mhs: '18',
        dana_usulan: '8000',
        total_dana: '16000',
        mitra: 'Partner 5',
      },
      {
        nip: '0123456786',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '06/08/2022',
        tahun_pelaksanaan: '11/08/2022',
        bidang_ilmu: 'Field of Study 6',
        jumlah_mhs: '9',
        dana_usulan: '5500',
        total_dana: '11000',
        mitra: 'Partner 6',
      },
      {
        nip: '0123456787',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '07/12/2022',
        tahun_pelaksanaan: '12/12/2022',
        bidang_ilmu: 'Field of Study 7',
        jumlah_mhs: '14',
        dana_usulan: '7000',
        total_dana: '14000',
        mitra: 'Partner 7',
      },
      {
        nip: '0123456788',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '08/18/2022',
        tahun_pelaksanaan: '01/18/2023',
        bidang_ilmu: 'Field of Study 8',
        jumlah_mhs: '20',
        dana_usulan: '10000',
        total_dana: '20000',
        mitra: 'Partner 8',
      },
      {
        nip: '0123456789',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '09/21/2022',
        tahun_pelaksanaan: '02/21/2023',
        bidang_ilmu: 'Field of Study 9',
        jumlah_mhs: '7',
        dana_usulan: '4500',
        total_dana: '9000',
        mitra: 'Partner 9',
      },
      {
        nip: '01234567810',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 1',
        tahun_usulan: '10/30/2022',
        tahun_pelaksanaan: '03/30/2023',
        bidang_ilmu: 'Field of Study 10',
        jumlah_mhs: '22',
        dana_usulan: '11000',
        total_dana: '22000',
        mitra: 'Partner 10',
      },
      {
        nip: '01234567811',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 2',
        tahun_usulan: '11/25/2022',
        tahun_pelaksanaan: '04/25/2023',
        bidang_ilmu: 'Field of Study 11',
        jumlah_mhs: '10',
        dana_usulan: '5000',
        total_dana: '10000',
        mitra: 'Partner 11',
      },
      {
        nip: '01234567812',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 2',
        tahun_usulan: '12/05/2022',
        tahun_pelaksanaan: '05/05/2023',
        bidang_ilmu: 'Field of Study 12',
        jumlah_mhs: '8',
        dana_usulan: '6000',
        total_dana: '12000',
        mitra: 'Partner 12',
      },
      {
        nip: '01234567813',
        nama: 'Lorem Ipsum 2',
        jenis_penelitian: 'Research Type 2',
        tahun_usulan: '01/15/2023',
        tahun_pelaksanaan: '06/15/2023',
        bidang_ilmu: 'Field of Study 13',
        jumlah_mhs: '12',
        dana_usulan: '7500',
        total_dana: '15000',
        mitra: 'Partner 13',
      },
      {
        nip: '01234567814',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 2',
        tahun_usulan: '02/20/2023',
        tahun_pelaksanaan: '07/20/2023',
        bidang_ilmu: 'Field of Study 14',
        jumlah_mhs: '15',
        dana_usulan: '9000',
        total_dana: '18000',
        mitra: 'Partner 14',
      },
      {
        nip: '01234567815',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '03/25/2023',
        tahun_pelaksanaan: '08/25/2023',
        bidang_ilmu: 'Field of Study 15',
        jumlah_mhs: '18',
        dana_usulan: '8000',
        total_dana: '16000',
        mitra: 'Partner 15',
      },
      {
        nip: '01234567816',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '04/30/2023',
        tahun_pelaksanaan: '09/30/2023',
        bidang_ilmu: 'Field of Study 16',
        jumlah_mhs: '9',
        dana_usulan: '5500',
        total_dana: '11000',
        mitra: 'Partner 16',
      },
      {
        nip: '01234567817',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '05/08/2023',
        tahun_pelaksanaan: '10/08/2023',
        bidang_ilmu: 'Field of Study 17',
        jumlah_mhs: '14',
        dana_usulan: '7000',
        total_dana: '14000',
        mitra: 'Partner 17',
      },
      {
        nip: '01234567818',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '06/10/2023',
        tahun_pelaksanaan: '11/10/2023',
        bidang_ilmu: 'Field of Study 18',
        jumlah_mhs: '20',
        dana_usulan: '10000',
        total_dana: '20000',
        mitra: 'Partner 18',
      },
      {
        nip: '01234567819',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '07/14/2023',
        tahun_pelaksanaan: '12/14/2023',
        bidang_ilmu: 'Field of Study 19',
        jumlah_mhs: '7',
        dana_usulan: '4500',
        total_dana: '9000',
        mitra: 'Partner 19',
      },
      {
        nip: '01234567820',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '08/21/2023',
        tahun_pelaksanaan: '01/21/2024',
        bidang_ilmu: 'Field of Study 20',
        jumlah_mhs: '22',
        dana_usulan: '11000',
        total_dana: '22000',
        mitra: 'Partner 20',
      },
      {
        nip: '01234567821',
        nama: 'Lorem Ipsum 3',
        jenis_penelitian: 'Research Type 3',
        tahun_usulan: '09/15/2023',
        tahun_pelaksanaan: '02/15/2024',
        bidang_ilmu: 'Field of Study 21',
        jumlah_mhs: '10',
        dana_usulan: '5000',
        total_dana: '10000',
        mitra: 'Partner 21',
      },
      {
        nip: '01234567822',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '10/20/2023',
        tahun_pelaksanaan: '03/20/2024',
        bidang_ilmu: 'Field of Study 22',
        jumlah_mhs: '8',
        dana_usulan: '6000',
        total_dana: '12000',
        mitra: 'Partner 22',
      },
      {
        nip: '01234567823',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '11/25/2023',
        tahun_pelaksanaan: '04/25/2024',
        bidang_ilmu: 'Field of Study 23',
        jumlah_mhs: '12',
        dana_usulan: '7500',
        total_dana: '15000',
        mitra: 'Partner 23',
      },
      {
        nip: '01234567824',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '12/30/2023',
        tahun_pelaksanaan: '05/30/2024',
        bidang_ilmu: 'Field of Study 24',
        jumlah_mhs: '15',
        dana_usulan: '9000',
        total_dana: '18000',
        mitra: 'Partner 24',
      },
      {
        nip: '01234567825',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '01/05/2024',
        tahun_pelaksanaan: '06/05/2024',
        bidang_ilmu: 'Field of Study 25',
        jumlah_mhs: '18',
        dana_usulan: '8000',
        total_dana: '16000',
        mitra: 'Partner 25',
      },
      {
        nip: '01234567826',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '02/10/2024',
        tahun_pelaksanaan: '07/10/2024',
        bidang_ilmu: 'Field of Study 26',
        jumlah_mhs: '9',
        dana_usulan: '5500',
        total_dana: '11000',
        mitra: 'Partner 26',
      },
      {
        nip: '01234567827',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '03/15/2024',
        tahun_pelaksanaan: '08/15/2024',
        bidang_ilmu: 'Field of Study 27',
        jumlah_mhs: '14',
        dana_usulan: '7000',
        total_dana: '14000',
        mitra: 'Partner 27',
      },
      {
        nip: '01234567828',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '04/20/2024',
        tahun_pelaksanaan: '09/20/2024',
        bidang_ilmu: 'Field of Study 28',
        jumlah_mhs: '20',
        dana_usulan: '10000',
        total_dana: '20000',
        mitra: 'Partner 28',
      },
      {
        nip: '01234567829',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '05/25/2024',
        tahun_pelaksanaan: '10/25/2024',
        bidang_ilmu: 'Field of Study 29',
        jumlah_mhs: '7',
        dana_usulan: '4500',
        total_dana: '9000',
        mitra: 'Partner 29',
      },
      {
        nip: '01234567830',
        nama: 'Lorem Ipsum 4',
        jenis_penelitian: 'Research Type 4',
        tahun_usulan: '06/30/2024',
        tahun_pelaksanaan: '11/30/2024',
        bidang_ilmu: 'Field of Study 30',
        jumlah_mhs: '22',
        dana_usulan: '11000',
        total_dana: '22000',
        mitra: 'Partner 30',
      },
    ],
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

  dataSource = new MatTableDataSource(this.dataPpm.data_penelitian)

  namaSingle: any[] = []
  jenisPenelitianSingle: any[] = []

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.namaSingle = this.calculateNamaDistribution(this.dataPpm.data_penelitian)
    this.jenisPenelitianSingle = this.calculateJenisPenelitianDistribution(this.dataPpm.data_penelitian)
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
