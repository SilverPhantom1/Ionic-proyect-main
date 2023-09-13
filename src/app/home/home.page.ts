import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = {
    nombre : "Dylan",
    contrasena : "1234",
   }
  nombre = ""
  contrasena = ""

  constructor(public toastController: ToastController, public routerLink: Router, public alertController:AlertController) {
    
  }
  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Bienvenido a Duoc UC '+this.nombre,
      duration: 1000,
      position: "middle"
    });
    toast.present()
  }
  
  async error(){
    const alert = await this.alertController.create({
      message : 'Datos incorrectos',
      buttons : ['Ok'],
    });
    await alert.present();
    
  }
  
  async ingresar(){
    if(this.nombre==this.usuario.nombre && this.contrasena==this.usuario.contrasena){
      await this.presentToast1()
      this.routerLink.navigate(['/inicio'])
    }
    else{
    await this.error();
    }
  }
}
