import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Asignaturas } from 'src/app/models/asignaturas';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  array:Asignaturas[]=this.asignaturaService.arrayasignaturas;
 
  indice:number=0;

  constructor(private router:Router,
              private modalController: ModalController,
              private asignaturaService:AsignaturasService,
              private activatedRoute :ActivatedRoute
              
             ) { }

  ngOnInit() {      

  }

  verAsignatura(indice:number
                ) {

    this.router.navigate(['/asignatura',indice,]);
  }



  
}

