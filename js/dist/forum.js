(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const n=flarum.core.compat["forum/app"];var o=e.n(n);const r=flarum.core.compat["components/UserPage"];var a=e.n(r);const s=flarum.core.compat["common/extend"],c=flarum.core.compat["common/components/SettingsPage"];var l=e.n(c);const i=flarum.core.compat["common/components/FieldSet"];var u=e.n(i);const d=flarum.core.compat["common/utils/ItemList"];var y=e.n(d);const p=flarum.core.compat["common/components/Switch"];var f=e.n(p);o().initializers.add("hamcq/usercss",(function(){(0,s.extend)(a().prototype,"oncreate",(function(){if(this.user.data.attributes.myStyleEnable){var e=document.createElement("link");e.setAttribute("id","my_style"),e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",o().forum.attribute("apiUrl")+"/my_style/"+this.user.data.id),document.body.appendChild(e)}})),(0,s.extend)(a().prototype,"onremove",(function(){document.getElementById("my_style").remove()})),(0,s.extend)(l().prototype,"settingsItems",(function(e){e.add("userPageCss",u().component({label:"自定义 CSS",className:""},this.cssItems().toArray()))})),l().prototype.cssItems=function(){var e=this,t=new(y());return t.add("myStyle-enable",f().component({state:this.user.preferences().myStyleEnable,onchange:function(t){e.myStyleEnableLoading=!0,e.user.savePreferences({myStyleEnable:t}).then((function(){e.myStyleEnableLoading=!1,m.redraw()}))},loading:this.myStyleEnableLoading},"使用自定义 CSS")),t.add("css-enable",m("textarea",{className:"FormControl",style:"width:380px",disabled:this.disabled,onchange:function(t){return e.myStyle=t.target.value},onblur:function(){e.disabled=!0,e.user.savePreferences({myStyle:e.myStyle}).then((function(){m.redraw()})),e.disabled=!1},rows:"10"},this.user.preferences().myStyle)),t}}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map