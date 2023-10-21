import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private helperService: HelperService,
             private router: Router) { }

  ngOnInit() {
  }
  async openCustomModal() {
    await this.helperService.showCustomModal(HelperService, { someData: 'data' }, true);
  
    this.router.navigate(['qr']);
  }
}
