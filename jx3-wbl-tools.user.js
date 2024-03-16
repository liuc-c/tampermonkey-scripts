// ==UserScript==
// @name         剑三万宝楼魔法书
// @namespace    jx3
// @version      1.0.4
// @author       方仟仟
// @description  万宝楼小助手
// @license      MIT
// @icon         https://jx3.seasunwbl.com/favicon.ico
// @homepage     https://github.com/liuc-c/tampermonkey-scripts#readme
// @homepageURL  https://github.com/liuc-c/tampermonkey-scripts#readme
// @source       https://github.com/liuc-c/tampermonkey-scripts.git
// @supportURL   https://github.com/liuc-c/tampermonkey-scripts/issues
// @match        https://jx3.seasunwbl.com/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.4.15/dist/vue.global.prod.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(` #tampermonkey-container{position:fixed;top:0;left:0;z-index:10}*,html,body{vertical-align:middle!important}.hover-loading{position:absolute;width:80px;padding:8px;aspect-ratio:1;border-radius:50%;background:#25b09b;--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:l3 1s infinite linear}@keyframes l3{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.hover-content{position:absolute;font-size:24px;color:#bfbfbf;-webkit-user-select:none;user-select:none}.popUpImgFixed{display:none;justify-content:center;align-items:center;background:url(//jx3wbl.xoyocdn.com/img/bg-empty.13dfbabf.png) center top no-repeat #f7fdff;position:fixed;z-index:99999;border:1px solid #69c3ca;border-radius:8px;color:transparent;-webkit-user-select:none;user-select:none;min-height:360px;min-width:640px}.popUpImg{min-height:360px;-webkit-user-drag:none}#--unocss--{layer:__ALL__}#qrcode[data-v-2bc39d75]{display:flex;width:300px;height:300px;background-color:#fff;box-shadow:0 0 4px 4px #1688ff;position:relative;border-radius:4px}#qrcode[data-v-2bc39d75]:before{position:absolute;content:"\u652F\u4ED8\u5B9D\u4E8C\u7EF4\u7801\u533A\u57DF";top:50%;left:50%;transform:translate(-50%,-50%)}*,*:before,*:after{box-sizing:inherit;-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent}html,body,#q-app{width:100%;direction:ltr}body.platform-ios.within-iframe,body.platform-ios.within-iframe #q-app{width:100px;min-width:100%}html,body{margin:0;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}img{border-style:none}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;font-family:inherit;margin:0}optgroup{font-weight:700}button,input,select{overflow:visible;text-transform:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}button:-moz-focusring,input:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.q-icon{line-height:1;width:1em;height:1em;flex-shrink:0;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;text-align:center;position:relative;box-sizing:content-box;fill:currentColor}.q-icon:before,.q-icon:after{width:100%;height:100%;display:flex!important;align-items:center;justify-content:center}.q-icon>svg,.q-icon>img{width:100%;height:100%}.q-icon,.material-icons,.material-icons-outlined,.material-icons-round,.material-icons-sharp,.material-symbols-outlined,.material-symbols-rounded,.material-symbols-sharp{-webkit-user-select:none;user-select:none;cursor:inherit;font-size:inherit;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.q-panel{height:100%;width:100%}.q-panel>div{height:100%;width:100%}.q-panel-parent{overflow:hidden;position:relative}.q-loading-bar{position:fixed;z-index:9998;transition:transform .5s cubic-bezier(0,0,.2,1),opacity .5s;background:#f44336}.q-loading-bar--top{left:0;right:0;top:0;width:100%}.q-loading-bar--bottom{left:0;right:0;bottom:0;width:100%}.q-loading-bar--right{top:0;bottom:0;right:0;height:100%}.q-loading-bar--left{top:0;bottom:0;left:0;height:100%}.q-avatar{position:relative;vertical-align:middle;display:inline-block;border-radius:50%;font-size:48px;height:1em;width:1em}.q-avatar__content{font-size:.5em;line-height:.5em}.q-avatar__content,.q-avatar img:not(.q-icon):not(.q-img__image){border-radius:inherit;height:inherit;width:inherit}.q-avatar--square{border-radius:0}.q-badge{background-color:var(--q-primary);color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;line-height:12px;min-height:12px;font-weight:400;vertical-align:baseline}.q-badge--single-line{white-space:nowrap}.q-badge--multi-line{word-break:break-all;word-wrap:break-word}.q-badge--floating{position:absolute;top:-4px;right:-3px;cursor:inherit}.q-badge--transparent{opacity:.8}.q-badge--outline{background-color:transparent;border:1px solid currentColor}.q-badge--rounded{border-radius:1em}.q-banner{min-height:54px;padding:8px 16px;background:#fff}.q-banner--top-padding{padding-top:14px}.q-banner__avatar{min-width:1px!important}.q-banner__avatar>.q-avatar{font-size:46px}.q-banner__avatar>.q-icon{font-size:40px}.q-banner__avatar:not(:empty)+.q-banner__content{padding-left:16px}.q-banner__actions.col-auto{padding-left:16px}.q-banner__actions.col-all .q-btn-item{margin:4px 0 0 4px}.q-banner--dense{min-height:32px;padding:8px}.q-banner--dense.q-banner--top-padding{padding-top:12px}.q-banner--dense .q-banner__avatar>.q-avatar,.q-banner--dense .q-banner__avatar>.q-icon{font-size:28px}.q-banner--dense .q-banner__avatar:not(:empty)+.q-banner__content{padding-left:8px}.q-banner--dense .q-banner__actions.col-auto{padding-left:8px}.q-bar{background:#0003}.q-bar>.q-icon{margin-left:2px}.q-bar>div,.q-bar>div+.q-icon{margin-left:8px}.q-bar>.q-btn{margin-left:2px}.q-bar>.q-icon:first-child,.q-bar>.q-btn:first-child,.q-bar>div:first-child{margin-left:0}.q-bar--standard{padding:0 12px;height:32px;font-size:18px}.q-bar--standard>div{font-size:16px}.q-bar--standard .q-btn{font-size:11px}.q-bar--dense{padding:0 8px;height:24px;font-size:14px}.q-bar--dense .q-btn{font-size:8px}.q-bar--dark{background:#ffffff26}.q-breadcrumbs__el{color:inherit}.q-breadcrumbs__el-icon{font-size:125%}.q-breadcrumbs__el-icon--with-label{margin-right:8px}[dir=rtl] .q-breadcrumbs__separator .q-icon{transform:scaleX(-1)}.q-btn{display:inline-flex;flex-direction:column;align-items:stretch;position:relative;outline:0;border:0;vertical-align:middle;font-size:14px;line-height:1.715em;text-decoration:none;color:inherit;background:transparent;font-weight:500;text-transform:uppercase;text-align:center;width:auto;height:auto;cursor:default;padding:4px 16px;min-height:2.572em}.q-btn .q-icon,.q-btn .q-spinner{font-size:1.715em}.q-btn.disabled{opacity:.7!important}.q-btn:before{content:"";display:block;position:absolute;left:0;right:0;top:0;bottom:0;border-radius:inherit;box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f}.q-btn--actionable{cursor:pointer}.q-btn--actionable.q-btn--standard:before{transition:box-shadow .3s cubic-bezier(.25,.8,.5,1)}.q-btn--actionable.q-btn--standard:active:before,.q-btn--actionable.q-btn--standard.q-btn--active:before{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.q-btn--no-uppercase{text-transform:none}.q-btn--rectangle{border-radius:3px}.q-btn--outline{background:transparent!important}.q-btn--outline:before{border:1px solid currentColor}.q-btn--push{border-radius:7px}.q-btn--push:before{border-bottom:3px solid rgba(0,0,0,.15)}.q-btn--push.q-btn--actionable{transition:transform .3s cubic-bezier(.25,.8,.5,1)}.q-btn--push.q-btn--actionable:before{transition:border-width .3s cubic-bezier(.25,.8,.5,1)}.q-btn--push.q-btn--actionable:active,.q-btn--push.q-btn--actionable.q-btn--active{transform:translateY(2px)}.q-btn--push.q-btn--actionable:active:before,.q-btn--push.q-btn--actionable.q-btn--active:before{border-bottom-width:0}.q-btn--rounded{border-radius:28px}.q-btn--round{border-radius:50%;padding:0;min-width:3em;min-height:3em}.q-btn--square{border-radius:0}.q-btn--flat:before,.q-btn--outline:before,.q-btn--unelevated:before{box-shadow:none}.q-btn--dense{padding:.285em;min-height:2em}.q-btn--dense.q-btn--round{padding:0;min-height:2.4em;min-width:2.4em}.q-btn--dense .on-left{margin-right:6px}.q-btn--dense .on-right{margin-left:6px}.q-btn--fab .q-icon,.q-btn--fab-mini .q-icon{font-size:24px}.q-btn--fab{padding:16px;min-height:56px;min-width:56px}.q-btn--fab .q-icon{margin:auto}.q-btn--fab-mini{padding:8px;min-height:40px;min-width:40px}.q-btn__content{transition:opacity .3s;z-index:0}.q-btn__content--hidden{opacity:0;pointer-events:none}.q-btn__progress{border-radius:inherit;z-index:0}.q-btn__progress-indicator{z-index:-1;transform:translate(-100%);background:#ffffff40}.q-btn__progress--dark .q-btn__progress-indicator{background:#0003}.q-btn--flat .q-btn__progress-indicator,.q-btn--outline .q-btn__progress-indicator{opacity:.2;background:currentColor}.q-btn-dropdown--split .q-btn-dropdown__arrow-container{padding:0 4px}.q-btn-dropdown--split .q-btn-dropdown__arrow-container.q-btn--outline{border-left:1px solid currentColor}.q-btn-dropdown--split .q-btn-dropdown__arrow-container:not(.q-btn--outline){border-left:1px solid rgba(255,255,255,.3)}.q-btn-dropdown--simple *+.q-btn-dropdown__arrow{margin-left:8px}.q-btn-dropdown__arrow{transition:transform .28s}.q-btn-dropdown--current{flex-grow:1}.q-btn-group{border-radius:3px;box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;vertical-align:middle}.q-btn-group>.q-btn-item{border-radius:inherit;align-self:stretch}.q-btn-group>.q-btn-item:before{box-shadow:none}.q-btn-group>.q-btn-item .q-badge--floating{right:0}.q-btn-group>.q-btn-group{box-shadow:none}.q-btn-group>.q-btn-group:first-child>.q-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.q-btn-group>.q-btn-group:last-child>.q-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.q-btn-group>.q-btn-group:not(:first-child)>.q-btn:first-child:before{border-left:0}.q-btn-group>.q-btn-group:not(:last-child)>.q-btn:last-child:before{border-right:0}.q-btn-group>.q-btn-item:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.q-btn-group>.q-btn-item:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.q-btn-group>.q-btn-item.q-btn--standard:before{z-index:-1}.q-btn-group--push{border-radius:7px}.q-btn-group--push>.q-btn--push.q-btn--actionable{transform:none}.q-btn-group--push>.q-btn--push.q-btn--actionable .q-btn__content{transition:margin-top .3s cubic-bezier(.25,.8,.5,1),margin-bottom .3s cubic-bezier(.25,.8,.5,1)}.q-btn-group--push>.q-btn--push.q-btn--actionable:active .q-btn__content,.q-btn-group--push>.q-btn--push.q-btn--actionable.q-btn--active .q-btn__content{margin-top:2px;margin-bottom:-2px}.q-btn-group--rounded{border-radius:28px}.q-btn-group--square{border-radius:0}.q-btn-group--flat,.q-btn-group--outline,.q-btn-group--unelevated{box-shadow:none}.q-btn-group--outline>.q-separator{display:none}.q-btn-group--outline>.q-btn-item+.q-btn-item:before{border-left:0}.q-btn-group--outline>.q-btn-item:not(:last-child):before{border-right:0}.q-btn-group--stretch{align-self:stretch;border-radius:0}.q-btn-group--glossy>.q-btn-item{background-image:linear-gradient(to bottom,#ffffff4d,#fff0 50%,#0000001f 51%,#0000000a)!important}.q-btn-group--spread>.q-btn-group{display:flex!important}.q-btn-group--spread>.q-btn-item,.q-btn-group--spread>.q-btn-group>.q-btn-item:not(.q-btn-dropdown__arrow-container){width:auto;min-width:0;max-width:100%;flex:10000 1 0%}.q-btn-toggle{position:relative}.q-card{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;border-radius:4px;vertical-align:top;background:#fff;position:relative}.q-card>div:not(.q--avoid-card-border),.q-card>img:not(.q--avoid-card-border){border-radius:0}.q-card>div:nth-child(1 of:not(.q--avoid-card-border)),.q-card>img:nth-child(1 of:not(.q--avoid-card-border)){border-top:0;border-top-left-radius:inherit;border-top-right-radius:inherit}.q-card>div:nth-last-child(1 of:not(.q--avoid-card-border)),.q-card>img:nth-last-child(1 of:not(.q--avoid-card-border)){border-bottom:0;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.q-card>div:not(.q--avoid-card-border){border-left:0;border-right:0;box-shadow:none}.q-card--bordered{border:1px solid rgba(0,0,0,.12)}.q-card--dark{border-color:#ffffff47;box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-card__section{position:relative}.q-card__section--vert{padding:16px}.q-card__section--horiz>div:not(.q--avoid-card-border),.q-card__section--horiz>img:not(.q--avoid-card-border){border-radius:0}.q-card__section--horiz>div:nth-child(1 of:not(.q--avoid-card-border)),.q-card__section--horiz>img:nth-child(1 of:not(.q--avoid-card-border)){border-top-left-radius:inherit;border-bottom-left-radius:inherit}.q-card__section--horiz>div:nth-last-child(1 of:not(.q--avoid-card-border)),.q-card__section--horiz>img:nth-last-child(1 of:not(.q--avoid-card-border)){border-top-right-radius:inherit;border-bottom-right-radius:inherit}.q-card__section--horiz>div:not(.q--avoid-card-border){border-top:0;border-bottom:0;box-shadow:none}.q-card__actions{padding:8px;align-items:center}.q-card__actions .q-btn--rectangle{padding:0 8px}.q-card__actions--horiz>.q-btn-item+.q-btn-item,.q-card__actions--horiz>.q-btn-group+.q-btn-item,.q-card__actions--horiz>.q-btn-item+.q-btn-group{margin-left:8px}.q-card__actions--vert>.q-btn-item.q-btn--round{align-self:center}.q-card__actions--vert>.q-btn-item+.q-btn-item,.q-card__actions--vert>.q-btn-group+.q-btn-item,.q-card__actions--vert>.q-btn-item+.q-btn-group{margin-top:4px}.q-card__actions--vert>.q-btn-group>.q-btn-item{flex-grow:1}.q-card>img{display:block;width:100%;max-width:100%;border:0}.q-carousel{background-color:#fff;height:400px}.q-carousel__slide{min-height:100%;background-size:cover;background-position:50%}.q-carousel__slide,.q-carousel .q-carousel--padding{padding:16px}.q-carousel__slides-container{height:100%}.q-carousel__control{color:#fff}.q-carousel__arrow{pointer-events:none}.q-carousel__arrow .q-icon{font-size:28px}.q-carousel__arrow .q-btn{pointer-events:all}.q-carousel__prev-arrow--horizontal,.q-carousel__next-arrow--horizontal{top:16px;bottom:16px}.q-carousel__prev-arrow--horizontal{left:16px}.q-carousel__next-arrow--horizontal{right:16px}.q-carousel__prev-arrow--vertical,.q-carousel__next-arrow--vertical{left:16px;right:16px}.q-carousel__prev-arrow--vertical{top:16px}.q-carousel__next-arrow--vertical{bottom:16px}.q-carousel__navigation--top,.q-carousel__navigation--bottom{left:16px;right:16px;overflow-x:auto;overflow-y:hidden}.q-carousel__navigation--top{top:16px}.q-carousel__navigation--bottom{bottom:16px}.q-carousel__navigation--left,.q-carousel__navigation--right{top:16px;bottom:16px;overflow-x:hidden;overflow-y:auto}.q-carousel__navigation--left>.q-carousel__navigation-inner,.q-carousel__navigation--right>.q-carousel__navigation-inner{flex-direction:column}.q-carousel__navigation--left{left:16px}.q-carousel__navigation--right{right:16px}.q-carousel__navigation-inner{flex:1 1 auto}.q-carousel__navigation .q-btn{margin:6px 4px;padding:5px}.q-carousel__navigation-icon--inactive{opacity:.7}.q-carousel .q-carousel__thumbnail{margin:2px;height:50px;width:auto;display:inline-block;cursor:pointer;border:1px solid transparent;border-radius:4px;vertical-align:middle;opacity:.7;transition:opacity .3s}.q-carousel .q-carousel__thumbnail:hover,.q-carousel .q-carousel__thumbnail--active{opacity:1}.q-carousel .q-carousel__thumbnail--active{border-color:currentColor;cursor:default}.q-carousel--navigation-top.q-carousel--with-padding .q-carousel__slide,.q-carousel--navigation-top .q-carousel--padding,.q-carousel--arrows-vertical.q-carousel--with-padding .q-carousel__slide,.q-carousel--arrows-vertical .q-carousel--padding{padding-top:60px}.q-carousel--navigation-bottom.q-carousel--with-padding .q-carousel__slide,.q-carousel--navigation-bottom .q-carousel--padding,.q-carousel--arrows-vertical.q-carousel--with-padding .q-carousel__slide,.q-carousel--arrows-vertical .q-carousel--padding{padding-bottom:60px}.q-carousel--navigation-left.q-carousel--with-padding .q-carousel__slide,.q-carousel--navigation-left .q-carousel--padding,.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide,.q-carousel--arrows-horizontal .q-carousel--padding{padding-left:60px}.q-carousel--navigation-right.q-carousel--with-padding .q-carousel__slide,.q-carousel--navigation-right .q-carousel--padding,.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide,.q-carousel--arrows-horizontal .q-carousel--padding{padding-right:60px}.q-carousel.fullscreen{height:100%}.q-message-name,.q-message-stamp,.q-message-label{font-size:small}.q-message-label{margin:24px 0;text-align:center}.q-message-stamp{color:inherit;margin-top:4px;opacity:.6;display:none}.q-message-avatar{border-radius:50%;width:48px;height:48px;min-width:48px}.q-message{margin-bottom:8px}.q-message:first-child .q-message-label{margin-top:0}.q-message-avatar--received{margin-right:8px}.q-message-text--received{color:#81c784;border-radius:4px 4px 4px 0}.q-message-text--received:last-child:before{right:100%;border-right:0 solid transparent;border-left:8px solid transparent;border-bottom:8px solid currentColor}.q-message-text-content--received{color:#000}.q-message-name--sent{text-align:right}.q-message-avatar--sent{margin-left:8px}.q-message-container--sent{flex-direction:row-reverse}.q-message-text--sent{color:#e0e0e0;border-radius:4px 4px 0}.q-message-text--sent:last-child:before{left:100%;border-left:0 solid transparent;border-right:8px solid transparent;border-bottom:8px solid currentColor}.q-message-text-content--sent{color:#000}.q-message-text{background:currentColor;padding:8px;line-height:1.2;word-break:break-word;position:relative}.q-message-text+.q-message-text{margin-top:3px}.q-message-text:last-child{min-height:48px}.q-message-text:last-child .q-message-stamp{display:block}.q-message-text:last-child:before{content:"";position:absolute;bottom:0;width:0;height:0}.q-checkbox{vertical-align:middle}.q-checkbox__native{width:1px;height:1px}.q-checkbox__bg,.q-checkbox__icon-container{-webkit-user-select:none;user-select:none}.q-checkbox__bg{top:25%;left:25%;width:50%;height:50%;border:2px solid currentColor;border-radius:2px;transition:background .22s cubic-bezier(0,0,.2,1) 0ms;-webkit-print-color-adjust:exact}.q-checkbox__icon{color:currentColor;font-size:.5em}.q-checkbox__svg{color:#fff}.q-checkbox__truthy{stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.q-checkbox__indet{fill:currentColor;transform-origin:50% 50%;transform:rotate(-280deg) scale(0)}.q-checkbox__inner{font-size:40px;width:1em;min-width:1em;height:1em;outline:0;border-radius:50%;color:#0000008a}.q-checkbox__inner--truthy,.q-checkbox__inner--indet{color:var(--q-primary)}.q-checkbox__inner--truthy .q-checkbox__bg,.q-checkbox__inner--indet .q-checkbox__bg{background:currentColor}.q-checkbox__inner--truthy path{stroke-dashoffset:0;transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms}.q-checkbox__inner--indet .q-checkbox__indet{transform:rotate(0) scale(1);transition:transform .22s cubic-bezier(0,0,.2,1) 0ms}.q-checkbox.disabled{opacity:.75!important}.q-checkbox--dark .q-checkbox__inner{color:#ffffffb3}.q-checkbox--dark .q-checkbox__inner:before{opacity:.32!important}.q-checkbox--dark .q-checkbox__inner--truthy,.q-checkbox--dark .q-checkbox__inner--indet{color:var(--q-primary)}.q-checkbox--dense .q-checkbox__inner{width:.5em;min-width:.5em;height:.5em}.q-checkbox--dense .q-checkbox__bg{left:5%;top:5%;width:90%;height:90%}.q-checkbox--dense .q-checkbox__label{padding-left:.5em}.q-checkbox--dense.reverse .q-checkbox__label{padding-left:0;padding-right:.5em}body.desktop .q-checkbox:not(.disabled) .q-checkbox__inner:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;background:currentColor;opacity:.12;transform:scale3d(0,0,1);transition:transform .22s cubic-bezier(0,0,.2,1)}body.desktop .q-checkbox:not(.disabled):focus .q-checkbox__inner:before,body.desktop .q-checkbox:not(.disabled):hover .q-checkbox__inner:before{transform:scaleZ(1)}body.desktop .q-checkbox--dense:not(.disabled):focus .q-checkbox__inner:before,body.desktop .q-checkbox--dense:not(.disabled):hover .q-checkbox__inner:before{transform:scale3d(1.4,1.4,1)}.q-chip{vertical-align:middle;border-radius:16px;outline:0;position:relative;height:2em;max-width:100%;margin:4px;background:#e0e0e0;color:#000000de;font-size:14px;padding:.5em .9em}.q-chip--colored .q-chip__icon,.q-chip--dark .q-chip__icon{color:inherit}.q-chip--outline{background:transparent!important;border:1px solid currentColor}.q-chip .q-avatar{font-size:2em;margin-left:-.45em;margin-right:.2em;border-radius:16px}.q-chip--selected .q-avatar{display:none}.q-chip__icon{color:#0000008a;font-size:1.5em;margin:-.2em}.q-chip__icon--left{margin-right:.2em}.q-chip__icon--right{margin-left:.2em}.q-chip__icon--remove{margin-left:.1em;margin-right:-.5em;opacity:.6;outline:0}.q-chip__icon--remove:hover,.q-chip__icon--remove:focus{opacity:1}.q-chip__content{white-space:nowrap}.q-chip--dense{border-radius:12px;padding:0 .4em;height:1.5em}.q-chip--dense .q-avatar{font-size:1.5em;margin-left:-.27em;margin-right:.1em;border-radius:12px}.q-chip--dense .q-chip__icon{font-size:1.25em}.q-chip--dense .q-chip__icon--left{margin-right:.195em}.q-chip--dense .q-chip__icon--remove{margin-right:-.25em}.q-chip--square{border-radius:4px}.q-chip--square .q-avatar{border-radius:3px 0 0 3px}body.desktop .q-chip--clickable:focus{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f}body.desktop.body--dark .q-chip--clickable:focus{box-shadow:0 1px 3px #fff3,0 1px 1px #ffffff24,0 2px 1px -1px #ffffff1f}.q-circular-progress{display:inline-block;position:relative;vertical-align:middle;width:1em;height:1em;line-height:1}.q-circular-progress.q-focusable{border-radius:50%}.q-circular-progress__svg{width:100%;height:100%}.q-circular-progress__text{font-size:.25em}.q-circular-progress--indeterminate .q-circular-progress__svg{transform-origin:50% 50%;animation:q-spin 2s linear infinite}.q-circular-progress--indeterminate .q-circular-progress__circle{stroke-dasharray:1 400;stroke-dashoffset:0;animation:q-circular-progress-circle 1.5s ease-in-out infinite}@keyframes q-circular-progress-circle{0%{stroke-dasharray:1,400;stroke-dashoffset:0}50%{stroke-dasharray:400,400;stroke-dashoffset:-100}to{stroke-dasharray:400,400;stroke-dashoffset:-300}}.q-color-picker{overflow:hidden;background:#fff;max-width:350px;vertical-align:top;min-width:180px;border-radius:4px;box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f}.q-color-picker .q-tab{padding:0!important}.q-color-picker--bordered{border:1px solid rgba(0,0,0,.12)}.q-color-picker__header-tabs{height:32px}.q-color-picker__header input{line-height:24px;border:0}.q-color-picker__header .q-tab{min-height:32px!important;height:32px!important}.q-color-picker__header .q-tab--inactive{background:linear-gradient(to top,#0000004d,#00000026 25%,#0000001a)}.q-color-picker__error-icon{bottom:2px;right:2px;font-size:24px;opacity:0;transition:opacity .3s ease-in}.q-color-picker__header-content{position:relative;background:#fff}.q-color-picker__header-content--light{color:#000}.q-color-picker__header-content--dark{color:#fff}.q-color-picker__header-content--dark .q-tab--inactive:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:#fff3}.q-color-picker__header-banner{height:36px}.q-color-picker__header-bg{background:#fff;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==)!important}.q-color-picker__footer{height:36px}.q-color-picker__footer .q-tab{min-height:36px!important;height:36px!important}.q-color-picker__footer .q-tab--inactive{background:linear-gradient(to bottom,#0000004d,#00000026 25%,#0000001a)}.q-color-picker__spectrum{width:100%;height:100%}.q-color-picker__spectrum-tab{padding:0!important}.q-color-picker__spectrum-white{background:linear-gradient(to right,#fff,#fff0)}.q-color-picker__spectrum-black{background:linear-gradient(to top,#000,#0000)}.q-color-picker__spectrum-circle{width:10px;height:10px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006;border-radius:50%;transform:translate(-5px,-5px)}.q-color-picker__hue .q-slider__track{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)!important;opacity:1}.q-color-picker__alpha .q-slider__track-container{padding-top:0}.q-color-picker__alpha .q-slider__track:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;background:linear-gradient(90deg,#fff0,#757575)}.q-color-picker__sliders{padding:0 16px}.q-color-picker__sliders .q-slider__thumb{color:#424242}.q-color-picker__sliders .q-slider__thumb path{stroke-width:2px;fill:transparent}.q-color-picker__sliders .q-slider--active path{stroke-width:3px}.q-color-picker__tune-tab .q-slider{margin-left:18px;margin-right:18px}.q-color-picker__tune-tab input{font-size:11px;border:1px solid #e0e0e0;border-radius:4px;width:3.5em}.q-color-picker__palette-tab{padding:0!important}.q-color-picker__palette-rows--editable .q-color-picker__cube{cursor:pointer}.q-color-picker__cube{padding-bottom:10%;width:10%!important}.q-color-picker input{color:inherit;background:transparent;outline:0;text-align:center}.q-color-picker .q-tabs{overflow:hidden}.q-color-picker .q-tab--active{box-shadow:0 0 14px 3px #0003}.q-color-picker .q-tab--active .q-focus-helper,.q-color-picker .q-tab__indicator{display:none}.q-color-picker .q-tab-panels{background:inherit}.q-color-picker--dark{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-color-picker--dark .q-color-picker__tune-tab input{border:1px solid rgba(255,255,255,.3)}.q-color-picker--dark .q-slider__thumb{color:#fafafa}.q-date{display:inline-flex;box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;border-radius:4px;background:#fff;width:290px;min-width:290px;max-width:100%}.q-date--bordered{border:1px solid rgba(0,0,0,.12)}.q-date__header{border-top-left-radius:inherit;color:#fff;background-color:var(--q-primary);padding:16px}.q-date__actions{padding:0 16px 16px}.q-date__content,.q-date__main{outline:0}.q-date__content .q-btn{font-weight:400}.q-date__header-link{opacity:.64;outline:0;transition:opacity .3s ease-out}.q-date__header-link--active,.q-date__header-link:hover,.q-date__header-link:focus{opacity:1}.q-date__header-subtitle{font-size:14px;line-height:1.75;letter-spacing:.00938em}.q-date__header-title-label{font-size:24px;line-height:1.2;letter-spacing:.00735em}.q-date__view{height:100%;width:100%;min-height:290px;padding:16px}.q-date__navigation{height:12.5%}.q-date__navigation>div:first-child{width:8%;min-width:24px;justify-content:flex-end}.q-date__navigation>div:last-child{width:8%;min-width:24px;justify-content:flex-start}.q-date__calendar-weekdays{height:12.5%}.q-date__calendar-weekdays>div{opacity:.38;font-size:12px}.q-date__calendar-item{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:14.285%!important;height:12.5%!important;position:relative;padding:1px}.q-date__calendar-item:after{content:"";position:absolute;pointer-events:none;top:1px;right:0;bottom:1px;left:0;border-style:dashed;border-color:transparent;border-width:1px}.q-date__calendar-item>div,.q-date__calendar-item button{width:30px;height:30px;border-radius:50%}.q-date__calendar-item>div{line-height:30px;text-align:center}.q-date__calendar-item>button{line-height:22px}.q-date__calendar-item--out{opacity:.18}.q-date__calendar-item--fill{visibility:hidden}.q-date__range:before,.q-date__range-from:before,.q-date__range-to:before{content:"";background-color:currentColor;position:absolute;top:1px;bottom:1px;left:0;right:0;opacity:.3}.q-date__range:nth-child(7n-6):before,.q-date__range-from:nth-child(7n-6):before,.q-date__range-to:nth-child(7n-6):before{border-top-left-radius:0;border-bottom-left-radius:0}.q-date__range:nth-child(7n):before,.q-date__range-from:nth-child(7n):before,.q-date__range-to:nth-child(7n):before{border-top-right-radius:0;border-bottom-right-radius:0}.q-date__range-from:before{left:50%}.q-date__range-to:before{right:50%}.q-date__edit-range:after{border-color:currentColor transparent}.q-date__edit-range:nth-child(7n-6):after{border-top-left-radius:0;border-bottom-left-radius:0}.q-date__edit-range:nth-child(7n):after{border-top-right-radius:0;border-bottom-right-radius:0}.q-date__edit-range-from:after,.q-date__edit-range-from-to:after{left:4px;border-left-color:currentColor;border-top-color:currentColor;border-bottom-color:currentColor;border-top-left-radius:28px;border-bottom-left-radius:28px}.q-date__edit-range-to:after,.q-date__edit-range-from-to:after{right:4px;border-right-color:currentColor;border-top-color:currentColor;border-bottom-color:currentColor;border-top-right-radius:28px;border-bottom-right-radius:28px}.q-date__calendar-days-container{height:75%;min-height:192px}.q-date__calendar-days>div{height:16.66%!important}.q-date__event{position:absolute;bottom:2px;left:50%;height:5px;width:8px;border-radius:5px;background-color:var(--q-secondary);transform:translate3d(-50%,0,0)}.q-date__today{box-shadow:0 0 1px 0 currentColor}.q-date__years-content{padding:0 8px}.q-date__years-item,.q-date__months-item{flex:0 0 33.3333%}.q-date.disabled .q-date__header,.q-date.disabled .q-date__content,.q-date--readonly .q-date__header,.q-date--readonly .q-date__content{pointer-events:none}.q-date--readonly .q-date__navigation{display:none}.q-date--portrait{flex-direction:column}.q-date--portrait-standard .q-date__content{height:calc(100% - 86px)}.q-date--portrait-standard .q-date__header{border-top-right-radius:inherit;height:86px}.q-date--portrait-standard .q-date__header-title{align-items:center;height:30px}.q-date--portrait-minimal .q-date__content{height:100%}.q-date--landscape{flex-direction:row;align-items:stretch;min-width:420px}.q-date--landscape>div{display:flex;flex-direction:column}.q-date--landscape .q-date__content{height:100%}.q-date--landscape-standard{min-width:420px}.q-date--landscape-standard .q-date__header{border-bottom-left-radius:inherit;min-width:110px;width:110px}.q-date--landscape-standard .q-date__header-title{flex-direction:column}.q-date--landscape-standard .q-date__header-today{margin-top:12px;margin-left:-8px}.q-date--landscape-minimal{width:310px}.q-date--dark{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f;border-color:#ffffff47}.q-dialog__title{font-size:1.25rem;font-weight:500;line-height:2rem;letter-spacing:.0125em}.q-dialog__progress{font-size:4rem}.q-dialog__inner{outline:0}.q-dialog__inner>div{pointer-events:all;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position;border-radius:4px}.q-dialog__inner--square>div{border-radius:0!important}.q-dialog__inner>.q-card>.q-card__actions .q-btn--rectangle{min-width:64px}.q-dialog__inner--minimized{padding:24px}.q-dialog__inner--minimized>div{max-height:calc(100vh - 48px)}.q-dialog__inner--maximized>div{height:100%;width:100%;max-height:100vh;max-width:100vw;border-radius:0!important;top:0!important;left:0!important}.q-dialog__inner--top,.q-dialog__inner--bottom{padding-top:0!important;padding-bottom:0!important}.q-dialog__inner--right,.q-dialog__inner--left{padding-right:0!important;padding-left:0!important}.q-dialog__inner--left:not(.q-dialog__inner--animating)>div,.q-dialog__inner--top:not(.q-dialog__inner--animating)>div{border-top-left-radius:0}.q-dialog__inner--right:not(.q-dialog__inner--animating)>div,.q-dialog__inner--top:not(.q-dialog__inner--animating)>div{border-top-right-radius:0}.q-dialog__inner--left:not(.q-dialog__inner--animating)>div,.q-dialog__inner--bottom:not(.q-dialog__inner--animating)>div{border-bottom-left-radius:0}.q-dialog__inner--right:not(.q-dialog__inner--animating)>div,.q-dialog__inner--bottom:not(.q-dialog__inner--animating)>div{border-bottom-right-radius:0}.q-dialog__inner--fullwidth>div{width:100%!important;max-width:100%!important}.q-dialog__inner--fullheight>div{height:100%!important;max-height:100%!important}.q-dialog__backdrop{z-index:-1;pointer-events:all;outline:0;background:#0006}body.platform-ios .q-dialog__inner--minimized>div,body.platform-android:not(.native-mobile) .q-dialog__inner--minimized>div{max-height:calc(100vh - 108px)}body.q-ios-padding .q-dialog__inner{padding-top:20px!important;padding-top:env(safe-area-inset-top)!important;padding-bottom:env(safe-area-inset-bottom)!important}body.q-ios-padding .q-dialog__inner>div{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))!important}@media (max-width: 599.98px){.q-dialog__inner--top,.q-dialog__inner--bottom{padding-left:0;padding-right:0}.q-dialog__inner--top>div,.q-dialog__inner--bottom>div{width:100%!important}}@media (min-width: 600px){.q-dialog__inner--minimized>div{max-width:560px}}.q-body--dialog{overflow:hidden}.q-bottom-sheet{padding-bottom:8px}.q-bottom-sheet__avatar{border-radius:50%}.q-bottom-sheet--list{width:400px}.q-bottom-sheet--list .q-icon,.q-bottom-sheet--list img{font-size:24px;width:24px;height:24px}.q-bottom-sheet--grid{width:700px}.q-bottom-sheet--grid .q-bottom-sheet__item{padding:8px;text-align:center;min-width:100px}.q-bottom-sheet--grid .q-icon,.q-bottom-sheet--grid img,.q-bottom-sheet--grid .q-bottom-sheet__empty-icon{font-size:48px;width:48px;height:48px;margin-bottom:8px}.q-bottom-sheet--grid .q-separator{margin:12px 0}.q-bottom-sheet__item{flex:0 0 33.3333%}@media (min-width: 600px){.q-bottom-sheet__item{flex:0 0 25%}}.q-dialog-plugin{width:400px}.q-dialog-plugin__form{max-height:50vh}.q-dialog-plugin .q-card__section+.q-card__section{padding-top:0}.q-dialog-plugin--progress{text-align:center}.q-editor{border:1px solid rgba(0,0,0,.12);border-radius:4px;background-color:#fff}.q-editor.disabled{border-style:dashed}.q-editor>div:first-child,.q-editor__toolbars-container,.q-editor__toolbars-container>div:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.q-editor__content{outline:0;padding:10px;min-height:10em;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;overflow:auto;max-width:100%}.q-editor__content pre{white-space:pre-wrap}.q-editor__content hr{border:0;outline:0;margin:1px;height:1px;background:#0000001f}.q-editor__content:empty:not(:focus):before{content:attr(placeholder);opacity:.7}.q-editor__toolbar{border-bottom:1px solid rgba(0,0,0,.12);min-height:32px}.q-editor__toolbars-container{max-width:100%}.q-editor .q-btn{margin:4px}.q-editor__toolbar-group{position:relative;margin:0 4px}.q-editor__toolbar-group+.q-editor__toolbar-group:before{content:"";position:absolute;left:-4px;top:4px;bottom:4px;width:1px;background:#0000001f}.q-editor__link-input{color:inherit;text-decoration:none;text-transform:none;border:none;border-radius:0;background:none;outline:0}.q-editor--flat,.q-editor--flat .q-editor__toolbar{border:0}.q-editor--dense .q-editor__toolbar-group{display:flex;align-items:center;flex-wrap:nowrap}.q-editor--dark{border-color:#ffffff47}.q-editor--dark .q-editor__content hr{background:#ffffff47}.q-editor--dark .q-editor__toolbar{border-color:#ffffff47}.q-editor--dark .q-editor__toolbar-group+.q-editor__toolbar-group:before{background:#ffffff47}.q-expansion-item__border{opacity:0}.q-expansion-item__toggle-icon{position:relative;transition:transform .3s}.q-expansion-item__toggle-icon--rotated{transform:rotate(180deg)}.q-expansion-item__toggle-focus{width:1em!important;height:1em!important;position:relative!important}.q-expansion-item__toggle-focus+.q-expansion-item__toggle-icon{margin-top:-1em}.q-expansion-item--standard.q-expansion-item--expanded>div>.q-expansion-item__border{opacity:1}.q-expansion-item--popup{transition:padding .5s}.q-expansion-item--popup>.q-expansion-item__container{border:1px solid rgba(0,0,0,.12)}.q-expansion-item--popup>.q-expansion-item__container>.q-separator{display:none}.q-expansion-item--popup.q-expansion-item--collapsed{padding:0 15px}.q-expansion-item--popup.q-expansion-item--expanded{padding:15px 0}.q-expansion-item--popup.q-expansion-item--expanded+.q-expansion-item--popup.q-expansion-item--expanded{padding-top:0}.q-expansion-item--popup.q-expansion-item--collapsed:not(:first-child)>.q-expansion-item__container{border-top-width:0}.q-expansion-item--popup.q-expansion-item--expanded+.q-expansion-item--popup.q-expansion-item--collapsed>.q-expansion-item__container{border-top-width:1px}.q-expansion-item__content>.q-card{box-shadow:none;border-radius:0}.q-expansion-item:first-child>div>.q-expansion-item__border--top{opacity:0}.q-expansion-item:last-child>div>.q-expansion-item__border--bottom{opacity:0}.q-expansion-item--expanded+.q-expansion-item--expanded>div>.q-expansion-item__border--top{opacity:0}.q-expansion-item--expanded .q-textarea--autogrow textarea{animation:q-expansion-done 0s}@keyframes q-expansion-done{0%{--q-exp-done: 1}}.z-fab{z-index:990}.q-fab{position:relative;vertical-align:middle}.q-fab>.q-btn{width:100%}.q-fab--form-rounded{border-radius:28px}.q-fab--form-square{border-radius:4px}.q-fab__icon,.q-fab__active-icon{transition:opacity .4s,transform .4s}.q-fab__icon{opacity:1;transform:rotate(0)}.q-fab__active-icon{opacity:0;transform:rotate(-180deg)}.q-fab__label--external{position:absolute;padding:0 8px;transition:opacity .18s cubic-bezier(.65,.815,.735,.395)}.q-fab__label--external-hidden{opacity:0;pointer-events:none}.q-fab__label--external-left{top:50%;left:-12px;transform:translate(-100%,-50%)}.q-fab__label--external-right{top:50%;right:-12px;transform:translate(100%,-50%)}.q-fab__label--external-bottom{bottom:-12px;left:50%;transform:translate(-50%,100%)}.q-fab__label--external-top{top:-12px;left:50%;transform:translate(-50%,-100%)}.q-fab__label--internal{padding:0;transition:font-size .12s cubic-bezier(.65,.815,.735,.395),max-height .12s cubic-bezier(.65,.815,.735,.395),opacity .07s cubic-bezier(.65,.815,.735,.395);max-height:30px}.q-fab__label--internal-hidden{font-size:0;opacity:0}.q-fab__label--internal-top{padding-bottom:.12em}.q-fab__label--internal-bottom{padding-top:.12em}.q-fab__label--internal-top.q-fab__label--internal-hidden,.q-fab__label--internal-bottom.q-fab__label--internal-hidden{max-height:0}.q-fab__label--internal-left{padding-left:.285em;padding-right:.571em}.q-fab__label--internal-right{padding-right:.285em;padding-left:.571em}.q-fab__icon-holder{min-width:24px;min-height:24px;position:relative}.q-fab__icon-holder--opened .q-fab__icon{transform:rotate(180deg);opacity:0}.q-fab__icon-holder--opened .q-fab__active-icon{transform:rotate(0);opacity:1}.q-fab__actions{position:absolute;opacity:0;transition:transform .18s ease-in,opacity .18s ease-in;pointer-events:none;align-items:center;justify-content:center;align-self:center;padding:3px}.q-fab__actions .q-btn{margin:5px}.q-fab__actions--right{transform-origin:0 50%;transform:scale(.4) translate(-62px);height:56px;left:100%;margin-left:9px}.q-fab__actions--left{transform-origin:100% 50%;transform:scale(.4) translate(62px);height:56px;right:100%;margin-right:9px;flex-direction:row-reverse}.q-fab__actions--up{transform-origin:50% 100%;transform:scale(.4) translateY(62px);width:56px;bottom:100%;margin-bottom:9px;flex-direction:column-reverse}.q-fab__actions--down{transform-origin:50% 0;transform:scale(.4) translateY(-62px);width:56px;top:100%;margin-top:9px;flex-direction:column}.q-fab__actions--up,.q-fab__actions--down{left:50%;margin-left:-28px}.q-fab__actions--opened{opacity:1;transform:scale(1) translate(.1px);pointer-events:all}.q-fab--align-left>.q-fab__actions--up,.q-fab--align-left>.q-fab__actions--down{align-items:flex-start;left:28px}.q-fab--align-right>.q-fab__actions--up,.q-fab--align-right>.q-fab__actions--down{align-items:flex-end;left:auto;right:0}.q-field{font-size:14px}.q-field ::-ms-clear,.q-field ::-ms-reveal{display:none}.q-field--with-bottom{padding-bottom:20px}.q-field__marginal{height:56px;color:#0000008a;font-size:24px}.q-field__marginal>*+*{margin-left:2px}.q-field__marginal .q-avatar{font-size:32px}.q-field__before,.q-field__prepend{padding-right:12px}.q-field__after,.q-field__append{padding-left:12px}.q-field__after:empty,.q-field__append:empty{display:none}.q-field__append+.q-field__append{padding-left:2px}.q-field__inner{text-align:left}.q-field__bottom{font-size:12px;min-height:20px;line-height:1;color:#0000008a;padding:8px 12px 0;backface-visibility:hidden}.q-field__bottom--animated{transform:translateY(100%);position:absolute;left:0;right:0;bottom:0}.q-field__messages{line-height:1}.q-field__messages>div{word-break:break-word;word-wrap:break-word;overflow-wrap:break-word}.q-field__messages>div+div{margin-top:4px}.q-field__counter{padding-left:8px;line-height:1}.q-field--item-aligned{padding:8px 16px}.q-field--item-aligned .q-field__before{min-width:56px}.q-field__control-container{height:inherit}.q-field__control{color:var(--q-primary);height:56px;max-width:100%;outline:none}.q-field__control:before,.q-field__control:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.q-field__control:before{border-radius:inherit}.q-field__shadow{top:8px;opacity:0;overflow:hidden;white-space:pre-wrap;transition:opacity .36s cubic-bezier(.4,0,.2,1)}.q-field__shadow+.q-field__native::placeholder{transition:opacity .36s cubic-bezier(.4,0,.2,1)}.q-field__shadow+.q-field__native:focus::placeholder{opacity:0}.q-field__native,.q-field__prefix,.q-field__suffix,.q-field__input{font-weight:400;line-height:28px;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;border:none;border-radius:0;background:none;color:#000000de;outline:0;padding:6px 0}.q-field__native,.q-field__input{width:100%;min-width:0;outline:0!important;-webkit-user-select:auto;user-select:auto}.q-field__native:-webkit-autofill,.q-field__input:-webkit-autofill{-webkit-animation-name:q-autofill;-webkit-animation-fill-mode:both}.q-field__native:-webkit-autofill+.q-field__label,.q-field__input:-webkit-autofill+.q-field__label{transform:translateY(-40%) scale(.75)}.q-field__native[type=color]+.q-field__label,.q-field__native[type=date]+.q-field__label,.q-field__native[type=datetime-local]+.q-field__label,.q-field__native[type=month]+.q-field__label,.q-field__native[type=time]+.q-field__label,.q-field__native[type=week]+.q-field__label,.q-field__input[type=color]+.q-field__label,.q-field__input[type=date]+.q-field__label,.q-field__input[type=datetime-local]+.q-field__label,.q-field__input[type=month]+.q-field__label,.q-field__input[type=time]+.q-field__label,.q-field__input[type=week]+.q-field__label{transform:translateY(-40%) scale(.75)}.q-field__native:invalid,.q-field__input:invalid{box-shadow:none}.q-field__native[type=file]{line-height:1em}.q-field__input{padding:0;height:0;min-height:24px;line-height:24px}.q-field__prefix,.q-field__suffix{transition:opacity .36s cubic-bezier(.4,0,.2,1);white-space:nowrap}.q-field__prefix{padding-right:4px}.q-field__suffix{padding-left:4px}.q-field--readonly .q-placeholder,.q-field--disabled .q-placeholder{opacity:1!important}.q-field--readonly.q-field--labeled .q-field__native,.q-field--readonly.q-field--labeled .q-field__input{cursor:default}.q-field--readonly.q-field--float .q-field__native,.q-field--readonly.q-field--float .q-field__input{cursor:text}.q-field--disabled .q-field__inner{cursor:not-allowed}.q-field--disabled .q-field__control{pointer-events:none}.q-field--disabled .q-field__control>div{opacity:.6!important}.q-field--disabled .q-field__control>div,.q-field--disabled .q-field__control>div *{outline:0!important}.q-field__label{left:0;top:18px;max-width:100%;color:#0009;font-size:16px;line-height:20px;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;transform-origin:left top;transition:transform .36s cubic-bezier(.4,0,.2,1),max-width .324s cubic-bezier(.4,0,.2,1);backface-visibility:hidden}.q-field--float .q-field__label{max-width:133%;transform:translateY(-40%) scale(.75);transition:transform .36s cubic-bezier(.4,0,.2,1),max-width .396s cubic-bezier(.4,0,.2,1)}.q-field--highlighted .q-field__label{color:currentColor}.q-field--highlighted .q-field__shadow{opacity:.5}.q-field--filled .q-field__control{padding:0 12px;background:#0000000d;border-radius:4px 4px 0 0}.q-field--filled .q-field__control:before{background:#0000000d;border-bottom:1px solid rgba(0,0,0,.42);opacity:0;transition:opacity .36s cubic-bezier(.4,0,.2,1),background .36s cubic-bezier(.4,0,.2,1)}.q-field--filled .q-field__control:hover:before{opacity:1}.q-field--filled .q-field__control:after{height:2px;top:auto;transform-origin:center bottom;transform:scale3d(0,1,1);background:currentColor;transition:transform .36s cubic-bezier(.4,0,.2,1)}.q-field--filled.q-field--rounded .q-field__control{border-radius:28px 28px 0 0}.q-field--filled.q-field--highlighted .q-field__control:before{opacity:1;background:#0000001f}.q-field--filled.q-field--highlighted .q-field__control:after{transform:scaleZ(1)}.q-field--filled.q-field--dark .q-field__control,.q-field--filled.q-field--dark .q-field__control:before{background:#ffffff12}.q-field--filled.q-field--dark.q-field--highlighted .q-field__control:before{background:#ffffff1a}.q-field--filled.q-field--readonly .q-field__control:before{opacity:1;background:transparent;border-bottom-style:dashed}.q-field--outlined .q-field__control{border-radius:4px;padding:0 12px}.q-field--outlined .q-field__control:before{border:1px solid rgba(0,0,0,.24);transition:border-color .36s cubic-bezier(.4,0,.2,1)}.q-field--outlined .q-field__control:hover:before{border-color:#000}.q-field--outlined .q-field__control:after{height:inherit;border-radius:inherit;border:2px solid transparent;transition:border-color .36s cubic-bezier(.4,0,.2,1)}.q-field--outlined .q-field__native:-webkit-autofill,.q-field--outlined .q-field__input:-webkit-autofill{margin-top:1px;margin-bottom:1px}.q-field--outlined.q-field--rounded .q-field__control{border-radius:28px}.q-field--outlined.q-field--highlighted .q-field__control:hover:before{border-color:transparent}.q-field--outlined.q-field--highlighted .q-field__control:after{border-color:currentColor;border-width:2px;transform:scaleZ(1)}.q-field--outlined.q-field--readonly .q-field__control:before{border-style:dashed}.q-field--standard .q-field__control:before{border-bottom:1px solid rgba(0,0,0,.24);transition:border-color .36s cubic-bezier(.4,0,.2,1)}.q-field--standard .q-field__control:hover:before{border-color:#000}.q-field--standard .q-field__control:after{height:2px;top:auto;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;transform-origin:center bottom;transform:scale3d(0,1,1);background:currentColor;transition:transform .36s cubic-bezier(.4,0,.2,1)}.q-field--standard.q-field--highlighted .q-field__control:after{transform:scaleZ(1)}.q-field--standard.q-field--readonly .q-field__control:before{border-bottom-style:dashed}.q-field--dark .q-field__control:before{border-color:#fff9}.q-field--dark .q-field__control:hover:before{border-color:#fff}.q-field--dark .q-field__native,.q-field--dark .q-field__prefix,.q-field--dark .q-field__suffix,.q-field--dark .q-field__input{color:#fff}.q-field--dark:not(.q-field--highlighted) .q-field__label,.q-field--dark .q-field__marginal,.q-field--dark .q-field__bottom{color:#ffffffb3}.q-field--standout .q-field__control{padding:0 12px;background:#0000000d;border-radius:4px;transition:box-shadow .36s cubic-bezier(.4,0,.2,1),background-color .36s cubic-bezier(.4,0,.2,1)}.q-field--standout .q-field__control:before{background:#00000012;opacity:0;transition:opacity .36s cubic-bezier(.4,0,.2,1),background .36s cubic-bezier(.4,0,.2,1)}.q-field--standout .q-field__control:hover:before{opacity:1}.q-field--standout.q-field--rounded .q-field__control{border-radius:28px}.q-field--standout.q-field--highlighted .q-field__control{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;background:#000}.q-field--standout.q-field--highlighted .q-field__native,.q-field--standout.q-field--highlighted .q-field__prefix,.q-field--standout.q-field--highlighted .q-field__suffix,.q-field--standout.q-field--highlighted .q-field__prepend,.q-field--standout.q-field--highlighted .q-field__append,.q-field--standout.q-field--highlighted .q-field__input{color:#fff}.q-field--standout.q-field--readonly .q-field__control:before{opacity:1;background:transparent;border:1px dashed rgba(0,0,0,.24)}.q-field--standout.q-field--dark .q-field__control{background:#ffffff12}.q-field--standout.q-field--dark .q-field__control:before{background:#ffffff12}.q-field--standout.q-field--dark.q-field--highlighted .q-field__control{background:#fff}.q-field--standout.q-field--dark.q-field--highlighted .q-field__native,.q-field--standout.q-field--dark.q-field--highlighted .q-field__prefix,.q-field--standout.q-field--dark.q-field--highlighted .q-field__suffix,.q-field--standout.q-field--dark.q-field--highlighted .q-field__prepend,.q-field--standout.q-field--dark.q-field--highlighted .q-field__append,.q-field--standout.q-field--dark.q-field--highlighted .q-field__input{color:#000}.q-field--standout.q-field--dark.q-field--readonly .q-field__control:before{border-color:#ffffff3d}.q-field--labeled .q-field__native,.q-field--labeled .q-field__prefix,.q-field--labeled .q-field__suffix{line-height:24px;padding-top:24px;padding-bottom:8px}.q-field--labeled .q-field__shadow{top:0}.q-field--labeled:not(.q-field--float) .q-field__prefix,.q-field--labeled:not(.q-field--float) .q-field__suffix{opacity:0}.q-field--labeled:not(.q-field--float) .q-field__native::placeholder,.q-field--labeled:not(.q-field--float) .q-field__input::placeholder{color:transparent}.q-field--labeled.q-field--dense .q-field__native,.q-field--labeled.q-field--dense .q-field__prefix,.q-field--labeled.q-field--dense .q-field__suffix{padding-top:14px;padding-bottom:2px}.q-field--dense .q-field__shadow{top:0}.q-field--dense .q-field__control,.q-field--dense .q-field__marginal{height:40px}.q-field--dense .q-field__bottom{font-size:11px}.q-field--dense .q-field__label{font-size:14px;top:10px}.q-field--dense .q-field__before,.q-field--dense .q-field__prepend{padding-right:6px}.q-field--dense .q-field__after,.q-field--dense .q-field__append{padding-left:6px}.q-field--dense .q-field__append+.q-field__append{padding-left:2px}.q-field--dense .q-field__marginal .q-avatar{font-size:24px}.q-field--dense.q-field--float .q-field__label{transform:translateY(-30%) scale(.75)}.q-field--dense .q-field__native:-webkit-autofill+.q-field__label,.q-field--dense .q-field__input:-webkit-autofill+.q-field__label{transform:translateY(-30%) scale(.75)}.q-field--dense .q-field__native[type=color]+.q-field__label,.q-field--dense .q-field__native[type=date]+.q-field__label,.q-field--dense .q-field__native[type=datetime-local]+.q-field__label,.q-field--dense .q-field__native[type=month]+.q-field__label,.q-field--dense .q-field__native[type=time]+.q-field__label,.q-field--dense .q-field__native[type=week]+.q-field__label,.q-field--dense .q-field__input[type=color]+.q-field__label,.q-field--dense .q-field__input[type=date]+.q-field__label,.q-field--dense .q-field__input[type=datetime-local]+.q-field__label,.q-field--dense .q-field__input[type=month]+.q-field__label,.q-field--dense .q-field__input[type=time]+.q-field__label,.q-field--dense .q-field__input[type=week]+.q-field__label{transform:translateY(-30%) scale(.75)}.q-field--borderless .q-field__bottom,.q-field--borderless.q-field--dense .q-field__control,.q-field--standard .q-field__bottom,.q-field--standard.q-field--dense .q-field__control{padding-left:0;padding-right:0}.q-field--error .q-field__label{animation:q-field-label .36s}.q-field--error .q-field__bottom{color:var(--q-negative)}.q-field__focusable-action{opacity:.6;cursor:pointer;outline:0!important;border:0;color:inherit;background:transparent;padding:0}.q-field__focusable-action:hover,.q-field__focusable-action:focus{opacity:1}.q-field--auto-height .q-field__control{height:auto}.q-field--auto-height .q-field__control,.q-field--auto-height .q-field__native{min-height:56px}.q-field--auto-height .q-field__native{align-items:center}.q-field--auto-height .q-field__control-container{padding-top:0}.q-field--auto-height .q-field__native,.q-field--auto-height .q-field__prefix,.q-field--auto-height .q-field__suffix{line-height:18px}.q-field--auto-height.q-field--labeled .q-field__control-container{padding-top:24px}.q-field--auto-height.q-field--labeled .q-field__shadow{top:24px}.q-field--auto-height.q-field--labeled .q-field__native,.q-field--auto-height.q-field--labeled .q-field__prefix,.q-field--auto-height.q-field--labeled .q-field__suffix{padding-top:0}.q-field--auto-height.q-field--labeled .q-field__native{min-height:24px}.q-field--auto-height.q-field--dense .q-field__control,.q-field--auto-height.q-field--dense .q-field__native{min-height:40px}.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container{padding-top:14px}.q-field--auto-height.q-field--dense.q-field--labeled .q-field__shadow{top:14px}.q-field--auto-height.q-field--dense.q-field--labeled .q-field__native{min-height:24px}.q-field--square .q-field__control{border-radius:0!important}.q-transition--field-message-enter-active,.q-transition--field-message-leave-active{transition:transform .6s cubic-bezier(.86,0,.07,1),opacity .6s cubic-bezier(.86,0,.07,1)}.q-transition--field-message-enter-from,.q-transition--field-message-leave-to{opacity:0;transform:translateY(-10px)}.q-transition--field-message-leave-from,.q-transition--field-message-leave-active{position:absolute}@keyframes q-field-label{40%{margin-left:2px}60%,80%{margin-left:-2px}70%,90%{margin-left:2px}}@keyframes q-autofill{to{background:transparent;color:inherit}}.q-file .q-field__native{word-break:break-all;overflow:hidden}.q-file .q-field__input{opacity:0!important}.q-file .q-field__input::-webkit-file-upload-button{cursor:pointer}.q-file__filler{visibility:hidden;width:100%;border:none;padding:0}.q-file__dnd{outline:1px dashed currentColor;outline-offset:-4px}.q-form{position:relative}.q-img{position:relative;width:100%;display:inline-block;vertical-align:middle;overflow:hidden}.q-img__loading .q-spinner{font-size:50px}.q-img__container{border-radius:inherit;font-size:0}.q-img__image{border-radius:inherit;width:100%;height:100%;opacity:0}.q-img__image--with-transition{transition:opacity .28s ease-in}.q-img__image--loaded{opacity:1}.q-img__content{border-radius:inherit;pointer-events:none}.q-img__content>div{pointer-events:all;position:absolute;padding:16px;color:#fff;background:#00000078}.q-img--no-menu .q-img__image,.q-img--no-menu .q-img__placeholder{pointer-events:none}.q-inner-loading{background:#fff9;border-radius:inherit}.q-inner-loading--dark{background:#0006}.q-inner-loading__label{margin-top:8px}.q-textarea .q-field__control{min-height:56px;height:auto}.q-textarea .q-field__control-container{padding-top:2px;padding-bottom:2px}.q-textarea .q-field__shadow{top:2px;bottom:2px}.q-textarea .q-field__native,.q-textarea .q-field__prefix,.q-textarea .q-field__suffix{line-height:18px}.q-textarea .q-field__native{resize:vertical;padding-top:17px;min-height:52px}.q-textarea.q-field--labeled .q-field__control-container{padding-top:26px}.q-textarea.q-field--labeled .q-field__shadow{top:26px}.q-textarea.q-field--labeled .q-field__native,.q-textarea.q-field--labeled .q-field__prefix,.q-textarea.q-field--labeled .q-field__suffix{padding-top:0}.q-textarea.q-field--labeled .q-field__native{min-height:26px;padding-top:1px}.q-textarea--autogrow .q-field__native{resize:none}.q-textarea.q-field--dense .q-field__control,.q-textarea.q-field--dense .q-field__native{min-height:36px}.q-textarea.q-field--dense .q-field__native{padding-top:9px}.q-textarea.q-field--dense.q-field--labeled .q-field__control-container{padding-top:14px}.q-textarea.q-field--dense.q-field--labeled .q-field__shadow{top:14px}.q-textarea.q-field--dense.q-field--labeled .q-field__native{min-height:24px;padding-top:3px}.q-textarea.q-field--dense.q-field--labeled .q-field__prefix,.q-textarea.q-field--dense.q-field--labeled .q-field__suffix{padding-top:2px}body.mobile .q-textarea .q-field__native,.q-textarea.disabled .q-field__native{resize:none}.q-intersection{position:relative}.q-item{min-height:48px;padding:8px 16px;color:inherit;transition:color .3s,background-color .3s}.q-item__section--side{color:#757575;align-items:flex-start;padding-right:16px;width:auto;min-width:0;max-width:100%}.q-item__section--side>.q-icon{font-size:24px}.q-item__section--side>.q-avatar{font-size:40px}.q-item__section--avatar{color:inherit;min-width:56px}.q-item__section--thumbnail img{width:100px;height:56px}.q-item__section--nowrap{white-space:nowrap}.q-item>.q-item__section--thumbnail:first-child,.q-item>.q-focus-helper+.q-item__section--thumbnail{margin-left:-16px}.q-item>.q-item__section--thumbnail:last-of-type{margin-right:-16px}.q-item__label{line-height:1.2em!important;max-width:100%}.q-item__label--overline{color:#000000b3}.q-item__label--caption{color:#0000008a}.q-item__label--header{color:#757575;padding:16px;font-size:.875rem;line-height:1.25rem;letter-spacing:.01786em}.q-separator--spaced+.q-item__label--header,.q-list--padding .q-item__label--header{padding-top:8px}.q-item__label+.q-item__label{margin-top:4px}.q-item__section--main{width:auto;min-width:0;max-width:100%;flex:10000 1 0%}.q-item__section--main+.q-item__section--main{margin-left:8px}.q-item__section--main~.q-item__section--side{align-items:flex-end;padding-right:0;padding-left:16px}.q-item__section--main.q-item__section--thumbnail{margin-left:0;margin-right:-16px}.q-list--bordered{border:1px solid rgba(0,0,0,.12)}.q-list--separator>.q-item-type+.q-item-type,.q-list--separator>.q-virtual-scroll__content>.q-item-type+.q-item-type{border-top:1px solid rgba(0,0,0,.12)}.q-list--padding{padding:8px 0}.q-list--dense>.q-item,.q-item--dense{min-height:32px;padding:2px 16px}.q-list--dark.q-list--separator>.q-item-type+.q-item-type,.q-list--dark.q-list--separator>.q-virtual-scroll__content>.q-item-type+.q-item-type{border-top-color:#ffffff47}.q-list--dark,.q-item--dark{color:#fff;border-color:#ffffff47}.q-list--dark .q-item__section--side:not(.q-item__section--avatar),.q-item--dark .q-item__section--side:not(.q-item__section--avatar){color:#ffffffb3}.q-list--dark .q-item__label--header,.q-item--dark .q-item__label--header{color:#ffffffa3}.q-list--dark .q-item__label--overline,.q-list--dark .q-item__label--caption,.q-item--dark .q-item__label--overline,.q-item--dark .q-item__label--caption{color:#fffc}.q-item{position:relative}.q-item.q-router-link--active,.q-item--active{color:var(--q-primary)}.q-knob{font-size:48px}.q-knob--editable{cursor:pointer;outline:0}.q-knob--editable:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;box-shadow:none;transition:box-shadow .24s ease-in-out}.q-knob--editable:focus:before{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f}body.body--dark .q-knob--editable:focus:before{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-layout{width:100%;outline:0}.q-layout-container{position:relative;width:100%;height:100%}.q-layout-container .q-layout{min-height:100%}.q-layout-container>div{transform:translateZ(0)}.q-layout-container>div>div{min-height:0;max-height:100%}.q-layout__shadow{width:100%}.q-layout__shadow:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:0 0 10px 2px #0003,0 0 10px #0000003d}.q-layout__section--marginal{background-color:var(--q-primary);color:#fff}.q-header--hidden{transform:translateY(-110%)}.q-header--bordered{border-bottom:1px solid rgba(0,0,0,.12)}.q-header .q-layout__shadow{bottom:-10px}.q-header .q-layout__shadow:after{bottom:10px}.q-footer--hidden{transform:translateY(110%)}.q-footer--bordered{border-top:1px solid rgba(0,0,0,.12)}.q-footer .q-layout__shadow{top:-10px}.q-footer .q-layout__shadow:after{top:10px}.q-header,.q-footer{z-index:2000}.q-drawer{position:absolute;top:0;bottom:0;background:#fff;z-index:1000}.q-drawer--on-top{z-index:3000}.q-drawer--left{left:0;transform:translate(-100%)}.q-drawer--left.q-drawer--bordered{border-right:1px solid rgba(0,0,0,.12)}.q-drawer--left .q-layout__shadow{left:10px;right:-10px}.q-drawer--left .q-layout__shadow:after{right:10px}.q-drawer--right{right:0;transform:translate(100%)}.q-drawer--right.q-drawer--bordered{border-left:1px solid rgba(0,0,0,.12)}.q-drawer--right .q-layout__shadow{left:-10px}.q-drawer--right .q-layout__shadow:after{left:10px}.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini{padding:0!important}.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item,.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item__section{text-align:center;justify-content:center;padding-left:0;padding-right:0;min-width:0}.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item__label,.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item__section--main,.q-drawer-container:not(.q-drawer--mini-animate) .q-drawer--mini .q-item__section--side~.q-item__section--side{display:none}.q-drawer--mini .q-mini-drawer-hide,.q-drawer--mini .q-expansion-item__content{display:none}.q-drawer--mini-animate .q-drawer__content{overflow-x:hidden!important;white-space:nowrap}.q-drawer--standard .q-mini-drawer-only,.q-drawer--mobile .q-mini-drawer-only,.q-drawer--mobile .q-mini-drawer-hide{display:none}.q-drawer__backdrop{z-index:2999!important;will-change:background-color}.q-drawer__opener{z-index:2001;height:100%;width:15px;-webkit-user-select:none;user-select:none}.q-layout,.q-header,.q-footer,.q-page{position:relative}.q-page-sticky--shrink{pointer-events:none}.q-page-sticky--shrink>div{display:inline-block;pointer-events:auto}body.q-ios-padding .q-layout--standard .q-header>.q-toolbar:nth-child(1),body.q-ios-padding .q-layout--standard .q-header>.q-tabs:nth-child(1) .q-tabs-head,body.q-ios-padding .q-layout--standard .q-drawer--top-padding .q-drawer__content{padding-top:20px;min-height:70px;padding-top:env(safe-area-inset-top);min-height:calc(env(safe-area-inset-top) + 50px)}body.q-ios-padding .q-layout--standard .q-footer>.q-toolbar:last-child,body.q-ios-padding .q-layout--standard .q-footer>.q-tabs:last-child .q-tabs-head,body.q-ios-padding .q-layout--standard .q-drawer--top-padding .q-drawer__content{padding-bottom:env(safe-area-inset-bottom);min-height:calc(env(safe-area-inset-bottom) + 50px)}.q-body--layout-animate .q-drawer__backdrop{transition:background-color .12s!important}.q-body--layout-animate .q-drawer{transition:transform .12s,width .12s,top .12s,bottom .12s!important}.q-body--layout-animate .q-layout__section--marginal{transition:transform .12s,left .12s,right .12s!important}.q-body--layout-animate .q-page-container{transition:padding-top .12s,padding-right .12s,padding-bottom .12s,padding-left .12s!important}.q-body--layout-animate .q-page-sticky{transition:transform .12s,left .12s,right .12s,top .12s,bottom .12s!important}body:not(.q-body--layout-animate) .q-layout--prevent-focus{visibility:hidden}.q-body--drawer-toggle{overflow-x:hidden!important}@media (max-width: 599.98px){.q-layout-padding{padding:8px}}@media (min-width: 600px) and (max-width: 1439.98px){.q-layout-padding{padding:16px}}@media (min-width: 1440px){.q-layout-padding{padding:24px}}body.body--dark .q-header,body.body--dark .q-footer,body.body--dark .q-drawer{border-color:#ffffff47}body.body--dark .q-layout__shadow:after{box-shadow:0 0 10px 2px #fff3,0 0 10px #ffffff3d}body.platform-ios .q-layout--containerized{position:unset!important}.q-linear-progress{--q-linear-progress-speed: .3s;position:relative;width:100%;overflow:hidden;font-size:4px;height:1em;color:var(--q-primary);transform:scaleZ(1)}.q-linear-progress__model,.q-linear-progress__track{transform-origin:0 0}.q-linear-progress__model--with-transition,.q-linear-progress__track--with-transition{transition:transform var(--q-linear-progress-speed)}.q-linear-progress--reverse .q-linear-progress__model,.q-linear-progress--reverse .q-linear-progress__track{transform-origin:0 100%}.q-linear-progress__model--determinate{background:currentColor}.q-linear-progress__model--indeterminate,.q-linear-progress__model--query{transition:none}.q-linear-progress__model--indeterminate:before,.q-linear-progress__model--indeterminate:after,.q-linear-progress__model--query:before,.q-linear-progress__model--query:after{background:currentColor;content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform-origin:0 0}.q-linear-progress__model--indeterminate:before,.q-linear-progress__model--query:before{animation:q-linear-progress--indeterminate 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.q-linear-progress__model--indeterminate:after,.q-linear-progress__model--query:after{transform:translate3d(-101%,0,0) scaleZ(1);animation:q-linear-progress--indeterminate-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}.q-linear-progress__track{opacity:.4}.q-linear-progress__track--light{background:#00000042}.q-linear-progress__track--dark{background:#fff9}.q-linear-progress__stripe{background-image:linear-gradient(45deg,#ffffff26 25%,#fff0 25%,#fff0 50%,#ffffff26 50%,#ffffff26 75%,#fff0 75%,#fff0)!important;background-size:40px 40px!important}.q-linear-progress__stripe--with-transition{transition:width var(--q-linear-progress-speed)}@keyframes q-linear-progress--indeterminate{0%{transform:translate3d(-35%,0,0) scale3d(.35,1,1)}60%{transform:translate3d(100%,0,0) scale3d(.9,1,1)}to{transform:translate3d(100%,0,0) scale3d(.9,1,1)}}@keyframes q-linear-progress--indeterminate-short{0%{transform:translate3d(-101%,0,0) scaleZ(1)}60%{transform:translate3d(107%,0,0) scale3d(.01,1,1)}to{transform:translate3d(107%,0,0) scale3d(.01,1,1)}}.q-menu{position:fixed!important;display:inline-block;max-width:95vw;box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;background:#fff;border-radius:4px;overflow-y:auto;overflow-x:hidden;outline:0;max-height:65vh;z-index:6000}.q-menu--square{border-radius:0}.q-menu--dark{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-option-group--inline>div{display:inline-block}.q-pagination input{text-align:center;-moz-appearance:textfield}.q-pagination input::-webkit-outer-spin-button,.q-pagination input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.q-pagination__content{--q-pagination-gutter-parent: -2px;--q-pagination-gutter-child: 2px;margin-top:var(--q-pagination-gutter-parent);margin-left:var(--q-pagination-gutter-parent)}.q-pagination__content>.q-btn,.q-pagination__content>.q-input,.q-pagination__middle>.q-btn{margin-top:var(--q-pagination-gutter-child);margin-left:var(--q-pagination-gutter-child)}.q-parallax{position:relative;width:100%;overflow:hidden;border-radius:inherit}.q-parallax__media>img,.q-parallax__media>video{position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;will-change:transform;display:none}.q-popup-edit{padding:8px 16px}.q-popup-edit__buttons{margin-top:8px}.q-popup-edit__buttons .q-btn+.q-btn{margin-left:8px}.q-pull-to-refresh{position:relative}.q-pull-to-refresh__puller{border-radius:50%;width:40px;height:40px;color:var(--q-primary);background:#fff;box-shadow:0 0 4px #0000004d}.q-pull-to-refresh__puller--animating{transition:transform .3s,opacity .3s}.q-radio{vertical-align:middle}.q-radio__native{width:1px;height:1px}.q-radio__bg,.q-radio__icon-container{-webkit-user-select:none;user-select:none}.q-radio__bg{top:25%;left:25%;width:50%;height:50%;-webkit-print-color-adjust:exact}.q-radio__bg path{fill:currentColor}.q-radio__icon{color:currentColor;font-size:.5em}.q-radio__check{transform-origin:50% 50%;transform:scale3d(0,0,1);transition:transform .22s cubic-bezier(0,0,.2,1) 0ms}.q-radio__inner{font-size:40px;width:1em;min-width:1em;height:1em;outline:0;border-radius:50%;color:#0000008a}.q-radio__inner--truthy{color:var(--q-primary)}.q-radio__inner--truthy .q-radio__check{transform:scaleZ(1)}.q-radio.disabled{opacity:.75!important}.q-radio--dark .q-radio__inner{color:#ffffffb3}.q-radio--dark .q-radio__inner:before{opacity:.32!important}.q-radio--dark .q-radio__inner--truthy{color:var(--q-primary)}.q-radio--dense .q-radio__inner{width:.5em;min-width:.5em;height:.5em}.q-radio--dense .q-radio__bg{left:0;top:0;width:100%;height:100%}.q-radio--dense .q-radio__label{padding-left:.5em}.q-radio--dense.reverse .q-radio__label{padding-left:0;padding-right:.5em}body.desktop .q-radio:not(.disabled) .q-radio__inner:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;background:currentColor;opacity:.12;transform:scale3d(0,0,1);transition:transform .22s cubic-bezier(0,0,.2,1) 0ms}body.desktop .q-radio:not(.disabled):focus .q-radio__inner:before,body.desktop .q-radio:not(.disabled):hover .q-radio__inner:before{transform:scaleZ(1)}body.desktop .q-radio--dense:not(.disabled):focus .q-radio__inner:before,body.desktop .q-radio--dense:not(.disabled):hover .q-radio__inner:before{transform:scale3d(1.5,1.5,1)}.q-rating{color:#ffeb3b;vertical-align:middle}.q-rating__icon-container{height:1em;outline:0}.q-rating__icon-container+.q-rating__icon-container{margin-left:2px}.q-rating__icon{color:currentColor;text-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);position:relative;opacity:.4;transition:transform .2s ease-in,opacity .2s ease-in}.q-rating__icon--hovered{transform:scale(1.3)}.q-rating__icon--active{opacity:1}.q-rating__icon--exselected{opacity:.7}.q-rating--no-dimming .q-rating__icon{opacity:1}.q-rating--editable .q-rating__icon-container{cursor:pointer}.q-responsive{position:relative;max-width:100%;max-height:100%}.q-responsive__filler{width:inherit;max-width:inherit;height:inherit;max-height:inherit}.q-responsive__content{border-radius:inherit}.q-responsive__content>*{width:100%!important;height:100%!important;max-height:100%!important;max-width:100%!important}.q-scrollarea{position:relative;contain:strict}.q-scrollarea__bar,.q-scrollarea__thumb{opacity:.2;transition:opacity .3s;will-change:opacity;cursor:grab}.q-scrollarea__bar--v,.q-scrollarea__thumb--v{right:0;width:10px}.q-scrollarea__bar--h,.q-scrollarea__thumb--h{bottom:0;height:10px}.q-scrollarea__bar--invisible,.q-scrollarea__thumb--invisible{opacity:0!important;pointer-events:none}.q-scrollarea__thumb{background:#000;border-radius:3px}.q-scrollarea__thumb:hover{opacity:.3}.q-scrollarea__thumb:active{opacity:.5}.q-scrollarea__content{min-height:100%;min-width:100%}.q-scrollarea--dark .q-scrollarea__thumb{background:#fff}.q-select--without-input .q-field__control{cursor:pointer}.q-select--with-input .q-field__control{cursor:text}.q-select .q-field__input{min-width:50px!important;cursor:text}.q-select .q-field__input--padding{padding-left:4px}.q-select__focus-target,.q-select__autocomplete-input{position:absolute;outline:0!important;width:1px;height:1px;padding:0;border:0;opacity:0}.q-select__dropdown-icon{cursor:pointer;transition:transform .28s}.q-select.q-field--readonly .q-field__control,.q-select.q-field--readonly .q-select__dropdown-icon{cursor:default}.q-select__dialog{width:90vw!important;max-width:90vw!important;max-height:calc(100vh - 70px)!important;background:#fff;display:flex;flex-direction:column}.q-select__dialog>.scroll{position:relative;background:inherit}body.mobile:not(.native-mobile) .q-select__dialog{max-height:calc(100vh - 108px)!important}body.platform-android.native-mobile .q-dialog__inner--top .q-select__dialog{max-height:calc(100vh - 24px)!important}body.platform-android:not(.native-mobile) .q-dialog__inner--top .q-select__dialog{max-height:calc(100vh - 80px)!important}body.platform-ios.native-mobile .q-dialog__inner--top>div{border-radius:4px}body.platform-ios.native-mobile .q-dialog__inner--top .q-select__dialog--focused{max-height:47vh!important}body.platform-ios:not(.native-mobile) .q-dialog__inner--top .q-select__dialog--focused{max-height:50vh!important}.q-separator{border:0;background:#0000001f;margin:0;transition:background .3s,opacity .3s;flex-shrink:0}.q-separator--dark{background:#ffffff47}.q-separator--horizontal{display:block;height:1px}.q-separator--horizontal-inset{margin-left:16px;margin-right:16px}.q-separator--horizontal-item-inset{margin-left:72px;margin-right:0}.q-separator--horizontal-item-thumbnail-inset{margin-left:116px;margin-right:0}.q-separator--vertical{width:1px;height:auto;align-self:stretch}.q-separator--vertical-inset{margin-top:8px;margin-bottom:8px}.q-skeleton{--q-skeleton-speed: 1.5s;background:#0000001f;border-radius:4px;box-sizing:border-box}.q-skeleton--anim{cursor:wait}.q-skeleton:before{content:"\xA0"}.q-skeleton--type-text{transform:scaleY(.5)}.q-skeleton--type-circle,.q-skeleton--type-QAvatar{height:48px;width:48px;border-radius:50%}.q-skeleton--type-QBtn{width:90px;height:36px}.q-skeleton--type-QBadge{width:70px;height:16px}.q-skeleton--type-QChip{width:90px;height:28px;border-radius:16px}.q-skeleton--type-QToolbar{height:50px}.q-skeleton--type-QCheckbox,.q-skeleton--type-QRadio{width:40px;height:40px;border-radius:50%}.q-skeleton--type-QToggle{width:56px;height:40px;border-radius:7px}.q-skeleton--type-QSlider,.q-skeleton--type-QRange{height:40px}.q-skeleton--type-QInput{height:56px}.q-skeleton--bordered{border:1px solid rgba(0,0,0,.05)}.q-skeleton--square{border-radius:0}.q-skeleton--anim-fade{animation:q-skeleton--fade var(--q-skeleton-speed) linear .5s infinite}.q-skeleton--anim-pulse{animation:q-skeleton--pulse var(--q-skeleton-speed) ease-in-out .5s infinite}.q-skeleton--anim-pulse-x{animation:q-skeleton--pulse-x var(--q-skeleton-speed) ease-in-out .5s infinite}.q-skeleton--anim-pulse-y{animation:q-skeleton--pulse-y var(--q-skeleton-speed) ease-in-out .5s infinite}.q-skeleton--anim-wave,.q-skeleton--anim-blink,.q-skeleton--anim-pop{position:relative;overflow:hidden;z-index:1}.q-skeleton--anim-wave:after,.q-skeleton--anim-blink:after,.q-skeleton--anim-pop:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0}.q-skeleton--anim-blink:after{background:#ffffffb3;animation:q-skeleton--fade var(--q-skeleton-speed) linear .5s infinite}.q-skeleton--anim-wave:after{background:linear-gradient(90deg,#fff0,#ffffff80,#fff0);animation:q-skeleton--wave var(--q-skeleton-speed) linear .5s infinite}.q-skeleton--dark{background:#ffffff0d}.q-skeleton--dark.q-skeleton--bordered{border:1px solid rgba(255,255,255,.25)}.q-skeleton--dark.q-skeleton--anim-wave:after{background:linear-gradient(90deg,#fff0,#ffffff1a,#fff0)}.q-skeleton--dark.q-skeleton--anim-blink:after{background:#fff3}@keyframes q-skeleton--fade{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes q-skeleton--pulse{0%{transform:scale(1)}50%{transform:scale(.85)}to{transform:scale(1)}}@keyframes q-skeleton--pulse-x{0%{transform:scaleX(1)}50%{transform:scaleX(.75)}to{transform:scaleX(1)}}@keyframes q-skeleton--pulse-y{0%{transform:scaleY(1)}50%{transform:scaleY(.75)}to{transform:scaleY(1)}}@keyframes q-skeleton--wave{0%{transform:translate(-100%)}to{transform:translate(100%)}}.q-slide-item{position:relative;background:#fff}.q-slide-item__left,.q-slide-item__right,.q-slide-item__top,.q-slide-item__bottom{visibility:hidden;font-size:14px;color:#fff}.q-slide-item__left .q-icon,.q-slide-item__right .q-icon,.q-slide-item__top .q-icon,.q-slide-item__bottom .q-icon{font-size:1.714em}.q-slide-item__left{background:#4caf50;padding:8px 16px}.q-slide-item__left>div{transform-origin:left center}.q-slide-item__right{background:#ff9800;padding:8px 16px}.q-slide-item__right>div{transform-origin:right center}.q-slide-item__top{background:#2196f3;padding:16px 8px}.q-slide-item__top>div{transform-origin:top center}.q-slide-item__bottom{background:#9c27b0;padding:16px 8px}.q-slide-item__bottom>div{transform-origin:bottom center}.q-slide-item__content{background:inherit;transition:transform .2s ease-in;-webkit-user-select:none;user-select:none;cursor:pointer}.q-slider{position:relative}.q-slider--h{width:100%}.q-slider--v{height:200px}.q-slider--editable .q-slider__track-container{cursor:grab}.q-slider__track-container{outline:0}.q-slider__track-container--h{width:100%;padding:12px 0}.q-slider__track-container--h .q-slider__selection{will-change:width,left}.q-slider__track-container--v{height:100%;padding:0 12px}.q-slider__track-container--v .q-slider__selection{will-change:height,top}.q-slider__track{color:var(--q-primary);background:#0000001a;border-radius:4px;width:inherit;height:inherit}.q-slider__inner{background:#0000001a;border-radius:inherit;width:100%;height:100%}.q-slider__selection{background:currentColor;border-radius:inherit;width:100%;height:100%}.q-slider__markers{color:#0000004d;border-radius:inherit;width:100%;height:100%}.q-slider__markers:after{content:"";position:absolute;background:currentColor}.q-slider__markers--h{background-image:repeating-linear-gradient(to right,currentColor,currentColor 2px,rgba(255,255,255,0) 0,rgba(255,255,255,0))}.q-slider__markers--h:after{height:100%;width:2px;top:0;right:0}.q-slider__markers--v{background-image:repeating-linear-gradient(to bottom,currentColor,currentColor 2px,rgba(255,255,255,0) 0,rgba(255,255,255,0))}.q-slider__markers--v:after{width:100%;height:2px;left:0;bottom:0}.q-slider__marker-labels-container{position:relative;width:100%;height:100%;min-height:24px;min-width:24px}.q-slider__marker-labels{position:absolute}.q-slider__marker-labels--h-standard{top:0}.q-slider__marker-labels--h-switched{bottom:0}.q-slider__marker-labels--h-ltr{transform:translate(-50%)}.q-slider__marker-labels--h-rtl{transform:translate(50%)}.q-slider__marker-labels--v-standard{left:4px}.q-slider__marker-labels--v-switched{right:4px}.q-slider__marker-labels--v-ltr{transform:translateY(-50%)}.q-slider__marker-labels--v-rtl{transform:translateY(50%)}.q-slider__thumb{z-index:1;outline:0;color:var(--q-primary);transition:transform .18s ease-out,fill .18s ease-out,stroke .18s ease-out}.q-slider__thumb.q-slider--focus{opacity:1!important}.q-slider__thumb--h{top:50%;will-change:left}.q-slider__thumb--h-ltr{transform:scale(1) translate(-50%,-50%)}.q-slider__thumb--h-rtl{transform:scale(1) translate(50%,-50%)}.q-slider__thumb--v{left:50%;will-change:top}.q-slider__thumb--v-ltr{transform:scale(1) translate(-50%,-50%)}.q-slider__thumb--v-rtl{transform:scale(1) translate(-50%,50%)}.q-slider__thumb-shape{top:0;left:0;stroke-width:3.5;stroke:currentColor;transition:transform .28s}.q-slider__thumb-shape path{stroke:currentColor;fill:currentColor}.q-slider__focus-ring{border-radius:50%;opacity:0;transition:transform .26667s ease-out,opacity .26667s ease-out,background-color .26667s ease-out;transition-delay:.14s}.q-slider__pin{opacity:0;white-space:nowrap;transition:opacity .28s ease-out;transition-delay:.14s}.q-slider__pin:before{content:"";width:0;height:0;position:absolute}.q-slider__pin--h:before{border-left:6px solid transparent;border-right:6px solid transparent;left:50%;transform:translate(-50%)}.q-slider__pin--h-standard{bottom:100%}.q-slider__pin--h-standard:before{bottom:2px;border-top:6px solid currentColor}.q-slider__pin--h-switched{top:100%}.q-slider__pin--h-switched:before{top:2px;border-bottom:6px solid currentColor}.q-slider__pin--v{top:0}.q-slider__pin--v:before{top:50%;transform:translateY(-50%);border-top:6px solid transparent;border-bottom:6px solid transparent}.q-slider__pin--v-standard{left:100%}.q-slider__pin--v-standard:before{left:2px;border-right:6px solid currentColor}.q-slider__pin--v-switched{right:100%}.q-slider__pin--v-switched:before{right:2px;border-left:6px solid currentColor}.q-slider__label{z-index:1;white-space:nowrap;position:absolute}.q-slider__label--h{left:50%;transform:translate(-50%)}.q-slider__label--h-standard{bottom:7px}.q-slider__label--h-switched{top:7px}.q-slider__label--v{top:50%;transform:translateY(-50%)}.q-slider__label--v-standard{left:7px}.q-slider__label--v-switched{right:7px}.q-slider__text-container{min-height:25px;padding:2px 8px;border-radius:4px;background:currentColor;position:relative;text-align:center}.q-slider__text{color:#fff;font-size:12px}.q-slider--no-value .q-slider__thumb,.q-slider--no-value .q-slider__inner,.q-slider--no-value .q-slider__selection{opacity:0}.q-slider--focus .q-slider__focus-ring,body.desktop .q-slider.q-slider--editable .q-slider__track-container:hover .q-slider__focus-ring{background:currentColor;transform:scale3d(1.55,1.55,1);opacity:.25}.q-slider--focus .q-slider__thumb,.q-slider--focus .q-slider__inner,.q-slider--focus .q-slider__selection,body.desktop .q-slider.q-slider--editable .q-slider__track-container:hover .q-slider__thumb,body.desktop .q-slider.q-slider--editable .q-slider__track-container:hover .q-slider__inner,body.desktop .q-slider.q-slider--editable .q-slider__track-container:hover .q-slider__selection{opacity:1}.q-slider--inactive .q-slider__thumb--h{transition:left .28s,right .28s}.q-slider--inactive .q-slider__thumb--v{transition:top .28s,bottom .28s}.q-slider--inactive .q-slider__selection{transition:width .28s,left .28s,right .28s,height .28s,top .28s,bottom .28s}.q-slider--inactive .q-slider__text-container{transition:transform .28s}.q-slider--active{cursor:grabbing}.q-slider--active .q-slider__thumb-shape{transform:scale(1.5)}.q-slider--active .q-slider__focus-ring,.q-slider--active.q-slider--label .q-slider__thumb-shape{transform:scale(0)!important}body.desktop .q-slider.q-slider--enabled .q-slider__track-container:hover .q-slider__pin,.q-slider--label.q-slider--active .q-slider__pin,.q-slider--label .q-slider--focus .q-slider__pin,.q-slider--label.q-slider--label-always .q-slider__pin{opacity:1}.q-slider--dark .q-slider__track,.q-slider--dark .q-slider__inner{background:#ffffff1a}.q-slider--dark .q-slider__markers{color:#ffffff4d}.q-slider--dense .q-slider__track-container--h{padding:6px 0}.q-slider--dense .q-slider__track-container--v{padding:0 6px}.q-space{flex-grow:1!important}.q-spinner{vertical-align:middle}.q-spinner-mat{animation:q-spin 2s linear infinite;transform-origin:center center}.q-spinner-mat .path{stroke-dasharray:1,200;stroke-dashoffset:0;animation:q-mat-dash 1.5s ease-in-out infinite}@keyframes q-spin{0%{transform:rotate3d(0,0,1,0)}25%{transform:rotate3d(0,0,1,90deg)}50%{transform:rotate3d(0,0,1,180deg)}75%{transform:rotate3d(0,0,1,270deg)}to{transform:rotate3d(0,0,1,359deg)}}@keyframes q-mat-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.q-splitter__panel{position:relative;z-index:0}.q-splitter__panel>.q-splitter{width:100%;height:100%}.q-splitter__separator{background-color:#0000001f;-webkit-user-select:none;user-select:none;position:relative;z-index:1}.q-splitter__separator-area>*{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.q-splitter--dark .q-splitter__separator{background-color:#ffffff47}.q-splitter--vertical>.q-splitter__panel{height:100%}.q-splitter--vertical.q-splitter--active{cursor:col-resize}.q-splitter--vertical>.q-splitter__separator{width:1px}.q-splitter--vertical>.q-splitter__separator>div{left:-6px;right:-6px}.q-splitter--vertical.q-splitter--workable>.q-splitter__separator{cursor:col-resize}.q-splitter--horizontal>.q-splitter__panel{width:100%}.q-splitter--horizontal.q-splitter--active{cursor:row-resize}.q-splitter--horizontal>.q-splitter__separator{height:1px}.q-splitter--horizontal>.q-splitter__separator>div{top:-6px;bottom:-6px}.q-splitter--horizontal.q-splitter--workable>.q-splitter__separator{cursor:row-resize}.q-splitter__before,.q-splitter__after{overflow:auto}.q-stepper{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;border-radius:4px;background:#fff}.q-stepper__title{font-size:14px;line-height:18px;letter-spacing:.1px}.q-stepper__caption{font-size:12px;line-height:14px}.q-stepper__dot{contain:layout;margin-right:8px;font-size:14px;width:24px;min-width:24px;height:24px;border-radius:50%;background:currentColor}.q-stepper__dot span{color:#fff}.q-stepper__tab{padding:8px 24px;font-size:14px;color:#9e9e9e;flex-direction:row}.q-stepper--dark{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-stepper--dark .q-stepper__dot span{color:#000}.q-stepper__tab--navigation{-webkit-user-select:none;user-select:none;cursor:pointer}.q-stepper__tab--active,.q-stepper__tab--done{color:var(--q-primary)}.q-stepper__tab--active .q-stepper__dot,.q-stepper__tab--active .q-stepper__label,.q-stepper__tab--done .q-stepper__dot,.q-stepper__tab--done .q-stepper__label{text-shadow:0 0 0 currentColor}.q-stepper__tab--disabled .q-stepper__dot{background:#00000038}.q-stepper__tab--disabled .q-stepper__label{color:#00000052}.q-stepper__tab--error{color:var(--q-negative)}.q-stepper__tab--error-with-icon .q-stepper__dot{background:transparent!important}.q-stepper__tab--error-with-icon .q-stepper__dot span{color:currentColor;font-size:24px}.q-stepper__header{border-top-left-radius:inherit;border-top-right-radius:inherit}.q-stepper__header--border{border-bottom:1px solid rgba(0,0,0,.12)}.q-stepper__header--standard-labels .q-stepper__tab{min-height:72px;justify-content:center}.q-stepper__header--standard-labels .q-stepper__tab:first-child{justify-content:flex-start}.q-stepper__header--standard-labels .q-stepper__tab:last-child{justify-content:flex-end}.q-stepper__header--standard-labels .q-stepper__tab:only-child{justify-content:center}.q-stepper__header--standard-labels .q-stepper__dot:after{display:none}.q-stepper__header--alternative-labels .q-stepper__tab{min-height:104px;padding:24px 32px;flex-direction:column;justify-content:flex-start}.q-stepper__header--alternative-labels .q-stepper__dot{margin-right:0}.q-stepper__header--alternative-labels .q-stepper__label{margin-top:8px;text-align:center}.q-stepper__header--alternative-labels .q-stepper__label:before,.q-stepper__header--alternative-labels .q-stepper__label:after{display:none}.q-stepper__header--contracted,.q-stepper__header--contracted.q-stepper__header--alternative-labels .q-stepper__tab{min-height:72px}.q-stepper__header--contracted.q-stepper__header--alternative-labels .q-stepper__tab:first-child{align-items:flex-start}.q-stepper__header--contracted.q-stepper__header--alternative-labels .q-stepper__tab:last-child{align-items:flex-end}.q-stepper__header--contracted .q-stepper__tab{padding:24px 0}.q-stepper__header--contracted .q-stepper__tab:first-child .q-stepper__dot{transform:translate(24px)}.q-stepper__header--contracted .q-stepper__tab:last-child .q-stepper__dot{transform:translate(-24px)}.q-stepper__header--contracted .q-stepper__tab:not(:last-child) .q-stepper__dot:after{display:block!important}.q-stepper__header--contracted .q-stepper__dot{margin:0}.q-stepper__header--contracted .q-stepper__label{display:none}.q-stepper__nav{padding-top:24px}.q-stepper--flat{box-shadow:none}.q-stepper--bordered{border:1px solid rgba(0,0,0,.12)}.q-stepper--horizontal .q-stepper__step-inner{padding:24px}.q-stepper--horizontal .q-stepper__tab:first-child{border-top-left-radius:inherit}.q-stepper--horizontal .q-stepper__tab:last-child{border-top-right-radius:inherit}.q-stepper--horizontal .q-stepper__tab:first-child .q-stepper__dot:before,.q-stepper--horizontal .q-stepper__tab:last-child .q-stepper__label:after,.q-stepper--horizontal .q-stepper__tab:last-child .q-stepper__dot:after{display:none}.q-stepper--horizontal .q-stepper__tab{overflow:hidden}.q-stepper--horizontal .q-stepper__line{contain:layout}.q-stepper--horizontal .q-stepper__line:before,.q-stepper--horizontal .q-stepper__line:after{position:absolute;top:50%;height:1px;width:100vw;background:#0000001f}.q-stepper--horizontal .q-stepper__label:after,.q-stepper--horizontal .q-stepper__dot:after{content:"";left:100%;margin-left:8px}.q-stepper--horizontal .q-stepper__dot:before{content:"";right:100%;margin-right:8px}.q-stepper--horizontal>.q-stepper__nav{padding:0 24px 24px}.q-stepper--vertical{padding:16px 0}.q-stepper--vertical .q-stepper__tab{padding:12px 24px}.q-stepper--vertical .q-stepper__title{line-height:18px}.q-stepper--vertical .q-stepper__step-inner{padding:0 24px 32px 60px}.q-stepper--vertical>.q-stepper__nav{padding:24px 24px 0}.q-stepper--vertical .q-stepper__step{overflow:hidden}.q-stepper--vertical .q-stepper__dot{margin-right:12px}.q-stepper--vertical .q-stepper__dot:before,.q-stepper--vertical .q-stepper__dot:after{content:"";position:absolute;left:50%;width:1px;height:99999px;background:#0000001f}.q-stepper--vertical .q-stepper__dot:before{bottom:100%;margin-bottom:8px}.q-stepper--vertical .q-stepper__dot:after{top:100%;margin-top:8px}.q-stepper--vertical .q-stepper__step:first-child .q-stepper__dot:before,.q-stepper--vertical .q-stepper__step:last-child .q-stepper__dot:after{display:none}.q-stepper--vertical .q-stepper__step:last-child .q-stepper__step-inner{padding-bottom:8px}.q-stepper--dark.q-stepper--bordered,.q-stepper--dark .q-stepper__header--border{border-color:#ffffff47}.q-stepper--dark.q-stepper--horizontal .q-stepper__line:before,.q-stepper--dark.q-stepper--horizontal .q-stepper__line:after{background:#ffffff47}.q-stepper--dark.q-stepper--vertical .q-stepper__dot:before,.q-stepper--dark.q-stepper--vertical .q-stepper__dot:after{background:#ffffff47}.q-stepper--dark .q-stepper__tab--disabled{color:#ffffff47}.q-stepper--dark .q-stepper__tab--disabled .q-stepper__dot{background:#ffffff47}.q-stepper--dark .q-stepper__tab--disabled .q-stepper__label{color:#ffffff8a}.q-tab-panels{background:#fff}.q-tab-panel{padding:16px}.q-markup-table{overflow:auto;background:#fff}.q-table{width:100%;max-width:100%;border-collapse:separate;border-spacing:0}.q-table thead tr,.q-table tbody td{height:48px}.q-table th{font-weight:500;font-size:12px;-webkit-user-select:none;user-select:none}.q-table th.sortable{cursor:pointer}.q-table th.sortable:hover .q-table__sort-icon{opacity:.64}.q-table th.sorted .q-table__sort-icon{opacity:.86!important}.q-table th.sort-desc .q-table__sort-icon{transform:rotate(180deg)}.q-table th,.q-table td{padding:7px 16px;background-color:inherit}.q-table thead,.q-table td,.q-table th{border-style:solid;border-width:0}.q-table tbody td{font-size:13px}.q-table__card{color:#000;background-color:#fff;border-radius:4px;box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f}.q-table__card .q-table__middle{flex:1 1 auto}.q-table__card .q-table__top,.q-table__card .q-table__bottom{flex:0 0 auto}.q-table__container{position:relative}.q-table__container>div:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.q-table__container>div:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.q-table__container>.q-inner-loading{border-radius:inherit!important}.q-table__top{padding:12px 16px}.q-table__top .q-table__control{flex-wrap:wrap}.q-table__title{font-size:20px;letter-spacing:.005em;font-weight:400}.q-table__separator{min-width:8px!important}.q-table__progress{height:0!important}.q-table__progress th{padding:0!important;border:0!important}.q-table__progress .q-linear-progress{position:absolute;bottom:0}.q-table__middle{max-width:100%}.q-table__bottom{min-height:50px;padding:4px 14px 4px 16px;font-size:12px}.q-table__bottom .q-table__control{min-height:24px}.q-table__bottom-nodata-icon{font-size:200%;margin-right:8px}.q-table__bottom-item{margin-right:16px}.q-table__control{display:flex;align-items:center}.q-table__sort-icon{transition:transform .3s cubic-bezier(.25,.8,.5,1);opacity:0;font-size:120%}.q-table__sort-icon--left,.q-table__sort-icon--center{margin-left:4px}.q-table__sort-icon--right{margin-right:4px}.q-table--col-auto-width{width:1px}.q-table__card--dark,.q-table--dark{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-table--flat{box-shadow:none}.q-table--bordered{border:1px solid rgba(0,0,0,.12)}.q-table--square{border-radius:0}.q-table__linear-progress{height:2px}.q-table--no-wrap th,.q-table--no-wrap td{white-space:nowrap}.q-table--grid{box-shadow:none;border-radius:4px}.q-table--grid .q-table__top{padding-bottom:4px}.q-table--grid .q-table__middle{min-height:2px;margin-bottom:4px}.q-table--grid .q-table__middle thead,.q-table--grid .q-table__middle thead th{border:0!important}.q-table--grid .q-table__linear-progress{bottom:0}.q-table--grid .q-table__bottom{border-top:0}.q-table--grid .q-table__grid-content{flex:1 1 auto}.q-table--grid.fullscreen{background:inherit}.q-table__grid-item-card{vertical-align:top;padding:12px}.q-table__grid-item-card .q-separator{margin:12px 0}.q-table__grid-item-row+.q-table__grid-item-row{margin-top:8px}.q-table__grid-item-title{opacity:.54;font-weight:500;font-size:12px}.q-table__grid-item-value{font-size:13px}.q-table__grid-item{padding:4px;transition:transform .3s cubic-bezier(.25,.8,.5,1)}.q-table__grid-item--selected{transform:scale(.95)}.q-table--horizontal-separator thead th,.q-table--horizontal-separator tbody tr:not(:last-child)>td,.q-table--cell-separator thead th,.q-table--cell-separator tbody tr:not(:last-child)>td{border-bottom-width:1px}.q-table--vertical-separator td,.q-table--vertical-separator th,.q-table--cell-separator td,.q-table--cell-separator th{border-left-width:1px}.q-table--vertical-separator thead tr:last-child th,.q-table--vertical-separator.q-table--loading tr:nth-last-child(2) th,.q-table--cell-separator thead tr:last-child th,.q-table--cell-separator.q-table--loading tr:nth-last-child(2) th{border-bottom-width:1px}.q-table--vertical-separator td:first-child,.q-table--vertical-separator th:first-child,.q-table--cell-separator td:first-child,.q-table--cell-separator th:first-child{border-left:0}.q-table--vertical-separator .q-table__top,.q-table--cell-separator .q-table__top{border-bottom:1px solid rgba(0,0,0,.12)}.q-table--dense .q-table__top{padding:6px 16px}.q-table--dense .q-table__bottom{min-height:33px}.q-table--dense .q-table__sort-icon{font-size:110%}.q-table--dense .q-table th,.q-table--dense .q-table td{padding:4px 8px}.q-table--dense .q-table thead tr,.q-table--dense .q-table tbody tr,.q-table--dense .q-table tbody td{height:28px}.q-table--dense .q-table th:first-child,.q-table--dense .q-table td:first-child{padding-left:16px}.q-table--dense .q-table th:last-child,.q-table--dense .q-table td:last-child{padding-right:16px}.q-table--dense .q-table__bottom-item{margin-right:8px}.q-table--dense .q-table__select .q-field__control,.q-table--dense .q-table__select .q-field__native{min-height:24px;padding:0}.q-table--dense .q-table__select .q-field__marginal{height:24px}.q-table__bottom{border-top:1px solid rgba(0,0,0,.12)}.q-table thead,.q-table tr,.q-table th,.q-table td{border-color:#0000001f}.q-table tbody td{position:relative}.q-table tbody td:before,.q-table tbody td:after{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.q-table tbody td:before{background:#00000008}.q-table tbody td:after{background:#0000000f}.q-table tbody tr.selected td:after{content:""}body.desktop .q-table>tbody>tr:not(.q-tr--no-hover):hover>td:not(.q-td--no-hover):before{content:""}.q-table__card--dark,.q-table--dark,.q-table--dark .q-table__bottom,.q-table--dark thead,.q-table--dark tr,.q-table--dark th,.q-table--dark td{border-color:#ffffff47}.q-table--dark tbody td:before{background:#ffffff12}.q-table--dark tbody td:after{background:#ffffff1a}.q-table--dark.q-table--vertical-separator .q-table__top,.q-table--dark.q-table--cell-separator .q-table__top{border-color:#ffffff47}.q-tab{padding:0 16px;min-height:48px;transition:color .3s,background-color .3s;text-transform:uppercase;white-space:nowrap;color:inherit;text-decoration:none}.q-tab--full{min-height:72px}.q-tab--no-caps{text-transform:none}.q-tab__content{height:inherit;padding:4px 0;min-width:40px}.q-tab__content--inline .q-tab__icon+.q-tab__label{padding-left:8px}.q-tab__content .q-chip--floating{top:0;right:-16px}.q-tab__icon{width:24px;height:24px;font-size:24px}.q-tab__label{font-size:14px;line-height:1.715em;font-weight:500}.q-tab .q-badge{top:3px;right:-12px}.q-tab__alert,.q-tab__alert-icon{position:absolute}.q-tab__alert{top:7px;right:-9px;height:10px;width:10px;border-radius:50%;background:currentColor}.q-tab__alert-icon{top:2px;right:-12px;font-size:18px}.q-tab__indicator{opacity:0;height:2px;background:currentColor}.q-tab--active .q-tab__indicator{opacity:1;transform-origin:left}.q-tab--inactive{opacity:.85}.q-tabs{position:relative;transition:color .3s,background-color .3s}.q-tabs--scrollable.q-tabs__arrows--outside.q-tabs--horizontal{padding-left:36px;padding-right:36px}.q-tabs--scrollable.q-tabs__arrows--outside.q-tabs--vertical{padding-top:36px;padding-bottom:36px}.q-tabs--scrollable.q-tabs__arrows--outside .q-tabs__arrow--faded{opacity:.3;pointer-events:none}.q-tabs--scrollable.q-tabs__arrows--inside .q-tabs__arrow--faded{display:none}.q-tabs--not-scrollable.q-tabs__arrows--outside,body.mobile .q-tabs--scrollable.q-tabs--mobile-without-arrows.q-tabs__arrows--outside{padding-left:0;padding-right:0}.q-tabs--not-scrollable .q-tabs__arrow,body.mobile .q-tabs--scrollable.q-tabs--mobile-without-arrows .q-tabs__arrow{display:none}.q-tabs--not-scrollable .q-tabs__content,body.mobile .q-tabs--scrollable.q-tabs--mobile-without-arrows .q-tabs__content{border-radius:inherit}.q-tabs__arrow{cursor:pointer;font-size:32px;min-width:36px;text-shadow:0 0 3px #fff,0 0 1px #fff,0 0 1px #000;transition:opacity .3s}.q-tabs__content{overflow:hidden;flex:1 1 auto}.q-tabs__content--align-center{justify-content:center}.q-tabs__content--align-right{justify-content:flex-end}.q-tabs__content--align-justify .q-tab{flex:1 1 auto}.q-tabs__offset{display:none}.q-tabs--horizontal .q-tabs__arrow{height:100%}.q-tabs--horizontal .q-tabs__arrow--left{top:0;left:0;bottom:0}.q-tabs--horizontal .q-tabs__arrow--right{top:0;right:0;bottom:0}.q-tabs--vertical,.q-tabs--vertical .q-tabs__content{display:block!important;height:100%}.q-tabs--vertical .q-tabs__arrow{width:100%;height:36px;text-align:center}.q-tabs--vertical .q-tabs__arrow--left{top:0;left:0;right:0}.q-tabs--vertical .q-tabs__arrow--right{left:0;right:0;bottom:0}.q-tabs--vertical .q-tab{padding:0 8px}.q-tabs--vertical .q-tab__indicator{height:unset;width:2px}.q-tabs--vertical.q-tabs--not-scrollable .q-tabs__content{height:100%}.q-tabs--vertical.q-tabs--dense .q-tab__content{min-width:24px}.q-tabs--dense .q-tab{min-height:36px}.q-tabs--dense .q-tab--full{min-height:52px}.q-time{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;border-radius:4px;background:#fff;outline:0;width:290px;min-width:290px;max-width:100%}.q-time--bordered{border:1px solid rgba(0,0,0,.12)}.q-time__header{border-top-left-radius:inherit;color:#fff;background-color:var(--q-primary);padding:16px;font-weight:300}.q-time__actions{padding:0 16px 16px}.q-time__header-label{font-size:28px;line-height:1;letter-spacing:-.00833em}.q-time__header-label>div+div{margin-left:4px}.q-time__link{opacity:.56;outline:0;transition:opacity .3s ease-out}.q-time__link--active,.q-time__link:hover,.q-time__link:focus{opacity:1}.q-time__header-ampm{font-size:16px;letter-spacing:.1em}.q-time__content{padding:16px}.q-time__content:before{content:"";display:block;padding-bottom:100%}.q-time__container-parent{padding:16px}.q-time__container-child{border-radius:50%;background:#0000001f}.q-time__clock{padding:24px;width:100%;height:100%;max-width:100%;max-height:100%;font-size:14px}.q-time__clock-circle{position:relative}.q-time__clock-center{height:6px;width:6px;margin:auto;border-radius:50%;min-height:0;background:currentColor}.q-time__clock-pointer{width:2px;height:50%;transform-origin:0 0;min-height:0;position:absolute;left:50%;right:0;bottom:0;color:var(--q-primary);background:currentColor;transform:translate(-50%)}.q-time__clock-pointer:before,.q-time__clock-pointer:after{content:"";position:absolute;left:50%;border-radius:50%;background:currentColor;transform:translate(-50%)}.q-time__clock-pointer:before{bottom:-4px;width:8px;height:8px}.q-time__clock-pointer:after{top:-3px;height:6px;width:6px}.q-time__clock-position{position:absolute;min-height:32px;width:32px;height:32px;font-size:12px;line-height:32px;margin:0;padding:0;transform:translate(-50%,-50%);border-radius:50%}.q-time__clock-position--disable{opacity:.4}.q-time__clock-position--active{background-color:var(--q-primary);color:#fff}.q-time__clock-pos-0{top:0%;left:50%}.q-time__clock-pos-1{top:6.7%;left:75%}.q-time__clock-pos-2{top:25%;left:93.3%}.q-time__clock-pos-3{top:50%;left:100%}.q-time__clock-pos-4{top:75%;left:93.3%}.q-time__clock-pos-5{top:93.3%;left:75%}.q-time__clock-pos-6{top:100%;left:50%}.q-time__clock-pos-7{top:93.3%;left:25%}.q-time__clock-pos-8{top:75%;left:6.7%}.q-time__clock-pos-9{top:50%;left:0%}.q-time__clock-pos-10{top:25%;left:6.7%}.q-time__clock-pos-11{top:6.7%;left:25%}.q-time__clock-pos-12{top:15%;left:50%}.q-time__clock-pos-13{top:19.69%;left:67.5%}.q-time__clock-pos-14{top:32.5%;left:80.31%}.q-time__clock-pos-15{top:50%;left:85%}.q-time__clock-pos-16{top:67.5%;left:80.31%}.q-time__clock-pos-17{top:80.31%;left:67.5%}.q-time__clock-pos-18{top:85%;left:50%}.q-time__clock-pos-19{top:80.31%;left:32.5%}.q-time__clock-pos-20{top:67.5%;left:19.69%}.q-time__clock-pos-21{top:50%;left:15%}.q-time__clock-pos-22{top:32.5%;left:19.69%}.q-time__clock-pos-23{top:19.69%;left:32.5%}.q-time__now-button{background-color:var(--q-primary);color:#fff;top:12px;right:12px}.q-time.disabled .q-time__header-ampm,.q-time.disabled .q-time__content,.q-time--readonly .q-time__header-ampm,.q-time--readonly .q-time__content{pointer-events:none}.q-time--portrait{display:inline-flex;flex-direction:column}.q-time--portrait .q-time__header{border-top-right-radius:inherit;min-height:86px}.q-time--portrait .q-time__header-ampm{margin-left:12px}.q-time--portrait.q-time--bordered .q-time__content{margin:1px 0}.q-time--landscape{display:inline-flex;align-items:stretch;min-width:420px}.q-time--landscape>div{display:flex;flex-direction:column;justify-content:center}.q-time--landscape .q-time__header{border-bottom-left-radius:inherit;min-width:156px}.q-time--landscape .q-time__header-ampm{margin-top:12px}.q-time--dark{border-color:#ffffff47;box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-timeline{padding:0;width:100%;list-style:none}.q-timeline h6{line-height:inherit}.q-timeline--dark{color:#fff}.q-timeline--dark .q-timeline__subtitle{opacity:.7}.q-timeline__content{padding-bottom:24px}.q-timeline__title{margin-top:0;margin-bottom:16px}.q-timeline__subtitle{font-size:12px;margin-bottom:8px;opacity:.6;text-transform:uppercase;letter-spacing:1px;font-weight:700}.q-timeline__dot{position:absolute;top:0;bottom:0;width:15px}.q-timeline__dot:before,.q-timeline__dot:after{content:"";background:currentColor;display:block;position:absolute}.q-timeline__dot:before{border:3px solid transparent;border-radius:100%;height:15px;width:15px;top:4px;left:0;transition:background .3s ease-in-out,border .3s ease-in-out}.q-timeline__dot:after{width:3px;opacity:.4;top:24px;bottom:0;left:6px}.q-timeline__dot .q-icon{position:absolute;top:0;left:0;right:0;font-size:16px;height:38px;line-height:38px;width:100%;color:#fff}.q-timeline__dot .q-icon>svg,.q-timeline__dot .q-icon>img{width:1em;height:1em}.q-timeline__dot-img{position:absolute;top:4px;left:0;right:0;height:31px;width:31px;background:currentColor;border-radius:50%}.q-timeline__heading{position:relative}.q-timeline__heading:first-child .q-timeline__heading-title{padding-top:0}.q-timeline__heading:last-child .q-timeline__heading-title{padding-bottom:0}.q-timeline__heading-title{padding:32px 0;margin:0}.q-timeline__entry{position:relative;line-height:22px}.q-timeline__entry:last-child{padding-bottom:0!important}.q-timeline__entry:last-child .q-timeline__dot:after{content:none}.q-timeline__entry--icon .q-timeline__dot{width:31px}.q-timeline__entry--icon .q-timeline__dot:before{height:31px;width:31px}.q-timeline__entry--icon .q-timeline__dot:after{top:41px;left:14px}.q-timeline__entry--icon .q-timeline__subtitle{padding-top:8px}.q-timeline--dense--right .q-timeline__entry{padding-left:40px}.q-timeline--dense--right .q-timeline__entry--icon .q-timeline__dot{left:-8px}.q-timeline--dense--right .q-timeline__dot{left:0}.q-timeline--dense--left .q-timeline__heading{text-align:right}.q-timeline--dense--left .q-timeline__entry{padding-right:40px}.q-timeline--dense--left .q-timeline__entry--icon .q-timeline__dot{right:-8px}.q-timeline--dense--left .q-timeline__content,.q-timeline--dense--left .q-timeline__title,.q-timeline--dense--left .q-timeline__subtitle{text-align:right}.q-timeline--dense--left .q-timeline__dot{right:0}.q-timeline--comfortable{display:table}.q-timeline--comfortable .q-timeline__heading{display:table-row;font-size:200%}.q-timeline--comfortable .q-timeline__heading>div{display:table-cell}.q-timeline--comfortable .q-timeline__entry{display:table-row;padding:0}.q-timeline--comfortable .q-timeline__entry--icon .q-timeline__content{padding-top:8px}.q-timeline--comfortable .q-timeline__subtitle,.q-timeline--comfortable .q-timeline__dot,.q-timeline--comfortable .q-timeline__content{display:table-cell;vertical-align:top}.q-timeline--comfortable .q-timeline__subtitle{width:35%}.q-timeline--comfortable .q-timeline__dot{position:relative;min-width:31px}.q-timeline--comfortable--right .q-timeline__heading .q-timeline__heading-title{margin-left:-50px}.q-timeline--comfortable--right .q-timeline__subtitle{text-align:right;padding-right:30px}.q-timeline--comfortable--right .q-timeline__content{padding-left:30px}.q-timeline--comfortable--right .q-timeline__entry--icon .q-timeline__dot{left:-8px}.q-timeline--comfortable--left .q-timeline__heading{text-align:right}.q-timeline--comfortable--left .q-timeline__heading .q-timeline__heading-title{margin-right:-50px}.q-timeline--comfortable--left .q-timeline__subtitle{padding-left:30px}.q-timeline--comfortable--left .q-timeline__content{padding-right:30px}.q-timeline--comfortable--left .q-timeline__content,.q-timeline--comfortable--left .q-timeline__title{text-align:right}.q-timeline--comfortable--left .q-timeline__entry--icon .q-timeline__dot{right:0}.q-timeline--comfortable--left .q-timeline__dot{right:-8px}.q-timeline--loose .q-timeline__heading-title{text-align:center;margin-left:0}.q-timeline--loose .q-timeline__entry,.q-timeline--loose .q-timeline__subtitle,.q-timeline--loose .q-timeline__dot,.q-timeline--loose .q-timeline__content{display:block;margin:0;padding:0}.q-timeline--loose .q-timeline__dot{position:absolute;left:50%;margin-left:-7.15px}.q-timeline--loose .q-timeline__entry{padding-bottom:24px;overflow:hidden}.q-timeline--loose .q-timeline__entry--icon .q-timeline__dot{margin-left:-15px}.q-timeline--loose .q-timeline__entry--icon .q-timeline__subtitle{line-height:38px}.q-timeline--loose .q-timeline__entry--icon .q-timeline__content{padding-top:8px}.q-timeline--loose .q-timeline__entry--left .q-timeline__content,.q-timeline--loose .q-timeline__entry--right .q-timeline__subtitle{float:left;padding-right:30px;text-align:right}.q-timeline--loose .q-timeline__entry--left .q-timeline__subtitle,.q-timeline--loose .q-timeline__entry--right .q-timeline__content{float:right;text-align:left;padding-left:30px}.q-timeline--loose .q-timeline__subtitle,.q-timeline--loose .q-timeline__content{width:50%}.q-toggle{vertical-align:middle}.q-toggle__native{width:1px;height:1px}.q-toggle__track{height:.35em;border-radius:.175em;opacity:.38;background:currentColor}.q-toggle__thumb{top:.25em;left:.25em;width:.5em;height:.5em;transition:left .22s cubic-bezier(.4,0,.2,1);-webkit-user-select:none;user-select:none;z-index:0}.q-toggle__thumb:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;background:#fff;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.q-toggle__thumb .q-icon{font-size:.3em;min-width:1em;color:#000;opacity:.54;z-index:1}.q-toggle__inner{font-size:40px;width:1.4em;min-width:1.4em;height:1em;padding:.325em .3em;-webkit-print-color-adjust:exact}.q-toggle__inner--indet .q-toggle__thumb{left:.45em}.q-toggle__inner--truthy{color:var(--q-primary)}.q-toggle__inner--truthy .q-toggle__track{opacity:.54}.q-toggle__inner--truthy .q-toggle__thumb{left:.65em}.q-toggle__inner--truthy .q-toggle__thumb:after{background-color:currentColor}.q-toggle__inner--truthy .q-toggle__thumb .q-icon{color:#fff;opacity:1}.q-toggle.disabled{opacity:.75!important}.q-toggle--dark .q-toggle__inner{color:#fff}.q-toggle--dark .q-toggle__inner--truthy{color:var(--q-primary)}.q-toggle--dark .q-toggle__thumb:after{box-shadow:none}.q-toggle--dark .q-toggle__thumb:before{opacity:.32!important}.q-toggle--dense .q-toggle__inner{width:.8em;min-width:.8em;height:.5em;padding:.07625em 0}.q-toggle--dense .q-toggle__thumb{top:0;left:0}.q-toggle--dense .q-toggle__inner--indet .q-toggle__thumb{left:.15em}.q-toggle--dense .q-toggle__inner--truthy .q-toggle__thumb{left:.3em}.q-toggle--dense .q-toggle__label{padding-left:.5em}.q-toggle--dense.reverse .q-toggle__label{padding-left:0;padding-right:.5em}body.desktop .q-toggle:not(.disabled) .q-toggle__thumb:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;background:currentColor;opacity:.12;transform:scale3d(0,0,1);transition:transform .22s cubic-bezier(0,0,.2,1)}body.desktop .q-toggle:not(.disabled):focus .q-toggle__thumb:before,body.desktop .q-toggle:not(.disabled):hover .q-toggle__thumb:before{transform:scale3d(2,2,1)}body.desktop .q-toggle--dense:not(.disabled):focus .q-toggle__thumb:before,body.desktop .q-toggle--dense:not(.disabled):hover .q-toggle__thumb:before{transform:scale3d(1.5,1.5,1)}.q-toolbar{position:relative;padding:0 12px;min-height:50px;width:100%}.q-toolbar--inset{padding-left:58px}.q-toolbar .q-avatar{font-size:38px}.q-toolbar__title{flex:1 1 0%;min-width:1px;max-width:100%;font-size:21px;font-weight:400;letter-spacing:.01em;padding:0 12px}.q-toolbar__title:first-child{padding-left:0}.q-toolbar__title:last-child{padding-right:0}.q-tooltip--style{font-size:10px;color:#fafafa;background:#757575;border-radius:4px;text-transform:none;font-weight:400}.q-tooltip{z-index:9000;position:fixed!important;overflow-y:auto;overflow-x:hidden;padding:6px 10px}@media (max-width: 599.98px){.q-tooltip{font-size:14px;padding:8px 16px}}.q-tree{position:relative;color:#9e9e9e}.q-tree__node{padding:0 0 3px 22px}.q-tree__node:after{content:"";position:absolute;top:-3px;bottom:0;width:2px;right:auto;left:-13px;border-left:1px solid currentColor}.q-tree__node:last-child:after{display:none}.q-tree__node--disabled{pointer-events:none}.q-tree__node--disabled .disabled{opacity:1!important}.q-tree__node--disabled>div,.q-tree__node--disabled>i,.q-tree__node--disabled>.disabled{opacity:.6!important}.q-tree__node--disabled>div .q-tree__node--disabled>div,.q-tree__node--disabled>div .q-tree__node--disabled>i,.q-tree__node--disabled>div .q-tree__node--disabled>.disabled,.q-tree__node--disabled>i .q-tree__node--disabled>div,.q-tree__node--disabled>i .q-tree__node--disabled>i,.q-tree__node--disabled>i .q-tree__node--disabled>.disabled,.q-tree__node--disabled>.disabled .q-tree__node--disabled>div,.q-tree__node--disabled>.disabled .q-tree__node--disabled>i,.q-tree__node--disabled>.disabled .q-tree__node--disabled>.disabled{opacity:1!important}.q-tree__node-header:before{content:"";position:absolute;top:-3px;bottom:50%;width:31px;left:-35px;border-left:1px solid currentColor;border-bottom:1px solid currentColor}.q-tree__children{padding-left:25px}.q-tree__node-body{padding:5px 0 8px 5px}.q-tree__node--parent{padding-left:2px}.q-tree__node--parent>.q-tree__node-header:before{width:15px;left:-15px}.q-tree__node--parent>.q-tree__node-collapsible>.q-tree__node-body{padding:5px 0 8px 27px}.q-tree__node--parent>.q-tree__node-collapsible>.q-tree__node-body:after{content:"";position:absolute;top:0;width:2px;height:100%;right:auto;left:12px;border-left:1px solid currentColor;bottom:50px}.q-tree__node--link{cursor:pointer}.q-tree__node-header{padding:4px;margin-top:3px;border-radius:4px;outline:0}.q-tree__node-header-content{color:#000;transition:color .3s}.q-tree__node--selected .q-tree__node-header-content{color:#9e9e9e}.q-tree__icon,.q-tree__node-header-content .q-icon{font-size:21px}.q-tree__img{height:42px;border-radius:2px}.q-tree__avatar,.q-tree__node-header-content .q-avatar{font-size:28px;border-radius:50%;width:28px;height:28px}.q-tree__arrow,.q-tree__spinner{font-size:16px;margin-right:4px}.q-tree__arrow{transition:transform .3s}.q-tree__arrow--rotate{transform:rotate3d(0,0,1,90deg)}.q-tree__tickbox{margin-right:4px}.q-tree>.q-tree__node{padding:0}.q-tree>.q-tree__node:after,.q-tree>.q-tree__node>.q-tree__node-header:before{display:none}.q-tree>.q-tree__node--child>.q-tree__node-header{padding-left:24px}.q-tree--dark .q-tree__node-header-content{color:#fff}.q-tree--no-connectors .q-tree__node:after,.q-tree--no-connectors .q-tree__node-header:before,.q-tree--no-connectors .q-tree__node-body:after{display:none!important}.q-tree--dense>.q-tree__node--child>.q-tree__node-header{padding-left:1px}.q-tree--dense .q-tree__arrow,.q-tree--dense .q-tree__spinner{margin-right:1px}.q-tree--dense .q-tree__img{height:32px}.q-tree--dense .q-tree__tickbox{margin-right:3px}.q-tree--dense .q-tree__node{padding:0}.q-tree--dense .q-tree__node:after{top:0;left:-8px}.q-tree--dense .q-tree__node-header{margin-top:0;padding:1px}.q-tree--dense .q-tree__node-header:before{top:0;left:-8px;width:8px}.q-tree--dense .q-tree__node--child{padding-left:17px}.q-tree--dense .q-tree__node--child>.q-tree__node-header:before{left:-25px;width:21px}.q-tree--dense .q-tree__node-body{padding:0 0 2px}.q-tree--dense .q-tree__node--parent>.q-tree__node-collapsible>.q-tree__node-body{padding:0 0 2px 20px}.q-tree--dense .q-tree__node--parent>.q-tree__node-collapsible>.q-tree__node-body:after{left:8px}.q-tree--dense .q-tree__children{padding-left:16px}[dir=rtl] .q-tree__arrow{transform:rotate3d(0,0,1,180deg)}[dir=rtl] .q-tree__arrow--rotate{transform:rotate3d(0,0,1,90deg)}.q-uploader{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;border-radius:4px;vertical-align:top;background:#fff;position:relative;width:320px;max-height:320px}.q-uploader--bordered{border:1px solid rgba(0,0,0,.12)}.q-uploader__input{opacity:0;width:100%;height:100%;cursor:pointer!important;z-index:1}.q-uploader__input::-webkit-file-upload-button{cursor:pointer}.q-uploader__file:before{content:"";border-top-left-radius:inherit;border-top-right-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:currentColor;opacity:.04}.q-uploader__header{position:relative;border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:var(--q-primary);color:#fff;width:100%}.q-uploader__spinner{font-size:24px;margin-right:4px}.q-uploader__header-content{padding:8px}.q-uploader__dnd{outline:1px dashed currentColor;outline-offset:-4px;background:#fff9}.q-uploader__overlay{font-size:36px;color:#000;background-color:#fff9}.q-uploader__list{position:relative;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;padding:8px;min-height:60px;flex:1 1 auto}.q-uploader__file{border-radius:4px 4px 0 0;border:1px solid rgba(0,0,0,.12)}.q-uploader__file .q-circular-progress{font-size:24px}.q-uploader__file--img{color:#fff;height:200px;min-width:200px;background-position:50% 50%;background-size:cover;background-repeat:no-repeat}.q-uploader__file--img:before{content:none}.q-uploader__file--img .q-circular-progress{color:#fff}.q-uploader__file--img .q-uploader__file-header{padding-bottom:24px;background:linear-gradient(to bottom,#000000b3 20%,#fff0)}.q-uploader__file+.q-uploader__file{margin-top:8px}.q-uploader__file-header{position:relative;padding:4px 8px;border-top-left-radius:inherit;border-top-right-radius:inherit}.q-uploader__file-header-content{padding-right:8px}.q-uploader__file-status{font-size:24px;margin-right:4px}.q-uploader__title{font-size:14px;font-weight:700;line-height:18px;word-break:break-word}.q-uploader__subtitle{font-size:12px;line-height:18px}.q-uploader--disable .q-uploader__header,.q-uploader--disable .q-uploader__list{pointer-events:none}.q-uploader--dark{border-color:#ffffff47;box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}.q-uploader--dark .q-uploader__file{border-color:#ffffff47}.q-uploader--dark .q-uploader__dnd,.q-uploader--dark .q-uploader__overlay{background:#ffffff4d}.q-uploader--dark .q-uploader__overlay{color:#fff}.q-video{position:relative;overflow:hidden;border-radius:inherit}.q-video iframe,.q-video object,.q-video embed{width:100%;height:100%}.q-video--responsive{height:0}.q-video--responsive iframe,.q-video--responsive object,.q-video--responsive embed{position:absolute;top:0;left:0}.q-virtual-scroll:focus{outline:0}.q-virtual-scroll__content{outline:none;contain:content}.q-virtual-scroll__content>*{overflow-anchor:none}.q-virtual-scroll__content>[data-q-vs-anchor]{overflow-anchor:auto}.q-virtual-scroll__padding{background:linear-gradient(#fff0,#fff0 20%,#80808008 20%,#80808014,#80808008 80%,#fff0 80%,#fff0);background-size:var(--q-virtual-scroll-item-width, 100%) var(--q-virtual-scroll-item-height, 50px)}.q-table .q-virtual-scroll__padding tr{height:0!important}.q-table .q-virtual-scroll__padding td{padding:0!important}.q-virtual-scroll--horizontal{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.q-virtual-scroll--horizontal .q-virtual-scroll__content{display:flex;flex-direction:row;flex-wrap:nowrap}.q-virtual-scroll--horizontal .q-virtual-scroll__padding,.q-virtual-scroll--horizontal .q-virtual-scroll__content,.q-virtual-scroll--horizontal .q-virtual-scroll__content>*{flex:0 0 auto}.q-virtual-scroll--horizontal .q-virtual-scroll__padding{background:linear-gradient(to left,#fff0,#fff0 20%,#80808008 20%,#80808014,#80808008 80%,#fff0 80%,#fff0);background-size:var(--q-virtual-scroll-item-width, 50px) var(--q-virtual-scroll-item-height, 100%)}.q-ripple{position:absolute;top:0;left:0;width:100%;height:100%;color:inherit;border-radius:inherit;z-index:0;pointer-events:none;overflow:hidden;contain:strict}.q-ripple__inner{position:absolute;top:0;left:0;opacity:0;color:inherit;border-radius:50%;background:currentColor;pointer-events:none;will-change:transform,opacity}.q-ripple__inner--enter{transition:transform .225s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.q-ripple__inner--leave{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.q-morph--invisible,.q-morph--internal{opacity:0!important;pointer-events:none!important;position:fixed!important;right:200vw!important;bottom:200vh!important}.q-loading{color:#000;position:fixed!important}.q-loading__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;opacity:.5;z-index:-1;background-color:#000;transition:background-color .28s}.q-loading__box{border-radius:4px;padding:18px;color:#fff;max-width:450px}.q-loading__message{margin:40px 20px 0;text-align:center}.q-notifications__list{z-index:9500;pointer-events:none;left:0;right:0;margin-bottom:10px;position:relative}.q-notifications__list--center{top:0;bottom:0}.q-notifications__list--top{top:0}.q-notifications__list--bottom{bottom:0}body.q-ios-padding .q-notifications__list--center,body.q-ios-padding .q-notifications__list--top{top:20px;top:env(safe-area-inset-top)}body.q-ios-padding .q-notifications__list--center,body.q-ios-padding .q-notifications__list--bottom{bottom:env(safe-area-inset-bottom)}.q-notification{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;border-radius:4px;pointer-events:all;display:inline-flex;margin:10px 10px 0;transition:transform 1s,opacity 1s;z-index:9500;flex-shrink:0;max-width:95vw;background:#323232;color:#fff;font-size:14px}.q-notification__icon{font-size:24px;flex:0 0 1em}.q-notification__icon--additional{margin-right:16px}.q-notification__avatar{font-size:32px}.q-notification__avatar--additional{margin-right:8px}.q-notification__spinner{font-size:32px}.q-notification__spinner--additional{margin-right:8px}.q-notification__message{padding:8px 0}.q-notification__caption{font-size:.9em;opacity:.7}.q-notification__actions{color:var(--q-primary)}.q-notification__badge{animation:q-notif-badge .42s;padding:4px 8px;position:absolute;box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;background-color:var(--q-negative);color:#fff;border-radius:4px;font-size:12px;line-height:12px}.q-notification__badge--top-left,.q-notification__badge--top-right{top:-6px}.q-notification__badge--bottom-left,.q-notification__badge--bottom-right{bottom:-6px}.q-notification__badge--top-left,.q-notification__badge--bottom-left{left:-22px}.q-notification__badge--top-right,.q-notification__badge--bottom-right{right:-22px}.q-notification__progress{z-index:-1;position:absolute;height:3px;bottom:0;left:-10px;right:-10px;animation:q-notif-progress linear;background:currentColor;opacity:.3;border-radius:4px 4px 0 0;transform-origin:0 50%;transform:scaleX(0)}.q-notification--standard{padding:0 16px;min-height:48px}.q-notification--standard .q-notification__actions{padding:6px 0 6px 8px;margin-right:-8px}.q-notification--multi-line{min-height:68px;padding:8px 16px}.q-notification--multi-line .q-notification__badge--top-left,.q-notification--multi-line .q-notification__badge--top-right{top:-15px}.q-notification--multi-line .q-notification__badge--bottom-left,.q-notification--multi-line .q-notification__badge--bottom-right{bottom:-15px}.q-notification--multi-line .q-notification__progress{bottom:-8px}.q-notification--multi-line .q-notification__actions{padding:0}.q-notification--multi-line .q-notification__actions--with-media{padding-left:25px}.q-notification--top-left-enter-from,.q-notification--top-left-leave-to,.q-notification--top-enter-from,.q-notification--top-leave-to,.q-notification--top-right-enter-from,.q-notification--top-right-leave-to{opacity:0;transform:translateY(-50px);z-index:9499}.q-notification--left-enter-from,.q-notification--left-leave-to,.q-notification--center-enter-from,.q-notification--center-leave-to,.q-notification--right-enter-from,.q-notification--right-leave-to{opacity:0;transform:rotateX(90deg);z-index:9499}.q-notification--bottom-left-enter-from,.q-notification--bottom-left-leave-to,.q-notification--bottom-enter-from,.q-notification--bottom-leave-to,.q-notification--bottom-right-enter-from,.q-notification--bottom-right-leave-to{opacity:0;transform:translateY(50px);z-index:9499}.q-notification--top-left-leave-active,.q-notification--top-leave-active,.q-notification--top-right-leave-active,.q-notification--left-leave-active,.q-notification--center-leave-active,.q-notification--right-leave-active,.q-notification--bottom-left-leave-active,.q-notification--bottom-leave-active,.q-notification--bottom-right-leave-active{position:absolute;z-index:9499;margin-left:0;margin-right:0}.q-notification--top-leave-active,.q-notification--center-leave-active{top:0}.q-notification--bottom-left-leave-active,.q-notification--bottom-leave-active,.q-notification--bottom-right-leave-active{bottom:0}@media (min-width: 600px){.q-notification{max-width:65vw}}@keyframes q-notif-badge{15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}}@keyframes q-notif-progress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}:root{--animate-duration: .3s;--animate-delay: .3s;--animate-repeat: 1}.animated{animation-duration:var(--animate-duration);animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.repeat-1{animation-iteration-count:var(--animate-repeat)}.animated.repeat-2{animation-iteration-count:calc(var(--animate-repeat) * 2)}.animated.repeat-3{animation-iteration-count:calc(var(--animate-repeat) * 3)}.animated.delay-1s{animation-delay:var(--animate-delay)}.animated.delay-2s{animation-delay:calc(var(--animate-delay) * 2)}.animated.delay-3s{animation-delay:calc(var(--animate-delay) * 3)}.animated.delay-4s{animation-delay:calc(var(--animate-delay) * 4)}.animated.delay-5s{animation-delay:calc(var(--animate-delay) * 5)}.animated.faster{animation-duration:calc(var(--animate-duration) / 2)}.animated.fast{animation-duration:calc(var(--animate-duration) * .8)}.animated.slow{animation-duration:calc(var(--animate-duration) * 2)}.animated.slower{animation-duration:calc(var(--animate-duration) * 3)}@media print,(prefers-reduced-motion: reduce){.animated{animation-duration:1ms!important;transition-duration:1ms!important;animation-iteration-count:1!important}.animated[class*=Out]{opacity:0}}.q-animate--scale{animation:q-scale .15s;animation-timing-function:cubic-bezier(.25,.8,.25,1)}@keyframes q-scale{0%{transform:scale(1)}50%{transform:scale(1.04)}to{transform:scale(1)}}.q-animate--fade{animation:q-fade .2s}@keyframes q-fade{0%{opacity:0}to{opacity:1}}:root{--q-primary: #1976D2;--q-secondary: #26A69A;--q-accent: #9C27B0;--q-positive: #21BA45;--q-negative: #C10015;--q-info: #31CCEC;--q-warning: #F2C037;--q-dark: #1d1d1d;--q-dark-page: #121212}.text-dark{color:var(--q-dark)!important}.bg-dark{background:var(--q-dark)!important}.text-primary{color:var(--q-primary)!important}.bg-primary{background:var(--q-primary)!important}.text-secondary{color:var(--q-secondary)!important}.bg-secondary{background:var(--q-secondary)!important}.text-accent{color:var(--q-accent)!important}.bg-accent{background:var(--q-accent)!important}.text-positive{color:var(--q-positive)!important}.bg-positive{background:var(--q-positive)!important}.text-negative{color:var(--q-negative)!important}.bg-negative{background:var(--q-negative)!important}.text-info{color:var(--q-info)!important}.bg-info{background:var(--q-info)!important}.text-warning{color:var(--q-warning)!important}.bg-warning{background:var(--q-warning)!important}.text-white{color:#fff!important}.bg-white{background:#fff!important}.text-black{color:#000!important}.bg-black{background:#000!important}.text-transparent{color:transparent!important}.bg-transparent{background:transparent!important}.text-separator{color:#0000001f!important}.bg-separator{background:#0000001f!important}.text-dark-separator{color:#ffffff47!important}.bg-dark-separator{background:#ffffff47!important}.text-red{color:#f44336!important}.text-red-1{color:#ffebee!important}.text-red-2{color:#ffcdd2!important}.text-red-3{color:#ef9a9a!important}.text-red-4{color:#e57373!important}.text-red-5{color:#ef5350!important}.text-red-6{color:#f44336!important}.text-red-7{color:#e53935!important}.text-red-8{color:#d32f2f!important}.text-red-9{color:#c62828!important}.text-red-10{color:#b71c1c!important}.text-red-11{color:#ff8a80!important}.text-red-12{color:#ff5252!important}.text-red-13{color:#ff1744!important}.text-red-14{color:#d50000!important}.text-pink{color:#e91e63!important}.text-pink-1{color:#fce4ec!important}.text-pink-2{color:#f8bbd0!important}.text-pink-3{color:#f48fb1!important}.text-pink-4{color:#f06292!important}.text-pink-5{color:#ec407a!important}.text-pink-6{color:#e91e63!important}.text-pink-7{color:#d81b60!important}.text-pink-8{color:#c2185b!important}.text-pink-9{color:#ad1457!important}.text-pink-10{color:#880e4f!important}.text-pink-11{color:#ff80ab!important}.text-pink-12{color:#ff4081!important}.text-pink-13{color:#f50057!important}.text-pink-14{color:#c51162!important}.text-purple{color:#9c27b0!important}.text-purple-1{color:#f3e5f5!important}.text-purple-2{color:#e1bee7!important}.text-purple-3{color:#ce93d8!important}.text-purple-4{color:#ba68c8!important}.text-purple-5{color:#ab47bc!important}.text-purple-6{color:#9c27b0!important}.text-purple-7{color:#8e24aa!important}.text-purple-8{color:#7b1fa2!important}.text-purple-9{color:#6a1b9a!important}.text-purple-10{color:#4a148c!important}.text-purple-11{color:#ea80fc!important}.text-purple-12{color:#e040fb!important}.text-purple-13{color:#d500f9!important}.text-purple-14{color:#a0f!important}.text-deep-purple{color:#673ab7!important}.text-deep-purple-1{color:#ede7f6!important}.text-deep-purple-2{color:#d1c4e9!important}.text-deep-purple-3{color:#b39ddb!important}.text-deep-purple-4{color:#9575cd!important}.text-deep-purple-5{color:#7e57c2!important}.text-deep-purple-6{color:#673ab7!important}.text-deep-purple-7{color:#5e35b1!important}.text-deep-purple-8{color:#512da8!important}.text-deep-purple-9{color:#4527a0!important}.text-deep-purple-10{color:#311b92!important}.text-deep-purple-11{color:#b388ff!important}.text-deep-purple-12{color:#7c4dff!important}.text-deep-purple-13{color:#651fff!important}.text-deep-purple-14{color:#6200ea!important}.text-indigo{color:#3f51b5!important}.text-indigo-1{color:#e8eaf6!important}.text-indigo-2{color:#c5cae9!important}.text-indigo-3{color:#9fa8da!important}.text-indigo-4{color:#7986cb!important}.text-indigo-5{color:#5c6bc0!important}.text-indigo-6{color:#3f51b5!important}.text-indigo-7{color:#3949ab!important}.text-indigo-8{color:#303f9f!important}.text-indigo-9{color:#283593!important}.text-indigo-10{color:#1a237e!important}.text-indigo-11{color:#8c9eff!important}.text-indigo-12{color:#536dfe!important}.text-indigo-13{color:#3d5afe!important}.text-indigo-14{color:#304ffe!important}.text-blue{color:#2196f3!important}.text-blue-1{color:#e3f2fd!important}.text-blue-2{color:#bbdefb!important}.text-blue-3{color:#90caf9!important}.text-blue-4{color:#64b5f6!important}.text-blue-5{color:#42a5f5!important}.text-blue-6{color:#2196f3!important}.text-blue-7{color:#1e88e5!important}.text-blue-8{color:#1976d2!important}.text-blue-9{color:#1565c0!important}.text-blue-10{color:#0d47a1!important}.text-blue-11{color:#82b1ff!important}.text-blue-12{color:#448aff!important}.text-blue-13{color:#2979ff!important}.text-blue-14{color:#2962ff!important}.text-light-blue{color:#03a9f4!important}.text-light-blue-1{color:#e1f5fe!important}.text-light-blue-2{color:#b3e5fc!important}.text-light-blue-3{color:#81d4fa!important}.text-light-blue-4{color:#4fc3f7!important}.text-light-blue-5{color:#29b6f6!important}.text-light-blue-6{color:#03a9f4!important}.text-light-blue-7{color:#039be5!important}.text-light-blue-8{color:#0288d1!important}.text-light-blue-9{color:#0277bd!important}.text-light-blue-10{color:#01579b!important}.text-light-blue-11{color:#80d8ff!important}.text-light-blue-12{color:#40c4ff!important}.text-light-blue-13{color:#00b0ff!important}.text-light-blue-14{color:#0091ea!important}.text-cyan{color:#00bcd4!important}.text-cyan-1{color:#e0f7fa!important}.text-cyan-2{color:#b2ebf2!important}.text-cyan-3{color:#80deea!important}.text-cyan-4{color:#4dd0e1!important}.text-cyan-5{color:#26c6da!important}.text-cyan-6{color:#00bcd4!important}.text-cyan-7{color:#00acc1!important}.text-cyan-8{color:#0097a7!important}.text-cyan-9{color:#00838f!important}.text-cyan-10{color:#006064!important}.text-cyan-11{color:#84ffff!important}.text-cyan-12{color:#18ffff!important}.text-cyan-13{color:#00e5ff!important}.text-cyan-14{color:#00b8d4!important}.text-teal{color:#009688!important}.text-teal-1{color:#e0f2f1!important}.text-teal-2{color:#b2dfdb!important}.text-teal-3{color:#80cbc4!important}.text-teal-4{color:#4db6ac!important}.text-teal-5{color:#26a69a!important}.text-teal-6{color:#009688!important}.text-teal-7{color:#00897b!important}.text-teal-8{color:#00796b!important}.text-teal-9{color:#00695c!important}.text-teal-10{color:#004d40!important}.text-teal-11{color:#a7ffeb!important}.text-teal-12{color:#64ffda!important}.text-teal-13{color:#1de9b6!important}.text-teal-14{color:#00bfa5!important}.text-green{color:#4caf50!important}.text-green-1{color:#e8f5e9!important}.text-green-2{color:#c8e6c9!important}.text-green-3{color:#a5d6a7!important}.text-green-4{color:#81c784!important}.text-green-5{color:#66bb6a!important}.text-green-6{color:#4caf50!important}.text-green-7{color:#43a047!important}.text-green-8{color:#388e3c!important}.text-green-9{color:#2e7d32!important}.text-green-10{color:#1b5e20!important}.text-green-11{color:#b9f6ca!important}.text-green-12{color:#69f0ae!important}.text-green-13{color:#00e676!important}.text-green-14{color:#00c853!important}.text-light-green{color:#8bc34a!important}.text-light-green-1{color:#f1f8e9!important}.text-light-green-2{color:#dcedc8!important}.text-light-green-3{color:#c5e1a5!important}.text-light-green-4{color:#aed581!important}.text-light-green-5{color:#9ccc65!important}.text-light-green-6{color:#8bc34a!important}.text-light-green-7{color:#7cb342!important}.text-light-green-8{color:#689f38!important}.text-light-green-9{color:#558b2f!important}.text-light-green-10{color:#33691e!important}.text-light-green-11{color:#ccff90!important}.text-light-green-12{color:#b2ff59!important}.text-light-green-13{color:#76ff03!important}.text-light-green-14{color:#64dd17!important}.text-lime{color:#cddc39!important}.text-lime-1{color:#f9fbe7!important}.text-lime-2{color:#f0f4c3!important}.text-lime-3{color:#e6ee9c!important}.text-lime-4{color:#dce775!important}.text-lime-5{color:#d4e157!important}.text-lime-6{color:#cddc39!important}.text-lime-7{color:#c0ca33!important}.text-lime-8{color:#afb42b!important}.text-lime-9{color:#9e9d24!important}.text-lime-10{color:#827717!important}.text-lime-11{color:#f4ff81!important}.text-lime-12{color:#eeff41!important}.text-lime-13{color:#c6ff00!important}.text-lime-14{color:#aeea00!important}.text-yellow{color:#ffeb3b!important}.text-yellow-1{color:#fffde7!important}.text-yellow-2{color:#fff9c4!important}.text-yellow-3{color:#fff59d!important}.text-yellow-4{color:#fff176!important}.text-yellow-5{color:#ffee58!important}.text-yellow-6{color:#ffeb3b!important}.text-yellow-7{color:#fdd835!important}.text-yellow-8{color:#fbc02d!important}.text-yellow-9{color:#f9a825!important}.text-yellow-10{color:#f57f17!important}.text-yellow-11{color:#ffff8d!important}.text-yellow-12{color:#ff0!important}.text-yellow-13{color:#ffea00!important}.text-yellow-14{color:#ffd600!important}.text-amber{color:#ffc107!important}.text-amber-1{color:#fff8e1!important}.text-amber-2{color:#ffecb3!important}.text-amber-3{color:#ffe082!important}.text-amber-4{color:#ffd54f!important}.text-amber-5{color:#ffca28!important}.text-amber-6{color:#ffc107!important}.text-amber-7{color:#ffb300!important}.text-amber-8{color:#ffa000!important}.text-amber-9{color:#ff8f00!important}.text-amber-10{color:#ff6f00!important}.text-amber-11{color:#ffe57f!important}.text-amber-12{color:#ffd740!important}.text-amber-13{color:#ffc400!important}.text-amber-14{color:#ffab00!important}.text-orange{color:#ff9800!important}.text-orange-1{color:#fff3e0!important}.text-orange-2{color:#ffe0b2!important}.text-orange-3{color:#ffcc80!important}.text-orange-4{color:#ffb74d!important}.text-orange-5{color:#ffa726!important}.text-orange-6{color:#ff9800!important}.text-orange-7{color:#fb8c00!important}.text-orange-8{color:#f57c00!important}.text-orange-9{color:#ef6c00!important}.text-orange-10{color:#e65100!important}.text-orange-11{color:#ffd180!important}.text-orange-12{color:#ffab40!important}.text-orange-13{color:#ff9100!important}.text-orange-14{color:#ff6d00!important}.text-deep-orange{color:#ff5722!important}.text-deep-orange-1{color:#fbe9e7!important}.text-deep-orange-2{color:#ffccbc!important}.text-deep-orange-3{color:#ffab91!important}.text-deep-orange-4{color:#ff8a65!important}.text-deep-orange-5{color:#ff7043!important}.text-deep-orange-6{color:#ff5722!important}.text-deep-orange-7{color:#f4511e!important}.text-deep-orange-8{color:#e64a19!important}.text-deep-orange-9{color:#d84315!important}.text-deep-orange-10{color:#bf360c!important}.text-deep-orange-11{color:#ff9e80!important}.text-deep-orange-12{color:#ff6e40!important}.text-deep-orange-13{color:#ff3d00!important}.text-deep-orange-14{color:#dd2c00!important}.text-brown{color:#795548!important}.text-brown-1{color:#efebe9!important}.text-brown-2{color:#d7ccc8!important}.text-brown-3{color:#bcaaa4!important}.text-brown-4{color:#a1887f!important}.text-brown-5{color:#8d6e63!important}.text-brown-6{color:#795548!important}.text-brown-7{color:#6d4c41!important}.text-brown-8{color:#5d4037!important}.text-brown-9{color:#4e342e!important}.text-brown-10{color:#3e2723!important}.text-brown-11{color:#d7ccc8!important}.text-brown-12{color:#bcaaa4!important}.text-brown-13{color:#8d6e63!important}.text-brown-14{color:#5d4037!important}.text-grey{color:#9e9e9e!important}.text-grey-1{color:#fafafa!important}.text-grey-2{color:#f5f5f5!important}.text-grey-3{color:#eee!important}.text-grey-4{color:#e0e0e0!important}.text-grey-5{color:#bdbdbd!important}.text-grey-6{color:#9e9e9e!important}.text-grey-7{color:#757575!important}.text-grey-8{color:#616161!important}.text-grey-9{color:#424242!important}.text-grey-10{color:#212121!important}.text-grey-11{color:#f5f5f5!important}.text-grey-12{color:#eee!important}.text-grey-13{color:#bdbdbd!important}.text-grey-14{color:#616161!important}.text-blue-grey{color:#607d8b!important}.text-blue-grey-1{color:#eceff1!important}.text-blue-grey-2{color:#cfd8dc!important}.text-blue-grey-3{color:#b0bec5!important}.text-blue-grey-4{color:#90a4ae!important}.text-blue-grey-5{color:#78909c!important}.text-blue-grey-6{color:#607d8b!important}.text-blue-grey-7{color:#546e7a!important}.text-blue-grey-8{color:#455a64!important}.text-blue-grey-9{color:#37474f!important}.text-blue-grey-10{color:#263238!important}.text-blue-grey-11{color:#cfd8dc!important}.text-blue-grey-12{color:#b0bec5!important}.text-blue-grey-13{color:#78909c!important}.text-blue-grey-14{color:#455a64!important}.bg-red{background:#f44336!important}.bg-red-1{background:#ffebee!important}.bg-red-2{background:#ffcdd2!important}.bg-red-3{background:#ef9a9a!important}.bg-red-4{background:#e57373!important}.bg-red-5{background:#ef5350!important}.bg-red-6{background:#f44336!important}.bg-red-7{background:#e53935!important}.bg-red-8{background:#d32f2f!important}.bg-red-9{background:#c62828!important}.bg-red-10{background:#b71c1c!important}.bg-red-11{background:#ff8a80!important}.bg-red-12{background:#ff5252!important}.bg-red-13{background:#ff1744!important}.bg-red-14{background:#d50000!important}.bg-pink{background:#e91e63!important}.bg-pink-1{background:#fce4ec!important}.bg-pink-2{background:#f8bbd0!important}.bg-pink-3{background:#f48fb1!important}.bg-pink-4{background:#f06292!important}.bg-pink-5{background:#ec407a!important}.bg-pink-6{background:#e91e63!important}.bg-pink-7{background:#d81b60!important}.bg-pink-8{background:#c2185b!important}.bg-pink-9{background:#ad1457!important}.bg-pink-10{background:#880e4f!important}.bg-pink-11{background:#ff80ab!important}.bg-pink-12{background:#ff4081!important}.bg-pink-13{background:#f50057!important}.bg-pink-14{background:#c51162!important}.bg-purple{background:#9c27b0!important}.bg-purple-1{background:#f3e5f5!important}.bg-purple-2{background:#e1bee7!important}.bg-purple-3{background:#ce93d8!important}.bg-purple-4{background:#ba68c8!important}.bg-purple-5{background:#ab47bc!important}.bg-purple-6{background:#9c27b0!important}.bg-purple-7{background:#8e24aa!important}.bg-purple-8{background:#7b1fa2!important}.bg-purple-9{background:#6a1b9a!important}.bg-purple-10{background:#4a148c!important}.bg-purple-11{background:#ea80fc!important}.bg-purple-12{background:#e040fb!important}.bg-purple-13{background:#d500f9!important}.bg-purple-14{background:#a0f!important}.bg-deep-purple{background:#673ab7!important}.bg-deep-purple-1{background:#ede7f6!important}.bg-deep-purple-2{background:#d1c4e9!important}.bg-deep-purple-3{background:#b39ddb!important}.bg-deep-purple-4{background:#9575cd!important}.bg-deep-purple-5{background:#7e57c2!important}.bg-deep-purple-6{background:#673ab7!important}.bg-deep-purple-7{background:#5e35b1!important}.bg-deep-purple-8{background:#512da8!important}.bg-deep-purple-9{background:#4527a0!important}.bg-deep-purple-10{background:#311b92!important}.bg-deep-purple-11{background:#b388ff!important}.bg-deep-purple-12{background:#7c4dff!important}.bg-deep-purple-13{background:#651fff!important}.bg-deep-purple-14{background:#6200ea!important}.bg-indigo{background:#3f51b5!important}.bg-indigo-1{background:#e8eaf6!important}.bg-indigo-2{background:#c5cae9!important}.bg-indigo-3{background:#9fa8da!important}.bg-indigo-4{background:#7986cb!important}.bg-indigo-5{background:#5c6bc0!important}.bg-indigo-6{background:#3f51b5!important}.bg-indigo-7{background:#3949ab!important}.bg-indigo-8{background:#303f9f!important}.bg-indigo-9{background:#283593!important}.bg-indigo-10{background:#1a237e!important}.bg-indigo-11{background:#8c9eff!important}.bg-indigo-12{background:#536dfe!important}.bg-indigo-13{background:#3d5afe!important}.bg-indigo-14{background:#304ffe!important}.bg-blue{background:#2196f3!important}.bg-blue-1{background:#e3f2fd!important}.bg-blue-2{background:#bbdefb!important}.bg-blue-3{background:#90caf9!important}.bg-blue-4{background:#64b5f6!important}.bg-blue-5{background:#42a5f5!important}.bg-blue-6{background:#2196f3!important}.bg-blue-7{background:#1e88e5!important}.bg-blue-8{background:#1976d2!important}.bg-blue-9{background:#1565c0!important}.bg-blue-10{background:#0d47a1!important}.bg-blue-11{background:#82b1ff!important}.bg-blue-12{background:#448aff!important}.bg-blue-13{background:#2979ff!important}.bg-blue-14{background:#2962ff!important}.bg-light-blue{background:#03a9f4!important}.bg-light-blue-1{background:#e1f5fe!important}.bg-light-blue-2{background:#b3e5fc!important}.bg-light-blue-3{background:#81d4fa!important}.bg-light-blue-4{background:#4fc3f7!important}.bg-light-blue-5{background:#29b6f6!important}.bg-light-blue-6{background:#03a9f4!important}.bg-light-blue-7{background:#039be5!important}.bg-light-blue-8{background:#0288d1!important}.bg-light-blue-9{background:#0277bd!important}.bg-light-blue-10{background:#01579b!important}.bg-light-blue-11{background:#80d8ff!important}.bg-light-blue-12{background:#40c4ff!important}.bg-light-blue-13{background:#00b0ff!important}.bg-light-blue-14{background:#0091ea!important}.bg-cyan{background:#00bcd4!important}.bg-cyan-1{background:#e0f7fa!important}.bg-cyan-2{background:#b2ebf2!important}.bg-cyan-3{background:#80deea!important}.bg-cyan-4{background:#4dd0e1!important}.bg-cyan-5{background:#26c6da!important}.bg-cyan-6{background:#00bcd4!important}.bg-cyan-7{background:#00acc1!important}.bg-cyan-8{background:#0097a7!important}.bg-cyan-9{background:#00838f!important}.bg-cyan-10{background:#006064!important}.bg-cyan-11{background:#84ffff!important}.bg-cyan-12{background:#18ffff!important}.bg-cyan-13{background:#00e5ff!important}.bg-cyan-14{background:#00b8d4!important}.bg-teal{background:#009688!important}.bg-teal-1{background:#e0f2f1!important}.bg-teal-2{background:#b2dfdb!important}.bg-teal-3{background:#80cbc4!important}.bg-teal-4{background:#4db6ac!important}.bg-teal-5{background:#26a69a!important}.bg-teal-6{background:#009688!important}.bg-teal-7{background:#00897b!important}.bg-teal-8{background:#00796b!important}.bg-teal-9{background:#00695c!important}.bg-teal-10{background:#004d40!important}.bg-teal-11{background:#a7ffeb!important}.bg-teal-12{background:#64ffda!important}.bg-teal-13{background:#1de9b6!important}.bg-teal-14{background:#00bfa5!important}.bg-green{background:#4caf50!important}.bg-green-1{background:#e8f5e9!important}.bg-green-2{background:#c8e6c9!important}.bg-green-3{background:#a5d6a7!important}.bg-green-4{background:#81c784!important}.bg-green-5{background:#66bb6a!important}.bg-green-6{background:#4caf50!important}.bg-green-7{background:#43a047!important}.bg-green-8{background:#388e3c!important}.bg-green-9{background:#2e7d32!important}.bg-green-10{background:#1b5e20!important}.bg-green-11{background:#b9f6ca!important}.bg-green-12{background:#69f0ae!important}.bg-green-13{background:#00e676!important}.bg-green-14{background:#00c853!important}.bg-light-green{background:#8bc34a!important}.bg-light-green-1{background:#f1f8e9!important}.bg-light-green-2{background:#dcedc8!important}.bg-light-green-3{background:#c5e1a5!important}.bg-light-green-4{background:#aed581!important}.bg-light-green-5{background:#9ccc65!important}.bg-light-green-6{background:#8bc34a!important}.bg-light-green-7{background:#7cb342!important}.bg-light-green-8{background:#689f38!important}.bg-light-green-9{background:#558b2f!important}.bg-light-green-10{background:#33691e!important}.bg-light-green-11{background:#ccff90!important}.bg-light-green-12{background:#b2ff59!important}.bg-light-green-13{background:#76ff03!important}.bg-light-green-14{background:#64dd17!important}.bg-lime{background:#cddc39!important}.bg-lime-1{background:#f9fbe7!important}.bg-lime-2{background:#f0f4c3!important}.bg-lime-3{background:#e6ee9c!important}.bg-lime-4{background:#dce775!important}.bg-lime-5{background:#d4e157!important}.bg-lime-6{background:#cddc39!important}.bg-lime-7{background:#c0ca33!important}.bg-lime-8{background:#afb42b!important}.bg-lime-9{background:#9e9d24!important}.bg-lime-10{background:#827717!important}.bg-lime-11{background:#f4ff81!important}.bg-lime-12{background:#eeff41!important}.bg-lime-13{background:#c6ff00!important}.bg-lime-14{background:#aeea00!important}.bg-yellow{background:#ffeb3b!important}.bg-yellow-1{background:#fffde7!important}.bg-yellow-2{background:#fff9c4!important}.bg-yellow-3{background:#fff59d!important}.bg-yellow-4{background:#fff176!important}.bg-yellow-5{background:#ffee58!important}.bg-yellow-6{background:#ffeb3b!important}.bg-yellow-7{background:#fdd835!important}.bg-yellow-8{background:#fbc02d!important}.bg-yellow-9{background:#f9a825!important}.bg-yellow-10{background:#f57f17!important}.bg-yellow-11{background:#ffff8d!important}.bg-yellow-12{background:#ff0!important}.bg-yellow-13{background:#ffea00!important}.bg-yellow-14{background:#ffd600!important}.bg-amber{background:#ffc107!important}.bg-amber-1{background:#fff8e1!important}.bg-amber-2{background:#ffecb3!important}.bg-amber-3{background:#ffe082!important}.bg-amber-4{background:#ffd54f!important}.bg-amber-5{background:#ffca28!important}.bg-amber-6{background:#ffc107!important}.bg-amber-7{background:#ffb300!important}.bg-amber-8{background:#ffa000!important}.bg-amber-9{background:#ff8f00!important}.bg-amber-10{background:#ff6f00!important}.bg-amber-11{background:#ffe57f!important}.bg-amber-12{background:#ffd740!important}.bg-amber-13{background:#ffc400!important}.bg-amber-14{background:#ffab00!important}.bg-orange{background:#ff9800!important}.bg-orange-1{background:#fff3e0!important}.bg-orange-2{background:#ffe0b2!important}.bg-orange-3{background:#ffcc80!important}.bg-orange-4{background:#ffb74d!important}.bg-orange-5{background:#ffa726!important}.bg-orange-6{background:#ff9800!important}.bg-orange-7{background:#fb8c00!important}.bg-orange-8{background:#f57c00!important}.bg-orange-9{background:#ef6c00!important}.bg-orange-10{background:#e65100!important}.bg-orange-11{background:#ffd180!important}.bg-orange-12{background:#ffab40!important}.bg-orange-13{background:#ff9100!important}.bg-orange-14{background:#ff6d00!important}.bg-deep-orange{background:#ff5722!important}.bg-deep-orange-1{background:#fbe9e7!important}.bg-deep-orange-2{background:#ffccbc!important}.bg-deep-orange-3{background:#ffab91!important}.bg-deep-orange-4{background:#ff8a65!important}.bg-deep-orange-5{background:#ff7043!important}.bg-deep-orange-6{background:#ff5722!important}.bg-deep-orange-7{background:#f4511e!important}.bg-deep-orange-8{background:#e64a19!important}.bg-deep-orange-9{background:#d84315!important}.bg-deep-orange-10{background:#bf360c!important}.bg-deep-orange-11{background:#ff9e80!important}.bg-deep-orange-12{background:#ff6e40!important}.bg-deep-orange-13{background:#ff3d00!important}.bg-deep-orange-14{background:#dd2c00!important}.bg-brown{background:#795548!important}.bg-brown-1{background:#efebe9!important}.bg-brown-2{background:#d7ccc8!important}.bg-brown-3{background:#bcaaa4!important}.bg-brown-4{background:#a1887f!important}.bg-brown-5{background:#8d6e63!important}.bg-brown-6{background:#795548!important}.bg-brown-7{background:#6d4c41!important}.bg-brown-8{background:#5d4037!important}.bg-brown-9{background:#4e342e!important}.bg-brown-10{background:#3e2723!important}.bg-brown-11{background:#d7ccc8!important}.bg-brown-12{background:#bcaaa4!important}.bg-brown-13{background:#8d6e63!important}.bg-brown-14{background:#5d4037!important}.bg-grey{background:#9e9e9e!important}.bg-grey-1{background:#fafafa!important}.bg-grey-2{background:#f5f5f5!important}.bg-grey-3{background:#eee!important}.bg-grey-4{background:#e0e0e0!important}.bg-grey-5{background:#bdbdbd!important}.bg-grey-6{background:#9e9e9e!important}.bg-grey-7{background:#757575!important}.bg-grey-8{background:#616161!important}.bg-grey-9{background:#424242!important}.bg-grey-10{background:#212121!important}.bg-grey-11{background:#f5f5f5!important}.bg-grey-12{background:#eee!important}.bg-grey-13{background:#bdbdbd!important}.bg-grey-14{background:#616161!important}.bg-blue-grey{background:#607d8b!important}.bg-blue-grey-1{background:#eceff1!important}.bg-blue-grey-2{background:#cfd8dc!important}.bg-blue-grey-3{background:#b0bec5!important}.bg-blue-grey-4{background:#90a4ae!important}.bg-blue-grey-5{background:#78909c!important}.bg-blue-grey-6{background:#607d8b!important}.bg-blue-grey-7{background:#546e7a!important}.bg-blue-grey-8{background:#455a64!important}.bg-blue-grey-9{background:#37474f!important}.bg-blue-grey-10{background:#263238!important}.bg-blue-grey-11{background:#cfd8dc!important}.bg-blue-grey-12{background:#b0bec5!important}.bg-blue-grey-13{background:#78909c!important}.bg-blue-grey-14{background:#455a64!important}.shadow-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)!important}.shadow-1{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f}.shadow-up-1{box-shadow:0 -1px 3px #0003,0 -1px 1px #00000024,0 -2px 1px -1px #0000001f}.shadow-2{box-shadow:0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f}.shadow-up-2{box-shadow:0 -1px 5px #0003,0 -2px 2px #00000024,0 -3px 1px -2px #0000001f}.shadow-3{box-shadow:0 1px 8px #0003,0 3px 4px #00000024,0 3px 3px -2px #0000001f}.shadow-up-3{box-shadow:0 -1px 8px #0003,0 -3px 4px #00000024,0 -3px 3px -2px #0000001f}.shadow-4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.shadow-up-4{box-shadow:0 -2px 4px -1px #0003,0 -4px 5px #00000024,0 -1px 10px #0000001f}.shadow-5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.shadow-up-5{box-shadow:0 -3px 5px -1px #0003,0 -5px 8px #00000024,0 -1px 14px #0000001f}.shadow-6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.shadow-up-6{box-shadow:0 -3px 5px -1px #0003,0 -6px 10px #00000024,0 -1px 18px #0000001f}.shadow-7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.shadow-up-7{box-shadow:0 -4px 5px -2px #0003,0 -7px 10px 1px #00000024,0 -2px 16px 1px #0000001f}.shadow-8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.shadow-up-8{box-shadow:0 -5px 5px -3px #0003,0 -8px 10px 1px #00000024,0 -3px 14px 2px #0000001f}.shadow-9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.shadow-up-9{box-shadow:0 -5px 6px -3px #0003,0 -9px 12px 1px #00000024,0 -3px 16px 2px #0000001f}.shadow-10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.shadow-up-10{box-shadow:0 -6px 6px -3px #0003,0 -10px 14px 1px #00000024,0 -4px 18px 3px #0000001f}.shadow-11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.shadow-up-11{box-shadow:0 -6px 7px -4px #0003,0 -11px 15px 1px #00000024,0 -4px 20px 3px #0000001f}.shadow-12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.shadow-up-12{box-shadow:0 -7px 8px -4px #0003,0 -12px 17px 2px #00000024,0 -5px 22px 4px #0000001f}.shadow-13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.shadow-up-13{box-shadow:0 -7px 8px -4px #0003,0 -13px 19px 2px #00000024,0 -5px 24px 4px #0000001f}.shadow-14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.shadow-up-14{box-shadow:0 -7px 9px -4px #0003,0 -14px 21px 2px #00000024,0 -5px 26px 4px #0000001f}.shadow-15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.shadow-up-15{box-shadow:0 -8px 9px -5px #0003,0 -15px 22px 2px #00000024,0 -6px 28px 5px #0000001f}.shadow-16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.shadow-up-16{box-shadow:0 -8px 10px -5px #0003,0 -16px 24px 2px #00000024,0 -6px 30px 5px #0000001f}.shadow-17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.shadow-up-17{box-shadow:0 -8px 11px -5px #0003,0 -17px 26px 2px #00000024,0 -6px 32px 5px #0000001f}.shadow-18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.shadow-up-18{box-shadow:0 -9px 11px -5px #0003,0 -18px 28px 2px #00000024,0 -7px 34px 6px #0000001f}.shadow-19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.shadow-up-19{box-shadow:0 -9px 12px -6px #0003,0 -19px 29px 2px #00000024,0 -7px 36px 6px #0000001f}.shadow-20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.shadow-up-20{box-shadow:0 -10px 13px -6px #0003,0 -20px 31px 3px #00000024,0 -8px 38px 7px #0000001f}.shadow-21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.shadow-up-21{box-shadow:0 -10px 13px -6px #0003,0 -21px 33px 3px #00000024,0 -8px 40px 7px #0000001f}.shadow-22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.shadow-up-22{box-shadow:0 -10px 14px -6px #0003,0 -22px 35px 3px #00000024,0 -8px 42px 7px #0000001f}.shadow-23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.shadow-up-23{box-shadow:0 -11px 14px -7px #0003,0 -23px 36px 3px #00000024,0 -9px 44px 8px #0000001f}.shadow-24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.shadow-up-24{box-shadow:0 -11px 15px -7px #0003,0 -24px 38px 3px #00000024,0 -9px 46px 8px #0000001f}.inset-shadow{box-shadow:0 7px 9px -7px #000000b3 inset}.inset-shadow-down{box-shadow:0 -7px 9px -7px #000000b3 inset}body.body--dark .shadow-1{box-shadow:0 1px 3px #fff3,0 1px 1px #ffffff24,0 2px 1px -1px #ffffff1f}body.body--dark .shadow-up-1{box-shadow:0 -1px 3px #fff3,0 -1px 1px #ffffff24,0 -2px 1px -1px #ffffff1f}body.body--dark .shadow-2{box-shadow:0 1px 5px #fff3,0 2px 2px #ffffff24,0 3px 1px -2px #ffffff1f}body.body--dark .shadow-up-2{box-shadow:0 -1px 5px #fff3,0 -2px 2px #ffffff24,0 -3px 1px -2px #ffffff1f}body.body--dark .shadow-3{box-shadow:0 1px 8px #fff3,0 3px 4px #ffffff24,0 3px 3px -2px #ffffff1f}body.body--dark .shadow-up-3{box-shadow:0 -1px 8px #fff3,0 -3px 4px #ffffff24,0 -3px 3px -2px #ffffff1f}body.body--dark .shadow-4{box-shadow:0 2px 4px -1px #fff3,0 4px 5px #ffffff24,0 1px 10px #ffffff1f}body.body--dark .shadow-up-4{box-shadow:0 -2px 4px -1px #fff3,0 -4px 5px #ffffff24,0 -1px 10px #ffffff1f}body.body--dark .shadow-5{box-shadow:0 3px 5px -1px #fff3,0 5px 8px #ffffff24,0 1px 14px #ffffff1f}body.body--dark .shadow-up-5{box-shadow:0 -3px 5px -1px #fff3,0 -5px 8px #ffffff24,0 -1px 14px #ffffff1f}body.body--dark .shadow-6{box-shadow:0 3px 5px -1px #fff3,0 6px 10px #ffffff24,0 1px 18px #ffffff1f}body.body--dark .shadow-up-6{box-shadow:0 -3px 5px -1px #fff3,0 -6px 10px #ffffff24,0 -1px 18px #ffffff1f}body.body--dark .shadow-7{box-shadow:0 4px 5px -2px #fff3,0 7px 10px 1px #ffffff24,0 2px 16px 1px #ffffff1f}body.body--dark .shadow-up-7{box-shadow:0 -4px 5px -2px #fff3,0 -7px 10px 1px #ffffff24,0 -2px 16px 1px #ffffff1f}body.body--dark .shadow-8{box-shadow:0 5px 5px -3px #fff3,0 8px 10px 1px #ffffff24,0 3px 14px 2px #ffffff1f}body.body--dark .shadow-up-8{box-shadow:0 -5px 5px -3px #fff3,0 -8px 10px 1px #ffffff24,0 -3px 14px 2px #ffffff1f}body.body--dark .shadow-9{box-shadow:0 5px 6px -3px #fff3,0 9px 12px 1px #ffffff24,0 3px 16px 2px #ffffff1f}body.body--dark .shadow-up-9{box-shadow:0 -5px 6px -3px #fff3,0 -9px 12px 1px #ffffff24,0 -3px 16px 2px #ffffff1f}body.body--dark .shadow-10{box-shadow:0 6px 6px -3px #fff3,0 10px 14px 1px #ffffff24,0 4px 18px 3px #ffffff1f}body.body--dark .shadow-up-10{box-shadow:0 -6px 6px -3px #fff3,0 -10px 14px 1px #ffffff24,0 -4px 18px 3px #ffffff1f}body.body--dark .shadow-11{box-shadow:0 6px 7px -4px #fff3,0 11px 15px 1px #ffffff24,0 4px 20px 3px #ffffff1f}body.body--dark .shadow-up-11{box-shadow:0 -6px 7px -4px #fff3,0 -11px 15px 1px #ffffff24,0 -4px 20px 3px #ffffff1f}body.body--dark .shadow-12{box-shadow:0 7px 8px -4px #fff3,0 12px 17px 2px #ffffff24,0 5px 22px 4px #ffffff1f}body.body--dark .shadow-up-12{box-shadow:0 -7px 8px -4px #fff3,0 -12px 17px 2px #ffffff24,0 -5px 22px 4px #ffffff1f}body.body--dark .shadow-13{box-shadow:0 7px 8px -4px #fff3,0 13px 19px 2px #ffffff24,0 5px 24px 4px #ffffff1f}body.body--dark .shadow-up-13{box-shadow:0 -7px 8px -4px #fff3,0 -13px 19px 2px #ffffff24,0 -5px 24px 4px #ffffff1f}body.body--dark .shadow-14{box-shadow:0 7px 9px -4px #fff3,0 14px 21px 2px #ffffff24,0 5px 26px 4px #ffffff1f}body.body--dark .shadow-up-14{box-shadow:0 -7px 9px -4px #fff3,0 -14px 21px 2px #ffffff24,0 -5px 26px 4px #ffffff1f}body.body--dark .shadow-15{box-shadow:0 8px 9px -5px #fff3,0 15px 22px 2px #ffffff24,0 6px 28px 5px #ffffff1f}body.body--dark .shadow-up-15{box-shadow:0 -8px 9px -5px #fff3,0 -15px 22px 2px #ffffff24,0 -6px 28px 5px #ffffff1f}body.body--dark .shadow-16{box-shadow:0 8px 10px -5px #fff3,0 16px 24px 2px #ffffff24,0 6px 30px 5px #ffffff1f}body.body--dark .shadow-up-16{box-shadow:0 -8px 10px -5px #fff3,0 -16px 24px 2px #ffffff24,0 -6px 30px 5px #ffffff1f}body.body--dark .shadow-17{box-shadow:0 8px 11px -5px #fff3,0 17px 26px 2px #ffffff24,0 6px 32px 5px #ffffff1f}body.body--dark .shadow-up-17{box-shadow:0 -8px 11px -5px #fff3,0 -17px 26px 2px #ffffff24,0 -6px 32px 5px #ffffff1f}body.body--dark .shadow-18{box-shadow:0 9px 11px -5px #fff3,0 18px 28px 2px #ffffff24,0 7px 34px 6px #ffffff1f}body.body--dark .shadow-up-18{box-shadow:0 -9px 11px -5px #fff3,0 -18px 28px 2px #ffffff24,0 -7px 34px 6px #ffffff1f}body.body--dark .shadow-19{box-shadow:0 9px 12px -6px #fff3,0 19px 29px 2px #ffffff24,0 7px 36px 6px #ffffff1f}body.body--dark .shadow-up-19{box-shadow:0 -9px 12px -6px #fff3,0 -19px 29px 2px #ffffff24,0 -7px 36px 6px #ffffff1f}body.body--dark .shadow-20{box-shadow:0 10px 13px -6px #fff3,0 20px 31px 3px #ffffff24,0 8px 38px 7px #ffffff1f}body.body--dark .shadow-up-20{box-shadow:0 -10px 13px -6px #fff3,0 -20px 31px 3px #ffffff24,0 -8px 38px 7px #ffffff1f}body.body--dark .shadow-21{box-shadow:0 10px 13px -6px #fff3,0 21px 33px 3px #ffffff24,0 8px 40px 7px #ffffff1f}body.body--dark .shadow-up-21{box-shadow:0 -10px 13px -6px #fff3,0 -21px 33px 3px #ffffff24,0 -8px 40px 7px #ffffff1f}body.body--dark .shadow-22{box-shadow:0 10px 14px -6px #fff3,0 22px 35px 3px #ffffff24,0 8px 42px 7px #ffffff1f}body.body--dark .shadow-up-22{box-shadow:0 -10px 14px -6px #fff3,0 -22px 35px 3px #ffffff24,0 -8px 42px 7px #ffffff1f}body.body--dark .shadow-23{box-shadow:0 11px 14px -7px #fff3,0 23px 36px 3px #ffffff24,0 9px 44px 8px #ffffff1f}body.body--dark .shadow-up-23{box-shadow:0 -11px 14px -7px #fff3,0 -23px 36px 3px #ffffff24,0 -9px 44px 8px #ffffff1f}body.body--dark .shadow-24{box-shadow:0 11px 15px -7px #fff3,0 24px 38px 3px #ffffff24,0 9px 46px 8px #ffffff1f}body.body--dark .shadow-up-24{box-shadow:0 -11px 15px -7px #fff3,0 -24px 38px 3px #ffffff24,0 -9px 46px 8px #ffffff1f}body.body--dark .inset-shadow{box-shadow:0 7px 9px -7px #ffffffb3 inset}body.body--dark .inset-shadow-down{box-shadow:0 -7px 9px -7px #ffffffb3 inset}.no-shadow,.shadow-0{box-shadow:none!important}.z-marginals{z-index:2000}.z-notify{z-index:9500}.z-fullscreen{z-index:6000}.z-inherit{z-index:inherit!important}.row,.column,.flex{display:flex;flex-wrap:wrap}.row.inline,.column.inline,.flex.inline{display:inline-flex}.row.reverse{flex-direction:row-reverse}.column{flex-direction:column}.column.reverse{flex-direction:column-reverse}.wrap{flex-wrap:wrap}.no-wrap{flex-wrap:nowrap}.reverse-wrap{flex-wrap:wrap-reverse}.order-first{order:-10000}.order-last{order:10000}.order-none{order:0}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center,.flex-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center,.flex-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-stretch{align-content:stretch}.content-between{align-content:space-between}.content-around{align-content:space-around}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.q-gutter-x-none,.q-gutter-none{margin-left:0}.q-gutter-x-none>*,.q-gutter-none>*{margin-left:0}.q-gutter-y-none,.q-gutter-none{margin-top:0}.q-gutter-y-none>*,.q-gutter-none>*{margin-top:0}.q-col-gutter-x-none,.q-col-gutter-none{margin-left:0}.q-col-gutter-x-none>*,.q-col-gutter-none>*{padding-left:0}.q-col-gutter-y-none,.q-col-gutter-none{margin-top:0}.q-col-gutter-y-none>*,.q-col-gutter-none>*{padding-top:0}.q-gutter-x-xs,.q-gutter-xs{margin-left:-4px}.q-gutter-x-xs>*,.q-gutter-xs>*{margin-left:4px}.q-gutter-y-xs,.q-gutter-xs{margin-top:-4px}.q-gutter-y-xs>*,.q-gutter-xs>*{margin-top:4px}.q-col-gutter-x-xs,.q-col-gutter-xs{margin-left:-4px}.q-col-gutter-x-xs>*,.q-col-gutter-xs>*{padding-left:4px}.q-col-gutter-y-xs,.q-col-gutter-xs{margin-top:-4px}.q-col-gutter-y-xs>*,.q-col-gutter-xs>*{padding-top:4px}.q-gutter-x-sm,.q-gutter-sm{margin-left:-8px}.q-gutter-x-sm>*,.q-gutter-sm>*{margin-left:8px}.q-gutter-y-sm,.q-gutter-sm{margin-top:-8px}.q-gutter-y-sm>*,.q-gutter-sm>*{margin-top:8px}.q-col-gutter-x-sm,.q-col-gutter-sm{margin-left:-8px}.q-col-gutter-x-sm>*,.q-col-gutter-sm>*{padding-left:8px}.q-col-gutter-y-sm,.q-col-gutter-sm{margin-top:-8px}.q-col-gutter-y-sm>*,.q-col-gutter-sm>*{padding-top:8px}.q-gutter-x-md,.q-gutter-md{margin-left:-16px}.q-gutter-x-md>*,.q-gutter-md>*{margin-left:16px}.q-gutter-y-md,.q-gutter-md{margin-top:-16px}.q-gutter-y-md>*,.q-gutter-md>*{margin-top:16px}.q-col-gutter-x-md,.q-col-gutter-md{margin-left:-16px}.q-col-gutter-x-md>*,.q-col-gutter-md>*{padding-left:16px}.q-col-gutter-y-md,.q-col-gutter-md{margin-top:-16px}.q-col-gutter-y-md>*,.q-col-gutter-md>*{padding-top:16px}.q-gutter-x-lg,.q-gutter-lg{margin-left:-24px}.q-gutter-x-lg>*,.q-gutter-lg>*{margin-left:24px}.q-gutter-y-lg,.q-gutter-lg{margin-top:-24px}.q-gutter-y-lg>*,.q-gutter-lg>*{margin-top:24px}.q-col-gutter-x-lg,.q-col-gutter-lg{margin-left:-24px}.q-col-gutter-x-lg>*,.q-col-gutter-lg>*{padding-left:24px}.q-col-gutter-y-lg,.q-col-gutter-lg{margin-top:-24px}.q-col-gutter-y-lg>*,.q-col-gutter-lg>*{padding-top:24px}.q-gutter-x-xl,.q-gutter-xl{margin-left:-48px}.q-gutter-x-xl>*,.q-gutter-xl>*{margin-left:48px}.q-gutter-y-xl,.q-gutter-xl{margin-top:-48px}.q-gutter-y-xl>*,.q-gutter-xl>*{margin-top:48px}.q-col-gutter-x-xl,.q-col-gutter-xl{margin-left:-48px}.q-col-gutter-x-xl>*,.q-col-gutter-xl>*{padding-left:48px}.q-col-gutter-y-xl,.q-col-gutter-xl{margin-top:-48px}.q-col-gutter-y-xl>*,.q-col-gutter-xl>*{padding-top:48px}@media (min-width: 0){.row>.col,.flex>.col,.row>.col-auto,.flex>.col-auto,.row>.col-grow,.flex>.col-grow,.row>.col-shrink,.flex>.col-shrink,.row>.col-xs,.flex>.col-xs,.row>.col-xs-auto,.row>.col-12,.row>.col-xs-12,.row>.col-11,.row>.col-xs-11,.row>.col-10,.row>.col-xs-10,.row>.col-9,.row>.col-xs-9,.row>.col-8,.row>.col-xs-8,.row>.col-7,.row>.col-xs-7,.row>.col-6,.row>.col-xs-6,.row>.col-5,.row>.col-xs-5,.row>.col-4,.row>.col-xs-4,.row>.col-3,.row>.col-xs-3,.row>.col-2,.row>.col-xs-2,.row>.col-1,.row>.col-xs-1,.row>.col-0,.row>.col-xs-0,.flex>.col-xs-auto,.flex>.col-12,.flex>.col-xs-12,.flex>.col-11,.flex>.col-xs-11,.flex>.col-10,.flex>.col-xs-10,.flex>.col-9,.flex>.col-xs-9,.flex>.col-8,.flex>.col-xs-8,.flex>.col-7,.flex>.col-xs-7,.flex>.col-6,.flex>.col-xs-6,.flex>.col-5,.flex>.col-xs-5,.flex>.col-4,.flex>.col-xs-4,.flex>.col-3,.flex>.col-xs-3,.flex>.col-2,.flex>.col-xs-2,.flex>.col-1,.flex>.col-xs-1,.flex>.col-0,.flex>.col-xs-0,.row>.col-xs-grow,.flex>.col-xs-grow,.row>.col-xs-shrink,.flex>.col-xs-shrink{width:auto;min-width:0;max-width:100%}.column>.col,.flex>.col,.column>.col-auto,.flex>.col-auto,.column>.col-grow,.flex>.col-grow,.column>.col-shrink,.flex>.col-shrink,.column>.col-xs,.flex>.col-xs,.column>.col-xs-auto,.column>.col-12,.column>.col-xs-12,.column>.col-11,.column>.col-xs-11,.column>.col-10,.column>.col-xs-10,.column>.col-9,.column>.col-xs-9,.column>.col-8,.column>.col-xs-8,.column>.col-7,.column>.col-xs-7,.column>.col-6,.column>.col-xs-6,.column>.col-5,.column>.col-xs-5,.column>.col-4,.column>.col-xs-4,.column>.col-3,.column>.col-xs-3,.column>.col-2,.column>.col-xs-2,.column>.col-1,.column>.col-xs-1,.column>.col-0,.column>.col-xs-0,.flex>.col-xs-auto,.flex>.col-12,.flex>.col-xs-12,.flex>.col-11,.flex>.col-xs-11,.flex>.col-10,.flex>.col-xs-10,.flex>.col-9,.flex>.col-xs-9,.flex>.col-8,.flex>.col-xs-8,.flex>.col-7,.flex>.col-xs-7,.flex>.col-6,.flex>.col-xs-6,.flex>.col-5,.flex>.col-xs-5,.flex>.col-4,.flex>.col-xs-4,.flex>.col-3,.flex>.col-xs-3,.flex>.col-2,.flex>.col-xs-2,.flex>.col-1,.flex>.col-xs-1,.flex>.col-0,.flex>.col-xs-0,.column>.col-xs-grow,.flex>.col-xs-grow,.column>.col-xs-shrink,.flex>.col-xs-shrink{height:auto;min-height:0;max-height:100%}.col,.col-xs{flex:10000 1 0%}.col-auto,.col-xs-auto,.col-12,.col-xs-12,.col-11,.col-xs-11,.col-10,.col-xs-10,.col-9,.col-xs-9,.col-8,.col-xs-8,.col-7,.col-xs-7,.col-6,.col-xs-6,.col-5,.col-xs-5,.col-4,.col-xs-4,.col-3,.col-xs-3,.col-2,.col-xs-2,.col-1,.col-xs-1,.col-0,.col-xs-0{flex:0 0 auto}.col-grow,.col-xs-grow{flex:1 0 auto}.col-shrink,.col-xs-shrink{flex:0 1 auto}.row>.col-0,.row>.col-xs-0{height:auto;width:0%}.row>.offset-0,.row>.offset-xs-0{margin-left:0%}.column>.col-0,.column>.col-xs-0{height:0%;width:auto}.row>.col-1,.row>.col-xs-1{height:auto;width:8.3333%}.row>.offset-1,.row>.offset-xs-1{margin-left:8.3333%}.column>.col-1,.column>.col-xs-1{height:8.3333%;width:auto}.row>.col-2,.row>.col-xs-2{height:auto;width:16.6667%}.row>.offset-2,.row>.offset-xs-2{margin-left:16.6667%}.column>.col-2,.column>.col-xs-2{height:16.6667%;width:auto}.row>.col-3,.row>.col-xs-3{height:auto;width:25%}.row>.offset-3,.row>.offset-xs-3{margin-left:25%}.column>.col-3,.column>.col-xs-3{height:25%;width:auto}.row>.col-4,.row>.col-xs-4{height:auto;width:33.3333%}.row>.offset-4,.row>.offset-xs-4{margin-left:33.3333%}.column>.col-4,.column>.col-xs-4{height:33.3333%;width:auto}.row>.col-5,.row>.col-xs-5{height:auto;width:41.6667%}.row>.offset-5,.row>.offset-xs-5{margin-left:41.6667%}.column>.col-5,.column>.col-xs-5{height:41.6667%;width:auto}.row>.col-6,.row>.col-xs-6{height:auto;width:50%}.row>.offset-6,.row>.offset-xs-6{margin-left:50%}.column>.col-6,.column>.col-xs-6{height:50%;width:auto}.row>.col-7,.row>.col-xs-7{height:auto;width:58.3333%}.row>.offset-7,.row>.offset-xs-7{margin-left:58.3333%}.column>.col-7,.column>.col-xs-7{height:58.3333%;width:auto}.row>.col-8,.row>.col-xs-8{height:auto;width:66.6667%}.row>.offset-8,.row>.offset-xs-8{margin-left:66.6667%}.column>.col-8,.column>.col-xs-8{height:66.6667%;width:auto}.row>.col-9,.row>.col-xs-9{height:auto;width:75%}.row>.offset-9,.row>.offset-xs-9{margin-left:75%}.column>.col-9,.column>.col-xs-9{height:75%;width:auto}.row>.col-10,.row>.col-xs-10{height:auto;width:83.3333%}.row>.offset-10,.row>.offset-xs-10{margin-left:83.3333%}.column>.col-10,.column>.col-xs-10{height:83.3333%;width:auto}.row>.col-11,.row>.col-xs-11{height:auto;width:91.6667%}.row>.offset-11,.row>.offset-xs-11{margin-left:91.6667%}.column>.col-11,.column>.col-xs-11{height:91.6667%;width:auto}.row>.col-12,.row>.col-xs-12{height:auto;width:100%}.row>.offset-12,.row>.offset-xs-12{margin-left:100%}.column>.col-12,.column>.col-xs-12{height:100%;width:auto}.row>.col-all{height:auto;flex:0 0 100%}}@media (min-width: 600px){.row>.col-sm,.flex>.col-sm,.row>.col-sm-auto,.row>.col-sm-12,.row>.col-sm-11,.row>.col-sm-10,.row>.col-sm-9,.row>.col-sm-8,.row>.col-sm-7,.row>.col-sm-6,.row>.col-sm-5,.row>.col-sm-4,.row>.col-sm-3,.row>.col-sm-2,.row>.col-sm-1,.row>.col-sm-0,.flex>.col-sm-auto,.flex>.col-sm-12,.flex>.col-sm-11,.flex>.col-sm-10,.flex>.col-sm-9,.flex>.col-sm-8,.flex>.col-sm-7,.flex>.col-sm-6,.flex>.col-sm-5,.flex>.col-sm-4,.flex>.col-sm-3,.flex>.col-sm-2,.flex>.col-sm-1,.flex>.col-sm-0,.row>.col-sm-grow,.flex>.col-sm-grow,.row>.col-sm-shrink,.flex>.col-sm-shrink{width:auto;min-width:0;max-width:100%}.column>.col-sm,.flex>.col-sm,.column>.col-sm-auto,.column>.col-sm-12,.column>.col-sm-11,.column>.col-sm-10,.column>.col-sm-9,.column>.col-sm-8,.column>.col-sm-7,.column>.col-sm-6,.column>.col-sm-5,.column>.col-sm-4,.column>.col-sm-3,.column>.col-sm-2,.column>.col-sm-1,.column>.col-sm-0,.flex>.col-sm-auto,.flex>.col-sm-12,.flex>.col-sm-11,.flex>.col-sm-10,.flex>.col-sm-9,.flex>.col-sm-8,.flex>.col-sm-7,.flex>.col-sm-6,.flex>.col-sm-5,.flex>.col-sm-4,.flex>.col-sm-3,.flex>.col-sm-2,.flex>.col-sm-1,.flex>.col-sm-0,.column>.col-sm-grow,.flex>.col-sm-grow,.column>.col-sm-shrink,.flex>.col-sm-shrink{height:auto;min-height:0;max-height:100%}.col-sm{flex:10000 1 0%}.col-sm-auto,.col-sm-12,.col-sm-11,.col-sm-10,.col-sm-9,.col-sm-8,.col-sm-7,.col-sm-6,.col-sm-5,.col-sm-4,.col-sm-3,.col-sm-2,.col-sm-1,.col-sm-0{flex:0 0 auto}.col-sm-grow{flex:1 0 auto}.col-sm-shrink{flex:0 1 auto}.row>.col-sm-0{height:auto;width:0%}.row>.offset-sm-0{margin-left:0%}.column>.col-sm-0{height:0%;width:auto}.row>.col-sm-1{height:auto;width:8.3333%}.row>.offset-sm-1{margin-left:8.3333%}.column>.col-sm-1{height:8.3333%;width:auto}.row>.col-sm-2{height:auto;width:16.6667%}.row>.offset-sm-2{margin-left:16.6667%}.column>.col-sm-2{height:16.6667%;width:auto}.row>.col-sm-3{height:auto;width:25%}.row>.offset-sm-3{margin-left:25%}.column>.col-sm-3{height:25%;width:auto}.row>.col-sm-4{height:auto;width:33.3333%}.row>.offset-sm-4{margin-left:33.3333%}.column>.col-sm-4{height:33.3333%;width:auto}.row>.col-sm-5{height:auto;width:41.6667%}.row>.offset-sm-5{margin-left:41.6667%}.column>.col-sm-5{height:41.6667%;width:auto}.row>.col-sm-6{height:auto;width:50%}.row>.offset-sm-6{margin-left:50%}.column>.col-sm-6{height:50%;width:auto}.row>.col-sm-7{height:auto;width:58.3333%}.row>.offset-sm-7{margin-left:58.3333%}.column>.col-sm-7{height:58.3333%;width:auto}.row>.col-sm-8{height:auto;width:66.6667%}.row>.offset-sm-8{margin-left:66.6667%}.column>.col-sm-8{height:66.6667%;width:auto}.row>.col-sm-9{height:auto;width:75%}.row>.offset-sm-9{margin-left:75%}.column>.col-sm-9{height:75%;width:auto}.row>.col-sm-10{height:auto;width:83.3333%}.row>.offset-sm-10{margin-left:83.3333%}.column>.col-sm-10{height:83.3333%;width:auto}.row>.col-sm-11{height:auto;width:91.6667%}.row>.offset-sm-11{margin-left:91.6667%}.column>.col-sm-11{height:91.6667%;width:auto}.row>.col-sm-12{height:auto;width:100%}.row>.offset-sm-12{margin-left:100%}.column>.col-sm-12{height:100%;width:auto}}@media (min-width: 1024px){.row>.col-md,.flex>.col-md,.row>.col-md-auto,.row>.col-md-12,.row>.col-md-11,.row>.col-md-10,.row>.col-md-9,.row>.col-md-8,.row>.col-md-7,.row>.col-md-6,.row>.col-md-5,.row>.col-md-4,.row>.col-md-3,.row>.col-md-2,.row>.col-md-1,.row>.col-md-0,.flex>.col-md-auto,.flex>.col-md-12,.flex>.col-md-11,.flex>.col-md-10,.flex>.col-md-9,.flex>.col-md-8,.flex>.col-md-7,.flex>.col-md-6,.flex>.col-md-5,.flex>.col-md-4,.flex>.col-md-3,.flex>.col-md-2,.flex>.col-md-1,.flex>.col-md-0,.row>.col-md-grow,.flex>.col-md-grow,.row>.col-md-shrink,.flex>.col-md-shrink{width:auto;min-width:0;max-width:100%}.column>.col-md,.flex>.col-md,.column>.col-md-auto,.column>.col-md-12,.column>.col-md-11,.column>.col-md-10,.column>.col-md-9,.column>.col-md-8,.column>.col-md-7,.column>.col-md-6,.column>.col-md-5,.column>.col-md-4,.column>.col-md-3,.column>.col-md-2,.column>.col-md-1,.column>.col-md-0,.flex>.col-md-auto,.flex>.col-md-12,.flex>.col-md-11,.flex>.col-md-10,.flex>.col-md-9,.flex>.col-md-8,.flex>.col-md-7,.flex>.col-md-6,.flex>.col-md-5,.flex>.col-md-4,.flex>.col-md-3,.flex>.col-md-2,.flex>.col-md-1,.flex>.col-md-0,.column>.col-md-grow,.flex>.col-md-grow,.column>.col-md-shrink,.flex>.col-md-shrink{height:auto;min-height:0;max-height:100%}.col-md{flex:10000 1 0%}.col-md-auto,.col-md-12,.col-md-11,.col-md-10,.col-md-9,.col-md-8,.col-md-7,.col-md-6,.col-md-5,.col-md-4,.col-md-3,.col-md-2,.col-md-1,.col-md-0{flex:0 0 auto}.col-md-grow{flex:1 0 auto}.col-md-shrink{flex:0 1 auto}.row>.col-md-0{height:auto;width:0%}.row>.offset-md-0{margin-left:0%}.column>.col-md-0{height:0%;width:auto}.row>.col-md-1{height:auto;width:8.3333%}.row>.offset-md-1{margin-left:8.3333%}.column>.col-md-1{height:8.3333%;width:auto}.row>.col-md-2{height:auto;width:16.6667%}.row>.offset-md-2{margin-left:16.6667%}.column>.col-md-2{height:16.6667%;width:auto}.row>.col-md-3{height:auto;width:25%}.row>.offset-md-3{margin-left:25%}.column>.col-md-3{height:25%;width:auto}.row>.col-md-4{height:auto;width:33.3333%}.row>.offset-md-4{margin-left:33.3333%}.column>.col-md-4{height:33.3333%;width:auto}.row>.col-md-5{height:auto;width:41.6667%}.row>.offset-md-5{margin-left:41.6667%}.column>.col-md-5{height:41.6667%;width:auto}.row>.col-md-6{height:auto;width:50%}.row>.offset-md-6{margin-left:50%}.column>.col-md-6{height:50%;width:auto}.row>.col-md-7{height:auto;width:58.3333%}.row>.offset-md-7{margin-left:58.3333%}.column>.col-md-7{height:58.3333%;width:auto}.row>.col-md-8{height:auto;width:66.6667%}.row>.offset-md-8{margin-left:66.6667%}.column>.col-md-8{height:66.6667%;width:auto}.row>.col-md-9{height:auto;width:75%}.row>.offset-md-9{margin-left:75%}.column>.col-md-9{height:75%;width:auto}.row>.col-md-10{height:auto;width:83.3333%}.row>.offset-md-10{margin-left:83.3333%}.column>.col-md-10{height:83.3333%;width:auto}.row>.col-md-11{height:auto;width:91.6667%}.row>.offset-md-11{margin-left:91.6667%}.column>.col-md-11{height:91.6667%;width:auto}.row>.col-md-12{height:auto;width:100%}.row>.offset-md-12{margin-left:100%}.column>.col-md-12{height:100%;width:auto}}@media (min-width: 1440px){.row>.col-lg,.flex>.col-lg,.row>.col-lg-auto,.row>.col-lg-12,.row>.col-lg-11,.row>.col-lg-10,.row>.col-lg-9,.row>.col-lg-8,.row>.col-lg-7,.row>.col-lg-6,.row>.col-lg-5,.row>.col-lg-4,.row>.col-lg-3,.row>.col-lg-2,.row>.col-lg-1,.row>.col-lg-0,.flex>.col-lg-auto,.flex>.col-lg-12,.flex>.col-lg-11,.flex>.col-lg-10,.flex>.col-lg-9,.flex>.col-lg-8,.flex>.col-lg-7,.flex>.col-lg-6,.flex>.col-lg-5,.flex>.col-lg-4,.flex>.col-lg-3,.flex>.col-lg-2,.flex>.col-lg-1,.flex>.col-lg-0,.row>.col-lg-grow,.flex>.col-lg-grow,.row>.col-lg-shrink,.flex>.col-lg-shrink{width:auto;min-width:0;max-width:100%}.column>.col-lg,.flex>.col-lg,.column>.col-lg-auto,.column>.col-lg-12,.column>.col-lg-11,.column>.col-lg-10,.column>.col-lg-9,.column>.col-lg-8,.column>.col-lg-7,.column>.col-lg-6,.column>.col-lg-5,.column>.col-lg-4,.column>.col-lg-3,.column>.col-lg-2,.column>.col-lg-1,.column>.col-lg-0,.flex>.col-lg-auto,.flex>.col-lg-12,.flex>.col-lg-11,.flex>.col-lg-10,.flex>.col-lg-9,.flex>.col-lg-8,.flex>.col-lg-7,.flex>.col-lg-6,.flex>.col-lg-5,.flex>.col-lg-4,.flex>.col-lg-3,.flex>.col-lg-2,.flex>.col-lg-1,.flex>.col-lg-0,.column>.col-lg-grow,.flex>.col-lg-grow,.column>.col-lg-shrink,.flex>.col-lg-shrink{height:auto;min-height:0;max-height:100%}.col-lg{flex:10000 1 0%}.col-lg-auto,.col-lg-12,.col-lg-11,.col-lg-10,.col-lg-9,.col-lg-8,.col-lg-7,.col-lg-6,.col-lg-5,.col-lg-4,.col-lg-3,.col-lg-2,.col-lg-1,.col-lg-0{flex:0 0 auto}.col-lg-grow{flex:1 0 auto}.col-lg-shrink{flex:0 1 auto}.row>.col-lg-0{height:auto;width:0%}.row>.offset-lg-0{margin-left:0%}.column>.col-lg-0{height:0%;width:auto}.row>.col-lg-1{height:auto;width:8.3333%}.row>.offset-lg-1{margin-left:8.3333%}.column>.col-lg-1{height:8.3333%;width:auto}.row>.col-lg-2{height:auto;width:16.6667%}.row>.offset-lg-2{margin-left:16.6667%}.column>.col-lg-2{height:16.6667%;width:auto}.row>.col-lg-3{height:auto;width:25%}.row>.offset-lg-3{margin-left:25%}.column>.col-lg-3{height:25%;width:auto}.row>.col-lg-4{height:auto;width:33.3333%}.row>.offset-lg-4{margin-left:33.3333%}.column>.col-lg-4{height:33.3333%;width:auto}.row>.col-lg-5{height:auto;width:41.6667%}.row>.offset-lg-5{margin-left:41.6667%}.column>.col-lg-5{height:41.6667%;width:auto}.row>.col-lg-6{height:auto;width:50%}.row>.offset-lg-6{margin-left:50%}.column>.col-lg-6{height:50%;width:auto}.row>.col-lg-7{height:auto;width:58.3333%}.row>.offset-lg-7{margin-left:58.3333%}.column>.col-lg-7{height:58.3333%;width:auto}.row>.col-lg-8{height:auto;width:66.6667%}.row>.offset-lg-8{margin-left:66.6667%}.column>.col-lg-8{height:66.6667%;width:auto}.row>.col-lg-9{height:auto;width:75%}.row>.offset-lg-9{margin-left:75%}.column>.col-lg-9{height:75%;width:auto}.row>.col-lg-10{height:auto;width:83.3333%}.row>.offset-lg-10{margin-left:83.3333%}.column>.col-lg-10{height:83.3333%;width:auto}.row>.col-lg-11{height:auto;width:91.6667%}.row>.offset-lg-11{margin-left:91.6667%}.column>.col-lg-11{height:91.6667%;width:auto}.row>.col-lg-12{height:auto;width:100%}.row>.offset-lg-12{margin-left:100%}.column>.col-lg-12{height:100%;width:auto}}@media (min-width: 1920px){.row>.col-xl,.flex>.col-xl,.row>.col-xl-auto,.row>.col-xl-12,.row>.col-xl-11,.row>.col-xl-10,.row>.col-xl-9,.row>.col-xl-8,.row>.col-xl-7,.row>.col-xl-6,.row>.col-xl-5,.row>.col-xl-4,.row>.col-xl-3,.row>.col-xl-2,.row>.col-xl-1,.row>.col-xl-0,.flex>.col-xl-auto,.flex>.col-xl-12,.flex>.col-xl-11,.flex>.col-xl-10,.flex>.col-xl-9,.flex>.col-xl-8,.flex>.col-xl-7,.flex>.col-xl-6,.flex>.col-xl-5,.flex>.col-xl-4,.flex>.col-xl-3,.flex>.col-xl-2,.flex>.col-xl-1,.flex>.col-xl-0,.row>.col-xl-grow,.flex>.col-xl-grow,.row>.col-xl-shrink,.flex>.col-xl-shrink{width:auto;min-width:0;max-width:100%}.column>.col-xl,.flex>.col-xl,.column>.col-xl-auto,.column>.col-xl-12,.column>.col-xl-11,.column>.col-xl-10,.column>.col-xl-9,.column>.col-xl-8,.column>.col-xl-7,.column>.col-xl-6,.column>.col-xl-5,.column>.col-xl-4,.column>.col-xl-3,.column>.col-xl-2,.column>.col-xl-1,.column>.col-xl-0,.flex>.col-xl-auto,.flex>.col-xl-12,.flex>.col-xl-11,.flex>.col-xl-10,.flex>.col-xl-9,.flex>.col-xl-8,.flex>.col-xl-7,.flex>.col-xl-6,.flex>.col-xl-5,.flex>.col-xl-4,.flex>.col-xl-3,.flex>.col-xl-2,.flex>.col-xl-1,.flex>.col-xl-0,.column>.col-xl-grow,.flex>.col-xl-grow,.column>.col-xl-shrink,.flex>.col-xl-shrink{height:auto;min-height:0;max-height:100%}.col-xl{flex:10000 1 0%}.col-xl-auto,.col-xl-12,.col-xl-11,.col-xl-10,.col-xl-9,.col-xl-8,.col-xl-7,.col-xl-6,.col-xl-5,.col-xl-4,.col-xl-3,.col-xl-2,.col-xl-1,.col-xl-0{flex:0 0 auto}.col-xl-grow{flex:1 0 auto}.col-xl-shrink{flex:0 1 auto}.row>.col-xl-0{height:auto;width:0%}.row>.offset-xl-0{margin-left:0%}.column>.col-xl-0{height:0%;width:auto}.row>.col-xl-1{height:auto;width:8.3333%}.row>.offset-xl-1{margin-left:8.3333%}.column>.col-xl-1{height:8.3333%;width:auto}.row>.col-xl-2{height:auto;width:16.6667%}.row>.offset-xl-2{margin-left:16.6667%}.column>.col-xl-2{height:16.6667%;width:auto}.row>.col-xl-3{height:auto;width:25%}.row>.offset-xl-3{margin-left:25%}.column>.col-xl-3{height:25%;width:auto}.row>.col-xl-4{height:auto;width:33.3333%}.row>.offset-xl-4{margin-left:33.3333%}.column>.col-xl-4{height:33.3333%;width:auto}.row>.col-xl-5{height:auto;width:41.6667%}.row>.offset-xl-5{margin-left:41.6667%}.column>.col-xl-5{height:41.6667%;width:auto}.row>.col-xl-6{height:auto;width:50%}.row>.offset-xl-6{margin-left:50%}.column>.col-xl-6{height:50%;width:auto}.row>.col-xl-7{height:auto;width:58.3333%}.row>.offset-xl-7{margin-left:58.3333%}.column>.col-xl-7{height:58.3333%;width:auto}.row>.col-xl-8{height:auto;width:66.6667%}.row>.offset-xl-8{margin-left:66.6667%}.column>.col-xl-8{height:66.6667%;width:auto}.row>.col-xl-9{height:auto;width:75%}.row>.offset-xl-9{margin-left:75%}.column>.col-xl-9{height:75%;width:auto}.row>.col-xl-10{height:auto;width:83.3333%}.row>.offset-xl-10{margin-left:83.3333%}.column>.col-xl-10{height:83.3333%;width:auto}.row>.col-xl-11{height:auto;width:91.6667%}.row>.offset-xl-11{margin-left:91.6667%}.column>.col-xl-11{height:91.6667%;width:auto}.row>.col-xl-12{height:auto;width:100%}.row>.offset-xl-12{margin-left:100%}.column>.col-xl-12{height:100%;width:auto}}.rounded-borders{border-radius:4px}.border-radius-inherit{border-radius:inherit}.no-transition{transition:none!important}.transition-0{transition:0s!important}.glossy{background-image:linear-gradient(to bottom,#ffffff4d,#fff0 50%,#0000001f 51%,#0000000a)!important}.q-placeholder::placeholder{color:inherit;opacity:.7}.q-body--fullscreen-mixin,.q-body--prevent-scroll{position:fixed!important}.q-body--force-scrollbar-x{overflow-x:scroll}.q-body--force-scrollbar-y{overflow-y:scroll}.q-no-input-spinner{-moz-appearance:textfield!important}.q-no-input-spinner::-webkit-outer-spin-button,.q-no-input-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.q-link{outline:0;text-decoration:none}.q-link--focusable:focus-visible{-webkit-text-decoration:underline dashed currentColor 1px;text-decoration:underline dashed currentColor 1px}body.electron .q-electron-drag{-webkit-user-select:none;-webkit-app-region:drag}body.electron .q-electron-drag .q-btn-item,body.electron .q-electron-drag--exception{-webkit-app-region:no-drag}img.responsive{max-width:100%;height:auto}.non-selectable{-webkit-user-select:none!important;user-select:none!important}.scroll,body.mobile .scroll--mobile{overflow:auto}.scroll,.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position}.scroll-x{overflow-x:auto}.scroll-y{overflow-y:auto}.no-scroll{overflow:hidden!important}.no-pointer-events,.no-pointer-events--children,.no-pointer-events--children *{pointer-events:none!important}.all-pointer-events{pointer-events:all!important}.cursor-pointer{cursor:pointer!important}.cursor-not-allowed{cursor:not-allowed!important}.cursor-inherit{cursor:inherit!important}.cursor-none{cursor:none!important}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}.rotate-45{transform:rotate(45deg)}.rotate-90{transform:rotate(90deg)}.rotate-135{transform:rotate(135deg)}.rotate-180{transform:rotate(180deg)}.rotate-225{transform:rotate(225deg)}.rotate-270{transform:rotate(270deg)}.rotate-315{transform:rotate(315deg)}.flip-horizontal{transform:scaleX(-1)}.flip-vertical{transform:scaleY(-1)}.float-left{float:left}.float-right{float:right}.relative-position{position:relative}.fixed,.fixed-full,.fullscreen,.fixed-center,.fixed-bottom,.fixed-left,.fixed-right,.fixed-top,.fixed-top-left,.fixed-top-right,.fixed-bottom-left,.fixed-bottom-right{position:fixed}.absolute,.absolute-full,.absolute-center,.absolute-bottom,.absolute-left,.absolute-right,.absolute-top,.absolute-top-left,.absolute-top-right,.absolute-bottom-left,.absolute-bottom-right{position:absolute}.fixed-top,.absolute-top{top:0;left:0;right:0}.fixed-right,.absolute-right{top:0;right:0;bottom:0}.fixed-bottom,.absolute-bottom{right:0;bottom:0;left:0}.fixed-left,.absolute-left{top:0;bottom:0;left:0}.fixed-top-left,.absolute-top-left{top:0;left:0}.fixed-top-right,.absolute-top-right{top:0;right:0}.fixed-bottom-left,.absolute-bottom-left{bottom:0;left:0}.fixed-bottom-right,.absolute-bottom-right{bottom:0;right:0}.fullscreen{z-index:6000;border-radius:0!important;max-width:100vw;max-height:100vh}body.q-ios-padding .fullscreen{padding-top:20px!important;padding-top:env(safe-area-inset-top)!important;padding-bottom:env(safe-area-inset-bottom)!important}.absolute-full,.fullscreen,.fixed-full{top:0;right:0;bottom:0;left:0}.fixed-center,.absolute-center{top:50%;left:50%;transform:translate(-50%,-50%)}.vertical-top{vertical-align:top!important}.vertical-middle{vertical-align:middle!important}.vertical-bottom{vertical-align:bottom!important}.on-left{margin-right:12px}.on-right{margin-left:12px}.q-position-engine{margin-top:var(--q-pe-top, 0)!important;margin-left:var(--q-pe-left, 0)!important;will-change:auto;visibility:collapse}:root{--q-size-xs: 0;--q-size-sm: 600px;--q-size-md: 1024px;--q-size-lg: 1440px;--q-size-xl: 1920px}.fit{width:100%!important;height:100%!important}.full-height{height:100%!important}.full-width{width:100%!important;margin-left:0!important;margin-right:0!important}.window-height{margin-top:0!important;margin-bottom:0!important;height:100vh!important}.window-width{margin-left:0!important;margin-right:0!important;width:100vw!important}.block{display:block!important}.inline-block{display:inline-block!important}.q-pa-none{padding:0}.q-pl-none{padding-left:0}.q-pr-none{padding-right:0}.q-pt-none{padding-top:0}.q-pb-none{padding-bottom:0}.q-px-none{padding-left:0;padding-right:0}.q-py-none{padding-top:0;padding-bottom:0}.q-ma-none{margin:0}.q-ml-none{margin-left:0}.q-mr-none{margin-right:0}.q-mt-none{margin-top:0}.q-mb-none{margin-bottom:0}.q-mx-none{margin-left:0;margin-right:0}.q-my-none{margin-top:0;margin-bottom:0}.q-pa-xs{padding:4px}.q-pl-xs{padding-left:4px}.q-pr-xs{padding-right:4px}.q-pt-xs{padding-top:4px}.q-pb-xs{padding-bottom:4px}.q-px-xs{padding-left:4px;padding-right:4px}.q-py-xs{padding-top:4px;padding-bottom:4px}.q-ma-xs{margin:4px}.q-ml-xs{margin-left:4px}.q-mr-xs{margin-right:4px}.q-mt-xs{margin-top:4px}.q-mb-xs{margin-bottom:4px}.q-mx-xs{margin-left:4px;margin-right:4px}.q-my-xs{margin-top:4px;margin-bottom:4px}.q-pa-sm{padding:8px}.q-pl-sm{padding-left:8px}.q-pr-sm{padding-right:8px}.q-pt-sm{padding-top:8px}.q-pb-sm{padding-bottom:8px}.q-px-sm{padding-left:8px;padding-right:8px}.q-py-sm{padding-top:8px;padding-bottom:8px}.q-ma-sm{margin:8px}.q-ml-sm{margin-left:8px}.q-mr-sm{margin-right:8px}.q-mt-sm{margin-top:8px}.q-mb-sm{margin-bottom:8px}.q-mx-sm{margin-left:8px;margin-right:8px}.q-my-sm{margin-top:8px;margin-bottom:8px}.q-pa-md{padding:16px}.q-pl-md{padding-left:16px}.q-pr-md{padding-right:16px}.q-pt-md{padding-top:16px}.q-pb-md{padding-bottom:16px}.q-px-md{padding-left:16px;padding-right:16px}.q-py-md{padding-top:16px;padding-bottom:16px}.q-ma-md{margin:16px}.q-ml-md{margin-left:16px}.q-mr-md{margin-right:16px}.q-mt-md{margin-top:16px}.q-mb-md{margin-bottom:16px}.q-mx-md{margin-left:16px;margin-right:16px}.q-my-md{margin-top:16px;margin-bottom:16px}.q-pa-lg{padding:24px}.q-pl-lg{padding-left:24px}.q-pr-lg{padding-right:24px}.q-pt-lg{padding-top:24px}.q-pb-lg{padding-bottom:24px}.q-px-lg{padding-left:24px;padding-right:24px}.q-py-lg{padding-top:24px;padding-bottom:24px}.q-ma-lg{margin:24px}.q-ml-lg{margin-left:24px}.q-mr-lg{margin-right:24px}.q-mt-lg{margin-top:24px}.q-mb-lg{margin-bottom:24px}.q-mx-lg{margin-left:24px;margin-right:24px}.q-my-lg{margin-top:24px;margin-bottom:24px}.q-pa-xl{padding:48px}.q-pl-xl{padding-left:48px}.q-pr-xl{padding-right:48px}.q-pt-xl{padding-top:48px}.q-pb-xl{padding-bottom:48px}.q-px-xl{padding-left:48px;padding-right:48px}.q-py-xl{padding-top:48px;padding-bottom:48px}.q-ma-xl{margin:48px}.q-ml-xl{margin-left:48px}.q-mr-xl{margin-right:48px}.q-mt-xl{margin-top:48px}.q-mb-xl{margin-bottom:48px}.q-mx-xl{margin-left:48px;margin-right:48px}.q-my-xl{margin-top:48px;margin-bottom:48px}.q-mt-auto,.q-my-auto{margin-top:auto}.q-ml-auto{margin-left:auto}.q-mb-auto,.q-my-auto{margin-bottom:auto}.q-mr-auto{margin-right:auto}.q-mx-auto{margin-left:auto;margin-right:auto}.q-touch{-webkit-user-select:none;user-select:none;user-drag:none;-khtml-user-drag:none;-webkit-user-drag:none}.q-touch-x{touch-action:pan-x}.q-touch-y{touch-action:pan-y}:root{--q-transition-duration: .3s}.q-transition--slide-right-enter-active,.q-transition--slide-right-leave-active,.q-transition--slide-left-enter-active,.q-transition--slide-left-leave-active,.q-transition--slide-up-enter-active,.q-transition--slide-up-leave-active,.q-transition--slide-down-enter-active,.q-transition--slide-down-leave-active,.q-transition--jump-right-enter-active,.q-transition--jump-right-leave-active,.q-transition--jump-left-enter-active,.q-transition--jump-left-leave-active,.q-transition--jump-up-enter-active,.q-transition--jump-up-leave-active,.q-transition--jump-down-enter-active,.q-transition--jump-down-leave-active,.q-transition--fade-enter-active,.q-transition--fade-leave-active,.q-transition--scale-enter-active,.q-transition--scale-leave-active,.q-transition--rotate-enter-active,.q-transition--rotate-leave-active,.q-transition--flip-enter-active,.q-transition--flip-leave-active{--q-transition-duration: .3s;--q-transition-easing: cubic-bezier(.215,.61,.355,1)}.q-transition--slide-right-leave-active,.q-transition--slide-left-leave-active,.q-transition--slide-up-leave-active,.q-transition--slide-down-leave-active,.q-transition--jump-right-leave-active,.q-transition--jump-left-leave-active,.q-transition--jump-up-leave-active,.q-transition--jump-down-leave-active,.q-transition--fade-leave-active,.q-transition--scale-leave-active,.q-transition--rotate-leave-active,.q-transition--flip-leave-active{position:absolute}.q-transition--slide-right-enter-active,.q-transition--slide-right-leave-active,.q-transition--slide-left-enter-active,.q-transition--slide-left-leave-active,.q-transition--slide-up-enter-active,.q-transition--slide-up-leave-active,.q-transition--slide-down-enter-active,.q-transition--slide-down-leave-active{transition:transform var(--q-transition-duration) var(--q-transition-easing)}.q-transition--slide-right-enter-from{transform:translate3d(-100%,0,0)}.q-transition--slide-right-leave-to,.q-transition--slide-left-enter-from{transform:translate3d(100%,0,0)}.q-transition--slide-left-leave-to{transform:translate3d(-100%,0,0)}.q-transition--slide-up-enter-from{transform:translate3d(0,100%,0)}.q-transition--slide-up-leave-to,.q-transition--slide-down-enter-from{transform:translate3d(0,-100%,0)}.q-transition--slide-down-leave-to{transform:translate3d(0,100%,0)}.q-transition--jump-right-enter-active,.q-transition--jump-right-leave-active,.q-transition--jump-left-enter-active,.q-transition--jump-left-leave-active,.q-transition--jump-up-enter-active,.q-transition--jump-up-leave-active,.q-transition--jump-down-enter-active,.q-transition--jump-down-leave-active{transition:opacity var(--q-transition-duration),transform var(--q-transition-duration)}.q-transition--jump-right-enter-from,.q-transition--jump-right-leave-to,.q-transition--jump-left-enter-from,.q-transition--jump-left-leave-to,.q-transition--jump-up-enter-from,.q-transition--jump-up-leave-to,.q-transition--jump-down-enter-from,.q-transition--jump-down-leave-to{opacity:0}.q-transition--jump-right-enter-from{transform:translate3d(-15px,0,0)}.q-transition--jump-right-leave-to,.q-transition--jump-left-enter-from{transform:translate3d(15px,0,0)}.q-transition--jump-left-leave-to{transform:translate(-15px)}.q-transition--jump-up-enter-from{transform:translate3d(0,15px,0)}.q-transition--jump-up-leave-to,.q-transition--jump-down-enter-from{transform:translate3d(0,-15px,0)}.q-transition--jump-down-leave-to{transform:translate3d(0,15px,0)}.q-transition--fade-enter-active,.q-transition--fade-leave-active{transition:opacity var(--q-transition-duration) ease-out}.q-transition--fade-enter-from,.q-transition--fade-leave-to{opacity:0}.q-transition--scale-enter-active,.q-transition--scale-leave-active{transition:opacity var(--q-transition-duration),transform var(--q-transition-duration) var(--q-transition-easing)}.q-transition--scale-enter-from,.q-transition--scale-leave-to{opacity:0;transform:scale3d(0,0,1)}.q-transition--rotate-enter-active,.q-transition--rotate-leave-active{transition:opacity var(--q-transition-duration),transform var(--q-transition-duration) var(--q-transition-easing);transform-style:preserve-3d}.q-transition--rotate-enter-from,.q-transition--rotate-leave-to{opacity:0;transform:scale3d(0,0,1) rotate3d(0,0,1,90deg)}.q-transition--flip-right-enter-active,.q-transition--flip-right-leave-active,.q-transition--flip-left-enter-active,.q-transition--flip-left-leave-active,.q-transition--flip-up-enter-active,.q-transition--flip-up-leave-active,.q-transition--flip-down-enter-active,.q-transition--flip-down-leave-active{transition:transform var(--q-transition-duration);backface-visibility:hidden}.q-transition--flip-right-enter-to,.q-transition--flip-right-leave-from,.q-transition--flip-left-enter-to,.q-transition--flip-left-leave-from,.q-transition--flip-up-enter-to,.q-transition--flip-up-leave-from,.q-transition--flip-down-enter-to,.q-transition--flip-down-leave-from{transform:perspective(400px) rotate3d(1,1,0,0)}.q-transition--flip-right-enter-from{transform:perspective(400px) rotateY(-180deg)}.q-transition--flip-right-leave-to,.q-transition--flip-left-enter-from{transform:perspective(400px) rotateY(180deg)}.q-transition--flip-left-leave-to{transform:perspective(400px) rotateY(-180deg)}.q-transition--flip-up-enter-from{transform:perspective(400px) rotateX(-180deg)}.q-transition--flip-up-leave-to,.q-transition--flip-down-enter-from{transform:perspective(400px) rotateX(180deg)}.q-transition--flip-down-leave-to{transform:perspective(400px) rotateX(-180deg)}body{min-width:100px;min-height:100%;font-family:Roboto,-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;line-height:1.5;font-size:14px}h1{font-size:6rem;font-weight:300;line-height:6rem;letter-spacing:-.01562em}h2{font-size:3.75rem;font-weight:300;line-height:3.75rem;letter-spacing:-.00833em}h3{font-size:3rem;font-weight:400;line-height:3.125rem;letter-spacing:normal}h4{font-size:2.125rem;font-weight:400;line-height:2.5rem;letter-spacing:.00735em}h5{font-size:1.5rem;font-weight:400;line-height:2rem;letter-spacing:normal}h6{font-size:1.25rem;font-weight:500;line-height:2rem;letter-spacing:.0125em}p{margin:0 0 16px}.text-h1{font-size:6rem;font-weight:300;line-height:6rem;letter-spacing:-.01562em}.text-h2{font-size:3.75rem;font-weight:300;line-height:3.75rem;letter-spacing:-.00833em}.text-h3{font-size:3rem;font-weight:400;line-height:3.125rem;letter-spacing:normal}.text-h4{font-size:2.125rem;font-weight:400;line-height:2.5rem;letter-spacing:.00735em}.text-h5{font-size:1.5rem;font-weight:400;line-height:2rem;letter-spacing:normal}.text-h6{font-size:1.25rem;font-weight:500;line-height:2rem;letter-spacing:.0125em}.text-subtitle1{font-size:1rem;font-weight:400;line-height:1.75rem;letter-spacing:.00937em}.text-subtitle2{font-size:.875rem;font-weight:500;line-height:1.375rem;letter-spacing:.00714em}.text-body1{font-size:1rem;font-weight:400;line-height:1.5rem;letter-spacing:.03125em}.text-body2{font-size:.875rem;font-weight:400;line-height:1.25rem;letter-spacing:.01786em}.text-overline{font-size:.75rem;font-weight:500;line-height:2rem;letter-spacing:.16667em}.text-caption{font-size:.75rem;font-weight:400;line-height:1.25rem;letter-spacing:.03333em}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-capitalize{text-transform:capitalize}.text-right{text-align:right}.text-justify{text-align:justify;-webkit-hyphens:auto;hyphens:auto}.text-italic{font-style:italic}.text-bold{font-weight:700}.text-no-wrap{white-space:nowrap}.text-strike{text-decoration:line-through}.text-weight-thin{font-weight:100}.text-weight-light{font-weight:300}.text-weight-regular{font-weight:400}.text-weight-medium{font-weight:500}.text-weight-bold{font-weight:700}.text-weight-bolder{font-weight:900}small{font-size:80%}big{font-size:170%}sub{bottom:-.25em}sup{top:-.5em}.no-margin{margin:0!important}.no-padding{padding:0!important}.no-border{border:0!important}.no-border-radius{border-radius:0!important}.no-box-shadow{box-shadow:none!important}.no-outline{outline:0!important}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ellipsis-2-lines,.ellipsis-3-lines{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.ellipsis-2-lines{-webkit-line-clamp:2}.ellipsis-3-lines{-webkit-line-clamp:3}.readonly{cursor:default!important}.disabled,.disabled *,[disabled],[disabled] *{outline:0!important;cursor:not-allowed!important}.disabled,[disabled]{opacity:.6!important}.hidden{display:none!important}.invisible,.invisible *{visibility:hidden!important;transition:none!important;animation:none!important}.transparent{background:transparent!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-hidden-y{overflow-y:hidden!important}.hide-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.hide-scrollbar::-webkit-scrollbar{width:0;height:0;display:none}.dimmed:after,.light-dimmed:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0}.dimmed:after{background:#0006!important}.light-dimmed:after{background:#fff9!important}.z-top{z-index:7000!important}.z-max{z-index:9998!important}body:not(.desktop) .desktop-only,body.desktop .desktop-hide{display:none!important}body:not(.mobile) .mobile-only,body.mobile .mobile-hide{display:none!important}body:not(.native-mobile) .native-mobile-only,body.native-mobile .native-mobile-hide{display:none!important}body:not(.cordova) .cordova-only,body.cordova .cordova-hide{display:none!important}body:not(.capacitor) .capacitor-only,body.capacitor .capacitor-hide{display:none!important}body:not(.electron) .electron-only,body.electron .electron-hide{display:none!important}body:not(.touch) .touch-only,body.touch .touch-hide{display:none!important}body:not(.within-iframe) .within-iframe-only,body.within-iframe .within-iframe-hide{display:none!important}body:not(.platform-ios) .platform-ios-only,body.platform-ios .platform-ios-hide{display:none!important}body:not(.platform-android) .platform-android-only,body.platform-android .platform-android-hide{display:none!important}@media all and (orientation: portrait){.orientation-landscape{display:none!important}}@media all and (orientation: landscape){.orientation-portrait{display:none!important}}@media screen{.print-only{display:none!important}}@media print{.print-hide{display:none!important}}@media (max-width: 599.98px){.xs-hide,.gt-xs,.sm,.gt-sm,.md,.gt-md,.lg,.gt-lg,.xl{display:none!important}}@media (min-width: 600px) and (max-width: 1023.98px){.sm-hide,.xs,.lt-sm,.gt-sm,.md,.gt-md,.lg,.gt-lg,.xl{display:none!important}}@media (min-width: 1024px) and (max-width: 1439.98px){.md-hide,.xs,.lt-sm,.sm,.lt-md,.gt-md,.lg,.gt-lg,.xl{display:none!important}}@media (min-width: 1440px) and (max-width: 1919.98px){.lg-hide,.xs,.lt-sm,.sm,.lt-md,.md,.lt-lg,.gt-lg,.xl{display:none!important}}@media (min-width: 1920px){.xl-hide,.xs,.lt-sm,.sm,.lt-md,.md,.lt-lg,.lg,.lt-xl{display:none!important}}.q-focus-helper,.q-focusable,.q-manual-focusable,.q-hoverable{outline:0}body.desktop .q-focus-helper{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border-radius:inherit;opacity:0;transition:background-color .3s cubic-bezier(.25,.8,.5,1),opacity .4s cubic-bezier(.25,.8,.5,1)}body.desktop .q-focus-helper:before,body.desktop .q-focus-helper:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;border-radius:inherit;transition:background-color .3s cubic-bezier(.25,.8,.5,1),opacity .6s cubic-bezier(.25,.8,.5,1)}body.desktop .q-focus-helper:before{background:#000}body.desktop .q-focus-helper:after{background:#fff}body.desktop .q-focus-helper--rounded{border-radius:4px}body.desktop .q-focus-helper--round{border-radius:50%}body.desktop .q-focusable:focus>.q-focus-helper,body.desktop .q-manual-focusable--focused>.q-focus-helper,body.desktop .q-hoverable:hover>.q-focus-helper{background:currentColor;opacity:.15}body.desktop .q-focusable:focus>.q-focus-helper:before,body.desktop .q-manual-focusable--focused>.q-focus-helper:before,body.desktop .q-hoverable:hover>.q-focus-helper:before{opacity:.1}body.desktop .q-focusable:focus>.q-focus-helper:after,body.desktop .q-manual-focusable--focused>.q-focus-helper:after,body.desktop .q-hoverable:hover>.q-focus-helper:after{opacity:.4}body.desktop .q-focusable:focus>.q-focus-helper,body.desktop .q-manual-focusable--focused>.q-focus-helper{opacity:.22}body.body--dark{color:#fff;background:var(--q-dark-page)}.q-dark{color:#fff;background:var(--q-dark)}#--unocss-layer-start--__ALL__--{start:__ALL__}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthSQBLyM.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthqQBA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR232VGM.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW32.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.i-pixelarticons-arrow-down{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2zM7 14v2h2v-2zm0 0v-2H5v2zm10 0v2h-2v-2zm0 0v-2h2v2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-arrow-up{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11 20h2V8h2V6h-2V4h-2v2H9v2h2zM7 10V8h2v2zm0 0v2H5v-2zm10 0V8h-2v2zm0 0v2h2v-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-cart{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2 2h4v4h16v11H4V4H2zm4 13h14V8H6zm0 4h3v3H6zm14 0h-3v3h3z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-checkbox{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 3H3v18h18V3zm0 2h14v14H5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-checkbox-on{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 3h18v18H3zm16 16V5H5v14z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-chevron-down{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-chevron-left{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 5v2h-2V5zm-4 4V7h2v2zm-2 2V9h2v2zm0 2H8v-2h2zm2 2v-2h-2v2zm0 0h2v2h-2zm4 4v-2h-2v2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 5v2h2V5zm4 4V7h-2v2zm2 2V9h-2v2zm0 2h2v-2h-2zm-2 2v-2h2v2zm0 0h-2v2h2zm-4 4v-2h2v2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-close{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-coffee-alt{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 3H5v4h2zm4 0H9v4h2zm2 0h2v4h-2zm8 6H3v12h14v-5h4zm-2 5h-2v-3h2zM5 11h10v8H5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-contact{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2 3H0v18h24V3zm20 2v14H2V5zM10 7H6v4h4zm-6 6h8v4H4zm16-6h-6v2h6zm-6 4h6v2h-6zm6 4h-6v2h6z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-downasaur{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2zm2 6h2V8H8z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-heart{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-mood-sad{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 3h14v2H5zm0 16H3V5h2zm14 0v2H5v-2zm0 0h2V5h-2zM10 8H8v2h2zm4 0h2v2h-2zm-5 8v-2h6v2h2v-2h-2v-2H9v2H7v2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-notification{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M14 4V2h-4v2H5v2h14V4zm5 12H5v-4H3v6h5v4h2v-4h4v2h-4v2h6v-4h5v-6h-2V6h-2v8h2zM5 6v8h2V6z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-notification-off{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M14 2v2h5v2h-8V2zM5 16h9v2h2v4h-6v-2h4v-2h-4v4H8v-4H3v-6h2v-2h2v4H5zm16-2h-2v-2h-2V6h2v6h2zM5 2H3v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2V8H9V6H7V4H5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-play{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-repeat{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-zap{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2zM8 7V5h2v2zM6 9V7h2v2zm-2 2V9h2v2zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6zm2-2v2h-2v-2zm2-2v2h-2v-2zm0 0h2v-2h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-zoom-in{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4zM9 6h2v3h3v2h-3v3H9v-3H6V9h3z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-pixelarticons-zoom-out{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4zm0 5v2H6V9z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.prose :where(h1,h2,h3,h4,h5,h6):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-headings);font-weight:600;line-height:1.25}.prose :where(a):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-links);text-decoration:underline;font-weight:500}.prose :where(a code):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-links)}.prose :where(p,ul,ol,pre):not(:where(.not-prose,.not-prose *)){margin:1em 0;line-height:1.75}.prose :where(blockquote):not(:where(.not-prose,.not-prose *)){margin:1em 0;padding-left:1em;font-style:italic;border-left:.25em solid var(--un-prose-borders)}.prose :where(h1):not(:where(.not-prose,.not-prose *)){margin:1rem 0;font-size:2.25em}.prose :where(h2):not(:where(.not-prose,.not-prose *)){margin:1.75em 0 .5em;font-size:1.75em}.prose :where(h3):not(:where(.not-prose,.not-prose *)){margin:1.5em 0 .5em;font-size:1.375em}.prose :where(h4):not(:where(.not-prose,.not-prose *)){margin:1em 0;font-size:1.125em}.prose :where(img,video):not(:where(.not-prose,.not-prose *)){max-width:100%}.prose :where(figure,picture):not(:where(.not-prose,.not-prose *)){margin:1em 0}.prose :where(figcaption):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-captions);font-size:.875em}.prose :where(code):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-code);font-size:.875em;font-weight:600;font-family:DM Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.prose :where(:not(pre)>code):not(:where(.not-prose,.not-prose *)):before,.prose :where(:not(pre)>code):not(:where(.not-prose,.not-prose *)):after{content:"\`"}.prose :where(pre):not(:where(.not-prose,.not-prose *)){padding:1.25rem 1.5rem;overflow-x:auto;border-radius:.375rem}.prose :where(pre,code):not(:where(.not-prose,.not-prose *)){white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;hyphens:none;background:transparent}.prose :where(pre code):not(:where(.not-prose,.not-prose *)){font-weight:inherit}.prose :where(ol,ul):not(:where(.not-prose,.not-prose *)){padding-left:1.25em}.prose :where(ol):not(:where(.not-prose,.not-prose *)){list-style-type:decimal}.prose :where(ol[type=A]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where(.not-prose,.not-prose *)){list-style-type:decimal}.prose :where(ul):not(:where(.not-prose,.not-prose *)){list-style-type:disc}.prose :where(ol>li):not(:where(.not-prose,.not-prose *))::marker,.prose :where(ul>li):not(:where(.not-prose,.not-prose *))::marker,.prose :where(summary):not(:where(.not-prose,.not-prose *))::marker{color:var(--un-prose-lists)}.prose :where(hr):not(:where(.not-prose,.not-prose *)){margin:2em 0;border:1px solid var(--un-prose-hr)}.prose :where(table):not(:where(.not-prose,.not-prose *)){display:block;margin:1em 0;border-collapse:collapse;overflow-x:auto}.prose :where(tr):not(:where(.not-prose,.not-prose *)):nth-child(2n){background:var(--un-prose-bg-soft)}.prose :where(td,th):not(:where(.not-prose,.not-prose *)){border:1px solid var(--un-prose-borders);padding:.625em 1em}.prose :where(abbr):not(:where(.not-prose,.not-prose *)){cursor:help}.prose :where(kbd):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-code);border:1px solid;padding:.25rem .5rem;font-size:.875em;border-radius:.25rem}.prose :where(details):not(:where(.not-prose,.not-prose *)){margin:1em 0;padding:1.25rem 1.5rem;background:var(--un-prose-bg-soft)}.prose :where(summary):not(:where(.not-prose,.not-prose *)){cursor:pointer;font-weight:600}.prose{color:var(--un-prose-body);max-width:65ch}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.bottom-100px{bottom:100px}.right-2{right:.5rem}.right-50px{right:50px}.top-2{top:.5rem}.m-auto{margin:auto}.mx-1,[mx-1=""]{margin-left:.25rem;margin-right:.25rem}.me{margin-inline-end:1rem}.ml-2{margin-left:.5rem}.ml-4,[ml-4=""]{margin-left:1rem}.mr-4{margin-right:1rem}.hidden{display:none}.size-4{width:1rem;height:1rem}[size~="2em"]{width:2em;height:2em}[size~=xs]{width:20rem;height:20rem}.h-24px,[h-24px=""]{height:24px}.min-w-1200px{min-width:1200px}.min-w-332px,[min-w-332px=""]{min-width:332px}.w-24px,[w-24px=""]{width:24px}.flex,[flex=""],[flex~="~"]{display:flex}.flex-col,[flex~=col]{flex-direction:column}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.cursor-pointer,[cursor-pointer=""]{cursor:pointer}.items-center{align-items:center}.justify-center{justify-content:center}.justify-right,[justify-right=""]{justify-content:right}.gap-10px{gap:10px}.gap-2{gap:.5rem}.border,[border~="1px"]{border-width:1px}[border~=teal]{--un-border-opacity:1;border-color:rgb(45 212 191 / var(--un-border-opacity))}.rounded,[rounded=""]{border-radius:.25rem}[border~=solid]{border-style:solid}.text-center{text-align:center}.text-left{text-align:left}.text-3{font-size:.75rem}.font-size-4,.text-4,[font~=size-4]{font-size:1rem}.font-size-6{font-size:1.5rem}.text-green,[color~=green]{--un-text-opacity:1;color:rgb(74 222 128 / var(--un-text-opacity))}.text-orange,[color~=orange]{--un-text-opacity:1;color:rgb(251 146 60 / var(--un-text-opacity))}.text-red,[color~=red],[text-red=""]{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity))}[color~=teal],[text-color~=teal]{--un-text-opacity:1;color:rgb(45 212 191 / var(--un-text-opacity))}[color~=white],[text-color~=white]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.font-bold,[font~=bold]{font-weight:700}.font-medium{font-weight:500}#--unocss-layer-end--__ALL__--{end:__ALL__} `);

(function (vue) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var require_main_001 = __commonJS({
    "main-GfILzbqs.js"(exports, module) {
      const useSizeDefaults = {
        xs: 18,
        sm: 24,
        md: 32,
        lg: 38,
        xl: 46
      };
      const useSizeProps = {
        size: String
      };
      function useSize(props, sizes = useSizeDefaults) {
        return vue.computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
      }
      const createComponent = (raw) => vue.markRaw(vue.defineComponent(raw));
      const createDirective = (raw) => vue.markRaw(raw);
      function hSlot(slot, otherwise) {
        return slot !== void 0 ? slot() || otherwise : otherwise;
      }
      function hUniqueSlot(slot, otherwise) {
        if (slot !== void 0) {
          const vnode = slot();
          if (vnode !== void 0 && vnode !== null) {
            return vnode.slice();
          }
        }
        return otherwise;
      }
      function hMergeSlot(slot, source) {
        return slot !== void 0 ? source.concat(slot()) : source;
      }
      function hMergeSlotSafely(slot, source) {
        if (slot === void 0) {
          return source;
        }
        return source !== void 0 ? source.concat(slot()) : slot();
      }
      function hDir(tag, data, children, key, condition, getDirsFn) {
        data.key = key + condition;
        const vnode = vue.h(tag, data, children);
        return condition === true ? vue.withDirectives(vnode, getDirsFn()) : vnode;
      }
      const defaultViewBox = "0 0 24 24";
      const sameFn = (i) => i;
      const ionFn = (i) => `ionicons ${i}`;
      const libMap = {
        "mdi-": (i) => `mdi ${i}`,
        "icon-": sameFn,
        // fontawesome equiv
        "bt-": (i) => `bt ${i}`,
        "eva-": (i) => `eva ${i}`,
        "ion-md": ionFn,
        "ion-ios": ionFn,
        "ion-logo": ionFn,
        "iconfont ": sameFn,
        "ti-": (i) => `themify-icon ${i}`,
        "bi-": (i) => `bootstrap-icons ${i}`
      };
      const matMap = {
        o_: "-outlined",
        r_: "-round",
        s_: "-sharp"
      };
      const symMap = {
        sym_o_: "-outlined",
        sym_r_: "-rounded",
        sym_s_: "-sharp"
      };
      const libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
      const matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
      const symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
      const mRE = /^[Mm]\s?[-+]?\.?\d/;
      const imgRE = /^img:/;
      const svgUseRE = /^svguse:/;
      const ionRE = /^ion-/;
      const faRE = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
      const QIcon = createComponent({
        name: "QIcon",
        props: {
          ...useSizeProps,
          tag: {
            type: String,
            default: "i"
          },
          name: String,
          color: String,
          left: Boolean,
          right: Boolean
        },
        setup(props, { slots }) {
          const { proxy: { $q } } = vue.getCurrentInstance();
          const sizeStyle = useSize(props);
          const classes = vue.computed(
            () => "q-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : "")
          );
          const type = vue.computed(() => {
            let cls;
            let icon = props.name;
            if (icon === "none" || !icon) {
              return { none: true };
            }
            if ($q.iconMapFn !== null) {
              const res = $q.iconMapFn(icon);
              if (res !== void 0) {
                if (res.icon !== void 0) {
                  icon = res.icon;
                  if (icon === "none" || !icon) {
                    return { none: true };
                  }
                } else {
                  return {
                    cls: res.cls,
                    content: res.content !== void 0 ? res.content : " "
                  };
                }
              }
            }
            if (mRE.test(icon) === true) {
              const [def, viewBox = defaultViewBox] = icon.split("|");
              return {
                svg: true,
                viewBox,
                nodes: def.split("&&").map((path) => {
                  const [d, style, transform] = path.split("@@");
                  return vue.h("path", { style, d, transform });
                })
              };
            }
            if (imgRE.test(icon) === true) {
              return {
                img: true,
                src: icon.substring(4)
              };
            }
            if (svgUseRE.test(icon) === true) {
              const [def, viewBox = defaultViewBox] = icon.split("|");
              return {
                svguse: true,
                src: def.substring(7),
                viewBox
              };
            }
            let content = " ";
            const matches = icon.match(libRE);
            if (matches !== null) {
              cls = libMap[matches[1]](icon);
            } else if (faRE.test(icon) === true) {
              cls = icon;
            } else if (ionRE.test(icon) === true) {
              cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
            } else if (symRE.test(icon) === true) {
              cls = "notranslate material-symbols";
              const matches2 = icon.match(symRE);
              if (matches2 !== null) {
                icon = icon.substring(6);
                cls += symMap[matches2[1]];
              }
              content = icon;
            } else {
              cls = "notranslate material-icons";
              const matches2 = icon.match(matRE);
              if (matches2 !== null) {
                icon = icon.substring(2);
                cls += matMap[matches2[1]];
              }
              content = icon;
            }
            return {
              cls,
              content
            };
          });
          return () => {
            const data = {
              class: classes.value,
              style: sizeStyle.value,
              "aria-hidden": "true",
              role: "presentation"
            };
            if (type.value.none === true) {
              return vue.h(props.tag, data, hSlot(slots.default));
            }
            if (type.value.img === true) {
              return vue.h(props.tag, data, hMergeSlot(slots.default, [
                vue.h("img", { src: type.value.src })
              ]));
            }
            if (type.value.svg === true) {
              return vue.h(props.tag, data, hMergeSlot(slots.default, [
                vue.h("svg", {
                  viewBox: type.value.viewBox || "0 0 24 24"
                }, type.value.nodes)
              ]));
            }
            if (type.value.svguse === true) {
              return vue.h(props.tag, data, hMergeSlot(slots.default, [
                vue.h("svg", {
                  viewBox: type.value.viewBox
                }, [
                  vue.h("use", { "xlink:href": type.value.src })
                ])
              ]));
            }
            if (type.value.cls !== void 0) {
              data.class += " " + type.value.cls;
            }
            return vue.h(props.tag, data, hMergeSlot(slots.default, [
              type.value.content
            ]));
          };
        }
      });
      const QAvatar = createComponent({
        name: "QAvatar",
        props: {
          ...useSizeProps,
          fontSize: String,
          color: String,
          textColor: String,
          icon: String,
          square: Boolean,
          rounded: Boolean
        },
        setup(props, { slots }) {
          const sizeStyle = useSize(props);
          const classes = vue.computed(
            () => "q-avatar" + (props.color ? ` bg-${props.color}` : "") + (props.textColor ? ` text-${props.textColor} q-chip--colored` : "") + (props.square === true ? " q-avatar--square" : props.rounded === true ? " rounded-borders" : "")
          );
          const contentStyle = vue.computed(() => props.fontSize ? { fontSize: props.fontSize } : null);
          return () => {
            const icon = props.icon !== void 0 ? [vue.h(QIcon, { name: props.icon })] : void 0;
            return vue.h("div", {
              class: classes.value,
              style: sizeStyle.value
            }, [
              vue.h("div", {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: contentStyle.value
              }, hMergeSlotSafely(slots.default, icon))
            ]);
          };
        }
      });
      const useSpinnerProps = {
        size: {
          type: [Number, String],
          default: "1em"
        },
        color: String
      };
      function useSpinner(props) {
        return {
          cSize: vue.computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
          classes: vue.computed(
            () => "q-spinner" + (props.color ? ` text-${props.color}` : "")
          )
        };
      }
      const QSpinner = createComponent({
        name: "QSpinner",
        props: {
          ...useSpinnerProps,
          thickness: {
            type: Number,
            default: 5
          }
        },
        setup(props) {
          const { cSize, classes } = useSpinner(props);
          return () => vue.h("svg", {
            class: classes.value + " q-spinner-mat",
            width: cSize.value,
            height: cSize.value,
            viewBox: "25 25 50 50"
          }, [
            vue.h("circle", {
              class: "path",
              cx: "50",
              cy: "50",
              r: "20",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": props.thickness,
              "stroke-miterlimit": "10"
            })
          ]);
        }
      });
      function css(element, css2) {
        const style = element.style;
        for (const prop in css2) {
          style[prop] = css2[prop];
        }
      }
      function getElement(el) {
        if (el === void 0 || el === null) {
          return void 0;
        }
        if (typeof el === "string") {
          try {
            return document.querySelector(el) || void 0;
          } catch (err) {
            return void 0;
          }
        }
        const target2 = vue.unref(el);
        if (target2) {
          return target2.$el || target2;
        }
      }
      function childHasFocus(el, focusedEl) {
        if (el === void 0 || el === null || el.contains(focusedEl) === true) {
          return true;
        }
        for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) {
          if (next.contains(focusedEl)) {
            return true;
          }
        }
        return false;
      }
      const listenOpts = {
        hasPassive: false,
        passiveCapture: true,
        notPassiveCapture: true
      };
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            Object.assign(listenOpts, {
              hasPassive: true,
              passive: { passive: true },
              notPassive: { passive: false },
              passiveCapture: { passive: true, capture: true },
              notPassiveCapture: { passive: false, capture: true }
            });
          }
        });
        window.addEventListener("qtest", null, opts);
        window.removeEventListener("qtest", null, opts);
      } catch (_) {
      }
      function noop() {
      }
      function position(e) {
        if (e.touches && e.touches[0]) {
          e = e.touches[0];
        } else if (e.changedTouches && e.changedTouches[0]) {
          e = e.changedTouches[0];
        } else if (e.targetTouches && e.targetTouches[0]) {
          e = e.targetTouches[0];
        }
        return {
          top: e.clientY,
          left: e.clientX
        };
      }
      function getEventPath(e) {
        if (e.path) {
          return e.path;
        }
        if (e.composedPath) {
          return e.composedPath();
        }
        const path = [];
        let el = e.target;
        while (el) {
          path.push(el);
          if (el.tagName === "HTML") {
            path.push(document);
            path.push(window);
            return path;
          }
          el = el.parentElement;
        }
      }
      function stop(e) {
        e.stopPropagation();
      }
      function prevent(e) {
        e.cancelable !== false && e.preventDefault();
      }
      function stopAndPrevent(e) {
        e.cancelable !== false && e.preventDefault();
        e.stopPropagation();
      }
      function addEvt(ctx, targetName, events) {
        const name = `__q_${targetName}_evt`;
        ctx[name] = ctx[name] !== void 0 ? ctx[name].concat(events) : events;
        events.forEach((evt) => {
          evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
        });
      }
      function cleanEvt(ctx, targetName) {
        const name = `__q_${targetName}_evt`;
        if (ctx[name] !== void 0) {
          ctx[name].forEach((evt) => {
            evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
          });
          ctx[name] = void 0;
        }
      }
      let lastKeyCompositionStatus = false;
      function onKeyDownComposition(evt) {
        lastKeyCompositionStatus = evt.isComposing === true;
      }
      function shouldIgnoreKey(evt) {
        return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
      }
      function isKeyCode(evt, keyCodes) {
        return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes).includes(evt.keyCode);
      }
      function throttle(fn, limit = 250) {
        let wait = false, result;
        return function() {
          if (wait === false) {
            wait = true;
            setTimeout(() => {
              wait = false;
            }, limit);
            result = fn.apply(this, arguments);
          }
          return result;
        };
      }
      function showRipple(evt, el, ctx, forceCenter) {
        ctx.modifiers.stop === true && stop(evt);
        const color = ctx.modifiers.color;
        let center = ctx.modifiers.center;
        center = center === true || forceCenter === true;
        const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width: width2, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width2 * width2 + height * height), radius = diameter / 2, centerX = `${(width2 - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
        innerNode.className = "q-ripple__inner";
        css(innerNode, {
          height: `${diameter}px`,
          width: `${diameter}px`,
          transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
          opacity: 0
        });
        node.className = `q-ripple${color ? " text-" + color : ""}`;
        node.setAttribute("dir", "ltr");
        node.appendChild(innerNode);
        el.appendChild(node);
        const abort = () => {
          node.remove();
          clearTimeout(timer2);
        };
        ctx.abort.push(abort);
        let timer2 = setTimeout(() => {
          innerNode.classList.add("q-ripple__inner--enter");
          innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
          innerNode.style.opacity = 0.2;
          timer2 = setTimeout(() => {
            innerNode.classList.remove("q-ripple__inner--enter");
            innerNode.classList.add("q-ripple__inner--leave");
            innerNode.style.opacity = 0;
            timer2 = setTimeout(() => {
              node.remove();
              ctx.abort.splice(ctx.abort.indexOf(abort), 1);
            }, 275);
          }, 250);
        }, 50);
      }
      function updateModifiers(ctx, { modifiers, value, arg }) {
        const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
        ctx.modifiers = {
          early: cfg.early === true,
          stop: cfg.stop === true,
          center: cfg.center === true,
          color: cfg.color || arg,
          keyCodes: [].concat(cfg.keyCodes || 13)
        };
      }
      const Ripple = createDirective(
        {
          name: "ripple",
          beforeMount(el, binding) {
            const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
            if (cfg.ripple === false) {
              return;
            }
            const ctx = {
              cfg,
              enabled: binding.value !== false,
              modifiers: {},
              abort: [],
              start(evt) {
                if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
                  showRipple(evt, el, ctx, evt.qKeyEvent === true);
                }
              },
              keystart: throttle((evt) => {
                if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
                  showRipple(evt, el, ctx, true);
                }
              }, 300)
            };
            updateModifiers(ctx, binding);
            el.__qripple = ctx;
            addEvt(ctx, "main", [
              [el, "pointerdown", "start", "passive"],
              [el, "click", "start", "passive"],
              [el, "keydown", "keystart", "passive"],
              [el, "keyup", "keystart", "passive"]
            ]);
          },
          updated(el, binding) {
            if (binding.oldValue !== binding.value) {
              const ctx = el.__qripple;
              if (ctx !== void 0) {
                ctx.enabled = binding.value !== false;
                if (ctx.enabled === true && Object(binding.value) === binding.value) {
                  updateModifiers(ctx, binding);
                }
              }
            }
          },
          beforeUnmount(el) {
            const ctx = el.__qripple;
            if (ctx !== void 0) {
              ctx.abort.forEach((fn) => {
                fn();
              });
              cleanEvt(ctx, "main");
              delete el._qripple;
            }
          }
        }
      );
      const alignMap = {
        left: "start",
        center: "center",
        right: "end",
        between: "between",
        around: "around",
        evenly: "evenly",
        stretch: "stretch"
      };
      const alignValues = Object.keys(alignMap);
      const useAlignProps = {
        align: {
          type: String,
          validator: (v) => alignValues.includes(v)
        }
      };
      function useAlign(props) {
        return vue.computed(() => {
          const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
          return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
        });
      }
      function getParentProxy(proxy) {
        if (Object(proxy.$parent) === proxy.$parent) {
          return proxy.$parent;
        }
        let { parent } = proxy.$;
        while (Object(parent) === parent) {
          if (Object(parent.proxy) === parent.proxy) {
            return parent.proxy;
          }
          parent = parent.parent;
        }
      }
      function vmHasRouter(vm) {
        return vm.appContext.config.globalProperties.$router !== void 0;
      }
      function vmIsDestroyed(vm) {
        return vm.isUnmounted === true || vm.isDeactivated === true;
      }
      function getOriginalPath(record) {
        return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
      }
      function isSameRouteRecord(a, b) {
        return (a.aliasOf || a) === (b.aliasOf || b);
      }
      function includesParams(outer, inner) {
        for (const key in inner) {
          const innerValue = inner[key], outerValue = outer[key];
          if (typeof innerValue === "string") {
            if (innerValue !== outerValue) {
              return false;
            }
          } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) {
            return false;
          }
        }
        return true;
      }
      function isEquivalentArray(a, b) {
        return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
      }
      function isSameRouteLocationParamsValue(a, b) {
        return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
      }
      function isSameRouteLocationParams(a, b) {
        if (Object.keys(a).length !== Object.keys(b).length) {
          return false;
        }
        for (const key in a) {
          if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
            return false;
          }
        }
        return true;
      }
      const useRouterLinkProps = {
        // router-link
        to: [String, Object],
        replace: Boolean,
        exact: Boolean,
        activeClass: {
          type: String,
          default: "q-router-link--active"
        },
        exactActiveClass: {
          type: String,
          default: "q-router-link--exact-active"
        },
        // regular <a> link
        href: String,
        target: String,
        // state
        disable: Boolean
      };
      function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
        const vm = vue.getCurrentInstance();
        const { props, proxy, emit } = vm;
        const hasRouter = vmHasRouter(vm);
        const hasHrefLink = vue.computed(() => props.disable !== true && props.href !== void 0);
        const hasRouterLinkProps = useDisableForRouterLinkProps === true ? vue.computed(
          () => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
        ) : vue.computed(
          () => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
        );
        const resolvedLink = vue.computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
        const hasRouterLink = vue.computed(() => resolvedLink.value !== null);
        const hasLink = vue.computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
        const linkTag = vue.computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
        const linkAttrs = vue.computed(() => hasHrefLink.value === true ? {
          href: props.href,
          target: props.target
        } : hasRouterLink.value === true ? {
          href: resolvedLink.value.href,
          target: props.target
        } : {});
        const linkActiveIndex = vue.computed(() => {
          if (hasRouterLink.value === false) {
            return -1;
          }
          const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
          if (routeMatched === void 0) {
            return -1;
          }
          const currentMatched = proxy.$route.matched;
          if (currentMatched.length === 0) {
            return -1;
          }
          const index = currentMatched.findIndex(
            isSameRouteRecord.bind(null, routeMatched)
          );
          if (index !== -1) {
            return index;
          }
          const parentRecordPath = getOriginalPath(matched[length - 2]);
          return (
            // we are dealing with nested routes
            length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
              isSameRouteRecord.bind(null, matched[length - 2])
            ) : index
          );
        });
        const linkIsActive = vue.computed(
          () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
        );
        const linkIsExactActive = vue.computed(
          () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
        );
        const linkClass = vue.computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
        function getLink(to) {
          try {
            return proxy.$router.resolve(to);
          } catch (_) {
          }
          return null;
        }
        function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
          if (props.disable === true) {
            e.preventDefault();
            return Promise.resolve(false);
          }
          if (
            // don't redirect with control keys;
            // should match RouterLink from Vue Router
            e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank"
          ) {
            return Promise.resolve(false);
          }
          e.preventDefault();
          const promise = proxy.$router[replace === true ? "replace" : "push"](to);
          return returnRouterError === true ? promise : promise.then(() => {
          }).catch(() => {
          });
        }
        function navigateOnClick(e) {
          if (hasRouterLink.value === true) {
            const go = (opts) => navigateToRouterLink(e, opts);
            emit("click", e, go);
            e.defaultPrevented !== true && go();
          } else {
            emit("click", e);
          }
        }
        return {
          hasRouterLink,
          hasHrefLink,
          hasLink,
          linkTag,
          resolvedLink,
          linkIsActive,
          linkIsExactActive,
          linkClass,
          linkAttrs,
          getLink,
          navigateToRouterLink,
          navigateOnClick
        };
      }
      const btnPadding = {
        none: 0,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32
      };
      const defaultSizes$2 = {
        xs: 8,
        sm: 10,
        md: 14,
        lg: 20,
        xl: 24
      };
      const formTypes = ["button", "submit", "reset"];
      const mediaTypeRE = /[^\s]\/[^\s]/;
      const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
      const getBtnDesign = (props, defaultValue) => {
        if (props.flat === true)
          return "flat";
        if (props.outline === true)
          return "outline";
        if (props.push === true)
          return "push";
        if (props.unelevated === true)
          return "unelevated";
        return defaultValue;
      };
      const getBtnDesignAttr = (props) => {
        const design = getBtnDesign(props);
        return design !== void 0 ? { [design]: true } : {};
      };
      const useBtnProps = {
        ...useSizeProps,
        ...useRouterLinkProps,
        type: {
          type: String,
          default: "button"
        },
        label: [Number, String],
        icon: String,
        iconRight: String,
        ...btnDesignOptions.reduce(
          (acc, val) => (acc[val] = Boolean) && acc,
          {}
        ),
        square: Boolean,
        round: Boolean,
        rounded: Boolean,
        glossy: Boolean,
        size: String,
        fab: Boolean,
        fabMini: Boolean,
        padding: String,
        color: String,
        textColor: String,
        noCaps: Boolean,
        noWrap: Boolean,
        dense: Boolean,
        tabindex: [Number, String],
        ripple: {
          type: [Boolean, Object],
          default: true
        },
        align: {
          ...useAlignProps.align,
          default: "center"
        },
        stack: Boolean,
        stretch: Boolean,
        loading: {
          type: Boolean,
          default: null
        },
        disable: Boolean
      };
      function useBtn(props) {
        const sizeStyle = useSize(props, defaultSizes$2);
        const alignClass = useAlign(props);
        const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
          fallbackTag: "button"
        });
        const style = vue.computed(() => {
          const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
          return props.padding !== void 0 ? Object.assign({}, obj, {
            padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
            minWidth: "0",
            minHeight: "0"
          }) : obj;
        });
        const isRounded = vue.computed(
          () => props.rounded === true || props.fab === true || props.fabMini === true
        );
        const isActionable = vue.computed(
          () => props.disable !== true && props.loading !== true
        );
        const tabIndex = vue.computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
        const design = vue.computed(() => getBtnDesign(props, "standard"));
        const attributes = vue.computed(() => {
          const acc = { tabindex: tabIndex.value };
          if (hasLink.value === true) {
            Object.assign(acc, linkAttrs.value);
          } else if (formTypes.includes(props.type) === true) {
            acc.type = props.type;
          }
          if (linkTag.value === "a") {
            if (props.disable === true) {
              acc["aria-disabled"] = "true";
            } else if (acc.href === void 0) {
              acc.role = "button";
            }
            if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
              acc.type = props.type;
            }
          } else if (props.disable === true) {
            acc.disabled = "";
            acc["aria-disabled"] = "true";
          }
          if (props.loading === true && props.percentage !== void 0) {
            Object.assign(acc, {
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": props.percentage
            });
          }
          return acc;
        });
        const classes = vue.computed(() => {
          let colors;
          if (props.color !== void 0) {
            if (props.flat === true || props.outline === true) {
              colors = `text-${props.textColor || props.color}`;
            } else {
              colors = `bg-${props.color} text-${props.textColor || "white"}`;
            }
          } else if (props.textColor) {
            colors = `text-${props.textColor}`;
          }
          const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
          return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
        });
        const innerClasses = vue.computed(
          () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
        );
        return {
          classes,
          style,
          innerClasses,
          attributes,
          hasLink,
          linkTag,
          navigateOnClick,
          isActionable
        };
      }
      const { passiveCapture } = listenOpts;
      let touchTarget = null, keyboardTarget = null, mouseTarget = null;
      const QBtn = createComponent({
        name: "QBtn",
        props: {
          ...useBtnProps,
          percentage: Number,
          darkPercentage: Boolean,
          onTouchstart: [Function, Array]
        },
        emits: ["click", "keydown", "mousedown", "keyup"],
        setup(props, { slots, emit }) {
          const { proxy } = vue.getCurrentInstance();
          const {
            classes,
            style,
            innerClasses,
            attributes,
            hasLink,
            linkTag,
            navigateOnClick,
            isActionable
          } = useBtn(props);
          const rootRef = vue.ref(null);
          const blurTargetRef = vue.ref(null);
          let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;
          const hasLabel = vue.computed(
            () => props.label !== void 0 && props.label !== null && props.label !== ""
          );
          const ripple = vue.computed(() => props.disable === true || props.ripple === false ? false : {
            keyCodes: hasLink.value === true ? [13, 32] : [13],
            ...props.ripple === true ? {} : props.ripple
          });
          const rippleProps = vue.computed(() => ({ center: props.round }));
          const percentageStyle = vue.computed(() => {
            const val = Math.max(0, Math.min(100, props.percentage));
            return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
          });
          const onEvents = vue.computed(() => {
            if (props.loading === true) {
              return {
                onMousedown: onLoadingEvt,
                onTouchstart: onLoadingEvt,
                onClick: onLoadingEvt,
                onKeydown: onLoadingEvt,
                onKeyup: onLoadingEvt
              };
            }
            if (isActionable.value === true) {
              const acc = {
                onClick,
                onKeydown: onKeydown2,
                onMousedown
              };
              if (proxy.$q.platform.has.touch === true) {
                const suffix = props.onTouchstart !== void 0 ? "" : "Passive";
                acc[`onTouchstart${suffix}`] = onTouchstart;
              }
              return acc;
            }
            return {
              // needed; especially for disabled <a> tags
              onClick: stopAndPrevent
            };
          });
          const nodeProps = vue.computed(() => ({
            ref: rootRef,
            class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
            style: style.value,
            ...attributes.value,
            ...onEvents.value
          }));
          function onClick(e) {
            if (rootRef.value === null)
              return;
            if (e !== void 0) {
              if (e.defaultPrevented === true) {
                return;
              }
              const el = document.activeElement;
              if (props.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
                rootRef.value.focus();
                const onClickCleanup = () => {
                  document.removeEventListener("keydown", stopAndPrevent, true);
                  document.removeEventListener("keyup", onClickCleanup, passiveCapture);
                  rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
                };
                document.addEventListener("keydown", stopAndPrevent, true);
                document.addEventListener("keyup", onClickCleanup, passiveCapture);
                rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
              }
            }
            navigateOnClick(e);
          }
          function onKeydown2(e) {
            if (rootRef.value === null)
              return;
            emit("keydown", e);
            if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
              keyboardTarget !== null && cleanup();
              if (e.defaultPrevented !== true) {
                rootRef.value.focus();
                keyboardTarget = rootRef.value;
                rootRef.value.classList.add("q-btn--active");
                document.addEventListener("keyup", onPressEnd, true);
                rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
              }
              stopAndPrevent(e);
            }
          }
          function onTouchstart(e) {
            if (rootRef.value === null)
              return;
            emit("touchstart", e);
            if (e.defaultPrevented === true)
              return;
            if (touchTarget !== rootRef.value) {
              touchTarget !== null && cleanup();
              touchTarget = rootRef.value;
              localTouchTargetEl = e.target;
              localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
              localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
            }
            avoidMouseRipple = true;
            mouseTimer !== null && clearTimeout(mouseTimer);
            mouseTimer = setTimeout(() => {
              mouseTimer = null;
              avoidMouseRipple = false;
            }, 200);
          }
          function onMousedown(e) {
            if (rootRef.value === null)
              return;
            e.qSkipRipple = avoidMouseRipple === true;
            emit("mousedown", e);
            if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
              mouseTarget !== null && cleanup();
              mouseTarget = rootRef.value;
              rootRef.value.classList.add("q-btn--active");
              document.addEventListener("mouseup", onPressEnd, passiveCapture);
            }
          }
          function onPressEnd(e) {
            if (rootRef.value === null)
              return;
            if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
              return;
            }
            if (e !== void 0 && e.type === "keyup") {
              if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
                const evt = new MouseEvent("click", e);
                evt.qKeyEvent = true;
                e.defaultPrevented === true && prevent(evt);
                e.cancelBubble === true && stop(evt);
                rootRef.value.dispatchEvent(evt);
                stopAndPrevent(e);
                e.qKeyEvent = true;
              }
              emit("keyup", e);
            }
            cleanup();
          }
          function cleanup(destroying) {
            const blurTarget = blurTargetRef.value;
            if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
              blurTarget.setAttribute("tabindex", -1);
              blurTarget.focus();
            }
            if (touchTarget === rootRef.value) {
              if (localTouchTargetEl !== null) {
                localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
                localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
              }
              touchTarget = localTouchTargetEl = null;
            }
            if (mouseTarget === rootRef.value) {
              document.removeEventListener("mouseup", onPressEnd, passiveCapture);
              mouseTarget = null;
            }
            if (keyboardTarget === rootRef.value) {
              document.removeEventListener("keyup", onPressEnd, true);
              rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
              keyboardTarget = null;
            }
            rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
          }
          function onLoadingEvt(evt) {
            stopAndPrevent(evt);
            evt.qSkipRipple = true;
          }
          vue.onBeforeUnmount(() => {
            cleanup(true);
          });
          Object.assign(proxy, { click: onClick });
          return () => {
            let inner = [];
            props.icon !== void 0 && inner.push(
              vue.h(QIcon, {
                name: props.icon,
                left: props.stack !== true && hasLabel.value === true,
                role: "img",
                "aria-hidden": "true"
              })
            );
            hasLabel.value === true && inner.push(
              vue.h("span", { class: "block" }, [props.label])
            );
            inner = hMergeSlot(slots.default, inner);
            if (props.iconRight !== void 0 && props.round === false) {
              inner.push(
                vue.h(QIcon, {
                  name: props.iconRight,
                  right: props.stack !== true && hasLabel.value === true,
                  role: "img",
                  "aria-hidden": "true"
                })
              );
            }
            const child = [
              vue.h("span", {
                class: "q-focus-helper",
                ref: blurTargetRef
              })
            ];
            if (props.loading === true && props.percentage !== void 0) {
              child.push(
                vue.h("span", {
                  class: "q-btn__progress absolute-full overflow-hidden" + (props.darkPercentage === true ? " q-btn__progress--dark" : "")
                }, [
                  vue.h("span", {
                    class: "q-btn__progress-indicator fit block",
                    style: percentageStyle.value
                  })
                ])
              );
            }
            child.push(
              vue.h("span", {
                class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
              }, inner)
            );
            props.loading !== null && child.push(
              vue.h(vue.Transition, {
                name: "q-transition--fade"
              }, () => props.loading === true ? [
                vue.h("span", {
                  key: "loading",
                  class: "absolute-full flex flex-center"
                }, slots.loading !== void 0 ? slots.loading() : [vue.h(QSpinner)])
              ] : null)
            );
            return vue.withDirectives(
              vue.h(
                linkTag.value,
                nodeProps.value,
                child
              ),
              [[
                Ripple,
                ripple.value,
                void 0,
                rippleProps.value
              ]]
            );
          };
        }
      });
      const globalConfig = {};
      let globalConfigIsFrozen = false;
      function freezeGlobalConfig() {
        globalConfigIsFrozen = true;
      }
      let portalIndex = 1;
      let target = document.body;
      function createGlobalNode(id, portalType) {
        const el = document.createElement("div");
        el.id = portalType !== void 0 ? `q-portal--${portalType}--${portalIndex++}` : id;
        if (globalConfig.globalNodes !== void 0) {
          const cls = globalConfig.globalNodes.class;
          if (cls !== void 0) {
            el.className = cls;
          }
        }
        target.appendChild(el);
        return el;
      }
      function removeGlobalNode(el) {
        el.remove();
      }
      function injectProp(target2, propName, get, set) {
        Object.defineProperty(target2, propName, {
          get,
          set,
          enumerable: true
        });
        return target2;
      }
      function injectMultipleProps(target2, props) {
        for (const key in props) {
          injectProp(target2, key, props[key]);
        }
        return target2;
      }
      const isRuntimeSsrPreHydration = vue.ref(
        false
      );
      let preHydrationBrowser;
      function getMatch(userAgent2, platformMatch) {
        const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent2) || /(opr)[\/]([\w.]+)/.exec(userAgent2) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent2) || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent2) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent2) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent2) || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent2) || /(webkit)[\/]([\w.]+)/.exec(userAgent2) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent2) || [];
        return {
          browser: match[5] || match[3] || match[1] || "",
          version: match[2] || match[4] || "0",
          versionNumber: match[4] || match[2] || "0",
          platform: platformMatch[0] || ""
        };
      }
      function getPlatformMatch(userAgent2) {
        return /(ipad)/.exec(userAgent2) || /(ipod)/.exec(userAgent2) || /(windows phone)/.exec(userAgent2) || /(iphone)/.exec(userAgent2) || /(kindle)/.exec(userAgent2) || /(silk)/.exec(userAgent2) || /(android)/.exec(userAgent2) || /(win)/.exec(userAgent2) || /(mac)/.exec(userAgent2) || /(linux)/.exec(userAgent2) || /(cros)/.exec(userAgent2) || /(playbook)/.exec(userAgent2) || /(bb)/.exec(userAgent2) || /(blackberry)/.exec(userAgent2) || [];
      }
      const hasTouch = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
      function getPlatform(UA) {
        const userAgent2 = UA.toLowerCase(), platformMatch = getPlatformMatch(userAgent2), matched = getMatch(userAgent2, platformMatch), browser2 = {};
        if (matched.browser) {
          browser2[matched.browser] = true;
          browser2.version = matched.version;
          browser2.versionNumber = parseInt(matched.versionNumber, 10);
        }
        if (matched.platform) {
          browser2[matched.platform] = true;
        }
        const knownMobiles = browser2.android || browser2.ios || browser2.bb || browser2.blackberry || browser2.ipad || browser2.iphone || browser2.ipod || browser2.kindle || browser2.playbook || browser2.silk || browser2["windows phone"];
        if (knownMobiles === true || userAgent2.indexOf("mobile") !== -1) {
          browser2.mobile = true;
        } else {
          browser2.desktop = true;
        }
        if (browser2["windows phone"]) {
          browser2.winphone = true;
          delete browser2["windows phone"];
        }
        if (browser2.edga || browser2.edgios) {
          browser2.edge = true;
          matched.browser = "edge";
        } else if (browser2.crios) {
          browser2.chrome = true;
          matched.browser = "chrome";
        } else if (browser2.fxios) {
          browser2.firefox = true;
          matched.browser = "firefox";
        } else if (browser2.ipod || browser2.ipad || browser2.iphone) {
          browser2.ios = true;
        }
        if (browser2.vivaldi) {
          matched.browser = "vivaldi";
          browser2.vivaldi = true;
        }
        if (
          // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
          browser2.chrome || browser2.opr || browser2.safari || browser2.vivaldi || browser2.mobile === true && browser2.ios !== true && knownMobiles !== true
        ) {
          browser2.webkit = true;
        }
        if (browser2.edg) {
          matched.browser = "edgechromium";
          browser2.edgeChromium = true;
        } else if (browser2.opr) {
          matched.browser = "opera";
          browser2.opera = true;
        }
        if (browser2.safari) {
          if (browser2.blackberry || browser2.bb) {
            matched.browser = "blackberry";
            browser2.blackberry = true;
          } else if (browser2.playbook) {
            matched.browser = "playbook";
            browser2.playbook = true;
          } else if (browser2.android) {
            matched.browser = "android";
            browser2.android = true;
          } else if (browser2.kindle) {
            matched.browser = "kindle";
            browser2.kindle = true;
          } else if (browser2.silk) {
            matched.browser = "silk";
            browser2.silk = true;
          }
        }
        browser2.name = matched.browser;
        browser2.platform = matched.platform;
        {
          if (userAgent2.indexOf("electron") !== -1) {
            browser2.electron = true;
          } else if (document.location.href.indexOf("-extension://") !== -1) {
            browser2.bex = true;
          } else {
            if (window.Capacitor !== void 0) {
              browser2.capacitor = true;
              browser2.nativeMobile = true;
              browser2.nativeMobileWrapper = "capacitor";
            } else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
              browser2.cordova = true;
              browser2.nativeMobile = true;
              browser2.nativeMobileWrapper = "cordova";
            }
            if (isRuntimeSsrPreHydration.value === true) {
              preHydrationBrowser = { is: { ...browser2 } };
            }
            if (hasTouch === true && browser2.mac === true && (browser2.desktop === true && browser2.safari === true || browser2.nativeMobile === true && browser2.android !== true && browser2.ios !== true && browser2.ipad !== true)) {
              delete browser2.mac;
              delete browser2.desktop;
              const platform = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
              Object.assign(browser2, {
                mobile: true,
                ios: true,
                platform,
                [platform]: true
              });
            }
            if (browser2.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile) {
              delete browser2.desktop;
              browser2.mobile = true;
            }
          }
        }
        return browser2;
      }
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const ssrClient = {
        has: {
          touch: false,
          webStorage: false
        },
        within: { iframe: false }
      };
      const client = {
        userAgent,
        is: getPlatform(userAgent),
        has: {
          touch: hasTouch
        },
        within: {
          iframe: window.self !== window.top
        }
      };
      const Platform = {
        install(opts) {
          const { $q } = opts;
          if (isRuntimeSsrPreHydration.value === true) {
            opts.onSSRHydrated.push(() => {
              Object.assign($q.platform, client);
              isRuntimeSsrPreHydration.value = false;
            });
            $q.platform = vue.reactive(this);
          } else {
            $q.platform = this;
          }
        }
      };
      {
        let hasWebStorage;
        injectProp(client.has, "webStorage", () => {
          if (hasWebStorage !== void 0) {
            return hasWebStorage;
          }
          try {
            if (window.localStorage) {
              hasWebStorage = true;
              return true;
            }
          } catch (_) {
          }
          hasWebStorage = false;
          return false;
        });
        Object.assign(Platform, client);
        if (isRuntimeSsrPreHydration.value === true) {
          Object.assign(Platform, preHydrationBrowser, ssrClient);
          preHydrationBrowser = null;
        }
      }
      const defineReactivePlugin = (state, plugin) => {
        const reactiveState = vue.reactive(state);
        for (const name in state) {
          injectProp(
            plugin,
            name,
            () => reactiveState[name],
            (val) => {
              reactiveState[name] = val;
            }
          );
        }
        return plugin;
      };
      function debounce(fn, wait = 250, immediate) {
        let timer2 = null;
        function debounced() {
          const args = arguments;
          const later = () => {
            timer2 = null;
            if (immediate !== true) {
              fn.apply(this, args);
            }
          };
          if (timer2 !== null) {
            clearTimeout(timer2);
          } else if (immediate === true) {
            fn.apply(this, args);
          }
          timer2 = setTimeout(later, wait);
        }
        debounced.cancel = () => {
          timer2 !== null && clearTimeout(timer2);
        };
        return debounced;
      }
      const SIZE_LIST = ["sm", "md", "lg", "xl"];
      const { passive } = listenOpts;
      const Screen = defineReactivePlugin({
        width: 0,
        height: 0,
        name: "xs",
        sizes: {
          sm: 600,
          md: 1024,
          lg: 1440,
          xl: 1920
        },
        lt: {
          sm: true,
          md: true,
          lg: true,
          xl: true
        },
        gt: {
          xs: false,
          sm: false,
          md: false,
          lg: false
        },
        xs: true,
        sm: false,
        md: false,
        lg: false,
        xl: false
      }, {
        setSizes: noop,
        setDebounce: noop,
        install({ $q, onSSRHydrated }) {
          $q.screen = this;
          if (this.__installed === true) {
            if ($q.config.screen !== void 0) {
              if ($q.config.screen.bodyClasses === false) {
                document.body.classList.remove(`screen--${this.name}`);
              } else {
                this.__update(true);
              }
            }
            return;
          }
          const { visualViewport } = window;
          const target2 = visualViewport || window;
          const scrollingElement = document.scrollingElement || document.documentElement;
          const getSize = visualViewport === void 0 || client.is.mobile === true ? () => [
            Math.max(window.innerWidth, scrollingElement.clientWidth),
            Math.max(window.innerHeight, scrollingElement.clientHeight)
          ] : () => [
            visualViewport.width * visualViewport.scale + window.innerWidth - scrollingElement.clientWidth,
            visualViewport.height * visualViewport.scale + window.innerHeight - scrollingElement.clientHeight
          ];
          const classes = $q.config.screen !== void 0 && $q.config.screen.bodyClasses === true;
          this.__update = (force) => {
            const [w, h2] = getSize();
            if (h2 !== this.height) {
              this.height = h2;
            }
            if (w !== this.width) {
              this.width = w;
            } else if (force !== true) {
              return;
            }
            let s = this.sizes;
            this.gt.xs = w >= s.sm;
            this.gt.sm = w >= s.md;
            this.gt.md = w >= s.lg;
            this.gt.lg = w >= s.xl;
            this.lt.sm = w < s.sm;
            this.lt.md = w < s.md;
            this.lt.lg = w < s.lg;
            this.lt.xl = w < s.xl;
            this.xs = this.lt.sm;
            this.sm = this.gt.xs === true && this.lt.md === true;
            this.md = this.gt.sm === true && this.lt.lg === true;
            this.lg = this.gt.md === true && this.lt.xl === true;
            this.xl = this.gt.lg;
            s = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl";
            if (s !== this.name) {
              if (classes === true) {
                document.body.classList.remove(`screen--${this.name}`);
                document.body.classList.add(`screen--${s}`);
              }
              this.name = s;
            }
          };
          let updateEvt, updateSizes = {}, updateDebounce = 16;
          this.setSizes = (sizes) => {
            SIZE_LIST.forEach((name) => {
              if (sizes[name] !== void 0) {
                updateSizes[name] = sizes[name];
              }
            });
          };
          this.setDebounce = (deb) => {
            updateDebounce = deb;
          };
          const start = () => {
            const style = getComputedStyle(document.body);
            if (style.getPropertyValue("--q-size-sm")) {
              SIZE_LIST.forEach((name) => {
                this.sizes[name] = parseInt(style.getPropertyValue(`--q-size-${name}`), 10);
              });
            }
            this.setSizes = (sizes) => {
              SIZE_LIST.forEach((name) => {
                if (sizes[name]) {
                  this.sizes[name] = sizes[name];
                }
              });
              this.__update(true);
            };
            this.setDebounce = (delay) => {
              updateEvt !== void 0 && target2.removeEventListener("resize", updateEvt, passive);
              updateEvt = delay > 0 ? debounce(this.__update, delay) : this.__update;
              target2.addEventListener("resize", updateEvt, passive);
            };
            this.setDebounce(updateDebounce);
            if (Object.keys(updateSizes).length !== 0) {
              this.setSizes(updateSizes);
              updateSizes = void 0;
            } else {
              this.__update();
            }
            classes === true && this.name === "xs" && document.body.classList.add("screen--xs");
          };
          if (isRuntimeSsrPreHydration.value === true) {
            onSSRHydrated.push(start);
          } else {
            start();
          }
        }
      });
      const Plugin$2 = defineReactivePlugin({
        isActive: false,
        mode: false
      }, {
        __media: void 0,
        set(val) {
          Plugin$2.mode = val;
          if (val === "auto") {
            if (Plugin$2.__media === void 0) {
              Plugin$2.__media = window.matchMedia("(prefers-color-scheme: dark)");
              Plugin$2.__updateMedia = () => {
                Plugin$2.set("auto");
              };
              Plugin$2.__media.addListener(Plugin$2.__updateMedia);
            }
            val = Plugin$2.__media.matches;
          } else if (Plugin$2.__media !== void 0) {
            Plugin$2.__media.removeListener(Plugin$2.__updateMedia);
            Plugin$2.__media = void 0;
          }
          Plugin$2.isActive = val === true;
          document.body.classList.remove(`body--${val === true ? "light" : "dark"}`);
          document.body.classList.add(`body--${val === true ? "dark" : "light"}`);
        },
        toggle() {
          {
            Plugin$2.set(Plugin$2.isActive === false);
          }
        },
        install({ $q, ssrContext }) {
          const { dark } = $q.config;
          $q.dark = this;
          if (this.__installed !== true) {
            this.set(dark !== void 0 ? dark : false);
          }
        }
      });
      const getTrue = () => true;
      function filterInvalidPath(path) {
        return typeof path === "string" && path !== "" && path !== "/" && path !== "#/";
      }
      function normalizeExitPath(path) {
        path.startsWith("#") === true && (path = path.substring(1));
        path.startsWith("/") === false && (path = "/" + path);
        path.endsWith("/") === true && (path = path.substring(0, path.length - 1));
        return "#" + path;
      }
      function getShouldExitFn(cfg) {
        if (cfg.backButtonExit === false) {
          return () => false;
        }
        if (cfg.backButtonExit === "*") {
          return getTrue;
        }
        const exitPaths = ["#/"];
        Array.isArray(cfg.backButtonExit) === true && exitPaths.push(
          ...cfg.backButtonExit.filter(filterInvalidPath).map(normalizeExitPath)
        );
        return () => exitPaths.includes(window.location.hash);
      }
      const History = {
        __history: [],
        add: noop,
        remove: noop,
        install({ $q }) {
          if (this.__installed === true)
            return;
          const { cordova, capacitor } = client.is;
          if (cordova !== true && capacitor !== true) {
            return;
          }
          const qConf = $q.config[cordova === true ? "cordova" : "capacitor"];
          if (qConf !== void 0 && qConf.backButton === false) {
            return;
          }
          if (
            // if we're on Capacitor mode
            capacitor === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)
          ) {
            return;
          }
          this.add = (entry) => {
            if (entry.condition === void 0) {
              entry.condition = getTrue;
            }
            this.__history.push(entry);
          };
          this.remove = (entry) => {
            const index = this.__history.indexOf(entry);
            if (index >= 0) {
              this.__history.splice(index, 1);
            }
          };
          const shouldExit = getShouldExitFn(
            Object.assign(
              { backButtonExit: true },
              qConf
            )
          );
          const backHandler = () => {
            if (this.__history.length) {
              const entry = this.__history[this.__history.length - 1];
              if (entry.condition() === true) {
                this.__history.pop();
                entry.handler();
              }
            } else if (shouldExit() === true) {
              navigator.app.exitApp();
            } else {
              window.history.back();
            }
          };
          if (cordova === true) {
            document.addEventListener("deviceready", () => {
              document.addEventListener("backbutton", backHandler, false);
            });
          } else {
            window.Capacitor.Plugins.App.addListener("backButton", backHandler);
          }
        }
      };
      const defaultLang = {
        isoName: "en-US",
        nativeName: "English (US)",
        label: {
          clear: "Clear",
          ok: "OK",
          cancel: "Cancel",
          close: "Close",
          set: "Set",
          select: "Select",
          reset: "Reset",
          remove: "Remove",
          update: "Update",
          create: "Create",
          search: "Search",
          filter: "Filter",
          refresh: "Refresh",
          expand: (label) => label ? `Expand "${label}"` : "Expand",
          collapse: (label) => label ? `Collapse "${label}"` : "Collapse"
        },
        date: {
          days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          firstDayOfWeek: 0,
          // 0-6, 0 - Sunday, 1 Monday, ...
          format24h: false,
          pluralDay: "days"
        },
        table: {
          noData: "No data available",
          noResults: "No matching records found",
          loading: "Loading...",
          selectedRecords: (rows2) => rows2 === 1 ? "1 record selected." : (rows2 === 0 ? "No" : rows2) + " records selected.",
          recordsPerPage: "Records per page:",
          allRows: "All",
          pagination: (start, end, total) => start + "-" + end + " of " + total,
          columns: "Columns"
        },
        editor: {
          url: "URL",
          bold: "Bold",
          italic: "Italic",
          strikethrough: "Strikethrough",
          underline: "Underline",
          unorderedList: "Unordered List",
          orderedList: "Ordered List",
          subscript: "Subscript",
          superscript: "Superscript",
          hyperlink: "Hyperlink",
          toggleFullscreen: "Toggle Fullscreen",
          quote: "Quote",
          left: "Left align",
          center: "Center align",
          right: "Right align",
          justify: "Justify align",
          print: "Print",
          outdent: "Decrease indentation",
          indent: "Increase indentation",
          removeFormat: "Remove formatting",
          formatting: "Formatting",
          fontSize: "Font Size",
          align: "Align",
          hr: "Insert Horizontal Rule",
          undo: "Undo",
          redo: "Redo",
          heading1: "Heading 1",
          heading2: "Heading 2",
          heading3: "Heading 3",
          heading4: "Heading 4",
          heading5: "Heading 5",
          heading6: "Heading 6",
          paragraph: "Paragraph",
          code: "Code",
          size1: "Very small",
          size2: "A bit small",
          size3: "Normal",
          size4: "Medium-large",
          size5: "Big",
          size6: "Very big",
          size7: "Maximum",
          defaultFont: "Default Font",
          viewSource: "View Source"
        },
        tree: {
          noNodes: "No nodes available",
          noResults: "No matching nodes found"
        }
      };
      function getLocale() {
        const val = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
        if (typeof val === "string") {
          return val.split(/[-_]/).map((v, i) => i === 0 ? v.toLowerCase() : i > 1 || v.length < 4 ? v.toUpperCase() : v[0].toUpperCase() + v.slice(1).toLowerCase()).join("-");
        }
      }
      const Plugin$1 = defineReactivePlugin({
        __langPack: {}
      }, {
        getLocale,
        set(langObject = defaultLang, ssrContext) {
          const lang = {
            ...langObject,
            rtl: langObject.rtl === true,
            getLocale
          };
          {
            lang.set = Plugin$1.set;
            if (Plugin$1.__langConfig === void 0 || Plugin$1.__langConfig.noHtmlAttrs !== true) {
              const el = document.documentElement;
              el.setAttribute("dir", lang.rtl === true ? "rtl" : "ltr");
              el.setAttribute("lang", lang.isoName);
            }
            Object.assign(Plugin$1.__langPack, lang);
            Plugin$1.props = lang;
            Plugin$1.isoName = lang.isoName;
            Plugin$1.nativeName = lang.nativeName;
          }
        },
        install({ $q, lang, ssrContext }) {
          {
            $q.lang = Plugin$1.__langPack;
            Plugin$1.__langConfig = $q.config.lang;
            if (this.__installed === true) {
              lang !== void 0 && this.set(lang);
            } else {
              this.set(lang || defaultLang);
            }
          }
        }
      });
      function setCssVar(propName, value, element = document.body) {
        if (typeof propName !== "string") {
          throw new TypeError("Expected a string as propName");
        }
        if (typeof value !== "string") {
          throw new TypeError("Expected a string as value");
        }
        if (!(element instanceof Element)) {
          throw new TypeError("Expected a DOM element");
        }
        element.style.setProperty(`--q-${propName}`, value);
      }
      function getMobilePlatform(is) {
        if (is.ios === true)
          return "ios";
        if (is.android === true)
          return "android";
      }
      function getBodyClasses({ is, has, within }, cfg) {
        const cls = [
          is.desktop === true ? "desktop" : "mobile",
          `${has.touch === false ? "no-" : ""}touch`
        ];
        if (is.mobile === true) {
          const mobile = getMobilePlatform(is);
          mobile !== void 0 && cls.push("platform-" + mobile);
        }
        if (is.nativeMobile === true) {
          const type = is.nativeMobileWrapper;
          cls.push(type);
          cls.push("native-mobile");
          if (is.ios === true && (cfg[type] === void 0 || cfg[type].iosStatusBarPadding !== false)) {
            cls.push("q-ios-padding");
          }
        } else if (is.electron === true) {
          cls.push("electron");
        } else if (is.bex === true) {
          cls.push("bex");
        }
        within.iframe === true && cls.push("within-iframe");
        return cls;
      }
      function applyClientSsrCorrections() {
        const { is } = client;
        const classes = document.body.className;
        const classList = new Set(classes.replace(/ {2}/g, " ").split(" "));
        if (is.nativeMobile !== true && is.electron !== true && is.bex !== true) {
          if (is.desktop === true) {
            classList.delete("mobile");
            classList.delete("platform-ios");
            classList.delete("platform-android");
            classList.add("desktop");
          } else if (is.mobile === true) {
            classList.delete("desktop");
            classList.add("mobile");
            classList.delete("platform-ios");
            classList.delete("platform-android");
            const mobile = getMobilePlatform(is);
            if (mobile !== void 0) {
              classList.add(`platform-${mobile}`);
            }
          }
        }
        if (client.has.touch === true) {
          classList.delete("no-touch");
          classList.add("touch");
        }
        if (client.within.iframe === true) {
          classList.add("within-iframe");
        }
        const newCls = Array.from(classList).join(" ");
        if (classes !== newCls) {
          document.body.className = newCls;
        }
      }
      function setColors(brand) {
        for (const color in brand) {
          setCssVar(color, brand[color]);
        }
      }
      const Body = {
        install(opts) {
          if (this.__installed === true)
            return;
          if (isRuntimeSsrPreHydration.value === true) {
            applyClientSsrCorrections();
          } else {
            const { $q } = opts;
            $q.config.brand !== void 0 && setColors($q.config.brand);
            const cls = getBodyClasses(client, $q.config);
            document.body.classList.add.apply(document.body.classList, cls);
          }
          if (client.is.ios === true) {
            document.body.addEventListener("touchstart", noop);
          }
          window.addEventListener("keydown", onKeyDownComposition, true);
        }
      };
      const materialIcons = {
        name: "material-icons",
        type: {
          positive: "check_circle",
          negative: "warning",
          info: "info",
          warning: "priority_high"
        },
        arrow: {
          up: "arrow_upward",
          right: "arrow_forward",
          down: "arrow_downward",
          left: "arrow_back",
          dropdown: "arrow_drop_down"
        },
        chevron: {
          left: "chevron_left",
          right: "chevron_right"
        },
        colorPicker: {
          spectrum: "gradient",
          tune: "tune",
          palette: "style"
        },
        pullToRefresh: {
          icon: "refresh"
        },
        carousel: {
          left: "chevron_left",
          right: "chevron_right",
          up: "keyboard_arrow_up",
          down: "keyboard_arrow_down",
          navigationIcon: "lens"
        },
        chip: {
          remove: "cancel",
          selected: "check"
        },
        datetime: {
          arrowLeft: "chevron_left",
          arrowRight: "chevron_right",
          now: "access_time",
          today: "today"
        },
        editor: {
          bold: "format_bold",
          italic: "format_italic",
          strikethrough: "strikethrough_s",
          underline: "format_underlined",
          unorderedList: "format_list_bulleted",
          orderedList: "format_list_numbered",
          subscript: "vertical_align_bottom",
          superscript: "vertical_align_top",
          hyperlink: "link",
          toggleFullscreen: "fullscreen",
          quote: "format_quote",
          left: "format_align_left",
          center: "format_align_center",
          right: "format_align_right",
          justify: "format_align_justify",
          print: "print",
          outdent: "format_indent_decrease",
          indent: "format_indent_increase",
          removeFormat: "format_clear",
          formatting: "text_format",
          fontSize: "format_size",
          align: "format_align_left",
          hr: "remove",
          undo: "undo",
          redo: "redo",
          heading: "format_size",
          code: "code",
          size: "format_size",
          font: "font_download",
          viewSource: "code"
        },
        expansionItem: {
          icon: "keyboard_arrow_down",
          denseIcon: "arrow_drop_down"
        },
        fab: {
          icon: "add",
          activeIcon: "close"
        },
        field: {
          clear: "cancel",
          error: "error"
        },
        pagination: {
          first: "first_page",
          prev: "keyboard_arrow_left",
          next: "keyboard_arrow_right",
          last: "last_page"
        },
        rating: {
          icon: "grade"
        },
        stepper: {
          done: "check",
          active: "edit",
          error: "warning"
        },
        tabs: {
          left: "chevron_left",
          right: "chevron_right",
          up: "keyboard_arrow_up",
          down: "keyboard_arrow_down"
        },
        table: {
          arrowUp: "arrow_upward",
          warning: "warning",
          firstPage: "first_page",
          prevPage: "chevron_left",
          nextPage: "chevron_right",
          lastPage: "last_page"
        },
        tree: {
          icon: "play_arrow"
        },
        uploader: {
          done: "done",
          clear: "clear",
          add: "add_box",
          upload: "cloud_upload",
          removeQueue: "clear_all",
          removeUploaded: "done_all"
        }
      };
      const Plugin = defineReactivePlugin({
        iconMapFn: null,
        __icons: {}
      }, {
        set(setObject, ssrContext) {
          const def = { ...setObject, rtl: setObject.rtl === true };
          {
            def.set = Plugin.set;
            Object.assign(Plugin.__icons, def);
          }
        },
        install({ $q, iconSet, ssrContext }) {
          {
            if ($q.config.iconMapFn !== void 0) {
              this.iconMapFn = $q.config.iconMapFn;
            }
            $q.iconSet = this.__icons;
            injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
              this.iconMapFn = val;
            });
            if (this.__installed === true) {
              iconSet !== void 0 && this.set(iconSet);
            } else {
              this.set(iconSet || materialIcons);
            }
          }
        }
      });
      const quasarKey = "_q_";
      const formKey = "_q_fo_";
      function isDeepEqual(a, b) {
        if (a === b) {
          return true;
        }
        if (a !== null && b !== null && typeof a === "object" && typeof b === "object") {
          if (a.constructor !== b.constructor) {
            return false;
          }
          let length, i;
          if (a.constructor === Array) {
            length = a.length;
            if (length !== b.length) {
              return false;
            }
            for (i = length; i-- !== 0; ) {
              if (isDeepEqual(a[i], b[i]) !== true) {
                return false;
              }
            }
            return true;
          }
          if (a.constructor === Map) {
            if (a.size !== b.size) {
              return false;
            }
            let iter = a.entries();
            i = iter.next();
            while (i.done !== true) {
              if (b.has(i.value[0]) !== true) {
                return false;
              }
              i = iter.next();
            }
            iter = a.entries();
            i = iter.next();
            while (i.done !== true) {
              if (isDeepEqual(i.value[1], b.get(i.value[0])) !== true) {
                return false;
              }
              i = iter.next();
            }
            return true;
          }
          if (a.constructor === Set) {
            if (a.size !== b.size) {
              return false;
            }
            const iter = a.entries();
            i = iter.next();
            while (i.done !== true) {
              if (b.has(i.value[0]) !== true) {
                return false;
              }
              i = iter.next();
            }
            return true;
          }
          if (a.buffer != null && a.buffer.constructor === ArrayBuffer) {
            length = a.length;
            if (length !== b.length) {
              return false;
            }
            for (i = length; i-- !== 0; ) {
              if (a[i] !== b[i]) {
                return false;
              }
            }
            return true;
          }
          if (a.constructor === RegExp) {
            return a.source === b.source && a.flags === b.flags;
          }
          if (a.valueOf !== Object.prototype.valueOf) {
            return a.valueOf() === b.valueOf();
          }
          if (a.toString !== Object.prototype.toString) {
            return a.toString() === b.toString();
          }
          const keys = Object.keys(a).filter((key) => a[key] !== void 0);
          length = keys.length;
          if (length !== Object.keys(b).filter((key) => b[key] !== void 0).length) {
            return false;
          }
          for (i = length; i-- !== 0; ) {
            const key = keys[i];
            if (isDeepEqual(a[key], b[key]) !== true) {
              return false;
            }
          }
          return true;
        }
        return a !== a && b !== b;
      }
      function isObject(v) {
        return v !== null && typeof v === "object" && Array.isArray(v) !== true;
      }
      function isDate(v) {
        return Object.prototype.toString.call(v) === "[object Date]";
      }
      function isNumber(v) {
        return typeof v === "number" && isFinite(v);
      }
      const autoInstalledPlugins = [
        Platform,
        Body,
        Plugin$2,
        Screen,
        History,
        Plugin$1,
        Plugin
      ];
      function createChildApp(appCfg, parentApp) {
        const app = vue.createApp(appCfg);
        app.config.globalProperties = parentApp.config.globalProperties;
        const { reload, ...appContext } = parentApp._context;
        Object.assign(app._context, appContext);
        return app;
      }
      function installPlugins(pluginOpts, pluginList) {
        pluginList.forEach((Plugin2) => {
          Plugin2.install(pluginOpts);
          Plugin2.__installed = true;
        });
      }
      function prepareApp(app, uiOpts, pluginOpts) {
        app.config.globalProperties.$q = pluginOpts.$q;
        app.provide(quasarKey, pluginOpts.$q);
        installPlugins(pluginOpts, autoInstalledPlugins);
        uiOpts.components !== void 0 && Object.values(uiOpts.components).forEach((c) => {
          if (isObject(c) === true && c.name !== void 0) {
            app.component(c.name, c);
          }
        });
        uiOpts.directives !== void 0 && Object.values(uiOpts.directives).forEach((d) => {
          if (isObject(d) === true && d.name !== void 0) {
            app.directive(d.name, d);
          }
        });
        uiOpts.plugins !== void 0 && installPlugins(
          pluginOpts,
          Object.values(uiOpts.plugins).filter(
            (p) => typeof p.install === "function" && autoInstalledPlugins.includes(p) === false
          )
        );
        if (isRuntimeSsrPreHydration.value === true) {
          pluginOpts.$q.onSSRHydrated = () => {
            pluginOpts.onSSRHydrated.forEach((fn) => {
              fn();
            });
            pluginOpts.$q.onSSRHydrated = () => {
            };
          };
        }
      }
      const installQuasar = function(parentApp, opts = {}) {
        const $q = { version: "2.14.6" };
        if (globalConfigIsFrozen === false) {
          if (opts.config !== void 0) {
            Object.assign(globalConfig, opts.config);
          }
          $q.config = { ...globalConfig };
          freezeGlobalConfig();
        } else {
          $q.config = opts.config || {};
        }
        prepareApp(parentApp, opts, {
          parentApp,
          $q,
          lang: opts.lang,
          iconSet: opts.iconSet,
          onSSRHydrated: []
        });
      };
      let uid$1 = 0;
      const defaults = {};
      const groups = {};
      const notificationsList = {};
      const positionClass$1 = {};
      const emptyRE = /^\s*$/;
      const notifRefs = [];
      const invalidTimeoutValues = [void 0, null, true, false, ""];
      const positionList = [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top",
        "bottom",
        "left",
        "right",
        "center"
      ];
      const badgePositions = [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
      ];
      const notifTypes = {
        positive: {
          icon: ($q) => $q.iconSet.type.positive,
          color: "positive"
        },
        negative: {
          icon: ($q) => $q.iconSet.type.negative,
          color: "negative"
        },
        warning: {
          icon: ($q) => $q.iconSet.type.warning,
          color: "warning",
          textColor: "dark"
        },
        info: {
          icon: ($q) => $q.iconSet.type.info,
          color: "info"
        },
        ongoing: {
          group: false,
          timeout: 0,
          spinner: true,
          color: "grey-8"
        }
      };
      function addNotification(config, $q, originalApi) {
        if (!config) {
          return logError("parameter required");
        }
        let Api;
        const notif = { textColor: "white" };
        if (config.ignoreDefaults !== true) {
          Object.assign(notif, defaults);
        }
        if (isObject(config) === false) {
          if (notif.type) {
            Object.assign(notif, notifTypes[notif.type]);
          }
          config = { message: config };
        }
        Object.assign(notif, notifTypes[config.type || notif.type], config);
        if (typeof notif.icon === "function") {
          notif.icon = notif.icon($q);
        }
        if (!notif.spinner) {
          notif.spinner = false;
        } else {
          if (notif.spinner === true) {
            notif.spinner = QSpinner;
          }
          notif.spinner = vue.markRaw(notif.spinner);
        }
        notif.meta = {
          hasMedia: Boolean(notif.spinner !== false || notif.icon || notif.avatar),
          hasText: hasContent(notif.message) || hasContent(notif.caption)
        };
        if (notif.position) {
          if (positionList.includes(notif.position) === false) {
            return logError("wrong position", config);
          }
        } else {
          notif.position = "bottom";
        }
        if (invalidTimeoutValues.includes(notif.timeout) === true) {
          notif.timeout = 5e3;
        } else {
          const t = Number(notif.timeout);
          if (isNaN(t) || t < 0) {
            return logError("wrong timeout", config);
          }
          notif.timeout = Number.isFinite(t) ? t : 0;
        }
        if (notif.timeout === 0) {
          notif.progress = false;
        } else if (notif.progress === true) {
          notif.meta.progressClass = "q-notification__progress" + (notif.progressClass ? ` ${notif.progressClass}` : "");
          notif.meta.progressStyle = {
            animationDuration: `${notif.timeout + 1e3}ms`
          };
        }
        const actions = (Array.isArray(config.actions) === true ? config.actions : []).concat(
          config.ignoreDefaults !== true && Array.isArray(defaults.actions) === true ? defaults.actions : []
        ).concat(
          notifTypes[config.type] !== void 0 && Array.isArray(notifTypes[config.type].actions) === true ? notifTypes[config.type].actions : []
        );
        const { closeBtn } = notif;
        closeBtn && actions.push({
          label: typeof closeBtn === "string" ? closeBtn : $q.lang.label.close
        });
        notif.actions = actions.map(({ handler, noDismiss, ...item }) => ({
          flat: true,
          ...item,
          onClick: typeof handler === "function" ? () => {
            handler();
            noDismiss !== true && dismiss();
          } : () => {
            dismiss();
          }
        }));
        if (notif.multiLine === void 0) {
          notif.multiLine = notif.actions.length > 1;
        }
        Object.assign(notif.meta, {
          class: `q-notification row items-stretch q-notification--${notif.multiLine === true ? "multi-line" : "standard"}` + (notif.color !== void 0 ? ` bg-${notif.color}` : "") + (notif.textColor !== void 0 ? ` text-${notif.textColor}` : "") + (notif.classes !== void 0 ? ` ${notif.classes}` : ""),
          wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (notif.multiLine === true ? "column no-wrap justify-center" : "row items-center"),
          contentClass: "q-notification__content row items-center" + (notif.multiLine === true ? "" : " col"),
          leftClass: notif.meta.hasText === true ? "additional" : "single",
          attrs: {
            role: "alert",
            ...notif.attrs
          }
        });
        if (notif.group === false) {
          notif.group = void 0;
          notif.meta.group = void 0;
        } else {
          if (notif.group === void 0 || notif.group === true) {
            notif.group = [
              notif.message,
              notif.caption,
              notif.multiline
            ].concat(
              notif.actions.map((props) => `${props.label}*${props.icon}`)
            ).join("|");
          }
          notif.meta.group = notif.group + "|" + notif.position;
        }
        if (notif.actions.length === 0) {
          notif.actions = void 0;
        } else {
          notif.meta.actionsClass = "q-notification__actions row items-center " + (notif.multiLine === true ? "justify-end" : "col-auto") + (notif.meta.hasMedia === true ? " q-notification__actions--with-media" : "");
        }
        if (originalApi !== void 0) {
          if (originalApi.notif.meta.timer) {
            clearTimeout(originalApi.notif.meta.timer);
            originalApi.notif.meta.timer = void 0;
          }
          notif.meta.uid = originalApi.notif.meta.uid;
          const index = notificationsList[notif.position].value.indexOf(originalApi.notif);
          notificationsList[notif.position].value[index] = notif;
        } else {
          const original = groups[notif.meta.group];
          if (original === void 0) {
            notif.meta.uid = uid$1++;
            notif.meta.badge = 1;
            if (["left", "right", "center"].indexOf(notif.position) !== -1) {
              notificationsList[notif.position].value.splice(
                Math.floor(notificationsList[notif.position].value.length / 2),
                0,
                notif
              );
            } else {
              const action = notif.position.indexOf("top") !== -1 ? "unshift" : "push";
              notificationsList[notif.position].value[action](notif);
            }
            if (notif.group !== void 0) {
              groups[notif.meta.group] = notif;
            }
          } else {
            if (original.meta.timer) {
              clearTimeout(original.meta.timer);
              original.meta.timer = void 0;
            }
            if (notif.badgePosition !== void 0) {
              if (badgePositions.includes(notif.badgePosition) === false) {
                return logError("wrong badgePosition", config);
              }
            } else {
              notif.badgePosition = `top-${notif.position.indexOf("left") !== -1 ? "right" : "left"}`;
            }
            notif.meta.uid = original.meta.uid;
            notif.meta.badge = original.meta.badge + 1;
            notif.meta.badgeClass = `q-notification__badge q-notification__badge--${notif.badgePosition}` + (notif.badgeColor !== void 0 ? ` bg-${notif.badgeColor}` : "") + (notif.badgeTextColor !== void 0 ? ` text-${notif.badgeTextColor}` : "") + (notif.badgeClass ? ` ${notif.badgeClass}` : "");
            const index = notificationsList[notif.position].value.indexOf(original);
            notificationsList[notif.position].value[index] = groups[notif.meta.group] = notif;
          }
        }
        const dismiss = () => {
          removeNotification(notif);
          Api = void 0;
        };
        if (notif.timeout > 0) {
          notif.meta.timer = setTimeout(() => {
            notif.meta.timer = void 0;
            dismiss();
          }, notif.timeout + /* show duration */
          1e3);
        }
        if (notif.group !== void 0) {
          return (props) => {
            if (props !== void 0) {
              logError("trying to update a grouped one which is forbidden", config);
            } else {
              dismiss();
            }
          };
        }
        Api = {
          dismiss,
          config,
          notif
        };
        if (originalApi !== void 0) {
          Object.assign(originalApi, Api);
          return;
        }
        return (props) => {
          if (Api !== void 0) {
            if (props === void 0) {
              Api.dismiss();
            } else {
              const newNotif = Object.assign({}, Api.config, props, {
                group: false,
                position: notif.position
              });
              addNotification(newNotif, $q, Api);
            }
          }
        };
      }
      function removeNotification(notif) {
        if (notif.meta.timer) {
          clearTimeout(notif.meta.timer);
          notif.meta.timer = void 0;
        }
        const index = notificationsList[notif.position].value.indexOf(notif);
        if (index !== -1) {
          if (notif.group !== void 0) {
            delete groups[notif.meta.group];
          }
          const el = notifRefs["" + notif.meta.uid];
          if (el) {
            const { width: width2, height } = getComputedStyle(el);
            el.style.left = `${el.offsetLeft}px`;
            el.style.width = width2;
            el.style.height = height;
          }
          notificationsList[notif.position].value.splice(index, 1);
          if (typeof notif.onDismiss === "function") {
            notif.onDismiss();
          }
        }
      }
      function hasContent(str) {
        return str !== void 0 && str !== null && emptyRE.test(str) !== true;
      }
      function logError(error, config) {
        console.error(`Notify: ${error}`, config);
        return false;
      }
      function getComponent() {
        return createComponent({
          name: "QNotifications",
          // hide App from Vue devtools
          devtools: { hide: true },
          setup() {
            return () => vue.h("div", { class: "q-notifications" }, positionList.map((pos) => {
              return vue.h(vue.TransitionGroup, {
                key: pos,
                class: positionClass$1[pos],
                tag: "div",
                name: `q-notification--${pos}`
              }, () => notificationsList[pos].value.map((notif) => {
                const meta = notif.meta;
                const mainChild = [];
                if (meta.hasMedia === true) {
                  if (notif.spinner !== false) {
                    mainChild.push(
                      vue.h(notif.spinner, {
                        class: "q-notification__spinner q-notification__spinner--" + meta.leftClass,
                        color: notif.spinnerColor,
                        size: notif.spinnerSize
                      })
                    );
                  } else if (notif.icon) {
                    mainChild.push(
                      vue.h(QIcon, {
                        class: "q-notification__icon q-notification__icon--" + meta.leftClass,
                        name: notif.icon,
                        color: notif.iconColor,
                        size: notif.iconSize,
                        role: "img"
                      })
                    );
                  } else if (notif.avatar) {
                    mainChild.push(
                      vue.h(QAvatar, {
                        class: "q-notification__avatar q-notification__avatar--" + meta.leftClass
                      }, () => vue.h("img", { src: notif.avatar, "aria-hidden": "true" }))
                    );
                  }
                }
                if (meta.hasText === true) {
                  let msgChild;
                  const msgData = { class: "q-notification__message col" };
                  if (notif.html === true) {
                    msgData.innerHTML = notif.caption ? `<div>${notif.message}</div><div class="q-notification__caption">${notif.caption}</div>` : notif.message;
                  } else {
                    const msgNode = [notif.message];
                    msgChild = notif.caption ? [
                      vue.h("div", msgNode),
                      vue.h("div", { class: "q-notification__caption" }, [notif.caption])
                    ] : msgNode;
                  }
                  mainChild.push(
                    vue.h("div", msgData, msgChild)
                  );
                }
                const child = [
                  vue.h("div", { class: meta.contentClass }, mainChild)
                ];
                notif.progress === true && child.push(
                  vue.h("div", {
                    key: `${meta.uid}|p|${meta.badge}`,
                    class: meta.progressClass,
                    style: meta.progressStyle
                  })
                );
                notif.actions !== void 0 && child.push(
                  vue.h("div", {
                    class: meta.actionsClass
                  }, notif.actions.map((props) => vue.h(QBtn, props)))
                );
                meta.badge > 1 && child.push(
                  vue.h("div", {
                    key: `${meta.uid}|${meta.badge}`,
                    class: notif.meta.badgeClass,
                    style: notif.badgeStyle
                  }, [meta.badge])
                );
                return vue.h("div", {
                  ref: (el) => {
                    notifRefs["" + meta.uid] = el;
                  },
                  key: meta.uid,
                  class: meta.class,
                  ...meta.attrs
                }, [
                  vue.h("div", { class: meta.wrapperClass }, child)
                ]);
              }));
            }));
          }
        });
      }
      const Notify = {
        setDefaults(opts) {
          {
            isObject(opts) === true && Object.assign(defaults, opts);
          }
        },
        registerType(typeName, typeOpts) {
          if (isObject(typeOpts) === true) {
            notifTypes[typeName] = typeOpts;
          }
        },
        install({ $q, parentApp }) {
          $q.notify = this.create = (opts) => addNotification(opts, $q);
          $q.notify.setDefaults = this.setDefaults;
          $q.notify.registerType = this.registerType;
          if ($q.config.notify !== void 0) {
            this.setDefaults($q.config.notify);
          }
          if (this.__installed !== true) {
            positionList.forEach((pos) => {
              notificationsList[pos] = vue.ref([]);
              const vert = ["left", "center", "right"].includes(pos) === true ? "center" : pos.indexOf("top") !== -1 ? "top" : "bottom", align = pos.indexOf("left") !== -1 ? "start" : pos.indexOf("right") !== -1 ? "end" : "center", classes = ["left", "right"].includes(pos) ? `items-${pos === "left" ? "start" : "end"} justify-center` : pos === "center" ? "flex-center" : `items-${align}`;
              positionClass$1[pos] = `q-notifications__list q-notifications__list--${vert} fixed column no-wrap ${classes}`;
            });
            const el = createGlobalNode("q-notify");
            createChildApp(getComponent(), parentApp).mount(el);
          }
        }
      };
      const Quasar = {
        version: "2.14.6",
        install: installQuasar,
        lang: Plugin$1,
        iconSet: Plugin
      };
      function useQuasar() {
        return vue.inject(quasarKey);
      }
      const useDarkProps = {
        dark: {
          type: Boolean,
          default: null
        }
      };
      function useDark(props, $q) {
        return vue.computed(() => props.dark === null ? $q.dark.isActive : props.dark);
      }
      const defaultSizes$1 = {
        xs: 8,
        sm: 10,
        md: 14,
        lg: 20,
        xl: 24
      };
      const QChip = createComponent({
        name: "QChip",
        props: {
          ...useDarkProps,
          ...useSizeProps,
          dense: Boolean,
          icon: String,
          iconRight: String,
          iconRemove: String,
          iconSelected: String,
          label: [String, Number],
          color: String,
          textColor: String,
          modelValue: {
            type: Boolean,
            default: true
          },
          selected: {
            type: Boolean,
            default: null
          },
          square: Boolean,
          outline: Boolean,
          clickable: Boolean,
          removable: Boolean,
          removeAriaLabel: String,
          tabindex: [String, Number],
          disable: Boolean,
          ripple: {
            type: [Boolean, Object],
            default: true
          }
        },
        emits: ["update:modelValue", "update:selected", "remove", "click"],
        setup(props, { slots, emit }) {
          const { proxy: { $q } } = vue.getCurrentInstance();
          const isDark = useDark(props, $q);
          const sizeStyle = useSize(props, defaultSizes$1);
          const hasLeftIcon = vue.computed(() => props.selected === true || props.icon !== void 0);
          const leftIcon = vue.computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
          const removeIcon = vue.computed(() => props.iconRemove || $q.iconSet.chip.remove);
          const isClickable = vue.computed(
            () => props.disable === false && (props.clickable === true || props.selected !== null)
          );
          const classes = vue.computed(() => {
            const text = props.outline === true ? props.color || props.textColor : props.textColor;
            return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
          });
          const attributes = vue.computed(() => {
            const chip = props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 };
            const remove = {
              ...chip,
              role: "button",
              "aria-hidden": "false",
              "aria-label": props.removeAriaLabel || $q.lang.label.remove
            };
            return { chip, remove };
          });
          function onKeyup2(e) {
            e.keyCode === 13 && onClick(e);
          }
          function onClick(e) {
            if (!props.disable) {
              emit("update:selected", !props.selected);
              emit("click", e);
            }
          }
          function onRemove(e) {
            if (e.keyCode === void 0 || e.keyCode === 13) {
              stopAndPrevent(e);
              if (props.disable === false) {
                emit("update:modelValue", false);
                emit("remove");
              }
            }
          }
          function getContent() {
            const child = [];
            isClickable.value === true && child.push(
              vue.h("div", { class: "q-focus-helper" })
            );
            hasLeftIcon.value === true && child.push(
              vue.h(QIcon, {
                class: "q-chip__icon q-chip__icon--left",
                name: leftIcon.value
              })
            );
            const label = props.label !== void 0 ? [vue.h("div", { class: "ellipsis" }, [props.label])] : void 0;
            child.push(
              vue.h("div", {
                class: "q-chip__content col row no-wrap items-center q-anchor--skip"
              }, hMergeSlotSafely(slots.default, label))
            );
            props.iconRight && child.push(
              vue.h(QIcon, {
                class: "q-chip__icon q-chip__icon--right",
                name: props.iconRight
              })
            );
            props.removable === true && child.push(
              vue.h(QIcon, {
                class: "q-chip__icon q-chip__icon--remove cursor-pointer",
                name: removeIcon.value,
                ...attributes.value.remove,
                onClick: onRemove,
                onKeyup: onRemove
              })
            );
            return child;
          }
          return () => {
            if (props.modelValue === false)
              return;
            const data = {
              class: classes.value,
              style: sizeStyle.value
            };
            isClickable.value === true && Object.assign(
              data,
              attributes.value.chip,
              { onClick, onKeyup: onKeyup2 }
            );
            return hDir(
              "div",
              data,
              getContent(),
              "ripple",
              props.ripple !== false && props.disable !== true,
              () => [[Ripple, props.ripple]]
            );
          };
        }
      });
      const QTd = createComponent({
        name: "QTd",
        props: {
          props: Object,
          autoWidth: Boolean,
          noHover: Boolean
        },
        setup(props, { slots }) {
          const vm = vue.getCurrentInstance();
          const classes = vue.computed(
            () => "q-td" + (props.autoWidth === true ? " q-table--col-auto-width" : "") + (props.noHover === true ? " q-td--no-hover" : "") + " "
          );
          return () => {
            if (props.props === void 0) {
              return vue.h("td", { class: classes.value }, hSlot(slots.default));
            }
            const name = vm.vnode.key;
            const col = (props.props.colsMap !== void 0 ? props.props.colsMap[name] : null) || props.props.col;
            if (col === void 0)
              return;
            const { row } = props.props;
            return vue.h("td", {
              class: classes.value + col.__tdClass(row),
              style: col.__tdStyle(row)
            }, hSlot(slots.default));
          };
        }
      });
      const QTh = createComponent({
        name: "QTh",
        props: {
          props: Object,
          autoWidth: Boolean
        },
        emits: ["click"],
        setup(props, { slots, emit }) {
          const vm = vue.getCurrentInstance();
          const { proxy: { $q } } = vm;
          const onClick = (evt) => {
            emit("click", evt);
          };
          return () => {
            if (props.props === void 0) {
              return vue.h("th", {
                class: props.autoWidth === true ? "q-table--col-auto-width" : "",
                onClick
              }, hSlot(slots.default));
            }
            let col, child;
            const name = vm.vnode.key;
            if (name) {
              col = props.props.colsMap[name];
              if (col === void 0)
                return;
            } else {
              col = props.props.col;
            }
            if (col.sortable === true) {
              const action = col.align === "right" ? "unshift" : "push";
              child = hUniqueSlot(slots.default, []);
              child[action](
                vue.h(QIcon, {
                  class: col.__iconClass,
                  name: $q.iconSet.table.arrowUp
                })
              );
            } else {
              child = hSlot(slots.default);
            }
            const data = {
              class: col.__thClass + (props.autoWidth === true ? " q-table--col-auto-width" : ""),
              style: col.headerStyle,
              onClick: (evt) => {
                col.sortable === true && props.props.sort(col);
                onClick(evt);
              }
            };
            return vue.h("th", data, child);
          };
        }
      });
      const insetMap = {
        true: "inset",
        item: "item-inset",
        "item-thumbnail": "item-thumbnail-inset"
      };
      const margins = {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 24
      };
      const QSeparator = createComponent({
        name: "QSeparator",
        props: {
          ...useDarkProps,
          spaced: [Boolean, String],
          inset: [Boolean, String],
          vertical: Boolean,
          color: String,
          size: String
        },
        setup(props) {
          const vm = vue.getCurrentInstance();
          const isDark = useDark(props, vm.proxy.$q);
          const orientation = vue.computed(() => props.vertical === true ? "vertical" : "horizontal");
          const orientClass = vue.computed(() => ` q-separator--${orientation.value}`);
          const insetClass = vue.computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
          const classes = vue.computed(
            () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
          );
          const style = vue.computed(() => {
            const acc = {};
            if (props.size !== void 0) {
              acc[props.vertical === true ? "width" : "height"] = props.size;
            }
            if (props.spaced !== false) {
              const size2 = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
              const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
              acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size2;
            }
            return acc;
          });
          return () => vue.h("hr", {
            class: classes.value,
            style: style.value,
            "aria-orientation": orientation.value
          });
        }
      });
      const QList = createComponent({
        name: "QList",
        props: {
          ...useDarkProps,
          bordered: Boolean,
          dense: Boolean,
          separator: Boolean,
          padding: Boolean,
          tag: {
            type: String,
            default: "div"
          }
        },
        setup(props, { slots }) {
          const vm = vue.getCurrentInstance();
          const isDark = useDark(props, vm.proxy.$q);
          const classes = vue.computed(
            () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
          );
          return () => vue.h(props.tag, { class: classes.value }, hSlot(slots.default));
        }
      });
      const separatorValues = ["horizontal", "vertical", "cell", "none"];
      const QMarkupTable = createComponent({
        name: "QMarkupTable",
        props: {
          ...useDarkProps,
          dense: Boolean,
          flat: Boolean,
          bordered: Boolean,
          square: Boolean,
          wrapCells: Boolean,
          separator: {
            type: String,
            default: "horizontal",
            validator: (v) => separatorValues.includes(v)
          }
        },
        setup(props, { slots }) {
          const vm = vue.getCurrentInstance();
          const isDark = useDark(props, vm.proxy.$q);
          const classes = vue.computed(
            () => `q-markup-table q-table__container q-table__card q-table--${props.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "") + (props.square === true ? " q-table--square" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "")
          );
          return () => vue.h("div", {
            class: classes.value
          }, [
            vue.h("table", { class: "q-table" }, hSlot(slots.default))
          ]);
        }
      });
      function getTableMiddle(props, content) {
        return vue.h("div", props, [
          vue.h("table", { class: "q-table" }, content)
        ]);
      }
      let rtlHasScrollBug = false;
      {
        const scroller = document.createElement("div");
        scroller.setAttribute("dir", "rtl");
        Object.assign(scroller.style, {
          width: "1px",
          height: "1px",
          overflow: "auto"
        });
        const spacer = document.createElement("div");
        Object.assign(spacer.style, {
          width: "1000px",
          height: "1px"
        });
        document.body.appendChild(scroller);
        scroller.appendChild(spacer);
        scroller.scrollLeft = -1e3;
        rtlHasScrollBug = scroller.scrollLeft >= 0;
        scroller.remove();
      }
      const aggBucketSize = 1e3;
      const scrollToEdges = [
        "start",
        "center",
        "end",
        "start-force",
        "center-force",
        "end-force"
      ];
      const filterProto = Array.prototype.filter;
      const setOverflowAnchor = window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function(contentEl, index) {
        if (contentEl === null) {
          return;
        }
        if (contentEl._qOverflowAnimationFrame !== void 0) {
          cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
        }
        contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
          if (contentEl === null) {
            return;
          }
          contentEl._qOverflowAnimationFrame = void 0;
          const children = contentEl.children || [];
          filterProto.call(children, (el2) => el2.dataset && el2.dataset.qVsAnchor !== void 0).forEach((el2) => {
            delete el2.dataset.qVsAnchor;
          });
          const el = children[index];
          if (el && el.dataset) {
            el.dataset.qVsAnchor = "";
          }
        });
      };
      function sumFn(acc, h2) {
        return acc + h2;
      }
      function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
        const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
          scrollStart: 0,
          scrollViewSize: -stickyStart - stickyEnd,
          scrollMaxSize: 0,
          offsetStart: -stickyStart,
          offsetEnd: -stickyEnd
        };
        if (horizontal === true) {
          if (parent === window) {
            details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
            details.scrollViewSize += document.documentElement.clientWidth;
          } else {
            details.scrollStart = parentCalc.scrollLeft;
            details.scrollViewSize += parentCalc.clientWidth;
          }
          details.scrollMaxSize = parentCalc.scrollWidth;
          if (rtl === true) {
            details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
          }
        } else {
          if (parent === window) {
            details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
            details.scrollViewSize += document.documentElement.clientHeight;
          } else {
            details.scrollStart = parentCalc.scrollTop;
            details.scrollViewSize += parentCalc.clientHeight;
          }
          details.scrollMaxSize = parentCalc.scrollHeight;
        }
        if (beforeRef !== null) {
          for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
            if (el.classList.contains("q-virtual-scroll--skip") === false) {
              details.offsetStart += el[propElSize];
            }
          }
        }
        if (afterRef !== null) {
          for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) {
            if (el.classList.contains("q-virtual-scroll--skip") === false) {
              details.offsetEnd += el[propElSize];
            }
          }
        }
        if (child !== parent) {
          const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
          if (horizontal === true) {
            details.offsetStart += childRect.left - parentRect.left;
            details.offsetEnd -= childRect.width;
          } else {
            details.offsetStart += childRect.top - parentRect.top;
            details.offsetEnd -= childRect.height;
          }
          if (parent !== window) {
            details.offsetStart += details.scrollStart;
          }
          details.offsetEnd += details.scrollMaxSize - details.offsetStart;
        }
        return details;
      }
      function setScroll(parent, scroll, horizontal, rtl) {
        if (scroll === "end") {
          scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
        }
        if (parent === window) {
          if (horizontal === true) {
            if (rtl === true) {
              scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
            }
            window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
          } else {
            window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
          }
        } else if (horizontal === true) {
          if (rtl === true) {
            scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
          }
          parent.scrollLeft = scroll;
        } else {
          parent.scrollTop = scroll;
        }
      }
      function sumSize(sizeAgg, size2, from, to) {
        if (from >= to) {
          return 0;
        }
        const lastTo = size2.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
        let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
        if (from % aggBucketSize !== 0) {
          total -= size2.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
        }
        if (to % aggBucketSize !== 0 && to !== lastTo) {
          total -= size2.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
        }
        return total;
      }
      const commonVirtScrollProps = {
        virtualScrollSliceSize: {
          type: [Number, String],
          default: null
        },
        virtualScrollSliceRatioBefore: {
          type: [Number, String],
          default: 1
        },
        virtualScrollSliceRatioAfter: {
          type: [Number, String],
          default: 1
        },
        virtualScrollItemSize: {
          type: [Number, String],
          default: 24
        },
        virtualScrollStickySizeStart: {
          type: [Number, String],
          default: 0
        },
        virtualScrollStickySizeEnd: {
          type: [Number, String],
          default: 0
        },
        tableColspan: [Number, String]
      };
      const commonVirtPropsList = Object.keys(commonVirtScrollProps);
      const useVirtualScrollProps = {
        virtualScrollHorizontal: Boolean,
        onVirtualScroll: Function,
        ...commonVirtScrollProps
      };
      function useVirtualScroll({
        virtualScrollLength,
        getVirtualScrollTarget,
        getVirtualScrollEl,
        virtualScrollItemSizeComputed
        // optional
      }) {
        const vm = vue.getCurrentInstance();
        const { props, emit, proxy } = vm;
        const { $q } = proxy;
        let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
        const virtualScrollPaddingBefore = vue.ref(0);
        const virtualScrollPaddingAfter = vue.ref(0);
        const virtualScrollSliceSizeComputed = vue.ref({});
        const beforeRef = vue.ref(null);
        const afterRef = vue.ref(null);
        const contentRef = vue.ref(null);
        const virtualScrollSliceRange = vue.ref({ from: 0, to: 0 });
        const colspanAttr = vue.computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
        if (virtualScrollItemSizeComputed === void 0) {
          virtualScrollItemSizeComputed = vue.computed(() => props.virtualScrollItemSize);
        }
        const needsReset = vue.computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
        const needsSliceRecalc = vue.computed(
          () => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter
        );
        vue.watch(needsSliceRecalc, () => {
          setVirtualScrollSize();
        });
        vue.watch(needsReset, reset);
        function reset() {
          localResetVirtualScroll(prevToIndex, true);
        }
        function refresh(toIndex) {
          localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
        }
        function scrollTo(toIndex, edge) {
          const scrollEl = getVirtualScrollTarget();
          if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
            return;
          }
          const scrollDetails = getScrollDetails(
            scrollEl,
            getVirtualScrollEl(),
            beforeRef.value,
            afterRef.value,
            props.virtualScrollHorizontal,
            $q.lang.rtl,
            props.virtualScrollStickySizeStart,
            props.virtualScrollStickySizeEnd
          );
          localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
          setVirtualScrollSliceRange(
            scrollEl,
            scrollDetails,
            Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)),
            0,
            scrollToEdges.indexOf(edge) !== -1 ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start"
          );
        }
        function localOnVirtualScrollEvt() {
          const scrollEl = getVirtualScrollTarget();
          if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
            return;
          }
          const scrollDetails = getScrollDetails(
            scrollEl,
            getVirtualScrollEl(),
            beforeRef.value,
            afterRef.value,
            props.virtualScrollHorizontal,
            $q.lang.rtl,
            props.virtualScrollStickySizeStart,
            props.virtualScrollStickySizeEnd
          ), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
          if (prevScrollStart === scrollDetails.scrollStart) {
            return;
          }
          if (scrollDetails.scrollMaxSize <= 0) {
            setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
            return;
          }
          localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
          updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
          const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
          if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
            setVirtualScrollSliceRange(
              scrollEl,
              scrollDetails,
              listLastIndex,
              scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0)
            );
            return;
          }
          let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset = listOffset;
          if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
            listOffset -= virtualScrollPaddingBefore.value;
            toIndex = virtualScrollSliceRange.value.from;
            offset = listOffset;
          } else {
            for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
              listOffset -= virtualScrollSizesAgg[j];
              toIndex += aggBucketSize;
            }
          }
          while (listOffset > 0 && toIndex < listLastIndex) {
            listOffset -= virtualScrollSizes[toIndex];
            if (listOffset > -scrollDetails.scrollViewSize) {
              toIndex++;
              offset = listOffset;
            } else {
              offset = virtualScrollSizes[toIndex] + listOffset;
            }
          }
          setVirtualScrollSliceRange(
            scrollEl,
            scrollDetails,
            toIndex,
            offset
          );
        }
        function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
          const alignForce = typeof align === "string" && align.indexOf("-force") !== -1;
          const alignEnd = alignForce === true ? align.replace("-force", "") : align;
          const alignRange = alignEnd !== void 0 ? alignEnd : "start";
          let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
          if (to > virtualScrollLength.value) {
            to = virtualScrollLength.value;
            from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
          }
          prevScrollStart = scrollDetails.scrollStart;
          const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
          if (rangeChanged === false && alignEnd === void 0) {
            emitScroll(toIndex);
            return;
          }
          const { activeElement } = document;
          const contentEl = contentRef.value;
          if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
            contentEl.addEventListener("focusout", onBlurRefocusFn);
            setTimeout(() => {
              contentEl !== null && contentEl.removeEventListener("focusout", onBlurRefocusFn);
            });
          }
          setOverflowAnchor(contentEl, toIndex - from);
          const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
          if (rangeChanged === true) {
            const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
            virtualScrollSliceRange.value = { from, to: tempTo };
            virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
            virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
            requestAnimationFrame(() => {
              if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
                virtualScrollSliceRange.value = { from: virtualScrollSliceRange.value.from, to };
                virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
              }
            });
          }
          requestAnimationFrame(() => {
            if (prevScrollStart !== scrollDetails.scrollStart) {
              return;
            }
            if (rangeChanged === true) {
              updateVirtualScrollSizes(from);
            }
            const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
            let scrollPosition = posStart + offset;
            if (alignEnd !== void 0) {
              const sizeDiff = sizeAfter - sizeBefore;
              const scrollStart = scrollDetails.scrollStart + sizeDiff;
              scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
            }
            prevScrollStart = scrollPosition;
            setScroll(
              scrollEl,
              scrollPosition,
              props.virtualScrollHorizontal,
              $q.lang.rtl
            );
            emitScroll(toIndex);
          });
        }
        function updateVirtualScrollSizes(from) {
          const contentEl = contentRef.value;
          if (contentEl) {
            const children = filterProto.call(
              contentEl.children,
              (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false
            ), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
            let index = from, size2, diff;
            for (let i = 0; i < childrenLength; ) {
              size2 = sizeFn(children[i]);
              i++;
              while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
                size2 += sizeFn(children[i]);
                i++;
              }
              diff = size2 - virtualScrollSizes[index];
              if (diff !== 0) {
                virtualScrollSizes[index] += diff;
                virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
              }
              index++;
            }
          }
        }
        function onBlurRefocusFn() {
          contentRef.value !== null && contentRef.value !== void 0 && contentRef.value.focus();
        }
        function localResetVirtualScroll(toIndex, fullReset) {
          const defaultSize = 1 * virtualScrollItemSizeComputed.value;
          if (fullReset === true || Array.isArray(virtualScrollSizes) === false) {
            virtualScrollSizes = [];
          }
          const oldVirtualScrollSizesLength = virtualScrollSizes.length;
          virtualScrollSizes.length = virtualScrollLength.value;
          for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) {
            virtualScrollSizes[i] = defaultSize;
          }
          const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
          virtualScrollSizesAgg = [];
          for (let j = 0; j <= jMax; j++) {
            let size2 = 0;
            const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
            for (let i = j * aggBucketSize; i < iMax; i++) {
              size2 += virtualScrollSizes[i];
            }
            virtualScrollSizesAgg.push(size2);
          }
          prevToIndex = -1;
          prevScrollStart = void 0;
          virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
          virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
          if (toIndex >= 0) {
            updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
            vue.nextTick(() => {
              scrollTo(toIndex);
            });
          } else {
            onVirtualScrollEvt();
          }
        }
        function setVirtualScrollSize(scrollViewSize) {
          if (scrollViewSize === void 0 && typeof window !== "undefined") {
            const scrollEl = getVirtualScrollTarget();
            if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
              scrollViewSize = getScrollDetails(
                scrollEl,
                getVirtualScrollEl(),
                beforeRef.value,
                afterRef.value,
                props.virtualScrollHorizontal,
                $q.lang.rtl,
                props.virtualScrollStickySizeStart,
                props.virtualScrollStickySizeEnd
              ).scrollViewSize;
            }
          }
          localScrollViewSize = scrollViewSize;
          const virtualScrollSliceRatioBefore = parseFloat(props.virtualScrollSliceRatioBefore) || 0;
          const virtualScrollSliceRatioAfter = parseFloat(props.virtualScrollSliceRatioAfter) || 0;
          const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
          const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
          const baseSize = Math.max(
            1,
            view,
            Math.ceil((props.virtualScrollSliceSize > 0 ? props.virtualScrollSliceSize : 10) / multiplier)
          );
          virtualScrollSliceSizeComputed.value = {
            total: Math.ceil(baseSize * multiplier),
            start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
            center: Math.ceil(baseSize * (0.5 + virtualScrollSliceRatioBefore)),
            end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
            view
          };
        }
        function padVirtualScroll(tag, content) {
          const paddingSize = props.virtualScrollHorizontal === true ? "width" : "height";
          const style = {
            ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px"
          };
          return [
            tag === "tbody" ? vue.h(tag, {
              class: "q-virtual-scroll__padding",
              key: "before",
              ref: beforeRef
            }, [
              vue.h("tr", [
                vue.h("td", {
                  style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style },
                  colspan: colspanAttr.value
                })
              ])
            ]) : vue.h(tag, {
              class: "q-virtual-scroll__padding",
              key: "before",
              ref: beforeRef,
              style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style }
            }),
            vue.h(tag, {
              class: "q-virtual-scroll__content",
              key: "content",
              ref: contentRef,
              tabindex: -1
            }, content.flat()),
            tag === "tbody" ? vue.h(tag, {
              class: "q-virtual-scroll__padding",
              key: "after",
              ref: afterRef
            }, [
              vue.h("tr", [
                vue.h("td", {
                  style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style },
                  colspan: colspanAttr.value
                })
              ])
            ]) : vue.h(tag, {
              class: "q-virtual-scroll__padding",
              key: "after",
              ref: afterRef,
              style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style }
            })
          ];
        }
        function emitScroll(index) {
          if (prevToIndex !== index) {
            props.onVirtualScroll !== void 0 && emit("virtualScroll", {
              index,
              from: virtualScrollSliceRange.value.from,
              to: virtualScrollSliceRange.value.to - 1,
              direction: index < prevToIndex ? "decrease" : "increase",
              ref: proxy
            });
            prevToIndex = index;
          }
        }
        setVirtualScrollSize();
        const onVirtualScrollEvt = debounce(
          localOnVirtualScrollEvt,
          $q.platform.is.ios === true ? 120 : 35
        );
        vue.onBeforeMount(() => {
          setVirtualScrollSize();
        });
        let shouldActivate = false;
        vue.onDeactivated(() => {
          shouldActivate = true;
        });
        vue.onActivated(() => {
          if (shouldActivate !== true)
            return;
          const scrollEl = getVirtualScrollTarget();
          if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
            setScroll(
              scrollEl,
              prevScrollStart,
              props.virtualScrollHorizontal,
              $q.lang.rtl
            );
          } else {
            scrollTo(prevToIndex);
          }
        });
        vue.onBeforeUnmount(() => {
          onVirtualScrollEvt.cancel();
        });
        Object.assign(proxy, { scrollTo, reset, refresh });
        return {
          virtualScrollSliceRange,
          virtualScrollSliceSizeComputed,
          setVirtualScrollSize,
          onVirtualScrollEvt,
          localResetVirtualScroll,
          padVirtualScroll,
          scrollTo,
          reset,
          refresh
        };
      }
      const scrollTargets = [null, document, document.body, document.scrollingElement, document.documentElement];
      function getScrollTarget(el, targetEl) {
        let target2 = getElement(targetEl);
        if (target2 === void 0) {
          if (el === void 0 || el === null) {
            return window;
          }
          target2 = el.closest(".scroll,.scroll-y,.overflow-auto");
        }
        return scrollTargets.includes(target2) ? window : target2;
      }
      function getVerticalScrollPosition(scrollTarget) {
        return scrollTarget === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : scrollTarget.scrollTop;
      }
      function getHorizontalScrollPosition(scrollTarget) {
        return scrollTarget === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : scrollTarget.scrollLeft;
      }
      let size;
      function getScrollbarWidth() {
        if (size !== void 0) {
          return size;
        }
        const inner = document.createElement("p"), outer = document.createElement("div");
        css(inner, {
          width: "100%",
          height: "200px"
        });
        css(outer, {
          position: "absolute",
          top: "0px",
          left: "0px",
          visibility: "hidden",
          width: "200px",
          height: "150px",
          overflow: "hidden"
        });
        outer.appendChild(inner);
        document.body.appendChild(outer);
        const w1 = inner.offsetWidth;
        outer.style.overflow = "scroll";
        let w2 = inner.offsetWidth;
        if (w1 === w2) {
          w2 = outer.clientWidth;
        }
        outer.remove();
        size = w1 - w2;
        return size;
      }
      function hasScrollbar(el, onY = true) {
        if (!el || el.nodeType !== Node.ELEMENT_NODE) {
          return false;
        }
        return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-y"])) : el.scrollWidth > el.clientWidth && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-x"]));
      }
      const comps = {
        list: QList,
        table: QMarkupTable
      };
      const typeOptions = ["list", "table", "__qtable"];
      const QVirtualScroll = createComponent({
        name: "QVirtualScroll",
        props: {
          ...useVirtualScrollProps,
          type: {
            type: String,
            default: "list",
            validator: (v) => typeOptions.includes(v)
          },
          items: {
            type: Array,
            default: () => []
          },
          itemsFn: Function,
          itemsSize: Number,
          scrollTarget: {
            default: void 0
          }
        },
        setup(props, { slots, attrs }) {
          let localScrollTarget;
          const rootRef = vue.ref(null);
          const virtualScrollLength = vue.computed(() => props.itemsSize >= 0 && props.itemsFn !== void 0 ? parseInt(props.itemsSize, 10) : Array.isArray(props.items) ? props.items.length : 0);
          const {
            virtualScrollSliceRange,
            localResetVirtualScroll,
            padVirtualScroll,
            onVirtualScrollEvt
          } = useVirtualScroll({
            virtualScrollLength,
            getVirtualScrollTarget,
            getVirtualScrollEl
          });
          const virtualScrollScope = vue.computed(() => {
            if (virtualScrollLength.value === 0) {
              return [];
            }
            const mapFn = (item, i) => ({
              index: virtualScrollSliceRange.value.from + i,
              item
            });
            return props.itemsFn === void 0 ? props.items.slice(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to).map(mapFn) : props.itemsFn(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to - virtualScrollSliceRange.value.from).map(mapFn);
          });
          const classes = vue.computed(
            () => "q-virtual-scroll q-virtual-scroll" + (props.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (props.scrollTarget !== void 0 ? "" : " scroll")
          );
          const attributes = vue.computed(() => props.scrollTarget !== void 0 ? {} : { tabindex: 0 });
          vue.watch(virtualScrollLength, () => {
            localResetVirtualScroll();
          });
          vue.watch(() => props.scrollTarget, () => {
            unconfigureScrollTarget();
            configureScrollTarget();
          });
          function getVirtualScrollEl() {
            return rootRef.value.$el || rootRef.value;
          }
          function getVirtualScrollTarget() {
            return localScrollTarget;
          }
          function configureScrollTarget() {
            localScrollTarget = getScrollTarget(getVirtualScrollEl(), props.scrollTarget);
            localScrollTarget.addEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
          }
          function unconfigureScrollTarget() {
            if (localScrollTarget !== void 0) {
              localScrollTarget.removeEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
              localScrollTarget = void 0;
            }
          }
          function __getVirtualChildren() {
            let child = padVirtualScroll(
              props.type === "list" ? "div" : "tbody",
              virtualScrollScope.value.map(slots.default)
            );
            if (slots.before !== void 0) {
              child = slots.before().concat(child);
            }
            return hMergeSlot(slots.after, child);
          }
          vue.onBeforeMount(() => {
            localResetVirtualScroll();
          });
          vue.onMounted(() => {
            configureScrollTarget();
          });
          vue.onActivated(() => {
            configureScrollTarget();
          });
          vue.onDeactivated(() => {
            unconfigureScrollTarget();
          });
          vue.onBeforeUnmount(() => {
            unconfigureScrollTarget();
          });
          return () => {
            if (slots.default === void 0) {
              console.error("QVirtualScroll: default scoped slot is required for rendering");
              return;
            }
            return props.type === "__qtable" ? getTableMiddle(
              { ref: rootRef, class: "q-table__middle " + classes.value },
              __getVirtualChildren()
            ) : vue.h(comps[props.type], {
              ...attrs,
              ref: rootRef,
              class: [attrs.class, classes.value],
              ...attributes.value
            }, __getVirtualChildren);
          };
        }
      });
      let buf, bufIdx = 0;
      const hexBytes = new Array(256);
      for (let i = 0; i < 256; i++) {
        hexBytes[i] = (i + 256).toString(16).substring(1);
      }
      const randomBytes = (() => {
        const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
        if (lib !== void 0) {
          if (lib.randomBytes !== void 0) {
            return lib.randomBytes;
          }
          if (lib.getRandomValues !== void 0) {
            return (n) => {
              const bytes = new Uint8Array(n);
              lib.getRandomValues(bytes);
              return bytes;
            };
          }
        }
        return (n) => {
          const r = [];
          for (let i = n; i > 0; i--) {
            r.push(Math.floor(Math.random() * 256));
          }
          return r;
        };
      })();
      const BUFFER_SIZE = 4096;
      function uid() {
        if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
          bufIdx = 0;
          buf = randomBytes(BUFFER_SIZE);
        }
        const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
        b[6] = b[6] & 15 | 64;
        b[8] = b[8] & 63 | 128;
        return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
      }
      function getId(val, requiredId) {
        return val === void 0 ? requiredId === true ? `f_${uid()}` : void 0 : val;
      }
      function useId(initialId, requiredId = true) {
        if (isRuntimeSsrPreHydration.value === true) {
          const id = vue.ref(initialId);
          if (requiredId === true && initialId === void 0) {
            vue.onMounted(() => {
              id.value = `f_${uid()}`;
            });
          }
          return id;
        }
        return vue.ref(
          getId(initialId, requiredId)
        );
      }
      function useFormChild({ validate, resetValidation, requiresQForm }) {
        const $form = vue.inject(formKey, false);
        if ($form !== false) {
          const { props, proxy } = vue.getCurrentInstance();
          Object.assign(proxy, { validate, resetValidation });
          vue.watch(() => props.disable, (val) => {
            if (val === true) {
              typeof resetValidation === "function" && resetValidation();
              $form.unbindComponent(proxy);
            } else {
              $form.bindComponent(proxy);
            }
          });
          vue.onMounted(() => {
            props.disable !== true && $form.bindComponent(proxy);
          });
          vue.onBeforeUnmount(() => {
            props.disable !== true && $form.unbindComponent(proxy);
          });
        } else if (requiresQForm === true) {
          console.error("Parent QForm not found on useFormChild()!");
        }
      }
      const hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
      const testPattern = {
        date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
        time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
        fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
        timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
        // -- RFC 5322 --
        // -- Added in v2.6.6 --
        // This is a basic helper validation.
        // For something more complex (like RFC 822) you should write and use your own rule.
        // We won't be accepting PRs to enhance the one below because of the reason above.
        // eslint-disable-next-line
        email: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
        hexColor: (v) => hex.test(v),
        hexaColor: (v) => hexa.test(v),
        hexOrHexaColor: (v) => hexOrHexa.test(v),
        rgbColor: (v) => rgb.test(v),
        rgbaColor: (v) => rgba.test(v),
        rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
        hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
        hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
        anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
      };
      const lazyRulesValues = [true, false, "ondemand"];
      const useValidateProps = {
        modelValue: {},
        error: {
          type: Boolean,
          default: null
        },
        errorMessage: String,
        noErrorIcon: Boolean,
        rules: Array,
        reactiveRules: Boolean,
        lazyRules: {
          type: [Boolean, String],
          default: false,
          // statement unneeded but avoids future vue implementation changes
          validator: (v) => lazyRulesValues.includes(v)
        }
      };
      function useValidate(focused, innerLoading) {
        const { props, proxy } = vue.getCurrentInstance();
        const innerError = vue.ref(false);
        const innerErrorMessage = vue.ref(null);
        const isDirtyModel = vue.ref(false);
        useFormChild({ validate, resetValidation });
        let validateIndex = 0, unwatchRules;
        const hasRules = vue.computed(
          () => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0
        );
        const canDebounceValidate = vue.computed(() => props.disable !== true && hasRules.value === true && innerLoading.value === false);
        const hasError = vue.computed(
          () => props.error === true || innerError.value === true
        );
        const errorMessage = vue.computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
        vue.watch(() => props.modelValue, () => {
          isDirtyModel.value = true;
          if (canDebounceValidate.value === true && props.lazyRules === false) {
            debouncedValidate();
          }
        });
        function onRulesChange() {
          if (props.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) {
            debouncedValidate();
          }
        }
        vue.watch(() => props.reactiveRules, (val) => {
          if (val === true) {
            if (unwatchRules === void 0) {
              unwatchRules = vue.watch(() => props.rules, onRulesChange, { immediate: true, deep: true });
            }
          } else if (unwatchRules !== void 0) {
            unwatchRules();
            unwatchRules = void 0;
          }
        }, { immediate: true });
        vue.watch(() => props.lazyRules, onRulesChange);
        vue.watch(focused, (val) => {
          if (val === true) {
            isDirtyModel.value = true;
          } else if (canDebounceValidate.value === true && props.lazyRules !== "ondemand") {
            debouncedValidate();
          }
        });
        function resetValidation() {
          validateIndex++;
          innerLoading.value = false;
          isDirtyModel.value = false;
          innerError.value = false;
          innerErrorMessage.value = null;
          debouncedValidate.cancel();
        }
        function validate(val = props.modelValue) {
          if (props.disable === true || hasRules.value === false) {
            return true;
          }
          const index = ++validateIndex;
          const setDirty = innerLoading.value !== true ? () => {
            isDirtyModel.value = true;
          } : () => {
          };
          const update2 = (err, msg) => {
            err === true && setDirty();
            innerError.value = err;
            innerErrorMessage.value = msg || null;
            innerLoading.value = false;
          };
          const promises = [];
          for (let i = 0; i < props.rules.length; i++) {
            const rule = props.rules[i];
            let res;
            if (typeof rule === "function") {
              res = rule(val, testPattern);
            } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
              res = testPattern[rule](val);
            }
            if (res === false || typeof res === "string") {
              update2(true, res);
              return false;
            } else if (res !== true && res !== void 0) {
              promises.push(res);
            }
          }
          if (promises.length === 0) {
            update2(false);
            return true;
          }
          innerLoading.value = true;
          return Promise.all(promises).then(
            (res) => {
              if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
                index === validateIndex && update2(false);
                return true;
              }
              const msg = res.find((r) => r === false || typeof r === "string");
              index === validateIndex && update2(msg !== void 0, msg);
              return msg === void 0;
            },
            (e) => {
              if (index === validateIndex) {
                console.error(e);
                update2(true);
              }
              return false;
            }
          );
        }
        const debouncedValidate = debounce(validate, 0);
        vue.onBeforeUnmount(() => {
          unwatchRules !== void 0 && unwatchRules();
          debouncedValidate.cancel();
        });
        Object.assign(proxy, { resetValidation, validate });
        injectProp(proxy, "hasError", () => hasError.value);
        return {
          isDirtyModel,
          hasRules,
          hasError,
          errorMessage,
          validate,
          resetValidation
        };
      }
      const listenerRE = /^on[A-Z]/;
      function useSplitAttrs(attrs, vnode) {
        const acc = {
          listeners: vue.ref({}),
          attributes: vue.ref({})
        };
        function update2() {
          const attributes = {};
          const listeners = {};
          for (const key in attrs) {
            if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
              attributes[key] = attrs[key];
            }
          }
          for (const key in vnode.props) {
            if (listenerRE.test(key) === true) {
              listeners[key] = vnode.props[key];
            }
          }
          acc.attributes.value = attributes;
          acc.listeners.value = listeners;
        }
        vue.onBeforeUpdate(update2);
        update2();
        return acc;
      }
      let queue = [];
      let waitFlags = [];
      function clearFlag(flag) {
        waitFlags = waitFlags.filter((entry) => entry !== flag);
      }
      function addFocusWaitFlag(flag) {
        clearFlag(flag);
        waitFlags.push(flag);
      }
      function removeFocusWaitFlag(flag) {
        clearFlag(flag);
        if (waitFlags.length === 0 && queue.length !== 0) {
          queue[queue.length - 1]();
          queue = [];
        }
      }
      function addFocusFn(fn) {
        if (waitFlags.length === 0) {
          fn();
        } else {
          queue.push(fn);
        }
      }
      function removeFocusFn(fn) {
        queue = queue.filter((entry) => entry !== fn);
      }
      function fieldValueIsFilled(val) {
        return val !== void 0 && val !== null && ("" + val).length !== 0;
      }
      const useFieldProps = {
        ...useDarkProps,
        ...useValidateProps,
        label: String,
        stackLabel: Boolean,
        hint: String,
        hideHint: Boolean,
        prefix: String,
        suffix: String,
        labelColor: String,
        color: String,
        bgColor: String,
        filled: Boolean,
        outlined: Boolean,
        borderless: Boolean,
        standout: [Boolean, String],
        square: Boolean,
        loading: Boolean,
        labelSlot: Boolean,
        bottomSlots: Boolean,
        hideBottomSpace: Boolean,
        rounded: Boolean,
        dense: Boolean,
        itemAligned: Boolean,
        counter: Boolean,
        clearable: Boolean,
        clearIcon: String,
        disable: Boolean,
        readonly: Boolean,
        autofocus: Boolean,
        for: String,
        maxlength: [Number, String]
      };
      const useFieldEmits = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
      function useFieldState({ requiredForAttr = true, tagProp } = {}) {
        const { props, attrs, proxy, vnode } = vue.getCurrentInstance();
        const isDark = useDark(props, proxy.$q);
        const targetUid = useId(props.for, requiredForAttr);
        return {
          requiredForAttr,
          tag: tagProp === true ? vue.computed(() => props.tag) : { value: "label" },
          isDark,
          editable: vue.computed(
            () => props.disable !== true && props.readonly !== true
          ),
          innerLoading: vue.ref(false),
          focused: vue.ref(false),
          hasPopupOpen: false,
          splitAttrs: useSplitAttrs(attrs, vnode),
          targetUid,
          rootRef: vue.ref(null),
          targetRef: vue.ref(null),
          controlRef: vue.ref(null)
          /**
               * user supplied additionals:
          
               * innerValue - computed
               * floatingLabel - computed
               * inputRef - computed
          
               * fieldClass - computed
               * hasShadow - computed
          
               * controlEvents - Object with fn(e)
          
               * getControl - fn
               * getInnerAppend - fn
               * getControlChild - fn
               * getShadowControl - fn
               * showPopup - fn
               */
        };
      }
      function useField(state) {
        const { props, emit, slots, attrs, proxy } = vue.getCurrentInstance();
        const { $q } = proxy;
        let focusoutTimer = null;
        if (state.hasValue === void 0) {
          state.hasValue = vue.computed(() => fieldValueIsFilled(props.modelValue));
        }
        if (state.emitValue === void 0) {
          state.emitValue = (value) => {
            emit("update:modelValue", value);
          };
        }
        if (state.controlEvents === void 0) {
          state.controlEvents = {
            onFocusin: onControlFocusin,
            onFocusout: onControlFocusout
          };
        }
        Object.assign(state, {
          clearValue,
          onControlFocusin,
          onControlFocusout,
          focus
        });
        if (state.computedCounter === void 0) {
          state.computedCounter = vue.computed(() => {
            if (props.counter !== false) {
              const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? ("" + props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
              const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
              return len + (max !== void 0 ? " / " + max : "");
            }
          });
        }
        const {
          isDirtyModel,
          hasRules,
          hasError,
          errorMessage,
          resetValidation
        } = useValidate(state.focused, state.innerLoading);
        const floatingLabel = state.floatingLabel !== void 0 ? vue.computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : vue.computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
        const shouldRenderBottom = vue.computed(
          () => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null
        );
        const styleType = vue.computed(() => {
          if (props.filled === true) {
            return "filled";
          }
          if (props.outlined === true) {
            return "outlined";
          }
          if (props.borderless === true) {
            return "borderless";
          }
          if (props.standout) {
            return "standout";
          }
          return "standard";
        });
        const classes = vue.computed(
          () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : "")
        );
        const contentClass = vue.computed(
          () => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length !== 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : "")
        );
        const hasLabel = vue.computed(
          () => props.labelSlot === true || props.label !== void 0
        );
        const labelClass = vue.computed(
          () => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : "")
        );
        const controlSlotScope = vue.computed(() => ({
          id: state.targetUid.value,
          editable: state.editable.value,
          focused: state.focused.value,
          floatingLabel: floatingLabel.value,
          modelValue: props.modelValue,
          emitValue: state.emitValue
        }));
        const attributes = vue.computed(() => {
          const acc = {};
          if (state.targetUid.value) {
            acc.for = state.targetUid.value;
          }
          if (props.disable === true) {
            acc["aria-disabled"] = "true";
          }
          return acc;
        });
        vue.watch(() => props.for, (val) => {
          state.targetUid.value = getId(val, state.requiredForAttr);
        });
        function focusHandler() {
          const el = document.activeElement;
          let target2 = state.targetRef !== void 0 && state.targetRef.value;
          if (target2 && (el === null || el.id !== state.targetUid.value)) {
            target2.hasAttribute("tabindex") === true || (target2 = target2.querySelector("[tabindex]"));
            if (target2 && target2 !== el) {
              target2.focus({ preventScroll: true });
            }
          }
        }
        function focus() {
          addFocusFn(focusHandler);
        }
        function blur() {
          removeFocusFn(focusHandler);
          const el = document.activeElement;
          if (el !== null && state.rootRef.value.contains(el)) {
            el.blur();
          }
        }
        function onControlFocusin(e) {
          if (focusoutTimer !== null) {
            clearTimeout(focusoutTimer);
            focusoutTimer = null;
          }
          if (state.editable.value === true && state.focused.value === false) {
            state.focused.value = true;
            emit("focus", e);
          }
        }
        function onControlFocusout(e, then) {
          focusoutTimer !== null && clearTimeout(focusoutTimer);
          focusoutTimer = setTimeout(() => {
            focusoutTimer = null;
            if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) {
              return;
            }
            if (state.focused.value === true) {
              state.focused.value = false;
              emit("blur", e);
            }
            then !== void 0 && then();
          });
        }
        function clearValue(e) {
          stopAndPrevent(e);
          if ($q.platform.is.mobile !== true) {
            const el = state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
            el.focus();
          } else if (state.rootRef.value.contains(document.activeElement) === true) {
            document.activeElement.blur();
          }
          if (props.type === "file") {
            state.inputRef.value.value = null;
          }
          emit("update:modelValue", null);
          emit("clear", props.modelValue);
          vue.nextTick(() => {
            const isDirty = isDirtyModel.value;
            resetValidation();
            isDirtyModel.value = isDirty;
          });
        }
        function getContent() {
          const node = [];
          slots.prepend !== void 0 && node.push(
            vue.h("div", {
              class: "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: prevent
            }, slots.prepend())
          );
          node.push(
            vue.h("div", {
              class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
            }, getControlContainer())
          );
          hasError.value === true && props.noErrorIcon === false && node.push(
            getInnerAppendNode("error", [
              vue.h(QIcon, { name: $q.iconSet.field.error, color: "negative" })
            ])
          );
          if (props.loading === true || state.innerLoading.value === true) {
            node.push(
              getInnerAppendNode(
                "inner-loading-append",
                slots.loading !== void 0 ? slots.loading() : [vue.h(QSpinner, { color: props.color })]
              )
            );
          } else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) {
            node.push(
              getInnerAppendNode("inner-clearable-append", [
                vue.h(QIcon, {
                  class: "q-field__focusable-action",
                  tag: "button",
                  name: props.clearIcon || $q.iconSet.field.clear,
                  tabindex: 0,
                  type: "button",
                  "aria-hidden": null,
                  role: null,
                  onClick: clearValue
                })
              ])
            );
          }
          slots.append !== void 0 && node.push(
            vue.h("div", {
              class: "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: prevent
            }, slots.append())
          );
          state.getInnerAppend !== void 0 && node.push(
            getInnerAppendNode("inner-append", state.getInnerAppend())
          );
          state.getControlChild !== void 0 && node.push(
            state.getControlChild()
          );
          return node;
        }
        function getControlContainer() {
          const node = [];
          props.prefix !== void 0 && props.prefix !== null && node.push(
            vue.h("div", {
              class: "q-field__prefix no-pointer-events row items-center"
            }, props.prefix)
          );
          if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
            node.push(
              state.getShadowControl()
            );
          }
          if (state.getControl !== void 0) {
            node.push(state.getControl());
          } else if (slots.rawControl !== void 0) {
            node.push(slots.rawControl());
          } else if (slots.control !== void 0) {
            node.push(
              vue.h("div", {
                ref: state.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...state.splitAttrs.attributes.value,
                "data-autofocus": props.autofocus === true || void 0
              }, slots.control(controlSlotScope.value))
            );
          }
          hasLabel.value === true && node.push(
            vue.h("div", {
              class: labelClass.value
            }, hSlot(slots.label, props.label))
          );
          props.suffix !== void 0 && props.suffix !== null && node.push(
            vue.h("div", {
              class: "q-field__suffix no-pointer-events row items-center"
            }, props.suffix)
          );
          return node.concat(hSlot(slots.default));
        }
        function getBottom() {
          let msg, key;
          if (hasError.value === true) {
            if (errorMessage.value !== null) {
              msg = [vue.h("div", { role: "alert" }, errorMessage.value)];
              key = `q--slot-error-${errorMessage.value}`;
            } else {
              msg = hSlot(slots.error);
              key = "q--slot-error";
            }
          } else if (props.hideHint !== true || state.focused.value === true) {
            if (props.hint !== void 0) {
              msg = [vue.h("div", props.hint)];
              key = `q--slot-hint-${props.hint}`;
            } else {
              msg = hSlot(slots.hint);
              key = "q--slot-hint";
            }
          }
          const hasCounter = props.counter === true || slots.counter !== void 0;
          if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) {
            return;
          }
          const main = vue.h("div", {
            key,
            class: "q-field__messages col"
          }, msg);
          return vue.h("div", {
            class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace !== true ? "animated" : "stale"),
            onClick: prevent
          }, [
            props.hideBottomSpace === true ? main : vue.h(vue.Transition, { name: "q-transition--field-message" }, () => main),
            hasCounter === true ? vue.h("div", {
              class: "q-field__counter"
            }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null
          ]);
        }
        function getInnerAppendNode(key, content) {
          return content === null ? null : vue.h("div", {
            key,
            class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
          }, content);
        }
        let shouldActivate = false;
        vue.onDeactivated(() => {
          shouldActivate = true;
        });
        vue.onActivated(() => {
          shouldActivate === true && props.autofocus === true && proxy.focus();
        });
        props.autofocus === true && vue.onMounted(() => {
          proxy.focus();
        });
        vue.onBeforeUnmount(() => {
          focusoutTimer !== null && clearTimeout(focusoutTimer);
        });
        Object.assign(proxy, { focus, blur });
        return function renderField() {
          const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
            ...state.splitAttrs.attributes.value,
            "data-autofocus": props.autofocus === true || void 0,
            ...attributes.value
          } : attributes.value;
          return vue.h(state.tag.value, {
            ref: state.rootRef,
            class: [
              classes.value,
              attrs.class
            ],
            style: attrs.style,
            ...labelAttrs
          }, [
            slots.before !== void 0 ? vue.h("div", {
              class: "q-field__before q-field__marginal row no-wrap items-center",
              onClick: prevent
            }, slots.before()) : null,
            vue.h("div", {
              class: "q-field__inner relative-position col self-stretch"
            }, [
              vue.h("div", {
                ref: state.controlRef,
                class: contentClass.value,
                tabindex: -1,
                ...state.controlEvents
              }, getContent()),
              shouldRenderBottom.value === true ? getBottom() : null
            ]),
            slots.after !== void 0 ? vue.h("div", {
              class: "q-field__after q-field__marginal row no-wrap items-center",
              onClick: prevent
            }, slots.after()) : null
          ]);
        };
      }
      const QField = createComponent({
        name: "QField",
        inheritAttrs: false,
        props: {
          ...useFieldProps,
          tag: {
            type: String,
            default: "label"
          }
        },
        emits: useFieldEmits,
        setup() {
          return useField(
            useFieldState({
              requiredForAttr: false,
              tagProp: true
            })
          );
        }
      });
      const QItem = createComponent({
        name: "QItem",
        props: {
          ...useDarkProps,
          ...useRouterLinkProps,
          tag: {
            type: String,
            default: "div"
          },
          active: {
            type: Boolean,
            default: null
          },
          clickable: Boolean,
          dense: Boolean,
          insetLevel: Number,
          tabindex: [String, Number],
          focused: Boolean,
          manualFocus: Boolean
        },
        emits: ["click", "keyup"],
        setup(props, { slots, emit }) {
          const { proxy: { $q } } = vue.getCurrentInstance();
          const isDark = useDark(props, $q);
          const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
          const rootRef = vue.ref(null);
          const blurTargetRef = vue.ref(null);
          const isActionable = vue.computed(
            () => props.clickable === true || hasLink.value === true || props.tag === "label"
          );
          const isClickable = vue.computed(
            () => props.disable !== true && isActionable.value === true
          );
          const classes = vue.computed(
            () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
          );
          const style = vue.computed(() => {
            if (props.insetLevel === void 0) {
              return null;
            }
            const dir = $q.lang.rtl === true ? "Right" : "Left";
            return {
              ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
            };
          });
          function onClick(e) {
            if (isClickable.value === true) {
              if (blurTargetRef.value !== null) {
                if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
                  blurTargetRef.value.focus();
                } else if (document.activeElement === blurTargetRef.value) {
                  rootRef.value.focus();
                }
              }
              navigateOnClick(e);
            }
          }
          function onKeyup2(e) {
            if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
              stopAndPrevent(e);
              e.qKeyEvent = true;
              const evt = new MouseEvent("click", e);
              evt.qKeyEvent = true;
              rootRef.value.dispatchEvent(evt);
            }
            emit("keyup", e);
          }
          function getContent() {
            const child = hUniqueSlot(slots.default, []);
            isClickable.value === true && child.unshift(
              vue.h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
            );
            return child;
          }
          return () => {
            const data = {
              ref: rootRef,
              class: classes.value,
              style: style.value,
              role: "listitem",
              onClick,
              onKeyup: onKeyup2
            };
            if (isClickable.value === true) {
              data.tabindex = props.tabindex || "0";
              Object.assign(data, linkAttrs.value);
            } else if (isActionable.value === true) {
              data["aria-disabled"] = "true";
            }
            return vue.h(
              linkTag.value,
              data,
              getContent()
            );
          };
        }
      });
      const QItemSection = createComponent({
        name: "QItemSection",
        props: {
          avatar: Boolean,
          thumbnail: Boolean,
          side: Boolean,
          top: Boolean,
          noWrap: Boolean
        },
        setup(props, { slots }) {
          const classes = vue.computed(
            () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
          );
          return () => vue.h("div", { class: classes.value }, hSlot(slots.default));
        }
      });
      const QItemLabel = createComponent({
        name: "QItemLabel",
        props: {
          overline: Boolean,
          caption: Boolean,
          header: Boolean,
          lines: [Number, String]
        },
        setup(props, { slots }) {
          const parsedLines = vue.computed(() => parseInt(props.lines, 10));
          const classes = vue.computed(
            () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
          );
          const style = vue.computed(() => {
            return props.lines !== void 0 && parsedLines.value > 1 ? {
              overflow: "hidden",
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": parsedLines.value
            } : null;
          });
          return () => vue.h("div", {
            style: style.value,
            class: classes.value
          }, hSlot(slots.default));
        }
      });
      function clearSelection() {
        if (window.getSelection !== void 0) {
          const selection = window.getSelection();
          if (selection.empty !== void 0) {
            selection.empty();
          } else if (selection.removeAllRanges !== void 0) {
            selection.removeAllRanges();
            Platform.is.mobile !== true && selection.addRange(document.createRange());
          }
        } else if (document.selection !== void 0) {
          document.selection.empty();
        }
      }
      const useAnchorProps = {
        target: {
          default: true
        },
        noParentEvent: Boolean,
        contextMenu: Boolean
      };
      function useAnchor({
        showing,
        avoidEmit,
        // required for QPopupProxy (true)
        configureAnchorEl
        // optional
      }) {
        const { props, proxy, emit } = vue.getCurrentInstance();
        const anchorEl = vue.ref(null);
        let touchTimer = null;
        function canShow(evt) {
          return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
        }
        const anchorEvents = {};
        if (configureAnchorEl === void 0) {
          Object.assign(anchorEvents, {
            hide(evt) {
              proxy.hide(evt);
            },
            toggle(evt) {
              proxy.toggle(evt);
              evt.qAnchorHandled = true;
            },
            toggleKey(evt) {
              isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
            },
            contextClick(evt) {
              proxy.hide(evt);
              prevent(evt);
              vue.nextTick(() => {
                proxy.show(evt);
                evt.qAnchorHandled = true;
              });
            },
            prevent,
            mobileTouch(evt) {
              anchorEvents.mobileCleanup(evt);
              if (canShow(evt) !== true) {
                return;
              }
              proxy.hide(evt);
              anchorEl.value.classList.add("non-selectable");
              const target2 = evt.target;
              addEvt(anchorEvents, "anchor", [
                [target2, "touchmove", "mobileCleanup", "passive"],
                [target2, "touchend", "mobileCleanup", "passive"],
                [target2, "touchcancel", "mobileCleanup", "passive"],
                [anchorEl.value, "contextmenu", "prevent", "notPassive"]
              ]);
              touchTimer = setTimeout(() => {
                touchTimer = null;
                proxy.show(evt);
                evt.qAnchorHandled = true;
              }, 300);
            },
            mobileCleanup(evt) {
              anchorEl.value.classList.remove("non-selectable");
              if (touchTimer !== null) {
                clearTimeout(touchTimer);
                touchTimer = null;
              }
              if (showing.value === true && evt !== void 0) {
                clearSelection();
              }
            }
          });
          configureAnchorEl = function(context = props.contextMenu) {
            if (props.noParentEvent === true || anchorEl.value === null)
              return;
            let evts;
            if (context === true) {
              if (proxy.$q.platform.is.mobile === true) {
                evts = [
                  [anchorEl.value, "touchstart", "mobileTouch", "passive"]
                ];
              } else {
                evts = [
                  [anchorEl.value, "mousedown", "hide", "passive"],
                  [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
                ];
              }
            } else {
              evts = [
                [anchorEl.value, "click", "toggle", "passive"],
                [anchorEl.value, "keyup", "toggleKey", "passive"]
              ];
            }
            addEvt(anchorEvents, "anchor", evts);
          };
        }
        function unconfigureAnchorEl() {
          cleanEvt(anchorEvents, "anchor");
        }
        function setAnchorEl(el) {
          anchorEl.value = el;
          while (anchorEl.value.classList.contains("q-anchor--skip")) {
            anchorEl.value = anchorEl.value.parentNode;
          }
          configureAnchorEl();
        }
        function pickAnchorEl() {
          if (props.target === false || props.target === "" || proxy.$el.parentNode === null) {
            anchorEl.value = null;
          } else if (props.target === true) {
            setAnchorEl(proxy.$el.parentNode);
          } else {
            let el = props.target;
            if (typeof props.target === "string") {
              try {
                el = document.querySelector(props.target);
              } catch (err) {
                el = void 0;
              }
            }
            if (el !== void 0 && el !== null) {
              anchorEl.value = el.$el || el;
              configureAnchorEl();
            } else {
              anchorEl.value = null;
              console.error(`Anchor: target "${props.target}" not found`);
            }
          }
        }
        vue.watch(() => props.contextMenu, (val) => {
          if (anchorEl.value !== null) {
            unconfigureAnchorEl();
            configureAnchorEl(val);
          }
        });
        vue.watch(() => props.target, () => {
          if (anchorEl.value !== null) {
            unconfigureAnchorEl();
          }
          pickAnchorEl();
        });
        vue.watch(() => props.noParentEvent, (val) => {
          if (anchorEl.value !== null) {
            if (val === true) {
              unconfigureAnchorEl();
            } else {
              configureAnchorEl();
            }
          }
        });
        vue.onMounted(() => {
          pickAnchorEl();
          if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
            emit("update:modelValue", false);
          }
        });
        vue.onBeforeUnmount(() => {
          touchTimer !== null && clearTimeout(touchTimer);
          unconfigureAnchorEl();
        });
        return {
          anchorEl,
          canShow,
          anchorEvents
        };
      }
      function useScrollTarget(props, configureScrollTarget) {
        const localScrollTarget = vue.ref(null);
        let scrollFn;
        function changeScrollEvent(scrollTarget, fn) {
          const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
          const fnHandler = fn !== void 0 ? fn : scrollFn;
          if (scrollTarget !== window) {
            scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
          }
          window[fnProp]("scroll", fnHandler, listenOpts.passive);
          scrollFn = fn;
        }
        function unconfigureScrollTarget() {
          if (localScrollTarget.value !== null) {
            changeScrollEvent(localScrollTarget.value);
            localScrollTarget.value = null;
          }
        }
        const noParentEventWatcher = vue.watch(() => props.noParentEvent, () => {
          if (localScrollTarget.value !== null) {
            unconfigureScrollTarget();
            configureScrollTarget();
          }
        });
        vue.onBeforeUnmount(noParentEventWatcher);
        return {
          localScrollTarget,
          unconfigureScrollTarget,
          changeScrollEvent
        };
      }
      const useModelToggleProps = {
        modelValue: {
          type: Boolean,
          default: null
        },
        "onUpdate:modelValue": [Function, Array]
      };
      const useModelToggleEmits = [
        "beforeShow",
        "show",
        "beforeHide",
        "hide"
      ];
      function useModelToggle({
        showing,
        canShow,
        // optional
        hideOnRouteChange,
        // optional
        handleShow,
        // optional
        handleHide,
        // optional
        processOnMount
        // optional
      }) {
        const vm = vue.getCurrentInstance();
        const { props, emit, proxy } = vm;
        let payload;
        function toggle(evt) {
          if (showing.value === true) {
            hide(evt);
          } else {
            show(evt);
          }
        }
        function show(evt) {
          if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
            return;
          }
          const listener = props["onUpdate:modelValue"] !== void 0;
          if (listener === true && true) {
            emit("update:modelValue", true);
            payload = evt;
            vue.nextTick(() => {
              if (payload === evt) {
                payload = void 0;
              }
            });
          }
          if (props.modelValue === null || listener === false || false) {
            processShow(evt);
          }
        }
        function processShow(evt) {
          if (showing.value === true) {
            return;
          }
          showing.value = true;
          emit("beforeShow", evt);
          if (handleShow !== void 0) {
            handleShow(evt);
          } else {
            emit("show", evt);
          }
        }
        function hide(evt) {
          if (props.disable === true) {
            return;
          }
          const listener = props["onUpdate:modelValue"] !== void 0;
          if (listener === true && true) {
            emit("update:modelValue", false);
            payload = evt;
            vue.nextTick(() => {
              if (payload === evt) {
                payload = void 0;
              }
            });
          }
          if (props.modelValue === null || listener === false || false) {
            processHide(evt);
          }
        }
        function processHide(evt) {
          if (showing.value === false) {
            return;
          }
          showing.value = false;
          emit("beforeHide", evt);
          if (handleHide !== void 0) {
            handleHide(evt);
          } else {
            emit("hide", evt);
          }
        }
        function processModelChange(val) {
          if (props.disable === true && val === true) {
            if (props["onUpdate:modelValue"] !== void 0) {
              emit("update:modelValue", false);
            }
          } else if (val === true !== showing.value) {
            const fn = val === true ? processShow : processHide;
            fn(payload);
          }
        }
        vue.watch(() => props.modelValue, processModelChange);
        if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
          vue.watch(() => proxy.$route.fullPath, () => {
            if (hideOnRouteChange.value === true && showing.value === true) {
              hide();
            }
          });
        }
        processOnMount === true && vue.onMounted(() => {
          processModelChange(props.modelValue);
        });
        const publicMethods = { show, hide, toggle };
        Object.assign(proxy, publicMethods);
        return publicMethods;
      }
      const portalProxyList = [];
      function getPortalProxy(el) {
        return portalProxyList.find(
          (proxy) => proxy.contentEl !== null && proxy.contentEl.contains(el)
        );
      }
      function closePortalMenus(proxy, evt) {
        do {
          if (proxy.$options.name === "QMenu") {
            proxy.hide(evt);
            if (proxy.$props.separateClosePopup === true) {
              return getParentProxy(proxy);
            }
          } else if (proxy.__qPortal === true) {
            const parent = getParentProxy(proxy);
            if (parent !== void 0 && parent.$options.name === "QPopupProxy") {
              proxy.hide(evt);
              return parent;
            } else {
              return proxy;
            }
          }
          proxy = getParentProxy(proxy);
        } while (proxy !== void 0 && proxy !== null);
      }
      function closePortals(proxy, evt, depth) {
        while (depth !== 0 && proxy !== void 0 && proxy !== null) {
          if (proxy.__qPortal === true) {
            depth--;
            if (proxy.$options.name === "QMenu") {
              proxy = closePortalMenus(proxy, evt);
              continue;
            }
            proxy.hide(evt);
          }
          proxy = getParentProxy(proxy);
        }
      }
      function isOnGlobalDialog(vm) {
        vm = vm.parent;
        while (vm !== void 0 && vm !== null) {
          if (vm.type.name === "QGlobalDialog") {
            return true;
          }
          if (vm.type.name === "QDialog" || vm.type.name === "QMenu") {
            return false;
          }
          vm = vm.parent;
        }
        return false;
      }
      function usePortal(vm, innerRef, renderPortalContent, type) {
        const portalIsActive = vue.ref(false);
        const portalIsAccessible = vue.ref(false);
        let portalEl = null;
        const focusObj = {};
        const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm);
        function showPortal(isReady) {
          if (isReady === true) {
            removeFocusWaitFlag(focusObj);
            portalIsAccessible.value = true;
            return;
          }
          portalIsAccessible.value = false;
          if (portalIsActive.value === false) {
            if (onGlobalDialog === false && portalEl === null) {
              portalEl = createGlobalNode(false, type);
            }
            portalIsActive.value = true;
            portalProxyList.push(vm.proxy);
            addFocusWaitFlag(focusObj);
          }
        }
        function hidePortal(isReady) {
          portalIsAccessible.value = false;
          if (isReady !== true)
            return;
          removeFocusWaitFlag(focusObj);
          portalIsActive.value = false;
          const index = portalProxyList.indexOf(vm.proxy);
          if (index !== -1) {
            portalProxyList.splice(index, 1);
          }
          if (portalEl !== null) {
            removeGlobalNode(portalEl);
            portalEl = null;
          }
        }
        vue.onUnmounted(() => {
          hidePortal(true);
        });
        vm.proxy.__qPortal = true;
        injectProp(vm.proxy, "contentEl", () => innerRef.value);
        return {
          showPortal,
          hidePortal,
          portalIsActive,
          portalIsAccessible,
          renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [vue.h(vue.Teleport, { to: portalEl }, renderPortalContent())] : void 0
        };
      }
      const useTransitionProps = {
        transitionShow: {
          type: String,
          default: "fade"
        },
        transitionHide: {
          type: String,
          default: "fade"
        },
        transitionDuration: {
          type: [String, Number],
          default: 300
        }
      };
      function useTransition(props, defaultShowFn = () => {
      }, defaultHideFn = () => {
      }) {
        return {
          transitionProps: vue.computed(() => {
            const show = `q-transition--${props.transitionShow || defaultShowFn()}`;
            const hide = `q-transition--${props.transitionHide || defaultHideFn()}`;
            return {
              appear: true,
              enterFromClass: `${show}-enter-from`,
              enterActiveClass: `${show}-enter-active`,
              enterToClass: `${show}-enter-to`,
              leaveFromClass: `${hide}-leave-from`,
              leaveActiveClass: `${hide}-leave-active`,
              leaveToClass: `${hide}-leave-to`
            };
          }),
          transitionStyle: vue.computed(() => `--q-transition-duration: ${props.transitionDuration}ms`)
        };
      }
      function useTick() {
        let tickFn;
        const vm = vue.getCurrentInstance();
        function removeTick() {
          tickFn = void 0;
        }
        vue.onDeactivated(removeTick);
        vue.onBeforeUnmount(removeTick);
        return {
          removeTick,
          registerTick(fn) {
            tickFn = fn;
            vue.nextTick(() => {
              if (tickFn === fn) {
                vmIsDestroyed(vm) === false && tickFn();
                tickFn = void 0;
              }
            });
          }
        };
      }
      function useTimeout() {
        let timer2 = null;
        const vm = vue.getCurrentInstance();
        function removeTimeout() {
          if (timer2 !== null) {
            clearTimeout(timer2);
            timer2 = null;
          }
        }
        vue.onDeactivated(removeTimeout);
        vue.onBeforeUnmount(removeTimeout);
        return {
          removeTimeout,
          registerTimeout(fn, delay) {
            removeTimeout();
            if (vmIsDestroyed(vm) === false) {
              timer2 = setTimeout(fn, delay);
            }
          }
        };
      }
      const handlers$1 = [];
      let escDown;
      function onKeydown(evt) {
        escDown = evt.keyCode === 27;
      }
      function onBlur() {
        if (escDown === true) {
          escDown = false;
        }
      }
      function onKeyup(evt) {
        if (escDown === true) {
          escDown = false;
          if (isKeyCode(evt, 27) === true) {
            handlers$1[handlers$1.length - 1](evt);
          }
        }
      }
      function update(action) {
        window[action]("keydown", onKeydown);
        window[action]("blur", onBlur);
        window[action]("keyup", onKeyup);
        escDown = false;
      }
      function addEscapeKey(fn) {
        if (client.is.desktop === true) {
          handlers$1.push(fn);
          if (handlers$1.length === 1) {
            update("addEventListener");
          }
        }
      }
      function removeEscapeKey(fn) {
        const index = handlers$1.indexOf(fn);
        if (index !== -1) {
          handlers$1.splice(index, 1);
          if (handlers$1.length === 0) {
            update("removeEventListener");
          }
        }
      }
      const handlers = [];
      function trigger(e) {
        handlers[handlers.length - 1](e);
      }
      function addFocusout(fn) {
        if (client.is.desktop === true) {
          handlers.push(fn);
          if (handlers.length === 1) {
            document.body.addEventListener("focusin", trigger);
          }
        }
      }
      function removeFocusout(fn) {
        const index = handlers.indexOf(fn);
        if (index !== -1) {
          handlers.splice(index, 1);
          if (handlers.length === 0) {
            document.body.removeEventListener("focusin", trigger);
          }
        }
      }
      const { notPassiveCapture } = listenOpts, registeredList = [];
      function globalHandler(evt) {
        const target2 = evt.target;
        if (target2 === void 0 || target2.nodeType === 8 || target2.classList.contains("no-pointer-events") === true) {
          return;
        }
        let portalIndex2 = portalProxyList.length - 1;
        while (portalIndex2 >= 0) {
          const proxy = portalProxyList[portalIndex2].$;
          if (proxy.type.name === "QTooltip") {
            portalIndex2--;
            continue;
          }
          if (proxy.type.name !== "QDialog") {
            break;
          }
          if (proxy.props.seamless !== true) {
            return;
          }
          portalIndex2--;
        }
        for (let i = registeredList.length - 1; i >= 0; i--) {
          const state = registeredList[i];
          if ((state.anchorEl.value === null || state.anchorEl.value.contains(target2) === false) && (target2 === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target2) === false)) {
            evt.qClickOutside = true;
            state.onClickOutside(evt);
          } else {
            return;
          }
        }
      }
      function addClickOutside(clickOutsideProps) {
        registeredList.push(clickOutsideProps);
        if (registeredList.length === 1) {
          document.addEventListener("mousedown", globalHandler, notPassiveCapture);
          document.addEventListener("touchstart", globalHandler, notPassiveCapture);
        }
      }
      function removeClickOutside(clickOutsideProps) {
        const index = registeredList.findIndex((h2) => h2 === clickOutsideProps);
        if (index !== -1) {
          registeredList.splice(index, 1);
          if (registeredList.length === 0) {
            document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
            document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
          }
        }
      }
      let vpLeft, vpTop;
      function validatePosition(pos) {
        const parts = pos.split(" ");
        if (parts.length !== 2) {
          return false;
        }
        if (["top", "center", "bottom"].includes(parts[0]) !== true) {
          console.error("Anchor/Self position must start with one of top/center/bottom");
          return false;
        }
        if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
          console.error("Anchor/Self position must end with one of left/middle/right/start/end");
          return false;
        }
        return true;
      }
      function validateOffset(val) {
        if (!val) {
          return true;
        }
        if (val.length !== 2) {
          return false;
        }
        if (typeof val[0] !== "number" || typeof val[1] !== "number") {
          return false;
        }
        return true;
      }
      const horizontalPos = {
        "start#ltr": "left",
        "start#rtl": "right",
        "end#ltr": "right",
        "end#rtl": "left"
      };
      ["left", "middle", "right"].forEach((pos) => {
        horizontalPos[`${pos}#ltr`] = pos;
        horizontalPos[`${pos}#rtl`] = pos;
      });
      function parsePosition(pos, rtl) {
        const parts = pos.split(" ");
        return {
          vertical: parts[0],
          horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
        };
      }
      function getAnchorProps(el, offset) {
        let { top, left, right, bottom, width: width2, height } = el.getBoundingClientRect();
        if (offset !== void 0) {
          top -= offset[1];
          left -= offset[0];
          bottom += offset[1];
          right += offset[0];
          width2 += offset[0];
          height += offset[1];
        }
        return {
          top,
          bottom,
          height,
          left,
          right,
          width: width2,
          middle: left + (right - left) / 2,
          center: top + (bottom - top) / 2
        };
      }
      function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
        let { top, left } = el.getBoundingClientRect();
        top += absoluteOffset.top;
        left += absoluteOffset.left;
        if (offset !== void 0) {
          top += offset[1];
          left += offset[0];
        }
        return {
          top,
          bottom: top + 1,
          height: 1,
          left,
          right: left + 1,
          width: 1,
          middle: left,
          center: top
        };
      }
      function getTargetProps(width2, height) {
        return {
          top: 0,
          center: height / 2,
          bottom: height,
          left: 0,
          middle: width2 / 2,
          right: width2
        };
      }
      function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
        return {
          top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
          left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
        };
      }
      function setPosition(cfg, retryNumber = 0) {
        if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) {
          return;
        }
        if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
          setTimeout(() => {
            setPosition(cfg, retryNumber + 1);
          }, 10);
          return;
        }
        const {
          targetEl,
          offset,
          anchorEl,
          anchorOrigin,
          selfOrigin,
          absoluteOffset,
          fit,
          cover,
          maxHeight,
          maxWidth
        } = cfg;
        if (client.is.ios === true && window.visualViewport !== void 0) {
          const el = document.body.style;
          const { offsetLeft: left, offsetTop: top } = window.visualViewport;
          if (left !== vpLeft) {
            el.setProperty("--q-pe-left", left + "px");
            vpLeft = left;
          }
          if (top !== vpTop) {
            el.setProperty("--q-pe-top", top + "px");
            vpTop = top;
          }
        }
        const { scrollLeft, scrollTop } = targetEl;
        const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);
        Object.assign(targetEl.style, {
          top: 0,
          left: 0,
          minWidth: null,
          minHeight: null,
          maxWidth: maxWidth || "100vw",
          maxHeight: maxHeight || "100vh",
          visibility: "visible"
        });
        const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
        const { elWidth, elHeight } = fit === true || cover === true ? { elWidth: Math.max(anchorProps.width, origElWidth), elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight } : { elWidth: origElWidth, elHeight: origElHeight };
        let elStyle = { maxWidth, maxHeight };
        if (fit === true || cover === true) {
          elStyle.minWidth = anchorProps.width + "px";
          if (cover === true) {
            elStyle.minHeight = anchorProps.height + "px";
          }
        }
        Object.assign(targetEl.style, elStyle);
        const targetProps = getTargetProps(elWidth, elHeight);
        let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
        if (absoluteOffset === void 0 || offset === void 0) {
          applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
        } else {
          const { top, left } = props;
          applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
          let hasChanged = false;
          if (props.top !== top) {
            hasChanged = true;
            const offsetY = 2 * offset[1];
            anchorProps.center = anchorProps.top -= offsetY;
            anchorProps.bottom -= offsetY + 2;
          }
          if (props.left !== left) {
            hasChanged = true;
            const offsetX = 2 * offset[0];
            anchorProps.middle = anchorProps.left -= offsetX;
            anchorProps.right -= offsetX + 2;
          }
          if (hasChanged === true) {
            props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
            applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
          }
        }
        elStyle = {
          top: props.top + "px",
          left: props.left + "px"
        };
        if (props.maxHeight !== void 0) {
          elStyle.maxHeight = props.maxHeight + "px";
          if (anchorProps.height > props.maxHeight) {
            elStyle.minHeight = elStyle.maxHeight;
          }
        }
        if (props.maxWidth !== void 0) {
          elStyle.maxWidth = props.maxWidth + "px";
          if (anchorProps.width > props.maxWidth) {
            elStyle.minWidth = elStyle.maxWidth;
          }
        }
        Object.assign(targetEl.style, elStyle);
        if (targetEl.scrollTop !== scrollTop) {
          targetEl.scrollTop = scrollTop;
        }
        if (targetEl.scrollLeft !== scrollLeft) {
          targetEl.scrollLeft = scrollLeft;
        }
      }
      function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
        const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
        if (props.top < 0 || props.top + currentHeight > innerHeight) {
          if (selfOrigin.vertical === "center") {
            props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
            props.maxHeight = Math.min(currentHeight, innerHeight);
          } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
            const anchorY = Math.min(
              innerHeight,
              anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top
            );
            props.maxHeight = Math.min(currentHeight, anchorY);
            props.top = Math.max(0, anchorY - currentHeight);
          } else {
            props.top = Math.max(
              0,
              anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom
            );
            props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
          }
        }
        if (props.left < 0 || props.left + currentWidth > innerWidth) {
          props.maxWidth = Math.min(currentWidth, innerWidth);
          if (selfOrigin.horizontal === "middle") {
            props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
          } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
            const anchorX = Math.min(
              innerWidth,
              anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left
            );
            props.maxWidth = Math.min(currentWidth, anchorX);
            props.left = Math.max(0, anchorX - props.maxWidth);
          } else {
            props.left = Math.max(
              0,
              anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right
            );
            props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
          }
        }
      }
      const QMenu = createComponent({
        name: "QMenu",
        inheritAttrs: false,
        props: {
          ...useAnchorProps,
          ...useModelToggleProps,
          ...useDarkProps,
          ...useTransitionProps,
          persistent: Boolean,
          autoClose: Boolean,
          separateClosePopup: Boolean,
          noRouteDismiss: Boolean,
          noRefocus: Boolean,
          noFocus: Boolean,
          fit: Boolean,
          cover: Boolean,
          square: Boolean,
          anchor: {
            type: String,
            validator: validatePosition
          },
          self: {
            type: String,
            validator: validatePosition
          },
          offset: {
            type: Array,
            validator: validateOffset
          },
          scrollTarget: {
            default: void 0
          },
          touchPosition: Boolean,
          maxHeight: {
            type: String,
            default: null
          },
          maxWidth: {
            type: String,
            default: null
          }
        },
        emits: [
          ...useModelToggleEmits,
          "click",
          "escapeKey"
        ],
        setup(props, { slots, emit, attrs }) {
          let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
          const vm = vue.getCurrentInstance();
          const { proxy } = vm;
          const { $q } = proxy;
          const innerRef = vue.ref(null);
          const showing = vue.ref(false);
          const hideOnRouteChange = vue.computed(
            () => props.persistent !== true && props.noRouteDismiss !== true
          );
          const isDark = useDark(props, $q);
          const { registerTick, removeTick } = useTick();
          const { registerTimeout } = useTimeout();
          const { transitionProps, transitionStyle } = useTransition(props);
          const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
          const { anchorEl, canShow } = useAnchor({ showing });
          const { hide } = useModelToggle({
            showing,
            canShow,
            handleShow,
            handleHide,
            hideOnRouteChange,
            processOnMount: true
          });
          const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "menu");
          const clickOutsideProps = {
            anchorEl,
            innerRef,
            onClickOutside(e) {
              if (props.persistent !== true && showing.value === true) {
                hide(e);
                if (
                  // always prevent touch event
                  e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")
                ) {
                  stopAndPrevent(e);
                }
                return true;
              }
            }
          };
          const anchorOrigin = vue.computed(
            () => parsePosition(
              props.anchor || (props.cover === true ? "center middle" : "bottom start"),
              $q.lang.rtl
            )
          );
          const selfOrigin = vue.computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
          const menuClass = vue.computed(
            () => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : "")
          );
          const onEvents = vue.computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
          const handlesFocus = vue.computed(
            () => showing.value === true && props.persistent !== true
          );
          vue.watch(handlesFocus, (val) => {
            if (val === true) {
              addEscapeKey(onEscapeKey);
              addClickOutside(clickOutsideProps);
            } else {
              removeEscapeKey(onEscapeKey);
              removeClickOutside(clickOutsideProps);
            }
          });
          function focus() {
            addFocusFn(() => {
              let node = innerRef.value;
              if (node && node.contains(document.activeElement) !== true) {
                node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
                node.focus({ preventScroll: true });
              }
            });
          }
          function handleShow(evt) {
            refocusTarget = props.noRefocus === false ? document.activeElement : null;
            addFocusout(onFocusout);
            showPortal();
            configureScrollTarget();
            absoluteOffset = void 0;
            if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
              const pos = position(evt);
              if (pos.left !== void 0) {
                const { top, left } = anchorEl.value.getBoundingClientRect();
                absoluteOffset = { left: pos.left - left, top: pos.top - top };
              }
            }
            if (unwatchPosition === void 0) {
              unwatchPosition = vue.watch(
                () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
                updatePosition
              );
            }
            if (props.noFocus !== true) {
              document.activeElement.blur();
            }
            registerTick(() => {
              updatePosition();
              props.noFocus !== true && focus();
            });
            registerTimeout(() => {
              if ($q.platform.is.ios === true) {
                avoidAutoClose = props.autoClose;
                innerRef.value.click();
              }
              updatePosition();
              showPortal(true);
              emit("show", evt);
            }, props.transitionDuration);
          }
          function handleHide(evt) {
            removeTick();
            hidePortal();
            anchorCleanup(true);
            if (refocusTarget !== null && // menu was hidden from code or ESC plugin
            (evt === void 0 || evt.qClickOutside !== true)) {
              ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
              refocusTarget = null;
            }
            registerTimeout(() => {
              hidePortal(true);
              emit("hide", evt);
            }, props.transitionDuration);
          }
          function anchorCleanup(hiding) {
            absoluteOffset = void 0;
            if (unwatchPosition !== void 0) {
              unwatchPosition();
              unwatchPosition = void 0;
            }
            if (hiding === true || showing.value === true) {
              removeFocusout(onFocusout);
              unconfigureScrollTarget();
              removeClickOutside(clickOutsideProps);
              removeEscapeKey(onEscapeKey);
            }
            if (hiding !== true) {
              refocusTarget = null;
            }
          }
          function configureScrollTarget() {
            if (anchorEl.value !== null || props.scrollTarget !== void 0) {
              localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
              changeScrollEvent(localScrollTarget.value, updatePosition);
            }
          }
          function onAutoClose(e) {
            if (avoidAutoClose !== true) {
              closePortalMenus(proxy, e);
              emit("click", e);
            } else {
              avoidAutoClose = false;
            }
          }
          function onFocusout(evt) {
            if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
              focus();
            }
          }
          function onEscapeKey(evt) {
            emit("escapeKey");
            hide(evt);
          }
          function updatePosition() {
            setPosition({
              targetEl: innerRef.value,
              offset: props.offset,
              anchorEl: anchorEl.value,
              anchorOrigin: anchorOrigin.value,
              selfOrigin: selfOrigin.value,
              absoluteOffset,
              fit: props.fit,
              cover: props.cover,
              maxHeight: props.maxHeight,
              maxWidth: props.maxWidth
            });
          }
          function renderPortalContent() {
            return vue.h(
              vue.Transition,
              transitionProps.value,
              () => showing.value === true ? vue.h("div", {
                role: "menu",
                ...attrs,
                ref: innerRef,
                tabindex: -1,
                class: [
                  "q-menu q-position-engine scroll" + menuClass.value,
                  attrs.class
                ],
                style: [
                  attrs.style,
                  transitionStyle.value
                ],
                ...onEvents.value
              }, hSlot(slots.default)) : null
            );
          }
          vue.onBeforeUnmount(anchorCleanup);
          Object.assign(proxy, { focus, updatePosition });
          return renderPortal;
        }
      });
      function useHistory(showing, hide, hideOnRouteChange) {
        let historyEntry;
        function removeFromHistory() {
          if (historyEntry !== void 0) {
            History.remove(historyEntry);
            historyEntry = void 0;
          }
        }
        vue.onBeforeUnmount(() => {
          showing.value === true && removeFromHistory();
        });
        return {
          removeFromHistory,
          addToHistory() {
            historyEntry = {
              condition: () => hideOnRouteChange.value === true,
              handler: hide
            };
            History.add(historyEntry);
          }
        };
      }
      let registered = 0, scrollPositionX, scrollPositionY, maxScrollTop, vpPendingUpdate = false, bodyLeft, bodyTop, href, closeTimer = null;
      function onWheel(e) {
        if (shouldPreventScroll(e)) {
          stopAndPrevent(e);
        }
      }
      function shouldPreventScroll(e) {
        if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) {
          return true;
        }
        const path = getEventPath(e), shift = e.shiftKey && !e.deltaX, scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY), delta = shift || scrollY ? e.deltaY : e.deltaX;
        for (let index = 0; index < path.length; index++) {
          const el = path[index];
          if (hasScrollbar(el, scrollY)) {
            return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
          }
        }
        return true;
      }
      function onAppleScroll(e) {
        if (e.target === document) {
          document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
        }
      }
      function onAppleResize(evt) {
        if (vpPendingUpdate === true) {
          return;
        }
        vpPendingUpdate = true;
        requestAnimationFrame(() => {
          vpPendingUpdate = false;
          const { height } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
          if (maxScrollTop === void 0 || height !== window.innerHeight) {
            maxScrollTop = clientHeight - height;
            document.scrollingElement.scrollTop = scrollTop;
          }
          if (scrollTop > maxScrollTop) {
            document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
          }
        });
      }
      function apply(action) {
        const body = document.body, hasViewport = window.visualViewport !== void 0;
        if (action === "add") {
          const { overflowY, overflowX } = window.getComputedStyle(body);
          scrollPositionX = getHorizontalScrollPosition(window);
          scrollPositionY = getVerticalScrollPosition(window);
          bodyLeft = body.style.left;
          bodyTop = body.style.top;
          href = window.location.href;
          body.style.left = `-${scrollPositionX}px`;
          body.style.top = `-${scrollPositionY}px`;
          if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) {
            body.classList.add("q-body--force-scrollbar-x");
          }
          if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) {
            body.classList.add("q-body--force-scrollbar-y");
          }
          body.classList.add("q-body--prevent-scroll");
          document.qScrollPrevented = true;
          if (client.is.ios === true) {
            if (hasViewport === true) {
              window.scrollTo(0, 0);
              window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
              window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
              window.scrollTo(0, 0);
            } else {
              window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
            }
          }
        }
        if (client.is.desktop === true && client.is.mac === true) {
          window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
        }
        if (action === "remove") {
          if (client.is.ios === true) {
            if (hasViewport === true) {
              window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
              window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
            } else {
              window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
            }
          }
          body.classList.remove("q-body--prevent-scroll");
          body.classList.remove("q-body--force-scrollbar-x");
          body.classList.remove("q-body--force-scrollbar-y");
          document.qScrollPrevented = false;
          body.style.left = bodyLeft;
          body.style.top = bodyTop;
          if (window.location.href === href) {
            window.scrollTo(scrollPositionX, scrollPositionY);
          }
          maxScrollTop = void 0;
        }
      }
      function preventScroll(state) {
        let action = "add";
        if (state === true) {
          registered++;
          if (closeTimer !== null) {
            clearTimeout(closeTimer);
            closeTimer = null;
            return;
          }
          if (registered > 1) {
            return;
          }
        } else {
          if (registered === 0) {
            return;
          }
          registered--;
          if (registered > 0) {
            return;
          }
          action = "remove";
          if (client.is.ios === true && client.is.nativeMobile === true) {
            closeTimer !== null && clearTimeout(closeTimer);
            closeTimer = setTimeout(() => {
              apply(action);
              closeTimer = null;
            }, 100);
            return;
          }
        }
        apply(action);
      }
      function usePreventScroll() {
        let currentState;
        return {
          preventBodyScroll(state) {
            if (state !== currentState && (currentState !== void 0 || state === true)) {
              currentState = state;
              preventScroll(state);
            }
          }
        };
      }
      let maximizedModals = 0;
      const positionClass = {
        standard: "fixed-full flex-center",
        top: "fixed-top justify-center",
        bottom: "fixed-bottom justify-center",
        right: "fixed-right items-center",
        left: "fixed-left items-center"
      };
      const defaultTransitions = {
        standard: ["scale", "scale"],
        top: ["slide-down", "slide-up"],
        bottom: ["slide-up", "slide-down"],
        right: ["slide-left", "slide-right"],
        left: ["slide-right", "slide-left"]
      };
      const QDialog = createComponent({
        name: "QDialog",
        inheritAttrs: false,
        props: {
          ...useModelToggleProps,
          ...useTransitionProps,
          transitionShow: String,
          // override useTransitionProps
          transitionHide: String,
          // override useTransitionProps
          persistent: Boolean,
          autoClose: Boolean,
          allowFocusOutside: Boolean,
          noEscDismiss: Boolean,
          noBackdropDismiss: Boolean,
          noRouteDismiss: Boolean,
          noRefocus: Boolean,
          noFocus: Boolean,
          noShake: Boolean,
          seamless: Boolean,
          maximized: Boolean,
          fullWidth: Boolean,
          fullHeight: Boolean,
          square: Boolean,
          position: {
            type: String,
            default: "standard",
            validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
          }
        },
        emits: [
          ...useModelToggleEmits,
          "shake",
          "click",
          "escapeKey"
        ],
        setup(props, { slots, emit, attrs }) {
          const vm = vue.getCurrentInstance();
          const innerRef = vue.ref(null);
          const showing = vue.ref(false);
          const animating = vue.ref(false);
          let shakeTimeout = null, refocusTarget = null, isMaximized, avoidAutoClose;
          const hideOnRouteChange = vue.computed(
            () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
          );
          const { preventBodyScroll } = usePreventScroll();
          const { registerTimeout } = useTimeout();
          const { registerTick, removeTick } = useTick();
          const { transitionProps, transitionStyle } = useTransition(
            props,
            () => defaultTransitions[props.position][0],
            () => defaultTransitions[props.position][1]
          );
          const { showPortal, hidePortal, portalIsAccessible, renderPortal } = usePortal(
            vm,
            innerRef,
            renderPortalContent,
            "dialog"
          );
          const { hide } = useModelToggle({
            showing,
            hideOnRouteChange,
            handleShow,
            handleHide,
            processOnMount: true
          });
          const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
          const classes = vue.computed(
            () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "")
          );
          const useBackdrop = vue.computed(() => showing.value === true && props.seamless !== true);
          const onEvents = vue.computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
          const rootClasses = vue.computed(() => [
            `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
            attrs.class
          ]);
          vue.watch(() => props.maximized, (state) => {
            showing.value === true && updateMaximized(state);
          });
          vue.watch(useBackdrop, (val) => {
            preventBodyScroll(val);
            if (val === true) {
              addFocusout(onFocusChange);
              addEscapeKey(onEscapeKey);
            } else {
              removeFocusout(onFocusChange);
              removeEscapeKey(onEscapeKey);
            }
          });
          function handleShow(evt) {
            addToHistory();
            refocusTarget = props.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
            updateMaximized(props.maximized);
            showPortal();
            animating.value = true;
            if (props.noFocus !== true) {
              document.activeElement !== null && document.activeElement.blur();
              registerTick(focus);
            } else {
              removeTick();
            }
            registerTimeout(() => {
              if (vm.proxy.$q.platform.is.ios === true) {
                if (props.seamless !== true && document.activeElement) {
                  const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
                  if (top > 0 && bottom > height / 2) {
                    document.scrollingElement.scrollTop = Math.min(
                      document.scrollingElement.scrollHeight - height,
                      bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2)
                    );
                  }
                  document.activeElement.scrollIntoView();
                }
                avoidAutoClose = true;
                innerRef.value.click();
                avoidAutoClose = false;
              }
              showPortal(true);
              animating.value = false;
              emit("show", evt);
            }, props.transitionDuration);
          }
          function handleHide(evt) {
            removeTick();
            removeFromHistory();
            cleanup(true);
            animating.value = true;
            hidePortal();
            if (refocusTarget !== null) {
              ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
              refocusTarget = null;
            }
            registerTimeout(() => {
              hidePortal(true);
              animating.value = false;
              emit("hide", evt);
            }, props.transitionDuration);
          }
          function focus(selector) {
            addFocusFn(() => {
              let node = innerRef.value;
              if (node === null || node.contains(document.activeElement) === true) {
                return;
              }
              node = (selector !== "" ? node.querySelector(selector) : null) || node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
              node.focus({ preventScroll: true });
            });
          }
          function shake(focusTarget) {
            if (focusTarget && typeof focusTarget.focus === "function") {
              focusTarget.focus({ preventScroll: true });
            } else {
              focus();
            }
            emit("shake");
            const node = innerRef.value;
            if (node !== null) {
              node.classList.remove("q-animate--scale");
              node.classList.add("q-animate--scale");
              shakeTimeout !== null && clearTimeout(shakeTimeout);
              shakeTimeout = setTimeout(() => {
                shakeTimeout = null;
                if (innerRef.value !== null) {
                  node.classList.remove("q-animate--scale");
                  focus();
                }
              }, 170);
            }
          }
          function onEscapeKey() {
            if (props.seamless !== true) {
              if (props.persistent === true || props.noEscDismiss === true) {
                props.maximized !== true && props.noShake !== true && shake();
              } else {
                emit("escapeKey");
                hide();
              }
            }
          }
          function cleanup(hiding) {
            if (shakeTimeout !== null) {
              clearTimeout(shakeTimeout);
              shakeTimeout = null;
            }
            if (hiding === true || showing.value === true) {
              updateMaximized(false);
              if (props.seamless !== true) {
                preventBodyScroll(false);
                removeFocusout(onFocusChange);
                removeEscapeKey(onEscapeKey);
              }
            }
            if (hiding !== true) {
              refocusTarget = null;
            }
          }
          function updateMaximized(active) {
            if (active === true) {
              if (isMaximized !== true) {
                maximizedModals < 1 && document.body.classList.add("q-body--dialog");
                maximizedModals++;
                isMaximized = true;
              }
            } else if (isMaximized === true) {
              if (maximizedModals < 2) {
                document.body.classList.remove("q-body--dialog");
              }
              maximizedModals--;
              isMaximized = false;
            }
          }
          function onAutoClose(e) {
            if (avoidAutoClose !== true) {
              hide(e);
              emit("click", e);
            }
          }
          function onBackdropClick(e) {
            if (props.persistent !== true && props.noBackdropDismiss !== true) {
              hide(e);
            } else if (props.noShake !== true) {
              shake();
            }
          }
          function onFocusChange(evt) {
            if (props.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
              focus('[tabindex]:not([tabindex="-1"])');
            }
          }
          Object.assign(vm.proxy, {
            // expose public methods
            focus,
            shake,
            // private but needed by QSelect
            __updateRefocusTarget(target2) {
              refocusTarget = target2 || null;
            }
          });
          vue.onBeforeUnmount(cleanup);
          function renderPortalContent() {
            return vue.h("div", {
              role: "dialog",
              "aria-modal": useBackdrop.value === true ? "true" : "false",
              ...attrs,
              class: rootClasses.value
            }, [
              vue.h(vue.Transition, {
                name: "q-transition--fade",
                appear: true
              }, () => useBackdrop.value === true ? vue.h("div", {
                class: "q-dialog__backdrop fixed-full",
                style: transitionStyle.value,
                "aria-hidden": "true",
                tabindex: -1,
                onClick: onBackdropClick
              }) : null),
              vue.h(
                vue.Transition,
                transitionProps.value,
                () => showing.value === true ? vue.h("div", {
                  ref: innerRef,
                  class: classes.value,
                  style: transitionStyle.value,
                  tabindex: -1,
                  ...onEvents.value
                }, hSlot(slots.default)) : null
              )
            ]);
          }
          return renderPortal;
        }
      });
      const useFormProps = {
        name: String
      };
      function useFormInject(formAttrs = {}) {
        return (child, action, className) => {
          child[action](
            vue.h("input", {
              class: "hidden" + (className || ""),
              ...formAttrs.value
            })
          );
        };
      }
      function useFormInputNameAttr(props) {
        return vue.computed(() => props.name || props.for);
      }
      const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
      const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
      const isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
      const isPlainText = /[a-z0-9_ -]$/i;
      function useKeyComposition(onInput) {
        return function onComposition(e) {
          if (e.type === "compositionend" || e.type === "change") {
            if (e.target.qComposing !== true)
              return;
            e.target.qComposing = false;
            onInput(e);
          } else if (e.type === "compositionupdate" && e.target.qComposing !== true && typeof e.data === "string") {
            const isComposing = client.is.firefox === true ? isPlainText.test(e.data) === false : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true;
            if (isComposing === true) {
              e.target.qComposing = true;
            }
          }
        };
      }
      function normalizeToInterval(v, min, max) {
        if (max <= min) {
          return min;
        }
        const size2 = max - min + 1;
        let index = min + (v - min) % size2;
        if (index < min) {
          index = size2 + index;
        }
        return index === 0 ? 0 : index;
      }
      const validateNewValueMode = (v) => ["add", "add-unique", "toggle"].includes(v);
      const reEscapeList = ".*+?^${}()|[]\\";
      const fieldPropsList = Object.keys(useFieldProps);
      const QSelect = createComponent({
        name: "QSelect",
        inheritAttrs: false,
        props: {
          ...useVirtualScrollProps,
          ...useFormProps,
          ...useFieldProps,
          modelValue: {
            required: true
          },
          multiple: Boolean,
          displayValue: [String, Number],
          displayValueHtml: Boolean,
          dropdownIcon: String,
          options: {
            type: Array,
            default: () => []
          },
          optionValue: [Function, String],
          optionLabel: [Function, String],
          optionDisable: [Function, String],
          hideSelected: Boolean,
          hideDropdownIcon: Boolean,
          fillInput: Boolean,
          maxValues: [Number, String],
          optionsDense: Boolean,
          optionsDark: {
            type: Boolean,
            default: null
          },
          optionsSelectedClass: String,
          optionsHtml: Boolean,
          optionsCover: Boolean,
          menuShrink: Boolean,
          menuAnchor: String,
          menuSelf: String,
          menuOffset: Array,
          popupContentClass: String,
          popupContentStyle: [String, Array, Object],
          useInput: Boolean,
          useChips: Boolean,
          newValueMode: {
            type: String,
            validator: validateNewValueMode
          },
          mapOptions: Boolean,
          emitValue: Boolean,
          inputDebounce: {
            type: [Number, String],
            default: 500
          },
          inputClass: [Array, String, Object],
          inputStyle: [Array, String, Object],
          tabindex: {
            type: [String, Number],
            default: 0
          },
          autocomplete: String,
          transitionShow: String,
          transitionHide: String,
          transitionDuration: [String, Number],
          behavior: {
            type: String,
            validator: (v) => ["default", "menu", "dialog"].includes(v),
            default: "default"
          },
          virtualScrollItemSize: {
            type: [Number, String],
            default: void 0
          },
          onNewValue: Function,
          onFilter: Function
        },
        emits: [
          ...useFieldEmits,
          "add",
          "remove",
          "inputValue",
          "newValue",
          "keyup",
          "keypress",
          "keydown",
          "filterAbort"
        ],
        setup(props, { slots, emit }) {
          const { proxy } = vue.getCurrentInstance();
          const { $q } = proxy;
          const menu = vue.ref(false);
          const dialog = vue.ref(false);
          const optionIndex = vue.ref(-1);
          const inputValue = vue.ref("");
          const dialogFieldFocused = vue.ref(false);
          const innerLoadingIndicator = vue.ref(false);
          let filterTimer = null, inputValueTimer = null, innerValueCache, hasDialog, userInputValue, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
          const inputRef = vue.ref(null);
          const targetRef = vue.ref(null);
          const menuRef = vue.ref(null);
          const dialogRef = vue.ref(null);
          const menuContentRef = vue.ref(null);
          const nameProp = useFormInputNameAttr(props);
          const onComposition = useKeyComposition(onInput);
          const virtualScrollLength = vue.computed(() => Array.isArray(props.options) ? props.options.length : 0);
          const virtualScrollItemSizeComputed = vue.computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense === true ? 24 : 48 : props.virtualScrollItemSize);
          const {
            virtualScrollSliceRange,
            virtualScrollSliceSizeComputed,
            localResetVirtualScroll,
            padVirtualScroll,
            onVirtualScrollEvt,
            scrollTo,
            setVirtualScrollSize
          } = useVirtualScroll({
            virtualScrollLength,
            getVirtualScrollTarget,
            getVirtualScrollEl,
            virtualScrollItemSizeComputed
          });
          const state = useFieldState();
          const innerValue = vue.computed(() => {
            const mapNull = props.mapOptions === true && props.multiple !== true, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull === true) ? props.multiple === true && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
            if (props.mapOptions === true && Array.isArray(props.options) === true) {
              const cache = props.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
              const values = val.map((v) => getOption(v, cache));
              return props.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
            }
            return val;
          });
          const innerFieldProps = vue.computed(() => {
            const acc = {};
            fieldPropsList.forEach((key) => {
              const val = props[key];
              if (val !== void 0) {
                acc[key] = val;
              }
            });
            return acc;
          });
          const isOptionsDark = vue.computed(() => props.optionsDark === null ? state.isDark.value : props.optionsDark);
          const hasValue = vue.computed(() => fieldValueIsFilled(innerValue.value));
          const computedInputClass = vue.computed(() => {
            let cls = "q-field__input q-placeholder col";
            if (props.hideSelected === true || innerValue.value.length === 0) {
              return [cls, props.inputClass];
            }
            cls += " q-field__input--padding";
            return props.inputClass === void 0 ? cls : [cls, props.inputClass];
          });
          const menuContentClass = vue.computed(
            () => (props.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : "")
          );
          const noOptions = vue.computed(() => virtualScrollLength.value === 0);
          const selectedString = vue.computed(
            () => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", ")
          );
          const ariaCurrentValue = vue.computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
          const needsHtmlFn = vue.computed(() => props.optionsHtml === true ? () => true : (opt) => opt !== void 0 && opt !== null && opt.html === true);
          const valueAsHtml = vue.computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
          const tabindex = vue.computed(() => state.focused.value === true ? props.tabindex : -1);
          const comboboxAttrs = vue.computed(() => {
            const attrs = {
              tabindex: props.tabindex,
              role: "combobox",
              "aria-label": props.label,
              "aria-readonly": props.readonly === true ? "true" : "false",
              "aria-autocomplete": props.useInput === true ? "list" : "none",
              "aria-expanded": menu.value === true ? "true" : "false",
              "aria-controls": `${state.targetUid.value}_lb`
            };
            if (optionIndex.value >= 0) {
              attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
            }
            return attrs;
          });
          const listboxAttrs = vue.computed(() => ({
            id: `${state.targetUid.value}_lb`,
            role: "listbox",
            "aria-multiselectable": props.multiple === true ? "true" : "false"
          }));
          const selectedScope = vue.computed(() => {
            return innerValue.value.map((opt, i) => ({
              index: i,
              opt,
              html: needsHtmlFn.value(opt),
              selected: true,
              removeAtIndex: removeAtIndexAndFocus,
              toggleOption,
              tabindex: tabindex.value
            }));
          });
          const optionScope = vue.computed(() => {
            if (virtualScrollLength.value === 0) {
              return [];
            }
            const { from, to } = virtualScrollSliceRange.value;
            return props.options.slice(from, to).map((opt, i) => {
              const disable = isOptionDisabled.value(opt) === true;
              const active = isOptionSelected(opt) === true;
              const index = from + i;
              const itemProps = {
                clickable: true,
                active,
                activeClass: computedOptionsSelectedClass.value,
                manualFocus: true,
                focused: false,
                disable,
                tabindex: -1,
                dense: props.optionsDense,
                dark: isOptionsDark.value,
                role: "option",
                "aria-selected": active === true ? "true" : "false",
                id: `${state.targetUid.value}_${index}`,
                onClick: () => {
                  toggleOption(opt);
                }
              };
              if (disable !== true) {
                optionIndex.value === index && (itemProps.focused = true);
                if ($q.platform.is.desktop === true) {
                  itemProps.onMousemove = () => {
                    menu.value === true && setOptionIndex(index);
                  };
                }
              }
              return {
                index,
                opt,
                html: needsHtmlFn.value(opt),
                label: getOptionLabel.value(opt),
                selected: itemProps.active,
                focused: itemProps.focused,
                toggleOption,
                setOptionIndex,
                itemProps
              };
            });
          });
          const dropdownArrowIcon = vue.computed(() => props.dropdownIcon !== void 0 ? props.dropdownIcon : $q.iconSet.arrow.dropdown);
          const squaredMenu = vue.computed(
            () => props.optionsCover === false && props.outlined !== true && props.standout !== true && props.borderless !== true && props.rounded !== true
          );
          const computedOptionsSelectedClass = vue.computed(() => props.optionsSelectedClass !== void 0 ? props.optionsSelectedClass : props.color !== void 0 ? `text-${props.color}` : "");
          const getOptionValue = vue.computed(() => getPropValueFn(props.optionValue, "value"));
          const getOptionLabel = vue.computed(() => getPropValueFn(props.optionLabel, "label"));
          const isOptionDisabled = vue.computed(() => getPropValueFn(props.optionDisable, "disable"));
          const innerOptionsValue = vue.computed(() => innerValue.value.map((opt) => getOptionValue.value(opt)));
          const inputControlEvents = vue.computed(() => {
            const evt = {
              onInput,
              // Safari < 10.2 & UIWebView doesn't fire compositionend when
              // switching focus before confirming composition choice
              // this also fixes the issue where some browsers e.g. iOS Chrome
              // fires "change" instead of "input" on autocomplete.
              onChange: onComposition,
              onKeydown: onTargetKeydown,
              onKeyup: onTargetAutocomplete,
              onKeypress: onTargetKeypress,
              onFocus: selectInputText,
              onClick(e) {
                hasDialog === true && stop(e);
              }
            };
            evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
            return evt;
          });
          vue.watch(innerValue, (val) => {
            innerValueCache = val;
            if (props.useInput === true && props.fillInput === true && props.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
              userInputValue !== true && resetInputValue();
              if (dialog.value === true || menu.value === true) {
                filter("");
              }
            }
          }, { immediate: true });
          vue.watch(() => props.fillInput, resetInputValue);
          vue.watch(menu, updateMenu);
          vue.watch(virtualScrollLength, rerenderMenu);
          function getEmittingOptionValue(opt) {
            return props.emitValue === true ? getOptionValue.value(opt) : opt;
          }
          function removeAtIndex(index) {
            if (index !== -1 && index < innerValue.value.length) {
              if (props.multiple === true) {
                const model = props.modelValue.slice();
                emit("remove", { index, value: model.splice(index, 1)[0] });
                emit("update:modelValue", model);
              } else {
                emit("update:modelValue", null);
              }
            }
          }
          function removeAtIndexAndFocus(index) {
            removeAtIndex(index);
            state.focus();
          }
          function add(opt, unique) {
            const val = getEmittingOptionValue(opt);
            if (props.multiple !== true) {
              props.fillInput === true && updateInputValue(
                getOptionLabel.value(opt),
                true,
                true
              );
              emit("update:modelValue", val);
              return;
            }
            if (innerValue.value.length === 0) {
              emit("add", { index: 0, value: val });
              emit("update:modelValue", props.multiple === true ? [val] : val);
              return;
            }
            if (unique === true && isOptionSelected(opt) === true) {
              return;
            }
            if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) {
              return;
            }
            const model = props.modelValue.slice();
            emit("add", { index: model.length, value: val });
            model.push(val);
            emit("update:modelValue", model);
          }
          function toggleOption(opt, keepOpen) {
            if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) {
              return;
            }
            const optValue = getOptionValue.value(opt);
            if (props.multiple !== true) {
              if (keepOpen !== true) {
                updateInputValue(
                  props.fillInput === true ? getOptionLabel.value(opt) : "",
                  true,
                  true
                );
                hidePopup();
              }
              targetRef.value !== null && targetRef.value.focus();
              if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) {
                emit("update:modelValue", props.emitValue === true ? optValue : opt);
              }
              return;
            }
            (hasDialog !== true || dialogFieldFocused.value === true) && state.focus();
            selectInputText();
            if (innerValue.value.length === 0) {
              const val = props.emitValue === true ? optValue : opt;
              emit("add", { index: 0, value: val });
              emit("update:modelValue", props.multiple === true ? [val] : val);
              return;
            }
            const model = props.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
            if (index !== -1) {
              emit("remove", { index, value: model.splice(index, 1)[0] });
            } else {
              if (props.maxValues !== void 0 && model.length >= props.maxValues) {
                return;
              }
              const val = props.emitValue === true ? optValue : opt;
              emit("add", { index: model.length, value: val });
              model.push(val);
            }
            emit("update:modelValue", model);
          }
          function setOptionIndex(index) {
            if ($q.platform.is.desktop !== true)
              return;
            const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
            if (optionIndex.value !== val) {
              optionIndex.value = val;
            }
          }
          function moveOptionSelection(offset = 1, skipInputValue) {
            if (menu.value === true) {
              let index = optionIndex.value;
              do {
                index = normalizeToInterval(
                  index + offset,
                  -1,
                  virtualScrollLength.value - 1
                );
              } while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
              if (optionIndex.value !== index) {
                setOptionIndex(index);
                scrollTo(index);
                if (skipInputValue !== true && props.useInput === true && props.fillInput === true) {
                  setInputValue(
                    index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue,
                    true
                  );
                }
              }
            }
          }
          function getOption(value, valueCache) {
            const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value);
            return props.options.find(fn) || valueCache.find(fn) || value;
          }
          function getPropValueFn(propValue, defaultVal) {
            const val = propValue !== void 0 ? propValue : defaultVal;
            return typeof val === "function" ? val : (opt) => opt !== null && typeof opt === "object" && val in opt ? opt[val] : opt;
          }
          function isOptionSelected(opt) {
            const val = getOptionValue.value(opt);
            return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
          }
          function selectInputText(e) {
            if (props.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) {
              targetRef.value.select();
            }
          }
          function onTargetKeyup(e) {
            if (isKeyCode(e, 27) === true && menu.value === true) {
              stop(e);
              hidePopup();
              resetInputValue();
            }
            emit("keyup", e);
          }
          function onTargetAutocomplete(e) {
            const { value } = e.target;
            if (e.keyCode !== void 0) {
              onTargetKeyup(e);
              return;
            }
            e.target.value = "";
            if (filterTimer !== null) {
              clearTimeout(filterTimer);
              filterTimer = null;
            }
            if (inputValueTimer !== null) {
              clearTimeout(inputValueTimer);
              inputValueTimer = null;
            }
            resetInputValue();
            if (typeof value === "string" && value.length !== 0) {
              const needle = value.toLocaleLowerCase();
              const findFn = (extractFn) => {
                const option = props.options.find((opt) => extractFn.value(opt).toLocaleLowerCase() === needle);
                if (option === void 0) {
                  return false;
                }
                if (innerValue.value.indexOf(option) === -1) {
                  toggleOption(option);
                } else {
                  hidePopup();
                }
                return true;
              };
              const fillFn = (afterFilter) => {
                if (findFn(getOptionValue) === true) {
                  return;
                }
                if (findFn(getOptionLabel) === true || afterFilter === true) {
                  return;
                }
                filter(value, true, () => fillFn(true));
              };
              fillFn();
            } else {
              state.clearValue(e);
            }
          }
          function onTargetKeypress(e) {
            emit("keypress", e);
          }
          function onTargetKeydown(e) {
            emit("keydown", e);
            if (shouldIgnoreKey(e) === true) {
              return;
            }
            const newValueModeValid = inputValue.value.length !== 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
            const tabShouldSelect = e.shiftKey !== true && props.multiple !== true && (optionIndex.value !== -1 || newValueModeValid === true);
            if (e.keyCode === 27) {
              prevent(e);
              return;
            }
            if (e.keyCode === 9 && tabShouldSelect === false) {
              closeMenu();
              return;
            }
            if (e.target === void 0 || e.target.id !== state.targetUid.value || state.editable.value !== true)
              return;
            if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
              stopAndPrevent(e);
              showPopup();
              return;
            }
            if (e.keyCode === 8 && (props.useChips === true || props.clearable === true) && props.hideSelected !== true && inputValue.value.length === 0) {
              if (props.multiple === true && Array.isArray(props.modelValue) === true) {
                removeAtIndex(props.modelValue.length - 1);
              } else if (props.multiple !== true && props.modelValue !== null) {
                emit("update:modelValue", null);
              }
              return;
            }
            if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
              stopAndPrevent(e);
              optionIndex.value = -1;
              moveOptionSelection(e.keyCode === 36 ? 1 : -1, props.multiple);
            }
            if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
              stopAndPrevent(e);
              optionIndex.value = Math.max(
                -1,
                Math.min(
                  virtualScrollLength.value,
                  optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view
                )
              );
              moveOptionSelection(e.keyCode === 33 ? 1 : -1, props.multiple);
            }
            if (e.keyCode === 38 || e.keyCode === 40) {
              stopAndPrevent(e);
              moveOptionSelection(e.keyCode === 38 ? -1 : 1, props.multiple);
            }
            const optionsLength = virtualScrollLength.value;
            if (searchBuffer === void 0 || searchBufferExp < Date.now()) {
              searchBuffer = "";
            }
            if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
              menu.value !== true && showPopup(e);
              const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
              searchBufferExp = Date.now() + 1500;
              if (keyRepeat === false) {
                stopAndPrevent(e);
                searchBuffer += char;
              }
              const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) !== -1 ? "\\" + l : l).join(".*"), "i");
              let index = optionIndex.value;
              if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props.options[index])) !== true) {
                do {
                  index = normalizeToInterval(index + 1, -1, optionsLength - 1);
                } while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || searchRe.test(getOptionLabel.value(props.options[index])) !== true));
              }
              if (optionIndex.value !== index) {
                vue.nextTick(() => {
                  setOptionIndex(index);
                  scrollTo(index);
                  if (index >= 0 && props.useInput === true && props.fillInput === true) {
                    setInputValue(getOptionLabel.value(props.options[index]), true);
                  }
                });
              }
              return;
            }
            if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false))
              return;
            e.keyCode !== 9 && stopAndPrevent(e);
            if (optionIndex.value !== -1 && optionIndex.value < optionsLength) {
              toggleOption(props.options[optionIndex.value]);
              return;
            }
            if (newValueModeValid === true) {
              const done = (val, mode2) => {
                if (mode2) {
                  if (validateNewValueMode(mode2) !== true) {
                    return;
                  }
                } else {
                  mode2 = props.newValueMode;
                }
                updateInputValue("", props.multiple !== true, true);
                if (val === void 0 || val === null) {
                  return;
                }
                const fn = mode2 === "toggle" ? toggleOption : add;
                fn(val, mode2 === "add-unique");
                if (props.multiple !== true) {
                  targetRef.value !== null && targetRef.value.focus();
                  hidePopup();
                }
              };
              if (props.onNewValue !== void 0) {
                emit("newValue", inputValue.value, done);
              } else {
                done(inputValue.value);
              }
              if (props.multiple !== true) {
                return;
              }
            }
            if (menu.value === true) {
              closeMenu();
            } else if (state.innerLoading.value !== true) {
              showPopup();
            }
          }
          function getVirtualScrollEl() {
            return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
          }
          function getVirtualScrollTarget() {
            return getVirtualScrollEl();
          }
          function getSelection() {
            if (props.hideSelected === true) {
              return [];
            }
            if (slots["selected-item"] !== void 0) {
              return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
            }
            if (slots.selected !== void 0) {
              return [].concat(slots.selected());
            }
            if (props.useChips === true) {
              return selectedScope.value.map((scope, i) => vue.h(QChip, {
                key: "option-" + i,
                removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
                dense: true,
                textColor: props.color,
                tabindex: tabindex.value,
                onRemove() {
                  scope.removeAtIndex(i);
                }
              }, () => vue.h("span", {
                class: "ellipsis",
                [scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
              })));
            }
            return [
              vue.h("span", {
                [valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
              })
            ];
          }
          function getAllOptions() {
            if (noOptions.value === true) {
              return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
            }
            const fn = slots.option !== void 0 ? slots.option : (scope) => {
              return vue.h(QItem, {
                key: scope.index,
                ...scope.itemProps
              }, () => {
                return vue.h(
                  QItemSection,
                  () => vue.h(
                    QItemLabel,
                    () => vue.h("span", {
                      [scope.html === true ? "innerHTML" : "textContent"]: scope.label
                    })
                  )
                );
              });
            };
            let options = padVirtualScroll("div", optionScope.value.map(fn));
            if (slots["before-options"] !== void 0) {
              options = slots["before-options"]().concat(options);
            }
            return hMergeSlot(slots["after-options"], options);
          }
          function getInput(fromDialog, isTarget) {
            const attrs = isTarget === true ? { ...comboboxAttrs.value, ...state.splitAttrs.attributes.value } : void 0;
            const data = {
              ref: isTarget === true ? targetRef : void 0,
              key: "i_t",
              class: computedInputClass.value,
              style: props.inputStyle,
              value: inputValue.value !== void 0 ? inputValue.value : "",
              // required for Android in order to show ENTER key when in form
              type: "search",
              ...attrs,
              id: isTarget === true ? state.targetUid.value : void 0,
              maxlength: props.maxlength,
              autocomplete: props.autocomplete,
              "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
              disabled: props.disable === true,
              readonly: props.readonly === true,
              ...inputControlEvents.value
            };
            if (fromDialog !== true && hasDialog === true) {
              if (Array.isArray(data.class) === true) {
                data.class = [...data.class, "no-pointer-events"];
              } else {
                data.class += " no-pointer-events";
              }
            }
            return vue.h("input", data);
          }
          function onInput(e) {
            if (filterTimer !== null) {
              clearTimeout(filterTimer);
              filterTimer = null;
            }
            if (inputValueTimer !== null) {
              clearTimeout(inputValueTimer);
              inputValueTimer = null;
            }
            if (e && e.target && e.target.qComposing === true) {
              return;
            }
            setInputValue(e.target.value || "");
            userInputValue = true;
            defaultInputValue = inputValue.value;
            if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) {
              state.focus();
            }
            if (props.onFilter !== void 0) {
              filterTimer = setTimeout(() => {
                filterTimer = null;
                filter(inputValue.value);
              }, props.inputDebounce);
            }
          }
          function setInputValue(val, emitImmediately) {
            if (inputValue.value !== val) {
              inputValue.value = val;
              if (emitImmediately === true || props.inputDebounce === 0 || props.inputDebounce === "0") {
                emit("inputValue", val);
              } else {
                inputValueTimer = setTimeout(() => {
                  inputValueTimer = null;
                  emit("inputValue", val);
                }, props.inputDebounce);
              }
            }
          }
          function updateInputValue(val, noFiltering, internal) {
            userInputValue = internal !== true;
            if (props.useInput === true) {
              setInputValue(val, true);
              if (noFiltering === true || internal !== true) {
                defaultInputValue = val;
              }
              noFiltering !== true && filter(val);
            }
          }
          function filter(val, keepClosed, afterUpdateFn) {
            if (props.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) {
              return;
            }
            if (state.innerLoading.value === true) {
              emit("filterAbort");
            } else {
              state.innerLoading.value = true;
              innerLoadingIndicator.value = true;
            }
            if (val !== "" && props.multiple !== true && innerValue.value.length !== 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) {
              val = "";
            }
            const localFilterId = setTimeout(() => {
              menu.value === true && (menu.value = false);
            }, 10);
            filterId !== null && clearTimeout(filterId);
            filterId = localFilterId;
            emit(
              "filter",
              val,
              (fn, afterFn) => {
                if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
                  clearTimeout(filterId);
                  typeof fn === "function" && fn();
                  innerLoadingIndicator.value = false;
                  vue.nextTick(() => {
                    state.innerLoading.value = false;
                    if (state.editable.value === true) {
                      if (keepClosed === true) {
                        menu.value === true && hidePopup();
                      } else if (menu.value === true) {
                        updateMenu(true);
                      } else {
                        menu.value = true;
                      }
                    }
                    typeof afterFn === "function" && vue.nextTick(() => {
                      afterFn(proxy);
                    });
                    typeof afterUpdateFn === "function" && vue.nextTick(() => {
                      afterUpdateFn(proxy);
                    });
                  });
                }
              },
              () => {
                if (state.focused.value === true && filterId === localFilterId) {
                  clearTimeout(filterId);
                  state.innerLoading.value = false;
                  innerLoadingIndicator.value = false;
                }
                menu.value === true && (menu.value = false);
              }
            );
          }
          function getMenu() {
            return vue.h(QMenu, {
              ref: menuRef,
              class: menuContentClass.value,
              style: props.popupContentStyle,
              modelValue: menu.value,
              fit: props.menuShrink !== true,
              cover: props.optionsCover === true && noOptions.value !== true && props.useInput !== true,
              anchor: props.menuAnchor,
              self: props.menuSelf,
              offset: props.menuOffset,
              dark: isOptionsDark.value,
              noParentEvent: true,
              noRefocus: true,
              noFocus: true,
              square: squaredMenu.value,
              transitionShow: props.transitionShow,
              transitionHide: props.transitionHide,
              transitionDuration: props.transitionDuration,
              separateClosePopup: true,
              ...listboxAttrs.value,
              onScrollPassive: onVirtualScrollEvt,
              onBeforeShow: onControlPopupShow,
              onBeforeHide: onMenuBeforeHide,
              onShow: onMenuShow
            }, getAllOptions);
          }
          function onMenuBeforeHide(e) {
            onControlPopupHide(e);
            closeMenu();
          }
          function onMenuShow() {
            setVirtualScrollSize();
          }
          function onDialogFieldFocus(e) {
            stop(e);
            targetRef.value !== null && targetRef.value.focus();
            dialogFieldFocused.value = true;
            window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
          }
          function onDialogFieldBlur(e) {
            stop(e);
            vue.nextTick(() => {
              dialogFieldFocused.value = false;
            });
          }
          function getDialog() {
            const content = [
              vue.h(QField, {
                class: `col-auto ${state.fieldClass.value}`,
                ...innerFieldProps.value,
                for: state.targetUid.value,
                dark: isOptionsDark.value,
                square: true,
                loading: innerLoadingIndicator.value,
                itemAligned: false,
                filled: true,
                stackLabel: inputValue.value.length !== 0,
                ...state.splitAttrs.listeners.value,
                onFocus: onDialogFieldFocus,
                onBlur: onDialogFieldBlur
              }, {
                ...slots,
                rawControl: () => state.getControl(true),
                before: void 0,
                after: void 0
              })
            ];
            menu.value === true && content.push(
              vue.h("div", {
                ref: menuContentRef,
                class: menuContentClass.value + " scroll",
                style: props.popupContentStyle,
                ...listboxAttrs.value,
                onClick: prevent,
                onScrollPassive: onVirtualScrollEvt
              }, getAllOptions())
            );
            return vue.h(QDialog, {
              ref: dialogRef,
              modelValue: dialog.value,
              position: props.useInput === true ? "top" : void 0,
              transitionShow: transitionShowComputed,
              transitionHide: props.transitionHide,
              transitionDuration: props.transitionDuration,
              onBeforeShow: onControlPopupShow,
              onBeforeHide: onDialogBeforeHide,
              onHide: onDialogHide,
              onShow: onDialogShow
            }, () => vue.h("div", {
              class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "")
            }, content));
          }
          function onDialogBeforeHide(e) {
            onControlPopupHide(e);
            if (dialogRef.value !== null) {
              dialogRef.value.__updateRefocusTarget(
                state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
              );
            }
            state.focused.value = false;
          }
          function onDialogHide(e) {
            hidePopup();
            state.focused.value === false && emit("blur", e);
            resetInputValue();
          }
          function onDialogShow() {
            const el = document.activeElement;
            if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) {
              targetRef.value.focus();
            }
            setVirtualScrollSize();
          }
          function closeMenu() {
            if (dialog.value === true) {
              return;
            }
            optionIndex.value = -1;
            if (menu.value === true) {
              menu.value = false;
            }
            if (state.focused.value === false) {
              if (filterId !== null) {
                clearTimeout(filterId);
                filterId = null;
              }
              if (state.innerLoading.value === true) {
                emit("filterAbort");
                state.innerLoading.value = false;
                innerLoadingIndicator.value = false;
              }
            }
          }
          function showPopup(e) {
            if (state.editable.value !== true) {
              return;
            }
            if (hasDialog === true) {
              state.onControlFocusin(e);
              dialog.value = true;
              vue.nextTick(() => {
                state.focus();
              });
            } else {
              state.focus();
            }
            if (props.onFilter !== void 0) {
              filter(inputValue.value);
            } else if (noOptions.value !== true || slots["no-option"] !== void 0) {
              menu.value = true;
            }
          }
          function hidePopup() {
            dialog.value = false;
            closeMenu();
          }
          function resetInputValue() {
            props.useInput === true && updateInputValue(
              props.multiple !== true && props.fillInput === true && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "",
              true,
              true
            );
          }
          function updateMenu(show) {
            let optionIndex2 = -1;
            if (show === true) {
              if (innerValue.value.length !== 0) {
                const val = getOptionValue.value(innerValue.value[0]);
                optionIndex2 = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
              }
              localResetVirtualScroll(optionIndex2);
            }
            setOptionIndex(optionIndex2);
          }
          function rerenderMenu(newLength, oldLength) {
            if (menu.value === true && state.innerLoading.value === false) {
              localResetVirtualScroll(-1, true);
              vue.nextTick(() => {
                if (menu.value === true && state.innerLoading.value === false) {
                  if (newLength > oldLength) {
                    localResetVirtualScroll();
                  } else {
                    updateMenu(true);
                  }
                }
              });
            }
          }
          function updateMenuPosition() {
            if (dialog.value === false && menuRef.value !== null) {
              menuRef.value.updatePosition();
            }
          }
          function onControlPopupShow(e) {
            e !== void 0 && stop(e);
            emit("popupShow", e);
            state.hasPopupOpen = true;
            state.onControlFocusin(e);
          }
          function onControlPopupHide(e) {
            e !== void 0 && stop(e);
            emit("popupHide", e);
            state.hasPopupOpen = false;
            state.onControlFocusout(e);
          }
          function updatePreState() {
            hasDialog = $q.platform.is.mobile !== true && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput === true ? slots["no-option"] !== void 0 || props.onFilter !== void 0 || noOptions.value === false : true);
            transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props.useInput === true ? "fade" : props.transitionShow;
          }
          vue.onBeforeUpdate(updatePreState);
          vue.onUpdated(updateMenuPosition);
          updatePreState();
          vue.onBeforeUnmount(() => {
            filterTimer !== null && clearTimeout(filterTimer);
            inputValueTimer !== null && clearTimeout(inputValueTimer);
          });
          Object.assign(proxy, {
            showPopup,
            hidePopup,
            removeAtIndex,
            add,
            toggleOption,
            getOptionIndex: () => optionIndex.value,
            setOptionIndex,
            moveOptionSelection,
            filter,
            updateMenuPosition,
            updateInputValue,
            isOptionSelected,
            getEmittingOptionValue,
            isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
            getOptionValue: (...args) => getOptionValue.value.apply(null, args),
            getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
          });
          Object.assign(state, {
            innerValue,
            fieldClass: vue.computed(
              () => `q-select q-field--auto-height q-select--with${props.useInput !== true ? "out" : ""}-input q-select--with${props.useChips !== true ? "out" : ""}-chips q-select--${props.multiple === true ? "multiple" : "single"}`
            ),
            inputRef,
            targetRef,
            hasValue,
            showPopup,
            floatingLabel: vue.computed(
              () => props.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props.displayValue)
            ),
            getControlChild: () => {
              if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) {
                return hasDialog === true ? getDialog() : getMenu();
              } else if (state.hasPopupOpen === true) {
                state.hasPopupOpen = false;
              }
            },
            controlEvents: {
              onFocusin(e) {
                state.onControlFocusin(e);
              },
              onFocusout(e) {
                state.onControlFocusout(e, () => {
                  resetInputValue();
                  closeMenu();
                });
              },
              onClick(e) {
                prevent(e);
                if (hasDialog !== true && menu.value === true) {
                  closeMenu();
                  targetRef.value !== null && targetRef.value.focus();
                  return;
                }
                showPopup(e);
              }
            },
            getControl: (fromDialog) => {
              const child = getSelection();
              const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
              if (props.useInput === true) {
                child.push(getInput(fromDialog, isTarget));
              } else if (state.editable.value === true) {
                const attrs2 = isTarget === true ? comboboxAttrs.value : void 0;
                child.push(
                  vue.h("input", {
                    ref: isTarget === true ? targetRef : void 0,
                    key: "d_t",
                    class: "q-select__focus-target",
                    id: isTarget === true ? state.targetUid.value : void 0,
                    value: ariaCurrentValue.value,
                    readonly: true,
                    "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
                    ...attrs2,
                    onKeydown: onTargetKeydown,
                    onKeyup: onTargetKeyup,
                    onKeypress: onTargetKeypress
                  })
                );
                if (isTarget === true && typeof props.autocomplete === "string" && props.autocomplete.length !== 0) {
                  child.push(
                    vue.h("input", {
                      class: "q-select__autocomplete-input",
                      autocomplete: props.autocomplete,
                      tabindex: -1,
                      onKeyup: onTargetAutocomplete
                    })
                  );
                }
              }
              if (nameProp.value !== void 0 && props.disable !== true && innerOptionsValue.value.length !== 0) {
                const opts = innerOptionsValue.value.map((value) => vue.h("option", { value, selected: true }));
                child.push(
                  vue.h("select", {
                    class: "hidden",
                    name: nameProp.value,
                    multiple: props.multiple
                  }, opts)
                );
              }
              const attrs = props.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value;
              return vue.h("div", {
                class: "q-field__native row items-center",
                ...attrs,
                ...state.splitAttrs.listeners.value
              }, child);
            },
            getInnerAppend: () => props.loading !== true && innerLoadingIndicator.value !== true && props.hideDropdownIcon !== true ? [
              vue.h(QIcon, {
                class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
                name: dropdownArrowIcon.value
              })
            ] : null
          });
          return useField(state);
        }
      });
      const defaultSizes = {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 10,
        xl: 14
      };
      function width(val, reverse, $q) {
        return {
          transform: reverse === true ? `translateX(${$q.lang.rtl === true ? "-" : ""}100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
        };
      }
      const QLinearProgress = createComponent({
        name: "QLinearProgress",
        props: {
          ...useDarkProps,
          ...useSizeProps,
          value: {
            type: Number,
            default: 0
          },
          buffer: Number,
          color: String,
          trackColor: String,
          reverse: Boolean,
          stripe: Boolean,
          indeterminate: Boolean,
          query: Boolean,
          rounded: Boolean,
          animationSpeed: {
            type: [String, Number],
            default: 2100
          },
          instantFeedback: Boolean
        },
        setup(props, { slots }) {
          const { proxy } = vue.getCurrentInstance();
          const isDark = useDark(props, proxy.$q);
          const sizeStyle = useSize(props, defaultSizes);
          const motion = vue.computed(() => props.indeterminate === true || props.query === true);
          const widthReverse = vue.computed(() => props.reverse !== props.query);
          const style = vue.computed(() => ({
            ...sizeStyle.value !== null ? sizeStyle.value : {},
            "--q-linear-progress-speed": `${props.animationSpeed}ms`
          }));
          const classes = vue.computed(
            () => "q-linear-progress" + (props.color !== void 0 ? ` text-${props.color}` : "") + (props.reverse === true || props.query === true ? " q-linear-progress--reverse" : "") + (props.rounded === true ? " rounded-borders" : "")
          );
          const trackStyle = vue.computed(() => width(props.buffer !== void 0 ? props.buffer : 1, widthReverse.value, proxy.$q));
          const transitionSuffix = vue.computed(() => `with${props.instantFeedback === true ? "out" : ""}-transition`);
          const trackClass = vue.computed(
            () => `q-linear-progress__track absolute-full q-linear-progress__track--${transitionSuffix.value} q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
          );
          const modelStyle = vue.computed(() => width(motion.value === true ? 1 : props.value, widthReverse.value, proxy.$q));
          const modelClass = vue.computed(
            () => `q-linear-progress__model absolute-full q-linear-progress__model--${transitionSuffix.value} q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
          );
          const stripeStyle = vue.computed(() => ({ width: `${props.value * 100}%` }));
          const stripeClass = vue.computed(
            () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"} q-linear-progress__stripe--${transitionSuffix.value}`
          );
          return () => {
            const child = [
              vue.h("div", {
                class: trackClass.value,
                style: trackStyle.value
              }),
              vue.h("div", {
                class: modelClass.value,
                style: modelStyle.value
              })
            ];
            props.stripe === true && motion.value === false && child.push(
              vue.h("div", {
                class: stripeClass.value,
                style: stripeStyle.value
              })
            );
            return vue.h("div", {
              class: classes.value,
              style: style.value,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 1,
              "aria-valuenow": props.indeterminate === true ? void 0 : props.value
            }, hMergeSlot(slots.default, child));
          };
        }
      });
      function useRefocusTarget(props, rootRef) {
        const refocusRef = vue.ref(null);
        const refocusTargetEl = vue.computed(() => {
          if (props.disable === true) {
            return null;
          }
          return vue.h("span", {
            ref: refocusRef,
            class: "no-outline",
            tabindex: -1
          });
        });
        function refocusTarget(e) {
          const root = rootRef.value;
          if (e !== void 0 && e.type.indexOf("key") === 0) {
            if (root !== null && document.activeElement !== root && root.contains(document.activeElement) === true) {
              root.focus();
            }
          } else if (refocusRef.value !== null && (e === void 0 || root !== null && root.contains(e.target) === true)) {
            refocusRef.value.focus();
          }
        }
        return {
          refocusTargetEl,
          refocusTarget
        };
      }
      const optionSizes = {
        xs: 30,
        sm: 35,
        md: 40,
        lg: 50,
        xl: 60
      };
      const useCheckboxProps = {
        ...useDarkProps,
        ...useSizeProps,
        ...useFormProps,
        modelValue: {
          required: true,
          default: null
        },
        val: {},
        trueValue: { default: true },
        falseValue: { default: false },
        indeterminateValue: { default: null },
        checkedIcon: String,
        uncheckedIcon: String,
        indeterminateIcon: String,
        toggleOrder: {
          type: String,
          validator: (v) => v === "tf" || v === "ft"
        },
        toggleIndeterminate: Boolean,
        label: String,
        leftLabel: Boolean,
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        disable: Boolean,
        tabindex: [String, Number]
      };
      const useCheckboxEmits = ["update:modelValue"];
      function useCheckbox(type, getInner) {
        const { props, slots, emit, proxy } = vue.getCurrentInstance();
        const { $q } = proxy;
        const isDark = useDark(props, $q);
        const rootRef = vue.ref(null);
        const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
        const sizeStyle = useSize(props, optionSizes);
        const modelIsArray = vue.computed(
          () => props.val !== void 0 && Array.isArray(props.modelValue)
        );
        const index = vue.computed(() => {
          const val = vue.toRaw(props.val);
          return modelIsArray.value === true ? props.modelValue.findIndex((opt) => vue.toRaw(opt) === val) : -1;
        });
        const isTrue = vue.computed(() => modelIsArray.value === true ? index.value !== -1 : vue.toRaw(props.modelValue) === vue.toRaw(props.trueValue));
        const isFalse = vue.computed(() => modelIsArray.value === true ? index.value === -1 : vue.toRaw(props.modelValue) === vue.toRaw(props.falseValue));
        const isIndeterminate = vue.computed(
          () => isTrue.value === false && isFalse.value === false
        );
        const tabindex = vue.computed(() => props.disable === true ? -1 : props.tabindex || 0);
        const classes = vue.computed(
          () => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props.dense === true ? ` q-${type}--dense` : "") + (props.leftLabel === true ? " reverse" : "")
        );
        const innerClass = vue.computed(() => {
          const state = isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet";
          const color = props.color !== void 0 && (props.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props.color}` : "";
          return `q-${type}__inner relative-position non-selectable q-${type}__inner--${state}${color}`;
        });
        const formAttrs = vue.computed(() => {
          const prop = { type: "checkbox" };
          props.name !== void 0 && Object.assign(prop, {
            // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
            ".checked": isTrue.value,
            "^checked": isTrue.value === true ? "checked" : void 0,
            name: props.name,
            value: modelIsArray.value === true ? props.val : props.trueValue
          });
          return prop;
        });
        const injectFormInput = useFormInject(formAttrs);
        const attributes = vue.computed(() => {
          const attrs = {
            tabindex: tabindex.value,
            role: type === "toggle" ? "switch" : "checkbox",
            "aria-label": props.label,
            "aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
          };
          if (props.disable === true) {
            attrs["aria-disabled"] = "true";
          }
          return attrs;
        });
        function onClick(e) {
          if (e !== void 0) {
            stopAndPrevent(e);
            refocusTarget(e);
          }
          if (props.disable !== true) {
            emit("update:modelValue", getNextValue(), e);
          }
        }
        function getNextValue() {
          if (modelIsArray.value === true) {
            if (isTrue.value === true) {
              const val = props.modelValue.slice();
              val.splice(index.value, 1);
              return val;
            }
            return props.modelValue.concat([props.val]);
          }
          if (isTrue.value === true) {
            if (props.toggleOrder !== "ft" || props.toggleIndeterminate === false) {
              return props.falseValue;
            }
          } else if (isFalse.value === true) {
            if (props.toggleOrder === "ft" || props.toggleIndeterminate === false) {
              return props.trueValue;
            }
          } else {
            return props.toggleOrder !== "ft" ? props.trueValue : props.falseValue;
          }
          return props.indeterminateValue;
        }
        function onKeydown2(e) {
          if (e.keyCode === 13 || e.keyCode === 32) {
            stopAndPrevent(e);
          }
        }
        function onKeyup2(e) {
          if (e.keyCode === 13 || e.keyCode === 32) {
            onClick(e);
          }
        }
        const getInnerContent = getInner(isTrue, isIndeterminate);
        Object.assign(proxy, { toggle: onClick });
        return () => {
          const inner = getInnerContent();
          props.disable !== true && injectFormInput(
            inner,
            "unshift",
            ` q-${type}__native absolute q-ma-none q-pa-none`
          );
          const child = [
            vue.h("div", {
              class: innerClass.value,
              style: sizeStyle.value,
              "aria-hidden": "true"
            }, inner)
          ];
          if (refocusTargetEl.value !== null) {
            child.push(refocusTargetEl.value);
          }
          const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
          label !== void 0 && child.push(
            vue.h("div", {
              class: `q-${type}__label q-anchor--skip`
            }, label)
          );
          return vue.h("div", {
            ref: rootRef,
            class: classes.value,
            ...attributes.value,
            onClick,
            onKeydown: onKeydown2,
            onKeyup: onKeyup2
          }, child);
        };
      }
      const bgNode = vue.h("div", {
        key: "svg",
        class: "q-checkbox__bg absolute"
      }, [
        vue.h("svg", {
          class: "q-checkbox__svg fit absolute-full",
          viewBox: "0 0 24 24"
        }, [
          vue.h("path", {
            class: "q-checkbox__truthy",
            fill: "none",
            d: "M1.73,12.91 8.1,19.28 22.79,4.59"
          }),
          vue.h("path", {
            class: "q-checkbox__indet",
            d: "M4,14H20V10H4"
          })
        ])
      ]);
      const QCheckbox = createComponent({
        name: "QCheckbox",
        props: useCheckboxProps,
        emits: useCheckboxEmits,
        setup(props) {
          function getInner(isTrue, isIndeterminate) {
            const icon = vue.computed(
              () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null
            );
            return () => icon.value !== null ? [
              vue.h("div", {
                key: "icon",
                class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
              }, [
                vue.h(QIcon, {
                  class: "q-checkbox__icon",
                  name: icon.value
                })
              ])
            ] : [bgNode];
          }
          return useCheckbox("checkbox", getInner);
        }
      });
      let counter = 0;
      const useFullscreenProps = {
        fullscreen: Boolean,
        noRouteFullscreenExit: Boolean
      };
      const useFullscreenEmits = ["update:fullscreen", "fullscreen"];
      function useFullscreen() {
        const vm = vue.getCurrentInstance();
        const { props, emit, proxy } = vm;
        let historyEntry, fullscreenFillerNode, container;
        const inFullscreen = vue.ref(false);
        vmHasRouter(vm) === true && vue.watch(() => proxy.$route.fullPath, () => {
          props.noRouteFullscreenExit !== true && exitFullscreen();
        });
        vue.watch(() => props.fullscreen, (v) => {
          if (inFullscreen.value !== v) {
            toggleFullscreen();
          }
        });
        vue.watch(inFullscreen, (v) => {
          emit("update:fullscreen", v);
          emit("fullscreen", v);
        });
        function toggleFullscreen() {
          if (inFullscreen.value === true) {
            exitFullscreen();
          } else {
            setFullscreen();
          }
        }
        function setFullscreen() {
          if (inFullscreen.value === true) {
            return;
          }
          inFullscreen.value = true;
          container = proxy.$el.parentNode;
          container.replaceChild(fullscreenFillerNode, proxy.$el);
          document.body.appendChild(proxy.$el);
          counter++;
          if (counter === 1) {
            document.body.classList.add("q-body--fullscreen-mixin");
          }
          historyEntry = {
            handler: exitFullscreen
          };
          History.add(historyEntry);
        }
        function exitFullscreen() {
          if (inFullscreen.value !== true) {
            return;
          }
          if (historyEntry !== void 0) {
            History.remove(historyEntry);
            historyEntry = void 0;
          }
          container.replaceChild(proxy.$el, fullscreenFillerNode);
          inFullscreen.value = false;
          counter = Math.max(0, counter - 1);
          if (counter === 0) {
            document.body.classList.remove("q-body--fullscreen-mixin");
            if (proxy.$el.scrollIntoView !== void 0) {
              setTimeout(() => {
                proxy.$el.scrollIntoView();
              });
            }
          }
        }
        vue.onBeforeMount(() => {
          fullscreenFillerNode = document.createElement("span");
        });
        vue.onMounted(() => {
          props.fullscreen === true && setFullscreen();
        });
        vue.onBeforeUnmount(exitFullscreen);
        Object.assign(proxy, {
          toggleFullscreen,
          setFullscreen,
          exitFullscreen
        });
        return {
          inFullscreen,
          toggleFullscreen
        };
      }
      function sortDate(a, b) {
        return new Date(a) - new Date(b);
      }
      const useTableSortProps = {
        sortMethod: Function,
        binaryStateSort: Boolean,
        columnSortOrder: {
          type: String,
          validator: (v) => v === "ad" || v === "da",
          default: "ad"
        }
      };
      function useTableSort(props, computedPagination, colList, setPagination) {
        const columnToSort = vue.computed(() => {
          const { sortBy } = computedPagination.value;
          return sortBy ? colList.value.find((def) => def.name === sortBy) || null : null;
        });
        const computedSortMethod = vue.computed(() => props.sortMethod !== void 0 ? props.sortMethod : (data, sortBy, descending) => {
          const col = colList.value.find((def) => def.name === sortBy);
          if (col === void 0 || col.field === void 0) {
            return data;
          }
          const dir = descending === true ? -1 : 1, val = typeof col.field === "function" ? (v) => col.field(v) : (v) => v[col.field];
          return data.sort((a, b) => {
            let A = val(a), B = val(b);
            if (col.rawSort !== void 0) {
              return col.rawSort(A, B, a, b) * dir;
            }
            if (A === null || A === void 0) {
              return -1 * dir;
            }
            if (B === null || B === void 0) {
              return 1 * dir;
            }
            if (col.sort !== void 0) {
              return col.sort(A, B, a, b) * dir;
            }
            if (isNumber(A) === true && isNumber(B) === true) {
              return (A - B) * dir;
            }
            if (isDate(A) === true && isDate(B) === true) {
              return sortDate(A, B) * dir;
            }
            if (typeof A === "boolean" && typeof B === "boolean") {
              return (A - B) * dir;
            }
            [A, B] = [A, B].map((s) => (s + "").toLocaleString().toLowerCase());
            return A < B ? -1 * dir : A === B ? 0 : dir;
          });
        });
        function sort(col) {
          let sortOrder = props.columnSortOrder;
          if (isObject(col) === true) {
            if (col.sortOrder) {
              sortOrder = col.sortOrder;
            }
            col = col.name;
          } else {
            const def = colList.value.find((def2) => def2.name === col);
            if (def !== void 0 && def.sortOrder) {
              sortOrder = def.sortOrder;
            }
          }
          let { sortBy, descending } = computedPagination.value;
          if (sortBy !== col) {
            sortBy = col;
            descending = sortOrder === "da";
          } else if (props.binaryStateSort === true) {
            descending = !descending;
          } else if (descending === true) {
            if (sortOrder === "ad") {
              sortBy = null;
            } else {
              descending = false;
            }
          } else {
            if (sortOrder === "ad") {
              descending = true;
            } else {
              sortBy = null;
            }
          }
          setPagination({ sortBy, descending, page: 1 });
        }
        return {
          columnToSort,
          computedSortMethod,
          sort
        };
      }
      const useTableFilterProps = {
        filter: [String, Object],
        filterMethod: Function
      };
      function useTableFilter(props, setPagination) {
        const computedFilterMethod = vue.computed(() => props.filterMethod !== void 0 ? props.filterMethod : (rows2, terms, cols, cellValue) => {
          const lowerTerms = terms ? terms.toLowerCase() : "";
          return rows2.filter(
            (row) => cols.some((col) => {
              const val = cellValue(col, row) + "";
              const haystack = val === "undefined" || val === "null" ? "" : val.toLowerCase();
              return haystack.indexOf(lowerTerms) !== -1;
            })
          );
        });
        vue.watch(
          () => props.filter,
          () => {
            vue.nextTick(() => {
              setPagination({ page: 1 }, true);
            });
          },
          { deep: true }
        );
        return { computedFilterMethod };
      }
      function samePagination(oldPag, newPag) {
        for (const prop in newPag) {
          if (newPag[prop] !== oldPag[prop]) {
            return false;
          }
        }
        return true;
      }
      function fixPagination(p) {
        if (p.page < 1) {
          p.page = 1;
        }
        if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
          p.rowsPerPage = 0;
        }
        return p;
      }
      const useTablePaginationProps = {
        pagination: Object,
        rowsPerPageOptions: {
          type: Array,
          default: () => [5, 7, 10, 15, 20, 25, 50, 0]
        },
        "onUpdate:pagination": [Function, Array]
      };
      function useTablePaginationState(vm, getCellValue) {
        const { props, emit } = vm;
        const innerPagination = vue.ref(
          Object.assign({
            sortBy: null,
            descending: false,
            page: 1,
            rowsPerPage: props.rowsPerPageOptions.length !== 0 ? props.rowsPerPageOptions[0] : 5
          }, props.pagination)
        );
        const computedPagination = vue.computed(() => {
          const pag = props["onUpdate:pagination"] !== void 0 ? { ...innerPagination.value, ...props.pagination } : innerPagination.value;
          return fixPagination(pag);
        });
        const isServerSide = vue.computed(() => computedPagination.value.rowsNumber !== void 0);
        function sendServerRequest(pagination) {
          requestServerInteraction({
            pagination,
            filter: props.filter
          });
        }
        function requestServerInteraction(prop = {}) {
          vue.nextTick(() => {
            emit("request", {
              pagination: prop.pagination || computedPagination.value,
              filter: prop.filter || props.filter,
              getCellValue
            });
          });
        }
        function setPagination(val, forceServerRequest) {
          const newPagination = fixPagination({
            ...computedPagination.value,
            ...val
          });
          if (samePagination(computedPagination.value, newPagination) === true) {
            if (isServerSide.value === true && forceServerRequest === true) {
              sendServerRequest(newPagination);
            }
            return;
          }
          if (isServerSide.value === true) {
            sendServerRequest(newPagination);
            return;
          }
          if (props.pagination !== void 0 && props["onUpdate:pagination"] !== void 0) {
            emit("update:pagination", newPagination);
          } else {
            innerPagination.value = newPagination;
          }
        }
        return {
          innerPagination,
          computedPagination,
          isServerSide,
          requestServerInteraction,
          setPagination
        };
      }
      function useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber) {
        const { props, emit, proxy: { $q } } = vm;
        const computedRowsNumber = vue.computed(() => isServerSide.value === true ? computedPagination.value.rowsNumber || 0 : filteredSortedRowsNumber.value);
        const firstRowIndex = vue.computed(() => {
          const { page, rowsPerPage } = computedPagination.value;
          return (page - 1) * rowsPerPage;
        });
        const lastRowIndex = vue.computed(() => {
          const { page, rowsPerPage } = computedPagination.value;
          return page * rowsPerPage;
        });
        const isFirstPage = vue.computed(() => computedPagination.value.page === 1);
        const pagesNumber = vue.computed(() => computedPagination.value.rowsPerPage === 0 ? 1 : Math.max(
          1,
          Math.ceil(computedRowsNumber.value / computedPagination.value.rowsPerPage)
        ));
        const isLastPage = vue.computed(() => lastRowIndex.value === 0 ? true : computedPagination.value.page >= pagesNumber.value);
        const computedRowsPerPageOptions = vue.computed(() => {
          const opts = props.rowsPerPageOptions.includes(innerPagination.value.rowsPerPage) ? props.rowsPerPageOptions : [innerPagination.value.rowsPerPage].concat(props.rowsPerPageOptions);
          return opts.map((count) => ({
            label: count === 0 ? $q.lang.table.allRows : "" + count,
            value: count
          }));
        });
        vue.watch(pagesNumber, (lastPage2, oldLastPage) => {
          if (lastPage2 === oldLastPage) {
            return;
          }
          const currentPage = computedPagination.value.page;
          if (lastPage2 && !currentPage) {
            setPagination({ page: 1 });
          } else if (lastPage2 < currentPage) {
            setPagination({ page: lastPage2 });
          }
        });
        function firstPage() {
          setPagination({ page: 1 });
        }
        function prevPage() {
          const { page } = computedPagination.value;
          if (page > 1) {
            setPagination({ page: page - 1 });
          }
        }
        function nextPage() {
          const { page, rowsPerPage } = computedPagination.value;
          if (lastRowIndex.value > 0 && page * rowsPerPage < computedRowsNumber.value) {
            setPagination({ page: page + 1 });
          }
        }
        function lastPage() {
          setPagination({ page: pagesNumber.value });
        }
        if (props["onUpdate:pagination"] !== void 0) {
          emit("update:pagination", { ...computedPagination.value });
        }
        return {
          firstRowIndex,
          lastRowIndex,
          isFirstPage,
          isLastPage,
          pagesNumber,
          computedRowsPerPageOptions,
          computedRowsNumber,
          firstPage,
          prevPage,
          nextPage,
          lastPage
        };
      }
      const useTableRowSelectionProps = {
        selection: {
          type: String,
          default: "none",
          validator: (v) => ["single", "multiple", "none"].includes(v)
        },
        selected: {
          type: Array,
          default: () => []
        }
      };
      const useTableRowSelectionEmits = ["update:selected", "selection"];
      function useTableRowSelection(props, emit, computedRows, getRowKey) {
        const selectedKeys = vue.computed(() => {
          const keys = {};
          props.selected.map(getRowKey.value).forEach((key) => {
            keys[key] = true;
          });
          return keys;
        });
        const hasSelectionMode = vue.computed(() => {
          return props.selection !== "none";
        });
        const singleSelection = vue.computed(() => {
          return props.selection === "single";
        });
        const multipleSelection = vue.computed(() => {
          return props.selection === "multiple";
        });
        const allRowsSelected = vue.computed(
          () => computedRows.value.length !== 0 && computedRows.value.every(
            (row) => selectedKeys.value[getRowKey.value(row)] === true
          )
        );
        const someRowsSelected = vue.computed(
          () => allRowsSelected.value !== true && computedRows.value.some((row) => selectedKeys.value[getRowKey.value(row)] === true)
        );
        const rowsSelectedNumber = vue.computed(() => props.selected.length);
        function isRowSelected(key) {
          return selectedKeys.value[key] === true;
        }
        function clearSelection2() {
          emit("update:selected", []);
        }
        function updateSelection(keys, rows2, added, evt) {
          emit("selection", { rows: rows2, added, keys, evt });
          const payload = singleSelection.value === true ? added === true ? rows2 : [] : added === true ? props.selected.concat(rows2) : props.selected.filter(
            (row) => keys.includes(getRowKey.value(row)) === false
          );
          emit("update:selected", payload);
        }
        return {
          hasSelectionMode,
          singleSelection,
          multipleSelection,
          allRowsSelected,
          someRowsSelected,
          rowsSelectedNumber,
          isRowSelected,
          clearSelection: clearSelection2,
          updateSelection
        };
      }
      function getVal(val) {
        return Array.isArray(val) ? val.slice() : [];
      }
      const useTableRowExpandProps = {
        expanded: Array
        // v-model:expanded
      };
      const useTableRowExpandEmits = ["update:expanded"];
      function useTableRowExpand(props, emit) {
        const innerExpanded = vue.ref(getVal(props.expanded));
        vue.watch(() => props.expanded, (val) => {
          innerExpanded.value = getVal(val);
        });
        function isRowExpanded(key) {
          return innerExpanded.value.includes(key);
        }
        function setExpanded(val) {
          if (props.expanded !== void 0) {
            emit("update:expanded", val);
          } else {
            innerExpanded.value = val;
          }
        }
        function updateExpanded(key, add) {
          const target2 = innerExpanded.value.slice();
          const index = target2.indexOf(key);
          if (add === true) {
            if (index === -1) {
              target2.push(key);
              setExpanded(target2);
            }
          } else if (index !== -1) {
            target2.splice(index, 1);
            setExpanded(target2);
          }
        }
        return {
          isRowExpanded,
          setExpanded,
          updateExpanded
        };
      }
      const useTableColumnSelectionProps = {
        visibleColumns: Array
      };
      function useTableColumnSelection(props, computedPagination, hasSelectionMode) {
        const colList = vue.computed(() => {
          if (props.columns !== void 0) {
            return props.columns;
          }
          const row = props.rows[0];
          return row !== void 0 ? Object.keys(row).map((name) => ({
            name,
            label: name.toUpperCase(),
            field: name,
            align: isNumber(row[name]) ? "right" : "left",
            sortable: true
          })) : [];
        });
        const computedCols = vue.computed(() => {
          const { sortBy, descending } = computedPagination.value;
          const cols = props.visibleColumns !== void 0 ? colList.value.filter((col) => col.required === true || props.visibleColumns.includes(col.name) === true) : colList.value;
          return cols.map((col) => {
            const align = col.align || "right";
            const alignClass = `text-${align}`;
            return {
              ...col,
              align,
              __iconClass: `q-table__sort-icon q-table__sort-icon--${align}`,
              __thClass: alignClass + (col.headerClasses !== void 0 ? " " + col.headerClasses : "") + (col.sortable === true ? " sortable" : "") + (col.name === sortBy ? ` sorted ${descending === true ? "sort-desc" : ""}` : ""),
              __tdStyle: col.style !== void 0 ? typeof col.style !== "function" ? () => col.style : col.style : () => null,
              __tdClass: col.classes !== void 0 ? typeof col.classes !== "function" ? () => alignClass + " " + col.classes : (row) => alignClass + " " + col.classes(row) : () => alignClass
            };
          });
        });
        const computedColsMap = vue.computed(() => {
          const names = {};
          computedCols.value.forEach((col) => {
            names[col.name] = col;
          });
          return names;
        });
        const computedColspan = vue.computed(() => {
          return props.tableColspan !== void 0 ? props.tableColspan : computedCols.value.length + (hasSelectionMode.value === true ? 1 : 0);
        });
        return {
          colList,
          computedCols,
          computedColsMap,
          computedColspan
        };
      }
      const bottomClass = "q-table__bottom row items-center";
      const commonVirtPropsObj = {};
      commonVirtPropsList.forEach((p) => {
        commonVirtPropsObj[p] = {};
      });
      const QTable = createComponent({
        name: "QTable",
        props: {
          rows: {
            type: Array,
            default: () => []
          },
          rowKey: {
            type: [String, Function],
            default: "id"
          },
          columns: Array,
          loading: Boolean,
          iconFirstPage: String,
          iconPrevPage: String,
          iconNextPage: String,
          iconLastPage: String,
          title: String,
          hideHeader: Boolean,
          grid: Boolean,
          gridHeader: Boolean,
          dense: Boolean,
          flat: Boolean,
          bordered: Boolean,
          square: Boolean,
          separator: {
            type: String,
            default: "horizontal",
            validator: (v) => ["horizontal", "vertical", "cell", "none"].includes(v)
          },
          wrapCells: Boolean,
          virtualScroll: Boolean,
          virtualScrollTarget: {
            default: void 0
          },
          ...commonVirtPropsObj,
          noDataLabel: String,
          noResultsLabel: String,
          loadingLabel: String,
          selectedRowsLabel: Function,
          rowsPerPageLabel: String,
          paginationLabel: Function,
          color: {
            type: String,
            default: "grey-8"
          },
          titleClass: [String, Array, Object],
          tableStyle: [String, Array, Object],
          tableClass: [String, Array, Object],
          tableHeaderStyle: [String, Array, Object],
          tableHeaderClass: [String, Array, Object],
          cardContainerClass: [String, Array, Object],
          cardContainerStyle: [String, Array, Object],
          cardStyle: [String, Array, Object],
          cardClass: [String, Array, Object],
          hideBottom: Boolean,
          hideSelectedBanner: Boolean,
          hideNoData: Boolean,
          hidePagination: Boolean,
          onRowClick: Function,
          onRowDblclick: Function,
          onRowContextmenu: Function,
          ...useDarkProps,
          ...useFullscreenProps,
          ...useTableColumnSelectionProps,
          ...useTableFilterProps,
          ...useTablePaginationProps,
          ...useTableRowExpandProps,
          ...useTableRowSelectionProps,
          ...useTableSortProps
        },
        emits: [
          "request",
          "virtualScroll",
          ...useFullscreenEmits,
          ...useTableRowExpandEmits,
          ...useTableRowSelectionEmits
        ],
        setup(props, { slots, emit }) {
          const vm = vue.getCurrentInstance();
          const { proxy: { $q } } = vm;
          const isDark = useDark(props, $q);
          const { inFullscreen, toggleFullscreen } = useFullscreen();
          const getRowKey = vue.computed(() => typeof props.rowKey === "function" ? props.rowKey : (row) => row[props.rowKey]);
          const rootRef = vue.ref(null);
          const virtScrollRef = vue.ref(null);
          const hasVirtScroll = vue.computed(() => props.grid !== true && props.virtualScroll === true);
          const cardDefaultClass = vue.computed(
            () => " q-table__card" + (isDark.value === true ? " q-table__card--dark q-dark" : "") + (props.square === true ? " q-table--square" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "")
          );
          const __containerClass = vue.computed(
            () => `q-table__container q-table--${props.separator}-separator column no-wrap` + (props.grid === true ? " q-table--grid" : cardDefaultClass.value) + (isDark.value === true ? " q-table--dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "") + (inFullscreen.value === true ? " fullscreen scroll" : "")
          );
          const containerClass = vue.computed(
            () => __containerClass.value + (props.loading === true ? " q-table--loading" : "")
          );
          vue.watch(
            () => props.tableStyle + props.tableClass + props.tableHeaderStyle + props.tableHeaderClass + __containerClass.value,
            () => {
              hasVirtScroll.value === true && virtScrollRef.value !== null && virtScrollRef.value.reset();
            }
          );
          const {
            innerPagination,
            computedPagination,
            isServerSide,
            requestServerInteraction,
            setPagination
          } = useTablePaginationState(vm, getCellValue);
          const { computedFilterMethod } = useTableFilter(props, setPagination);
          const { isRowExpanded, setExpanded, updateExpanded } = useTableRowExpand(props, emit);
          const filteredSortedRows = vue.computed(() => {
            let rows2 = props.rows;
            if (isServerSide.value === true || rows2.length === 0) {
              return rows2;
            }
            const { sortBy, descending } = computedPagination.value;
            if (props.filter) {
              rows2 = computedFilterMethod.value(rows2, props.filter, computedCols.value, getCellValue);
            }
            if (columnToSort.value !== null) {
              rows2 = computedSortMethod.value(
                props.rows === rows2 ? rows2.slice() : rows2,
                sortBy,
                descending
              );
            }
            return rows2;
          });
          const filteredSortedRowsNumber = vue.computed(() => filteredSortedRows.value.length);
          const computedRows = vue.computed(() => {
            let rows2 = filteredSortedRows.value;
            if (isServerSide.value === true) {
              return rows2;
            }
            const { rowsPerPage } = computedPagination.value;
            if (rowsPerPage !== 0) {
              if (firstRowIndex.value === 0 && props.rows !== rows2) {
                if (rows2.length > lastRowIndex.value) {
                  rows2 = rows2.slice(0, lastRowIndex.value);
                }
              } else {
                rows2 = rows2.slice(firstRowIndex.value, lastRowIndex.value);
              }
            }
            return rows2;
          });
          const {
            hasSelectionMode,
            singleSelection,
            multipleSelection,
            allRowsSelected,
            someRowsSelected,
            rowsSelectedNumber,
            isRowSelected,
            clearSelection: clearSelection2,
            updateSelection
          } = useTableRowSelection(props, emit, computedRows, getRowKey);
          const { colList, computedCols, computedColsMap, computedColspan } = useTableColumnSelection(props, computedPagination, hasSelectionMode);
          const { columnToSort, computedSortMethod, sort } = useTableSort(props, computedPagination, colList, setPagination);
          const {
            firstRowIndex,
            lastRowIndex,
            isFirstPage,
            isLastPage,
            pagesNumber,
            computedRowsPerPageOptions,
            computedRowsNumber,
            firstPage,
            prevPage,
            nextPage,
            lastPage
          } = useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber);
          const nothingToDisplay = vue.computed(() => computedRows.value.length === 0);
          const virtProps = vue.computed(() => {
            const acc = {};
            commonVirtPropsList.forEach((p) => {
              acc[p] = props[p];
            });
            if (acc.virtualScrollItemSize === void 0) {
              acc.virtualScrollItemSize = props.dense === true ? 28 : 48;
            }
            return acc;
          });
          function resetVirtualScroll() {
            hasVirtScroll.value === true && virtScrollRef.value.reset();
          }
          function getBody() {
            if (props.grid === true) {
              return getGridBody();
            }
            const header = props.hideHeader !== true ? getTHead : null;
            if (hasVirtScroll.value === true) {
              const topRow = slots["top-row"];
              const bottomRow = slots["bottom-row"];
              const virtSlots = {
                default: (props2) => getTBodyTR(props2.item, slots.body, props2.index)
              };
              if (topRow !== void 0) {
                const topContent = vue.h("tbody", topRow({ cols: computedCols.value }));
                virtSlots.before = header === null ? () => topContent : () => [header()].concat(topContent);
              } else if (header !== null) {
                virtSlots.before = header;
              }
              if (bottomRow !== void 0) {
                virtSlots.after = () => vue.h("tbody", bottomRow({ cols: computedCols.value }));
              }
              return vue.h(QVirtualScroll, {
                ref: virtScrollRef,
                class: props.tableClass,
                style: props.tableStyle,
                ...virtProps.value,
                scrollTarget: props.virtualScrollTarget,
                items: computedRows.value,
                type: "__qtable",
                tableColspan: computedColspan.value,
                onVirtualScroll: onVScroll
              }, virtSlots);
            }
            const child = [
              getTBody()
            ];
            if (header !== null) {
              child.unshift(header());
            }
            return getTableMiddle({
              class: ["q-table__middle scroll", props.tableClass],
              style: props.tableStyle
            }, child);
          }
          function scrollTo(toIndex, edge) {
            if (virtScrollRef.value !== null) {
              virtScrollRef.value.scrollTo(toIndex, edge);
              return;
            }
            toIndex = parseInt(toIndex, 10);
            const rowEl = rootRef.value.querySelector(`tbody tr:nth-of-type(${toIndex + 1})`);
            if (rowEl !== null) {
              const scrollTarget = rootRef.value.querySelector(".q-table__middle.scroll");
              const offsetTop = rowEl.offsetTop - props.virtualScrollStickySizeStart;
              const direction = offsetTop < scrollTarget.scrollTop ? "decrease" : "increase";
              scrollTarget.scrollTop = offsetTop;
              emit("virtualScroll", {
                index: toIndex,
                from: 0,
                to: innerPagination.value.rowsPerPage - 1,
                direction
              });
            }
          }
          function onVScroll(info) {
            emit("virtualScroll", info);
          }
          function getProgress() {
            return [
              vue.h(QLinearProgress, {
                class: "q-table__linear-progress",
                color: props.color,
                dark: isDark.value,
                indeterminate: true,
                trackColor: "transparent"
              })
            ];
          }
          function getTBodyTR(row, bodySlot, pageIndex) {
            const key = getRowKey.value(row), selected = isRowSelected(key);
            if (bodySlot !== void 0) {
              return bodySlot(
                getBodyScope({
                  key,
                  row,
                  pageIndex,
                  __trClass: selected ? "selected" : ""
                })
              );
            }
            const bodyCell = slots["body-cell"], child = computedCols.value.map((col) => {
              const bodyCellCol = slots[`body-cell-${col.name}`], slot = bodyCellCol !== void 0 ? bodyCellCol : bodyCell;
              return slot !== void 0 ? slot(getBodyCellScope({ key, row, pageIndex, col })) : vue.h("td", {
                class: col.__tdClass(row),
                style: col.__tdStyle(row)
              }, getCellValue(col, row));
            });
            if (hasSelectionMode.value === true) {
              const slot = slots["body-selection"];
              const content = slot !== void 0 ? slot(getBodySelectionScope({ key, row, pageIndex })) : [
                vue.h(QCheckbox, {
                  modelValue: selected,
                  color: props.color,
                  dark: isDark.value,
                  dense: props.dense,
                  "onUpdate:modelValue": (adding, evt) => {
                    updateSelection([key], [row], adding, evt);
                  }
                })
              ];
              child.unshift(
                vue.h("td", { class: "q-table--col-auto-width" }, content)
              );
            }
            const data = { key, class: { selected } };
            if (props.onRowClick !== void 0) {
              data.class["cursor-pointer"] = true;
              data.onClick = (evt) => {
                emit("RowClick", evt, row, pageIndex);
              };
            }
            if (props.onRowDblclick !== void 0) {
              data.class["cursor-pointer"] = true;
              data.onDblclick = (evt) => {
                emit("RowDblclick", evt, row, pageIndex);
              };
            }
            if (props.onRowContextmenu !== void 0) {
              data.class["cursor-pointer"] = true;
              data.onContextmenu = (evt) => {
                emit("RowContextmenu", evt, row, pageIndex);
              };
            }
            return vue.h("tr", data, child);
          }
          function getTBody() {
            const body = slots.body, topRow = slots["top-row"], bottomRow = slots["bottom-row"];
            let child = computedRows.value.map(
              (row, pageIndex) => getTBodyTR(row, body, pageIndex)
            );
            if (topRow !== void 0) {
              child = topRow({ cols: computedCols.value }).concat(child);
            }
            if (bottomRow !== void 0) {
              child = child.concat(bottomRow({ cols: computedCols.value }));
            }
            return vue.h("tbody", child);
          }
          function getBodyScope(data) {
            injectBodyCommonScope(data);
            data.cols = data.cols.map(
              (col) => injectProp({ ...col }, "value", () => getCellValue(col, data.row))
            );
            return data;
          }
          function getBodyCellScope(data) {
            injectBodyCommonScope(data);
            injectProp(data, "value", () => getCellValue(data.col, data.row));
            return data;
          }
          function getBodySelectionScope(data) {
            injectBodyCommonScope(data);
            return data;
          }
          function injectBodyCommonScope(data) {
            Object.assign(data, {
              cols: computedCols.value,
              colsMap: computedColsMap.value,
              sort,
              rowIndex: firstRowIndex.value + data.pageIndex,
              color: props.color,
              dark: isDark.value,
              dense: props.dense
            });
            hasSelectionMode.value === true && injectProp(
              data,
              "selected",
              () => isRowSelected(data.key),
              (adding, evt) => {
                updateSelection([data.key], [data.row], adding, evt);
              }
            );
            injectProp(
              data,
              "expand",
              () => isRowExpanded(data.key),
              (adding) => {
                updateExpanded(data.key, adding);
              }
            );
          }
          function getCellValue(col, row) {
            const val = typeof col.field === "function" ? col.field(row) : row[col.field];
            return col.format !== void 0 ? col.format(val, row) : val;
          }
          const marginalsScope = vue.computed(() => ({
            pagination: computedPagination.value,
            pagesNumber: pagesNumber.value,
            isFirstPage: isFirstPage.value,
            isLastPage: isLastPage.value,
            firstPage,
            prevPage,
            nextPage,
            lastPage,
            inFullscreen: inFullscreen.value,
            toggleFullscreen
          }));
          function getTopDiv() {
            const top = slots.top, topLeft = slots["top-left"], topRight = slots["top-right"], topSelection = slots["top-selection"], hasSelection = hasSelectionMode.value === true && topSelection !== void 0 && rowsSelectedNumber.value > 0, topClass = "q-table__top relative-position row items-center";
            if (top !== void 0) {
              return vue.h("div", { class: topClass }, [top(marginalsScope.value)]);
            }
            let child;
            if (hasSelection === true) {
              child = topSelection(marginalsScope.value).slice();
            } else {
              child = [];
              if (topLeft !== void 0) {
                child.push(
                  vue.h("div", { class: "q-table__control" }, [
                    topLeft(marginalsScope.value)
                  ])
                );
              } else if (props.title) {
                child.push(
                  vue.h("div", { class: "q-table__control" }, [
                    vue.h("div", {
                      class: ["q-table__title", props.titleClass]
                    }, props.title)
                  ])
                );
              }
            }
            if (topRight !== void 0) {
              child.push(
                vue.h("div", { class: "q-table__separator col" })
              );
              child.push(
                vue.h("div", { class: "q-table__control" }, [
                  topRight(marginalsScope.value)
                ])
              );
            }
            if (child.length === 0) {
              return;
            }
            return vue.h("div", { class: topClass }, child);
          }
          const headerSelectedValue = vue.computed(() => someRowsSelected.value === true ? null : allRowsSelected.value);
          function getTHead() {
            const child = getTHeadTR();
            if (props.loading === true && slots.loading === void 0) {
              child.push(
                vue.h("tr", { class: "q-table__progress" }, [
                  vue.h("th", {
                    class: "relative-position",
                    colspan: computedColspan.value
                  }, getProgress())
                ])
              );
            }
            return vue.h("thead", child);
          }
          function getTHeadTR() {
            const header = slots.header, headerCell = slots["header-cell"];
            if (header !== void 0) {
              return header(
                getHeaderScope({ header: true })
              ).slice();
            }
            const child = computedCols.value.map((col) => {
              const headerCellCol = slots[`header-cell-${col.name}`], slot = headerCellCol !== void 0 ? headerCellCol : headerCell, props2 = getHeaderScope({ col });
              return slot !== void 0 ? slot(props2) : vue.h(QTh, {
                key: col.name,
                props: props2
              }, () => col.label);
            });
            if (singleSelection.value === true && props.grid !== true) {
              child.unshift(
                vue.h("th", { class: "q-table--col-auto-width" }, " ")
              );
            } else if (multipleSelection.value === true) {
              const slot = slots["header-selection"];
              const content = slot !== void 0 ? slot(getHeaderScope({})) : [
                vue.h(QCheckbox, {
                  color: props.color,
                  modelValue: headerSelectedValue.value,
                  dark: isDark.value,
                  dense: props.dense,
                  "onUpdate:modelValue": onMultipleSelectionSet
                })
              ];
              child.unshift(
                vue.h("th", { class: "q-table--col-auto-width" }, content)
              );
            }
            return [
              vue.h("tr", {
                class: props.tableHeaderClass,
                style: props.tableHeaderStyle
              }, child)
            ];
          }
          function getHeaderScope(data) {
            Object.assign(data, {
              cols: computedCols.value,
              sort,
              colsMap: computedColsMap.value,
              color: props.color,
              dark: isDark.value,
              dense: props.dense
            });
            if (multipleSelection.value === true) {
              injectProp(
                data,
                "selected",
                () => headerSelectedValue.value,
                onMultipleSelectionSet
              );
            }
            return data;
          }
          function onMultipleSelectionSet(val) {
            if (someRowsSelected.value === true) {
              val = false;
            }
            updateSelection(
              computedRows.value.map(getRowKey.value),
              computedRows.value,
              val
            );
          }
          const navIcon = vue.computed(() => {
            const ico = [
              props.iconFirstPage || $q.iconSet.table.firstPage,
              props.iconPrevPage || $q.iconSet.table.prevPage,
              props.iconNextPage || $q.iconSet.table.nextPage,
              props.iconLastPage || $q.iconSet.table.lastPage
            ];
            return $q.lang.rtl === true ? ico.reverse() : ico;
          });
          function getBottomDiv() {
            if (props.hideBottom === true) {
              return;
            }
            if (nothingToDisplay.value === true) {
              if (props.hideNoData === true) {
                return;
              }
              const message = props.loading === true ? props.loadingLabel || $q.lang.table.loading : props.filter ? props.noResultsLabel || $q.lang.table.noResults : props.noDataLabel || $q.lang.table.noData;
              const noData = slots["no-data"];
              const children = noData !== void 0 ? [noData({ message, icon: $q.iconSet.table.warning, filter: props.filter })] : [
                vue.h(QIcon, {
                  class: "q-table__bottom-nodata-icon",
                  name: $q.iconSet.table.warning
                }),
                message
              ];
              return vue.h("div", { class: bottomClass + " q-table__bottom--nodata" }, children);
            }
            const bottom = slots.bottom;
            if (bottom !== void 0) {
              return vue.h("div", { class: bottomClass }, [bottom(marginalsScope.value)]);
            }
            const child = props.hideSelectedBanner !== true && hasSelectionMode.value === true && rowsSelectedNumber.value > 0 ? [
              vue.h("div", { class: "q-table__control" }, [
                vue.h("div", [
                  (props.selectedRowsLabel || $q.lang.table.selectedRecords)(rowsSelectedNumber.value)
                ])
              ])
            ] : [];
            if (props.hidePagination !== true) {
              return vue.h("div", {
                class: bottomClass + " justify-end"
              }, getPaginationDiv(child));
            }
            if (child.length !== 0) {
              return vue.h("div", { class: bottomClass }, child);
            }
          }
          function onPagSelection(pag) {
            setPagination({
              page: 1,
              rowsPerPage: pag.value
            });
          }
          function getPaginationDiv(child) {
            let control;
            const { rowsPerPage } = computedPagination.value, paginationLabel = props.paginationLabel || $q.lang.table.pagination, paginationSlot = slots.pagination, hasOpts = props.rowsPerPageOptions.length > 1;
            child.push(
              vue.h("div", { class: "q-table__separator col" })
            );
            if (hasOpts === true) {
              child.push(
                vue.h("div", { class: "q-table__control" }, [
                  vue.h("span", { class: "q-table__bottom-item" }, [
                    props.rowsPerPageLabel || $q.lang.table.recordsPerPage
                  ]),
                  vue.h(QSelect, {
                    class: "q-table__select inline q-table__bottom-item",
                    color: props.color,
                    modelValue: rowsPerPage,
                    options: computedRowsPerPageOptions.value,
                    displayValue: rowsPerPage === 0 ? $q.lang.table.allRows : rowsPerPage,
                    dark: isDark.value,
                    borderless: true,
                    dense: true,
                    optionsDense: true,
                    optionsCover: true,
                    "onUpdate:modelValue": onPagSelection
                  })
                ])
              );
            }
            if (paginationSlot !== void 0) {
              control = paginationSlot(marginalsScope.value);
            } else {
              control = [
                vue.h("span", rowsPerPage !== 0 ? { class: "q-table__bottom-item" } : {}, [
                  rowsPerPage ? paginationLabel(firstRowIndex.value + 1, Math.min(lastRowIndex.value, computedRowsNumber.value), computedRowsNumber.value) : paginationLabel(1, filteredSortedRowsNumber.value, computedRowsNumber.value)
                ])
              ];
              if (rowsPerPage !== 0 && pagesNumber.value > 1) {
                const btnProps = {
                  color: props.color,
                  round: true,
                  dense: true,
                  flat: true
                };
                if (props.dense === true) {
                  btnProps.size = "sm";
                }
                pagesNumber.value > 2 && control.push(
                  vue.h(QBtn, {
                    key: "pgFirst",
                    ...btnProps,
                    icon: navIcon.value[0],
                    disable: isFirstPage.value,
                    onClick: firstPage
                  })
                );
                control.push(
                  vue.h(QBtn, {
                    key: "pgPrev",
                    ...btnProps,
                    icon: navIcon.value[1],
                    disable: isFirstPage.value,
                    onClick: prevPage
                  }),
                  vue.h(QBtn, {
                    key: "pgNext",
                    ...btnProps,
                    icon: navIcon.value[2],
                    disable: isLastPage.value,
                    onClick: nextPage
                  })
                );
                pagesNumber.value > 2 && control.push(
                  vue.h(QBtn, {
                    key: "pgLast",
                    ...btnProps,
                    icon: navIcon.value[3],
                    disable: isLastPage.value,
                    onClick: lastPage
                  })
                );
              }
            }
            child.push(
              vue.h("div", { class: "q-table__control" }, control)
            );
            return child;
          }
          function getGridHeader() {
            const child = props.gridHeader === true ? [
              vue.h("table", { class: "q-table" }, [
                getTHead()
              ])
            ] : props.loading === true && slots.loading === void 0 ? getProgress() : void 0;
            return vue.h("div", { class: "q-table__middle" }, child);
          }
          function getGridBody() {
            const item = slots.item !== void 0 ? slots.item : (scope) => {
              const child = scope.cols.map(
                (col) => vue.h("div", { class: "q-table__grid-item-row" }, [
                  vue.h("div", { class: "q-table__grid-item-title" }, [col.label]),
                  vue.h("div", { class: "q-table__grid-item-value" }, [col.value])
                ])
              );
              if (hasSelectionMode.value === true) {
                const slot = slots["body-selection"];
                const content = slot !== void 0 ? slot(scope) : [
                  vue.h(QCheckbox, {
                    modelValue: scope.selected,
                    color: props.color,
                    dark: isDark.value,
                    dense: props.dense,
                    "onUpdate:modelValue": (adding, evt) => {
                      updateSelection([scope.key], [scope.row], adding, evt);
                    }
                  })
                ];
                child.unshift(
                  vue.h("div", { class: "q-table__grid-item-row" }, content),
                  vue.h(QSeparator, { dark: isDark.value })
                );
              }
              const data = {
                class: [
                  "q-table__grid-item-card" + cardDefaultClass.value,
                  props.cardClass
                ],
                style: props.cardStyle
              };
              if (props.onRowClick !== void 0 || props.onRowDblclick !== void 0) {
                data.class[0] += " cursor-pointer";
                if (props.onRowClick !== void 0) {
                  data.onClick = (evt) => {
                    emit("RowClick", evt, scope.row, scope.pageIndex);
                  };
                }
                if (props.onRowDblclick !== void 0) {
                  data.onDblclick = (evt) => {
                    emit("RowDblclick", evt, scope.row, scope.pageIndex);
                  };
                }
              }
              return vue.h("div", {
                class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (scope.selected === true ? " q-table__grid-item--selected" : "")
              }, [
                vue.h("div", data, child)
              ]);
            };
            return vue.h("div", {
              class: [
                "q-table__grid-content row",
                props.cardContainerClass
              ],
              style: props.cardContainerStyle
            }, computedRows.value.map((row, pageIndex) => {
              return item(getBodyScope({
                key: getRowKey.value(row),
                row,
                pageIndex
              }));
            }));
          }
          Object.assign(vm.proxy, {
            requestServerInteraction,
            setPagination,
            firstPage,
            prevPage,
            nextPage,
            lastPage,
            isRowSelected,
            clearSelection: clearSelection2,
            isRowExpanded,
            setExpanded,
            sort,
            resetVirtualScroll,
            scrollTo,
            getCellValue
          });
          injectMultipleProps(vm.proxy, {
            filteredSortedRows: () => filteredSortedRows.value,
            computedRows: () => computedRows.value,
            computedRowsNumber: () => computedRowsNumber.value
          });
          return () => {
            const child = [getTopDiv()];
            const data = { ref: rootRef, class: containerClass.value };
            if (props.grid === true) {
              child.push(getGridHeader());
            } else {
              Object.assign(data, {
                class: [data.class, props.cardClass],
                style: props.cardStyle
              });
            }
            child.push(
              getBody(),
              getBottomDiv()
            );
            if (props.loading === true && slots.loading !== void 0) {
              child.push(
                slots.loading()
              );
            }
            return vue.h("div", data, child);
          };
        }
      });
      function isReload(msg) {
        if (msg === "抱歉，请先登录" || msg === "抱歉，操作频繁，请验证后再试") {
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
        }
      }
      function successNotify(msg) {
        Notify.create({
          color: "green",
          message: msg
        });
        isReload(msg);
      }
      function errNotify(msg) {
        Notify.create({
          color: "red",
          message: msg
        });
        isReload(msg);
      }
      function warningNotify(msg) {
        Notify.create({
          color: "orange",
          message: msg
        });
        isReload(msg);
      }
      function infoNotify(msg) {
        Notify.create({
          color: "teal",
          message: msg
        });
        isReload(msg);
      }
      function clockNotification(row) {
        if (row.clock) {
          row.clock = false;
          if (row.clockTimer)
            clearTimeout(row.clockTimer);
          successNotify(`已取消 [ ${row.goods_name} ] 公示期提醒`);
          return;
        }
        const now = (/* @__PURE__ */ new Date()).getTime();
        const clockTime = (row == null ? void 0 : row.end_time) ? row.end_time - 2 * 60 * 1e3 : 0;
        const isShowNotify = clockTime > now;
        const delayInMilliseconds = clockTime - now;
        const info = "公示期还有 2 分钟结束";
        if ("Notification" in window) {
          if (!isShowNotify) {
            if (now - clockTime > 2 * 60 * 1e3)
              warningNotify("公示期已结束，无法提醒");
            else
              warningNotify(`公示期仅剩${Math.floor((now - clockTime) / 1e3)}秒，请认真等待`);
            return;
          }
          if (Notification.permission === "granted") {
            successNotify(`将在 ${new Date((/* @__PURE__ */ new Date()).getTime() + delayInMilliseconds).toLocaleString()} 时提醒您，请勿刷新或关闭网页。`);
            sendNotification(row, info, delayInMilliseconds);
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                successNotify(`将在 ${new Date((/* @__PURE__ */ new Date()).getTime() + delayInMilliseconds).toLocaleString()} 时提醒您，请勿刷新或关闭网页。`);
                sendNotification(row, info, delayInMilliseconds);
              } else {
                warningNotify("您拒绝了通知权限，将无法收到提醒");
              }
            });
          } else {
            warningNotify("您拒绝了通知权限，将无法收到提醒");
          }
        } else {
          warningNotify("浏览器不支持通知");
        }
      }
      function sendNotification(row, info, delayInMilliseconds, timeout = 30 * 1e3) {
        row.clock = true;
        const title = row.goods_name;
        const icon = row.goods_icon_url;
        let notification;
        row.clockTimer = setTimeout(() => {
          notification = new Notification(title, {
            body: info,
            icon
            // 可选，指定通知图标
          });
          setTimeout(() => {
            notification.close();
          }, timeout);
        }, delayInMilliseconds);
      }
      function todo() {
        Notify.create({
          color: "green",
          message: `先放个饼在这，不许吃。`
        });
      }
      function sendEndOfPeriodNotification(info, single_unit_price, remaining_time, thumb) {
        if ("Notification" in window) {
          if (Notification.permission === "granted") {
            const notification = new Notification("公示期即将结束", {
              body: `商品：${info}，价格：${+single_unit_price / 100}，公示期剩余时间：${remaining_time} s`,
              icon: thumb
              // 可选，指定通知图标
            });
            setTimeout(() => {
              notification.close();
            }, 5 * 1e3);
          }
        }
      }
      var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
      var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
      function getTs() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
      function getReqId(length = 32) {
        const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charactersLength = characters.length;
        let randomString = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charactersLength);
          randomString += characters[randomIndex];
        }
        return randomString;
      }
      function handlingErrors(e, msg) {
        if (e instanceof Error)
          errNotify(msg || `${e.message}`);
        else
          errNotify("未知错误");
      }
      function isHaveRole(goods_type = 3) {
        if (goods_type === 2)
          return true;
        const role = document.querySelector(".app-web-components-head-components-UserInfo-components-RoleInfoHandler-index-m__secondaryColor--1-yHP");
        if (role && role.textContent === "请选择角色") {
          warningNotify("请先选择角色");
          role.click();
        }
        return role.textContent !== "请选择角色";
      }
      function isLogin() {
        const login = document.querySelector(".app-web-components-head-components-UserInfo-index-m__displayFlex--1BN9a .app-web-components-auth-handler-index-m__authWrapper--28yCW");
        if (login && (login == null ? void 0 : login.textContent) === "登录") {
          warningNotify("请先登录");
          login.click();
        }
        return !(login && login.textContent === "登录");
      }
      function setLocalStorage(key, value) {
        try {
          _GM_setValue(key, value);
        } catch (e) {
          console.error("localStorage set error: ", e);
        }
      }
      function getLocalStorage(key, defaultValue = null) {
        try {
          return _GM_getValue(key, defaultValue);
        } catch (e) {
          console.error("localStorage get error: ", e);
          return defaultValue;
        }
      }
      const httpWithErr = async function customFetch(url, options, isTrowErr = true) {
        const defaultOptions = {
          method: "GET",
          credentials: "include",
          // 携带跨域Cookie
          headers: {
            "Content-Type": "application/json"
          }
          // 其他选项可以根据需要添加
        };
        options = { ...defaultOptions, ...options };
        let response;
        try {
          response = await fetch(url, options);
        } catch (error) {
          handlingErrors(error);
          return;
        }
        if (!response.ok) {
          handlingErrors(new Error(`${response.status} ${response.statusText}`));
          return;
        }
        const data = await response.json();
        if (isTrowErr) {
          return data;
        } else if ((data == null ? void 0 : data.code) !== 1) {
          handlingErrors(new Error(`${data.msg}`));
          return;
        }
        return data;
      };
      const http = async function customFetch2(url, options) {
        return httpWithErr(url, options, false);
      };
      const baseUrl = "https://trade-api.seasunwbl.com";
      const apis = {
        // 前置验证
        pre_auth: { url: `${baseUrl}/api/platform/captcha/pre_auth`, type: "GET" },
        // 我的关注列表
        follow_list: { url: `${baseUrl}/api/passport/follow/list`, type: "GET" },
        // 获取商品详细信息
        detail_info: { url: `${baseUrl}/api/buyer/goods/detail`, type: "GET" },
        // 创建订单
        create_order: { url: `${baseUrl}/api/buyer/order/create`, type: "POST" },
        // 支付
        pay: { url: `${baseUrl}/api/buyer/order/pay`, type: "GET" },
        // 获取附加服务费
        additional_service: { url: `${baseUrl}/api/buyer/goods/additional_service`, type: "GET" },
        // 获取交易数据
        trade_data: { url: `${baseUrl}/api/buyer/goods/trade_data`, type: "GET" },
        // 添加关注
        follow_add: { url: `${baseUrl}/api/passport/follow/add`, type: "GET" },
        // 取消关注
        cancel_follow: { url: `${baseUrl}/api/passport/follow/cancel`, type: "GET" },
        // 获取商品列表
        goods_list: { url: `${baseUrl}/api/buyer/goods/list`, type: "GET" },
        // 获取订单状态
        order_status: { url: `${baseUrl}/api/buyer/order/status`, type: "GET" }
      };
      function getCaptchaPreAuthApi() {
        return http(`${apis.pre_auth.url}?version=v5&__ts__=${getTs()}`);
      }
      function getMyFollowList() {
        return http(`${apis.follow_list.url}?req_id=${getReqId()}&game_id=jx3&__ts__=${getTs()}`);
      }
      function cancelFollowApi(id, goods_type) {
        return http(`${apis.cancel_follow.url}?req_id=${getReqId()}&game_id=jx3&consignment_id_list%5B0%5D=${id}&goods_type=${goods_type}&__ts__=${getTs()}`);
      }
      function addFollowApi(id, goods_type) {
        return http(`${apis.follow_add.url}?req_id=${getReqId()}&game_id=jx3&consignment_id=${id}&type=${goods_type}&__ts__=${getTs()}`);
      }
      function createOrderApi(row, geetestObj2, type, additionalServiceSum2, transferServiceObj2, additionalService2) {
        const service_fee_info = {
          separation_service_fee: 0,
          transfer_service_fee: 0
        };
        const consignee_info = {
          zone_id: row.zone_id,
          server_id: row.server_id
        };
        let role_transfer_agm = 0;
        if (type === 2) {
          additionalService2 == null ? void 0 : additionalService2.filter((item) => item.selected).forEach((item) => {
            if (item.name === "transfer_service") {
              role_transfer_agm = 1;
              consignee_info.zone_id = (transferServiceObj2 == null ? void 0 : transferServiceObj2.zone_id) || row.zone_id;
              consignee_info.server_id = (transferServiceObj2 == null ? void 0 : transferServiceObj2.server_id) || row.server_id;
              service_fee_info.transfer_service_fee = (transferServiceObj2 == null ? void 0 : transferServiceObj2.value) || 0;
            } else if (item.name === "separation_service") {
              service_fee_info.separation_service_fee = item.value;
            } else if (item.name === "change_group_service") {
              consignee_info.is_change_group = 1;
              service_fee_info.change_group_service_fee = item.value;
            }
          });
        }
        const orderInfo = {
          req_id: getReqId(),
          buy_type: 0,
          total_price: row.single_unit_price + additionalServiceSum2,
          total_quantity: 1,
          total_unit_count: 1,
          order_type: type,
          service_fee_info,
          consignee_info,
          list: [
            {
              count: 1,
              id: row.consignment_id
            }
          ],
          ...geetestObj2
        };
        if (role_transfer_agm === 1)
          orderInfo.role_transfer_agm = role_transfer_agm;
        return httpWithErr(apis.create_order.url, {
          method: apis.create_order.type,
          body: JSON.stringify(orderInfo)
        });
      }
      function getDetailInfoApi(consignment_id, type) {
        return http(`${apis.detail_info.url}?req_id=${getReqId()}&consignment_id=${consignment_id}&goods_type=${type}`);
      }
      function getAdditionalServiceApi(consignment_id) {
        return http(`${apis.additional_service.url}?req_id=${getReqId()}&game_id=jx3&consignment_id=${consignment_id}&goods_type=2&__ts__=${getTs()}`);
      }
      function payApi(orderId, type) {
        return http(`${apis.pay.url}?req_id=${getReqId()}&order_id=${orderId}&pay_way_code=alipay_qr&order_type=${type}`);
      }
      function getOrderStatusApi(orderId, orderType) {
        return http(`${apis.order_status.url}?req_id=${getReqId()}&game_id=jx3&order_id=${orderId}&order_type=${orderType}&__ts__=${getTs()}`);
      }
      function addSuccessCount() {
        const img = new Image();
        img.src = "https://moe-counter.glitch.me/get/@xiaoruanruan?theme=gelbooru";
        img.remove();
      }
      const robTableLoading = vue.ref(false);
      const columns = [
        { name: "consignment_id", align: "left", label: "id", field: "consignment_id", style: "width:170px" },
        { name: "name", label: "商品", align: "center", field: "goods_name" },
        {
          name: "goodsType",
          align: "left",
          label: "类型",
          field: "goods_type_name",
          sortable: true,
          format: (val, row) => `${val}${row.role_sect}`
        },
        { name: "state", align: "center", sortable: true, label: "状态", field: "state" },
        {
          name: "goods_price",
          label: "价格",
          field: "goods_price",
          align: "left",
          sortable: true,
          sort: (a, b) => a - b
        },
        {
          name: "date",
          label: "结束时间",
          field: "remaining_time",
          format: (val) => val === 0 ? "已失效" : new Date((/* @__PURE__ */ new Date()).getTime() + val * 1e3).toLocaleString(),
          classes: (row) => row.remaining_time < 300 && row.remaining_time > 0 ? "text-red" : "",
          sortable: true
        },
        { name: "action", label: "操作", field: "action", align: "center", headerStyle: "width: 170px" }
      ];
      const rows = vue.ref([]);
      async function getList() {
        robTableLoading.value = true;
        const followList = await getMyFollowList();
        if (followList) {
          const goods2 = followList.data.follow[2].list;
          const goods3 = followList.data.follow[3].list;
          const statePriority = {
            5: 1,
            // 在售期
            3: 2,
            // 公示期
            6: 3,
            // 已售出
            7: 4
            // 已下架
          };
          rows.value = [...goods2, ...goods3].sort((a, b) => {
            if (a.state !== b.state)
              return statePriority[a.state] - statePriority[b.state];
            return a.remaining_time - b.remaining_time;
          }).map((item) => ({ ...item, end_time: (/* @__PURE__ */ new Date()).getTime() + item.remaining_time * 1e3, clock: false }));
        } else {
          rows.value = [];
        }
        robTableLoading.value = false;
      }
      const inputFollowId = vue.ref("");
      function useAction() {
        const cancelFollow = async (id, goodsType) => {
          const res = await cancelFollowApi(id, goodsType);
          if ((res == null ? void 0 : res.code) === 1) {
            rows.value = rows.value.filter((item) => item.consignment_id !== id);
            successNotify("已成功取消关注");
          }
        };
        const cancelAllInvalidFollowLoading = vue.ref(false);
        const cancelAllInvalidFollow = async () => {
          cancelAllInvalidFollowLoading.value = true;
          const invalidList = rows.value.filter((item) => item.state === 6 || item.state === 7);
          if (invalidList.length === 0) {
            warningNotify("没有失效的商品");
            cancelAllInvalidFollowLoading.value = false;
            return;
          }
          for (const [index, item] of invalidList.entries()) {
            await cancelFollow(item.consignment_id, item.type);
            if (index !== invalidList.length - 1)
              await new Promise((resolve) => setTimeout(resolve, 2e3));
          }
          successNotify("已成功取消所有失效商品的关注");
          cancelAllInvalidFollowLoading.value = false;
        };
        const addFollow = async (goodsType) => {
          inputFollowId.value = inputFollowId.value.trim();
          if (!inputFollowId.value) {
            warningNotify("商品id不能为空");
            return;
          } else if (!/^\d{19}$/.test(inputFollowId.value)) {
            warningNotify("商品id格式错误");
            return;
          }
          const res = await addFollowApi(inputFollowId.value, goodsType);
          if ((res == null ? void 0 : res.code) === 1) {
            successNotify("已成功添加关注");
            inputFollowId.value = "";
            await getList();
          }
        };
        return { cancelFollow, addFollow, inputFollowId, cancelAllInvalidFollow, cancelAllInvalidFollowLoading };
      }
      const isShowRob = vue.ref(false);
      function useRob() {
        const openRob = async () => {
          if (isLogin()) {
            await getList();
            isShowRob.value = true;
          }
        };
        const closeRob2 = () => {
          isShowRob.value = false;
        };
        return { openRob, isShowRob, closeRob: closeRob2 };
      }
      const QBtnGroup = createComponent({
        name: "QBtnGroup",
        props: {
          unelevated: Boolean,
          outline: Boolean,
          flat: Boolean,
          rounded: Boolean,
          square: Boolean,
          push: Boolean,
          stretch: Boolean,
          glossy: Boolean,
          spread: Boolean
        },
        setup(props, { slots }) {
          const classes = vue.computed(() => {
            const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
            return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
          });
          return () => vue.h("div", { class: classes.value }, hSlot(slots.default));
        }
      });
      const QBtnToggle = createComponent({
        name: "QBtnToggle",
        props: {
          ...useFormProps,
          modelValue: {
            required: true
          },
          options: {
            type: Array,
            required: true,
            validator: (v) => v.every(
              (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
            )
          },
          // To avoid seeing the active raise shadow through
          // the transparent button, give it a color (even white)
          color: String,
          textColor: String,
          toggleColor: {
            type: String,
            default: "primary"
          },
          toggleTextColor: String,
          outline: Boolean,
          flat: Boolean,
          unelevated: Boolean,
          rounded: Boolean,
          push: Boolean,
          glossy: Boolean,
          size: String,
          padding: String,
          noCaps: Boolean,
          noWrap: Boolean,
          dense: Boolean,
          readonly: Boolean,
          disable: Boolean,
          stack: Boolean,
          stretch: Boolean,
          spread: Boolean,
          clearable: Boolean,
          ripple: {
            type: [Boolean, Object],
            default: true
          }
        },
        emits: ["update:modelValue", "clear", "click"],
        setup(props, { slots, emit }) {
          const hasActiveValue = vue.computed(
            () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
          );
          const formAttrs = vue.computed(() => ({
            type: "hidden",
            name: props.name,
            value: props.modelValue
          }));
          const injectFormInput = useFormInject(formAttrs);
          const btnDesignAttr = vue.computed(() => getBtnDesignAttr(props));
          const btnOptionDesign = vue.computed(() => ({
            rounded: props.rounded,
            dense: props.dense,
            ...btnDesignAttr.value
          }));
          const btnOptions = vue.computed(() => props.options.map((item, i) => {
            const { attrs, value, slot, ...opt } = item;
            return {
              slot,
              props: {
                key: i,
                "aria-pressed": value === props.modelValue ? "true" : "false",
                ...attrs,
                ...opt,
                ...btnOptionDesign.value,
                disable: props.disable === true || opt.disable === true,
                // Options that come from the button specific options first, then from general props
                color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
                textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
                noCaps: mergeOpt(opt, "noCaps") === true,
                noWrap: mergeOpt(opt, "noWrap") === true,
                size: mergeOpt(opt, "size"),
                padding: mergeOpt(opt, "padding"),
                ripple: mergeOpt(opt, "ripple"),
                stack: mergeOpt(opt, "stack") === true,
                stretch: mergeOpt(opt, "stretch") === true,
                onClick(e) {
                  set(value, item, e);
                }
              }
            };
          }));
          function set(value, opt, e) {
            if (props.readonly !== true) {
              if (props.modelValue === value) {
                if (props.clearable === true) {
                  emit("update:modelValue", null, null);
                  emit("clear");
                }
              } else {
                emit("update:modelValue", value, opt);
              }
              emit("click", e);
            }
          }
          function mergeOpt(opt, key) {
            return opt[key] === void 0 ? props[key] : opt[key];
          }
          function getContent() {
            const child = btnOptions.value.map((opt) => {
              return vue.h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
            });
            if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
              injectFormInput(child, "push");
            }
            return hMergeSlot(slots.default, child);
          }
          return () => vue.h(QBtnGroup, {
            class: "q-btn-toggle",
            ...btnDesignAttr.value,
            rounded: props.rounded,
            stretch: props.stretch,
            glossy: props.glossy,
            spread: props.spread
          }, getContent);
        }
      });
      const NAMED_MASKS = {
        date: "####/##/##",
        datetime: "####/##/## ##:##",
        time: "##:##",
        fulltime: "##:##:##",
        phone: "(###) ### - ####",
        card: "#### #### #### ####"
      };
      const TOKENS = {
        "#": { pattern: "[\\d]", negate: "[^\\d]" },
        S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
        N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
        A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
        a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
        X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
        x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
      };
      const KEYS = Object.keys(TOKENS);
      KEYS.forEach((key) => {
        TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
      });
      const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
      const MARKER = String.fromCharCode(1);
      const useMaskProps = {
        mask: String,
        reverseFillMask: Boolean,
        fillMask: [Boolean, String],
        unmaskedValue: Boolean
      };
      function useMask(props, emit, emitValue, inputRef) {
        let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
        const hasMask = vue.ref(null);
        const innerValue = vue.ref(getInitialMaskedValue());
        function getIsTypeText() {
          return props.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props.type);
        }
        vue.watch(() => props.type + props.autogrow, updateMaskInternals);
        vue.watch(() => props.mask, (v) => {
          if (v !== void 0) {
            updateMaskValue(innerValue.value, true);
          } else {
            const val = unmaskValue(innerValue.value);
            updateMaskInternals();
            props.modelValue !== val && emit("update:modelValue", val);
          }
        });
        vue.watch(() => props.fillMask + props.reverseFillMask, () => {
          hasMask.value === true && updateMaskValue(innerValue.value, true);
        });
        vue.watch(() => props.unmaskedValue, () => {
          hasMask.value === true && updateMaskValue(innerValue.value);
        });
        function getInitialMaskedValue() {
          updateMaskInternals();
          if (hasMask.value === true) {
            const masked = maskValue(unmaskValue(props.modelValue));
            return props.fillMask !== false ? fillWithMask(masked) : masked;
          }
          return props.modelValue;
        }
        function getPaddedMaskMarked(size2) {
          if (size2 < maskMarked.length) {
            return maskMarked.slice(-size2);
          }
          let pad = "", localMaskMarked = maskMarked;
          const padPos = localMaskMarked.indexOf(MARKER);
          if (padPos !== -1) {
            for (let i = size2 - localMaskMarked.length; i > 0; i--) {
              pad += MARKER;
            }
            localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
          }
          return localMaskMarked;
        }
        function updateMaskInternals() {
          hasMask.value = props.mask !== void 0 && props.mask.length !== 0 && getIsTypeText();
          if (hasMask.value === false) {
            computedUnmask = void 0;
            maskMarked = "";
            maskReplaced = "";
            return;
          }
          const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
          let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
          localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
            if (token !== void 0) {
              const c = TOKENS[token];
              mask.push(c);
              negateChar = c.negate;
              if (firstMatch === true) {
                extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
                firstMatch = false;
              }
              extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
            } else if (esc !== void 0) {
              unmaskChar = "\\" + (esc === "\\" ? "" : esc);
              mask.push(esc);
              unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
            } else {
              const c = char1 !== void 0 ? char1 : char2;
              unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
              mask.push(c);
              unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
            }
          });
          const unmaskMatcher = new RegExp(
            "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
          ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
            if (index === 0 && props.reverseFillMask === true) {
              return new RegExp("^" + fillCharEscaped + "*" + re);
            } else if (index === extractLast) {
              return new RegExp(
                "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*")
              );
            }
            return new RegExp("^" + re);
          });
          computedMask = mask;
          computedUnmask = (val) => {
            const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
            if (unmaskMatch !== null) {
              val = unmaskMatch.slice(1).join("");
            }
            const extractMatch = [], extractMatcherLength = extractMatcher.length;
            for (let i = 0, str = val; i < extractMatcherLength; i++) {
              const m = extractMatcher[i].exec(str);
              if (m === null) {
                break;
              }
              str = str.slice(m.shift().length);
              extractMatch.push(...m);
            }
            if (extractMatch.length !== 0) {
              return extractMatch.join("");
            }
            return val;
          };
          maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
          maskReplaced = maskMarked.split(MARKER).join(fillChar);
        }
        function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
          const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
          updateMaskInternalsFlag === true && updateMaskInternals();
          const preMasked = maskValue(unmasked), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
          inp.value !== masked && (inp.value = masked);
          changed === true && (innerValue.value = masked);
          document.activeElement === inp && vue.nextTick(() => {
            if (masked === maskReplaced) {
              const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
              inp.setSelectionRange(cursor, cursor, "forward");
              return;
            }
            if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
              const maxEnd = inp.selectionEnd;
              let cursor = end - 1;
              for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
                if (maskMarked[i] !== MARKER) {
                  cursor++;
                }
              }
              moveCursor.right(inp, cursor);
              return;
            }
            if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) !== -1) {
              const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
              inp.setSelectionRange(cursor, cursor, "forward");
              return;
            }
            if (props.reverseFillMask === true) {
              if (changed === true) {
                const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
                if (cursor === 1 && end === 1) {
                  inp.setSelectionRange(cursor, cursor, "forward");
                } else {
                  moveCursor.rightReverse(inp, cursor);
                }
              } else {
                const cursor = masked.length - endReverse;
                inp.setSelectionRange(cursor, cursor, "backward");
              }
            } else {
              if (changed === true) {
                const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
                moveCursor.right(inp, cursor);
              } else {
                const cursor = end - 1;
                moveCursor.right(inp, cursor);
              }
            }
          });
          const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
          if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) {
            emitValue(val, true);
          }
        }
        function moveCursorForPaste(inp, start, end) {
          const preMasked = maskValue(unmaskValue(inp.value));
          start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
          pastedTextStart = start;
          inp.setSelectionRange(start, end, "forward");
        }
        const moveCursor = {
          left(inp, cursor) {
            const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
            let i = Math.max(0, cursor - 1);
            for (; i >= 0; i--) {
              if (maskMarked[i] === MARKER) {
                cursor = i;
                noMarkBefore === true && cursor++;
                break;
              }
            }
            if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) {
              return moveCursor.right(inp, 0);
            }
            cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
          },
          right(inp, cursor) {
            const limit = inp.value.length;
            let i = Math.min(limit, cursor + 1);
            for (; i <= limit; i++) {
              if (maskMarked[i] === MARKER) {
                cursor = i;
                break;
              } else if (maskMarked[i - 1] === MARKER) {
                cursor = i;
              }
            }
            if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) {
              return moveCursor.left(inp, limit);
            }
            inp.setSelectionRange(cursor, cursor, "forward");
          },
          leftReverse(inp, cursor) {
            const localMaskMarked = getPaddedMaskMarked(inp.value.length);
            let i = Math.max(0, cursor - 1);
            for (; i >= 0; i--) {
              if (localMaskMarked[i - 1] === MARKER) {
                cursor = i;
                break;
              } else if (localMaskMarked[i] === MARKER) {
                cursor = i;
                if (i === 0) {
                  break;
                }
              }
            }
            if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) {
              return moveCursor.rightReverse(inp, 0);
            }
            cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
          },
          rightReverse(inp, cursor) {
            const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
            let i = Math.min(limit, cursor + 1);
            for (; i <= limit; i++) {
              if (localMaskMarked[i - 1] === MARKER) {
                cursor = i;
                cursor > 0 && noMarkBefore === true && cursor--;
                break;
              }
            }
            if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) {
              return moveCursor.leftReverse(inp, limit);
            }
            inp.setSelectionRange(cursor, cursor, "forward");
          }
        };
        function onMaskedClick(e) {
          emit("click", e);
          selectionAnchor = void 0;
        }
        function onMaskedKeydown(e) {
          emit("keydown", e);
          if (shouldIgnoreKey(e) === true || e.altKey === true) {
            return;
          }
          const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
          if (!e.shiftKey) {
            selectionAnchor = void 0;
          }
          if (e.keyCode === 37 || e.keyCode === 39) {
            if (e.shiftKey && selectionAnchor === void 0) {
              selectionAnchor = inp.selectionDirection === "forward" ? start : end;
            }
            const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
            e.preventDefault();
            fn(inp, selectionAnchor === start ? end : start);
            if (e.shiftKey) {
              const cursor = inp.selectionStart;
              inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
            }
          } else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
            moveCursor.left(inp, start);
            inp.setSelectionRange(inp.selectionStart, end, "backward");
          } else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
            moveCursor.rightReverse(inp, end);
            inp.setSelectionRange(start, inp.selectionEnd, "forward");
          }
        }
        function maskValue(val) {
          if (val === void 0 || val === null || val === "") {
            return "";
          }
          if (props.reverseFillMask === true) {
            return maskValueReverse(val);
          }
          const mask = computedMask;
          let valIndex = 0, output = "";
          for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
            const valChar = val[valIndex], maskDef = mask[maskIndex];
            if (typeof maskDef === "string") {
              output += maskDef;
              valChar === maskDef && valIndex++;
            } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
              output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
              valIndex++;
            } else {
              return output;
            }
          }
          return output;
        }
        function maskValueReverse(val) {
          const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
          let valIndex = val.length - 1, output = "";
          for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
            const maskDef = mask[maskIndex];
            let valChar = val[valIndex];
            if (typeof maskDef === "string") {
              output = maskDef + output;
              valChar === maskDef && valIndex--;
            } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
              do {
                output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
                valIndex--;
                valChar = val[valIndex];
              } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
            } else {
              return output;
            }
          }
          return output;
        }
        function unmaskValue(val) {
          return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
        }
        function fillWithMask(val) {
          if (maskReplaced.length - val.length <= 0) {
            return val;
          }
          return props.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
        }
        return {
          innerValue,
          hasMask,
          moveCursorForPaste,
          updateMaskValue,
          onMaskedKeydown,
          onMaskedClick
        };
      }
      function useFileFormDomProps(props, typeGuard) {
        function getFormDomProps() {
          const model = props.modelValue;
          try {
            const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
            if (Object(model) === model) {
              ("length" in model ? Array.from(model) : [model]).forEach((file) => {
                dt.items.add(file);
              });
            }
            return {
              files: dt.files
            };
          } catch (e) {
            return {
              files: void 0
            };
          }
        }
        return typeGuard === true ? vue.computed(() => {
          if (props.type !== "file") {
            return;
          }
          return getFormDomProps();
        }) : vue.computed(getFormDomProps);
      }
      const QInput = createComponent({
        name: "QInput",
        inheritAttrs: false,
        props: {
          ...useFieldProps,
          ...useMaskProps,
          ...useFormProps,
          modelValue: { required: false },
          shadowText: String,
          type: {
            type: String,
            default: "text"
          },
          debounce: [String, Number],
          autogrow: Boolean,
          // makes a textarea
          inputClass: [Array, String, Object],
          inputStyle: [Array, String, Object]
        },
        emits: [
          ...useFieldEmits,
          "paste",
          "change",
          "keydown",
          "click",
          "animationend"
        ],
        setup(props, { emit, attrs }) {
          const { proxy } = vue.getCurrentInstance();
          const { $q } = proxy;
          const temp = {};
          let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
          const inputRef = vue.ref(null);
          const nameProp = useFormInputNameAttr(props);
          const {
            innerValue,
            hasMask,
            moveCursorForPaste,
            updateMaskValue,
            onMaskedKeydown,
            onMaskedClick
          } = useMask(props, emit, emitValue, inputRef);
          const formDomProps = useFileFormDomProps(
            props,
            /* type guard */
            true
          );
          const hasValue = vue.computed(() => fieldValueIsFilled(innerValue.value));
          const onComposition = useKeyComposition(onInput);
          const state = useFieldState();
          const isTextarea = vue.computed(
            () => props.type === "textarea" || props.autogrow === true
          );
          const isTypeText = vue.computed(
            () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props.type)
          );
          const onEvents = vue.computed(() => {
            const evt = {
              ...state.splitAttrs.listeners.value,
              onInput,
              onPaste,
              // Safari < 10.2 & UIWebView doesn't fire compositionend when
              // switching focus before confirming composition choice
              // this also fixes the issue where some browsers e.g. iOS Chrome
              // fires "change" instead of "input" on autocomplete.
              onChange,
              onBlur: onFinishEditing,
              onFocus: stop
            };
            evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
            if (hasMask.value === true) {
              evt.onKeydown = onMaskedKeydown;
              evt.onClick = onMaskedClick;
            }
            if (props.autogrow === true) {
              evt.onAnimationend = onAnimationend;
            }
            return evt;
          });
          const inputAttrs = vue.computed(() => {
            const attrs2 = {
              tabindex: 0,
              "data-autofocus": props.autofocus === true || void 0,
              rows: props.type === "textarea" ? 6 : void 0,
              "aria-label": props.label,
              name: nameProp.value,
              ...state.splitAttrs.attributes.value,
              id: state.targetUid.value,
              maxlength: props.maxlength,
              disabled: props.disable === true,
              readonly: props.readonly === true
            };
            if (isTextarea.value === false) {
              attrs2.type = props.type;
            }
            if (props.autogrow === true) {
              attrs2.rows = 1;
            }
            return attrs2;
          });
          vue.watch(() => props.type, () => {
            if (inputRef.value) {
              inputRef.value.value = props.modelValue;
            }
          });
          vue.watch(() => props.modelValue, (v) => {
            if (hasMask.value === true) {
              if (stopValueWatcher === true) {
                stopValueWatcher = false;
                if (String(v) === emitCachedValue) {
                  return;
                }
              }
              updateMaskValue(v);
            } else if (innerValue.value !== v) {
              innerValue.value = v;
              if (props.type === "number" && temp.hasOwnProperty("value") === true) {
                if (typedNumber === true) {
                  typedNumber = false;
                } else {
                  delete temp.value;
                }
              }
            }
            props.autogrow === true && vue.nextTick(adjustHeight);
          });
          vue.watch(() => props.autogrow, (val) => {
            if (val === true) {
              vue.nextTick(adjustHeight);
            } else if (inputRef.value !== null && attrs.rows > 0) {
              inputRef.value.style.height = "auto";
            }
          });
          vue.watch(() => props.dense, () => {
            props.autogrow === true && vue.nextTick(adjustHeight);
          });
          function focus() {
            addFocusFn(() => {
              const el = document.activeElement;
              if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
                inputRef.value.focus({ preventScroll: true });
              }
            });
          }
          function select() {
            inputRef.value !== null && inputRef.value.select();
          }
          function onPaste(e) {
            if (hasMask.value === true && props.reverseFillMask !== true) {
              const inp = e.target;
              moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
            }
            emit("paste", e);
          }
          function onInput(e) {
            if (!e || !e.target) {
              return;
            }
            if (props.type === "file") {
              emit("update:modelValue", e.target.files);
              return;
            }
            const val = e.target.value;
            if (e.target.qComposing === true) {
              temp.value = val;
              return;
            }
            if (hasMask.value === true) {
              updateMaskValue(val, false, e.inputType);
            } else {
              emitValue(val);
              if (isTypeText.value === true && e.target === document.activeElement) {
                const { selectionStart, selectionEnd } = e.target;
                if (selectionStart !== void 0 && selectionEnd !== void 0) {
                  vue.nextTick(() => {
                    if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                      e.target.setSelectionRange(selectionStart, selectionEnd);
                    }
                  });
                }
              }
            }
            props.autogrow === true && adjustHeight();
          }
          function onAnimationend(e) {
            emit("animationend", e);
            adjustHeight();
          }
          function emitValue(val, stopWatcher) {
            emitValueFn = () => {
              emitTimer = null;
              if (props.type !== "number" && temp.hasOwnProperty("value") === true) {
                delete temp.value;
              }
              if (props.modelValue !== val && emitCachedValue !== val) {
                emitCachedValue = val;
                stopWatcher === true && (stopValueWatcher = true);
                emit("update:modelValue", val);
                vue.nextTick(() => {
                  emitCachedValue === val && (emitCachedValue = NaN);
                });
              }
              emitValueFn = void 0;
            };
            if (props.type === "number") {
              typedNumber = true;
              temp.value = val;
            }
            if (props.debounce !== void 0) {
              emitTimer !== null && clearTimeout(emitTimer);
              temp.value = val;
              emitTimer = setTimeout(emitValueFn, props.debounce);
            } else {
              emitValueFn();
            }
          }
          function adjustHeight() {
            requestAnimationFrame(() => {
              const inp = inputRef.value;
              if (inp !== null) {
                const parentStyle = inp.parentNode.style;
                const { scrollTop } = inp;
                const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
                const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
                changeOverflow === true && (inp.style.overflowY = "hidden");
                parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
                inp.style.height = "1px";
                inp.style.height = inp.scrollHeight + "px";
                changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden");
                parentStyle.marginBottom = "";
                inp.scrollTop = scrollTop;
              }
            });
          }
          function onChange(e) {
            onComposition(e);
            if (emitTimer !== null) {
              clearTimeout(emitTimer);
              emitTimer = null;
            }
            emitValueFn !== void 0 && emitValueFn();
            emit("change", e.target.value);
          }
          function onFinishEditing(e) {
            e !== void 0 && stop(e);
            if (emitTimer !== null) {
              clearTimeout(emitTimer);
              emitTimer = null;
            }
            emitValueFn !== void 0 && emitValueFn();
            typedNumber = false;
            stopValueWatcher = false;
            delete temp.value;
            props.type !== "file" && setTimeout(() => {
              if (inputRef.value !== null) {
                inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
              }
            });
          }
          function getCurValue() {
            return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
          }
          vue.onBeforeUnmount(() => {
            onFinishEditing();
          });
          vue.onMounted(() => {
            props.autogrow === true && adjustHeight();
          });
          Object.assign(state, {
            innerValue,
            fieldClass: vue.computed(
              () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
            ),
            hasShadow: vue.computed(
              () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0
            ),
            inputRef,
            emitValue,
            hasValue,
            floatingLabel: vue.computed(
              () => hasValue.value === true && (props.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props.displayValue)
            ),
            getControl: () => {
              return vue.h(isTextarea.value === true ? "textarea" : "input", {
                ref: inputRef,
                class: [
                  "q-field__native q-placeholder",
                  props.inputClass
                ],
                style: props.inputStyle,
                ...inputAttrs.value,
                ...onEvents.value,
                ...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
              });
            },
            getShadowControl: () => {
              return vue.h("div", {
                class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
              }, [
                vue.h("span", { class: "invisible" }, getCurValue()),
                vue.h("span", props.shadowText)
              ]);
            }
          });
          const renderFn = useField(state);
          Object.assign(proxy, {
            focus,
            select,
            getNativeElement: () => inputRef.value
            // deprecated
          });
          injectProp(proxy, "nativeEl", () => inputRef.value);
          return renderFn;
        }
      });
      const space = vue.h("div", { class: "q-space" });
      const QSpace = createComponent({
        name: "QSpace",
        setup() {
          return () => space;
        }
      });
      function getDepth(value) {
        if (value === false) {
          return 0;
        }
        if (value === true || value === void 0) {
          return 1;
        }
        const depth = parseInt(value, 10);
        return isNaN(depth) ? 0 : depth;
      }
      const ClosePopup = createDirective(
        {
          name: "close-popup",
          beforeMount(el, { value }) {
            const ctx = {
              depth: getDepth(value),
              handler(evt) {
                ctx.depth !== 0 && setTimeout(() => {
                  const proxy = getPortalProxy(el);
                  if (proxy !== void 0) {
                    closePortals(proxy, evt, ctx.depth);
                  }
                });
              },
              handlerKey(evt) {
                isKeyCode(evt, 13) === true && ctx.handler(evt);
              }
            };
            el.__qclosepopup = ctx;
            el.addEventListener("click", ctx.handler);
            el.addEventListener("keyup", ctx.handlerKey);
          },
          updated(el, { value, oldValue }) {
            if (value !== oldValue) {
              el.__qclosepopup.depth = getDepth(value);
            }
          },
          beforeUnmount(el) {
            const ctx = el.__qclosepopup;
            el.removeEventListener("click", ctx.handler);
            el.removeEventListener("keyup", ctx.handlerKey);
            delete el.__qclosepopup;
          }
        }
      );
      const captchaLoading = vue.ref(false);
      const captchaState = vue.ref(false);
      const geetestObj$1 = vue.ref(null);
      const lastCaptchaTime$1 = vue.ref(0);
      const captchaText = vue.ref("未完成验证，请先完成验证");
      let timer = null;
      function initCaptchaValue$1() {
        captchaState.value = false;
        geetestObj$1.value = null;
        captchaText.value = "未完成验证，请先完成验证";
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }
      const handlerEmbed = function(captchaObj) {
        captchaObj.onReady(() => {
          captchaLoading.value = false;
        }).onSuccess(() => {
          lastCaptchaTime$1.value = (/* @__PURE__ */ new Date()).getTime();
          geetestObj$1.value = captchaObj.getValidate();
          captchaState.value = true;
          if (timer)
            clearTimeout(timer);
          let count = 300;
          function startCountdown() {
            if (count <= 0) {
              initCaptchaValue$1();
              return;
            }
            captchaText.value = `已完成验证，验证码有效时间： ${count} 秒`;
            count--;
            timer = setTimeout(startCountdown, 1e3);
          }
          startCountdown();
        }).onError((e) => {
          captchaLoading.value = false;
          handlingErrors(e, `初始化验证码失败，请重试。`);
        });
        captchaObj.showBox();
      };
      async function loadCaptcha$1() {
        captchaLoading.value = true;
        initCaptchaValue$1();
        const res = await getCaptchaPreAuthApi();
        if (res) {
          const result = res.data.config;
          initGeetest4({ product: "bind", captchaId: result.captchaId }, handlerEmbed);
        } else {
          warningNotify("获取验证码失败，请重试");
          captchaLoading.value = false;
        }
        setTimeout(() => {
          if (captchaLoading.value === true) {
            warningNotify("验证码初始化超时，请重试。");
            captchaLoading.value = false;
          }
        }, 5 * 1e3);
      }
      function useCaptcha() {
        return {
          loadCaptcha: loadCaptcha$1,
          captchaLoading,
          captchaState,
          geetestObj: geetestObj$1,
          initCaptchaValue: initCaptchaValue$1,
          captchaText,
          lastCaptchaTime: lastCaptchaTime$1
        };
      }
      const QTooltip = createComponent({
        name: "QTooltip",
        inheritAttrs: false,
        props: {
          ...useAnchorProps,
          ...useModelToggleProps,
          ...useTransitionProps,
          maxHeight: {
            type: String,
            default: null
          },
          maxWidth: {
            type: String,
            default: null
          },
          transitionShow: {
            default: "jump-down"
          },
          transitionHide: {
            default: "jump-up"
          },
          anchor: {
            type: String,
            default: "bottom middle",
            validator: validatePosition
          },
          self: {
            type: String,
            default: "top middle",
            validator: validatePosition
          },
          offset: {
            type: Array,
            default: () => [14, 14],
            validator: validateOffset
          },
          scrollTarget: {
            default: void 0
          },
          delay: {
            type: Number,
            default: 0
          },
          hideDelay: {
            type: Number,
            default: 0
          },
          persistent: Boolean
        },
        emits: [
          ...useModelToggleEmits
        ],
        setup(props, { slots, emit, attrs }) {
          let unwatchPosition, observer;
          const vm = vue.getCurrentInstance();
          const { proxy: { $q } } = vm;
          const innerRef = vue.ref(null);
          const showing = vue.ref(false);
          const anchorOrigin = vue.computed(() => parsePosition(props.anchor, $q.lang.rtl));
          const selfOrigin = vue.computed(() => parsePosition(props.self, $q.lang.rtl));
          const hideOnRouteChange = vue.computed(() => props.persistent !== true);
          const { registerTick, removeTick } = useTick();
          const { registerTimeout } = useTimeout();
          const { transitionProps, transitionStyle } = useTransition(props);
          const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
          const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
          const { show, hide } = useModelToggle({
            showing,
            canShow,
            handleShow,
            handleHide,
            hideOnRouteChange,
            processOnMount: true
          });
          Object.assign(anchorEvents, { delayShow, delayHide });
          const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
          if ($q.platform.is.mobile === true) {
            const clickOutsideProps = {
              anchorEl,
              innerRef,
              onClickOutside(e) {
                hide(e);
                if (e.target.classList.contains("q-dialog__backdrop")) {
                  stopAndPrevent(e);
                }
                return true;
              }
            };
            const hasClickOutside = vue.computed(
              () => (
                // it doesn't has external model
                // (null is the default value)
                props.modelValue === null && props.persistent !== true && showing.value === true
              )
            );
            vue.watch(hasClickOutside, (val) => {
              const fn = val === true ? addClickOutside : removeClickOutside;
              fn(clickOutsideProps);
            });
            vue.onBeforeUnmount(() => {
              removeClickOutside(clickOutsideProps);
            });
          }
          function handleShow(evt) {
            showPortal();
            registerTick(() => {
              observer = new MutationObserver(() => updatePosition());
              observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
              updatePosition();
              configureScrollTarget();
            });
            if (unwatchPosition === void 0) {
              unwatchPosition = vue.watch(
                () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
                updatePosition
              );
            }
            registerTimeout(() => {
              showPortal(true);
              emit("show", evt);
            }, props.transitionDuration);
          }
          function handleHide(evt) {
            removeTick();
            hidePortal();
            anchorCleanup();
            registerTimeout(() => {
              hidePortal(true);
              emit("hide", evt);
            }, props.transitionDuration);
          }
          function anchorCleanup() {
            if (observer !== void 0) {
              observer.disconnect();
              observer = void 0;
            }
            if (unwatchPosition !== void 0) {
              unwatchPosition();
              unwatchPosition = void 0;
            }
            unconfigureScrollTarget();
            cleanEvt(anchorEvents, "tooltipTemp");
          }
          function updatePosition() {
            setPosition({
              targetEl: innerRef.value,
              offset: props.offset,
              anchorEl: anchorEl.value,
              anchorOrigin: anchorOrigin.value,
              selfOrigin: selfOrigin.value,
              maxHeight: props.maxHeight,
              maxWidth: props.maxWidth
            });
          }
          function delayShow(evt) {
            if ($q.platform.is.mobile === true) {
              clearSelection();
              document.body.classList.add("non-selectable");
              const target2 = anchorEl.value;
              const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target2, e, "delayHide", "passiveCapture"]);
              addEvt(anchorEvents, "tooltipTemp", evts);
            }
            registerTimeout(() => {
              show(evt);
            }, props.delay);
          }
          function delayHide(evt) {
            if ($q.platform.is.mobile === true) {
              cleanEvt(anchorEvents, "tooltipTemp");
              clearSelection();
              setTimeout(() => {
                document.body.classList.remove("non-selectable");
              }, 10);
            }
            registerTimeout(() => {
              hide(evt);
            }, props.hideDelay);
          }
          function configureAnchorEl() {
            if (props.noParentEvent === true || anchorEl.value === null)
              return;
            const evts = $q.platform.is.mobile === true ? [
              [anchorEl.value, "touchstart", "delayShow", "passive"]
            ] : [
              [anchorEl.value, "mouseenter", "delayShow", "passive"],
              [anchorEl.value, "mouseleave", "delayHide", "passive"]
            ];
            addEvt(anchorEvents, "anchor", evts);
          }
          function configureScrollTarget() {
            if (anchorEl.value !== null || props.scrollTarget !== void 0) {
              localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
              const fn = props.noParentEvent === true ? updatePosition : hide;
              changeScrollEvent(localScrollTarget.value, fn);
            }
          }
          function getTooltipContent() {
            return showing.value === true ? vue.h("div", {
              ...attrs,
              ref: innerRef,
              class: [
                "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
                attrs.class
              ],
              style: [
                attrs.style,
                transitionStyle.value
              ],
              role: "tooltip"
            }, hSlot(slots.default)) : null;
          }
          function renderPortalContent() {
            return vue.h(vue.Transition, transitionProps.value, getTooltipContent);
          }
          vue.onBeforeUnmount(anchorCleanup);
          Object.assign(vm.proxy, { updatePosition });
          return renderPortal;
        }
      });
      const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
        __name: "IconBtn",
        props: {
          tooltip: { type: String, default: "" },
          tooltipPosition: {
            type: String,
            validator: (value) => ["bottom", "top", "right", "left"].includes(value),
            default: "bottom"
          },
          icon: { type: String, required: true },
          color: { type: String, default: "teal" },
          flat: { type: Boolean, default: false },
          dense: { type: Boolean, default: false },
          push: { type: Boolean, default: false }
        },
        setup(__props) {
          const props = __props;
          const tooltipPositions = {
            left: { anchor: "center left", self: "center right" },
            right: { anchor: "center left", self: "center left" },
            top: { anchor: "top middle", self: "bottom middle" },
            bottom: { anchor: "bottom middle", self: "top middle" }
          };
          const anchor = vue.computed(() => tooltipPositions[props.tooltipPosition].anchor);
          const self2 = vue.computed(() => tooltipPositions[props.tooltipPosition].self);
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(QBtn, {
              color: __props.color,
              dense: __props.dense,
              round: "",
              flat: __props.flat,
              push: __props.push
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(QIcon, {
                  class: vue.normalizeClass(__props.icon),
                  "h-24px": "",
                  "w-24px": ""
                }, null, 8, ["class"]),
                __props.tooltip ? (vue.openBlock(), vue.createBlock(QTooltip, {
                  key: 0,
                  class: vue.normalizeClass(`bg-${__props.color}`),
                  anchor: anchor.value,
                  self: self2.value
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(__props.tooltip), 1)
                  ]),
                  _: 1
                }, 8, ["class", "anchor", "self"])) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["color", "dense", "flat", "push"]);
          };
        }
      });
      const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
        __name: "robTableTop",
        props: ["props"],
        setup(__props) {
          const { addFollow, inputFollowId: inputFollowId2, cancelAllInvalidFollow, cancelAllInvalidFollowLoading } = useAction();
          const { loadCaptcha: loadCaptcha2, captchaState: captchaState2, captchaLoading: captchaLoading2, captchaText: captchaText2 } = useCaptcha();
          const goodsType = vue.ref(2);
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createVNode(QBtnToggle, {
                modelValue: goodsType.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => goodsType.value = $event),
                class: "mr-4",
                border: "teal 1px solid",
                "toggle-color": "teal",
                color: "white",
                "text-color": "teal",
                "no-caps": "",
                unelevated: "",
                rounded: "",
                options: [
                  { label: "角色", value: 2 },
                  { label: "外观", value: 3 }
                ]
              }, null, 8, ["modelValue"]),
              vue.createVNode(QInput, {
                modelValue: vue.unref(inputFollowId2),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(inputFollowId2) ? inputFollowId2.value = $event : null),
                color: "teal",
                dense: "",
                label: "商品ID"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_sfc_main$a, {
                icon: "i-pixelarticons-heart",
                flat: "",
                color: "red",
                tooltip: "关注",
                onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(addFollow)(goodsType.value))
              }),
              vue.createVNode(QSpace),
              vue.createVNode(QChip, {
                color: vue.unref(captchaState2) ? "green" : "red",
                "text-color": "white"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(vue.unref(captchaText2)), 1)
                ]),
                _: 1
              }, 8, ["color"]),
              vue.createVNode(_sfc_main$a, {
                loading: vue.unref(captchaLoading2),
                flat: "",
                color: "teal",
                icon: "i-pixelarticons-play",
                tooltip: "开始验证",
                onClick: vue.unref(loadCaptcha2)
              }, null, 8, ["loading", "onClick"]),
              vue.createVNode(_sfc_main$a, {
                flat: "",
                color: "teal",
                icon: "i-pixelarticons-repeat",
                tooltip: "刷新",
                onClick: vue.unref(getList)
              }, null, 8, ["onClick"]),
              vue.createVNode(_sfc_main$a, {
                flat: "",
                icon: __props.props.inFullscreen ? "i-pixelarticons-zoom-out" : "i-pixelarticons-zoom-in",
                color: "teal",
                tooltip: __props.props.inFullscreen ? "退出全屏" : "全屏",
                onClick: __props.props.toggleFullscreen
              }, null, 8, ["icon", "tooltip", "onClick"]),
              vue.createVNode(_sfc_main$a, {
                flat: "",
                color: "red",
                loading: vue.unref(cancelAllInvalidFollowLoading),
                icon: "i-pixelarticons-mood-sad",
                tooltip: "批量取消失效商品",
                onClick: vue.unref(cancelAllInvalidFollow)
              }, null, 8, ["loading", "onClick"]),
              vue.withDirectives(vue.createVNode(_sfc_main$a, {
                flat: "",
                color: "red",
                icon: "i-pixelarticons-close",
                tooltip: "关闭"
              }, null, 512), [
                [vue.vShow, !__props.props.inFullscreen],
                [ClosePopup]
              ])
            ], 64);
          };
        }
      });
      const QCardSection = createComponent({
        name: "QCardSection",
        props: {
          tag: {
            type: String,
            default: "div"
          },
          horizontal: Boolean
        },
        setup(props, { slots }) {
          const classes = vue.computed(
            () => `q-card__section q-card__section--${props.horizontal === true ? "horiz row no-wrap" : "vert"}`
          );
          return () => vue.h(props.tag, { class: classes.value }, hSlot(slots.default));
        }
      });
      const QCard = createComponent({
        name: "QCard",
        props: {
          ...useDarkProps,
          tag: {
            type: String,
            default: "div"
          },
          square: Boolean,
          flat: Boolean,
          bordered: Boolean
        },
        setup(props, { slots }) {
          const { proxy: { $q } } = vue.getCurrentInstance();
          const isDark = useDark(props, $q);
          const classes = vue.computed(
            () => "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props.bordered === true ? " q-card--bordered" : "") + (props.square === true ? " q-card--square no-border-radius" : "") + (props.flat === true ? " q-card--flat no-shadow" : "")
          );
          return () => vue.h(props.tag, { class: classes.value }, hSlot(slots.default));
        }
      });
      const QSlideTransition = createComponent({
        name: "QSlideTransition",
        props: {
          appear: Boolean,
          duration: {
            type: Number,
            default: 300
          }
        },
        emits: ["show", "hide"],
        setup(props, { slots, emit }) {
          let animating = false, doneFn, element;
          let timer2 = null, timerFallback = null, animListener, lastEvent;
          function cleanup() {
            doneFn && doneFn();
            doneFn = null;
            animating = false;
            if (timer2 !== null) {
              clearTimeout(timer2);
              timer2 = null;
            }
            if (timerFallback !== null) {
              clearTimeout(timerFallback);
              timerFallback = null;
            }
            element !== void 0 && element.removeEventListener("transitionend", animListener);
            animListener = null;
          }
          function begin(el, height, done) {
            if (height !== void 0) {
              el.style.height = `${height}px`;
            }
            el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
            animating = true;
            doneFn = done;
          }
          function end(el, event) {
            el.style.overflowY = null;
            el.style.height = null;
            el.style.transition = null;
            cleanup();
            event !== lastEvent && emit(event);
          }
          function onEnter(el, done) {
            let pos = 0;
            element = el;
            if (animating === true) {
              cleanup();
              pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
            } else {
              lastEvent = "hide";
              el.style.overflowY = "hidden";
            }
            begin(el, pos, done);
            timer2 = setTimeout(() => {
              timer2 = null;
              el.style.height = `${el.scrollHeight}px`;
              animListener = (evt) => {
                timerFallback = null;
                if (Object(evt) !== evt || evt.target === el) {
                  end(el, "show");
                }
              };
              el.addEventListener("transitionend", animListener);
              timerFallback = setTimeout(animListener, props.duration * 1.1);
            }, 100);
          }
          function onLeave(el, done) {
            let pos;
            element = el;
            if (animating === true) {
              cleanup();
            } else {
              lastEvent = "show";
              el.style.overflowY = "hidden";
              pos = el.scrollHeight;
            }
            begin(el, pos, done);
            timer2 = setTimeout(() => {
              timer2 = null;
              el.style.height = 0;
              animListener = (evt) => {
                timerFallback = null;
                if (Object(evt) !== evt || evt.target === el) {
                  end(el, "hide");
                }
              };
              el.addEventListener("transitionend", animListener);
              timerFallback = setTimeout(animListener, props.duration * 1.1);
            }, 100);
          }
          vue.onBeforeUnmount(() => {
            animating === true && cleanup();
          });
          return () => vue.h(vue.Transition, {
            css: false,
            appear: props.appear,
            onEnter,
            onLeave
          }, slots.default);
        }
      });
      const itemGroups = vue.shallowReactive({});
      const LINK_PROPS = Object.keys(useRouterLinkProps);
      const QExpansionItem = createComponent({
        name: "QExpansionItem",
        props: {
          ...useRouterLinkProps,
          ...useModelToggleProps,
          ...useDarkProps,
          icon: String,
          label: String,
          labelLines: [Number, String],
          caption: String,
          captionLines: [Number, String],
          dense: Boolean,
          toggleAriaLabel: String,
          expandIcon: String,
          expandedIcon: String,
          expandIconClass: [Array, String, Object],
          duration: Number,
          headerInsetLevel: Number,
          contentInsetLevel: Number,
          expandSeparator: Boolean,
          defaultOpened: Boolean,
          hideExpandIcon: Boolean,
          expandIconToggle: Boolean,
          switchToggleSide: Boolean,
          denseToggle: Boolean,
          group: String,
          popup: Boolean,
          headerStyle: [Array, String, Object],
          headerClass: [Array, String, Object]
        },
        emits: [
          ...useModelToggleEmits,
          "click",
          "afterShow",
          "afterHide"
        ],
        setup(props, { slots, emit }) {
          const { proxy: { $q } } = vue.getCurrentInstance();
          const isDark = useDark(props, $q);
          const showing = vue.ref(
            props.modelValue !== null ? props.modelValue : props.defaultOpened
          );
          const blurTargetRef = vue.ref(null);
          const targetUid = useId();
          const { show, hide, toggle } = useModelToggle({ showing });
          let uniqueId, exitGroup;
          const classes = vue.computed(
            () => `q-expansion-item q-item-type q-expansion-item--${showing.value === true ? "expanded" : "collapsed"} q-expansion-item--${props.popup === true ? "popup" : "standard"}`
          );
          const contentStyle = vue.computed(() => {
            if (props.contentInsetLevel === void 0) {
              return null;
            }
            const dir = $q.lang.rtl === true ? "Right" : "Left";
            return {
              ["padding" + dir]: props.contentInsetLevel * 56 + "px"
            };
          });
          const hasLink = vue.computed(
            () => props.disable !== true && (props.href !== void 0 || props.to !== void 0 && props.to !== null && props.to !== "")
          );
          const linkProps = vue.computed(() => {
            const acc = {};
            LINK_PROPS.forEach((key) => {
              acc[key] = props[key];
            });
            return acc;
          });
          const isClickable = vue.computed(
            () => hasLink.value === true || props.expandIconToggle !== true
          );
          const expansionIcon = vue.computed(() => props.expandedIcon !== void 0 && showing.value === true ? props.expandedIcon : props.expandIcon || $q.iconSet.expansionItem[props.denseToggle === true ? "denseIcon" : "icon"]);
          const activeToggleIcon = vue.computed(
            () => props.disable !== true && (hasLink.value === true || props.expandIconToggle === true)
          );
          const headerSlotScope = vue.computed(() => ({
            expanded: showing.value === true,
            detailsId: props.targetUid,
            toggle,
            show,
            hide
          }));
          const toggleAriaAttrs = vue.computed(() => {
            const toggleAriaLabel = props.toggleAriaLabel !== void 0 ? props.toggleAriaLabel : $q.lang.label[showing.value === true ? "collapse" : "expand"](props.label);
            return {
              role: "button",
              "aria-expanded": showing.value === true ? "true" : "false",
              "aria-controls": targetUid.value,
              "aria-label": toggleAriaLabel
            };
          });
          vue.watch(() => props.group, (name) => {
            exitGroup !== void 0 && exitGroup();
            name !== void 0 && enterGroup();
          });
          function onHeaderClick(e) {
            hasLink.value !== true && toggle(e);
            emit("click", e);
          }
          function toggleIconKeyboard(e) {
            e.keyCode === 13 && toggleIcon(e, true);
          }
          function toggleIcon(e, keyboard) {
            keyboard !== true && blurTargetRef.value !== null && blurTargetRef.value.focus();
            toggle(e);
            stopAndPrevent(e);
          }
          function onShow() {
            emit("afterShow");
          }
          function onHide() {
            emit("afterHide");
          }
          function enterGroup() {
            if (uniqueId === void 0) {
              uniqueId = uid();
            }
            if (showing.value === true) {
              itemGroups[props.group] = uniqueId;
            }
            const show2 = vue.watch(showing, (val) => {
              if (val === true) {
                itemGroups[props.group] = uniqueId;
              } else if (itemGroups[props.group] === uniqueId) {
                delete itemGroups[props.group];
              }
            });
            const group = vue.watch(
              () => itemGroups[props.group],
              (val, oldVal) => {
                if (oldVal === uniqueId && val !== void 0 && val !== uniqueId) {
                  hide();
                }
              }
            );
            exitGroup = () => {
              show2();
              group();
              if (itemGroups[props.group] === uniqueId) {
                delete itemGroups[props.group];
              }
              exitGroup = void 0;
            };
          }
          function getToggleIcon() {
            const data = {
              class: [
                `q-focusable relative-position cursor-pointer${props.denseToggle === true && props.switchToggleSide === true ? " items-end" : ""}`,
                props.expandIconClass
              ],
              side: props.switchToggleSide !== true,
              avatar: props.switchToggleSide
            };
            const child = [
              vue.h(QIcon, {
                class: "q-expansion-item__toggle-icon" + (props.expandedIcon === void 0 && showing.value === true ? " q-expansion-item__toggle-icon--rotated" : ""),
                name: expansionIcon.value
              })
            ];
            if (activeToggleIcon.value === true) {
              Object.assign(data, {
                tabindex: 0,
                ...toggleAriaAttrs.value,
                onClick: toggleIcon,
                onKeyup: toggleIconKeyboard
              });
              child.unshift(
                vue.h("div", {
                  ref: blurTargetRef,
                  class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
                  tabindex: -1
                })
              );
            }
            return vue.h(QItemSection, data, () => child);
          }
          function getHeaderChild() {
            let child;
            if (slots.header !== void 0) {
              child = [].concat(slots.header(headerSlotScope.value));
            } else {
              child = [
                vue.h(QItemSection, () => [
                  vue.h(QItemLabel, { lines: props.labelLines }, () => props.label || ""),
                  props.caption ? vue.h(QItemLabel, { lines: props.captionLines, caption: true }, () => props.caption) : null
                ])
              ];
              props.icon && child[props.switchToggleSide === true ? "push" : "unshift"](
                vue.h(QItemSection, {
                  side: props.switchToggleSide === true,
                  avatar: props.switchToggleSide !== true
                }, () => vue.h(QIcon, { name: props.icon }))
              );
            }
            if (props.disable !== true && props.hideExpandIcon !== true) {
              child[props.switchToggleSide === true ? "unshift" : "push"](
                getToggleIcon()
              );
            }
            return child;
          }
          function getHeader() {
            const data = {
              ref: "item",
              style: props.headerStyle,
              class: props.headerClass,
              dark: isDark.value,
              disable: props.disable,
              dense: props.dense,
              insetLevel: props.headerInsetLevel
            };
            if (isClickable.value === true) {
              data.clickable = true;
              data.onClick = onHeaderClick;
              Object.assign(
                data,
                hasLink.value === true ? linkProps.value : toggleAriaAttrs.value
              );
            }
            return vue.h(QItem, data, getHeaderChild);
          }
          function getTransitionChild() {
            return vue.withDirectives(
              vue.h("div", {
                key: "e-content",
                class: "q-expansion-item__content relative-position",
                style: contentStyle.value,
                id: targetUid.value
              }, hSlot(slots.default)),
              [[
                vue.vShow,
                showing.value
              ]]
            );
          }
          function getContent() {
            const node = [
              getHeader(),
              vue.h(QSlideTransition, {
                duration: props.duration,
                onShow,
                onHide
              }, getTransitionChild)
            ];
            if (props.expandSeparator === true) {
              node.push(
                vue.h(QSeparator, {
                  class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
                  dark: isDark.value
                }),
                vue.h(QSeparator, {
                  class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
                  dark: isDark.value
                })
              );
            }
            return node;
          }
          props.group !== void 0 && enterGroup();
          vue.onBeforeUnmount(() => {
            exitGroup !== void 0 && exitGroup();
          });
          return () => vue.h("div", { class: classes.value }, [
            vue.h("div", { class: "q-expansion-item__container relative-position" }, getContent())
          ]);
        }
      });
      const QCardActions = createComponent({
        name: "QCardActions",
        props: {
          ...useAlignProps,
          vertical: Boolean
        },
        setup(props, { slots }) {
          const alignClass = useAlign(props);
          const classes = vue.computed(
            () => `q-card__actions ${alignClass.value} q-card__actions--${props.vertical === true ? "vert column" : "horiz row"}`
          );
          return () => vue.h("div", { class: classes.value }, hSlot(slots.default));
        }
      });
      const useRatioProps = {
        ratio: [String, Number]
      };
      function useRatio(props, naturalRatio) {
        return vue.computed(() => {
          const ratio = Number(
            props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
          );
          return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
        });
      }
      const defaultRatio = 16 / 9;
      const QImg = createComponent({
        name: "QImg",
        props: {
          ...useRatioProps,
          src: String,
          srcset: String,
          sizes: String,
          alt: String,
          crossorigin: String,
          decoding: String,
          referrerpolicy: String,
          draggable: Boolean,
          loading: {
            type: String,
            default: "lazy"
          },
          loadingShowDelay: {
            type: [Number, String],
            default: 0
          },
          fetchpriority: {
            type: String,
            default: "auto"
          },
          width: String,
          height: String,
          initialRatio: {
            type: [Number, String],
            default: defaultRatio
          },
          placeholderSrc: String,
          fit: {
            type: String,
            default: "cover"
          },
          position: {
            type: String,
            default: "50% 50%"
          },
          imgClass: String,
          imgStyle: Object,
          noSpinner: Boolean,
          noNativeMenu: Boolean,
          noTransition: Boolean,
          spinnerColor: String,
          spinnerSize: String
        },
        emits: ["load", "error"],
        setup(props, { slots, emit }) {
          const naturalRatio = vue.ref(props.initialRatio);
          const ratioStyle = useRatio(props, naturalRatio);
          const vm = vue.getCurrentInstance();
          const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
          const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = useTimeout();
          const images = [
            vue.ref(null),
            vue.ref(getPlaceholderSrc())
          ];
          const position2 = vue.ref(0);
          const isLoading = vue.ref(false);
          const hasError = vue.ref(false);
          const classes = vue.computed(
            () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
          );
          const style = vue.computed(() => ({
            width: props.width,
            height: props.height
          }));
          const imgClass = vue.computed(
            () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition`
          );
          const imgStyle = vue.computed(() => ({
            ...props.imgStyle,
            objectFit: props.fit,
            objectPosition: props.position
          }));
          vue.watch(() => getCurrentSrc(), addImage);
          function setLoading() {
            removeLoadShowTimeout();
            if (props.loadingShowDelay === 0) {
              isLoading.value = true;
              return;
            }
            registerLoadShowTimeout(() => {
              isLoading.value = true;
            }, props.loadingShowDelay);
          }
          function clearLoading() {
            removeLoadShowTimeout();
            isLoading.value = false;
          }
          function getCurrentSrc() {
            return props.src || props.srcset || props.sizes ? {
              src: props.src,
              srcset: props.srcset,
              sizes: props.sizes
            } : null;
          }
          function getPlaceholderSrc() {
            return props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null;
          }
          function addImage(imgProps) {
            removeLoadTimeout();
            hasError.value = false;
            if (imgProps === null) {
              clearLoading();
              images[position2.value ^ 1].value = getPlaceholderSrc();
            } else {
              setLoading();
            }
            images[position2.value].value = imgProps;
          }
          function onLoad({ target: target2 }) {
            if (vmIsDestroyed(vm) === false) {
              removeLoadTimeout();
              naturalRatio.value = target2.naturalHeight === 0 ? 0.5 : target2.naturalWidth / target2.naturalHeight;
              waitForCompleteness(target2, 1);
            }
          }
          function waitForCompleteness(target2, count) {
            if (count === 1e3 || vmIsDestroyed(vm) === true)
              return;
            if (target2.complete === true) {
              onReady(target2);
            } else {
              registerLoadTimeout(() => {
                waitForCompleteness(target2, count + 1);
              }, 50);
            }
          }
          function onReady(img) {
            if (vmIsDestroyed(vm) === true)
              return;
            position2.value = position2.value ^ 1;
            images[position2.value].value = null;
            clearLoading();
            hasError.value = false;
            emit("load", img.currentSrc || img.src);
          }
          function onError(err) {
            removeLoadTimeout();
            clearLoading();
            hasError.value = true;
            images[position2.value].value = null;
            images[position2.value ^ 1].value = getPlaceholderSrc();
            emit("error", err);
          }
          function getImage(index) {
            const img = images[index].value;
            const data = {
              key: "img_" + index,
              class: imgClass.value,
              style: imgStyle.value,
              alt: props.alt,
              crossorigin: props.crossorigin,
              decoding: props.decoding,
              referrerpolicy: props.referrerpolicy,
              height: props.height,
              width: props.width,
              loading: props.loading,
              fetchpriority: props.fetchpriority,
              "aria-hidden": "true",
              draggable: props.draggable,
              ...img
            };
            if (position2.value === index) {
              data.class += " q-img__image--waiting";
              Object.assign(data, { onLoad, onError });
            } else {
              data.class += " q-img__image--loaded";
            }
            return vue.h(
              "div",
              { class: "q-img__container absolute-full", key: "img" + index },
              vue.h("img", data)
            );
          }
          function getContent() {
            if (isLoading.value === false) {
              return vue.h("div", {
                key: "content",
                class: "q-img__content absolute-full q-anchor--skip"
              }, hSlot(slots[hasError.value === true ? "error" : "default"]));
            }
            return vue.h("div", {
              key: "loading",
              class: "q-img__loading absolute-full flex flex-center"
            }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
              vue.h(QSpinner, {
                color: props.spinnerColor,
                size: props.spinnerSize
              })
            ]);
          }
          {
            {
              addImage(getCurrentSrc());
            }
          }
          return () => {
            const content = [];
            if (ratioStyle.value !== null) {
              content.push(
                vue.h("div", { key: "filler", style: ratioStyle.value })
              );
            }
            if (hasError.value !== true) {
              if (images[0].value !== null) {
                content.push(getImage(0));
              }
              if (images[1].value !== null) {
                content.push(getImage(1));
              }
            }
            content.push(
              vue.h(vue.Transition, { name: "q-transition--fade" }, getContent)
            );
            return vue.h("div", {
              class: classes.value,
              style: style.value,
              role: "img",
              "aria-label": props.alt
            }, content);
          };
        }
      });
      var browser = {};
      var canPromise$1 = function() {
        return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
      };
      var qrcode = {};
      var utils$1 = {};
      let toSJISFunction;
      const CODEWORDS_COUNT = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      utils$1.getSymbolSize = function getSymbolSize2(version2) {
        if (!version2)
          throw new Error('"version" cannot be null or undefined');
        if (version2 < 1 || version2 > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return version2 * 4 + 17;
      };
      utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
        return CODEWORDS_COUNT[version2];
      };
      utils$1.getBCHDigit = function(data) {
        let digit = 0;
        while (data !== 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      };
      utils$1.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== "function") {
          throw new Error('"toSJISFunc" is not a valid function.');
        }
        toSJISFunction = f;
      };
      utils$1.isKanjiModeEnabled = function() {
        return typeof toSJISFunction !== "undefined";
      };
      utils$1.toSJIS = function toSJIS(kanji2) {
        return toSJISFunction(kanji2);
      };
      var errorCorrectionLevel = {};
      (function(exports2) {
        exports2.L = { bit: 1 };
        exports2.M = { bit: 0 };
        exports2.Q = { bit: 3 };
        exports2.H = { bit: 2 };
        function fromString(string) {
          if (typeof string !== "string") {
            throw new Error("Param is not a string");
          }
          const lcStr = string.toLowerCase();
          switch (lcStr) {
            case "l":
            case "low":
              return exports2.L;
            case "m":
            case "medium":
              return exports2.M;
            case "q":
            case "quartile":
              return exports2.Q;
            case "h":
            case "high":
              return exports2.H;
            default:
              throw new Error("Unknown EC Level: " + string);
          }
        }
        exports2.isValid = function isValid(level) {
          return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
        };
        exports2.from = function from(value, defaultValue) {
          if (exports2.isValid(value)) {
            return value;
          }
          try {
            return fromString(value);
          } catch (e) {
            return defaultValue;
          }
        };
      })(errorCorrectionLevel);
      function BitBuffer$1() {
        this.buffer = [];
        this.length = 0;
      }
      BitBuffer$1.prototype = {
        get: function(index) {
          const bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function(num, length) {
          for (let i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(bit) {
          const bufIndex = Math.floor(this.length / 8);
          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }
          if (bit) {
            this.buffer[bufIndex] |= 128 >>> this.length % 8;
          }
          this.length++;
        }
      };
      var bitBuffer = BitBuffer$1;
      function BitMatrix$1(size2) {
        if (!size2 || size2 < 1) {
          throw new Error("BitMatrix size must be defined and greater than 0");
        }
        this.size = size2;
        this.data = new Uint8Array(size2 * size2);
        this.reservedBit = new Uint8Array(size2 * size2);
      }
      BitMatrix$1.prototype.set = function(row, col, value, reserved) {
        const index = row * this.size + col;
        this.data[index] = value;
        if (reserved)
          this.reservedBit[index] = true;
      };
      BitMatrix$1.prototype.get = function(row, col) {
        return this.data[row * this.size + col];
      };
      BitMatrix$1.prototype.xor = function(row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      BitMatrix$1.prototype.isReserved = function(row, col) {
        return this.reservedBit[row * this.size + col];
      };
      var bitMatrix = BitMatrix$1;
      var alignmentPattern = {};
      (function(exports2) {
        const getSymbolSize2 = utils$1.getSymbolSize;
        exports2.getRowColCoords = function getRowColCoords(version2) {
          if (version2 === 1)
            return [];
          const posCount = Math.floor(version2 / 7) + 2;
          const size2 = getSymbolSize2(version2);
          const intervals = size2 === 145 ? 26 : Math.ceil((size2 - 13) / (2 * posCount - 2)) * 2;
          const positions = [size2 - 7];
          for (let i = 1; i < posCount - 1; i++) {
            positions[i] = positions[i - 1] - intervals;
          }
          positions.push(6);
          return positions.reverse();
        };
        exports2.getPositions = function getPositions(version2) {
          const coords = [];
          const pos = exports2.getRowColCoords(version2);
          const posLength = pos.length;
          for (let i = 0; i < posLength; i++) {
            for (let j = 0; j < posLength; j++) {
              if (i === 0 && j === 0 || // top-left
              i === 0 && j === posLength - 1 || // bottom-left
              i === posLength - 1 && j === 0) {
                continue;
              }
              coords.push([pos[i], pos[j]]);
            }
          }
          return coords;
        };
      })(alignmentPattern);
      var finderPattern = {};
      const getSymbolSize = utils$1.getSymbolSize;
      const FINDER_PATTERN_SIZE = 7;
      finderPattern.getPositions = function getPositions(version2) {
        const size2 = getSymbolSize(version2);
        return [
          // top-left
          [0, 0],
          // top-right
          [size2 - FINDER_PATTERN_SIZE, 0],
          // bottom-left
          [0, size2 - FINDER_PATTERN_SIZE]
        ];
      };
      var maskPattern = {};
      (function(exports2) {
        exports2.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        };
        const PenaltyScores = {
          N1: 3,
          N2: 3,
          N3: 40,
          N4: 10
        };
        exports2.isValid = function isValid(mask) {
          return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
        };
        exports2.from = function from(value) {
          return exports2.isValid(value) ? parseInt(value, 10) : void 0;
        };
        exports2.getPenaltyN1 = function getPenaltyN1(data) {
          const size2 = data.size;
          let points = 0;
          let sameCountCol = 0;
          let sameCountRow = 0;
          let lastCol = null;
          let lastRow = null;
          for (let row = 0; row < size2; row++) {
            sameCountCol = sameCountRow = 0;
            lastCol = lastRow = null;
            for (let col = 0; col < size2; col++) {
              let module2 = data.get(row, col);
              if (module2 === lastCol) {
                sameCountCol++;
              } else {
                if (sameCountCol >= 5)
                  points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module2;
                sameCountCol = 1;
              }
              module2 = data.get(col, row);
              if (module2 === lastRow) {
                sameCountRow++;
              } else {
                if (sameCountRow >= 5)
                  points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module2;
                sameCountRow = 1;
              }
            }
            if (sameCountCol >= 5)
              points += PenaltyScores.N1 + (sameCountCol - 5);
            if (sameCountRow >= 5)
              points += PenaltyScores.N1 + (sameCountRow - 5);
          }
          return points;
        };
        exports2.getPenaltyN2 = function getPenaltyN2(data) {
          const size2 = data.size;
          let points = 0;
          for (let row = 0; row < size2 - 1; row++) {
            for (let col = 0; col < size2 - 1; col++) {
              const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
              if (last === 4 || last === 0)
                points++;
            }
          }
          return points * PenaltyScores.N2;
        };
        exports2.getPenaltyN3 = function getPenaltyN3(data) {
          const size2 = data.size;
          let points = 0;
          let bitsCol = 0;
          let bitsRow = 0;
          for (let row = 0; row < size2; row++) {
            bitsCol = bitsRow = 0;
            for (let col = 0; col < size2; col++) {
              bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
              if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
                points++;
              bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
              if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
                points++;
            }
          }
          return points * PenaltyScores.N3;
        };
        exports2.getPenaltyN4 = function getPenaltyN4(data) {
          let darkCount = 0;
          const modulesCount = data.data.length;
          for (let i = 0; i < modulesCount; i++)
            darkCount += data.data[i];
          const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
          return k * PenaltyScores.N4;
        };
        function getMaskAt(maskPattern2, i, j) {
          switch (maskPattern2) {
            case exports2.Patterns.PATTERN000:
              return (i + j) % 2 === 0;
            case exports2.Patterns.PATTERN001:
              return i % 2 === 0;
            case exports2.Patterns.PATTERN010:
              return j % 3 === 0;
            case exports2.Patterns.PATTERN011:
              return (i + j) % 3 === 0;
            case exports2.Patterns.PATTERN100:
              return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
            case exports2.Patterns.PATTERN101:
              return i * j % 2 + i * j % 3 === 0;
            case exports2.Patterns.PATTERN110:
              return (i * j % 2 + i * j % 3) % 2 === 0;
            case exports2.Patterns.PATTERN111:
              return (i * j % 3 + (i + j) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + maskPattern2);
          }
        }
        exports2.applyMask = function applyMask(pattern, data) {
          const size2 = data.size;
          for (let col = 0; col < size2; col++) {
            for (let row = 0; row < size2; row++) {
              if (data.isReserved(row, col))
                continue;
              data.xor(row, col, getMaskAt(pattern, row, col));
            }
          }
        };
        exports2.getBestMask = function getBestMask(data, setupFormatFunc) {
          const numPatterns = Object.keys(exports2.Patterns).length;
          let bestPattern = 0;
          let lowerPenalty = Infinity;
          for (let p = 0; p < numPatterns; p++) {
            setupFormatFunc(p);
            exports2.applyMask(p, data);
            const penalty = exports2.getPenaltyN1(data) + exports2.getPenaltyN2(data) + exports2.getPenaltyN3(data) + exports2.getPenaltyN4(data);
            exports2.applyMask(p, data);
            if (penalty < lowerPenalty) {
              lowerPenalty = penalty;
              bestPattern = p;
            }
          }
          return bestPattern;
        };
      })(maskPattern);
      var errorCorrectionCode = {};
      const ECLevel$1 = errorCorrectionLevel;
      const EC_BLOCKS_TABLE = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ];
      const EC_CODEWORDS_TABLE = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
        switch (errorCorrectionLevel2) {
          case ECLevel$1.L:
            return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
          case ECLevel$1.M:
            return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
          case ECLevel$1.Q:
            return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
          case ECLevel$1.H:
            return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
        switch (errorCorrectionLevel2) {
          case ECLevel$1.L:
            return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
          case ECLevel$1.M:
            return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
          case ECLevel$1.Q:
            return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
          case ECLevel$1.H:
            return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      var polynomial = {};
      var galoisField = {};
      const EXP_TABLE = new Uint8Array(512);
      const LOG_TABLE = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1;
          if (x & 256) {
            x ^= 285;
          }
        }
        for (let i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      galoisField.log = function log(n) {
        if (n < 1)
          throw new Error("log(" + n + ")");
        return LOG_TABLE[n];
      };
      galoisField.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      galoisField.mul = function mul(x, y) {
        if (x === 0 || y === 0)
          return 0;
        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
      (function(exports2) {
        const GF = galoisField;
        exports2.mul = function mul(p1, p2) {
          const coeff = new Uint8Array(p1.length + p2.length - 1);
          for (let i = 0; i < p1.length; i++) {
            for (let j = 0; j < p2.length; j++) {
              coeff[i + j] ^= GF.mul(p1[i], p2[j]);
            }
          }
          return coeff;
        };
        exports2.mod = function mod(divident, divisor) {
          let result = new Uint8Array(divident);
          while (result.length - divisor.length >= 0) {
            const coeff = result[0];
            for (let i = 0; i < divisor.length; i++) {
              result[i] ^= GF.mul(divisor[i], coeff);
            }
            let offset = 0;
            while (offset < result.length && result[offset] === 0)
              offset++;
            result = result.slice(offset);
          }
          return result;
        };
        exports2.generateECPolynomial = function generateECPolynomial(degree) {
          let poly = new Uint8Array([1]);
          for (let i = 0; i < degree; i++) {
            poly = exports2.mul(poly, new Uint8Array([1, GF.exp(i)]));
          }
          return poly;
        };
      })(polynomial);
      const Polynomial = polynomial;
      function ReedSolomonEncoder$1(degree) {
        this.genPoly = void 0;
        this.degree = degree;
        if (this.degree)
          this.initialize(this.degree);
      }
      ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      ReedSolomonEncoder$1.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error("Encoder not initialized");
        }
        const paddedData = new Uint8Array(data.length + this.degree);
        paddedData.set(data);
        const remainder = Polynomial.mod(paddedData, this.genPoly);
        const start = this.degree - remainder.length;
        if (start > 0) {
          const buff = new Uint8Array(this.degree);
          buff.set(remainder, start);
          return buff;
        }
        return remainder;
      };
      var reedSolomonEncoder = ReedSolomonEncoder$1;
      var version = {};
      var mode = {};
      var versionCheck = {};
      versionCheck.isValid = function isValid(version2) {
        return !isNaN(version2) && version2 >= 1 && version2 <= 40;
      };
      var regex = {};
      const numeric = "[0-9]+";
      const alphanumeric = "[A-Z $%*+\\-./:]+";
      let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      kanji = kanji.replace(/u/g, "\\u");
      const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
      regex.KANJI = new RegExp(kanji, "g");
      regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      regex.BYTE = new RegExp(byte, "g");
      regex.NUMERIC = new RegExp(numeric, "g");
      regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
      const TEST_KANJI = new RegExp("^" + kanji + "$");
      const TEST_NUMERIC = new RegExp("^" + numeric + "$");
      const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      regex.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };
      regex.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };
      regex.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
      (function(exports2) {
        const VersionCheck = versionCheck;
        const Regex = regex;
        exports2.NUMERIC = {
          id: "Numeric",
          bit: 1 << 0,
          ccBits: [10, 12, 14]
        };
        exports2.ALPHANUMERIC = {
          id: "Alphanumeric",
          bit: 1 << 1,
          ccBits: [9, 11, 13]
        };
        exports2.BYTE = {
          id: "Byte",
          bit: 1 << 2,
          ccBits: [8, 16, 16]
        };
        exports2.KANJI = {
          id: "Kanji",
          bit: 1 << 3,
          ccBits: [8, 10, 12]
        };
        exports2.MIXED = {
          bit: -1
        };
        exports2.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
          if (!mode2.ccBits)
            throw new Error("Invalid mode: " + mode2);
          if (!VersionCheck.isValid(version2)) {
            throw new Error("Invalid version: " + version2);
          }
          if (version2 >= 1 && version2 < 10)
            return mode2.ccBits[0];
          else if (version2 < 27)
            return mode2.ccBits[1];
          return mode2.ccBits[2];
        };
        exports2.getBestModeForData = function getBestModeForData(dataStr) {
          if (Regex.testNumeric(dataStr))
            return exports2.NUMERIC;
          else if (Regex.testAlphanumeric(dataStr))
            return exports2.ALPHANUMERIC;
          else if (Regex.testKanji(dataStr))
            return exports2.KANJI;
          else
            return exports2.BYTE;
        };
        exports2.toString = function toString(mode2) {
          if (mode2 && mode2.id)
            return mode2.id;
          throw new Error("Invalid mode");
        };
        exports2.isValid = function isValid(mode2) {
          return mode2 && mode2.bit && mode2.ccBits;
        };
        function fromString(string) {
          if (typeof string !== "string") {
            throw new Error("Param is not a string");
          }
          const lcStr = string.toLowerCase();
          switch (lcStr) {
            case "numeric":
              return exports2.NUMERIC;
            case "alphanumeric":
              return exports2.ALPHANUMERIC;
            case "kanji":
              return exports2.KANJI;
            case "byte":
              return exports2.BYTE;
            default:
              throw new Error("Unknown mode: " + string);
          }
        }
        exports2.from = function from(value, defaultValue) {
          if (exports2.isValid(value)) {
            return value;
          }
          try {
            return fromString(value);
          } catch (e) {
            return defaultValue;
          }
        };
      })(mode);
      (function(exports2) {
        const Utils2 = utils$1;
        const ECCode2 = errorCorrectionCode;
        const ECLevel2 = errorCorrectionLevel;
        const Mode2 = mode;
        const VersionCheck = versionCheck;
        const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
        const G18_BCH = Utils2.getBCHDigit(G18);
        function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
          for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
            if (length <= exports2.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
              return currentVersion;
            }
          }
          return void 0;
        }
        function getReservedBitsCount(mode2, version2) {
          return Mode2.getCharCountIndicator(mode2, version2) + 4;
        }
        function getTotalBitsFromDataArray(segments2, version2) {
          let totalBits = 0;
          segments2.forEach(function(data) {
            const reservedBits = getReservedBitsCount(data.mode, version2);
            totalBits += reservedBits + data.getBitsLength();
          });
          return totalBits;
        }
        function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
          for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
            const length = getTotalBitsFromDataArray(segments2, currentVersion);
            if (length <= exports2.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
              return currentVersion;
            }
          }
          return void 0;
        }
        exports2.from = function from(value, defaultValue) {
          if (VersionCheck.isValid(value)) {
            return parseInt(value, 10);
          }
          return defaultValue;
        };
        exports2.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
          if (!VersionCheck.isValid(version2)) {
            throw new Error("Invalid QR Code version");
          }
          if (typeof mode2 === "undefined")
            mode2 = Mode2.BYTE;
          const totalCodewords = Utils2.getSymbolTotalCodewords(version2);
          const ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
          const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
          if (mode2 === Mode2.MIXED)
            return dataTotalCodewordsBits;
          const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
          switch (mode2) {
            case Mode2.NUMERIC:
              return Math.floor(usableBits / 10 * 3);
            case Mode2.ALPHANUMERIC:
              return Math.floor(usableBits / 11 * 2);
            case Mode2.KANJI:
              return Math.floor(usableBits / 13);
            case Mode2.BYTE:
            default:
              return Math.floor(usableBits / 8);
          }
        };
        exports2.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel2) {
          let seg;
          const ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
          if (Array.isArray(data)) {
            if (data.length > 1) {
              return getBestVersionForMixedData(data, ecl);
            }
            if (data.length === 0) {
              return 1;
            }
            seg = data[0];
          } else {
            seg = data;
          }
          return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
        };
        exports2.getEncodedBits = function getEncodedBits(version2) {
          if (!VersionCheck.isValid(version2) || version2 < 7) {
            throw new Error("Invalid QR Code version");
          }
          let d = version2 << 12;
          while (Utils2.getBCHDigit(d) - G18_BCH >= 0) {
            d ^= G18 << Utils2.getBCHDigit(d) - G18_BCH;
          }
          return version2 << 12 | d;
        };
      })(version);
      var formatInfo = {};
      const Utils$3 = utils$1;
      const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      const G15_BCH = Utils$3.getBCHDigit(G15);
      formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
        const data = errorCorrectionLevel2.bit << 3 | mask;
        let d = data << 10;
        while (Utils$3.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils$3.getBCHDigit(d) - G15_BCH;
        }
        return (data << 10 | d) ^ G15_MASK;
      };
      var segments = {};
      const Mode$4 = mode;
      function NumericData(data) {
        this.mode = Mode$4.NUMERIC;
        this.data = data.toString();
      }
      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };
      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };
      NumericData.prototype.write = function write(bitBuffer2) {
        let i, group, value;
        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer2.put(value, 10);
        }
        const remainingNum = this.data.length - i;
        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer2.put(value, remainingNum * 3 + 1);
        }
      };
      var numericData = NumericData;
      const Mode$3 = mode;
      const ALPHA_NUM_CHARS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function AlphanumericData(data) {
        this.mode = Mode$3.ALPHANUMERIC;
        this.data = data;
      }
      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };
      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };
      AlphanumericData.prototype.write = function write(bitBuffer2) {
        let i;
        for (i = 0; i + 2 <= this.data.length; i += 2) {
          let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
          bitBuffer2.put(value, 11);
        }
        if (this.data.length % 2) {
          bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };
      var alphanumericData = AlphanumericData;
      var encodeUtf8$1 = function encodeUtf82(input) {
        var result = [];
        var size2 = input.length;
        for (var index = 0; index < size2; index++) {
          var point = input.charCodeAt(index);
          if (point >= 55296 && point <= 56319 && size2 > index + 1) {
            var second = input.charCodeAt(index + 1);
            if (second >= 56320 && second <= 57343) {
              point = (point - 55296) * 1024 + second - 56320 + 65536;
              index += 1;
            }
          }
          if (point < 128) {
            result.push(point);
            continue;
          }
          if (point < 2048) {
            result.push(point >> 6 | 192);
            result.push(point & 63 | 128);
            continue;
          }
          if (point < 55296 || point >= 57344 && point < 65536) {
            result.push(point >> 12 | 224);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
          }
          if (point >= 65536 && point <= 1114111) {
            result.push(point >> 18 | 240);
            result.push(point >> 12 & 63 | 128);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
          }
          result.push(239, 191, 189);
        }
        return new Uint8Array(result).buffer;
      };
      const encodeUtf8 = encodeUtf8$1;
      const Mode$2 = mode;
      function ByteData(data) {
        this.mode = Mode$2.BYTE;
        if (typeof data === "string") {
          data = encodeUtf8(data);
        }
        this.data = new Uint8Array(data);
      }
      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };
      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };
      ByteData.prototype.write = function(bitBuffer2) {
        for (let i = 0, l = this.data.length; i < l; i++) {
          bitBuffer2.put(this.data[i], 8);
        }
      };
      var byteData = ByteData;
      const Mode$1 = mode;
      const Utils$2 = utils$1;
      function KanjiData(data) {
        this.mode = Mode$1.KANJI;
        this.data = data;
      }
      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };
      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };
      KanjiData.prototype.write = function(bitBuffer2) {
        let i;
        for (i = 0; i < this.data.length; i++) {
          let value = Utils$2.toSJIS(this.data[i]);
          if (value >= 33088 && value <= 40956) {
            value -= 33088;
          } else if (value >= 57408 && value <= 60351) {
            value -= 49472;
          } else {
            throw new Error(
              "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
            );
          }
          value = (value >>> 8 & 255) * 192 + (value & 255);
          bitBuffer2.put(value, 13);
        }
      };
      var kanjiData = KanjiData;
      var dijkstra = { exports: {} };
      (function(module2) {
        var dijkstra2 = {
          single_source_shortest_paths: function(graph, s, d) {
            var predecessors = {};
            var costs = {};
            costs[s] = 0;
            var open = dijkstra2.PriorityQueue.make();
            open.push(s, 0);
            var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
            while (!open.empty()) {
              closest = open.pop();
              u = closest.value;
              cost_of_s_to_u = closest.cost;
              adjacent_nodes = graph[u] || {};
              for (v in adjacent_nodes) {
                if (adjacent_nodes.hasOwnProperty(v)) {
                  cost_of_e = adjacent_nodes[v];
                  cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                  cost_of_s_to_v = costs[v];
                  first_visit = typeof costs[v] === "undefined";
                  if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                  }
                }
              }
            }
            if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
              var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
              throw new Error(msg);
            }
            return predecessors;
          },
          extract_shortest_path_from_predecessor_list: function(predecessors, d) {
            var nodes = [];
            var u = d;
            while (u) {
              nodes.push(u);
              predecessors[u];
              u = predecessors[u];
            }
            nodes.reverse();
            return nodes;
          },
          find_path: function(graph, s, d) {
            var predecessors = dijkstra2.single_source_shortest_paths(graph, s, d);
            return dijkstra2.extract_shortest_path_from_predecessor_list(
              predecessors,
              d
            );
          },
          /**
           * A very naive priority queue implementation.
           */
          PriorityQueue: {
            make: function(opts) {
              var T = dijkstra2.PriorityQueue, t = {}, key;
              opts = opts || {};
              for (key in T) {
                if (T.hasOwnProperty(key)) {
                  t[key] = T[key];
                }
              }
              t.queue = [];
              t.sorter = opts.sorter || T.default_sorter;
              return t;
            },
            default_sorter: function(a, b) {
              return a.cost - b.cost;
            },
            /**
             * Add a new item to the queue and ensure the highest priority element
             * is at the front of the queue.
             */
            push: function(value, cost) {
              var item = { value, cost };
              this.queue.push(item);
              this.queue.sort(this.sorter);
            },
            /**
             * Return the highest priority element in the queue.
             */
            pop: function() {
              return this.queue.shift();
            },
            empty: function() {
              return this.queue.length === 0;
            }
          }
        };
        {
          module2.exports = dijkstra2;
        }
      })(dijkstra);
      var dijkstraExports = dijkstra.exports;
      (function(exports2) {
        const Mode2 = mode;
        const NumericData2 = numericData;
        const AlphanumericData2 = alphanumericData;
        const ByteData2 = byteData;
        const KanjiData2 = kanjiData;
        const Regex = regex;
        const Utils2 = utils$1;
        const dijkstra2 = dijkstraExports;
        function getStringByteLength(str) {
          return unescape(encodeURIComponent(str)).length;
        }
        function getSegments(regex2, mode2, str) {
          const segments2 = [];
          let result;
          while ((result = regex2.exec(str)) !== null) {
            segments2.push({
              data: result[0],
              index: result.index,
              mode: mode2,
              length: result[0].length
            });
          }
          return segments2;
        }
        function getSegmentsFromString(dataStr) {
          const numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
          const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
          let byteSegs;
          let kanjiSegs;
          if (Utils2.isKanjiModeEnabled()) {
            byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
            kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
          } else {
            byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
            kanjiSegs = [];
          }
          const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
          return segs.sort(function(s1, s2) {
            return s1.index - s2.index;
          }).map(function(obj) {
            return {
              data: obj.data,
              mode: obj.mode,
              length: obj.length
            };
          });
        }
        function getSegmentBitsLength(length, mode2) {
          switch (mode2) {
            case Mode2.NUMERIC:
              return NumericData2.getBitsLength(length);
            case Mode2.ALPHANUMERIC:
              return AlphanumericData2.getBitsLength(length);
            case Mode2.KANJI:
              return KanjiData2.getBitsLength(length);
            case Mode2.BYTE:
              return ByteData2.getBitsLength(length);
          }
        }
        function mergeSegments(segs) {
          return segs.reduce(function(acc, curr) {
            const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
            if (prevSeg && prevSeg.mode === curr.mode) {
              acc[acc.length - 1].data += curr.data;
              return acc;
            }
            acc.push(curr);
            return acc;
          }, []);
        }
        function buildNodes(segs) {
          const nodes = [];
          for (let i = 0; i < segs.length; i++) {
            const seg = segs[i];
            switch (seg.mode) {
              case Mode2.NUMERIC:
                nodes.push([
                  seg,
                  { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
                  { data: seg.data, mode: Mode2.BYTE, length: seg.length }
                ]);
                break;
              case Mode2.ALPHANUMERIC:
                nodes.push([
                  seg,
                  { data: seg.data, mode: Mode2.BYTE, length: seg.length }
                ]);
                break;
              case Mode2.KANJI:
                nodes.push([
                  seg,
                  { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
                ]);
                break;
              case Mode2.BYTE:
                nodes.push([
                  { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
                ]);
            }
          }
          return nodes;
        }
        function buildGraph(nodes, version2) {
          const table = {};
          const graph = { start: {} };
          let prevNodeIds = ["start"];
          for (let i = 0; i < nodes.length; i++) {
            const nodeGroup = nodes[i];
            const currentNodeIds = [];
            for (let j = 0; j < nodeGroup.length; j++) {
              const node = nodeGroup[j];
              const key = "" + i + j;
              currentNodeIds.push(key);
              table[key] = { node, lastCount: 0 };
              graph[key] = {};
              for (let n = 0; n < prevNodeIds.length; n++) {
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                  graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                  table[prevNodeId].lastCount += node.length;
                } else {
                  if (table[prevNodeId])
                    table[prevNodeId].lastCount = node.length;
                  graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode2.getCharCountIndicator(node.mode, version2);
                }
              }
            }
            prevNodeIds = currentNodeIds;
          }
          for (let n = 0; n < prevNodeIds.length; n++) {
            graph[prevNodeIds[n]].end = 0;
          }
          return { map: graph, table };
        }
        function buildSingleSegment(data, modesHint) {
          let mode2;
          const bestMode = Mode2.getBestModeForData(data);
          mode2 = Mode2.from(modesHint, bestMode);
          if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
            throw new Error('"' + data + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
          }
          if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
            mode2 = Mode2.BYTE;
          }
          switch (mode2) {
            case Mode2.NUMERIC:
              return new NumericData2(data);
            case Mode2.ALPHANUMERIC:
              return new AlphanumericData2(data);
            case Mode2.KANJI:
              return new KanjiData2(data);
            case Mode2.BYTE:
              return new ByteData2(data);
          }
        }
        exports2.fromArray = function fromArray(array) {
          return array.reduce(function(acc, seg) {
            if (typeof seg === "string") {
              acc.push(buildSingleSegment(seg, null));
            } else if (seg.data) {
              acc.push(buildSingleSegment(seg.data, seg.mode));
            }
            return acc;
          }, []);
        };
        exports2.fromString = function fromString(data, version2) {
          const segs = getSegmentsFromString(data, Utils2.isKanjiModeEnabled());
          const nodes = buildNodes(segs);
          const graph = buildGraph(nodes, version2);
          const path = dijkstra2.find_path(graph.map, "start", "end");
          const optimizedSegs = [];
          for (let i = 1; i < path.length - 1; i++) {
            optimizedSegs.push(graph.table[path[i]].node);
          }
          return exports2.fromArray(mergeSegments(optimizedSegs));
        };
        exports2.rawSplit = function rawSplit(data) {
          return exports2.fromArray(
            getSegmentsFromString(data, Utils2.isKanjiModeEnabled())
          );
        };
      })(segments);
      const Utils$1 = utils$1;
      const ECLevel = errorCorrectionLevel;
      const BitBuffer = bitBuffer;
      const BitMatrix = bitMatrix;
      const AlignmentPattern = alignmentPattern;
      const FinderPattern = finderPattern;
      const MaskPattern = maskPattern;
      const ECCode = errorCorrectionCode;
      const ReedSolomonEncoder = reedSolomonEncoder;
      const Version = version;
      const FormatInfo = formatInfo;
      const Mode = mode;
      const Segments = segments;
      function setupFinderPattern(matrix, version2) {
        const size2 = matrix.size;
        const pos = FinderPattern.getPositions(version2);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || size2 <= row + r)
              continue;
            for (let c = -1; c <= 7; c++) {
              if (col + c <= -1 || size2 <= col + c)
                continue;
              if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupTimingPattern(matrix) {
        const size2 = matrix.size;
        for (let r = 8; r < size2 - 8; r++) {
          const value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      function setupAlignmentPattern(matrix, version2) {
        const pos = AlignmentPattern.getPositions(version2);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupVersionInfo(matrix, version2) {
        const size2 = matrix.size;
        const bits = Version.getEncodedBits(version2);
        let row, col, mod;
        for (let i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size2 - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
        const size2 = matrix.size;
        const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
        let i, mod;
        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1;
          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size2 - 15 + i, 8, mod, true);
          }
          if (i < 8) {
            matrix.set(8, size2 - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        }
        matrix.set(size2 - 8, 8, 1, true);
      }
      function setupData(matrix, data) {
        const size2 = matrix.size;
        let inc = -1;
        let row = size2 - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        for (let col = size2 - 1; col > 0; col -= 2) {
          if (col === 6)
            col--;
          while (true) {
            for (let c = 0; c < 2; c++) {
              if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || size2 <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      function createData(version2, errorCorrectionLevel2, segments2) {
        const buffer = new BitBuffer();
        segments2.forEach(function(data) {
          buffer.put(data.mode.bit, 4);
          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
          data.write(buffer);
        });
        const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        }
        const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
        for (let i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 17 : 236, 8);
        }
        return createCodewords(buffer, version2, errorCorrectionLevel2);
      }
      function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
        const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
        const dataTotalCodewords = totalCodewords - ecTotalCodewords;
        const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
        const blocksInGroup2 = totalCodewords % ecTotalBlocks;
        const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
        const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
        const rs = new ReedSolomonEncoder(ecCount);
        let offset = 0;
        const dcData = new Array(ecTotalBlocks);
        const ecData = new Array(ecTotalBlocks);
        let maxDataSize = 0;
        const buffer = new Uint8Array(bitBuffer2.buffer);
        for (let b = 0; b < ecTotalBlocks; b++) {
          const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
          dcData[b] = buffer.slice(offset, offset + dataSize);
          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        }
        const data = new Uint8Array(totalCodewords);
        let index = 0;
        let i, r;
        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        }
        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }
        return data;
      }
      function createSymbol(data, version2, errorCorrectionLevel2, maskPattern2) {
        let segments2;
        if (Array.isArray(data)) {
          segments2 = Segments.fromArray(data);
        } else if (typeof data === "string") {
          let estimatedVersion = version2;
          if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
          }
          segments2 = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error("Invalid data");
        }
        const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
        if (!bestVersion) {
          throw new Error("The amount of data is too big to be stored in a QR Code");
        }
        if (!version2) {
          version2 = bestVersion;
        } else if (version2 < bestVersion) {
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
          );
        }
        const dataBits = createData(version2, errorCorrectionLevel2, segments2);
        const moduleCount = Utils$1.getSymbolSize(version2);
        const modules = new BitMatrix(moduleCount);
        setupFinderPattern(modules, version2);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version2);
        setupFormatInfo(modules, errorCorrectionLevel2, 0);
        if (version2 >= 7) {
          setupVersionInfo(modules, version2);
        }
        setupData(modules, dataBits);
        if (isNaN(maskPattern2)) {
          maskPattern2 = MaskPattern.getBestMask(
            modules,
            setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
          );
        }
        MaskPattern.applyMask(maskPattern2, modules);
        setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
        return {
          modules,
          version: version2,
          errorCorrectionLevel: errorCorrectionLevel2,
          maskPattern: maskPattern2,
          segments: segments2
        };
      }
      qrcode.create = function create(data, options) {
        if (typeof data === "undefined" || data === "") {
          throw new Error("No input text");
        }
        let errorCorrectionLevel2 = ECLevel.M;
        let version2;
        let mask;
        if (typeof options !== "undefined") {
          errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version2 = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);
          if (options.toSJISFunc) {
            Utils$1.setToSJISFunction(options.toSJISFunc);
          }
        }
        return createSymbol(data, version2, errorCorrectionLevel2, mask);
      };
      var canvas = {};
      var utils = {};
      (function(exports2) {
        function hex2rgba(hex2) {
          if (typeof hex2 === "number") {
            hex2 = hex2.toString();
          }
          if (typeof hex2 !== "string") {
            throw new Error("Color should be defined as hex string");
          }
          let hexCode = hex2.slice().replace("#", "").split("");
          if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
            throw new Error("Invalid hex color: " + hex2);
          }
          if (hexCode.length === 3 || hexCode.length === 4) {
            hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
              return [c, c];
            }));
          }
          if (hexCode.length === 6)
            hexCode.push("F", "F");
          const hexValue = parseInt(hexCode.join(""), 16);
          return {
            r: hexValue >> 24 & 255,
            g: hexValue >> 16 & 255,
            b: hexValue >> 8 & 255,
            a: hexValue & 255,
            hex: "#" + hexCode.slice(0, 6).join("")
          };
        }
        exports2.getOptions = function getOptions(options) {
          if (!options)
            options = {};
          if (!options.color)
            options.color = {};
          const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
          const width2 = options.width && options.width >= 21 ? options.width : void 0;
          const scale = options.scale || 4;
          return {
            width: width2,
            scale: width2 ? 4 : scale,
            margin,
            color: {
              dark: hex2rgba(options.color.dark || "#000000ff"),
              light: hex2rgba(options.color.light || "#ffffffff")
            },
            type: options.type,
            rendererOpts: options.rendererOpts || {}
          };
        };
        exports2.getScale = function getScale(qrSize, opts) {
          return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
        };
        exports2.getImageWidth = function getImageWidth(qrSize, opts) {
          const scale = exports2.getScale(qrSize, opts);
          return Math.floor((qrSize + opts.margin * 2) * scale);
        };
        exports2.qrToImageData = function qrToImageData(imgData, qr, opts) {
          const size2 = qr.modules.size;
          const data = qr.modules.data;
          const scale = exports2.getScale(size2, opts);
          const symbolSize = Math.floor((size2 + opts.margin * 2) * scale);
          const scaledMargin = opts.margin * scale;
          const palette = [opts.color.light, opts.color.dark];
          for (let i = 0; i < symbolSize; i++) {
            for (let j = 0; j < symbolSize; j++) {
              let posDst = (i * symbolSize + j) * 4;
              let pxColor = opts.color.light;
              if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
                const iSrc = Math.floor((i - scaledMargin) / scale);
                const jSrc = Math.floor((j - scaledMargin) / scale);
                pxColor = palette[data[iSrc * size2 + jSrc] ? 1 : 0];
              }
              imgData[posDst++] = pxColor.r;
              imgData[posDst++] = pxColor.g;
              imgData[posDst++] = pxColor.b;
              imgData[posDst] = pxColor.a;
            }
          }
        };
      })(utils);
      (function(exports2) {
        const Utils2 = utils;
        function clearCanvas(ctx, canvas2, size2) {
          ctx.clearRect(0, 0, canvas2.width, canvas2.height);
          if (!canvas2.style)
            canvas2.style = {};
          canvas2.height = size2;
          canvas2.width = size2;
          canvas2.style.height = size2 + "px";
          canvas2.style.width = size2 + "px";
        }
        function getCanvasElement() {
          try {
            return document.createElement("canvas");
          } catch (e) {
            throw new Error("You need to specify a canvas element");
          }
        }
        exports2.render = function render(qrData, canvas2, options) {
          let opts = options;
          let canvasEl = canvas2;
          if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
            opts = canvas2;
            canvas2 = void 0;
          }
          if (!canvas2) {
            canvasEl = getCanvasElement();
          }
          opts = Utils2.getOptions(opts);
          const size2 = Utils2.getImageWidth(qrData.modules.size, opts);
          const ctx = canvasEl.getContext("2d");
          const image = ctx.createImageData(size2, size2);
          Utils2.qrToImageData(image.data, qrData, opts);
          clearCanvas(ctx, canvasEl, size2);
          ctx.putImageData(image, 0, 0);
          return canvasEl;
        };
        exports2.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
          let opts = options;
          if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
            opts = canvas2;
            canvas2 = void 0;
          }
          if (!opts)
            opts = {};
          const canvasEl = exports2.render(qrData, canvas2, opts);
          const type = opts.type || "image/png";
          const rendererOpts = opts.rendererOpts || {};
          return canvasEl.toDataURL(type, rendererOpts.quality);
        };
      })(canvas);
      var svgTag = {};
      const Utils = utils;
      function getColorAttrib(color, attrib) {
        const alpha = color.a / 255;
        const str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }
      function svgCmd(cmd, x, y) {
        let str = cmd + x;
        if (typeof y !== "undefined")
          str += " " + y;
        return str;
      }
      function qrToPath(data, size2, margin) {
        let path = "";
        let moveBy = 0;
        let newRow = false;
        let lineLength = 0;
        for (let i = 0; i < data.length; i++) {
          const col = Math.floor(i % size2);
          const row = Math.floor(i / size2);
          if (!col && !newRow)
            newRow = true;
          if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
              moveBy = 0;
              newRow = false;
            }
            if (!(col + 1 < size2 && data[i + 1])) {
              path += svgCmd("h", lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }
        return path;
      }
      svgTag.render = function render(qrData, options, cb) {
        const opts = Utils.getOptions(options);
        const size2 = qrData.modules.size;
        const data = qrData.modules.data;
        const qrcodesize = size2 + opts.margin * 2;
        const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
        const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size2, opts.margin) + '"/>';
        const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
        const width2 = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
        const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width2 + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
        if (typeof cb === "function") {
          cb(null, svgTag2);
        }
        return svgTag2;
      };
      const canPromise = canPromise$1;
      const QRCode = qrcode;
      const CanvasRenderer = canvas;
      const SvgRenderer = svgTag;
      function renderCanvas(renderFunc, canvas2, text, opts, cb) {
        const args = [].slice.call(arguments, 1);
        const argsNum = args.length;
        const isLastArgCb = typeof args[argsNum - 1] === "function";
        if (!isLastArgCb && !canPromise()) {
          throw new Error("Callback required as last argument");
        }
        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 2) {
            cb = text;
            text = canvas2;
            canvas2 = opts = void 0;
          } else if (argsNum === 3) {
            if (canvas2.getContext && typeof cb === "undefined") {
              cb = opts;
              opts = void 0;
            } else {
              cb = opts;
              opts = text;
              text = canvas2;
              canvas2 = void 0;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 1) {
            text = canvas2;
            canvas2 = opts = void 0;
          } else if (argsNum === 2 && !canvas2.getContext) {
            opts = text;
            text = canvas2;
            canvas2 = void 0;
          }
          return new Promise(function(resolve, reject) {
            try {
              const data = QRCode.create(text, opts);
              resolve(renderFunc(data, canvas2, opts));
            } catch (e) {
              reject(e);
            }
          });
        }
        try {
          const data = QRCode.create(text, opts);
          cb(null, renderFunc(data, canvas2, opts));
        } catch (e) {
          cb(e);
        }
      }
      browser.create = QRCode.create;
      browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
      browser.toString = renderCanvas.bind(null, function(data, _, opts) {
        return SvgRenderer.render(data, opts);
      });
      var module = {};
      (function main(global, module2, isWorker, workerSize) {
        var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
        var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
        var canDrawBitmap = function() {
          if (!global.OffscreenCanvas) {
            return false;
          }
          var canvas2 = new OffscreenCanvas(1, 1);
          var ctx = canvas2.getContext("2d");
          ctx.fillRect(0, 0, 1, 1);
          var bitmap = canvas2.transferToImageBitmap();
          try {
            ctx.createPattern(bitmap, "no-repeat");
          } catch (e) {
            return false;
          }
          return true;
        }();
        function noop2() {
        }
        function promise(func) {
          var ModulePromise = module2.exports.Promise;
          var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
          if (typeof Prom === "function") {
            return new Prom(func);
          }
          func(noop2, noop2);
          return null;
        }
        var bitmapMapper = /* @__PURE__ */ function(skipTransform, map) {
          return {
            transform: function(bitmap) {
              if (skipTransform) {
                return bitmap;
              }
              if (map.has(bitmap)) {
                return map.get(bitmap);
              }
              var canvas2 = new OffscreenCanvas(bitmap.width, bitmap.height);
              var ctx = canvas2.getContext("2d");
              ctx.drawImage(bitmap, 0, 0);
              map.set(bitmap, canvas2);
              return canvas2;
            },
            clear: function() {
              map.clear();
            }
          };
        }(canDrawBitmap, /* @__PURE__ */ new Map());
        var raf = function() {
          var TIME = Math.floor(1e3 / 60);
          var frame, cancel;
          var frames = {};
          var lastFrameTime = 0;
          if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
            frame = function(cb) {
              var id = Math.random();
              frames[id] = requestAnimationFrame(function onFrame(time) {
                if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                  lastFrameTime = time;
                  delete frames[id];
                  cb();
                } else {
                  frames[id] = requestAnimationFrame(onFrame);
                }
              });
              return id;
            };
            cancel = function(id) {
              if (frames[id]) {
                cancelAnimationFrame(frames[id]);
              }
            };
          } else {
            frame = function(cb) {
              return setTimeout(cb, TIME);
            };
            cancel = function(timer2) {
              return clearTimeout(timer2);
            };
          }
          return { frame, cancel };
        }();
        var getWorker = /* @__PURE__ */ function() {
          var worker;
          var prom;
          var resolves = {};
          function decorate(worker2) {
            function execute(options, callback) {
              worker2.postMessage({ options: options || {}, callback });
            }
            worker2.init = function initWorker(canvas2) {
              var offscreen = canvas2.transferControlToOffscreen();
              worker2.postMessage({ canvas: offscreen }, [offscreen]);
            };
            worker2.fire = function fireWorker(options, size2, done) {
              if (prom) {
                execute(options, null);
                return prom;
              }
              var id = Math.random().toString(36).slice(2);
              prom = promise(function(resolve) {
                function workerDone(msg) {
                  if (msg.data.callback !== id) {
                    return;
                  }
                  delete resolves[id];
                  worker2.removeEventListener("message", workerDone);
                  prom = null;
                  bitmapMapper.clear();
                  done();
                  resolve();
                }
                worker2.addEventListener("message", workerDone);
                execute(options, id);
                resolves[id] = workerDone.bind(null, { data: { callback: id } });
              });
              return prom;
            };
            worker2.reset = function resetWorker() {
              worker2.postMessage({ reset: true });
              for (var id in resolves) {
                resolves[id]();
                delete resolves[id];
              }
            };
          }
          return function() {
            if (worker) {
              return worker;
            }
            if (!isWorker && canUseWorker) {
              var code = [
                "var CONFETTI, SIZE = {}, module = {};",
                "(" + main.toString() + ")(this, module, true, SIZE);",
                "onmessage = function(msg) {",
                "  if (msg.data.options) {",
                "    CONFETTI(msg.data.options).then(function () {",
                "      if (msg.data.callback) {",
                "        postMessage({ callback: msg.data.callback });",
                "      }",
                "    });",
                "  } else if (msg.data.reset) {",
                "    CONFETTI && CONFETTI.reset();",
                "  } else if (msg.data.resize) {",
                "    SIZE.width = msg.data.resize.width;",
                "    SIZE.height = msg.data.resize.height;",
                "  } else if (msg.data.canvas) {",
                "    SIZE.width = msg.data.canvas.width;",
                "    SIZE.height = msg.data.canvas.height;",
                "    CONFETTI = module.exports.create(msg.data.canvas);",
                "  }",
                "}"
              ].join("\n");
              try {
                worker = new Worker(URL.createObjectURL(new Blob([code])));
              } catch (e) {
                typeof console !== void 0 && typeof console.warn === "function" ? console.warn("🎊 Could not load worker", e) : null;
                return null;
              }
              decorate(worker);
            }
            return worker;
          };
        }();
        var defaults2 = {
          particleCount: 50,
          angle: 90,
          spread: 45,
          startVelocity: 45,
          decay: 0.9,
          gravity: 1,
          drift: 0,
          ticks: 200,
          x: 0.5,
          y: 0.5,
          shapes: ["square", "circle"],
          zIndex: 100,
          colors: [
            "#26ccff",
            "#a25afd",
            "#ff5e7e",
            "#88ff5a",
            "#fcff42",
            "#ffa62d",
            "#ff36ff"
          ],
          // probably should be true, but back-compat
          disableForReducedMotion: false,
          scalar: 1
        };
        function convert(val, transform) {
          return transform ? transform(val) : val;
        }
        function isOk(val) {
          return !(val === null || val === void 0);
        }
        function prop(options, name, transform) {
          return convert(
            options && isOk(options[name]) ? options[name] : defaults2[name],
            transform
          );
        }
        function onlyPositiveInt(number) {
          return number < 0 ? 0 : Math.floor(number);
        }
        function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        function toDecimal(str) {
          return parseInt(str, 16);
        }
        function colorsToRgb(colors) {
          return colors.map(hexToRgb);
        }
        function hexToRgb(str) {
          var val = String(str).replace(/[^0-9a-f]/gi, "");
          if (val.length < 6) {
            val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
          }
          return {
            r: toDecimal(val.substring(0, 2)),
            g: toDecimal(val.substring(2, 4)),
            b: toDecimal(val.substring(4, 6))
          };
        }
        function getOrigin(options) {
          var origin = prop(options, "origin", Object);
          origin.x = prop(origin, "x", Number);
          origin.y = prop(origin, "y", Number);
          return origin;
        }
        function setCanvasWindowSize(canvas2) {
          canvas2.width = document.documentElement.clientWidth;
          canvas2.height = document.documentElement.clientHeight;
        }
        function setCanvasRectSize(canvas2) {
          var rect = canvas2.getBoundingClientRect();
          canvas2.width = rect.width;
          canvas2.height = rect.height;
        }
        function getCanvas(zIndex) {
          var canvas2 = document.createElement("canvas");
          canvas2.style.position = "fixed";
          canvas2.style.top = "0px";
          canvas2.style.left = "0px";
          canvas2.style.pointerEvents = "none";
          canvas2.style.zIndex = zIndex;
          return canvas2;
        }
        function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
          context.save();
          context.translate(x, y);
          context.rotate(rotation);
          context.scale(radiusX, radiusY);
          context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
          context.restore();
        }
        function randomPhysics(opts) {
          var radAngle = opts.angle * (Math.PI / 180);
          var radSpread = opts.spread * (Math.PI / 180);
          return {
            x: opts.x,
            y: opts.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: opts.gravity * 3,
            ovalScalar: 0.6,
            scalar: opts.scalar,
            flat: opts.flat
          };
        }
        function updateFetti(context, fetti) {
          fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
          fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
          fetti.velocity *= fetti.decay;
          if (fetti.flat) {
            fetti.wobble = 0;
            fetti.wobbleX = fetti.x + 10 * fetti.scalar;
            fetti.wobbleY = fetti.y + 10 * fetti.scalar;
            fetti.tiltSin = 0;
            fetti.tiltCos = 0;
            fetti.random = 1;
          } else {
            fetti.wobble += fetti.wobbleSpeed;
            fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
            fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
            fetti.tiltAngle += 0.1;
            fetti.tiltSin = Math.sin(fetti.tiltAngle);
            fetti.tiltCos = Math.cos(fetti.tiltAngle);
            fetti.random = Math.random() + 2;
          }
          var progress = fetti.tick++ / fetti.totalTicks;
          var x1 = fetti.x + fetti.random * fetti.tiltCos;
          var y1 = fetti.y + fetti.random * fetti.tiltSin;
          var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
          var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
          context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
          context.beginPath();
          if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) {
            context.fill(transformPath2D(
              fetti.shape.path,
              fetti.shape.matrix,
              fetti.x,
              fetti.y,
              Math.abs(x2 - x1) * 0.1,
              Math.abs(y2 - y1) * 0.1,
              Math.PI / 10 * fetti.wobble
            ));
          } else if (fetti.shape.type === "bitmap") {
            var rotation = Math.PI / 10 * fetti.wobble;
            var scaleX = Math.abs(x2 - x1) * 0.1;
            var scaleY = Math.abs(y2 - y1) * 0.1;
            var width2 = fetti.shape.bitmap.width * fetti.scalar;
            var height = fetti.shape.bitmap.height * fetti.scalar;
            var matrix = new DOMMatrix([
              Math.cos(rotation) * scaleX,
              Math.sin(rotation) * scaleX,
              -Math.sin(rotation) * scaleY,
              Math.cos(rotation) * scaleY,
              fetti.x,
              fetti.y
            ]);
            matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
            var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
            pattern.setTransform(matrix);
            context.globalAlpha = 1 - progress;
            context.fillStyle = pattern;
            context.fillRect(
              fetti.x - width2 / 2,
              fetti.y - height / 2,
              width2,
              height
            );
            context.globalAlpha = 1;
          } else if (fetti.shape === "circle") {
            context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
          } else if (fetti.shape === "star") {
            var rot = Math.PI / 2 * 3;
            var innerRadius = 4 * fetti.scalar;
            var outerRadius = 8 * fetti.scalar;
            var x = fetti.x;
            var y = fetti.y;
            var spikes = 5;
            var step = Math.PI / spikes;
            while (spikes--) {
              x = fetti.x + Math.cos(rot) * outerRadius;
              y = fetti.y + Math.sin(rot) * outerRadius;
              context.lineTo(x, y);
              rot += step;
              x = fetti.x + Math.cos(rot) * innerRadius;
              y = fetti.y + Math.sin(rot) * innerRadius;
              context.lineTo(x, y);
              rot += step;
            }
          } else {
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
            context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
            context.lineTo(Math.floor(x2), Math.floor(y2));
            context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
          }
          context.closePath();
          context.fill();
          return fetti.tick < fetti.totalTicks;
        }
        function animate(canvas2, fettis, resizer, size2, done) {
          var animatingFettis = fettis.slice();
          var context = canvas2.getContext("2d");
          var animationFrame;
          var destroy;
          var prom = promise(function(resolve) {
            function onDone() {
              animationFrame = destroy = null;
              context.clearRect(0, 0, size2.width, size2.height);
              bitmapMapper.clear();
              done();
              resolve();
            }
            function update2() {
              if (isWorker && !(size2.width === workerSize.width && size2.height === workerSize.height)) {
                size2.width = canvas2.width = workerSize.width;
                size2.height = canvas2.height = workerSize.height;
              }
              if (!size2.width && !size2.height) {
                resizer(canvas2);
                size2.width = canvas2.width;
                size2.height = canvas2.height;
              }
              context.clearRect(0, 0, size2.width, size2.height);
              animatingFettis = animatingFettis.filter(function(fetti) {
                return updateFetti(context, fetti);
              });
              if (animatingFettis.length) {
                animationFrame = raf.frame(update2);
              } else {
                onDone();
              }
            }
            animationFrame = raf.frame(update2);
            destroy = onDone;
          });
          return {
            addFettis: function(fettis2) {
              animatingFettis = animatingFettis.concat(fettis2);
              return prom;
            },
            canvas: canvas2,
            promise: prom,
            reset: function() {
              if (animationFrame) {
                raf.cancel(animationFrame);
              }
              if (destroy) {
                destroy();
              }
            }
          };
        }
        function confettiCannon(canvas2, globalOpts) {
          var isLibCanvas = !canvas2;
          var allowResize = !!prop(globalOpts || {}, "resize");
          var hasResizeEventRegistered = false;
          var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
          var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
          var worker = shouldUseWorker ? getWorker() : null;
          var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
          var initialized = canvas2 && worker ? !!canvas2.__confetti_initialized : false;
          var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
          var animationObj;
          function fireLocal(options, size2, done) {
            var particleCount = prop(options, "particleCount", onlyPositiveInt);
            var angle = prop(options, "angle", Number);
            var spread = prop(options, "spread", Number);
            var startVelocity = prop(options, "startVelocity", Number);
            var decay = prop(options, "decay", Number);
            var gravity = prop(options, "gravity", Number);
            var drift = prop(options, "drift", Number);
            var colors = prop(options, "colors", colorsToRgb);
            var ticks = prop(options, "ticks", Number);
            var shapes = prop(options, "shapes");
            var scalar = prop(options, "scalar");
            var flat = !!prop(options, "flat");
            var origin = getOrigin(options);
            var temp = particleCount;
            var fettis = [];
            var startX = canvas2.width * origin.x;
            var startY = canvas2.height * origin.y;
            while (temp--) {
              fettis.push(
                randomPhysics({
                  x: startX,
                  y: startY,
                  angle,
                  spread,
                  startVelocity,
                  color: colors[temp % colors.length],
                  shape: shapes[randomInt(0, shapes.length)],
                  ticks,
                  decay,
                  gravity,
                  drift,
                  scalar,
                  flat
                })
              );
            }
            if (animationObj) {
              return animationObj.addFettis(fettis);
            }
            animationObj = animate(canvas2, fettis, resizer, size2, done);
            return animationObj.promise;
          }
          function fire(options) {
            var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
            var zIndex = prop(options, "zIndex", Number);
            if (disableForReducedMotion && preferLessMotion) {
              return promise(function(resolve) {
                resolve();
              });
            }
            if (isLibCanvas && animationObj) {
              canvas2 = animationObj.canvas;
            } else if (isLibCanvas && !canvas2) {
              canvas2 = getCanvas(zIndex);
              document.body.appendChild(canvas2);
            }
            if (allowResize && !initialized) {
              resizer(canvas2);
            }
            var size2 = {
              width: canvas2.width,
              height: canvas2.height
            };
            if (worker && !initialized) {
              worker.init(canvas2);
            }
            initialized = true;
            if (worker) {
              canvas2.__confetti_initialized = true;
            }
            function onResize() {
              if (worker) {
                var obj = {
                  getBoundingClientRect: function() {
                    if (!isLibCanvas) {
                      return canvas2.getBoundingClientRect();
                    }
                  }
                };
                resizer(obj);
                worker.postMessage({
                  resize: {
                    width: obj.width,
                    height: obj.height
                  }
                });
                return;
              }
              size2.width = size2.height = null;
            }
            function done() {
              animationObj = null;
              if (allowResize) {
                hasResizeEventRegistered = false;
                global.removeEventListener("resize", onResize);
              }
              if (isLibCanvas && canvas2) {
                document.body.removeChild(canvas2);
                canvas2 = null;
                initialized = false;
              }
            }
            if (allowResize && !hasResizeEventRegistered) {
              hasResizeEventRegistered = true;
              global.addEventListener("resize", onResize, false);
            }
            if (worker) {
              return worker.fire(options, size2, done);
            }
            return fireLocal(options, size2, done);
          }
          fire.reset = function() {
            if (worker) {
              worker.reset();
            }
            if (animationObj) {
              animationObj.reset();
            }
          };
          return fire;
        }
        var defaultFire;
        function getDefaultFire() {
          if (!defaultFire) {
            defaultFire = confettiCannon(null, { useWorker: true, resize: true });
          }
          return defaultFire;
        }
        function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
          var path2d = new Path2D(pathString);
          var t1 = new Path2D();
          t1.addPath(path2d, new DOMMatrix(pathMatrix));
          var t2 = new Path2D();
          t2.addPath(t1, new DOMMatrix([
            Math.cos(rotation) * scaleX,
            Math.sin(rotation) * scaleX,
            -Math.sin(rotation) * scaleY,
            Math.cos(rotation) * scaleY,
            x,
            y
          ]));
          return t2;
        }
        function shapeFromPath(pathData) {
          if (!canUsePaths) {
            throw new Error("path confetti are not supported in this browser");
          }
          var path, matrix;
          if (typeof pathData === "string") {
            path = pathData;
          } else {
            path = pathData.path;
            matrix = pathData.matrix;
          }
          var path2d = new Path2D(path);
          var tempCanvas = document.createElement("canvas");
          var tempCtx = tempCanvas.getContext("2d");
          if (!matrix) {
            var maxSize = 1e3;
            var minX = maxSize;
            var minY = maxSize;
            var maxX = 0;
            var maxY = 0;
            var width2, height;
            for (var x = 0; x < maxSize; x += 2) {
              for (var y = 0; y < maxSize; y += 2) {
                if (tempCtx.isPointInPath(path2d, x, y, "nonzero")) {
                  minX = Math.min(minX, x);
                  minY = Math.min(minY, y);
                  maxX = Math.max(maxX, x);
                  maxY = Math.max(maxY, y);
                }
              }
            }
            width2 = maxX - minX;
            height = maxY - minY;
            var maxDesiredSize = 10;
            var scale = Math.min(maxDesiredSize / width2, maxDesiredSize / height);
            matrix = [
              scale,
              0,
              0,
              scale,
              -Math.round(width2 / 2 + minX) * scale,
              -Math.round(height / 2 + minY) * scale
            ];
          }
          return {
            type: "path",
            path,
            matrix
          };
        }
        function shapeFromText(textData) {
          var text, scalar = 1, color = "#000000", fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
          if (typeof textData === "string") {
            text = textData;
          } else {
            text = textData.text;
            scalar = "scalar" in textData ? textData.scalar : scalar;
            fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
            color = "color" in textData ? textData.color : color;
          }
          var fontSize = 10 * scalar;
          var font = "" + fontSize + "px " + fontFamily;
          var canvas2 = new OffscreenCanvas(fontSize, fontSize);
          var ctx = canvas2.getContext("2d");
          ctx.font = font;
          var size2 = ctx.measureText(text);
          var width2 = Math.ceil(size2.actualBoundingBoxRight + size2.actualBoundingBoxLeft);
          var height = Math.ceil(size2.actualBoundingBoxAscent + size2.actualBoundingBoxDescent);
          var padding = 2;
          var x = size2.actualBoundingBoxLeft + padding;
          var y = size2.actualBoundingBoxAscent + padding;
          width2 += padding + padding;
          height += padding + padding;
          canvas2 = new OffscreenCanvas(width2, height);
          ctx = canvas2.getContext("2d");
          ctx.font = font;
          ctx.fillStyle = color;
          ctx.fillText(text, x, y);
          var scale = 1 / scalar;
          return {
            type: "bitmap",
            // TODO these probably need to be transfered for workers
            bitmap: canvas2.transferToImageBitmap(),
            matrix: [scale, 0, 0, scale, -width2 * scale / 2, -height * scale / 2]
          };
        }
        module2.exports = function() {
          return getDefaultFire().apply(this, arguments);
        };
        module2.exports.reset = function() {
          getDefaultFire().reset();
        };
        module2.exports.create = confettiCannon;
        module2.exports.shapeFromPath = shapeFromPath;
        module2.exports.shapeFromText = shapeFromText;
      })(function() {
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof self !== "undefined") {
          return self;
        }
        return this || {};
      }(), module, false);
      const confetti = module.exports;
      module.exports.create;
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      function fireworks() {
        const duration = 15 * 1e3;
        const animationEnd = Date.now() + duration;
        const defaults2 = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
        const interval = setInterval(() => {
          const timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0)
            return clearInterval(interval);
          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults2, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults2, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }
      const { closeRob } = useRob();
      const isShowZfbDialog = vue.ref(false);
      const currentRow = vue.ref();
      const currentDetail = vue.ref();
      const qrcodeUrl = vue.ref("");
      const { geetestObj, loadCaptcha, initCaptchaValue, lastCaptchaTime } = useCaptcha();
      const countdownText = vue.ref(``);
      const currentStep = vue.ref("selectAdditionalService");
      const additionalService = vue.ref();
      const transferServiceObj = vue.ref();
      function showQrcode(str) {
        const opts = {
          errorCorrectionLevel: "Q",
          quality: 1,
          margin: 1,
          width: 300,
          color: {
            dark: "#1688ff",
            light: "#fff"
          }
        };
        browser.toDataURL(str, opts, (err, url) => {
          if (err) {
            errNotify("生成二维码失败");
            return;
          }
          qrcodeUrl.value = url;
        });
      }
      const additionalServiceSum = vue.computed(() => {
        var _a;
        return ((_a = additionalService.value) == null ? void 0 : _a.reduce((acc, curr) => {
          var _a2;
          if (curr.selected) {
            if (curr.name === "transfer_service")
              acc += ((_a2 = transferServiceObj.value) == null ? void 0 : _a2.value) || 0;
            else
              acc += curr.value;
          }
          return acc;
        }, 0)) || 0;
      });
      async function createOrder(row, type) {
        let additionalSum = 0;
        if (type === 2)
          additionalSum = additionalServiceSum.value || 0;
        const res = await createOrderApi(row, geetestObj.value, type, additionalSum, transferServiceObj.value, additionalService.value);
        if (res.code === 1) {
          pay(res.data.order_id, type);
        } else {
          errNotify(res.msg);
          isShowZfbDialog.value = false;
        }
        initCaptchaValue();
      }
      function pay(orderId, type) {
        payApi(orderId, type).then((res) => {
          const data = res.data;
          const pay_attach = data.pay_attach;
          showQrcode(pay_attach);
          checkOrderStatus(orderId, type);
        });
      }
      function checkOrderStatus(orderId, orderType) {
        let startTime = Date.now();
        const checkStatus = async () => {
          if (Date.now() - startTime > 2 * 60 * 1e3)
            return;
          const res = await getOrderStatusApi(orderId, orderType);
          const data = res.data;
          if (data.state === 3) {
            successNotify(`[ ${orderId} ] 订单已支付成功`);
            isShowZfbDialog.value = false;
          } else if (data.state === 2) {
            infoNotify(`[ ${orderId} ] 订单已关闭`);
            isShowZfbDialog.value = false;
            return;
          } else if (data.state === 5) {
            successNotify("恭喜小红手成功抢到商品！！！");
            fireworks();
            isShowZfbDialog.value = false;
            addSuccessCount();
            return;
          } else if (data.state === 7) {
            warningNotify(`很遗憾，[ ${orderId} ] 订单已退款`);
            isShowZfbDialog.value = false;
            return;
          }
          setTimeout(checkStatus, 2 * 1e3);
        };
        startTime = Date.now();
        setTimeout(checkStatus, 2 * 1e3);
      }
      async function beforeOpenDialog(row) {
        if (!(row && row.consignment_id)) {
          errNotify("无法获取商品信息，请稍后再试");
          return false;
        }
        const isEligibleForPurchase = row.state === 5 || row.state === 3 && (row == null ? void 0 : row.end_time) && row.end_time - Date.now() < 5 * 60 * 1e3;
        if (!isEligibleForPurchase) {
          warningNotify("请选择 [ 在售期 ] 或 [ 公示期仅剩 5 分钟 ] 的商品进行抢购");
          return false;
        }
        if (!isHaveRole(row.type)) {
          closeRob();
          return false;
        }
        if (!geetestObj.value) {
          warningNotify("请先完成验证码验证");
          await loadCaptcha();
          return false;
        }
        if (row.state === 3 && (row == null ? void 0 : row.end_time) && row.end_time - lastCaptchaTime.value > 5 * 60 * 1e3) {
          warningNotify("验证码即将过期，请重新验证");
          await loadCaptcha();
          return false;
        }
        return true;
      }
      let stopPolling = false;
      async function waitBuy(detail, type) {
        let isNotification = false;
        let remainingTime = detail.remaining_time;
        let count = 0;
        countdownText.value = `公示期结束倒计时：${remainingTime} 秒`;
        const checkState = async () => {
          if (stopPolling)
            return;
          if (remainingTime > 30) {
            count++;
            if (count % 10 === 0) {
              const res = await getDetailInfoApi(detail.consignment_id, type);
              const data = res.data;
              remainingTime = data.remaining_time;
            } else {
              remainingTime--;
            }
            countdownText.value = `公示期结束倒计时：${remainingTime} 秒`;
          } else {
            const res = await getDetailInfoApi(detail.consignment_id, type);
            const data = res.data;
            remainingTime = data.remaining_time;
            countdownText.value = data.state === 5 ? "请使用支付宝扫描二维码支付" : `公示期结束倒计时：${remainingTime} 秒`;
            if (data.state === 5) {
              await createOrder(data, type);
              stopPolling = true;
              return;
            } else if (data.remaining_time <= 6 && !isNotification) {
              sendEndOfPeriodNotification(data.info, data.single_unit_price, data.remaining_time, data.thumb);
              isNotification = true;
            }
          }
          if (remainingTime <= 6)
            setTimeout(checkState, 100);
          else
            setTimeout(checkState, 1e3);
        };
        await checkState();
      }
      async function createOrderInSalePeriod(detail, type) {
        countdownText.value = "请使用支付宝扫描二维码支付";
        isShowZfbDialog.value = true;
        await vue.nextTick(async () => {
          await createOrder(detail, type);
        });
      }
      async function waitBuyInPublicityPeriod(detail, type) {
        isShowZfbDialog.value = true;
        await vue.nextTick(async () => {
          stopPolling = false;
          await waitBuy(detail, type);
        });
      }
      async function handleRoleType(row) {
        if (row.type === 2) {
          const res = await getAdditionalServiceApi(row.consignment_id);
          additionalService.value = res.data.list.map((item) => ({ ...item, selected: item.must_selected }));
          currentStep.value = "selectAdditionalService";
        } else {
          currentStep.value = "pay";
          if (row.state === 5)
            await createOrderInSalePeriod(currentDetail.value, row.type);
          else
            await waitBuyInPublicityPeriod(currentDetail.value, row.type);
        }
      }
      async function nextStep() {
        var _a, _b;
        const isTransferService = ((_b = (_a = additionalService.value) == null ? void 0 : _a.find((item) => item.name === "transfer_service")) == null ? void 0 : _b.selected) || false;
        if (isTransferService && !transferServiceObj.value) {
          errNotify("请选择区服");
          return;
        }
        currentStep.value = "pay";
        if (currentRow.value.state === 5)
          await createOrderInSalePeriod(currentDetail.value, 2);
        else
          await waitBuyInPublicityPeriod(currentDetail.value, 2);
      }
      function useZfbDialog() {
        const openZfbDialog = async (row) => {
          if (!await beforeOpenDialog(row))
            return;
          qrcodeUrl.value = "";
          currentRow.value = row;
          const res = await getDetailInfoApi(row.consignment_id, row.type);
          if (res && res.data) {
            currentDetail.value = res.data;
            const detail = res.data;
            switch (detail.state) {
              case 5:
                await handleRoleType(row);
                isShowZfbDialog.value = true;
                break;
              case 3:
                await handleRoleType(row);
                isShowZfbDialog.value = true;
                break;
              case 6:
                errNotify("商品已售出");
                break;
              case 7:
                errNotify("商品已下架");
                break;
              default:
                errNotify("商品状态异常，请刷新后重试");
            }
          } else {
            errNotify("无法获取商品信息，请稍后再试");
          }
        };
        const closeZfbDialog = () => {
          stopPolling = true;
          isShowZfbDialog.value = false;
          currentRow.value = void 0;
          additionalService.value = void 0;
          currentDetail.value = void 0;
          infoNotify("已停止抢购");
        };
        return {
          isShowZfbDialog,
          openZfbDialog,
          closeZfbDialog,
          currentRow,
          qrcodeUrl,
          additionalService,
          countdownText,
          currentStep,
          currentDetail,
          transferServiceObj,
          additionalServiceSum,
          nextStep
        };
      }
      const _hoisted_1$5 = { class: "ml-2 text-red font-bold" };
      const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
        __name: "CheckItem",
        props: /* @__PURE__ */ vue.mergeModels({
          disabled: Boolean,
          title: String,
          subInfo: String,
          price: Number
        }, {
          "modelValue": { type: Boolean },
          "modelModifiers": {}
        }),
        emits: ["update:modelValue"],
        setup(__props) {
          const selected = vue.useModel(__props, "modelValue");
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createVNode(QItemSection, {
                side: "",
                top: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(QCheckbox, {
                    modelValue: selected.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
                    disable: __props.disabled,
                    "checked-icon": "i-pixelarticons-checkbox",
                    "unchecked-icon": "i-pixelarticons-checkbox-on",
                    color: "teal"
                  }, null, 8, ["modelValue", "disable"])
                ]),
                _: 1
              }),
              vue.createVNode(QItemSection, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(QItemLabel, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(__props.title) + " ", 1),
                      vue.createElementVNode("span", _hoisted_1$5, vue.toDisplayString(__props.price || 0), 1)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(QItemLabel, { caption: "" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(__props.subInfo), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 64);
          };
        }
      });
      const _hoisted_1$4 = { class: "text-h7" };
      const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
        __name: "CardHeader",
        props: { title: String },
        emits: ["close"],
        setup(__props, { emit: __emit }) {
          const emit = __emit;
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(QCardSection, { class: "row q-pb-none items-center" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_1$4, vue.toDisplayString(__props.title), 1),
                vue.createVNode(QSpace),
                vue.createVNode(_sfc_main$a, {
                  icon: "i-pixelarticons-close",
                  color: "red",
                  class: "absolute right-2 top-2",
                  dense: "",
                  flat: "",
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
                })
              ]),
              _: 1
            });
          };
        }
      });
      const _hoisted_1$3 = { "ml-4": "" };
      const _hoisted_2$1 = {
        "mx-1": "",
        "text-red": "",
        font: "bold size-4"
      };
      const _hoisted_3$1 = { id: "qrcode" };
      const _hoisted_4 = { class: "q-mt-sm q-mb-xs text-h6 flex items-center gap-2" };
      const _hoisted_5 = { class: "text-4 text-red" };
      const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
        __name: "ZfbDialog",
        setup(__props) {
          const {
            transferServiceObj: transferServiceObj2,
            currentDetail: currentDetail2,
            additionalService: additionalService2,
            currentStep: currentStep2,
            isShowZfbDialog: isShowZfbDialog2,
            currentRow: currentRow2,
            closeZfbDialog,
            qrcodeUrl: qrcodeUrl2,
            countdownText: countdownText2,
            additionalServiceSum: additionalServiceSum2,
            nextStep: nextStep2
          } = useZfbDialog();
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(QDialog, {
              modelValue: vue.unref(isShowZfbDialog2),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(isShowZfbDialog2) ? isShowZfbDialog2.value = $event : null),
              persistent: "",
              "transition-show": "scale",
              "transition-hide": "scale"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(QCard, {
                  flat: "",
                  bordered: "",
                  "min-w-332px": ""
                }, {
                  default: vue.withCtx(() => {
                    var _a;
                    return [
                      vue.unref(currentStep2) === "selectAdditionalService" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                        vue.createVNode(_sfc_main$7, {
                          title: "请选择附加服务",
                          onClose: _cache[0] || (_cache[0] = ($event) => vue.unref(closeZfbDialog)())
                        }),
                        vue.createVNode(QCardSection, { flex: "~ col" }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(QList, null, {
                              default: vue.withCtx(() => [
                                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(additionalService2), (item) => {
                                  return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                                    key: item.desc
                                  }, [
                                    item.name === "transfer_service" ? (vue.openBlock(), vue.createBlock(QExpansionItem, {
                                      key: 0,
                                      modelValue: item.selected,
                                      "onUpdate:modelValue": ($event) => item.selected = $event,
                                      disable: item.must_selected,
                                      dense: "",
                                      "hide-expand-icon": "",
                                      tag: "label"
                                    }, {
                                      header: vue.withCtx(() => {
                                        var _a2;
                                        return [
                                          vue.createVNode(_sfc_main$8, {
                                            modelValue: item.selected,
                                            "onUpdate:modelValue": ($event) => item.selected = $event,
                                            price: (((_a2 = vue.unref(transferServiceObj2)) == null ? void 0 : _a2.value) || 0) / 100,
                                            title: item.desc,
                                            "sub-info": `区服：${vue.unref(currentDetail2).zone_name} — ${vue.unref(currentDetail2).server_name}`,
                                            disabled: item.must_selected
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "price", "title", "sub-info", "disabled"])
                                        ];
                                      }),
                                      default: vue.withCtx(() => [
                                        vue.createVNode(QCard, null, {
                                          default: vue.withCtx(() => [
                                            vue.createVNode(QCardSection, {
                                              flex: "",
                                              "justify-right": ""
                                            }, {
                                              default: vue.withCtx(() => [
                                                vue.createVNode(QSelect, {
                                                  modelValue: vue.unref(transferServiceObj2),
                                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(transferServiceObj2) ? transferServiceObj2.value = $event : null),
                                                  style: { "width": "80%" },
                                                  dense: "",
                                                  options: item.option,
                                                  "option-label": (opt) => `${opt.zone_name} — ${opt.server_name}`,
                                                  "option-value": (opt) => `${opt.zone_id} — ${opt.server_name}`,
                                                  label: "区服"
                                                }, null, 8, ["modelValue", "options", "option-label", "option-value"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue", "disable"])) : item.name === "change_group_service" ? (vue.openBlock(), vue.createBlock(QItem, {
                                      key: 1,
                                      tag: "label",
                                      disable: item.must_selected
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createVNode(_sfc_main$8, {
                                          modelValue: item.selected,
                                          "onUpdate:modelValue": ($event) => item.selected = $event,
                                          price: item.value / 100,
                                          title: item.desc,
                                          "sub-info": `阵营：${vue.unref(currentDetail2).attrs.role_camp}`,
                                          disabled: item.must_selected
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "price", "title", "sub-info", "disabled"])
                                      ]),
                                      _: 2
                                    }, 1032, ["disable"])) : (vue.openBlock(), vue.createBlock(QItem, {
                                      key: 2,
                                      tag: "label",
                                      disable: item.must_selected
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createVNode(_sfc_main$8, {
                                          modelValue: item.selected,
                                          "onUpdate:modelValue": ($event) => item.selected = $event,
                                          price: item.value / 100,
                                          title: item.desc,
                                          "sub-info": item.must_selected ? "必选服务" : "非必选服务",
                                          disabled: item.must_selected
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "price", "title", "sub-info", "disabled"])
                                      ]),
                                      _: 2
                                    }, 1032, ["disable"]))
                                  ], 64);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        vue.createVNode(QCardActions, { align: "right" }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("div", _hoisted_1$3, [
                              vue.createTextVNode(" 共计："),
                              vue.createElementVNode("span", _hoisted_2$1, vue.toDisplayString(vue.unref(additionalServiceSum2) / 100), 1),
                              vue.createTextVNode(" 元 ")
                            ]),
                            vue.createVNode(QSpace),
                            vue.createVNode(QBtn, {
                              label: "下一步",
                              color: "teal",
                              flat: "",
                              onClick: vue.unref(nextStep2)
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ], 64)) : vue.unref(currentStep2) === "pay" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                        vue.createVNode(_sfc_main$7, {
                          title: vue.unref(countdownText2) || "请使用支付宝扫描二维码支付",
                          onClose: _cache[2] || (_cache[2] = ($event) => vue.unref(closeZfbDialog)())
                        }, null, 8, ["title"]),
                        vue.createVNode(QCardSection, { class: "flex justify-center" }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("div", _hoisted_3$1, [
                              vue.createVNode(QImg, { src: vue.unref(qrcodeUrl2) }, null, 8, ["src"])
                            ])
                          ]),
                          _: 1
                        }),
                        vue.createVNode(QCardSection, null, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("div", _hoisted_4, [
                              vue.createVNode(QImg, {
                                src: vue.unref(currentRow2).goods_icon_url,
                                width: "50px"
                              }, null, 8, ["src"]),
                              vue.createElementVNode("span", null, vue.toDisplayString(`${vue.unref(currentRow2).role_sect} ${vue.unref(currentRow2).goods_name}`), 1),
                              vue.createVNode(QIcon, {
                                name: "jx3_yuan",
                                size: "xs"
                              }),
                              vue.createElementVNode("span", _hoisted_5, vue.toDisplayString(vue.unref(currentRow2).goods_price / 100) + " 元", 1)
                            ])
                          ]),
                          _: 1
                        }),
                        ((_a = vue.unref(currentRow2)) == null ? void 0 : _a.type) === 2 ? (vue.openBlock(), vue.createBlock(QCardSection, { key: 0 }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(QList, { dense: "" }, {
                              default: vue.withCtx(() => [
                                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(additionalService2), (item) => {
                                  return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                                    key: item.desc
                                  }, [
                                    item.selected ? (vue.openBlock(), vue.createBlock(QItem, { key: 0 }, {
                                      default: vue.withCtx(() => [
                                        vue.createVNode(QItemSection, null, {
                                          default: vue.withCtx(() => [
                                            vue.createTextVNode(vue.toDisplayString(item.desc), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        vue.createVNode(QItemSection, {
                                          side: "",
                                          class: "font-size-4 text-red font-bold"
                                        }, {
                                          default: vue.withCtx(() => [
                                            vue.createTextVNode(vue.toDisplayString(item.name === "transfer_service" ? vue.unref(transferServiceObj2).value / 100 : item.value / 100) + " 元 ", 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)) : vue.createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                vue.createVNode(QItem, null, {
                                  default: vue.withCtx(() => [
                                    vue.createVNode(QItemSection, null, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(" 附加服务合计 ")
                                      ]),
                                      _: 1
                                    }),
                                    vue.createVNode(QItemSection, {
                                      side: "",
                                      class: "font-size-4 text-red font-bold"
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(vue.toDisplayString(vue.unref(additionalServiceSum2) / 100) + " 元 ", 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vue.createVNode(QItem, null, {
                                  default: vue.withCtx(() => [
                                    vue.createVNode(QItemSection, null, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(" 总价 ")
                                      ]),
                                      _: 1
                                    }),
                                    vue.createVNode(QItemSection, {
                                      side: "",
                                      class: "font-size-6 text-red font-bold"
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(vue.toDisplayString((vue.unref(currentRow2).goods_price + vue.unref(additionalServiceSum2)) / 100) + " 元 ", 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : vue.createCommentVNode("", true)
                      ], 64)) : vue.createCommentVNode("", true)
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });
      const _export_sfc = (sfc, props) => {
        const target2 = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target2[key] = val;
        }
        return target2;
      };
      const ZfbDialog = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2bc39d75"]]);
      class HoverShowImg {
        constructor() {
          __publicField(this, "domSelectors");
          __publicField(this, "abortController");
          __publicField(this, "lastPromise");
          // 最后一个promise
          __publicField(this, "popUpImgFixedDiv", null);
          __publicField(this, "popUpImg", null);
          __publicField(this, "hoverContentDiv", null);
          __publicField(this, "hoverLoadingDiv", null);
          __publicField(this, "replaceReg", /(·（替）)|(（替）)$/);
          __publicField(this, "replaceMap", /* @__PURE__ */ new Map([["清光彩璨礼盒", "清光彩璨·琉华礼盒"]]));
          this.domSelectors = {
            roleCloth: "app-web-components-modal-components-role-detail-styles-index-m__positionRelative--3gVPE",
            goodsName: "app-web-page-follow-components-styles-components-m__fs16--3K4S5"
          };
          this.abortController = new AbortController();
          this.lastPromise = null;
        }
        init() {
          this.addTooltipImg();
          const pathName = location.pathname;
          if (pathName === "/follow") {
            const div = document.querySelectorAll(`.${this.domSelectors.goodsName}`);
            if (div && div.length > 0) {
              for (const item of Array.from(div)) {
                const name = item.textContent;
                const parent = item.parentElement;
                this.setShowImgEventListener(parent, name, -40, 100);
              }
            } else {
              this.observerDom(document.body, this.aTentListObserverCallback.bind(this));
            }
          }
          this.observerDom(document.body, this.aTentListObserverCallback.bind(this));
          if (pathName === "/follow" || pathName === "/buyer")
            this.observerDom(document.body, this.hoverImgCallback.bind(this));
        }
        async aTentListObserverCallback(mutationsList) {
          for (const mutation of mutationsList) {
            if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach((node) => {
                if (node instanceof HTMLDivElement && node.classList.contains(this.domSelectors.goodsName)) {
                  const name = node.textContent;
                  const parent = node.parentElement;
                  this.setShowImgEventListener(parent, name, -40, 100);
                }
              });
            }
          }
        }
        waitDomBySelector(selector, timeout = 5e3) {
          return new Promise((resolve, reject) => {
            const startTime = Date.now();
            const waitDom = () => {
              const dom = document.querySelector(selector);
              if (dom !== null)
                resolve(dom);
              else if (Date.now() - startTime > timeout)
                reject(new Error(`Timeout waiting for ${selector}`));
              else
                requestAnimationFrame(waitDom);
            };
            waitDom();
          });
        }
        preprocessName(name) {
          if (this.replaceReg.test(name))
            return name.replace(this.replaceReg, "");
          return this.replaceMap.get(name) || name;
        }
        isSetHoverImg(src, name, type = "") {
          const blockUrls = /* @__PURE__ */ new Set([
            "https://jx3wbl.xoyocdn.com/img/icon-no-equipment-resource.d1bae5d2.jpg",
            "https://dl.pvp.xoyo.com/prod/icons/baoxiang12.png?v=2",
            "https://dl.pvp.xoyo.com/prod/icons/biaoju09.png?v=2"
          ]);
          const blockUrlKeyWords = [
            "https://dl.pvp.xoyo.com/prod/icons/item_21_7_5_",
            "https://dl.pvp.xoyo.com/prod/icons/item_23_9_26",
            "https://dl.pvp.xoyo.com/prod/icons/tome"
          ];
          const blockNameReg = /·(一|二|三|四|五)$/;
          const blockNameRegPre = /^(发型)·/;
          const blockKeyWords = ["芽芽", "表情包", "佩囊"];
          const blockNames = /* @__PURE__ */ new Set(["鼠栗栗", "鼠萌萌", "喵乌乌", "耳绒绒"]);
          const typeBlock = /* @__PURE__ */ new Set(["佩囊", "小头像", "宠物", "马具", "手饰", "眼饰", "肩饰", "面挂", "背挂", "腰挂"]);
          const isTypeBlocked = type !== "" && typeBlock.has(type);
          const isUrlBlocked = blockUrls.has(src) || blockUrlKeyWords.some((item) => src.includes(item));
          const isNameBlocked = blockNameReg.test(name) || blockNameRegPre.test(name) || blockNames.has(name) || blockKeyWords.some((item) => name.includes(item));
          return !isTypeBlocked && !isUrlBlocked && !isNameBlocked;
        }
        /**
         * 添加悬浮框图片
         * @private
         */
        addTooltipImg() {
          const popUpImgFixedDiv = document.createElement("div");
          popUpImgFixedDiv.classList.add("popUpImgFixed");
          const div = document.createElement("div");
          popUpImgFixedDiv.appendChild(div);
          const img = document.createElement("img");
          img.classList.add("popUpImg");
          div.appendChild(img);
          const hoverContentDiv = document.createElement("div");
          hoverContentDiv.classList.add("hover-content");
          hoverContentDiv.textContent = "暂无外观展示图";
          popUpImgFixedDiv.appendChild(hoverContentDiv);
          const hoverLoadingDiv = document.createElement("div");
          hoverLoadingDiv.classList.add("hover-loading");
          popUpImgFixedDiv.appendChild(hoverLoadingDiv);
          popUpImgFixedDiv.addEventListener("mouseenter", () => {
            popUpImgFixedDiv.style.display = "flex";
          });
          popUpImgFixedDiv.addEventListener("mouseleave", () => {
            popUpImgFixedDiv.style.display = "none";
          });
          this.popUpImgFixedDiv = popUpImgFixedDiv;
          this.popUpImg = img;
          this.hoverContentDiv = hoverContentDiv;
          this.hoverLoadingDiv = hoverLoadingDiv;
          document.body.appendChild(popUpImgFixedDiv);
        }
        showImgLoading() {
          this.popUpImg.style.display = "none";
          this.hoverContentDiv.style.display = "none";
          this.hoverLoadingDiv.style.display = "block";
        }
        hideImgLoading() {
          this.hoverLoadingDiv.style.display = "none";
        }
        showImgError() {
          this.popUpImg.style.display = "none";
          this.popUpImg.src = "";
          this.hoverContentDiv.style.display = "block";
          this.hideImgLoading();
        }
        showImgSuccess(src) {
          this.popUpImg.src = src;
          this.popUpImg.onload = () => {
            this.popUpImg.style.display = "block";
            this.hoverContentDiv.style.display = "none";
            this.hideImgLoading();
          };
        }
        showHoverImg(position2) {
          this.showImgLoading();
          this.popUpImg.src = "";
          Object.assign(this.popUpImgFixedDiv.style, position2);
          this.popUpImgFixedDiv.style.display = "flex";
        }
        hideHoverImg() {
          this.showImgLoading();
          this.popUpImg.src = "";
          this.popUpImgFixedDiv.style.display = "none";
        }
        checkImage(url) {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = function() {
              resolve(true);
            };
            img.onerror = function() {
              resolve(false);
            };
            img.src = url;
          });
        }
        checkImages(urls) {
          const promises = urls.map(async (url) => {
            const isValid = await this.checkImage(url);
            if (isValid)
              return url;
            else
              return Promise.reject(new Error("URL无效"));
          });
          return Promise.any(promises);
        }
        getLocalImgUrl(name) {
          var _a;
          return ((_a = getLocalStorage("imgUrls", {})) == null ? void 0 : _a[name]) || null;
        }
        updateLocalImgUrl(name, url) {
          const imgUrls = getLocalStorage("imgUrls", {});
          imgUrls[name] = { url, updateTime: (/* @__PURE__ */ new Date()).getTime() };
          setLocalStorage("imgUrls", imgUrls);
        }
        async getImageFromUrls(name, urls) {
          try {
            const url = await this.checkImages(urls);
            this.updateLocalImgUrl(name, url);
            return url;
          } catch (e) {
            this.updateLocalImgUrl(name, "暂无展示外观图");
            return "";
          }
        }
        getClothUrl(name) {
          return `https://dl.pvp.xoyo.com/prod/icons/handbook/image/${name}-%E8%AF%A6%E6%83%85-1.png`;
        }
        generateUrlTypes(name) {
          const types = ["礼盒", "·礼盒"];
          const plusReg = /·(白发|金发)$/;
          types.unshift(plusReg.test(name) ? "·豪华" : "·标准");
          return types;
        }
        generateUrls(name, baseName, types) {
          const urls = types.map((item) => this.getClothUrl(baseName + item));
          const newBaseName = baseName.replaceAll("·", "");
          if (baseName !== newBaseName) {
            const newUrls = types.map((item) => this.getClothUrl(newBaseName + item));
            urls.push(...newUrls);
          }
          return urls;
        }
        isBox(name) {
          const reg = /·(黑发|衣|外装|左|右|白发|金发|披风|帽|发)$/;
          return !reg.test(name);
        }
        async getImgUrlByName(name) {
          if (!name)
            return "";
          name = this.preprocessName(name);
          const localUrl = this.getLocalImgUrl(name);
          if (localUrl) {
            const isDisplayImage = localUrl.url !== "暂无展示外观图";
            const currentTime = (/* @__PURE__ */ new Date()).getTime();
            if (!isDisplayImage && localUrl.updateTime + 24 * 60 * 60 * 1e3 > currentTime) {
              return "";
            } else if (isDisplayImage && localUrl.updateTime + 60 * 24 * 60 * 60 * 1e3 > currentTime) {
              return localUrl.url;
            } else if (isDisplayImage && localUrl.updateTime + 60 * 24 * 60 * 60 * 1e3 < currentTime) {
              const isUrlValid = await this.checkImage(localUrl.url);
              if (isUrlValid) {
                this.updateLocalImgUrl(name, localUrl.url);
                return localUrl.url;
              }
            }
          }
          const baseUrl2 = this.getClothUrl(name);
          const isBaseUrlValid = await this.checkImage(baseUrl2);
          if (isBaseUrlValid) {
            this.updateLocalImgUrl(name, baseUrl2);
            return baseUrl2;
          }
          const types = this.generateUrlTypes(name);
          if (!this.isBox(name)) {
            const reg = /·(黑发|衣|外装|左|右|白发|金发|披风|帽|发)$/;
            const baseName = name.replace(reg, "");
            const urls = this.generateUrls(name, baseName, types);
            return await this.getImageFromUrls(name, urls);
          } else {
            const roleClothesReg = /^(黑发|白发|金发|发|帽)·/;
            if (roleClothesReg.test(name)) {
              const baseName = name.replace(roleClothesReg, "");
              const urls = this.generateUrls(name, baseName, types);
              return await this.getImageFromUrls(name, urls);
            } else {
              const urls = this.generateUrls(name, name, types);
              return await this.getImageFromUrls(name, urls);
            }
          }
        }
        async hoverImgMouseEnter(e, goodsName, yOffset = 60, xOffset = 38) {
          this.cancelLastAsyncOperation();
          const position2 = this.calculatePosition(e, yOffset, xOffset);
          this.showHoverImg(position2);
          this.lastPromise = this.getImgUrlByName(goodsName);
          try {
            const src = await this.lastPromise;
            if (src)
              this.showImgSuccess(src);
            else
              this.showImgError();
          } catch (error) {
            this.handleError(error);
            this.showImgError();
          }
        }
        hoverImgMouseLeave() {
          this.cancelLastAsyncOperation();
          this.hideHoverImg();
        }
        setShowImgEventListener(triggerDom, goodsName, yOffset = 60, xOffset = 38) {
          if (!goodsName)
            return;
          triggerDom.style.cursor = "pointer";
          const handleMouseEnter = async (e) => {
            await this.hoverImgMouseEnter(e, goodsName, yOffset, xOffset);
          };
          const handleMouseLeave = () => {
            this.hoverImgMouseLeave();
          };
          triggerDom.addEventListener("mouseenter", handleMouseEnter);
          triggerDom.addEventListener("mouseleave", handleMouseLeave);
        }
        cancelLastAsyncOperation() {
          if (this.lastPromise) {
            this.abortController.abort();
            this.abortController = new AbortController();
            this.lastPromise = null;
          }
        }
        calculatePosition(e, yOffset, xOffset) {
          const { left, top, width: width2, height } = e.target.getBoundingClientRect();
          const centerX = left + width2 / 2;
          const centerY = top + height / 2;
          const winWidth = window.innerWidth;
          const winHeight = window.innerHeight;
          return {
            top: centerY <= winHeight / 2 ? `${Math.max(centerY + yOffset, 0)}px` : "",
            bottom: centerY > winHeight / 2 ? `${Math.max(winHeight - centerY + yOffset, 0)}px` : "",
            left: centerX <= winWidth / 2 ? `${Math.max(centerX + xOffset, 0)}px` : "",
            right: centerX > winWidth / 2 ? `${Math.max(winWidth - centerX + xOffset, 0)}px` : ""
          };
        }
        handleError(error) {
          if (error.name === "AbortError")
            console.error("操作已取消");
          else
            console.error(error);
        }
        hoverImgCallback(mutations) {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(async (node) => {
              var _a;
              if (node instanceof HTMLElement && node.className === this.domSelectors.roleCloth) {
                await this.waitDomBySelector(".lazyload-wrapper");
                const nodeList = node.querySelectorAll(".lazyload-wrapper");
                for (const item of Array.from(nodeList)) {
                  const contentType = ((_a = item.querySelector("div.lazyload-wrapper>div>div>div:nth-child(2)")) == null ? void 0 : _a.textContent) || "";
                  const whiteList = /* @__PURE__ */ new Set(["发型：", "成衣：", "披风：", "挂宠："]);
                  if (whiteList.has(contentType)) {
                    const contentList = item.querySelector("div.lazyload-wrapper>div>div:nth-child(2)");
                    const content = contentList.textContent;
                    if (content !== "无") {
                      const children = contentList.children;
                      for (const child of Array.from(children)) {
                        const name = child.textContent || "";
                        const imgDom = child.querySelector("img");
                        if (this.isSetHoverImg(imgDom.src, name))
                          this.setShowImgEventListener(imgDom, name, 16, 30);
                      }
                    }
                  }
                }
              }
            });
          });
        }
        observerDom(dom, callback) {
          const options = {
            childList: true,
            // 观察目标节点的子节点的新增和删除
            subtree: true
            // 观察目标节点的所有后代节点的新增和删除
          };
          const observer = new MutationObserver(callback);
          observer.observe(dom, options);
        }
      }
      const hoverShowImg = new HoverShowImg();
      const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
        __name: "HoverImgTd",
        props: {
          row: {}
        },
        setup(__props) {
          const props = __props;
          function isShowHover() {
            return props.row.type === 3 && hoverShowImg.isSetHoverImg("", props.row.goods_name, props.row.goods_type_name);
          }
          return (_ctx, _cache) => {
            return isShowHover() ? (vue.openBlock(), vue.createBlock(QTd, {
              key: 0,
              "cursor-pointer": "",
              onMouseenter: _cache[0] || (_cache[0] = ($event) => vue.unref(hoverShowImg).hoverImgMouseEnter($event, _ctx.row.goods_name, 14, 80)),
              onMouseleave: _cache[1] || (_cache[1] = ($event) => vue.unref(hoverShowImg).hoverImgMouseLeave())
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(QImg, {
                  src: _ctx.row.goods_icon_url,
                  height: "32px",
                  style: { "max-width": "62px" },
                  fit: "contain"
                }, null, 8, ["src"]),
                vue.createElementVNode("span", null, vue.toDisplayString(_ctx.row.goods_name), 1)
              ]),
              _: 1
            })) : (vue.openBlock(), vue.createBlock(QTd, { key: 1 }, {
              default: vue.withCtx(() => [
                vue.createVNode(QImg, {
                  src: _ctx.row.goods_icon_url,
                  height: "32px",
                  style: { "max-width": "62px" },
                  fit: "contain"
                }, null, 8, ["src"]),
                vue.createElementVNode("span", null, vue.toDisplayString(_ctx.row.goods_name), 1)
              ]),
              _: 1
            }));
          };
        }
      });
      const _hoisted_1$2 = { class: "full-width row flex-center q-gutter-sm text-orange" };
      const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", null, " 关注列表空空如也，少侠先点点关注吧！ ", -1);
      const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("span", null, "关注后：", -1);
      const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
        __name: "RobDialog",
        setup(__props) {
          const { openZfbDialog } = useZfbDialog();
          const { cancelFollow } = useAction();
          const { isShowRob: isShowRob2 } = useRob();
          const states = { 3: "公示中", 5: "在售中", 6: "已售出", 7: "已下架" };
          const statesColor = { 3: "red", 5: "green", 6: "grey", 7: "grey" };
          const stateColor = (el) => statesColor[el] || "grey";
          const state = (el) => states[el] || "其他";
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createVNode(QDialog, {
                modelValue: vue.unref(isShowRob2),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(isShowRob2) ? isShowRob2.value = $event : null),
                persistent: "",
                "transition-show": "scale",
                "transition-hide": "scale"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(QTable, {
                    class: "min-w-1200px",
                    "no-data-label": "",
                    rows: vue.unref(rows),
                    columns: vue.unref(columns),
                    "row-key": "consignment_id",
                    loading: vue.unref(robTableLoading),
                    pagination: {
                      rowsPerPage: 10
                    },
                    "rows-per-page-options": [10]
                  }, {
                    top: vue.withCtx((props) => [
                      vue.createVNode(_sfc_main$9, { props }, null, 8, ["props"])
                    ]),
                    "no-data": vue.withCtx(() => [
                      vue.createElementVNode("div", _hoisted_1$2, [
                        vue.createVNode(QIcon, {
                          size: "2em",
                          name: "i-pixelarticons-downasaur"
                        }),
                        _hoisted_2
                      ])
                    ]),
                    "body-cell-name": vue.withCtx((props) => [
                      vue.createVNode(_sfc_main$5, {
                        row: props.row
                      }, null, 8, ["row"])
                    ]),
                    "body-cell-state": vue.withCtx((props) => [
                      vue.createVNode(QTd, { class: "text-center" }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(QChip, {
                            color: stateColor(props.row.state),
                            "text-color": "white",
                            dense: "",
                            square: ""
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(state(props.row.state)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    "body-cell-goods_price": vue.withCtx((props) => [
                      vue.createVNode(QTd, { class: "text-left text-red font-bold" }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(QIcon, { name: "jx3_yuan" }),
                          vue.createTextVNode(" " + vue.toDisplayString(props.row.goods_price / 100) + " ", 1),
                          props.row.follow_goods_price !== props.row.goods_price ? (vue.openBlock(), vue.createElementBlock("div", {
                            key: 0,
                            class: vue.normalizeClass(["text-3 font-medium", props.row.follow_goods_price > props.row.goods_price ? "text-green" : "text-red"])
                          }, [
                            _hoisted_3,
                            vue.createVNode(QIcon, {
                              name: props.row.follow_goods_price > props.row.goods_price ? "i-pixelarticons-arrow-down" : "i-pixelarticons-arrow-up"
                            }, null, 8, ["name"]),
                            vue.createElementVNode("span", null, " ￥" + vue.toDisplayString(Math.abs(props.row.follow_goods_price - props.row.goods_price) / 100), 1)
                          ], 2)) : vue.createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    "body-cell-action": vue.withCtx((props) => [
                      vue.createVNode(QTd, {
                        props,
                        class: "flex"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_sfc_main$a, {
                            color: "teal",
                            icon: "i-pixelarticons-zap",
                            tooltip: "抢",
                            dense: "",
                            flat: "",
                            onClick: ($event) => vue.unref(openZfbDialog)(props.row)
                          }, null, 8, ["onClick"]),
                          vue.createVNode(_sfc_main$a, {
                            color: "red",
                            icon: "i-pixelarticons-mood-sad",
                            tooltip: "取消关注",
                            dense: "",
                            flat: "",
                            onClick: ($event) => vue.unref(cancelFollow)(props.row.consignment_id, props.row.type)
                          }, null, 8, ["onClick"]),
                          props.row.state === 3 && props.row.remaining_time > 2 * 60 ? (vue.openBlock(), vue.createBlock(_sfc_main$a, {
                            key: 0,
                            color: props.row.clock ? "red" : "orange",
                            icon: props.row.clock ? "i-pixelarticons-notification-off" : "i-pixelarticons-notification",
                            tooltip: props.row.clock ? "取消提醒" : "开售前两分钟提醒我",
                            dense: "",
                            flat: "",
                            onClick: ($event) => vue.unref(clockNotification)(props.row)
                          }, null, 8, ["color", "icon", "tooltip", "onClick"])) : vue.createCommentVNode("", true),
                          props.row.type === 2 ? (vue.openBlock(), vue.createBlock(_sfc_main$a, {
                            key: 1,
                            color: "teal",
                            icon: "i-pixelarticons-contact",
                            tooltip: "查看账号详情",
                            dense: "",
                            flat: "",
                            onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(todo)())
                          })) : vue.createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 1
                  }, 8, ["rows", "columns", "loading"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createVNode(ZfbDialog)
            ], 64);
          };
        }
      });
      const codeImg = "data:image/png;base64,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";
      const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
        __name: "DonationCodeDialog",
        props: {
          "modelValue": { type: Boolean },
          "modelModifiers": {}
        },
        emits: ["update:modelValue"],
        setup(__props) {
          const isShowDonationCode = vue.useModel(__props, "modelValue");
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(QDialog, {
              modelValue: isShowDonationCode.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isShowDonationCode.value = $event)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(QImg, { src: vue.unref(codeImg) }, null, 8, ["src"])
              ]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });
      const _hoisted_1$1 = { class: "fixed bottom-100px right-50px flex flex-col gap-10px" };
      const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
        __name: "MainMenu",
        setup(__props) {
          const { openRob } = useRob();
          const isShowDonationCode = vue.ref(false);
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
              vue.createVNode(_sfc_main$a, {
                push: "",
                tooltip: "买买买",
                "tooltip-position": "left",
                icon: "i-pixelarticons-cart",
                color: "orange",
                onClick: vue.unref(openRob)
              }, null, 8, ["onClick"]),
              vue.createVNode(_sfc_main$a, {
                push: "",
                tooltip: "批量关注",
                "tooltip-position": "left",
                icon: "i-pixelarticons-heart",
                color: "red",
                onClick: vue.unref(todo)
              }, null, 8, ["onClick"]),
              vue.createVNode(_sfc_main$a, {
                push: "",
                tooltip: "Buy me a coffee",
                "tooltip-position": "left",
                icon: "i-pixelarticons-coffee-alt",
                color: "brown",
                onClick: _cache[0] || (_cache[0] = ($event) => isShowDonationCode.value = true)
              }),
              vue.createVNode(_sfc_main$4),
              vue.createVNode(_sfc_main$3, {
                modelValue: isShowDonationCode.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isShowDonationCode.value = $event)
              }, null, 8, ["modelValue"])
            ]);
          };
        }
      });
      const myIcons = [
        "i-pixelarticons-arrow-up",
        "i-pixelarticons-arrow-down",
        "i-pixelarticons-play",
        "i-pixelarticons-repeat",
        "i-pixelarticons-zoom-out",
        "i-pixelarticons-zoom-in",
        "i-pixelarticons-close",
        "i-pixelarticons-coin",
        "i-pixelarticons-heart",
        "i-pixelarticons-downasaur",
        "i-pixelarticons-checkbox",
        "i-pixelarticons-checkbox-on"
      ];
      const replaceIcon = {
        arrow_upward: "i-pixelarticons-arrow-up",
        arrow_drop_down: "i-pixelarticons-chevron-down",
        chevron_right: "i-pixelarticons-chevron-right",
        chevron_left: "i-pixelarticons-chevron-left"
      };
      const imgIcons = {
        jx3_yuan: "img:https://jx3wbl.xoyocdn.com/img/icon-rmb.c3ce8bfb.png"
      };
      function useMyIcon(iconName) {
        const reIcon = replaceIcon[iconName];
        if (reIcon !== void 0)
          return { cls: reIcon };
        const imgIcon = imgIcons[iconName];
        if (imgIcon !== void 0)
          return { icon: imgIcon };
        const icon = myIcons.find((el) => el === iconName);
        if (icon !== void 0)
          return { cls: icon };
      }
      const _sfc_main$1 = {};
      const _hoisted_1 = { class: "hidden" };
      function _sfc_render(_ctx, _cache) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createVNode(QIcon, { class: "i-pixelarticons-chevron-down" }),
          vue.createVNode(QIcon, { class: "i-pixelarticons-chevron-right" }),
          vue.createVNode(QIcon, { class: "i-pixelarticons-chevron-left" })
        ]);
      }
      const Icons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
      const _sfc_main = /* @__PURE__ */ vue.defineComponent({
        __name: "App",
        setup(__props) {
          hoverShowImg.init();
          const $q = useQuasar();
          $q.iconMapFn = (iconName) => useMyIcon(iconName);
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createVNode(_sfc_main$2),
              vue.createVNode(Icons)
            ], 64);
          };
        }
      });
      function injectJs(str, isUrl = false) {
        const customScript = document.createElement("script");
        customScript.setAttribute("type", "text/javascript");
        if (!isUrl)
          customScript.textContent = str;
        else
          customScript.src = str;
        document.head.appendChild(customScript);
      }
      injectJs(`https://static.geetest.com/v4/gt4.js`, true);
      vue.createApp(_sfc_main).use(Quasar, {
        plugins: { Notify },
        // import Quasar plugins and add here
        config: {
          notify: { position: "top" }
        }
      }).mount(
        (() => {
          const app = document.createElement("div");
          app.id = "tampermonkey-container";
          document.body.append(app);
          return app;
        })()
      );
    }
  });
  require_main_001();

})(Vue);