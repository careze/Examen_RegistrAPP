import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Asignaturas } from 'src/app/models/asignaturas';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  leccion: string = "";
  indice: number = 0;
  hora: string = "";
  docente: string = "";
  fecha: string ="";
  sala: string = ""; 

  array: Asignaturas[] = this.asignaturaService.arrayasignaturas;

  constructor(
    private navCtrl: NavController,
    private asignaturaService: AsignaturasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.indice = this.activatedRoute.snapshot.params["indice"];
    this.leccion = this.array[this.indice].leccion;
    this.docente = this.array[this.indice].docente; 
    this.hora = this.array[this.indice].hora; 
    this.fecha = this.array[this.indice].fecha;
    this.sala = this.array[this.indice].sala;
  }
}