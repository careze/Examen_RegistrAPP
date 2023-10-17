import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { 


  usuario:string = "";
  contrasena:string = "";
  nombreDeUsuario: string="";


  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private storage:StorageService
              ) { }

ngOnInit() {


}
/* Resetea los valores escritos */
onReset() {
  this.usuario = '';
  this.contrasena = '';
}

/* Conecta los valores para ingresar */
async onLogin() {
  if (this.usuario == "") {
    alert("Debe ingresar un usuario");
    return;
  }
  if (this.contrasena == "") {
    alert("Debe ingresar una contraseña");
    return;
  }
  try {
    const userCredential = await this.auth.signInWithEmailAndPassword(
      this.usuario,
      this.contrasena 
    );

    if (userCredential.user) {
      this.nombreDeUsuario = this.usuario; 
      this.storage.correoUsuario = this.usuario;
      this.router.navigateByUrl('/menu');
    } else {
      alert("Usuario o contraseña incorrecta.");
    }
  } catch (error) {
    alert("Ocurrió un error durante el inicio de sesión.");
  }
}


/* Boton animado */
animateButton() {
  const button = document.getElementById('animatable-button');   
    if (button) {
        button.classList.add('clicked');
        setTimeout(() => {
        button.classList.remove('clicked');
      }, 300); 
    }
  }

  

  
 }