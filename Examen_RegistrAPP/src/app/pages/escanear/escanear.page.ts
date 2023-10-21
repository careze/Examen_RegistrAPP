import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { HelperService } from 'src/app/services/helper.service';
import { Camera, CameraResultType } from '@capacitor/camera';



@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  resultQr: any;

  constructor(private activatedRoute:ActivatedRoute,
              private helper:HelperService) { }


 ngOnInit() {
  }

      async scanner(){
        this.resultQr  = (await BarcodeScanner.scan()).code;
        console.log("obj QR",JSON.parse(this.resultQr));
      }

      capturedImage: string | undefined;

      async takePicture() {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false, 
          resultType: CameraResultType.Uri,
        });
    
        this.capturedImage = image.webPath;
      }

      
}





