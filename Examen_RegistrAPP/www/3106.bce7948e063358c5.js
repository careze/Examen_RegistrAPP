"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3106],{3106:(v,l,t)=>{t.r(l),t.d(l,{EscanearPageModule:()=>E});var u=t(6814),d=t(95),o=t(7027),s=t(4875),g=t(5861);const f=(0,t(2726).fo)("BarcodeScanner",{web:()=>t.e(7111).then(t.bind(t,7111)).then(e=>new e.BarcodeScannerWeb)});var n=t(5879),h=t(7862);const p=[{path:"",component:(()=>{var e;class c{constructor(a,i){this.activatedRoute=a,this.helper=i}ngOnInit(){}scanner(){var a=this;return(0,g.Z)(function*(){a.resultQr=(yield f.scan()).code,console.log("obj QR",JSON.parse(a.resultQr))})()}}return(e=c).\u0275fac=function(a){return new(a||e)(n.Y36(s.gz),n.Y36(h.W))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-escanear"]],decls:13,vars:2,consts:[[3,"translucent"],["slot","start"],["routerLink","/menu","icon","arrow-back"],[3,"fullscreen"],[1,"ion-text-center","scanner-container"],["name","scan",1,"scanner-icon","mi-elemento"],["routerLink","/asistencia","color","tertiary","expand","full",3,"click"]],template:function(a,i){1&a&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Escanear"),n.qZA()()(),n.TgZ(6,"ion-content",3)(7,"div",4),n._UZ(8,"ion-icon",5),n.TgZ(9,"h2"),n._uU(10,"Esc\xe1ner"),n.qZA(),n.TgZ(11,"ion-button",6),n.NdJ("click",function(){return i.scanner()}),n._uU(12,"Escanear"),n.qZA()()()),2&a&&(n.Q6J("translucent",!0),n.xp6(6),n.Q6J("fullscreen",!0))},dependencies:[o.oU,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.wd,o.sr,o.cs,o.YI,s.rH],styles:[".header-card[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;border-radius:8px;box-shadow:0 0 10px #0003}ion-content[_ngcontent-%COMP%]{--background: linear-gradient(to bottom, #1A1A1A, #00377b, #FFB800);color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.scanner-container[_ngcontent-%COMP%]{margin-top:20px}.scanner-icon[_ngcontent-%COMP%]{font-size:100px;color:#007bff}.mi-elemento[_ngcontent-%COMP%]{width:100px;height:100px;animation:_ngcontent-%COMP%_miAnimacion 2s ease infinite}@keyframes _ngcontent-%COMP%_miAnimacion{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}"]}),c})()}];let P=(()=>{var e;class c{}return(e=c).\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.Bz.forChild(p),s.Bz]}),c})(),E=(()=>{var e;class c{}return(e=c).\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,d.u5,o.Pc,P]}),c})()}}]);