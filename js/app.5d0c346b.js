(function(){"use strict";var t={8247:function(t,n,o){var a=o(9242),s=o(3396),r=o(7139);const e=(0,s.Uk)(" | "),i=(0,s.Uk)("Home"),l=(0,s.Uk)(" | "),c=(0,s.Uk)("Shop"),u=(0,s.Uk)(" | "),d=(0,s.Uk)("Login"),p=(0,s.Uk)(" | "),m=(0,s.Uk)("Sing up"),f=(0,s.Uk)(" | ");function h(t,n,o,a,h,v){const w=(0,s.up)("router-link"),g=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",null,[e,(0,s.Wm)(w,{to:"/home"},{default:(0,s.w5)((()=>[i])),_:1}),l,(0,s.Wm)(w,{to:"/shop"},{default:(0,s.w5)((()=>[c])),_:1}),u,(0,s.Wm)(w,{to:"/login"},{default:(0,s.w5)((()=>[d])),_:1}),p,(0,s.Wm)(w,{to:"/singup"},{default:(0,s.w5)((()=>[m])),_:1}),f]),(0,s._)("div",{class:(0,r.C_)(["goTop iconfont ml-gotop",h.isTop?"goTopAfter":""]),onClick:n[0]||(n[0]=t=>v.goTop())},"Top",2),(0,s.Wm)(g)],64)}var v={data(){return{scrollNum:0,isTop:!1}},mounted(){window.addEventListener("scroll",(()=>{let t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;this.scrollNum=t,this.isTop=t>=100}))},methods:{goTop(){document.documentElement.scrollTop=0}}},w=o(89);const g=(0,w.Z)(v,[["render",h]]);var y=g,b=o(678),_=o.p+"img/img.f347fa9a.jpg";const C=(0,s.uE)('<h1>HiC 咖啡</h1><div class="frontPage container"><div class="contents row mt-5"><div class="col-md-6 pt-5 pb-5"><img alt="Vue logo" class="w-100" src="'+_+'"></div><div class="col-md-6 pt-5 pb-5"><h2>咖啡</h2><p>我就喜歡喝咖啡</p></div></div></div>',2);function k(t,n){return C}const P={},U=(0,w.Z)(P,[["render",k]]);var D=U;const j={class:"container"},T=(0,s._)("h1",null,"註冊帳號",-1),O={class:"row g-3 needs-validation",novalidate:""},x={class:"col-md-12"},E=(0,s._)("label",{for:"validationCustom03",class:"form-label"},"帳號",-1),q=(0,s._)("div",{class:"invalid-feedback"},"請輸入帳號",-1),S={class:"col-md-12"},A=(0,s._)("label",{for:"validationCustom03",class:"form-label"},"信箱",-1),V=(0,s._)("div",{class:"invalid-feedback"},"請輸入正確的信箱格式",-1),Z={class:"col-md-12"},F=(0,s._)("label",{for:"validationCustom03",class:"form-label"},"密碼",-1),H=(0,s._)("div",{class:"invalid-feedback"},"請輸入密碼",-1),z={class:"col-12"},L={key:0,class:"col-12 mt-5"};function Y(t,n,o,r,e,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",j,[T,(0,s._)("form",O,[(0,s._)("div",x,[E,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>e.account=t),type:"text",class:"form-control",id:"validationCustom03",required:""},null,512),[[a.nr,e.account]]),q]),(0,s._)("div",S,[A,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>e.email=t),type:"email",class:"form-control",id:"validationCustom03",pattern:".+@gmail\\.com",required:""},null,512),[[a.nr,e.email]]),V]),(0,s._)("div",Z,[F,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[2]||(n[2]=t=>e.password=t),type:"password",class:"form-control",id:"validationCustom03",required:""},null,512),[[a.nr,e.password]]),H]),(0,s._)("div",z,[(0,s._)("button",{onClick:n[3]||(n[3]=(...t)=>i.login&&i.login(...t)),class:"btn btn-primary",type:"submit"}," 註冊 ")])])]),1==e.loginSuccess?((0,s.wg)(),(0,s.iD)("div",L,"註冊成功")):(0,s.kq)("",!0)],64)}var M=o(6265),W=o.n(M),I={data(){return{loginSuccess:!1,account:"",password:"",email:""}},methods:{login(){""!=this.account&&""!=this.password&&!0===this.email&&(this.loginSuccess=!0,alert("註冊成功"))}},mounted(){(()=>{const t=document.querySelectorAll(".needs-validation");Array.from(t).forEach((t=>{t.addEventListener("submit",(async n=>{if(t.checkValidity()){let t=new FormData;t.append("account",this.account),t.append("password",this.password),t.append("email",this.email);let{data:n}=await W().post("./singUp.php");1==n.status?this.success=!0:this.success=!1}else n.preventDefault(),n.stopPropagation();t.classList.add("was-validated")}),!1)}))})()}};const G=(0,w.Z)(I,[["render",Y]]);var K=G;const N={class:"container"},$=(0,s._)("h1",null,"登入帳號",-1),B={class:"row g-3 needs-validation",novalidate:""},J={class:"col-md-12"},Q=(0,s._)("label",{for:"validationCustom03",class:"form-label"},"帳號",-1),R=(0,s._)("div",{class:"invalid-feedback"},"請輸入帳號",-1),X={class:"col-md-12"},tt=(0,s._)("label",{for:"validationCustom03",class:"form-label"},"密碼",-1),nt=(0,s._)("div",{class:"invalid-feedback"},"請輸入密碼",-1),ot={class:"col-12"},at={key:0,class:"col-12 mt-5"};function st(t,n,o,r,e,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",N,[$,(0,s._)("form",B,[(0,s._)("div",J,[Q,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>e.account=t),type:"text",class:"form-control",id:"validationCustom03",required:""},null,512),[[a.nr,e.account]]),R]),(0,s._)("div",X,[tt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>e.password=t),type:"password",class:"form-control",id:"validationCustom03",required:""},null,512),[[a.nr,e.password]]),nt]),(0,s._)("div",ot,[(0,s._)("button",{onClick:n[2]||(n[2]=(...t)=>i.login&&i.login(...t)),class:"btn btn-primary",type:"submit"}," 登入 ")])])]),1==e.loginSuccess?((0,s.wg)(),(0,s.iD)("div",at,"登入成功")):(0,s.kq)("",!0)],64)}var rt={data(){return{loginSuccess:!1,account:"",password:""}},methods:{login(){""==this.account&&""==this.password||(this.loginSuccess=!0)}},mounted(){(()=>{const t=document.querySelectorAll(".needs-validation");Array.from(t).forEach((t=>{t.addEventListener("submit",(n=>{t.checkValidity()||(n.preventDefault(),n.stopPropagation()),t.classList.add("was-validated")}),!1)}))})()}};const et=(0,w.Z)(rt,[["render",st]]);var it=et;const lt=(0,s._)("h1",null,"商店",-1),ct={class:"d-flex flex-wrap container"};function ut(t,n,o,a,r,e){const i=(0,s.up)("Product");return(0,s.wg)(),(0,s.iD)("div",null,[lt,(0,s._)("a",{onClick:n[0]||(n[0]=t=>r.productFilter="all"),class:"btn btn-primary m-3",href:"javascript:;"},"所有商品"),(0,s._)("a",{onClick:n[1]||(n[1]=t=>r.productFilter="cart"),class:"btn btn-primary",href:"javascript:;"},"結帳頁面"),(0,s._)("ul",ct,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.allProduct,(t=>((0,s.wg)(),(0,s.j4)(i,(0,s.dG)({onAddCart:e.putInMyCart,key:t.id},t),null,16,["onAddCart"])))),128))]),"cart"==r.productFilter?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn",onClick:n[2]||(n[2]=(...t)=>e.pay&&e.pay(...t))},"結帳")):(0,s.kq)("",!0)])}const dt={class:"products card col-md-3 p-3 m-5"},pt=(0,s._)("img",{class:"w-100",src:_,alt:""},null,-1),mt={class:"card-body h-100"},ft={"card-title":""},ht={class:"my-2 d-flex justify-content-between"};function vt(t,n,o,a,e,i){return(0,s.wg)(),(0,s.iD)("li",dt,[pt,(0,s._)("div",mt,[(0,s._)("h5",ft,"品名: "+(0,r.zw)(o.name),1),(0,s._)("p",null,"產地: "+(0,r.zw)(o.origin),1),(0,s._)("p",null,"焙度: "+(0,r.zw)(o.roast),1),(0,s._)("p",null,"風味描述: "+(0,r.zw)(o.taste),1),(0,s._)("p",null,"每半磅售價: "+(0,r.zw)(o.price),1)]),(0,s._)("div",ht,[(0,s._)("button",{onClick:n[0]||(n[0]=(...t)=>i.reduceCount&&i.reduceCount(...t)),class:"btn btn-primary"},"-"),(0,s._)("span",null,(0,r.zw)(e.count),1),(0,s._)("button",{onClick:n[1]||(n[1]=(...t)=>i.addCount&&i.addCount(...t)),class:"btn btn-primary"},"+")]),(0,s._)("button",{onClick:n[2]||(n[2]=(...t)=>i.addCart&&i.addCart(...t)),class:"btn btn-primary"},"加到購物車")])}var wt={data(){return{count:0}},props:["name","origin","roast","taste","price","image","id"],methods:{addCart(){this.$emit("addCart",{id:this.id,count:this.count}),alert("成功加入購物車")},addCount(){this.count++,this.count=this.count>5?5:this.count},reduceCount(){this.count>0&&this.count--}}};const gt=(0,w.Z)(wt,[["render",vt]]);var yt=gt,bt={data(){return{products:[],productFilter:"all"}},computed:{allProduct(){switch(this.productFilter){case"all":return this.products;case"cart":let t=this.products.filter((t=>t.count>0));return t}}},methods:{putInMyCart(t){this.products.map((function(n){n.id==t.id&&(n.count=t.count)}))},pay(){let t=0;this.products.forEach((function(n){t+=n.price*n.count})),alert(`總額為${t}元`)}},components:{Product:yt},async mounted(){const t=await W().get("http://35.201.162.58/test.php");this.products=t.data,console.log(t),this.products.forEach((function(t){t.count=0}))}};const _t=(0,w.Z)(bt,[["render",ut]]);var Ct=_t;function kt(t,n,o,a,r,e){const i=(0,s.up)("cartPay");return(0,s.wg)(),(0,s.j4)(i,{onCartPay:e.setPay},null,8,["onCartPay"])}var Pt={data(){return{finalCartPay:[]}},components:{cartPay:Ct},methods:{setPay(t){this.finalCartPay.push(t)}}};const Ut=(0,w.Z)(Pt,[["render",kt]]);var Dt=Ut;const jt=(0,s._)("h1",null,"商店",-1),Tt={class:"d-flex flex-wrap container"};function Ot(t,n,o,a,r,e){const i=(0,s.up)("Product");return(0,s.wg)(),(0,s.iD)("div",null,[jt,(0,s._)("ul",Tt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.products,(t=>((0,s.wg)(),(0,s.j4)(i,(0,s.dG)({onAddCart:e.putInMyCart,key:t.id},t),null,16,["onAddCart"])))),128))])])}var xt={data(){return{products:[],myCart:[]}},methods:{putInMyCart(t){this.myCart.push(t),console.log(this.myCart)}},components:{Product:yt},async mounted(){const t=await W().get("http://35.201.162.58/test.php");this.products=t.data.coffee,console.log(this.products)}};const Et=(0,w.Z)(xt,[["render",Ot]]);var qt=Et;const St=[{path:"/home",name:"home",component:D},{path:"/singup",name:"singup",component:K},{path:"/login",name:"login",component:it},{path:"/shop",name:"shop",component:Ct},{path:"/cartPay",name:"cartPay",component:Dt},{path:"/test",name:"test",component:qt}],At=(0,b.p7)({history:(0,b.r5)(),routes:St});var Vt=At;(0,a.ri)(y).use(Vt).mount("#app")}},n={};function o(a){var s=n[a];if(void 0!==s)return s.exports;var r=n[a]={exports:{}};return t[a](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(n,a,s,r){if(!a){var e=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],r=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||e>=r)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(i=!1,r<e&&(e=r));if(i){t.splice(u--,1);var c=s();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,s,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var a in n)o.o(n,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,a){var s,r,e=a[0],i=a[1],l=a[2],c=0;if(e.some((function(n){return 0!==t[n]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var u=l(o)}for(n&&n(a);c<e.length;c++)r=e[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},a=self["webpackChunkclasswork"]=self["webpackChunkclasswork"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(8247)}));a=o.O(a)})();
//# sourceMappingURL=app.5d0c346b.js.map