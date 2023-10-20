import { Injectable } from '@angular/core';
import { Asignaturas } from '../models/asignaturas';


@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor() { }


  arrayasignaturas:Asignaturas[]=[  
    {
  asignatura:"ENG4567",
  docente:"Carlos Fernández",
  fecha:"24-09-2023",
  hora:"10:45",
  leccion:"Inglés Avanzado",
  sala:"Aula 205",
  seccion:"001D"
   },
   {
  asignatura:"HIS7890",
  docente:"Isabel Gómez",
  fecha:"25-09-2023",
  hora:"13:20",
  leccion:"Historia Contemporánea",
  sala:"Aula 301",
  seccion:"001D",
    },
    {
  asignatura:"BIO2345",
  docente:"Luis Ramirez",
  fecha:"26-09-2023",
  hora:"15:00",
  leccion:"Biología Celular",
  sala:"Laboratorio 7",
  seccion:"001D",
    },
    {
  asignatura:"CHE6789",
  docente:"Elena Torres",
  fecha:"27-09-2023",
  hora:"08:55",
  leccion:"Química Orgánica",
  sala:"Aula 110",
  seccion:"001D"
    }
    
  ] 
}
