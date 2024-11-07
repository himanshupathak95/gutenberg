(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({0:"drop-zone-stories-index-story",21:"combobox-control-stories-index-story",100:"angle-picker-control-stories-index-story",137:"form-toggle-stories-index-story",199:"alignment-matrix-control-stories-index-story",377:"components-block-patterns-list-stories-index-story",417:"custom-gradient-picker-stories-index-story",492:"spacer-stories-index-story",532:"slot-fill-stories-index-story",614:"palette-edit-stories-index-story",642:"textarea-control-stories-index-story",664:"components-dimensions-tool-stories-aspect-ratio-tool-story",675:"draggable-stories-index-story",810:"card-stories-index-story",842:"dimension-control-stories-index-story",971:"tokens-typography-mdx",1051:"components-text-decoration-control-stories-index-story",1305:"color-palette-stories-index-story",1469:"icon-stories-index-story-js",1557:"radio-group-stories-index-story",1812:"date-time-stories-date-story",1859:"sandbox-stories-index-story",1861:"components-inserter-stories-index-story",1864:"search-control-stories-index-story",1874:"truncate-stories-index-story",1960:"grid-stories-index-story",2016:"external-link-stories-index-story",2042:"date-time-stories-date-time-story",2065:"navigator-stories-index-story",2285:"gradient-picker-stories-index-story",2363:"color-indicator-stories-index-story",2471:"number-control-stories-index-story",2505:"menu-item-stories-index-story",2553:"range-control-stories-index-story",2591:"animate-stories-index-story",2732:"menu-items-choice-stories-index-story",2735:"tooltip-stories-index-story",2737:"h-stack-stories-index-story",2801:"progress-bar-stories-index-story",3006:"shortcut-stories-index-story",3017:"spinner-stories-index-story",3061:"tokens-elevation-mdx",3261:"docs-introduction-mdx",3299:"components-global-styles-stories-index-story",3363:"components-font-family-stories-index-story",3414:"components-dimensions-tool-stories-scale-tool-story",3510:"docs-components-contributing-mdx",3673:"tokens-color-mdx",3709:"resizable-box-stories-index-story",3932:"responsive-wrapper-stories-index-story",3955:"elevation-stories-index-story",3957:"form-file-upload-stories-index-story",4002:"components-dimensions-tool-stories-width-height-tool-story",4053:"flex-stories-index-story",4328:"duotone-picker-stories-duotone-swatch-story",4356:"toggle-control-stories-index-story",4460:"heading-stories-index-story",4470:"navigable-container-stories-tabbable-container-story",4774:"components-height-control-stories-index-story",4822:"guide-stories-index-story",4917:"icon-stories-index-story-tsx",4989:"tip-stories-index-story",5086:"components-resolution-tool-stories-index-story",5208:"notice-stories-index-story",5209:"divider-stories-index-story",5217:"keyboard-shortcuts-stories-index-story",5257:"confirm-dialog-stories-index-story",5363:"scrollable-stories-index-story",5615:"dropdown-menu-stories-index-story",5649:"modal-stories-index-story",5756:"select-control-stories-index-story",5801:"box-control-stories-index-story",5811:"composite-stories-index-story",5830:"tab-panel-stories-index-story",5902:"components-block-draggable-stories-index-story",5932:"navigable-container-stories-navigable-menu-story",6117:"components-line-height-control-stories-index-story",6124:"panel-stories-index-story",6207:"base-control-stories-index-story",6222:"components-text-alignment-control-stories-index-story",6255:"icon-stories-index-story",6261:"theme-stories-index-story",6349:"menu-stories-index-story",6365:"placeholder-stories-index-story",6389:"snackbar-stories-index-story",6471:"tree-grid-stories-index-story",6482:"input-control-stories-index-story",6483:"v-stack-stories-index-story",6496:"custom-select-control-stories-index-story",6577:"text-stories-index-story",6808:"button-stories-index-story",6846:"border-control-stories-index-story",6887:"toolbar-stories-index-story",6918:"duotone-picker-stories-duotone-picker-story",6939:"radio-control-stories-index-story",7109:"components-dataform-stories-index-story",7118:"navigation-stories-index-story",7183:"tree-select-stories-index-story",7244:"components-block-mover-stories-index-story",7262:"unit-control-stories-index-story",7503:"checkbox-control-stories-index-story",7535:"date-time-stories-time-story",7586:"border-box-control-stories-index-story",7671:"item-group-stories-index-story",7748:"tabs-stories-index-story",7769:"form-token-field-stories-index-story",7906:"toggle-group-control-stories-index-story",7975:"z-stack-stories-index-story",8037:"text-control-stories-index-story",8097:"components-text-transform-control-stories-index-story",8251:"scroll-lock-stories-index-story",8295:"view-stories-index-story",8429:"components-dataviews-stories-index-story",8577:"foundations-design-language-elevation-mdx",8653:"popover-stories-index-story",8712:"visually-hidden-stories-index-story",8749:"focal-point-picker-stories-index-story",8803:"snackbar-stories-list-story",8843:"composite-legacy-stories-index-story",8947:"custom-select-control-v2-stories-index-story",8956:"components-url-popover-stories-index-story",9035:"surface-stories-index-story",9074:"button-group-stories-index-story",9152:"docs-components-readme-mdx",9242:"foundations-design-language-radius-mdx",9315:"query-controls-stories-index-story",9323:"menu-group-stories-index-story",9324:"color-picker-stories-index-story",9366:"font-size-picker-stories-index-story",9369:"components-dimensions-tool-stories-index-story",9371:"playground-index-story",9383:"dropdown-stories-index-story",9582:"tokens-radius-mdx",9662:"text-highlight-stories-index-story",9788:"disabled-stories-index-story",9826:"circular-option-picker-stories-index-story",9974:"tools-panel-stories-index-story"}[chunkId]||chunkId)+"."+{0:"8ccc9f3e",21:"2b2b6a58",97:"3eee0b99",100:"bd38ebea",137:"5176991a",167:"a33e08b6",174:"bfbae923",199:"489fb4e7",227:"352b52dc",239:"297e0b21",286:"bf856fef",377:"79d8ecc6",417:"5cec51cc",492:"0e4375d4",504:"96b74f48",532:"eb6925e3",592:"2f3f4498",614:"427f8814",642:"26289724",664:"ef7ff54f",675:"c80f02b7",810:"297db9cf",834:"f20ec358",842:"249a4578",954:"24d9ef0e",971:"58296f73",1051:"17f4a335",1052:"b78ce24d",1100:"b44d9553",1217:"7f0f8f96",1250:"b12ee76e",1294:"0b00ebb1",1305:"e3920879",1361:"1dc4e07a",1469:"9e77eda8",1483:"adbdc57d",1497:"372b75fc",1549:"5aba87bf",1554:"9fea0a00",1557:"b897cbf8",1812:"60562f7c",1859:"137a9cfe",1861:"8c151113",1864:"92c6c979",1874:"524442c3",1952:"f32754ea",1960:"b7064a0b",1989:"5a7d9a28",2016:"7e6d5e6a",2020:"a00a4cc6",2042:"cfdcc6b5",2065:"d926d69a",2113:"8dd9f724",2214:"a40705e2",2285:"e30253e9",2363:"7aa37b47",2373:"09e301e5",2450:"8406f2e5",2471:"d429772a",2505:"d543c8a5",2553:"976b9b2a",2580:"0fe2f6ec",2591:"1ba65afb",2616:"5129612d",2672:"e9c42644",2732:"79870e85",2735:"ddd02b63",2737:"8a2f0bbd",2801:"a2bfc524",2886:"c21aa6d1",2941:"c803d691",3003:"14c283a7",3006:"99cd4ecb",3017:"e4aae143",3061:"05b93efd",3103:"94895130",3104:"756e4993",3149:"ca51bb0b",3261:"499105e6",3299:"6f75e6fd",3363:"d0b63afe",3414:"ec275159",3484:"62a13000",3510:"04c8ff10",3554:"506b4f1f",3673:"ce809e21",3709:"2b4c631d",3831:"c371f480",3834:"8154c6fa",3840:"fa0fa394",3864:"c911c664",3932:"7390e1c3",3944:"48bc9757",3955:"ea272d60",3957:"2ba494d0",4002:"65b9e81c",4021:"97c3b6ea",4053:"542f8e0e",4071:"1946fb35",4214:"392266b1",4273:"3a4a8ba0",4328:"19b8a6f6",4356:"b6efe097",4359:"0521a6ad",4393:"410f2a28",4460:"a3ce8a18",4470:"6db6502f",4540:"3414fd2c",4541:"372f43f9",4553:"0ab6dfc5",4614:"f3552f8a",4703:"8f4fa8f7",4774:"dbbd3a36",4822:"6cecef7f",4915:"0fece39c",4917:"af0cdc06",4989:"59be6499",4998:"54ecd23d",5086:"c233e839",5208:"740798d7",5209:"911cbe7e",5217:"3c2f6136",5229:"0469b550",5257:"43e57c13",5363:"ebbf3fb3",5611:"0fd3615f",5615:"61e455c8",5647:"383ed846",5649:"3165fac9",5756:"4973be16",5801:"bfce0c29",5811:"7e797fad",5830:"063eb2bb",5863:"afcc659c",5902:"cee2ccd2",5929:"045f1426",5932:"c1030444",6025:"4d15bb06",6117:"9b87752c",6124:"68b44137",6207:"6bf25828",6222:"4e23dd08",6255:"b3b4601e",6261:"14595d92",6349:"82d3ca8e",6365:"3a53b213",6389:"abdd4cb5",6422:"7c392961",6471:"ea346ad8",6482:"f0e4366e",6483:"a4b5d4eb",6496:"b609ed84",6525:"d83374e7",6577:"e8a5803c",6644:"8610d5f4",6655:"ba8c2da4",6808:"4b306dc6",6846:"ee620227",6887:"29eac38f",6910:"05c548d6",6918:"ad5eca4f",6939:"0a346bd8",7007:"103b9ff7",7081:"f91476c2",7109:"58655eba",7118:"e593f108",7183:"e6725dca",7216:"97de9d9f",7244:"a5a572be",7253:"843bddb0",7262:"0e21948d",7307:"007b2ee9",7319:"839a2b6e",7396:"1d49ed27",7499:"7c3e9207",7503:"64f59e87",7535:"86c91bcd",7586:"563405e8",7671:"f14fc725",7748:"8ea48836",7769:"e6e38c2c",7906:"f852bbe9",7920:"13a0c83c",7975:"2d91b55a",8037:"9a14a6f1",8097:"544aee2b",8159:"b1d26dec",8233:"13f5e13d",8238:"c14aeb46",8251:"a78bf1d3",8295:"f26bb487",8429:"0a38b6ce",8449:"bf75b75e",8576:"b195a300",8577:"13e56460",8609:"1baf27d0",8653:"ee0ab4b9",8712:"31836130",8730:"cca1df61",8746:"4b50112b",8749:"68bc736d",8756:"068403c3",8763:"9d264adf",8803:"fbd88562",8836:"7859710d",8843:"c3e92dcb",8873:"16229d82",8947:"63c7c41b",8956:"c32cbdbe",8980:"54215c39",9006:"c65ca7a4",9026:"ef5b7c9a",9035:"a1bed75a",9074:"54056006",9152:"6d2c0a27",9212:"bd627ac4",9235:"1cf5bd84",9242:"5e752da9",9314:"abeafd58",9315:"e785cbef",9323:"e3c0710a",9324:"a74e9528",9366:"dbefe3db",9369:"44f5afdc",9371:"1ef4ad3c",9383:"6b5fdce6",9442:"b2bfdaf1",9582:"5f883c34",9603:"f6d6f3a4",9614:"016bbb8e",9634:"214c895a",9662:"774597bd",9788:"4ae45f42",9792:"e2a67317",9822:"ab855b14",9826:"cd8e9798",9904:"8879f659",9964:"f9f9c107",9974:"d356c41e"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkgutenberg=self.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();