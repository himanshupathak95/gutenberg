"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2450],{"./packages/compose/build-module/hooks/use-event/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useEvent});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useEvent(callback){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)((()=>{throw new Error("Callbacks created with `useEvent` cannot be called during rendering.")}));return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)((()=>{ref.current=callback})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>ref.current?.(...args)),[])}},"./packages/compose/build-module/hooks/use-previous/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>usePrevious});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}},"./packages/compose/build-module/hooks/use-resize-observer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>use_resize_observer_useResizeObserver});var react=__webpack_require__("./node_modules/react/index.js"),use_event=__webpack_require__("./packages/compose/build-module/hooks/use-event/index.js");function useResizeObserver(callback,resizeObserverOptions={}){const callbackEvent=(0,use_event.A)(callback),observedElementRef=(0,react.useRef)(),resizeObserverRef=(0,react.useRef)();return(0,use_event.A)((element=>{var _resizeObserverRef$cu;if(element===observedElementRef.current)return;null!==(_resizeObserverRef$cu=resizeObserverRef.current)&&void 0!==_resizeObserverRef$cu||(resizeObserverRef.current=new ResizeObserver(callbackEvent));const{current:resizeObserver}=resizeObserverRef;observedElementRef.current&&resizeObserver.unobserve(observedElementRef.current),observedElementRef.current=element,element&&resizeObserver.observe(element,resizeObserverOptions)}))}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const extractSize=entry=>{let entrySize;if(entry.contentBoxSize)if(entry.contentBoxSize[0]){const contentBoxSize=entry.contentBoxSize[0];entrySize=[contentBoxSize.inlineSize,contentBoxSize.blockSize]}else{const contentBoxSize=entry.contentBoxSize;entrySize=[contentBoxSize.inlineSize,contentBoxSize.blockSize]}else entrySize=[entry.contentRect.width,entry.contentRect.height];const[width,height]=entrySize.map((d=>Math.round(d)));return{width,height}},RESIZE_ELEMENT_STYLES={position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:0,overflow:"hidden",zIndex:-1};function ResizeElement({onResize}){const resizeElementRef=useResizeObserver((entries=>{const newSize=extractSize(entries.at(-1));onResize(newSize)}));return(0,jsx_runtime.jsx)("div",{ref:resizeElementRef,style:RESIZE_ELEMENT_STYLES,"aria-hidden":"true"})}const NULL_SIZE={width:null,height:null};function use_resize_observer_useResizeObserver(callback,options={}){return callback?useResizeObserver(callback,options):function useLegacyResizeObserver(){const[size,setSize]=(0,react.useState)(NULL_SIZE),previousSizeRef=(0,react.useRef)(NULL_SIZE),handleResize=(0,react.useCallback)((newSize=>{(function sizeEquals(a,b){return a.width===b.width&&a.height===b.height})(previousSizeRef.current,newSize)||(previousSizeRef.current=newSize,setSize(newSize))}),[]);return[(0,jsx_runtime.jsx)(ResizeElement,{onResize:handleResize}),size]}()}},"./packages/components/src/toggle-group-control/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,H:()=>useToggleGroupControlContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ToggleGroupControlContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useToggleGroupControlContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToggleGroupControlContext),__WEBPACK_DEFAULT_EXPORT__=ToggleGroupControlContext},"./packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{Rp:()=>ButtonContentView,y0:()=>LabelView,uG:()=>buttonView,eh:()=>labelBlock});var K7FXVWIT=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),context=__webpack_require__("./packages/components/src/toggle-group-control/context.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const LabelView=(0,emotion_styled_base_browser_esm.A)("div",{target:"et6ln9s1"})({name:"sln1fl",styles:"display:inline-flex;max-width:100%;min-width:0;position:relative"}),labelBlock={name:"82a6rk",styles:"flex:1"},buttonView=({isDeselectable,isIcon,isPressed,size})=>(0,emotion_react_browser_esm.AH)("align-items:center;appearance:none;background:transparent;border:none;border-radius:",config_values.A.radiusXSmall,";color:",colors_values.l.gray[700],";fill:currentColor;cursor:pointer;display:flex;font-family:inherit;height:100%;justify-content:center;line-height:100%;outline:none;padding:0 12px;position:relative;text-align:center;@media not ( prefers-reduced-motion ){transition:background ",config_values.A.transitionDurationFast," linear,color ",config_values.A.transitionDurationFast," linear,font-weight 60ms linear;}user-select:none;width:100%;z-index:2;&::-moz-focus-inner{border:0;}&[disabled]{opacity:0.4;cursor:default;}&:active{background:",config_values.A.controlBackgroundColor,";}",isDeselectable&&deselectable," ",isIcon&&isIconStyles({size})," ",isPressed&&pressed,";",""),pressed=(0,emotion_react_browser_esm.AH)("color:",colors_values.l.white,";&:active{background:transparent;}",""),deselectable=(0,emotion_react_browser_esm.AH)("color:",colors_values.l.gray[900],";&:focus{box-shadow:inset 0 0 0 1px ",colors_values.l.white,",0 0 0 ",config_values.A.borderWidthFocus," ",colors_values.l.theme.accent,";outline:2px solid transparent;}",""),ButtonContentView=(0,emotion_styled_base_browser_esm.A)("div",{target:"et6ln9s0"})("display:flex;font-size:",config_values.A.fontSize,";line-height:1;"),isIconStyles=({size="default"})=>(0,emotion_react_browser_esm.AH)("color:",colors_values.l.gray[900],";height:",{default:"30px","__unstable-large":"32px"}[size],";aspect-ratio:1;padding-left:0;padding-right:0;","");var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Rp:component_ButtonContentView,y0:component_LabelView}=styles_namespaceObject,WithToolTip=({showTooltip,text,children})=>showTooltip&&text?(0,jsx_runtime.jsx)(tooltip.Ay,{text,placement:"top",children}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});function ToggleGroupControlOptionBase(props,forwardedRef){const toggleGroupControlContext=(0,context.H)(),id=(0,use_instance_id.A)(ToggleGroupControlOptionBase,toggleGroupControlContext.baseId||"toggle-group-control-option-base"),buttonProps=(0,use_context_system.A)({...props,id},"ToggleGroupControlOptionBase"),{isBlock=!1,isDeselectable=!1,size="default"}=toggleGroupControlContext,{className,isIcon=!1,value,children,showTooltip=!1,disabled,...otherButtonProps}=buttonProps,isPressed=toggleGroupControlContext.value===value,cx=(0,use_cx.l)(),labelViewClasses=(0,react.useMemo)((()=>cx(isBlock&&labelBlock)),[cx,isBlock]),itemClasses=(0,react.useMemo)((()=>cx(buttonView({isDeselectable,isIcon,isPressed,size}),className)),[cx,isDeselectable,isIcon,isPressed,size,className]),commonProps={...otherButtonProps,className:itemClasses,"data-value":value,ref:forwardedRef},labelRef=(0,react.useRef)(null);return(0,react.useLayoutEffect)((()=>{isPressed&&labelRef.current&&toggleGroupControlContext.setSelectedElement(labelRef.current)}),[isPressed,toggleGroupControlContext]),(0,jsx_runtime.jsx)(component_LabelView,{ref:labelRef,className:labelViewClasses,children:(0,jsx_runtime.jsx)(WithToolTip,{showTooltip,text:otherButtonProps["aria-label"],children:isDeselectable?(0,jsx_runtime.jsx)("button",{...commonProps,disabled,"aria-pressed":isPressed,type:"button",onClick:()=>{isDeselectable&&isPressed?toggleGroupControlContext.setValue(void 0):toggleGroupControlContext.setValue(value)},children:(0,jsx_runtime.jsx)(component_ButtonContentView,{children})}):(0,jsx_runtime.jsx)(K7FXVWIT.s,{disabled,onFocusVisible:()=>{(null===toggleGroupControlContext.value||""===toggleGroupControlContext.value)&&!toggleGroupControlContext.activeItemIsNotFirstItem?.()||toggleGroupControlContext.setValue(value)},render:(0,jsx_runtime.jsx)("button",{type:"button",...commonProps}),value,children:(0,jsx_runtime.jsx)(component_ButtonContentView,{children})})})})}ToggleGroupControlOptionBase.displayName="ToggleGroupControlOptionBase";const component=(0,context_connect.KZ)(ToggleGroupControlOptionBase,"ToggleGroupControlOptionBase")},"./packages/components/src/toggle-group-control/toggle-group-control/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toggle_group_control_component});var react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const enclosingBorders=isBlock=>{const enclosingBorder=(0,emotion_react_browser_esm.AH)("border-color:",colors_values.l.ui.border,";","");return(0,emotion_react_browser_esm.AH)(isBlock&&enclosingBorder," &:hover{border-color:",colors_values.l.ui.borderHover,";}&:focus-within{border-color:",colors_values.l.ui.borderFocus,";box-shadow:",config_values.A.controlBoxShadowFocus,";z-index:1;outline:2px solid transparent;outline-offset:-2px;}","")};var _ref={name:"1aqh2c7",styles:"min-height:40px;padding:3px"},_ref2={name:"1ndywgm",styles:"min-height:36px;padding:2px"};const toggleGroupControlSize=size=>({default:_ref2,"__unstable-large":_ref}[size]),block={name:"7whenc",styles:"display:flex;width:100%"},VisualLabelWrapper=(0,emotion_styled_base_browser_esm.A)("div",{target:"eakva830"})({name:"zjik7",styles:"display:flex"});var DYHFBFEH=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DYHFBFEH.js"),radio_group=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js"),_2GXGCHW6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),component=__webpack_require__("./packages/components/src/view/component.tsx"),context=__webpack_require__("./packages/components/src/toggle-group-control/context.ts"),use_previous=__webpack_require__("./packages/compose/build-module/hooks/use-previous/index.js");function useComputeControlledOrUncontrolledValue(valueProp){const isInitialRenderRef=(0,react.useRef)(!0),prevValueProp=(0,use_previous.A)(valueProp),prevIsControlledRef=(0,react.useRef)(!1);(0,react.useEffect)((()=>{isInitialRenderRef.current&&(isInitialRenderRef.current=!1)}),[]);const isControlled=prevIsControlledRef.current||!isInitialRenderRef.current&&prevValueProp!==valueProp;return(0,react.useEffect)((()=>{prevIsControlledRef.current=isControlled}),[isControlled]),isControlled?{value:null!=valueProp?valueProp:"",defaultValue:void 0}:{value:void 0,defaultValue:valueProp}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedToggleGroupControlAsRadioGroup({children,isAdaptiveWidth,label,onChange:onChangeProp,size,value:valueProp,id:idProp,setSelectedElement,...otherProps},forwardedRef){const generatedId=(0,use_instance_id.A)(ToggleGroupControlAsRadioGroup,"toggle-group-control-as-radio-group"),baseId=idProp||generatedId,{value,defaultValue}=useComputeControlledOrUncontrolledValue(valueProp),wrappedOnChangeProp=onChangeProp?v=>{onChangeProp(null!=v?v:void 0)}:void 0,radio=DYHFBFEH.s({defaultValue,value,setValue:wrappedOnChangeProp,rtl:(0,build_module.V8)()}),selectedValue=(0,_2GXGCHW6.O$)(radio,"value"),setValue=radio.setValue;(0,react.useEffect)((()=>{""===selectedValue&&radio.setActiveId(void 0)}),[radio,selectedValue]);const groupContextValue=(0,react.useMemo)((()=>({activeItemIsNotFirstItem:()=>radio.getState().activeId!==radio.first(),baseId,isBlock:!isAdaptiveWidth,size,value:selectedValue,setValue,setSelectedElement})),[baseId,isAdaptiveWidth,radio,selectedValue,setSelectedElement,setValue,size]);return(0,jsx_runtime.jsx)(context.A.Provider,{value:groupContextValue,children:(0,jsx_runtime.jsx)(radio_group.z,{store:radio,"aria-label":label,render:(0,jsx_runtime.jsx)(component.A,{}),...otherProps,id:baseId,ref:forwardedRef,children})})}UnforwardedToggleGroupControlAsRadioGroup.displayName="UnforwardedToggleGroupControlAsRadioGroup";const ToggleGroupControlAsRadioGroup=(0,react.forwardRef)(UnforwardedToggleGroupControlAsRadioGroup);try{ToggleGroupControlAsRadioGroup.displayName="ToggleGroupControlAsRadioGroup",ToggleGroupControlAsRadioGroup.__docgenInfo={description:"",displayName:"ToggleGroupControlAsRadioGroup",props:{label:{defaultValue:null,description:"Label for the control.",name:"label",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Callback when a segment is selected.",name:"onChange",required:!1,type:{name:"(value: string | number) => void"}},size:{defaultValue:{value:"'default'"},description:"The size variant of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"The selected value.",name:"value",required:!1,type:{name:"string | number"}},isAdaptiveWidth:{defaultValue:{value:"false"},description:"Determines if segments should be rendered with equal widths.",name:"isAdaptiveWidth",required:!1,type:{name:"boolean"}},setSelectedElement:{defaultValue:null,description:"",name:"setSelectedElement",required:!0,type:{name:"(element: HTMLElement) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx#ToggleGroupControlAsRadioGroup"]={docgenInfo:ToggleGroupControlAsRadioGroup.__docgenInfo,name:"ToggleGroupControlAsRadioGroup",path:"packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx#ToggleGroupControlAsRadioGroup"})}catch(__react_docgen_typescript_loader_error){}var use_controlled_value=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-value.ts");function UnforwardedToggleGroupControlAsButtonGroup({children,isAdaptiveWidth,label,onChange,size,value:valueProp,id:idProp,setSelectedElement,...otherProps},forwardedRef){const generatedId=(0,use_instance_id.A)(ToggleGroupControlAsButtonGroup,"toggle-group-control-as-button-group"),baseId=idProp||generatedId,{value,defaultValue}=useComputeControlledOrUncontrolledValue(valueProp),[selectedValue,setSelectedValue]=(0,use_controlled_value.j)({defaultValue,value,onChange}),groupContextValue=(0,react.useMemo)((()=>({baseId,value:selectedValue,setValue:setSelectedValue,isBlock:!isAdaptiveWidth,isDeselectable:!0,size,setSelectedElement})),[baseId,selectedValue,setSelectedValue,isAdaptiveWidth,size,setSelectedElement]);return(0,jsx_runtime.jsx)(context.A.Provider,{value:groupContextValue,children:(0,jsx_runtime.jsx)(component.A,{"aria-label":label,...otherProps,ref:forwardedRef,role:"group",children})})}UnforwardedToggleGroupControlAsButtonGroup.displayName="UnforwardedToggleGroupControlAsButtonGroup";const ToggleGroupControlAsButtonGroup=(0,react.forwardRef)(UnforwardedToggleGroupControlAsButtonGroup);try{ToggleGroupControlAsButtonGroup.displayName="ToggleGroupControlAsButtonGroup",ToggleGroupControlAsButtonGroup.__docgenInfo={description:"",displayName:"ToggleGroupControlAsButtonGroup",props:{label:{defaultValue:null,description:"Label for the control.",name:"label",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Callback when a segment is selected.",name:"onChange",required:!1,type:{name:"(value: string | number) => void"}},size:{defaultValue:{value:"'default'"},description:"The size variant of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"The selected value.",name:"value",required:!1,type:{name:"string | number"}},isAdaptiveWidth:{defaultValue:{value:"false"},description:"Determines if segments should be rendered with equal widths.",name:"isAdaptiveWidth",required:!1,type:{name:"boolean"}},setSelectedElement:{defaultValue:null,description:"",name:"setSelectedElement",required:!0,type:{name:"(element: HTMLElement) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx#ToggleGroupControlAsButtonGroup"]={docgenInfo:ToggleGroupControlAsButtonGroup.__docgenInfo,name:"ToggleGroupControlAsButtonGroup",path:"packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx#ToggleGroupControlAsButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var element_rect=__webpack_require__("./packages/components/src/utils/element-rect.ts"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),use_animated_offset_rect=__webpack_require__("./packages/components/src/utils/hooks/use-animated-offset-rect.ts");function UnconnectedToggleGroupControl(props,forwardedRef){const{__nextHasNoMarginBottom=!1,__next40pxDefaultSize=!1,className,isAdaptiveWidth=!1,isBlock=!1,isDeselectable=!1,label,hideLabelFromVision=!1,help,onChange,size="default",value,children,...otherProps}=(0,use_context_system.A)(props,"ToggleGroupControl"),normalizedSize=__next40pxDefaultSize&&"default"===size?"__unstable-large":size,[selectedElement,setSelectedElement]=(0,react.useState)(),[controlElement,setControlElement]=(0,react.useState)(),refs=(0,use_merge_refs.A)([setControlElement,forwardedRef]),selectedRect=(0,element_rect.ec)(value?selectedElement:void 0);(0,use_animated_offset_rect.M)(controlElement,selectedRect,{prefix:"selected",dataAttribute:"indicator-animated",transitionEndFilter:event=>"::before"===event.pseudoElement,roundRect:!0});const cx=(0,use_cx.l)(),classes=(0,react.useMemo)((()=>cx((({isBlock,isDeselectable,size})=>(0,emotion_react_browser_esm.AH)("background:",colors_values.l.ui.background,";border:1px solid transparent;border-radius:",config_values.A.radiusSmall,";display:inline-flex;min-width:0;position:relative;",toggleGroupControlSize(size)," ",!isDeselectable&&enclosingBorders(isBlock),"@media not ( prefers-reduced-motion ){&[data-indicator-animated]::before{transition-property:transform,border-radius;transition-duration:0.2s;transition-timing-function:ease-out;}}&::before{content:'';position:absolute;pointer-events:none;background:",colors_values.l.gray[900],";outline:2px solid transparent;outline-offset:-3px;--antialiasing-factor:100;border-radius:calc(\n\t\t\t\t",config_values.A.radiusXSmall," /\n\t\t\t\t\t(\n\t\t\t\t\t\tvar( --selected-width, 0 ) /\n\t\t\t\t\t\t\tvar( --antialiasing-factor )\n\t\t\t\t\t)\n\t\t\t)/",config_values.A.radiusXSmall,";left:-1px;width:calc( var( --antialiasing-factor ) * 1px );height:calc( var( --selected-height, 0 ) * 1px );transform-origin:left top;transform:translateX( calc( var( --selected-left, 0 ) * 1px ) ) scaleX(\n\t\t\t\tcalc(\n\t\t\t\t\tvar( --selected-width, 0 ) / var( --antialiasing-factor )\n\t\t\t\t)\n\t\t\t);}",""))({isBlock,isDeselectable,size:normalizedSize}),isBlock&&block,className)),[className,cx,isBlock,isDeselectable,normalizedSize]),MainControl=isDeselectable?ToggleGroupControlAsButtonGroup:ToggleGroupControlAsRadioGroup;return(0,jsx_runtime.jsxs)(base_control.Ay,{help,__nextHasNoMarginBottom,__associatedWPComponentName:"ToggleGroupControl",children:[!hideLabelFromVision&&(0,jsx_runtime.jsx)(VisualLabelWrapper,{children:(0,jsx_runtime.jsx)(base_control.Ay.VisualLabel,{children:label})}),(0,jsx_runtime.jsx)(MainControl,{...otherProps,setSelectedElement,className:classes,isAdaptiveWidth,label,onChange,ref:refs,size:normalizedSize,value,children})]})}UnconnectedToggleGroupControl.displayName="UnconnectedToggleGroupControl";const ToggleGroupControl=(0,context_connect.KZ)(UnconnectedToggleGroupControl,"ToggleGroupControl"),toggle_group_control_component=ToggleGroupControl;try{ToggleGroupControl.displayName="ToggleGroupControl",ToggleGroupControl.__docgenInfo={description:'`ToggleGroupControl` is a form component that lets users choose options\nrepresented in horizontal segments. To render options for this control use\n`ToggleGroupControlOption` component.\n\nThis component is intended for selecting a single persistent value from a set of options,\nsimilar to a how a radio button group would work. If you simply want a toggle to switch between views,\nuse a `TabPanel` instead.\n\nOnly use this control when you know for sure the labels of items inside won\'t\nwrap. For items with longer labels, you can consider a `SelectControl` or a\n`CustomSelectControl` component instead.\n\n```jsx\nimport {\n  __experimentalToggleGroupControl as ToggleGroupControl,\n  __experimentalToggleGroupControlOption as ToggleGroupControlOption,\n} from \'@wordpress/components\';\n\nfunction Example() {\n  return (\n    <ToggleGroupControl\n      label="my label"\n      value="vertical"\n      isBlock\n      __nextHasNoMarginBottom\n    >\n      <ToggleGroupControlOption value="horizontal" label="Horizontal" />\n      <ToggleGroupControlOption value="vertical" label="Vertical" />\n    </ToggleGroupControl>\n  );\n}\n```',displayName:"ToggleGroupControl",props:{help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the control.",name:"label",required:!0,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},isAdaptiveWidth:{defaultValue:{value:"false"},description:"Determines if segments should be rendered with equal widths.",name:"isAdaptiveWidth",required:!1,type:{name:"boolean"}},isBlock:{defaultValue:{value:"false"},description:"Renders `ToggleGroupControl` as a (CSS) block element, spanning the entire width of\nthe available space. This is the recommended style when the options are text-based and not icons.",name:"isBlock",required:!1,type:{name:"boolean"}},isDeselectable:{defaultValue:{value:"false"},description:"Whether an option can be deselected by clicking it again.",name:"isDeselectable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback when a segment is selected.",name:"onChange",required:!1,type:{name:"(value: string | number) => void"}},value:{defaultValue:null,description:"The selected value.",name:"value",required:!1,type:{name:"string | number"}},children:{defaultValue:null,description:"The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"'default'"},description:"The size variant of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control/component.tsx#ToggleGroupControl"]={docgenInfo:ToggleGroupControl.__docgenInfo,name:"ToggleGroupControl",path:"packages/components/src/toggle-group-control/toggle-group-control/component.tsx#ToggleGroupControl"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/element-rect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ec:()=>useTrackElementOffsetRect});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-event/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-resize-observer/index.js");const NULL_ELEMENT_OFFSET_RECT={element:void 0,top:0,right:0,bottom:0,left:0,width:0,height:0};const POLL_RATE=100;function useTrackElementOffsetRect(targetElement,deps=[]){const[indicatorPosition,setIndicatorPosition]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(NULL_ELEMENT_OFFSET_RECT),intervalRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),measure=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.A)((()=>{if(targetElement&&targetElement.isConnected){const elementOffsetRect=function getElementOffsetRect(element){var _offsetParent$getBoun,_offsetParent$scrollL,_offsetParent$scrollT;const rect=element.getBoundingClientRect();if(0===rect.width||0===rect.height)return;const offsetParent=element.offsetParent,offsetParentRect=null!==(_offsetParent$getBoun=offsetParent?.getBoundingClientRect())&&void 0!==_offsetParent$getBoun?_offsetParent$getBoun:NULL_ELEMENT_OFFSET_RECT,offsetParentScrollX=null!==(_offsetParent$scrollL=offsetParent?.scrollLeft)&&void 0!==_offsetParent$scrollL?_offsetParent$scrollL:0,offsetParentScrollY=null!==(_offsetParent$scrollT=offsetParent?.scrollTop)&&void 0!==_offsetParent$scrollT?_offsetParent$scrollT:0,computedWidth=parseFloat(getComputedStyle(element).width),computedHeight=parseFloat(getComputedStyle(element).height),scaleX=computedWidth/rect.width,scaleY=computedHeight/rect.height;return{element,top:(rect.top-offsetParentRect?.top)*scaleY+offsetParentScrollY,right:(offsetParentRect?.right-rect.right)*scaleX-offsetParentScrollX,bottom:(offsetParentRect?.bottom-rect.bottom)*scaleY-offsetParentScrollY,left:(rect.left-offsetParentRect?.left)*scaleX+offsetParentScrollX,width:computedWidth,height:computedHeight}}(targetElement);if(elementOffsetRect)return setIndicatorPosition(elementOffsetRect),clearInterval(intervalRef.current),!0}else clearInterval(intervalRef.current);return!1})),setElement=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.A)((()=>{measure()||requestAnimationFrame((()=>{measure()||(intervalRef.current=setInterval(measure,POLL_RATE))}))}));return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{setElement(targetElement),targetElement||setIndicatorPosition(NULL_ELEMENT_OFFSET_RECT)}),[setElement,targetElement]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{measure()}),deps),indicatorPosition}},"./packages/components/src/utils/hooks/use-animated-offset-rect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>useAnimatedOffsetRect});var use_event=__webpack_require__("./packages/compose/build-module/hooks/use-event/index.js"),react=__webpack_require__("./node_modules/react/index.js");function useAnimatedOffsetRect(container,rect,{prefix="subelement",dataAttribute=`${prefix}-animated`,transitionEndFilter=()=>!0,roundRect=!1}={}){const setProperties=(0,use_event.A)((()=>{Object.keys(rect).forEach((property=>"element"!==property&&container?.style.setProperty(`--${prefix}-${property}`,String(roundRect?Math.floor(rect[property]):rect[property]))))}));(0,react.useLayoutEffect)((()=>{setProperties()}),[rect,setProperties]),function useOnValueUpdate(value,onUpdate){const previousValueRef=(0,react.useRef)(value),updateCallbackEvent=(0,use_event.A)(onUpdate);(0,react.useLayoutEffect)((()=>{previousValueRef.current!==value&&(updateCallbackEvent({previousValue:previousValueRef.current}),previousValueRef.current=value)}),[updateCallbackEvent,value])}(rect.element,(({previousValue})=>{rect.element&&previousValue&&container?.setAttribute(`data-${dataAttribute}`,"")})),(0,react.useLayoutEffect)((()=>{function onTransitionEnd(event){transitionEndFilter(event)&&container?.removeAttribute(`data-${dataAttribute}`)}return container?.addEventListener("transitionend",onTransitionEnd),()=>container?.removeEventListener("transitionend",onTransitionEnd)}),[dataAttribute,container,transitionEndFilter])}}}]);