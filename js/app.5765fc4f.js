(function(){"use strict";var t={2063:function(t,o,n){var a=n(9242),r=n(3396),e=n(7139);function s(t,o,n,a,s,c){const l=(0,r.up)("navbarView"),i=(0,r.up)("router-view"),u=(0,r.up)("footerView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("div",{class:(0,e.C_)(["goTop iconfont ml-gotop",s.isTop?"goTopAfter":""]),onClick:o[0]||(o[0]=t=>c.goTop())},"Top",2),(0,r.Wm)(i),(0,r.Wm)(u)],64)}const c={class:"container"},l={class:"navbar mb-5"},i=(0,r.Uk)(" | "),u=(0,r.Uk)("Home"),d=(0,r.Uk)(" | "),p=(0,r.Uk)("Shop"),m=(0,r.Uk)(" | "),h=(0,r.Uk)("Login"),f=(0,r.Uk)(" | "),g=(0,r.Uk)("Sign up"),v=(0,r.Uk)(" | ");function w(t,o){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("nav",l,[i,(0,r.Wm)(n,{to:"/home"},{default:(0,r.w5)((()=>[u])),_:1}),d,(0,r.Wm)(n,{to:"/shop"},{default:(0,r.w5)((()=>[p])),_:1}),m,(0,r.Wm)(n,{to:"/login"},{default:(0,r.w5)((()=>[h])),_:1}),f,(0,r.Wm)(n,{to:"/signup"},{default:(0,r.w5)((()=>[g])),_:1}),v])])}var y=n(89);const b={},_=(0,y.Z)(b,[["render",w]]);var C=_;const k={class:"copyright"};function F(t,o,n,a,e,s){return(0,r.wg)(),(0,r.iD)("div",k," HiC © 2022 沒有版權，沒人想印 ")}var P={};const O=(0,y.Z)(P,[["render",F],["__scopeId","data-v-2fe4d8a3"]]);var S=O,T={components:{navbarView:C,footerView:S},data(){return{scrollNum:0,isTop:!1}},mounted(){window.addEventListener("scroll",(()=>{let t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;this.scrollNum=t,this.isTop=t>=100}))},methods:{goTop(){document.documentElement.scrollTop=0}}};const j=(0,y.Z)(T,[["render",s]]);var D=j,E=n(678),U=n.p+"img/img.f347fa9a.jpg";const V=(0,r.uE)('<h1>HiC 咖啡</h1><div class="frontPage container"><div class="contents row mt-5"><div class="col-md-6 pt-5 pb-5"><img alt="Vue logo" class="w-100" src="'+U+'"></div><div class="col-md-6 pt-5 pb-5"><h2>咖啡</h2><p>我就喜歡喝咖啡</p></div></div></div>',2);function I(t,o){return V}const A={},x=(0,y.Z)(A,[["render",I]]);var Z=x;const W={class:"container"},K=(0,r._)("h1",null,"註冊帳號",-1),z={class:"row g-3 needs-validation",novalidate:""},H={class:"col-md-12"},M=(0,r._)("label",{for:"validationCustom03",class:"form-label"},"帳號",-1),Y=(0,r._)("div",{class:"invalid-feedback"},"請輸入帳號",-1),q={class:"col-md-12"},L=(0,r._)("label",{for:"validationCustom03",class:"form-label"},"信箱",-1),N=(0,r._)("div",{class:"invalid-feedback"},"請輸入正確的信箱格式",-1),G={class:"col-md-12"},J=(0,r._)("label",{for:"validationCustom03",class:"form-label"},"密碼",-1),B=(0,r._)("div",{class:"invalid-feedback"},"請輸入密碼",-1),R={id:"signupForm",class:"col-6"},X={class:"col-6"},Q={id:"logOutForm",class:"col-12 d-none"};function tt(t,o,n,e,s,c){const l=(0,r.up)("vue-recaptcha");return(0,r.wg)(),(0,r.iD)("div",W,[K,(0,r._)("form",z,[(0,r._)("div",H,[M,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.account=t),type:"text",class:"form-control",required:""},null,512),[[a.nr,s.account]]),Y]),(0,r._)("div",q,[L,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.email=t),type:"email",class:"form-control",pattern:".+@gmail\\.com",required:""},null,512),[[a.nr,s.email]]),N]),(0,r._)("div",G,[J,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.password=t),type:"password",class:"form-control",required:""},null,512),[[a.nr,s.password]]),B]),(0,r._)("div",R,[(0,r._)("button",{onClick:o[3]||(o[3]=(...t)=>c.signup&&c.signup(...t)),class:"btn btn-primary",type:"submit"}," 註冊 ")]),(0,r._)("div",X,[(0,r._)("button",{onClick:o[4]||(o[4]=(...t)=>c.cancel&&c.cancel(...t)),class:"btn btn-primary",type:"submit"}," 回首頁 ")]),(0,r._)("div",Q,[(0,r._)("button",{onClick:o[5]||(o[5]=(...t)=>c.logout&&c.logout(...t)),class:"btn btn-primary",type:"submit"}," 登出 ")])]),(0,r.Wm)(l,{sitekey:s.SITEKEY,"load-recaptcha-script":!0,onVerify:t.handleSuccess,onError:t.handleError},null,8,["sitekey","onVerify","onError"])])}var ot=n(6265),nt=n.n(ot),at=n(7676),rt={name:"signupView",components:{VueRecaptcha:at["default"]},data(){return{signUpSuccess:!1,account:"",password:"",email:"",SITEKEY:"6LcSmWYgAAAAAPbMWIVkPLdoEFjMCeSAeT8jKSzX"}},methods:{cancel(){this.$router.push("./home")},async signup(){let t=new FormData,o=this;t.append("account",o.account),t.append("password",o.password),t.append("email",o.email);let{data:n}=await nt().post("http://35.201.162.58/test/doSignup.php",t);1==n.status?(alert("註冊成功"),this.$router.push("./login"),$("#logOutForm").removeClass("d-none"),$("#signupForm").addClass("d-none")):alert("帳號已重複，請使用別的帳號")},logout(){localStorage.removeItem("userAccount"),$("#logOutForm").addClass("d-none"),$("#signupForm").removeClass("d-none"),this.$router.push("./home")}}};const et=(0,y.Z)(rt,[["render",tt]]);var st=et;const ct={class:"container"},lt=(0,r._)("h1",null,"登入帳號",-1),it={class:"row g-3 needs-validation",novalidate:""},ut={class:"col-md-12"},dt=(0,r._)("label",{class:"form-label"},"帳號",-1),pt=(0,r._)("div",{class:"invalid-feedback"},"請輸入帳號",-1),mt={class:"col-md-12"},ht=(0,r._)("label",{class:"form-label"},"密碼",-1),ft=(0,r._)("div",{class:"invalid-feedback"},"請輸入密碼",-1),gt={id:"signupForm",class:"col-12"},vt={id:"logOutForm",class:"col-12 d-none"};function wt(t,o,n,e,s,c){return(0,r.wg)(),(0,r.iD)("div",ct,[lt,(0,r._)("form",it,[(0,r._)("div",ut,[dt,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.account=t),type:"text",class:"form-control",required:""},null,512),[[a.nr,s.account]]),pt]),(0,r._)("div",mt,[ht,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.password=t),type:"password",class:"form-control",required:""},null,512),[[a.nr,s.password]]),ft]),(0,r._)("div",gt,[(0,r._)("button",{onClick:o[2]||(o[2]=(...t)=>c.login&&c.login(...t)),class:"btn btn-primary",type:"submit"},"登入")]),(0,r._)("div",vt,[(0,r._)("button",{onClick:o[3]||(o[3]=(...t)=>c.logout&&c.logout(...t)),class:"btn btn-primary",type:"submit"},"登出")])])])}var yt={data(){return{loginSuccess:!1,account:"",password:""}},methods:{async login(){let t=new FormData,o=this;t.append("account",o.account),t.append("password",o.password);let{data:n}=await nt().post("http://35.201.162.58/test/doLogin.php",t);console.log(o.account),console.log(n),1==n.status?(localStorage.setItem("token",JSON.stringify(n.userKey)),$("#logOutForm").removeClass("d-none"),$("#signupForm").addClass("d-none"),alert("成功配對,開始購物"),o.$router.push("./shop")):alert("帳號密碼有誤")},logout(){localStorage.removeItem("token"),$("#logOutForm").addClass("d-none"),$("#signupForm").removeClass("d-none"),this.$router.push("./home")}},mounted(){}};const bt=(0,y.Z)(yt,[["render",wt]]);var _t=bt;const Ct=(0,r._)("h1",null,"商店",-1),kt={class:"d-flex flex-wrap container"};function Ft(t,o,n,a,e,s){const c=(0,r.up)("Product");return(0,r.wg)(),(0,r.iD)("div",null,[Ct,(0,r._)("a",{onClick:o[0]||(o[0]=t=>e.productFilter="all"),class:"btn btn-primary m-3",href:"javascript:;"},"所有商品"),(0,r._)("a",{onClick:o[1]||(o[1]=t=>e.productFilter="cart"),class:"btn btn-primary",href:"javascript:;"},"我的選購"),(0,r._)("ul",kt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.allProduct,(t=>((0,r.wg)(),(0,r.j4)(c,(0,r.dG)({onAddCart:s.putInMyCart,key:t.id},t),null,16,["onAddCart"])))),128))]),"cart"==e.productFilter?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn",onClick:o[2]||(o[2]=(...t)=>s.pay&&s.pay(...t))},"結帳")):(0,r.kq)("",!0)])}const Pt={class:"products card col-md-3 p-3 m-5"},Ot=(0,r._)("img",{class:"w-100",src:U,alt:""},null,-1),St={class:"card-body h-100"},$t={"card-title":""},Tt={class:"my-2 d-flex justify-content-between"};function jt(t,o,n,a,s,c){return(0,r.wg)(),(0,r.iD)("li",Pt,[Ot,(0,r._)("div",St,[(0,r._)("h5",$t,"品名: "+(0,e.zw)(n.name),1),(0,r._)("p",null,"產地: "+(0,e.zw)(n.origin),1),(0,r._)("p",null,"焙度: "+(0,e.zw)(n.roast),1),(0,r._)("p",null,"風味描述: "+(0,e.zw)(n.taste),1),(0,r._)("p",null,"每半磅售價: "+(0,e.zw)(n.price),1)]),(0,r._)("div",Tt,[(0,r._)("button",{onClick:o[0]||(o[0]=(...t)=>c.reduceCount&&c.reduceCount(...t)),class:"btn btn-primary"},"-"),(0,r._)("span",null,(0,e.zw)(s.count),1),(0,r._)("button",{onClick:o[1]||(o[1]=(...t)=>c.addCount&&c.addCount(...t)),class:"btn btn-primary"},"+")]),(0,r._)("button",{onClick:o[2]||(o[2]=(...t)=>c.addCart&&c.addCart(...t)),class:"btn btn-primary"},"加到購物車")])}var Dt={data(){return{count:0}},props:["name","origin","roast","taste","price","image","products_id"],methods:{addCart(){this.$emit("addCart",{id:this.products_id,count:this.count}),alert("成功加入購物車")},addCount(){this.count++,this.count=this.count>5?5:this.count},reduceCount(){this.count>0&&this.count--}}};const Et=(0,y.Z)(Dt,[["render",jt]]);var Ut=Et,Vt={data(){return{products:[],productFilter:"all",token:""}},computed:{allProduct(){switch(this.productFilter){case"all":return this.products;case"cart":localStorage.setItem("productCount",JSON.stringify(this.products));let t=this.products.filter((t=>t.count>0));return t}}},methods:{putInMyCart(t){this.products.map((function(o){o.id==t.products_id&&(o.count=t.count)}))},async pay(){let t=0;this.products.forEach((function(o){t+=o.price*o.count}));let o=localStorage.getItem("token"),n=localStorage.getItem("productCount");data.append("token",o),data.append("productCount",n);let{data:a}=await nt().post("addCart.php",data);1==a.status?alert(`結帳成功，您的購物單號${a.cart_list_id}為總額為${t}元`):(alert("帳號認證錯誤，請重新登入"),this.$router.push("./login"))}},components:{Product:Ut},async mounted(){const t=await nt().get("http://35.201.162.58/test.php");this.products=t.data,console.log(t),this.products.forEach((function(t){t.count=0}))}};const It=(0,y.Z)(Vt,[["render",Ft]]);var At=It;function xt(t,o,n,a,e,s){const c=(0,r.up)("cartPay");return(0,r.wg)(),(0,r.j4)(c,{onCartPay:s.setPay},null,8,["onCartPay"])}var Zt={data(){return{finalCartPay:[]}},components:{cartPay:At},methods:{setPay(t){this.finalCartPay.push(t)}}};const Wt=(0,y.Z)(Zt,[["render",xt]]);var Kt=Wt;const zt=(0,r._)("h1",null,"商店",-1),Ht={class:"d-flex flex-wrap container"};function Mt(t,o,n,a,e,s){const c=(0,r.up)("Product");return(0,r.wg)(),(0,r.iD)("div",null,[zt,(0,r._)("ul",Ht,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.products,(t=>((0,r.wg)(),(0,r.j4)(c,(0,r.dG)({onAddCart:s.putInMyCart,key:t.id},t),null,16,["onAddCart"])))),128))])])}var Yt={data(){return{products:[],myCart:[]}},methods:{putInMyCart(t){this.myCart.push(t),console.log(this.myCart)}},components:{Product:Ut},async mounted(){const t=await nt().get("http://35.201.162.58/test.php");this.products=t.data.coffee,console.log(this.products)}};const qt=(0,y.Z)(Yt,[["render",Mt]]);var Lt=qt;const Nt={class:"container"},Gt=(0,r._)("h1",null,"歡迎來到HiC咖啡，點擊圖片進入首頁",-1);function Jt(t,o,n,a,e,s){return(0,r.wg)(),(0,r.iD)("div",Nt,[Gt,(0,r._)("img",{src:"https://i.imgur.com/3TKBKDf.jpg",alt:"",onClick:o[0]||(o[0]=(...t)=>s.push&&s.push(...t)),class:"pic"})])}var Bt={methods:{push(){this.$router.push("./home")}}};const Rt=(0,y.Z)(Bt,[["render",Jt]]);var Xt=Rt;const Qt=[{path:"/",name:"firstpage",component:Xt},{path:"/home",name:"home",component:Z},{path:"/signup",name:"signup",component:st},{path:"/login",name:"login",component:_t},{path:"/shop",name:"shop",component:At},{path:"/cartPay",name:"cartPay",component:Kt},{path:"/test",name:"test",component:Lt}],to=(0,E.p7)({history:(0,E.r5)(),routes:Qt});var oo=to;(0,a.ri)(D).use(oo).mount("#app")}},o={};function n(a){var r=o[a];if(void 0!==r)return r.exports;var e=o[a]={exports:{}};return t[a](e,e.exports,n),e.exports}n.m=t,function(){var t=[];n.O=function(o,a,r,e){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],e=t[u][2];for(var c=!0,l=0;l<a.length;l++)(!1&e||s>=e)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(c=!1,e<s&&(s=e));if(c){t.splice(u--,1);var i=r();void 0!==i&&(o=i)}}return o}e=e||0;for(var u=t.length;u>0&&t[u-1][2]>e;u--)t[u]=t[u-1];t[u]=[a,r,e]}}(),function(){n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,{a:o}),o}}(),function(){n.d=function(t,o){for(var a in o)n.o(o,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(o){return 0===t[o]};var o=function(o,a){var r,e,s=a[0],c=a[1],l=a[2],i=0;if(s.some((function(o){return 0!==t[o]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var u=l(n)}for(o&&o(a);i<s.length;i++)e=s[i],n.o(t,e)&&t[e]&&t[e][0](),t[e]=0;return n.O(u)},a=self["webpackChunkclasswork"]=self["webpackChunkclasswork"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2063)}));a=n.O(a)})();
//# sourceMappingURL=app.5765fc4f.js.map