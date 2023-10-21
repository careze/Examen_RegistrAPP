import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  nombre:any;
  correo:any;


  constructor(
            private alertService: AlertController,
            private router: Router,
            private helperService: HelperService,
            private storage:StorageService,
            private auth:AngularFireAuth,
            private helper:HelperService,


   
  ) { }

  ngOnInit() {

    this.cargarUsuario();
  }

  async logout() {
    const confirmLogout = await this.helperService.showConfirm('¿Estás seguro de que deseas salir?', 'Sí', 'No');
    if (confirmLogout) {
     
      this.router.navigate(['/home']);
    }
  }
  async saveProfileChanges() {
    await this.helperService.showToast('Cambios en el perfil guardados con éxito');
  }

  async cargaUsaurios(){
    console.log("USUARIOS", await this.storage.obtenerUsuarios());
  }

  async clearCache() {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      cacheNames.forEach(async (cacheName) => {
        await caches.delete(cacheName);
      });
      console.log('Caché borrada correctamente.');
    } else {
      console.log('El navegador no admite la gestión de caché.');
    }
  }

  async onClearCacheClick() {
    await this.clearCache();
  }


async cargarUsuario() {
    console.log("USUARIO STORAGE", await this.storage.obtenerUsuarios());
    console.log("PROPIEDAD SERVICE STORAGE", this.storage.correoUsuario);
  
    const currentUser = await this.auth.currentUser;
  
    if (currentUser) {
      const user = (await this.storage.obtenerUsuarios()).find(e => e.correo === currentUser.email);
  
      if (user) {
        console.log("hola");
        this.nombre = user.nombre; 
        this.correo = currentUser.email; 
        console.log(this.correo)
      } else {

      }
    } else {
  
    }
} 
 }