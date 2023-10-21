"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[100],{100:(y,d,i)=>{i.r(d),i.d(d,{MenuPageModule:()=>b});var f=i(6814),m=i(95),t=i(7027),u=i(4875),s=i(5861),e=i(5879),h=i(7862),p=i(2397),Z=i(7698);const v=[{path:"",component:(()=>{var n;class c{constructor(o,r,a,g,P,U){this.alertService=o,this.router=r,this.helperService=a,this.storage=g,this.auth=P,this.helper=U}ngOnInit(){this.cargarUsuario()}logout(){var o=this;return(0,s.Z)(function*(){(yield o.helperService.showConfirm("\xbfEst\xe1s seguro de que deseas salir?","S\xed","No"))&&o.router.navigate(["/home"])})()}saveProfileChanges(){var o=this;return(0,s.Z)(function*(){yield o.helperService.showToast("Cambios en el perfil guardados con \xe9xito")})()}cargaUsaurios(){var o=this;return(0,s.Z)(function*(){console.log("USUARIOS",yield o.storage.obtenerUsuarios())})()}clearCache(){return(0,s.Z)(function*(){"caches"in window?((yield caches.keys()).forEach(function(){var r=(0,s.Z)(function*(a){yield caches.delete(a)});return function(a){return r.apply(this,arguments)}}()),console.log("Cach\xe9 borrada correctamente.")):console.log("El navegador no admite la gesti\xf3n de cach\xe9.")})()}onClearCacheClick(){var o=this;return(0,s.Z)(function*(){yield o.clearCache()})()}cargarUsuario(){var o=this;return(0,s.Z)(function*(){console.log("USUARIO STORAGE",yield o.storage.obtenerUsuarios()),console.log("PROPIEDAD SERVICE STORAGE",o.storage.correoUsuario);const r=yield o.auth.currentUser;if(r){const a=(yield o.storage.obtenerUsuarios()).find(g=>g.correo===r.email);a&&(console.log("hola"),o.nombre=a.nombre,o.correo=r.email,console.log(o.correo))}})()}}return(n=c).\u0275fac=function(o){return new(o||n)(e.Y36(t.Br),e.Y36(u.F0),e.Y36(h.W),e.Y36(p.V),e.Y36(Z.zQ),e.Y36(h.W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-menu"]],decls:32,vars:4,consts:[[1,"header-card",3,"translucent"],["slot","start"],["routerLink","/login","icon","arrow-back"],[1,"custom-background",3,"fullscreen","click"],[1,"welcome-card","tertiary"],["name","settings",3,"click"],[1,"ion-text-center"],[1,"button-container"],["color","tertiary","routerLink","/escanear",1,"full-width-button"],["name","qr-code-outline","slot","start"],["color","tertiary","routerLink","/visualizar",1,"full-width-button"],["name","eye-outline","slot","start"],["color","danger",1,"full-width-button",3,"click"],["name","power-outline","slot","start"],["color","tertiary",1,"full-width-button",3,"click"],[1,"footer-content"],["size","6",1,"text-right"],["src","assets/img/logo.png"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Menu"),e.qZA()()(),e.TgZ(6,"ion-content",3),e.NdJ("click",function(){return r.cargaUsaurios}),e.TgZ(7,"div",4)(8,"h2"),e._uU(9),e.qZA(),e.TgZ(10,"h2"),e._uU(11),e.qZA(),e.TgZ(12,"ion-icon",5),e.NdJ("click",function(){return r.saveProfileChanges()}),e.qZA()(),e.TgZ(13,"ion-card-header")(14,"ion-card-title",6),e._uU(15,"Menu"),e.qZA()(),e.TgZ(16,"div",7)(17,"ion-button",8),e._UZ(18,"ion-icon",9),e._uU(19," Escanear "),e.qZA(),e.TgZ(20,"ion-button",10),e._UZ(21,"ion-icon",11),e._uU(22," Visualizar "),e.qZA(),e.TgZ(23,"ion-button",12),e.NdJ("click",function(){return r.logout()}),e._UZ(24,"ion-icon",13),e._uU(25," Desconectar "),e.qZA(),e.TgZ(26,"button",14),e.NdJ("click",function(){return r.onClearCacheClick()}),e._uU(27,"Borrar Cach\xe9"),e.qZA()(),e.TgZ(28,"ion-footer")(29,"ion-row",15)(30,"ion-col",16),e._UZ(31,"ion-img",17),e.qZA()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(3),e.hij("Bienvenido: ",r.nombre,""),e.xp6(2),e.hij("Correo: ",r.correo,""))},dependencies:[t.oU,t.YG,t.Sm,t.Zi,t.Dq,t.wI,t.W2,t.fr,t.Gu,t.gu,t.Xz,t.Nd,t.wd,t.sr,t.cs,t.YI,u.rH],styles:[".header-card[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;border-radius:8px;box-shadow:0 0 10px #0003}.custom-background[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#1A1A1A,#00377b,#FFB800);color:#fff;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.welcome-card[_ngcontent-%COMP%]{background-color:#00377b;color:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0003;text-align:center}.button-container[_ngcontent-%COMP%]{max-width:300px;width:200%;padding:16px;display:flex;flex-direction:column;gap:16px;text-align:center}.full-width-button[_ngcontent-%COMP%]{width:23rem}ion-footer[_ngcontent-%COMP%]{background-color:#333;color:#fff;position:fixed;bottom:0;width:100%;padding:20px}.footer-content[_ngcontent-%COMP%]{padding:10px}ion-img[_ngcontent-%COMP%]{width:110px;height:auto}"]}),c})()}];let M=(()=>{var n;class c{}return(n=c).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(v),u.Bz]}),c})(),b=(()=>{var n;class c{}return(n=c).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,m.u5,t.Pc,M]}),c})()}}]);