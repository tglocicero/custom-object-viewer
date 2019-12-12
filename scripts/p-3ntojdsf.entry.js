import{r as t,c as s,h as i,g as n}from"./p-2f2b281e.js";const e=class{constructor(i){t(this,i),this.menuListener=t=>this.open(t),this.overlayClickListener=t=>this.onClick(t),this.attach="parent",this.loader=()=>this.getSlottedOptions(),this.anjContextSelect=s(this,"anjContextSelect",7)}connectedCallback(){this.bodyEl=this.element.ownerDocument.body,this.parentEl=this.element.parentElement,"string"!=typeof this.attach?this.attach.addEventListener("contextmenu",this.menuListener):this.parentEl.addEventListener("contextmenu",this.menuListener)}disconnectedCallback(){this.overlay&&this.overlay.remove(),"string"!=typeof this.attach?this.attach.removeEventListener("contextmenu",this.menuListener):this.parentEl.removeEventListener("contextmenu",this.menuListener),this.unbindOverlay()}unbindOverlay(){this.overlay&&(this.overlay.removeEventListener("click",this.overlayClickListener),this.overlay.innerHTML="",this.overlay=null)}async onElsewhereOpen({target:t}){if(this.overlay&&t!==this.overlay)return this.close()}async open(t){this.bindOverlay(this.element.querySelector("anj-overlay")),this.options=await this.loader(t),this.options&&(t.preventDefault(),this.insertOptions(),await this.overlay.popper()||(this.bodyEl.appendChild(this.overlay),await this.overlay.open("parent"===this.attach?this.parentEl:t.target)))}async close(){await this.overlay.close(),this.unbindOverlay()}async onClick(t){return t.preventDefault(),t.stopPropagation(),this.anjContextSelect.emit(t.target.action),this.close()}bindOverlay(t){t&&!this.overlay&&(this.overlay=t,this.overlay.addEventListener("click",this.overlayClickListener))}insertOptions(){this.options.forEach(t=>this.overlay.appendChild(t))}async getSlottedOptions(){return Array.from(this.overlay.querySelectorAll("anj-context-menu-item")).map(t=>t.cloneNode(!0))}render(){return i("anj-overlay",{class:"anj-dropdown-menu anj-context-menu",placement:"bottom-start",dismiss:"auto"})}get element(){return n(this)}static get style(){return"anj-context-menu{float:right}"}},h=class{constructor(s){t(this,s),this.disabled=!1}onClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}static get style(){return"anj-context-menu-item{display:block;font-size:.875rem;font-family:var(--anj-font-family);line-height:1.5;outline:none;background-color:transparent;border:0;color:var(--anj-text);clear:both;cursor:pointer;font-weight:400;padding:.25rem .75rem;text-align:inherit;white-space:nowrap;width:100%}anj-context-menu-item,anj-context-menu-item:after,anj-context-menu-item:before{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}anj-context-menu-item:active,anj-context-menu-item :active,anj-context-menu-item:focus,anj-context-menu-item :focus{outline:none}anj-context-menu-item:active,anj-context-menu-item:focus,anj-context-menu-item:hover{background-color:var(--anj-background);color:var(--anj-text);text-decoration:none;outline:none}anj-context-menu-item[disabled],anj-context-menu-item[disabled]:active,anj-context-menu-item[disabled]:hover{background-color:var(--anj-light);color:var(--anj-neutral);pointer-events:none}"}};export{e as anj_context_menu,h as anj_context_menu_item};