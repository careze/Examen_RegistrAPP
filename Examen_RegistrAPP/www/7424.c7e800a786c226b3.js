"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7424],{7424:(R,g,n)=>{n.r(g),n.d(g,{ResetPasswordPageModule:()=>w});var m=n(6814),i=n(95),t=n(7027),d=n(4875),p=n(5861),e=n(5879),P=n(7698),h=n(7862);const f=[{path:"",component:(()=>{var o;class a{constructor(r,s,c,u){this.auth=r,this.router=s,this.helper=c,this.helperService=u,this.correo=""}ngOnInit(){}resetPassword(){var r=this;return(0,p.Z)(function*(){const s=yield r.helper.showLoader("Cargando");if(""==r.correo)return yield s.dismiss(),void r.helper.showAlert("Debe ingresar un correo.","Error");try{yield r.auth.sendPasswordResetEmail(r.correo),yield r.helper.showAlert("Debe revisar su correo","Informaci\xf3n"),yield s.dismiss(),yield r.router.navigateByUrl("login")}catch(c){"auth/invalid-email"==c.code&&(yield s.dismiss(),yield r.helper.showAlert("El correo no es el correcto.","Error"))}})()}}return(o=a).\u0275fac=function(r){return new(r||o)(e.Y36(P.zQ),e.Y36(d.F0),e.Y36(h.W),e.Y36(h.W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-reset-password"]],decls:20,vars:3,consts:[[1,"custom-header",3,"translucent"],["slot","start"],["defaultHref","/login"],[1,"",3,"fullscreen"],[1,"custom-card","custom-background"],["position","floating"],["type","email","name","correo",3,"ngModel","ngModelChange"],["expand","full","color","tertiary",3,"click"]],template:function(r,s){1&r&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Recuperar Contrase\xf1a"),e.qZA(),e.TgZ(4,"ion-buttons",1),e._UZ(5,"ion-back-button",2),e.qZA()()(),e.TgZ(6,"ion-content",3)(7,"ion-card",4)(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),e._uU(11,"Recuperar Contrase\xf1a"),e.qZA()(),e.TgZ(12,"ion-card-content")(13,"form")(14,"ion-item")(15,"ion-label",5),e._uU(16,"Correo Electr\xf3nico"),e.qZA(),e.TgZ(17,"ion-input",6),e.NdJ("ngModelChange",function(u){return s.correo=u}),e.qZA()(),e.TgZ(18,"ion-button",7),e.NdJ("click",function(){return s.resetPassword()}),e._uU(19,"Enviar Correo de Recuperaci\xf3n"),e.qZA()()()()()()),2&r&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("ngModel",s.correo))},dependencies:[i._Y,i.JJ,i.JL,i.On,i.F,t.oU,t.YG,t.Sm,t.PM,t.FN,t.Zi,t.Dq,t.W2,t.Gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.j9,t.cs],styles:[".custom-background[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#1A1A1A,#00377b,#FFB800);color:#fff;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.custom-card[_ngcontent-%COMP%]{max-width:400px;border-radius:8px;box-shadow:0 0 10px #0003}ion-card-title[_ngcontent-%COMP%]{text-align:center}"]}),a})()}];let y=(()=>{var o;class a{}return(o=a).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),a})(),w=(()=>{var o;class a{}return(o=a).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,i.u5,t.Pc,y]}),a})()}}]);