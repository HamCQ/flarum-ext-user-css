(()=>{var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const t=flarum.core.compat["forum/app"];var n=e.n(t);const r=flarum.core.compat["components/UserPage"];var a=e.n(r);const s=flarum.core.compat["common/extend"],c=flarum.core.compat["common/components/SettingsPage"];var u=e.n(c);const i=flarum.core.compat["common/components/Switch"];var p=e.n(i);flarum.core.compat["common/components/FieldSet"];const d=flarum.core.compat["common/utils/ItemList"];var l=e.n(d);n().initializers.add("hamcq/usercss",(function(){(0,s.extend)(a().prototype,"oncreate",(function(){$("#app").css()})),(0,s.extend)(u().prototype,"settingsItems",(function(e){e.add("userPageCss",m("textaea",null))})),u().prototype.cssItems=function(){var e=this,o=new(l());return o.add("css-enable",p().component({onsubmit:function(o){e.userPageCssLoading=!0,e.user.savePreferences({userPageCss:o}).then((function(){e.userPageCssLoading=!1,m.redraw()}))},loading:this.userPageCssLoading},"自定义 CSS")),o}}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map