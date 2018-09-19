import { Component, OnInit } from '@angular/core';
import { KendaraanService } from '../service/kendaraan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kendaraan',
  templateUrl: './kendaraan.component.html',
  styleUrls: ['./kendaraan.component.scss']
})
export class KendaraanComponent implements OnInit {

  Kendaraan$ : Object;

  constructor( private data : KendaraanService ) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.Kendaraan$ = data
    )
  }

}
