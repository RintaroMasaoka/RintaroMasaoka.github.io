import{n as e,r as t,t as n}from"./rolldown-runtime-CSSSg6FL.js";import{i as r,n as i,r as a}from"./framework-ZegdmD18.js";import{t as o}from"./index-B0VDfxLk.js";function s(e){let t=[],n=String(e||``),r=n.indexOf(`,`),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);let e=n.slice(i,r).trim();(e||!a)&&t.push(e),i=r+1,r=n.indexOf(`,`,i)}return t}function c(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var l=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,u=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,d={};function f(e,t){return((t||d).jsx?u:l).test(e)}var p=/[ \t\n\f\r]/g;function m(e){return typeof e==`object`?e.type===`text`?h(e.value):!1:h(e)}function h(e){return e.replace(p,``)===``}var g=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};g.prototype.normal={},g.prototype.property={},g.prototype.space=void 0;function _(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new g(n,r,t)}function v(e){return e.toLowerCase()}var y=class{constructor(e,t){this.attribute=t,this.property=e}};y.prototype.attribute=``,y.prototype.booleanish=!1,y.prototype.boolean=!1,y.prototype.commaOrSpaceSeparated=!1,y.prototype.commaSeparated=!1,y.prototype.defined=!1,y.prototype.mustUseProperty=!1,y.prototype.number=!1,y.prototype.overloadedBoolean=!1,y.prototype.property=``,y.prototype.spaceSeparated=!1,y.prototype.space=void 0;var b=e({boolean:()=>S,booleanish:()=>C,commaOrSpaceSeparated:()=>D,commaSeparated:()=>ee,number:()=>T,overloadedBoolean:()=>w,spaceSeparated:()=>E}),x=0,S=O(),C=O(),w=O(),T=O(),E=O(),ee=O(),D=O();function O(){return 2**++x}var k=Object.keys(b),te=class extends y{constructor(e,t,n,r){let i=-1;if(super(e,t),A(this,`space`,r),typeof n==`number`)for(;++i<k.length;){let e=k[i];A(this,k[i],(n&b[e])===b[e])}}};te.prototype.defined=!0;function A(e,t,n){n&&(e[t]=n)}function ne(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new te(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[v(r)]=r,n[v(a.attribute)]=r}return new g(t,n,e.space)}var re=ne({properties:{ariaActiveDescendant:null,ariaAtomic:C,ariaAutoComplete:null,ariaBusy:C,ariaChecked:C,ariaColCount:T,ariaColIndex:T,ariaColSpan:T,ariaControls:E,ariaCurrent:null,ariaDescribedBy:E,ariaDetails:null,ariaDisabled:C,ariaDropEffect:E,ariaErrorMessage:null,ariaExpanded:C,ariaFlowTo:E,ariaGrabbed:C,ariaHasPopup:null,ariaHidden:C,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:E,ariaLevel:T,ariaLive:null,ariaModal:C,ariaMultiLine:C,ariaMultiSelectable:C,ariaOrientation:null,ariaOwns:E,ariaPlaceholder:null,ariaPosInSet:T,ariaPressed:C,ariaReadOnly:C,ariaRelevant:null,ariaRequired:C,ariaRoleDescription:E,ariaRowCount:T,ariaRowIndex:T,ariaRowSpan:T,ariaSelected:C,ariaSetSize:T,ariaSort:null,ariaValueMax:T,ariaValueMin:T,ariaValueNow:T,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function ie(e,t){return t in e?e[t]:t}function j(e,t){return ie(e,t.toLowerCase())}var ae=ne({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:ee,acceptCharset:E,accessKey:E,action:null,allow:null,allowFullScreen:S,allowPaymentRequest:S,allowUserMedia:S,alpha:S,alt:null,as:null,async:S,autoCapitalize:null,autoComplete:E,autoFocus:S,autoPlay:S,blocking:E,capture:null,charSet:null,checked:S,cite:null,className:E,closedBy:null,colorSpace:null,cols:T,colSpan:T,command:null,commandFor:null,content:null,contentEditable:C,controls:S,controlsList:E,coords:T|ee,crossOrigin:null,data:null,dateTime:null,decoding:null,default:S,defer:S,dir:null,dirName:null,disabled:S,download:w,draggable:C,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:S,formTarget:null,headers:E,height:T,hidden:w,high:T,href:null,hrefLang:null,htmlFor:E,httpEquiv:E,id:null,imageSizes:null,imageSrcSet:null,inert:S,inputMode:null,integrity:null,is:null,isMap:S,itemId:null,itemProp:E,itemRef:E,itemScope:S,itemType:E,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:S,low:T,manifest:null,max:null,maxLength:T,media:null,method:null,min:null,minLength:T,multiple:S,muted:S,name:null,nonce:null,noModule:S,noValidate:S,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:S,optimum:T,pattern:null,ping:E,placeholder:null,playsInline:S,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:S,referrerPolicy:null,rel:E,required:S,reversed:S,rows:T,rowSpan:T,sandbox:E,scope:null,scoped:S,seamless:S,selected:S,shadowRootClonable:S,shadowRootCustomElementRegistry:S,shadowRootDelegatesFocus:S,shadowRootMode:null,shadowRootSerializable:S,shape:null,size:T,sizes:null,slot:null,span:T,spellCheck:C,src:null,srcDoc:null,srcLang:null,srcSet:null,start:T,step:null,style:null,tabIndex:T,target:null,title:null,translate:null,type:null,typeMustMatch:S,useMap:null,value:C,width:T,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:E,axis:null,background:null,bgColor:null,border:T,borderColor:null,bottomMargin:T,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:S,declare:S,event:null,face:null,frame:null,frameBorder:null,hSpace:T,leftMargin:T,link:null,longDesc:null,lowSrc:null,marginHeight:T,marginWidth:T,noResize:S,noHref:S,noShade:S,noWrap:S,object:null,profile:null,prompt:null,rev:null,rightMargin:T,rules:null,scheme:null,scrolling:C,standby:null,summary:null,text:null,topMargin:T,valueType:null,version:null,vAlign:null,vLink:null,vSpace:T,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:S,disablePictureInPicture:S,disableRemotePlayback:S,exportParts:ee,part:E,prefix:null,property:null,results:T,security:null,unselectable:null},space:`html`,transform:j}),oe=ne({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:D,accentHeight:T,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:T,amplitude:T,arabicForm:null,ascent:T,attributeName:null,attributeType:null,azimuth:T,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:T,by:null,calcMode:null,capHeight:T,className:E,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:T,diffuseConstant:T,direction:null,display:null,dur:null,divisor:T,dominantBaseline:null,download:S,dx:null,dy:null,edgeMode:null,editable:null,elevation:T,enableBackground:null,end:null,event:null,exponent:T,externalResourcesRequired:null,fill:null,fillOpacity:T,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ee,g2:ee,glyphName:ee,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:T,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:T,horizOriginX:T,horizOriginY:T,id:null,ideographic:T,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:T,k:T,k1:T,k2:T,k3:T,k4:T,kernelMatrix:D,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:T,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:T,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:T,overlineThickness:T,paintOrder:null,panose1:null,path:null,pathLength:T,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:E,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:T,pointsAtY:T,pointsAtZ:T,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:D,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:D,rev:D,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:D,requiredFeatures:D,requiredFonts:D,requiredFormats:D,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:T,specularExponent:T,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:T,strikethroughThickness:T,string:null,stroke:null,strokeDashArray:D,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:T,strokeOpacity:T,strokeWidth:null,style:null,surfaceScale:T,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:D,tabIndex:T,tableValues:null,target:null,targetX:T,targetY:T,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:D,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:T,underlineThickness:T,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:T,values:null,vAlphabetic:T,vMathematical:T,vectorEffect:null,vHanging:T,vIdeographic:T,version:null,vertAdvY:T,vertOriginX:T,vertOriginY:T,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:T,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:ie}),se=ne({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),ce=ne({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:j}),le=ne({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ue={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},de=/[A-Z]/g,fe=/-[a-z]/g,pe=/^data[-\w.:]+$/i;function me(e,t){let n=v(t),r=t,i=y;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&pe.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(fe,ge);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!fe.test(e)){let n=e.replace(de,he);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=te}return new i(r,t)}function he(e){return`-`+e.toLowerCase()}function ge(e){return e.charAt(1).toUpperCase()}var _e=_([re,ae,se,ce,le],`html`),ve=_([re,oe,se,ce,le],`svg`);function ye(e){let t=String(e||``).trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function be(e){return e.join(` `).trim()}var xe=n(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,d=`/`,f=`*`,p=``,m=`comment`,h=`declaration`;function g(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,g=1;function v(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(u);g=~n?e.length-n:g+e.length}function y(){var e={line:l,column:g};return function(t){return t.position=new b(e),C(),t}}function b(e){this.start=e,this.end={line:l,column:g},this.source=t.source}b.prototype.content=e;function x(n){var r=Error(t.source+`:`+l+`:`+g+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=g,r.source=e,!t.silent)throw r}function S(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function C(){S(i)}function w(e){var t;for(e||=[];t=T();)t!==!1&&e.push(t);return e}function T(){var t=y();if(!(d!=e.charAt(0)||f!=e.charAt(1))){for(var n=2;p!=e.charAt(n)&&(f!=e.charAt(n)||d!=e.charAt(n+1));)++n;if(n+=2,p===e.charAt(n-1))return x(`End of comment missing`);var r=e.slice(2,n-2);return g+=2,v(r),e=e.slice(n),g+=2,t({type:m,comment:r})}}function E(){var e=y(),t=S(a);if(t){if(T(),!S(o))return x(`property missing ':'`);var r=S(s),i=e({type:h,property:_(t[0].replace(n,p)),value:r?_(r[0].replace(n,p)):p});return S(c),i}}function ee(){var e=[];w(e);for(var t;t=E();)t!==!1&&(e.push(t),w(e));return e}return C(),ee()}function _(e){return e?e.replace(l,p):p}t.exports=g})),Se=n((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,`__esModule`,{value:!0}),e.default=r;var n=t(xe());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Ce=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),we=n(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Se()),r=Ce();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Te=De(`end`),Ee=De(`start`);function De(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Oe(e){let t=Ee(e),n=Te(e);if(t&&n)return{start:t,end:n}}function ke(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?je(e.position):`start`in e||`end`in e?je(e):`line`in e||`column`in e?Ae(e):``}function Ae(e){return Me(e&&e.line)+`:`+Me(e&&e.column)}function je(e){return Ae(e&&e.start)+`-`+Ae(e&&e.end)}function Me(e){return e&&typeof e==`number`?e:1}var Ne=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=ke(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Ne.prototype.file=``,Ne.prototype.name=``,Ne.prototype.reason=``,Ne.prototype.message=``,Ne.prototype.stack=``,Ne.prototype.column=void 0,Ne.prototype.line=void 0,Ne.prototype.ancestors=void 0,Ne.prototype.cause=void 0,Ne.prototype.fatal=void 0,Ne.prototype.place=void 0,Ne.prototype.ruleId=void 0,Ne.prototype.source=void 0;var Pe=t(we(),1),Fe={}.hasOwnProperty,Ie=new Map,Le=/[A-Z]/g,Re=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),ze=new Set([`td`,`th`]),Be=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Ve(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=Qe(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Ze(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?ve:_e,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=He(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function He(e,t,n){if(t.type===`element`)return Ue(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return We(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Ke(e,t,n);if(t.type===`mdxjsEsm`)return Ge(e,t);if(t.type===`root`)return qe(e,t,n);if(t.type===`text`)return Je(e,t)}function Ue(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=ve,e.schema=i),e.ancestors.push(t);let a=it(e,t.tagName,!1),o=$e(e,t),s=tt(e,t);return Re.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!m(e):!0})),Ye(e,o,a,t),Xe(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function We(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}at(e,t.position)}function Ge(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);at(e,t.position)}function Ke(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=ve,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:it(e,t.name,!0),o=et(e,t),s=tt(e,t);return Ye(e,o,a,t),Xe(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function qe(e,t,n){let r={};return Xe(r,tt(e,t)),e.create(t,e.Fragment,r,n)}function Je(e,t){return t.value}function Ye(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Xe(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Ze(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function Qe(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Ee(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function $e(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Fe.call(t.properties,i)){let a=nt(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&ze.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function et(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else at(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else at(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function tt(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ie;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=He(e,a,o);s!==void 0&&n.push(s)}return n}function nt(e,t,n){let r=me(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?c(n):be(n)),r.property===`style`){let t=typeof n==`object`?n:rt(e,String(n));return e.stylePropertyNameCase===`css`&&(t=ot(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?ue[r.property]||r.property:r.attribute,n]}}function rt(e,t){try{return(0,Pe.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Ne("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=Be+`#cannot-parse-style-attribute`,r}}function it(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=f(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=f(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Fe.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);at(e)}function at(e,t){let n=new Ne("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=Be+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function ot(e){let t={},n;for(n in e)Fe.call(e,n)&&(t[st(n)]=e[n]);return t}function st(e){let t=e.replace(Le,ct);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function ct(e){return`-`+e.toLowerCase()}var lt={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},ut={};function dt(e,t){let n=t||ut;return ft(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function ft(e,t,n){if(mt(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return pt(e.children,t,n)}return Array.isArray(e)?pt(e,t,n):``}function pt(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=ft(e[i],t,n);return r.join(``)}function mt(e){return!!(e&&typeof e==`object`)}var ht=document.createElement(`i`);function gt(e){let t=`&`+e+`;`;ht.innerHTML=t;let n=ht.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}function _t(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function vt(e,t){return e.length>0?(_t(e,e.length,0,t),e):t}var yt={}.hasOwnProperty;function bt(e){let t={},n=-1;for(;++n<e.length;)xt(t,e[n]);return t}function xt(e,t){let n;for(n in t){let r=(yt.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){yt.call(r,a)||(r[a]=[]);let e=i[a];St(r[a],Array.isArray(e)?e:e?[e]:[])}}}function St(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);_t(e,0,0,r)}function Ct(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function wt(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var Tt=It(/[A-Za-z]/),Et=It(/[\dA-Za-z]/),Dt=It(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}var kt=It(/\d/),At=It(/[\dA-Fa-f]/),jt=It(/[!-/:-@[-`{-~]/);function M(e){return e!==null&&e<-2}function Mt(e){return e!==null&&(e<0||e===32)}function Nt(e){return e===-2||e===-1||e===32}var Pt=It(/\p{P}|\p{S}/u),Ft=It(/\s/);function It(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Lt(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Et(e.charCodeAt(n+1))&&Et(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function Rt(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Nt(r)?(e.enter(n),s(r)):t(r)}function s(r){return Nt(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var zt={tokenize:Bt};function Bt(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),Rt(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return M(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Vt={tokenize:Ut},Ht={tokenize:Wt};function Ut(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return _t(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ht,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Ht,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return M(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;_t(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-- >r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Wt(e,t,n){return Rt(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function Gt(e){if(e===null||Mt(e)||Ft(e))return 1;if(Pt(e))return 2}function Kt(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var qt={name:`attention`,resolveAll:Jt,tokenize:Yt};function Jt(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Xt(d,-c),Xt(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=vt(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=vt(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=vt(l,Kt(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=vt(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=vt(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,_t(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Yt(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Gt(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Gt(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Xt(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Zt={name:`autolink`,tokenize:Qt};function Qt(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return Tt(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Et(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Et(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ot(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Dt(t)?(e.consume(t),l):n(t)}function u(e){return Et(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Et(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var $t={partial:!0,tokenize:en};function en(e,t,n){return r;function r(t){return Nt(t)?Rt(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||M(e)?t(e):n(e)}}var tn={continuation:{tokenize:rn},exit:an,name:`blockQuote`,tokenize:nn};function nn(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Nt(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function rn(e,t,n){let r=this;return i;function i(t){return Nt(t)?Rt(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(tn,t,n)(r)}}function an(e){e.exit(`blockQuote`)}var on={name:`characterEscape`,tokenize:sn};function sn(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return jt(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var cn={name:`characterReference`,tokenize:ln};function ln(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Et,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=At,u):(e.enter(`characterReferenceValue`),a=7,o=kt,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Et&&!gt(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var un={partial:!0,tokenize:pn},dn={concrete:!0,name:`codeFenced`,tokenize:fn};function fn(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Nt(t)?Rt(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||M(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(un,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||M(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Nt(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),Rt(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||M(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||M(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Nt(t)?Rt(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||M(t)?e.check(un,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||M(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Nt(t)?Rt(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Nt(t)?Rt(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||M(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function pn(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var mn={name:`codeIndented`,tokenize:gn},hn={partial:!0,tokenize:_n};function gn(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),Rt(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):M(t)?e.attempt(hn,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||M(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function _n(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):M(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):Rt(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):M(e)?i(e):n(e)}}var vn={name:`codeText`,previous:bn,resolve:yn,tokenize:xn};function yn(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function bn(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function xn(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):M(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||M(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var Sn=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&Cn(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),Cn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Cn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);Cn(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);Cn(this.left,t.reverse())}}};function Cn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function wn(e){let t={},n=-1,r,i,a,o,s,c,l,u=new Sn(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Tn(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return _t(e,0,1/0,u.slice(0)),!l}function Tn(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var En={resolve:On,tokenize:kn},Dn={partial:!0,tokenize:An};function On(e){return wn(e),e}function kn(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):M(t)?e.check(Dn,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function An(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),Rt(e,a,`linePrefix`)}function a(i){if(i===null||M(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function jn(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ot(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||M(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||Mt(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ot(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Mn(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):M(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||M(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Nt(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Nn(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):M(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),Rt(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||M(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Pn(e,t){let n;return r;function r(i){return M(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Nt(i)?Rt(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var Fn={name:`definition`,tokenize:Ln},In={partial:!0,tokenize:Rn};function Ln(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Mn.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=wt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return Mt(t)?Pn(e,l)(t):l(t)}function l(t){return jn(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(In,d,d)(t)}function d(t){return Nt(t)?Rt(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||M(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Rn(e,t,n){return r;function r(t){return Mt(t)?Pn(e,i)(t):n(t)}function i(t){return Nn(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Nt(t)?Rt(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||M(e)?t(e):n(e)}}var zn={name:`hardBreakEscape`,tokenize:Bn};function Bn(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return M(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Vn={name:`headingAtx`,resolve:Hn,tokenize:Un};function Hn(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},_t(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Un(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||Mt(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||M(n)?(e.exit(`atxHeading`),t(n)):Nt(n)?Rt(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||Mt(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Wn=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Gn=[`pre`,`script`,`style`,`textarea`],Kn={concrete:!0,name:`htmlFlow`,resolveTo:Yn,tokenize:Xn},qn={partial:!0,tokenize:Qn},Jn={partial:!0,tokenize:Zn};function Yn(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Xn(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:j):Tt(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):Tt(a)?(e.consume(a),i=4,r.interrupt?t:j):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:j):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return Tt(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||Mt(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Gn.includes(l)?(i=1,r.interrupt?t(s):D(s)):Wn.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Et(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return Nt(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||Tt(t)?(e.consume(t),b):Nt(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Et(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Nt(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Nt(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||M(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||Mt(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Nt(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||M(t)?D(t):Nt(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),A):t===60&&i===1?(e.consume(t),ne):t===62&&i===4?(e.consume(t),ae):t===63&&i===3?(e.consume(t),j):t===93&&i===5?(e.consume(t),ie):M(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(qn,oe,O)(t)):t===null||M(t)?(e.exit(`htmlFlowData`),O(t)):(e.consume(t),D)}function O(t){return e.check(Jn,k,oe)(t)}function k(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),te}function te(t){return t===null||M(t)?O(t):(e.enter(`htmlFlowData`),D(t))}function A(t){return t===45?(e.consume(t),j):D(t)}function ne(t){return t===47?(e.consume(t),o=``,re):D(t)}function re(t){if(t===62){let n=o.toLowerCase();return Gn.includes(n)?(e.consume(t),ae):D(t)}return Tt(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),re):D(t)}function ie(t){return t===93?(e.consume(t),j):D(t)}function j(t){return t===62?(e.consume(t),ae):t===45&&i===2?(e.consume(t),j):D(t)}function ae(t){return t===null||M(t)?(e.exit(`htmlFlowData`),oe(t)):(e.consume(t),ae)}function oe(n){return e.exit(`htmlFlow`),t(n)}}function Zn(e,t,n){let r=this;return i;function i(t){return M(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Qn(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt($t,t,n)}}var $n={name:`htmlText`,tokenize:er};function er(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):Tt(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):Tt(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):M(t)?(o=d,ne(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?A(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):M(t)?(o=h,ne(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?A(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?A(t):M(t)?(o=v,ne(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):M(t)?(o=y,ne(t)):(e.consume(t),y)}function b(e){return e===62?A(e):y(e)}function x(t){return Tt(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Et(t)?(e.consume(t),S):C(t)}function C(t){return M(t)?(o=C,ne(t)):Nt(t)?(e.consume(t),C):A(t)}function w(t){return t===45||Et(t)?(e.consume(t),w):t===47||t===62||Mt(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),A):t===58||t===95||Tt(t)?(e.consume(t),E):M(t)?(o=T,ne(t)):Nt(t)?(e.consume(t),T):A(t)}function E(t){return t===45||t===46||t===58||t===95||Et(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):M(t)?(o=ee,ne(t)):Nt(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,O):M(t)?(o=D,ne(t)):Nt(t)?(e.consume(t),D):(e.consume(t),k)}function O(t){return t===i?(e.consume(t),i=void 0,te):t===null?n(t):M(t)?(o=O,ne(t)):(e.consume(t),O)}function k(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||Mt(t)?T(t):(e.consume(t),k)}function te(e){return e===47||e===62||Mt(e)?T(e):n(e)}function A(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function ne(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),re}function re(t){return Nt(t)?Rt(e,ie,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ie(t)}function ie(t){return e.enter(`htmlTextData`),o(t)}}var tr={name:`labelEnd`,resolveAll:ar,resolveTo:or,tokenize:sr},nr={tokenize:cr},rr={tokenize:lr},ir={tokenize:ur};function ar(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&_t(e,0,e.length,n),e}function or(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=vt(s,e.slice(a+1,a+r+3)),s=vt(s,[[`enter`,u,t]]),s=vt(s,Kt(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=vt(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=vt(s,e.slice(o+1)),s=vt(s,[[`exit`,c,t]]),_t(e,a,e.length,s),e}function sr(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(wt(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(nr,u,o?u:d)(t):t===91?e.attempt(rr,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(ir,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function cr(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return Mt(t)?Pn(e,a)(t):a(t)}function a(t){return t===41?u(t):jn(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return Mt(t)?Pn(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Nn(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return Mt(t)?Pn(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function lr(e,t,n){let r=this;return i;function i(t){return Mn.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(wt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function ur(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var dr={name:`labelStartImage`,resolveAll:tr.resolveAll,tokenize:fr};function fr(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var pr={name:`labelStartLink`,resolveAll:tr.resolveAll,tokenize:mr};function mr(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var hr={name:`lineEnding`,tokenize:gr};function gr(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),Rt(e,t,`linePrefix`)}}var _r={name:`thematicBreak`,tokenize:vr};function vr(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||M(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Nt(t)?Rt(e,s,`whitespace`)(t):s(t))}}var yr={continuation:{tokenize:Cr},exit:Tr,name:`list`,tokenize:Sr},br={partial:!0,tokenize:Er},xr={partial:!0,tokenize:wr};function Sr(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:kt(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(_r,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return kt(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check($t,r.interrupt?n:u,e.attempt(br,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Nt(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function Cr(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check($t,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Rt(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Nt(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(xr,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,Rt(e,e.attempt(yr,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function wr(e,t,n){let r=this;return Rt(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Tr(e){e.exit(this.containerState.type)}function Er(e,t,n){let r=this;return Rt(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Nt(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Dr={name:`setextUnderline`,resolveTo:Or,tokenize:kr};function Or(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function kr(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Nt(t)?Rt(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||M(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Ar={tokenize:jr};function jr(e){let t=this,n=e.attempt($t,r,e.attempt(this.parser.constructs.flowInitial,i,Rt(e,e.attempt(this.parser.constructs.flow,i,e.attempt(En,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Mr={resolveAll:Ir()},Nr=Fr(`string`),Pr=Fr(`text`);function Fr(e){return{resolveAll:Ir(e===`text`?Lr:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Ir(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Lr(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Rr=e({attentionMarkers:()=>Kr,contentInitial:()=>Br,disable:()=>qr,document:()=>zr,flow:()=>Hr,flowInitial:()=>Vr,insideSpan:()=>Gr,string:()=>Ur,text:()=>Wr}),zr={42:yr,43:yr,45:yr,48:yr,49:yr,50:yr,51:yr,52:yr,53:yr,54:yr,55:yr,56:yr,57:yr,62:tn},Br={91:Fn},Vr={[-2]:mn,[-1]:mn,32:mn},Hr={35:Vn,42:_r,45:[Dr,_r],60:Kn,61:Dr,95:_r,96:dn,126:dn},Ur={38:cn,92:on},Wr={[-5]:hr,[-4]:hr,[-3]:hr,33:dr,38:cn,42:qt,60:[Zt,$n],91:pr,92:[zn,on],93:tr,95:qt,96:vn},Gr={null:[qt,Mr]},Kr={null:[42,95]},qr={null:[]};function Jr(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=vt(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Kt(a,l.events,l),l.events):[]}function f(e,t){return Xr(p(e),t)}function p(e){return Yr(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){M(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&_t(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Yr(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Xr(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Zr(e){let t={constructs:bt([Rr,...(e||{}).extensions||[]]),content:n(zt),defined:[],document:n(Vt),flow:n(Ar),lazy:{},string:n(Nr),text:n(Pr)};return t;function n(e){return n;function n(n){return Jr(t,e,n)}}}function Qr(e){for(;!wn(e););return e}var $r=/[\0\t\n\r]/g;function ei(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if($r.lastIndex=u,c=$r.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var ti=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ni(e){return e.replace(ti,ri)}function ri(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Ct(n.slice(t?2:1),t?16:10)}return gt(n)||e}var ii={}.hasOwnProperty;function ai(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),oi(n)(Qr(Zr(n).document().write(ei()(e,t,!0))))}function oi(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Ce),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(ye),blockQuote:a(me),characterEscape:T,characterReference:T,codeFenced:a(he),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(he,o),codeText:a(ge,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(_e),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ve),hardBreakEscape:a(be),hardBreakTrailing:a(be),htmlFlow:a(xe,o),htmlFlowData:T,htmlText:a(xe,o),htmlTextData:T,image:a(Se),label:o,link:a(Ce),listItem:a(Te),listItemValue:f,listOrdered:a(we,d),listUnordered:a(we),paragraph:a(Ee),reference:se,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ye),strong:a(De),thematicBreak:a(Ae)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:pe,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:le,characterReferenceMarkerNumeric:le,characterReferenceValue:ue,characterReference:de,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(te),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(O),htmlFlowData:E,htmlText:c(k),htmlTextData:E,image:c(ne),label:ie,labelText:re,lineEnding:ee,link:c(A),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ce,resourceDestinationString:j,resourceTitleString:ae,resource:oe,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};ci(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];ii.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||ui).call(a,void 0,e[0])}for(r.position={start:si(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:si(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:si(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||ui).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+ke({start:e.start,end:e.end})+`): it’s not open`);n.position.end=si(e.end)}function u(){return dt(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=wt(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Oe(),n.position={start:si(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=si(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=si(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function A(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ne(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function re(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=ni(t),n.identifier=wt(t).toLowerCase()}function ie(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function j(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function ae(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function oe(){this.data.inReference=void 0}function se(){this.data.referenceType=`collapsed`}function ce(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=wt(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function le(e){this.data.characterReferenceType=e.type}function ue(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Ct(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=gt(t);let i=this.stack[this.stack.length-1];i.value+=r}function de(e){let t=this.stack.pop();t.position.end=si(e.end)}function fe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function pe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function me(){return{type:`blockquote`,children:[]}}function he(){return{type:`code`,lang:null,meta:null,value:``}}function ge(){return{type:`inlineCode`,value:``}}function _e(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ve(){return{type:`emphasis`,children:[]}}function ye(){return{type:`heading`,depth:0,children:[]}}function be(){return{type:`break`}}function xe(){return{type:`html`,value:``}}function Se(){return{type:`image`,title:null,url:``,alt:null}}function Ce(){return{type:`link`,title:null,url:``,children:[]}}function we(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Te(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Ee(){return{type:`paragraph`,children:[]}}function De(){return{type:`strong`,children:[]}}function Oe(){return{type:`text`,value:``}}function Ae(){return{type:`thematicBreak`}}}function si(e){return{line:e.line,column:e.column,offset:e.offset}}function ci(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?ci(e,r):li(e,r)}}function li(e,t){let n;for(n in t)if(ii.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function ui(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+ke({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ke({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+ke({start:t.start,end:t.end})+`) is still open`)}function di(e){let t=this;t.parser=n;function n(n){return ai(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function fi(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function pi(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function mi(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function hi(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gi(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _i(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=Lt(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function vi(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yi(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function bi(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function xi(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return bi(e,t);let i={src:Lt(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Si(e,t){let n={src:Lt(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Ci(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function wi(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return bi(e,t);let i={href:Lt(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Ti(e,t){let n={href:Lt(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ei(e,t,n){let r=e.all(t),i=n?Di(n):Oi(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Di(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Oi(n[r])}return t}function Oi(e){return e.spread??e.children.length>1}function ki(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Ai(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ji(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Mi(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ni(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Ee(t.children[1]),o=Te(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Pi(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Fi(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Ii=9,Li=32;function Ri(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(zi(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(zi(t.slice(i),i>0,!1)),a.join(``)}function zi(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Ii||t===Li;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Ii||t===Li;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Bi(e,t){let n={type:`text`,value:Ri(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Vi(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Hi={blockquote:fi,break:pi,code:mi,delete:hi,emphasis:gi,footnoteReference:_i,heading:vi,html:yi,imageReference:xi,image:Si,inlineCode:Ci,linkReference:wi,link:Ti,listItem:Ei,list:ki,paragraph:Ai,root:ji,strong:Mi,table:Ni,tableCell:Fi,tableRow:Pi,text:Bi,thematicBreak:Vi,toml:Ui,yaml:Ui,definition:Ui,footnoteDefinition:Ui};function Ui(){}var{defineProperty:Wi}=Object,Gi=typeof self==`object`?self:globalThis,Ki=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Gi[e](t)},qi=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?Wi(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Gi[e]==`function`?Ki(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}case`-0`:return-0}return n(Ki(a,o),i)};return r},Ji=e=>qi(new Map,e)(0),Yi=``,{toString:Xi}={},{keys:Zi,is:Qi}=Object,$i=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Xi.call(e).slice(8,-1);switch(n){case`Array`:return[1,Yi];case`Object`:return[2,Yi];case`Date`:return[3,Yi];case`RegExp`:return[4,Yi];case`Map`:return[5,Yi];case`Set`:return[6,Yi];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},ea=([e,t])=>e===0&&(t===`function`||t===`symbol`),ta=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=o=>{if(n.has(o))return n.get(o);let[s,c]=$i(o);switch(s){case 0:{let t=o;switch(c){case`bigint`:s=8,t=o.toString();break;case`number`:if(!o&&Qi(o,-0))return r.push([`-0`])-1;break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+c);t=null;break;case`undefined`:return i([-1],o)}return i([s,t],o)}case 1:{if(c){let e=o;return c===`DataView`?e=new Uint8Array(o.buffer):c===`ArrayBuffer`&&(e=new Uint8Array(o)),i([c,[...e]],o)}let e=[],t=i([s,e],o);for(let t of o)e.push(a(t));return t}case 2:{if(c)switch(c){case`BigInt`:return i([c,o.toString()],o);case`Boolean`:case`Number`:case`String`:return i([c,o.valueOf()],o)}if(t&&`toJSON`in o)return a(o.toJSON());let n=[],r=i([s,n],o);for(let t of Zi(o))(e||!ea($i(o[t])))&&n.push([a(t),a(o[t])]);return r}case 3:return i([s,isNaN(o.getTime())?Yi:o.toISOString()],o);case 4:{let{source:e,flags:t}=o;return i([s,{source:e,flags:t}],o)}case 5:{let t=[],n=i([s,t],o);for(let[n,r]of o)(e||!(ea($i(n))||ea($i(r))))&&t.push([a(n),a(r)]);return n}case 6:{let t=[],n=i([s,t],o);for(let n of o)(e||!ea($i(n)))&&t.push(a(n));return n}}let{message:l}=o;return i([s,{name:c,message:l}],o)};return a},na=(e,{json:t,lossy:n}={})=>{let r=[];return ta(!(t||n),!!t,new Map,r)(e),r},ra=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Ji(na(e,t)):structuredClone(e):(e,t)=>Ji(na(e,t));function ia(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function aa(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function oa(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||ia,r=e.options.footnoteBackLabel||aa,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=Lt(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...ra(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var sa=(function(e){if(e==null)return fa;if(typeof e==`function`)return da(e);if(typeof e==`object`)return Array.isArray(e)?ca(e):la(e);if(typeof e==`string`)return ua(e);throw Error(`Expected function, string, or object as test`)});function ca(e){let t=[],n=-1;for(;++n<e.length;)t[n]=sa(e[n]);return da(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function la(e){let t=e;return da(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function ua(e){return da(t);function t(t){return t&&t.type===e}}function da(e){return t;function t(t,n,r){return!!(pa(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function fa(){return!0}function pa(e){return typeof e==`object`&&!!e&&`type`in e}function ma(e){return e}var ha=[],ga=`skip`;function _a(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=sa(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,`name`,{value:`node (`+ma(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=ha,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=va(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function va(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?ha:[e]}function ya(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),_a(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var ba={}.hasOwnProperty,xa={};function Sa(e,t){let n=t||xa,r=new Map,i=new Map,a={all:s,applyData:wa,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Hi,...n.handlers},one:o,options:n,patch:Ca,wrap:Ea};return ya(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(ba.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=ra(n);return r.children=a.all(e),r}return ra(e)}return(a.options.unknownHandler||Ta)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Da(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Da(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Ca(e,t){e.position&&(t.position=Oe(e))}function wa(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,ra(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Ta(e,t){let n=t.data||{},r=`value`in t&&!(ba.call(n,`hProperties`)||ba.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ea(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Da(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Oa(e,t){let n=Sa(e,t),r=n.one(e,void 0),i=oa(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function ka(e,t){return e&&`run`in e?async function(n,r){let i=Oa(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Oa(n,{file:r,...e||t})}}function Aa(e){if(e)throw e}var ja=n(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function Ma(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Na(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Pa(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Pa(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Fa={basename:Ia,dirname:La,extname:Ra,join:za,sep:`/`};function Ia(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Ha(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function La(e){if(Ha(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Ra(e){Ha(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function za(...e){let t=-1,n;for(;++t<e.length;)Ha(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Ba(n)}function Ba(e){Ha(e);let t=e.codePointAt(0)===47,n=Va(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Va(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Ha(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Ua={cwd:Wa};function Wa(){return`/`}function Ga(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Ka(e){if(typeof e==`string`)e=new URL(e);else if(!Ga(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return qa(e)}function qa(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Ja=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Ya=class{constructor(e){let t;t=e?Ga(e)?{path:e}:typeof e==`string`||$a(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Ua.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Ja.length;){let e=Ja[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Ja.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Fa.basename(this.path):void 0}set basename(e){Za(e,`basename`),Xa(e,`basename`),this.path=Fa.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Fa.dirname(this.path):void 0}set dirname(e){Qa(this.basename,`dirname`),this.path=Fa.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Fa.extname(this.path):void 0}set extname(e){if(Xa(e,`extname`),Qa(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Fa.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Ga(e)&&(e=Ka(e)),Za(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Fa.basename(this.path,this.extname):void 0}set stem(e){Za(e,`stem`),Xa(e,`stem`),this.path=Fa.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Ne(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Xa(e,t){if(e&&e.includes(Fa.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Fa.sep+"`")}function Za(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Qa(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function $a(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var eo=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),to=t(ja(),1),no={}.hasOwnProperty,ro=new class e extends eo{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Na()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,to.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(oo(`data`,this.frozen),this.namespace[e]=t,this):no.call(this.namespace,e)&&this.namespace[e]||void 0:e?(oo(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=lo(e),n=this.parser||this.Parser;return io(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),io(`process`,this.parser||this.Parser),ao(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=lo(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);fo(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),io(`processSync`,this.parser||this.Parser),ao(`processSync`,this.compiler||this.Compiler),this.process(e,r),co(`processSync`,`process`,t),n;function r(e,r){t=!0,Aa(e),n=r}}run(e,t,n){so(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=lo(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),co(`runSync`,`run`,n),r;function i(e,t){Aa(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=lo(t),r=this.compiler||this.Compiler;return ao(`stringify`,r),so(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(oo(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,to.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];Ma(o)&&Ma(r)&&(r=(0,to.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function io(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function ao(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function oo(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function so(e){if(!Ma(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function co(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function lo(e){return uo(e)?e:new Ya(e)}function uo(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function fo(e){return typeof e==`string`||po(e)}function po(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var N=a(),P=t(r(),1),mo=[],ho={allowDangerousHtml:!0},go=/^(https?|ircs?|mailto|xmpp)$/i,_o=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function vo(e){let t=yo(e),n=bo(e);return xo(t.runSync(t.parse(n),n),e)}function yo(e){let t=e.rehypePlugins||mo,n=e.remarkPlugins||mo,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ho}:ho;return ro().use(di).use(n).use(ka,r).use(t)}function bo(e){let t=e.children||``,n=new Ya;return typeof t==`string`?n.value=t:``+t,n}function xo(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||So;for(let e of _o)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return ya(e,l),Ve(e,{Fragment:N.Fragment,components:i,ignoreInvalidStyle:!0,jsx:N.jsx,jsxs:N.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in lt)if(Object.hasOwn(lt,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=lt[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function So(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||go.test(e.slice(0,t))?e:``}function Co(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function wo(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function To(e,t,n){let r=sa((n||{}).ignore||[]),i=Eo(t),a=-1;for(;++a<i.length;)_a(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function Eo(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Do(e[0]),Oo(e[1])])}return t}function Do(e){return typeof e==`string`?new RegExp(wo(e),`g`):e}function Oo(e){return typeof e==`function`?e:function(){return e}}var ko=`phrasing`,Ao=[`autolink`,`link`,`image`,`label`];function jo(){return{transforms:[zo],enter:{literalAutolink:No,literalAutolinkEmail:Po,literalAutolinkHttp:Po,literalAutolinkWww:Po},exit:{literalAutolink:Ro,literalAutolinkEmail:Lo,literalAutolinkHttp:Fo,literalAutolinkWww:Io}}}function Mo(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:ko,notInConstruct:Ao},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:ko,notInConstruct:Ao},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:ko,notInConstruct:Ao}]}}function No(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function Po(e){this.config.enter.autolinkProtocol.call(this,e)}function Fo(e){this.config.exit.autolinkProtocol.call(this,e)}function Io(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Lo(e){this.config.exit.autolinkEmail.call(this,e)}function Ro(e){this.exit(e)}function zo(e){To(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Bo],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Vo]],{ignore:[`link`,`linkReference`]})}function Bo(e,t,n,r,i){let a=``;if(!Wo(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Ho(n)))return!1;let o=Uo(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Vo(e,t,n,r){return!Wo(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Ho(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Uo(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=Co(e,`(`),a=Co(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Wo(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Ft(n)||Pt(n))&&(!t||n!==47)}es.peek=$o;function Go(){this.buffer()}function Ko(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function qo(){this.buffer()}function Jo(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Yo(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=wt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Xo(e){this.exit(e)}function Zo(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=wt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Qo(e){this.exit(e)}function $o(){return`[`}function es(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function ts(){return{enter:{gfmFootnoteCallString:Go,gfmFootnoteCall:Ko,gfmFootnoteDefinitionLabelString:qo,gfmFootnoteDefinition:Jo},exit:{gfmFootnoteCallString:Yo,gfmFootnoteCall:Xo,gfmFootnoteDefinitionLabelString:Zo,gfmFootnoteDefinition:Qo}}}function ns(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:es},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?is:rs))),s(),o}}function rs(e,t,n){return t===0?e:is(e,t,n)}function is(e,t,n){return(n?``:`    `)+e}var as=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];us.peek=ds;function os(){return{canContainEols:[`delete`],enter:{strikethrough:cs},exit:{strikethrough:ls}}}function ss(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:as}],handlers:{delete:us}}}function cs(e){this.enter({type:`delete`,children:[]},e)}function ls(e){this.exit(e)}function us(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function ds(){return`~`}function fs(e){return e.length}function ps(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||fs,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=ms(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=hs(r[d]);else{let e=hs(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function ms(e){return e==null?``:String(e)}function hs(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function gs(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),_s);return i(),o}function _s(e,t,n){return`>`+(n?``:` `)+e}function vs(e,t){return ys(e,t.inConstruct,!0)&&!ys(e,t.notInConstruct,!1)}function ys(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function bs(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&vs(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function xs(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Ss(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Cs(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function ws(e,t,n,r){let i=Cs(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(Ss(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Ts);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(xs(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function Ts(e,t,n){return(n?``:`    `)+e}function Es(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Ds(e,t,n,r){let i=Es(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function Os(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ks(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function As(e,t,n){let r=Gt(e),i=Gt(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}js.peek=Ms;function js(e,t,n,r){let i=Os(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=As(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ks(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=As(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ks(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Ms(e,t,n){return n.options.emphasis||`*`}function Ns(e,t){let n=!1;return ya(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&dt(e)&&(t.options.setext||n))}function Ps(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Ns(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=ks(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}Fs.peek=Is;function Fs(e){return e.value||``}function Is(){return`<`}Ls.peek=Rs;function Ls(e,t,n,r){let i=Es(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function Rs(){return`!`}zs.peek=Bs;function zs(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Bs(){return`!`}Vs.peek=Hs;function Vs(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Hs(){return"`"}function Us(e,t){let n=dt(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Ws.peek=Gs;function Ws(e,t,n,r){let i=Es(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Us(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function Gs(e,t,n){return Us(e,n)?`<`:`[`}Ks.peek=qs;function Ks(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function qs(){return`[`}function Js(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Ys(e){let t=Js(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Xs(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Zs(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Qs(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?Xs(n):Js(n),s=e.ordered?o===`.`?`)`:`.`:Ys(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Zs(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function $s(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function ec(e,t,n,r){let i=$s(n),a=n.bulletCurrent||Js(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function tc(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var nc=sa([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function rc(e,t,n,r){return(e.children.some(function(e){return nc(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function ic(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ac.peek=oc;function ac(e,t,n,r){let i=ic(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=As(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ks(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=As(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ks(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function oc(e,t,n){return n.options.strong||`*`}function sc(e,t,n,r){return n.safe(e.value,r)}function cc(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function lc(e,t,n){let r=(Zs(n)+(n.options.ruleSpaces?` `:``)).repeat(cc(n));return n.options.ruleSpaces?r.slice(0,-1):r}var uc={blockquote:gs,break:bs,code:ws,definition:Ds,emphasis:js,hardBreak:bs,heading:Ps,html:Fs,image:Ls,imageReference:zs,inlineCode:Vs,link:Ws,linkReference:Ks,list:Qs,listItem:ec,paragraph:tc,root:rc,strong:ac,text:sc,thematicBreak:lc};function dc(){return{enter:{table:fc,tableData:gc,tableHeader:gc,tableRow:mc},exit:{codeText:_c,table:pc,tableData:hc,tableHeader:hc,tableRow:hc}}}function fc(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function pc(e){this.exit(e),this.data.inTable=void 0}function mc(e){this.enter({type:`tableRow`,children:[]},e)}function hc(e){this.exit(e)}function gc(e){this.enter({type:`tableCell`,children:[]},e)}function _c(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,vc));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function vc(e,t){return t===`|`?t:e}function yc(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return ps(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=uc.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function bc(){return{exit:{taskListCheckValueChecked:Sc,taskListCheckValueUnchecked:Sc,paragraph:Cc}}}function xc(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:wc}}}function Sc(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Cc(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function wc(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=uc.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Tc(){return[jo(),ts(),os(),dc(),bc()]}function Ec(e){return{extensions:[Mo(),ns(e),ss(),yc(e),xc()]}}var Dc={tokenize:Vc,partial:!0},Oc={tokenize:Hc,partial:!0},kc={tokenize:Uc,partial:!0},Ac={tokenize:Wc,partial:!0},jc={tokenize:Gc,partial:!0},Mc={name:`wwwAutolink`,tokenize:zc,previous:Kc},Nc={name:`protocolAutolink`,tokenize:Bc,previous:qc},Pc={name:`emailAutolink`,tokenize:Rc,previous:Jc},Fc={};function Ic(){return{text:Fc}}for(var Lc=48;Lc<123;)Fc[Lc]=Pc,Lc++,Lc===58?Lc=65:Lc===91&&(Lc=97);Fc[43]=Pc,Fc[45]=Pc,Fc[46]=Pc,Fc[95]=Pc,Fc[72]=[Pc,Nc],Fc[104]=[Pc,Nc],Fc[87]=[Pc,Mc],Fc[119]=[Pc,Mc];function Rc(e,t,n){let r=this,i,a;return o;function o(t){return!Yc(t)||!Jc.call(r,r.previous)||Xc(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Yc(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(jc,u,l)(t):t===45||t===95||Et(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&Tt(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function zc(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Kc.call(r,r.previous)||Xc(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Dc,e.attempt(Oc,e.attempt(kc,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function Bc(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&qc.call(r,r.previous)&&!Xc(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(Tt(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Ot(t)||Mt(t)||Ft(t)||Pt(t)?n(t):e.attempt(Oc,e.attempt(kc,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Vc(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Hc(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Ac,c,s)(t):t===null||Mt(t)||Ft(t)||t!==45&&Pt(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Uc(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Ac,t,a)(o):o===null||Mt(o)||Ft(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Wc(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||Mt(o)||Ft(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||Mt(e)||Ft(e)?t(e):r(e)}function a(e){return Tt(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):Tt(t)?(e.consume(t),o):n(t)}}function Gc(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Et(e)?n(e):t(e)}}function Kc(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Mt(e)}function qc(e){return!Tt(e)}function Jc(e){return!(e===47||Yc(e))}function Yc(e){return e===43||e===45||e===46||e===95||Et(e)}function Xc(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Zc={tokenize:al,partial:!0};function Qc(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:nl,continuation:{tokenize:rl},exit:il}},text:{91:{name:`gfmFootnoteCall`,tokenize:tl},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:$c,resolveTo:el}}}}function $c(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=wt(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function el(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function tl(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||Mt(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(wt(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return Mt(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function nl(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||Mt(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=wt(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return Mt(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),Rt(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function rl(e,t,n){return e.check($t,t,e.attempt(Zc,t,n))}function il(e){e.exit(`gfmFootnoteDefinition`)}function al(e,t,n){let r=this;return Rt(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function ol(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&_t(o,o.length,0,Kt(s,e.slice(r+1,n),t)),_t(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),_t(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=Gt(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=Gt(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var sl=class{constructor(){this.map=[]}add(e,t,n){cl(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function cl(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function ll(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function ul(){return{flow:{null:{name:`table`,tokenize:dl,resolveAll:fl}}}}function dl(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):M(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):Nt(t)?Rt(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||Mt(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,Nt(t)?Rt(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return Nt(t)?Rt(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||M(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return Nt(t)?Rt(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||M(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||M(n)?(e.exit(`tableRow`),t(n)):Nt(n)?Rt(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||Mt(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function fl(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new sl;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(ml(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=pl(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=pl(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=pl(f,t,o,i,n,d)):(o[0]=o[1],d=pl(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&ml(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=ll(t.events,n))}return e}function pl(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},hl(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=hl(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=hl(t.events,n[2]),a=hl(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},hl(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function ml(e,t,n,r,i){let a=[],o=hl(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function hl(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var gl={name:`tasklistCheck`,tokenize:vl};function _l(){return{text:{91:gl}}}function vl(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return Mt(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return M(r)?t(r):Nt(r)?e.check({tokenize:yl},t,n)(r):n(r)}}function yl(e,t,n){return Rt(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function bl(e){return bt([Ic(),Qc(),ol(e),ul(),_l()])}var xl={};function Sl(e){let t=this,n=e||xl,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(bl(n)),a.push(Tc()),o.push(Ec(n))}function Cl(){return{enter:{mathFlow:e,mathFlowFenceMeta:t,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:s,mathText:o,mathTextData:s}};function e(e){this.enter({type:`math`,meta:null,value:``,data:{hName:`pre`,hChildren:[{type:`element`,tagName:`code`,properties:{className:[`language-math`,`math-display`]},children:[]}]}},e)}function t(){this.buffer()}function n(){let e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.meta=e}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(e){let t=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),n=this.stack[this.stack.length-1];n.type,this.exit(e),n.value=t;let r=n.data.hChildren[0];r.type,r.tagName,r.children.push({type:`text`,value:t}),this.data.mathFlowInside=void 0}function a(e){this.enter({type:`inlineMath`,value:``,data:{hName:`code`,hProperties:{className:[`language-math`,`math-inline`]},hChildren:[]}},e),this.buffer()}function o(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,this.exit(e),n.value=t,n.data.hChildren.push({type:`text`,value:t})}function s(e){this.config.enter.data.call(this,e),this.config.exit.data.call(this,e)}}function wl(e){let t=(e||{}).singleDollarTextMath;return t??=!0,r.peek=i,{unsafe:[{character:`\r`,inConstruct:`mathFlowMeta`},{character:`
`,inConstruct:`mathFlowMeta`},{character:`$`,after:t?void 0:`\\$`,inConstruct:`phrasing`},{character:`$`,inConstruct:`mathFlowMeta`},{atBreak:!0,character:`$`,after:`\\$`}],handlers:{math:n,inlineMath:r}};function n(e,t,n,r){let i=e.value||``,a=n.createTracker(r),o=`$`.repeat(Math.max(xs(i,`$`)+1,2)),s=n.enter(`mathFlow`),c=a.move(o);if(e.meta){let t=n.enter(`mathFlowMeta`);c+=a.move(n.safe(e.meta,{after:`
`,before:c,encode:[`$`],...a.current()})),t()}return c+=a.move(`
`),i&&(c+=a.move(i+`
`)),c+=a.move(o),s(),c}function r(e,n,r){let i=e.value||``,a=1;for(t||a++;RegExp(`(^|[^$])`+`\\$`.repeat(a)+`([^$]|$)`).test(i);)a++;let o=`$`.repeat(a);/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^\$|\$$/.test(i))&&(i=` `+i+` `);let s=-1;for(;++s<r.unsafe.length;){let e=r.unsafe[s];if(!e.atBreak)continue;let t=r.compilePattern(e),n;for(;n=t.exec(i);){let e=n.index;i.codePointAt(e)===10&&i.codePointAt(e-1)===13&&e--,i=i.slice(0,e)+` `+i.slice(n.index+1)}}return o+i+o}function i(){return`$`}}var Tl={tokenize:Dl,concrete:!0,name:`mathFlow`},El={tokenize:Ol,partial:!0};function Dl(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){return e.enter(`mathFlow`),e.enter(`mathFlowFence`),e.enter(`mathFlowFenceSequence`),c(t)}function c(t){return t===36?(e.consume(t),o++,c):o<2?n(t):(e.exit(`mathFlowFenceSequence`),Rt(e,l,`whitespace`)(t))}function l(t){return t===null||M(t)?d(t):(e.enter(`mathFlowFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===null||M(t)?(e.exit(`chunkString`),e.exit(`mathFlowFenceMeta`),d(t)):t===36?n(t):(e.consume(t),u)}function d(n){return e.exit(`mathFlowFence`),r.interrupt?t(n):e.attempt(El,f,g)(n)}function f(t){return e.attempt({tokenize:_,partial:!0},g,p)(t)}function p(t){return(a?Rt(e,m,`linePrefix`,a+1):m)(t)}function m(t){return t===null?g(t):M(t)?e.attempt(El,f,g)(t):(e.enter(`mathFlowValue`),h(t))}function h(t){return t===null||M(t)?(e.exit(`mathFlowValue`),m(t)):(e.consume(t),h)}function g(n){return e.exit(`mathFlow`),t(n)}function _(e,t,n){let i=0;return Rt(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4);function a(t){return e.enter(`mathFlowFence`),e.enter(`mathFlowFenceSequence`),s(t)}function s(t){return t===36?(i++,e.consume(t),s):i<o?n(t):(e.exit(`mathFlowFenceSequence`),Rt(e,c,`whitespace`)(t))}function c(r){return r===null||M(r)?(e.exit(`mathFlowFence`),t(r)):n(r)}}}function Ol(e,t,n){let r=this;return i;function i(n){return n===null?t(n):(e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function kl(e){let t=(e||{}).singleDollarTextMath;return t??=!0,{tokenize:n,resolve:Al,previous:jl,name:`mathText`};function n(e,n,r){let i=0,a,o;return s;function s(t){return e.enter(`mathText`),e.enter(`mathTextSequence`),c(t)}function c(n){return n===36?(e.consume(n),i++,c):i<2&&!t?r(n):(e.exit(`mathTextSequence`),l(n))}function l(t){return t===null?r(t):t===36?(o=e.enter(`mathTextSequence`),a=0,d(t)):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),l):M(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),l):(e.enter(`mathTextData`),u(t))}function u(t){return t===null||t===32||t===36||M(t)?(e.exit(`mathTextData`),l(t)):(e.consume(t),u)}function d(t){return t===36?(e.consume(t),a++,d):a===i?(e.exit(`mathTextSequence`),e.exit(`mathText`),n(t)):(o.type=`mathTextData`,u(t))}}}function Al(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`mathTextData`){e[t][1].type=`mathTextPadding`,e[n][1].type=`mathTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`mathTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function jl(e){return e!==36||this.events[this.events.length-1][1].type===`characterEscape`}function Ml(e){return{flow:{36:Tl},text:{36:kl(e)}}}var Nl=class e{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new e(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}},Pl=class e{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(t,n){return new e(n,Nl.range(this,t))}},F=class e{constructor(t,n){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var r=`KaTeX parse error: `+t,i,a,o=n&&n.loc;if(o&&o.start<=o.end){var s=o.lexer.input;i=o.start,a=o.end,i===s.length?r+=` at end of input: `:r+=` at position `+(i+1)+`: `;var c=s.slice(i,a).replace(/[^]/g,`$&̲`),l=i>15?`…`+s.slice(i-15,i):s.slice(0,i),u=a+15<s.length?s.slice(a,a+15)+`…`:s.slice(a);r+=l+c+u}var d=Error(r);return d.name=`ParseError`,d.__proto__=e.prototype,d.position=i,i!=null&&a!=null&&(d.length=a-i),d.rawMessage=t,d}};F.prototype.__proto__=Error.prototype;var Fl=function(e,t){return e.indexOf(t)!==-1},Il=function(e,t){return e===void 0?t:e},Ll=/([A-Z])/g,Rl=function(e){return e.replace(Ll,`-$1`).toLowerCase()},zl={"&":`&amp;`,">":`&gt;`,"<":`&lt;`,'"':`&quot;`,"'":`&#x27;`},Bl=/[&><"']/g;function Vl(e){return String(e).replace(Bl,e=>zl[e])}var Hl=function e(t){return t.type===`ordgroup`||t.type===`color`?t.body.length===1?e(t.body[0]):t:t.type===`font`?e(t.body):t},Ul=function(e){var t=Hl(e);return t.type===`mathord`||t.type===`textord`||t.type===`atom`},Wl=function(e){if(!e)throw Error(`Expected non-null, but got `+String(e));return e},I={contains:Fl,deflt:Il,escape:Vl,hyphenate:Rl,getBaseElem:Hl,isCharacterBox:Ul,protocolFromUrl:function(e){var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==`:`||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():`_relative`}},Gl={displayMode:{type:`boolean`,description:`Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`,cli:`-d, --display-mode`},output:{type:{enum:[`htmlAndMathml`,`html`,`mathml`]},description:`Determines the markup language of the output.`,cli:`-F, --format <type>`},leqno:{type:`boolean`,description:`Render display math in leqno style (left-justified tags).`},fleqn:{type:`boolean`,description:`Render display math flush left.`},throwOnError:{type:`boolean`,default:!0,cli:`-t, --no-throw-on-error`,cliDescription:`Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.`},errorColor:{type:`string`,default:`#cc0000`,cli:`-c, --error-color <color>`,cliDescription:`A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`,cliProcessor:e=>`#`+e},macros:{type:`object`,cli:`-m, --macro <def>`,cliDescription:`Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`,cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:`number`,description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:`--min-rule-thickness <size>`,cliProcessor:parseFloat},colorIsTextColor:{type:`boolean`,description:`Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`,cli:`-b, --color-is-text-color`},strict:{type:[{enum:[`warn`,`ignore`,`error`]},`boolean`,`function`],description:`Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`,cli:`-S, --strict`,cliDefault:!1},trust:{type:[`boolean`,`function`],description:`Trust the input, enabling all HTML features such as \\url.`,cli:`-T, --trust`},maxSize:{type:`number`,default:1/0,description:`If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`,processor:e=>Math.max(0,e),cli:`-s, --max-size <n>`,cliProcessor:parseInt},maxExpand:{type:`number`,default:1e3,description:`Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`,processor:e=>Math.max(0,e),cli:`-e, --max-expand <n>`,cliProcessor:e=>e===`Infinity`?1/0:parseInt(e)},globalGroup:{type:`boolean`,cli:!1}};function Kl(e){if(e.default)return e.default;var t=e.type,n=Array.isArray(t)?t[0]:t;if(typeof n!=`string`)return n.enum[0];switch(n){case`boolean`:return!1;case`string`:return``;case`number`:return 0;case`object`:return{}}}var ql=class{constructor(e){for(var t in this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e||={},Gl)if(Gl.hasOwnProperty(t)){var n=Gl[t];this[t]=e[t]===void 0?Kl(n):n.processor?n.processor(e[t]):e[t]}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r==`function`&&(r=r(e,t,n)),!(!r||r===`ignore`)){if(r===!0||r===`error`)throw new F(`LaTeX-incompatible input and strict mode is set to 'error': `+(t+` [`+e+`]`),n);r===`warn`?typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)):typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r==`function`)try{r=r(e,t,n)}catch{r=`error`}return!r||r===`ignore`?!1:r===!0||r===`error`?!0:r===`warn`?(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)),!1):(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`)),!1)}isTrusted(e){if(e.url&&!e.protocol){var t=I.protocolFromUrl(e.url);if(t==null)return!1;e.protocol=t}return!!(typeof this.trust==`function`?this.trust(e):this.trust)}},Jl=class{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return ru[iu[this.id]]}sub(){return ru[au[this.id]]}fracNum(){return ru[ou[this.id]]}fracDen(){return ru[su[this.id]]}cramp(){return ru[cu[this.id]]}text(){return ru[lu[this.id]]}isTight(){return this.size>=2}},Yl=0,Xl=1,Zl=2,Ql=3,$l=4,eu=5,tu=6,nu=7,ru=[new Jl(Yl,0,!1),new Jl(Xl,0,!0),new Jl(Zl,1,!1),new Jl(Ql,1,!0),new Jl($l,2,!1),new Jl(eu,2,!0),new Jl(tu,3,!1),new Jl(nu,3,!0)],iu=[$l,eu,$l,eu,tu,nu,tu,nu],au=[eu,eu,eu,eu,nu,nu,nu,nu],ou=[Zl,Ql,$l,eu,tu,nu,tu,nu],su=[Ql,Ql,eu,eu,nu,nu,nu,nu],cu=[Xl,Xl,Ql,Ql,eu,eu,nu,nu],lu=[Yl,Xl,Zl,Ql,Zl,Ql,Zl,Ql],L={DISPLAY:ru[Yl],TEXT:ru[Zl],SCRIPT:ru[$l],SCRIPTSCRIPT:ru[tu]},uu=[{name:`latin`,blocks:[[256,591],[768,879]]},{name:`cyrillic`,blocks:[[1024,1279]]},{name:`armenian`,blocks:[[1328,1423]]},{name:`brahmic`,blocks:[[2304,4255]]},{name:`georgian`,blocks:[[4256,4351]]},{name:`cjk`,blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:`hangul`,blocks:[[44032,55215]]}];function du(e){for(var t=0;t<uu.length;t++)for(var n=uu[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var fu=[];uu.forEach(e=>e.blocks.forEach(e=>fu.push(...e)));function pu(e){for(var t=0;t<fu.length;t+=2)if(e>=fu[t]&&e<=fu[t+1])return!0;return!1}var mu=80,hu=function(e,t){return`M95,`+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+` -`+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},gu=function(e,t){return`M263,`+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+` -`+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},_u=function(e,t){return`M983 `+(10+e+t)+`
l`+e/3.13+` -`+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},vu=function(e,t){return`M424,`+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+` -`+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+` `+t+`
h400000v`+(40+e)+`h-400000z`},yu=function(e,t){return`M473,`+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+` -`+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+` `+t+`h400000v`+(40+e)+`H1017.7z`},bu=function(e){var t=e/2;return`M400000 `+e+` H0 L`+t+` 0 l65 45 L145 `+(e-80)+` H400000z`},xu=function(e,t,n){var r=n-54-t-e;return`M702 `+(e+t)+`H400000`+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+`H400000v`+(40+e)+`H742z`},Su=function(e,t,n){t=1e3*t;var r=``;switch(e){case`sqrtMain`:r=hu(t,mu);break;case`sqrtSize1`:r=gu(t,mu);break;case`sqrtSize2`:r=_u(t,mu);break;case`sqrtSize3`:r=vu(t,mu);break;case`sqrtSize4`:r=yu(t,mu);break;case`sqrtTall`:r=xu(t,mu,n)}return r},Cu=function(e,t){switch(e){case`⎜`:return`M291 0 H417 V`+t+` H291z M291 0 H417 V`+t+` H291z`;case`∣`:return`M145 0 H188 V`+t+` H145z M145 0 H188 V`+t+` H145z`;case`∥`:return`M145 0 H188 V`+t+` H145z M145 0 H188 V`+t+` H145z`+(`M367 0 H410 V`+t+` H367z M367 0 H410 V`+t+` H367z`);case`⎟`:return`M457 0 H583 V`+t+` H457z M457 0 H583 V`+t+` H457z`;case`⎢`:return`M319 0 H403 V`+t+` H319z M319 0 H403 V`+t+` H319z`;case`⎥`:return`M263 0 H347 V`+t+` H263z M263 0 H347 V`+t+` H263z`;case`⎪`:return`M384 0 H504 V`+t+` H384z M384 0 H504 V`+t+` H384z`;case`⏐`:return`M312 0 H355 V`+t+` H312z M312 0 H355 V`+t+` H312z`;case`‖`:return`M257 0 H300 V`+t+` H257z M257 0 H300 V`+t+` H257z`+(`M478 0 H521 V`+t+` H478z M478 0 H521 V`+t+` H478z`);default:return``}},wu={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Tu=function(e,t){switch(e){case`lbrack`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+` v1759 h84z`;case`rbrack`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+` v1759 h84z`;case`vert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z`;case`doublevert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+` v585 h43z`;case`lfloor`:return`M319 602 V0 H403 V602 v`+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`rfloor`:return`M319 602 V0 H403 V602 v`+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`lceil`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+` v602 h84z`;case`rceil`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+` v602 h84z`;case`lparen`:return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case`rparen`:return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw Error(`Unknown stretchy delimiter.`)}},Eu=class{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return I.contains(this.classes,e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e=``,t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>e.toText()).join(``)}},Du={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ou={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},ku={Å:`A`,Ð:`D`,Þ:`o`,å:`a`,ð:`d`,þ:`o`,А:`A`,Б:`B`,В:`B`,Г:`F`,Д:`A`,Е:`E`,Ж:`K`,З:`3`,И:`N`,Й:`N`,К:`K`,Л:`N`,М:`M`,Н:`H`,О:`O`,П:`N`,Р:`P`,С:`C`,Т:`T`,У:`y`,Ф:`O`,Х:`X`,Ц:`U`,Ч:`h`,Ш:`W`,Щ:`W`,Ъ:`B`,Ы:`X`,Ь:`B`,Э:`3`,Ю:`X`,Я:`R`,а:`a`,б:`b`,в:`a`,г:`r`,д:`y`,е:`e`,ж:`m`,з:`e`,и:`n`,й:`n`,к:`n`,л:`n`,м:`m`,н:`n`,о:`o`,п:`n`,р:`p`,с:`c`,т:`o`,у:`y`,ф:`b`,х:`x`,ц:`n`,ч:`n`,ш:`w`,щ:`w`,ъ:`a`,ы:`m`,ь:`a`,э:`e`,ю:`m`,я:`r`};function Au(e,t){Du[e]=t}function ju(e,t,n){if(!Du[t])throw Error(`Font metrics not found for font: `+t+`.`);var r=e.charCodeAt(0),i=Du[t][r];if(!i&&e[0]in ku&&(r=ku[e[0]].charCodeAt(0),i=Du[t][r]),!i&&n===`text`&&pu(r)&&(i=Du[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var Mu={};function Nu(e){var t=e>=5?0:e>=3?1:2;if(!Mu[t]){var n=Mu[t]={cssEmPerMu:Ou.quad[t]/18};for(var r in Ou)Ou.hasOwnProperty(r)&&(n[r]=Ou[r][t])}return Mu[t]}var Pu=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Fu=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Iu=function(e,t){return t.size<2?e:Pu[e-1][t.size-1]},Lu=class e{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||e.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||``,this.fontFamily=t.fontFamily||``,this.fontWeight=t.fontWeight||``,this.fontShape=t.fontShape||``,this.sizeMultiplier=Fu[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return new e(n)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Iu(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Fu[e-1]})}havingBaseStyle(t){t||=this.style.text();var n=Iu(e.BASESIZE,t);return this.size===n&&this.textSize===e.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:``})}withTextFontWeight(e){return this.extend({fontWeight:e,font:``})}withTextFontShape(e){return this.extend({fontShape:e,font:``})}sizingClasses(e){return e.size===this.size?[]:[`sizing`,`reset-size`+e.size,`size`+this.size]}baseSizingClasses(){return this.size===e.BASESIZE?[]:[`sizing`,`reset-size`+this.size,`size`+e.BASESIZE]}fontMetrics(){return this._fontMetrics||=Nu(this.size),this._fontMetrics}getColor(){return this.phantom?`transparent`:this.color}};Lu.BASESIZE=6;var Ru={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},zu={ex:!0,em:!0,mu:!0},Bu=function(e){return typeof e!=`string`&&(e=e.unit),e in Ru||e in zu||e===`ex`},Vu=function(e,t){var n;if(e.unit in Ru)n=Ru[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit===`mu`)n=t.fontMetrics().cssEmPerMu;else{var r=t.style.isTight()?t.havingStyle(t.style.text()):t;if(e.unit===`ex`)n=r.fontMetrics().xHeight;else if(e.unit===`em`)n=r.fontMetrics().quad;else throw new F(`Invalid unit: '`+e.unit+`'`);r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},R=function(e){return+e.toFixed(4)+`em`},Hu=function(e){return e.filter(e=>e).join(` `)},Uu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push(`mtight`);var r=t.getColor();r&&(this.style.color=r)}},Wu=function(e){var t=document.createElement(e);for(var n in t.className=Hu(this.classes),this.style)this.style.hasOwnProperty(n)&&(t.style[n]=this.style[n]);for(var r in this.attributes)this.attributes.hasOwnProperty(r)&&t.setAttribute(r,this.attributes[r]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t},Gu=/[\s"'>/=\x00-\x1f]/,Ku=function(e){var t=`<`+e;this.classes.length&&(t+=` class="`+I.escape(Hu(this.classes))+`"`);var n=``;for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=I.hyphenate(r)+`:`+this.style[r]+`;`);for(var i in n&&(t+=` style="`+I.escape(n)+`"`),this.attributes)if(this.attributes.hasOwnProperty(i)){if(Gu.test(i))throw new F(`Invalid attribute name '`+i+`'`);t+=` `+i+`="`+I.escape(this.attributes[i])+`"`}t+=`>`;for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+=`</`+e+`>`,t},qu=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Uu.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return I.contains(this.classes,e)}toNode(){return Wu.call(this,`span`)}toMarkup(){return Ku.call(this,`span`)}},Ju=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Uu.call(this,t,r),this.children=n||[],this.setAttribute(`href`,e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return I.contains(this.classes,e)}toNode(){return Wu.call(this,`a`)}toMarkup(){return Ku.call(this,`a`)}},Yu=class{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=[`mord`],this.style=n}hasClass(e){return I.contains(this.classes,e)}toNode(){var e=document.createElement(`img`);for(var t in e.src=this.src,e.alt=this.alt,e.className=`mord`,this.style)this.style.hasOwnProperty(t)&&(e.style[t]=this.style[t]);return e}toMarkup(){var e=`<img src="`+I.escape(this.src)+`"`+(` alt="`+I.escape(this.alt)+`"`),t=``;for(var n in this.style)this.style.hasOwnProperty(n)&&(t+=I.hyphenate(n)+`:`+this.style[n]+`;`);return t&&(e+=` style="`+I.escape(t)+`"`),e+=`'/>`,e}},Xu={î:`ı̂`,ï:`ı̈`,í:`ı́`,ì:`ı̀`},Zu=class{constructor(e,t,n,r,i,a,o,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=i||0,this.width=a||0,this.classes=o||[],this.style=s||{},this.maxFontSize=0;var c=du(this.text.charCodeAt(0));c&&this.classes.push(c+`_fallback`),/[îïíì]/.test(this.text)&&(this.text=Xu[this.text])}hasClass(e){return I.contains(this.classes,e)}toNode(){var e=document.createTextNode(this.text),t=null;for(var n in this.italic>0&&(t=document.createElement(`span`),t.style.marginRight=R(this.italic)),this.classes.length>0&&(t||=document.createElement(`span`),t.className=Hu(this.classes)),this.style)this.style.hasOwnProperty(n)&&(t||=document.createElement(`span`),t.style[n]=this.style[n]);return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t=`<span`;this.classes.length&&(e=!0,t+=` class="`,t+=I.escape(Hu(this.classes)),t+=`"`);var n=``;for(var r in this.italic>0&&(n+=`margin-right:`+this.italic+`em;`),this.style)this.style.hasOwnProperty(r)&&(n+=I.hyphenate(r)+`:`+this.style[r]+`;`);n&&(e=!0,t+=` style="`+I.escape(n)+`"`);var i=I.escape(this.text);return e?(t+=`>`,t+=i,t+=`</span>`,t):i}},Qu=class{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<svg xmlns="http://www.w3.org/2000/svg"`;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=` `+t+`="`+I.escape(this.attributes[t])+`"`);e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</svg>`,e}},$u=class{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return this.alternate?e.setAttribute(`d`,this.alternate):e.setAttribute(`d`,wu[this.pathName]),e}toMarkup(){return this.alternate?`<path d="`+I.escape(this.alternate)+`"/>`:`<path d="`+I.escape(wu[this.pathName])+`"/>`}},ed=class{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);return e}toMarkup(){var e=`<line`;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=` `+t+`="`+I.escape(this.attributes[t])+`"`);return e+=`/>`,e}};function td(e){if(e instanceof Zu)return e;throw Error(`Expected symbolNode but got `+String(e)+`.`)}function nd(e){if(e instanceof qu)return e;throw Error(`Expected span<HtmlDomNode> but got `+String(e)+`.`)}var rd={bin:1,close:1,inner:1,open:1,punct:1,rel:1},id={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},ad={math:{},text:{}};function z(e,t,n,r,i,a){ad[e][i]={font:t,group:n,replace:r},a&&r&&(ad[e][r]=ad[e][i])}var B=`math`,V=`text`,H=`main`,U=`ams`,od=`accent-token`,W=`bin`,sd=`close`,cd=`inner`,G=`mathord`,ld=`op-token`,ud=`open`,dd=`punct`,K=`rel`,fd=`spacing`,q=`textord`;z(B,H,K,`≡`,`\\equiv`,!0),z(B,H,K,`≺`,`\\prec`,!0),z(B,H,K,`≻`,`\\succ`,!0),z(B,H,K,`∼`,`\\sim`,!0),z(B,H,K,`⊥`,`\\perp`),z(B,H,K,`⪯`,`\\preceq`,!0),z(B,H,K,`⪰`,`\\succeq`,!0),z(B,H,K,`≃`,`\\simeq`,!0),z(B,H,K,`∣`,`\\mid`,!0),z(B,H,K,`≪`,`\\ll`,!0),z(B,H,K,`≫`,`\\gg`,!0),z(B,H,K,`≍`,`\\asymp`,!0),z(B,H,K,`∥`,`\\parallel`),z(B,H,K,`⋈`,`\\bowtie`,!0),z(B,H,K,`⌣`,`\\smile`,!0),z(B,H,K,`⊑`,`\\sqsubseteq`,!0),z(B,H,K,`⊒`,`\\sqsupseteq`,!0),z(B,H,K,`≐`,`\\doteq`,!0),z(B,H,K,`⌢`,`\\frown`,!0),z(B,H,K,`∋`,`\\ni`,!0),z(B,H,K,`∝`,`\\propto`,!0),z(B,H,K,`⊢`,`\\vdash`,!0),z(B,H,K,`⊣`,`\\dashv`,!0),z(B,H,K,`∋`,`\\owns`),z(B,H,dd,`.`,`\\ldotp`),z(B,H,dd,`⋅`,`\\cdotp`),z(B,H,q,`#`,`\\#`),z(V,H,q,`#`,`\\#`),z(B,H,q,`&`,`\\&`),z(V,H,q,`&`,`\\&`),z(B,H,q,`ℵ`,`\\aleph`,!0),z(B,H,q,`∀`,`\\forall`,!0),z(B,H,q,`ℏ`,`\\hbar`,!0),z(B,H,q,`∃`,`\\exists`,!0),z(B,H,q,`∇`,`\\nabla`,!0),z(B,H,q,`♭`,`\\flat`,!0),z(B,H,q,`ℓ`,`\\ell`,!0),z(B,H,q,`♮`,`\\natural`,!0),z(B,H,q,`♣`,`\\clubsuit`,!0),z(B,H,q,`℘`,`\\wp`,!0),z(B,H,q,`♯`,`\\sharp`,!0),z(B,H,q,`♢`,`\\diamondsuit`,!0),z(B,H,q,`ℜ`,`\\Re`,!0),z(B,H,q,`♡`,`\\heartsuit`,!0),z(B,H,q,`ℑ`,`\\Im`,!0),z(B,H,q,`♠`,`\\spadesuit`,!0),z(B,H,q,`§`,`\\S`,!0),z(V,H,q,`§`,`\\S`),z(B,H,q,`¶`,`\\P`,!0),z(V,H,q,`¶`,`\\P`),z(B,H,q,`†`,`\\dag`),z(V,H,q,`†`,`\\dag`),z(V,H,q,`†`,`\\textdagger`),z(B,H,q,`‡`,`\\ddag`),z(V,H,q,`‡`,`\\ddag`),z(V,H,q,`‡`,`\\textdaggerdbl`),z(B,H,sd,`⎱`,`\\rmoustache`,!0),z(B,H,ud,`⎰`,`\\lmoustache`,!0),z(B,H,sd,`⟯`,`\\rgroup`,!0),z(B,H,ud,`⟮`,`\\lgroup`,!0),z(B,H,W,`∓`,`\\mp`,!0),z(B,H,W,`⊖`,`\\ominus`,!0),z(B,H,W,`⊎`,`\\uplus`,!0),z(B,H,W,`⊓`,`\\sqcap`,!0),z(B,H,W,`∗`,`\\ast`),z(B,H,W,`⊔`,`\\sqcup`,!0),z(B,H,W,`◯`,`\\bigcirc`,!0),z(B,H,W,`∙`,`\\bullet`,!0),z(B,H,W,`‡`,`\\ddagger`),z(B,H,W,`≀`,`\\wr`,!0),z(B,H,W,`⨿`,`\\amalg`),z(B,H,W,`&`,`\\And`),z(B,H,K,`⟵`,`\\longleftarrow`,!0),z(B,H,K,`⇐`,`\\Leftarrow`,!0),z(B,H,K,`⟸`,`\\Longleftarrow`,!0),z(B,H,K,`⟶`,`\\longrightarrow`,!0),z(B,H,K,`⇒`,`\\Rightarrow`,!0),z(B,H,K,`⟹`,`\\Longrightarrow`,!0),z(B,H,K,`↔`,`\\leftrightarrow`,!0),z(B,H,K,`⟷`,`\\longleftrightarrow`,!0),z(B,H,K,`⇔`,`\\Leftrightarrow`,!0),z(B,H,K,`⟺`,`\\Longleftrightarrow`,!0),z(B,H,K,`↦`,`\\mapsto`,!0),z(B,H,K,`⟼`,`\\longmapsto`,!0),z(B,H,K,`↗`,`\\nearrow`,!0),z(B,H,K,`↩`,`\\hookleftarrow`,!0),z(B,H,K,`↪`,`\\hookrightarrow`,!0),z(B,H,K,`↘`,`\\searrow`,!0),z(B,H,K,`↼`,`\\leftharpoonup`,!0),z(B,H,K,`⇀`,`\\rightharpoonup`,!0),z(B,H,K,`↙`,`\\swarrow`,!0),z(B,H,K,`↽`,`\\leftharpoondown`,!0),z(B,H,K,`⇁`,`\\rightharpoondown`,!0),z(B,H,K,`↖`,`\\nwarrow`,!0),z(B,H,K,`⇌`,`\\rightleftharpoons`,!0),z(B,U,K,`≮`,`\\nless`,!0),z(B,U,K,``,`\\@nleqslant`),z(B,U,K,``,`\\@nleqq`),z(B,U,K,`⪇`,`\\lneq`,!0),z(B,U,K,`≨`,`\\lneqq`,!0),z(B,U,K,``,`\\@lvertneqq`),z(B,U,K,`⋦`,`\\lnsim`,!0),z(B,U,K,`⪉`,`\\lnapprox`,!0),z(B,U,K,`⊀`,`\\nprec`,!0),z(B,U,K,`⋠`,`\\npreceq`,!0),z(B,U,K,`⋨`,`\\precnsim`,!0),z(B,U,K,`⪹`,`\\precnapprox`,!0),z(B,U,K,`≁`,`\\nsim`,!0),z(B,U,K,``,`\\@nshortmid`),z(B,U,K,`∤`,`\\nmid`,!0),z(B,U,K,`⊬`,`\\nvdash`,!0),z(B,U,K,`⊭`,`\\nvDash`,!0),z(B,U,K,`⋪`,`\\ntriangleleft`),z(B,U,K,`⋬`,`\\ntrianglelefteq`,!0),z(B,U,K,`⊊`,`\\subsetneq`,!0),z(B,U,K,``,`\\@varsubsetneq`),z(B,U,K,`⫋`,`\\subsetneqq`,!0),z(B,U,K,``,`\\@varsubsetneqq`),z(B,U,K,`≯`,`\\ngtr`,!0),z(B,U,K,``,`\\@ngeqslant`),z(B,U,K,``,`\\@ngeqq`),z(B,U,K,`⪈`,`\\gneq`,!0),z(B,U,K,`≩`,`\\gneqq`,!0),z(B,U,K,``,`\\@gvertneqq`),z(B,U,K,`⋧`,`\\gnsim`,!0),z(B,U,K,`⪊`,`\\gnapprox`,!0),z(B,U,K,`⊁`,`\\nsucc`,!0),z(B,U,K,`⋡`,`\\nsucceq`,!0),z(B,U,K,`⋩`,`\\succnsim`,!0),z(B,U,K,`⪺`,`\\succnapprox`,!0),z(B,U,K,`≆`,`\\ncong`,!0),z(B,U,K,``,`\\@nshortparallel`),z(B,U,K,`∦`,`\\nparallel`,!0),z(B,U,K,`⊯`,`\\nVDash`,!0),z(B,U,K,`⋫`,`\\ntriangleright`),z(B,U,K,`⋭`,`\\ntrianglerighteq`,!0),z(B,U,K,``,`\\@nsupseteqq`),z(B,U,K,`⊋`,`\\supsetneq`,!0),z(B,U,K,``,`\\@varsupsetneq`),z(B,U,K,`⫌`,`\\supsetneqq`,!0),z(B,U,K,``,`\\@varsupsetneqq`),z(B,U,K,`⊮`,`\\nVdash`,!0),z(B,U,K,`⪵`,`\\precneqq`,!0),z(B,U,K,`⪶`,`\\succneqq`,!0),z(B,U,K,``,`\\@nsubseteqq`),z(B,U,W,`⊴`,`\\unlhd`),z(B,U,W,`⊵`,`\\unrhd`),z(B,U,K,`↚`,`\\nleftarrow`,!0),z(B,U,K,`↛`,`\\nrightarrow`,!0),z(B,U,K,`⇍`,`\\nLeftarrow`,!0),z(B,U,K,`⇏`,`\\nRightarrow`,!0),z(B,U,K,`↮`,`\\nleftrightarrow`,!0),z(B,U,K,`⇎`,`\\nLeftrightarrow`,!0),z(B,U,K,`△`,`\\vartriangle`),z(B,U,q,`ℏ`,`\\hslash`),z(B,U,q,`▽`,`\\triangledown`),z(B,U,q,`◊`,`\\lozenge`),z(B,U,q,`Ⓢ`,`\\circledS`),z(B,U,q,`®`,`\\circledR`),z(V,U,q,`®`,`\\circledR`),z(B,U,q,`∡`,`\\measuredangle`,!0),z(B,U,q,`∄`,`\\nexists`),z(B,U,q,`℧`,`\\mho`),z(B,U,q,`Ⅎ`,`\\Finv`,!0),z(B,U,q,`⅁`,`\\Game`,!0),z(B,U,q,`‵`,`\\backprime`),z(B,U,q,`▲`,`\\blacktriangle`),z(B,U,q,`▼`,`\\blacktriangledown`),z(B,U,q,`■`,`\\blacksquare`),z(B,U,q,`⧫`,`\\blacklozenge`),z(B,U,q,`★`,`\\bigstar`),z(B,U,q,`∢`,`\\sphericalangle`,!0),z(B,U,q,`∁`,`\\complement`,!0),z(B,U,q,`ð`,`\\eth`,!0),z(V,H,q,`ð`,`ð`),z(B,U,q,`╱`,`\\diagup`),z(B,U,q,`╲`,`\\diagdown`),z(B,U,q,`□`,`\\square`),z(B,U,q,`□`,`\\Box`),z(B,U,q,`◊`,`\\Diamond`),z(B,U,q,`¥`,`\\yen`,!0),z(V,U,q,`¥`,`\\yen`,!0),z(B,U,q,`✓`,`\\checkmark`,!0),z(V,U,q,`✓`,`\\checkmark`),z(B,U,q,`ℶ`,`\\beth`,!0),z(B,U,q,`ℸ`,`\\daleth`,!0),z(B,U,q,`ℷ`,`\\gimel`,!0),z(B,U,q,`ϝ`,`\\digamma`,!0),z(B,U,q,`ϰ`,`\\varkappa`),z(B,U,ud,`┌`,`\\@ulcorner`,!0),z(B,U,sd,`┐`,`\\@urcorner`,!0),z(B,U,ud,`└`,`\\@llcorner`,!0),z(B,U,sd,`┘`,`\\@lrcorner`,!0),z(B,U,K,`≦`,`\\leqq`,!0),z(B,U,K,`⩽`,`\\leqslant`,!0),z(B,U,K,`⪕`,`\\eqslantless`,!0),z(B,U,K,`≲`,`\\lesssim`,!0),z(B,U,K,`⪅`,`\\lessapprox`,!0),z(B,U,K,`≊`,`\\approxeq`,!0),z(B,U,W,`⋖`,`\\lessdot`),z(B,U,K,`⋘`,`\\lll`,!0),z(B,U,K,`≶`,`\\lessgtr`,!0),z(B,U,K,`⋚`,`\\lesseqgtr`,!0),z(B,U,K,`⪋`,`\\lesseqqgtr`,!0),z(B,U,K,`≑`,`\\doteqdot`),z(B,U,K,`≓`,`\\risingdotseq`,!0),z(B,U,K,`≒`,`\\fallingdotseq`,!0),z(B,U,K,`∽`,`\\backsim`,!0),z(B,U,K,`⋍`,`\\backsimeq`,!0),z(B,U,K,`⫅`,`\\subseteqq`,!0),z(B,U,K,`⋐`,`\\Subset`,!0),z(B,U,K,`⊏`,`\\sqsubset`,!0),z(B,U,K,`≼`,`\\preccurlyeq`,!0),z(B,U,K,`⋞`,`\\curlyeqprec`,!0),z(B,U,K,`≾`,`\\precsim`,!0),z(B,U,K,`⪷`,`\\precapprox`,!0),z(B,U,K,`⊲`,`\\vartriangleleft`),z(B,U,K,`⊴`,`\\trianglelefteq`),z(B,U,K,`⊨`,`\\vDash`,!0),z(B,U,K,`⊪`,`\\Vvdash`,!0),z(B,U,K,`⌣`,`\\smallsmile`),z(B,U,K,`⌢`,`\\smallfrown`),z(B,U,K,`≏`,`\\bumpeq`,!0),z(B,U,K,`≎`,`\\Bumpeq`,!0),z(B,U,K,`≧`,`\\geqq`,!0),z(B,U,K,`⩾`,`\\geqslant`,!0),z(B,U,K,`⪖`,`\\eqslantgtr`,!0),z(B,U,K,`≳`,`\\gtrsim`,!0),z(B,U,K,`⪆`,`\\gtrapprox`,!0),z(B,U,W,`⋗`,`\\gtrdot`),z(B,U,K,`⋙`,`\\ggg`,!0),z(B,U,K,`≷`,`\\gtrless`,!0),z(B,U,K,`⋛`,`\\gtreqless`,!0),z(B,U,K,`⪌`,`\\gtreqqless`,!0),z(B,U,K,`≖`,`\\eqcirc`,!0),z(B,U,K,`≗`,`\\circeq`,!0),z(B,U,K,`≜`,`\\triangleq`,!0),z(B,U,K,`∼`,`\\thicksim`),z(B,U,K,`≈`,`\\thickapprox`),z(B,U,K,`⫆`,`\\supseteqq`,!0),z(B,U,K,`⋑`,`\\Supset`,!0),z(B,U,K,`⊐`,`\\sqsupset`,!0),z(B,U,K,`≽`,`\\succcurlyeq`,!0),z(B,U,K,`⋟`,`\\curlyeqsucc`,!0),z(B,U,K,`≿`,`\\succsim`,!0),z(B,U,K,`⪸`,`\\succapprox`,!0),z(B,U,K,`⊳`,`\\vartriangleright`),z(B,U,K,`⊵`,`\\trianglerighteq`),z(B,U,K,`⊩`,`\\Vdash`,!0),z(B,U,K,`∣`,`\\shortmid`),z(B,U,K,`∥`,`\\shortparallel`),z(B,U,K,`≬`,`\\between`,!0),z(B,U,K,`⋔`,`\\pitchfork`,!0),z(B,U,K,`∝`,`\\varpropto`),z(B,U,K,`◀`,`\\blacktriangleleft`),z(B,U,K,`∴`,`\\therefore`,!0),z(B,U,K,`∍`,`\\backepsilon`),z(B,U,K,`▶`,`\\blacktriangleright`),z(B,U,K,`∵`,`\\because`,!0),z(B,U,K,`⋘`,`\\llless`),z(B,U,K,`⋙`,`\\gggtr`),z(B,U,W,`⊲`,`\\lhd`),z(B,U,W,`⊳`,`\\rhd`),z(B,U,K,`≂`,`\\eqsim`,!0),z(B,H,K,`⋈`,`\\Join`),z(B,U,K,`≑`,`\\Doteq`,!0),z(B,U,W,`∔`,`\\dotplus`,!0),z(B,U,W,`∖`,`\\smallsetminus`),z(B,U,W,`⋒`,`\\Cap`,!0),z(B,U,W,`⋓`,`\\Cup`,!0),z(B,U,W,`⩞`,`\\doublebarwedge`,!0),z(B,U,W,`⊟`,`\\boxminus`,!0),z(B,U,W,`⊞`,`\\boxplus`,!0),z(B,U,W,`⋇`,`\\divideontimes`,!0),z(B,U,W,`⋉`,`\\ltimes`,!0),z(B,U,W,`⋊`,`\\rtimes`,!0),z(B,U,W,`⋋`,`\\leftthreetimes`,!0),z(B,U,W,`⋌`,`\\rightthreetimes`,!0),z(B,U,W,`⋏`,`\\curlywedge`,!0),z(B,U,W,`⋎`,`\\curlyvee`,!0),z(B,U,W,`⊝`,`\\circleddash`,!0),z(B,U,W,`⊛`,`\\circledast`,!0),z(B,U,W,`⋅`,`\\centerdot`),z(B,U,W,`⊺`,`\\intercal`,!0),z(B,U,W,`⋒`,`\\doublecap`),z(B,U,W,`⋓`,`\\doublecup`),z(B,U,W,`⊠`,`\\boxtimes`,!0),z(B,U,K,`⇢`,`\\dashrightarrow`,!0),z(B,U,K,`⇠`,`\\dashleftarrow`,!0),z(B,U,K,`⇇`,`\\leftleftarrows`,!0),z(B,U,K,`⇆`,`\\leftrightarrows`,!0),z(B,U,K,`⇚`,`\\Lleftarrow`,!0),z(B,U,K,`↞`,`\\twoheadleftarrow`,!0),z(B,U,K,`↢`,`\\leftarrowtail`,!0),z(B,U,K,`↫`,`\\looparrowleft`,!0),z(B,U,K,`⇋`,`\\leftrightharpoons`,!0),z(B,U,K,`↶`,`\\curvearrowleft`,!0),z(B,U,K,`↺`,`\\circlearrowleft`,!0),z(B,U,K,`↰`,`\\Lsh`,!0),z(B,U,K,`⇈`,`\\upuparrows`,!0),z(B,U,K,`↿`,`\\upharpoonleft`,!0),z(B,U,K,`⇃`,`\\downharpoonleft`,!0),z(B,H,K,`⊶`,`\\origof`,!0),z(B,H,K,`⊷`,`\\imageof`,!0),z(B,U,K,`⊸`,`\\multimap`,!0),z(B,U,K,`↭`,`\\leftrightsquigarrow`,!0),z(B,U,K,`⇉`,`\\rightrightarrows`,!0),z(B,U,K,`⇄`,`\\rightleftarrows`,!0),z(B,U,K,`↠`,`\\twoheadrightarrow`,!0),z(B,U,K,`↣`,`\\rightarrowtail`,!0),z(B,U,K,`↬`,`\\looparrowright`,!0),z(B,U,K,`↷`,`\\curvearrowright`,!0),z(B,U,K,`↻`,`\\circlearrowright`,!0),z(B,U,K,`↱`,`\\Rsh`,!0),z(B,U,K,`⇊`,`\\downdownarrows`,!0),z(B,U,K,`↾`,`\\upharpoonright`,!0),z(B,U,K,`⇂`,`\\downharpoonright`,!0),z(B,U,K,`⇝`,`\\rightsquigarrow`,!0),z(B,U,K,`⇝`,`\\leadsto`),z(B,U,K,`⇛`,`\\Rrightarrow`,!0),z(B,U,K,`↾`,`\\restriction`),z(B,H,q,`‘`,"`"),z(B,H,q,`$`,`\\$`),z(V,H,q,`$`,`\\$`),z(V,H,q,`$`,`\\textdollar`),z(B,H,q,`%`,`\\%`),z(V,H,q,`%`,`\\%`),z(B,H,q,`_`,`\\_`),z(V,H,q,`_`,`\\_`),z(V,H,q,`_`,`\\textunderscore`),z(B,H,q,`∠`,`\\angle`,!0),z(B,H,q,`∞`,`\\infty`,!0),z(B,H,q,`′`,`\\prime`),z(B,H,q,`△`,`\\triangle`),z(B,H,q,`Γ`,`\\Gamma`,!0),z(B,H,q,`Δ`,`\\Delta`,!0),z(B,H,q,`Θ`,`\\Theta`,!0),z(B,H,q,`Λ`,`\\Lambda`,!0),z(B,H,q,`Ξ`,`\\Xi`,!0),z(B,H,q,`Π`,`\\Pi`,!0),z(B,H,q,`Σ`,`\\Sigma`,!0),z(B,H,q,`Υ`,`\\Upsilon`,!0),z(B,H,q,`Φ`,`\\Phi`,!0),z(B,H,q,`Ψ`,`\\Psi`,!0),z(B,H,q,`Ω`,`\\Omega`,!0),z(B,H,q,`A`,`Α`),z(B,H,q,`B`,`Β`),z(B,H,q,`E`,`Ε`),z(B,H,q,`Z`,`Ζ`),z(B,H,q,`H`,`Η`),z(B,H,q,`I`,`Ι`),z(B,H,q,`K`,`Κ`),z(B,H,q,`M`,`Μ`),z(B,H,q,`N`,`Ν`),z(B,H,q,`O`,`Ο`),z(B,H,q,`P`,`Ρ`),z(B,H,q,`T`,`Τ`),z(B,H,q,`X`,`Χ`),z(B,H,q,`¬`,`\\neg`,!0),z(B,H,q,`¬`,`\\lnot`),z(B,H,q,`⊤`,`\\top`),z(B,H,q,`⊥`,`\\bot`),z(B,H,q,`∅`,`\\emptyset`),z(B,U,q,`∅`,`\\varnothing`),z(B,H,G,`α`,`\\alpha`,!0),z(B,H,G,`β`,`\\beta`,!0),z(B,H,G,`γ`,`\\gamma`,!0),z(B,H,G,`δ`,`\\delta`,!0),z(B,H,G,`ϵ`,`\\epsilon`,!0),z(B,H,G,`ζ`,`\\zeta`,!0),z(B,H,G,`η`,`\\eta`,!0),z(B,H,G,`θ`,`\\theta`,!0),z(B,H,G,`ι`,`\\iota`,!0),z(B,H,G,`κ`,`\\kappa`,!0),z(B,H,G,`λ`,`\\lambda`,!0),z(B,H,G,`μ`,`\\mu`,!0),z(B,H,G,`ν`,`\\nu`,!0),z(B,H,G,`ξ`,`\\xi`,!0),z(B,H,G,`ο`,`\\omicron`,!0),z(B,H,G,`π`,`\\pi`,!0),z(B,H,G,`ρ`,`\\rho`,!0),z(B,H,G,`σ`,`\\sigma`,!0),z(B,H,G,`τ`,`\\tau`,!0),z(B,H,G,`υ`,`\\upsilon`,!0),z(B,H,G,`ϕ`,`\\phi`,!0),z(B,H,G,`χ`,`\\chi`,!0),z(B,H,G,`ψ`,`\\psi`,!0),z(B,H,G,`ω`,`\\omega`,!0),z(B,H,G,`ε`,`\\varepsilon`,!0),z(B,H,G,`ϑ`,`\\vartheta`,!0),z(B,H,G,`ϖ`,`\\varpi`,!0),z(B,H,G,`ϱ`,`\\varrho`,!0),z(B,H,G,`ς`,`\\varsigma`,!0),z(B,H,G,`φ`,`\\varphi`,!0),z(B,H,W,`∗`,`*`,!0),z(B,H,W,`+`,`+`),z(B,H,W,`−`,`-`,!0),z(B,H,W,`⋅`,`\\cdot`,!0),z(B,H,W,`∘`,`\\circ`,!0),z(B,H,W,`÷`,`\\div`,!0),z(B,H,W,`±`,`\\pm`,!0),z(B,H,W,`×`,`\\times`,!0),z(B,H,W,`∩`,`\\cap`,!0),z(B,H,W,`∪`,`\\cup`,!0),z(B,H,W,`∖`,`\\setminus`,!0),z(B,H,W,`∧`,`\\land`),z(B,H,W,`∨`,`\\lor`),z(B,H,W,`∧`,`\\wedge`,!0),z(B,H,W,`∨`,`\\vee`,!0),z(B,H,q,`√`,`\\surd`),z(B,H,ud,`⟨`,`\\langle`,!0),z(B,H,ud,`∣`,`\\lvert`),z(B,H,ud,`∥`,`\\lVert`),z(B,H,sd,`?`,`?`),z(B,H,sd,`!`,`!`),z(B,H,sd,`⟩`,`\\rangle`,!0),z(B,H,sd,`∣`,`\\rvert`),z(B,H,sd,`∥`,`\\rVert`),z(B,H,K,`=`,`=`),z(B,H,K,`:`,`:`),z(B,H,K,`≈`,`\\approx`,!0),z(B,H,K,`≅`,`\\cong`,!0),z(B,H,K,`≥`,`\\ge`),z(B,H,K,`≥`,`\\geq`,!0),z(B,H,K,`←`,`\\gets`),z(B,H,K,`>`,`\\gt`,!0),z(B,H,K,`∈`,`\\in`,!0),z(B,H,K,``,`\\@not`),z(B,H,K,`⊂`,`\\subset`,!0),z(B,H,K,`⊃`,`\\supset`,!0),z(B,H,K,`⊆`,`\\subseteq`,!0),z(B,H,K,`⊇`,`\\supseteq`,!0),z(B,U,K,`⊈`,`\\nsubseteq`,!0),z(B,U,K,`⊉`,`\\nsupseteq`,!0),z(B,H,K,`⊨`,`\\models`),z(B,H,K,`←`,`\\leftarrow`,!0),z(B,H,K,`≤`,`\\le`),z(B,H,K,`≤`,`\\leq`,!0),z(B,H,K,`<`,`\\lt`,!0),z(B,H,K,`→`,`\\rightarrow`,!0),z(B,H,K,`→`,`\\to`),z(B,U,K,`≱`,`\\ngeq`,!0),z(B,U,K,`≰`,`\\nleq`,!0),z(B,H,fd,`\xA0`,`\\ `),z(B,H,fd,`\xA0`,`\\space`),z(B,H,fd,`\xA0`,`\\nobreakspace`),z(V,H,fd,`\xA0`,`\\ `),z(V,H,fd,`\xA0`,` `),z(V,H,fd,`\xA0`,`\\space`),z(V,H,fd,`\xA0`,`\\nobreakspace`),z(B,H,fd,null,`\\nobreak`),z(B,H,fd,null,`\\allowbreak`),z(B,H,dd,`,`,`,`),z(B,H,dd,`;`,`;`),z(B,U,W,`⊼`,`\\barwedge`,!0),z(B,U,W,`⊻`,`\\veebar`,!0),z(B,H,W,`⊙`,`\\odot`,!0),z(B,H,W,`⊕`,`\\oplus`,!0),z(B,H,W,`⊗`,`\\otimes`,!0),z(B,H,q,`∂`,`\\partial`,!0),z(B,H,W,`⊘`,`\\oslash`,!0),z(B,U,W,`⊚`,`\\circledcirc`,!0),z(B,U,W,`⊡`,`\\boxdot`,!0),z(B,H,W,`△`,`\\bigtriangleup`),z(B,H,W,`▽`,`\\bigtriangledown`),z(B,H,W,`†`,`\\dagger`),z(B,H,W,`⋄`,`\\diamond`),z(B,H,W,`⋆`,`\\star`),z(B,H,W,`◃`,`\\triangleleft`),z(B,H,W,`▹`,`\\triangleright`),z(B,H,ud,`{`,`\\{`),z(V,H,q,`{`,`\\{`),z(V,H,q,`{`,`\\textbraceleft`),z(B,H,sd,`}`,`\\}`),z(V,H,q,`}`,`\\}`),z(V,H,q,`}`,`\\textbraceright`),z(B,H,ud,`{`,`\\lbrace`),z(B,H,sd,`}`,`\\rbrace`),z(B,H,ud,`[`,`\\lbrack`,!0),z(V,H,q,`[`,`\\lbrack`,!0),z(B,H,sd,`]`,`\\rbrack`,!0),z(V,H,q,`]`,`\\rbrack`,!0),z(B,H,ud,`(`,`\\lparen`,!0),z(B,H,sd,`)`,`\\rparen`,!0),z(V,H,q,`<`,`\\textless`,!0),z(V,H,q,`>`,`\\textgreater`,!0),z(B,H,ud,`⌊`,`\\lfloor`,!0),z(B,H,sd,`⌋`,`\\rfloor`,!0),z(B,H,ud,`⌈`,`\\lceil`,!0),z(B,H,sd,`⌉`,`\\rceil`,!0),z(B,H,q,`\\`,`\\backslash`),z(B,H,q,`∣`,`|`),z(B,H,q,`∣`,`\\vert`),z(V,H,q,`|`,`\\textbar`,!0),z(B,H,q,`∥`,`\\|`),z(B,H,q,`∥`,`\\Vert`),z(V,H,q,`∥`,`\\textbardbl`),z(V,H,q,`~`,`\\textasciitilde`),z(V,H,q,`\\`,`\\textbackslash`),z(V,H,q,`^`,`\\textasciicircum`),z(B,H,K,`↑`,`\\uparrow`,!0),z(B,H,K,`⇑`,`\\Uparrow`,!0),z(B,H,K,`↓`,`\\downarrow`,!0),z(B,H,K,`⇓`,`\\Downarrow`,!0),z(B,H,K,`↕`,`\\updownarrow`,!0),z(B,H,K,`⇕`,`\\Updownarrow`,!0),z(B,H,ld,`∐`,`\\coprod`),z(B,H,ld,`⋁`,`\\bigvee`),z(B,H,ld,`⋀`,`\\bigwedge`),z(B,H,ld,`⨄`,`\\biguplus`),z(B,H,ld,`⋂`,`\\bigcap`),z(B,H,ld,`⋃`,`\\bigcup`),z(B,H,ld,`∫`,`\\int`),z(B,H,ld,`∫`,`\\intop`),z(B,H,ld,`∬`,`\\iint`),z(B,H,ld,`∭`,`\\iiint`),z(B,H,ld,`∏`,`\\prod`),z(B,H,ld,`∑`,`\\sum`),z(B,H,ld,`⨂`,`\\bigotimes`),z(B,H,ld,`⨁`,`\\bigoplus`),z(B,H,ld,`⨀`,`\\bigodot`),z(B,H,ld,`∮`,`\\oint`),z(B,H,ld,`∯`,`\\oiint`),z(B,H,ld,`∰`,`\\oiiint`),z(B,H,ld,`⨆`,`\\bigsqcup`),z(B,H,ld,`∫`,`\\smallint`),z(V,H,cd,`…`,`\\textellipsis`),z(B,H,cd,`…`,`\\mathellipsis`),z(V,H,cd,`…`,`\\ldots`,!0),z(B,H,cd,`…`,`\\ldots`,!0),z(B,H,cd,`⋯`,`\\@cdots`,!0),z(B,H,cd,`⋱`,`\\ddots`,!0),z(B,H,q,`⋮`,`\\varvdots`),z(V,H,q,`⋮`,`\\varvdots`),z(B,H,od,`ˊ`,`\\acute`),z(B,H,od,`ˋ`,`\\grave`),z(B,H,od,`¨`,`\\ddot`),z(B,H,od,`~`,`\\tilde`),z(B,H,od,`ˉ`,`\\bar`),z(B,H,od,`˘`,`\\breve`),z(B,H,od,`ˇ`,`\\check`),z(B,H,od,`^`,`\\hat`),z(B,H,od,`⃗`,`\\vec`),z(B,H,od,`˙`,`\\dot`),z(B,H,od,`˚`,`\\mathring`),z(B,H,G,``,`\\@imath`),z(B,H,G,``,`\\@jmath`),z(B,H,q,`ı`,`ı`),z(B,H,q,`ȷ`,`ȷ`),z(V,H,q,`ı`,`\\i`,!0),z(V,H,q,`ȷ`,`\\j`,!0),z(V,H,q,`ß`,`\\ss`,!0),z(V,H,q,`æ`,`\\ae`,!0),z(V,H,q,`œ`,`\\oe`,!0),z(V,H,q,`ø`,`\\o`,!0),z(V,H,q,`Æ`,`\\AE`,!0),z(V,H,q,`Œ`,`\\OE`,!0),z(V,H,q,`Ø`,`\\O`,!0),z(V,H,od,`ˊ`,`\\'`),z(V,H,od,`ˋ`,"\\`"),z(V,H,od,`ˆ`,`\\^`),z(V,H,od,`˜`,`\\~`),z(V,H,od,`ˉ`,`\\=`),z(V,H,od,`˘`,`\\u`),z(V,H,od,`˙`,`\\.`),z(V,H,od,`¸`,`\\c`),z(V,H,od,`˚`,`\\r`),z(V,H,od,`ˇ`,`\\v`),z(V,H,od,`¨`,`\\"`),z(V,H,od,`˝`,`\\H`),z(V,H,od,`◯`,`\\textcircled`);var pd={"--":!0,"---":!0,"``":!0,"''":!0};z(V,H,q,`–`,`--`,!0),z(V,H,q,`–`,`\\textendash`),z(V,H,q,`—`,`---`,!0),z(V,H,q,`—`,`\\textemdash`),z(V,H,q,`‘`,"`",!0),z(V,H,q,`‘`,`\\textquoteleft`),z(V,H,q,`’`,`'`,!0),z(V,H,q,`’`,`\\textquoteright`),z(V,H,q,`“`,"``",!0),z(V,H,q,`“`,`\\textquotedblleft`),z(V,H,q,`”`,`''`,!0),z(V,H,q,`”`,`\\textquotedblright`),z(B,H,q,`°`,`\\degree`,!0),z(V,H,q,`°`,`\\degree`),z(V,H,q,`°`,`\\textdegree`,!0),z(B,H,q,`£`,`\\pounds`),z(B,H,q,`£`,`\\mathsterling`,!0),z(V,H,q,`£`,`\\pounds`),z(V,H,q,`£`,`\\textsterling`,!0),z(B,U,q,`✠`,`\\maltese`),z(V,U,q,`✠`,`\\maltese`);for(var md=`0123456789/@."`,hd=0;hd<md.length;hd++){var gd=md.charAt(hd);z(B,H,q,gd,gd)}for(var _d=`0123456789!@*()-=+";:?/.,`,vd=0;vd<_d.length;vd++){var yd=_d.charAt(vd);z(V,H,q,yd,yd)}for(var bd=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,xd=0;xd<bd.length;xd++){var Sd=bd.charAt(xd);z(B,H,G,Sd,Sd),z(V,H,q,Sd,Sd)}z(B,U,q,`C`,`ℂ`),z(V,U,q,`C`,`ℂ`),z(B,U,q,`H`,`ℍ`),z(V,U,q,`H`,`ℍ`),z(B,U,q,`N`,`ℕ`),z(V,U,q,`N`,`ℕ`),z(B,U,q,`P`,`ℙ`),z(V,U,q,`P`,`ℙ`),z(B,U,q,`Q`,`ℚ`),z(V,U,q,`Q`,`ℚ`),z(B,U,q,`R`,`ℝ`),z(V,U,q,`R`,`ℝ`),z(B,U,q,`Z`,`ℤ`),z(V,U,q,`Z`,`ℤ`),z(B,H,G,`h`,`ℎ`),z(V,H,G,`h`,`ℎ`);for(var Cd=``,wd=0;wd<bd.length;wd++){var Td=bd.charAt(wd);Cd=String.fromCharCode(55349,56320+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56372+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56424+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56580+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56684+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56736+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56788+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56840+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56944+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),wd<26&&(Cd=String.fromCharCode(55349,56632+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd),Cd=String.fromCharCode(55349,56476+wd),z(B,H,G,Td,Cd),z(V,H,q,Td,Cd))}Cd=String.fromCharCode(55349,56668),z(B,H,G,`k`,Cd),z(V,H,q,`k`,Cd);for(var Ed=0;Ed<10;Ed++){var Dd=Ed.toString();Cd=String.fromCharCode(55349,57294+Ed),z(B,H,G,Dd,Cd),z(V,H,q,Dd,Cd),Cd=String.fromCharCode(55349,57314+Ed),z(B,H,G,Dd,Cd),z(V,H,q,Dd,Cd),Cd=String.fromCharCode(55349,57324+Ed),z(B,H,G,Dd,Cd),z(V,H,q,Dd,Cd),Cd=String.fromCharCode(55349,57334+Ed),z(B,H,G,Dd,Cd),z(V,H,q,Dd,Cd)}for(var Od=`ÐÞþ`,kd=0;kd<Od.length;kd++){var Ad=Od.charAt(kd);z(B,H,G,Ad,Ad),z(V,H,q,Ad,Ad)}var jd=[[`mathbf`,`textbf`,`Main-Bold`],[`mathbf`,`textbf`,`Main-Bold`],[`mathnormal`,`textit`,`Math-Italic`],[`mathnormal`,`textit`,`Math-Italic`],[`boldsymbol`,`boldsymbol`,`Main-BoldItalic`],[`boldsymbol`,`boldsymbol`,`Main-BoldItalic`],[`mathscr`,`textscr`,`Script-Regular`],[``,``,``],[``,``,``],[``,``,``],[`mathfrak`,`textfrak`,`Fraktur-Regular`],[`mathfrak`,`textfrak`,`Fraktur-Regular`],[`mathbb`,`textbb`,`AMS-Regular`],[`mathbb`,`textbb`,`AMS-Regular`],[`mathboldfrak`,`textboldfrak`,`Fraktur-Regular`],[`mathboldfrak`,`textboldfrak`,`Fraktur-Regular`],[`mathsf`,`textsf`,`SansSerif-Regular`],[`mathsf`,`textsf`,`SansSerif-Regular`],[`mathboldsf`,`textboldsf`,`SansSerif-Bold`],[`mathboldsf`,`textboldsf`,`SansSerif-Bold`],[`mathitsf`,`textitsf`,`SansSerif-Italic`],[`mathitsf`,`textitsf`,`SansSerif-Italic`],[``,``,``],[``,``,``],[`mathtt`,`texttt`,`Typewriter-Regular`],[`mathtt`,`texttt`,`Typewriter-Regular`]],Md=[[`mathbf`,`textbf`,`Main-Bold`],[``,``,``],[`mathsf`,`textsf`,`SansSerif-Regular`],[`mathboldsf`,`textboldsf`,`SansSerif-Bold`],[`mathtt`,`texttt`,`Typewriter-Regular`]],Nd=function(e,t){var n=e.charCodeAt(0),r=e.charCodeAt(1),i=(n-55296)*1024+(r-56320)+65536,a=t===`math`?0:1;if(119808<=i&&i<120484){var o=Math.floor((i-119808)/26);return[jd[o][2],jd[o][a]]}else if(120782<=i&&i<=120831){var s=Math.floor((i-120782)/10);return[Md[s][2],Md[s][a]]}else if(i===120485||i===120486)return[jd[0][2],jd[0][a]];else if(120486<i&&i<120782)return[``,``];else throw new F(`Unsupported character: `+e)},Pd=function(e,t,n){return ad[n][e]&&ad[n][e].replace&&(e=ad[n][e].replace),{value:e,metrics:ju(e,t,n)}},Fd=function(e,t,n,r,i){var a=Pd(e,t,n),o=a.metrics;e=a.value;var s;if(o){var c=o.italic;(n===`text`||r&&r.font===`mathit`)&&(c=0),s=new Zu(e,o.height,o.depth,c,o.skew,o.width,i)}else typeof console<`u`&&console.warn(`No character metrics `+(`for '`+e+`' in style '`+t+`' and mode '`+n+`'`)),s=new Zu(e,0,0,0,0,0,i);if(r){s.maxFontSize=r.sizeMultiplier,r.style.isTight()&&s.classes.push(`mtight`);var l=r.getColor();l&&(s.style.color=l)}return s},Id=function(e,t,n,r){return r===void 0&&(r=[]),n.font===`boldsymbol`&&Pd(e,`Main-Bold`,t).metrics?Fd(e,`Main-Bold`,t,n,r.concat([`mathbf`])):e===`\\`||ad[t][e].font===`main`?Fd(e,`Main-Regular`,t,n,r):Fd(e,`AMS-Regular`,t,n,r.concat([`amsrm`]))},Ld=function(e,t,n,r,i){return i!==`textord`&&Pd(e,`Math-BoldItalic`,t).metrics?{fontName:`Math-BoldItalic`,fontClass:`boldsymbol`}:{fontName:`Main-Bold`,fontClass:`mathbf`}},Rd=function(e,t,n){var r=e.mode,i=e.text,a=[`mord`],o=r===`math`||r===`text`&&t.font,s=o?t.font:t.fontFamily,c=``,l=``;if(i.charCodeAt(0)===55349&&([c,l]=Nd(i,r)),c.length>0)return Fd(i,c,r,t,a.concat(l));if(s){var u,d;if(s===`boldsymbol`){var f=Ld(i,r,t,a,n);u=f.fontName,d=[f.fontClass]}else o?(u=Qd[s].fontName,d=[s]):(u=Zd(s,t.fontWeight,t.fontShape),d=[s,t.fontWeight,t.fontShape]);if(Pd(i,u,r).metrics)return Fd(i,u,r,t,a.concat(d));if(pd.hasOwnProperty(i)&&u.slice(0,10)===`Typewriter`){for(var p=[],m=0;m<i.length;m++)p.push(Fd(i[m],u,r,t,a.concat(d)));return Kd(p)}}if(n===`mathord`)return Fd(i,`Math-Italic`,r,t,a.concat([`mathnormal`]));if(n===`textord`){var h=ad[r][i]&&ad[r][i].font;if(h===`ams`)return Fd(i,Zd(`amsrm`,t.fontWeight,t.fontShape),r,t,a.concat(`amsrm`,t.fontWeight,t.fontShape));if(h===`main`||!h)return Fd(i,Zd(`textrm`,t.fontWeight,t.fontShape),r,t,a.concat(t.fontWeight,t.fontShape));var g=Zd(h,t.fontWeight,t.fontShape);return Fd(i,g,r,t,a.concat(g,t.fontWeight,t.fontShape))}else throw Error(`unexpected type: `+n+` in makeOrd`)},zd=(e,t)=>{if(Hu(e.classes)!==Hu(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;if(e.classes.length===1){var n=e.classes[0];if(n===`mbin`||n===`mord`)return!1}for(var r in e.style)if(e.style.hasOwnProperty(r)&&e.style[r]!==t.style[r])return!1;for(var i in t.style)if(t.style.hasOwnProperty(i)&&e.style[i]!==t.style[i])return!1;return!0},Bd=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof Zu&&r instanceof Zu&&zd(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},Vd=function(e){for(var t=0,n=0,r=0,i=0;i<e.children.length;i++){var a=e.children[i];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},Hd=function(e,t,n,r){var i=new qu(e,t,n,r);return Vd(i),i},Ud=(e,t,n,r)=>new qu(e,t,n,r),Wd=function(e,t,n){var r=Hd([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=R(r.height),r.maxFontSize=1,r},Gd=function(e,t,n,r){var i=new Ju(e,t,n,r);return Vd(i),i},Kd=function(e){var t=new Eu(e);return Vd(t),t},qd=function(e,t){return e instanceof Eu?Hd([],[e],t):e},Jd=function(e){if(e.positionType===`individualShift`){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,i=r,a=1;a<t.length;a++){var o=-t[a].shift-i-t[a].elem.depth,s=o-(t[a-1].elem.height+t[a-1].elem.depth);i+=o,n.push({type:`kern`,size:s}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType===`top`){for(var l=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];l-=d.type===`kern`?d.size:d.elem.height+d.elem.depth}c=l}else if(e.positionType===`bottom`)c=-e.positionData;else{var f=e.children[0];if(f.type!==`elem`)throw Error(`First child must have type "elem".`);if(e.positionType===`shift`)c=-f.elem.depth-e.positionData;else if(e.positionType===`firstBaseline`)c=-f.elem.depth;else throw Error(`Invalid positionType `+e.positionType+`.`)}return{children:e.children,depth:c}},Yd=function(e,t){for(var{children:n,depth:r}=Jd(e),i=0,a=0;a<n.length;a++){var o=n[a];if(o.type===`elem`){var s=o.elem;i=Math.max(i,s.maxFontSize,s.height)}}i+=2;var c=Hd([`pstrut`],[]);c.style.height=R(i);for(var l=[],u=r,d=r,f=r,p=0;p<n.length;p++){var m=n[p];if(m.type===`kern`)f+=m.size;else{var h=m.elem,g=m.wrapperClasses||[],_=m.wrapperStyle||{},v=Hd(g,[c,h],void 0,_);v.style.top=R(-i-f-h.depth),m.marginLeft&&(v.style.marginLeft=m.marginLeft),m.marginRight&&(v.style.marginRight=m.marginRight),l.push(v),f+=h.height+h.depth}u=Math.min(u,f),d=Math.max(d,f)}var y=Hd([`vlist`],l);y.style.height=R(d);var b;if(u<0){var x=Hd([`vlist`],[Hd([],[])]);x.style.height=R(-u),b=[Hd([`vlist-r`],[y,Hd([`vlist-s`],[new Zu(`​`)])]),Hd([`vlist-r`],[x])]}else b=[Hd([`vlist-r`],[y])];var S=Hd([`vlist-t`],b);return b.length===2&&S.classes.push(`vlist-t2`),S.height=d,S.depth=-u,S},Xd=(e,t)=>{var n=Hd([`mspace`],[],t),r=Vu(e,t);return n.style.marginRight=R(r),n},Zd=function(e,t,n){var r=``;switch(e){case`amsrm`:r=`AMS`;break;case`textrm`:r=`Main`;break;case`textsf`:r=`SansSerif`;break;case`texttt`:r=`Typewriter`;break;default:r=e}var i=t===`textbf`&&n===`textit`?`BoldItalic`:t===`textbf`?`Bold`:t===`textit`?`Italic`:`Regular`;return r+`-`+i},Qd={mathbf:{variant:`bold`,fontName:`Main-Bold`},mathrm:{variant:`normal`,fontName:`Main-Regular`},textit:{variant:`italic`,fontName:`Main-Italic`},mathit:{variant:`italic`,fontName:`Main-Italic`},mathnormal:{variant:`italic`,fontName:`Math-Italic`},mathsfit:{variant:`sans-serif-italic`,fontName:`SansSerif-Italic`},mathbb:{variant:`double-struck`,fontName:`AMS-Regular`},mathcal:{variant:`script`,fontName:`Caligraphic-Regular`},mathfrak:{variant:`fraktur`,fontName:`Fraktur-Regular`},mathscr:{variant:`script`,fontName:`Script-Regular`},mathsf:{variant:`sans-serif`,fontName:`SansSerif-Regular`},mathtt:{variant:`monospace`,fontName:`Typewriter-Regular`}},$d={vec:[`vec`,.471,.714],oiintSize1:[`oiintSize1`,.957,.499],oiintSize2:[`oiintSize2`,1.472,.659],oiiintSize1:[`oiiintSize1`,1.304,.499],oiiintSize2:[`oiiintSize2`,1.98,.659]},J={fontMap:Qd,makeSymbol:Fd,mathsym:Id,makeSpan:Hd,makeSvgSpan:Ud,makeLineSpan:Wd,makeAnchor:Gd,makeFragment:Kd,wrapFragment:qd,makeVList:Yd,makeOrd:Rd,makeGlue:Xd,staticSvg:function(e,t){var[n,r,i]=$d[e],a=Ud([`overlay`],[new Qu([new $u(n)],{width:R(r),height:R(i),style:`width:`+R(r),viewBox:`0 0 `+1e3*r+` `+1e3*i,preserveAspectRatio:`xMinYMin`})],t);return a.height=i,a.style.height=R(i),a.style.width=R(r),a},svgData:$d,tryCombineChars:Bd},ef={number:3,unit:`mu`},tf={number:4,unit:`mu`},nf={number:5,unit:`mu`},rf={mord:{mop:ef,mbin:tf,mrel:nf,minner:ef},mop:{mord:ef,mop:ef,mrel:nf,minner:ef},mbin:{mord:tf,mop:tf,mopen:tf,minner:tf},mrel:{mord:nf,mop:nf,mopen:nf,minner:nf},mopen:{},mclose:{mop:ef,mbin:tf,mrel:nf,minner:ef},mpunct:{mord:ef,mop:ef,mrel:nf,mopen:ef,mclose:ef,mpunct:ef,minner:ef},minner:{mord:ef,mop:ef,mbin:tf,mrel:nf,mopen:ef,mpunct:ef,minner:ef}},af={mord:{mop:ef},mop:{mord:ef,mop:ef},mbin:{},mrel:{},mopen:{},mclose:{mop:ef},mpunct:{},minner:{mop:ef}},of={},sf={},cf={};function Y(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},c=0;c<n.length;++c)of[n[c]]=s;t&&(a&&(sf[t]=a),o&&(cf[t]=o))}function lf(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;Y({type:t,names:[],props:{numArgs:0},handler(){throw Error(`Should never be called.`)},htmlBuilder:n,mathmlBuilder:r})}var uf=function(e){return e.type===`ordgroup`&&e.body.length===1?e.body[0]:e},df=function(e){return e.type===`ordgroup`?e.body:[e]},ff=J.makeSpan,pf=[`leftmost`,`mbin`,`mopen`,`mrel`,`mop`,`mpunct`],mf=[`rightmost`,`mrel`,`mclose`,`mpunct`],hf={display:L.DISPLAY,text:L.TEXT,script:L.SCRIPT,scriptscript:L.SCRIPTSCRIPT},gf={mord:`mord`,mop:`mop`,mbin:`mbin`,mrel:`mrel`,mopen:`mopen`,mclose:`mclose`,mpunct:`mpunct`,minner:`minner`},_f=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var i=[],a=0;a<e.length;a++){var o=Cf(e[a],t);if(o instanceof Eu){var s=o.children;i.push(...s)}else i.push(o)}if(J.tryCombineChars(i),!n)return i;var c=t;if(e.length===1){var l=e[0];l.type===`sizing`?c=t.havingSize(l.size):l.type===`styling`&&(c=t.havingStyle(hf[l.style]))}var u=ff([r[0]||`leftmost`],[],t),d=ff([r[1]||`rightmost`],[],t),f=n===`root`;return vf(i,(e,t)=>{var n=t.classes[0],r=e.classes[0];n===`mbin`&&I.contains(mf,r)?t.classes[0]=`mord`:r===`mbin`&&I.contains(pf,n)&&(e.classes[0]=`mord`)},{node:u},d,f),vf(i,(e,t)=>{var n=xf(t),r=xf(e),i=n&&r?e.hasClass(`mtight`)?af[n][r]:rf[n][r]:null;if(i)return J.makeGlue(i,c)},{node:u},d,f),i},vf=function e(t,n,r,i,a){i&&t.push(i);for(var o=0;o<t.length;o++){var s=t[o],c=yf(s);if(c){e(c.children,n,r,null,a);continue}var l=!s.hasClass(`mspace`);if(l){var u=n(s,r.node);u&&(r.insertAfter?r.insertAfter(u):(t.unshift(u),o++))}l?r.node=s:a&&s.hasClass(`newline`)&&(r.node=ff([`leftmost`])),r.insertAfter=(e=>n=>{t.splice(e+1,0,n),o++})(o)}i&&t.pop()},yf=function(e){return e instanceof Eu||e instanceof Ju||e instanceof qu&&e.hasClass(`enclosing`)?e:null},bf=function e(t,n){var r=yf(t);if(r){var i=r.children;if(i.length){if(n===`right`)return e(i[i.length-1],`right`);if(n===`left`)return e(i[0],`left`)}}return t},xf=function(e,t){return e?(t&&(e=bf(e,t)),gf[e.classes[0]]||null):null},Sf=function(e,t){var n=[`nulldelimiter`].concat(e.baseSizingClasses());return ff(t.concat(n))},Cf=function(e,t,n){if(!e)return ff();if(sf[e.type]){var r=sf[e.type](e,t);if(n&&t.size!==n.size){r=ff(t.sizingClasses(n),[r],t);var i=t.sizeMultiplier/n.sizeMultiplier;r.height*=i,r.depth*=i}return r}else throw new F(`Got group of unknown type: '`+e.type+`'`)};function wf(e,t){var n=ff([`base`],e,t),r=ff([`strut`]);return r.style.height=R(n.height+n.depth),n.depth&&(r.style.verticalAlign=R(-n.depth)),n.children.unshift(r),n}function Tf(e,t){var n=null;e.length===1&&e[0].type===`tag`&&(n=e[0].tag,e=e[0].body);var r=_f(e,t,`root`),i;r.length===2&&r[1].hasClass(`tag`)&&(i=r.pop());for(var a=[],o=[],s=0;s<r.length;s++)if(o.push(r[s]),r[s].hasClass(`mbin`)||r[s].hasClass(`mrel`)||r[s].hasClass(`allowbreak`)){for(var c=!1;s<r.length-1&&r[s+1].hasClass(`mspace`)&&!r[s+1].hasClass(`newline`);)s++,o.push(r[s]),r[s].hasClass(`nobreak`)&&(c=!0);c||(a.push(wf(o,t)),o=[])}else r[s].hasClass(`newline`)&&(o.pop(),o.length>0&&(a.push(wf(o,t)),o=[]),a.push(r[s]));o.length>0&&a.push(wf(o,t));var l;n?(l=wf(_f(n,t,!0)),l.classes=[`tag`],a.push(l)):i&&a.push(i);var u=ff([`katex-html`],a);if(u.setAttribute(`aria-hidden`,`true`),l){var d=l.children[0];d.style.height=R(u.height+u.depth),u.depth&&(d.style.verticalAlign=R(-u.depth))}return u}function Ef(e){return new Eu(e)}var Df=class{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Hu(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Of&&this.children[n+1]instanceof Of){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Of;)r+=this.children[++n].toText();e.appendChild(new Of(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<`+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=` `+t+`="`,e+=I.escape(this.attributes[t]),e+=`"`);this.classes.length>0&&(e+=` class ="`+I.escape(Hu(this.classes))+`"`),e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</`+this.type+`>`,e}toText(){return this.children.map(e=>e.toText()).join(``)}},Of=class{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return I.escape(this.toText())}toText(){return this.text}},X={MathNode:Df,TextNode:Of,SpaceNode:class{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=` `:e>=.1666&&e<=.1667?this.character=` `:e>=.2222&&e<=.2223?this.character=` `:e>=.2777&&e<=.2778?this.character=`  `:e>=-.05556&&e<=-.05555?this.character=` ⁣`:e>=-.1667&&e<=-.1666?this.character=` ⁣`:e>=-.2223&&e<=-.2222?this.character=` ⁣`:e>=-.2778&&e<=-.2777?this.character=` ⁣`:this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`mspace`);return e.setAttribute(`width`,R(this.width)),e}toMarkup(){return this.character?`<mtext>`+this.character+`</mtext>`:`<mspace width="`+R(this.width)+`"/>`}toText(){return this.character?this.character:` `}},newDocumentFragment:Ef},kf=function(e,t,n){return ad[t][e]&&ad[t][e].replace&&e.charCodeAt(0)!==55349&&!(pd.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)===`tt`||n.font&&n.font.slice(4,6)===`tt`))&&(e=ad[t][e].replace),new X.TextNode(e)},Af=function(e){return e.length===1?e[0]:new X.MathNode(`mrow`,e)},jf=function(e,t){if(t.fontFamily===`texttt`)return`monospace`;if(t.fontFamily===`textsf`)return t.fontShape===`textit`&&t.fontWeight===`textbf`?`sans-serif-bold-italic`:t.fontShape===`textit`?`sans-serif-italic`:t.fontWeight===`textbf`?`bold-sans-serif`:`sans-serif`;if(t.fontShape===`textit`&&t.fontWeight===`textbf`)return`bold-italic`;if(t.fontShape===`textit`)return`italic`;if(t.fontWeight===`textbf`)return`bold`;var n=t.font;if(!n||n===`mathnormal`)return null;var r=e.mode;if(n===`mathit`)return`italic`;if(n===`boldsymbol`)return e.type===`textord`?`bold`:`bold-italic`;if(n===`mathbf`)return`bold`;if(n===`mathbb`)return`double-struck`;if(n===`mathsfit`)return`sans-serif-italic`;if(n===`mathfrak`)return`fraktur`;if(n===`mathscr`||n===`mathcal`)return`script`;if(n===`mathsf`)return`sans-serif`;if(n===`mathtt`)return`monospace`;var i=e.text;if(I.contains([`\\imath`,`\\jmath`],i))return null;ad[r][i]&&ad[r][i].replace&&(i=ad[r][i].replace);var a=J.fontMap[n].fontName;return ju(i,a,r)?J.fontMap[n].variant:null};function Mf(e){if(!e)return!1;if(e.type===`mi`&&e.children.length===1){var t=e.children[0];return t instanceof Of&&t.text===`.`}else if(e.type===`mo`&&e.children.length===1&&e.getAttribute(`separator`)===`true`&&e.getAttribute(`lspace`)===`0em`&&e.getAttribute(`rspace`)===`0em`){var n=e.children[0];return n instanceof Of&&n.text===`,`}else return!1}var Nf=function(e,t,n){if(e.length===1){var r=Ff(e[0],t);return n&&r instanceof Df&&r.type===`mo`&&(r.setAttribute(`lspace`,`0em`),r.setAttribute(`rspace`,`0em`)),[r]}for(var i=[],a,o=0;o<e.length;o++){var s=Ff(e[o],t);if(s instanceof Df&&a instanceof Df){if(s.type===`mtext`&&a.type===`mtext`&&s.getAttribute(`mathvariant`)===a.getAttribute(`mathvariant`)){a.children.push(...s.children);continue}else if(s.type===`mn`&&a.type===`mn`){a.children.push(...s.children);continue}else if(Mf(s)&&a.type===`mn`){a.children.push(...s.children);continue}else if(s.type===`mn`&&Mf(a))s.children=[...a.children,...s.children],i.pop();else if((s.type===`msup`||s.type===`msub`)&&s.children.length>=1&&(a.type===`mn`||Mf(a))){var c=s.children[0];c instanceof Df&&c.type===`mn`&&(c.children=[...a.children,...c.children],i.pop())}else if(a.type===`mi`&&a.children.length===1){var l=a.children[0];if(l instanceof Of&&l.text===`̸`&&(s.type===`mo`||s.type===`mi`||s.type===`mn`)){var u=s.children[0];u instanceof Of&&u.text.length>0&&(u.text=u.text.slice(0,1)+`̸`+u.text.slice(1),i.pop())}}}i.push(s),a=s}return i},Pf=function(e,t,n){return Af(Nf(e,t,n))},Ff=function(e,t){if(!e)return new X.MathNode(`mrow`);if(cf[e.type])return cf[e.type](e,t);throw new F(`Got group of unknown type: '`+e.type+`'`)};function If(e,t,n,r,i){var a=Nf(e,n),o=a.length===1&&a[0]instanceof Df&&I.contains([`mrow`,`mtable`],a[0].type)?a[0]:new X.MathNode(`mrow`,a),s=new X.MathNode(`annotation`,[new X.TextNode(t)]);s.setAttribute(`encoding`,`application/x-tex`);var c=new X.MathNode(`semantics`,[o,s]),l=new X.MathNode(`math`,[c]);l.setAttribute(`xmlns`,`http://www.w3.org/1998/Math/MathML`),r&&l.setAttribute(`display`,`block`);var u=i?`katex`:`katex-mathml`;return J.makeSpan([u],[l])}var Lf=function(e){return new Lu({style:e.displayMode?L.DISPLAY:L.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Rf=function(e,t){if(t.displayMode){var n=[`katex-display`];t.leqno&&n.push(`leqno`),t.fleqn&&n.push(`fleqn`),e=J.makeSpan(n,[e])}return e},zf=function(e,t,n){var r=Lf(n),i;if(n.output===`mathml`)return If(e,t,r,n.displayMode,!0);if(n.output===`html`){var a=Tf(e,r);i=J.makeSpan([`katex`],[a])}else{var o=If(e,t,r,n.displayMode,!1),s=Tf(e,r);i=J.makeSpan([`katex`],[o,s])}return Rf(i,n)},Bf=function(e,t,n){var r=Tf(e,Lf(n));return Rf(J.makeSpan([`katex`],[r]),n)},Vf={widehat:`^`,widecheck:`ˇ`,widetilde:`~`,utilde:`~`,overleftarrow:`←`,underleftarrow:`←`,xleftarrow:`←`,overrightarrow:`→`,underrightarrow:`→`,xrightarrow:`→`,underbrace:`⏟`,overbrace:`⏞`,overgroup:`⏠`,undergroup:`⏡`,overleftrightarrow:`↔`,underleftrightarrow:`↔`,xleftrightarrow:`↔`,Overrightarrow:`⇒`,xRightarrow:`⇒`,overleftharpoon:`↼`,xleftharpoonup:`↼`,overrightharpoon:`⇀`,xrightharpoonup:`⇀`,xLeftarrow:`⇐`,xLeftrightarrow:`⇔`,xhookleftarrow:`↩`,xhookrightarrow:`↪`,xmapsto:`↦`,xrightharpoondown:`⇁`,xleftharpoondown:`↽`,xrightleftharpoons:`⇌`,xleftrightharpoons:`⇋`,xtwoheadleftarrow:`↞`,xtwoheadrightarrow:`↠`,xlongequal:`=`,xtofrom:`⇄`,xrightleftarrows:`⇄`,xrightequilibrium:`⇌`,xleftequilibrium:`⇋`,"\\cdrightarrow":`→`,"\\cdleftarrow":`←`,"\\cdlongequal":`=`},Hf=function(e){var t=new X.MathNode(`mo`,[new X.TextNode(Vf[e.replace(/^\\/,``)])]);return t.setAttribute(`stretchy`,`true`),t},Uf={overrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],overleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],underrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],underleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],xrightarrow:[[`rightarrow`],1.469,522,`xMaxYMin`],"\\cdrightarrow":[[`rightarrow`],3,522,`xMaxYMin`],xleftarrow:[[`leftarrow`],1.469,522,`xMinYMin`],"\\cdleftarrow":[[`leftarrow`],3,522,`xMinYMin`],Overrightarrow:[[`doublerightarrow`],.888,560,`xMaxYMin`],xRightarrow:[[`doublerightarrow`],1.526,560,`xMaxYMin`],xLeftarrow:[[`doubleleftarrow`],1.526,560,`xMinYMin`],overleftharpoon:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoonup:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoondown:[[`leftharpoondown`],.888,522,`xMinYMin`],overrightharpoon:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoonup:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoondown:[[`rightharpoondown`],.888,522,`xMaxYMin`],xlongequal:[[`longequal`],.888,334,`xMinYMin`],"\\cdlongequal":[[`longequal`],3,334,`xMinYMin`],xtwoheadleftarrow:[[`twoheadleftarrow`],.888,334,`xMinYMin`],xtwoheadrightarrow:[[`twoheadrightarrow`],.888,334,`xMaxYMin`],overleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],overbrace:[[`leftbrace`,`midbrace`,`rightbrace`],1.6,548],underbrace:[[`leftbraceunder`,`midbraceunder`,`rightbraceunder`],1.6,548],underleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],xleftrightarrow:[[`leftarrow`,`rightarrow`],1.75,522],xLeftrightarrow:[[`doubleleftarrow`,`doublerightarrow`],1.75,560],xrightleftharpoons:[[`leftharpoondownplus`,`rightharpoonplus`],1.75,716],xleftrightharpoons:[[`leftharpoonplus`,`rightharpoondownplus`],1.75,716],xhookleftarrow:[[`leftarrow`,`righthook`],1.08,522],xhookrightarrow:[[`lefthook`,`rightarrow`],1.08,522],overlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],underlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],overgroup:[[`leftgroup`,`rightgroup`],.888,342],undergroup:[[`leftgroupunder`,`rightgroupunder`],.888,342],xmapsto:[[`leftmapsto`,`rightarrow`],1.5,522],xtofrom:[[`leftToFrom`,`rightToFrom`],1.75,528],xrightleftarrows:[[`baraboveleftarrow`,`rightarrowabovebar`],1.75,901],xrightequilibrium:[[`baraboveshortleftharpoon`,`rightharpoonaboveshortbar`],1.75,716],xleftequilibrium:[[`shortbaraboveleftharpoon`,`shortrightharpoonabovebar`],1.75,716]},Wf=function(e){return e.type===`ordgroup`?e.body.length:1},Gf={encloseSpan:function(e,t,n,r,i){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=J.makeSpan([`stretchy`,t],[],i),t===`fbox`){var s=i.color&&i.getColor();s&&(a.style.borderColor=s)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new ed({x1:`0`,y1:`0`,x2:`100%`,y2:`100%`,"stroke-width":`0.046em`})),/^x?cancel$/.test(t)&&c.push(new ed({x1:`0`,y1:`100%`,x2:`100%`,y2:`0`,"stroke-width":`0.046em`}));var l=new Qu(c,{width:`100%`,height:R(o)});a=J.makeSvgSpan([],[l],i)}return a.height=o,a.style.height=R(o),a},mathMLnode:Hf,svgSpan:function(e,t){function n(){var n=4e5,r=e.label.slice(1);if(I.contains([`widehat`,`widecheck`,`widetilde`,`utilde`],r)){var i=Wf(e.base),a,o,s;if(i>5)r===`widehat`||r===`widecheck`?(a=420,n=2364,s=.42,o=r+`4`):(a=312,n=2340,s=.34,o=`tilde4`);else{var c=[1,1,2,2,3,3][i];r===`widehat`||r===`widecheck`?(n=[0,1062,2364,2364,2364][c],a=[0,239,300,360,420][c],s=[0,.24,.3,.3,.36,.42][c],o=r+c):(n=[0,600,1033,2339,2340][c],a=[0,260,286,306,312][c],s=[0,.26,.286,.3,.306,.34][c],o=`tilde`+c)}var l=new Qu([new $u(o)],{width:`100%`,height:R(s),viewBox:`0 0 `+n+` `+a,preserveAspectRatio:`none`});return{span:J.makeSvgSpan([],[l],t),minWidth:0,height:s}}else{var u=[],d=Uf[r],[f,p,m]=d,h=m/1e3,g=f.length,_,v;if(g===1){var y=d[3];_=[`hide-tail`],v=[y]}else if(g===2)_=[`halfarrow-left`,`halfarrow-right`],v=[`xMinYMin`,`xMaxYMin`];else if(g===3)_=[`brace-left`,`brace-center`,`brace-right`],v=[`xMinYMin`,`xMidYMin`,`xMaxYMin`];else throw Error(`Correct katexImagesData or update code here to support
                    `+g+` children.`);for(var b=0;b<g;b++){var x=new Qu([new $u(f[b])],{width:`400em`,height:R(h),viewBox:`0 0 `+n+` `+m,preserveAspectRatio:v[b]+` slice`}),S=J.makeSvgSpan([_[b]],[x],t);if(g===1)return{span:S,minWidth:p,height:h};S.style.height=R(h),u.push(S)}return{span:J.makeSpan([`stretchy`],u,t),minWidth:p,height:h}}}var{span:r,minWidth:i,height:a}=n();return r.height=a,r.style.height=R(a),i>0&&(r.style.minWidth=R(i)),r}};function Kf(e,t){if(!e||e.type!==t)throw Error(`Expected node of type `+t+`, but got `+(e?`node of type `+e.type:String(e)));return e}function qf(e){var t=Jf(e);if(!t)throw Error(`Expected node of symbol group type, but got `+(e?`node of type `+e.type:String(e)));return t}function Jf(e){return e&&(e.type===`atom`||id.hasOwnProperty(e.type))?e:null}var Yf=(e,t)=>{var n,r,i;e&&e.type===`supsub`?(r=Kf(e.base,`accent`),n=r.base,e.base=n,i=nd(Cf(e,t)),e.base=r):(r=Kf(e,`accent`),n=r.base);var a=Cf(n,t.havingCrampedStyle()),o=r.isShifty&&I.isCharacterBox(n),s=0;o&&(s=td(Cf(I.getBaseElem(n),t.havingCrampedStyle())).skew);var c=r.label===`\\c`,l=c?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),u;if(r.isStretchy)u=Gf.svgSpan(r,t),u=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`elem`,elem:u,wrapperClasses:[`svg-align`],wrapperStyle:s>0?{width:`calc(100% - `+R(2*s)+`)`,marginLeft:R(2*s)}:void 0}]},t);else{var d,f;r.label===`\\vec`?(d=J.staticSvg(`vec`,t),f=J.svgData.vec[1]):(d=J.makeOrd({mode:r.mode,text:r.label},t,`textord`),d=td(d),d.italic=0,f=d.width,c&&(l+=d.depth)),u=J.makeSpan([`accent-body`],[d]);var p=r.label===`\\textcircled`;p&&(u.classes.push(`accent-full`),l=a.height);var m=s;p||(m-=f/2),u.style.left=R(m),r.label===`\\textcircled`&&(u.style.top=`.2em`),u=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:-l},{type:`elem`,elem:u}]},t)}var h=J.makeSpan([`mord`,`accent`],[u],t);return i?(i.children[0]=h,i.height=Math.max(h.height,i.height),i.classes[0]=`mord`,i):h},Xf=(e,t)=>{var n=e.isStretchy?Gf.mathMLnode(e.label):new X.MathNode(`mo`,[kf(e.label,e.mode)]),r=new X.MathNode(`mover`,[Ff(e.base,t),n]);return r.setAttribute(`accent`,`true`),r},Zf=new RegExp([`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`].map(e=>`\\`+e).join(`|`));Y({type:`accent`,names:[`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`,`\\widecheck`,`\\widehat`,`\\widetilde`,`\\overrightarrow`,`\\overleftarrow`,`\\Overrightarrow`,`\\overleftrightarrow`,`\\overgroup`,`\\overlinesegment`,`\\overleftharpoon`,`\\overrightharpoon`],props:{numArgs:1},handler:(e,t)=>{var n=uf(t[0]),r=!Zf.test(e.funcName),i=!r||e.funcName===`\\widehat`||e.funcName===`\\widetilde`||e.funcName===`\\widecheck`;return{type:`accent`,mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:Yf,mathmlBuilder:Xf}),Y({type:`accent`,names:[`\\'`,"\\`",`\\^`,`\\~`,`\\=`,`\\u`,`\\.`,`\\"`,`\\c`,`\\r`,`\\H`,`\\v`,`\\textcircled`],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`primitive`]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r===`math`&&(e.parser.settings.reportNonstrict(`mathVsTextAccents`,`LaTeX's accent `+e.funcName+` works only in text mode`),r=`text`),{type:`accent`,mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:Yf,mathmlBuilder:Xf}),Y({type:`accentUnder`,names:[`\\underleftarrow`,`\\underrightarrow`,`\\underleftrightarrow`,`\\undergroup`,`\\underlinesegment`,`\\utilde`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`accentUnder`,mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=Cf(e.base,t),r=Gf.svgSpan(e,t),i=e.label===`\\utilde`?.12:0,a=J.makeVList({positionType:`top`,positionData:n.height,children:[{type:`elem`,elem:r,wrapperClasses:[`svg-align`]},{type:`kern`,size:i},{type:`elem`,elem:n}]},t);return J.makeSpan([`mord`,`accentunder`],[a],t)},mathmlBuilder:(e,t)=>{var n=Gf.mathMLnode(e.label),r=new X.MathNode(`munder`,[Ff(e.base,t),n]);return r.setAttribute(`accentunder`,`true`),r}});var Qf=e=>{var t=new X.MathNode(`mpadded`,e?[e]:[]);return t.setAttribute(`width`,`+0.6em`),t.setAttribute(`lspace`,`0.3em`),t};Y({type:`xArrow`,names:[`\\xleftarrow`,`\\xrightarrow`,`\\xLeftarrow`,`\\xRightarrow`,`\\xleftrightarrow`,`\\xLeftrightarrow`,`\\xhookleftarrow`,`\\xhookrightarrow`,`\\xmapsto`,`\\xrightharpoondown`,`\\xrightharpoonup`,`\\xleftharpoondown`,`\\xleftharpoonup`,`\\xrightleftharpoons`,`\\xleftrightharpoons`,`\\xlongequal`,`\\xtwoheadrightarrow`,`\\xtwoheadleftarrow`,`\\xtofrom`,`\\xrightleftarrows`,`\\xrightequilibrium`,`\\xleftequilibrium`,`\\\\cdrightarrow`,`\\\\cdleftarrow`,`\\\\cdlongequal`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:i}=e;return{type:`xArrow`,mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=J.wrapFragment(Cf(e.body,r,t),t),a=e.label.slice(0,2)===`\\x`?`x`:`cd`;i.classes.push(a+`-arrow-pad`);var o;e.below&&(r=t.havingStyle(n.sub()),o=J.wrapFragment(Cf(e.below,r,t),t),o.classes.push(a+`-arrow-pad`));var s=Gf.svgSpan(e,t),c=-t.fontMetrics().axisHeight+.5*s.height,l=-t.fontMetrics().axisHeight-.5*s.height-.111;(i.depth>.25||e.label===`\\xleftequilibrium`)&&(l-=i.depth);var u;if(o){var d=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;u=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c},{type:`elem`,elem:o,shift:d}]},t)}else u=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c}]},t);return u.children[0].children[0].children[1].classes.push(`svg-align`),J.makeSpan([`mrel`,`x-arrow`],[u],t)},mathmlBuilder(e,t){var n=Gf.mathMLnode(e.label);n.setAttribute(`minsize`,e.label.charAt(0)===`x`?`1.75em`:`3.0em`);var r;if(e.body){var i=Qf(Ff(e.body,t));if(e.below){var a=Qf(Ff(e.below,t));r=new X.MathNode(`munderover`,[n,a,i])}else r=new X.MathNode(`mover`,[n,i])}else if(e.below){var o=Qf(Ff(e.below,t));r=new X.MathNode(`munder`,[n,o])}else r=Qf(),r=new X.MathNode(`mover`,[n,r]);return r}});var $f=J.makeSpan;function ep(e,t){var n=_f(e.body,t,!0);return $f([e.mclass],n,t)}function tp(e,t){var n,r=Nf(e.body,t);return e.mclass===`minner`?n=new X.MathNode(`mpadded`,r):e.mclass===`mord`?e.isCharacterBox?(n=r[0],n.type=`mi`):n=new X.MathNode(`mi`,r):(e.isCharacterBox?(n=r[0],n.type=`mo`):n=new X.MathNode(`mo`,r),e.mclass===`mbin`?(n.attributes.lspace=`0.22em`,n.attributes.rspace=`0.22em`):e.mclass===`mpunct`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0.17em`):e.mclass===`mopen`||e.mclass===`mclose`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0em`):e.mclass===`minner`&&(n.attributes.lspace=`0.0556em`,n.attributes.width=`+0.1111em`)),n}Y({type:`mclass`,names:[`\\mathord`,`\\mathbin`,`\\mathrel`,`\\mathopen`,`\\mathclose`,`\\mathpunct`,`\\mathinner`],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`mclass`,mode:n.mode,mclass:`m`+r.slice(5),body:df(i),isCharacterBox:I.isCharacterBox(i)}},htmlBuilder:ep,mathmlBuilder:tp});var np=e=>{var t=e.type===`ordgroup`&&e.body.length?e.body[0]:e;return t.type===`atom`&&(t.family===`bin`||t.family===`rel`)?`m`+t.family:`mord`};Y({type:`mclass`,names:[`\\@binrel`],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:`mclass`,mode:n.mode,mclass:np(t[0]),body:df(t[1]),isCharacterBox:I.isCharacterBox(t[1])}}}),Y({type:`mclass`,names:[`\\stackrel`,`\\overset`,`\\underset`],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,i=t[1],a=t[0],o=r===`\\stackrel`?`mrel`:np(i),s={type:`op`,mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!==`\\stackrel`,body:df(i)},c={type:`supsub`,mode:a.mode,base:s,sup:r===`\\underset`?null:a,sub:r===`\\underset`?a:null};return{type:`mclass`,mode:n.mode,mclass:o,body:[c],isCharacterBox:I.isCharacterBox(c)}},htmlBuilder:ep,mathmlBuilder:tp}),Y({type:`pmb`,names:[`\\pmb`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`pmb`,mode:n.mode,mclass:np(t[0]),body:df(t[0])}},htmlBuilder(e,t){var n=_f(e.body,t,!0),r=J.makeSpan([e.mclass],n,t);return r.style.textShadow=`0.02em 0.01em 0.04px`,r},mathmlBuilder(e,t){var n=Nf(e.body,t),r=new X.MathNode(`mstyle`,n);return r.setAttribute(`style`,`text-shadow: 0.02em 0.01em 0.04px`),r}});var rp={">":`\\\\cdrightarrow`,"<":`\\\\cdleftarrow`,"=":`\\\\cdlongequal`,A:`\\uparrow`,V:`\\downarrow`,"|":`\\Vert`,".":`no arrow`},ip=()=>({type:`styling`,body:[],mode:`math`,style:`display`}),ap=e=>e.type===`textord`&&e.text===`@`,op=(e,t)=>(e.type===`mathord`||e.type===`atom`)&&e.text===t;function sp(e,t,n){var r=rp[e];switch(r){case`\\\\cdrightarrow`:case`\\\\cdleftarrow`:return n.callFunction(r,[t[0]],[t[1]]);case`\\uparrow`:case`\\downarrow`:var i=n.callFunction(`\\\\cdleft`,[t[0]],[]),a={type:`atom`,text:r,mode:`math`,family:`rel`},o={type:`ordgroup`,mode:`math`,body:[i,n.callFunction(`\\Big`,[a],[]),n.callFunction(`\\\\cdright`,[t[1]],[])]};return n.callFunction(`\\\\cdparent`,[o],[]);case`\\\\cdlongequal`:return n.callFunction(`\\\\cdlongequal`,[],[]);case`\\Vert`:return n.callFunction(`\\Big`,[{type:`textord`,text:`\\Vert`,mode:`math`}],[]);default:return{type:`textord`,text:` `,mode:`math`}}}function cp(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set(`\\cr`,`\\\\\\relax`),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,`\\\\`)),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n===`&`||n===`\\\\`)e.consume();else if(n===`\\end`){t[t.length-1].length===0&&t.pop();break}else throw new F(`Expected \\\\ or \\cr or \\end`,e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var o=t[a],s=ip(),c=0;c<o.length;c++)if(!ap(o[c]))s.body.push(o[c]);else{r.push(s),c+=1;var l=qf(o[c]).text,u=[,,];if(u[0]={type:`ordgroup`,mode:`math`,body:[]},u[1]={type:`ordgroup`,mode:`math`,body:[]},!(`=|.`.indexOf(l)>-1))if(`<>AV`.indexOf(l)>-1)for(var d=0;d<2;d++){for(var f=!0,p=c+1;p<o.length;p++){if(op(o[p],l)){f=!1,c=p;break}if(ap(o[p]))throw new F(`Missing a `+l+` character to complete a CD arrow.`,o[p]);u[d].body.push(o[p])}if(f)throw new F(`Missing a `+l+` character to complete a CD arrow.`,o[c])}else throw new F(`Expected one of "<>AV=|." after @`,o[c]);var m={type:`styling`,body:[sp(l,u,e)],mode:`math`,style:`display`};r.push(m),s=ip()}a%2==0?r.push(s):r.shift(),r=[],i.push(r)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:`math`,body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:Array(i[0].length).fill({type:`align`,align:`c`,pregap:.25,postgap:.25}),colSeparationType:`CD`,hLinesBeforeRow:Array(i.length+1).fill([])}}Y({type:`cdlabel`,names:[`\\\\cdleft`,`\\\\cdright`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`cdlabel`,mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=J.wrapFragment(Cf(e.label,n,t),t);return r.classes.push(`cd-label-`+e.side),r.style.bottom=R(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new X.MathNode(`mrow`,[Ff(e.label,t)]);return n=new X.MathNode(`mpadded`,[n]),n.setAttribute(`width`,`0`),e.side===`left`&&n.setAttribute(`lspace`,`-1width`),n.setAttribute(`voffset`,`0.7em`),n=new X.MathNode(`mstyle`,[n]),n.setAttribute(`displaystyle`,`false`),n.setAttribute(`scriptlevel`,`1`),n}}),Y({type:`cdlabelparent`,names:[`\\\\cdparent`],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:`cdlabelparent`,mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=J.wrapFragment(Cf(e.fragment,t),t);return n.classes.push(`cd-vert-arrow`),n},mathmlBuilder(e,t){return new X.MathNode(`mrow`,[Ff(e.fragment,t)])}}),Y({type:`textord`,names:[`\\@char`],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=Kf(t[0],`ordgroup`).body,i=``,a=0;a<r.length;a++){var o=Kf(r[a],`textord`);i+=o.text}var s=parseInt(i),c;if(isNaN(s))throw new F(`\\@char has non-numeric argument `+i);if(s<0||s>=1114111)throw new F(`\\@char with invalid code point `+i);return s<=65535?c=String.fromCharCode(s):(s-=65536,c=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:`textord`,mode:n.mode,text:c}}});var lp=(e,t)=>{var n=_f(e.body,t.withColor(e.color),!1);return J.makeFragment(n)},up=(e,t)=>{var n=Nf(e.body,t.withColor(e.color)),r=new X.MathNode(`mstyle`,n);return r.setAttribute(`mathcolor`,e.color),r};Y({type:`color`,names:[`\\textcolor`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`original`]},handler(e,t){var{parser:n}=e,r=Kf(t[0],`color-token`).color,i=t[1];return{type:`color`,mode:n.mode,color:r,body:df(i)}},htmlBuilder:lp,mathmlBuilder:up}),Y({type:`color`,names:[`\\color`],props:{numArgs:1,allowedInText:!0,argTypes:[`color`]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,i=Kf(t[0],`color-token`).color;n.gullet.macros.set(`\\current@color`,i);var a=n.parseExpression(!0,r);return{type:`color`,mode:n.mode,color:i,body:a}},htmlBuilder:lp,mathmlBuilder:up}),Y({type:`cr`,names:[`\\\\`],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,i=r.gullet.future().text===`[`?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior(`newLineInDisplayMode`,`In LaTeX, \\\\ or \\newline does nothing in display mode`);return{type:`cr`,mode:r.mode,newLine:a,size:i&&Kf(i,`size`).value}},htmlBuilder(e,t){var n=J.makeSpan([`mspace`],[],t);return e.newLine&&(n.classes.push(`newline`),e.size&&(n.style.marginTop=R(Vu(e.size,t)))),n},mathmlBuilder(e,t){var n=new X.MathNode(`mspace`);return e.newLine&&(n.setAttribute(`linebreak`,`newline`),e.size&&n.setAttribute(`height`,R(Vu(e.size,t)))),n}});var dp={"\\global":`\\global`,"\\long":`\\\\globallong`,"\\\\globallong":`\\\\globallong`,"\\def":`\\gdef`,"\\gdef":`\\gdef`,"\\edef":`\\xdef`,"\\xdef":`\\xdef`,"\\let":`\\\\globallet`,"\\futurelet":`\\\\globalfuture`},fp=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new F(`Expected a control sequence`,e);return t},pp=e=>{var t=e.gullet.popToken();return t.text===`=`&&(t=e.gullet.popToken(),t.text===` `&&(t=e.gullet.popToken())),t},mp=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i??=(n.noexpand=!0,{tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};Y({type:`internal`,names:[`\\global`,`\\long`,`\\\\globallong`],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(dp[r.text])return(n===`\\global`||n===`\\\\globallong`)&&(r.text=dp[r.text]),Kf(t.parseFunction(),`internal`);throw new F(`Invalid token after macro prefix`,r)}}),Y({type:`internal`,names:[`\\def`,`\\gdef`,`\\edef`,`\\xdef`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new F(`Expected a control sequence`,r);for(var a=0,o,s=[[]];t.gullet.future().text!==`{`;)if(r=t.gullet.popToken(),r.text===`#`){if(t.gullet.future().text===`{`){o=t.gullet.future(),s[a].push(`{`);break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new F(`Invalid argument number "`+r.text+`"`);if(parseInt(r.text)!==a+1)throw new F(`Argument number "`+r.text+`" out of order`);a++,s.push([])}else if(r.text===`EOF`)throw new F(`Expected a macro definition`);else s[a].push(r.text);var{tokens:c}=t.gullet.consumeArg();return o&&c.unshift(o),(n===`\\edef`||n===`\\xdef`)&&(c=t.gullet.expandTokens(c),c.reverse()),t.gullet.macros.set(i,{tokens:c,numArgs:a,delimiters:s},n===dp[n]),{type:`internal`,mode:t.mode}}}),Y({type:`internal`,names:[`\\let`,`\\\\globallet`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=fp(t.gullet.popToken());return t.gullet.consumeSpaces(),mp(t,r,pp(t),n===`\\\\globallet`),{type:`internal`,mode:t.mode}}}),Y({type:`internal`,names:[`\\futurelet`,`\\\\globalfuture`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=fp(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return mp(t,r,a,n===`\\\\globalfuture`),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:`internal`,mode:t.mode}}});var hp=function(e,t,n){var r=ju(ad.math[e]&&ad.math[e].replace||e,t,n);if(!r)throw Error(`Unsupported symbol `+e+` and font size `+t+`.`);return r},gp=function(e,t,n,r){var i=n.havingBaseStyle(t),a=J.makeSpan(r.concat(i.sizingClasses(n)),[e],n),o=i.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=i.sizeMultiplier,a},_p=function(e,t,n){var r=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push(`delimcenter`),e.style.top=R(i),e.height-=i,e.depth+=i},vp=function(e,t,n,r,i,a){var o=gp(J.makeSymbol(e,`Main-Regular`,i,r),t,r,a);return n&&_p(o,r,t),o},yp=function(e,t,n,r){return J.makeSymbol(e,`Size`+t+`-Regular`,n,r)},bp=function(e,t,n,r,i,a){var o=yp(e,t,i,r),s=gp(J.makeSpan([`delimsizing`,`size`+t],[o],r),L.TEXT,r,a);return n&&_p(s,r,L.TEXT),s},xp=function(e,t,n){var r=t===`Size1-Regular`?`delim-size1`:`delim-size4`;return{type:`elem`,elem:J.makeSpan([`delimsizinginner`,r],[J.makeSpan([],[J.makeSymbol(e,t,n)])])}},Sp=function(e,t,n){var r=Du[`Size4-Regular`][e.charCodeAt(0)]?Du[`Size4-Regular`][e.charCodeAt(0)][4]:Du[`Size1-Regular`][e.charCodeAt(0)][4],i=new Qu([new $u(`inner`,Cu(e,Math.round(1e3*t)))],{width:R(r),height:R(t),style:`width:`+R(r),viewBox:`0 0 `+1e3*r+` `+Math.round(1e3*t),preserveAspectRatio:`xMinYMin`}),a=J.makeSvgSpan([],[i],n);return a.height=t,a.style.height=R(t),a.style.width=R(r),{type:`elem`,elem:a}},Cp=.008,wp={type:`kern`,size:-1*Cp},Tp=[`|`,`\\lvert`,`\\rvert`,`\\vert`],Ep=[`\\|`,`\\lVert`,`\\rVert`,`\\Vert`],Dp=function(e,t,n,r,i,a){var o,s,c,l,u=``,d=0;o=c=l=e,s=null;var f=`Size1-Regular`;e===`\\uparrow`?c=l=`⏐`:e===`\\Uparrow`?c=l=`‖`:e===`\\downarrow`?o=c=`⏐`:e===`\\Downarrow`?o=c=`‖`:e===`\\updownarrow`?(o=`\\uparrow`,c=`⏐`,l=`\\downarrow`):e===`\\Updownarrow`?(o=`\\Uparrow`,c=`‖`,l=`\\Downarrow`):I.contains(Tp,e)?(c=`∣`,u=`vert`,d=333):I.contains(Ep,e)?(c=`∥`,u=`doublevert`,d=556):e===`[`||e===`\\lbrack`?(o=`⎡`,c=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lbrack`,d=667):e===`]`||e===`\\rbrack`?(o=`⎤`,c=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rbrack`,d=667):e===`\\lfloor`||e===`⌊`?(c=o=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lfloor`,d=667):e===`\\lceil`||e===`⌈`?(o=`⎡`,c=l=`⎢`,f=`Size4-Regular`,u=`lceil`,d=667):e===`\\rfloor`||e===`⌋`?(c=o=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rfloor`,d=667):e===`\\rceil`||e===`⌉`?(o=`⎤`,c=l=`⎥`,f=`Size4-Regular`,u=`rceil`,d=667):e===`(`||e===`\\lparen`?(o=`⎛`,c=`⎜`,l=`⎝`,f=`Size4-Regular`,u=`lparen`,d=875):e===`)`||e===`\\rparen`?(o=`⎞`,c=`⎟`,l=`⎠`,f=`Size4-Regular`,u=`rparen`,d=875):e===`\\{`||e===`\\lbrace`?(o=`⎧`,s=`⎨`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\}`||e===`\\rbrace`?(o=`⎫`,s=`⎬`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lgroup`||e===`⟮`?(o=`⎧`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\rgroup`||e===`⟯`?(o=`⎫`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lmoustache`||e===`⎰`?(o=`⎧`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):(e===`\\rmoustache`||e===`⎱`)&&(o=`⎫`,l=`⎩`,c=`⎪`,f=`Size4-Regular`);var p=hp(o,f,i),m=p.height+p.depth,h=hp(c,f,i),g=h.height+h.depth,_=hp(l,f,i),v=_.height+_.depth,y=0,b=1;if(s!==null){var x=hp(s,f,i);y=x.height+x.depth,b=2}var S=m+v+y,C=S+Math.max(0,Math.ceil((t-S)/(b*g)))*b*g,w=r.fontMetrics().axisHeight;n&&(w*=r.sizeMultiplier);var T=C/2-w,E=[];if(u.length>0){var ee=C-m-v,D=Math.round(C*1e3),O=Tu(u,Math.round(ee*1e3)),k=new $u(u,O),te=(d/1e3).toFixed(3)+`em`,A=(D/1e3).toFixed(3)+`em`,ne=new Qu([k],{width:te,height:A,viewBox:`0 0 `+d+` `+D}),re=J.makeSvgSpan([],[ne],r);re.height=D/1e3,re.style.width=te,re.style.height=A,E.push({type:`elem`,elem:re})}else{if(E.push(xp(l,f,i)),E.push(wp),s===null){var ie=C-m-v+2*Cp;E.push(Sp(c,ie,r))}else{var j=(C-m-v-y)/2+2*Cp;E.push(Sp(c,j,r)),E.push(wp),E.push(xp(s,f,i)),E.push(wp),E.push(Sp(c,j,r))}E.push(wp),E.push(xp(o,f,i))}var ae=r.havingBaseStyle(L.TEXT),oe=J.makeVList({positionType:`bottom`,positionData:T,children:E},ae);return gp(J.makeSpan([`delimsizing`,`mult`],[oe],ae),L.TEXT,r,a)},Op=80,kp=.08,Ap=function(e,t,n,r,i){var a=new Qu([new $u(e,Su(e,r,n))],{width:`400em`,height:R(t),viewBox:`0 0 400000 `+n,preserveAspectRatio:`xMinYMin slice`});return J.makeSvgSpan([`hide-tail`],[a],i)},jp=function(e,t){var n=t.havingBaseSizing(),r=Vp(`\\surd`,e*n.sizeMultiplier,zp,n),i=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,s=0,c=0,l=0,u;return r.type===`small`?(l=1e3+1e3*a+Op,e<1?i=1:e<1.4&&(i=.7),s=(1+a+kp)/i,c=(1+a)/i,o=Ap(`sqrtMain`,s,l,a,t),o.style.minWidth=`0.853em`,u=.833/i):r.type===`large`?(l=(1e3+Op)*Fp[r.size],c=(Fp[r.size]+a)/i,s=(Fp[r.size]+a+kp)/i,o=Ap(`sqrtSize`+r.size,s,l,a,t),o.style.minWidth=`1.02em`,u=1/i):(s=e+a+kp,c=e+a,l=Math.floor(1e3*e+a)+Op,o=Ap(`sqrtTall`,s,l,a,t),o.style.minWidth=`0.742em`,u=1.056),o.height=c,o.style.height=R(s),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*i}},Mp=[`(`,`\\lparen`,`)`,`\\rparen`,`[`,`\\lbrack`,`]`,`\\rbrack`,`\\{`,`\\lbrace`,`\\}`,`\\rbrace`,`\\lfloor`,`\\rfloor`,`⌊`,`⌋`,`\\lceil`,`\\rceil`,`⌈`,`⌉`,`\\surd`],Np=[`\\uparrow`,`\\downarrow`,`\\updownarrow`,`\\Uparrow`,`\\Downarrow`,`\\Updownarrow`,`|`,`\\|`,`\\vert`,`\\Vert`,`\\lvert`,`\\rvert`,`\\lVert`,`\\rVert`,`\\lgroup`,`\\rgroup`,`⟮`,`⟯`,`\\lmoustache`,`\\rmoustache`,`⎰`,`⎱`],Pp=[`<`,`>`,`\\langle`,`\\rangle`,`/`,`\\backslash`,`\\lt`,`\\gt`],Fp=[0,1.2,1.8,2.4,3],Ip=function(e,t,n,r,i){if(e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`),I.contains(Mp,e)||I.contains(Pp,e))return bp(e,t,!1,n,r,i);if(I.contains(Np,e))return Dp(e,Fp[t],!1,n,r,i);throw new F(`Illegal delimiter: '`+e+`'`)},Lp=[{type:`small`,style:L.SCRIPTSCRIPT},{type:`small`,style:L.SCRIPT},{type:`small`,style:L.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4}],Rp=[{type:`small`,style:L.SCRIPTSCRIPT},{type:`small`,style:L.SCRIPT},{type:`small`,style:L.TEXT},{type:`stack`}],zp=[{type:`small`,style:L.SCRIPTSCRIPT},{type:`small`,style:L.SCRIPT},{type:`small`,style:L.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4},{type:`stack`}],Bp=function(e){if(e.type===`small`)return`Main-Regular`;if(e.type===`large`)return`Size`+e.size+`-Regular`;if(e.type===`stack`)return`Size4-Regular`;throw Error(`Add support for delim type '`+e.type+`' here.`)},Vp=function(e,t,n,r){for(var i=Math.min(2,3-r.style.size);i<n.length&&n[i].type!==`stack`;i++){var a=hp(e,Bp(n[i]),`math`),o=a.height+a.depth;if(n[i].type===`small`){var s=r.havingBaseStyle(n[i].style);o*=s.sizeMultiplier}if(o>t)return n[i]}return n[n.length-1]},Hp=function(e,t,n,r,i,a){e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`);var o=I.contains(Pp,e)?Lp:I.contains(Mp,e)?zp:Rp,s=Vp(e,t,o,r);return s.type===`small`?vp(e,s.style,n,r,i,a):s.type===`large`?bp(e,s.size,n,r,i,a):Dp(e,t,n,r,i,a)},Up={sqrtImage:jp,sizedDelim:Ip,sizeToMaxHeight:Fp,customSizedDelim:Hp,leftRightDelim:function(e,t,n,r,i,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,s=901,c=5/r.fontMetrics().ptPerEm,l=Math.max(t-o,n+o);return Hp(e,Math.max(l/500*s,2*l-c),!0,r,i,a)}},Wp={"\\bigl":{mclass:`mopen`,size:1},"\\Bigl":{mclass:`mopen`,size:2},"\\biggl":{mclass:`mopen`,size:3},"\\Biggl":{mclass:`mopen`,size:4},"\\bigr":{mclass:`mclose`,size:1},"\\Bigr":{mclass:`mclose`,size:2},"\\biggr":{mclass:`mclose`,size:3},"\\Biggr":{mclass:`mclose`,size:4},"\\bigm":{mclass:`mrel`,size:1},"\\Bigm":{mclass:`mrel`,size:2},"\\biggm":{mclass:`mrel`,size:3},"\\Biggm":{mclass:`mrel`,size:4},"\\big":{mclass:`mord`,size:1},"\\Big":{mclass:`mord`,size:2},"\\bigg":{mclass:`mord`,size:3},"\\Bigg":{mclass:`mord`,size:4}},Gp=`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`);function Kp(e,t){var n=Jf(e);if(n&&I.contains(Gp,n.text))return n;throw n?new F(`Invalid delimiter '`+n.text+`' after '`+t.funcName+`'`,e):new F(`Invalid delimiter type '`+e.type+`'`,e)}Y({type:`delimsizing`,names:[`\\bigl`,`\\Bigl`,`\\biggl`,`\\Biggl`,`\\bigr`,`\\Bigr`,`\\biggr`,`\\Biggr`,`\\bigm`,`\\Bigm`,`\\biggm`,`\\Biggm`,`\\big`,`\\Big`,`\\bigg`,`\\Bigg`],props:{numArgs:1,argTypes:[`primitive`]},handler:(e,t)=>{var n=Kp(t[0],e);return{type:`delimsizing`,mode:e.parser.mode,size:Wp[e.funcName].size,mclass:Wp[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim===`.`?J.makeSpan([e.mclass]):Up.sizedDelim(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!==`.`&&t.push(kf(e.delim,e.mode));var n=new X.MathNode(`mo`,t);e.mclass===`mopen`||e.mclass===`mclose`?n.setAttribute(`fence`,`true`):n.setAttribute(`fence`,`false`),n.setAttribute(`stretchy`,`true`);var r=R(Up.sizeToMaxHeight[e.size]);return n.setAttribute(`minsize`,r),n.setAttribute(`maxsize`,r),n}});function qp(e){if(!e.body)throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`)}Y({type:`leftright-right`,names:[`\\right`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get(`\\current@color`);if(n&&typeof n!=`string`)throw new F(`\\current@color set to non-string in \\right`);return{type:`leftright-right`,mode:e.parser.mode,delim:Kp(t[0],e).text,color:n}}}),Y({type:`leftright`,names:[`\\left`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=Kp(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect(`\\right`,!1);var a=Kf(r.parseFunction(),`leftright-right`);return{type:`leftright`,mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{qp(e);for(var n=_f(e.body,t,!0,[`mopen`,`mclose`]),r=0,i=0,a=!1,o=0;o<n.length;o++)n[o].isMiddle?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i));r*=t.sizeMultiplier,i*=t.sizeMultiplier;var s=e.left===`.`?Sf(t,[`mopen`]):Up.leftRightDelim(e.left,r,i,t,e.mode,[`mopen`]);if(n.unshift(s),a)for(var c=1;c<n.length;c++){var l=n[c].isMiddle;l&&(n[c]=Up.leftRightDelim(l.delim,r,i,l.options,e.mode,[]))}var u;if(e.right===`.`)u=Sf(t,[`mclose`]);else{var d=e.rightColor?t.withColor(e.rightColor):t;u=Up.leftRightDelim(e.right,r,i,d,e.mode,[`mclose`])}return n.push(u),J.makeSpan([`minner`],n,t)},mathmlBuilder:(e,t)=>{qp(e);var n=Nf(e.body,t);if(e.left!==`.`){var r=new X.MathNode(`mo`,[kf(e.left,e.mode)]);r.setAttribute(`fence`,`true`),n.unshift(r)}if(e.right!==`.`){var i=new X.MathNode(`mo`,[kf(e.right,e.mode)]);i.setAttribute(`fence`,`true`),e.rightColor&&i.setAttribute(`mathcolor`,e.rightColor),n.push(i)}return Af(n)}}),Y({type:`middle`,names:[`\\middle`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=Kp(t[0],e);if(!e.parser.leftrightDepth)throw new F(`\\middle without preceding \\left`,n);return{type:`middle`,mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;if(e.delim===`.`)n=Sf(t,[]);else{n=Up.sizedDelim(e.delim,1,t,e.mode,[]);var r={delim:e.delim,options:t};n.isMiddle=r}return n},mathmlBuilder:(e,t)=>{var n=e.delim===`\\vert`||e.delim===`|`?kf(`|`,`text`):kf(e.delim,e.mode),r=new X.MathNode(`mo`,[n]);return r.setAttribute(`fence`,`true`),r.setAttribute(`lspace`,`0.05em`),r.setAttribute(`rspace`,`0.05em`),r}});var Jp=(e,t)=>{var n=J.wrapFragment(Cf(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,o=0,s=I.isCharacterBox(e.body);if(r===`sout`)a=J.makeSpan([`stretchy`,`sout`]),a.height=t.fontMetrics().defaultRuleThickness/i,o=-.5*t.fontMetrics().xHeight;else if(r===`phase`){var c=Vu({number:.6,unit:`pt`},t),l=Vu({number:.35,unit:`ex`},t),u=t.havingBaseSizing();i/=u.sizeMultiplier;var d=n.height+n.depth+c+l;n.style.paddingLeft=R(d/2+c);var f=Math.floor(1e3*d*i),p=new Qu([new $u(`phase`,bu(f))],{width:`400em`,height:R(f/1e3),viewBox:`0 0 400000 `+f,preserveAspectRatio:`xMinYMin slice`});a=J.makeSvgSpan([`hide-tail`],[p],t),a.style.height=R(d),o=n.depth+c+l}else{/cancel/.test(r)?s||n.classes.push(`cancel-pad`):r===`angl`?n.classes.push(`anglpad`):n.classes.push(`boxpad`);var m=0,h=0,g=0;/box/.test(r)?(g=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),m=t.fontMetrics().fboxsep+(r===`colorbox`?0:g),h=m):r===`angl`?(g=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),m=4*g,h=Math.max(0,.25-n.depth)):(m=s?.2:0,h=m),a=Gf.encloseSpan(n,r,m,h,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle=`solid`,a.style.borderWidth=R(g)):r===`angl`&&g!==.049&&(a.style.borderTopWidth=R(g),a.style.borderRightWidth=R(g)),o=n.depth+h,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var _;if(e.backgroundColor)_=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:a,shift:o},{type:`elem`,elem:n,shift:0}]},t);else{var v=/cancel|phase/.test(r)?[`svg-align`]:[];_=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:n,shift:0},{type:`elem`,elem:a,shift:o,wrapperClasses:v}]},t)}return/cancel/.test(r)&&(_.height=n.height,_.depth=n.depth),/cancel/.test(r)&&!s?J.makeSpan([`mord`,`cancel-lap`],[_],t):J.makeSpan([`mord`],[_],t)},Yp=(e,t)=>{var n=0,r=new X.MathNode(e.label.indexOf(`colorbox`)>-1?`mpadded`:`menclose`,[Ff(e.body,t)]);switch(e.label){case`\\cancel`:r.setAttribute(`notation`,`updiagonalstrike`);break;case`\\bcancel`:r.setAttribute(`notation`,`downdiagonalstrike`);break;case`\\phase`:r.setAttribute(`notation`,`phasorangle`);break;case`\\sout`:r.setAttribute(`notation`,`horizontalstrike`);break;case`\\fbox`:r.setAttribute(`notation`,`box`);break;case`\\angl`:r.setAttribute(`notation`,`actuarial`);break;case`\\fcolorbox`:case`\\colorbox`:if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute(`width`,`+`+2*n+`pt`),r.setAttribute(`height`,`+`+2*n+`pt`),r.setAttribute(`lspace`,n+`pt`),r.setAttribute(`voffset`,n+`pt`),e.label===`\\fcolorbox`){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute(`style`,`border: `+i+`em solid `+String(e.borderColor))}break;case`\\xcancel`:r.setAttribute(`notation`,`updiagonalstrike downdiagonalstrike`);break}return e.backgroundColor&&r.setAttribute(`mathbackground`,e.backgroundColor),r};Y({type:`enclose`,names:[`\\colorbox`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`text`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=Kf(t[0],`color-token`).color,o=t[1];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:Jp,mathmlBuilder:Yp}),Y({type:`enclose`,names:[`\\fcolorbox`],props:{numArgs:3,allowedInText:!0,argTypes:[`color`,`color`,`text`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=Kf(t[0],`color-token`).color,o=Kf(t[1],`color-token`).color,s=t[2];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:s}},htmlBuilder:Jp,mathmlBuilder:Yp}),Y({type:`enclose`,names:[`\\fbox`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\fbox`,body:t[0]}}}),Y({type:`enclose`,names:[`\\cancel`,`\\bcancel`,`\\xcancel`,`\\sout`,`\\phase`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:Jp,mathmlBuilder:Yp}),Y({type:`enclose`,names:[`\\angl`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\angl`,body:t[0]}}});var Xp={};function Zp(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},c=0;c<n.length;++c)Xp[n[c]]=s;a&&(sf[t]=a),o&&(cf[t]=o)}var Qp={};function Z(e,t){Qp[e]=t}function $p(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n===`\\relax`&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n===`\\hline`||n===`\\hdashline`;)e.consume(),t.push(n===`\\hdashline`),e.consumeSpaces(),n=e.fetch().text;return t}var em=e=>{if(!e.parser.settings.displayMode)throw new F(`{`+e.envName+`} can be used only in display mode.`)};function tm(e){if(e.indexOf(`ed`)===-1)return e.indexOf(`*`)===-1}function nm(e,t,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:o,colSeparationType:s,autoTag:c,singleRow:l,emptySingleRow:u,maxNumCols:d,leqno:f}=t;if(e.gullet.beginGroup(),l||e.gullet.macros.set(`\\cr`,`\\\\\\relax`),!o){var p=e.gullet.expandMacroAsText(`\\arraystretch`);if(p==null)o=1;else if(o=parseFloat(p),!o||o<0)throw new F(`Invalid \\arraystretch: `+p)}e.gullet.beginGroup();var m=[],h=[m],g=[],_=[],v=c==null?void 0:[];function y(){c&&e.gullet.macros.set(`\\@eqnsw`,`1`,!0)}function b(){v&&(e.gullet.macros.get(`\\df@tag`)?(v.push(e.subparse([new Pl(`\\df@tag`)])),e.gullet.macros.set(`\\df@tag`,void 0,!0)):v.push(!!c&&e.gullet.macros.get(`\\@eqnsw`)===`1`))}for(y(),_.push($p(e));;){var x=e.parseExpression(!1,l?`\\end`:`\\\\`);e.gullet.endGroup(),e.gullet.beginGroup(),x={type:`ordgroup`,mode:e.mode,body:x},n&&(x={type:`styling`,mode:e.mode,style:n,body:[x]}),m.push(x);var S=e.fetch().text;if(S===`&`){if(d&&m.length===d){if(l||s)throw new F(`Too many tab characters: &`,e.nextToken);e.settings.reportNonstrict(`textEnv`,`Too few columns specified in the {array} column argument.`)}e.consume()}else if(S===`\\end`){b(),m.length===1&&x.type===`styling`&&x.body[0].body.length===0&&(h.length>1||!u)&&h.pop(),_.length<h.length+1&&_.push([]);break}else if(S===`\\\\`){e.consume();var C=void 0;e.gullet.future().text!==` `&&(C=e.parseSizeGroup(!0)),g.push(C?C.value:null),b(),_.push($p(e)),m=[],h.push(m),y()}else throw new F(`Expected & or \\\\ or \\cr or \\end`,e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:e.mode,addJot:i,arraystretch:o,body:h,cols:a,rowGaps:g,hskipBeforeAndAfter:r,hLinesBeforeRow:_,colSeparationType:s,tags:v,leqno:f}}function rm(e){return e.slice(0,1)===`d`?`display`:`text`}var im=function(e,t){var n,r,i=e.body.length,a=e.hLinesBeforeRow,o=0,s=Array(i),c=[],l=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;e.colSeparationType&&e.colSeparationType===`small`&&(d=.2778*(t.havingStyle(L.SCRIPT).sizeMultiplier/t.sizeMultiplier));var f=e.colSeparationType===`CD`?Vu({number:3,unit:`ex`},t):12*u,p=3*u,m=e.arraystretch*f,h=.7*m,g=.3*m,_=0;function v(e){for(var t=0;t<e.length;++t)t>0&&(_+=.25),c.push({pos:_,isDashed:e[t]})}for(v(a[0]),n=0;n<e.body.length;++n){var y=e.body[n],b=h,x=g;o<y.length&&(o=y.length);var S=Array(y.length);for(r=0;r<y.length;++r){var C=Cf(y[r],t);x<C.depth&&(x=C.depth),b<C.height&&(b=C.height),S[r]=C}var w=e.rowGaps[n],T=0;w&&(T=Vu(w,t),T>0&&(T+=g,x<T&&(x=T),T=0)),e.addJot&&(x+=p),S.height=b,S.depth=x,_+=b,S.pos=_,_+=x+T,s[n]=S,v(a[n+1])}var E=_/2+t.fontMetrics().axisHeight,ee=e.cols||[],D=[],O,k,te=[];if(e.tags&&e.tags.some(e=>e))for(n=0;n<i;++n){var A=s[n],ne=A.pos-E,re=e.tags[n],ie=void 0;ie=re===!0?J.makeSpan([`eqn-num`],[],t):re===!1?J.makeSpan([],[],t):J.makeSpan([],_f(re,t,!0),t),ie.depth=A.depth,ie.height=A.height,te.push({type:`elem`,elem:ie,shift:ne})}for(r=0,k=0;r<o||k<ee.length;++r,++k){for(var j=ee[k]||{},ae=!0;j.type===`separator`;){if(ae||(O=J.makeSpan([`arraycolsep`],[]),O.style.width=R(t.fontMetrics().doubleRuleSep),D.push(O)),j.separator===`|`||j.separator===`:`){var oe=j.separator===`|`?`solid`:`dashed`,se=J.makeSpan([`vertical-separator`],[],t);se.style.height=R(_),se.style.borderRightWidth=R(l),se.style.borderRightStyle=oe,se.style.margin=`0 `+R(-l/2);var ce=_-E;ce&&(se.style.verticalAlign=R(-ce)),D.push(se)}else throw new F(`Invalid separator type: `+j.separator);k++,j=ee[k]||{},ae=!1}if(!(r>=o)){var le=void 0;(r>0||e.hskipBeforeAndAfter)&&(le=I.deflt(j.pregap,d),le!==0&&(O=J.makeSpan([`arraycolsep`],[]),O.style.width=R(le),D.push(O)));var ue=[];for(n=0;n<i;++n){var de=s[n],fe=de[r];if(fe){var pe=de.pos-E;fe.depth=de.depth,fe.height=de.height,ue.push({type:`elem`,elem:fe,shift:pe})}}ue=J.makeVList({positionType:`individualShift`,children:ue},t),ue=J.makeSpan([`col-align-`+(j.align||`c`)],[ue]),D.push(ue),(r<o-1||e.hskipBeforeAndAfter)&&(le=I.deflt(j.postgap,d),le!==0&&(O=J.makeSpan([`arraycolsep`],[]),O.style.width=R(le),D.push(O)))}}if(s=J.makeSpan([`mtable`],D),c.length>0){for(var me=J.makeLineSpan(`hline`,t,l),he=J.makeLineSpan(`hdashline`,t,l),ge=[{type:`elem`,elem:s,shift:0}];c.length>0;){var _e=c.pop(),ve=_e.pos-E;_e.isDashed?ge.push({type:`elem`,elem:he,shift:ve}):ge.push({type:`elem`,elem:me,shift:ve})}s=J.makeVList({positionType:`individualShift`,children:ge},t)}if(te.length===0)return J.makeSpan([`mord`],[s],t);var ye=J.makeVList({positionType:`individualShift`,children:te},t);return ye=J.makeSpan([`tag`],[ye],t),J.makeFragment([s,ye])},am={c:`center `,l:`left `,r:`right `},om=function(e,t){for(var n=[],r=new X.MathNode(`mtd`,[],[`mtr-glue`]),i=new X.MathNode(`mtd`,[],[`mml-eqn-num`]),a=0;a<e.body.length;a++){for(var o=e.body[a],s=[],c=0;c<o.length;c++)s.push(new X.MathNode(`mtd`,[Ff(o[c],t)]));e.tags&&e.tags[a]&&(s.unshift(r),s.push(r),e.leqno?s.unshift(i):s.push(i)),n.push(new X.MathNode(`mtr`,s))}var l=new X.MathNode(`mtable`,n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);l.setAttribute(`rowspacing`,R(u));var d=``,f=``;if(e.cols&&e.cols.length>0){var p=e.cols,m=``,h=!1,g=0,_=p.length;p[0].type===`separator`&&(d+=`top `,g=1),p[p.length-1].type===`separator`&&(d+=`bottom `,--_);for(var v=g;v<_;v++)p[v].type===`align`?(f+=am[p[v].align],h&&(m+=`none `),h=!0):p[v].type===`separator`&&(h&&=(m+=p[v].separator===`|`?`solid `:`dashed `,!1));l.setAttribute(`columnalign`,f.trim()),/[sd]/.test(m)&&l.setAttribute(`columnlines`,m.trim())}if(e.colSeparationType===`align`){for(var y=e.cols||[],b=``,x=1;x<y.length;x++)b+=x%2?`0em `:`1em `;l.setAttribute(`columnspacing`,b.trim())}else e.colSeparationType===`alignat`||e.colSeparationType===`gather`?l.setAttribute(`columnspacing`,`0em`):e.colSeparationType===`small`?l.setAttribute(`columnspacing`,`0.2778em`):e.colSeparationType===`CD`?l.setAttribute(`columnspacing`,`0.5em`):l.setAttribute(`columnspacing`,`1em`);var S=``,C=e.hLinesBeforeRow;d+=C[0].length>0?`left `:``,d+=C[C.length-1].length>0?`right `:``;for(var w=1;w<C.length-1;w++)S+=C[w].length===0?`none `:C[w][0]?`dashed `:`solid `;return/[sd]/.test(S)&&l.setAttribute(`rowlines`,S.trim()),d!==``&&(l=new X.MathNode(`menclose`,[l]),l.setAttribute(`notation`,d.trim())),e.arraystretch&&e.arraystretch<1&&(l=new X.MathNode(`mstyle`,[l]),l.setAttribute(`scriptlevel`,`1`)),l},sm=function(e,t){e.envName.indexOf(`ed`)===-1&&em(e);var n=[],r=e.envName.indexOf(`at`)>-1?`alignat`:`align`,i=e.envName===`split`,a=nm(e.parser,{cols:n,addJot:!0,autoTag:i?void 0:tm(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:i?2:void 0,leqno:e.parser.settings.leqno},`display`),o,s=0,c={type:`ordgroup`,mode:e.mode,body:[]};if(t[0]&&t[0].type===`ordgroup`){for(var l=``,u=0;u<t[0].body.length;u++){var d=Kf(t[0].body[u],`textord`);l+=d.text}o=Number(l),s=o*2}var f=!s;a.body.forEach(function(e){for(var t=1;t<e.length;t+=2)Kf(Kf(e[t],`styling`).body[0],`ordgroup`).body.unshift(c);if(f)s<e.length&&(s=e.length);else{var n=e.length/2;if(o<n)throw new F(`Too many math in a row: `+(`expected `+o+`, but got `+n),e[0])}});for(var p=0;p<s;++p){var m=`r`,h=0;p%2==1?m=`l`:p>0&&f&&(h=1),n[p]={type:`align`,align:m,pregap:h,postgap:0}}return a.colSeparationType=f?`align`:`alignat`,a};Zp({type:`array`,names:[`array`,`darray`],props:{numArgs:1},handler(e,t){var n=(Jf(t[0])?[t[0]]:Kf(t[0],`ordgroup`).body).map(function(e){var t=qf(e).text;if(`lcr`.indexOf(t)!==-1)return{type:`align`,align:t};if(t===`|`)return{type:`separator`,separator:`|`};if(t===`:`)return{type:`separator`,separator:`:`};throw new F(`Unknown column alignment: `+t,e)}),r={cols:n,hskipBeforeAndAfter:!0,maxNumCols:n.length};return nm(e.parser,r,rm(e.envName))},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`matrix`,`pmatrix`,`bmatrix`,`Bmatrix`,`vmatrix`,`Vmatrix`,`matrix*`,`pmatrix*`,`bmatrix*`,`Bmatrix*`,`vmatrix*`,`Vmatrix*`],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:[`(`,`)`],bmatrix:[`[`,`]`],Bmatrix:[`\\{`,`\\}`],vmatrix:[`|`,`|`],Vmatrix:[`\\Vert`,`\\Vert`]}[e.envName.replace(`*`,``)],n=`c`,r={hskipBeforeAndAfter:!1,cols:[{type:`align`,align:n}]};if(e.envName.charAt(e.envName.length-1)===`*`){var i=e.parser;if(i.consumeSpaces(),i.fetch().text===`[`){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,`lcr`.indexOf(n)===-1)throw new F(`Expected l or c or r`,i.nextToken);i.consume(),i.consumeSpaces(),i.expect(`]`),i.consume(),r.cols=[{type:`align`,align:n}]}}var a=nm(e.parser,r,rm(e.envName)),o=Math.max(0,...a.body.map(e=>e.length));return a.cols=Array(o).fill({type:`align`,align:n}),t?{type:`leftright`,mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`smallmatrix`],props:{numArgs:0},handler(e){var t=nm(e.parser,{arraystretch:.5},`script`);return t.colSeparationType=`small`,t},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`subarray`],props:{numArgs:1},handler(e,t){var n=(Jf(t[0])?[t[0]]:Kf(t[0],`ordgroup`).body).map(function(e){var t=qf(e).text;if(`lc`.indexOf(t)!==-1)return{type:`align`,align:t};throw new F(`Unknown column alignment: `+t,e)});if(n.length>1)throw new F(`{subarray} can contain only one column`);var r={cols:n,hskipBeforeAndAfter:!1,arraystretch:.5};if(r=nm(e.parser,r,`script`),r.body.length>0&&r.body[0].length>1)throw new F(`{subarray} can contain only one column`);return r},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`cases`,`dcases`,`rcases`,`drcases`],props:{numArgs:0},handler(e){var t=nm(e.parser,{arraystretch:1.2,cols:[{type:`align`,align:`l`,pregap:0,postgap:1},{type:`align`,align:`l`,pregap:0,postgap:0}]},rm(e.envName));return{type:`leftright`,mode:e.mode,body:[t],left:e.envName.indexOf(`r`)>-1?`.`:`\\{`,right:e.envName.indexOf(`r`)>-1?`\\}`:`.`,rightColor:void 0}},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`align`,`align*`,`aligned`,`split`],props:{numArgs:0},handler:sm,htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`gathered`,`gather`,`gather*`],props:{numArgs:0},handler(e){I.contains([`gather`,`gather*`],e.envName)&&em(e);var t={cols:[{type:`align`,align:`c`}],addJot:!0,colSeparationType:`gather`,autoTag:tm(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return nm(e.parser,t,`display`)},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`alignat`,`alignat*`,`alignedat`],props:{numArgs:1},handler:sm,htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`equation`,`equation*`],props:{numArgs:0},handler(e){em(e);var t={autoTag:tm(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return nm(e.parser,t,`display`)},htmlBuilder:im,mathmlBuilder:om}),Zp({type:`array`,names:[`CD`],props:{numArgs:0},handler(e){return em(e),cp(e.parser)},htmlBuilder:im,mathmlBuilder:om}),Z(`\\nonumber`,`\\gdef\\@eqnsw{0}`),Z(`\\notag`,`\\nonumber`),Y({type:`text`,names:[`\\hline`,`\\hdashline`],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new F(e.funcName+` valid only within array environment`)}});var cm=Xp;Y({type:`environment`,names:[`\\begin`,`\\end`],props:{numArgs:1,argTypes:[`text`]},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];if(i.type!==`ordgroup`)throw new F(`Invalid environment name`,i);for(var a=``,o=0;o<i.body.length;++o)a+=Kf(i.body[o],`textord`).text;if(r===`\\begin`){if(!cm.hasOwnProperty(a))throw new F(`No such environment: `+a,i);var s=cm[a],{args:c,optArgs:l}=n.parseArguments(`\\begin{`+a+`}`,s),u={mode:n.mode,envName:a,parser:n},d=s.handler(u,c,l);n.expect(`\\end`,!1);var f=n.nextToken,p=Kf(n.parseFunction(),`environment`);if(p.name!==a)throw new F(`Mismatch: \\begin{`+a+`} matched by \\end{`+p.name+`}`,f);return d}return{type:`environment`,mode:n.mode,name:a,nameGroup:i}}});var lm=(e,t)=>{var n=e.font,r=t.withFont(n);return Cf(e.body,r)},um=(e,t)=>{var n=e.font,r=t.withFont(n);return Ff(e.body,r)},dm={"\\Bbb":`\\mathbb`,"\\bold":`\\mathbf`,"\\frak":`\\mathfrak`,"\\bm":`\\boldsymbol`};Y({type:`font`,names:[`\\mathrm`,`\\mathit`,`\\mathbf`,`\\mathnormal`,`\\mathsfit`,`\\mathbb`,`\\mathcal`,`\\mathfrak`,`\\mathscr`,`\\mathsf`,`\\mathtt`,`\\Bbb`,`\\bold`,`\\frak`],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=uf(t[0]),a=r;return a in dm&&(a=dm[a]),{type:`font`,mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:lm,mathmlBuilder:um}),Y({type:`mclass`,names:[`\\boldsymbol`,`\\bm`],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0],i=I.isCharacterBox(r);return{type:`mclass`,mode:n.mode,mclass:np(r),body:[{type:`font`,mode:n.mode,font:`boldsymbol`,body:r}],isCharacterBox:i}}}),Y({type:`font`,names:[`\\rm`,`\\sf`,`\\tt`,`\\bf`,`\\it`,`\\cal`],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:i}=e,{mode:a}=n,o=n.parseExpression(!0,i);return{type:`font`,mode:a,font:`math`+r.slice(1),body:{type:`ordgroup`,mode:n.mode,body:o}}},htmlBuilder:lm,mathmlBuilder:um});var fm=(e,t)=>{var n=t;return e===`display`?n=n.id>=L.SCRIPT.id?n.text():L.DISPLAY:e===`text`&&n.size===L.DISPLAY.size?n=L.TEXT:e===`script`?n=L.SCRIPT:e===`scriptscript`&&(n=L.SCRIPTSCRIPT),n},pm=(e,t)=>{var n=fm(e.size,t.style),r=n.fracNum(),i=n.fracDen(),a=t.havingStyle(r),o=Cf(e.numer,a,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,c=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<c?c:o.depth}a=t.havingStyle(i);var l=Cf(e.denom,a,t),u,d,f;e.hasBarLine?(e.barSize?(d=Vu(e.barSize,t),u=J.makeLineSpan(`frac-line`,t,d)):u=J.makeLineSpan(`frac-line`,t),d=u.height,f=u.height):(u=null,d=0,f=t.fontMetrics().defaultRuleThickness);var p,m,h;n.size===L.DISPLAY.size||e.size===`display`?(p=t.fontMetrics().num1,m=d>0?3*f:7*f,h=t.fontMetrics().denom1):(d>0?(p=t.fontMetrics().num2,m=f):(p=t.fontMetrics().num3,m=3*f),h=t.fontMetrics().denom2);var g;if(u){var _=t.fontMetrics().axisHeight;p-o.depth-(_+.5*d)<m&&(p+=m-(p-o.depth-(_+.5*d))),_-.5*d-(l.height-h)<m&&(h+=m-(_-.5*d-(l.height-h)));var v=-(_-.5*d);g=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:u,shift:v},{type:`elem`,elem:o,shift:-p}]},t)}else{var y=p-o.depth-(l.height-h);y<m&&(p+=.5*(m-y),h+=.5*(m-y)),g=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:o,shift:-p}]},t)}a=t.havingStyle(n),g.height*=a.sizeMultiplier/t.sizeMultiplier,g.depth*=a.sizeMultiplier/t.sizeMultiplier;var b=n.size===L.DISPLAY.size?t.fontMetrics().delim1:n.size===L.SCRIPTSCRIPT.size?t.havingStyle(L.SCRIPT).fontMetrics().delim2:t.fontMetrics().delim2,x=e.leftDelim==null?Sf(t,[`mopen`]):Up.customSizedDelim(e.leftDelim,b,!0,t.havingStyle(n),e.mode,[`mopen`]),S=e.continued?J.makeSpan([]):e.rightDelim==null?Sf(t,[`mclose`]):Up.customSizedDelim(e.rightDelim,b,!0,t.havingStyle(n),e.mode,[`mclose`]);return J.makeSpan([`mord`].concat(a.sizingClasses(t)),[x,J.makeSpan([`mfrac`],[g]),S],t)},mm=(e,t)=>{var n=new X.MathNode(`mfrac`,[Ff(e.numer,t),Ff(e.denom,t)]);if(!e.hasBarLine)n.setAttribute(`linethickness`,`0px`);else if(e.barSize){var r=Vu(e.barSize,t);n.setAttribute(`linethickness`,R(r))}var i=fm(e.size,t.style);if(i.size!==t.style.size){n=new X.MathNode(`mstyle`,[n]);var a=i.size===L.DISPLAY.size?`true`:`false`;n.setAttribute(`displaystyle`,a),n.setAttribute(`scriptlevel`,`0`)}if(e.leftDelim!=null||e.rightDelim!=null){var o=[];if(e.leftDelim!=null){var s=new X.MathNode(`mo`,[new X.TextNode(e.leftDelim.replace(`\\`,``))]);s.setAttribute(`fence`,`true`),o.push(s)}if(o.push(n),e.rightDelim!=null){var c=new X.MathNode(`mo`,[new X.TextNode(e.rightDelim.replace(`\\`,``))]);c.setAttribute(`fence`,`true`),o.push(c)}return Af(o)}return n};Y({type:`genfrac`,names:[`\\dfrac`,`\\frac`,`\\tfrac`,`\\dbinom`,`\\binom`,`\\tbinom`,`\\\\atopfrac`,`\\\\bracefrac`,`\\\\brackfrac`],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1],o,s=null,c=null,l=`auto`;switch(r){case`\\dfrac`:case`\\frac`:case`\\tfrac`:o=!0;break;case`\\\\atopfrac`:o=!1;break;case`\\dbinom`:case`\\binom`:case`\\tbinom`:o=!1,s=`(`,c=`)`;break;case`\\\\bracefrac`:o=!1,s=`\\{`,c=`\\}`;break;case`\\\\brackfrac`:o=!1,s=`[`,c=`]`;break;default:throw Error(`Unrecognized genfrac command`)}switch(r){case`\\dfrac`:case`\\dbinom`:l=`display`;break;case`\\tfrac`:case`\\tbinom`:l=`text`;break}return{type:`genfrac`,mode:n.mode,continued:!1,numer:i,denom:a,hasBarLine:o,leftDelim:s,rightDelim:c,size:l,barSize:null}},htmlBuilder:pm,mathmlBuilder:mm}),Y({type:`genfrac`,names:[`\\cfrac`],props:{numArgs:2},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1];return{type:`genfrac`,mode:n.mode,continued:!0,numer:i,denom:a,hasBarLine:!0,leftDelim:null,rightDelim:null,size:`display`,barSize:null}}}),Y({type:`infix`,names:[`\\over`,`\\choose`,`\\atop`,`\\brace`,`\\brack`],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,i;switch(n){case`\\over`:i=`\\frac`;break;case`\\choose`:i=`\\binom`;break;case`\\atop`:i=`\\\\atopfrac`;break;case`\\brace`:i=`\\\\bracefrac`;break;case`\\brack`:i=`\\\\brackfrac`;break;default:throw Error(`Unrecognized infix genfrac command`)}return{type:`infix`,mode:t.mode,replaceWith:i,token:r}}});var hm=[`display`,`text`,`script`,`scriptscript`],gm=function(e){var t=null;return e.length>0&&(t=e,t=t===`.`?null:t),t};Y({type:`genfrac`,names:[`\\genfrac`],props:{numArgs:6,allowedInArgument:!0,argTypes:[`math`,`math`,`size`,`text`,`math`,`math`]},handler(e,t){var{parser:n}=e,r=t[4],i=t[5],a=uf(t[0]),o=a.type===`atom`&&a.family===`open`?gm(a.text):null,s=uf(t[1]),c=s.type===`atom`&&s.family===`close`?gm(s.text):null,l=Kf(t[2],`size`),u,d=null;l.isBlank?u=!0:(d=l.value,u=d.number>0);var f=`auto`,p=t[3];if(p.type===`ordgroup`){if(p.body.length>0){var m=Kf(p.body[0],`textord`);f=hm[Number(m.text)]}}else p=Kf(p,`textord`),f=hm[Number(p.text)];return{type:`genfrac`,mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:d,leftDelim:o,rightDelim:c,size:f}},htmlBuilder:pm,mathmlBuilder:mm}),Y({type:`infix`,names:[`\\above`],props:{numArgs:1,argTypes:[`size`],infix:!0},handler(e,t){var{parser:n,funcName:r,token:i}=e;return{type:`infix`,mode:n.mode,replaceWith:`\\\\abovefrac`,size:Kf(t[0],`size`).value,token:i}}}),Y({type:`genfrac`,names:[`\\\\abovefrac`],props:{numArgs:3,argTypes:[`math`,`size`,`math`]},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=Wl(Kf(t[1],`infix`).size),o=t[2],s=a.number>0;return{type:`genfrac`,mode:n.mode,numer:i,denom:o,continued:!1,hasBarLine:s,barSize:a,leftDelim:null,rightDelim:null,size:`auto`}},htmlBuilder:pm,mathmlBuilder:mm});var _m=(e,t)=>{var n=t.style,r,i;e.type===`supsub`?(r=e.sup?Cf(e.sup,t.havingStyle(n.sup()),t):Cf(e.sub,t.havingStyle(n.sub()),t),i=Kf(e.base,`horizBrace`)):i=Kf(e,`horizBrace`);var a=Cf(i.base,t.havingBaseStyle(L.DISPLAY)),o=Gf.svgSpan(i,t),s;if(i.isOver?(s=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:.1},{type:`elem`,elem:o}]},t),s.children[0].children[0].children[1].classes.push(`svg-align`)):(s=J.makeVList({positionType:`bottom`,positionData:a.depth+.1+o.height,children:[{type:`elem`,elem:o},{type:`kern`,size:.1},{type:`elem`,elem:a}]},t),s.children[0].children[0].children[0].classes.push(`svg-align`)),r){var c=J.makeSpan([`mord`,i.isOver?`mover`:`munder`],[s],t);s=i.isOver?J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:c},{type:`kern`,size:.2},{type:`elem`,elem:r}]},t):J.makeVList({positionType:`bottom`,positionData:c.depth+.2+r.height+r.depth,children:[{type:`elem`,elem:r},{type:`kern`,size:.2},{type:`elem`,elem:c}]},t)}return J.makeSpan([`mord`,i.isOver?`mover`:`munder`],[s],t)};Y({type:`horizBrace`,names:[`\\overbrace`,`\\underbrace`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`horizBrace`,mode:n.mode,label:r,isOver:/^\\over/.test(r),base:t[0]}},htmlBuilder:_m,mathmlBuilder:(e,t)=>{var n=Gf.mathMLnode(e.label);return new X.MathNode(e.isOver?`mover`:`munder`,[Ff(e.base,t),n])}}),Y({type:`href`,names:[`\\href`],props:{numArgs:2,argTypes:[`url`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],i=Kf(t[0],`url`).url;return n.settings.isTrusted({command:`\\href`,url:i})?{type:`href`,mode:n.mode,href:i,body:df(r)}:n.formatUnsupportedCmd(`\\href`)},htmlBuilder:(e,t)=>{var n=_f(e.body,t,!1);return J.makeAnchor(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=Pf(e.body,t);return n instanceof Df||(n=new Df(`mrow`,[n])),n.setAttribute(`href`,e.href),n}}),Y({type:`href`,names:[`\\url`],props:{numArgs:1,argTypes:[`url`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=Kf(t[0],`url`).url;if(!n.settings.isTrusted({command:`\\url`,url:r}))return n.formatUnsupportedCmd(`\\url`);for(var i=[],a=0;a<r.length;a++){var o=r[a];o===`~`&&(o=`\\textasciitilde`),i.push({type:`textord`,mode:`text`,text:o})}var s={type:`text`,mode:n.mode,font:`\\texttt`,body:i};return{type:`href`,mode:n.mode,href:r,body:df(s)}}}),Y({type:`hbox`,names:[`\\hbox`],props:{numArgs:1,argTypes:[`text`],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:`hbox`,mode:n.mode,body:df(t[0])}},htmlBuilder(e,t){var n=_f(e.body,t,!1);return J.makeFragment(n)},mathmlBuilder(e,t){return new X.MathNode(`mrow`,Nf(e.body,t))}}),Y({type:`html`,names:[`\\htmlClass`,`\\htmlId`,`\\htmlStyle`,`\\htmlData`],props:{numArgs:2,argTypes:[`raw`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:i}=e,a=Kf(t[0],`raw`).string,o=t[1];n.settings.strict&&n.settings.reportNonstrict(`htmlExtension`,`HTML extension is disabled on strict mode`);var s,c={};switch(r){case`\\htmlClass`:c.class=a,s={command:`\\htmlClass`,class:a};break;case`\\htmlId`:c.id=a,s={command:`\\htmlId`,id:a};break;case`\\htmlStyle`:c.style=a,s={command:`\\htmlStyle`,style:a};break;case`\\htmlData`:for(var l=a.split(`,`),u=0;u<l.length;u++){var d=l[u].split(`=`);if(d.length!==2)throw new F(`Error parsing key-value for \\htmlData`);c[`data-`+d[0].trim()]=d[1].trim()}s={command:`\\htmlData`,attributes:c};break;default:throw Error(`Unrecognized html command`)}return n.settings.isTrusted(s)?{type:`html`,mode:n.mode,attributes:c,body:df(o)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=_f(e.body,t,!1),r=[`enclosing`];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=J.makeSpan(r,n,t);for(var a in e.attributes)a!==`class`&&e.attributes.hasOwnProperty(a)&&i.setAttribute(a,e.attributes[a]);return i},mathmlBuilder:(e,t)=>Pf(e.body,t)}),Y({type:`htmlmathml`,names:[`\\html@mathml`],props:{numArgs:2,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`htmlmathml`,mode:n.mode,html:df(t[0]),mathml:df(t[1])}},htmlBuilder:(e,t)=>{var n=_f(e.html,t,!1);return J.makeFragment(n)},mathmlBuilder:(e,t)=>Pf(e.mathml,t)});var vm=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:`bp`};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new F(`Invalid size: '`+e+`' in \\includegraphics`);var n={number:+(t[1]+t[2]),unit:t[3]};if(!Bu(n))throw new F(`Invalid unit: '`+n.unit+`' in \\includegraphics.`);return n};Y({type:`includegraphics`,names:[`\\includegraphics`],props:{numArgs:1,numOptionalArgs:1,argTypes:[`raw`,`url`],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,i={number:0,unit:`em`},a={number:.9,unit:`em`},o={number:0,unit:`em`},s=``;if(n[0])for(var c=Kf(n[0],`raw`).string.split(`,`),l=0;l<c.length;l++){var u=c[l].split(`=`);if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case`alt`:s=d;break;case`width`:i=vm(d);break;case`height`:a=vm(d);break;case`totalheight`:o=vm(d);break;default:throw new F(`Invalid key: '`+u[0]+`' in \\includegraphics.`)}}}var f=Kf(t[0],`url`).url;return s===``&&(s=f,s=s.replace(/^.*[\\/]/,``),s=s.substring(0,s.lastIndexOf(`.`))),r.settings.isTrusted({command:`\\includegraphics`,url:f})?{type:`includegraphics`,mode:r.mode,alt:s,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd(`\\includegraphics`)},htmlBuilder:(e,t)=>{var n=Vu(e.height,t),r=0;e.totalheight.number>0&&(r=Vu(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=Vu(e.width,t));var a={height:R(n+r)};i>0&&(a.width=R(i)),r>0&&(a.verticalAlign=R(-r));var o=new Yu(e.src,e.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(e,t)=>{var n=new X.MathNode(`mglyph`,[]);n.setAttribute(`alt`,e.alt);var r=Vu(e.height,t),i=0;if(e.totalheight.number>0&&(i=Vu(e.totalheight,t)-r,n.setAttribute(`valign`,R(-i))),n.setAttribute(`height`,R(r+i)),e.width.number>0){var a=Vu(e.width,t);n.setAttribute(`width`,R(a))}return n.setAttribute(`src`,e.src),n}}),Y({type:`kern`,names:[`\\kern`,`\\mkern`,`\\hskip`,`\\mskip`],props:{numArgs:1,argTypes:[`size`],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=Kf(t[0],`size`);if(n.settings.strict){var a=r[1]===`m`,o=i.value.unit===`mu`;a?(o||n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` supports only mu units, `+(`not `+i.value.unit+` units`)),n.mode!==`math`&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` works only in math mode`)):o&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` doesn't support mu units`)}return{type:`kern`,mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return J.makeGlue(e.dimension,t)},mathmlBuilder(e,t){var n=Vu(e.dimension,t);return new X.SpaceNode(n)}}),Y({type:`lap`,names:[`\\mathllap`,`\\mathrlap`,`\\mathclap`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`lap`,mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment===`clap`?(n=J.makeSpan([],[Cf(e.body,t)]),n=J.makeSpan([`inner`],[n],t)):n=J.makeSpan([`inner`],[Cf(e.body,t)]);var r=J.makeSpan([`fix`],[]),i=J.makeSpan([e.alignment],[n,r],t),a=J.makeSpan([`strut`]);return a.style.height=R(i.height+i.depth),i.depth&&(a.style.verticalAlign=R(-i.depth)),i.children.unshift(a),i=J.makeSpan([`thinbox`],[i],t),J.makeSpan([`mord`,`vbox`],[i],t)},mathmlBuilder:(e,t)=>{var n=new X.MathNode(`mpadded`,[Ff(e.body,t)]);if(e.alignment!==`rlap`){var r=e.alignment===`llap`?`-1`:`-0.5`;n.setAttribute(`lspace`,r+`width`)}return n.setAttribute(`width`,`0px`),n}}),Y({type:`styling`,names:[`\\(`,`$`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,i=r.mode;r.switchMode(`math`);var a=n===`\\(`?`\\)`:`$`,o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:`styling`,mode:r.mode,style:`text`,body:o}}}),Y({type:`text`,names:[`\\)`,`\\]`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new F(`Mismatched `+e.funcName)}});var ym=(e,t)=>{switch(t.style.size){case L.DISPLAY.size:return e.display;case L.TEXT.size:return e.text;case L.SCRIPT.size:return e.script;case L.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Y({type:`mathchoice`,names:[`\\mathchoice`],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`mathchoice`,mode:n.mode,display:df(t[0]),text:df(t[1]),script:df(t[2]),scriptscript:df(t[3])}},htmlBuilder:(e,t)=>{var n=_f(ym(e,t),t,!1);return J.makeFragment(n)},mathmlBuilder:(e,t)=>Pf(ym(e,t),t)});var bm=(e,t,n,r,i,a,o)=>{e=J.makeSpan([],[e]);var s=n&&I.isCharacterBox(n),c,l;if(t){var u=Cf(t,r.havingStyle(i.sup()),r);l={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(n){var d=Cf(n,r.havingStyle(i.sub()),r);c={elem:d,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-d.height)}}var f;if(l&&c){var p=r.fontMetrics().bigOpSpacing5+c.elem.height+c.elem.depth+c.kern+e.depth+o;f=J.makeVList({positionType:`bottom`,positionData:p,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:R(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:R(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]},r)}else if(c){var m=e.height-o;f=J.makeVList({positionType:`top`,positionData:m,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:R(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e}]},r)}else if(l){var h=e.depth+o;f=J.makeVList({positionType:`bottom`,positionData:h,children:[{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:R(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]},r)}else return e;var g=[f];if(c&&a!==0&&!s){var _=J.makeSpan([`mspace`],[],r);_.style.marginRight=R(a),g.unshift(_)}return J.makeSpan([`mop`,`op-limits`],g,r)},xm=[`\\smallint`],Sm=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=Kf(e.base,`op`),i=!0):a=Kf(e,`op`);var o=t.style,s=!1;o.size===L.DISPLAY.size&&a.symbol&&!I.contains(xm,a.name)&&(s=!0);var c;if(a.symbol){var l=s?`Size2-Regular`:`Size1-Regular`,u=``;if((a.name===`\\oiint`||a.name===`\\oiiint`)&&(u=a.name.slice(1),a.name=u===`oiint`?`\\iint`:`\\iiint`),c=J.makeSymbol(a.name,l,`math`,t,[`mop`,`op-symbol`,s?`large-op`:`small-op`]),u.length>0){var d=c.italic,f=J.staticSvg(u+`Size`+(s?`2`:`1`),t);c=J.makeVList({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:0},{type:`elem`,elem:f,shift:s?.08:0}]},t),a.name=`\\`+u,c.classes.unshift(`mop`),c.italic=d}}else if(a.body){var p=_f(a.body,t,!0);p.length===1&&p[0]instanceof Zu?(c=p[0],c.classes[0]=`mop`):c=J.makeSpan([`mop`],p,t)}else{for(var m=[],h=1;h<a.name.length;h++)m.push(J.mathsym(a.name[h],a.mode,t));c=J.makeSpan([`mop`],m,t)}var g=0,_=0;return(c instanceof Zu||a.name===`\\oiint`||a.name===`\\oiiint`)&&!a.suppressBaseShift&&(g=(c.height-c.depth)/2-t.fontMetrics().axisHeight,_=c.italic),i?bm(c,n,r,t,o,_,g):(g&&(c.style.position=`relative`,c.style.top=R(g)),c)},Cm=(e,t)=>{var n;if(e.symbol)n=new Df(`mo`,[kf(e.name,e.mode)]),I.contains(xm,e.name)&&n.setAttribute(`largeop`,`false`);else if(e.body)n=new Df(`mo`,Nf(e.body,t));else{n=new Df(`mi`,[new Of(e.name.slice(1))]);var r=new Df(`mo`,[kf(`⁡`,`text`)]);n=e.parentIsSupSub?new Df(`mrow`,[n,r]):Ef([n,r])}return n},wm={"∏":`\\prod`,"∐":`\\coprod`,"∑":`\\sum`,"⋀":`\\bigwedge`,"⋁":`\\bigvee`,"⋂":`\\bigcap`,"⋃":`\\bigcup`,"⨀":`\\bigodot`,"⨁":`\\bigoplus`,"⨂":`\\bigotimes`,"⨄":`\\biguplus`,"⨆":`\\bigsqcup`};Y({type:`op`,names:`\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆`.split(`.`),props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=r;return i.length===1&&(i=wm[i]),{type:`op`,mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:Sm,mathmlBuilder:Cm}),Y({type:`op`,names:[`\\mathop`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`op`,mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:df(r)}},htmlBuilder:Sm,mathmlBuilder:Cm});var Tm={"∫":`\\int`,"∬":`\\iint`,"∭":`\\iiint`,"∮":`\\oint`,"∯":`\\oiint`,"∰":`\\oiiint`};Y({type:`op`,names:`\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`),props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Sm,mathmlBuilder:Cm}),Y({type:`op`,names:[`\\det`,`\\gcd`,`\\inf`,`\\lim`,`\\max`,`\\min`,`\\Pr`,`\\sup`],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Sm,mathmlBuilder:Cm}),Y({type:`op`,names:[`\\int`,`\\iint`,`\\iiint`,`\\oint`,`\\oiint`,`\\oiiint`,`∫`,`∬`,`∭`,`∮`,`∯`,`∰`],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=Tm[r]),{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Sm,mathmlBuilder:Cm});var Em=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=Kf(e.base,`operatorname`),i=!0):a=Kf(e,`operatorname`);var o;if(a.body.length>0){for(var s=_f(a.body.map(e=>{var t=e.text;return typeof t==`string`?{type:`textord`,mode:e.mode,text:t}:e}),t.withFont(`mathrm`),!0),c=0;c<s.length;c++){var l=s[c];l instanceof Zu&&(l.text=l.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`))}o=J.makeSpan([`mop`],s,t)}else o=J.makeSpan([`mop`],[],t);return i?bm(o,n,r,t,t.style,0,0):o};Y({type:`operatorname`,names:[`\\operatorname@`,`\\operatornamewithlimits`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`operatorname`,mode:n.mode,body:df(i),alwaysHandleSupSub:r===`\\operatornamewithlimits`,limits:!1,parentIsSupSub:!1}},htmlBuilder:Em,mathmlBuilder:(e,t)=>{for(var n=Nf(e.body,t.withFont(`mathrm`)),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof X.SpaceNode))if(a instanceof X.MathNode)switch(a.type){case`mi`:case`mn`:case`ms`:case`mspace`:case`mtext`:break;case`mo`:var o=a.children[0];a.children.length===1&&o instanceof X.TextNode?o.text=o.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`):r=!1;break;default:r=!1}else r=!1}if(r){var s=n.map(e=>e.toText()).join(``);n=[new X.TextNode(s)]}var c=new X.MathNode(`mi`,n);c.setAttribute(`mathvariant`,`normal`);var l=new X.MathNode(`mo`,[kf(`⁡`,`text`)]);return e.parentIsSupSub?new X.MathNode(`mrow`,[c,l]):X.newDocumentFragment([c,l])}}),Z(`\\operatorname`,`\\@ifstar\\operatornamewithlimits\\operatorname@`),lf({type:`ordgroup`,htmlBuilder(e,t){return e.semisimple?J.makeFragment(_f(e.body,t,!1)):J.makeSpan([`mord`],_f(e.body,t,!0),t)},mathmlBuilder(e,t){return Pf(e.body,t,!0)}}),Y({type:`overline`,names:[`\\overline`],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:`overline`,mode:n.mode,body:r}},htmlBuilder(e,t){var n=Cf(e.body,t.havingCrampedStyle()),r=J.makeLineSpan(`overline-line`,t),i=t.fontMetrics().defaultRuleThickness,a=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:n},{type:`kern`,size:3*i},{type:`elem`,elem:r},{type:`kern`,size:i}]},t);return J.makeSpan([`mord`,`overline`],[a],t)},mathmlBuilder(e,t){var n=new X.MathNode(`mo`,[new X.TextNode(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new X.MathNode(`mover`,[Ff(e.body,t),n]);return r.setAttribute(`accent`,`true`),r}}),Y({type:`phantom`,names:[`\\phantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`phantom`,mode:n.mode,body:df(r)}},htmlBuilder:(e,t)=>{var n=_f(e.body,t.withPhantom(),!1);return J.makeFragment(n)},mathmlBuilder:(e,t)=>{var n=Nf(e.body,t);return new X.MathNode(`mphantom`,n)}}),Y({type:`hphantom`,names:[`\\hphantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`hphantom`,mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=J.makeSpan([],[Cf(e.body,t.withPhantom())]);if(n.height=0,n.depth=0,n.children)for(var r=0;r<n.children.length;r++)n.children[r].height=0,n.children[r].depth=0;return n=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:n}]},t),J.makeSpan([`mord`],[n],t)},mathmlBuilder:(e,t)=>{var n=Nf(df(e.body),t),r=new X.MathNode(`mphantom`,n),i=new X.MathNode(`mpadded`,[r]);return i.setAttribute(`height`,`0px`),i.setAttribute(`depth`,`0px`),i}}),Y({type:`vphantom`,names:[`\\vphantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`vphantom`,mode:n.mode,body:r}},htmlBuilder:(e,t)=>{var n=J.makeSpan([`inner`],[Cf(e.body,t.withPhantom())]),r=J.makeSpan([`fix`],[]);return J.makeSpan([`mord`,`rlap`],[n,r],t)},mathmlBuilder:(e,t)=>{var n=Nf(df(e.body),t),r=new X.MathNode(`mphantom`,n),i=new X.MathNode(`mpadded`,[r]);return i.setAttribute(`width`,`0px`),i}}),Y({type:`raisebox`,names:[`\\raisebox`],props:{numArgs:2,argTypes:[`size`,`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e,r=Kf(t[0],`size`).value,i=t[1];return{type:`raisebox`,mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=Cf(e.body,t),r=Vu(e.dy,t);return J.makeVList({positionType:`shift`,positionData:-r,children:[{type:`elem`,elem:n}]},t)},mathmlBuilder(e,t){var n=new X.MathNode(`mpadded`,[Ff(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute(`voffset`,r),n}}),Y({type:`internal`,names:[`\\relax`],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:`internal`,mode:t.mode}}}),Y({type:`rule`,names:[`\\rule`],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`size`,`size`,`size`]},handler(e,t,n){var{parser:r}=e,i=n[0],a=Kf(t[0],`size`),o=Kf(t[1],`size`);return{type:`rule`,mode:r.mode,shift:i&&Kf(i,`size`).value,width:a.value,height:o.value}},htmlBuilder(e,t){var n=J.makeSpan([`mord`,`rule`],[],t),r=Vu(e.width,t),i=Vu(e.height,t),a=e.shift?Vu(e.shift,t):0;return n.style.borderRightWidth=R(r),n.style.borderTopWidth=R(i),n.style.bottom=R(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=Vu(e.width,t),r=Vu(e.height,t),i=e.shift?Vu(e.shift,t):0,a=t.color&&t.getColor()||`black`,o=new X.MathNode(`mspace`);o.setAttribute(`mathbackground`,a),o.setAttribute(`width`,R(n)),o.setAttribute(`height`,R(r));var s=new X.MathNode(`mpadded`,[o]);return i>=0?s.setAttribute(`height`,R(i)):(s.setAttribute(`height`,R(i)),s.setAttribute(`depth`,R(-i))),s.setAttribute(`voffset`,R(i)),s}});function Dm(e,t,n){for(var r=_f(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf(`sizing`);o<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[o+1]===`reset-size`+t.size&&(r[a].classes[o+1]=`reset-size`+n.size),r[a].height*=i,r[a].depth*=i}return J.makeFragment(r)}var Om=[`\\tiny`,`\\sixptsize`,`\\scriptsize`,`\\footnotesize`,`\\small`,`\\normalsize`,`\\large`,`\\Large`,`\\LARGE`,`\\huge`,`\\Huge`];Y({type:`sizing`,names:Om,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!1,n);return{type:`sizing`,mode:i.mode,size:Om.indexOf(r)+1,body:a}},htmlBuilder:(e,t)=>{var n=t.havingSize(e.size);return Dm(e.body,n,t)},mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=Nf(e.body,n),i=new X.MathNode(`mstyle`,r);return i.setAttribute(`mathsize`,R(n.sizeMultiplier)),i}}),Y({type:`smash`,names:[`\\smash`],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,i=!1,a=!1,o=n[0]&&Kf(n[0],`ordgroup`);if(o)for(var s=``,c=0;c<o.body.length;++c)if(s=o.body[c].text,s===`t`)i=!0;else if(s===`b`)a=!0;else{i=!1,a=!1;break}else i=!0,a=!0;var l=t[0];return{type:`smash`,mode:r.mode,body:l,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=J.makeSpan([],[Cf(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0,n.children))for(var r=0;r<n.children.length;r++)n.children[r].height=0;if(e.smashDepth&&(n.depth=0,n.children))for(var i=0;i<n.children.length;i++)n.children[i].depth=0;var a=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:n}]},t);return J.makeSpan([`mord`],[a],t)},mathmlBuilder:(e,t)=>{var n=new X.MathNode(`mpadded`,[Ff(e.body,t)]);return e.smashHeight&&n.setAttribute(`height`,`0px`),e.smashDepth&&n.setAttribute(`depth`,`0px`),n}}),Y({type:`sqrt`,names:[`\\sqrt`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,i=n[0],a=t[0];return{type:`sqrt`,mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=Cf(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=J.wrapFragment(n,t);var r=t.fontMetrics().defaultRuleThickness,i=r;t.style.id<L.TEXT.id&&(i=t.fontMetrics().xHeight);var a=r+i/4,o=n.height+n.depth+a+r,{span:s,ruleWidth:c,advanceWidth:l}=Up.sqrtImage(o,t),u=s.height-c;u>n.height+n.depth+a&&(a=(a+u-n.height-n.depth)/2);var d=s.height-n.height-a-c;n.style.paddingLeft=R(l);var f=J.makeVList({positionType:`firstBaseline`,children:[{type:`elem`,elem:n,wrapperClasses:[`svg-align`]},{type:`kern`,size:-(n.height+d)},{type:`elem`,elem:s},{type:`kern`,size:c}]},t);if(e.index){var p=t.havingStyle(L.SCRIPTSCRIPT),m=Cf(e.index,p,t),h=.6*(f.height-f.depth),g=J.makeVList({positionType:`shift`,positionData:-h,children:[{type:`elem`,elem:m}]},t),_=J.makeSpan([`root`],[g]);return J.makeSpan([`mord`,`sqrt`],[_,f],t)}else return J.makeSpan([`mord`,`sqrt`],[f],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new X.MathNode(`mroot`,[Ff(n,t),Ff(r,t)]):new X.MathNode(`msqrt`,[Ff(n,t)])}});var km={display:L.DISPLAY,text:L.TEXT,script:L.SCRIPT,scriptscript:L.SCRIPTSCRIPT};Y({type:`styling`,names:[`\\displaystyle`,`\\textstyle`,`\\scriptstyle`,`\\scriptscriptstyle`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);return{type:`styling`,mode:i.mode,style:o,body:a}},htmlBuilder(e,t){var n=km[e.style],r=t.havingStyle(n).withFont(``);return Dm(e.body,r,t)},mathmlBuilder(e,t){var n=km[e.style],r=t.havingStyle(n),i=Nf(e.body,r),a=new X.MathNode(`mstyle`,i),o={display:[`0`,`true`],text:[`0`,`false`],script:[`1`,`false`],scriptscript:[`2`,`false`]}[e.style];return a.setAttribute(`scriptlevel`,o[0]),a.setAttribute(`displaystyle`,o[1]),a}});var Am=function(e,t){var n=e.base;return n?n.type===`op`?n.limits&&(t.style.size===L.DISPLAY.size||n.alwaysHandleSupSub)?Sm:null:n.type===`operatorname`?n.alwaysHandleSupSub&&(t.style.size===L.DISPLAY.size||n.limits)?Em:null:n.type===`accent`?I.isCharacterBox(n.base)?Yf:null:n.type===`horizBrace`&&!e.sub===n.isOver?_m:null:null};lf({type:`supsub`,htmlBuilder(e,t){var n=Am(e,t);if(n)return n(e,t);var{base:r,sup:i,sub:a}=e,o=Cf(r,t),s,c,l=t.fontMetrics(),u=0,d=0,f=r&&I.isCharacterBox(r);if(i){var p=t.havingStyle(t.style.sup());s=Cf(i,p,t),f||(u=o.height-p.fontMetrics().supDrop*p.sizeMultiplier/t.sizeMultiplier)}if(a){var m=t.havingStyle(t.style.sub());c=Cf(a,m,t),f||(d=o.depth+m.fontMetrics().subDrop*m.sizeMultiplier/t.sizeMultiplier)}var h=t.style===L.DISPLAY?l.sup1:t.style.cramped?l.sup3:l.sup2,g=t.sizeMultiplier,_=R(.5/l.ptPerEm/g),v=null;if(c){var y=e.base&&e.base.type===`op`&&e.base.name&&(e.base.name===`\\oiint`||e.base.name===`\\oiiint`);(o instanceof Zu||y)&&(v=R(-o.italic))}var b;if(s&&c){u=Math.max(u,h,s.depth+.25*l.xHeight),d=Math.max(d,l.sub2);var x=4*l.defaultRuleThickness;if(u-s.depth-(c.height-d)<x){d=x-(u-s.depth)+c.height;var S=.8*l.xHeight-(u-s.depth);S>0&&(u+=S,d-=S)}var C=[{type:`elem`,elem:c,shift:d,marginRight:_,marginLeft:v},{type:`elem`,elem:s,shift:-u,marginRight:_}];b=J.makeVList({positionType:`individualShift`,children:C},t)}else if(c){d=Math.max(d,l.sub1,c.height-.8*l.xHeight);var w=[{type:`elem`,elem:c,marginLeft:v,marginRight:_}];b=J.makeVList({positionType:`shift`,positionData:d,children:w},t)}else if(s)u=Math.max(u,h,s.depth+.25*l.xHeight),b=J.makeVList({positionType:`shift`,positionData:-u,children:[{type:`elem`,elem:s,marginRight:_}]},t);else throw Error(`supsub must have either sup or sub.`);var T=xf(o,`right`)||`mord`;return J.makeSpan([T],[o,J.makeSpan([`msupsub`],[b])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type===`horizBrace`&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type===`op`||e.base.type===`operatorname`)&&(e.base.parentIsSupSub=!0);var a=[Ff(e.base,t)];e.sub&&a.push(Ff(e.sub,t)),e.sup&&a.push(Ff(e.sup,t));var o;if(n)o=r?`mover`:`munder`;else if(!e.sub){var s=e.base;o=s&&s.type===`op`&&s.limits&&(t.style===L.DISPLAY||s.alwaysHandleSupSub)||s&&s.type===`operatorname`&&s.alwaysHandleSupSub&&(s.limits||t.style===L.DISPLAY)?`mover`:`msup`}else if(e.sup){var c=e.base;o=c&&c.type===`op`&&c.limits&&t.style===L.DISPLAY||c&&c.type===`operatorname`&&c.alwaysHandleSupSub&&(t.style===L.DISPLAY||c.limits)?`munderover`:`msubsup`}else{var l=e.base;o=l&&l.type===`op`&&l.limits&&(t.style===L.DISPLAY||l.alwaysHandleSupSub)||l&&l.type===`operatorname`&&l.alwaysHandleSupSub&&(l.limits||t.style===L.DISPLAY)?`munder`:`msub`}return new X.MathNode(o,a)}}),lf({type:`atom`,htmlBuilder(e,t){return J.mathsym(e.text,e.mode,t,[`m`+e.family])},mathmlBuilder(e,t){var n=new X.MathNode(`mo`,[kf(e.text,e.mode)]);if(e.family===`bin`){var r=jf(e,t);r===`bold-italic`&&n.setAttribute(`mathvariant`,r)}else e.family===`punct`?n.setAttribute(`separator`,`true`):(e.family===`open`||e.family===`close`)&&n.setAttribute(`stretchy`,`false`);return n}});var jm={mi:`italic`,mn:`normal`,mtext:`normal`};lf({type:`mathord`,htmlBuilder(e,t){return J.makeOrd(e,t,`mathord`)},mathmlBuilder(e,t){var n=new X.MathNode(`mi`,[kf(e.text,e.mode,t)]),r=jf(e,t)||`italic`;return r!==jm[n.type]&&n.setAttribute(`mathvariant`,r),n}}),lf({type:`textord`,htmlBuilder(e,t){return J.makeOrd(e,t,`textord`)},mathmlBuilder(e,t){var n=kf(e.text,e.mode,t),r=jf(e,t)||`normal`,i=e.mode===`text`?new X.MathNode(`mtext`,[n]):/[0-9]/.test(e.text)?new X.MathNode(`mn`,[n]):e.text===`\\prime`?new X.MathNode(`mo`,[n]):new X.MathNode(`mi`,[n]);return r!==jm[i.type]&&i.setAttribute(`mathvariant`,r),i}});var Mm={"\\nobreak":`nobreak`,"\\allowbreak":`allowbreak`},Nm={" ":{},"\\ ":{},"~":{className:`nobreak`},"\\space":{},"\\nobreakspace":{className:`nobreak`}};lf({type:`spacing`,htmlBuilder(e,t){if(Nm.hasOwnProperty(e.text)){var n=Nm[e.text].className||``;if(e.mode===`text`){var r=J.makeOrd(e,t,`textord`);return r.classes.push(n),r}else return J.makeSpan([`mspace`,n],[J.mathsym(e.text,e.mode,t)],t)}else if(Mm.hasOwnProperty(e.text))return J.makeSpan([`mspace`,Mm[e.text]],[],t);else throw new F(`Unknown type of space "`+e.text+`"`)},mathmlBuilder(e,t){var n;if(Nm.hasOwnProperty(e.text))n=new X.MathNode(`mtext`,[new X.TextNode(`\xA0`)]);else if(Mm.hasOwnProperty(e.text))return new X.MathNode(`mspace`);else throw new F(`Unknown type of space "`+e.text+`"`);return n}});var Pm=()=>{var e=new X.MathNode(`mtd`,[]);return e.setAttribute(`width`,`50%`),e};lf({type:`tag`,mathmlBuilder(e,t){var n=new X.MathNode(`mtable`,[new X.MathNode(`mtr`,[Pm(),new X.MathNode(`mtd`,[Pf(e.body,t)]),Pm(),new X.MathNode(`mtd`,[Pf(e.tag,t)])])]);return n.setAttribute(`width`,`100%`),n}});var Fm={"\\text":void 0,"\\textrm":`textrm`,"\\textsf":`textsf`,"\\texttt":`texttt`,"\\textnormal":`textrm`},Im={"\\textbf":`textbf`,"\\textmd":`textmd`},Lm={"\\textit":`textit`,"\\textup":`textup`},Rm=(e,t)=>{var n=e.font;return n?Fm[n]?t.withTextFontFamily(Fm[n]):Im[n]?t.withTextFontWeight(Im[n]):n===`\\emph`?t.fontShape===`textit`?t.withTextFontShape(`textup`):t.withTextFontShape(`textit`):t.withTextFontShape(Lm[n]):t};Y({type:`text`,names:[`\\text`,`\\textrm`,`\\textsf`,`\\texttt`,`\\textnormal`,`\\textbf`,`\\textmd`,`\\textit`,`\\textup`,`\\emph`],props:{numArgs:1,argTypes:[`text`],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`text`,mode:n.mode,body:df(i),font:r}},htmlBuilder(e,t){var n=Rm(e,t),r=_f(e.body,n,!0);return J.makeSpan([`mord`,`text`],r,n)},mathmlBuilder(e,t){var n=Rm(e,t);return Pf(e.body,n)}}),Y({type:`underline`,names:[`\\underline`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`underline`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Cf(e.body,t),r=J.makeLineSpan(`underline-line`,t),i=t.fontMetrics().defaultRuleThickness,a=J.makeVList({positionType:`top`,positionData:n.height,children:[{type:`kern`,size:i},{type:`elem`,elem:r},{type:`kern`,size:3*i},{type:`elem`,elem:n}]},t);return J.makeSpan([`mord`,`underline`],[a],t)},mathmlBuilder(e,t){var n=new X.MathNode(`mo`,[new X.TextNode(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new X.MathNode(`munder`,[Ff(e.body,t),n]);return r.setAttribute(`accentunder`,`true`),r}}),Y({type:`vcenter`,names:[`\\vcenter`],props:{numArgs:1,argTypes:[`original`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`vcenter`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Cf(e.body,t),r=t.fontMetrics().axisHeight,i=.5*(n.height-r-(n.depth+r));return J.makeVList({positionType:`shift`,positionData:i,children:[{type:`elem`,elem:n}]},t)},mathmlBuilder(e,t){return new X.MathNode(`mpadded`,[Ff(e.body,t)],[`vcenter`])}}),Y({type:`verb`,names:[`\\verb`],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new F(`\\verb ended by end of line instead of matching delimiter`)},htmlBuilder(e,t){for(var n=zm(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var o=n[a];o===`~`&&(o=`\\textasciitilde`),r.push(J.makeSymbol(o,`Typewriter-Regular`,e.mode,i,[`mord`,`texttt`]))}return J.makeSpan([`mord`,`text`].concat(i.sizingClasses(t)),J.tryCombineChars(r),i)},mathmlBuilder(e,t){var n=new X.TextNode(zm(e)),r=new X.MathNode(`mtext`,[n]);return r.setAttribute(`mathvariant`,`monospace`),r}});var zm=e=>e.body.replace(/ /g,e.star?`␣`:`\xA0`),Bm=of,Vm=`[ \r
	]`,Hm=`\\\\[a-zA-Z@]+`,Um=`\\\\[^\ud800-\udfff]`,Wm=`(`+Hm+`)`+Vm+`*`,Gm=`\\\\(
|[ \r	]+
?)[ \r	]*`,Km=`[̀-ͯ]`,qm=RegExp(Km+`+$`),Jm=`(`+Vm+`+)|`+(Gm+`|`)+`([!-\\[\\]-‧‪-퟿豈-￿]`+(Km+`*`)+`|[\ud800-\udbff][\udc00-\udfff]`+(Km+`*`)+`|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5`+(`|`+Wm)+(`|`+Um+`)`),Ym=class{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(Jm,`g`),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Pl(`EOF`,new Nl(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new F(`Unexpected character: '`+e[t]+`'`,new Pl(e[t],new Nl(this,t,t+1)));var r=n[6]||n[3]||(n[2]?`\\ `:` `);if(this.catcodes[r]===14){var i=e.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict(`commentAtEnd`,`% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`)):this.tokenRegex.lastIndex=i+1,this.lex()}return new Pl(r,new Nl(this,t,this.tokenRegex.lastIndex))}},Xm=class{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new F(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(e)&&(i[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}},Zm=Qp;Z(`\\noexpand`,function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}}),Z(`\\expandafter`,function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}}),Z(`\\@firstoftwo`,function(e){return{tokens:e.consumeArgs(2)[0],numArgs:0}}),Z(`\\@secondoftwo`,function(e){return{tokens:e.consumeArgs(2)[1],numArgs:0}}),Z(`\\@ifnextchar`,function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}}),Z(`\\@ifstar`,`\\@ifnextchar *{\\@firstoftwo{#1}}`),Z(`\\TextOrMath`,function(e){var t=e.consumeArgs(2);return e.mode===`text`?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Qm={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};Z(`\\char`,function(e){var t=e.popToken(),n,r=``;if(t.text===`'`)n=8,t=e.popToken();else if(t.text===`"`)n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]===`\\`)r=t.text.charCodeAt(1);else if(t.text===`EOF`)throw new F("\\char` missing argument");else r=t.text.charCodeAt(0);else n=10;if(n){if(r=Qm[t.text],r==null||r>=n)throw new F(`Invalid base-`+n+` digit `+t.text);for(var i;(i=Qm[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return`\\@char{`+r+`}`});var $m=(e,t,n,r)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new F(`\\newcommand's first argument must be a macro name`);var a=i[0].text,o=e.isDefined(a);if(o&&!t)throw new F(`\\newcommand{`+a+`} attempting to redefine `+(a+`; use \\renewcommand`));if(!o&&!n)throw new F(`\\renewcommand{`+a+`} when command `+a+` does not yet exist; use \\newcommand`);var s=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text===`[`){for(var c=``,l=e.expandNextToken();l.text!==`]`&&l.text!==`EOF`;)c+=l.text,l=e.expandNextToken();if(!c.match(/^\s*[0-9]+\s*$/))throw new F(`Invalid number of arguments: `+c);s=parseInt(c),i=e.consumeArg().tokens}return o&&r||e.macros.set(a,{tokens:i,numArgs:s}),``};Z(`\\newcommand`,e=>$m(e,!1,!0,!1)),Z(`\\renewcommand`,e=>$m(e,!0,!1,!1)),Z(`\\providecommand`,e=>$m(e,!0,!0,!0)),Z(`\\message`,e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(e=>e.text).join(``)),``}),Z(`\\errmessage`,e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(e=>e.text).join(``)),``}),Z(`\\show`,e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),Bm[n],ad.math[n],ad.text[n]),``}),Z(`\\bgroup`,`{`),Z(`\\egroup`,`}`),Z(`~`,`\\nobreakspace`),Z(`\\lq`,"`"),Z(`\\rq`,`'`),Z(`\\aa`,`\\r a`),Z(`\\AA`,`\\r A`),Z(`\\textcopyright`,"\\html@mathml{\\textcircled{c}}{\\char`©}"),Z(`\\copyright`,`\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`),Z(`\\textregistered`,"\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),Z(`ℬ`,`\\mathscr{B}`),Z(`ℰ`,`\\mathscr{E}`),Z(`ℱ`,`\\mathscr{F}`),Z(`ℋ`,`\\mathscr{H}`),Z(`ℐ`,`\\mathscr{I}`),Z(`ℒ`,`\\mathscr{L}`),Z(`ℳ`,`\\mathscr{M}`),Z(`ℛ`,`\\mathscr{R}`),Z(`ℭ`,`\\mathfrak{C}`),Z(`ℌ`,`\\mathfrak{H}`),Z(`ℨ`,`\\mathfrak{Z}`),Z(`\\Bbbk`,`\\Bbb{k}`),Z(`·`,`\\cdotp`),Z(`\\llap`,`\\mathllap{\\textrm{#1}}`),Z(`\\rlap`,`\\mathrlap{\\textrm{#1}}`),Z(`\\clap`,`\\mathclap{\\textrm{#1}}`),Z(`\\mathstrut`,`\\vphantom{(}`),Z(`\\underbar`,`\\underline{\\text{#1}}`),Z(`\\not`,`\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}`),Z(`\\neq`,"\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),Z(`\\ne`,`\\neq`),Z(`≠`,`\\neq`),Z(`\\notin`,"\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),Z(`∉`,`\\notin`),Z(`≘`,"\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),Z(`≙`,"\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),Z(`≚`,"\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),Z(`≛`,"\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),Z(`≝`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),Z(`≞`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),Z(`≟`,"\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),Z(`⟂`,`\\perp`),Z(`‼`,`\\mathclose{!\\mkern-0.8mu!}`),Z(`∌`,`\\notni`),Z(`⌜`,`\\ulcorner`),Z(`⌝`,`\\urcorner`),Z(`⌞`,`\\llcorner`),Z(`⌟`,`\\lrcorner`),Z(`©`,`\\copyright`),Z(`®`,`\\textregistered`),Z(`️`,`\\textregistered`),Z(`\\ulcorner`,`\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`),Z(`\\urcorner`,`\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`),Z(`\\llcorner`,`\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`),Z(`\\lrcorner`,`\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`),Z(`\\vdots`,`{\\varvdots\\rule{0pt}{15pt}}`),Z(`⋮`,`\\vdots`),Z(`\\varGamma`,`\\mathit{\\Gamma}`),Z(`\\varDelta`,`\\mathit{\\Delta}`),Z(`\\varTheta`,`\\mathit{\\Theta}`),Z(`\\varLambda`,`\\mathit{\\Lambda}`),Z(`\\varXi`,`\\mathit{\\Xi}`),Z(`\\varPi`,`\\mathit{\\Pi}`),Z(`\\varSigma`,`\\mathit{\\Sigma}`),Z(`\\varUpsilon`,`\\mathit{\\Upsilon}`),Z(`\\varPhi`,`\\mathit{\\Phi}`),Z(`\\varPsi`,`\\mathit{\\Psi}`),Z(`\\varOmega`,`\\mathit{\\Omega}`),Z(`\\substack`,`\\begin{subarray}{c}#1\\end{subarray}`),Z(`\\colon`,`\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`),Z(`\\boxed`,`\\fbox{$\\displaystyle{#1}$}`),Z(`\\iff`,`\\DOTSB\\;\\Longleftrightarrow\\;`),Z(`\\implies`,`\\DOTSB\\;\\Longrightarrow\\;`),Z(`\\impliedby`,`\\DOTSB\\;\\Longleftarrow\\;`),Z(`\\dddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`),Z(`\\ddddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);var eh={",":`\\dotsc`,"\\not":`\\dotsb`,"+":`\\dotsb`,"=":`\\dotsb`,"<":`\\dotsb`,">":`\\dotsb`,"-":`\\dotsb`,"*":`\\dotsb`,":":`\\dotsb`,"\\DOTSB":`\\dotsb`,"\\coprod":`\\dotsb`,"\\bigvee":`\\dotsb`,"\\bigwedge":`\\dotsb`,"\\biguplus":`\\dotsb`,"\\bigcap":`\\dotsb`,"\\bigcup":`\\dotsb`,"\\prod":`\\dotsb`,"\\sum":`\\dotsb`,"\\bigotimes":`\\dotsb`,"\\bigoplus":`\\dotsb`,"\\bigodot":`\\dotsb`,"\\bigsqcup":`\\dotsb`,"\\And":`\\dotsb`,"\\longrightarrow":`\\dotsb`,"\\Longrightarrow":`\\dotsb`,"\\longleftarrow":`\\dotsb`,"\\Longleftarrow":`\\dotsb`,"\\longleftrightarrow":`\\dotsb`,"\\Longleftrightarrow":`\\dotsb`,"\\mapsto":`\\dotsb`,"\\longmapsto":`\\dotsb`,"\\hookrightarrow":`\\dotsb`,"\\doteq":`\\dotsb`,"\\mathbin":`\\dotsb`,"\\mathrel":`\\dotsb`,"\\relbar":`\\dotsb`,"\\Relbar":`\\dotsb`,"\\xrightarrow":`\\dotsb`,"\\xleftarrow":`\\dotsb`,"\\DOTSI":`\\dotsi`,"\\int":`\\dotsi`,"\\oint":`\\dotsi`,"\\iint":`\\dotsi`,"\\iiint":`\\dotsi`,"\\iiiint":`\\dotsi`,"\\idotsint":`\\dotsi`,"\\DOTSX":`\\dotsx`};Z(`\\dots`,function(e){var t=`\\dotso`,n=e.expandAfterFuture().text;return n in eh?t=eh[n]:(n.slice(0,4)===`\\not`||n in ad.math&&I.contains([`bin`,`rel`],ad.math[n].group))&&(t=`\\dotsb`),t});var th={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};Z(`\\dotso`,function(e){return e.future().text in th?`\\ldots\\,`:`\\ldots`}),Z(`\\dotsc`,function(e){var t=e.future().text;return t in th&&t!==`,`?`\\ldots\\,`:`\\ldots`}),Z(`\\cdots`,function(e){return e.future().text in th?`\\@cdots\\,`:`\\@cdots`}),Z(`\\dotsb`,`\\cdots`),Z(`\\dotsm`,`\\cdots`),Z(`\\dotsi`,`\\!\\cdots`),Z(`\\dotsx`,`\\ldots\\,`),Z(`\\DOTSI`,`\\relax`),Z(`\\DOTSB`,`\\relax`),Z(`\\DOTSX`,`\\relax`),Z(`\\tmspace`,`\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`),Z(`\\,`,`\\tmspace+{3mu}{.1667em}`),Z(`\\thinspace`,`\\,`),Z(`\\>`,`\\mskip{4mu}`),Z(`\\:`,`\\tmspace+{4mu}{.2222em}`),Z(`\\medspace`,`\\:`),Z(`\\;`,`\\tmspace+{5mu}{.2777em}`),Z(`\\thickspace`,`\\;`),Z(`\\!`,`\\tmspace-{3mu}{.1667em}`),Z(`\\negthinspace`,`\\!`),Z(`\\negmedspace`,`\\tmspace-{4mu}{.2222em}`),Z(`\\negthickspace`,`\\tmspace-{5mu}{.277em}`),Z(`\\enspace`,`\\kern.5em `),Z(`\\enskip`,`\\hskip.5em\\relax`),Z(`\\quad`,`\\hskip1em\\relax`),Z(`\\qquad`,`\\hskip2em\\relax`),Z(`\\tag`,`\\@ifstar\\tag@literal\\tag@paren`),Z(`\\tag@paren`,`\\tag@literal{({#1})}`),Z(`\\tag@literal`,e=>{if(e.macros.get(`\\df@tag`))throw new F(`Multiple \\tag`);return`\\gdef\\df@tag{\\text{#1}}`}),Z(`\\bmod`,`\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`),Z(`\\pod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`),Z(`\\pmod`,`\\pod{{\\rm mod}\\mkern6mu#1}`),Z(`\\mod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`),Z(`\\newline`,`\\\\\\relax`),Z(`\\TeX`,`\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);var nh=R(Du[`Main-Regular`][84][1]-.7*Du[`Main-Regular`][65][1]);Z(`\\LaTeX`,`\\textrm{\\html@mathml{`+(`L\\kern-.36em\\raisebox{`+nh+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{LaTeX}}`),Z(`\\KaTeX`,`\\textrm{\\html@mathml{`+(`K\\kern-.17em\\raisebox{`+nh+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{KaTeX}}`),Z(`\\hspace`,`\\@ifstar\\@hspacer\\@hspace`),Z(`\\@hspace`,`\\hskip #1\\relax`),Z(`\\@hspacer`,`\\rule{0pt}{0pt}\\hskip #1\\relax`),Z(`\\ordinarycolon`,`:`),Z(`\\vcentcolon`,`\\mathrel{\\mathop\\ordinarycolon}`),Z(`\\dblcolon`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`),Z(`\\coloneqq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`),Z(`\\Coloneqq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`),Z(`\\coloneq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`),Z(`\\Coloneq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`),Z(`\\eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`),Z(`\\Eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`),Z(`\\eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`),Z(`\\Eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`),Z(`\\colonapprox`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`),Z(`\\Colonapprox`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`),Z(`\\colonsim`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`),Z(`\\Colonsim`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`),Z(`∷`,`\\dblcolon`),Z(`∹`,`\\eqcolon`),Z(`≔`,`\\coloneqq`),Z(`≕`,`\\eqqcolon`),Z(`⩴`,`\\Coloneqq`),Z(`\\ratio`,`\\vcentcolon`),Z(`\\coloncolon`,`\\dblcolon`),Z(`\\colonequals`,`\\coloneqq`),Z(`\\coloncolonequals`,`\\Coloneqq`),Z(`\\equalscolon`,`\\eqqcolon`),Z(`\\equalscoloncolon`,`\\Eqqcolon`),Z(`\\colonminus`,`\\coloneq`),Z(`\\coloncolonminus`,`\\Coloneq`),Z(`\\minuscolon`,`\\eqcolon`),Z(`\\minuscoloncolon`,`\\Eqcolon`),Z(`\\coloncolonapprox`,`\\Colonapprox`),Z(`\\coloncolonsim`,`\\Colonsim`),Z(`\\simcolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),Z(`\\simcoloncolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`),Z(`\\approxcolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),Z(`\\approxcoloncolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`),Z(`\\notni`,"\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),Z(`\\limsup`,`\\DOTSB\\operatorname*{lim\\,sup}`),Z(`\\liminf`,`\\DOTSB\\operatorname*{lim\\,inf}`),Z(`\\injlim`,`\\DOTSB\\operatorname*{inj\\,lim}`),Z(`\\projlim`,`\\DOTSB\\operatorname*{proj\\,lim}`),Z(`\\varlimsup`,`\\DOTSB\\operatorname*{\\overline{lim}}`),Z(`\\varliminf`,`\\DOTSB\\operatorname*{\\underline{lim}}`),Z(`\\varinjlim`,`\\DOTSB\\operatorname*{\\underrightarrow{lim}}`),Z(`\\varprojlim`,`\\DOTSB\\operatorname*{\\underleftarrow{lim}}`),Z(`\\gvertneqq`,`\\html@mathml{\\@gvertneqq}{≩}`),Z(`\\lvertneqq`,`\\html@mathml{\\@lvertneqq}{≨}`),Z(`\\ngeqq`,`\\html@mathml{\\@ngeqq}{≱}`),Z(`\\ngeqslant`,`\\html@mathml{\\@ngeqslant}{≱}`),Z(`\\nleqq`,`\\html@mathml{\\@nleqq}{≰}`),Z(`\\nleqslant`,`\\html@mathml{\\@nleqslant}{≰}`),Z(`\\nshortmid`,`\\html@mathml{\\@nshortmid}{∤}`),Z(`\\nshortparallel`,`\\html@mathml{\\@nshortparallel}{∦}`),Z(`\\nsubseteqq`,`\\html@mathml{\\@nsubseteqq}{⊈}`),Z(`\\nsupseteqq`,`\\html@mathml{\\@nsupseteqq}{⊉}`),Z(`\\varsubsetneq`,`\\html@mathml{\\@varsubsetneq}{⊊}`),Z(`\\varsubsetneqq`,`\\html@mathml{\\@varsubsetneqq}{⫋}`),Z(`\\varsupsetneq`,`\\html@mathml{\\@varsupsetneq}{⊋}`),Z(`\\varsupsetneqq`,`\\html@mathml{\\@varsupsetneqq}{⫌}`),Z(`\\imath`,`\\html@mathml{\\@imath}{ı}`),Z(`\\jmath`,`\\html@mathml{\\@jmath}{ȷ}`),Z(`\\llbracket`,"\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),Z(`\\rrbracket`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),Z(`⟦`,`\\llbracket`),Z(`⟧`,`\\rrbracket`),Z(`\\lBrace`,"\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),Z(`\\rBrace`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),Z(`⦃`,`\\lBrace`),Z(`⦄`,`\\rBrace`),Z(`\\minuso`,"\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),Z(`⦵`,`\\minuso`),Z(`\\darr`,`\\downarrow`),Z(`\\dArr`,`\\Downarrow`),Z(`\\Darr`,`\\Downarrow`),Z(`\\lang`,`\\langle`),Z(`\\rang`,`\\rangle`),Z(`\\uarr`,`\\uparrow`),Z(`\\uArr`,`\\Uparrow`),Z(`\\Uarr`,`\\Uparrow`),Z(`\\N`,`\\mathbb{N}`),Z(`\\R`,`\\mathbb{R}`),Z(`\\Z`,`\\mathbb{Z}`),Z(`\\alef`,`\\aleph`),Z(`\\alefsym`,`\\aleph`),Z(`\\Alpha`,`\\mathrm{A}`),Z(`\\Beta`,`\\mathrm{B}`),Z(`\\bull`,`\\bullet`),Z(`\\Chi`,`\\mathrm{X}`),Z(`\\clubs`,`\\clubsuit`),Z(`\\cnums`,`\\mathbb{C}`),Z(`\\Complex`,`\\mathbb{C}`),Z(`\\Dagger`,`\\ddagger`),Z(`\\diamonds`,`\\diamondsuit`),Z(`\\empty`,`\\emptyset`),Z(`\\Epsilon`,`\\mathrm{E}`),Z(`\\Eta`,`\\mathrm{H}`),Z(`\\exist`,`\\exists`),Z(`\\harr`,`\\leftrightarrow`),Z(`\\hArr`,`\\Leftrightarrow`),Z(`\\Harr`,`\\Leftrightarrow`),Z(`\\hearts`,`\\heartsuit`),Z(`\\image`,`\\Im`),Z(`\\infin`,`\\infty`),Z(`\\Iota`,`\\mathrm{I}`),Z(`\\isin`,`\\in`),Z(`\\Kappa`,`\\mathrm{K}`),Z(`\\larr`,`\\leftarrow`),Z(`\\lArr`,`\\Leftarrow`),Z(`\\Larr`,`\\Leftarrow`),Z(`\\lrarr`,`\\leftrightarrow`),Z(`\\lrArr`,`\\Leftrightarrow`),Z(`\\Lrarr`,`\\Leftrightarrow`),Z(`\\Mu`,`\\mathrm{M}`),Z(`\\natnums`,`\\mathbb{N}`),Z(`\\Nu`,`\\mathrm{N}`),Z(`\\Omicron`,`\\mathrm{O}`),Z(`\\plusmn`,`\\pm`),Z(`\\rarr`,`\\rightarrow`),Z(`\\rArr`,`\\Rightarrow`),Z(`\\Rarr`,`\\Rightarrow`),Z(`\\real`,`\\Re`),Z(`\\reals`,`\\mathbb{R}`),Z(`\\Reals`,`\\mathbb{R}`),Z(`\\Rho`,`\\mathrm{P}`),Z(`\\sdot`,`\\cdot`),Z(`\\sect`,`\\S`),Z(`\\spades`,`\\spadesuit`),Z(`\\sub`,`\\subset`),Z(`\\sube`,`\\subseteq`),Z(`\\supe`,`\\supseteq`),Z(`\\Tau`,`\\mathrm{T}`),Z(`\\thetasym`,`\\vartheta`),Z(`\\weierp`,`\\wp`),Z(`\\Zeta`,`\\mathrm{Z}`),Z(`\\argmin`,`\\DOTSB\\operatorname*{arg\\,min}`),Z(`\\argmax`,`\\DOTSB\\operatorname*{arg\\,max}`),Z(`\\plim`,`\\DOTSB\\mathop{\\operatorname{plim}}\\limits`),Z(`\\bra`,`\\mathinner{\\langle{#1}|}`),Z(`\\ket`,`\\mathinner{|{#1}\\rangle}`),Z(`\\braket`,`\\mathinner{\\langle{#1}\\rangle}`),Z(`\\Bra`,`\\left\\langle#1\\right|`),Z(`\\Ket`,`\\left|#1\\right\\rangle`);var rh=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.macros.get(`|`),s=t.macros.get(`\\|`);t.macros.beginGroup();var c=t=>n=>{e&&(n.macros.set(`|`,o),i.length&&n.macros.set(`\\|`,s));var a=t;return!t&&i.length&&n.future().text===`|`&&(n.popToken(),a=!0),{tokens:a?i:r,numArgs:0}};t.macros.set(`|`,c(!1)),i.length&&t.macros.set(`\\|`,c(!0));var l=t.consumeArg().tokens,u=t.expandTokens([...a,...l,...n]);return t.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};Z(`\\bra@ket`,rh(!1)),Z(`\\bra@set`,rh(!0)),Z(`\\Braket`,`\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`),Z(`\\Set`,`\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`),Z(`\\set`,`\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`),Z(`\\angln`,`{\\angl n}`),Z(`\\blue`,`\\textcolor{##6495ed}{#1}`),Z(`\\orange`,`\\textcolor{##ffa500}{#1}`),Z(`\\pink`,`\\textcolor{##ff00af}{#1}`),Z(`\\red`,`\\textcolor{##df0030}{#1}`),Z(`\\green`,`\\textcolor{##28ae7b}{#1}`),Z(`\\gray`,`\\textcolor{gray}{#1}`),Z(`\\purple`,`\\textcolor{##9d38bd}{#1}`),Z(`\\blueA`,`\\textcolor{##ccfaff}{#1}`),Z(`\\blueB`,`\\textcolor{##80f6ff}{#1}`),Z(`\\blueC`,`\\textcolor{##63d9ea}{#1}`),Z(`\\blueD`,`\\textcolor{##11accd}{#1}`),Z(`\\blueE`,`\\textcolor{##0c7f99}{#1}`),Z(`\\tealA`,`\\textcolor{##94fff5}{#1}`),Z(`\\tealB`,`\\textcolor{##26edd5}{#1}`),Z(`\\tealC`,`\\textcolor{##01d1c1}{#1}`),Z(`\\tealD`,`\\textcolor{##01a995}{#1}`),Z(`\\tealE`,`\\textcolor{##208170}{#1}`),Z(`\\greenA`,`\\textcolor{##b6ffb0}{#1}`),Z(`\\greenB`,`\\textcolor{##8af281}{#1}`),Z(`\\greenC`,`\\textcolor{##74cf70}{#1}`),Z(`\\greenD`,`\\textcolor{##1fab54}{#1}`),Z(`\\greenE`,`\\textcolor{##0d923f}{#1}`),Z(`\\goldA`,`\\textcolor{##ffd0a9}{#1}`),Z(`\\goldB`,`\\textcolor{##ffbb71}{#1}`),Z(`\\goldC`,`\\textcolor{##ff9c39}{#1}`),Z(`\\goldD`,`\\textcolor{##e07d10}{#1}`),Z(`\\goldE`,`\\textcolor{##a75a05}{#1}`),Z(`\\redA`,`\\textcolor{##fca9a9}{#1}`),Z(`\\redB`,`\\textcolor{##ff8482}{#1}`),Z(`\\redC`,`\\textcolor{##f9685d}{#1}`),Z(`\\redD`,`\\textcolor{##e84d39}{#1}`),Z(`\\redE`,`\\textcolor{##bc2612}{#1}`),Z(`\\maroonA`,`\\textcolor{##ffbde0}{#1}`),Z(`\\maroonB`,`\\textcolor{##ff92c6}{#1}`),Z(`\\maroonC`,`\\textcolor{##ed5fa6}{#1}`),Z(`\\maroonD`,`\\textcolor{##ca337c}{#1}`),Z(`\\maroonE`,`\\textcolor{##9e034e}{#1}`),Z(`\\purpleA`,`\\textcolor{##ddd7ff}{#1}`),Z(`\\purpleB`,`\\textcolor{##c6b9fc}{#1}`),Z(`\\purpleC`,`\\textcolor{##aa87ff}{#1}`),Z(`\\purpleD`,`\\textcolor{##7854ab}{#1}`),Z(`\\purpleE`,`\\textcolor{##543b78}{#1}`),Z(`\\mintA`,`\\textcolor{##f5f9e8}{#1}`),Z(`\\mintB`,`\\textcolor{##edf2df}{#1}`),Z(`\\mintC`,`\\textcolor{##e0e5cc}{#1}`),Z(`\\grayA`,`\\textcolor{##f6f7f7}{#1}`),Z(`\\grayB`,`\\textcolor{##f0f1f2}{#1}`),Z(`\\grayC`,`\\textcolor{##e3e5e6}{#1}`),Z(`\\grayD`,`\\textcolor{##d6d8da}{#1}`),Z(`\\grayE`,`\\textcolor{##babec2}{#1}`),Z(`\\grayF`,`\\textcolor{##888d93}{#1}`),Z(`\\grayG`,`\\textcolor{##626569}{#1}`),Z(`\\grayH`,`\\textcolor{##3b3e40}{#1}`),Z(`\\grayI`,`\\textcolor{##21242c}{#1}`),Z(`\\kaBlue`,`\\textcolor{##314453}{#1}`),Z(`\\kaGreen`,`\\textcolor{##71B307}{#1}`);var ih={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},ah=class{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Xm(Zm,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new Ym(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!==`[`)return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg([`]`])}else ({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new Pl(`EOF`,n.loc)),this.pushTokens(r),t.range(n,``)}consumeSpaces(){for(;this.future().text===` `;)this.stack.pop()}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),i,a=0,o=0;do{if(i=this.popToken(),t.push(i),i.text===`{`)++a;else if(i.text===`}`){if(--a,a===-1)throw new F(`Extra }`,i)}else if(i.text===`EOF`)throw new F(`Unexpected end of input in a macro argument, expected '`+(e&&n?e[o]:`}`)+`'`,i);if(e&&n)if((a===0||a===1&&e[o]===`{`)&&i.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text===`{`&&t[t.length-1].text===`}`&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:i}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new F(`The length of delimiters doesn't match the number of args!`);for(var n=t[0],r=0;r<n.length;r++){var i=this.popToken();if(n[r]!==i.text)throw new F(`Use of the macro doesn't match its definition`,i)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new F(`Too many expansions: infinite loop or need to increase maxExpand setting`)}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]===`\\`&&!this.isDefined(n))throw new F(`Undefined control sequence: `+n);return this.pushToken(t),!1}this.countExpansion(1);var i=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var s=i[o];if(s.text===`#`){if(o===0)throw new F(`Incomplete placeholder at end of macro body`,s);if(s=i[--o],s.text===`#`)i.splice(o+1,1);else if(/^[1-9]$/.test(s.text))i.splice(o,2,...a[s.text-1]);else throw new F(`Not a valid argument number`,s)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text=`\\relax`),e}throw Error()}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Pl(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&=(r.noexpand=!1,!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(e=>e.text).join(``)}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t==`function`?t(this):t;if(typeof r==`string`){var i=0;if(r.indexOf(`#`)!==-1)for(var a=r.replace(/##/g,``);a.indexOf(`#`+(i+1))!==-1;)++i;for(var o=new Ym(r,this.settings),s=[],c=o.lex();c.text!==`EOF`;)s.push(c),c=o.lex();return s.reverse(),{tokens:s,numArgs:i}}return r}isDefined(e){return this.macros.has(e)||Bm.hasOwnProperty(e)||ad.math.hasOwnProperty(e)||ad.text.hasOwnProperty(e)||ih.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t==null?Bm.hasOwnProperty(e)&&!Bm[e].primitive:typeof t==`string`||typeof t==`function`||!t.unexpandable}},oh=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,sh=Object.freeze({"₊":`+`,"₋":`-`,"₌":`=`,"₍":`(`,"₎":`)`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,ₐ:`a`,ₑ:`e`,ₕ:`h`,ᵢ:`i`,ⱼ:`j`,ₖ:`k`,ₗ:`l`,ₘ:`m`,ₙ:`n`,ₒ:`o`,ₚ:`p`,ᵣ:`r`,ₛ:`s`,ₜ:`t`,ᵤ:`u`,ᵥ:`v`,ₓ:`x`,ᵦ:`β`,ᵧ:`γ`,ᵨ:`ρ`,ᵩ:`ϕ`,ᵪ:`χ`,"⁺":`+`,"⁻":`-`,"⁼":`=`,"⁽":`(`,"⁾":`)`,"⁰":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,ᴬ:`A`,ᴮ:`B`,ᴰ:`D`,ᴱ:`E`,ᴳ:`G`,ᴴ:`H`,ᴵ:`I`,ᴶ:`J`,ᴷ:`K`,ᴸ:`L`,ᴹ:`M`,ᴺ:`N`,ᴼ:`O`,ᴾ:`P`,ᴿ:`R`,ᵀ:`T`,ᵁ:`U`,ⱽ:`V`,ᵂ:`W`,ᵃ:`a`,ᵇ:`b`,ᶜ:`c`,ᵈ:`d`,ᵉ:`e`,ᶠ:`f`,ᵍ:`g`,ʰ:`h`,ⁱ:`i`,ʲ:`j`,ᵏ:`k`,ˡ:`l`,ᵐ:`m`,ⁿ:`n`,ᵒ:`o`,ᵖ:`p`,ʳ:`r`,ˢ:`s`,ᵗ:`t`,ᵘ:`u`,ᵛ:`v`,ʷ:`w`,ˣ:`x`,ʸ:`y`,ᶻ:`z`,ᵝ:`β`,ᵞ:`γ`,ᵟ:`δ`,ᵠ:`ϕ`,ᵡ:`χ`,ᶿ:`θ`}),ch={"́":{text:`\\'`,math:`\\acute`},"̀":{text:"\\`",math:`\\grave`},"̈":{text:`\\"`,math:`\\ddot`},"̃":{text:`\\~`,math:`\\tilde`},"̄":{text:`\\=`,math:`\\bar`},"̆":{text:`\\u`,math:`\\breve`},"̌":{text:`\\v`,math:`\\check`},"̂":{text:`\\^`,math:`\\hat`},"̇":{text:`\\.`,math:`\\dot`},"̊":{text:`\\r`,math:`\\mathring`},"̋":{text:`\\H`},"̧":{text:`\\c`}},lh={á:`á`,à:`à`,ä:`ä`,ǟ:`ǟ`,ã:`ã`,ā:`ā`,ă:`ă`,ắ:`ắ`,ằ:`ằ`,ẵ:`ẵ`,ǎ:`ǎ`,â:`â`,ấ:`ấ`,ầ:`ầ`,ẫ:`ẫ`,ȧ:`ȧ`,ǡ:`ǡ`,å:`å`,ǻ:`ǻ`,ḃ:`ḃ`,ć:`ć`,ḉ:`ḉ`,č:`č`,ĉ:`ĉ`,ċ:`ċ`,ç:`ç`,ď:`ď`,ḋ:`ḋ`,ḑ:`ḑ`,é:`é`,è:`è`,ë:`ë`,ẽ:`ẽ`,ē:`ē`,ḗ:`ḗ`,ḕ:`ḕ`,ĕ:`ĕ`,ḝ:`ḝ`,ě:`ě`,ê:`ê`,ế:`ế`,ề:`ề`,ễ:`ễ`,ė:`ė`,ȩ:`ȩ`,ḟ:`ḟ`,ǵ:`ǵ`,ḡ:`ḡ`,ğ:`ğ`,ǧ:`ǧ`,ĝ:`ĝ`,ġ:`ġ`,ģ:`ģ`,ḧ:`ḧ`,ȟ:`ȟ`,ĥ:`ĥ`,ḣ:`ḣ`,ḩ:`ḩ`,í:`í`,ì:`ì`,ï:`ï`,ḯ:`ḯ`,ĩ:`ĩ`,ī:`ī`,ĭ:`ĭ`,ǐ:`ǐ`,î:`î`,ǰ:`ǰ`,ĵ:`ĵ`,ḱ:`ḱ`,ǩ:`ǩ`,ķ:`ķ`,ĺ:`ĺ`,ľ:`ľ`,ļ:`ļ`,ḿ:`ḿ`,ṁ:`ṁ`,ń:`ń`,ǹ:`ǹ`,ñ:`ñ`,ň:`ň`,ṅ:`ṅ`,ņ:`ņ`,ó:`ó`,ò:`ò`,ö:`ö`,ȫ:`ȫ`,õ:`õ`,ṍ:`ṍ`,ṏ:`ṏ`,ȭ:`ȭ`,ō:`ō`,ṓ:`ṓ`,ṑ:`ṑ`,ŏ:`ŏ`,ǒ:`ǒ`,ô:`ô`,ố:`ố`,ồ:`ồ`,ỗ:`ỗ`,ȯ:`ȯ`,ȱ:`ȱ`,ő:`ő`,ṕ:`ṕ`,ṗ:`ṗ`,ŕ:`ŕ`,ř:`ř`,ṙ:`ṙ`,ŗ:`ŗ`,ś:`ś`,ṥ:`ṥ`,š:`š`,ṧ:`ṧ`,ŝ:`ŝ`,ṡ:`ṡ`,ş:`ş`,ẗ:`ẗ`,ť:`ť`,ṫ:`ṫ`,ţ:`ţ`,ú:`ú`,ù:`ù`,ü:`ü`,ǘ:`ǘ`,ǜ:`ǜ`,ǖ:`ǖ`,ǚ:`ǚ`,ũ:`ũ`,ṹ:`ṹ`,ū:`ū`,ṻ:`ṻ`,ŭ:`ŭ`,ǔ:`ǔ`,û:`û`,ů:`ů`,ű:`ű`,ṽ:`ṽ`,ẃ:`ẃ`,ẁ:`ẁ`,ẅ:`ẅ`,ŵ:`ŵ`,ẇ:`ẇ`,ẘ:`ẘ`,ẍ:`ẍ`,ẋ:`ẋ`,ý:`ý`,ỳ:`ỳ`,ÿ:`ÿ`,ỹ:`ỹ`,ȳ:`ȳ`,ŷ:`ŷ`,ẏ:`ẏ`,ẙ:`ẙ`,ź:`ź`,ž:`ž`,ẑ:`ẑ`,ż:`ż`,Á:`Á`,À:`À`,Ä:`Ä`,Ǟ:`Ǟ`,Ã:`Ã`,Ā:`Ā`,Ă:`Ă`,Ắ:`Ắ`,Ằ:`Ằ`,Ẵ:`Ẵ`,Ǎ:`Ǎ`,Â:`Â`,Ấ:`Ấ`,Ầ:`Ầ`,Ẫ:`Ẫ`,Ȧ:`Ȧ`,Ǡ:`Ǡ`,Å:`Å`,Ǻ:`Ǻ`,Ḃ:`Ḃ`,Ć:`Ć`,Ḉ:`Ḉ`,Č:`Č`,Ĉ:`Ĉ`,Ċ:`Ċ`,Ç:`Ç`,Ď:`Ď`,Ḋ:`Ḋ`,Ḑ:`Ḑ`,É:`É`,È:`È`,Ë:`Ë`,Ẽ:`Ẽ`,Ē:`Ē`,Ḗ:`Ḗ`,Ḕ:`Ḕ`,Ĕ:`Ĕ`,Ḝ:`Ḝ`,Ě:`Ě`,Ê:`Ê`,Ế:`Ế`,Ề:`Ề`,Ễ:`Ễ`,Ė:`Ė`,Ȩ:`Ȩ`,Ḟ:`Ḟ`,Ǵ:`Ǵ`,Ḡ:`Ḡ`,Ğ:`Ğ`,Ǧ:`Ǧ`,Ĝ:`Ĝ`,Ġ:`Ġ`,Ģ:`Ģ`,Ḧ:`Ḧ`,Ȟ:`Ȟ`,Ĥ:`Ĥ`,Ḣ:`Ḣ`,Ḩ:`Ḩ`,Í:`Í`,Ì:`Ì`,Ï:`Ï`,Ḯ:`Ḯ`,Ĩ:`Ĩ`,Ī:`Ī`,Ĭ:`Ĭ`,Ǐ:`Ǐ`,Î:`Î`,İ:`İ`,Ĵ:`Ĵ`,Ḱ:`Ḱ`,Ǩ:`Ǩ`,Ķ:`Ķ`,Ĺ:`Ĺ`,Ľ:`Ľ`,Ļ:`Ļ`,Ḿ:`Ḿ`,Ṁ:`Ṁ`,Ń:`Ń`,Ǹ:`Ǹ`,Ñ:`Ñ`,Ň:`Ň`,Ṅ:`Ṅ`,Ņ:`Ņ`,Ó:`Ó`,Ò:`Ò`,Ö:`Ö`,Ȫ:`Ȫ`,Õ:`Õ`,Ṍ:`Ṍ`,Ṏ:`Ṏ`,Ȭ:`Ȭ`,Ō:`Ō`,Ṓ:`Ṓ`,Ṑ:`Ṑ`,Ŏ:`Ŏ`,Ǒ:`Ǒ`,Ô:`Ô`,Ố:`Ố`,Ồ:`Ồ`,Ỗ:`Ỗ`,Ȯ:`Ȯ`,Ȱ:`Ȱ`,Ő:`Ő`,Ṕ:`Ṕ`,Ṗ:`Ṗ`,Ŕ:`Ŕ`,Ř:`Ř`,Ṙ:`Ṙ`,Ŗ:`Ŗ`,Ś:`Ś`,Ṥ:`Ṥ`,Š:`Š`,Ṧ:`Ṧ`,Ŝ:`Ŝ`,Ṡ:`Ṡ`,Ş:`Ş`,Ť:`Ť`,Ṫ:`Ṫ`,Ţ:`Ţ`,Ú:`Ú`,Ù:`Ù`,Ü:`Ü`,Ǘ:`Ǘ`,Ǜ:`Ǜ`,Ǖ:`Ǖ`,Ǚ:`Ǚ`,Ũ:`Ũ`,Ṹ:`Ṹ`,Ū:`Ū`,Ṻ:`Ṻ`,Ŭ:`Ŭ`,Ǔ:`Ǔ`,Û:`Û`,Ů:`Ů`,Ű:`Ű`,Ṽ:`Ṽ`,Ẃ:`Ẃ`,Ẁ:`Ẁ`,Ẅ:`Ẅ`,Ŵ:`Ŵ`,Ẇ:`Ẇ`,Ẍ:`Ẍ`,Ẋ:`Ẋ`,Ý:`Ý`,Ỳ:`Ỳ`,Ÿ:`Ÿ`,Ỹ:`Ỹ`,Ȳ:`Ȳ`,Ŷ:`Ŷ`,Ẏ:`Ẏ`,Ź:`Ź`,Ž:`Ž`,Ẑ:`Ẑ`,Ż:`Ż`,ά:`ά`,ὰ:`ὰ`,ᾱ:`ᾱ`,ᾰ:`ᾰ`,έ:`έ`,ὲ:`ὲ`,ή:`ή`,ὴ:`ὴ`,ί:`ί`,ὶ:`ὶ`,ϊ:`ϊ`,ΐ:`ΐ`,ῒ:`ῒ`,ῑ:`ῑ`,ῐ:`ῐ`,ό:`ό`,ὸ:`ὸ`,ύ:`ύ`,ὺ:`ὺ`,ϋ:`ϋ`,ΰ:`ΰ`,ῢ:`ῢ`,ῡ:`ῡ`,ῠ:`ῠ`,ώ:`ώ`,ὼ:`ὼ`,Ύ:`Ύ`,Ὺ:`Ὺ`,Ϋ:`Ϋ`,Ῡ:`Ῡ`,Ῠ:`Ῠ`,Ώ:`Ώ`,Ὼ:`Ὼ`},uh=class e{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode=`math`,this.gullet=new ah(e,t,this.mode),this.settings=t,this.leftrightDepth=0}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new F(`Expected '`+e+`', got '`+this.fetch().text+`'`,this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken??=this.gullet.expandNextToken(),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set(`\\color`,`\\textcolor`);try{var e=this.parseExpression(!1);return this.expect(`EOF`),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Pl(`}`)),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect(`}`),this.nextToken=t,n}parseExpression(t,n){for(var r=[];;){this.mode===`math`&&this.consumeSpaces();var i=this.fetch();if(e.endOfExpression.indexOf(i.text)!==-1||n&&i.text===n||t&&Bm[i.text]&&Bm[i.text].infix)break;var a=this.parseAtom(n);if(!a)break;a.type!==`internal`&&r.push(a)}return this.mode===`text`&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++)if(e[r].type===`infix`){if(t!==-1)throw new F(`only one infix operator per group`,e[r].token);t=r,n=e[r].replaceWith}if(t!==-1&&n){var i,a,o=e.slice(0,t),s=e.slice(t+1);return i=o.length===1&&o[0].type===`ordgroup`?o[0]:{type:`ordgroup`,mode:this.mode,body:o},a=s.length===1&&s[0].type===`ordgroup`?s[0]:{type:`ordgroup`,mode:this.mode,body:s},[n===`\\\\abovefrac`?this.callFunction(n,[i,e[t],a],[]):this.callFunction(n,[i,a],[])]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do r=this.parseGroup(e);while(r?.type===`internal`);if(!r)throw new F(`Expected group after '`+n+`'`,t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:`textord`,mode:`text`,text:e[n]});var r={type:`text`,mode:this.mode,body:t};return{type:`color`,mode:this.mode,color:this.settings.errorColor,body:[r]}}parseAtom(e){var t=this.parseGroup(`atom`,e);if(t?.type===`internal`||this.mode===`text`)return t;for(var n,r;;){this.consumeSpaces();var i=this.fetch();if(i.text===`\\limits`||i.text===`\\nolimits`){if(t&&t.type===`op`)t.limits=i.text===`\\limits`,t.alwaysHandleSupSub=!0;else if(t&&t.type===`operatorname`)t.alwaysHandleSupSub&&(t.limits=i.text===`\\limits`);else throw new F(`Limit controls must follow a math operator`,i);this.consume()}else if(i.text===`^`){if(n)throw new F(`Double superscript`,i);n=this.handleSupSubscript(`superscript`)}else if(i.text===`_`){if(r)throw new F(`Double subscript`,i);r=this.handleSupSubscript(`subscript`)}else if(i.text===`'`){if(n)throw new F(`Double superscript`,i);var a={type:`textord`,mode:this.mode,text:`\\prime`},o=[a];for(this.consume();this.fetch().text===`'`;)o.push(a),this.consume();this.fetch().text===`^`&&o.push(this.handleSupSubscript(`superscript`)),n={type:`ordgroup`,mode:this.mode,body:o}}else if(sh[i.text]){var s=oh.test(i.text),c=[];for(c.push(new Pl(sh[i.text])),this.consume();;){var l=this.fetch().text;if(!sh[l]||oh.test(l)!==s)break;c.unshift(new Pl(sh[l])),this.consume()}var u=this.subparse(c);s?r={type:`ordgroup`,mode:`math`,body:u}:n={type:`ordgroup`,mode:`math`,body:u}}else break}return n||r?{type:`supsub`,mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,i=Bm[r];if(!i)return null;if(this.consume(),t&&t!==`atom`&&!i.allowedInArgument)throw new F(`Got function '`+r+`' with no arguments`+(t?` as `+t:``),n);if(this.mode===`text`&&!i.allowedInText)throw new F(`Can't use function '`+r+`' in text mode`,n);if(this.mode===`math`&&i.allowedInMath===!1)throw new F(`Can't use function '`+r+`' in math mode`,n);var{args:a,optArgs:o}=this.parseArguments(r,i);return this.callFunction(r,a,o,n,e)}callFunction(e,t,n,r,i){var a={funcName:e,parser:this,token:r,breakOnTokenText:i},o=Bm[e];if(o&&o.handler)return o.handler(a,t,n);throw new F(`No function handler for `+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],i=[],a=0;a<n;a++){var o=t.argTypes&&t.argTypes[a],s=a<t.numOptionalArgs;(t.primitive&&o==null||t.type===`sqrt`&&a===1&&i[0]==null)&&(o=`primitive`);var c=this.parseGroupOfType(`argument to '`+e+`'`,o,s);if(s)i.push(c);else if(c!=null)r.push(c);else throw new F(`Null argument, please report this as a bug`)}return{args:r,optArgs:i}}parseGroupOfType(e,t,n){switch(t){case`color`:return this.parseColorGroup(n);case`size`:return this.parseSizeGroup(n);case`url`:return this.parseUrlGroup(n);case`math`:case`text`:return this.parseArgumentGroup(n,t);case`hbox`:var r=this.parseArgumentGroup(n,`text`);return r==null?null:{type:`styling`,mode:r.mode,body:[r],style:`text`};case`raw`:var i=this.parseStringGroup(`raw`,n);return i==null?null:{type:`raw`,mode:`text`,string:i.text};case`primitive`:if(n)throw new F(`A primitive argument cannot be optional`);var a=this.parseGroup(e);if(a==null)throw new F(`Expected group as `+e,this.fetch());return a;case`original`:case null:case void 0:return this.parseArgumentGroup(n);default:throw new F(`Unknown group type as `+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===` `;)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r=``,i;(i=this.fetch()).text!==`EOF`;)r+=i.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,i=``,a;(a=this.fetch()).text!==`EOF`&&e.test(i+a.text);)r=a,i+=r.text,this.consume();if(i===``)throw new F(`Invalid `+t+`: '`+n.text+`'`,n);return n.range(r,i)}parseColorGroup(e){var t=this.parseStringGroup(`color`,e);if(t==null)return null;var n=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new F(`Invalid color: '`+t.text+`'`,t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r=`#`+r),{type:`color-token`,mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),t=!e&&this.gullet.future().text!==`{`?this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,`size`):this.parseStringGroup(`size`,e),!t)return null;!e&&t.text.length===0&&(t.text=`0pt`,n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new F(`Invalid size: '`+t.text+`'`,t);var i={number:+(r[1]+r[2]),unit:r[3]};if(!Bu(i))throw new F(`Invalid unit: '`+i.unit+`'`,t);return{type:`size`,mode:this.mode,value:i,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode(`%`,13),this.gullet.lexer.setCatcode(`~`,12);var t=this.parseStringGroup(`url`,e);if(this.gullet.lexer.setCatcode(`%`,14),this.gullet.lexer.setCatcode(`~`,13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,`$1`);return{type:`url`,mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,`EOF`);this.expect(`EOF`),this.gullet.endGroup();var a={type:`ordgroup`,mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,i;if(r===`{`||r===`\\begingroup`){this.consume();var a=r===`{`?`}`:`\\endgroup`;this.gullet.beginGroup();var o=this.parseExpression(!1,a),s=this.fetch();this.expect(a),this.gullet.endGroup(),i={type:`ordgroup`,mode:this.mode,loc:Nl.range(n,s),body:o,semisimple:r===`\\begingroup`||void 0}}else if(i=this.parseFunction(t,e)||this.parseSymbol(),i==null&&r[0]===`\\`&&!ih.hasOwnProperty(r)){if(this.settings.throwOnError)throw new F(`Undefined control sequence: `+r,n);i=this.formatUnsupportedCmd(r),this.consume()}return i}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n],i=r.text;i===`-`&&e[n+1].text===`-`&&(n+1<t&&e[n+2].text===`-`?(e.splice(n,3,{type:`textord`,mode:`text`,loc:Nl.range(r,e[n+2]),text:`---`}),t-=2):(e.splice(n,2,{type:`textord`,mode:`text`,loc:Nl.range(r,e[n+1]),text:`--`}),--t)),(i===`'`||i==="`")&&e[n+1].text===i&&(e.splice(n,2,{type:`textord`,mode:`text`,loc:Nl.range(r,e[n+1]),text:i+i}),--t)}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)===`*`;if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new F(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:`verb`,mode:`text`,body:n,star:r}}lh.hasOwnProperty(t[0])&&!ad[this.mode][t[0]]&&(this.settings.strict&&this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Accented Unicode text character "`+t[0]+`" used in math mode`,e),t=lh[t[0]]+t.slice(1));var i=qm.exec(t);i&&(t=t.substring(0,i.index),t===`i`?t=`ı`:t===`j`&&(t=`ȷ`));var a;if(ad[this.mode][t]){this.settings.strict&&this.mode===`math`&&Od.indexOf(t)>=0&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Latin-1/Unicode text character "`+t[0]+`" used in math mode`,e);var o=ad[this.mode][t].group,s=Nl.range(e),c;if(rd.hasOwnProperty(o)){var l=o;c={type:`atom`,mode:this.mode,family:l,loc:s,text:t}}else c={type:o,mode:this.mode,loc:s,text:t};a=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(pu(t.charCodeAt(0))?this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Unicode text character "`+t[0]+`" used in math mode`,e):this.settings.reportNonstrict(`unknownSymbol`,`Unrecognized Unicode character "`+t[0]+`"`+(` (`+t.charCodeAt(0)+`)`),e)),a={type:`textord`,mode:`text`,loc:Nl.range(e),text:t};else return null;if(this.consume(),i)for(var u=0;u<i[0].length;u++){var d=i[0][u];if(!ch[d])throw new F(`Unknown accent ' `+d+`'`,e);var f=ch[d][this.mode]||ch[d].text;if(!f)throw new F(`Accent `+d+` unsupported in `+this.mode+` mode`,e);a={type:`accent`,mode:this.mode,loc:Nl.range(e),label:f,isStretchy:!1,isShifty:!0,base:a}}return a}};uh.endOfExpression=[`}`,`\\endgroup`,`\\end`,`\\right`,`&`];var dh=function(e,t){if(!(typeof e==`string`||e instanceof String))throw TypeError(`KaTeX can only parse string typed expression`);var n=new uh(e,t);delete n.gullet.macros.current[`\\df@tag`];var r=n.parse();if(delete n.gullet.macros.current[`\\current@color`],delete n.gullet.macros.current[`\\color`],n.gullet.macros.get(`\\df@tag`)){if(!t.displayMode)throw new F(`\\tag works only in display equations`);r=[{type:`tag`,mode:`text`,body:r,tag:n.subparse([new Pl(`\\df@tag`)])}]}return r},fh=function(e,t,n){t.textContent=``;var r=gh(e,n).toNode();t.appendChild(r)};typeof document<`u`&&document.compatMode!==`CSS1Compat`&&(typeof console<`u`&&console.warn(`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`),fh=function(){throw new F(`KaTeX doesn't work in quirks mode.`)});var ph=function(e,t){return gh(e,t).toMarkup()},mh=function(e,t){return dh(e,new ql(t))},hh=function(e,t,n){if(n.throwOnError||!(e instanceof F))throw e;var r=J.makeSpan([`katex-error`],[new Zu(t)]);return r.setAttribute(`title`,e.toString()),r.setAttribute(`style`,`color:`+n.errorColor),r},gh=function(e,t){var n=new ql(t);try{return zf(dh(e,n),e,n)}catch(t){return hh(t,e,n)}},_h={version:`0.16.22`,render:fh,renderToString:ph,ParseError:F,SETTINGS_SCHEMA:Gl,__parse:mh,__renderToDomTree:gh,__renderToHTMLTree:function(e,t){var n=new ql(t);try{return Bf(dh(e,n),e,n)}catch(t){return hh(t,e,n)}},__setFontMetrics:Au,__defineSymbol:z,__defineFunction:Y,__defineMacro:Z,__domTree:{Span:qu,Anchor:Ju,SymbolNode:Zu,SvgNode:Qu,PathNode:$u,LineNode:ed}},vh={};function yh(e){let t=this,n=e||vh,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Ml(n)),a.push(Cl()),o.push(wl(n))}var bh=/[#.]/g;function xh(e,t){let n=e||``,r={},i=0,a,o;for(;i<n.length;){bh.lastIndex=i;let e=bh.exec(n),t=n.slice(i,e?e.index:n.length);t&&(a?a===`#`?r.id=t:Array.isArray(r.className)?r.className.push(t):r.className=[t]:o=t,i+=t.length),e&&(a=e[0],i++)}return{type:`element`,tagName:o||t||`div`,properties:r,children:[]}}function Sh(e,t,n){let r=n?Oh(n):void 0;function i(n,i,...a){let o;if(n==null){o={type:`root`,children:[]};let e=i;a.unshift(e)}else{o=xh(n,t);let s=o.tagName.toLowerCase(),c=r?r.get(s):void 0;if(o.tagName=c||s,Ch(i))a.unshift(i);else for(let[t,n]of Object.entries(i))wh(e,o.properties,t,n)}for(let e of a)Th(o.children,e);return o.type===`element`&&o.tagName===`template`&&(o.content={type:`root`,children:o.children},o.children=[]),o}return i}function Ch(e){if(typeof e!=`object`||!e||Array.isArray(e))return!0;if(typeof e.type!=`string`)return!1;let t=e,n=Object.keys(e);for(let e of n){let n=t[e];if(n&&typeof n==`object`){if(!Array.isArray(n))return!0;let e=n;for(let t of e)if(typeof t!=`number`&&typeof t!=`string`)return!0}}return!!(`children`in e&&Array.isArray(e.children))}function wh(e,t,n,r){let i=me(e,n),a;if(r!=null){if(typeof r==`number`){if(Number.isNaN(r))return;a=r}else a=typeof r==`boolean`?r:typeof r==`string`?i.spaceSeparated?ye(r):i.commaSeparated?s(r):i.commaOrSpaceSeparated?ye(s(r).join(` `)):Eh(i,i.property,r):Array.isArray(r)?[...r]:i.property===`style`?Dh(r):String(r);if(Array.isArray(a)){let e=[];for(let t of a)e.push(Eh(i,i.property,t));a=e}i.property===`className`&&Array.isArray(t.className)&&(a=t.className.concat(a)),t[i.property]=a}}function Th(e,t){if(t!=null)if(typeof t==`number`||typeof t==`string`)e.push({type:`text`,value:String(t)});else if(Array.isArray(t))for(let n of t)Th(e,n);else if(typeof t==`object`&&`type`in t)t.type===`root`?Th(e,t.children):e.push(t);else throw Error("Expected node, nodes, or string, got `"+t+"`")}function Eh(e,t,n){if(typeof n==`string`){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===``||v(n)===v(t)))return!0}return n}function Dh(e){let t=[];for(let[n,r]of Object.entries(e))t.push([n,r].join(`: `));return t.join(`; `)}function Oh(e){let t=new Map;for(let n of e)t.set(n.toLowerCase(),n);return t}var kh=`altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath`.split(`.`),Ah=Sh(_e,`div`),jh=Sh(ve,`g`,kh),Mh={html:`http://www.w3.org/1999/xhtml`,mathml:`http://www.w3.org/1998/Math/MathML`,svg:`http://www.w3.org/2000/svg`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function Nh(e,t){return Ph(e,t||{})||{type:`root`,children:[]}}function Ph(e,t){let n=Fh(e,t);return n&&t.afterTransform&&t.afterTransform(e,n),n}function Fh(e,t){switch(e.nodeType){case 1:return Bh(e,t);case 3:return Rh(e);case 8:return zh(e);case 9:return Ih(e,t);case 10:return Lh();case 11:return Ih(e,t);default:return}}function Ih(e,t){return{type:`root`,children:Vh(e,t)}}function Lh(){return{type:`doctype`}}function Rh(e){return{type:`text`,value:e.nodeValue||``}}function zh(e){return{type:`comment`,value:e.nodeValue||``}}function Bh(e,t){let n=e.namespaceURI,r=n===Mh.svg?jh:Ah,i=n===Mh.html?e.tagName.toLowerCase():e.tagName,a=n===Mh.html&&i===`template`?e.content:e,o=e.getAttributeNames(),s={},c=-1;for(;++c<o.length;)s[o[c]]=e.getAttribute(o[c])||``;return r(i,s,Vh(a,t))}function Vh(e,t){let n=e.childNodes,r=[],i=-1;for(;++i<n.length;){let e=Ph(n[i],t);e!==void 0&&r.push(e)}return r}var Hh=new DOMParser;function Uh(e,t){return Nh(t?.fragment?Wh(e):Hh.parseFromString(e,`text/html`))}function Wh(e){let t=document.createElement(`template`);return t.innerHTML=e,t.content}var Gh=(function(e,t,n){let r=sa(n);if(!e||!e.type||!e.children)throw Error(`Expected parent node`);if(typeof t==`number`){if(t<0||t===1/0)throw Error(`Expected positive finite number as index`)}else if(t=e.children.indexOf(t),t<0)throw Error(`Expected child node or index`);for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t]}),Kh=(function(e){if(e==null)return Xh;if(typeof e==`string`)return Jh(e);if(typeof e==`object`)return qh(e);if(typeof e==`function`)return Yh(e);throw Error("Expected function, string, or array as `test`")});function qh(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Kh(e[n]);return Yh(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Jh(e){return Yh(t);function t(t){return t.tagName===e}}function Yh(e){return t;function t(t,n,r){return!!(Zh(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Xh(e){return!!(e&&typeof e==`object`&&`type`in e&&e.type===`element`&&`tagName`in e&&typeof e.tagName==`string`)}function Zh(e){return typeof e==`object`&&!!e&&`type`in e&&`tagName`in e}var Qh=/\n/g,$h=/[\t ]+/g,eg=Kh(`br`),tg=Kh(mg),ng=Kh(`p`),rg=Kh(`tr`),ig=Kh([`datalist`,`head`,`noembed`,`noframes`,`noscript`,`rp`,`script`,`style`,`template`,`title`,pg,hg]),ag=Kh(`address.article.aside.blockquote.body.caption.center.dd.dialog.dir.dl.dt.div.figure.figcaption.footer.form,.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.legend.li.listing.main.menu.nav.ol.p.plaintext.pre.section.ul.xmp`.split(`.`));function og(e,t){let n=t||{},r=`children`in e?e.children:[],i=ag(e),a=fg(e,{whitespace:n.whitespace||`normal`,breakBefore:!1,breakAfter:!1}),o=[];(e.type===`text`||e.type===`comment`)&&o.push(...lg(e,{whitespace:a,breakBefore:!0,breakAfter:!0}));let s=-1;for(;++s<r.length;)o.push(...sg(r[s],e,{whitespace:a,breakBefore:s?void 0:i,breakAfter:s<r.length-1?eg(r[s+1]):i}));let c=[],l;for(s=-1;++s<o.length;){let e=o[s];typeof e==`number`?l!==void 0&&e>l&&(l=e):e&&(l!==void 0&&l>-1&&c.push(`
`.repeat(l)||` `),l=-1,c.push(e))}return c.join(``)}function sg(e,t,n){return e.type===`element`?cg(e,t,n):e.type===`text`?n.whitespace===`normal`?lg(e,n):ug(e):[]}function cg(e,t,n){let r=fg(e,n),i=e.children||[],a=-1,o=[];if(ig(e))return o;let s,c;for(eg(e)||rg(e)&&Gh(t,e,rg)?c=`
`:ng(e)?(s=2,c=2):ag(e)&&(s=1,c=1);++a<i.length;)o=o.concat(sg(i[a],e,{whitespace:r,breakBefore:a?void 0:s,breakAfter:a<i.length-1?eg(i[a+1]):c}));return tg(e)&&Gh(t,e,tg)&&o.push(`	`),s&&o.unshift(s),c&&o.push(c),o}function lg(e,t){let n=String(e.value),r=[],i=[],a=0;for(;a<=n.length;){Qh.lastIndex=a;let e=Qh.exec(n),i=e&&`index`in e?e.index:n.length;r.push(dg(n.slice(a,i).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,``),a===0?t.breakBefore:!0,i===n.length?t.breakAfter:!0)),a=i+1}let o=-1,s;for(;++o<r.length;)r[o].charCodeAt(r[o].length-1)===8203||o<r.length-1&&r[o+1].charCodeAt(0)===8203?(i.push(r[o]),s=void 0):r[o]?(typeof s==`number`&&i.push(s),i.push(r[o]),s=0):(o===0||o===r.length-1)&&i.push(0);return i}function ug(e){return[String(e.value)]}function dg(e,t,n){let r=[],i=0,a;for(;i<e.length;){$h.lastIndex=i;let n=$h.exec(e);a=n?n.index:e.length,!i&&!a&&n&&!t&&r.push(``),i!==a&&r.push(e.slice(i,a)),i=n?a+n[0].length:a}return i!==a&&!n&&r.push(``),r.join(` `)}function fg(e,t){if(e.type===`element`){let n=e.properties||{};switch(e.tagName){case`listing`:case`plaintext`:case`xmp`:return`pre`;case`nobr`:return`nowrap`;case`pre`:return n.wrap?`pre-wrap`:`pre`;case`td`:case`th`:return n.noWrap?`nowrap`:t.whitespace;case`textarea`:return`pre-wrap`;default:}}return t.whitespace}function pg(e){return!!(e.properties||{}).hidden}function mg(e){return e.tagName===`td`||e.tagName===`th`}function hg(e){return e.tagName===`dialog`&&!(e.properties||{}).open}var gg={},_g=[];function vg(e){let t=e||gg;return function(e,n){_a(e,`element`,function(e,r){let i=Array.isArray(e.properties.className)?e.properties.className:_g,a=i.includes(`language-math`),o=i.includes(`math-display`),s=i.includes(`math-inline`),c=o;if(!a&&!o&&!s)return;let l=r[r.length-1],u=e;if(e.tagName===`code`&&a&&l&&l.type===`element`&&l.tagName===`pre`&&(u=l,l=r[r.length-2],c=!0),!l)return;let d=og(u,{whitespace:`pre`}),f;try{f=_h.renderToString(d,{...t,displayMode:c,throwOnError:!0})}catch(i){let a=i,o=a.name.toLowerCase();n.message(`Could not render math with KaTeX`,{ancestors:[...r,e],cause:a,place:e.position,ruleId:o,source:`rehype-katex`});try{f=_h.renderToString(d,{...t,displayMode:c,strict:`ignore`,throwOnError:!1})}catch{f=[{type:`element`,tagName:`span`,properties:{className:[`katex-error`],style:`color:`+(t.errorColor||`#cc0000`),title:String(i)},children:[{type:`text`,value:d}]}]}}typeof f==`string`&&(f=Uh(f,{fragment:!0}).children);let p=l.children.indexOf(u);return l.children.splice(p,1,...f),ga})}}var yg=function(){let e=e=>this.parse(e);return t=>{let n=t=>{let r=[],i=[],a=e=>{let t=i.at(-1);t?t.children.push(e):r.push(e)};for(let r of t.children){if(r.type!==`html`){`children`in r&&n(r),a(r);continue}let t=r.value.split(/(<details\b[^>]*>|<\/details\s*>|<summary\b[^>]*>[\s\S]*?<\/summary\s*>)/g);if(t.length===1){a(r);continue}for(let r of t)if(r.trim())if(/^<details/.test(r)){let e=r.match(/\bid=["']([A-Za-z][\w.-]*)["']/)?.[1],t={type:`paragraph`,data:{hName:`details`,hProperties:{...e?{id:e}:{},.../\sopen(?:\s|>)/.test(r)?{open:!0}:{}}},children:[]};a(t),i.push(t)}else if(/^<\/details/.test(r))i.pop();else if(/^<summary\b/.test(r))a({type:`paragraph`,data:{hName:`summary`},children:e(r.replace(/^<summary\b[^>]*>/,``).replace(/<\/summary\s*>$/,``)).children.flatMap(e=>e.type===`paragraph`?e.children:[])});else{let t=e(r);n(t),t.children.forEach(a)}}t.children=r};n(t)}},bg=function(){return e=>{let t=e=>{e.type===`text`&&typeof e.value==`string`&&(e.value=e.value.replace(/---/g,`—`).replace(/--/g,`–`)),e.children?.forEach(t)};t(e)}};function xg(){return e=>{function t(e){for(let n of e.children){if(n.type!==`element`||(t(n),!n.properties.className?.toString().includes(`katex-html`)))continue;let e=n.children.find(e=>e.type===`element`&&Array.isArray(e.properties.className)&&e.properties.className.includes(`tag`));e&&(n.properties.className=[`katex-html`,`numbered-equation`],n.children=[{type:`element`,tagName:`span`,properties:{className:[`equation-body`],tabIndex:0},children:n.children.filter(t=>t!==e)},e])}}t(e)}}var Sg={p:({children:e})=>(0,N.jsx)(N.Fragment,{children:e})};function Cg({children:e,inline:t=!1,components:n,remarkPlugins:r=[]}){return(0,N.jsx)(vo,{remarkPlugins:[Sl,yh,yg,...r,bg],rehypePlugins:[[vg,{strict:!1,throwOnError:!1}],xg],components:t?{...n,...Sg}:n,children:e})}function wg(e){let t=e.trim().split(`
`),n=t.shift()?.match(/^id:\s*([a-zA-Z0-9_-]+)$/),r=t.join(`
`).trim();return n&&r?{id:n[1],tex:r}:null}function Tg(e){let t=e.trim().split(/\n---\n/),n=t[0]?.match(/^lhs:\s*(.+)$/m)?.[1].trim();if(!n)return null;let r=[];for(let e of t){let t={parts:[]};for(let n of e.trim().split(`
`)){if(/^lhs:/.test(n))continue;let e=n.match(/^(?:note|step):\s*(.+)$/),r=n.match(/^popup-math:\s*(.+)$/),i=n.match(/^part\s+([a-zA-Z0-9_-]+):\s*(.+)$/);if(e)t.note=e[1].trim();else if(r)t.popupMath=r[1].trim();else if(i)t.parts.push({id:i[1],tex:i[2].trim()});else return null}if(!t.parts.length)return null;r.push(t)}return{lhs:n,steps:r}}var Eg=function(){return e=>{let t=e=>{let n=e.children;if(n)for(let e=0;e<n.length;e++){let r=n[e],i=n[e+1];r.type===`math`&&i?.type===`code`&&i.lang===`math-hint`?n.splice(e,2,{type:`mathHint`,data:{hName:`div`,hProperties:{dataMathHint:i.value}},children:[r]}):t(r)}};t(e)}},Dg=function({ids:e}){let t=new Set(e);return e=>{function n(e){!e.children||[`link`,`linkReference`,`code`,`inlineCode`,`math`,`inlineMath`,`heading`].includes(e.type)||e.data?.hName!==`summary`&&(e.children=e.children.flatMap(e=>{if(e.type!==`text`||!e.value)return n(e),[e];let r=[],i=0;for(let n of e.value.matchAll(/\(([^()\n]+)\)/g)){if(!t.has(n[1]))continue;let a=n.index;a>i&&r.push({type:`text`,value:e.value.slice(i,a)}),r.push({type:`link`,url:`#eq-`+encodeURIComponent(n[1]),children:[{type:`text`,value:n[0]}]}),i=a+n[0].length}return i?(i<e.value.length&&r.push({type:`text`,value:e.value.slice(i)}),r):[e]}))}n(e)}},Og=function(){return e=>{let t=e=>{if(!e.children)return;let n=[],r;for(let i of e.children){let e=i.type===`html`&&i.value?.trim().match(/^<!-- reference: ([a-z0-9-]+) -->$/),a=i.type===`html`&&i.value?.trim()===`<!-- /reference -->`;if(e){if(r)throw Error(`Note reference ranges cannot overlap`);r={type:`noteReference`,data:{hName:`div`,hProperties:{id:`ref-${e[1]}`,className:[`note-source-passage`]}},children:[]},n.push(r)}else if(a){if(!r)throw Error(`Unmatched note reference end`);r=void 0}else t(i),(r?.children??n).push(i)}if(r)throw Error(`Unclosed note reference range`);e.children=n};t(e)}},kg=/^<!-- reference: ([a-z0-9-]+) -->\s*\n([\s\S]*?)^<!-- \/reference -->[ \t]*$/gm;function Ag(e){let t=new Map;for(let n of e)for(let e of n.content.matchAll(kg)){let r=`/${n.id}#ref-${e[1]}`;if(t.has(r))throw Error(`Duplicate note reference: ${r}`);let i=[...n.content.slice(0,e.index).matchAll(/^#{1,6} (.+)$/gm)];t.set(r,{href:r,chapterId:n.id,section:n.section,heading:i.at(-1)?.[1].replace(/^6\.[1-4]\s+/,``)??n.section,content:e[2].trim()})}return t}function jg(e,t,n){if(!e)return;let r=e.startsWith(`#`)?`/${t}${e}`:e;return n.get(r)}var Mg=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ng=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Pg=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Fg=e=>{let t=Pg(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ig={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Lg=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Rg=(0,P.createContext)({}),zg=()=>(0,P.useContext)(Rg),Bg=(0,P.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=zg()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,P.createElement)(`svg`,{ref:c,...Ig,width:t??l??Ig.width,height:t??l??Ig.height,stroke:e??f,strokeWidth:m,className:Mg(`lucide`,p,i),...!a&&!Lg(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,P.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),Vg=(e,t)=>{let n=(0,P.forwardRef)(({className:n,...r},i)=>(0,P.createElement)(Bg,{ref:i,iconNode:t,className:Mg(`lucide-${Ng(Fg(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Fg(e),n},Hg=Vg(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Ug=Vg(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Wg=Vg(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),Gg=Vg(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Kg=Vg(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),qg=Vg(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Jg=Vg(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Yg={};function Xg(e,t){let n=P.useRef(Yg);return n.current===Yg&&(n.current=e(t)),n}function Zg(){}var Qg=Object.freeze([]),$g=Object.freeze({});function e_(e){P.useEffect(e,Qg)}var t_=0,n_=class e{static create(){return new e}currentId=t_;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=t_,t()},e)}isStarted(){return this.currentId!==t_}clear=()=>{this.currentId!==t_&&(clearTimeout(this.currentId),this.currentId=t_)};disposeEffect=()=>this.clear};function r_(){let e=Xg(n_.create).current;return e_(e.disposeEffect),e}var i_=typeof document<`u`?P.useLayoutEffect:()=>{};function a_(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:o_,platform:s_,maxTouchPoints:c_}=a_(),l_=o_.toLowerCase(),u_=s_.toLowerCase(),d_=/^i(os$|p)/.test(u_)||u_===`macintel`&&c_>1,f_=`android`,p_=u_===f_||l_.includes(f_),m_=!d_&&u_.startsWith(`mac`);u_.startsWith(`win`),!p_&&/^(linux|chrome os)/.test(u_);var h_=m_||d_,g_=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`);!g_&&l_.includes(`firefox`),!g_&&l_.includes(`chrom`);var __=h_,v_=/jsdom|happydom/.test(l_);function y_(e){e.preventDefault(),e.stopPropagation()}function b_(e){return`nativeEvent`in e}function x_(e){return e.pointerType===``&&e.isTrusted?!0:p_&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function S_(e){return v_?!1:!p_&&e.width===0&&e.height===0||p_&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType===`mouse`||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType===`touch`}function C_(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function w_(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}function T_(){return!0}function E_(e){return k_(e)?(e.nodeName||``).toLowerCase():`#document`}function D_(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function O_(e){return((k_(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function k_(e){return T_()?e instanceof Node||e instanceof D_(e).Node:!1}function A_(e){return T_()?e instanceof Element||e instanceof D_(e).Element:!1}function j_(e){return T_()?e instanceof HTMLElement||e instanceof D_(e).HTMLElement:!1}function M_(e){return!T_()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof D_(e).ShadowRoot}function N_(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=W_(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function P_(e){return/^(table|td|th)$/.test(E_(e))}function F_(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var I_=/transform|translate|scale|rotate|perspective|filter/,L_=/paint|layout|strict|content/,R_=e=>!!e&&e!==`none`,z_;function B_(e){let t=A_(e)?W_(e):e;return R_(t.transform)||R_(t.translate)||R_(t.scale)||R_(t.rotate)||R_(t.perspective)||!H_()&&(R_(t.backdropFilter)||R_(t.filter))||I_.test(t.willChange||``)||L_.test(t.contain||``)}function V_(e){let t=K_(e);for(;j_(t)&&!U_(t);){if(B_(t))return t;if(F_(t))return null;t=K_(t)}return null}function H_(){return z_??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),z_}function U_(e){return/^(html|body|#document)$/.test(E_(e))}function W_(e){return D_(e).getComputedStyle(e)}function G_(e){return A_(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function K_(e){if(E_(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||M_(e)&&e.host||O_(e);return M_(t)?t.host:t}function q_(e){let t=K_(e);return U_(t)?(e.ownerDocument||e).body:j_(t)&&N_(t)?t:q_(t)}function J_(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=q_(e),i=r===e.ownerDocument?.body,a=D_(r);if(i){let e=Y_(a);return t.concat(a,a.visualViewport||[],N_(r)?r:[],e&&n?J_(e):[])}else return t.concat(r,J_(r,[],n))}function Y_(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var X_=`data-base-ui-focusable`,Z_=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`;function Q_(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function $_(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&M_(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function ev(e){return`composedPath`in e?e.composedPath()[0]:e.target}function tv(e,t){if(!A_(e))return!1;let n=e;if(t.hasElement(n))return!n.hasAttribute(`data-trigger-disabled`);for(let[,e]of t.entries())if($_(e,n))return!e.hasAttribute(`data-trigger-disabled`);return!1}function nv(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function rv(e){return e.matches(`html,body`)}function iv(e){return j_(e)&&e.matches(`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`)}function av(e){return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${Z_}`)!=null}function ov(e){return e?e.getAttribute(`role`)===`combobox`&&iv(e):!1}function sv(e){return e?e.hasAttribute(`data-base-ui-focusable`)?e:e.querySelector(`[data-base-ui-focusable]`)||e:null}function cv(e,t){return t!=null&&!C_(t)?0:typeof e==`function`?e():e}function lv(e,t,n){let r=cv(e,n);return typeof r==`number`?r:r?.[t]}function uv(e){return typeof e==`function`?e():e}function dv(e,t){return t||e===`click`||e===`mousedown`}function fv(e){return e?.includes(`mouse`)&&e!==`mousedown`}var pv=`none`,mv=`trigger-press`,hv=`trigger-hover`,gv=`outside-press`,_v=`close-press`,vv=`focus-out`,yv=`escape-key`,bv=`imperative-action`;function xv(e,t,n,r){let i=!1,a=!1,o=r??$g;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function Sv(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function Cv(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}function wv(e,t,n,r){let i=Xg(Ev).current;return Dv(i,e,t,n,r)&&kv(i,[e,t,n,r]),i.callback}function Tv(e){let t=Xg(Ev).current;return Ov(t,e)&&kv(t,e),t.callback}function Ev(){return{callback:null,cleanup:null,refs:[]}}function Dv(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function Ov(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function kv(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n;break;default:}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null;break;default:}}}}}}function Av(e){let t=Xg(jv,e).current;return t.next=e,i_(t.effect),t}function jv(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Mv={...P},Nv=Mv.useInsertionEffect,Pv=Nv&&Nv!==Mv.useLayoutEffect?Nv:e=>e();function Fv(e){let t=Xg(Iv).current;return t.next=e,Pv(t.effect),t.trampoline}function Iv(){let e={next:void 0,callback:Lv,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function Lv(){}var Rv=null;globalThis.requestAnimationFrame;var zv=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||(this.callbacks[t]=null,--this.callbacksCount)}},Bv=class e{static create(){return new e}static request(e){return zv.request(e)}static cancel(e){return zv.cancel(e)}currentId=Rv;request(e){this.cancel(),this.currentId=zv.request(()=>{this.currentId=Rv,e()})}cancel=()=>{this.currentId!==Rv&&(zv.cancel(this.currentId),this.currentId=Rv)};disposeEffect=()=>this.cancel};function Vv(){let e=Xg(Bv.create).current;return e_(e.disposeEffect),e}function Hv(e){return e?.ownerDocument||document}var Uv={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},Wv={...Uv,position:`fixed`,top:0,left:0};({...Uv});var Gv=P.forwardRef(function(e,t){let[n,r]=P.useState();i_(()=>{__&&g_&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,N.jsx)(`span`,{...e,ref:t,style:Wv,"aria-hidden":n?void 0:!0,...i,"data-base-ui-focus-guard":``})}),Kv=Math.min,qv=Math.max,Jv=Math.round,Yv=Math.floor,Xv=e=>({x:e,y:e}),Zv={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Qv(e,t,n){return qv(e,Kv(t,n))}function $v(e,t){return typeof e==`function`?e(t):e}function ey(e){return e.split(`-`)[0]}function ty(e){return e.split(`-`)[1]}function ny(e){return e===`x`?`y`:`x`}function ry(e){return e===`y`?`height`:`width`}function iy(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function ay(e){return ny(iy(e))}function oy(e,t,n){n===void 0&&(n=!1);let r=ty(e),i=ay(e),a=ry(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=hy(o)),[o,hy(o)]}function sy(e){let t=hy(e);return[cy(e),t,cy(t)]}function cy(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var ly=[`left`,`right`],uy=[`right`,`left`],dy=[`top`,`bottom`],fy=[`bottom`,`top`];function py(e,t,n){switch(e){case`top`:case`bottom`:return n?t?uy:ly:t?ly:uy;case`left`:case`right`:return t?dy:fy;default:return[]}}function my(e,t,n,r){let i=ty(e),a=py(ey(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(cy)))),a}function hy(e){let t=ey(e);return Zv[t]+e.slice(t.length)}function gy(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function _y(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:gy(e)}function vy(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function yy(e){return e.visibility===`hidden`||e.visibility===`collapse`}function by(e,t=e?W_(e):null){return!e||!e.isConnected||!t||yy(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var xy=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function Sy(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return M_(n)?n.host:null}function Cy(e){for(let t of Array.from(e.children))if(E_(t)===`summary`)return t;return null}function wy(e,t){let n=Cy(t);return!!n&&(e===n||$_(n,e))}function Ty(e){let t=e?E_(e):``;return e!=null&&e.matches(xy)&&(t!==`summary`||e.parentElement!=null&&E_(e.parentElement)===`details`&&Cy(e.parentElement)===e)&&(t!==`details`||Cy(e)==null)&&(t!==`input`||e.type!==`hidden`)}function Ey(e){if(!Ty(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=Sy(t)){let n=t!==e,r=E_(t)===`slot`;if(t.hasAttribute(`inert`)||n&&E_(t)===`details`&&!t.open&&!wy(e,t)||t.hasAttribute(`hidden`)||!r&&!Dy(t,n))return!1}return!0}function Dy(e,t){let n=W_(e);return t?n.display!==`none`:by(e,n)}function Oy(e){let t=e.tabIndex;if(t<0){let t=E_(e);if(t===`details`||t===`audio`||t===`video`||j_(e)&&e.isContentEditable)return 0}return t}function ky(e){if(E_(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function Ay(e,t){let n=ky(e);if(!n)return!0;let r=t.find(e=>{let t=ky(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=ky(e);return t?.name===n.name&&t.form===n.form})===n}function jy(e){if(j_(e)&&E_(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return j_(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function My(e,t){jy(e).forEach(e=>{Ty(e)&&t.push(e),My(e,t)})}function Ny(e,t,n){jy(e).forEach(e=>{j_(e)&&e.matches(t)&&n.push(e),Ny(e,t,n)})}function Py(e){return Ey(e)&&Oy(e)>=0}function Fy(e){let t=[];return My(e,t),t.filter(Ey)}function Iy(e){let t=Fy(e);return t.filter(e=>Oy(e)>=0&&Ay(e,t))}function Ly(e,t){let n=Iy(e),r=n.length;if(r===0)return;let i=Q_(Hv(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function Ry(e){return Ly(Hv(e).body,1)||e}function zy(e){return Ly(Hv(e).body,-1)||e}function By(e,t){if(!e)return null;let n=Iy(Hv(e).body),r=n.length;if(r===0)return null;let i=n.indexOf(e);return i===-1?null:n[(i+t+r)%r]}function Vy(e){return By(e,1)}function Hy(e){return By(e,-1)}function Uy(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!$_(n,r)}function Wy(e){Iy(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Gy(e){let t=[];Ny(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}function Ky(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...Ky(e,t.id,n)])}function qy(e,t){let n=[],r=e.find(e=>e.id===t)?.parentId;for(;r;){let t=e.find(e=>e.id===r);r=t?.parentId,t&&(n=n.concat(t))}return n}function Jy(e){return`data-base-ui-${e}`}var Yy=0;function Xy(e,t={}){let{preventScroll:n=!1,sync:r=!1,shouldFocus:i}=t;cancelAnimationFrame(Yy);function a(){i&&!i()||e?.focus({preventScroll:n})}if(r)return a(),Zg;let o=requestAnimationFrame(a);return Yy=o,()=>{Yy===o&&(cancelAnimationFrame(o),Yy=0)}}var Zy={inert:new WeakMap,"aria-hidden":new WeakMap},Qy=`data-base-ui-inert`,$y={inert:new WeakSet,"aria-hidden":new WeakSet},eb=new WeakMap,tb=0;function nb(e){return $y[e]}function rb(e){return e?M_(e)?e.host:rb(e.parentNode):null}var ib=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=rb(t);return e.contains(n)?n:null}).filter(e=>e!=null),ab=e=>{let t=new Set;return e.forEach(e=>{let n=e;for(;n&&!t.has(n);)t.add(n),n=n.parentNode}),t},ob=(e,t,n)=>{let r=[],i=e=>{!e||n.has(e)||Array.from(e.children).forEach(e=>{E_(e)!==`script`&&(t.has(e)?i(e):r.push(e))})};return i(e),r};function sb(e,t,n,r,{mark:i=!0}){let a=null;r?a=`inert`:n&&(a=`aria-hidden`);let o=null,s=null,c=ib(t,e),l=i?ob(t,ab(c),new Set(c)):[],u=[],d=[];if(a){let e=Zy[a],n=nb(a);s=n,o=e;let r=ib(t,Array.from(t.querySelectorAll(`[aria-live]`))),i=c.concat(r);ob(t,ab(i),new Set(i)).forEach(t=>{let r=t.getAttribute(a),i=r!==null&&r!==`false`,o=(e.get(t)||0)+1;e.set(t,o),u.push(t),o===1&&i&&n.add(t),i||t.setAttribute(a,a===`inert`?``:`true`)})}return i&&l.forEach(e=>{let t=(eb.get(e)||0)+1;eb.set(e,t),d.push(e),t===1&&e.setAttribute(Qy,``)}),tb+=1,()=>{o&&u.forEach(e=>{let t=(o.get(e)||0)-1;o.set(e,t),t||(!s?.has(e)&&a&&e.removeAttribute(a),s?.delete(e))}),i&&d.forEach(e=>{let t=(eb.get(e)||0)-1;eb.set(e,t),t||e.removeAttribute(Qy)}),--tb,tb||(Zy.inert=new WeakMap,Zy[`aria-hidden`]=new WeakMap,$y.inert=new WeakSet,$y[`aria-hidden`]=new WeakSet,eb=new WeakMap)}}function cb(e,t={}){let{ariaHidden:n=!1,inert:r=!1,mark:i=!0}=t,a=Hv(e[0]).body;return sb(e,a,n,r,{mark:i})}var lb=0;function ub(e,t=`mui`){let[n,r]=P.useState(e),i=e||n;return P.useEffect(()=>{n??(lb+=1,r(`${t}-${lb}`))},[n,t]),i}var db=Mv.useId;function fb(e,t){if(db!==void 0){let n=db();return e??(t?`${t}-${n}`:n)}return ub(e,t)}function pb(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var mb=pb(`https://base-ui.com/production-error`,`Base UI`),hb=19;function gb(e){return hb>=e}function _b(e){if(!P.isValidElement(e))return null;let t=e,n=t.props;return(gb(19)?n?.ref:t.ref)??null}function vb(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}function yb(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}function bb(e,t){return typeof e==`function`?e(t):e}function xb(e,t){return typeof e==`function`?e(t):e}var Sb={};function Cb(e,t,n,r,i){if(!n&&!r&&!i&&!e)return Tb(t);let a=Tb(e);return t&&(a=Eb(a,t)),n&&(a=Eb(a,n)),r&&(a=Eb(a,r)),i&&(a=Eb(a,i)),a}function wb(e){if(e.length===0)return Sb;if(e.length===1)return Tb(e[0]);let t=Tb(e[0]);for(let n=1;n<e.length;n+=1)t=Eb(t,e[n]);return t}function Tb(e){return Ab(e)?{...jb(e,Sb)}:Db(e)}function Eb(e,t){return Ab(t)?jb(t,e):Ob(e,t)}function Db(e){let t={...e};for(let e in t){let n=t[e];kb(e,n)&&(t[e]=Nb(n))}return t}function Ob(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=vb(e.style,r);break;case`className`:e[n]=Fb(e.className,r);break;default:kb(n,r)?e[n]=Mb(e[n],r):e[n]=r}}return e}function kb(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function Ab(e){return typeof e==`function`}function jb(e,t){return Ab(e)?e(t):e??Sb}function Mb(e,t){return t?e?(...n)=>{let r=n[0];if(Ib(r)){let i=r;Pb(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:Nb(t):e}function Nb(e){return e&&((...t)=>{let n=t[0];return Ib(n)&&Pb(n),e(...t)})}function Pb(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function Fb(e,t){return t?e?t+` `+e:t:e}function Ib(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}function Lb(e,t,n={}){let r=t.render,i=Rb(t,n);return n.enabled===!1?null:Vb(e,r,i,n.state??$g)}function Rb(e,t={}){let{className:n,style:r,render:i}=e,{state:a=$g,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?bb(n,a):void 0,d=l?xb(r,a):void 0,f=l?yb(a,c):$g,p=l&&s?zb(s):void 0,m=l?vb(f,p)??{}:$g;return typeof document<`u`&&(l?Array.isArray(o)?m.ref=Tv([m.ref,_b(i),...o]):m.ref=wv(m.ref,_b(i),o):wv(null,null)),l?(u!==void 0&&(m.className=Fb(m.className,u)),d!==void 0&&(m.style=vb(m.style,d)),m):$g}function zb(e){return Array.isArray(e)?wb(e):Cb(void 0,e)}var Bb=Symbol.for(`react.lazy`);function Vb(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=Cb(n,t.props);e.ref=n.ref;let i=t;return i?.$$typeof===Bb&&(i=P.Children.toArray(t)[0]),P.cloneElement(i,e)}if(e&&typeof e==`string`)return Hb(e,n);throw Error(mb(8))}function Hb(e,t){return e===`button`?(0,P.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,P.createElement)(`img`,{alt:``,...t,key:t.key}):P.createElement(e,t)}var Ub={style:{transition:`none`}},Wb=`data-base-ui-click-trigger`,Gb={fallbackAxisSide:`end`},Kb={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},qb=t(i(),1),Jb=P.createContext(null),Yb=()=>P.useContext(Jb),Xb=Jy(`portal`);function Zb(e={}){let{ref:t,container:n,componentProps:r=$g,elementProps:i}=e,a=fb(),o=Yb()?.portalNode,[s,c]=P.useState(null),[l,u]=P.useState(null),d=Fv(e=>{e!==null&&u(e)}),f=P.useRef(null);i_(()=>{if(n===null){f.current&&(f.current=null,u(null),c(null));return}let e=(n&&(k_(n)?n:n.current))??o??document.body;if(e==null){f.current&&(f.current=null,u(null),c(null));return}f.current!==e&&(f.current=e,u(null),c(e))},[n,o]);let p=Lb(`div`,r,{ref:[t,d],props:[{id:a,[Xb]:``},i]}),m=s&&p?qb.createPortal(p,s):null;return{node:l,nodeId:P.isValidElement(p)?p.props.id:void 0,subtree:m}}var Qb=P.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:o,...s}=e,{node:c,nodeId:l,subtree:u}=Zb({container:o,ref:t,componentProps:e,elementProps:s}),d=P.useRef(null),f=P.useRef(null),p=P.useRef(null),m=P.useRef(null),[h,g]=P.useState(null),_=P.useRef(!1),v=h?.modal,y=h?.open,b=!!h&&!h.modal&&h.open&&!!c;P.useEffect(()=>{if(!c||v)return;function e(e){c&&e.relatedTarget&&Uy(e)&&(e.type===`focusin`?_.current&&=(Gy(c),!1):(Wy(c),_.current=!0))}return Cv(Sv(c,`focusin`,e,!0),Sv(c,`focusout`,e,!0))},[c,v]),i_(()=>{!c||y!==!0||!_.current||(Gy(c),_.current=!1)},[y,c]);let x=P.useMemo(()=>({beforeOutsideRef:d,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:m,portalNode:c,setFocusManagerState:g}),[c]);return(0,N.jsxs)(P.Fragment,{children:[u,(0,N.jsxs)(Jb.Provider,{value:x,children:[b&&c&&(0,N.jsx)(Gv,{"data-type":`outside`,ref:d,onFocus:e=>{Uy(e,c)?p.current?.focus():zy(h?h.domReference:null)?.focus()}}),b&&c&&(0,N.jsx)(`span`,{"aria-owns":l,style:Kb}),c&&qb.createPortal(a,c),b&&c&&(0,N.jsx)(Gv,{"data-type":`outside`,ref:f,onFocus:e=>{Uy(e,c)?m.current?.focus():(Ry(h?h.domReference:null)?.focus(),h?.closeOnFocusOut&&h?.onOpenChange(!1,xv(`focus-out`,e.nativeEvent)))}})]})]})});function $b(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var ex=class{nodesRef={current:[]};events=$b();addNode(e){this.nodesRef.current.push(e)}removeNode(e){let t=this.nodesRef.current.findIndex(t=>t===e);t!==-1&&this.nodesRef.current.splice(t,1)}},tx=P.createContext(null),nx=P.createContext(null),rx=()=>P.useContext(tx)?.id||null,ix=e=>{let t=P.useContext(nx);return e??t};function ax(e){let t=fb(),n=ix(e),r=rx();return i_(()=>{if(!t)return;let e={id:t,parentId:r};return n?.addNode(e),()=>{n?.removeNode(e)}},[n,t,r]),t}function ox(e){let{children:t,id:n}=e,r=rx();return(0,N.jsx)(tx.Provider,{value:P.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function sx(e){let{children:t,externalTree:n}=e,r=Xg(()=>n??new ex).current;return(0,N.jsx)(nx.Provider,{value:r,children:t})}function cx(e){return e==null?e:`current`in e?e.current:e}function lx(e,t){let n=D_(ev(e));return e instanceof n.KeyboardEvent?`keyboard`:e instanceof n.FocusEvent?t||`keyboard`:`pointerType`in e?e.pointerType||`keyboard`:`touches`in e?`touch`:e instanceof n.MouseEvent?t||(e.detail===0?`keyboard`:`mouse`):``}var ux=20,dx=[];function fx(){dx=dx.filter(e=>e.deref()?.isConnected)}function px(e){fx(),e&&E_(e)!==`body`&&(dx.push(new WeakRef(e)),dx.length>ux&&(dx=dx.slice(-ux)))}function mx(){return fx(),dx[dx.length-1]?.deref()}function hx(e){return e?Py(e)?e:Iy(e)[0]||e:null}function gx(e){if(e.hasAttribute(`tabindex`)&&!e.hasAttribute(`data-tabindex`)||!e.getAttribute(`role`)?.includes(`dialog`))return;let t=Fy(e).filter(e=>{let t=e.getAttribute(`data-tabindex`)||``;return Py(e)||e.hasAttribute(`data-tabindex`)&&!t.startsWith(`-`)}),n=e.getAttribute(`tabindex`);t.length===0?n!==`0`&&(e.setAttribute(`tabindex`,`0`),e.setAttribute(`data-tabindex`,`0`)):(n!==`-1`||e.hasAttribute(`data-tabindex`)&&e.getAttribute(`data-tabindex`)!==`-1`)&&(e.setAttribute(`tabindex`,`-1`),e.setAttribute(`data-tabindex`,`-1`))}function _x(e){let{context:t,children:n,disabled:r=!1,initialFocus:i=!0,returnFocus:a=!0,restoreFocus:o=!1,modal:s=!0,closeOnFocusOut:c=!0,openInteractionType:l=``,nextFocusableElement:u,previousFocusableElement:d,beforeContentFocusGuardRef:f,externalTree:p,getInsideElements:m}=e,h=`rootStore`in t?t.rootStore:t,g=h.useState(`open`),_=h.useState(`domReferenceElement`),v=h.useState(`floatingElement`),{events:y,dataRef:b}=h.context,x=Fv(()=>b.current.floatingContext?.nodeId),S=i===!1,C=ov(_)&&S,w=Av(i),T=Av(a),E=Av(l),ee=Av(g),D=ix(p),O=Yb(),k=P.useRef(!1),te=P.useRef(!1),A=P.useRef(!1),ne=P.useRef(null),re=P.useRef(``),ie=P.useRef(``),j=P.useRef(null),ae=P.useRef(null),oe=wv(j,f,O?.beforeInsideRef),se=wv(ae,O?.afterInsideRef),ce=r_(),le=r_(),ue=Vv(),de=O!=null,fe=sv(v),pe=Fv((e=fe)=>e?Iy(e):[]),me=Fv(()=>m?.().filter(e=>e!=null)??[]);P.useEffect(()=>{if(r||!s)return;function e(e){e.key===`Tab`&&$_(fe,Q_(Hv(fe)))&&pe().length===0&&!C&&y_(e)}return Sv(Hv(fe),`keydown`,e)},[r,fe,s,C,pe]),P.useEffect(()=>{if(r||!g)return;let e=Hv(fe);function t(){A.current=!1}function n(e){let t=ev(e),n=me();A.current=!($_(v,t)||$_(_,t)||$_(O?.portalNode,t)||n.some(e=>e===t||$_(e,t))),ie.current=e.pointerType||`keyboard`,t?.closest(`[data-base-ui-click-trigger]`)&&(te.current=!0,le.start(0,()=>{te.current=!1}))}function i(){ie.current=`keyboard`}return Cv(Sv(e,`pointerdown`,n,!0),Sv(e,`pointerup`,t,!0),Sv(e,`pointercancel`,t,!0),Sv(e,`keydown`,i,!0),t)},[r,v,_,fe,g,O,le,me]),P.useEffect(()=>{if(r||!c)return;let e=Hv(fe);function t(){te.current=!0,le.start(0,()=>{te.current=!1})}function n(e){let t=ev(e);Py(t)&&(ne.current=t)}function i(t){let n=t.relatedTarget,r=t.currentTarget,i=ev(t);s&&n==null&&i!=null&&$_(v,i)&&px(i),queueMicrotask(()=>{let a=x(),c=h.context.triggerElements,l=me(),f=n?.hasAttribute(Jy(`focus-guard`))&&[j.current,ae.current,O?.beforeInsideRef.current,O?.afterInsideRef.current,O?.beforeOutsideRef.current,O?.afterOutsideRef.current,cx(d),cx(u)].includes(n),p=!($_(_,n)||$_(v,n)||$_(n,v)||$_(O?.portalNode,n)||l.some(e=>e===n||$_(e,n))||c.hasMatchingElement(e=>$_(e,n))||f||D&&(Ky(D.nodesRef.current,a).find(e=>$_(e.context?.elements.floating,n)||$_(e.context?.elements.domReference,n))||qy(D.nodesRef.current,a).find(e=>[e.context?.elements.floating,sv(e.context?.elements.floating)].includes(n)||e.context?.elements.domReference===n)));if(r===_&&fe&&gx(fe),o&&r!==_&&!by(i)&&Q_(e)===e.body){if(j_(fe)&&(fe.focus(),o===`popup`)){ue.request(()=>{fe.focus()});return}let e=pe(),t=ne.current,n=(t&&e.includes(t)?t:null)||e[e.length-1]||fe;j_(n)&&n.focus()}if(b.current.insideReactTree){b.current.insideReactTree=!1;return}(C||!s)&&n&&p&&!te.current&&(C||n!==mx())&&(k.current=!0,h.setOpen(!1,xv(vv,t)))})}function a(){A.current||(b.current.insideReactTree=!0,ce.start(0,()=>{b.current.insideReactTree=!1}))}let l=j_(_)?_:null;if(!(!v&&!l))return Cv(l&&Sv(l,`focusout`,i),l&&Sv(l,`pointerdown`,t),v&&Sv(v,`focusin`,n),v&&Sv(v,`focusout`,i),v&&O&&Sv(v,`focusout`,a,!0))},[r,_,v,fe,s,D,O,h,c,o,pe,C,x,b,ce,le,ue,u,d,me]),P.useEffect(()=>{if(r||!v||!g)return;let e=Array.from(O?.portalNode?.querySelectorAll(`[${Jy(`portal`)}]`)||[]),t=(D?qy(D.nodesRef.current,x()):[]).find(e=>ov(e.context?.elements.domReference||null))?.context?.elements.domReference,n=cb([v,...e,j.current,ae.current,O?.beforeOutsideRef.current,O?.afterOutsideRef.current,...me(),t,cx(d),cx(u),C?_:null].filter(e=>e!=null),{ariaHidden:s||C,mark:!1}),i=cb([v,...e].filter(e=>e!=null));return()=>{i(),n()}},[g,r,_,v,s,O,C,D,x,u,d,me]),i_(()=>{if(!g||r||!j_(fe))return;re.current=``,ie.current=``;let e=Hv(fe),t=Q_(e);queueMicrotask(()=>{let n=w.current,r=typeof n==`function`?n(E.current||``):n;if(r===void 0||r===!1||$_(fe,t))return;let i=null,a=()=>(i??=pe(fe),i[0]||fe),o;o=r===!0||r===null?a():cx(r),o||=a();let s=$_(fe,Q_(e));Xy(o,{preventScroll:o===fe,shouldFocus(){if(!ee.current)return!1;if(s)return!0;let t=Q_(e);return!(t!==o&&$_(fe,t))}})})},[r,g,fe,pe,w,E,ee]),i_(()=>{if(r||!fe)return;let e=Hv(fe),t=Q_(e),n=E.current==null;px(t);function i(e){if(e.open||(re.current=lx(e.nativeEvent,ie.current)),e.reason===`trigger-hover`&&e.nativeEvent.type===`mouseleave`&&(k.current=!0),e.reason===`outside-press`)if(e.nested)k.current=!1;else if(x_(e.nativeEvent)||S_(e.nativeEvent))k.current=!1;else{let e=!1;Hv(fe).createElement(`div`).focus({get preventScroll(){return e=!0,!1}}),e?k.current=!1:k.current=!0}}y.on(`openchange`,i);function a(e){let r=T.current,i=typeof r==`function`?r(e):r;if(i===void 0||i===!1)return null;i===null&&(i=!0);let a=_?.isConnected?_:null,o=t?.isConnected&&E_(t)!==`body`?t:null,s=n?o||a:a||o;return s||=mx()||null,typeof i==`boolean`?s:cx(i)||s||null}return()=>{y.off(`openchange`,i);let t=Q_(e),n=me(),r=$_(v,t)||n.some(e=>e===t||$_(e,t))||D&&Ky(D.nodesRef.current,x(),!1).some(e=>$_(e.context?.elements.floating,t)),o=T.current,s=re.current,c=a(s);queueMicrotask(()=>{let n=hx(c),i=typeof o!=`boolean`;if(o&&!k.current&&j_(n)&&(!(!i&&n!==t&&t!==e.body)||r)){let e={preventScroll:!0};s===`keyboard`&&(e.focusVisible=!0),n.focus(e)}k.current=!1})}},[r,v,fe,T,E,y,D,_,x,me]),i_(()=>{if(!g_||g||!v)return;let e=Q_(Hv(v));!j_(e)||!iv(e)||$_(v,e)&&e.blur()},[g,v]),i_(()=>{if(!(r||!O))return O.setFocusManagerState({modal:s,closeOnFocusOut:c,open:g,onOpenChange:h.setOpen,domReference:_}),()=>{O.setFocusManagerState(null)}},[r,O,s,g,h,c,_]),i_(()=>{if(!(r||!fe))return gx(fe),()=>{queueMicrotask(fx)}},[r,fe]);let he=!r&&(s?!C:!0)&&(de||s);return(0,N.jsxs)(P.Fragment,{children:[he&&(0,N.jsx)(Gv,{"data-type":`inside`,ref:oe,onFocus:e=>{if(s){let e=pe();Xy(e[e.length-1])}else O?.portalNode&&(k.current=!1,Uy(e,O.portalNode)?Ry(_)?.focus():cx(d??O.beforeOutsideRef)?.focus())}}),n,he&&(0,N.jsx)(Gv,{"data-type":`inside`,ref:se,onFocus:e=>{s?Xy(pe()[0]):O?.portalNode&&(c&&(k.current=!0),Uy(e,O.portalNode)?zy(_)?.focus():cx(u??O.afterOutsideRef)?.focus())}})]})}function vx(e,t={}){let{enabled:n=!0,event:r=`click`,toggle:i=!0,ignoreMouse:a=!1,stickIfOpen:o=!0,touchOpenDelay:s=0,reason:c=mv}=t,l=`rootStore`in e?e.rootStore:e,u=l.context.dataRef,d=P.useRef(void 0),f=Vv(),p=r_(),m=P.useMemo(()=>{function e(e,t,n,r){let i=xv(c,t,n);e&&r===`touch`&&s>0?p.start(s,()=>{l.setOpen(!0,i)}):l.setOpen(e,i)}function t(e,t,n){let r=u.current.openEvent,a=l.select(`domReferenceElement`)!==t;return e&&a||!e||!i?!0:r&&o?!n(r.type):!1}return{onPointerDown(e){d.current=C_(e.pointerType,!0)&&S_(e.nativeEvent)?`virtual`:e.pointerType},onMouseDown(n){let i=d.current,o=n.nativeEvent,s=l.select(`open`);if(n.button!==0||r===`click`||C_(i,!0)&&a)return;let c=t(s,n.currentTarget,e=>e===`click`||e===`mousedown`),u=ev(o);if(iv(u)){e(c,o,u,i);return}let p=n.currentTarget;f.request(()=>{e(c,o,p,i)})},onClick(n){if(r===`mousedown-only`)return;let i=d.current;if(r===`mousedown`&&i){d.current=void 0;return}C_(i,!0)&&a||e(t(l.select(`open`),n.currentTarget,e=>e===`click`||e===`mousedown`||e===`keydown`||e===`keyup`),n.nativeEvent,n.currentTarget,i)},onKeyDown(){d.current=void 0}}},[u,r,a,c,l,o,i,f,p,s]);return P.useMemo(()=>n?{reference:m}:$g,[n,m])}function yx(){return!1}function bx(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function xx(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=yx,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,u=l.useState(`open`),d=l.useState(`floatingElement`),{dataRef:f}=l.context,p=ix(c),m=Fv(typeof i==`function`?i:()=>!1),h=typeof i==`function`?m:i,g=h!==!1,_=Fv(()=>a),{escapeKey:v,outsidePress:y}=bx(s),b=P.useRef(!1),x=P.useRef(!1),S=P.useRef(!1),C=P.useRef(!1),w=P.useRef(``),T=P.useRef(null),E=r_(),ee=r_(),D=Fv(()=>{ee.clear(),f.current.insideReactTree=!1}),O=Fv(e=>{let t=f.current.floatingContext?.nodeId;return(p?Ky(p.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),k=Fv(e=>nv(e,l.select(`floatingElement`))||nv(e,l.select(`domReferenceElement`))),te=Fv(e=>{o()&&l.setOpen(!1,xv(mv,e.nativeEvent))}),A=Fv(e=>{if(!u||!n||!r||e.key!==`Escape`||C.current||!v&&O(`__escapeKeyBubbles`))return;let t=xv(yv,b_(e)?e.nativeEvent:e);l.setOpen(!1,t),t.isCanceled||e.preventDefault(),!v&&!t.isPropagationAllowed&&e.stopPropagation()}),ne=Fv(()=>{f.current.insideReactTree=!0,ee.start(0,D)}),re=Fv(e=>{if(!u||!n||e.button!==0)return;let t=ev(e.nativeEvent);$_(l.select(`floatingElement`),t)&&(b.current||(b.current=!0,x.current=!1))}),ie=Fv(e=>{!u||!n||(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&b.current&&(x.current=!0)});P.useEffect(()=>{if(!u||!n)return D;f.current.__escapeKeyBubbles=v,f.current.__outsidePressBubbles=y;let e=new n_,t=new n_;function i(){e.clear(),C.current=!0}function a(){e.start(g_?5:0,()=>{C.current=!1})}function o(){S.current=!0,t.start(0,()=>{S.current=!1})}function s(){b.current=!1,x.current=!1}function c(){let e=w.current,t=e===`pen`||!e?`mouse`:e,n=_(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function m(e){let t=c();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function ee(e){let t=f.current.floatingContext?.nodeId,n=p&&Ky(p.nodesRef.current,t).some(t=>nv(e,t.context?.elements.floating));return k(e)||n}function te(e){if(m(e)){e.type!==`click`&&!k(e)&&(t.clear(),S.current=!1),D();return}if(f.current.insideReactTree){D();return}let n=ev(e),r=`[${Jy(`inert`)}]`,i=A_(n)?n.getRootNode():null,a=Array.from((M_(i)?i:Hv(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>$_(e,n))))return;let s=A_(n)?n:null;for(;s&&!U_(s);){let e=K_(s);if(U_(e)||!A_(e))break;s=e}if(!(a.length&&A_(n)&&!rv(n)&&!$_(n,l.select(`floatingElement`))&&a.every(e=>!$_(s,e)))){if(j_(n)&&!(`touches`in e)){let t=U_(n),r=W_(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!ee(e)){if(c()===`intentional`&&S.current){t.clear(),S.current=!1;return}typeof h==`function`&&!h(e)||O(`__outsidePressBubbles`)||(l.setOpen(!1,xv(gv,e)),D())}}}function ne(e){c()!==`sloppy`||e.pointerType===`touch`||!l.select(`open`)||!n||k(e)||te(e)}function re(e){if(c()!==`sloppy`||!l.select(`open`)||!n||k(e))return;let t=e.touches[0];t&&(T.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},E.start(1e3,()=>{T.current&&(T.current.dismissOnTouchEnd=!1,T.current.dismissOnMouseDown=!1)}))}function ie(e,t){let n=ev(e);if(!n)return;let r=Sv(n,e.type,()=>{t(e),r()})}function j(e){w.current=`touch`,ie(e,re)}function ae(e){E.clear(),e.type===`pointerdown`&&(w.current=e.pointerType),!(e.type===`mousedown`&&T.current&&!T.current.dismissOnMouseDown)&&ie(e,e=>{e.type===`pointerdown`?ne(e):te(e)})}function oe(e){if(!b.current)return;let n=x.current;if(s(),c()===`intentional`){if(e.type===`pointercancel`){n&&o();return}if(!ee(e)){if(n){o();return}typeof h==`function`&&!h(e)||(t.clear(),S.current=!0,D())}}}function se(e){if(c()!==`sloppy`||!T.current||k(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-T.current.startX),r=Math.abs(t.clientY-T.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(T.current.dismissOnTouchEnd=!0),i>10&&(te(e),E.clear(),T.current=null)}function ce(e){ie(e,se)}function le(e){c()!==`sloppy`||!T.current||k(e)||(T.current.dismissOnTouchEnd&&te(e),E.clear(),T.current=null)}function ue(e){ie(e,le)}let de=Hv(d),fe=Cv(r&&Cv(Sv(de,`keydown`,A),Sv(de,`compositionstart`,i),Sv(de,`compositionend`,a)),g&&Cv(Sv(de,`click`,ae,!0),Sv(de,`pointerdown`,ae,!0),Sv(de,`pointerup`,oe,!0),Sv(de,`pointercancel`,oe,!0),Sv(de,`mousedown`,ae,!0),Sv(de,`mouseup`,oe,!0),Sv(de,`touchstart`,j,!0),Sv(de,`touchmove`,ce,!0),Sv(de,`touchend`,ue,!0)));return()=>{fe(),e.clear(),t.clear(),s(),S.current=!1,D()}},[f,d,r,g,h,u,n,v,y,A,D,_,O,k,p,l,E]);let j=P.useMemo(()=>({onKeyDown:A,onPointerDown:te,onClick:te}),[A,te]),ae=P.useMemo(()=>({onKeyDown:A,onPointerDown:ie,onMouseDown:ie,onClickCapture:ne,onMouseDownCapture(e){ne(),re(e)},onPointerDownCapture(e){ne(),re(e)},onMouseUpCapture:ne,onTouchEndCapture:ne,onTouchMoveCapture:ne}),[A,ne,re,ie]);return P.useMemo(()=>n?{reference:j,floating:ae,trigger:j}:{},[n,j,ae])}function Sx(e,t,n){let{reference:r,floating:i}=e,a=iy(t),o=ay(t),s=ry(o),c=ey(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=ty(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Cx(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=$v(t,e),p=_y(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=vy(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=vy(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var wx=50,Tx=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Cx},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Sx(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<wx&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Sx(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ex=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=$v(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=ey(r),_=iy(o),v=ey(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[hy(o)]:sy(o)),x=p!==`none`;!d&&x&&b.push(...my(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=oy(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==iy(t))||T.every(e=>iy(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=iy(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Dx=new Set([`left`,`top`]);async function Ox(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ey(n),s=ty(n),c=iy(n)===`y`,l=Dx.has(o)?-1:1,u=a&&c?-1:1,d=$v(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var kx=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Ox(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Ax=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=$v(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=iy(i),p=ny(f),m=u[p],h=u[f],g=(e,t)=>Qv(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},jx=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=$v(e,t),u={x:n,y:r},d=iy(i),f=ny(d),p=u[f],m=u[d],h=$v(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Dx.has(ey(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Mx=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=$v(e,t),c=await i.detectOverflow(t,s),l=ey(n),u=ty(n),d=iy(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Kv(p-c[m],g),y=Kv(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*qv(c.left,c.right):S=p-2*qv(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function Nx(e){let t=W_(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=j_(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Jv(n)!==a||Jv(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Px(e){return A_(e)?e:e.contextElement}function Fx(e){let t=Px(e);if(!j_(t))return Xv(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Nx(t),o=(a?Jv(n.width):n.width)/r,s=(a?Jv(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Ix=Xv(0);function Lx(e){let t=D_(e);return!H_()||!t.visualViewport?Ix:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Rx(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===D_(e)}function zx(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Px(e),o=Xv(1);t&&(r?A_(r)&&(o=Fx(r)):o=Fx(e));let s=Rx(a,n,r)?Lx(a):Xv(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=D_(a),t=A_(r)?D_(r):r,n=e,i=Y_(n);for(;i&&t!==n;){let e=Fx(i),t=i.getBoundingClientRect(),r=W_(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=D_(i),i=Y_(n)}}return vy({width:u,height:d,x:c,y:l})}function Bx(e,t){let n=G_(e).scrollLeft;return t?t.left+n:zx(O_(e)).left+n}function Vx(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Bx(e,n),y:n.top+t.scrollTop}}function Hx(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=O_(r),s=t?F_(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Xv(1),u=Xv(0),d=j_(r);if((d||!a)&&((E_(r)!==`body`||N_(o))&&(c=G_(r)),d)){let e=zx(r);l=Fx(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Vx(o,c):Xv(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Ux(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Wx(e){let t=G_(e),n=e.ownerDocument.body,r=qv(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=qv(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Bx(e),o=-t.scrollTop;return W_(n).direction===`rtl`&&(a+=qv(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var Gx=25;function Kx(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=D_(e),a=O_(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!H_()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Bx(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Gx&&(s-=o)}return{width:s,height:c,x:l,y:u}}function qx(e,t){let n=zx(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Fx(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Jx(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Kx(e,n,t);else if(t===`document`)r=Wx(O_(e));else if(A_(t))r=qx(t,n);else{let n=Lx(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return vy(r)}function Yx(e,t){let n=t.get(e);if(n)return n;let r=J_(e,[],!1).filter(e=>A_(e)&&E_(e)!==`body`),i=null,a=W_(e).position===`fixed`,o=a?K_(e):e;for(;A_(o)&&!U_(o);){let e=W_(o),t=B_(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=K_(o)}return t.set(e,r),r}function Xx(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?F_(t)?[]:Yx(t,this._c):[].concat(n),r],o=Jx(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Jx(t,a[e],i);s=qv(n.top,s),c=Kv(n.right,c),l=Kv(n.bottom,l),u=qv(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Zx(e){let{width:t,height:n}=Nx(e);return{width:t,height:n}}function Qx(e,t,n){let r=j_(t),i=O_(t),a=n===`fixed`,o=zx(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Xv(0);if((r||!a)&&((E_(t)!==`body`||N_(i))&&(s=G_(t)),r)){let e=zx(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Bx(i));let l=i&&!r&&!a?Vx(i,s):Xv(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function $x(e){return W_(e).position===`static`}function eS(e,t){if(!j_(e)||W_(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return O_(e)===n&&(n=n.ownerDocument.body),n}function tS(e,t){let n=D_(e);if(F_(e))return n;if(!j_(e)){let t=K_(e);for(;t&&!U_(t);){if(A_(t)&&!$x(t))return t;t=K_(t)}return n}let r=eS(e,t);for(;r&&P_(r)&&$x(r);)r=eS(r,t);return r&&U_(r)&&$x(r)&&!B_(r)?n:r||V_(e)||n}var nS=async function(e){let t=this.getOffsetParent||tS,n=this.getDimensions,r=await n(e.floating);return{reference:Qx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function rS(e){return W_(e).direction===`rtl`}var iS={convertOffsetParentRelativeRectToViewportRelativeRect:Hx,getDocumentElement:O_,getClippingRect:Xx,getOffsetParent:tS,getElementRects:nS,getClientRects:Ux,getDimensions:Zx,getScale:Fx,isElement:A_,isRTL:rS};function aS(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function oS(e,t,n){let r=null,i,a=O_(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Yv(d),h=Yv(a.clientWidth-(u+f)),g=Yv(a.clientHeight-(d+p)),_=Yv(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:qv(0,Kv(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!aS(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=D_(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function sS(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Px(e),u=i||a?[...l?J_(l):[],...t?J_(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?oS(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?zx(e):null;c&&g();function g(){let t=zx(e);h&&!aS(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var cS=kx,lS=Ax,uS=Ex,dS=Mx,fS=jx,pS=(e,t,n)=>{let r=new Map,i=n??{},a={...iS,...i.platform,_c:r};return Tx(e,t,{...i,platform:a})},mS=typeof document<`u`?P.useLayoutEffect:function(){};function hS(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!hS(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!hS(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function gS(e){return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function _S(e,t){let n=gS(e);return Math.round(t*n)/n}function vS(e){let t=P.useRef(e);return mS(()=>{t.current=e}),t}function yS(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=P.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=P.useState(r);hS(f,r)||p(r);let[m,h]=P.useState(null),[g,_]=P.useState(null),v=P.useCallback(e=>{e!==S.current&&(S.current=e,h(e))},[]),y=P.useCallback(e=>{e!==C.current&&(C.current=e,_(e))},[]),b=a||m,x=o||g,S=P.useRef(null),C=P.useRef(null),w=P.useRef(u),T=c!=null,E=vS(c),ee=vS(i),D=vS(l),O=P.useCallback(()=>{if(!S.current||!C.current)return;let e={placement:t,strategy:n,middleware:f};ee.current&&(e.platform=ee.current),pS(S.current,C.current,e).then(e=>{let t={...e,isPositioned:D.current!==!1};k.current&&!hS(w.current,t)&&(w.current=t,qb.flushSync(()=>{d(t)}))})},[f,t,n,ee,D]);mS(()=>{l===!1&&w.current.isPositioned&&(w.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let k=P.useRef(!1);mS(()=>(k.current=!0,()=>{k.current=!1}),[]),mS(()=>{if(b&&(S.current=b),x&&(C.current=x),b&&x){if(E.current)return E.current(b,x,O);O()}},[b,x,O,E,T]);let te=P.useMemo(()=>({reference:S,floating:C,setReference:v,setFloating:y}),[v,y]),A=P.useMemo(()=>({reference:b,floating:x}),[b,x]),ne=P.useMemo(()=>{let e={position:n,left:0,top:0};if(!A.floating)return e;let t=_S(A.floating,u.x),r=_S(A.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...gS(A.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,A.floating,u.x,u.y]);return P.useMemo(()=>({...u,update:O,refs:te,elements:A,floatingStyles:ne}),[u,O,te,A,ne])}var bS=(e,t)=>{let n=cS(e);return{name:n.name,fn:n.fn,options:[e,t]}},xS=(e,t)=>{let n=lS(e);return{name:n.name,fn:n.fn,options:[e,t]}},SS=(e,t)=>({fn:fS(e).fn,options:[e,t]}),CS=(e,t)=>{let n=uS(e);return{name:n.name,fn:n.fn,options:[e,t]}},wS=(e,t)=>{let n=dS(e);return{name:n.name,fn:n.fn,options:[e,t]}},TS=n((e=>{var t=r();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:n,a=t.useState,o=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),ES=n(((e,t)=>{t.exports=TS()})),DS=n((e=>{var t=r(),n=ES();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=n.useSyncExternalStore,s=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),OS=n(((e,t)=>{t.exports=DS()})),kS=[],AS=void 0;function jS(){return AS}function MS(e){kS.push(e)}var NS=ES(),PS=OS(),FS=gb(19)?RS:zS;function IS(e,t,n,r,i){return FS(e,t,n,r,i)}function LS(e,t,n,r,i){let a=P.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,NS.useSyncExternalStore)(e.subscribe,a,a)}MS({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,NS.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function RS(e,t,n,r,i){let a=jS();if(!a)return LS(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function zS(e,t,n,r,i){return(0,PS.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var BS=class{constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return IS(this,e,t,n,r)}},VS=class extends BS{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){P.useDebugValue(e);let n=this;i_(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;i_(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;i_(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){P.useDebugValue(e);let n=this,r=t!==void 0;i_(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return P.useDebugValue(e),IS(this,this.selectors[e],t,n,r)}useContextCallback(e,t){P.useDebugValue(e);let n=Fv(t??Zg);this.context[e]=n}useStateSetter(e){let t=P.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},HS={open:e=>e.open,transitionStatus:e=>e.transitionStatus,domReferenceElement:e=>e.domReferenceElement,referenceElement:e=>e.positionReference??e.referenceElement,floatingElement:e=>e.floatingElement,floatingId:e=>e.floatingId},US=class extends VS{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:$b(),nested:n,triggerElements:i},HS),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&w_(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}};function WS(e){let{popupStore:t,treatPopupAsFloatingElement:n=!1,floatingRootContext:r,floatingId:i,nested:a,onOpenChange:o}=e,s=t.useState(`open`),c=t.useState(`activeTriggerElement`),l=t.useState(n?`popupElement`:`positionerElement`),u=t.context.triggerElements,d=o,f=P.useRef(null);r===void 0&&f.current===null&&(f.current=new US({open:s,transitionStatus:void 0,referenceElement:c,floatingElement:l,triggerElements:u,onOpenChange:d,floatingId:i,syncOnly:!0,nested:a}));let p=r??f.current;return t.useSyncedValue(`floatingId`,i),i_(()=>{let e={open:s,floatingId:i,referenceElement:c,floatingElement:l};A_(c)&&(e.domReferenceElement=c),p.state.positionReference===p.state.referenceElement&&(e.positionReference=c),p.update(e)},[s,i,c,l,p]),p.context.onOpenChange=d,p.context.nested=a,p}function GS(e,t=!1,n=!1){let[r,i]=P.useState(e&&t?`idle`:void 0),[a,o]=P.useState(e);return e&&!a&&(o(!0),i(`starting`)),!e&&a&&r!==`ending`&&!n&&i(`ending`),!e&&!a&&r===`ending`&&i(void 0),i_(()=>{if(!e&&a&&r!==`ending`&&n){let e=Bv.request(()=>{i(`ending`)});return()=>{Bv.cancel(e)}}},[e,a,r,n]),i_(()=>{if(!e||t)return;let n=Bv.request(()=>{i(void 0)});return()=>{Bv.cancel(n)}},[t,e]),i_(()=>{if(!e||!t)return;e&&a&&r!==`idle`&&i(`starting`);let n=Bv.request(()=>{i(`idle`)});return()=>{Bv.cancel(n)}},[t,e,a,r]),{mounted:a,setMounted:o,transitionStatus:r}}function KS(e,t=!1){let n=Vv();return Fv((r,i=null)=>{n.cancel();let a=cx(e);if(a==null)return;let o=a,s=()=>{qb.flushSync(r)};if(typeof o.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){r();return}function c(){Promise.all(o.getAnimations().map(e=>e.finished)).then(()=>{i?.aborted||s()},()=>{if(!i?.aborted){if(o.getAnimations().some(e=>e.pending||e.playState!==`finished`)){c();return}s()}})}if(t){let e=`data-starting-style`;if(!o.hasAttribute(e)){n.request(c);return}let t=new MutationObserver(()=>{o.hasAttribute(e)||(t.disconnect(),c())});t.observe(o,{attributes:!0,attributeFilter:[e]}),i?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}n.request(c)})}function qS(e){let{enabled:t=!0,open:n,ref:r,onComplete:i}=e,a=Fv(i),o=KS(r,n);P.useEffect(()=>{if(!t)return;let e=new AbortController;return o(a,e.signal),()=>{e.abort()}},[t,n,a,o])}var JS={tabIndex:-1,[X_]:``};function YS(e){return t=>t===`touch`?e.current:!0}function XS(e,t=!1){let n=fb(),r=rx()!=null,i=Xg(()=>e(n,r)).current;return WS({popupStore:i,treatPopupAsFloatingElement:t,floatingRootContext:i.state.floatingRootContext,floatingId:n,nested:r,onOpenChange:i.setOpen}),i}function ZS({handle:e,store:t}){return i_(()=>e.attachStore(t),[e,t]),null}function QS(e,t){let n=P.useRef(null),r=P.useRef(null);return P.useCallback(i=>{if(e===void 0)return;let a=!1;if(n.current!==null){let e=n.current,i=r.current,o=t.context.triggerElements.getById(e);i&&o===i&&(t.context.triggerElements.delete(e),a=!0),n.current=null,r.current=null}if(i!==null&&(n.current=e,r.current=i,t.context.triggerElements.add(e,i),a=!0),a){let e=t.context.triggerElements.size;t.select(`open`)&&t.state.triggerCount!==e&&t.set(`triggerCount`,e)}},[t,e])}function $S(e,t,n,r=!1){t?e.preventUnmountingOnClose=!1:r&&(e.preventUnmountingOnClose=!0);let i=n?.id??null;(i||t)&&(e.activeTriggerId=i,e.activeTriggerElement=n??null)}function eC(e){let t=!1;return e.preventUnmountOnClose=()=>{t=!0},()=>t}function tC(e,t,n,r){let i=n.useState(`isMountedByTrigger`,e),a=QS(e,n),o=Fv(t=>{let i=n.select(`open`),a=n.select(`activeTriggerId`);if(a===e){n.update({activeTriggerElement:t,...i?r:null});return}a==null&&i&&n.update({activeTriggerId:e,activeTriggerElement:t,...r})}),s=P.useCallback(e=>{a(e),e&&o(e)},[a,o]);return i_(()=>{i&&n.update({activeTriggerElement:t.current,...r})},[i,n,t,...Object.values(r)]),{registerTrigger:s,isMountedByThisTrigger:i}}function nC(e,t={}){let{closeOnActiveTriggerUnmount:n=!1}=t,r=P.useRef(null),i=e.useState(`open`);i_(()=>{if(!i){r.current=null,e.state.triggerCount!==0&&e.set(`triggerCount`,0);return}let t=e.context.triggerElements.size,a={};e.state.triggerCount!==t&&(a.triggerCount=t);let o=e.select(`activeTriggerId`),s=null;if(o){let t=e.context.triggerElements.getById(o);if(t)r.current=o,t!==e.state.activeTriggerElement&&(a.activeTriggerElement=t);else{for(let[t,n]of e.context.triggerElements.entries())if(n===e.state.activeTriggerElement){a.activeTriggerId=t,a.activeTriggerElement=n,r.current=t;break}a.activeTriggerId===void 0&&(r.current===o?s=o:r.current=null)}}else r.current=null;if(!s&&!o&&t===1){let t=e.context.triggerElements.entries().next();if(!t.done){let[e,n]=t.value;a.activeTriggerId=e,a.activeTriggerElement=n,r.current=e}}(a.triggerCount!==void 0||a.activeTriggerId!==void 0||a.activeTriggerElement!==void 0)&&e.update(a),s&&n&&queueMicrotask(()=>{if(e.select(`open`)&&e.select(`activeTriggerId`)===s&&!e.context.triggerElements.getById(s)){let t=xv(pv);e.setOpen(!1,t),t.isCanceled||e.update({activeTriggerId:null,activeTriggerElement:null})}})},[i,e,e.useState(`triggerCount`),e.useState(`activeTriggerId`),e.useState(`activeTriggerElement`),n])}function rC(e,t,n){let{mounted:r,setMounted:i,transitionStatus:a}=GS(e),o=t.useState(`preventUnmountingOnClose`),s=e?!1:o;t.useSyncedValues({mounted:r,transitionStatus:a,preventUnmountingOnClose:s});let c=Fv(()=>{i(!1),t.update({activeTriggerId:null,activeTriggerElement:null,mounted:!1,preventUnmountingOnClose:!1}),n?.(),t.context.onOpenChangeComplete?.(!1)});return qS({enabled:r&&!e&&!s,open:e,ref:t.context.popupRef,onComplete(){e||c()}}),{forceUnmount:c,transitionStatus:a}}function iC(e,t){e.useSyncedValues(t),i_(()=>()=>{e.update({activeTriggerProps:$g,inactiveTriggerProps:$g,popupProps:$g})},[e])}function aC(e,t){i_(()=>{!t&&e.state.openMethod!==null&&e.set(`openMethod`,null)},[t,e]),i_(()=>()=>{e.state.openMethod!==null&&e.set(`openMethod`,null)},[e])}var oC=class{constructor(){this.idMap=new Map}add(e,t){this.idMap.set(e,t)}delete(e){this.idMap.delete(e)}hasElement(e){for(let t of this.idMap.values())if(t===e)return!0;return!1}hasMatchingElement(e){for(let t of this.idMap.values())if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.idMap.values()}get size(){return this.idMap.size}};function sC(){return new US({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:new oC,floatingId:void 0,syncOnly:!1,nested:!1,onOpenChange:void 0})}function cC(){return{open:!1,openProp:void 0,mounted:!1,transitionStatus:void 0,floatingRootContext:sC(),floatingId:void 0,triggerCount:0,preventUnmountingOnClose:!1,payload:void 0,activeTriggerId:null,activeTriggerElement:null,triggerIdProp:void 0,popupElement:null,positionerElement:null,activeTriggerProps:$g,inactiveTriggerProps:$g,popupProps:$g}}function lC(e,t,n=!1){return new US({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:e,floatingId:t,syncOnly:!0,nested:n,onOpenChange:void 0})}var uC=e=>e.triggerIdProp??e.activeTriggerId,dC=e=>e.openProp??e.open,fC=e=>(e.popupElement?.id??e.floatingId)||void 0;function pC(e,t){return t!==void 0&&dC(e)&&uC(e)===t}function mC(e,t){return pC(e,t)?!0:t!==void 0&&dC(e)&&uC(e)==null&&e.triggerCount===1}var hC={open:dC,mounted:e=>e.mounted,transitionStatus:e=>e.transitionStatus,floatingRootContext:e=>e.floatingRootContext,triggerCount:e=>e.triggerCount,preventUnmountingOnClose:e=>e.preventUnmountingOnClose,payload:e=>e.payload,activeTriggerId:uC,activeTriggerElement:e=>e.mounted?e.activeTriggerElement:null,popupId:fC,isTriggerActive:(e,t)=>t!==void 0&&uC(e)===t,isOpenedByTrigger:(e,t)=>pC(e,t),isMountedByTrigger:(e,t)=>t!==void 0&&uC(e)===t&&e.mounted,triggerProps:(e,t)=>t?e.activeTriggerProps:e.inactiveTriggerProps,triggerPopupId:(e,t)=>mC(e,t)?fC(e):void 0,popupProps:e=>e.popupProps,popupElement:e=>e.popupElement,positionerElement:e=>e.positionerElement};function gC(e){return(0,NS.useSyncExternalStore)(P.useCallback(t=>e===void 0?Zg:e.subscribeStore(t),[e]),P.useCallback(()=>e===void 0?void 0:e.store,[e]),()=>e?.serverStore)}function _C(e){return vC(e,e.rootContext)}function vC(e,t){let{nodeId:n,externalTree:r}=e,i=t.useState(`referenceElement`),a=t.useState(`floatingElement`),o=t.useState(`domReferenceElement`),s=t.useState(`open`),c=t.useState(`floatingId`),[l,u]=P.useState(null),[d,f]=P.useState(void 0),[p,m]=P.useState(void 0),h=P.useRef(null),g=ix(r),_=P.useMemo(()=>({reference:i,floating:a,domReference:o}),[i,a,o]),v=yS({...e,elements:{..._,...l&&{reference:l}}}),y=A_(d)?d:null,b=p===void 0?t.state.floatingElement:p;t.useSyncedValue(`referenceElement`,d??null),t.useSyncedValue(`domReferenceElement`,d===void 0?o:y),t.useSyncedValue(`floatingElement`,b);let x=P.useCallback(e=>{let t=A_(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;u(t),v.refs.setReference(t)},[v.refs]),S=P.useCallback(e=>{(A_(e)||e===null)&&(h.current=e,f(e)),(A_(v.refs.reference.current)||v.refs.reference.current===null||e!==null&&!A_(e))&&v.refs.setReference(e)},[v.refs,f]),C=P.useCallback(e=>{m(e),v.refs.setFloating(e)},[v.refs]),w=P.useMemo(()=>({...v.refs,setReference:S,setFloating:C,setPositionReference:x,domReference:h}),[v.refs,S,C,x]),T=P.useMemo(()=>({...v.elements,domReference:o}),[v.elements,o]),E=P.useMemo(()=>({...v,dataRef:t.context.dataRef,open:s,onOpenChange:t.setOpen,events:t.context.events,floatingId:c,refs:w,elements:T,nodeId:n,rootStore:t}),[v,w,T,n,t,s,c]);return i_(()=>{o&&(h.current=o)},[o]),i_(()=>{t.context.dataRef.current.floatingContext=E;let e=g?.nodesRef.current.find(e=>e.id===n);e&&(e.context=E)}),P.useMemo(()=>({...v,context:E,refs:w,elements:T,rootStore:t}),[v,w,T,E,t])}var yC=class e{constructor(){this.pointerType=void 0,this.interactedInside=!1,this.handler=void 0,this.blockMouseMove=!0,this.performedPointerEventsMutation=!1,this.pointerEventsScopeElement=null,this.pointerEventsReferenceElement=null,this.pointerEventsFloatingElement=null,this.restTimeoutPending=!1,this.openChangeTimeout=new n_,this.restTimeout=new n_,this.handleCloseOptions=void 0}static create(){return new e}dispose=()=>{this.openChangeTimeout.clear(),this.restTimeout.clear()};disposeEffect=()=>this.dispose},bC=new WeakMap;function xC(e){if(!e.performedPointerEventsMutation)return;let t=e.pointerEventsScopeElement;t&&bC.get(t)===e&&(e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),bC.delete(t)),e.performedPointerEventsMutation=!1,e.pointerEventsScopeElement=null,e.pointerEventsReferenceElement=null,e.pointerEventsFloatingElement=null}function SC(e,t){let{scopeElement:n,referenceElement:r,floatingElement:i}=t,a=bC.get(n);a&&a!==e&&xC(a),xC(e),e.performedPointerEventsMutation=!0,e.pointerEventsScopeElement=n,e.pointerEventsReferenceElement=r,e.pointerEventsFloatingElement=i,bC.set(n,e),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,i.style.pointerEvents=`auto`}function CC(e){let t=e.context.dataRef.current,n=Xg(()=>t.hoverInteractionState??yC.create()).current;return t.hoverInteractionState||=n,e_(t.hoverInteractionState.disposeEffect),t.hoverInteractionState}function wC(e,t={}){let{enabled:n=!0,closeDelay:r=0,nodeId:i}=t,a=`rootStore`in e?e.rootStore:e,o=a.useState(`open`),s=a.useState(`floatingElement`),c=a.useState(`domReferenceElement`),{dataRef:l}=a.context,u=ix(),d=rx(),f=CC(a),p=r_(),m=Fv(()=>dv(l.current.openEvent?.type,f.interactedInside)),h=Fv(()=>fv(l.current.openEvent?.type)),g=Fv(()=>{xC(f)});i_(()=>{o||(f.pointerType=void 0,f.restTimeoutPending=!1,f.interactedInside=!1,g())},[o,f,g]),P.useEffect(()=>g,[g]),i_(()=>{if(n&&o&&f.handleCloseOptions?.blockPointerEvents&&h()&&A_(c)&&s){let e=c,t=s,n=Hv(s),r=u?.nodesRef.current.find(e=>e.id===d)?.context?.elements.floating;r&&(r.style.pointerEvents=``);let i=f.pointerEventsScopeElement===t?null:f.pointerEventsScopeElement,a=r===t?null:r;return SC(f,{scopeElement:f.handleCloseOptions?.getScope?.()??i??a??e.closest(`[data-rootownerid]`)??n.body,referenceElement:e,floatingElement:t}),()=>{g()}}},[n,o,c,s,f,h,u,d,g]),P.useEffect(()=>{if(!n)return;function e(){return!!(u&&d&&Ky(u.nodesRef.current,d).length>0)}function t(e){let t=lv(r,`close`,f.pointerType),n=()=>{a.setOpen(!1,xv(hv,e)),u?.events.emit(`floating.closed`,e)};t?f.openChangeTimeout.start(t,n):(f.openChangeTimeout.clear(),n())}function o(e){let t=ev(e);if(!av(t)){f.interactedInside=!1;return}f.interactedInside=t?.closest(`[aria-haspopup]`)!=null}function c(){f.openChangeTimeout.clear(),p.clear(),u?.events.off(`floating.closed`,v),g()}function _(n){if(e()&&u){u.events.on(`floating.closed`,v);return}if(tv(n.relatedTarget,a.context.triggerElements))return;let r=l.current.floatingContext?.nodeId??i,o=n.relatedTarget;if(!(u&&r&&A_(o)&&Ky(u.nodesRef.current,r,!1).some(e=>$_(e.context?.elements.floating,o)))){if(f.handler){f.handler(n);return}g(),h()&&!m()&&t(n)}}function v(t){!u||!d||e()||p.start(0,()=>{u.events.off(`floating.closed`,v),a.setOpen(!1,xv(hv,t)),u.events.emit(`floating.closed`,t)})}let y=s;return Cv(y&&Sv(y,`mouseenter`,c),y&&Sv(y,`mouseleave`,_),y&&Sv(y,`pointerdown`,o,!0),()=>{u?.events.off(`floating.closed`,v)})},[n,s,a,l,r,i,h,m,g,f,u,d,p])}var TC={current:null};function EC(e,t={}){let{enabled:n=!0,delay:r=0,handleClose:i=null,mouseOnly:a=!1,restMs:o=0,move:s=!0,triggerElementRef:c=TC,externalTree:l,isActiveTrigger:u=!0,getHandleCloseContext:d,isClosing:f,shouldOpen:p,guardStaleOpen:m=!1}=t,h=`rootStore`in e?e.rootStore:e,{dataRef:g,events:_}=h.context,v=ix(l),y=CC(h),b=P.useRef(!1),x=Av(i),S=Av(r),C=Av(o),w=Av(n),T=Av(p),E=Av(f),ee=Fv(()=>dv(g.current.openEvent?.type,y.interactedInside)),D=Fv(()=>T.current?.()!==!1),O=Fv((e,t,n)=>{let r=h.context.triggerElements;if(r.hasElement(t))return!e||!$_(e,t);if(!A_(n))return!1;let i=n;return r.hasMatchingElement(e=>$_(e,i))&&(!e||!$_(e,i))}),k=Fv(()=>{y.handler&&=(Hv(h.select(`domReferenceElement`)).removeEventListener(`mousemove`,y.handler),void 0)}),te=Fv(()=>{xC(y)});return u&&(y.handleCloseOptions=x.current?.__options),P.useEffect(()=>k,[k]),P.useEffect(()=>{if(!n)return;function e(e){e.open?b.current=!1:(b.current=e.reason===hv,k(),y.openChangeTimeout.clear(),y.restTimeout.clear(),y.blockMouseMove=!0,y.restTimeoutPending=!1)}return _.on(`openchange`,e),()=>{_.off(`openchange`,e)}},[n,_,y,k]),P.useEffect(()=>{if(!n)return;function e(e,t=!0){let n=lv(S.current,`close`,y.pointerType);n?y.openChangeTimeout.start(n,()=>{h.setOpen(!1,xv(hv,e)),v?.events.emit(`floating.closed`,e)}):t&&(y.openChangeTimeout.clear(),h.setOpen(!1,xv(hv,e)),v?.events.emit(`floating.closed`,e))}let t=c.current??(u?h.select(`domReferenceElement`):null);if(!A_(t))return;function r(e){if(y.openChangeTimeout.clear(),y.blockMouseMove=!1,a&&!C_(y.pointerType))return;let t=uv(C.current),n=lv(S.current,`open`,y.pointerType),r=ev(e),i=e.currentTarget??null,o=h.select(`domReferenceElement`),s=i;if(A_(r)&&!h.context.triggerElements.hasElement(r)){for(let e of h.context.triggerElements.elements())if($_(e,r)){s=e;break}}A_(i)&&A_(o)&&!h.context.triggerElements.hasElement(i)&&$_(i,o)&&(s=o);let c=s==null?!1:O(o,s,r),l=h.select(`open`),u=E.current?.()??h.select(`transitionStatus`)===`ending`,d=!l&&u&&b.current,f=!c&&A_(s)&&A_(o)&&$_(o,s)&&d,p=t>0&&!n,m=c&&(l||d)||f,g=!l||c;if(m){D()&&h.setOpen(!0,xv(hv,e,s));return}p||(n?y.openChangeTimeout.start(n,()=>{g&&D()&&h.setOpen(!0,xv(hv,e,s))}):g&&D()&&h.setOpen(!0,xv(hv,e,s)))}function i(t){if(ee()){te();return}k();let n=Hv(h.select(`domReferenceElement`));y.restTimeout.clear(),y.restTimeoutPending=!1;let r=g.current.floatingContext??d?.();if(!tv(t.relatedTarget,h.context.triggerElements)){if(x.current&&r){h.select(`open`)||y.openChangeTimeout.clear();let i=c.current;y.handler=x.current({...r,tree:v,x:t.clientX,y:t.clientY,onClose(){te(),k(),w.current&&!ee()&&i===h.select(`domReferenceElement`)&&e(t,!0)}}),n.addEventListener(`mousemove`,y.handler),y.handler(t);return}(y.pointerType!==`touch`||!$_(h.select(`floatingElement`),t.relatedTarget))&&e(t)}}function o(e){$_(t,e.relatedTarget)||(y.openChangeTimeout.clear(),y.restTimeout.clear(),y.restTimeoutPending=!1)}let l=m?Sv(t,`mouseout`,o):void 0;return s?Cv(Sv(t,`mousemove`,r,{once:!0}),Sv(t,`mouseenter`,r),Sv(t,`mouseleave`,i),l):Cv(Sv(t,`mouseenter`,r),Sv(t,`mouseleave`,i),l)},[k,te,g,S,h,n,x,y,u,O,ee,a,s,C,c,v,w,d,E,D,m]),P.useMemo(()=>{if(!n)return;function e(e){y.pointerType=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e,n=e.currentTarget,r=h.select(`domReferenceElement`),i=h.select(`open`),o=O(r,n,e.target);if(a&&!C_(y.pointerType))return;if(i&&o&&y.handleCloseOptions?.blockPointerEvents){let e=h.select(`floatingElement`);e&&SC(y,{scopeElement:y.handleCloseOptions?.getScope?.()??n.ownerDocument.body,referenceElement:n,floatingElement:e})}let s=uv(C.current);if(i&&!o||s===0||!o&&y.restTimeoutPending&&e.movementX**2+e.movementY**2<2)return;y.restTimeout.clear();function c(){if(y.restTimeoutPending=!1,ee())return;let e=h.select(`open`);!y.blockMouseMove&&(!e||o)&&D()&&h.setOpen(!0,xv(hv,t,n))}y.pointerType===`touch`?qb.flushSync(()=>{c()}):o&&i?c():(y.restTimeoutPending=!0,y.restTimeout.start(s,c))}}},[n,y,ee,O,a,h,C,D])}var DC=.1,OC=DC*DC,kC=.5;function AC(e,t,n,r,i,a){return r>=t!=a>=t&&e<=(i-n)*(t-r)/(a-r)+n}function jC(e,t,n,r,i,a,o,s,c,l){let u=!1;return AC(e,t,n,r,i,a)&&(u=!u),AC(e,t,i,a,o,s)&&(u=!u),AC(e,t,o,s,c,l)&&(u=!u),AC(e,t,c,l,n,r)&&(u=!u),u}function MC(e,t,n){return e>=n.x&&e<=n.x+n.width&&t>=n.y&&t<=n.y+n.height}function NC(e,t,n,r,i,a){return e>=Math.min(n,i)&&e<=Math.max(n,i)&&t>=Math.min(r,a)&&t<=Math.max(r,a)}function PC(e={}){let{blockPointerEvents:t=!1}=e,n=new n_,r=({x:e,y:t,placement:r,elements:i,onClose:a,nodeId:o,tree:s})=>{let c=r?.split(`-`)[0],l=!1,u=null,d=null,f=typeof performance<`u`?performance.now():0;function p(e,t){let n=performance.now(),r=n-f;if(u===null||d===null||r===0)return u=e,d=t,f=n,!1;let i=e-u,a=t-d,o=i*i+a*a,s=r*r*OC;return u=e,d=t,f=n,o<s}function m(){n.clear(),a()}return function(r){n.clear();let a=i.domReference,u=i.floating;if(!a||!u||c==null||e==null||t==null)return;let{clientX:d,clientY:f}=r,h=ev(r),g=r.type===`mouseleave`,_=$_(u,h),v=$_(a,h);if(_&&(l=!0,!g))return;if(v&&(l=!1,!g)){l=!0;return}if(g&&A_(r.relatedTarget)&&$_(u,r.relatedTarget))return;function y(){return!!(s&&Ky(s.nodesRef.current,o).length>0)}function b(){y()||m()}if(y())return;let x=a.getBoundingClientRect(),S=u.getBoundingClientRect(),C=e>S.right-S.width/2,w=t>S.bottom-S.height/2,T=S.width>x.width,E=S.height>x.height,ee=(T?x:S).left,D=(T?x:S).right,O=(E?x:S).top,k=(E?x:S).bottom;if(c===`top`&&t>=x.bottom-1||c===`bottom`&&t<=x.top+1||c===`left`&&e>=x.right-1||c===`right`&&e<=x.left+1){b();return}let te=!1;switch(c){case`top`:te=NC(d,f,ee,x.top+1,D,S.bottom-1);break;case`bottom`:te=NC(d,f,ee,S.top+1,D,x.bottom-1);break;case`left`:te=NC(d,f,S.right-1,k,x.left+1,O);break;case`right`:te=NC(d,f,x.right-1,k,S.left+1,O);break;default:}if(te)return;if(l&&!MC(d,f,x)){b();return}if(!g&&p(d,f)){b();return}let A=!1;switch(c){case`top`:{let n=T?kC/2:kC*4,r=T||C?e+n:e-n,i=T?e-n:C?e+n:e-n,a=t+kC+1,o=C||T?S.bottom-kC:S.top,s=C?T?S.bottom-kC:S.top:S.bottom-kC;A=jC(d,f,r,a,i,a,S.left,o,S.right,s);break}case`bottom`:{let n=T?kC/2:kC*4,r=T||C?e+n:e-n,i=T?e-n:C?e+n:e-n,a=t-kC,o=C||T?S.top+kC:S.bottom,s=C?T?S.top+kC:S.bottom:S.top+kC;A=jC(d,f,r,a,i,a,S.left,o,S.right,s);break}case`left`:{let n=E?kC/2:kC*4,r=E||w?t+n:t-n,i=E?t-n:w?t+n:t-n,a=e+kC+1,o=w||E?S.right-kC:S.left,s=w?E?S.right-kC:S.left:S.right-kC;A=jC(d,f,o,S.top,s,S.bottom,a,r,a,i);break}case`right`:{let n=E?kC/2:kC*4,r=E||w?t+n:t-n,i=E?t-n:w?t+n:t-n,a=e-kC,o=w||E?S.left+kC:S.right,s=w?E?S.left+kC:S.right:S.left+kC;A=jC(d,f,a,r,a,i,o,S.top,s,S.bottom);break}default:}A?l||n.start(40,b):b()}};return r.__options={...e,blockPointerEvents:t},r}var FC=P.createContext(void 0);function IC(e){let t=P.useContext(FC);if(t===void 0&&!e)throw Error(mb(47));return t}var LC={...hC,disabled:e=>e.disabled,instantType:e=>e.instantType,openMethod:e=>e.openMethod,openChangeReason:e=>e.openChangeReason,modal:e=>e.modal,focusManagerModal:e=>e.focusManagerModal,stickIfOpen:e=>e.stickIfOpen,titleElementId:e=>e.titleElementId,descriptionElementId:e=>e.descriptionElementId,openOnHover:e=>e.openOnHover,closeDelay:e=>e.closeDelay,adaptiveOrigin:e=>e.adaptiveOrigin},RC=class extends VS{constructor(e,t,n){let r=new oC;super(zC(e,r,t,n),BC(r),LC)}setOpen=(e,t)=>{let n=t.reason===hv,r=t.reason===`trigger-press`&&t.event.detail===0,i=!e&&(t.reason===`escape-key`||t.reason==null),a=eC(t),o=this.select(`activeTriggerId`);if(!e&&t.reason===`close-press`&&t.trigger==null&&o!=null&&(t.trigger=this.context.triggerElements.getById(o)??this.select(`activeTriggerElement`)??void 0),this.context.onOpenChange?.(e,t),t.isCanceled)return;this.state.floatingRootContext.dispatchOpenChange(e,t);let s=()=>{let n={open:e,openChangeReason:t.reason};$S(n,e,t.trigger,a()),this.update(n)};n?(this.set(`stickIfOpen`,!0),this.context.stickIfOpenTimeout.start(500,()=>{this.set(`stickIfOpen`,!1)}),qb.flushSync(s)):s();let c;r?c=`click`:i?c=`dismiss`:t.reason===`focus-out`&&(c=`focus`),this.set(`instantType`,c)}};function zC(e,t,n,r=!1){let i={...cC(),disabled:!1,modal:!1,focusManagerModal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,openOnHover:!1,closeDelay:0,adaptiveOrigin:void 0,...e};return i.open&&e?.mounted===void 0&&(i.mounted=!0),i.floatingRootContext=lC(t,n,r),i}function BC(e){return{popupRef:P.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:P.createRef(),beforeContentFocusGuardRef:P.createRef(),stickIfOpenTimeout:new n_,triggerElements:e}}function VC({props:e}){let{children:t,open:n,defaultOpen:r=!1,onOpenChange:i,onOpenChangeComplete:a,modal:o=!1,handle:s,triggerId:c,defaultTriggerId:l=null}=e,u=UC(s,{modal:o,open:r,openProp:n,activeTriggerId:l,triggerIdProp:c});u.useControlledProp(`openProp`,n),u.useControlledProp(`triggerIdProp`,c);let d=u.useState(`open`),f=u.useState(`mounted`),p=u.useState(`payload`);u.useContextCallback(`onOpenChange`,i),u.useContextCallback(`onOpenChangeComplete`,a),aC(u,d),nC(u);let{forceUnmount:m}=rC(d,u,()=>{u.update({stickIfOpen:!0,openChangeReason:null})});u.useSyncedValues({modal:o}),P.useEffect(()=>{d||u.context.stickIfOpenTimeout.clear()},[u,d]),P.useImperativeHandle(e.actionsRef,()=>({unmount:m,close:()=>u.setOpen(!1,xv(bv))}),[m,u]);let h=d||f;return(0,N.jsxs)(FC.Provider,{value:u,children:[s&&(0,N.jsx)(ZS,{handle:s,store:u}),h&&(0,N.jsx)(WC,{store:u,modal:o}),typeof t==`function`?t({payload:p}):t]})}function HC(e){return IC(!0)?(0,N.jsx)(VC,{props:e}):(0,N.jsx)(sx,{children:(0,N.jsx)(VC,{props:e})})}function UC(e,t){let n=XS((e,n)=>new RC(t,e,n));return P.useEffect(()=>n.context.stickIfOpenTimeout.disposeEffect(),[n]),n}function WC({store:e,modal:t}){let n=xx(e.useState(`floatingRootContext`),{outsidePressEvent:{mouse:t===`trap-focus`?`sloppy`:`intentional`,touch:`sloppy`}}),r=n.reference,i=n.floating;return iC(e,{activeTriggerProps:r,inactiveTriggerProps:r,popupProps:i}),null}var GC=P.createContext(void 0);function KC(e=!1){let t=P.useContext(GC);if(t===void 0&&!e)throw Error(mb(16));return t}function qC(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return{props:P.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}}function JC(e,t,{detail:n=0}={}){e.dispatchEvent(new(D_(e)).PointerEvent(`click`,{bubbles:!0,cancelable:!0,composed:!0,detail:n,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,altKey:t.altKey,metaKey:t.metaKey}))}function YC(e={}){let{disabled:t=!1,focusableWhenDisabled:n,tabIndex:r=0,native:i=!0,composite:a}=e,o=P.useRef(null),s=KC(!0),c=a??s!==void 0,{props:l}=qC({focusableWhenDisabled:n,disabled:t,composite:c,tabIndex:r,isNativeButton:i}),u=P.useCallback(()=>{let e=o.current;XC(e)&&c&&t&&l.disabled===void 0&&e.disabled&&(e.disabled=!1)},[t,l.disabled,c]);return i_(u,[u]),{getButtonProps:P.useCallback((e={})=>{let{onClick:n,onMouseDown:r,onKeyUp:a,onKeyDown:o,onPointerDown:s,...u}=e;return Cb({onClick(e){if(t){e.preventDefault();return}n?.(e)},onMouseDown(e){t||r?.(e)},onKeyDown(e){if(t||(Pb(e),o?.(e),e.baseUIHandlerPrevented))return;let n=e.target===e.currentTarget,r=e.currentTarget,a=XC(r),s=!i&&ZC(r),l=n&&(i?a:!s),u=e.key===`Enter`,d=e.key===` `,f=r.getAttribute(`role`),p=f?.startsWith(`menuitem`)||f===`option`||f===`gridcell`;if(n&&c&&d){if(e.defaultPrevented&&p)return;e.preventDefault(),(!i||a)&&(e.preventBaseUIHandler(),JC(r,e));return}if(!l||i||!d&&!u){n&&s&&d&&e.preventDefault();return}e.defaultPrevented||(e.preventDefault(),u&&(e.preventBaseUIHandler(),JC(r,e)))},onKeyUp(e){if(!t){if(Pb(e),a?.(e),e.target===e.currentTarget&&i&&c&&XC(e.currentTarget)&&e.key===` `){e.preventDefault();return}e.baseUIHandlerPrevented||e.target===e.currentTarget&&!i&&!c&&!e.defaultPrevented&&e.key===` `&&(e.preventBaseUIHandler(),JC(e.currentTarget,e))}},onPointerDown(e){if(t){e.preventDefault();return}s?.(e)}},i?{type:`button`}:{role:`button`},l,u)},[t,l,c,i]),buttonRef:Fv(e=>{o.current=e,u()})}}function XC(e){return j_(e)&&e.tagName===`BUTTON`}function ZC(e){return j_(e)&&e.tagName===`A`&&!!e.href}var QC=function(e){return e.startingStyle=`data-starting-style`,e.endingStyle=`data-ending-style`,e}({}),$C={"data-starting-style":``},ew={"data-ending-style":``},tw={transitionStatus(e){return e===`starting`?$C:e===`ending`?ew:null}};(function(e){return e.open=`data-open`,e.closed=`data-closed`,e[e.startingStyle=QC.startingStyle]=`startingStyle`,e[e.endingStyle=QC.endingStyle]=`endingStyle`,e.anchorHidden=`data-anchor-hidden`,e.side=`data-side`,e.align=`data-align`,e})({});var nw={"data-popup-open":``},rw={"data-popup-open":``,"data-pressed":``},iw={"data-open":``},aw={"data-closed":``},ow={"data-anchor-hidden":``},sw={open(e){return e?nw:null}},cw={open(e){return e?rw:null}},lw={open(e){return e?iw:aw},anchorHidden(e){return e?ow:null}},uw={...lw,...tw};function dw(e){return fb(e,`base-ui`)}function fw(e,t){let n=P.useRef(null);function r(t){qb.flushSync(()=>{e.setOpen(!1,xv(vv,t.nativeEvent,t.currentTarget))}),Hy(n.current)?.focus()}function i(n){let r=e.select(`positionerElement`);if(r&&Uy(n,r))e.context.beforeContentFocusGuardRef.current?.focus();else{qb.flushSync(()=>{e.setOpen(!1,xv(vv,n.nativeEvent,n.currentTarget))});let i=Vy(e.context.triggerFocusTargetRef.current||t.current);for(;i!==null&&$_(r,i);){let e=i;if(i=Ry(i),i===e)break}i?.focus()}}return{preFocusGuardRef:n,handlePreFocusGuardFocus:r,handleFocusTargetFocus:i}}function pw(e){let t=P.useRef(``),n=P.useCallback(n=>{n.defaultPrevented||(t.current=n.pointerType,e(n,n.pointerType))},[e]);return{onClick:P.useCallback(n=>{if(n.detail===0){e(n,`keyboard`);return}`pointerType`in n?e(n,n.pointerType):e(n,t.current),t.current=``},[e]),onPointerDown:n}}function mw(e,t){let{onClick:n,onPointerDown:r}=pw(Fv((n,r)=>{(typeof e==`function`?e():e)||t(r||(d_?`touch`:``))}));return P.useMemo(()=>({onClick:n,onPointerDown:r}),[n,r])}var hw=P.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,handle:s,payload:c,openOnHover:l=!1,delay:u=300,closeDelay:d=0,id:f,...p}=e,m=IC(!0),h=gC(s)??m;if(!h)throw Error(mb(74));let g=dw(f),_=h.useState(`isTriggerActive`,g),v=h.useState(`floatingRootContext`),y=h.useState(`isOpenedByTrigger`,g),b=h.useState(`triggerPopupId`,g),x=P.useRef(null),{registerTrigger:S,isMountedByThisTrigger:C}=tC(g,x,h,{payload:c,disabled:a,openOnHover:l,closeDelay:d}),w=h.useState(`openChangeReason`),T=h.useState(`stickIfOpen`),E=h.useState(`openMethod`),ee=h.useState(`focusManagerModal`),D=EC(v,{enabled:!a&&l&&(E!==`touch`||w!==`trigger-press`),mouseOnly:!0,move:!1,handleClose:PC(),restMs:u,delay:{close:d},triggerElementRef:x,isActiveTrigger:_,isClosing:()=>h.select(`transitionStatus`)===`ending`}),O=vx(v,{stickIfOpen:T}),k=mw(()=>h.select(`open`),e=>{h.set(`openMethod`,e)}),te=h.useState(`triggerProps`,C),{getButtonProps:A,buttonRef:ne}=YC({disabled:a,native:o}),re={open(e){return e&&w===`trigger-press`?cw.open(e):sw.open(e)}},{preFocusGuardRef:ie,handlePreFocusGuardFocus:j,handleFocusTargetFocus:ae}=fw(h,x),oe=Lb(`button`,e,{state:{disabled:a,open:y},ref:[ne,t,S,x],props:[O.reference,D,te,k,{[Wb]:``,id:g,"aria-haspopup":`dialog`,"aria-expanded":y,"aria-controls":b},p,A],stateAttributesMapping:re}),se=(0,N.jsx)(P.Fragment,{children:oe},g);return C&&!ee?(0,N.jsxs)(P.Fragment,{children:[(0,N.jsx)(Gv,{ref:ie,onFocus:j}),se,(0,N.jsx)(Gv,{ref:h.context.triggerFocusTargetRef,onFocus:ae})]}):se}),gw=P.createContext(void 0);function _w(){let e=P.useContext(gw);if(e===void 0)throw Error(mb(45));return e}var vw=P.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e;return IC().useState(`mounted`)||n?(0,N.jsx)(gw.Provider,{value:n,children:(0,N.jsx)(Qb,{ref:t,...r})}):null});function yw(e){return gb(19)?e:e?`true`:void 0}var bw=P.createContext(void 0);function xw(){let e=P.useContext(bw);if(!e)throw Error(mb(46));return e}var Sw=P.createContext(void 0);function Cw(){return P.useContext(Sw)?.direction??`ltr`}var ww=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=$v(e,t)||{};if(l==null)return{};let f=_y(u),p={x:n,y:r},m=ay(i),h=ry(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,ee=Math.min(f[v],E),D=Math.min(f[y],E),O=ee,k=w-g[h]-D,te=w/2-g[h]/2+T,A=Qv(O,te,k),ne=!c.arrow&&ty(i)!=null&&te!==A&&a.reference[h]/2-(te<O?ee:D)-g[h]/2<0,re=ne?te<O?te-O:te-k:0;return{[m]:p[m]+re,data:{[m]:A,centerOffset:te-A-re,...ne&&{alignmentOffset:re}},reset:ne}}}),Tw=(e,t)=>({...ww(e),options:[e,t]}),Ew={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0,o=await e.platform.detectOverflow(e,{elementContext:`reference`});return{data:{referenceHidden:o.top-n>=0||o.right-t>=0||o.bottom-n>=0||o.left-t>=0||a}}}},Dw={sideX:`left`,sideY:`top`},Ow=`--available-width`,kw=`--available-height`;function Aw(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function jw(e,t,n){let{rects:r,placement:i}=e;return{side:Aw(t,ey(i),n),align:ty(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function Mw(e){return Nw(e,_C)}function Nw(e,t){let{anchor:n,positionMethod:r=`absolute`,side:i=`bottom`,sideOffset:a=0,align:o=`center`,alignOffset:s=0,collisionBoundary:c,collisionPadding:l=5,sticky:u=!1,arrowPadding:d=5,disableAnchorTracking:f=!1,inline:p,keepMounted:m=!1,floatingRootContext:h,mounted:g,collisionAvoidance:_,shift:v,nodeId:y,adaptiveOrigin:b,lazyFlip:x=!1,externalTree:S}=e,[C,w]=P.useState(null);!g&&C!==null&&w(null);let T=_.side||`flip`,E=_.align||`flip`,ee=_.fallbackAxisSide||`end`,D=v?.crossAxis??!1,O=v?.rootBoundary,k=typeof n==`function`?n:void 0,te=Fv(k),A=k?te:n,ne=Av(n),re=Av(g),ie=Cw()===`rtl`,j=C||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":ie?`left`:`right`,"inline-start":ie?`right`:`left`}[i],ae=o===`center`?j:`${j}-${o}`,oe=l;typeof oe==`number`?oe={top:oe,right:oe,bottom:oe,left:oe}:oe&&={top:oe.top||0,right:oe.right||0,bottom:oe.bottom||0,left:oe.left||0};let se=+(i===`bottom`),ce=+(i===`top`),le=+(i===`right`),ue=+(i===`left`),de={boundary:c===`clipping-ancestors`?`clippingAncestors`:c,padding:oe},fe=P.useRef(null),pe=Av(a),me=Av(s),he=typeof a==`function`?0:a,ge=typeof s==`function`?0:s,_e=[];p&&_e.push(p),_e.push(bS(e=>{let t=jw(e,i,ie),n=typeof pe.current==`function`?pe.current(t):pe.current,r=typeof me.current==`function`?me.current(t):me.current;return{mainAxis:n,crossAxis:r,alignmentAxis:r}},[he,ge,ie,i]));let ve=E===`none`&&T!==`shift`,ye=!ve&&(u||D||T===`shift`),be=T===`none`?null:CS({...de,padding:{top:oe.top+1+se,right:oe.right+1+ue,bottom:oe.bottom+1+ce,left:oe.left+1+le},mainAxis:!D&&T===`flip`,crossAxis:E===`flip`?`alignment`:!1,fallbackAxisSideDirection:ee}),xe=ve?null:xS({...de,rootBoundary:O,mainAxis:E!==`none`,crossAxis:ye,limiter:u||D?void 0:SS(e=>{if(!fe.current)return{};let{width:t,height:n}=fe.current.getBoundingClientRect(),r=iy(ey(e.placement)),i=r===`y`?t:n,a=r===`y`?oe.left+oe.right:oe.top+oe.bottom;return{offset:i/2+a/2}})},[de,u,D,O,oe,E]);T===`shift`||E===`shift`||o===`center`?_e.push(xe,be):_e.push(be,xe),_e.push(wS({...de,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!re.current)return;let i=e.style;i.setProperty(Ow,`${t}px`),i.setProperty(kw,`${n}px`);let a=D_(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(`--anchor-width`,`${u}px`),i.setProperty(`--anchor-height`,`${d}px`)}}),Tw(e=>({element:fe.current||Hv(e.elements.floating).createElement(`div`),padding:d,offsetParent:`floating`}),[d]),{name:`transformOrigin`,fn(e){let{elements:t,middlewareData:n,placement:r,rects:o,y:s}=e,c=ey(r),l=iy(c),u=fe.current,d=n.arrow?.x||0,f=n.arrow?.y||0,p=u?.clientWidth||0,m=u?.clientHeight||0,h=d+p/2,g=f+m/2,_=Math.abs(n.shift?.y||0),v=o.reference.height/2,y=typeof a==`function`?a(jw(e,i,ie)):a,b=_>y,x={top:`${h}px calc(100% + ${y}px)`,bottom:`${h}px ${-y}px`,left:`calc(100% + ${y}px) ${g}px`,right:`${-y}px ${g}px`}[c],S=`${h}px ${o.reference.y+v-s}px`;return t.floating.style.setProperty(`--transform-origin`,ye&&l===`y`&&b?S:x),{}}},Ew,b),i_(()=>{!g&&h&&h.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[g,h]);let Se=P.useMemo(()=>({elementResize:!f&&typeof ResizeObserver<`u`,layoutShift:!f&&typeof IntersectionObserver<`u`}),[f]),{refs:Ce,elements:we,x:Te,y:Ee,middlewareData:De,update:Oe,placement:ke,context:Ae,isPositioned:je,floatingStyles:Me}=t({rootContext:h,open:m?g:void 0,placement:ae,middleware:_e,strategy:r,whileElementsMounted:m?void 0:(...e)=>sS(...e,Se),nodeId:y,externalTree:S}),{sideX:Ne,sideY:Pe}=De.adaptiveOrigin||Dw,Fe=je?r:`fixed`,Ie=P.useMemo(()=>{let e;return e=je?b?{position:Fe,[Ne]:Te,[Pe]:Ee}:{...Me,position:Fe}:{position:Fe,top:0,left:0},e[Ow]=`100vw`,e[kw]=`100vh`,je||(e.opacity=0),e},[b,Fe,Ne,Te,Pe,Ee,Me,je]),Le=P.useRef(null);i_(()=>{if(!g)return;let e=ne.current,t=typeof e==`function`?e():e,n=(Pw(t)?t.current:t)||null;n!==Le.current&&(Ce.setPositionReference(n),Le.current=n)},[g,Ce,A,ne]),P.useEffect(()=>{if(!g)return;let e=ne.current;typeof e!=`function`&&Pw(e)&&e.current!==Le.current&&(Ce.setPositionReference(e.current),Le.current=e.current)},[g,Ce,A,ne]),P.useEffect(()=>{if(m&&g&&we.reference&&we.floating)return sS(we.reference,we.floating,Oe,Se)},[m,g,we,Oe,Se]);let Re=ey(ke),ze=Aw(i,Re,ie),Be=ty(ke)||`center`,Ve=!!De.hide?.referenceHidden;i_(()=>{x&&g&&je&&Re!==j&&w(Re)},[x,g,je,Re,j]);let He=P.useMemo(()=>({position:`absolute`,top:De.arrow?.y,left:De.arrow?.x}),[De.arrow]),Ue=De.arrow?.centerOffset!==0;return P.useMemo(()=>({positionerStyles:Ie,arrowStyles:He,arrowRef:fe,arrowUncentered:Ue,side:ze,align:Be,physicalSide:Re,anchorHidden:Ve,refs:Ce,context:Ae,isPositioned:je,update:Oe}),[Ie,He,fe,Ue,ze,Be,Re,Ve,Ce,Ae,je,Oe])}function Pw(e){return e!=null&&`current`in e}var Fw=P.forwardRef(function(e,t){let{cutout:n,...r}=e,i;if(n){let e=n.getBoundingClientRect();i=`polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`}return(0,N.jsx)(`div`,{ref:t,role:`presentation`,"data-base-ui-inert":``,...r,style:{position:`fixed`,inset:0,userSelect:`none`,WebkitUserSelect:`none`,clipPath:i}})});function Iw(e){return e===`starting`?Ub:$g}function Lw(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),Lb(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},Iw(r),i],stateAttributesMapping:lw})}var Rw={},zw={},Bw=``;function Vw(e,t){return N_(e)?e:t}function Hw(e,t,n){return/hidden|clip/.test(e.getComputedStyle(Vw(t,n)).overflowY)}function Uw(e){if(typeof document>`u`)return!1;let t=Hv(e);return D_(t).innerWidth-t.documentElement.clientWidth>0}function Ww(e){if(!(typeof CSS<`u`&&CSS.supports&&CSS.supports(`scrollbar-gutter`,`stable`))||typeof document>`u`)return!1;let t=Hv(e),n=t.documentElement,r=t.body,i=Vw(n,r),a=i.style.overflowY,o=n.style.scrollbarGutter;n.style.scrollbarGutter=`stable`,i.style.overflowY=`scroll`;let s=i.offsetWidth;i.style.overflowY=`hidden`;let c=i.offsetWidth;return i.style.overflowY=a,n.style.scrollbarGutter=o,s===c}function Gw(e){let t=Hv(e),n=t.documentElement,r=t.body,i=Vw(n,r),a={overflowY:i.style.overflowY,overflowX:i.style.overflowX};return Object.assign(i.style,{overflowY:`hidden`,overflowX:`hidden`}),()=>{Object.assign(i.style,a)}}function Kw(e){let t=Hv(e),n=t.documentElement,r=t.body,i=D_(n),a=0,o=0,s=!1,c=Bv.create();if(g_&&(i.visualViewport?.scale??1)!==1)return()=>{};function l(){let t=i.getComputedStyle(n),c=i.getComputedStyle(r),l=(t.scrollbarGutter||``).includes(`both-edges`)?`stable both-edges`:`stable`;a=n.scrollTop,o=n.scrollLeft,Rw={scrollbarGutter:n.style.scrollbarGutter,overflowY:n.style.overflowY,overflowX:n.style.overflowX},Bw=n.style.scrollBehavior,zw={position:r.style.position,height:r.style.height,width:r.style.width,boxSizing:r.style.boxSizing,overflowY:r.style.overflowY,overflowX:r.style.overflowX,scrollBehavior:r.style.scrollBehavior};let u=n.scrollHeight>n.clientHeight,d=n.scrollWidth>n.clientWidth,f=t.overflowY===`scroll`||c.overflowY===`scroll`,p=t.overflowX===`scroll`||c.overflowX===`scroll`,m=Math.max(0,i.innerWidth-r.clientWidth),h=Math.max(0,i.innerHeight-r.clientHeight),g=parseFloat(c.marginTop)+parseFloat(c.marginBottom),_=parseFloat(c.marginLeft)+parseFloat(c.marginRight),v=Vw(n,r);if(s=Ww(e),s){n.style.scrollbarGutter=l,v.style.overflowY=`hidden`,v.style.overflowX=`hidden`;return}Object.assign(n.style,{scrollbarGutter:l,overflowY:`hidden`,overflowX:`hidden`}),(u||f)&&(n.style.overflowY=`scroll`),(d||p)&&(n.style.overflowX=`scroll`),Object.assign(r.style,{position:`relative`,height:g||h?`calc(100dvh - ${g+h}px)`:`100dvh`,width:_||m?`calc(100vw - ${_+m}px)`:`100vw`,boxSizing:`border-box`,overflowY:`hidden`,overflowX:`hidden`,scrollBehavior:`unset`}),r.scrollTop=a,r.scrollLeft=o,n.setAttribute(`data-base-ui-scroll-locked`,``),n.style.scrollBehavior=`unset`}function u(){Object.assign(n.style,Rw),Object.assign(r.style,zw),s||(n.scrollTop=a,n.scrollLeft=o,n.removeAttribute(`data-base-ui-scroll-locked`),n.style.scrollBehavior=Bw)}function d(){u(),c.request(l)}l();let f=Sv(i,`resize`,d);return()=>{c.cancel(),u(),typeof i.removeEventListener==`function`&&f()}}var qw=new class{lockCount=0;restore=null;timeoutLock=n_.create();timeoutUnlock=n_.create();acquire(e){return this.lockCount+=1,this.lockCount===1&&this.restore===null&&this.timeoutLock.start(0,()=>this.lock(e)),this.release}release=()=>{--this.lockCount,this.lockCount===0&&this.restore&&this.timeoutUnlock.start(0,this.unlock)};unlock=()=>{this.lockCount===0&&this.restore&&(this.restore?.(),this.restore=null)};lock(e){if(this.lockCount===0||this.restore!==null)return;let t=Hv(e),n=t.documentElement,r=t.body,i=D_(n);if(Hw(i,n,r)){let t=new i.MutationObserver(()=>{Hw(i,n,r)||(t.disconnect(),this.restore=null,this.lock(e))}),a={attributes:!0};t.observe(n,a),t.observe(r,a),this.restore=()=>t.disconnect();return}let a=d_||!Uw(e);this.restore=a?Gw(e):Kw(e)}};function Jw(e=!0,t=null){i_(()=>{if(e)return qw.acquire(t)},[e,t])}var Yw=20;function Xw(e,t,n,r){let[i,a]=P.useState(!1);i_(()=>{if(!e||!t||n==null){a(!1);return}let r=Hv(n).documentElement.clientWidth,i=n.offsetWidth;a(r>0&&i>0&&i>=r-Yw)},[e,t,n]),Jw(e&&(!t||i),r)}var Zw=P.forwardRef(function(e,t){let{render:n,className:r,style:i,anchor:a,positionMethod:o,side:s,align:c,sideOffset:l,alignOffset:u,collisionBoundary:d=`clipping-ancestors`,collisionPadding:f,arrowPadding:p,sticky:m,disableAnchorTracking:h=!1,collisionAvoidance:g=Gb,..._}=e,v=IC(),y=_w(),b=ax(),x=v.useState(`floatingRootContext`),S=v.useState(`mounted`),C=v.useState(`open`),w=v.useState(`openChangeReason`),T=v.useState(`activeTriggerElement`),E=v.useState(`modal`),ee=v.useState(`openMethod`),D=v.useState(`positionerElement`),O=v.useState(`instantType`),k=v.useState(`transitionStatus`),te=v.useState(`adaptiveOrigin`),A=P.useRef(null),ne=KS(D),re=Mw({anchor:a,floatingRootContext:x,positionMethod:o,mounted:S,side:s,sideOffset:l,align:c,alignOffset:u,arrowPadding:p,collisionBoundary:d,collisionPadding:f,sticky:m,disableAnchorTracking:h,keepMounted:y,nodeId:b,collisionAvoidance:g,adaptiveOrigin:te}),ie=x.useState(`domReferenceElement`);i_(()=>{let e=ie,t=A.current;if(e&&(A.current=e),t&&e&&e!==t){v.set(`instantType`,void 0);let e=new AbortController;return ne(()=>{v.set(`instantType`,`trigger-change`)},e.signal),()=>{e.abort()}}},[ie,ne,v]);let j=E===!0&&w!==`trigger-hover`;Xw(C&&j,ee===`touch`,D,T);let ae=v.useStateSetter(`positionerElement`),oe=Lw(e,{open:C,side:re.side,align:re.align,anchorHidden:re.anchorHidden,instant:O},{styles:re.positionerStyles,transitionStatus:k,props:_,refs:[t,ae],hidden:!S,inert:!C});return(0,N.jsxs)(bw.Provider,{value:re,children:[S&&j&&(0,N.jsx)(Fw,{inert:yw(!C),cutout:T}),(0,N.jsx)(ox,{id:b,children:oe})]})}),Qw=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`]),$w=P.createContext(void 0);function eT(e){let t=P.useContext($w);if(t===void 0&&!e)throw Error(mb(69));return t}var tT=P.createContext(void 0);function nT(){let[e,t]=P.useState(0),n=Fv(()=>(t(e=>e+1),()=>{t(e=>Math.max(0,e-1))}));return{context:P.useMemo(()=>({register:n}),[n]),hasClosePart:e>0}}function rT(){let e=P.useContext(tT);i_(()=>e?.register(),[e])}var iT=P.forwardRef(function(e,t){let{render:n,className:r,style:i,initialFocus:a,finalFocus:o,...s}=e,c=IC(),l=xw(),u=eT(!0)!=null,{context:d,hasClosePart:f}=nT(),p=c.useState(`open`),m=c.useState(`openMethod`),h=c.useState(`instantType`),g=c.useState(`transitionStatus`),_=c.useState(`popupProps`),v=c.useState(`titleElementId`),y=c.useState(`descriptionElementId`),b=c.useState(`modal`),x=c.useState(`mounted`),S=c.useState(`openChangeReason`),C=c.useState(`activeTriggerElement`),w=c.useState(`floatingRootContext`),T=w.useState(`floatingId`),E=c.useState(`disabled`),ee=c.useState(`openOnHover`),D=c.useState(`closeDelay`);qS({open:p,ref:c.context.popupRef,onComplete(){p&&c.context.onOpenChangeComplete?.(!0)}}),wC(w,{enabled:ee&&!E,closeDelay:D});let O=a===void 0?YS(c.context.popupRef):a,k=b!==!1&&f;c.useSyncedValue(`focusManagerModal`,k);let te=c.useStateSetter(`popupElement`),A=Lb(`div`,e,{state:{open:p,side:l.side,align:l.align,instant:h,transitionStatus:g},ref:[t,c.context.popupRef,te],props:[_,{id:T,role:`dialog`,...JS,"aria-labelledby":v,"aria-describedby":y,onKeyDown(e){u&&Qw.has(e.key)&&e.stopPropagation()}},Iw(g),s],stateAttributesMapping:uw});return(0,N.jsx)(_x,{context:w,openInteractionType:m,modal:k,disabled:!x||S===`trigger-hover`,initialFocus:O,returnFocus:o,restoreFocus:`popup`,previousFocusableElement:j_(C)?C:void 0,nextFocusableElement:c.context.triggerFocusTargetRef,beforeContentFocusGuardRef:c.context.beforeContentFocusGuardRef,children:(0,N.jsx)(tT.Provider,{value:d,children:A})})}),aT=P.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=IC(),s=dw(a.id);return o.useSyncedValueWithCleanup(`titleElementId`,s),Lb(`h2`,e,{ref:t,props:[{id:s},a]})}),oT=P.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,...s}=e,{buttonRef:c,getButtonProps:l}=YC({disabled:a,focusableWhenDisabled:!1,native:o}),u=IC();return rT(),Lb(`button`,e,{ref:[t,c],props:[{onClick(e){u.setOpen(!1,xv(_v,e.nativeEvent))}},s,l]})});function sT(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=sT(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function cT(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=sT(e))&&(r&&(r+=` `),r+=t);return r}var lT=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},uT=(e,t)=>({classGroupId:e,validator:t}),dT=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),fT=`-`,pT=[],mT=`arbitrary..`,hT=e=>{let t=vT(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return _T(e);let n=e.split(fT);return gT(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?lT(i,t):t:i||pT}return n[e]||pT}}},gT=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=gT(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(fT):e.slice(t).join(fT),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},_T=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?mT+r:void 0})(),vT=e=>{let{theme:t,classGroups:n}=e;return yT(n,t)},yT=(e,t)=>{let n=dT();for(let r in e){let i=e[r];bT(i,n,r,t)}return n},bT=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];xT(i,t,n,r)}},xT=(e,t,n,r)=>{if(typeof e==`string`){ST(e,t,n);return}if(typeof e==`function`){CT(e,t,n,r);return}wT(e,t,n,r)},ST=(e,t,n)=>{let r=e===``?t:TT(t,e);r.classGroupId=n},CT=(e,t,n,r)=>{if(ET(e)){bT(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(uT(n,e))},wT=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];bT(o,TT(t,a),n,r)}},TT=(e,t)=>{let n=e,r=t.split(fT),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=dT(),n.nextPart.set(t,i)),n=i}return n},ET=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,DT=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},OT=`!`,kT=`:`,AT=[],jT=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),MT=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===kT){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(OT)?(c=s.slice(0,-1),l=!0):s.startsWith(OT)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return jT(t,l,c,u)};if(t){let e=t+kT,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):jT(AT,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},NT=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},PT=e=>({cache:DT(e.cacheSize),parseClassName:MT(e),sortModifiers:NT(e),postfixLookupClassGroupIds:FT(e),...hT(e)}),FT=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},IT=/\s+/,LT=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(IT),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+OT:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},RT=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=zT(n))&&(i&&(i+=` `),i+=r);return i},zT=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=zT(e[r]))&&(n&&(n+=` `),n+=t);return n},BT=(e,...t)=>{let n,r,i,a,o=o=>(n=PT(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=LT(e,n);return i(e,a),a};return a=o,(...e)=>a(RT(...e))},VT=[],HT=e=>{let t=t=>t[e]||VT;return t.isThemeGetter=!0,t},UT=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,WT=/^\((?:(\w[\w-]*):)?(.+)\)$/i,GT=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,KT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,JT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,YT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,XT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ZT=e=>GT.test(e),QT=e=>!!e&&!Number.isNaN(Number(e)),$T=e=>!!e&&Number.isInteger(Number(e)),eE=e=>e.endsWith(`%`)&&QT(e.slice(0,-1)),tE=e=>KT.test(e),nE=()=>!0,rE=e=>qT.test(e)&&!JT.test(e),iE=()=>!1,aE=e=>YT.test(e),oE=e=>XT.test(e),sE=e=>!Q(e)&&!$(e),cE=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),lE=e=>wE(e,OE,iE),Q=e=>UT.test(e),uE=e=>wE(e,kE,rE),dE=e=>wE(e,AE,QT),fE=e=>wE(e,ME,nE),pE=e=>wE(e,jE,iE),mE=e=>wE(e,EE,iE),hE=e=>wE(e,DE,oE),gE=e=>wE(e,NE,aE),$=e=>WT.test(e),_E=e=>TE(e,kE),vE=e=>TE(e,jE),yE=e=>TE(e,EE),bE=e=>TE(e,OE),xE=e=>TE(e,DE),SE=e=>TE(e,NE,!0),CE=e=>TE(e,ME,!0),wE=(e,t,n)=>{let r=UT.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},TE=(e,t,n=!1)=>{let r=WT.exec(e);return r?r[1]?t(r[1]):n:!1},EE=e=>e===`position`||e===`percentage`,DE=e=>e===`image`||e===`url`,OE=e=>e===`length`||e===`size`||e===`bg-size`,kE=e=>e===`length`,AE=e=>e===`number`,jE=e=>e===`family-name`,ME=e=>e===`number`||e===`weight`,NE=e=>e===`shadow`,PE=BT(()=>{let e=HT(`color`),t=HT(`font`),n=HT(`text`),r=HT(`font-weight`),i=HT(`tracking`),a=HT(`leading`),o=HT(`breakpoint`),s=HT(`container`),c=HT(`spacing`),l=HT(`radius`),u=HT(`shadow`),d=HT(`inset-shadow`),f=HT(`text-shadow`),p=HT(`drop-shadow`),m=HT(`blur`),h=HT(`perspective`),g=HT(`aspect`),_=HT(`ease`),v=HT(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),$,Q],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[$,Q,c],T=()=>[ZT,`full`,`auto`,...w()],E=()=>[$T,`none`,`subgrid`,$,Q],ee=()=>[`auto`,{span:[`full`,$T,$,Q]},$T,$,Q],D=()=>[$T,`auto`,$,Q],O=()=>[`auto`,`min`,`max`,`fr`,$,Q],k=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],te=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],A=()=>[`auto`,...w()],ne=()=>[ZT,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],re=()=>[ZT,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],ie=()=>[ZT,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],j=()=>[e,$,Q],ae=()=>[...b(),yE,mE,{position:[$,Q]}],oe=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],se=()=>[`auto`,`cover`,`contain`,bE,lE,{size:[$,Q]}],ce=()=>[eE,_E,uE],le=()=>[``,`none`,`full`,l,$,Q],ue=()=>[``,QT,_E,uE],de=()=>[`solid`,`dashed`,`dotted`,`double`],fe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],pe=()=>[QT,eE,yE,mE],me=()=>[``,`none`,m,$,Q],he=()=>[`none`,QT,$,Q],ge=()=>[`none`,QT,$,Q],_e=()=>[QT,$,Q],ve=()=>[ZT,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[tE],breakpoint:[tE],color:[nE],container:[tE],"drop-shadow":[tE],ease:[`in`,`out`,`in-out`],font:[sE],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[tE],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[tE],shadow:[tE],spacing:[`px`,QT],text:[tE],"text-shadow":[tE],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,ZT,Q,$,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,$,Q]}],"container-named":[cE],columns:[{columns:[QT,Q,$,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[$T,`auto`,$,Q]}],basis:[{basis:[ZT,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[QT,ZT,`auto`,`initial`,`none`,Q]}],grow:[{grow:[``,QT,$,Q]}],shrink:[{shrink:[``,QT,$,Q]}],order:[{order:[$T,`first`,`last`,`none`,$,Q]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:ee()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:ee()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":O()}],"auto-rows":[{"auto-rows":O()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...k(),`normal`]}],"justify-items":[{"justify-items":[...te(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...te()]}],"align-content":[{content:[`normal`,...k()]}],"align-items":[{items:[...te(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...te(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":k()}],"place-items":[{"place-items":[...te(),`baseline`]}],"place-self":[{"place-self":[`auto`,...te()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mbs:[{mbs:A()}],mbe:[{mbe:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:ne()}],"inline-size":[{inline:[`auto`,...re()]}],"min-inline-size":[{"min-inline":[`auto`,...re()]}],"max-inline-size":[{"max-inline":[`none`,...re()]}],"block-size":[{block:[`auto`,...ie()]}],"min-block-size":[{"min-block":[`auto`,...ie()]}],"max-block-size":[{"max-block":[`none`,...ie()]}],w:[{w:[s,`screen`,...ne()]}],"min-w":[{"min-w":[s,`screen`,`none`,...ne()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...ne()]}],h:[{h:[`screen`,`lh`,...ne()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...ne()]}],"max-h":[{"max-h":[`screen`,`lh`,...ne()]}],"font-size":[{text:[`base`,n,_E,uE]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,CE,fE]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,eE,Q]}],"font-family":[{font:[vE,pE,t]}],"font-features":[{"font-features":[Q]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,$,Q]}],"line-clamp":[{"line-clamp":[QT,`none`,$,dE]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,$,Q]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,$,Q]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...de(),`wavy`]}],"text-decoration-thickness":[{decoration:[QT,`from-font`,`auto`,$,uE]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[QT,`auto`,$,Q]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[$T,$,Q]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,$,Q]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,$,Q]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:ae()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:se()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},$T,$,Q],radial:[``,$,Q],conic:[$T,$,Q]},xE,hE]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:ce()}],"gradient-via-pos":[{via:ce()}],"gradient-to-pos":[{to:ce()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:le()}],"rounded-s":[{"rounded-s":le()}],"rounded-e":[{"rounded-e":le()}],"rounded-t":[{"rounded-t":le()}],"rounded-r":[{"rounded-r":le()}],"rounded-b":[{"rounded-b":le()}],"rounded-l":[{"rounded-l":le()}],"rounded-ss":[{"rounded-ss":le()}],"rounded-se":[{"rounded-se":le()}],"rounded-ee":[{"rounded-ee":le()}],"rounded-es":[{"rounded-es":le()}],"rounded-tl":[{"rounded-tl":le()}],"rounded-tr":[{"rounded-tr":le()}],"rounded-br":[{"rounded-br":le()}],"rounded-bl":[{"rounded-bl":le()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-bs":[{"border-bs":ue()}],"border-w-be":[{"border-be":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...de(),`hidden`,`none`]}],"divide-style":[{divide:[...de(),`hidden`,`none`]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-bs":[{"border-bs":j()}],"border-color-be":[{"border-be":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...de(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[QT,$,Q]}],"outline-w":[{outline:[``,QT,_E,uE]}],"outline-color":[{outline:j()}],shadow:[{shadow:[``,`none`,u,SE,gE]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":[`none`,d,SE,gE]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:ue()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[QT,uE]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":j()}],"text-shadow":[{"text-shadow":[`none`,f,SE,gE]}],"text-shadow-color":[{"text-shadow":j()}],opacity:[{opacity:[QT,$,Q]}],"mix-blend":[{"mix-blend":[...fe(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[QT]}],"mask-image-linear-from-pos":[{"mask-linear-from":pe()}],"mask-image-linear-to-pos":[{"mask-linear-to":pe()}],"mask-image-linear-from-color":[{"mask-linear-from":j()}],"mask-image-linear-to-color":[{"mask-linear-to":j()}],"mask-image-t-from-pos":[{"mask-t-from":pe()}],"mask-image-t-to-pos":[{"mask-t-to":pe()}],"mask-image-t-from-color":[{"mask-t-from":j()}],"mask-image-t-to-color":[{"mask-t-to":j()}],"mask-image-r-from-pos":[{"mask-r-from":pe()}],"mask-image-r-to-pos":[{"mask-r-to":pe()}],"mask-image-r-from-color":[{"mask-r-from":j()}],"mask-image-r-to-color":[{"mask-r-to":j()}],"mask-image-b-from-pos":[{"mask-b-from":pe()}],"mask-image-b-to-pos":[{"mask-b-to":pe()}],"mask-image-b-from-color":[{"mask-b-from":j()}],"mask-image-b-to-color":[{"mask-b-to":j()}],"mask-image-l-from-pos":[{"mask-l-from":pe()}],"mask-image-l-to-pos":[{"mask-l-to":pe()}],"mask-image-l-from-color":[{"mask-l-from":j()}],"mask-image-l-to-color":[{"mask-l-to":j()}],"mask-image-x-from-pos":[{"mask-x-from":pe()}],"mask-image-x-to-pos":[{"mask-x-to":pe()}],"mask-image-x-from-color":[{"mask-x-from":j()}],"mask-image-x-to-color":[{"mask-x-to":j()}],"mask-image-y-from-pos":[{"mask-y-from":pe()}],"mask-image-y-to-pos":[{"mask-y-to":pe()}],"mask-image-y-from-color":[{"mask-y-from":j()}],"mask-image-y-to-color":[{"mask-y-to":j()}],"mask-image-radial":[{"mask-radial":[$,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":pe()}],"mask-image-radial-to-pos":[{"mask-radial-to":pe()}],"mask-image-radial-from-color":[{"mask-radial-from":j()}],"mask-image-radial-to-color":[{"mask-radial-to":j()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[QT]}],"mask-image-conic-from-pos":[{"mask-conic-from":pe()}],"mask-image-conic-to-pos":[{"mask-conic-to":pe()}],"mask-image-conic-from-color":[{"mask-conic-from":j()}],"mask-image-conic-to-color":[{"mask-conic-to":j()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:ae()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,$,Q]}],filter:[{filter:[``,`none`,$,Q]}],blur:[{blur:me()}],brightness:[{brightness:[QT,$,Q]}],contrast:[{contrast:[QT,$,Q]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,SE,gE]}],"drop-shadow-color":[{"drop-shadow":j()}],grayscale:[{grayscale:[``,QT,$,Q]}],"hue-rotate":[{"hue-rotate":[QT,$,Q]}],invert:[{invert:[``,QT,$,Q]}],saturate:[{saturate:[QT,$,Q]}],sepia:[{sepia:[``,QT,$,Q]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,$,Q]}],"backdrop-blur":[{"backdrop-blur":me()}],"backdrop-brightness":[{"backdrop-brightness":[QT,$,Q]}],"backdrop-contrast":[{"backdrop-contrast":[QT,$,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,QT,$,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[QT,$,Q]}],"backdrop-invert":[{"backdrop-invert":[``,QT,$,Q]}],"backdrop-opacity":[{"backdrop-opacity":[QT,$,Q]}],"backdrop-saturate":[{"backdrop-saturate":[QT,$,Q]}],"backdrop-sepia":[{"backdrop-sepia":[``,QT,$,Q]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,$,Q]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[QT,`initial`,$,Q]}],ease:[{ease:[`linear`,`initial`,_,$,Q]}],delay:[{delay:[QT,$,Q]}],animate:[{animate:[`none`,v,$,Q]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,$,Q]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:he()}],"rotate-x":[{"rotate-x":he()}],"rotate-y":[{"rotate-y":he()}],"rotate-z":[{"rotate-z":he()}],scale:[{scale:ge()}],"scale-x":[{"scale-x":ge()}],"scale-y":[{"scale-y":ge()}],"scale-z":[{"scale-z":ge()}],"scale-3d":[`scale-3d`],skew:[{skew:_e()}],"skew-x":[{"skew-x":_e()}],"skew-y":[{"skew-y":_e()}],transform:[{transform:[$,Q,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:ve()}],"translate-x":[{"translate-x":ve()}],"translate-y":[{"translate-y":ve()}],"translate-z":[{"translate-z":ve()}],"translate-none":[`translate-none`],zoom:[{zoom:[$T,$,Q]}],accent:[{accent:j()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,$,Q]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":j()}],"scrollbar-track-color":[{"scrollbar-track":j()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,$,Q]}],fill:[{fill:[`none`,...j()]}],"stroke-w":[{stroke:[QT,_E,uE,dE]}],stroke:[{stroke:[`none`,...j()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function FE(...e){return PE(cT(e))}function IE({...e}){return(0,N.jsx)(HC,{"data-slot":`popover`,...e})}function LE({...e}){return(0,N.jsx)(hw,{"data-slot":`popover-trigger`,...e})}function RE({...e}){return(0,N.jsx)(oT,{"data-slot":`popover-close`,...e})}function zE({className:e,align:t=`center`,alignOffset:n=0,side:r=`bottom`,sideOffset:i=4,...a}){return(0,N.jsx)(vw,{children:(0,N.jsx)(Zw,{align:t,alignOffset:n,side:r,sideOffset:i,className:`isolate z-50`,children:(0,N.jsx)(iT,{"data-slot":`popover-content`,className:FE(`bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 w-72 origin-(--transform-origin) outline-hidden`,e),...a})})})}function BE({className:e,...t}){return(0,N.jsx)(aT,{"data-slot":`popover-title`,className:FE(`font-medium`,e),...t})}function VE(){let[e,t]=(0,P.useState)(!1),[n,r]=(0,P.useState)(!1),i=()=>{t(!1),r(!1)};return{open:e,onOpenChange:(e,a)=>{if(a.reason===`trigger-press`){n?i():(e||a.cancel(),t(!0),r(!0));return}if(a.reason===`trigger-hover`&&n){a.cancel();return}t(e),e||r(!1)}}}var HE=(0,P.memo)(function({tex:e}){return(0,N.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_h.renderToString(String.raw`\displaystyle `+e,{throwOnError:!1,strict:!1})}})});function UE({note:e,popupMath:t}){let n=VE();return(0,N.jsxs)(IE,{open:n.open,onOpenChange:n.onOpenChange,modal:!1,children:[(0,N.jsx)(LE,{openOnHover:!0,delay:120,closeDelay:300,className:`math-supplement-trigger`,"aria-label":`数式の補足`,children:(0,N.jsx)(Wg,{size:15,strokeWidth:1.5,"aria-hidden":`true`})}),(0,N.jsxs)(zE,{className:`math-supplement`,side:`bottom`,sideOffset:6,align:`start`,initialFocus:!1,children:[(0,N.jsx)(BE,{className:`sr-only`,children:`数式の補足`}),e&&(0,N.jsx)(`div`,{className:`math-supplement-prose`,children:(0,N.jsx)(Cg,{children:e})}),t&&(0,N.jsx)(`div`,{className:`math-supplement-equation`,children:(0,N.jsx)(HE,{tex:t})})]})]})}function WE({lhs:e,steps:t}){return(0,N.jsx)(`section`,{className:`derivation-sequence`,"aria-label":`式変形`,children:(0,N.jsx)(`div`,{className:`derivation-sequence-lines`,children:t.map((t,n)=>(0,N.jsxs)(`div`,{className:`derivation-sequence-line`,children:[(0,N.jsx)(`span`,{className:`derivation-sequence-lhs`,children:n===0&&(0,N.jsx)(HE,{tex:e})}),(0,N.jsx)(`span`,{className:`derivation-sequence-equals`,children:`=`}),(0,N.jsxs)(`div`,{className:`derivation-sequence-rhs`,children:[(0,N.jsx)(HE,{tex:t.parts.map(e=>e.tex).join(` `)}),(t.note||t.popupMath)&&(0,N.jsx)(UE,{note:t.note,popupMath:t.popupMath})]})]},n))})})}function GE(){let[e,t]=(0,P.useState)(!1);return(0,P.useEffect)(()=>{let e=window.matchMedia(`(prefers-color-scheme: dark)`),n=()=>{let n=null;try{n=localStorage.getItem(`wzw-theme`)}catch{}let r=n===`dark`||n!==`light`&&e.matches;document.documentElement.dataset.theme=r?`dark`:`light`,t(r)};n(),e.addEventListener(`change`,n);let r=e=>{(e.key===`wzw-theme`||e.key===null)&&n()};return window.addEventListener(`storage`,r),()=>{e.removeEventListener(`change`,n),window.removeEventListener(`storage`,r)}},[]),(0,N.jsxs)(`button`,{className:`theme-toggle`,onClick:()=>{let e=document.documentElement.dataset.theme===`dark`?`light`:`dark`;document.documentElement.dataset.theme=e,t(e===`dark`);try{localStorage.setItem(`wzw-theme`,e)}catch{}},"aria-label":e?`ライトモードに切り替える`:`ダークモードに切り替える`,title:e?`ライトモード`:`ダークモード`,children:[(0,N.jsx)(Kg,{className:`theme-moon`,size:18,"aria-hidden":`true`}),(0,N.jsx)(qg,{className:`theme-sun`,size:18,"aria-hidden":`true`})]})}function KE({label:e,title:t,children:n,className:r=``}){let i=VE();return(0,N.jsxs)(IE,{open:i.open,onOpenChange:i.onOpenChange,modal:!1,children:[(0,N.jsx)(LE,{openOnHover:!0,delay:120,closeDelay:300,className:`reference-trigger ${r}`,children:e}),(0,N.jsxs)(zE,{className:`reading-reference`,side:`bottom`,align:`start`,initialFocus:!1,children:[(0,N.jsxs)(`header`,{className:`reading-reference-header`,children:[(0,N.jsx)(BE,{children:(0,N.jsx)(Cg,{inline:!0,children:t})}),(0,N.jsx)(RE,{"aria-label":`参照を閉じる`,children:(0,N.jsx)(Jg,{size:18})})]}),(0,N.jsx)(`div`,{className:`reading-reference-body note-content`,children:n})]})]})}var qE=`/wzw-notes`;function JE(e){return!e||!e.startsWith(`/`)||e.startsWith(`//`)?e:`${qE}${e}`}var YE=[{id:`6-1`,section:`6.1`,shortTitle:`基礎事項`,content:`# 6.1 基礎事項

<!-- reference: wzw-model -->

平坦な空間の自由ボソンでは、運動方程式 $\\partial\\bar\\partial X=0$ から $\\bar\\partial(\\partial X)=0$ と $\\partial(\\bar\\partial X)=0$ が従う。左と右の振動を、それぞれ正則・反正則なカレントで記録できる。三次元球面 $S^3$ を動く弦でも、左右を別々に記録できるだろうか。まず球面の計量から作用を作り、どこで分離が止まるかを調べる。その障害を取り除く項がWess–Zumino項である。得られたカレントを量子化した後には、任意のスピンから状態を作ってよいか、二つの場を結ぶとどの表現が残るか、という二つの選択を同じ対称性から決めていく。

<!-- /reference -->



## 6.1.1 作用とカイラル対称性

自由ボソンでは、運動方程式を微分の保存則として読めた。球面上でも、弦の位置を微分して運動項を作りたい。球面の各点をSU(2)の行列で表すと、どんな式になるだろうか。まず、その点の対応を定めよう。

### 群値場と主カイラル模型

弦の位置を表す四つの実座標を、SU(2)の行列 $g$ にまとめる。Pauli行列 $\\sigma_a$ を用いると

$$
g=y^0\\mathbf1+i\\sum_{a=1}^3y^a\\sigma_a,
\\qquad (y^0)^2+\\sum_{a=1}^3(y^a)^2=1
$$

と一意に書ける。四つの実数 $y^0,y^1,y^2,y^3$ にこの制約を課した集合が単位三次元球面なので、$SU(2)\\simeq S^3$ である。これは点の対応であり、物理的な半径は作用の係数で定まる。

世界面を複素座標 $(z,\\bar z)$ をもつ二次元面 $\\Sigma$ とする。以下はEuclid作用であり、向きは $dz\\wedge d\\bar z=i\\,d^2z$ に固定する。具体的には $z=\\sigma^1-i\\sigma^2$、$d^2z=2d\\sigma^1d\\sigma^2$ と取る。この規約を計量項とWess–Zumino項で共通に用いる。場を

$$
g:\\Sigma\\longrightarrow SU(2)
$$

とする。単位元の近くでは

$$
g(z,\\bar z)
=\\exp\\bigl(iX^a(z,\\bar z)t_a\\bigr),
\\qquad a=1,2,3,
$$

と書ける。$X^a$ は標的空間の局所座標、$t_a=\\sigma_a/\\sqrt2$ はHermitianな生成子で、$it_a$ が $\\mathfrak{su}(2)$ の接ベクトルになる。$g$ の微分は点 $g$ における接ベクトルなので、左から $g^{-1}$ を掛けて単位元の接空間へ移すと、異なる点でも同じLie代数の基底で比較できる。

<!-- reference: maurer-cartan -->

群値場の微分を単位元へ移して得るLie代数値1形式を $A:=g^{-1}dg$ と書く。これが世界面へ引き戻した左不変Maurer–Cartan形式である。複素座標での成分は、対応する座標を添字にして

$$
\\boxed{
A=A_z\\,dz+A_{\\bar z}\\,d\\bar z,
\\qquad
A_z=g^{-1}\\partial g,\\quad
A_{\\bar z}=g^{-1}\\bar\\partial g
}
$$

と表す。外微分や外積には1形式 $A$ を使い、座標微分や交換子の計算では成分 $A_z,A_{\\bar z}$ を使う。$A$ は恒等的に

$$
d{A}+{A}\\wedge{A}=0
$$

を満たす。

<!-- /reference -->

$dz\\wedge d\\bar z$ 成分を取れば

$$
\\boxed{
\\partial{A_{\\bar z}}-\\bar\\partial A_z+[A_z,{A_{\\bar z}}]=0
}
\\tag{MC}
$$

\`\`\`math-hint
\${A}=A_z\\,dz+{A_{\\bar z}}\\,d\\bar z$ を二つの項に分けて計算する。同じ1形式同士の外積は零で、順序を逆にした外積には負号が付く。

$$
\\begin{aligned}
d(A_z\\,dz)&=-\\bar\\partial A_z\\,dz\\wedge d\\bar z,\\\\
d({A_{\\bar z}}\\,d\\bar z)&=\\partial{A_{\\bar z}}\\,dz\\wedge d\\bar z,\\\\
{A}\\wedge{A}&=(A_z{A_{\\bar z}}-{A_{\\bar z}} A_z)dz\\wedge d\\bar z.
\\end{aligned}
$$

$d{A}+{A}\\wedge{A}=0$ の共通の外積の係数を比較する。
\`\`\`

を得る。これは運動方程式ではない。$A_z$ と \${A_{\\bar z}}$ が同じ群値場 $g$ から作られていることを表す恒等式である。

<details>
<summary>Maurer–Cartan恒等式が任意の群値場で成り立つ理由</summary>

$g^{-1}g=1$ を微分し、右から $g^{-1}$ を掛けると

$$
(dg^{-1})g+g^{-1}dg=0,
\\qquad dg^{-1}=-g^{-1}(dg)g^{-1}.
$$

$d^2g=0$ と外微分の積の法則から

$$
\\begin{aligned}
d{A}
&=d(g^{-1}dg)=(dg^{-1})\\wedge dg+g^{-1}d^2g\\\\
&=-g^{-1}(dg)g^{-1}\\wedge dg=-{A}\\wedge{A}.
\\end{aligned}
$$

行列の積の順序を保ち、$d\\bar z\\wedge dz=-dz\\wedge d\\bar z$ を使えば

$$
\\begin{aligned}
d{A}&=(\\partial{A_{\\bar z}}-\\bar\\partial A_z)\\,dz\\wedge d\\bar z,\\\\
{A}\\wedge{A}
&=(A_z{A_{\\bar z}}-{A_{\\bar z}} A_z)\\,dz\\wedge d\\bar z.
\\end{aligned}
$$

したがって $dz\\wedge d\\bar z$ の係数が零になる条件が、本文の恒等式である。

</details>

#### 主カイラル模型の作用

自由ボソンの運動項は、場の一階微分の二次式だった。球面上でも、同じ接空間へ移した二成分 $A_z,A_{\\bar z}$ をSU(2)の不変計量で組み合わせる。こうしてまず作れる作用は

$$
S_0[g]
=-\\frac{k}{4\\pi}
\\int_\\Sigma d^2z\\,
\\operatorname{tr}\\!\\left(
g^{-1}\\partial g\\,g^{-1}\\bar\\partial g
\\right)
=-\\frac{k}{4\\pi}
\\int_\\Sigma d^2z\\,\\operatorname{tr}(A_z{A_{\\bar z}}).
\\tag{6.1}
$$

左移動 $g\\mapsto hg$ では $A$ が変わらず、右移動 $g\\mapsto gh$ では $A\\mapsto h^{-1}Ah$ になる。トレースは共役変換で不変なので、この作用は定数 $h\\in SU(2)$ による左右移動の下で

$$
S_0[gh]=S_0[hg]=S_0[g]
$$

を満たす。

ここで $k>0$ は正の運動項を選ぶための無次元係数であり、$\\operatorname{tr}$ は不変双線形形式を定める。以下では基本表現のトレース $\\operatorname{tr}=\\operatorname{Tr}_{\\mathbf2}$ に固定する。これは $\\operatorname{Tr}_{\\mathrm{ad}}/4$ と同じ不変双線形形式である。$k$ が標的空間の半径とカレント代数のレベルを同時に表すことは、後で導く。



単位元近傍では $A_z=i t_a\\partial X^a+O(X^2)$、$A_{\\bar z}=i t_a\\bar\\partial X^a+O(X^2)$ なので、$i^2=-1$ が作用の負号を打ち消し、正の自由ボソン運動項になる。高次には行列の非可換性から相互作用が残る。

<details>
<summary>単位元の近くで、作用が自由ボソンの運動項になる理由</summary>

$X=X^at_a$、$g=e^{iX}$ とする。ここでは $t_a$ はHermitianで、$X$ と $dX$ をともに場の一次と数える。

$$
e^{iX}=1+iX-\\frac12X^2+O(X^3),
\\qquad d(e^{iX})=i\\,dX-\\frac12(dX\\,X+X\\,dX)+O(X^3).
$$

左から $e^{-iX}=1-iX-\\tfrac12X^2+\\cdots$ を掛け、二次まで残すと

$$
\\begin{aligned}
e^{-iX}d(e^{iX})
&=i\\,dX-\\frac12(dX\\,X+X\\,dX)+X\\,dX+O(X^3)\\\\
&=i\\,dX+\\frac12[X,dX]+O(X^3).
\\end{aligned}
$$

したがって $\\kappa_{ab}:=\\operatorname{tr}(t_at_b)$ と置けば、$i^2=-1$ によって

$$
\\operatorname{tr}(A_z{A_{\\bar z}})
=-\\kappa_{ab}\\partial X^a\\bar\\partial X^b+O(X^3),
\\qquad
S_0^{(2)}=\\frac{k}{4\\pi}\\int d^2z\\,
\\kappa_{ab}\\partial X^a\\bar\\partial X^b.
$$

Hermitian基底ではこの二次形式を正定値に取る。anti-Hermitian基底 $T_a=it_a$ を用いるなら $g=e^{X^aT_a}$ と書き、正定値内積は $-\\operatorname{tr}(T_aT_b)=\\kappa_{ab}$ になる。基底の変更と指数の $i$ の有無を同時に変えることで、同じ正の運動項を得る。

</details>

#### 運動方程式

閉じた世界面、または境界で変分が消える場合を考える。変分を同じLie代数へ移した量を $\\eta=g^{-1}\\delta g$ とする。逆行列の変分 $\\delta g^{-1}=-\\eta g^{-1}$ と積の法則から、$\\delta A_z=\\partial\\eta+[A_z,\\eta]$、$\\delta A_{\\bar z}=\\bar\\partial\\eta+[A_{\\bar z},\\eta]$ となる。作用の変分では交換子の二項がトレースの巡回性で相殺し、微分を部分積分すると

$$
\\delta S_0=\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}\\!\\left[\\eta(\\partial A_{\\bar z}+\\bar\\partial A_z)\\right]
$$

を得る。任意の $\\eta$ に対する停留条件は

$$
\\boxed{\\partial{A_{\\bar z}}+\\bar\\partial A_z=0}
\\tag{PCM}
$$

となる。これは二成分の微分の和が零という条件であり、各微分が個別に零だとはまだいえない。

<details>
<summary>主カイラル模型の運動方程式を、作用の変分から求める</summary>

Lie代数値の微小変分

$$
\\eta:=g^{-1}\\delta g
$$

を導入する。$\\delta g=g\\eta$ および $\\delta g^{-1}=-\\eta g^{-1}$ だから

\`\`\`math-steps
lhs: \\delta A_z
note: $A_z=g^{-1}\\partial g$ を変分する。$g^{-1}g=1$ の変分を右から $g^{-1}$ で掛けると、逆行列の変分の負号が決まる。
popup-math: (\\delta g^{-1})g+g^{-1}\\delta g=0\\quad\\Longrightarrow\\quad\\delta g^{-1}=-g^{-1}(\\delta g)g^{-1}=-\\eta g^{-1}
part expression: \\delta(g^{-1}\\partial g)
---
note: 積の変分則を使い、逆行列の変分と$\\eta$の定義を代入する。
popup-math: \\begin{aligned}\\delta(g^{-1}\\partial g)&=(\\delta g^{-1})\\partial g+g^{-1}\\partial(\\delta g)\\\\ \\delta g^{-1}&=-\\eta g^{-1},\\qquad \\delta g=g\\eta,\\qquad A_z=g^{-1}\\partial g\\end{aligned}
part expression: -\\eta A_z+g^{-1}\\partial(g\\eta)
---
note: Leibniz則で微分を分配し、二つの積を交換子にまとめる。
popup-math: \\begin{aligned}g^{-1}\\partial(g\\eta)&=g^{-1}(\\partial g)\\eta+\\partial\\eta=A_z\\eta+\\partial\\eta\\\\ -\\eta A_z+A_z\\eta&=[A_z,\\eta]\\end{aligned}
part expression: [A_z,\\eta]+\\partial\\eta
\`\`\`

和の順序を入れ替えれば $\\delta A_z=\\partial\\eta+[A_z,\\eta]$ である。同様に

$$
\\delta{A_{\\bar z}}=\\bar\\partial\\eta+[{A_{\\bar z}},\\eta].
$$

したがって

$$
\\begin{aligned}
\\delta S_0
&=-\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}(\\delta A_z\\,{A_{\\bar z}}+A_z\\,\\delta{A_{\\bar z}})\\\\
&=-\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}\\Bigl(
(\\partial\\eta){A_{\\bar z}}
+[A_z,\\eta]{A_{\\bar z}}
+A_z(\\bar\\partial\\eta)
+A_z[{A_{\\bar z}},\\eta]
\\Bigr).
\\end{aligned}
$$

交換子を展開すると、相殺に必要なのは行列を交換する操作ではなくトレースの巡回性である。

$$
\\begin{aligned}
\\operatorname{tr}([A_z,\\eta]{A_{\\bar z}})
&=\\operatorname{tr}(A_z\\eta{A_{\\bar z}}-\\eta A_z{A_{\\bar z}})\\\\
&=\\operatorname{tr}(\\eta{A_{\\bar z}} A_z-\\eta A_z{A_{\\bar z}}),\\\\
\\operatorname{tr}(A_z[{A_{\\bar z}},\\eta])
&=\\operatorname{tr}(A_z{A_{\\bar z}}\\eta-A_z\\eta{A_{\\bar z}})\\\\
&=\\operatorname{tr}(\\eta A_z{A_{\\bar z}}-\\eta{A_{\\bar z}} A_z).
\\end{aligned}
$$

従って二項は符号が逆になり、

$$
\\begin{aligned}
\\operatorname{tr}([A_z,\\eta]{A_{\\bar z}})
&=-\\operatorname{tr}(\\eta[A_z,{A_{\\bar z}}]),\\\\
\\operatorname{tr}(A_z[{A_{\\bar z}},\\eta])
&=+\\operatorname{tr}(\\eta[A_z,{A_{\\bar z}}]).
\\end{aligned}
$$

$\\partial\\operatorname{tr}(\\eta{A_{\\bar z}})=\\operatorname{tr}((\\partial\\eta){A_{\\bar z}}+\\eta\\partial{A_{\\bar z}})$ より、境界項を除くと

$$
\\int\\operatorname{tr}((\\partial\\eta){A_{\\bar z}})
=-\\int\\operatorname{tr}(\\eta\\partial{A_{\\bar z}}),
\\qquad
\\int\\operatorname{tr}(A_z\\bar\\partial\\eta)
=-\\int\\operatorname{tr}(\\eta\\bar\\partial A_z).
$$

ここでは世界面が閉じているか、$\\eta$ が境界で零になることを仮定する。二つを作用の変分に戻すと

$$
\\delta S_0
=\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}\\!\\left[
\\eta\\bigl(\\partial{A_{\\bar z}}+\\bar\\partial A_z\\bigr)
\\right].
$$

よって運動方程式は

$$
\\boxed{
\\partial{A_{\\bar z}}+\\bar\\partial A_z=0
}.
$$

</details>

#### 左右分離を妨げる交換子

[Maurer–Cartan恒等式](/6-1#ref-maurer-cartan)と運動方程式 (PCM) を連立すると

$$
\\partial{A_{\\bar z}}=-\\frac12[A_z,{A_{\\bar z}}],
\\qquad \\bar\\partial A_z=\\frac12[A_z,{A_{\\bar z}}].
$$

\`\`\`math-hint
Maurer–Cartan恒等式と運動方程式を足すと $\\bar\\partial A_z$ が消える。

$$
\\begin{aligned}
(\\partial{A_{\\bar z}}-\\bar\\partial A_z+[A_z,{A_{\\bar z}}])+(\\partial{A_{\\bar z}}+\\bar\\partial A_z)&=0,\\\\
2\\partial{A_{\\bar z}}+[A_z,{A_{\\bar z}}]&=0.
\\end{aligned}
$$

これを $\\bar\\partial A_z=-\\partial{A_{\\bar z}}$ に戻せば、もう一方の符号も決まる。
\`\`\`

一般には交換子が消えないので、主カイラル模型の運動項だけでは自由ボソンの分離を再現できない。可換群なら交換子は零になるが、SU(2)ではその条件を任意の場に課せない。必要なのは、交換子を零と仮定することではなく、運動方程式に現れる交換子を作用の別の寄与で打ち消すことである。

実際、Maurer–Cartan恒等式を使うと、計量項の変分に現れる $\\partial A_{\\bar z}+\\bar\\partial A_z$ は $2\\partial A_{\\bar z}+[A_z,A_{\\bar z}]$ になる。追加する項の変分が $-[A_z,A_{\\bar z}]$ を与えれば、同じ群値場の運動方程式を $\\partial A_{\\bar z}=0$ にできる。得られる左右のカレントには、左不変形式と右不変形式をそれぞれ使う。そのため、正則になる量は $A_z$ そのものとは限らない。

### 曲率とフラックス

左右のカレントが分離しないことは分かった。量子補正を含めた後も、球面の計量だけで共形対称性を保てるだろうか。弦が計量とともに結合する反対称テンソル場も加え、二つの寄与を調べよう。

#### Kalb–Ramond場との結合

弦の背景場には、計量 $G_{\\mu\\nu}$ のほかに反対称テンソル

$$
B=\\frac12B_{\\mu\\nu}(X)\\,dX^\\mu\\wedge dX^\\nu
$$

がある。これをKalb–Ramond場、または単に $B$-field と呼ぶ。点粒子が1形式ゲージ場 $A^{\\mathrm{em}}=A^{\\mathrm{em}}_\\mu dX^\\mu$ に世界線積分

$$
\\int_{\\text{worldline}}A^{\\mathrm{em}}
$$

で結合するのに対し、一次元の弦は2形式 $B$ に世界面積分で結合する。Euclid作用では

$$
S_B
=\\frac{i}{2\\pi\\alpha'}
\\int_\\Sigma X^*B
=\\frac{i}{4\\pi\\alpha'}
\\int_\\Sigma d^2\\sigma\\,
\\varepsilon^{\\alpha\\beta}
B_{\\mu\\nu}(X)
\\partial_\\alpha X^\\mu
\\partial_\\beta X^\\nu .
\\tag{B-coupling}
$$

ここで $\\alpha'$ は長さの二乗の次元をもち、弦の張力を $T=1/(2\\pi\\alpha')$ と定める。$\\varepsilon^{\\alpha\\beta}$ は世界面の向きを表す反対称テンソルであり、$X^*B$ は標的空間の2形式 $B$ を世界面へ引き戻したものである。$B$ には、標的空間上の1形式 $\\Lambda$ を用いた

$$
B\\longmapsto B+d\\Lambda
$$

というゲージ対称性があり、閉じた世界面では

$$
\\int_\\Sigma X^*(d\\Lambda)
=\\int_\\Sigma d(X^*\\Lambda)
=0
$$

なので作用は変わらない。局所的に意味をもつゲージ不変量は

$$
\\boxed{H:=dB}
$$

という3形式である。これは電磁気学で $A^{\\mathrm{em}}$ に対する $F=dA^{\\mathrm{em}}$ が物理的な場の強さになることの2形式版である。

$B$ が定数なら $H=0$ なので、閉弦のバルク運動方程式には寄与しない。第1章で定数 $B$ が主に開弦端点へ影響したのはこのためである。WZW模型で必要なのは $H\\neq0$ の背景であり、$B$ そのものより3形式フラックス $H$ が本質になる。

#### 曲率とフラックスの釣り合い

量子論では、短い距離の揺らぎを含めると作用中の計量や結合係数が観測尺度に応じて変わりうる。この変化率がベータ関数である。共形対称性を保つには、その流れが止まる背景を選ぶ必要がある。

ここでは、原著第2章のボソニックシグマ模型の1-loop結果（式 (2.14)–(2.15)）を使う。dilaton（弦結合の強さを定める背景スカラー）を一定にすると、量子補正の最初の次数である1-loopでは

$$
\\beta^G_{ab}=\\alpha'\\left(R_{ab}-\\frac14H_{acd}H_b{}^{cd}\\right)+O(\\alpha'^2).
$$

<details id="note-sigma-model-one-loop-beta">
<summary>導出：球面上の自由場の縮約から、曲率とフラックスの相殺を求める</summary>

半径 $R$ の丸い $S^3$ と、一定の強さ $h$ をもつ $H=h\\,\\mathrm{vol}_{S^3_R}$ を考える。球面の対称性を保つ計量の補正は、元の計量の定数倍になる。従って、その係数を一つの接方向で求めればよい。以下では、曲率の相互作用を一回、フラックスの相互作用を二回挿入し、自由場の縮約から対数発散を計算する。

これは短距離での1-loop計算であり、$\\alpha'/R^2\\ll1$、$\\alpha'h^2\\ll1$ の範囲で制御される。dilatonは一定、世界面は境界を持たないものとし、実Euclid座標 $\\sigma^1,\\sigma^2$ と $\\varepsilon^{12}=1$ を使う。

#### 二つの相互作用だけを取り出す

背景の写像 $\\bar X$ を、$\\sigma^1$ 方向に速さ $v$ で球面上の測地線を進み、$\\sigma^2$ 方向には変化しないものに取る。接空間の第3方向をその速度に合わせると、直交フレームで $\\partial_1\\bar X^a=v\\delta^{a3}$、$\\partial_2\\bar X^a=0$ となる。フレームを測地線に沿って平行移動すれば、この背景上の接続を消せる。

背景からの測地線変位を $\\sqrt{2\\pi\\alpha'}\\,\\xi^a$ と規格化する。三つの実揺らぎ $\\xi^a$（$a=1,2,3$）の自由作用は

$$
S_{\\mathrm{free}}=\\frac12\\int d^2\\sigma\\,
\\partial_\\alpha\\xi^a\\partial_\\alpha\\xi^a.
$$

1-loopの有効作用には、揺らぎの二次までの展開が必要になる。球面の断面曲率が $1/R^2$、直交フレームで $H_{abc}=h\\varepsilon_{abc}$ であることを使うと、相互作用は

$$
\\begin{aligned}
S_R&=-\\frac{v^2}{2R^2}\\int d^2\\sigma\\,
\\bigl[(\\xi^1)^2+(\\xi^2)^2\\bigr],\\\\
S_H&=-\\frac{ihv}{2}\\int d^2\\sigma\\,
(\\xi^1\\partial_2\\xi^2-\\xi^2\\partial_2\\xi^1)
=-ihv\\int d^2\\sigma\\,\\xi^1\\partial_2\\xi^2.
\\end{aligned}
$$

最後の等号では部分積分を使った。$S_R$ は進行方向に垂直な二つの揺らぎに作用し、$S_H$ はその二つを結び付ける。進行方向の $\\xi^3$ はこの計算では自由なままである。

<details>
<summary>二次の相互作用がこの形になる理由</summary>

計量作用の測地線変分では、二次部分が

$$
\\frac12\\int d^2\\sigma\\,
\\left[(D_\\alpha\\xi)^2
-R_{iajb}\\partial_\\alpha\\bar X^i\\partial_\\alpha\\bar X^j\\xi^a\\xi^b\\right]
$$

となる。$D_\\alpha$ は背景に沿う共変微分である。これは測地線のエネルギーの第二変分で、二つの共変微分を交換した項が曲率を与える。球面では $R_{3a3b}=(\\delta_{ab}-\\delta_{a3}\\delta_{b3})/R^2$ なので、選んだ背景で曲率項は $S_R$ になる。

$B$ の結合は、全微分を除く一回の変分で $H=dB$ にまとめられる。さらに変分すると、二次部分は

$$
\\frac i2\\int d^2\\sigma\\,
\\varepsilon^{\\alpha\\beta}H_{abj}\\xi^aD_\\alpha\\xi^b\\partial_\\beta\\bar X^j
+\\frac i4\\int d^2\\sigma\\,
\\varepsilon^{\\alpha\\beta}\\nabla_aH_{bij}\\xi^a\\xi^b
\\partial_\\alpha\\bar X^i\\partial_\\beta\\bar X^j.
$$

最初の項は背景の微分を変分した寄与、第二項は $H$ 自身を変分した寄与である。一定の $h$ と球面の体積形式から作る $H$ は共変一定なので、第二項はゼロになる。第一項に $\\partial_\\beta\\bar X^j=v\\delta_{\\beta1}\\delta^{j3}$ と $\\varepsilon^{21}=-1$ を入れれば、本文の $S_H$ を得る。

</details>

#### 曲率は一回の縮約で寄与する

自由場の運動量空間の伝播関数は $\\delta^{ab}/p^2$ である。背景の変化より短い距離の揺らぎを積分するため、運動量を $\\mu<|p|<\\Lambda$ に制限する。同一点の縮約は

$$
\\langle\\xi^a\\xi^b\\rangle_0=\\delta^{ab}I,
\\qquad
I:=\\int_{\\mu<|p|<\\Lambda}\\frac{d^2p}{(2\\pi)^2p^2}
=\\frac1{2\\pi}\\log\\frac\\Lambda\\mu.
$$

$\\Lambda$ は紫外cutoff、$\\mu$ は有効作用を読む尺度である。二つの横方向がそれぞれ $I$ を寄与するので、

$$
\\langle S_R\\rangle_0
=-\\frac{v^2}{2R^2}\\int d^2\\sigma\\,(I+I)
=-\\frac{v^2 I}{R^2}\\int d^2\\sigma.
$$

ここでの係数 $2$ は、三次元球面の一つの接方向に対して横方向が二つあることから出る。

#### フラックスは二回の縮約で寄与する

$S_H$ の一回挿入は、異なる自由場 $\\xi^1,\\xi^2$ の縮約がゼロなので消える。最初の寄与は、$-\\log\\langle e^{-S_H}\\rangle_0$ の二次項

$$
-\\frac12\\langle S_H^2\\rangle_{0,c}
$$

である。添字 $c$ は連結した縮約を表す。必要な積は一つだけで、

$$
\\begin{aligned}
&\\langle(\\xi^1\\partial_2\\xi^2)(\\sigma)
(\\xi^1\\partial_2\\xi^2)(\\sigma')\\rangle_{0,c}\\\\
&\\qquad=
\\langle\\xi^1(\\sigma)\\xi^1(\\sigma')\\rangle_0
\\langle\\partial_2\\xi^2(\\sigma)\\partial_2\\xi^2(\\sigma')\\rangle_0.
\\end{aligned}
$$

相対位置 $\\sigma-\\sigma'$ を積分すると、二つの伝播関数が $1/(p^2)^2$、二つの微分が $p_2^2$ を与える。二次元の角度平均 $p_2^2\\mapsto p^2/2$ より、対数部分は

$$
\\int\\frac{d^2p}{(2\\pi)^2}\\frac{p_2^2}{(p^2)^2}
=\\frac I2.
$$

従って

$$
-\\frac12\\langle S_H^2\\rangle_{0,c}
=-\\frac12(-ihv)^2\\frac I2\\int d^2\\sigma
=\\frac{h^2v^2I}{4}\\int d^2\\sigma.
$$

Euclid作用の $i^2=-1$ が、二次展開の負号を打ち消す。このためフラックスの寄与は曲率の寄与と逆符号になる。$1/4$ は二次展開の $1/2!$ と角度平均の $1/2$ の積である。$S_R$ を二回以上挿入する項は背景の微分を四つ以上含むため、ここで求める二微分の対数発散には入らない。

#### 対数発散を計量の走りに読み替える

二つの寄与を足すと、対数発散は

$$
\\Gamma_{\\log}
=-\\frac{\\log(\\Lambda/\\mu)}{4\\pi}
\\left(\\frac2{R^2}-\\frac{h^2}2\\right)
\\int d^2\\sigma\\,v^2.
$$

球面の対称性により、一般の背景では $v^2$ が $G_{ij}\\partial_\\alpha\\bar X^i\\partial_\\alpha\\bar X^j$ に戻る。元の計量作用の係数は $1/(4\\pi\\alpha')$ なので、この発散を打ち消すための裸の計量は

$$
G^0_{ij}=G_{ij}(\\mu)
+\\alpha'\\log\\frac\\Lambda\\mu
\\left(\\frac2{R^2}-\\frac{h^2}2\\right)G_{ij}(\\mu).
$$

$G^0$ と $\\Lambda$ を固定して $\\log\\mu$ で微分する。補正項の中の $R,h,G$ の走りは次のループ次数なので、1-loopでは

$$
\\boxed{
\\beta^G_{ij}:=\\mu\\frac{dG_{ij}}{d\\mu}
=\\alpha'\\left(\\frac2{R^2}-\\frac{h^2}2\\right)G_{ij}
+O(\\alpha'^2).
}
$$

従って $h=\\pm2/R$ で計量の走りが止まる。これは球面の $R_{ij}=2G_{ij}/R^2$ と $H_{iab}H_j{}^{ab}=2h^2G_{ij}$ により、本文の $\\alpha'(R_{ij}-H_{iab}H_j{}^{ab}/4)$ と一致する。

#### $B$ の走りはこの背景でゼロになる

反対称な結合の補正を見るには、背景の二方向の微分を保って、上に示した $\\nabla H$ の頂点を縮約する。$\\langle\\xi^a\\xi^b\\rangle_0=\\delta^{ab}I$ より、その対数項は

$$
\\Gamma_{B,\\log}
=\\frac{iI}{4}\\int d^2\\sigma\\,
\\varepsilon^{\\alpha\\beta}\\nabla^aH_{aij}
\\partial_\\alpha\\bar X^i\\partial_\\beta\\bar X^j.
$$

計量の場合と同じく、元の $B$ 結合の係数 $i/(4\\pi\\alpha')$ と比較すれば

$$
\\beta^B_{ij}=-\\frac{\\alpha'}2\\nabla^aH_{aij}+O(\\alpha'^2).
$$

今回の $H=h\\,\\mathrm{vol}_{S^3_R}$ は $\\nabla H=0$ なので、$\\beta^B$ の1-loop項はゼロである。従ってこの次数で必要な条件は $h^2=4/R^2$ にまとまる。有限の $k$ での厳密な共形対称性は、後にカレント代数から調べる。

この計算の自由場の縮約は、短距離OPEを積分する計算でもある。曲率の項は一つの複合演算子の正規順序化から、$H^2$ の項は二つの挿入の積から生じる。背景場展開は、その相互作用を曲率とフラックスで表すために用いた。

二次の背景場展開の参照：[Bonezzi–Codina–Hohm、§3.2–3.3と式 (4.49)](https://arxiv.org/html/2103.15931v2)。ここではその局所頂点を丸い $S^3$ に特殊化して計算した。

</details>

ここで $R_{ab}$ は計量 $G$ のRicci曲率、添字の上げ下げには $G$ を使う。丸い三次元球面の幾何の結果 $R_{ab}=2G_{ab}/R^2$ を用いると、$H=0$ のままでは曲率の寄与が残る。$R$ は球面の半径である。その大きさを評価するために、作用の係数から半径を読み取ろう。

$SU(2)\\simeq S^3$ という同一視だけでは、物理的な長さは決まらない。基本表現のトレースでは単位球面の計量が $ds^2_{\\mathrm{unit}}=-\\tfrac12\\operatorname{tr}(g^{-1}dg)^2$ である。半径 $R$ ならこの計量を $R^2$ 倍する。弦の計量作用 $S_G=(4\\pi\\alpha')^{-1}\\int d^2\\sigma\\,G_{\\mu\\nu}\\partial_\\alpha X^\\mu\\partial_\\alpha X^\\nu$ は、上の複素座標規約では

$$
S_G=-\\frac{R^2}{4\\pi\\alpha'}\\int d^2z\\,\\operatorname{tr}(A_zA_{\\bar z})
$$

となる。作用 (6.1) と係数を比較すると

$$
\\boxed{R^2=k\\alpha'},\\qquad \\ell_s=\\sqrt{\\alpha'},\\qquad R/\\ell_s=\\sqrt{k}.
\\tag{radius-level}
$$

つまり、$k$ が大きいほど弦の長さを単位とした球面が大きくなる。

<details>
<summary>作用の係数 $k$ から半径 $R^2=k\\alpha'$ を読み取る</summary>

<!-- reference: radius-from-action -->

Pauli行列を用いて $g=y^0\\mathbf1+i y^a\\sigma_a$、$(y^0)^2+\\sum_a(y^a)^2=1$ と書く。$\\sigma_a\\sigma_b=\\delta_{ab}\\mathbf1+i\\varepsilon_{abc}\\sigma_c$ と制約の微分 $y^0dy^0+y^ady^a=0$ から

$$
g^{-1}dg=i\\sigma_a e^a,
\\qquad e^a=y^0dy^a-y^ady^0+\\varepsilon_{abc}y^bdy^c.
$$

$\\boldsymbol y=(y^1,y^2,y^3)$ とまとめると、交差積 $\\boldsymbol y\\times d\\boldsymbol y$ は $\\boldsymbol y$ と $d\\boldsymbol y$ に直交するので

$$
\\begin{aligned}
\\sum_a(e^a)^2
&=(y^0)^2|d\\boldsymbol y|^2+|\\boldsymbol y|^2(dy^0)^2
-2y^0dy^0\\,\\boldsymbol y\\cdot d\\boldsymbol y
+|\\boldsymbol y\\times d\\boldsymbol y|^2\\\\
&=|d\\boldsymbol y|^2+(dy^0)^2.
\\end{aligned}
$$

最後に $|\\boldsymbol y\\times d\\boldsymbol y|^2=|\\boldsymbol y|^2|d\\boldsymbol y|^2-(\\boldsymbol y\\cdot d\\boldsymbol y)^2$ と $\\boldsymbol y\\cdot d\\boldsymbol y=-y^0dy^0$ を代入した。これは単位球面に誘導される計量である。$\\operatorname{tr}(\\sigma_a\\sigma_b)=2\\delta_{ab}$ より

$$
ds_{\\mathrm{unit}}^2=\\sum_a(e^a)^2
=-\\frac12\\operatorname{tr}(g^{-1}dg\\,g^{-1}dg),
\\qquad ds^2=R^2ds_{\\mathrm{unit}}^2.
$$

係数を比較するため、複素座標の積分規約も固定する。$z=\\sigma^1-i\\sigma^2$、$\\partial=(\\partial_1+i\\partial_2)/2$、$\\bar\\partial=(\\partial_1-i\\partial_2)/2$、$d^2z=2d\\sigma^1d\\sigma^2$ とする。対称な計量 $G$ との縮約では交差項が消えるので

$$
G_{\\mu\\nu}\\partial X^\\mu\\bar\\partial X^\\nu
=\\frac14G_{\\mu\\nu}
\\left(\\partial_1X^\\mu\\partial_1X^\\nu+\\partial_2X^\\mu\\partial_2X^\\nu\\right).
$$

ここで $A_z:=g^{-1}\\partial g$、\${A_{\\bar z}}:=g^{-1}\\bar\\partial g$ と書く。従って実座標のシグマ模型作用は

$$
\\begin{aligned}
S_G&=\\frac{1}{4\\pi\\alpha'}\\int d\\sigma^1d\\sigma^2\\,
G_{\\mu\\nu}\\sum_{\\alpha=1}^2\\partial_\\alpha X^\\mu\\partial_\\alpha X^\\nu\\\\
&=\\frac{1}{2\\pi\\alpha'}\\int d^2z\\,G_{\\mu\\nu}\\partial X^\\mu\\bar\\partial X^\\nu\\\\
&=-\\frac{R^2}{4\\pi\\alpha'}\\int d^2z\\,\\operatorname{tr}(A_z{A_{\\bar z}}).
\\end{aligned}
$$

式 (6.1) の係数 $-k/(4\\pi)$ と比較すれば $R^2/\\alpha'=k$ である。無次元の群座標を同じだけ変えたとき、距離は $\\sqrt{k}$、作用は $k$ に比例する。計量のトレース規約と、世界面の面積要素の規約を一緒に固定することで、この比較が一意に定まる。

<!-- /reference -->

</details>

球面の左右移動の対称性を保つ3形式は体積形式の定数倍なので、$H=h\\,\\mathrm{vol}_{S^3_R}$ と置く。$h$ は単位体積当たりのフラックスの強さである。正規直交フレームでは $H_{abc}=h\\varepsilon_{abc}$ であり、$\\sum_{c,d}\\varepsilon_{acd}\\varepsilon_{bcd}=2\\delta_{ab}$ を使うと

$$
H_{acd}H_b{}^{cd}=2h^2G_{ab},\\qquad
\\beta^G_{ab}=\\alpha'\\left(\\frac2{R^2}-\\frac{h^2}2\\right)G_{ab}+O(\\alpha'^2).
$$

従って曲率とフラックスの寄与が釣り合う条件は

$$
\\boxed{H=h\\,\\mathrm{vol}_{S^3_R},\\qquad h=\\pm\\frac2R}
$$

となる。同じシグマ模型の結果を $B$ に用いると、$\\beta^B_{ab}=-\\alpha'\\nabla^cH_{cab}/2+O(\\alpha'^2)$ である。$\\nabla$ は計量 $G$ のLevi–Civita接続による共変微分で、隣り合う点のテンソルを基底の変化も含めて比較する。この接続が計量の体積形式を保つことを使うと、一定の $h$ に対する $H=h\\,\\mathrm{vol}_{S^3_R}$ も $\\nabla H=0$ となり、$\\beta^B$ の1-loop項は零になる。符号は球面の向きの選択に対応し、以下では $h=2/R$ を選ぶ。

この1-loop近似の小さなパラメータは $\\alpha'/R^2=1/k$ なので、大きな $k$ での見通しを与える。有限 $k$ の厳密な共形対称性には、後の量子カレント代数を使う。

<details>
<summary>フラックスの強さを $2/R$ にすると、なぜベータ関数が消えるのか？</summary>

上で導いたボソニックシグマ模型の1-loop結果を球面に適用する。dilaton $\\Phi$ を一定にした場合の計量ベータ関数は

$$
\\beta^G_{ab}
=\\alpha'\\left(
R_{ab}-\\frac14H_{acd}H_b{}^{cd}
\\right)
+O(\\alpha'^2)
$$

である。$H=dB$ はKalb–Ramond 2形式 $B$ の場の強さである。

半径 $R$ の丸い $n$ 次元球面では $R_{ab}=(n-1)G_{ab}/R^2$ なので、$n=3$ では

$$
R_{ab}=\\frac{2}{R^2}G_{ab}.
$$

$H=0$ ならベータ関数は消えない。SU(2)の等長変換を保つ3形式は体積形式に比例するので

$$
H=h\\,\\mathrm{vol}_{S^3}
$$

と置く。直交フレームでは $H_{abc}=h\\varepsilon_{abc}$ だから

$$
H_{acd}H_b{}^{cd}
=h^2\\varepsilon_{acd}\\varepsilon_b{}^{cd}
=2h^2G_{ab}.
$$

縮約の係数2を確認する。直交フレームで $a=b=1$ なら、非零なのは $(c,d)=(2,3),(3,2)$ の二項で、それぞれ $\\varepsilon_{1cd}^2=1$ である。$a\\neq b$ なら、同じ組 $(c,d)$ に対して二つのLevi–Civita記号がともに非零になることはない。従って $\\sum_{c,d}\\varepsilon_{acd}\\varepsilon_{bcd}=2\\delta_{ab}$ となり、一般のフレームでは $2G_{ab}$ と書ける。

したがって

$$
\\beta^G_{ab}
\\propto
\\left(
\\frac{2}{R^2}-\\frac{h^2}{2}
\\right)G_{ab},
$$

となり、1-loopの計量ベータ関数が消える条件は

$$
\\boxed{
h^2=\\frac{4}{R^2}
}
$$

である。

$B$ 自身の1-loopベータ関数は、dilatonが一定なら

$$
\\beta^B_{ab}
=-\\frac{\\alpha'}{2}\\nabla^cH_{cab}
+O(\\alpha'^2)
$$

である。$\\nabla$ は計量 $G$ のLevi–Civita共変微分である。$H=h\\,\\mathrm{vol}_{S^3}$ では体積形式が共変一定であり、$h$ も定数なので

$$
\\nabla^cH_{cab}=0.
$$

したがって、この背景は $h^2=4/R^2$ を満たすとき、計量と $B$ の両方のベータ関数を1-loopで消す。

球面の体積形式はSU(2)の左右移動で不変なので、選んだフラックスもこの対称性を保つ。式 (6.1) の係数は半径を定め、曲率との釣り合いがフラックスの大きさを定める。次に、このフラックスと弦の結合を作用に組み込む。

この議論が直接確認するのは、計量と $B$ のベータ関数が1-loopで消えることである。WZW模型が量子論として厳密なCFTになることは、6.1.2でカレント代数とSugawara構成から確認される。

</details>

### Wess–Zumino項とレベル量子化

曲率と釣り合うフラックス $H=(2/R)\\mathrm{vol}_{S^3_R}$ を作用に組み込みたい。局所的には $H=dB$ と書け、弦との結合は $S_{B,E}=\\frac{i}{2\\pi\\alpha'}\\int_\\Sigma g^*B$ である。しかし $\\int_{S^3}H\\neq0$ なので、$B$ は球面全体で滑らかには定義できない。もし定義できれば、境界のない $S^3$ にStokesの定理を使って $\\int_{S^3}H=\\int_{S^3}dB=0$ となり、矛盾する。

そこで、世界面 $\\Sigma$ を境界にもつ三次元多様体 $M$ と、場の延長 $\\widetilde g:M\\to SU(2)$、$\\widetilde g|_\\Sigma=g$ を選ぶ。$B$ が $\\widetilde g(M)$ を含む領域全体で定義されていれば、境界で $\\widetilde g=g$ であることと、引き戻しが外微分と交換することから

$$
\\int_\\Sigma g^*B
=\\int_{\\partial M}\\widetilde g^{\\,*}B
=\\int_M d(\\widetilde g^{\\,*}B)
=\\int_M\\widetilde g^{\\,*}H
$$

となる。中央の等号は $M$ 上の通常のStokesの定理、最後は $d(\\widetilde g^{\\,*}B)=\\widetilde g^{\\,*}(dB)$ と $H=dB$ による。この一致をもとに、大域的に存在する $H$ を使って結合を

$$
S_{\\mathrm{WZ},E}[g;M,\\widetilde g]
:=\\frac{i}{2\\pi\\alpha'}\\int_M\\widetilde g^{\\,*}H
$$

と定義する。これがWess–Zumino項である。ここでは閉じた向き付け可能な世界面を扱い、そのような曲面が三次元多様体の境界になるという位相の結果を使う。

さらに、$S^3$ ではループも二次元球面も一点へ縮められるという位相の結果を使う。これを $\\pi_1(S^3)=\\pi_2(S^3)=0$ と書く。曲面を頂点・辺・面に分けて写像を縮めると、この二つの消失が、辺と面を縮める際の障害をなくす。そのため、曲面上の写像 $g$ 全体も定数写像へ連続変形できる。その変形を $\\Sigma\\times[0,1]$ 上の写像とみなし、定数写像側を三次元領域で塞げば、内部に同じ定数値を与えられる。これが、元の $g$ を境界に保つ延長になる。

**三次元への延長は補助的な選択なので、同じ世界面の場 $g$ に割り当てる量子振幅は、その選び方によらなければならない。** この条件を調べるため、二つの拡張の作用を引き算する。共通の境界上では場が一致するので、第2の拡張の向きを反転して貼り合わせると、境界が消えた三次元多様体 $N$ と、二つの場の延長をつないだ写像 $\\widehat g:N\\to S^3$ ができる。積分の差を、この $N$ 上の一つの積分として扱える。

![同じ世界面を境界に持つ二つの三次元延長領域のうち、第二の向きを反転し、共通の境界で貼り合わせて境界のない三次元領域を作る模式図](/diagrams/wz-extension-gluing.svg)

図は $\\Sigma=S^2$、二つの延長領域が三次元球体 $B^3$ の場合を示し、貼り合わせた領域は $N=S^3$ になる。一般の世界面でも同じ操作で境界が消えるが、$N$ が球面になるとは限らない。必要なのは、$N$ が閉じた向き付き三次元多様体であり、二つの写像が共通の境界で一致することである。この写像に使う位相の結果を先に述べる。閉じた向き付き三次元多様体から $S^3$ への写像には、標的の一般の点を向き込みで何回覆うかを数える整数が付く。この整数を「次数」$n$ と呼ぶ。次数は写像の連続変形で変わらず、3形式の引き戻しの積分は、標的全体の積分の $n$ 倍になるという次数の積分公式を使う。従って、作用の差は

$$
\\Delta S_E
=\\frac{i}{2\\pi\\alpha'}\\int_N\\widehat g^{\\,*}H
=\\frac{i n}{2\\pi\\alpha'}\\int_{S^3}H,
\\qquad n\\in\\mathbb Z.
$$

この公式は、向きを保つ枝の $+1$ 回分と、反転する枝の $-1$ 回分を合わせて数える。単に重なりの個数を数えるのではなく、符号付きの和が作用の差に入る。

丸い三次元球面の体積公式 $\\operatorname{Vol}(S^3_R)=2\\pi^2R^3$ を用いる。既出の $H=(2/R)\\mathrm{vol}_{S^3_R}$ と $R^2=k\\alpha'$ を合わせると、球面全体のフラックスは

$$
\\int_{S^3}H
=\\frac2R\\,2\\pi^2R^3
=4\\pi^2\\alpha' k.
$$

したがって $\\Delta S_E=2\\pi i k n$ であり、Euclid経路積分の重み $e^{-S_E}$ は拡張を変えると $e^{-2\\pi i k n}$ 倍される。$n=1$ の差も作れる。延長領域の内部に小さな三次元球体を取り、その近くの写像を連続変形して一定値にそろえておく。表面を一点に潰した球体 $B^3/\\partial B^3$ は $S^3$ なので、この球体の内側だけに、標的球面を一回覆う写像を入れられる。外側の写像は変えないため、世界面の $g$ を保ったまま次数を1だけ変えられる。この場合に重みを変えない条件 $e^{-2\\pi i k}=1$ は $k\\in\\mathbb Z$ と同値であり、整数 $k$ なら全ての $n$ で重みが一致する。よって

$$
\\boxed{
\\frac1{4\\pi^2\\alpha'}\\int_{S^3}H
=\\frac{R^2}{\\alpha'}=k\\in\\mathbb Z.
}
\\tag{H-flux}
$$

これがレベル量子化である。作用には $2\\pi i$ の整数倍の差があっても、その指数は一意になる。また $n$ は連続変形で変わらず $\\delta\\Delta S_E=0$ なので、局所的な運動方程式だけでは整数条件は得られない。正の運動項を持つSU(2) WZW模型では $k>0$ を選ぶ。同じ整数がフラックスを数え、曲率との釣り合いを通じて半径を定める。

次に作用を変分できるよう、$H$ を群値の場で書き表す。単位球面で $g^{-1}dg=i\\sigma_a e^a$ と書くと、$e^a$ は左不変な正規直交1形式であり、Pauli行列のトレースから $\\operatorname{tr}(g^{-1}dg)^3=12\\,e^1\\wedge e^2\\wedge e^3=12\\,\\mathrm{vol}_{S^3_{\\mathrm{unit}}}$ を得る。一方 $H=(2/R)\\mathrm{vol}_{S^3_R}=2R^2\\mathrm{vol}_{S^3_{\\mathrm{unit}}}$ なので、フラックスの引き戻しは

$$
\\widetilde g^{\\,*}H
=\\frac{k\\alpha'}6
\\operatorname{tr}\\!\\left((\\widetilde g^{-1}d\\widetilde g)^3\\right)
$$

となる。三乗は行列の積と1形式の外積を同時に取る記号である。これをWess–Zumino項に代入すると、全作用は

$$
\\boxed{
S_E[g;M,\\widetilde g]
=S_{0,E}[g]+\\frac{ik}{12\\pi}
\\int_M\\operatorname{tr}\\!\\left((\\widetilde g^{-1}d\\widetilde g)^3\\right)
}.
\\tag{6.2}
$$

次節ではこの作用の変分から、左右のカレントが独立に保存されることを導く。

<details>
<summary>$\\pi_1(S^3)=\\pi_2(S^3)=0$ が拡張を可能にする理由</summary>

世界面を頂点・辺・面に分ける。$S^3$ は道でつながっており、$\\pi_1(S^3)=0$ でループを、$\\pi_2(S^3)=0$ で二次元球面を縮められるため、世界面からの写像 $g$ を定数写像へ連続変形できる。その変形を $\\Sigma\\times[0,1]$ 上の写像とみなし、定数写像側を三次元領域で塞ぐ。内部に同じ定数値を割り当てれば、境界に $g$ を持つ拡張を得る。ここでは閉じた向き付け可能な曲面が三次元多様体の境界になることを使った。非コンパクトな世界面では無限遠の条件も指定する。

</details>

<details>
<summary>トレースの積分が $24\\pi^2n$ になる理由</summary>

単位球面のMaurer–Cartan形式を $i\\sigma_a e^a$ と書く。$\\sigma_a$ はPauli行列、$e^a$ は単位球面の左不変な正規直交1形式である。基本表現のトレース $\\operatorname{tr}(\\sigma_a\\sigma_b\\sigma_c)=2i\\varepsilon_{abc}$ より

$$
\\operatorname{tr}\\bigl((i\\sigma_a e^a)^3\\bigr)
=2\\varepsilon_{abc}e^a\\wedge e^b\\wedge e^c
=12\\,e^1\\wedge e^2\\wedge e^3.
$$

向きは $e^1\\wedge e^2\\wedge e^3$ が正の単位球面の体積形式となるように選ぶ。半径 $R$ の球面では体積形式が $R^3$ 倍になるので、既出の $H=(2/R)\\mathrm{vol}_{S^3_R}$ は $H=2R^2e^1\\wedge e^2\\wedge e^3$ と書ける。上式の係数 $12$ と比べると $2R^2/12=R^2/6=k\\alpha'/6$ であり、$\\widetilde g$ による引き戻しが本文の式を与える。

また $\\int_{S^3}e^1\\wedge e^2\\wedge e^3=2\\pi^2$ なので、次数 $n$ の写像に対するCartan 3形式の積分は $24\\pi^2n$ であり、式 (6.2) からも $\\Delta S_E=(ik/12\\pi)24\\pi^2n=2\\pi i k n$ と確かめられる。生の行列トレースを別の表現で取ると周期も変わるため、レベルを比べるときは不変双線形形式の規格化を揃える。

</details>

### 運動方程式とカイラル対称性

Wess–Zumino項を作用に組み込めた。これが主カイラル模型に残った交換子を消すか、同じ群値場 $g$ の変分で確かめよう。既出の \${A}=g^{-1}dg$ と変分パラメータ $\\eta=g^{-1}\\delta g$ を、延長した場 $\\widetilde g$ から同じ方法で作る：

$$
\\widetilde{A}:=\\widetilde g^{-1}d\\widetilde g,
\\qquad
\\widetilde\\eta:=\\widetilde g^{-1}\\delta\\widetilde g,
\\qquad
\\widetilde{A}|_\\Sigma={A},\\quad
\\widetilde\\eta|_\\Sigma=\\eta.
$$

チルダは三次元領域上の量を表し、境界への引き戻しが世界面上の量になる。この対応のもとで、$\\delta\\widetilde A=d\\widetilde\\eta+[\\widetilde A,\\widetilde\\eta]$ を三乗の各因子へ代入する。トレースの巡回性で三項が等しくなり、交換子の項は相殺する。さらにMaurer–Cartan恒等式から $d(\\widetilde A^2)=0$ なので、3形式の変分は全微分になる：

$$
\\delta\\operatorname{tr}(\\widetilde{A}^3)
=3d\\operatorname{tr}(\\widetilde\\eta\\,\\widetilde{A}^2).
$$

従ってStokesの定理により、作用の変分は三次元領域の境界 $\\Sigma$ だけで決まる。世界面では \${A}=A_z\\,dz+{A_{\\bar z}}\\,d\\bar z$ なので、外積の反対称性から \${A}^2=[A_z,{A_{\\bar z}}]dz\\wedge d\\bar z$ となる。作用 (6.2) の係数と向き $dz\\wedge d\\bar z=i\\,d^2z$ を使うと

$$
\\delta S_{\\mathrm{WZ},E}
=\\frac{ik}{4\\pi}\\int_\\Sigma\\operatorname{tr}(\\eta{A}^2)
=-\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}(\\eta[A_z,{A_{\\bar z}}]).
$$

こうして得た交換子の項を、計量項の変分と合わせる。反正則なカレントを得るには、運動方程式を $\\partial{A_{\\bar z}}=0$ の形にする必要がある。Maurer–Cartan恒等式 $\\bar\\partial A_z=\\partial{A_{\\bar z}}+[A_z,{A_{\\bar z}}]$ を計量項の変分に代入すると、交換子 $[A_z,{A_{\\bar z}}]$ が残る。Wess–Zumino項の変分が与える $-[A_z,{A_{\\bar z}}]$ がこれを打ち消す。冒頭で定めた $A_z=g^{-1}\\partial g$、\${A_{\\bar z}}=g^{-1}\\bar\\partial g$ を用いると、全作用の変分に現れる組合せは

$$
\\partial{A_{\\bar z}}+\\bar\\partial A_z-[A_z,{A_{\\bar z}}]=2\\partial{A_{\\bar z}}.
$$

\`\`\`math-hint
Maurer–Cartan恒等式を、代入する項について解く。

$$
\\bar\\partial A_z=\\partial{A_{\\bar z}}+[A_z,{A_{\\bar z}}].
$$

従って

$$
\\partial{A_{\\bar z}}+\\underbrace{\\partial{A_{\\bar z}}+[A_z,{A_{\\bar z}}]}_{\\bar\\partial A_z}-[A_z,{A_{\\bar z}}]=2\\partial{A_{\\bar z}}.
$$
\`\`\`

最後の等号はMaurer–Cartan恒等式による。従って運動方程式は

$$
\\boxed{\\partial(g^{-1}\\bar\\partial g)=0}.
\\tag{6.3}
$$

Wess–Zumino項の相対係数が、左右の運動を結び付けていた交換子をちょうど消すため、このカイラルな形になる。

<details>
<summary>3形式の変分から、交換子の相殺までを追う</summary>

三次元内部で $\\widetilde{A}=\\widetilde g^{-1}d\\widetilde g$、$\\widetilde\\eta=\\widetilde g^{-1}\\delta\\widetilde g$ と置く。主カイラル模型と同じ逆行列の変分を使うと

$$
\\delta\\widetilde{A}=d\\widetilde\\eta+[\\widetilde{A},\\widetilde\\eta].
$$

\`\`\`math-hint
逆行列の変分 $\\delta\\widetilde g^{-1}=-\\widetilde\\eta\\widetilde g^{-1}$ と $\\delta\\widetilde g=\\widetilde g\\widetilde\\eta$ を使う。$\\widetilde\\eta$ は0形式なので外微分の積の法則に追加の負号はない。

$$
\\begin{aligned}
\\delta(\\widetilde g^{-1}d\\widetilde g)
&=-\\widetilde\\eta\\widetilde{A}+\\widetilde g^{-1}d(\\widetilde g\\widetilde\\eta)\\\\
&=-\\widetilde\\eta\\widetilde{A}+\\widetilde{A}\\widetilde\\eta+d\\widetilde\\eta.
\\end{aligned}
$$
\`\`\`

$\\widetilde\\eta$ は0形式である。三つの1形式の積を変分すると、トレースの巡回性によって三項が等しくなる。1形式を残り二つの後ろへ移す符号は $(-1)^{1\\cdot2}=1$ で、交換子の項はtraceの中で相殺する。また、Maurer–Cartan恒等式から $d(\\widetilde{A}^2)=0$ なので

$$
\\delta\\operatorname{tr}(\\widetilde{A}^3)
=3\\operatorname{tr}(d\\widetilde\\eta\\,\\widetilde{A}^2)
=3d\\operatorname{tr}(\\widetilde\\eta\\,\\widetilde{A}^2).
$$

\`\`\`math-hint
積には外積を含む。Maurer–Cartan恒等式 $d\\widetilde{A}=-\\widetilde{A}^2$ より

$$
d(\\widetilde{A}^2)=d\\widetilde{A}\\,\\widetilde{A}-\\widetilde{A}\\,d\\widetilde{A}=-\\widetilde{A}^3+\\widetilde{A}^3=0.
$$

交換子から来る寄与も巡回性で消える。

$$
\\operatorname{tr}([\\widetilde{A},\\widetilde\\eta]\\widetilde{A}^2)=\\operatorname{tr}(\\widetilde{A}\\widetilde\\eta\\widetilde{A}^2-\\widetilde\\eta\\widetilde{A}^3)=0.
$$

よって $d\\operatorname{tr}(\\widetilde\\eta\\widetilde{A}^2)=\\operatorname{tr}(d\\widetilde\\eta\\,\\widetilde{A}^2)$。変分で生じる三項が等しいため係数は $3$ になる。
\`\`\`

積には外積を含む。これが全微分になるため、三次元積分の変分はStokesの定理で世界面上の積分になる。Euclid作用 (6.2) の係数と、冒頭で固定した向き $dz\\wedge d\\bar z=i\\,d^2z$ を使えば

$$
\\begin{aligned}
\\delta S_{\\mathrm{WZ},E}
&=\\frac{ik}{4\\pi}\\int_\\Sigma\\operatorname{tr}(\\eta{A}^2)\\\\
&=-\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}(\\eta[A_z,{A_{\\bar z}}]).
\\end{aligned}
$$

\`\`\`math-hint
三次元積分の係数 $ik/(12\\pi)$ に、3形式の変分から出た $3$ を掛ける。Stokesの定理で境界積分にし、\${A}^2=[A_z,{A_{\\bar z}}]dz\\wedge d\\bar z$ を使う。

$$
\\frac{ik}{12\\pi}\\cdot3=\\frac{ik}{4\\pi},\\qquad
\\frac{ik}{4\\pi}\\,dz\\wedge d\\bar z
=\\frac{ik}{4\\pi}\\,i\\,d^2z=-\\frac{k}{4\\pi}d^2z.
$$

最後の負号は、この向きの規約と $i^2=-1$ から出る。
\`\`\`

ここでは \${A}^2=[A_z,{A_{\\bar z}}]dz\\wedge d\\bar z$ を用いた。計量項の変分を足すと

$$
\\delta S_E=\\frac{k}{4\\pi}\\int_\\Sigma d^2z\\,
\\operatorname{tr}\\!\\left[\\eta\\bigl(\\partial{A_{\\bar z}}+\\bar\\partial A_z-[A_z,{A_{\\bar z}}]\\bigr)\\right].
$$

Maurer–Cartan恒等式 $\\partial{A_{\\bar z}}-\\bar\\partial A_z+[A_z,{A_{\\bar z}}]=0$ から括弧内は $2\\partial{A_{\\bar z}}$ になる。任意の変分 $\\eta$ に対して作用が停留する条件が式 (6.3) である。Wess–Zumino項の符号を反転すると括弧内は $2\\bar\\partial A_z$ となり、左右のカイラルセクターが交換される。

</details>

#### 正則カレントと反正則カレント

<!-- reference: chiral-currents -->

左右の運動を別々に記録するには、一方に左不変形式、他方に右不変形式を使う。原著のカレントは

$$
J:=-k\\,\\partial g\\,g^{-1}=-k\\,gA_zg^{-1},
\\qquad
\\bar J:=k\\,g^{-1}\\bar\\partial g=k{A_{\\bar z}}.
\\tag{6.4}
$$

である。$\\bar J$ は左不変成分 \${A_{\\bar z}}$ の定数倍であり、$J$ は $A_z$ を $gA_zg^{-1}=\\partial g\\,g^{-1}$ により右不変成分へ移してから $-k$ を掛けたものである。

<!-- /reference -->



反正則側は $\\partial\\bar J=k\\partial A_{\\bar z}=0$ である。正則側には、同じ恒等式と逆行列の微分から

$$
\\bar\\partial(gA_zg^{-1})
=g\\bigl(\\bar\\partial A_z-[A_z,A_{\\bar z}]\\bigr)g^{-1}
=g(\\partial A_{\\bar z})g^{-1}=0
$$

が成り立つ。従って

$$
\\boxed{\\bar\\partial J=0,\\qquad\\partial\\bar J=0}
$$

が従う。$J$ は $z$、$\\bar J$ は $\\bar z$ だけに依存する。

<details>
<summary>計算：右不変カレントの正則性を確かめる</summary>

$\\bar J=k{A_{\\bar z}}$ なので、式 (6.3) から

$$
\\boxed{
\\partial\\bar J=0
}
$$

が直ちに従う。したがって $\\bar J$ は $\\bar z$ のみに依存する反正則場である。

$J$ には $\\partial g\\,g^{-1}$ が現れるので、$A_z=g^{-1}\\partial g$ の微分が零だと仮定することはできない。まず \${A_{\\bar z}}=g^{-1}\\bar\\partial g$ から $\\bar\\partial g=g{A_{\\bar z}}$、逆行列の微分から $\\bar\\partial g^{-1}=-{A_{\\bar z}} g^{-1}$ を得る。右不変形式と左不変形式の関係

$$
\\partial g\\,g^{-1}=gA_zg^{-1}
$$

を使う。両辺を $\\bar\\partial$ で微分すると

$$
\\begin{aligned}
\\bar\\partial(gA_zg^{-1})
&=(\\bar\\partial g)A_zg^{-1}
+g(\\bar\\partial A_z)g^{-1}
+gA_z(\\bar\\partial g^{-1})\\\\
&=g{A_{\\bar z}}A_zg^{-1}
+g(\\bar\\partial A_z)g^{-1}
-gA_z{A_{\\bar z}}g^{-1}\\\\
&=g\\bigl(
\\bar\\partial A_z-[A_z,{A_{\\bar z}}]
\\bigr)g^{-1}.
\\end{aligned}
$$

(MC)から

$$
\\bar\\partial A_z-[A_z,{A_{\\bar z}}]=\\partial{A_{\\bar z}}
$$

なので

$$
\\bar\\partial(gA_zg^{-1})
=g(\\partial{A_{\\bar z}})g^{-1}
=0.
$$

したがって

$$
\\boxed{
\\bar\\partial J=0
}
$$

であり、$J$ は $z$ のみに依存する正則場である。

</details>

各カレントはLie代数値なので

$$
J(z)=J^a(z)t_a,
\\qquad
\\bar J(\\bar z)=\\bar J^a(\\bar z)t_a.
$$

保存則が正則性の形になっているため、$J$ に正則な重みを掛けた輪郭積分は、その積の特異点をまたがない変形では変わらない。例えば、原点を囲む輪郭で $\\oint dz\\,z^nJ^a(z)$ を各整数 $n$ について作れる。$n<0$ では重みも原点に極を持つので、原点も演算子挿入も横切らずに輪郭を変形する。こうして三成分の一つ一つから無限個の輪郭積分を取り出せる。反正則側でも同じことができる。これらの量が場にどう作用し、互いにどんな交換関係を満たすかを次節で調べる。

左右の保存則は得られた。では、量子化後も三成分を独立した自由ボソンのように扱えるだろうか。次節ではカレントのOPEを入力とし、その積にSU(2)の非可換な構造がどう現れるかを確かめる。

球面の計量だけでは残った交換子が、Wess–Zumino項の変分によって消えた。その結果、曲がった球面上でも $\\bar\\partial J=0$ と $\\partial\\bar J=0$ を得て、左右それぞれの保存量を輪郭積分で取り出せる。フラックスの係数 $k$ は、拡張を変えても量子振幅が一致する条件で整数になった。この整数を持つ保存カレントは得られたが、その対称性に従う量子状態の種類はまだ決めていない。次に量子OPEを入力として、その選択を調べる。

## 6.1.2 アフィン $\\widehat{\\mathfrak{su}}(2)$ の表現論

保存カレントを量子演算子として扱い、その対称性のもとで可能な状態と場の結合を求める。カレント代数からエネルギーと許容表現を定め、characterで状態を数え、fusionとfusing行列で結合を記述する。

### current代数とエネルギー

量子論では、カレントの輪郭積分が挿入した場に及ぼす変換をcurrent Ward恒等式で定める。ここでは、輪郭内の場との積の留数がその場の変化を与えるという対応を採用する（原著 第3章・式 (3.44)、§6.1.2）。これが、輪郭積分を対称変換の生成子として扱う根拠になる。左右に同じレベル $k$ の独立なカレント代数があることも、WZW量子化の結果として採用する（原著 §6.1.2）。以下では正則側の成分 $J^a(z)$ を用い、その交換関係と状態のエネルギーの変化を調べる。原点のまわりで

$$
\\boxed{
J^a(z)=\\sum_{n\\in\\mathbb Z}J_n^a z^{-n-1}
}
$$

とLaurent展開する。指数を $-n-1$ とするのは、$J^a(z)\\,dz$ が座標変換で1形式として振る舞うカレントの規約である。この共形ウェイト1の性質と整合するエネルギー運動量テンソルを後のSugawara構成で求める。逆に各モードは

$$
\\boxed{
J_n^a
=\\frac{1}{2\\pi i}\\oint_0 dz\\,z^nJ^a(z)
}
$$

で取り出される。

円筒座標 $w=\\tau+i\\sigma$ と平面座標 $z=e^w$ を対応させると、1形式の変換 $J_{\\mathrm{cyl}}(w)=zJ(z)$ により $J_{\\mathrm{cyl}}=\\sum_nJ_ne^{-nw}$ となる。したがって $n$ は空間円周 $\\sigma$ 方向のFourierモード番号であり、零モードは円周に沿って一定な変換を生成する。正負のモードが状態のエネルギーをどう変えるかは、エネルギー運動量テンソルを得た後で決まる。

#### カレントOPEと中心項

量子化したWZWカレントの局所積は、特異部分だけを書くと

\`\`\`equation
id: current-ope
\\boxed{
J^a(z)J^b(w)
\\sim
\\frac{k\\,\\delta^{ab}}{(z-w)^2}
+\\frac{i f^{ab}{}_{c}J^c(w)}{z-w}
}
\`\`\`

である。このOPEと、「作用の係数 $k$ が二重極の係数にもなる」という対応は、整数レベルのWZW作用を量子化したWard恒等式の結果として使う（原著 §6.1.2・式 (6.5)、[WittenのWZW量子化](https://doi.org/10.1007/BF01215276)）。ここで導くのは、この局所積からモード代数と表現の制限が生じる過程である。$f^{ab}{}_{c}$ は

$$
[t_a,t_b]=if^{ab}{}_{c}t_c
$$

で定めた $\\mathfrak{su}(2)$ の構造定数である。記号 $\\sim$ は、$z\\to w$ で特異になる項だけを残したことを表す。

前節と同じ基本表現トレースに対し、生成子を $t_a=\\sigma_a/\\sqrt2$ と取れば $\\operatorname{tr}(t_at_b)=\\delta_{ab}$、$f^{abc}=\\sqrt2\\varepsilon^{abc}$ となる。$\\sigma_a$ はPauli行列、$\\varepsilon^{123}=1$ は完全反対称記号である。この直交基底で[current OPE](#eq-current-ope)の二重極を $k\\delta^{ab}$ と書いているので、ここに現れる $k$ は作用の整数レベルと同じである。

モードの交換子は、二つの動径積の順序を入れ替えた輪郭の差である。その差は $z=w$ を囲む小円へ縮められる。二重極では $\\operatorname{Res}_{z=w}z^n/(z-w)^2=nw^{n-1}$、一重極では $\\operatorname{Res}_{z=w}z^n/(z-w)=w^n$ なので、残る $w$ 積分からそれぞれ $kn\\delta^{ab}\\delta_{n+m,0}$ と $if^{ab}{}_{c}J_{n+m}^c$ が出る。

<details>
<summary>カレントOPEからモードの交換関係 (6.5) を導く</summary>

動径量子化では、積 $J_n^aJ_m^b$ は $z$ の輪郭を $w$ の輪郭より外側に取り、逆順の積は内側に取る。この外側と内側の輪郭の差を変形すると、$z=w$ だけを正向きに囲む小円になる。原点に関する寄与は二つの輪郭で相殺する。したがってモードの交換子は

$$
[J_n^a,J_m^b]
=
\\frac{1}{(2\\pi i)^2}
\\oint_0dw\\,w^m
\\oint_wdz\\,z^n
J^a(z)J^b(w)
$$

から読める。まず二重極の寄与を段階ごとに追う。

\`\`\`math-steps
lhs: \\left([J_n^a,J_m^b]\\right)_{\\mathrm{double\\ pole}}
part integral: \\frac{k\\delta^{ab}}{(2\\pi i)^2}\\oint_0dw\\,w^m\\oint_wdz\\,\\frac{z^n}{(z-w)^2}
---
note: 内側の二重極の留数は$z^n$の微分になる。留数定理の$2\\pi i$が規格化因子を一つ消す。
popup-math: \\frac{1}{2\\pi i}\\oint_w\\frac{f(z)}{(z-w)^2}\\,dz=f'(w),\\qquad \\left.\\frac{d}{dz}z^n\\right|_{z=w}=nw^{n-1}
part integral: \\frac{kn\\delta^{ab}}{2\\pi i}\\oint_0dw\\,w^{n+m-1}
---
note: 原点の輪郭積分が残すのは$w^{-1}$の項だけであり、$n+m=0$を選ぶ。
popup-math: \\frac{1}{2\\pi i}\\oint_0dw\\,w^{q-1}=\\delta_{q,0}
part result: kn\\delta^{ab}\\delta_{n+m,0}
\`\`\`

一重極については

$$
\\operatorname*{Res}_{z=w}
\\frac{z^n}{z-w}
=w^n
$$

だから

$$
\\begin{aligned}
\\frac{if^{ab}{}_{c}}{2\\pi i}
\\oint_0dw\\,w^{n+m}J^c(w)
&=
if^{ab}{}_{c}J_{n+m}^c.
\\end{aligned}
$$

ここで $n$ が負でも、小円の中心 $w$ は原点ではないため、$z^n$ はその小円内で正則である。したがって二重極の留数公式は全整数 $n$ に使える。OPEの正則項は小円積分で零となり、上の二種類の寄与だけが残る。

</details>

<!-- reference: affine-algebra -->

二つを合わせると

$$
\\boxed{
[J_n^a,J_m^b]
=if^{ab}{}_{c}J_{n+m}^c
+kn\\delta^{ab}\\delta_{n+m,0}
}
\\tag{6.5}
$$

を得る。これがレベル $k$ のアフィンLie代数

$$
\\widehat{\\mathfrak{su}}(2)_k
$$

である。

<!-- /reference -->



$n=m=0$ では中心項が消え、

$$
[J_0^a,J_0^b]=if^{ab}{}_{c}J_0^c
$$

となる。したがって通常の $\\mathfrak{su}(2)$ は、無限個あるモードの零モード部分として埋め込まれている。一方、$n+m=0$ かつ $n\\neq0$ では $kn$ が残る。この数はすべての生成子と可換なので「中心項」と呼ばれる。

<!-- reference: level -->

Wess–Zumino項を含む量子振幅 $e^{-S_E}$ が延長の選び方によらないことから、その係数 $k$ は整数に量子化される。量子論では同じ $k$ がカレント二点関数、すなわち [current OPE](#eq-current-ope) の二重極の強さになる。

<!-- /reference -->

#### Sugawara構成とエネルギー

<!-- reference: sugawara -->

どの状態がどれだけのエネルギーを持つかを知るには、共形変換を生成するエネルギー運動量テンソル $T(z)$ が必要になる。古典的な運動項は $g$ の微分の二次式であり、カレントもその微分から作られる。そこで、量子論でもカレントの二次式から $T$ を作ることを試す。SU(2)の方向を特別扱いしないよう添字を縮約する。積のコロンは、二つのモードの番号を比べ、大きい方を右へ置くnormal orderingを表す。零モードもこの規約に含める。この順序で作る $\\sum_a:J^aJ^a:$ が候補になる。

これがSugawara構成である。$T(z)=\\sum_nL_nz^{-n-2}$ のモードを作るため、係数を決める前の二次式を

$$
Q_n:=\\frac12\\sum_{a,m}:J_m^aJ_{n-m}^a:
$$

と置く。モードの番号が $n$ に合計する二つのカレントを、この順序で掛けて足す。

<!-- /reference -->



候補を作るだけでは、その係数は決まらない。$L_n$ がカレントの座標変換を正しく生成することを要求して決める。$SU(2)$ では $Q_n$ を $k+2$ で割る必要があり、$2$ の部分は同じ点の量子カレントを並べ替える際の交換子から生じる。

<details>
<summary>Sugawara二次式とnormal orderingの定義</summary>

まず

$$
Q_n
:=
\\frac12
\\sum_{a=1}^{3}
\\sum_{m\\in\\mathbb Z}
:J_m^aJ_{n-m}^a:
$$

と置く。コロンはnormal orderingを表し、二個のモードのうち添字が大きいものを右へ置く。特に正のモード、すなわち消滅演算子は生成演算子より右に来る。こうしないと、無限個の真空寄与が同じ場所に積み重なってしまう。

以下のモード和は、有限個の負モードを基底状態へ作用させた有限grade状態上で評価する。gradeとは、作用させた $J_{-n}^a$ の正整数 $n$ の総和である。後で $[L_0,J_{-n}^a]=nJ_{-n}^a$ を得るので、これは基底状態からの $L_0$ 固有値の増分に等しい。この領域では十分大きな正モードが状態を消すため、各和は実際には有限項しか寄与しない。したがって無限和の添字移動は、共通のカットオフを入れて有限和として操作し、最後にカットオフを外すことと同値である。

</details>

#### Sugawara構成の量子補正

この補正は、normal orderingしたモード和の添字をずらすと、相殺されない有限個の項が残ることから生じる。

<details>
<summary>モード和の端に残る項から $k+2$ を導く</summary>

一般論へ進む前に、$SU(2)$ で量子補正の $2$ が生じる場所を直接見る。式 (6.5) の直交基底を $J^1,J^2,J^3$ とし、$\\mathfrak{su}(2)$ の構造定数を

$$
f^{abc}=\\sqrt2\\,\\varepsilon^{abc}
$$

と規格化する。$\\varepsilon^{abc}$ は完全反対称で $\\varepsilon^{123}=1$ とする。Cartan–Weyl基底を

$$
\\boxed{
J_n^0:=\\frac{J_n^3}{\\sqrt2},
\\qquad
J_n^\\pm:=\\frac{J_n^1\\pm iJ_n^2}{\\sqrt2}
}
$$

と定めると

$$
\\begin{aligned}
[J_n^0,J_m^0]
&=\\frac{k}{2}n\\delta_{n+m,0},\\\\
[J_n^0,J_m^\\pm]
&=\\pm J_{n+m}^\\pm,\\\\
[J_n^+,J_m^-]
&=2J_{n+m}^0+kn\\delta_{n+m,0}
\\end{aligned}
\\tag{affine-su2}
$$

となる。例えば最初の式の $k/2$ は、$J^0=J^3/\\sqrt2$ によって中心項が半分になるためである。同じ基底変換により、不変な二次式は

$$
\\frac12\\sum_{a=1}^3:J^aJ^a:
=
:J^0J^0:
+\\frac12:J^+J^-:
+\\frac12:J^-J^+:
$$

となる。

$Q_0$ をnormal orderingして正モードを右へ置くと

$$
\\begin{aligned}
Q_0
=
&(J_0^0)^2
+\\frac12(J_0^+J_0^-+J_0^-J_0^+)\\\\
&+\\sum_{m=1}^{\\infty}
\\left(
2J_{-m}^0J_m^0
+J_{-m}^+J_m^-
+J_{-m}^-J_m^+
\\right).
\\end{aligned}
$$

量子補正の由来を、最初の正モード $J_1^0$ との交換子で確かめる。$J^0$ だけを含む部分を $Q_0^{(0)}=(J_0^0)^2+2\\sum_{m>0}J_{-m}^0J_m^0$ と書くと、$m=1$ の中心項だけが寄与するので

$$
[Q_0^{(0)},J_1^0]=2[J_{-1}^0,J_1^0]J_1^0=-kJ_1^0.
$$

\`\`\`math-hint
Cartan成分の交換関係は $[J_n^0,J_m^0]=(k/2)n\\delta_{n+m,0}$。$m>0$ なら $[J_m^0,J_1^0]=0$ で、負モード側も $m=1$ だけが残る。

$$
\\begin{aligned}
2\\sum_{m>0}[J_{-m}^0,J_1^0]J_m^0
&=2\\sum_{m>0}\\left(-\\frac{km}{2}\\delta_{m,1}\\right)J_m^0\\\\
&=-kJ_1^0.
\\end{aligned}
$$
\`\`\`

残りを $Q_0^{(\\pm)}=Q_0-Q_0^{(0)}$ と書く。その正負モードの積には、(affine-su2) から

$$
\\begin{aligned}
[J_{-m}^+J_m^-,J_1^0]&=-J_{1-m}^+J_m^-+J_{-m}^+J_{m+1}^-,\\\\
[J_{-m}^-J_m^+,J_1^0]&=+J_{1-m}^-J_m^+-J_{-m}^-J_{m+1}^+
\\end{aligned}
$$

が成り立つ。第一式の第一項で $m\\ge2$ に $p=m-1$ と置くと、第二項の和と同じ積が逆符号で現れる。第二式も同様に相殺し、それぞれ $m=1$ の端だけが残る：

$$
\\begin{aligned}
\\sum_{m>0}[J_{-m}^+J_m^-,J_1^0]&=-J_0^+J_1^-,\\\\
\\sum_{m>0}[J_{-m}^-J_m^+,J_1^0]&=+J_0^-J_1^+.
\\end{aligned}
$$

\`\`\`math-hint
第一式の和で $m=1$ の項を分ける。残りの $m\\ge2$ を $p=m-1$ と書くと、正符号の和と同じ範囲・同じ積になる。

$$
-\\sum_{m\\ge1}J_{1-m}^+J_m^-
=-J_0^+J_1^--\\sum_{p\\ge1}J_{-p}^+J_{p+1}^-.
$$

最後の和が $+\\sum_{m\\ge1}J_{-m}^+J_{m+1}^-$ と消える。第二式も $+$ と $-$ を交換して同じ操作をする。有限gradeの状態に作用させているため、十分大きい正モードの項は零になる。
\`\`\`

和は先に定めた有限grade状態上で評価している。一方、零モード部分の交換子は

$$
\\begin{aligned}
\\frac12[J_0^+J_0^-+J_0^-J_0^+,J_1^0]
=\\frac12\\bigl(-J_1^+J_0^-+J_0^+J_1^-+J_1^-J_0^+-J_0^-J_1^+\\bigr).
\\end{aligned}
$$

これに端の二項を足すと、積が交換子にまとまる：

$$
\\begin{aligned}
[Q_0^{(\\pm)},J_1^0]
&=\\tfrac12[J_0^-,J_1^+]+\\tfrac12[J_1^-,J_0^+]\\\\
&=\\tfrac12(-2J_1^0)+\\tfrac12(-2J_1^0)=-2J_1^0.
\\end{aligned}
$$

最後の交換子には中心項がなく、$SU(2)$ の非可換性が寄与している。先ほどの中心項と合わせれば

$$
\\boxed{[Q_0,J_1^0]=-(k+2)J_1^0}.
$$

カレントの共形ウェイト1に対応する条件は $[L_0,J_1^0]=-J_1^0$ なので、$Q_0$ を $k+2$ で割る規格化が必要になる。この $2$ は、和の添字を一つずらしたときに端に残る交換子から生じた。

</details>

補足では $n=0,r=1$ の交換子を直接計算できる。一般のモードについては、標準的なSugawara計算の結果

$$
\\boxed{
[Q_n,J_r^a]
=-(k+2)rJ_{n+r}^a
}
\\tag{Sugawara-key}
$$

を第3章の式 (3.7) から採用する。係数の $k$ はcurrent交換子の中心項、$2$ は $SU(2)$ の非可換交換子から来る。

一般の単純Lie代数 $\\mathfrak g$ では、この $2$ の代わりに双対Coxeter数 $h^\\vee$ が現れる：

$$
[Q_n,J_r^a]
=-(k+h^\\vee)rJ_{n+r}^a.
$$

$h^\\vee$ は随伴表現の二次Casimirから決まるLie代数固有の数であり、$SU(2)$ では $h^\\vee=2$ である。可換な $U(1)$ では構造定数が零なので、この寄与も $h^\\vee=0$ である。

カレントの共形ウェイト1という条件は

$$
[L_n,J_r^a]=-rJ_{n+r}^a
\\tag{weight-one}
$$

である。

<details>
<summary>共形ウェイト1のOPEをモード交換子へ移す</summary>

共形ウェイト1であるとは、エネルギー運動量テンソルとのOPEが

$$
T(z)J^a(w)
\\sim
\\frac{J^a(w)}{(z-w)^2}
+\\frac{\\partial J^a(w)}{z-w}
$$

となることである。これをモードへ移すと

$$
[L_n,J_r^a]=-rJ_{n+r}^a
$$

と変換しなければならない。
$L_n=(2\\pi i)^{-1}\\oint dz\\,z^{n+1}T(z)$ を用いると、内側の小円積分は

$$
(n+1)w^nJ^a(w)+w^{n+1}\\partial J^a(w)
$$

となる。外側で $w^r$ を掛けて積分する。閉曲線上で全微分の積分は零なので

$$
\\begin{aligned}
\\frac1{2\\pi i}\\oint dw\\,w^{n+r+1}\\partial J^a(w)
&=-(n+r+1)\\frac1{2\\pi i}\\oint dw\\,w^{n+r}J^a(w)\\\\
&=-(n+r+1)J_{n+r}^a.
\\end{aligned}
$$

二重極からの $(n+1)J_{n+r}^a$ と足すと、係数は $(n+1)-(n+r+1)=-r$ となる。

</details>

(Sugawara-key) と比較すると、正しい規格化は

$$
\\boxed{
L_n
=\\frac{Q_n}{k+h^\\vee}
=
\\frac{1}{2(k+h^\\vee)}
\\sum_{a,m}:J_m^aJ_{n-m}^a:
}
\\tag{6.6}
$$

に一意に決まる。$SU(2)$ では

$$
\\boxed{
L_n
=
\\frac{1}{2(k+2)}
\\sum_{a,m}:J_m^aJ_{n-m}^a:
}.
$$

ここで用いるSugawara定理は、単純Lie代数の正整数レベルのカレント代数に対し、式 (6.6) が

$$
[L_n,L_m]=(n-m)L_{n+m}+\\frac{c}{12}(n^3-n)\\delta_{n+m,0}
$$

というVirasoro代数を満たすことを保証する（原著式 (3.7)、(6.6)）。この閉性が、カレント代数から共形対称性を得るための外部入力である。その中心電荷は

$$
\\boxed{
c=\\frac{k\\,\\dim\\mathfrak g}{k+h^\\vee}
}
$$

となる。$SU(2)$ では $\\dim\\mathfrak{su}(2)=3$ なので

$$
\\boxed{
c=\\frac{3k}{k+2}
}.
$$

<details>
<summary>真空の二次励起から中心電荷を計算する</summary>

標準的なSugawara定理は、$L_n$ がVirasoro代数を満たすことを保証する。その中心電荷の値は真空 $|0\\rangle$ だけで求められる。$J_m^a|0\\rangle=0$（$m\\geq0$）および $L_0|0\\rangle=0$ を使うと

$$
L_{-2}|0\\rangle=\\frac1{2(k+h^\\vee)}\\sum_a J_{-1}^aJ_{-1}^a|0\\rangle.
$$

$[L_2,J_{-1}^a]=J_1^a$ により

$$
\\begin{aligned}
L_2L_{-2}|0\\rangle
&=\\frac1{2(k+h^\\vee)}\\sum_a
 \\left(J_1^aJ_{-1}^a+J_{-1}^aJ_1^a\\right)|0\\rangle\\\\
&=\\frac1{2(k+h^\\vee)}\\sum_a[J_1^a,J_{-1}^a]|0\\rangle\\\\
&=\\frac{k\\dim\\mathfrak g}{2(k+h^\\vee)}|0\\rangle.
\\end{aligned}
$$

同じ添字の交換子では構造定数の項が零なので、最後には各 $a$ について $k$ だけが残る。一方、Virasoro代数では $[L_2,L_{-2}]=4L_0+c/2$ である。真空上で両者を比較すると $c=k\\dim\\mathfrak g/(k+h^\\vee)$ を得る。この計算は中心電荷の値を確認するもので、Virasoro代数への閉性そのものにはSugawara定理を使っている。

</details>

$k\\to\\infty$ では $c\\to3$ となり、標的空間 $S^3$ の三つの局所座標に対応する自由ボソンの値へ近づく。有限の $k$ では $c<3$ であり、曲がった群多様体上の理論は三個の自由ボソンと同じではない。

#### 基底状態の共形ウェイト

得られた $L_0$ を基底状態に作用させ、共形ウェイトを求める。スピンを扱いやすいよう、$f^{abc}=\\sqrt2\\varepsilon^{abc}$ の直交基底から

$$
J_n^0=\\frac{J_n^3}{\\sqrt2},\\qquad
J_n^\\pm=\\frac{J_n^1\\pm iJ_n^2}{\\sqrt2}
\\tag{Cartan-Weyl-basis}
$$

へ移る。零モードは $[J_0^0,J_0^\\pm]=\\pm J_0^\\pm$、$[J_0^+,J_0^-]=2J_0^0$ を満たす。正エネルギー表現とは、$L_0$ の固有値が下から有界な表現である。ここでは最小固有値が存在し、その固有空間に有限次元のSU(2)既約多重項を一つ選び、そこから負モードで状態を生成するクラスを構成する（原著 §6.1.2）。エネルギーを下げる正モードはこの最下層を消し、エネルギーを変えない零モードは最下層の中でSU(2)として作用する。選んだ多重項のスピンを $j$ とし、その基底状態を

$$
|j;\\ell\\rangle,
\\qquad
j\\in\\frac12\\mathbb Z_{\\geq0},
\\qquad
\\ell=-j,-j+1,\\ldots,j
$$

として選ぶ。定義は

$$
\\begin{aligned}
J_n^a|j;\\ell\\rangle&=0
&& (n>0),\\\\
J_0^0|j;\\ell\\rangle&=\\ell|j;\\ell\\rangle,\\\\
J_0^+|j;j\\rangle&=0
\\end{aligned}
$$

である。

式 (6.6) の $L_0$ でnormal orderingした正モードは右端で基底状態を消す。従って残るのは零モードのCasimirだけであり、

$$
L_0\\big|_{\\mathrm{ground}}
=\\frac1{k+2}\\left[(J_0^0)^2+\\frac12(J_0^+J_0^-+J_0^-J_0^+)\\right]
=\\frac{j(j+1)}{k+2}\\mathbf1
$$

となる。角括弧は通常のスピン $j$ 表現の二次Casimirである。

<details>
<summary>基底状態のウェイトが $j(j+1)/(k+2)$ になる理由</summary>

$L_0=Q_0/(k+2)$ である。「[Sugawara構成](/6-1#ref-sugawara)の量子補正」の補足で展開した $Q_0$ のうち、正モードを含む項が基底状態上で消えることを使う。

右側にある正モード $J_n^a$ はすべて基底状態を消すため、無限和は寄与しない。残る零モード部分は通常の $SU(2)$ Casimir演算子

$$
C_2
:=
(J_0^0)^2
+\\frac12(J_0^+J_0^-+J_0^-J_0^+)
$$

であり、スピン $j$ 表現上で

$$
C_2|j;\\ell\\rangle
=j(j+1)|j;\\ell\\rangle
$$

と作用する。
固有値 $j(j+1)$ も最高ウェイト状態上で確認できる。$[J_0^+,J_0^-]=2J_0^0$ と $J_0^+|j;j\\rangle=0$ より

$$
\\begin{aligned}
C_2|j;j\\rangle
&=\\left((J_0^0)^2+\\frac12[J_0^+,J_0^-]+J_0^-J_0^+\\right)|j;j\\rangle\\\\
&=(j^2+j)|j;j\\rangle.
\\end{aligned}
$$

$C_2$ は全零モードと可換なので、$J_0^-$ を作用させて得る全ての $|j;\\ell\\rangle$ に同じ固有値が引き継がれる。

</details>

したがって

$$
\\boxed{
L_0|j;\\ell\\rangle
=h_j|j;\\ell\\rangle,
\\qquad
h_j=\\frac{j(j+1)}{k+2}
}
\\tag{6.7}
$$

を得る。

また (weight-one) で $n=0$ と置けば

$$
[L_0,J_r^a]=-rJ_r^a.
$$

よって

$$
[L_0,J_{-n}^a]=nJ_{-n}^a
\\qquad(n>0)
$$

である。$J_{-n}^a$ はエネルギーを $n$ だけ上げるため、負のモードが生成演算子、正のモードが消滅演算子だというモード展開の説明が確認できた。

### 可積分表現

負のカレントモードはエネルギーを上げる。そこで、通常のSU(2)表現と同じようにスピン $j$ の基底状態を選び、全ての負モードで励起を作ることを試す。この候補の状態空間を $\\mathcal V_j$ と書く。零モードのSU(2)の関係とカレントの交換関係は満たすが、どの $j$ でも物理的な状態空間になるとはまだ分からない。

確率解釈を保つには、基底状態だけでなく、そこから作った全ての励起のノルムが非負でなければならない。この条件と候補 $\\mathcal V_j$ を照合すれば、出発点に選べるスピンを制限できる。

最初に調べる励起として $J_{-1}^+|j;j\\rangle$ を選ぶ。$[L_0,J_{-1}^+]=J_{-1}^+$ と $[J_0^0,J_{-1}^+]=J_{-1}^+$ により、エネルギーと磁気量子数をともに1だけ増やす状態である。ユニタリーな表現では $(J_n^+)^\\dagger=J_{-n}^-$ なので、そのノルムは

$$
\\begin{aligned}
\\|J_{-1}^+|j;j\\rangle\\|^2
&=\\langle j;j|J_1^-J_{-1}^+|j;j\\rangle\\\\
&=\\langle j;j|[J_1^-,J_{-1}^+]|j;j\\rangle\\\\
&=(k-2j)\\||j;j\\rangle\\|^2.
\\end{aligned}
$$

二行目では $J_1^-|j;j\\rangle=0$、三行目では $[J_1^-,J_{-1}^+]=k-2J_0^0$ を使った。基底状態のノルムを正に取ると、$j>k/2$ ではこの一状態が負ノルムになる。通常のSU(2)では許されるスピンでも、その上にカレントの励起を作るとノルム条件を破る。この候補は物理的な表現から排除しなければならない。

残る $j\\leq k/2$ で同じ励起を繰り返すと、どこで新しい関係が生じるか。繰り返す演算子を

$$
E:=J_{-1}^+,
\\qquad
F:=J_1^-,
\\qquad E^\\dagger=F
$$

と置く。交換子 $[E,F]=2J_0^0-k$ に現れる零モードのずれを

$$
H_{\\mathrm{aff}}:=J_0^0-\\frac{k}{2}
$$

と書けば、三つの演算子だけで交換関係が閉じる。

<details>
<summary>$E,F,H_{\\mathrm{aff}}$ が角運動量と同じ交換関係を満たす理由</summary>

(affine-su2) から

$$
\\begin{aligned}
[H_{\\mathrm{aff}},E]
&=[J_0^0,J_{-1}^+]
=J_{-1}^+
=E,\\\\
[H_{\\mathrm{aff}},F]
&=[J_0^0,J_1^-]
=-J_1^-
=-F,\\\\
[E,F]
&=[J_{-1}^+,J_1^-]\\\\
&=2J_0^0-k\\\\
&=2H_{\\mathrm{aff}}.
\\end{aligned}
$$

</details>

したがって $E,F,H_{\\mathrm{aff}}$ は $[H_{\\mathrm{aff}},E]=E$、$[H_{\\mathrm{aff}},F]=-F$、$[E,F]=2H_{\\mathrm{aff}}$ を満たす。これは通常の角運動量の上昇・下降演算子と同じ形の代数であり、複素化して $\\mathfrak{sl}_2$ と呼ぶ。中心項 $-k$ が $H_{\\mathrm{aff}}=J_0^0-k/2$ というずれを生むため、この組のノルム条件にはレベルが現れる。

<details>
<summary>状態空間 $\\mathcal V_j$ とVerma加群の関係</summary>

$\\mathcal V_j$ は有限次元の零モード表現から誘導した一般化Verma加群である。零モードの下降演算子には既に $(J_0^-)^{2j+1}|j;j\\rangle=0$ を課している。したがって通常のアフィンVerma加群で独立に扱う零モードの零ノルム状態はここでは除かれており、以下ではさらに負モードを含む関係を調べる。

</details>

#### $J_{-1}^+$ を繰り返した状態のノルム

有限次元スピン $j$ 表現の最高ウェイト状態 $|j;j\\rangle$ から始める。$F=J_1^-$ は正モードなので

$$
F|j;j\\rangle=0.
$$

また

$$
H_{\\mathrm{aff}}|j;j\\rangle
=\\left(j-\\frac{k}{2}\\right)|j;j\\rangle.
$$

ここで

$$
N:=k-2j
$$

と置けば

$$
H_{\\mathrm{aff}}|j;j\\rangle=-\\frac{N}{2}|j;j\\rangle.
$$

ユニタリー表現では

$$
(J_n^+)^\\dagger=J_{-n}^-
$$

なので

$$
E^\\dagger=F.
$$

$r$ 回励起した状態を

$$
|r\\rangle:=E^r|j;j\\rangle
$$

とする。随伴関係 $E^\\dagger=F$ と三生成子の交換子から、ノルムは

$$
\\boxed{\\lVert|r\\rangle\\rVert^2=r(N-r+1)\\lVert|r-1\\rangle\\rVert^2}
\\tag{norm-recursion}
$$

を満たす。この係数の符号が、スピンの上限と零ノルム状態の位置を同時に決める。

<details>
<summary>交換子を $r$ 回展開し、ノルム漸化式を導く</summary>

そのノルムを求めるため、まず $F E^r|j;j\\rangle$ を計算する。$[F,E]=-2H_{\\mathrm{aff}}$ より

$$
\\begin{aligned}
[F,E^r]
&=\\sum_{s=0}^{r-1}E^s[F,E]E^{r-1-s}\\\\
&=-2\\sum_{s=0}^{r-1}E^sH_{\\mathrm{aff}}E^{r-1-s}.
\\end{aligned}
$$

$[H_{\\mathrm{aff}},E]=E$ から

$$
H_{\\mathrm{aff}}E^q=E^q(H_{\\mathrm{aff}}+q)
$$

\`\`\`math-hint
$[H_{\\mathrm{aff}},E]=E$ は $H_{\\mathrm{aff}}E=E(H_{\\mathrm{aff}}+1)$ と同じ式。$E$ を一つ通過するごとに $1$ が加わる。

$$
H_{\\mathrm{aff}}E^2=E(H_{\\mathrm{aff}}+1)E=E^2(H_{\\mathrm{aff}}+2),\\qquad
H_{\\mathrm{aff}}E^{q+1}=E^q(H_{\\mathrm{aff}}+q)E=E^{q+1}(H_{\\mathrm{aff}}+q+1).
$$
\`\`\`

なので、$H_{\\mathrm{aff}}|j;j\\rangle=-\\tfrac N2|j;j\\rangle$ を使うと

$$
\\begin{aligned}
E^sH_{\\mathrm{aff}}E^{r-1-s}|j;j\\rangle
&=
E^{r-1}
\\left(H_{\\mathrm{aff}}+r-1-s\\right)|j;j\\rangle\\\\
&=
\\left(
-\\frac{N}{2}+r-1-s
\\right)
E^{r-1}|j;j\\rangle.
\\end{aligned}
$$

$s=0,\\ldots,r-1$ について足すと

$$
\\begin{aligned}
[F,E^r]|j;j\\rangle
&=
-2\\left[
-\\frac{rN}{2}
+\\sum_{s=0}^{r-1}(r-1-s)
\\right]E^{r-1}|j;j\\rangle\\\\
&=
-2\\left[
-\\frac{rN}{2}
+\\frac{r(r-1)}{2}
\\right]E^{r-1}|j;j\\rangle\\\\
&=
r(N-r+1)E^{r-1}|j;j\\rangle.
\\end{aligned}
$$

\`\`\`math-hint
和の中の数は $r-1,r-2,\\ldots,0$ である。逆順にしても和は変わらない。

$$
\\sum_{s=0}^{r-1}(r-1-s)=\\sum_{q=0}^{r-1}q=\\frac{r(r-1)}2.
$$

全体の係数は

$$
-2\\left(-\\frac{rN}2+\\frac{r(r-1)}2\\right)=rN-r(r-1)=r(N-r+1).
$$
\`\`\`

$F|j;j\\rangle=0$ だから、左辺では $[F,E^r]|j;j\\rangle=FE^r|j;j\\rangle$ である。したがって

$$
\\boxed{
F|r\\rangle
=r(N-r+1)|r-1\\rangle
}.
$$

これを用いると

\`\`\`math-steps
lhs: \\lVert|r\\rangle\\rVert^2
note: $|r\\rangle=E^r|j;j\\rangle$ のbraを作る。随伴を取ると積の順序が逆転し、$E^\\dagger=F$ を $r$ 回使う。
popup-math: (E^r|j;j\\rangle)^\\dagger=\\langle j;j|(E^\\dagger)^r=\\langle j;j|F^r
part remainder: \\langle j;j|F^rE^r|j;j\\rangle
---
note: 右端の $F$ を $E^r|j;j\\rangle$ に作用させる。残りの $F^{r-1}$ はそのまま保つ。係数は、直前に求めた下降操作から出る。
popup-math: F^rE^r|j;j\\rangle=F^{r-1}(FE^r|j;j\\rangle)=r(N-r+1)F^{r-1}E^{r-1}|j;j\\rangle
part recurrence-factor: r(N-r+1)
part remainder: \\langle j;j|F^{r-1}E^{r-1}|j;j\\rangle
---
note: 残った内積は、励起回数が一つ少ない状態のノルムである。
popup-math: \\langle j;j|F^{r-1}E^{r-1}|j;j\\rangle=(E^{r-1}|j;j\\rangle)^\\dagger E^{r-1}|j;j\\rangle=\\lVert|r-1\\rangle\\rVert^2
part recurrence-factor: r(N-r+1)
part remainder: \\lVert|r-1\\rangle\\rVert^2
\`\`\`

すなわち

$$
\\boxed{
\\lVert|r\\rangle\\rVert^2
=r(N-r+1)\\lVert|r-1\\rangle\\rVert^2
}.
$$

漸化式を繰り返せば

$$
\\lVert|r\\rangle\\rVert^2
=r!\\prod_{q=0}^{r-1}(N-q)\\lVert|j;j\\rangle\\rVert^2.
$$

\`\`\`math-hint
漸化式を $r$ から $1$ まで繰り返す。各回に出る二つの因子を別々に掛け合わせる。

$$
\\prod_{s=1}^r s(N-s+1)
=\\underbrace{r(r-1)\\cdots1}_{r!}\\,\\underbrace{N(N-1)\\cdots(N-r+1)}_{\\prod_{q=0}^{r-1}(N-q)}.
$$

最後に残る状態は $|0\\rangle=|j;j\\rangle$ である。
\`\`\`

$r=0$ の空積は1とする。$N$ が非負整数なら $r\\leq N$ では $r!N!/(N-r)!$、$r\\geq N+1$ では零となる。この一本の鎖についての計算だけで、任意の負モードを混ぜた状態の正定値性まで結論してはいない。

</details>

#### スピンの上限と零ノルム状態

一励起のノルムから得た必要条件を満たす場合、すなわち

$$
0\\leq j\\leq\\frac{k}{2}
$$

を考える。延長を変えても量子振幅が一致する条件から $k\\in\\mathbb Z$ であり、さらにユニタリーな正エネルギーWZW模型では $k>0$ を選ぶ。また通常の $SU(2)$ 表現では $2j\\in\\mathbb Z_{\\geq0}$ である。したがって $N=k-2j$ は非負整数である。$1\\leq r\\leq N$ では

$$
r(N-r+1)>0,
$$

だが、$r=N+1$ で

$$
(N+1)\\bigl(N-(N+1)+1\\bigr)=0
$$

となる。よって

$$
\\boxed{
\\psi_{\\mathrm{sing}}^j
=E^{N+1}|j;j\\rangle
=
\\left(J_{-1}^+\\right)^{k+1-2j}|j;j\\rangle
}
$$

は零ノルム状態である。

この零ノルム状態は、新しい最高ウェイト状態でもある。まず零モード $J_0^+$ と正モード $J_n^+$（$n>0$）は $E=J_{-1}^+$ と可換であり、元の最高ウェイト基底状態 $|j;j\\rangle$ を消す。$J_n^0$（$n>0$）を $E$ のべきへ通すと $J_{n-1}^+$ が出るので、これも基底状態を消す。$J_n^-$（$n\\geq2$）の場合は $J_{n-1}^0$ と $J_{n-2}^+$ だけが残り、同様に零になる。残る $J_1^-=F$ は、既出の漸化式の係数 $(N+1)(N-(N+1)+1)=0$ により消す。従って、全正モードと零モード上昇演算子に消される。

<details>
<summary>零ノルム状態が全ての最高ウェイト条件を満たすことを確かめる</summary>

実際、$F|r\\rangle=r(N-r+1)|r-1\\rangle$ から

$$
F\\psi_{\\mathrm{sing}}^j=0
$$

である。さらに $J_0^+$ は $J_{-1}^+$ と可換であり、$J_0^+|j;j\\rangle=0$ なので

$$
J_0^+\\psi_{\\mathrm{sing}}^j=0.
$$

残りの正モードについても確認する。まず $[J_n^+,E]=0$ だから $J_n^+E^{N+1}|j;j\\rangle=E^{N+1}J_n^+|j;j\\rangle=0$（$n>0$）。次に

$$
[J_n^0,E]=J_{n-1}^+,
\\qquad
[J_n^0,E^{N+1}]=(N+1)E^{N}J_{n-1}^+.
$$

$n=1$ なら右端の $J_0^+$ が最高ウェイト状態を消し、$n\\geq2$ なら正モードが消す。最後に $J_n^-$ を考える。$n=1$ はすでに $F\\psi_{\\mathrm{sing}}^j=0$ で確認した。$n\\geq2$ では中心項がなく

$$
[J_n^-,E]=-2J_{n-1}^0,
\\qquad
[J_{n-1}^0,E]=J_{n-2}^+.
$$

したがって

$$
\\begin{aligned}
[J_n^-,E^{N+1}]
&=-2\\sum_{s=0}^{N}E^sJ_{n-1}^0E^{N-s}\\\\
&=-2(N+1)E^{N}J_{n-1}^0-(N+1)NE^{N-1}J_{n-2}^+.
\\end{aligned}
$$

$N=0$ では第二項を零と解する。第一項の右端は正モードであり、第二項の右端は $n=2$ なら $J_0^+$、$n>2$ なら正モードなので、いずれも $|j;j\\rangle$ を消す。

したがって

$$
J_n^a\\psi_{\\mathrm{sing}}^j=0
\\qquad(n>0),
$$

であり、$\\psi_{\\mathrm{sing}}^j$ は新しいアフィン最高ウェイト状態になっている。

</details>

スピンを $j\\leq k/2$ に絞っても、候補 $\\mathcal V_j$ にはこの零ノルム状態が残る。正定値の状態空間にするには、それを零と同一視する必要がある。さらに、零とした状態にカレントを作用させた結果も零でなければ、代表元の選び方で演算子の作用が変わってしまう。そのため $\\psi_{\\mathrm{sing}}^j$ だけでなく、そこから全てのカレントで作る状態の線形空間 $\\mathcal N_j$ をまとめて除く。これが不変部分加群である。

具体的には、$\\psi_{\\mathrm{sing}}^j$ へ $J_0^-$ と全負モードを繰り返し作用させた状態の線形結合全体を $\\mathcal N_j$ とする。負モードはエネルギーを上げ、$J_0^-$ は同じエネルギーの別のスピン成分を作る。こうして、その零ノルム状態から作る励起を一緒に除く。

正整数 $k$ と半整数 $0\\leq j\\leq k/2$ に対する可積分最高ウェイト表現の分類定理は、この $\\mathcal N_j$ が全状態と内積ゼロになる部分を尽くし、それを除いた空間が既約で正定値の内積を持つことを保証する（原著 §6.1.2, p.239）。これは一本の励起鎖の計算を、全負モードを含む状態空間へ拡張するための外部入力である。この定理を使って、物理的な既約表現を

$$
\\boxed{
\\mathcal H_j
:=
\\mathcal V_j/\\mathcal N_j
}
$$

として定義する。商とは、$\\mathcal N_j$ のベクトルだけ異なる二つの状態を、同じ物理状態とみなす操作である。

<details>
<summary>零ノルム状態を除いた内積が一意に定まる条件</summary>

自己ノルムが零でも、他の状態との内積が零とは限らない。不定値内積空間では特にこの区別が必要である。代表元 $v$ を $v+n$（$n\\in\\mathcal N_j$）に変えても $\\langle v,w\\rangle$ が変わらないためには、全ての $w$ に対して $\\langle n,w\\rangle=0$ が必要になる。

ここで用いる分類定理は、$\\mathcal N_j$ が全状態に直交する部分を尽くすことを保証する。そのため、$\\mathcal N_j$ の成分を加えても内積は変わらず、商で一意に定まる。さらに、正整数 $k$ と $0\\leq j\\leq k/2$ のもとで、商は既約で内積は正定値になる。

</details>

ここまでの直接計算が示したのは、$j\\leq k/2$ がユニタリティの必要条件であること、$E=J_{-1}^+$ の鎖で最初にノルムが零になる位置、およびその状態がアフィン最高ウェイト条件を満たすことである。この誘導加群で除くべき最大真部分加群がこれで生成されること、この商が既約かつユニタリーになること、ユニタリーな正エネルギー最高ウェイト表現のラベルがこれで尽くされることには、上の分類定理を用いた。その結果、許されるラベルは

$$
\\boxed{
j=0,\\frac12,1,\\ldots,\\frac{k}{2}
}
$$

に限られ、その個数は $k+1$ 個である。

#### $k=2$ の可積分表現と零ノルム状態

$k=2$ の場合、許されるスピンと $E=J_{-1}^+$ の鎖で最初に現れる零ノルム状態は

$$
\\begin{array}{c|c|c}
j & N=k-2j & \\psi_{\\mathrm{sing}}^j\\\\
\\hline
0 & 2 & (J_{-1}^+)^3|0;0\\rangle\\\\
\\frac12 & 1 & (J_{-1}^+)^2|\\frac12;\\frac12\\rangle\\\\
1 & 0 & J_{-1}^+|1;1\\rangle
\\end{array}
$$

となる。次の候補 $j=\\frac32$ では

$$
N=2-3=-1
$$

なので、最初の励起だけで

$$
\\left\\lVert
J_{-1}^+\\left|\\frac32;\\frac32\\right\\rangle
\\right\\rVert^2
=
-\\left\\lVert
\\left|\\frac32;\\frac32\\right\\rangle
\\right\\rVert^2
<0.
$$

これが $j=\\frac32$ を排除する直接の理由である。

三つの許容基底状態の共形ウェイトは

$$
h_0=0,
\\qquad
h_{\\frac12}=\\frac{3}{16},
\\qquad
h_1=\\frac12,
$$

中心電荷は

$$
c=\\frac{3\\cdot2}{2+2}=\\frac32
$$

である。

これで、与えられた正整数レベル $k$ に対して、出発点に選べるスピンと、零として除くべき励起を指定できる。$k=2$ なら三つのラベル $0,\\frac12,1$ が残り、次の $\\frac32$ が落ちる理由も、一励起の負ノルムとして確かめられた。

一本の励起鎖から直接分かったのは上限の必要性と零ノルム状態の位置であり、全ての負モードを含めた商の正定値性と既約性には、先ほどの分類定理を使った。また、制限されたのは各表現の出発点のラベル $j$ である。各表現には無限個の励起があり、$j\\leq k/2$ は全励起のエネルギーやスピンに上限を課す条件ではない。この無限個の状態がどのエネルギーに何個あるかは、次にcharacterで数える。

作用で $R^2=k\\alpha'$ を決めた同じ整数 $k$ が、量子論では中心項と表現ラベルの上限にも現れた。この対応は幾何と状態の分類を結ぶ。[半径・level・表現上限はどこでつながるか](#note-one-level-three-roles)

<details id="note-one-level-three-roles">
<summary>半径と表現の上限を、なぜ同じ整数が決めるのか？</summary>

WZW作用では、計量項とフラックスの結合を同じ係数でそろえると左右のカレントが保存される。この共通係数が、作用の量子化とカレント代数を通じて表現の上限にも現れる。

計量項を通常の弦の作用と比較すると $R^2=k\\alpha'$ となり、Wess–Zumino項の位相を拡張の選び方に依らせない条件から $k$ は整数になる。同じ作用を量子化したカレントのOPEでは、この整数が二重極の係数になる。この最後の対応にはWZW量子化のWard恒等式を用いる。

カレント代数の中心項は、励起状態のノルムにも寄与する。スピン $j$ の最高成分に $J_{-1}^+$ を一回作用させると、そのノルムは元の $k-2j$ 倍になる。これが負にならない条件が $j\\leq k/2$ である。幾何を大きくする整数が、許される基底表現の種類も増やすのは、この連なりによる。

$$
R^2=k\\alpha',\\qquad \\|J_{-1}^+|j;j\\rangle\\|^2=(k-2j)\\||j;j\\rangle\\|^2.
$$

参照：6.1 · 式 (6.2)–(6.7) とノルム漸化式

</details>

### characterとmodular変換

レベル $k=2$ では、基底状態のスピンが $j=0,\\frac12,1$ の三つの表現を得た。それぞれの中には無限個の励起状態がある。次に、各表現にどんなエネルギーの状態が何個あるかを調べる。

その状態数を一つの関数にまとめたものが **character** である。

レベル $k\\in\\mathbb Z_{>0}$ を固定する。正則側の既約可積分表現を $\\mathcal H_j$ と書く。許されるラベルと、基底状態の共形ウェイト、中心電荷は

$$
j=0,\\frac12,1,\\ldots,\\frac{k}{2},
\\qquad
h_j=\\frac{j(j+1)}{k+2},
\\qquad
c=\\frac{3k}{k+2}
$$

である。$\\mathcal H_j$ の状態は、スピン $j$ の基底状態へ負のカレントモードを作用させて作り、singular vectorが生成する零ノルム部分加群を商として除いたものである。

<!-- reference: character -->

トーラスを

$$
\\mathbb C/(\\mathbb Z+\\tau\\mathbb Z),
\\qquad \\operatorname{Im}\\tau>0
$$

と書き、

$$
q:=e^{2\\pi i\\tau}
$$

と定める。specialised characterは

$$
\\boxed{
\\chi_j(\\tau)
:=
\\operatorname{Tr}_{\\mathcal H_j}
q^{L_0-c/24}
}
$$

である。$L_0$ 固有値が $h_j+N$ の状態数を $d_j(N)$ と書けば

$$
\\chi_j(\\tau)
=q^{h_j-c/24}
\\sum_{N\\geq0}d_j(N)q^N.
$$

つまり $q$ の指数はエネルギー、係数はその縮退度を記録する。$N$ は基底状態から加えたエネルギーであり、負モード $J_{-n}^a$ の正整数 $n$ を足したgradeである。$-c/24$ は、平面から円筒へ写したときに現れる真空Casimirエネルギーである。

<!-- /reference -->



長方形トーラスで $\\tau=it$（$t>0$）なら $q=e^{-2\\pi t}$ なので、重みは $e^{-2\\pi t(L_0-c/24)}$ となる。これは円周を $2\\pi$ に取った円筒上のEuclid時間発展をトレースしたものであり、characterがトーラスの分配関数を作る材料になる理由である。ここでは正則側の一表現だけを数えている。左右を組み合わせた理論全体の分配関数は6.2節で作る。grade $0$ には通常のスピン $j$ 多重項があるので

$$
d_j(0)=2j+1.
$$

$k=2$、$j=1$ の表現で第一励起まで数えてみよう。grade $1$ の候補は、三つの基底状態 $|1;m\\rangle$（$m=-1,0,1$）に三成分の $J_{-1}^a$ を作用させた $3\\times3=9$ 個である。零モードの $SU(2)$ で整理すると、これらは $1\\otimes1=0\\oplus1\\oplus2$ に分かれる。

前節で得た零ノルム状態 $J_{-1}^+|1;1\\rangle$ は、磁気量子数が $2$ の最高成分である。$J_0^-$ はエネルギーを変えずに磁気量子数を下げるので、この状態からスピン $2$ の五成分が生じる。それらも零ノルム部分加群に属し、まとめて除かれる。

| grade $1$ の状態 | 状態数 |
|---|---|
| カレントから作る候補：スピン $0,1,2$ | $1+3+5=9$ |
| 除かれる零ノルムのスピン $2$ | $5$ |
| 残るスピン $0,1$ | $1+3=4$ |

ここでは $h_1=1/2$、$c/24=1/16$ なので、 $\\chi_1(\\tau)=q^{7/16}(3+4q+\\cdots)$ となる。characterの係数は、零ノルム状態を除いた後の独立な励起を数えている。


<details>
<summary>$k=2$ の三つのcharacter：先頭の指数と係数を確かめる</summary>

例えば $k=2$ では $c=\\frac32$ だから

$$
\\begin{aligned}
\\chi_0(\\tau)&=q^{-1/16}(1+\\cdots),\\\\
\\chi_{\\frac12}(\\tau)&=q^{1/8}(2+\\cdots),\\\\
\\chi_1(\\tau)&=q^{7/16}(3+\\cdots).
\\end{aligned}
$$

三つのcharacterは、それぞれ $j=0,\\frac12,1$ の表現の状態数を表す。

$k+2=4$ と $c/24=1/16$ を代入すると

$$
h_0=0,\\qquad h_{1/2}=\\frac{(1/2)(3/2)}4=\\frac3{16},\\qquad h_1=\\frac{1\\cdot2}4=\\frac12.
$$

各指数は順に $0-1/16=-1/16$、$3/16-1/16=1/8$、$1/2-1/16=7/16$ となる。先頭の係数は $2j+1=1,2,3$ であり、指数と係数は別々の情報を記録している。

</details>

#### 電荷付きcharacter

同じエネルギーでも、回転軸方向のスピンが異なる状態がある。通常のcharacterはそれらをまとめて数えるが、回転に対する応答を調べるには電荷も記録しておくとよい。6.2節では、開弦の二つの端点で、左右のcurrentの反射の仕方を違える場合を考える。その違いは開弦のエネルギーにどう現れるだろうか。

<details>
<summary>characterに電荷の情報も含めるには？</summary>

$L_0$ とCartan零モード $J_0^3$ は同時対角化できる。ここでは直交規格化したカレント $J^3=\\sqrt2J^0$ を用い、スピン基底 $|j;m\\rangle$ 上で $J_0^3$ の固有値は $\\sqrt2m$ である。そこでエネルギーだけでなく $J_0^3$ 電荷も記録するunspecialised characterを

$$
\\boxed{
\\chi_j(z,\\tau,u)
:=
e^{-2\\pi iku}
\\operatorname{Tr}_{\\mathcal H_j}
\\left(
q^{L_0-c/24}e^{-2\\pi izJ_0^3}
\\right)
}
$$

と定める。$z$ は $J_0^3$ 電荷を数えるための変数であり、前節の場の位置座標とは役割が異なる。$u$ は独立な物理的電荷を表すのではなく、レベル $k$ の中心項を含むmodular変換を簡潔に書くための補助変数である。

$z=u=0$ にすると通常のcharacterへ戻る。例えばスピン $1$ の基底状態三成分は、通常なら係数 $3$ にまとめられるが、電荷を残すと

$$
e^{2\\pi i\\sqrt2z}+1+e^{-2\\pi i\\sqrt2z}
$$

として区別される。回転軸の両向きと電荷ゼロの成分が、異なる重みを持つことが見える。

補助変数 $u$ は全状態に共通の因子を記録する。後で扱うmodular変換では、電荷変数に応じてこの共通因子も変化する。その変換則を、原著の式 (6.8)–(6.10) に与えられたcharacterの結果として用いる。

</details>

<details id="note-character-closed-forms">
<summary>参照用データ：零ノルム状態を除いて数えるcharacterの閉形式 (6.8), (6.10)</summary>

characterの閉形式には、負モードで作る候補から零ノルム部分加群を除く効果が含まれる。以下はWeyl–Kac character公式をSU(2)へ適用した表現論データとして採用する（原著 p.239, 式 (6.8), (6.10)）。この無限和の機械的評価を、状態を構成した計算そのものとは区別する。

まず、電荷付きの式に使うtheta関数を定める。正整数 $K$ に対し、整数ラベル $\\ell$ の関数を

$$
\\Theta_\\ell^{(K)}(z,\\tau,u)
:=e^{-2\\pi iKu}\\sum_{r\\in\\mathbb Z+\\ell/(2K)}
q^{Kr^2}e^{-2\\pi i\\sqrt2Krz},
\\qquad q=e^{2\\pi i\\tau}
$$

とする。$r$ は整数格子を $\\ell/(2K)$ だけ移した和の変数である。電荷を数える $z$ は、このノートの $J_0^3=\\sqrt2J_0^0$ に結合する。従って原著Appendix Aで $J_0^0$ の磁気量子数に結合するtheta変数を、ここでは $\\sqrt2z$ に置き換えた。補助変数 $u$ は全状態に共通するレベルの因子を記録する。

この規約で式 (6.8) は

$$
\\chi_j(z,\\tau,u)
=e^{-2\\pi iku}\\operatorname{Tr}_{\\mathcal H_j}
\\left(q^{L_0-c/24}e^{-2\\pi izJ_0^3}\\right)
=\\frac{\\Theta_{2j+1}^{(k+2)}-\\Theta_{-2j-1}^{(k+2)}}
{\\Theta_1^{(2)}-\\Theta_{-1}^{(2)}}(z,\\tau,u).
\\tag{6.8}
$$

比の先頭の電荷依存性は $\\sin[\\pi\\sqrt2(2j+1)z]/\\sin(\\pi\\sqrt2z)=\\sum_{m=-j}^j e^{-2\\pi i\\sqrt2 mz}$ であり、零モードのスピン多重項と一致する。高次の $q$ 係数には励起と零ノルム状態の除去が含まれる。

電荷を記録しない式は、補助変数 $u=0$ にし、$z\\to0$ の極限を取って得る。このとき分子・分母はともに零になるが、一階の微分の比は有限である。Dedekind関数を

$$
\\eta(q)=q^{1/24}\\prod_{n=1}^{\\infty}(1-q^n)
$$

とし、和に現れる整数を $N_j(m):=2(k+2)m+2j+1$ と書くと、原著の式 (6.10) は

$$
\\boxed{\\chi_j(\\tau)=\\frac1{\\eta(q)^3}
\\sum_{m\\in\\mathbb Z}N_j(m)q^{N_j(m)^2/[4(k+2)]}}
\\tag{6.10}
$$

である。$N_j(m)$ は各項の係数と指数を決める整数であり、本文の励起gradeとは別の量である。$m=0$ の項と $\\eta(q)^{-3}$ の先頭を合わせた指数は

$$
\\frac{(2j+1)^2}{4(k+2)}-\\frac18
=\\frac{j(j+1)}{k+2}-\\frac{3k}{24(k+2)}
=h_j-\\frac c{24},
$$

係数は $2j+1$ になる。したがって、本文で基底状態を数えて得た先頭項を再現する。無限和には符号の異なる項もあるが、候補から零ノルム状態を引いた結果のcharacter係数 $d_j(N)$ は非負整数である。

</details>

#### トーラスの周期交換とmodular $S$

character $\\chi_i(\\tau)$ は、一つの可積分表現の状態をEuclid時間発展の重みで数えていた。同じトーラスを別の方向に切って時間を定めたとき、この数え方はどう変わるだろうか。トーラスには、複素平面上の移動

$$
w\\sim w+1,
\\qquad
w\\sim w+\\tau
$$

で定まる二つの基本周期がある。どちらを空間方向、どちらをEuclid時間方向として切るかは一意ではない。modular変換

$$
S:\\quad \\tau\\longmapsto-\\frac1\\tau
$$

は、向きを保ちながら二周期の役割を交換する。例えば $\\tau=it$ なら $-1/\\tau=i/t$ であり、長い時間方向と短い空間方向が入れ替わる。

交換前の $\\chi_i(\\tau)$ と交換後の $\\chi_i(-1/\\tau)$ は、同じトーラスのカイラルな振幅を、異なる周期を時間に選んで表す。ここでは、原著 §6.1.3 の $SU(2)_k$ characterの変換結果を使う。交換後の振幅は、交換前と同じ $k+1$ 個の可積分表現のcharacterの線形結合になる。この有限個での閉性はこの模型の表現論の性質であり、theta関数の変換則から確かめられる。全てのCFTで同じ有限和が使えるわけではない。

エネルギーだけを数えるspecialised characterについて

$$
\\boxed{
\\chi_i\\!\\left(-\\frac1\\tau\\right)
=
\\sum_jS_{ij}\\chi_j(\\tau)
}
$$

となる。

<details>
<summary>電荷付きcharacterのmodular変換</summary>

「電荷付きcharacter」で定義した電荷変数 $z$ と補助変数 $u$ も含めると、変換則は

$$
\\chi_i\\!\\left(\\frac z\\tau,-\\frac1\\tau,u+\\frac{z^2}{2\\tau}\\right)
=\\sum_jS_{ij}\\chi_j(z,\\tau,u).
$$

$u$ の移動は、電荷を含むtheta関数の変換で生じる $z^2/\\tau$ に比例した共通位相を吸収する。$u=z=0$ とすればこの位相はなくなり、本文のspecialised characterの変換則が残る。

</details>

theta関数のPoisson再和公式から得られる $SU(2)_k$ の行列は

$$
\\boxed{
S_{ij}
=
\\sqrt{\\frac{2}{k+2}}
\\sin\\!\\left[
\\frac{\\pi(2i+1)(2j+1)}{k+2}
\\right]
}
\\qquad
i,j=0,\\frac12,\\ldots,\\frac k2.
\\tag{6.9}
$$

この公式は特殊関数の変換公式として採用する。

行列要素 $S_{ij}$ が、交換後の表現 $i$ のcharacterに、交換前の表現 $j$ のcharacterがどれだけ混ざるかを記録する。

#### $S$ 行列と離散正弦変換

半整数ラベルの代わりに

$$
a:=2i+1,
\\qquad
b:=2j+1
$$

を使う。$i,j=0,\\frac12,\\ldots,\\frac k2$ なので、$a,b$ は飛び飛びではなく

$$
1,2,\\ldots,k+1
$$

をすべて動く。すると、元の添字との対応を残して書けば

$$
S_{\\frac{a-1}{2},\\frac{b-1}{2}}
=
\\sqrt{\\frac{2}{k+2}}
\\sin\\frac{\\pi ab}{k+2}
$$

は、両端 $a=0,k+2$ で零になる離散正弦波を並べた行列である。

これらの波の内積は

$$
\\sum_{b=1}^{k+1}\\sin\\frac{\\pi ab}{k+2}\\sin\\frac{\\pi a'b}{k+2}
=\\frac{k+2}{2}\\delta_{aa'}
$$

である。正弦の積を二つの余弦の差に直し、それぞれを有限等比級数で足すとこの値になる。従って異なる波は直交し、係数 $\\sqrt{2/(k+2)}$ で各波の長さを1にそろえると

$$
S^{\\mathsf T}S=\\mathbf1.
$$

<details>
<summary>有限和から正弦波の直交性と規格化を確かめる</summary>

$L:=k+2$ と置く。列の内積を計算するには、$1\\leq a,a'\\leq L-1$ に対して

$$
T_{aa'}:=\\sum_{b=1}^{L-1}\\sin\\frac{\\pi ab}{L}\\sin\\frac{\\pi a'b}{L}
$$

を求めればよい。積を和にする公式から

$$
2T_{aa'}=C_{a-a'}-C_{a+a'},\\qquad
C_m:=\\sum_{b=1}^{L-1}\\cos\\frac{\\pi mb}{L}.
$$

まず $C_0=L-1$ である。$m\\neq0$ かつ $|m|<2L$ の場合を、偶奇で分ける。

$m$ が奇数なら、$b$ と $L-b$ の項は

$$
\\cos\\frac{\\pi m(L-b)}L
=\\cos\\left(\\pi m-\\frac{\\pi mb}L\\right)
=-\\cos\\frac{\\pi mb}L
$$

となり打ち消す。$L$ が偶数のときに残りうる中央の項も $\\cos(\\pi m/2)=0$ なので、$C_m=0$ となる。

$m$ が零でない偶数なら、$r:=e^{i\\pi m/L}$ は $r^L=1$、$r\\neq1$ を満たす。有限等比級数を使うと

$$
\\sum_{b=0}^{L-1}r^b=\\frac{1-r^L}{1-r}=0.
$$

$b=0$ の項を除き実部を取ることで $C_m=-1$ を得る。負の $m$ についても余弦が偶関数なので同じである。

$a\\neq a'$ なら、$a-a'$ と $a+a'$ は同じ偶奇を持ち、いずれもこの範囲の零でない整数になる。したがって二つの $C$ は等しく、$T_{aa'}=0$。$a=a'$ なら $a-a'=0$、$a+a'=2a$ なので

$$
2T_{aa}=(L-1)-(-1)=L.
$$

両方をまとめると

$$
\\sum_{b=1}^{k+1}
\\sin\\frac{\\pi ab}{k+2}\\sin\\frac{\\pi a'b}{k+2}
=\\frac{k+2}{2}\\delta_{aa'}.
$$

$S$ の二つの成分にはそれぞれ $\\sqrt{2/(k+2)}$ が掛かるため、内積には $2/(k+2)$ が掛かり、右辺が $\\delta_{aa'}$ になる。これはまず $SS^{\\mathsf T}=\\mathbf1$ を与え、正方行列の逆行列の一意性から $S^{\\mathsf T}S=\\mathbf1$ も従う。

</details>

$S$ は実対称行列でもあるため、直交性から

$$
S^{-1}=S^{\\mathsf T}=S,
\\qquad
S^2=\\mathbf1
$$

となる。

共役表現とは、群の変換行列を複素共役した変換則である。SU(2)の有限次元既約表現は次元 $2j+1$ ごとに一種類なので、複素共役しても同じスピン $j$ になる。アフィン表現も、その零モード多重項を出発点に同じカレントで生成されるので、共役sectorのラベルは $j^+=j$ である。この自己共役性は、一般のmodular関係 $S^2=C$ の共役行列 $C$ がここでは単位行列であることに対応する。

個々のcharacterが周期交換で不変になるわけではない。変換されるのは $k+1$ 個のcharacterを一組にした振幅であり、$S_{ij}$ は状態の縮退度ではなく、その混合係数である。縮退度は各characterの $q$ 展開の係数が数えている。

この二つの数え方を結ぶと、直接には多数の励起を足す問題を、低いエネルギーの状態から調べられる。空間の円周を固定して $\\tau=it$ の $t$ を小さくすると、高いエネルギーの状態も重みに寄与するが、交換後の $i/t$ ではEuclid時間が長く、真空が支配する。変換則に $\\tau=i/t$ を入れれば $\\chi_i(it)=\\sum_jS_{ij}\\chi_j(i/t)$ なので、高温側の振る舞いを低温側の真空データから読み取れる。

<details>
<summary>低温の真空から高温のcharacterを求める</summary>

上の変換則に $\\tau=i/t$ を入れると

$$
\\chi_i(it)=\\sum_j S_{ij}\\chi_j(i/t).
$$

右辺の展開変数は $q'=e^{-2\\pi/t}$ である。$t\\to0^+$ で $q'\\to0$ となり、$j>0$ の基底状態には $h_j>0$、descendantにはさらに正のgradeがあるため、それらの寄与は真空に比べて指数的に小さくなる。真空の $h_0=0$ と $d_0(0)=1$ を使うと

$$
\\chi_0(i/t)\\sim e^{\\pi c/(12t)},
\\qquad
\\chi_i(it)\\sim S_{i0}\\,e^{\\pi c/(12t)}.
$$

固定した $k$ に対し $S_{i0}>0$ なので、すべてのcharacterが同じ主な指数増大を示し、表現ごとの違いは先頭係数 $S_{i0}$ に現れる。ここで高温・低温とは、空間の円周を固定した世界面のトレースの温度を指す。

</details>

$k=2$ でラベルを $0,\\frac12,1$ の順に並べると

$$
\\boxed{
S=
\\begin{pmatrix}
\\frac12&\\frac1{\\sqrt2}&\\frac12\\\\
\\frac1{\\sqrt2}&0&-\\frac1{\\sqrt2}\\\\
\\frac12&-\\frac1{\\sqrt2}&\\frac12
\\end{pmatrix}
}
$$

である。例えば中央の行を使えば、

$$
\\chi_{\\frac12}\\!\\left(-\\frac1\\tau\\right)
=\\frac{\\chi_0(\\tau)-\\chi_1(\\tau)}{\\sqrt2}
$$

と、交換後の一つのcharacterを交換前の二つから再構成できる。負号があるのは、右辺が状態の部分集合の足し合わせではなく、切り方を変えるための振幅の線形結合だからである。もう一度交換すれば $S^2=\\mathbf1$ により元のcharacterへ戻る。これで周期交換の前後を行き来できる。

この行列の各列は、三点の有限区間に許された三つの定在波でもある。周期交換による状態の数え直しは分かったが、二つの場を近づけたときに現れる表現はまだ求めていない。その局所的な結合を調べると、同じ正弦波がfusion行列の固有モードとして現れる。

<details>
<summary>周期交換を二度行うと元へ戻ることと、表現の自己共役性</summary>

一般の有理CFTでは、modular変換の関係 $S^2=C$ に現れる $C$ は、各表現を共役表現へ送る行列である。ここで得た $S^2=\\mathbf1$ は、$SU(2)_k$ のすべてのsectorが自己共役であることと対応する。共役の意味を確認しておこう。この性質は、6.2節で左右の表現を組み合わせる際にも使う。

<!-- reference: conjugate-representation -->

表現の**共役**とは、各群要素 $g$ に対応する変換行列 $D_j(g)$ の成分を複素共役し、$D_j(g)^*$ という変換則を作ることである。この共役表現のラベルを $j^+$ と書く。上付きの $+$ は「共役を取った表現」を表す印である。

$SU(2)$ の有限次元既約表現はスピン $j$ で分類され、次元は $2j+1$ である。同じ次元の既約表現は、基底の選び方を除けば一種類しかない。複素共役しても既約性と次元は保たれるので、共役表現も同じスピンになる：

$$
2j^++1=\\dim\\overline{V_j}=\\dim V_j=2j+1
\\quad\\Longrightarrow\\quad j^+=j.
$$

このように、複素共役した変換行列が、基底を取り直すと元の変換行列に一致する性質を**自己共役**という。等しいのは表現の種類を表すラベルであり、基底を固定した行列の各成分が実数である必要はない。

<details>
<summary>複素共役してもスピン $1/2$ の表現が変わらない理由</summary>

基本表現の行列を

$$
g=\\begin{pmatrix}a&b\\\\-b^*&a^*\\end{pmatrix},
\\qquad |a|^2+|b|^2=1
$$

と書く。二成分を交換し、片方の符号を変えるPauli行列の組合せ

$$
i\\sigma_2=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}
$$

を用いると、直接の掛け算で

$$
(i\\sigma_2)g(i\\sigma_2)^{-1}
=\\begin{pmatrix}a^*&b^*\\\\-b&a\\end{pmatrix}
=g^*
$$

となる。同じ $i\\sigma_2$ がすべての $g$ に対して使えるため、複素共役した変換則全体が、一度の基底の取り直しで元の変換則に対応する。従って共役を取っても二次元のスピン $1/2$ 表現であり、$(1/2)^+=1/2$ となる。

</details>

<!-- /reference -->

$SU(2)_k$ の可積分sectorも、このスピン $j$ でラベルされるため、共役sectorのラベルは同じ $j$ である。従って $C=\\mathbf1$ となり、正弦波の直交性から求めた $S^2$ と一致する。

</details>

### fusionとfusing行列

ここまでは、一つの表現に属する状態を数え、その数え方がトーラスの周期交換でどう変わるかを調べた。次に、異なる表現の場を近づけたときに現れる表現を求める。この局所的な結合の問題も、先ほどの $S$ 行列とVerlinde公式によって結び付く。

<!-- reference: fusion -->

表現 $i$ の場と表現 $j$ の場を近づけると、その積は別の局所場とその励起の和に展開される。この展開がOPEである。同じカレントの作用で結ばれる場を一つのfamilyにまとめ、対称性を保ったまま出力のfamily $r$ へ結ぶ独立な仕方の数を

$$
N_{ij}{}^r\\in\\mathbb Z_{\\geq0}
$$

と書く。この結び方をchiral intertwinerと呼び、途中に現れる表現の選択をchannelと呼ぶ。fusion積は

$$
[i]\\star[j]
=
\\sum_rN_{ij}{}^r[r]
$$

である。$N_{ij}{}^r\\neq0$ は、$i$ と $j$ のOPEに共形family $r$ が現れうることを意味するが、そのOPE係数の数値までは決めない。

<!-- /reference -->



これは通常の有限次元 $SU(2)$ 表現のtensor積ではない。通常のtensor積は零モード $\\mathfrak{su}(2)$ だけを見ているのに対し、fusionは全アフィン代数とsingular vectorによる商を尊重しなければならない。ただし、レベルの上端から十分離れたラベルでは両者は同じ分解則に見える。

固定した $i$ に対し

$$
(N_i)_j{}^r:=N_{ij}{}^r
$$

と置けば、$N_i$ は「$[i]$ をfusionする」線形作用素である。

#### Verlinde公式とfusion行列

第3章で導入されたVerlinde公式は

$$
\\boxed{
N_{ij}{}^r
=
\\sum_{\\ell}
\\frac{
S_{i\\ell}S_{j\\ell}S_{r\\ell}^{*}
}{S_{0\\ell}}
}
\\tag{3.76}
$$

である。和は全可積分表現 $\\ell=0,\\frac12,\\ldots,\\frac k2$ を走り、$0$ は真空表現を表す。この定理は、**トーラスの周期交換から得た同じ $S$ がfusion行列を対角化すること**を述べる。両者を結ぶのは、場を含む曲面を異なる順序で切り分け、途中状態を足し合わせても同じ振幅を得るというCFTの整合性である。局所的に二つの挿入をまとめればfusionの中間表現が現れ、トーラスの周期を入れ替えて状態を数えれば $S$ が現れる。この二つの計算を両立させる条件が、表現の数え方とOPEの結び方を結び付ける。ここでは有限個の既約表現で閉じるユニタリーな $SU(2)_k$ に、この定理を適用している。[大域的な切り方が局所OPEを知る理由](#note-global-s-knows-local-ope)

<details id="note-global-s-knows-local-ope">
<summary>トーラスの周期交換から、なぜOPEの組合せが分かるのか？</summary>

同じ曲面上の相関関数は、途中状態をどの順序でまとめて計算しても一致しなければならない。その整合性が、局所的なfusionとトーラスの周期交換を結び付ける。

曲面を、二つの入口と一つの出口を持つ三つ穴の部分に分けて考える。それぞれの切り口で表現を指定し、内部の切り口では許される中間状態を足し合わせる。一つの部分でどの表現を結び付けられるかを数えるのがfusion係数である。

一方、トーラスを別の周期に沿って切ると、同じ状態の数え方が $S$ によって変換される。切り方を変えても相関関数が一致する条件を課すと、この $S$ がfusion行列も同時に対角化する。これがVerlinde定理の内容であり、有限個の可積分表現で閉じる $SU(2)_k$ では、本文の式 (3.76) として使える。$S$ が直接決めるのは許される表現とその多重度で、個々のOPE係数の数値にはさらに三点関数のデータが必要である。

$$
N_i=S\\,\\operatorname{diag}_{\\ell}\\!\\left(\\frac{S_{i\\ell}}{S_{0\\ell}}\\right)S^{-1}.
$$

参照：6.1 · 式 (6.9)–(6.11) とVerlinde公式

</details>

Verlinde公式の和を三つの行列の積として読む。$S_{i\\ell}/S_{0\\ell}$ を対角成分に置くと

$$
\\boxed{
N_i
=
S\\,\\operatorname{diag}_{\\ell}
\\left(\\frac{S_{i\\ell}}{S_{0\\ell}}\\right)S^{-1}
}
$$

である。$S$ の $\\ell$ 列はすべてのfusion行列 $N_i$ に共通の固有ベクトルであり、$N_i$ のその固有値が $S_{i\\ell}/S_{0\\ell}$ になる。

<details>
<summary>modular $S$ がfusion行列を対角化することを式で確かめる</summary>

$SU(2)_k$ では $0<\\pi(2\\ell+1)/(k+2)<\\pi$ なので $S_{0\\ell}>0$。以下の割り算に零の分母はない。

この式を行列の形へ書き直す。対角行列

$$
(D_i)_{\\ell\\ell'}
:=
\\delta_{\\ell\\ell'}
\\frac{S_{i\\ell}}{S_{0\\ell}}
$$

を定めると

\`\`\`math-steps
lhs: (S D_i S^{\\dagger})_j{}^r
note: 三行列の積には二つの中間添字がある。左端の行 $j$ と右端の列 $r$ を固定して足す。
popup-math: (ABC)_{jr}=\\sum_{\\ell,\\ell'}A_{j\\ell}B_{\\ell\\ell'}C_{\\ell'r}
part sum: \\sum_{\\ell,\\ell'}
part left-s: S_{j\\ell}
part diagonal-entry: (D_i)_{\\ell\\ell'}
part right-s: (S^\\dagger)_{\\ell'r}
---
note: $D_i$ は対角行列なので、対角成分以外は零になる。
popup-math: (D_i)_{\\ell\\ell'}=\\delta_{\\ell\\ell'}\\frac{S_{i\\ell}}{S_{0\\ell}}
part sum: \\sum_{\\ell,\\ell'}
part left-s: S_{j\\ell}
part diagonal-entry: \\delta_{\\ell\\ell'}\\frac{S_{i\\ell}}{S_{0\\ell}}
part right-s: (S^\\dagger)_{\\ell'r}
---
note: Kroneckerの $\\delta$ により $\\ell'=\\ell$ だけが残り、二重和が一重和になる。
popup-math: \\sum_{\\ell'}\\delta_{\\ell\\ell'}(S^\\dagger)_{\\ell'r}=(S^\\dagger)_{\\ell r}
part sum: \\sum_{\\ell}
part left-s: S_{j\\ell}
part diagonal-entry: \\frac{S_{i\\ell}}{S_{0\\ell}}
part right-s: (S^\\dagger)_{\\ell r}
---
note: 随伴は転置して複素共役を取る操作なので、二つの添字が入れ替わる。
popup-math: (S^\\dagger)_{\\ell r}=\\overline{S_{r\\ell}}=S_{r\\ell}^*
part sum: \\sum_{\\ell}
part left-s: S_{j\\ell}
part diagonal-entry: \\frac{S_{i\\ell}}{S_{0\\ell}}
part right-s: S_{r\\ell}^*
---
note: これがVerlinde公式の右辺である。$i,j$ がfusionする二つのsector、$r$ が出力sectorに対応する。
popup-math: \\sum_\\ell\\frac{S_{i\\ell}S_{j\\ell}S_{r\\ell}^*}{S_{0\\ell}}=N_{ij}{}^r
part sum: N_{ij}{}^r
\`\`\`

行列の各成分がVerlinde公式に等しいので $N_i=SD_iS^\\dagger$ である。ユニタリ性 $S^\\dagger=S^{-1}$ を使えば本文の対角化式になる。

さらに、$S$ の第 $m$ 列に $N_i$ を作用させる計算を、省略せずに書くと

$$
\\begin{aligned}
(N_iS)_{jm}
&=\\sum_rN_{ij}{}^rS_{rm}\\\\
&=\\sum_r\\sum_\\ell
\\frac{S_{i\\ell}S_{j\\ell}S_{r\\ell}^{*}}{S_{0\\ell}}S_{rm}\\\\
&=\\sum_\\ell\\frac{S_{i\\ell}S_{j\\ell}}{S_{0\\ell}}
\\left(\\sum_rS_{r\\ell}^{*}S_{rm}\\right)\\\\
&=\\sum_\\ell\\frac{S_{i\\ell}S_{j\\ell}}{S_{0\\ell}}\\delta_{\\ell m}\\\\
&=\\frac{S_{im}}{S_{0m}}S_{jm}.
\\end{aligned}
$$

三行目では $r$ に依存しない因子を和の外へ出した。括弧の和は $(S^\\dagger S)_{\\ell m}$ なので $\\delta_{\\ell m}$ となり、最後は $\\ell=m$ だけが残る。これが「第 $m$ 列を保ったまま $S_{im}/S_{0m}$ 倍する」という固有ベクトルの条件である。

これはVerlinde公式を入力として行った線形代数の計算であり、Verlinde定理自体の証明ではない。

</details>

#### 基本表現とのfusionと有限鎖

$k=2$ で得られる基本表現とのfusionを先に見る。$0,\\frac12,1$ の順に行と列を並べると、結果は

$$
N_{\\frac12}=\\begin{pmatrix}0&1&0\\\\1&0&1\\\\0&1&0\\end{pmatrix}.
$$

ラベルを $0\\longleftrightarrow\\frac12\\longleftrightarrow1$ と並べた鎖の、隣への移動を表している。中央の $\\frac12$ からは両隣へ進めるが、両端からは中央へしか進めない。この端の存在が、通常の角運動量の合成との違いを生む。まず、この鎖が先ほどの $S$ 行列とどう結び付くかを一般の $k$ で確かめる。

一般の $k$ でも、Verlinde公式による固有値は正弦の倍角公式から

$$
\\frac{S_{\\frac12,\\ell}}{S_{0\\ell}}
=\\frac{\\sin[2\\pi(2\\ell+1)/(k+2)]}{\\sin[\\pi(2\\ell+1)/(k+2)]}
=2\\cos\\frac{\\pi(2\\ell+1)}{k+2}
$$

となる。一方、許容ラベルの両隣だけを1で結ぶ行列 $A$ を $A_j{}^r=1$（$|j-r|=1/2$）、それ以外は0と定める。この $A$ は表現ラベル間の接続を数える行列であり、前のMaurer–Cartan 1形式とは別の量である。正弦の加法定理によって

$$
(AS)_{j\\ell}=S_{j-\\frac12,\\ell}+S_{j+\\frac12,\\ell}
=2\\cos\\frac{\\pi(2\\ell+1)}{k+2}\\,S_{j\\ell}
$$

が成り立つ。許容区間の外では $S_{-1/2,\\ell}=0$、$S_{(k+1)/2,\\ell}=0$ なので、この等式は両端でも成立する。従って $A$ と $N_{1/2}$ は、可逆な $S$ のすべての列で同じ固有値を持つ。$AS=N_{1/2}S$ の右から $S^{-1}$ を掛けると $A=N_{1/2}$ を得る。

<details>
<summary>基本表現とのfusionが、有限鎖の隣接行列になる理由</summary>

$i=\\frac12$ とする。各列を

$$
x_\\ell
:=
\\frac{\\pi(2\\ell+1)}{k+2}
$$

と置いてラベルすると、固有値は

$$
\\begin{aligned}
\\frac{S_{\\frac12,\\ell}}{S_{0\\ell}}
&=
\\frac{
\\sin\\!\\left(2x_\\ell\\right)
}{
\\sin x_\\ell
}\\\\
&=2\\cos x_\\ell.
\\end{aligned}
$$

ここで、$k+1$ 個の点 $a=1,\\ldots,k+1$ を一列に並べる。点 $a$ はスピン

$$
j=\\frac{a-1}{2}
$$

を表す。隣接点だけを結ぶ行列 $A$ を

$$
A_{aa'}
=
\\begin{cases}
1,&|a-a'|=1,\\\\
0,&\\text{otherwise}
\\end{cases}
$$

と定める。境界の外では $v_0=v_{k+2}=0$ とし、

$$
v_a^{(\\ell)}
:=
\\sqrt{\\frac{2}{k+2}}
\\sin(ax_\\ell)
=S_{\\frac{a-1}{2},\\ell}
$$

と置くと

\`\`\`math-steps
lhs: (Av^{(\\ell)})_a
note: $A_{aa'}$ が非零なのは $a'=a-1,a+1$ の二か所だけ。端では $v_0=v_{k+2}=0$ を使う。
popup-math: \\sum_{a'}A_{aa'}v_{a'}^{(\\ell)}=v_{a-1}^{(\\ell)}+v_{a+1}^{(\\ell)}
part left-term: v_{a-1}^{(\\ell)}
part plus: +
part right-term: v_{a+1}^{(\\ell)}
---
note: 定義 $v_b^{(\\ell)}=\\sqrt{2/(k+2)}\\sin(bx_\\ell)$ の $b$ に $a-1$ を入れる。
part left-term: \\sqrt{\\frac{2}{k+2}}\\sin((a-1)x_\\ell)
part plus: +
part right-term: v_{a+1}^{(\\ell)}
---
note: 同じ定義の $b$ に $a+1$ を入れる。
part left-term: \\sqrt{\\frac{2}{k+2}}\\sin((a-1)x_\\ell)
part plus: +
part right-term: \\sqrt{\\frac{2}{k+2}}\\sin((a+1)x_\\ell)
---
note: 二項に共通する規格化係数を括弧の外へ出す。
part normalization: \\sqrt{\\frac{2}{k+2}}
part trig-sum: \\left[\\sin((a-1)x_\\ell)+\\sin((a+1)x_\\ell)\\right]
---
note: 加法定理で展開すると、$\\cos(ax_\\ell)\\sin x_\\ell$ の二項が逆符号で消える。
popup-math: \\sin(ax-x)+\\sin(ax+x)=(\\sin ax\\cos x-\\cos ax\\sin x)+(\\sin ax\\cos x+\\cos ax\\sin x)=2\\sin ax\\cos x
part normalization: \\sqrt{\\frac{2}{k+2}}
part trig-sum: 2\\cos x_\\ell\\,\\sin(ax_\\ell)
---
note: $\\sqrt{2/(k+2)}\\sin(ax_\\ell)$ を $v_a^{(\\ell)}$ に戻す。ベクトル全体が同じ係数 $2\\cos x_\\ell$ 倍されるため、これが固有値になる。
part coefficient: 2\\cos x_\\ell\\,
part eigenvector: v_a^{(\\ell)}
\`\`\`

つまり $A$ は、$N_{\\frac12}$ と同じ完全な正規直交固有ベクトル系と同じ固有値を持つ。よって

$$
\\boxed{N_{\\frac12}=A}
$$

である。特に $k=2$ では

$$
x_0=\\frac\\pi4,
\\qquad
x_{\\frac12}=\\frac\\pi2,
\\qquad
x_1=\\frac{3\\pi}{4}
$$

なので、三つの固有値は $\\sqrt2,0,-\\sqrt2$ である。実際、この小節のfusion行列と「$S$ 行列と離散正弦変換」で求めた $k=2$ の $S$ 行列は

$$
N_{\\frac12}S
=S\\,\\operatorname{diag}(\\sqrt2,0,-\\sqrt2)
$$

を満たす。

境界条件も確認する。左端では $\\sin(0x_\\ell)=0$、右端では

$$
\\sin((k+2)x_\\ell)=\\sin(\\pi(2\\ell+1))=0
$$

である。$2\\ell+1$ は整数なので、右端の零はすべての列で成立する。したがって $a=1$ では $v_{a-1}$、$a=k+1$ では $v_{a+1}$ が零となり、上の加法定理による計算は両端でも有効である。

「同じ固有ベクトルと固有値」から行列が等しいことも、$AS=SD_{1/2}$ と書いて右から $S^{-1}$ を掛ければ

$$
A=SD_{1/2}S^{-1}=N_{1/2}
$$

と直接確認できる。

</details>

一般の $k$ で半整数ラベルへ戻せば

$$
\\boxed{
\\frac12\\star j
=
\\left(j-\\frac12\\right)
\\oplus
\\left(j+\\frac12\\right)
}
$$

となる。ただし許容区間

$$
0\\leq j\\leq\\frac k2
$$

の外へ出る項は存在しない。したがって $j=0$ では右へ一歩だけ、$j=k/2$ では左へ一歩だけ動ける。

基本表現 $j=\\frac12$ とのfusionを表す $N_{\\frac12}$ は有限鎖の隣接行列になり、その固有ベクトルは正弦波である。一般のfusion行列 $N_i$ は隣接行列そのものではないが、同じ $S$ によって同時に対角化される。一方、トーラスの周期交換から得た $S$ も同じ正弦波を列に持つ。したがって

$$
\\boxed{
\\text{modular $S$ は、有限な表現鎖の固有モードを並べた行列である。}
}
$$

<details>
<summary>基本fusionから高いスピンのfusion行列を順に求める</summary>

fusion積の結合則と分配則により、$[i]\\star[j]=\\sum_rN_{ij}{}^r[r]$ なら、対応する行列は

$$
N_iN_j=\\sum_rN_{ij}{}^rN_r
$$

を満たす。真空は積の単位元なので $N_0=\\mathbf1$。$A=N_{1/2}$ と合わせると、基本fusion則は内部のラベル $1/2\\leq j\\leq(k-1)/2$ に対し

$$
AN_j=N_{j-1/2}+N_{j+1/2},\\qquad
N_{j+1/2}=AN_j-N_{j-1/2}
$$

を与える。この引き算は行列の恒等式を解いているもので、fusion係数が負になるという意味ではない。許容範囲に各ラベルが存在するとき、順に

$$
\\begin{aligned}
N_0&=\\mathbf1,\\qquad N_{1/2}=A,\\\\
N_1&=A^2-\\mathbf1,\\\\
N_{3/2}&=A(A^2-\\mathbf1)-A=A^3-2A,\\\\
N_2&=A(A^3-2A)-(A^2-\\mathbf1)=A^4-3A^2+\\mathbf1
\\end{aligned}
$$

と求められる。上端では $[(k+1)/2]$ がないので、別途

$$
AN_{k/2}=N_{(k-1)/2}
$$

を満たさなければならない。この境界条件が行列 $A$ の多項式関係を与える。

例えば $k=2$ なら $N_1=A^2-\\mathbf1$ と上端の $AN_1=A$ から $A^3=2A$。さらに $A^4=2A^2$ なので

$$
N_1^2=(A^2-\\mathbf1)^2=A^4-2A^2+\\mathbf1=\\mathbf1=N_0.
$$

fusion行列は積の情報を失わない。真空行に作用させると $(N_i)_0{}^r=N_{i0}{}^r=\\delta_i{}^r$ となるため、行列の線形結合の各係数は真空行から読み取れる。従って $N_1^2=\\mathbf1=N_0$ は $[1]\\star[1]=[0]$ を意味する。

これが行列で見た $1\\star1=0$ である。右辺の $0$ は真空のスピンラベルであり、零行列を意味しない。

</details>

#### $k=2$ のfusion則

有限鎖から分かる $\\frac12\\star\\frac12=0\\oplus1$ と $\\frac12\\star1=\\frac12$ を使って、残る $1\\star1$ を決めよう。通常の $SU(2)$ tensor積なら

$$
1\\otimes1=0\\oplus1\\oplus2
$$

なので、上限を超えた $2$ だけを消せば $0\\oplus1$ が残る。しかし、基本fusionとの結合則は、この候補をさらに制限する。

三つの表現を結合した結果は括り方に依らない。一方の括り方では

$$
\\begin{aligned}
\\left(\\frac12\\star\\frac12\\right)\\star1
&=(0\\oplus1)\\star1\\\\
&=1\\oplus(1\\star1),
\\end{aligned}
$$

他方では

$$
\\begin{aligned}
\\frac12\\star\\left(\\frac12\\star1\\right)
&=\\frac12\\star\\frac12\\\\
&=0\\oplus1.
\\end{aligned}
$$

ここで最初の候補 $1\\star1=0\\oplus1$ を一方の括り方へ戻すと、$1\\oplus(0\\oplus1)=0\\oplus1\\oplus1$ になる。他方の $0\\oplus1$ と比べ、スピン $1$ が一コピー余る。個々のラベルが上限内でも、三つを結ぶ二つの結果は一致しない。

結合則を満たすには、二つの結果の各表現の多重度を一致させる。共通の $1$ を除くと

$$
1\\star1=0
$$

が強制される。この値を戻すと、一方は $1\\oplus0$、他方は $0\\oplus1$ となり、各表現が一コピーずつで一致する。候補にあった余分なスピン $1$ が消えたことを、同じ括り方の比較で確かめられた。

有限鎖の端で $\\frac12\\star1$ が片方向にしか進めないことが、結合則を通じて $1\\star1$ の値まで決めた。これで $k=2$ では、どの二つのchiral familyを結んでも、現れうるfamilyとその多重度を次の式から読める。

$$
\\begin{aligned}
0\\star j&=j,\\\\
\\frac12\\star\\frac12&=0\\oplus1,\\\\
\\frac12\\star1&=\\frac12,\\\\
1\\star1&=0.
\\end{aligned}
$$

ここで決めたのは $k=2$ のfusion係数であり、個々のOPE係数の数値ではない。また、一つの結合則の検算だけで一般の $k$ の全fusion則が得られたわけでもない。次に原著の一般式を使い、入力と出力をまとめて制限する条件を読む。

<details>
<summary>$k=2$ で $1\\star1=0$ になることを係数で確かめる</summary>

fusion環では、基底 $[0],[\\frac12],[1]$ ごとに係数を比較できる。$[1]\\star[1]+[1]=[0]+[1]$ から

$$
N_{11}{}^0=1,\\qquad N_{11}{}^{1/2}=0,\\qquad N_{11}{}^1+1=1
$$

となり、$[1]\\star[1]=[0]$ を得る。後の式 (6.11) からも $j_1=j_2=1$ を代入して

$$
0\\leq j_3\\leq\\min(2,2-1-1)=0
$$

を得るため、出力は $j_3=0$ に限られる。
</details>

#### 一般のfusion則とレベル壁

$SU(2)_k$ の全fusion係数は

$$
\\boxed{
N_{j_1j_2}{}^{j_3}
=
\\begin{cases}
1,
&
|j_1-j_2|\\leq j_3
\\leq\\min(j_1+j_2,\\,k-j_1-j_2),\\\\
&j_1+j_2+j_3\\in\\mathbb Z,\\\\[2mm]
0,&\\text{otherwise}
\\end{cases}
}
\\tag{6.11}
$$

である。個々の係数の網羅的な導出は行わず、原著の表現論データとして採用する。ただし、各条件の役割は区別できる。

- $|j_1-j_2|\\leq j_3\\leq j_1+j_2$ は通常の $SU(2)$ tensor積にもある三角条件である。
- $j_1+j_2+j_3\\in\\mathbb Z$ は、現れるスピンが1刻みであり、整数・半整数の偶奇が合うことを表す。
- $j_3\\leq k-j_1-j_2$ はアフィン代数に固有のレベル壁であり、singular vectorを商で除く効果をfusionへ反映する。

最後の条件は三つのスピンの和 $j_1+j_2+j_3$ を $k$ 以下に制限する。各ラベルが個別に $k/2$ 以下でも、組合せがこの条件を破ることがある。null状態を零とする関係はOPEの中でも保たれなければならず、それが入力と出力をまとめた条件になる。先ほどの $k=2$ の例では、この条件が $1\\star1$ の出力を真空だけに制限していた。

#### カイラル頂点演算子とfusing行列

<!-- reference: fusing-matrix -->

fusion係数は、二つの表現からどの表現へ結べるかを数える。三つを結ぶ場合、最初の二つを先に結ぶ方法と、後ろの二つを先に結ぶ方法がある。同じ相関関数をどちらの順序でも計算するには、途中の表現を指定して選んだ二組の基底を対応させる必要がある。この対応を記録する行列がfusing行列 $F$ である。

<!-- /reference -->

<!-- reference: conformal-block -->

$N_{ij}{}^r\\ne0$ のとき、chiral vertex operator（CVO）は、表現 $i$ の場の挿入によって、$\\mathcal H_j$ の状態を $\\mathcal H_r$ へ移す写像である：

$$
\\phi^i_{rj}(v;z):\\mathcal H_j\\longrightarrow\\mathcal H_r,
\\qquad v\\in\\mathcal H_i.
$$

この写像は、入力状態・挿入する場・出力状態に対するカレントの作用をWard恒等式に従って両立させる。その意味でintertwinerと呼ぶ。CVOは左右を組み合わせる前の補助演算子であり、それだけで物理的な局所場ではない。CVOを連結して両端の状態との行列要素を取ると、局所的に正則な相関関数の一つの解ができる。途中に通る表現を指定して得るこの解がconformal blockである。blockを反正則側のblockと組み合わせて、一価な物理的bulk相関関数を作る。

<!-- /reference -->

括り方を具体化する。最初の二つの表現ラベルを $I,J$ と書く。$I\\star J$ のfusion則が、この二つを結ぶ途中の候補を与える。

その候補から一つの表現 $P$ を選ぶ。$I\\star J\\to P$ と書けば、$P$ は最初の結合が通る中間表現である。

これに三つ目の表現 $K$ を結合し、最終的な表現を $L$ とする。これが $((I\\star J)_P\\star K)_L$ という順序である。

もう一方では $J\\star K$ を先に結び、その途中の表現を $Q$ とする。同じ外線と最終表現を保った二つの順序は

$$
\\bigl((I\\star J)_P\\star K\\bigr)_L
\\quad\\xleftrightarrow{\\ F\\ }\\quad
\\bigl(I\\star(J\\star K)_Q\\bigr)_L.
\\tag{two-bracketings}
$$

この二つの木が許される条件を並べると、$F$ の各添字がどの結合に属するか分かる。

| 中間表現 | 先に行う結合 | 次に行う結合 |
|---|---|---|
| $P$ | $I\\star J\\to P$ | $P\\star K\\to L$ |
| $Q$ | $J\\star K\\to Q$ | $I\\star Q\\to L$ |

各行の二つのfusion係数がともに1である表現だけを、blockの基底に使う。SU(2)の表現は自己共役なので、最後の表現 $L$ を第四の外線 $L$ と結んで真空へ閉じると、これを四点blockとして表せる。

外線 $I,J,K,L$ の挿入点をそれぞれ $0,x,1,\\infty$ に置くと、交差比 $x$ が残る。この配置で、$P$ を使う解の基底を $\\mathcal F_P^{(s)}(x)$、$Q$ を使う解の基底を $\\mathcal F_Q^{(t)}(x)$ と書く。上の表で固定した外線順序に対し、定義は

$$
\\boxed{
\\mathcal F_P^{(s)}(x)
=\\sum_QF_{PQ}\\begin{bmatrix}J&K\\\\ I&L\\end{bmatrix}
\\mathcal F_Q^{(t)}(x)
}.
$$

$P,Q$ は基底を数える添字であり、$I,J,K,L$ は変換中に固定する外線の表現である。$F$ は挿入点を動かす演算子ではなく、同じ解の空間で基底を取り替える定数行列である。解析接続の経路とCVOの規格化を固定することを含めて、この定義を使う。

例えば $k=2$ で四つの外線をすべてスピン $1/2$ にすると、$1/2\\star1/2=0\\oplus1$ なので $P,Q$ はそれぞれ $0,1$ の二通りである。どちらも残るスピン $1/2$ と結んで最終表現 $L=1/2$ にでき、四点blockの空間は二次元になる。従ってこの場合の $F$ は二つの中間channelを混ぜる $2\\times2$ 行列になる。

$F$ の数値を使うには、blockの基底の大きさと位相も選ばなければならない。次節では、上の表で固定した外線配置に対し、量子 $6j$ から数値を与える規約を選ぶ。境界OPEへ同じ $F$ を使う場合にも、場の規格化をその選択とそろえる。

<details>
<summary>blockとCVOの規格化を変えると $F$ はどう変わるか</summary>

基底を $\\mathcal F_P^{\\prime(s)}=a_P\\mathcal F_P^{(s)}$、$\\mathcal F_Q^{\\prime(t)}=b_Q\\mathcal F_Q^{(t)}$ と非零定数倍すると

$$
\\mathcal F_P^{\\prime(s)}
=\\sum_Qa_PF_{PQ}b_Q^{-1}\\mathcal F_Q^{\\prime(t)},
\\qquad F'_{PQ}=a_Pb_Q^{-1}F_{PQ}.
$$

結合 $i\\star j\\to r$ のCVOを $\\gamma_{ij}^{r}$ 倍する場合、表の各行には二つの結合があるので

$$
a_P=\\gamma_{IJ}^{P}\\gamma_{PK}^{L},\\qquad
b_Q=\\gamma_{JK}^{Q}\\gamma_{IQ}^{L},
$$

従って

$$
F'_{PQ}
=\\frac{\\gamma_{IJ}^{P}\\gamma_{PK}^{L}}
{\\gamma_{JK}^{Q}\\gamma_{IQ}^{L}}F_{PQ}
$$

となる。これが原著 p.241 のCVO再規格化則である。相関関数を $\\sum_Pc_P\\mathcal F_P^{(s)}$ と書いていたなら、新しい基底では係数が $c_P/a_P$ になるため、物理的な相関関数は変わらない。数値としての $F$ やOPE係数を比較するときに、規格化を一致させる必要がある理由はこの逆向きの変換である。

</details>

<details>
<summary>Sugawara構成からKZ方程式を得て、$F$ の定数性を確かめる</summary>

カレント代数の一次場 $v_i$ の挿入に対し、$J_n^a|v_i\\rangle=0$（$n>0$）である。式 (6.6) の $L_{-1}$ では、一次場上で $J_{-1}^aJ_0^a$ だけが残るので

$$
L_{-1}|v_i\\rangle
=\\frac1{k+2}\\sum_aJ_{-1}^aJ_0^a|v_i\\rangle.
$$

$L_{-1}$ の挿入は $z_i$ の微分であり、$J_0^a$ は有限次元スピン表現の生成子 $t_a^{(i)}$ として作用する。$J_{-1}^a$ の輪郭を他の挿入点へ動かし、current Ward恒等式を使うと

$$
\\boxed{
\\partial_{z_i}\\mathcal F(\\boldsymbol z)
=\\frac1{k+2}\\sum_{j\\ne i}
\\frac{\\sum_a t_a^{(i)}t_a^{(j)}}{z_i-z_j}
\\mathcal F(\\boldsymbol z)
}.
$$

これがこのノートの $\\operatorname{tr}(t_at_b)=\\delta_{ab}$ 規約でのKnizhnik–Zamolodchikov（KZ）方程式である。分子の二つの生成子は異なる挿入 $i,j$ に作用する。原著 p.240 の分子は同じ挿入の添字を二度印刷しているが、Ward恒等式から得るのは上の不変縮約である。係数はこの基底で $1/(k+2)$ であり、$t_a=\\sigma_a/2$ の角運動量基底なら $2/(k+2)$ になる。

四点では、この連立方程式を交差比 $x$ の一次方程式 $dY/dx=M(x)Y$ にまとめられる。独立解を列に並べた正方行列を $Y$ とする。特異点を避け、解析接続の経路を固定した領域で二組の基本解 $Y_s,Y_t$ を選ぶと

$$
\\frac{d}{dx}(Y_t^{-1}Y_s)
=-Y_t^{-1}MY_s+Y_t^{-1}MY_s=0.
$$

従って基底変換の係数は定数である。その成分の閉形式を求めるには、さらに解の漸近条件とCVO規格化が必要になる。

</details>

#### 有限レベルの括り替えと大きな $k$ の極限

<!-- reference: fusing-classical-limit -->

通常の角運動量でも、三つのスピンを結ぶ二つの順序の間には基底変換があり、その係数はWignerの $6j$ symbolで表される。有限レベルのWZW模型では、許される三点結合をfusion則で制限した上で、その係数を量子変形する。変形に使う整数の置き換えは

$$
[n]_k:=\\frac{\\sin(\\pi n/(k+2))}{\\sin(\\pi/(k+2))}
$$

である。以下では、[Poilblancほか、Appendix A.3](https://link.aps.org/accepted/10.1103/PhysRevB.87.085106) の $SU(2)_k$ の括り替えデータを使う。量子 $6j$ symbolは、四つの許された三点結合に対し、括り替えの数値を与える六スピンの関数である。同論文のRacah規約では、量子階乗 $[m]_k!:=\\prod_{n=1}^m[n]_k$（$[0]_k!=1$）の有限個の積・比・平方根を作り、それらを有限和にする。六つのスピンを固定すると、和の範囲と各階乗の整数引数も固定される。この有限和の構造と、以下の位相・次元因子を含む括り替え係数を外部データとして採用する。これにより、$F$ の数値とblockの規格化を指定する：

$$
F_{PQ}\\begin{bmatrix}J&K\\\\ I&L\\end{bmatrix}
=(-1)^{I+J+K+L}\\sqrt{[2P+1]_k[2Q+1]_k}
\\begin{Bmatrix}I&J&P\\\\ K&L&Q\\end{Bmatrix}_{k}
$$

この規約で選んだ $F$ では、位相は外線の四スピン、平方根は中間表現 $P,Q$ の量子次元から決まる。$6j$ の外線配列は、先の結合表の四つの三角条件に対応する。この位相・次元因子を含む変換を、直交recoupling規格化と呼ぶ。完全なRacah和は、数値を計算するための参照データとして下の補足に置く。

通常のWigner $6j$ のRacah表示は、同じ六スピンの量子Racah表示で $[m]_k!$ を $m!$ に置き換えた有限和である。この対応も、[NIST DLMF式 (34.4.2)](https://dlmf.nist.gov/34.4.E2) の表現論データとして採用する。

スピンを固定して $k\\to\\infty$ とすると、fusion条件 $I+J+P\\leq k$ などはやがて自動的に満たされる。また各固定正整数 $n$ について $\\sin x/x\\to1$ より $[n]_k\\to n$ となる。固定スピンなら十分大きな $k$ で分母の階乗は零にならず、有限和の各項で極限を取れるため、量子 $6j$ は通常のWigner $6j$ へ戻る。上で選んだ直交recoupling規格化では

$$
\\boxed{
\\lim_{k\\to\\infty}
F_{PQ}\\begin{bmatrix}J&K\\\\ I&L\\end{bmatrix}
=(-1)^{I+J+K+L}\\sqrt{(2P+1)(2Q+1)}
\\begin{Bmatrix}I&J&P\\\\ K&L&Q\\end{Bmatrix}_{\\mathrm{Wigner}}
}
\\tag{6.13}
$$

となる。右辺全体が、通常の角運動量の括り替え行列の成分である。原著 (6.13) の「$6j$」はこの括り替え係数として読む。標準的なWigner $6j$ symbolだけとは位相・次元因子が異なるので、両者を同一視しない。

<!-- /reference -->

スピンも $k$ に比例して増やす場合は、$\\pi n/(k+2)$ が小さくなるとは限らず、$[n]_k\\simeq n$ もレベル壁の消失も保証されない。式 (6.13) は固定スピンの極限である。

<details id="note-fusing-racah-data">
<summary>参照用データ：表の結合順序にそろえた量子Racah和 (6.12)</summary>

この閉形式は、量子群の括り替えデータとして採用する。[Poilblanc et al., Appendix A.3, p.16](https://link.aps.org/accepted/10.1103/PhysRevB.87.085106) の直交recoupling規格化と同じ形である。原著 (6.12) の外線配置と一方の次元因子は、本文のCVO再規格化則および原著 (6.23) の結合条件と合わないため、ここでは結合表で定めた配置へそろえる。

量子階乗と三角係数を

$$
[n]_k!:=\\prod_{r=1}^{n}[r]_k,\\qquad [0]_k!=1,
$$

$$
\\Delta_k(a,b,c)
:=\\sqrt{\\frac{[a+b-c]_k![b+c-a]_k![c+a-b]_k!}
{[a+b+c+1]_k!}}
$$

と定める。三つのラベル $a,b,c$ は式 (6.11) のfusion条件を満たすものに限る。その条件で階乗の引数は非負整数になる。本文の外線順序に対する閉形式は

$$
\\begin{aligned}
F_{PQ}\\begin{bmatrix}J&K\\\\ I&L\\end{bmatrix}
={}&(-1)^{I+J+K+L}\\sqrt{[2P+1]_k[2Q+1]_k}\\\\
&\\times\\Delta_k(I,J,P)\\Delta_k(K,L,P)
\\Delta_k(J,K,Q)\\Delta_k(I,L,Q)\\\\
&\\times\\sum_s\\frac{(-1)^s[s+1]_k!}
{[s-I-J-P]_k![s-K-L-P]_k!}\\,\\\\
&\\hspace{8mm}\\times
\\frac1{[s-J-K-Q]_k![s-I-L-Q]_k!}\\\\
&\\hspace{8mm}\\times
\\frac1{[I+J+K+L-s]_k![I+K+P+Q-s]_k![J+L+P+Q-s]_k!}.
\\end{aligned}
\\tag{6.12}
$$

和は、七つの分母の引数がすべて非負整数になる整数 $s$ だけを走る有限和である。四つの $\\Delta_k$ が、本文の表の四つの結合に一対一に対応する。原著の印刷では $\\sqrt{[2P+1][Q+1]}$ とあるが、この直交規格化の次元因子は $\\sqrt{[2P+1]_k[2Q+1]_k}$ である。外線配列を変えた資料から転記するときは、三角係数を各結合へ戻して配置を確認する。

量子 $6j$ symbolを、位相と次元因子を除いた「四つの $\\Delta_k$ と有限和」と定義すれば、式は

$$
F_{PQ}\\begin{bmatrix}J&K\\\\ I&L\\end{bmatrix}
=(-1)^{I+J+K+L}\\sqrt{[2P+1]_k[2Q+1]_k}
\\begin{Bmatrix}I&J&P\\\\ K&L&Q\\end{Bmatrix}_{k}
$$

である。固定スピンでは和の範囲も固定されるため、$[n]_k\\to n$ を各階乗へ代入するとWignerのRacah和になり、本文の式 (6.13) を得る。

例えば $k=2$、外線を全て $1/2$、行列の順を $P,Q=0,1$ とすると、この規格化では

$$
F=\\frac1{\\sqrt2}
\\begin{pmatrix}-1&1\\\\1&1\\end{pmatrix},\\qquad F^\\mathsf TF=\\mathbf1.
$$

二組の直交基底の変換であることを直接検算できる。別のCVO規格化では行・列の符号も変わるが、その場合はOPE係数にも対応する変換を施す。

恒等表現 $0$ を結ぶ場合も確認できる。$N_{Ij}{}^K=1$ である三つのラベルに対し、左または右に $0$ を加えた二つの木には各々一つしか中間表現がなく、同じ規格化では

$$
F_{I,j}\\begin{bmatrix}0&j\\\\I&K\\end{bmatrix}
=F_{K,j}\\begin{bmatrix}j&0\\\\I&K\\end{bmatrix}=1
$$

となる。この性質により、後で境界OPE係数を $C=F$ と選んだときも、恒等場を左または右から掛ける操作が元の場を係数1で返す。二つの非自明な場を掛けて恒等場を出す係数は、二点関数の規格化にも依存する別の量である。

</details>

同じCVO規格化を保って四つの入力表現を結ぶと、括り方は五通りある。その間を $F$ で移動したとき、同じ二つの基底を結ぶ二つの経路が同じ行列を与える条件を **pentagon identity** と呼ぶ。WZWのfusingデータはこの条件を満たす（原著式 (3.63)、[Moore–Seibergの整合性関係](https://doi.org/10.1016/0370-2693(88)91796-0)）。この条件が、後に境界OPEを異なる順序で組み立てたときの一致を保証するための入力になる。

$\\chi_j,S_{ij},N_{ij}{}^r,F$ が決定するデータは

$$
\\begin{array}{c|c}
\\text{データ}&\\text{決定される対象}\\\\
\\hline
\\chi_j&\\mathcal H_j\\text{ 内のエネルギー縮退度（電荷付きなら電荷も記録）}\\\\
S_{ij}&\\text{トーラスの周期交換でcharacterがどう混ざるか}\\\\
N_{ij}{}^r&\\text{二つのchiral familyからどのfamilyが何通り生じるか}\\\\
F&\\text{同じconformal blockを異なるOPE順序で表す基底の対応}
\\end{array}
$$

となる。Verlinde公式はcharacterのmodular変換とfusionの多重度を結び付け、$F$ は場を結合する順序の間の対応を与える。

球面上で左右の振動を別々に記録できるか、という問いには、Wess–Zumino項による交換子の相殺と二つの保存カレントで答えた。そのカレントの量子代数を使うと、許容スピンを $0,\\frac12,\\ldots,k/2$ に絞り、零ノルム状態を除いた表現の状態数をcharacterで数えられた。$S$ はトーラスの周期交換の前後を結び、同じ $S$ からfusion係数を得ると、通常の角運動量の合成では残る出力がレベル条件で消える理由も読める。さらに $F$ は、残った表現を異なる順序で結ぶ二つのblock基底を対応させる。

これで一方のカイラル理論の状態と結合を扱う材料がそろった。しかし、左右のどの表現を組み合わせるか、弦の端で左右のカレントをどう結ぶかは、まだ指定していない。[6.2節](/6-2)ではこの二つを選び、bulk理論と境界条件を作る。ここで得た $S,N,F$ が、その選択の整合性と、開弦のスペクトル・OPEを計算するための入力になる。

## 参考文献

- A. Recknagel and V. Schomerus, *Boundary Conformal Field Theory and the Worldsheet Approach to D-Branes*.
  - WZW作用・カレント・可積分表現・character・fusion・fusing行列：§6.1.1–6.1.2, pp.236–241, 式(6.1)–(6.13)。
  - σ模型と背景場：式(2.2), (2.14)–(2.15)。
  - アフィン代数とSugawara構成：pp.90–91, 式(3.6)–(3.7)。
  - Verlinde公式：p.119, 式(3.76)。
  - theta関数の規約：Appendix A, p.316。
- E. Witten, “Non-Abelian Bosonization in Two Dimensions,” *Commun. Math. Phys.* **92** (1984) 455–472. [doi:10.1007/BF01215276](https://doi.org/10.1007/BF01215276).
- D. Poilblanc, A. E. Feiguin, M. Troyer, E. Ardonne and P. Bonderson, “One-dimensional itinerant interacting non-Abelian anyons,” *Phys. Rev. B* **87** (2013) 085106. [公開著者稿](https://link.aps.org/accepted/10.1103/PhysRevB.87.085106)。Appendix A.3, p.16のSU(2)$_k$ fusion、量子Racah和、直交recoupling規格化を参照。
- G. Moore and N. Seiberg, “Polynomial Equations for Rational Conformal Field Theories,” *Phys. Lett. B* **212** (1988) 451–460. [doi:10.1016/0370-2693(88)91796-0](https://doi.org/10.1016/0370-2693(88)91796-0)。blockの基底変換の整合性、Verlindeとの関係を参照。
`},{id:`6-2`,section:`6.2`,shortTitle:`Bulk・boundary CFT`,content:`# 6.2 $SU(2)$ WZW模型をbulk・boundary CFTとして解く

6.1節では、[カレント代数](/6-1#ref-affine-algebra)と、その表現 $\\mathcal H_j$、[character](/6-1#ref-character)、[fusion則](/6-1#ref-fusion)、[fusing行列](/6-1#ref-fusing-matrix) $F$ を求めた。この節では、左右のカイラル理論を組み合わせてbulk理論を作り、そこに境界を入れる。

<!-- reference: gluing -->

境界のない世界面では左右の励起を独立に用意できる。境界では、境界へ入ってきた励起と、そこから戻る励起との関係を指定しなければならない。その関係をcurrentに対して課すのがgluing条件である。この節では、全currentの対称性を保つ境界条件を扱う。一般の共形境界条件のうち、[WZW模型](/6-1#ref-wzw-model)の豊かな対称性を利用できるクラスである。

<!-- /reference -->



境界条件が決まると、二つの境界の間にどの励起が存在するか、境界上の場を近づけるとどう結合するかを問える。前者がopen-string spectrum、後者がboundary OPEである。「open string」はここでは両端を境界条件に従わせた区間上の場の状態を指す。弦の時空質量を求める前に、まずこのCFTの状態空間を求める。

## 1. カイラル理論のデータ

[レベル](/6-1#ref-level) $k\\in\\mathbb Z_{>0}$ を固定する。可積分な $\\widehat{\\mathfrak{su}}(2)_k$ 表現は

$$
j=0,\\frac12,\\ldots,\\frac{k}{2}
$$

でラベルし、その表現空間を $\\mathcal H_j$ と書く。基底状態の共形ウェイト、中心電荷、modular $S$-matrixは

$$
h_j=\\frac{j(j+1)}{k+2},
\\qquad
c=\\frac{3k}{k+2},
$$

$$
S_{ij}
=
\\sqrt{\\frac{2}{k+2}}
\\sin\\!\\left(\\frac{\\pi(2i+1)(2j+1)}{k+2}\\right).
$$

$j^+$ は、変換行列の各成分を複素共役して得る表現のラベルである。$SU(2)$ のスピン $j$ の既約表現は次元 $2j+1$ で一意に決まり、複素共役してもこの次元は変わらない。従って共役表現も同じスピン $j$ に属し、$j^+=j$ となる。この性質を[自己共役](/6-1#ref-conjugate-representation)と呼ぶ。

上の正弦公式で与えた $S$ は実対称であり、6.1で確認した正弦関数の直交性によりユニタリでもある。fusion係数 $N_{ij}{}^r$ は、chiral OPEで表現 $i,j$ を結合したときに表現 $r$ が現れる多重度である。$SU(2)_k$ では $0$ または $1$ であり、許容条件は

$$
|i-j|\\le r\\le \\min(i+j,k-i-j),
\\qquad
i+j+r\\in\\mathbb Z .
$$

## 2. bulk理論：左右のchiral sectorを対角に組み合わせる

### 2.1 bulk状態空間とmodular不変性

6.1節のchiral代数だけでは、左右のどの表現を組にしてbulkの状態にするかはまだ指定されていない。ここでは同じラベルの左右を一組ずつ用いる対角模型を選び、正則側と反正則側を

$$
\\boxed{
\\mathcal H^{(P)}
=
\\bigoplus_{j=0}^{k/2}
\\mathcal H_j\\otimes\\overline{\\mathcal H}_j
}
$$

と組み合わせる。各tensor積の中では左右の励起を独立に作り、直和は各ラベルの状態空間をすべて並べることを表す。一般には右側に[共役表現](/6-1#ref-conjugate-representation) $j^+$ が来るcharge-conjugation invariantだが、$SU(2)$ では $j^+=j$ なので対角形と一致する。この選択の整合性を確かめる一つの条件が、トーラス分配関数のmodular不変性である。

$\\overline{\\mathcal H}_j$ は反正則側の表現空間を表す。barは複素共役した数値という意味ではなく、右側のchiral代数のcopyを区別する記号である。

対応するトーラス分配関数は

$$
\\boxed{
Z(\\tau,\\bar\\tau)
=
\\sum_{j=0}^{k/2}
\\chi_j(\\tau)\\overline{\\chi_j(\\tau)}
}
\\tag{6.14}
$$

である。$S$ 変換後の $\\chi_j\\overline{\\chi_r}$ の係数は $\\sum_iS_{ij}S_{ir}^*=\\delta_{jr}$ なので、同じ対角和へ戻る。$T:\\tau\\mapsto\\tau+1$ では左側に $e^{2\\pi i(h_j-c/24)}$、右側にその逆位相が掛かり、各積が不変になる。$S,T$ がmodular群を生成するため、これでmodular不変性が従う。

<details>
<summary>計算：$S$ のユニタリ性と左右の $T$ 位相からmodular不変性を確かめる</summary>

$\\chi_i(-1/\\tau)=\\sum_jS_{ij}\\chi_j(\\tau)$ を式 (6.14) に代入する。複素共役は係数にも作用するので

$$
\\overline{\\chi_i(-1/\\tau)}=\\sum_rS_{ir}^*\\overline{\\chi_r(\\tau)}.
$$

次の式変形では、まず同じ $i$ に属する左右の和を展開し、次に $i$ の和をまとめる。

\`\`\`math-steps
lhs: Z'
note: 各正則characterを $S$ で変換し、反正則側にはその複素共役を使う。
popup-math: \\chi_i\\mapsto\\sum_jS_{ij}\\chi_j,\\qquad\\overline{\\chi_i}\\mapsto\\sum_\\ell S_{i\\ell}^*\\overline{\\chi_\\ell}
part expression: \\sum_i\\Bigl(\\sum_j S_{ij}\\chi_j\\Bigr)\\Bigl(\\sum_\\ell S_{i\\ell}^{*}\\overline{\\chi_\\ell}\\Bigr)
---
note: 和を展開して順序を入れ替え、添字$i$を持たないcharacterを$i$の和の外へ出す。
part expression: \\sum_{j,\\ell}\\Bigl(\\sum_i S_{ij}S_{i\\ell}^{*}\\Bigr)\\chi_j\\overline{\\chi_\\ell}
---
note: $S$のユニタリ性により列の内積がKroneckerの$\\delta$になり、$\\ell=j$の項だけが残る。
popup-math: \\sum_i S_{ij}S_{i\\ell}^{*}=\\delta_{j\\ell},\\qquad\\sum_\\ell\\delta_{j\\ell}\\overline{\\chi_\\ell}=\\overline{\\chi_j}
part expression: \\sum_j\\chi_j\\overline{\\chi_j}=Z
\`\`\`

もう一つの生成元 $T$ も調べる。

$\\mathcal H_j$ の $L_0$ 固有値は $h_j+N$、$N\\in\\mathbb Z_{\\geq0}$ である。$\\tau\\mapsto\\tau+1$ の各状態の位相は $e^{2\\pi i(h_j+N-c/24)}=e^{2\\pi i(h_j-c/24)}$ なので

$$
\\chi_j(\\tau+1)=e^{2\\pi i(h_j-c/24)}\\chi_j(\\tau).
$$

$h_j,c$ は実数であり、右側の複素共役characterには逆位相が掛かる。したがって各 $|\\chi_j|^2$ はそれぞれ不変である。$S,T$ がmodular群を生成するため、両方の確認から式 (6.14) のmodular不変性が従う。

</details>

### 2.2 ground stateに対応するbulk場

分配関数は状態を数えるが、局所的に何を挿入するかは状態・場対応で定める。点の周りを小さな円で囲み、その点に場を挿入すると円上の状態が用意される。逆に、円上の状態を指定して円を点へ縮めることで対応する局所場を表す。

$\\mathcal H_j$ の最低エネルギー部分は、6.1節で求めた $2j+1$ 個の状態 $|j;m\\rangle$ からなる。左右それぞれから一つ選ぶと、bulkには $(2j+1)^2$ 成分のground-state multipletができる。その成分に対応する場を

$$
\\boxed{
\\varphi_{j,j}^{mn}(z,\\bar z)
:=
\\Phi\\!\\left(
|j;m\\rangle\\otimes\\overline{|j;n\\rangle};
z,\\bar z
\\right)
}
\\tag{6.15}
$$

と書く。これは式 (3.27) のstate-field correspondenceを用いた記法である。$m,n=-j,-j+1,\\ldots,j$ は左右の成分ラベルである。左の $m$ はスピン生成子 $J_0^0=J_0^3/\\sqrt2$ の固有値とする。右側は左表現の双対基底でラベルし、$\\overline{|j;n\\rangle}$ の $\\bar J_0^0$ 固有値は $-n$ とする。この規約では左右を結ぶ不変tensorが $\\delta^{mn}$ となり、後のone-point functionと記法が揃う。すべての成分は同じgrade $0$ の多重項に属する。正モード $L_n$ は $L_0$ 固有値を $n$ だけ下げるが、ground stateより低い状態は存在しないため、$n>0$ で $L_n$ はこれらを消す。右側も同様なので、全成分がウェイト $(h_j,h_j)$ のVirasoro primaryである。

<details>
<summary>導出：ground stateの全成分がVirasoro primaryになる理由</summary>

正則側では $L_0|j;m\\rangle=h_j|j;m\\rangle$ であり、$h_j$ がこの表現の最小 $L_0$ 固有値である。$[L_0,L_n]=-nL_n$ を使うと

$$
L_0L_n|j;m\\rangle=(h_j-n)L_n|j;m\\rangle.
$$

$n>0$ で右辺の状態が非零なら、最小固有値 $h_j$ より低い状態が存在してしまう。従って $L_n|j;m\\rangle=0$ である。これがすべての $m$ についてVirasoro primaryとなる理由である。反正則側も同様である。

同じ議論を $[L_0,J_n^a]=-nJ_n^a$ に適用すれば、$J_n^a|j;m\\rangle=0$ は全成分について $n>0$ で成立する。ただし零モードはエネルギーを変えず、grade $0$ 内で

$$
J_0^0|j;m\\rangle=m|j;m\\rangle,\\qquad
J_0^+|j;m\\rangle=\\sqrt{(j-m)(j+m+1)}\\,|j;m+1\\rangle
$$

と作用する。最高ウェイト条件 $J_0^+|j;m\\rangle=0$ まで満たすのは $m=j$ である。右側も最高ウェイトとは実際のスピン固有値が $j$ の状態を指す。本文の双対基底のラベルではこれは $n=-j$ に対応する。左右の最高ウェイト条件を同時に課す場合は、$m=j,n=-j$ となる。

</details>

次に、bulk場 (6.15) のOPEを求める。fusion則は出力の候補を与え、共形対称性は距離のべきを決める。各候補がどの強さで現れるかは、模型の三点結合のデータである構造定数 $C_{j_1,j_2}^{k;j_3}$ が決める。これは磁気量子数への依存を取り除いた係数であり、スピンとレベル $k$ に依存する。

<details>
<summary>原著 §6.2.1：bulk構造定数の閉形式と適用条件</summary>

原著 §6.2.1（printed p. 242、同所の文献 [463]）の場と結合係数の規格化では、fusionで許される三つのスピンについて

$$
\\begin{aligned}
C_{j_1,j_2}^{\\mathrm{src};k;j_3}
={}&(s+1)!\\,P(s+1)P(1)^{1/2}\\\\
&\\times\\prod_{\\nu=1}^3
\\frac{P(\\widehat j_\\nu)\\widehat j_\\nu!}
{(2j_\\nu+1)^{1/2}(2j_\\nu)!\\,
P(2j_\\nu)^{1/2}P(2j_\\nu+1)^{1/2}},\\\\
s:={}&j_1+j_2+j_3,\\qquad \\widehat j_\\nu:=s-2j_\\nu,
\\end{aligned}
$$

と与えられる。ここで $\\Gamma$ はGamma関数であり、

$$
P(0)=1,\\qquad
P(\\ell)=\\prod_{n=1}^{\\ell}
\\frac{\\Gamma\\!\\left(n/(k+2)\\right)}
{\\Gamma\\!\\left(1-n/(k+2)\\right)}
\\quad(\\ell\\in\\mathbb Z_{>0})
$$

と定義する。fusion条件により $s$ と $\\widehat j_\\nu$ は非負整数で、$s\\leq k$ である。従って階乗の引数は非負で、$P$ に現れる $n$ は $1\\leq n\\leq k+1$ に収まる。Gamma関数の引数はともに正なので、平方根には正の値を選べる。fusionで禁止されたchannelはOPEの和に含めない。

この閉形式と、本文で選んだ通常の単位規格化Clebsch--Gordan係数は、規格化を揃えて用いる。閉形式は三ラベルに対称であり、恒等場を含む値は $C_{0,j}^{\\mathrm{src};k;j}=C_{j,j}^{\\mathrm{src};k;0}=1$ である。一方、単位CGで $j\\otimes j\\to0$ を結ぶ係数は大きさ $1/\\sqrt{2j+1}$ なので、左右の積は $1/(2j+1)$ となる。閉形式をそのまま本文のCGへ掛けると、bulk場の二点規格化もこの値になる。

本文の境界一点関数と次節の正規直交波 $\\sqrt{2j+1}D^j_{mn}$ に合わせ、各bulk場を $\\sqrt{2j+1}$ 倍して単位の二点規格化にする。この変更で、二入力の倍率を出力の倍率で割るため、本文のreduced OPE係数は

$$
C_{j_1,j_2}^{k;j_3}
=\\sqrt{\\frac{(2j_1+1)(2j_2+1)}{2j_3+1}}\\,
C_{j_1,j_2}^{\\mathrm{src};k;j_3}.
$$

従って $C_{0,j}^{k;j}=1$ は保たれ、$C_{j,j}^{k;0}=2j+1$ が左右CGの $1/(2j+1)$ を打ち消す。原著の閉形式・三点結合の規格化と、本文のCG/場の規格化を区別することで、OPEと境界一点関数を同じ場について比較できる。例えば $j_1=0,\\ j_2=j_3=j$ では $s=2j$、$(\\widehat j_1,\\widehat j_2,\\widehat j_3)=(2j,0,0)$ を代入すると積が相殺し、$C_{0,j}^{k;j}=1$ になる。これは恒等場とのOPEの規格化を確かめる例である。一般に場を $\\varphi_{j,j}\\mapsto a_j\\varphi_{j,j}$ と規格化し直せば、係数は $C_{j_1,j_2}^{k;j_3}\\mapsto(a_{j_1}a_{j_2}/a_{j_3})C_{j_1,j_2}^{k;j_3}$ と変わる。

</details>

磁気量子数の結合には、通常の有限次元SU(2)表現 $V_j$（次元 $2j+1$）のtensor積分解を既知の表現論データとして採用する。$V_{j_1}\\otimes V_{j_2}$ には $r=|j_1-j_2|,|j_1-j_2|+1,\\ldots,j_1+j_2$ の各 $V_r$ が一度ずつ現れる。これは零モードのスピンを合成する規則であり、レベル $k$ による追加の制限を持つアフィンfusion則とは区別する。

ground state成分のOPEで、磁気量子数 $m,n$ への依存を決めるのは左右の零モードのWard恒等式である。Ward恒等式は「二つの入力を回転してから結合する」と「結合した出力を回転する」が同じであることを要求する。スピン $j_1,j_2$ のtensor積には各許容スピン $j_3$ が一度ずつ現れるため、この条件を満たす結合写像は全体定数を除いて一つであり、Clebsch--Gordan係数で表せる。その全体定数を $C_{j_1,j_2}^{k;j_3}$ に含める。以下では

$$
\\beta_{j_1j_2j_3}^{m_1m_2m_3}
:=\\langle j_3,m_3\\mid j_1,m_1;j_2,m_2\\rangle
=\\begin{bmatrix}j_1&j_2&j_3\\\\m_1&m_2&m_3\\end{bmatrix}
$$

と書く。これは二つの入力から出力への結合係数であり、$m_3=m_1+m_2$ のときだけ非零である。反正則側には、原著の規約でその複素共役が現れる。

<details>
<summary>導出：零モードのWard恒等式がClebsch--Gordan係数を選ぶ</summary>

$V_j$ はgrade $0$ のスピン $j$ 表現とする。OPEの正則側で、固定した出力 $j_3$ の磁気量子数への依存を線形写像

$$
B:V_{j_1}\\otimes V_{j_2}\\longrightarrow V_{j_3},\\qquad
B(|j_1,m_1\\rangle\\otimes|j_2,m_2\\rangle)
=\\sum_{m_3}B_{m_1m_2}^{m_3}|j_3,m_3\\rangle
$$

で表す。全体に零モード $J_0^a$ を作用させるとき、二つの入力を変換してからOPEを取っても、OPEの出力を変換しても同じになる。これがWard恒等式

$$
B\\bigl(t_{j_1}^a\\otimes\\mathbf1+\\mathbf1\\otimes t_{j_2}^a\\bigr)
=t_{j_3}^a B
$$

であり、$B$ が $SU(2)$ の作用と両立するintertwinerであることを意味する。

$t^0=t^3/\\sqrt2$ の条件を基底状態に作用させると

$$
(m_1+m_2)B_{m_1m_2}^{m_3}=m_3B_{m_1m_2}^{m_3}.
$$

従って $m_3\\neq m_1+m_2$ なら係数は零になる。上昇演算子については

$$
\\begin{aligned}
&\\sqrt{(j_1-m_1)(j_1+m_1+1)}\\,B_{m_1+1,m_2}^{m_3}\\\\
&\\quad+\\sqrt{(j_2-m_2)(j_2+m_2+1)}\\,B_{m_1,m_2+1}^{m_3}\\\\
&=\\sqrt{(j_3-m_3+1)(j_3+m_3)}\\,B_{m_1,m_2}^{m_3-1}.
\\end{aligned}
$$

左辺は二つの入力のどちらを上げるかを足し、右辺は出力の $m_3-1$ を上げて $m_3$ を得ている。この関係と下降演算子の関係が、多重項内の異なる係数を結ぶ。

通常の $SU(2)$ の分解 $V_{j_1}\\otimes V_{j_2}=\\bigoplus_{r=|j_1-j_2|}^{j_1+j_2}V_r$ は1刻みで、各 $V_r$ は一度だけ現れる。従って許される $j_3$ へのintertwiner空間は一次元であり、基底と位相を固定すれば、解はClebsch--Gordan係数の定数倍に限られる。その定数がreduced coefficientへ吸収される。

零モードの議論が決めるのは、この磁気量子数依存である。有限レベルの制限 $j_3\\leq k-j_1-j_2$ とreduced coefficientの数値には全current代数の情報が必要になる。左右は独立に同じ制約を課すので、bulk係数は左の $\\beta$ と右の $\\beta^*$ の積を含む。さらに正のgradeのdescendantに対する係数は、非零モードも含めたWard恒等式で決まる。

</details>

以上を合わせると、$SU(2)$ WZW模型のground stateに対応する場のOPEは

$$
\\begin{aligned}
&\\varphi_{j_1,j_1}^{m_1n_1}(z,\\bar z)
\\varphi_{j_2,j_2}^{m_2n_2}(w,\\bar w)\\\\
&\\quad =
\\sum_{j_3,m_3,n_3}
|z-w|^{2h_{j_3}-2h_{j_1}-2h_{j_2}}
C_{j_1,j_2}^{k;j_3}
\\beta_{j_1j_2j_3}^{m_1m_2m_3}
\\left(\\beta_{j_1j_2j_3}^{n_1n_2n_3}\\right)^*
\\varphi_{j_3,j_3}^{m_3n_3}(w,\\bar w)
+\\cdots .
\\end{aligned}
$$

和はfusionで許される $j_3$ と、その多重項の $m_3,n_3$ を走る。距離因子の指数は、出力の全ウェイト $2h_{j_3}$ から二つの入力の全ウェイト $2h_{j_1}+2h_{j_2}$ を引いたものになる。これにより両辺が同じスケール変換を受ける。$\\cdots$ は正のgradeのdescendantの寄与を表す。

<details>
<summary>計算：OPEの距離のべきと左右の係数を組み合わせる</summary>

正則側では出力のウェイトが $h_{j_3}$、二つの入力の和が $h_{j_1}+h_{j_2}$ なので、スケール変換の釣り合いから $(z-w)^{h_{j_3}-h_{j_1}-h_{j_2}}$ が掛かる。反正則側は同じウェイト差をもつ $({\\bar z}-{\\bar w})^{h_{j_3}-h_{j_1}-h_{j_2}}$ である。対角模型では両者の積が

$$
(z-w)^{h_{j_3}-h_{j_1}-h_{j_2}}
(\\bar z-\\bar w)^{h_{j_3}-h_{j_1}-h_{j_2}}
=|z-w|^{2h_{j_3}-2h_{j_1}-2h_{j_2}}
$$

になる。左右のWard恒等式がそれぞれ $\\beta^{m_1m_2m_3}$ と $(\\beta^{n_1n_2n_3})^*$ を与え、残ったスピンとレベルへの依存を $C_{j_1,j_2}^{k;j_3}$ が担う。共形対称性、零モード対称性、残る三点結合のデータが、この順にOPEの各因子を決めている。

</details>

## 3. one-point functionとboundary state

同じbulk理論に境界を入れると、bulkの各状態への結合の強さを選ぶ必要がある。currentの反射の仕方を決めれば、その強さまで決まるだろうか。まずgluingを満たす境界状態を作り、そこに残る自由度を調べる。

境界を入れると、そこでcurrentやエネルギーがどう反射するかを指定する必要がある。上半平面の実軸上で、[左右のcurrent](/6-1#ref-chiral-currents)を $J^a(x)=\\bar J^a(x)$ と結ぶtrivial gluing $\\Omega=\\mathrm{id}$ を選ぶ。[Sugawara構成](/6-1#ref-sugawara)の $T$ と $\\bar T$ は同じ係数のcurrentの二次式なので、この等式から $T(x)=\\bar T(x)$ が従う。左右のエネルギー流の差が零となり、境界の外へエネルギーを流さない。

<!-- reference: boundary-state -->

境界の影響をbulk側から記録するのが境界状態である。diskの物理的な境界と、その内側に引いた円との間で経路積分すると、円上の各closed-string状態への振幅が得られる。それらをまとめた $\\|B\\rangle\\rangle$ は「その境界がbulkの各状態にどれだけ結合するか」を表す。境界上を動く励起の状態空間は、後で別に求める。

<!-- /reference -->



ここで選んだbulk模型は有限個のchiral sectorをもつcharge-conjugation型である。以下ではtrivial gluingを保つ境界について、Cardy構成を使う。

### 3.1 Cardy conditionはannulusの二つの量子化を一致させる

<!-- reference: ishibashi -->

実軸の境界を単位円へ写した複素座標を $w$ とする。境界上では反正則座標が $\\bar w=1/w$ なので、実軸に沿う微分には $d\\bar w/dw=-w^{-2}$ が付く。currentはウェイト1であり、座標変換ではこの微分因子を一つ掛ける。従って、実軸の $J^a=\\bar J^a$ は円上で $wJ^a(w)+\\bar w\\bar J^a(\\bar w)=0$ となる。

円周を $w=e^{i\\sigma}$ で表す。モード展開を代入すると、左のcurrentは $\\sum_nJ_n^ae^{-in\\sigma}$、右は $\\sum_n\\bar J_{-n}^ae^{-in\\sigma}$ になる。各Fourier係数が零になることが、境界状態を $J_n^a+\\bar J_{-n}^a$ が消す条件である。左右のcurrentがそれぞれ零になる条件ではなく、同じ境界で値が対応する条件である。各対角bulk sector $\\mathcal H_j\\otimes\\overline{\\mathcal H_j}$ ごとに、この条件

$$
\\boxed{
(J_n^a+\\bar J_{-n}^a)|j\\rangle\\rangle=0,
\\qquad a=1,2,3
}
\\tag{Ishibashi-gluing}
$$

を満たすIshibashi状態 $|j\\rangle\\rangle$ がある。条件は境界状態に対して線形なので、各部品が条件を満たせば、その任意の線形結合

$$
\\|A\\rangle\\rangle
=\\sum_j B_A{}^j|j\\rangle\\rangle
\\tag{general-boundary-state}
$$

も許される。Ishibashi状態は、同じエネルギーをもつ左右の状態を全levelにわたって対にした形式的な和である。したがって通常の有限ノルムの状態ではないが、有限の伝播時間を挟んだ振幅を計算できる。この局所的なgluing条件だけでは、各sectorをどの強さで混ぜるか、すなわち係数 $B_A{}^j$ は決まらない。[境界状態のノルムと整合性](#note-boundary-as-source)

<details id="note-boundary-as-source">
<summary>境界状態のノルムが無限でも、何を計算できるのか？</summary>

境界状態はbulkへの結合をまとめた形式的な状態で、伝播因子を挟んだ振幅が計算の対象になる。

ここで$H_c$はclosed側の伝播を生成するHamiltonian、$t$はEuclid時間である。Ishibashi状態は、左右の同じエネルギーの状態を全levelにわたって足し合わせる。そのままノルムを取ると無限個の項が残る。有限時間の伝播を挟むと、高いエネルギーの項に小さな重みが付き、和をcharacterとして計算できる。境界状態とbulk場との重なりは、diskのone-point functionを与える。

この振幅を計算できることに加え、annulusをopen側から読んだとき各表現の重複度が非負整数であることも必要になる。それがCardy条件である。さらに境界場のOPE順序を変えても相関関数が一致することは、後のboundary sewingで確かめる。これらが同じ境界の局所的な結合と状態数を結びつける。

$$
\\langle\\langle B_1\\|e^{-tH_c}\\|B_2\\rangle\\rangle,\\qquad t>0
$$

参照：6.2.2–6.2.3 · 式 (6.16) とCardy構成

</details>

<!-- /reference -->



<!-- reference: cardy-condition -->

係数 $B_A{}^j$ を選ぶには、境界の局所条件とは別の条件を使う。二つの境界を端にもつ円筒、すなわちannulusを考える。円筒の長さ方向をEuclid時間に取ると、円周上のclosed stringが一方の境界から他方へ伝播する。一方、円周方向を時間に取ると、両境界を端点とするopen stringが一周して元に戻るので、その状態についてのtraceになる。これは同じ世界面の経路積分を二通りに読んでいる。

![同じannulusを長方形に開き、上下辺を同一視して示す。閉弦の見方では左右の境界間を時間が進み、縦の断面は円になる。開弦の見方では上下の周期方向に時間が進み、横の断面は両端を境界に置く区間になる。](/diagrams/annulus-channels.svg)

図の上下辺は同一視されている。横方向を時間に取ると空間断面は円、縦方向を時間に取ると空間断面は区間になる。open区間の長さを $L$、Euclid時間の周期を $\\beta$ とする。区間のHamiltonianは $H_{\\rm open}=\\pi(L_0-c/24)/L$ なので、$e^{-\\beta H_{\\rm open}}=q^{L_0-c/24}$ に合わせるcharacterのmodulusは $\\tau=i\\beta/(2L)$ である。以下では $t:=\\beta/(2L)>0$ と定め、$\\tau=it$ を使う。二方向の交換でclosed側のmodulusは $-1/\\tau$ となる。

open側でsector $\\mathcal H_r$ が $n_{AB}{}^r$ 個現れるなら、その状態のtraceは

$$
Z_{AB}^{\\rm open}=\\sum_r n_{AB}{}^r\\chi_r(\\tau)
$$

となる。$n_{AB}{}^r$ は状態空間のコピー数なので、各 $r$ について非負整数でなければならない。同じannulusをclosed側で計算した値も、この形に書ける必要がある。

そこで、まだ係数を自由にした境界状態をclosed側の振幅へ代入する。Ishibashi状態は同じsectorの左右の基底を一対ずつ足した和なので、伝播を挟んだ重なりは一つのcharacterになる。6.1のmodular変換 $\\chi_\\ell(-1/\\tau)=\\sum_rS_{\\ell r}\\chi_r(\\tau)$ を使えば

$$
\\begin{aligned}
Z_{AB}^{\\rm closed}
&=\\sum_\\ell(B_A{}^\\ell)^*B_B{}^\\ell\\chi_\\ell(-1/\\tau)\\\\
&=\\sum_r\\left[\\sum_\\ell(B_A{}^\\ell)^*B_B{}^\\ell S_{\\ell r}\\right]\\chi_r(\\tau).
\\end{aligned}
$$

open側と同じcharacterの係数を比べると、自由な係数 $B_A{}^j$ には、gluingだけでは課されていなかった条件が見える：

$$
\\boxed{
n_{AB}{}^r
=
\\sum_\\ell
(B_A{}^\\ell)^*B_B{}^\\ell S_{\\ell r}
\\in\\mathbb Z_{\\geq0}
}
\\tag{Cardy-condition}
$$

これがCardy conditionである。必要なのは $B_A{}^j$ 自体の非負性ではなく、この和が各open sectorのコピー数になることである。

<!-- /reference -->

<details>
<summary>annulusの二つの切り方から非負整数条件を導く</summary>

annulusのopen-channelのmodulusを $\\tau=it$（$t>0$）とし、$q=e^{2\\pi i\\tau}$、$\\widetilde q=e^{-2\\pi i/\\tau}$ と置く。closed側の伝播演算子には

$$
\\widetilde H_c=\\frac12\\left(L_0+\\bar L_0-\\frac c{12}\\right)
$$

を使う。係数 $1/2$ は、[Ishibashi状態](/6-2#ref-ishibashi)では左右の共形ウェイトが等しく、各対の指数を一つのchiral characterの $L_0-c/24$ に合わせるために必要である。

sector $\\ell$ の正規直交基底を $|\\ell;\\alpha\\rangle$ とし、その $L_0$ 固有値を $h_\\alpha$ と書く。Ishibashi状態は、それぞれの左基底とgluingが指定する右基底を一対ずつ同じ係数で足した形式的な状態である。異なるsectorは直交し、同じsectorでは基底の直交性によって

$$
\\begin{aligned}
\\langle\\langle\\ell|\\widetilde q^{\\widetilde H_c}|m\\rangle\\rangle
&=\\delta_{\\ell m}\\sum_\\alpha
\\widetilde q^{\\frac12(2h_\\alpha-c/12)}\\\\
&=\\delta_{\\ell m}\\sum_\\alpha\\widetilde q^{h_\\alpha-c/24}
=\\delta_{\\ell m}\\chi_\\ell(\\widetilde q).
\\end{aligned}
$$

\`\`\`math-hint
左右の基底の内積が両方ともKroneckerの $\\delta$ を与える。二つの和に同じ基底番号が強制されるので、状態数を二乗することにはならない。

$$
\\sum_{\\alpha,\\beta}\\delta_{\\alpha\\beta}\\delta_{\\alpha\\beta}\\,
\\widetilde q^{h_\\beta-c/24}
=\\sum_\\alpha\\widetilde q^{h_\\alpha-c/24}.
$$

各対のエネルギーは $\\tfrac12(h_\\alpha+h_\\alpha-c/12)=h_\\alpha-c/24$ である。
\`\`\`

挿入なしのIshibashi状態は規格化できないが、$0<\\widetilde q<1$ の伝播因子を挟めば、この和はcharacterとして評価される。境界状態を両側で展開すると

$$
\\begin{aligned}
\\langle\\langle A\\|\\widetilde q^{\\widetilde H_c}\\|B\\rangle\\rangle
&=\\sum_{\\ell,m}(B_A{}^\\ell)^*B_B{}^m
\\langle\\langle\\ell|\\widetilde q^{\\widetilde H_c}|m\\rangle\\rangle\\\\
&=\\sum_\\ell(B_A{}^\\ell)^*B_B{}^\\ell\\chi_\\ell(\\widetilde q).
\\end{aligned}
$$

したがって、二つの境界条件 $A,B$ をもつannulusをclosed-string channelで切ると

$$
Z_{AB}^{\\mathrm{closed}}(\\widetilde q)
=
\\sum_\\ell
(B_A{}^\\ell)^*B_B{}^\\ell
\\chi_\\ell(\\widetilde q)
\\tag{general-closed-annulus}
$$

となる。同じannulusを直交する方向に切れば、両端に $A,B$ をもつopen stringのthermal traceでなければならない：

$$
Z_{AB}^{\\mathrm{open}}(q)
=
\\operatorname{Tr}_{\\mathcal H_{AB}}
q^{L_0-c/24}
=
\\sum_r n_{AB}{}^r\\chi_r(q),
\\qquad
n_{AB}{}^r\\in\\mathbb Z_{\\geq0}.
\\tag{general-open-annulus}
$$

ここで非負整数 $n_{AB}{}^r$ は、open-string Hilbert空間に表現 $\\mathcal H_r$ が何個現れるかを数える。同じ世界面path integralの二つの量子化なので、両式はmodular変換で一致しなければならない。式 (6.9) を $z=u=0$ に特殊化した

$$
\\chi_\\ell(\\widetilde q)
=\\sum_rS_{\\ell r}\\chi_r(q)
$$

をclosed-channel式へ代入すると、

$$
\\begin{aligned}
Z_{AB}
&=\\sum_\\ell(B_A{}^\\ell)^*B_B{}^\\ell
\\sum_rS_{\\ell r}\\chi_r(q)\\\\
&=\\sum_r\\left[\\sum_\\ell(B_A{}^\\ell)^*B_B{}^\\ell S_{\\ell r}\\right]\\chi_r(q).
\\end{aligned}
$$

sectorの和は有限なので順序を交換できる。open側の各characterの係数と比較すると、括弧内が $n_{AB}{}^r$ に等しくなり、非負整数条件を課す。


</details>

Ishibashi条件が各sector内でcurrent gluingを満たす局所条件であるのに対し、[Cardy condition](/6-2#ref-cardy-condition)はそれらの線形結合が実在するopen-string Hilbert空間を生むことを要求する大域的整合条件である。

### 3.2 $SU(2)_k$におけるCardy解

<!-- reference: cardy-coefficients -->

非負整数という条件だけを眺めても、まだ係数の具体的な選び方は分からない。まず、基準境界 $0$ との間にsector $\\mathcal H_J$ を一つだけもつ境界 $J$ を構成しよう。すなわち $n_{00}{}^r=\\delta_{0r}$、$n_{0J}{}^r=\\delta_{Jr}$ と選ぶ。

この模型の $S$ は実対称でユニタリなので $S^{-1}=S$、従って $\\sum_rS_{\\ell r}S_{rj}=\\delta_{\\ell j}$ である。Cardy条件に $S_{rj}$ を掛けて $r$ を足せば、closed側のsector $j$ の係数を取り出せる。この逆変換から

$$
|B_0{}^j|^2=S_{0j},\\qquad (B_0{}^j)^*B_J{}^j=S_{Jj}.
$$

許容範囲では $S_{0j}>0$ であり、Ishibashi状態の位相を選んで $B_0{}^j=\\sqrt{S_{0j}}$ とできる。第二式をこれで割れば

$$
\\boxed{
B_J{}^j=\\frac{S_{Jj}}{\\sqrt{S_{0j}}}
}
\\tag{Cardy-coefficients}
$$



<!-- /reference -->

となる。基準境界との間では $\\sum_jS_{Jj}S_{jr}=\\delta_{Jr}$ だから、選んだ一コピーのスペクトルが戻る。残る確認は、基準境界以外の二境界でも開弦の状態数が非負整数になるかである。同じ係数をCardy条件へ代入すると

$$
n_{IJ}{}^r=\\sum_j\\frac{S_{Ij}S_{Jj}S_{rj}}{S_{0j}}=N_{IJ}{}^r
$$

となる。最後の等号は6.1のVerlinde公式であり、$S$ が実対称なので出力添字の複素共役も同じ値になる。closed側の結合から作った量が、chiral fusionで数えた多重度に一致し、どの組でもCardy conditionを満たす。これで二つの境界 $I,J$ を指定すれば、その間に各sectorが何コピー現れるかを計算できる。gluingだけでは自由だった結合係数が、open側の状態数と結び付いた。ここで構成したのは指定した対角模型・trivial gluing・基準境界をもつCardy解であり、annulusの一致だけで、あらゆる境界条件の分類や境界相関関数のsewingまで済んだとはしない。

<details>
<summary>基準境界との間のスペクトルからCardy係数を決める</summary>

まず $0$--$0$ 間には真空sectorだけを置き、$n_{00}{}^r=\\delta_{0r}$ と要求する。Cardy条件に $S^{-1}=S$ を作用させると

$$
\\sum_r n_{00}{}^r S_{rj}
=\\sum_{r,\\ell}|B_0{}^\\ell|^2S_{\\ell r}S_{rj}
=|B_0{}^j|^2=S_{0j}.
$$

\`\`\`math-hint
右辺の和では $S^2=1$ を使って $\\ell=j$ に絞る。左辺は、基準境界間に真空だけを置く条件で $r=0$ に絞る。

$$
\\sum_r S_{\\ell r}S_{rj}=\\delta_{\\ell j},\\qquad
\\sum_r\\delta_{0r}S_{rj}=S_{0j}.
$$

したがって $|B_0{}^j|^2=S_{0j}$ が得られる。
\`\`\`

各Ishibashi状態の位相を選んで $B_0{}^j=\\sqrt{S_{0j}}>0$ と置ける。次に $n_{0J}{}^r=\\delta_{Jr}$ を同様に逆変換すると

\`\`\`math-steps
lhs: (B_0{}^j)^*B_J{}^j
note: Cardy条件に $S_{rj}$ を掛けて $r$ について足す。この模型では $S$ が実対称で $S^2=1$ なので、閉弦側のsector $j$ が取り出される。
popup-math: \\sum_r n_{0J}{}^rS_{rj}=\\sum_\\ell (B_0{}^\\ell)^*B_J{}^\\ell\\underbrace{\\sum_rS_{\\ell r}S_{rj}}_{\\delta_{\\ell j}}=(B_0{}^j)^*B_J{}^j
part expression: \\sum_r n_{0J}{}^r S_{rj}
---
note: 基準境界との間にはsector $J$ だけを一つ置いたので、$n_{0J}{}^r=\\delta_{Jr}$ を代入する。
popup-math: \\sum_r\\delta_{Jr}S_{rj}=S_{Jj}
part expression: S_{Jj}
\`\`\`

\`\`\`math-hint
基準境界について得た $(B_0{}^j)^*B_J{}^j=S_{Jj}$ を使う。位相を選んで $B_0{}^j=\\sqrt{S_{0j}}>0$ としたため、複素共役も同じ正の数になる。

$$
\\sqrt{S_{0j}}\\,B_J{}^j=S_{Jj}\\quad\\Longrightarrow\\quad B_J{}^j=\\frac{S_{Jj}}{\\sqrt{S_{0j}}}.
$$

許される $0\\le j\\le k/2$ では $0<\\pi(2j+1)/(k+2)<\\pi$ なので、$S_{0j}$ の正弦は正であり、この割り算ができる。
\`\`\`

左辺の $B_0{}^j$ で割れば $B_J{}^j=S_{Jj}/\\sqrt{S_{0j}}$ を得る。これはこのスペクトルを備えた境界の集合を構成する方法であり、任意のgluingを許した境界条件すべての分類を主張しているわけではない。

</details>

<details>
<summary>Cardy係数を代入し、Verlinde公式と同じ和になることを確かめる</summary>

$SU(2)_k$ では $S$ が実数で、すべての表現が自己共役なので、これを式 (Cardy-condition) に代入すると

$$
\\begin{aligned}
n_{IJ}{}^r
&=
\\sum_j
\\frac{S_{Ij}S_{Jj}S_{rj}}{S_{0j}}\\\\
&=N_{IJ}{}^r
\\end{aligned}
\\tag{Cardy-Verlinde-local}
$$

となる。第二行はVerlinde公式である。従ってopen-channelの係数は自動的にfusion multiplicityとなり、非負整数条件を満たす。


代入の際は

$$
(B_I{}^j)^*B_J{}^jS_{jr}
=\\frac{S_{Ij}^*}{\\sqrt{S_{0j}}}\\frac{S_{Jj}}{\\sqrt{S_{0j}}}S_{jr}
=\\frac{S_{Ij}S_{Jj}S_{rj}}{S_{0j}}.
$$

最後に $S_{Ij}^*=S_{Ij}$ と対称性 $S_{jr}=S_{rj}$ を使った。$S_{0j}>0$ なので平方根には正の実数を選べる。この模型では全表現が自己共役なため、Verlinde公式の出力添字に付く複素共役も値を変えない。

</details>

この解では、最大対称性とtrivial gluingをもつ基本的なCardy境界条件は $k+1$ 個あり、affine Lie algebraのsectorと同じように

$$
J=0,\\frac12,\\ldots,\\frac{k}{2}
$$

でラベルされる。一般式 (4.80) と$\\widehat{\\mathfrak{su}}(2)_k$ のmodular $S$-matrix (6.9) を組み合わせると、

$$
\\boxed{
\\|J\\rangle\\rangle
=
\\sum_{j=0}^{k/2}B_J{}^j|j\\rangle\\rangle
}
$$

ただし

$$
B_J{}^j
=
\\left(\\frac{2}{k+2}\\right)^{1/4}
\\frac{
\\sin\\!\\left(\\frac{\\pi(2j+1)(2J+1)}{k+2}\\right)
}{
\\sin\\!\\left(\\frac{\\pi(2j+1)}{k+2}\\right)^{1/2}
}
\\tag{6.16}
$$

を得る。

<details>
<summary>正弦行列を代入し、式 (6.16) の四乗根を求める</summary>

$A:=2/(k+2)$、$x_j:=\\pi(2j+1)/(k+2)$ と一時的に書けば

$$
S_{Jj}=A^{1/2}\\sin((2J+1)x_j),\\qquad S_{0j}=A^{1/2}\\sin x_j.
$$

$0<x_j<\\pi$ より $\\sin x_j>0$ である。したがって

$$
\\begin{aligned}
B_J{}^j
&=\\frac{A^{1/2}\\sin((2J+1)x_j)}{(A^{1/2}\\sin x_j)^{1/2}}\\\\
&=\\frac{A^{1/2}}{A^{1/4}}
\\frac{\\sin((2J+1)x_j)}{(\\sin x_j)^{1/2}}\\\\
&=A^{1/4}\\frac{\\sin((2J+1)x_j)}{(\\sin x_j)^{1/2}}.
\\end{aligned}
$$

これが式 (6.16) である。分子の正弦は負になることがあるが、境界状態の展開係数に非負性は要求しない。非負整数性を課す対象はannulusを変換した後の重複度 $n_{IJ}{}^r$ である。

</details>

境界がbulkへ及ぼす影響は、bulk場を一つだけ挿入した期待値にも現れる。平面では位置を選ぶものがないが、境界があるとそこからの距離が意味をもち、非自明なone-point functionが許される。状態・場対応を使えば、これは挿入したbulk状態と境界状態の重なりである。ground-state bulk場 (6.15) については

$$
\\boxed{
\\left\\langle
\\varphi_{j,j}^{mn}(z,\\bar z)
\\right\\rangle_J
=B_J{}^j\\frac{\\delta^{m,n}}{|z-\\bar z|^{2h_j}}
}
\\tag{6.17}
$$

となる。これは真空振幅で割る前のdisk one-point functionであり、$\\langle\\mathbf1\\rangle_J=B_J{}^0$ の規格化を使う。ここでも $h_j=j(j+1)/(k+2)$ である。境界に沿う並進対称性により期待値は高さ $y=\\operatorname{Im}z$ だけに依存し、全ウェイト $2h_j$ のスケール則により $(2y)^{-2h_j}=|z-\\bar z|^{-2h_j}$ になる。内部対称性は左右成分を結ぶ行列が全スピン生成子と可換であることを要求する。既約表現上のそのような行列は恒等行列の定数倍なので、双対基底では $\\delta^{mn}$ が残る。最後の定数は、挿入したground stateを境界状態の $j$ 成分に重ねた係数 $B_J{}^j$ である。

恒等場の期待値を1にしたい場合はdisk真空振幅で割り、係数を $B_J{}^j/B_J{}^0$ に置き換える。次節で幾何を読み取る際も、どちらの規格化を使うかを区別する。

<details>
<summary>共形Ward恒等式と零モード対称性からone-point functionを求める</summary>

上付き添字 $m,n=-j,-j+1,\\ldots,j$ は、tensor multiplet $\\varphi_{j,j}$ の左右の成分を指定する。本文で選んだ右側の双対基底では、trivial gluingに対応する不変tensorは $U_{jj}^{mn}=\\delta^{m,n}$ と書ける。

上半平面を $z=x+iy$（$y>0$）と書く。境界は実軸であり、並進 $x\\mapsto x+a$ を保つのでone-point functionは $x$ に依存しない。場の左右のウェイトはともに $h_j$ である。拡大変換 $z\\mapsto sz$（$s>0$）による共変性は

$$
F^{mn}(sy)=s^{-2h_j}F^{mn}(y)
$$

だから $F^{mn}(y)=C^{mn}(2y)^{-2h_j}$ と書ける。$2y=|z-\\bar z|$ を選んだ定数2は、像の点 $\\bar z$ までの距離に合わせる規約で、定数係数へ吸収できる。

残る実軸を保つ特殊共形変換も確認できる。無限小変換に対するWard演算子は

$$
z^2\\partial_z+\\bar z^2\\partial_{\\bar z}+2h_jz+2h_j\\bar z.
$$

$F=C(z-\\bar z)^{-2h_j}$ の形へ作用させると、微分項は $-2h_j(z+\\bar z)F$、残りは $+2h_j(z+\\bar z)F$ となって相殺する。上半平面内の位相を係数へ含めれば、絶対値で書いた式と同じ距離依存である。

内部対称性については、右表現を左表現の双対として対応させた基底で $C=(C^{mn})$ を線形写像と読む。保存された対角 $SU(2)$ のWard恒等式は、任意の生成子 $t^a$ に対して

$$
t^aC-Ct^a=0
$$

となる。既約スピン $j$ 表現上で全生成子と可換な写像は恒等写像の定数倍なので $C^{mn}=C_j\\delta^{mn}$ である。この $\\delta^{mn}$ は双対表現との同一視を含む規約である。左右をともに同じ磁気量子数の基底として扱ったときのsinglet係数を、そのまま $\\delta^{mn}$ としているわけではない。

最後にstate–operator対応でbulk primaryを境界状態に重ねる。別sectorとの重なりは零であり、$j$ sectorのIshibashi状態のground-state成分を単位のintertwinerとして規格化しているため、残る係数は $C_j=B_J{}^j$ になる。したがって式 (6.16) を距離因子へ掛けると式 (6.17) を得る。

ここでのone-point functionは境界状態の重なりと同じ規格化である。実際、$j=0$ の恒等場を入れると $\\langle\\mathbf1\\rangle_J=B_J{}^0$ となる。恒等場の期待値を1に規格化したdisk相関関数を使う場合は、式 (6.17) 全体をdiskの真空振幅 $B_J{}^0$ で割る。

</details>

例えば $k=2$ では、fusion則の $0\\star0=1\\star1=0$ と $n_{IJ}{}^r=N_{IJ}{}^r$ から、境界 $0$ と $1$ の自己スペクトルはともに $\\mathcal H_0$ になる。それでもbulkへの結合は異なる。 $j=\\frac12$ を式 (6.17) に入れると、境界 $J=0$ と $J=1$ では正弦の符号が逆になる。したがって、このbulk場の非零なone-point関数も逆符号になる。境界上の励起のスペクトルが同じでも、bulkへの結合は異なり、この二つを区別できる。

<details>
<summary>計算：境界 $0$ と $1$ のbulk結合を比較する</summary>

6.1節の $k=2$ の $S$-matrixと式 (6.17) の $B_J{}^j=S_{Jj}/\\sqrt{S_{0j}}$ を使うと、

| 境界 $J$ | 両端が同じ境界の開弦スペクトル | $B_J{}^0$ | $B_J{}^{1/2}$ |
|---|---|---|---|
| $0$ | $\\mathcal H_0$ | $2^{-1/2}$ | $2^{-1/4}$ |
| $1$ | $\\mathcal H_0$ | $2^{-1/2}$ | $-2^{-1/4}$ |

となる。両境界を同じbulk場の規格化で比較すると、$j=\\frac12$ のone-point関数の非零な成分は符号が逆になる。disk真空振幅 $B_J{}^0$ で割って規格化しても、この相対符号は残る。bulk場全体の符号の取り方を変えれば二つの値はともに反転するが、両境界で逆符号という関係は保たれる。

</details>

### 3.3 inner automorphismでgluingを回す

左右のcurrentの対応を、固定した $SU(2)$ 回転だけずらすこともできる。具体的には、Lie代数の元 $X$ に対し $\\operatorname{Ad}_g(X):=gXg^{-1}$ と定め、gluingを

$$
\\left(J_n^a+\\Omega_g(\\bar J_{-n}^a)\\right)\\|B\\rangle\\rangle_{\\Omega_g}=0,
\\qquad \\Omega_g=\\operatorname{Ad}_g
$$

とする。この回転はcurrentの交換関係とSugawaraの二次式を保つので、同じbulk理論の中で共形対称性を保つ境界を作れる。以後この回転をtwistと呼ぶ。ここでの $g$ は固定した回転の群要素であり、6.1節の位置に依存する場 $g(z,\\bar z)$ とは区別する。任意の $SU(2)$ 回転は、左右のcurrentを同じ大域的回転で回すことにより、その軸を第3軸に合わせられる。実際、$g$ を $hgh^{-1}$ へ対角化すると、gluingも $J_n+g\\bar J_{-n}g^{-1}=0$ から $J'_n+(hgh^{-1})\\bar J'_{-n}(hgh^{-1})^{-1}=0$ へ変わる。これは同じ理論で軸を選び直したものである。

<details>
<summary>回転軸を第3軸へ合わせる共役変換</summary>

$SU(2)$ のCartan部分群は、第3軸まわりの回転からなる $U(1)$ 部分群である。基本表現では

$$
T=\\left\\{\\begin{pmatrix}e^{-i\\theta}&0\\\\0&e^{i\\theta}\\end{pmatrix}\\,\\middle|\\,\\theta\\in\\mathbb R\\right\\}
$$

と書ける。任意の $g\\in SU(2)$ はユニタリ行列なので対角化でき、行列式が1であることから二つの固有値は $e^{-i\\theta},e^{i\\theta}$ になる。固有ベクトルの位相を調整すれば、対角化する行列も $h\\in SU(2)$ に取れる。従って $g'=hgh^{-1}\\in T$ である。これは回転軸を第3軸へ合わせる操作に当たる。

この共役変換をgluingに適用するため、左右のカレントを同じ $h$ で回す。カレントをLie代数値でまとめて $J_n,\\bar J_n$ と書き、$J'_n=hJ_nh^{-1}$、$\\bar J'_n=h\\bar J_nh^{-1}$ とすると、

$$
h\\left(J_n+g\\bar J_{-n}g^{-1}\\right)h^{-1}
=J'_n+(hgh^{-1})\\bar J'_{-n}(hgh^{-1})^{-1}
=0.
$$

左右に共通するこの回転は、カレント代数とエネルギー運動量テンソルを保つ大域的対称性である。従って、一つのtwistを持つ境界を調べる際には、軸を第3軸に合わせた代表を使える。任意の軸での境界状態や場の成分は、最後に逆回転して復元できる。

</details>

この代表を各表現上の零モードの作用で書くと、実パラメータ $\\lambda$ を用いて

$$
g=e^{-i\\lambda J_0^3},
\\qquad
\\lambda\\in\\mathbb R
\\tag{6.18}
$$

と置ける。$\\lambda$ はこのカレントの規格化に合わせた回転パラメータである。複数のtwistを同時に比較する場合、共通の回転で対角化できるのは一般には一つであり、ほかのtwistとの相対的な軸の向きは残る。

twistされた境界状態は、元のCardy状態の右sectorを回転して作れる。$R_g:=e^{-i\\lambda\\bar J_0^3}$ と置き、

$$
\\boxed{
\\|J\\rangle\\rangle_{\\Omega_g}
:=R_g\\|J\\rangle\\rangle
=e^{-i\\lambda\\bar J_0^3}\\|J\\rangle\\rangle
}
$$

と定める。$R_g$ は左カレントと可換であり、右カレントには $\\Omega_g(\\bar J_{-n}^a)=R_g\\bar J_{-n}^aR_g^{-1}$ と作用する。そのため

$$
\\begin{aligned}
\\left(J_n^a+\\Omega_g(\\bar J_{-n}^a)\\right)R_g\\|J\\rangle\\rangle
&=R_g\\left(J_n^a+\\bar J_{-n}^a\\right)\\|J\\rangle\\rangle\\\\
&=0.
\\end{aligned}
$$

最後の等号は、元のCardy状態のgluing条件である。零モードによる回転はSugawaraのエネルギー運動量テンソルも保つので、回転後の状態も共形境界条件を満たす。

同じ状態は左sectorの回転でも表せる。元の状態に対する零モード条件 $(J_0^3+\\bar J_0^3)\\|J\\rangle\\rangle=0$ を指数化すると、

$$
e^{i\\lambda J_0^3}e^{i\\lambda\\bar J_0^3}\\|J\\rangle\\rangle
=\\|J\\rangle\\rangle.
$$

左右の零モードは可換なので、両辺に $e^{-i\\lambda\\bar J_0^3}$ を作用させれば

$$
\\boxed{
\\|J\\rangle\\rangle_{\\Omega_g}
=e^{i\\lambda J_0^3}\\|J\\rangle\\rangle
=e^{-i\\lambda\\bar J_0^3}\\|J\\rangle\\rangle
}
$$

を得る。次節では、この回転した境界状態どうしの重なりから開弦スペクトルを求める。

<details>
<summary>原著の式 (6.19)：Ishibashi状態の位相規約との対応</summary>

原著は各表現で、twistを実装する演算子が最高ウェイト状態を固定する規約を用いる。スピン規格化のCartan生成子を $H_0$ と書くと、$H_0|j;m\\rangle=m|j;m\\rangle$ である。$g=e^{-i\\phi H_0}$ に対し、全体位相を掛けた $V_{\\Omega_g}=e^{i\\phi q_j}g$ も同じ共役作用を与える。最高ウェイト状態を固定する条件は

$$
V_{\\Omega_g}|j;j\\rangle
=e^{i\\phi(q_j-j)}|j;j\\rangle
=|j;j\\rangle
$$

なので、すべての $\\phi$ に対してこれを満たす選択は $q_j=j$ である。一般の成分には $V_{\\Omega_g}|j;m\\rangle=e^{i\\phi(j-m)}|j;m\\rangle$ と作用する。

ノートの直交基底では $J_0^3=\\sqrt2H_0$ なので、同じ回転に対して $\\phi=\\sqrt2\\lambda$ である。原著の位相規約によるIshibashi状態とCardy係数は

$$
|j\\rangle\\rangle_{\\Omega_g}=e^{i\\phi j}R_g|j\\rangle\\rangle,
\\qquad
B_{\\Omega_gJ}{}^j=e^{-i\\phi j}B_J{}^j
\\tag{6.19}
$$

と書ける。従って、境界状態全体では

$$
\\sum_j B_{\\Omega_gJ}{}^j|j\\rangle\\rangle_{\\Omega_g}
=\\sum_j B_J{}^jR_g|j\\rangle\\rangle
=R_g\\|J\\rangle\\rangle
$$

となり、本文で直接構成したCardy状態に一致する。

</details>

## 4. annulusを二方向から切るとopen-string spectrumが出る

### 4.1 同じgluingを両端に置く場合

両端の境界 $I,J$ を指定して、開弦の励起をエネルギーごとに数えたい。基本となるのは6.1で求めた各sector $\\mathcal H_j$ のcharacterである。$q=e^{2\\pi i\\tau}$ とすると、一つのsectorのtraceは

$$
\\chi_j(q)=\\operatorname{Tr}_{\\mathcal H_j}q^{L_0-c/24}
$$

である。sectorの内部の励起はこの式にすべて含まれている。残る仕事は、どのsectorを何コピー使うかを決めることだ。

3.2節で、同じtrivial gluingをもつCardy境界間のコピー数は $n_{IJ}{}^j=N_{IJ}{}^j$ と求めた。各sectorは $L_0$ の作用で保たれ、直和上のtraceは各成分のtraceの和になる。従って状態空間を

$$
\\boxed{
\\mathcal H_{IJ}
=
\\bigoplus_{j=0}^{k/2}
N_{IJ}{}^j\\mathcal H_j
}
$$

と分解すれば、sector $j$ の各コピーが同じ $\\chi_j$ を一つずつ寄与する。それらを足して

$$
\\boxed{
Z_{IJ}(q)
=\\operatorname{Tr}_{\\mathcal H_{IJ}}q^{L_0-c/24}
=\\sum_{j=0}^{k/2}N_{IJ}{}^j\\,\\chi_j(q)
}
$$

を得る。例えば $k=2$ で $I=J=\\tfrac12$ なら、$\\tfrac12\\star\\tfrac12=0\\oplus1$ だから $\\mathcal H_{1/2,1/2}=\\mathcal H_0\\oplus\\mathcal H_1$、$Z_{1/2,1/2}=\\chi_0+\\chi_1$ となる。真空sectorだけでなく、スピン1のground stateとそのaffine descendantも数えられる。

このように、内部の励起を数えるcharacterを一度求めておけば、両端の境界を変える仕事はfusion係数による組合せに移る。トーラスの周期交換を記録した $S$ 行列が、Verlinde公式とCardy条件を通じて、境界条件 $I,J$ の間に存在する開弦の励起を決めている。

<details>
<summary>例：$k=2$ のopen-string spectrum</summary>

$k=2$ では、$I\\le J$ の組に対して次の状態空間が得られる。逆向きの組はfusionの対称性と、すべての表現が自己共役であることにより同型である。

| $(I,J)$ | $\\mathcal H_{IJ}$ |
|---|---|
| $(0,0)$ | $\\mathcal H_0$ |
| $(0,\\frac12)$ | $\\mathcal H_{1/2}$ |
| $(0,1)$ | $\\mathcal H_1$ |
| $(\\frac12,\\frac12)$ | $\\mathcal H_0\\oplus\\mathcal H_1$ |
| $(\\frac12,1)$ | $\\mathcal H_{1/2}$ |
| $(1,1)$ | $\\mathcal H_0$ |

例えば同じ $J=\\frac12$ 境界の上には、真空sectorだけでなく $j=1$ の境界励起も存在する。これは

$$
\\frac12\\star\\frac12=0\\oplus1
$$

を、開弦スペクトルとして読んだものである。

</details>

先ほどのone-point関数の例と、このfusion則を照合する。$k=2$ では $0\\star0=1\\star1=0$ なので、両端を境界 $0$ に置いた場合と、両端を境界 $1$ に置いた場合の開弦スペクトルはともに $\\mathcal H_0$ になる。一方、式 (6.17) で比べたbulk場への応答は逆符号だった。さらに $0$--$1$ 間には $\\mathcal H_1$ が現れるので、両端を異なる境界にした開弦からも違いが分かる。この二つのスペクトルが一致しても、ほかの境界やbulkとの関係まで一致するとは限らない。



<details>
<summary>原著のCardy公式との添字の対応</summary>

一般のCardy公式で境界を $\\alpha,\\beta$、開弦sectorを $i$ と書くと、分配関数は

$$
Z_{\\alpha\\beta}(q)
=\\sum_iN_{\\alpha i^+}{}^\\beta\\,\\chi_i(q)
=\\sum_iN_{i\\alpha}{}^\\beta\\,\\chi_i(q)
$$

となる。二つ目の等号では、全 $SU(2)$ 表現の自己共役性 $i^+=i$ とfusion積の可換性を使った。さらに $SU(2)_k$ の $S$ 行列は実数なので、Verlinde公式の三つのラベルは対称に現れ、$N_{i\\alpha}{}^\\beta=N_{\\alpha\\beta}{}^i$ である。$\\alpha=I,\\beta=J,i=j$ と置けば、本文で状態空間のtraceから求めた $Z_{IJ}$ と一致する。

</details>

このcharacter分解をchannelの短距離・長距離対応として読むときは、内部RCFTの共形固有値と時空質量を区別する必要がある。[open UVをclosed側の質量ゼロ交換と呼べるか](#note-annulus-uv-ir)

<details id="note-annulus-uv-ir">
<summary>open側の短い時間は、closed側でどう見えるか？</summary>

時間方向を交換すると、open側の短い伝播はclosed側の長い伝播へ移る。長い伝播では低い共形エネルギーの状態が優勢になる。

characterに合わせたopen側の無次元時間を $t$ とすると、closed側では $1/t$ になる。したがって $t\\to0$ はclosed側の長い円筒に対応する。伝播因子が高いエネルギーの状態を抑えるため、境界と結合する最も低い状態が支配する。この模型では $B_J{}^0>0$ なので、真空sectorが両境界へ結合する。

ここで測っているのは $SU(2)_k$ CFTの共形エネルギーである。これを弦の時空質量と結びつけるには、時空の他の方向を表す場も含めた弦理論全体の状態条件が必要になる。この節のannulus計算だけで、支配的な交換を「質量ゼロの弦」と決めることはできない。

$$
t\\longrightarrow0\\quad\\Longleftrightarrow\\quad \\widetilde t=1/t\\longrightarrow\\infty
$$

参照：6.2.3 · annulusのopen–closed channel交換

</details>

次に境界ラベルを固定し、左右のcurrentをつなぐ回転を変えたときの開弦スペクトルを求める。両端の共通回転と相対回転を分けて計算する。まず共通の回転では、closed-channel overlapのbra側に逆回転、ket側に回転が入り、伝播演算子を挟んで打ち消し合う。回転は $L_0$ と可換なのでenergy gradingも保たれる。したがって両端を同じ $\\Omega_g$ でtwistしても

$$
Z_{(\\Omega_g I)(\\Omega_g J)}(q)
=
\\sum_jN_{IJ}{}^j\\chi_j(q).
$$

<details>
<summary>両端を同じ回転で変えてもannulusが不変なことを演算子で確かめる</summary>

$R_g:=e^{-i\\lambda\\bar J_0^3}$ と書く。$\\bar J_0^3$ はHermitianなので $R_g^\\dagger=R_g^{-1}$。また $[\\bar L_0,\\bar J_0^3]=0$ であり、左sectorの $L_0$ とも可換だから、$[R_g,\\widetilde H_c]=0$ である。よって

$$
\\begin{aligned}
{}_{\\Omega_g}\\!\\langle\\langle I\\|
\\widetilde q^{\\widetilde H_c}\\|J\\rangle\\rangle_{\\Omega_g}
&=\\langle\\langle I\\|R_g^\\dagger\\widetilde q^{\\widetilde H_c}R_g\\|J\\rangle\\rangle\\\\
&=\\langle\\langle I\\|\\widetilde q^{\\widetilde H_c}R_g^{-1}R_g\\|J\\rangle\\rangle\\\\
&=\\langle\\langle I\\|\\widetilde q^{\\widetilde H_c}\\|J\\rangle\\rangle.
\\end{aligned}
$$

片側だけを回した場合は $R_g^{-1}R_g$ の組が作れないため、次節の電荷挿入が残る。

</details>

### 4.2 両端のgluingが違う場合

片端が $\\mathrm{id}$、他端が $\\Omega_g$ なら、overlapに一つの回転演算子が残る。twistされた境界をbra側に置くと、その回転は $e^{+i\\lambda\\bar J_0^3}$ であり、gluingの $\\bar J_0^3=-J_0^3$ を使えば左側の電荷挿入 $e^{-i\\lambda J_0^3}$ になる。 ket側をtwistすると挿入の符号は逆になるが、各gradeは $SU(2)$ の有限次元表現へ分かれ、電荷 $m$ と $-m$ を同じ重複度で持つ。このためcharged traceは $\\lambda\\mapsto-\\lambda$ に不変であり、以下のbra側の計算を、式 (6.20) のket側がtwistされた添字順へ移しても分配関数は同じになる。

$a:=\\lambda/(2\\pi)$ と置く。電荷挿入を含むcharacterを

$$
\\chi_j(v,\\tau):=\\operatorname{Tr}_{\\mathcal H_j}
q^{L_0-c/24}e^{-2\\pi ivJ_0^3},\\qquad q=e^{2\\pi i\\tau}
$$

と書く。$v$ は電荷に掛けるパラメータで、場を挿入する位置ではない。closed側では $v=a$ である。6.1のcharged-character変換は、中心項の規格化 $[J_n^3,J_m^3]=kn\\delta_{n+m,0}$ に対して

$$
\\chi_j(a,-1/\\tau)=q^{ka^2/2}\\sum_rS_{jr}\\chi_r(a\\tau,\\tau)
$$

となる。右辺で $e^{-2\\pi i(a\\tau)J_0^3}=q^{-aJ_0^3}$ と置き換えると、共通因子も同じtraceへ入れられ、指数は $L_0-aJ_0^3+ka^2/2-c/24$ になる。sectorを混ぜる $S$ は元と同じなので、Cardy条件の和も同じ $N_{IJ}{}^r$ を与える。

<details>
<summary>式 (6.9) のcharged-character変換を用いた式 (6.20) の導出</summary>

twisted境界をbra側に置き、open側のmodulusを $\\tau$、closed側を $\\widetilde\\tau=-1/\\tau$ とする。$q=e^{2\\pi i\\tau}$、$\\widetilde q=e^{2\\pi i\\widetilde\\tau}$ と書く。回転パラメータを $a:=\\lambda/(2\\pi)$ と置けば、charged characterに挿入する回転は $e^{-2\\pi iaJ_0^3}$ である。

まずclosed側の振幅を求める。境界状態をbraにすると、右sectorの回転は $e^{+i\\lambda\\bar J_0^3}$ になる。一方、Ishibashi条件の零モード部分は $(J_0^3+\\bar J_0^3)|j\\rangle\\rangle=0$ なので、

$$
e^{+i\\lambda\\bar J_0^3}|j\\rangle\\rangle
=e^{-i\\lambda J_0^3}|j\\rangle\\rangle.
$$

左右の零モードは可換であり、この等式は指数を冪級数展開して各次数にgluing条件を使えば従う。伝播演算子 $\\widetilde H_c=\\tfrac12(L_0+\\bar L_0-c/12)$ は、左右のlevelが等しいIshibashi状態の重なりを一つのcharacterにする。従って

$$
\\begin{aligned}
Z^{\\mathrm{closed}}
&={}_{\\Omega_g}\\!\\langle\\langle J\\|
\\widetilde q^{\\widetilde H_c}\\|I\\rangle\\rangle\\\\
&=\\sum_j(B_J{}^j)^*B_I{}^j
\\operatorname{Tr}_{\\mathcal H_j}
\\widetilde q^{L_0-c/24}e^{-2\\pi iaJ_0^3}\\\\
&=\\sum_j(B_J{}^j)^*B_I{}^j
\\chi_j(a,-1/\\tau,0).
\\end{aligned}
$$

$B_I{}^j,B_J{}^j$ は、共通のgluingを持つ元の境界状態の係数である。両境界は既にCardy conditionを満たしているので、

$$
\\sum_j(B_J{}^j)^*B_I{}^jS_{jr}=n_{JI}{}^r
$$

が成り立つ。右辺は元のannulusの開弦多重度である。6.1節のcharged characterの定義と変換則は

$$
\\begin{aligned}
\\chi_j(z,\\tau,u)
&=e^{-2\\pi iku}\\operatorname{Tr}_{\\mathcal H_j}
q^{L_0-c/24}e^{-2\\pi izJ_0^3},\\\\
\\chi_j\\!\\left(\\frac z\\tau,-\\frac1\\tau,u+\\frac{z^2}{2\\tau}\\right)
&=\\sum_rS_{jr}\\chi_r(z,\\tau,u).
\\end{aligned}
$$

$J^3$ は中心項 $[J_n^3,J_m^3]=kn\\delta_{n+m,0}$ をもつ直交基底の成分であり、grade 0の電荷は $\\sqrt2m$ である。変換則の二次項はこの規格化に対応する。

closed側の引数 $(a,-1/\\tau,0)$ に合わせる条件は

$$
\\frac z\\tau=a,\\qquad u+\\frac{z^2}{2\\tau}=0
\\quad\\Longrightarrow\\quad
z=a\\tau,\\qquad u=-\\frac{a^2\\tau}{2}.
$$

従って、補助変数 $u$ を消去した変換則は

$$
\\boxed{
\\chi_j(a,-1/\\tau,0)
=q^{ka^2/2}\\sum_rS_{jr}\\chi_r(a\\tau,\\tau,0).
}
$$

共通因子は $e^{-2\\pi iku}=e^{\\pi ika^2\\tau}=q^{ka^2/2}$ から出る。同時に、電荷の挿入は $e^{-2\\pi i(a\\tau)J_0^3}=q^{-aJ_0^3}$ となる。$[L_0,J_0^3]=0$ を使えば、この二つの効果を一つのtraceにまとめられる：

$$
q^{ka^2/2}\\chi_r(a\\tau,\\tau,0)
=\\operatorname{Tr}_{\\mathcal H_r}
q^{L_0-aJ_0^3+ka^2/2-c/24}.
$$

charged characterのmodular変換に現れる $S_{jr}$ は、電荷を挿入しない場合と同じである。従って元の境界が満たすCardy conditionをそのまま使い、

$$
\\begin{aligned}
Z
&=\\sum_r\\underbrace{\\left(\\sum_j
(B_J{}^j)^*B_I{}^jS_{jr}\\right)}_{n_{JI}{}^r}
\\operatorname{Tr}_{\\mathcal H_r}
q^{L_0-aJ_0^3+ka^2/2-c/24}\\\\
&=\\sum_rn_{JI}{}^r\\operatorname{Tr}_{\\mathcal H_r}
q^{L_0-aJ_0^3+ka^2/2-c/24}
\\end{aligned}
$$

を得る。相対twistは元の開弦多重度を保ち、各表現内のエネルギーを $-aJ_0^3+ka^2/2$ だけ変える。この節で選んだ $SU(2)_k$ のCardy境界では、既に $n_{JI}{}^r=N_{JI}{}^r=N_{IJ}{}^r$ と求めてある。これと $a=\\lambda/(2\\pi)$ を用いれば式 (6.20) になる。

</details>

元のannulusの多重度 $N_{IJ}{}^j$ を用いると、相対twistを含む分配関数は

$$
\\boxed{
Z_{(\\mathrm{id}\\,I)(\\Omega_gJ)}(q)
=
\\sum_jN_{IJ}{}^j
\\operatorname{Tr}_{\\mathcal H_j}
q^{
L_0
-\\frac{\\lambda}{2\\pi}J_0^3
+\\frac{k\\lambda^2}{8\\pi^2}
-\\frac{c}{24}
}
}
\\tag{6.20}
$$

を得る。線形項は、相対回転に応じて $J_0^3$ 電荷ごとに生じるenergy shiftを表す。二次項は、affine代数の中心項に由来する一様なshiftである。これはopen-string traceであるが、$\\lambda\\ne0$ では通常のspecialised character $\\chi_j(\\tau)$ の和ではない。二つの端点で保存するcurrentの組み合わせが異なるため、open stringは相対twistを感じるからである。

例えば $k=2,\\ I=J=\\frac12$ の開弦には、$h_1=\\frac12$ にスピン $1$ の三成分がある。式 (6.20) に $J_0^3=\\sqrt2m$ を代入すると、共通の $-c/24$ を除いた各成分の共形エネルギーは

$$
h_m(\\lambda)=\\frac12-\\frac{\\sqrt2m}{2\\pi}\\lambda+\\frac{\\lambda^2}{4\\pi^2},\\qquad m=-1,0,1.
$$

小さな相対twistを加えると、零で重なっていた三成分が回転軸方向の電荷に応じて分かれる。正の $\\lambda$ では $m=1$ の成分は下がり、$m=-1$ は上がり、$m=0$ は共通の二次項だけ移動する。両端を一緒に回した場合には分裂は生じない。

![相対twistが零のとき共形エネルギー二分の一で重なる三成分が、正の相対twistで電荷に応じて上・中央・下へ分かれる。両端の共通回転では三成分は重なったままである。](/diagrams/relative-twist.svg)

式 (6.20) で $\\lambda$ の符号を反転すると、電荷に比例する線形項の符号だけが変わる。下がる成分と上がる成分は入れ替わり、三成分に共通する二次項は同じなので、平均エネルギーの移動は変わらない。

<details>
<summary>スピン $1$ の三成分のエネルギーを読む</summary>

式 (6.20) に $k=2$ と $J_0^3=\\sqrt2m$ を代入し、共通のCasimir項 $-c/24$ を除いた共形エネルギーを $h_m(\\lambda)$ と書くと

$$
h_m(\\lambda)=\\frac12-\\frac{\\sqrt2m}{2\\pi}\\lambda+\\frac{\\lambda^2}{4\\pi^2},
\\qquad m=-1,0,1.
$$

図は $\\lambda=0$ の三成分を小さな $\\lambda$ まで追ったものである。隣り合う成分の間隔は $\\sqrt2\\lambda/(2\\pi)$、三成分の平均は $\\frac12+\\lambda^2/(4\\pi^2)$ になる。線形項が電荷による分裂を、二次項が全体の移動を担っている。

</details>

## 5. boundary OPE：fusionで許し、$F$ で結合する

開弦スペクトルから境界場の種類が分かったので、次にそれらのOPEを求める。ここではすべての境界で共通のgluing $\\Omega=\\mathrm{id}$ を選ぶ。

### 5.1 境界場は開弦状態である

境界上の一点で境界条件を変えると、その点の周りの小さな半円の両端には異なる境界条件 $I,J$ が付く。この半円上の状態は、両端に $I,J$ をもつ区間上の状態、すなわち $\\mathcal H_{IJ}$ の開弦状態である。半円を縮めて点の挿入と見るのが境界の状態・場対応である。$I=J$ なら、その境界の上にある通常の局所励起を表す。

境界で左右のcurrentを結んだため、境界の励起は一組のchiral代数で整理される。bulk場の $(m,n)$ と異なり、ground-state境界場の磁気量子数は一つでよい。$\\mathcal H_j$ のground state $|j;m\\rangle$ に対応するVirasoro primary境界場を

$$
\\boxed{
\\psi_{j,m}^{IJ}(x)
:=
\\Psi\\!\\left(|j;m\\rangle;x\\right),
\\qquad
N_{IJ}{}^j=1,
\\qquad
m=-j,\\ldots,j
}
\\tag{6.21}
$$

と書く。ここで上付き $IJ$ は、実軸上でその挿入点を右から左へ横切ると境界条件が $I$ から $J$ へ変わることを表す。

$x_1>x_2$ に二つの場を置くと、境界条件は $x>x_1$ で $I$、$x_2<x<x_1$ で $J$、$x<x_2$ で $K$ となる。右から左へたどると

$$
I\\xrightarrow{\\ \\psi_i^{IJ}\\ }J
\\xrightarrow{\\ \\psi_j^{JK}\\ }K.
$$

<!-- reference: boundary-ope -->

短距離で二つを融合すると、結果は境界条件を $I$ から $K$ へ変える場でなければならない。$x_1>x_2$ とし、ground-state multipletについて

$$
\\boxed{
\\begin{aligned}
\\psi_{i,m}^{IJ}(x_1)\\psi_{j,p}^{JK}(x_2)
\\sim
\\sum_{r,n}
&(x_1-x_2)^{h_r-h_i-h_j}
C_{ijr}^{IJK}\\\\
&\\times
\\begin{bmatrix}
i&j&r\\\\
m&p&n
\\end{bmatrix}
\\psi_{r,n}^{IK}(x_2)
+\\text{descendants}.
\\end{aligned}
}
\\tag{6.22}
$$

座標差の指数を $\\alpha$ とすると、拡大 $x\\mapsto\\rho x$ に対する両辺の因子が $\\rho^{-h_i-h_j}=\\rho^{\\alpha-h_r}$ なので $\\alpha=h_r-h_i-h_j$ になる。境界場は一つのchiral代数に属するため、bulkの全ウェイト $2h_j$ ではなく $h_j$ を使う。磁気量子数への依存はbulkの場合と同じ零モードのWard恒等式からClebsch--Gordan係数となる。出力成分 $n$ は $-r,-r+1,\\ldots,r$ を走り、$n=m+p$ 以外は零になる。許される $r$ は同時に

$$
N_{ij}{}^r=1,
\\qquad
N_{IK}{}^r=1
$$

を満たさなければならない。前者は二つの場のchiral fusion、後者は出力となる $I$--$K$ open-string sectorの存在条件である。

<!-- /reference -->

<details>
<summary>導出：座標の冪、磁気量子数、許される出力channel</summary>

境界を保つ拡大 $x\\mapsto\\rho x$（$\\rho>0$）のもとで、共形ウェイト $h$ の場には $\\rho^{-h}$ が掛かる。式 (6.22) の右辺の座標差を $(x_1-x_2)^\\alpha$ と置くと、左辺の拡大係数は $\\rho^{-h_i-h_j}$、右辺は $\\rho^{\\alpha-h_r}$ である。両者を一致させれば

$$
\\alpha-h_r=-h_i-h_j,
\\qquad \\alpha=h_r-h_i-h_j.
$$

これはprimary出力の先頭項である。出力場に微分や負モードを作用させたdescendantは共形ウェイトが上がるため、対応する座標差の次数も上がる。

磁気量子数への依存は、零モードが生成する $SU(2)$ の対称性から決まる。スピン $i$ の有限次元表現を $V_i$ とし、OPEのスピン $r$ 部分を線形写像 $C:V_i\\otimes V_j\\to V_r$ と見なす。零モードのWard恒等式は

$$
t_r^a C=C(t_i^a\\otimes\\mathbf1+\\mathbf1\\otimes t_j^a)
$$

である。左辺は出力場を回転する操作、右辺は二つの入力場をそれぞれ回転してからOPEする操作である。

$C(|i,m\\rangle\\otimes|j,p\\rangle)=\\sum_n C_{mp}^{n}|r,n\\rangle$ と置く。$t^0|j,m\\rangle=m|j,m\\rangle$ を使ったWard恒等式は

$$
(n-m-p)C_{mp}^{n}=0
$$

となるため、非零の係数は $n=m+p$ を満たす。さらに $t^+|j,m\\rangle=\\sqrt{(j-m)(j+m+1)}|j,m+1\\rangle$ を代入すると

$$
\\begin{aligned}
\\sqrt{(r-n+1)(r+n)}\\,C_{mp}^{n-1}
={}&\\sqrt{(i-m)(i+m+1)}\\,C_{m+1,p}^{n}\\\\
&+\\sqrt{(j-p)(j+p+1)}\\,C_{m,p+1}^{n}.
\\end{aligned}
$$

範囲外の磁気量子数に対応する係数は零とする。この漸化関係と下降演算子の関係が、同じ $r$ の中の係数比を固定する。通常の $SU(2)$ のtensor積では各 $r$ の多重度が1なので、intertwinerは全体定数を除き一意であり、規格化したものがClebsch–Gordan係数である。その全体定数を $C_{ijr}^{IJK}$ にまとめている。

最後に、零モードだけが許すchannelと、アフィン理論が許すchannelを区別する。式 (6.22) では入力場が存在するために $N_{IJ}{}^i=N_{JK}{}^j=1$ が必要であり、出力については同時に

$$
\\begin{aligned}
|i-j|&\\le r\\le\\min(i+j,k-i-j),& i+j+r&\\in\\mathbb Z,\\\\
|I-K|&\\le r\\le\\min(I+K,k-I-K),& I+K+r&\\in\\mathbb Z
\\end{aligned}
$$

を満たす。第一行が二つのchiral場のfusion、第二行が $I$ と $K$ の間の開弦状態の存在条件である。一方だけを満たす $r$ はOPE出力にならない。

</details>

### 5.2 なぜ係数がfusing matrixになるのか

境界場の列 $I\\xrightarrow{\\ i\\ }J\\xrightarrow{\\ j\\ }K$ は、境界を順にたどると二つの結合 $I\\star i\\to J$、$J\\star j\\to K$ と読める。一方、二つの場を先にOPEすると、$i\\star j\\to r$、$I\\star r\\to K$ と読める。前者の途中にあるのは境界 $J$、後者の途中にあるのは出力場のスピン $r$ である。

どちらも同じ入力 $I,i,j$ から同じ出力 $K$ へ至る。違うのは途中の括り方なので、6.1の[fusing行列](/6-1#ref-fusing-matrix) $F$ によって二つのconformal block基底を結べる。その対応を並べると次のようになる。

| 結合の順序 | 最初の結合 | 次の結合 | 中間ラベル |
|---|---|---|---|
| 境界を順にたどる | $I\\star i\\to J$ | $J\\star j\\to K$ | 境界条件 $J$ |
| 場を先にOPEする | $i\\star j\\to r$ | $I\\star r\\to K$ | 出力場のスピン $r$ |

境界を順にたどる基底から、場を先にOPEする基底への変換を、本文のrecoupling規約で書くと

$$
\\left(F_K^{Iij}\\right)_{Jr}:=F_{Jr}\\begin{bmatrix}i&j\\\\I&K\\end{bmatrix}
$$

である。最初のtreeの存在条件は $N_{Ii}{}^JN_{Jj}{}^K=1$、二番目は $N_{ij}{}^rN_{Ir}{}^K=1$。この模型のfusion許容条件は三ラベルについて対称なので、これらは前節で指定した境界場とOPE出力の存在条件に一致する。

第一添字 $J$ は最初のtreeの中間辺、第二添字 $r$ はOPE後のtreeの中間辺を指定する。従って境界の列を与えれば、使うべき $F$ の行と列を読める。ただし、基底の対応を示しただけでは、任意に規格化した場のOPE係数の数値は決まらない。境界場とCVOの規格化も揃える。Cardy型のboundary sewingの解（原著 (4.91)）は、この規約でOPEのスカラー係数をその基底変換成分に等しく取れることを述べる。三つの境界場を二通りにOPEした相関関数の比較は、$F$ による括り替えを挟むため、$F$ のpentagon identityへ帰着する。単に二つの係数を直接等置するのではない。

<details>
<summary>導出：境界条件の列から $F_{Jr}$ の添字を決める</summary>

まず二つの境界場

$$
I\\xrightarrow{\\ i\\ }J\\xrightarrow{\\ j\\ }K
$$

に注目する。この境界条件の列をfusion treeとして読む方法は二つある。一つ目は、実軸に沿った順序をそのまま使うtreeである：

$$
\\boxed{
(I\\star i)\\longrightarrow J,
\\qquad
(J\\star j)\\longrightarrow K.
}
$$

このtreeでは中間辺が境界条件 $J$ である。二つ目は、二つの境界場を先にOPEするtreeである：

$$
\\boxed{
(i\\star j)\\longrightarrow r,
\\qquad
(I\\star r)\\longrightarrow K.
}
$$

こちらの中間辺はOPE出力のchiral表現 $r$ である。外線を順に $I,i,j,K$ と置くと、最初のtreeから、二つの場を先に結合するtreeへの基底変換は

$$
\\left(F_K^{Iij}\\right)_{Jr}
:=
F_{Jr}
\\begin{bmatrix}
i&j\\\\ I&K
\\end{bmatrix}
$$

である。第一添字 $J$ は「境界を順にたどるtree」の中間辺、第二添字 $r$ は「二つの場を先にOPEするtree」の中間辺を指定する。これで、原著の式 (6.23) に $F_{Jr}$ が現れる添字上の理由が分かる。



各内部辺が許されることもfusion則で確認できる。最初のtreeは $N_{Ii}{}^J N_{Jj}{}^K\\neq0$、二番目は $N_{ij}{}^r N_{Ir}{}^K\\neq0$ を要求する。$SU(2)_k$ では全表現が自己共役で、三つのラベルのfusion許容条件は置換対称なので、$N_{Ii}{}^J=N_{IJ}{}^i$、$N_{Ir}{}^K=N_{IK}{}^r$ である。従ってこのtreeの条件は、境界場とOPE出力の存在条件に一致する。

基底変換だけでは、任意に再規格化した場のOPE係数の数値は固定されない。式 (6.23) を数値的等式として使うには、次に述べるCVOと境界場の規格化を共通に選ぶ必要がある。

</details>

原著 (4.91) のCardy解に従い、境界場とCVOの規格化を対応させて選ぶ。この共通の規約では、boundary OPEのスカラー係数は

$$
\\boxed{
C_{ijr}^{IJK}
=
F_{Jr}
\\begin{bmatrix}
i&j\\\\ I&K
\\end{bmatrix}
=
\\left(F_K^{Iij}\\right)_{Jr}
}
\\tag{6.23}
$$

となる。6.1で用いた直交recoupling基底に対応する場の規格化での等式である。場を $\\psi_i^{IJ}\\mapsto a_i^{IJ}\\psi_i^{IJ}$ と変えると、出力場の変更を戻すため

$$
C_{ijr}^{IJK}\\mapsto\\frac{a_i^{IJ}a_j^{JK}}{a_r^{IK}}C_{ijr}^{IJK}
$$

となる。この再規格化を区別すれば、許容channelを選ぶfusion則に加えて、それらの結合の強さを $F$ から計算できる。例えば $k=2$ の列 $0\\xrightarrow{\\ 1/2\\ }\\tfrac12\\xrightarrow{\\ 1/2\\ }0$ では、chiral fusionには $r=0,1$ があるが、出力空間 $\\mathcal H_{00}=\\mathcal H_0$ は $r=0$ だけを許す。その係数には、外線 $0,\\tfrac12,\\tfrac12,0$、中間辺 $J=\\tfrac12$ と $r=0$ をもつ $F$ の成分を使えばよい。次節で境界場を行列の基底と比較する場合も、同じように規格化を揃えて積の係数を比べる。

<details>
<summary>式 (6.23) の規格化依存性とpentagon identityによる結合則</summary>

境界場を $\\psi_i^{IJ}\\mapsto\\psi_i^{\\prime IJ}=a_i^{IJ}\\psi_i^{IJ}$（$a_i^{IJ}\\neq0$）と再規格化する。座標差とClebsch–Gordan係数を省略してスカラー係数だけ追うと

$$
\\begin{aligned}
\\psi_i^{\\prime IJ}\\psi_j^{\\prime JK}
&=a_i^{IJ}a_j^{JK}\\sum_r C_{ijr}^{IJK}\\psi_r^{IK}\\\\
&=\\sum_r\\frac{a_i^{IJ}a_j^{JK}}{a_r^{IK}}C_{ijr}^{IJK}\\psi_r^{\\prime IK}.
\\end{aligned}
$$

従って $C_{ijr}^{\\prime IJK}=(a_i^{IJ}a_j^{JK}/a_r^{IK})C_{ijr}^{IJK}$ となる。式 (6.23) の右辺と数値を比較するときには、同じ再規格化をCVOの基底にも反映する必要がある。特に、境界場の二点関数の係数を後から1に規格化すると、OPE係数も変わる。規格化に依らない内容は、二つのOPE順序から作る相関関数が一致することである。

boundary sewingの添字を、本文と同じ役割に揃えて確認する。境界条件が $I,J,K,L$ と並び、三つの場のスピンが $i,j,\\ell$ である場合を取る。ここで新しい $L$ は三番目の場を通過した後の境界、$\\ell$ はその場のスピンである。

$$
I\\xrightarrow{\\ i\\ }J\\xrightarrow{\\ j\\ }K\\xrightarrow{\\ \\ell\\ }L.
$$

最初に $i,j$ をスピン $r$ へ結合する。次に $r,\\ell$ を結合した最終出力のスピンを $p$ と書く。この経路の係数は $C_{ijr}^{IJK}C_{r\\ell p}^{IKL}$ である。一方、$j,\\ell$ を先にスピン $s$ へ結合する経路では $C_{j\\ell s}^{JKL}C_{isp}^{IJL}$ になる。$p$ はここでは最終出力のスピンであり、式 (6.22) の磁気量子数の役割とは異なる。

二つの経路は異なるconformal block基底を使う。前者から後者への変換は $F_p^{ij\\ell}$ なので、後者の一つのchannel $s$ の係数を比較するには、前者の全 $r$ からの寄与を足す：

$$
\\sum_r C_{ijr}^{IJK}C_{r\\ell p}^{IKL}
\\left(F_p^{ij\\ell}\\right)_{rs}
=C_{j\\ell s}^{JKL}C_{isp}^{IJL}.
$$

これがboundary sewing relationである。式 (6.23) を四つのOPE係数にそれぞれ代入すると

$$
\\sum_r
\\left(F_K^{Iij}\\right)_{Jr}
\\left(F_L^{Ir\\ell}\\right)_{Kp}
\\left(F_p^{ij\\ell}\\right)_{rs}
=
\\left(F_L^{Jj\\ell}\\right)_{Ks}
\\left(F_L^{Iis}\\right)_{Jp}.
$$

例えば二番目の係数は、入力 $r,\\ell$、境界 $I,K,L$、出力 $p$ なので、$(F_L^{Ir\\ell})_{Kp}$ になる。左辺は四つの入力表現 $I,i,j,\\ell$ の括り方を三回の変換で変える経路、右辺は二回の変換で変える経路である。これは6.1のpentagon identityであり、式 (6.23) を使った境界OPEの結合則を保証する。[再規格化しても何が不変か](#note-gauge-dependent-f-physical-ope)

<details id="note-gauge-dependent-f-physical-ope">
<summary>場の大きさを変えても、OPEの整合性は変わらないのか？</summary>

場を定数倍すればOPE係数も変わる。比較する二つのOPE順序が同じ相関関数を与えるという条件は保たれる。

例えば中間場を $a_r$ 倍すると、その場を作るOPE係数は $1/a_r$ 倍、次にその場を入力として使うOPE係数は $a_r$ 倍になる。二つの係数を掛けると中間場の変更は消える。外から挿入する場の定数倍は、どのOPE順序にも共通の因子として残る。

conformal blockの基底も変更すれば、基底変換を表す $F$ の成分は変わる。式 (6.23) の $C=F$ を数値的に比べるには、境界場とCVOの規約を対応させる必要がある。規約を変えても、同じ外部の場をもつ相関関数がOPEの順序に依らないことが整合性の検査になる。

$$
\\psi_i^{IJ}\\mapsto a_i^{IJ}\\psi_i^{IJ}\\quad\\Rightarrow\\quad C_{ijr}^{IJK}\\mapsto\\frac{a_i^{IJ}a_j^{JK}}{a_r^{IK}}C_{ijr}^{IJK}
$$

参照：6.2.4 · 式 (6.23) とboundary sewing relation

</details>

</details>

<details>
<summary>例：$k=2$ でfusion channelと$F$の役割を分ける</summary>

$k=2$ の例へ戻ると、

$$
\\psi_{1/2}^{0,\\,1/2}\\,
\\psi_{1/2}^{1/2,\\,0}
\\longrightarrow
\\psi_0^{0,\\,0}
$$

では、chiral fusionだけなら $\\tfrac12\\star\\tfrac12=0\\oplus1$ なので $r=0,1$ が候補になる。一方、境界条件の両端は $I=K=0$ であり、$0\\star0=0$ より $N_{00}{}^r=\\delta_{r0}$。二条件の共通部分は $r=0$ だけなので、出力空間 $\\mathcal H_{00}=\\mathcal H_0$ が候補を一つに絞る。四つのスピン $\\frac12$ を含む相関関数で別のOPE順序を選ぶと、融合する二場の外側の境界がともに $\\frac12$ となり、$r=0,1$ の両channelが現れる。fusion係数は「どのchannelが存在するか」だけを決め、$F$ は「存在するchannelの基底を括り替えたとき、どの線形結合になるか」を決める。

</details>

境界の反射条件だけでは決まらなかったbulkへの結合を、annulusの二つの量子化の一致で具体化した。その結果、二境界間のsectorはfusion則で数えられ、境界場の結合は、規格化を揃えた $F$ 行列で扱えるようになった。

同じ自己スペクトルをもつ境界でも、bulkの一点関数への応答は異なりうる。境界を調べるには「その上に何が動くか」と「bulkへどう結合するか」の両方を使える。次節ではこの二種類のデータを使い、境界が $SU(2)$ のどこに広がるのか、境界場の積がどの代数になるのかを調べる。

## 参照

- Recknagel--Schomerus, *Boundary Conformal Field Theory and the Worldsheet Approach to D-Branes*, Chapter 6, printed pp. 240--241: fusing matrixの量子 $6j$ 閉形式と規格化依存性、式 (6.12)--(6.13)。
- 同 pp. 241--242: bulk状態空間、分配関数、bulk primaryとOPE、式 (6.14)--(6.15)。
- 同 pp. 243--245: Cardy境界状態、one-point関数、twisted gluing、境界スペクトル、boundary OPE、式 (6.16)--(6.23)。
- 同 Chapter 3, printed pp. 109--112: CVO、conformal block、fusing matrixの定義、式 (3.55)--(3.63)。
- 同 Chapter 4, printed pp. 145--146, 156--162: twisted Ishibashi状態、Cardy解、annulus spectrum、boundary sewingとCardy型boundary OPE、式 (4.53), (4.80)--(4.81), (4.91)。
`},{id:`6-3`,section:`6.3`,shortTitle:`大体積極限と fuzzy sphere`,content:`# 6.3 大体積極限の幾何とfuzzy sphere

6.2節で得たCardy境界条件には、スピン $J=0,\\frac12,\\ldots,\\frac k2$ が付いている。そのラベルを選べば、円板一点関数の値が決まる。では、弦の端点が $SU(2)$ のどこにいられるのかも、このラベルだけで分かるのだろうか。

ここでいうブレーンのworldvolumeは、WZW場 $g:\\Sigma\\to SU(2)$ が世界面の境界で取れる値の集合 $Q_J$ である。幾何学的な境界条件は $g(\\partial\\Sigma)\\subset Q_J$ と書ける。この集合を、境界条件 $J$ の一点関数から求めよう。

## 1. 円板一点関数から球面の位置を求める

### 1.1 閉弦の波が測るブレーンの分布

円板の中心にbulk場 $\\varphi$ を置く。動径量子化では、この場が円周上の状態 $|\\varphi\\rangle$ を作り、円板外周の境界条件 $J$ が境界状態 $\\langle\\!\\langle J|$ を指定する。従って一点関数は重なり $\\langle\\!\\langle J|\\varphi\\rangle$ である。円周に沿う場 $g$ の配置は標的空間内の閉じた曲線なので、この状態を閉弦状態、重なりをブレーンと閉弦の結合振幅として読む。

![円板世界面の円周が標的空間内の閉じた曲線に写る。外周の像は端点が許される領域Qにある。](/diagrams/disk-state-target.svg)

位置を調べるには、閉弦の振動を励起せず、位置だけを残した成分を使う。ここでは、大体積極限の閉弦の非振動成分を、重心位置 $g$ の波動関数として扱う近似を用いる。[この位置表示（Felderほか、§2）](https://arxiv.org/html/hep-th/9909030#S2)が有効になるのが大きなレベル $k$ である。WZW作用が与える三次元球面の半径 $R$ は、弦の長さ $\\sqrt{\\alpha'}$ と

$$
R^2=k\\alpha',\\qquad R/\\sqrt{\\alpha'}=\\sqrt{k}
\\tag{radius-level}
$$

で結ばれる。固定スピン $j$ のprimaryは $h_j=j(j+1)/(k+2)\\to0$ となるが、カレントの負モードによる振動はウェイトを正整数だけ上げる。この差により、$k\\gg1$ ではprimaryの低い成分をカレントの振動から分けられる。

位置を群要素 $g$ で指定し、閉弦状態の位置表示を波動関数 $f(g)$ とする。CFTでは一点関数として与えられた同じ結合を、標的空間の位置から計算してみよう。一点 $g_0$ にあるブレーンとの重なりは $f(g_0)$ に比例する。広がったブレーンでは、各部分への結合を足すので

$$
\\mathcal A_Q[f]=\\int_Q d\\nu_Q(g)\\,f(g)
\\tag{brane-coupling-as-integral}
$$

となる。重み $d\\nu_Q$ は各部分の大きさと結合の強さを含む。この半古典的な位置表示を用い、**すべての低い波への結合を再現する重みの台**を求める。台とは、どんな小さな近傍にも非零の重みがある位置の集合である。その集合が閉弦によって測られるブレーンの領域になる。[境界状態の位置表示（Felderほか、§2）](https://arxiv.org/html/hep-th/9909030#S2)

![一点のブレーンはf(g0)を拾う。広がった領域Qでは、各部分での波の値f(gi)に重みwiを掛けて足す。](/diagrams/brane-wave-sum.svg)

### 1.2 群上の波とCardy一点関数を対応させる

群上の波の基底には、スピン $j$ の表現行列 $D^j(g)$ の行列要素を使う：

$$
\\phi_j^{mn}(g):=\\sqrt{2j+1}\\,D^j_{mn}(g),\\qquad
m,n=-j,\\ldots,j.
\\tag{6.24}
$$

Peter–Weylの定理によれば、$j=0,\\frac12,1,\\ldots$ をすべて含むこれらの関数は、全体積を1に規格化したHaar測度 $d\\mu$ に関して完全正規直交系になる。

次に、bulk primaryの最低ウェイト状態と、この基底の関係を確認する。6.2節の対角bulk sectorでは、最低ウェイト部分は $V_j\\otimes V_j^*$ であり、$V_j$ はスピン $j$ の有限次元表現である。左右の零モードは、この二つの添字にそれぞれ作用する。群上の波も、左と右の回転 $u,v\\in SU(2)$ に対して $D^j(ugv^{-1})=D^j(u)D^j(g)D^j(v)^{-1}$ と変わるので、同じ二つの表現を担う。最低ウェイト状態を内積1に規格化すれば、波の側も式 (6.24) の係数で内積1になる。この共通の基底を用い、大きな $k$ でbulk primary $\\varphi_{j,j}^{mn}$ の非振動成分を $\\phi_j^{mn}$ に対応させる。

6.2節の[Cardy一点関数](/6-2#ref-cardy-coefficients)を、上半平面上の距離因子から分けると

$$
\\langle\\varphi_{j,j}^{mn}(z,\\bar z)\\rangle_J
=\\frac{B_J^j\\delta^{mn}}{|z-\\bar z|^{2h_j}},\\qquad
B_J^j=\\left(\\frac2{k+2}\\right)^{1/4}
\\frac{\\sin((2j+1)\\vartheta_J)}{\\sqrt{\\sin(\\pi(2j+1)/(k+2))}},
\\tag{6.17}
$$

$$
\\vartheta_J:=\\frac{\\pi(2J+1)}{k+2}.
\\tag{quantised-angle}
$$

ここで $B_J^j\\delta^{mn}$ が位置の波 $\\phi_j^{mn}$ への結合である。$\\delta^{mn}$ は $m=n$ の成分だけに結合することを示す。分布 $\\rho_J$ を用いた位置表示では

$$
B_J^j\\delta^{mn}=\\int d\\mu(g)\\,\\rho_J(g)\\phi_j^{mn}(g).
\\tag{boundary-state-fourier-overlap}
$$

一点関数を集める操作が、分布 $\\rho_J$ のFourier係数を集める操作になった。従って、ある球面で波を平均した値がこれらの係数とすべて一致すれば、その球面が同じ閉弦の測定を再現する。次に、この照合を角度の異なる球面に対して行う。

<details>
<summary>零モード空間と波動関数の内積を照合する</summary>

対角WZW模型で、アフィン表現の最低ウェイト部分は

$$
\\mathcal H_{\\mathrm{zero}}^{(k)}
\\simeq\\bigoplus_{j=0,\\frac12,\\ldots,k/2}V_j\\otimes V_j^*.
$$

群上の行列要素も $D^j(ugv^{-1})=D^j(u)D^j(g)D^j(v)^{-1}$ と変換するので、左右の添字は同じ表現を担う。Schurの直交関係

$$
\\int d\\mu\\,\\overline{D^j_{mn}}D^{j'}_{m'n'}
=\\frac{\\delta_{jj'}\\delta_{mm'}\\delta_{nn'}}{2j+1}
$$

から、式 (6.24) の平方根が正規化をそろえる。有限 $k$ では $j\\leq k/2$ の部分空間であり、$k\\to\\infty$ で全表現を含めると $L^2(SU(2),d\\mu)$ が得られる。

位置基底を $|g\\rangle$、$\\phi_j^{mn}(g)=\\langle g|j,m,n\\rangle$、$\\rho_J(g)=\\langle\\!\\langle J|g\\rangle$ とすれば、完全性 $\\int d\\mu\\,|g\\rangle\\langle g|=1$ の挿入が式 (boundary-state-fourier-overlap) を与える。境界状態には振動成分もあるので、これは境界状態全体を単なる位置分布へ置き換える主張ではない。

</details>

### 1.3 一様な球面平均が同じ係数を与える

どんな集合がこの結合を再現するかを見るため、群要素を

$$
g=\\cos\\vartheta\\,\\mathbf1+i\\sin\\vartheta\\,\\mathbf n^a\\sigma_a,
\\quad 0\\leq\\vartheta\\leq\\pi,\\quad \\mathbf n\\cdot\\mathbf n=1
\\tag{SU2-polar}
$$

と表す。$\\sigma_a$ はPauli行列、$a=1,2,3$ は和を取る。四つの実座標 $(\\cos\\vartheta,\\sin\\vartheta\\,\\mathbf n)$ の二乗和は1であり、これが $SU(2)\\simeq S^3$ の表示である。まず $0<\\vartheta_0<\\pi$ として $\\vartheta=\\vartheta_0$ を固定すると、$\\mathbf n$ が二次元球面を動く。その物理半径は

$$
r(\\vartheta_0)=R\\sin\\vartheta_0.
\\tag{brane-radius}
$$

![S3の二次元断面内で、x0一定の線分を右の球面S2へ対応させる。実際の共役類は線分ではなく、半径Rsinθの二次元球面である。](/diagrams/su2-conjugacy-slices.svg)

図の左は三次元球面を二次元の断面で描いている。固定した $x_0=R\\cos\\vartheta$ の線分が、実際には右の $S^2$ に対応する。

この球面は共役類でもある。共役変換 $g\\mapsto hgh^{-1}$ は固有値 $e^{\\pm i\\vartheta}$ を保ち、$\\mathbf n$ を全方向へ回すからである。従って

$$
\\mathcal C_{\\vartheta_0}
:=\\{he^{i\\vartheta_0\\sigma_3}h^{-1}\\mid h\\in SU(2)\\}
=\\{g\\mid\\vartheta(g)=\\vartheta_0\\}\\simeq S^2
\\tag{spherical-conjugacy-class}
$$

となる。$\\vartheta_0=0,\\pi$ では球面がそれぞれ $e=\\mathbf1,-e=-\\mathbf1$ の一点へ縮む。

| 固定する量 | 動ける値 | 標的空間内の集合 |
|---|---|---|
| $\\vartheta=0$ | 方向 $\\mathbf n$ の違いが消える | 北極 $e$ |
| $0<\\vartheta<\\pi$ | $\\mathbf n\\in S^2$ | 半径 $R\\sin\\vartheta$ の共役類 |
| $\\vartheta=\\pi$ | 方向 $\\mathbf n$ の違いが消える | 南極 $-e$ |

球面上の一様な平均を $\\langle f\\rangle_{\\vartheta_0}:=(4\\pi)^{-1}\\int_{S^2}d\\Omega\\,f(\\vartheta_0,\\mathbf n)$ と書く。平均した表現行列は共役で変わらないので、Schurの補題により単位行列に比例する。そのtraceはcharacter

$$
\\chi_j(\\vartheta_0)=\\operatorname{tr}D^j(g)
=\\frac{\\sin((2j+1)\\vartheta_0)}{\\sin\\vartheta_0}
\\tag{class-character}
$$

である。単位行列のtraceが $2j+1$ であることから比例係数が決まり、球面平均は

$$
\\langle\\phi_j^{mn}\\rangle_{\\vartheta_0}
=\\frac{\\chi_j(\\vartheta_0)}{\\sqrt{2j+1}}\\delta^{mn}
$$

となる。

一方、Cardy結合を一定の波への結合 $B_J^0$ で割ると、全体の強さを除いて形を比べられる。$k\\to\\infty$ で閉弦のスピン $j$ を固定し、境界ラベルを

$$
\\vartheta_{J(k)}\\to\\vartheta_0\\in(0,\\pi),\\qquad
J(k)\\sim\\frac{k\\vartheta_0}{2\\pi}
\\tag{limit-A}
$$

と選ぶ。このとき $\\sin(\\pi(2j+1)/(k+2))\\sim(2j+1)\\sin(\\pi/(k+2))$ なので

$$
\\frac{B_{J(k)}^j}{B_{J(k)}^0}\\delta^{mn}
\\longrightarrow
\\frac{\\sin((2j+1)\\vartheta_0)}{\\sqrt{2j+1}\\sin\\vartheta_0}\\delta^{mn}
=\\langle\\phi_j^{mn}\\rangle_{\\vartheta_0}.
$$

**各位置の波へのCardy結合が、角度 $\\vartheta_0$ の球面上の平均と一致した。** $\\delta^{mn}$ は球面上で方向を一様に平均することに、正弦の比はその球面の角度に対応する。Peter–Weyl基底の全係数は分布を一意に指定するので、極限の結合の台はこの球面である。最初に式だけで与えられたCardyラベルを、半古典的なworldvolume $Q_J=\\mathcal C_{\\vartheta_J}$ の位置へ読み替える根拠が得られた。

<details>
<summary>分布の逆展開、式 (6.25) の係数、半径の確認</summary>

polar座標でのHaar測度は

$$
d\\mu(g)=\\frac{\\sin^2\\vartheta}{2\\pi^2}\\,d\\vartheta\\,d\\Omega,
\\quad \\int_{S^2}d\\Omega=4\\pi.
$$

従って球面平均を与える、全体の重みを1にした分布は

$$
\\rho_{\\infty}^{\\mathrm{norm}}(g)
=\\frac{\\pi}{2\\sin^2\\vartheta_0}\\delta(\\vartheta-\\vartheta_0).
\\tag{brane-localisation}
$$

これを積分へ戻すと $\\int d\\mu\\,\\rho_{\\infty}^{\\mathrm{norm}}f=(4\\pi)^{-1}\\int d\\Omega\\,f(\\vartheta_0,\\mathbf n)$ になる。$\\delta$ は $d\\vartheta$ に関するDirac deltaである。規格化する前の分布には、真空結合 $B_J^0$ の全体因子も掛かる。

characterは、対角化した $g$ のスピン成分の固有値を足して

$$
\\chi_j(\\vartheta)=\\sum_{m=-j}^je^{2im\\vartheta}
=\\frac{\\sin((2j+1)\\vartheta)}{\\sin\\vartheta}
$$

と求まる。$n=2j+1$ は全正整数を一度ずつ走り、正弦完全系は

$$
\\delta(\\vartheta-\\vartheta_0)
=\\frac2\\pi\\sum_{n=1}^\\infty\\sin(n\\vartheta)\\sin(n\\vartheta_0).
$$

従って

$$
\\frac{\\delta(\\vartheta-\\vartheta_0)}{\\sin\\vartheta_0}
=\\frac2\\pi\\sum_{j=0,\\frac12,\\ldots}\\sum_{m=-j}^j
\\frac{\\sin((2j+1)\\vartheta_0)}{\\sqrt{2j+1}}\\phi_j^{mm}(g).
\\tag{6.25}
$$

原著 p.246 の式 (6.25) の係数は $4/\\pi$ だが、ここで明記した全半整数スピンの和と通常の $d\\vartheta$ のdeltaでは $2/\\pi$ となる。正弦の直交積分 $\\int_0^\\pi\\sin(n\\vartheta)\\sin(n'\\vartheta)d\\vartheta=(\\pi/2)\\delta_{nn'}$ でも検算できる。全体係数の訂正は台の位置を変えない。

誘導計量は、$\\mathbf n\\cdot d\\mathbf n=0$ を用いて

$$
ds^2=R^2\\left(d\\vartheta^2+\\sin^2\\vartheta\\,d\\Omega_2^2\\right).
$$

$\\vartheta$ 固定で $ds^2=r^2d\\Omega_2^2$ と比べれば式 (brane-radius) が得られる。

ここまで示したのは各固定 $j$ の係数の収束である。有限 $k$ の分布列が任意の滑らかな試験関数に弱収束するという強い主張には、高いスピンを一様に抑える評価も必要になる。幾何の同定には、固定した低い波に対する極限の係数列を用いている。

</details>

### 1.4 大きなレベルと大きなスピンは別の極限である

有限 $k$ では閉弦primaryは $j\\leq k/2$ に限られる。この有限個の係数だけから真の位置分布や厚みは一意に決まらない。$\\vartheta_J$ は、全ての固定した低い波への応答をlarge-$k$ で照合したときの、半古典的な位置を指定する角度である。有限 $k$ の境界条件を厚みのない古典球面へ厳密に置き換えるものではない。

また、$k$ を増やす際に $J$ をどう選ぶかで、見る球面は変わる。$J$ を固定すれば $\\vartheta_J\\to0$、$\\alpha'$ 固定で $r_J\\sim\\pi(2J+1)\\sqrt{\\alpha'/k}\\to0$ となる。有限の角度の球面を残すには、上の $J\\sim k\\vartheta_0/(2\\pi)$ が必要である。

| 極限 | 残す対象 | この節で分かること |
|---|---|---|
| 固定した閉弦 $j$、$J/k\\to\\vartheta_0/(2\\pi)$ | $S^3$ 内の有限角度の球面 | 一点関数の台と共役類の位置 |
| 固定した境界ラベル $J$、$k\\to\\infty$ | 北極近くの有限個の開弦primary | 後で求める有限行列の積 |
| 行列の半径を固定し、$J\\to\\infty$ | 固定角運動量の模様 | 後で比べる古典球面上の積 |

<details id="note-which-large-k-question">
<summary>$J$ を増やす速さと物理半径</summary>

$\\alpha'$ 固定で $J\\sim Ck^\\beta$、$0<\\beta<1$ なら、$\\vartheta_J\\sim2\\pi Ck^{\\beta-1}\\to0$ だが

$$
r_J\\sim2\\pi C\\sqrt{\\alpha'}\\,k^{\\beta-1/2}.
$$

従って $\\beta<1/2$ では縮み、$\\beta=1/2$ では有限、$\\beta>1/2$ では増大する。$J/k\\to C\\in(0,1/2)$ なら有限角度にとどまり、$r_J/R\\to\\sin(2\\pi C)$ となる。角度、半径比、長さとしての半径を区別する必要がある。

</details>

この対応を使えば、ラベルから球面の位置と半径を選べる。例えば $J=k/4$ を選べるレベルでは $\\vartheta_{k/4}=\\pi/2$ なので、半古典的な球面は赤道にあり、半径は $r_{k/4}=R$ である。一方、固定 $J=1/2$ では $r_{1/2}\\sim2\\pi\\sqrt{\\alpha'/k}$ と北極へ縮む。同じ「大きな $k$」でも、ラベルの選び方によって見る位置は違う。位置は求まったが、その球面に沿って開弦の端点がどう動くかは、まだこの平均からは分からない。

## 2. gluing条件から端点の運動と非可換性を求める

一点関数は、閉弦の波が測るブレーンの分布を指定した。同じ球面を開弦端点の運動から確かめる。使うのは6.2節の標準gluing $J(z)=\\bar J(\\bar z)$ であり、ここでは $J(z)$ がカレント、引数のない $J$ が境界ラベルである。

### 2.1 世界面の微分を標的空間の接方向へ分ける

世界面を上半平面 $z=x+iy$、境界を $y=0$ とする。境界上の $g(x,0)$ が端点の軌跡なので、$\\partial_xg$ はその動く方向を表す。$\\partial_yg$ は世界面の内側へ進んだときの場の変化である。カレント $J=-k\\partial g\\,g^{-1}$、$\\bar J=kg^{-1}\\bar\\partial g$ をgluingへ代入すると

$$
-(\\partial g)g^{-1}=g^{-1}\\bar\\partial g.
\\tag{6.26}
$$

両方の微分を同じLie代数で比較するため、左から $g^{-1}$ を掛けた $g^{-1}\\partial_xg,g^{-1}\\partial_yg$ を使う。$\\operatorname{Ad}(g)Y:=gYg^{-1}$ と $\\partial=(\\partial_x-i\\partial_y)/2$ を代入して整理すれば

$$
(\\operatorname{Ad}(g)-1)g^{-1}\\partial_yg
=-i(\\operatorname{Ad}(g)+1)g^{-1}\\partial_xg.
\\tag{6.27}
$$

共役類の接方向は、微小共役変換 $\\delta g=\\epsilon g-g\\epsilon$ から求まる。左へ移すと $g^{-1}\\delta g=(\\operatorname{Ad}(g^{-1})-1)\\epsilon$ なので、接空間はこの作用素の像である。共役作用は不変内積で直交するため、直交する法線空間は $\\ker(\\operatorname{Ad}(g)-1)$ になる。従って法線方向では $\\operatorname{Ad}(g)=1$ である。

式 (6.27) の法線成分を取ると、左辺が零、右辺が $-2i(g^{-1}\\partial_xg)^\\perp$ となり

$$
(g^{-1}\\partial_xg)^\\perp=0.
\\tag{endpoint-tangent}
$$

を得る。これは $\\partial_x\\vartheta=0$、すなわち端点が一つの共役類から出られないという条件である。gluingは角度の値までは選ばず、量子論で選ぶ角度は一点関数が指定する $\\vartheta_J$ になる。

<details>
<summary>式 (6.27) の変形と接空間・法線空間の検算</summary>

$\\bar\\partial=(\\partial_x+i\\partial_y)/2$ と $\\partial g\\,g^{-1}=\\operatorname{Ad}(g)(g^{-1}\\partial g)$ を用いると、式 (6.26) は

$$
-\\operatorname{Ad}(g)(g^{-1}\\partial_xg-ig^{-1}\\partial_yg)
=g^{-1}\\partial_xg+ig^{-1}\\partial_yg.
$$

$\\partial_x$ の項を右、$\\partial_y$ の項を左へ移して $i$ で割ると式 (6.27) になる。

一般に $(\\operatorname{Im}M)^\\perp=\\ker M^\\dagger$ である。実際、$v$ が全 $M\\epsilon$ と直交する条件は $(M^\\dagger v,\\epsilon)=0$ が全 $\\epsilon$ で成り立つ条件だからである。$\\operatorname{Ad}(g)^\\dagger=\\operatorname{Ad}(g^{-1})$ より、ここでは $M^\\dagger=\\operatorname{Ad}(g)-1$ となる。

接方向と法線方向は共役作用で別々に保たれ、法線成分を取る際に接成分は混入しない。$g=\\pm e$ では共役作用が全Lie代数で恒等となるので、式 (6.27) は全方向に $\\partial_xg=0$ を課す。

Euclid世界面では混合条件に $i$ が現れる。これは実時間の境界条件を解析接続した式であり、複素化した接空間で扱う。$x=it$ と戻せば $i\\partial_x=\\partial_t$ であり、実時間の条件は実係数になる。

</details>

### 2.2 球面に沿う混合条件は磁束を表す

非縮退な共役類の接空間では $1-\\operatorname{Ad}(g)$ が可逆である。従って式 (6.27) の接成分は

$$
(g^{-1}\\partial_yg)^\\parallel=iB_g(g^{-1}\\partial_xg)^\\parallel,
\\qquad
B_g:=\\frac{1+\\operatorname{Ad}(g)}{1-\\operatorname{Ad}(g)}.
\\tag{6.28}
$$

と解ける。分母の逆は接空間上だけで取る。法線方向は既にDirichlet条件が決めている。

この係数の意味を、開弦の作用の変分と比べる。$X^i$ を局所的な標的座標、$G$ をその計量とする。内部の反対称場を局所2形式 $B_{\\mathrm{bulk}}$、端点に結合するブレーン上の1形式を $a$ と書く。世界面の向きを $dx\\wedge dy$ とし、Euclid作用を

$$
S=\\frac1{4\\pi\\alpha'}\\int_\\Sigma G_{ij}\\partial_\\mu X^i\\partial_\\mu X^j
+\\frac i{2\\pi\\alpha'}\\int_\\Sigma X^*B_{\\mathrm{bulk}}
+i\\int_{\\partial\\Sigma}X^*a
$$

とする。$\\mu=x,y$ は世界面の方向、$X^*$ は引き戻しである。上半平面の外向き法線は $-\\partial_y$ なので、計量項を部分積分すると、境界には $-(2\\pi\\alpha')^{-1}\\int dx\\,\\delta X^iG_{ij}\\partial_yX^j$ が残る。以下では、この共通係数を括り出した括弧を比べる。接方向に端点を動かせるなら、括弧の総和を消す必要がある。

$B_{\\mathrm{bulk}}$ 項の変分は、同じ括弧へ $-i\\delta X^i(B_{\\mathrm{bulk}}|_Q)_{ij}\\partial_xX^j$ を加える。端点に沿う微分が、法線方向の微分と同じ条件へ入る。

さらに端点がブレーン上のゲージ接続 $a$ に結合すると、その曲率 $da$ も同じ反対称項へ加わる。境界条件に入る2形式を

$$
\\mathcal F:=B_{\\mathrm{bulk}}|_Q+2\\pi\\alpha'\\,da
$$

とまとめる。局所1形式 $\\Lambda$ による $B_{\\mathrm{bulk}}\\mapsto B_{\\mathrm{bulk}}+d\\Lambda$ の変化は $a\\mapsto a-\\Lambda|_Q/(2\\pi\\alpha')$ で相殺され、この和がゲージ不変になる。接方向の変分が消える条件は $G\\partial_yX-i\\mathcal F\\partial_xX=0$ なので、gluingから得た条件と比べると

$$
G^{-1}\\mathcal F=B_g.
$$

式 (6.28) の $B_g$ は、2形式 $\\mathcal F$ の添字を一つ計量で上げた作用素である。磁束が零なら $\\partial_yX^\\parallel=0$ というNeumann条件になり、磁束があると端点に沿う微分が混ざる。

<details>
<summary>境界変分、反対称性、Wess–Zuminoの3形式との関係</summary>

局所標的座標 $X^i$ で、世界面の向きを $dx\\wedge dy$ とし、Euclid作用を

$$
S=\\frac1{4\\pi\\alpha'}\\int_\\Sigma G_{ij}\\partial_\\mu X^i\\partial_\\mu X^j
+\\frac i{2\\pi\\alpha'}\\int_\\Sigma X^*B_{\\mathrm{bulk}}
+i\\int_{\\partial\\Sigma}X^*a
$$

とする。$X^*$ は引き戻しである。上半平面の外向き法線が $-\\partial_y$ であることを使い、各項を変分すると

$$
\\delta S|_{\\partial\\Sigma}
=-\\frac1{2\\pi\\alpha'}\\int dx\\,\\delta X^i
\\left(G_{ij}\\partial_yX^j-i\\mathcal F_{ij}\\partial_xX^j\\right).
$$

接方向の $\\delta X$ は任意なので、括弧の接成分が零になる。これが本文で比べた境界条件である。

$A=\\operatorname{Ad}(g)$ と略記すると、$A^\\dagger=A^{-1}$ より

$$
B_g^\\dagger=\\frac{1+A^{-1}}{1-A^{-1}}=-\\frac{1+A}{1-A}=-B_g.
$$

従って $G(v,B_gw)$ は反対称であり、2形式を定める。左移動した1形式による表示は、全体の規格化を除き $\\operatorname{tr}(g^{-1}dg\\wedge B_g(g^{-1}dg))$ となる。

WZWのNS–NS 3形式は局所的に $H=dB_{\\mathrm{bulk}}$ である。$d(da)=0$ なのでブレーン上では $d\\mathcal F=H|_Q$。SU(2)の共役類は二次元であり、この3形式の引き戻しは零になる。ここでの2形式はブレーン上の境界条件を指定するもので、球面上だけの式から周囲の非零な3形式を復元するものではない。一般群での対応は原著 p.248 と [Alekseev–Schomerus](https://arxiv.org/abs/hep-th/9812193) にある。

</details>

### 2.3 磁束のある端点座標は順序によって積が変わる

混合条件で開弦を量子化した際の局所結果を使う。計量と $\\mathcal F$ を小さな領域で一定と近似すると、境界座標場 $X^a(x)$ の二点関数には

$$
\\langle X^a(x)X^b(x')\\rangle
=-\\alpha'G_{\\mathrm{op}}^{ab}\\log(x-x')^2
+\\frac i2\\theta^{ab}\\operatorname{sgn}(x-x')
$$

が現れ、反対称係数は $\\theta=2\\pi\\alpha'[(G+\\mathcal F)^{-1}]_{\\mathrm A}$ である。$G_{\\mathrm{op}}$ は開弦が見る計量、$[M]_{\\mathrm A}=(M-M^{\\mathsf T})/2$ は反対称部分を取る操作である。[一定背景での境界伝播関数（Seiberg–Witten、§2.1）](https://arxiv.org/html/hep-th/9908142v3)

同じ点へ $x>x'$ と $x<x'$ から近づく二つの積を引くと、対数項が消え、$i\\theta^{ab}$ が残る。実時間ではこれは同一端点の座標交換子 $[\\widehat X^a,\\widehat X^b]=i\\theta^{ab}$ になる。従って磁束は、端点上の場を掛ける順序への依存を生む。

型と規格化をそろえよう。左移動した基底 $g^{-1}dg=\\tau_ae^a$、$\\tau_a=-i\\sigma_a/2$ では、計量は $G_{ab}=(k\\alpha'/4)\\delta_{ab}$ である。この基底での二つの上付き添字を持つ係数を $\\theta_e^{ab}$ とし、無次元係数を $\\Theta^{ab}:=(k/4\\pi)\\theta_e^{ab}$ と定義する。$\\delta_{ab}$ で一つの添字を下げれば、$B_g$ と同じ型の作用素になる。$\\mathcal F=GB_g$ を代入すると、$[(1+B_g)^{-1}]_{\\mathrm A}=-B_g(1-B_g^2)^{-1}$ から

$$
\\Theta=-2B_g(1-B_g^2)^{-1}
=\\frac12\\left(\\operatorname{Ad}(g^{-1})-\\operatorname{Ad}(g)\\right).
$$

次に北極近くで $g=e^X\\simeq1+X$ と置く。$X$ はLie代数の元であり、$\\operatorname{Ad}(e^X)=e^{\\operatorname{ad}X}$、$\\operatorname{ad}X(Y)=[X,Y]$ なので、指数関数の一次の差から

$$
\\Theta=-\\operatorname{ad}(X)+O(X^3).
\\tag{6.29}
$$

を得る。$X=y^a\\tau_a$、$\\tau_a=-i\\sigma_a/2$、$[\\tau_a,\\tau_b]=\\varepsilon_{ab}{}^c\\tau_c$ と書くと、一次近似の成分は $\\Theta^{ab}=\\varepsilon^{ab}{}_cy^c$ である。$\\varepsilon_{123}=1$ は完全反対称記号であり、以後 $f_{ab}{}^c:=\\varepsilon_{ab}{}^c$ と書く。

<!-- reference: poisson-bracket -->

指数座標と左移動基底の差はこの一次では寄与しない。交換子の共通係数 $4\\pi/k$ を除き、その一次を古典的な微分演算へ移すと

$$
\\{y^a,y^b\\}=f^{ab}{}_cy^c,
\\qquad
\\{F,G\\}:=f^{ab}{}_cy^c\\partial_aF\\,\\partial_bG
\\tag{6.30}
$$

というLie–Poisson括弧である。ここでは $\\partial_a=\\partial/\\partial y^a$、添字の上げ下げは $\\delta_{ab}$ を用いる。この括弧は積の微分則を満たし、Jacobi恒等式は $f$ のLie代数Jacobi恒等式から従う。座標間の括弧を指定すれば、任意の関数間の括弧も右辺で求まる。

<!-- /reference -->

この演算が球面上でも定義できる理由を確かめよう。座標の二乗和 $c(y)=\\sum_a(y^a)^2$ は

$$
\\{c,y^b\\}=2f^{ab}{}_cy^ay^c=0
$$

を満たす。$y^ay^c$ が対称、$f^{ab}{}_c$ が $a,c$ に反対称なので相殺する。従って $c$ はすべての関数と括弧が零であり、$c$ を固定した

$$
\\sum_a(y^a)^2=c
\\tag{6.31}
$$

の球面から括弧の操作が出ない。$c>0$ では二次元球面、$c=0$ では一点である。単位元近傍の球面には、こうして非零のPoisson構造が付く。量子化でその括弧を交換子へ置き換えたとき、どんな代数になるかを次に開弦OPEで確かめる。

<details>
<summary>$\\Theta$ の行列計算、物理単位への換算、Jacobi恒等式</summary>

接空間上で $A=\\operatorname{Ad}(g)$ と置くと

$$
1-B_g^2=\\frac{(1-A)^2-(1+A)^2}{(1-A)^2}
=\\frac{-4A}{(1-A)^2},
$$

なので $-2B_g(1-B_g^2)^{-1}=(1-A^2)/(2A)$ となる。$B_g^{-1}$ を使わない表示なので、$B_g=0$ となる赤道でも式は有効である。

不変内積 $(U,V)=-2\\operatorname{tr}(UV)$ では $\\tau_a$ が正規直交する。成分は

$$
\\Theta_{ab}=-(\\tau_a,[y^c\\tau_c,\\tau_b])
=-y^cf_{cba}=f_{abc}y^c.
$$

指数座標と左移動基底は $g^{-1}dg=dX+O(X\\,dX)$ だけずれ、$\\Theta=O(X)$ なので一次の座標成分は変わらない。構造定数のJacobi恒等式を代入すると

$$
\\{y^a,\\{y^b,y^c\\}\\}+\\text{cyclic}
=(f^{bc}{}_df^{ad}{}_e+f^{ca}{}_df^{bd}{}_e+f^{ab}{}_df^{cd}{}_e)y^e=0.
$$

微分則により、これは一般の関数にも拡張する。

物理単位への換算では、$g^{-1}dg=\\tau_ae^a$ に対する計量は

$$
ds^2=-\\frac{R^2}{2}\\operatorname{tr}(g^{-1}dg)^2
=\\frac{k\\alpha'}4\\delta_{ab}e^ae^b.
$$

従って境界伝播関数の無次元基底での係数は

$$
\\theta_e=\\frac{2\\pi\\alpha'}{k\\alpha'/4}[(1+B_g)^{-1}]_{\\mathrm A}
=\\frac{4\\pi}{k}\\Theta.
$$

本文のPoisson括弧は、この共通係数 $4\\pi/k$ を除いた規約である。単位元近傍の実際の指数座標の交換子へ戻すと $[\\widehat y^a,\\widehat y^b]\\simeq i(4\\pi/k)f^{ab}{}_c\\widehat y^c$ となる。これは一定背景を局所的に用いた一次近似であり、有限 $k$ の全境界代数を定める結果ではない。

Poisson括弧は観測量同士の関係を与える。運動方程式 $\\dot F=\\{F,H_{\\mathrm{eff}}\\}$ に用いるにはHamiltonian $H_{\\mathrm{eff}}$ が別に必要であり、この括弧だけでは端点の軌道や弦の振動は決まらない。

</details>

<details>
<summary>内部自己同型でgluingを変えると球面が移る</summary>

固定群要素 $s\\in SU(2)$ により、標準gluingを $J=s\\bar Js^{-1}$ へ変える。右移動 $g\\mapsto gs$ では $J[gs]=J[g]$、$\\bar J[gs]=s^{-1}\\bar J[g]s$ なので、標準gluingを満たす場の像が、この変更後のgluingを満たす。端点の領域は

$$
\\mathcal W_{J,s}=\\mathcal C_{\\vartheta_J}s
\\tag{translated-brane}
$$

となる。群移動は計量を保ち、球面の大きさは変えない。

$\\Omega_s=\\operatorname{Ad}_s$ とすると、変更後のgluingを保つ左右の対角群は $g\\mapsto ug\\Omega_s^{-1}(u^{-1})$ と作用する。その軌道は

$$
\\mathcal O_{h,s}=\\{uhs^{-1}u^{-1}s\\mid u\\in SU(2)\\}
=\\mathcal C_{hs^{-1}}s.
\\tag{inner-twisted-orbit}
$$

$h=e^{i\\vartheta_J\\sigma_3}s$ を選べば上の移動した球面に一致する。両端を同じ $s$ で移せば大域対称性による変数変換なので開弦スペクトルも変わらない。異なる移動を両端へ施すと相対的な移動が残り、6.2節の異なるgluing間のスペクトルに現れる。

</details>

## 3. 開弦OPEが球面上の関数を行列にする

### 3.1 積の出力に使える開弦の回転成分を数える

球面に沿う座標には、前節で非零のPoisson括弧が得られた。この球面上の境界場を二つ掛けると、どの場がどの係数で現れるのだろうか。まず、積の出力に使える回転成分を確定する。同じCardy境界 $J$ に両端をもつ開弦の状態空間は、6.2節のannulusから

$$
\\mathcal H_{JJ}=\\bigoplus_{j=0}^{j_{\\max}}N_{JJ}{}^j\\mathcal H_j,
\\qquad j_{\\max}=\\min(2J,k-2J)
\\tag{6.38}
$$

と求まる。$\\mathcal H_j$ はアフィン表現、$N_{JJ}{}^j$ はそのfusion多重度で、この和では整数 $j$ が各一回ずつ現れる。各 $\\mathcal H_j$ の最低ウェイト部分は、零モードによるスピン $j$ の有限次元表現 $V_j$ である。対応する境界primaryを $\\psi_{j,m}$、$m=-j,\\ldots,j$ とする。

ここからは **$J$ を固定して $k\\to\\infty$** とする。やがて $j_{\\max}=2J$ となり、primaryの空間は $\\bigoplus_{j=0}^{2J}V_j$ になる。使える回転成分は有限個である。普通の球面の関数をこの成分だけ残して使えばよさそうだが、そのまま掛けてよいかを小さい例で確かめる。

### 3.2 $J=1/2$ の四成分で、積の違いを見る

$J=1/2$ ではprimaryはスカラー一成分とベクトル三成分になる。これを普通の単位球面上の関数 $1,n_1,n_2,n_3$ で表し、点ごとに掛けてみる。すると $n_1^2=1/3+(n_1^2-1/3)$ の第二項はスピン2の成分であり、初めの四成分の中で閉じない。回転の成分を合わせただけでは、境界場の積を得られなかった。必要なのは、許された有限個の成分の中で閉じる積である。

一方、$2\\times2$ 行列の基底 $\\mathbf1,\\sigma_1,\\sigma_2,\\sigma_3$ は同じスカラーとベクトルとして回り、

$$
\\sigma_a\\sigma_b=\\delta_{ab}\\mathbf1+i\\varepsilon_{ab}{}^c\\sigma_c
\\tag{spin-half-fuzzy-product}
$$

という積で四成分の中に閉じる。例えば $\\sigma_1\\sigma_2=i\\sigma_3$ と $\\sigma_2\\sigma_1=-i\\sigma_3$ では順序が区別される。順序が違っても、出力は許された四成分から出ない。これなら先ほどの障害を避けられる。ただし、閉じる積を見つけたことと、それが境界場の積であることは別である。後者は同じ四成分のOPE係数を計算して判定する。

![スカラー一成分とベクトル三成分という回転の分解を、球面の模様と単位行列・Pauli行列で対応させる。](/diagrams/fuzzy-components.svg)

図の対応は回転の成分を対応させている。三つの座標行列は同時対角化できず、球面上の各点に三つの同時固有値を割り当てる図ではない。

同じ回転成分をもつ候補は、スピン $J$ の空間 $V_J$ 上の全行列である。行列単位 $|m\\rangle\\langle n|$ は $V_J\\otimes V_J^*$ として回転し、$SU(2)$ では双対が同じスピンなので

$$
\\operatorname{Mat}(2J+1)\\cong V_J\\otimes V_J^*
\\cong\\bigoplus_{j=0}^{2J}V_j.
\\tag{6.36}
$$

通常の角運動量合成が、開弦と同じ各一回の分解を与えた。次元も $\\sum_{j=0}^{2J}(2j+1)=(2J+1)^2$ と一致する。ただし状態数と回転の一致だけでは、場を掛けた際の係数は決まらない。この候補に対して、OPEの係数を照合する。

<details>
<summary>普通の球面の積から高い成分を削るだけでは結合則を保てない</summary>

$W=\\operatorname{span}\\{1,n_1,n_2,n_3\\}$ とし、球面平均による直交射影を $P$ とする。対称性から $\\langle n_a\\rangle=0$、$\\langle n_an_b\\rangle=\\delta_{ab}/3$ なので

$$
P(f)=\\langle f\\rangle+3\\sum_a\\langle n_af\\rangle n_a.
$$

従って $P(n_1^2)=1/3$、$P(n_1n_2)=0$ であり、射影を毎回はさむ積では

$$
P(P(n_1^2)n_2)=n_2/3,\\qquad P(n_1P(n_1n_2))=0.
$$

括る順序で結果が変わる。有限個の調和成分へ削る操作だけでは、境界場の結合的な積を得られない。行列積は結合則と有限の成分数を同時に保つ候補になる。

</details>

### 3.3 球面のPoisson括弧を座標行列で実現する

前節の $\\{y^a,y^b\\}=f^{ab}{}_cy^c$ を、量子座標の交換子へ置き換える。スピン $J$ のHermitian生成子 $T_a^{(J)}$ は

$$
[T_a^{(J)},T_b^{(J)}]=if_{ab}{}^cT_c^{(J)}
\\tag{6.32}
$$

を満たすので、この交換子を実現する。また座標の二乗和が一定という条件は、Casimir

$$
\\sum_a(T_a^{(J)})^2=J(J+1)\\mathbf1
\\tag{6.33}
$$

に移る。同じCasimir値をもつ有限次元Hermitian表現は、同一スピンの既約表現のコピーだけからなる。一枚の球面には一つの既約表現 $V_J$ を使い、コピーの数は後でブレーンの枚数として扱う。

<!-- reference: fuzzy-sphere -->

生成子 $T_a^{(J)}$ と単位行列から、どこまで行列を作れるかを確かめよう。$T_3^{(J)}$ の異なる固有値への射影は多項式で作れる。その射影の間に昇降演算子の適切なべきを挟めば、各 $|m\\rangle\\langle n|$ を非零定数倍を除いて得られる。これらは全行列の基底なので、生成子と単位行列の和・積が作る代数は

$$
\\mathcal A_J=\\operatorname{End}(V_J)=\\operatorname{Mat}(2J+1).
$$

この有限行列代数を **fuzzy sphereの関数代数**と呼ぶ。球面上のPoisson構造を交換子で実現し、回転の成分が $j\\leq2J$ に切られた量子化である。

<!-- /reference -->

このCasimirが指定するのは座標行列の尺度である。物理的なブレーン半径と比べる際には換算が必要で、特に固定した有限 $J$ では古典的な半径公式を厳密な量子半径として使えない。

<details>
<summary>全行列代数の生成と、Cardy半径との比較</summary>

$T_3|m\\rangle=m|m\\rangle$ とし、異なる固有値への補間多項式

$$
P_m=\\prod_{n\\ne m}\\frac{T_3-n\\mathbf1}{m-n}=|m\\rangle\\langle m|
$$

を作る。$T_\\pm=T_1\\pm iT_2$ の適切なべきの両側に $P_m,P_n$ を掛ければ、非零定数倍を除いて $|m\\rangle\\langle n|$ が得られる。これらが全行列の基底なので、生成される代数は全行列代数である。$J=0$ では単位行列だけから $\\operatorname{Mat}(1)$ を得る。

局所Poisson構造の物理的な係数を戻すと、$\\widehat y^a=(4\\pi/k)T^{(J)a}$ が一次の交換子を実現する。単位元近傍で長さとしての座標は $(R/2)y^a$ なので、行列の二乗和が与える半径は

$$
r_{\\mathrm{mat}}=2\\pi\\sqrt{\\frac{\\alpha'}k}\\sqrt{J(J+1)}.
$$

Cardy角度を古典計量へ入れた半径は、小角度 $J/k\\ll1$ で

$$
r_J=R\\sin\\vartheta_J
\\simeq2\\pi\\sqrt{\\frac{\\alpha'}k}\\left(J+\\frac12\\right).
$$

$\\sqrt{J(J+1)}=\\sqrt{(J+1/2)^2-1/4}$ なので、$1\\ll J\\ll k$ では両者の主要項が一致する。Casimirによる係数の相対差は $O(J^{-2})$、角度の小角度展開による相対誤差は別に $O(k^{-1})+O((J/k)^2)$ である。

固定した小さい $J$ では相対差は残る。例えば $J=0$ の行列座標は零だが、有限 $k$ の $R\\sin\\vartheta_0$ は非零である。これは、一点へ近づく分布の半古典的な位置と、局所Poissonの線形近似を小さい表現で量子化した座標を、同じ厳密な半径と同一視できないことを示す。境界OPEとの代数の一致は、この半径の比較とは独立に確かめる。

</details>

### 3.4 OPEと行列積の係数をそろえる

行列の回転生成子は、群の共役作用 $A\\mapsto UAU^{-1}$ を一次まで展開して

$$
\\ell_aA:=[T_a^{(J)},A]
\\tag{6.35}
$$

と得られる。行列のスピン $j$ 成分の基底を $Y_m^j$ とし、$\\sum_a\\ell_a\\ell_aY_m^j=j(j+1)Y_m^j$、$\\ell_3Y_m^j=mY_m^j$ を満たすように選ぶ。倍率と位相も固定するため、標準Condon–Shortley位相のCG係数で

$$
\\langle J,n'|Y_m^j|J,n\\rangle
:=\\sqrt{2j+1}\\,\\langle Jn,jm\\mid Jn'\\rangle
$$

と定める。$n,n'$ はspin $J$ の磁気量子数である。この基底では $Y_0^0=\\mathbf1$ で、$\\operatorname{tr}((Y_m^j)^\\dagger Y_p^i)/(2J+1)=\\delta_{ji}\\delta_{mp}$ となる。これらをfuzzy spherical harmonicsと呼ぶ。名前にharmonicとあっても、$Y_m^j$ 自体は $V_J$ に作用する行列である。

普通の球面調和関数 $\\mathscr Y_m^j$ の積は、角運動量を合成するClebsch–Gordan係数により

$$
\\mathscr Y_m^i\\mathscr Y_p^j
=\\sum_{\\ell,s}c_{ij\\ell}\\langle im,jp\\mid\\ell s\\rangle\\mathscr Y_s^\\ell
\\tag{6.34}
$$

と展開される。$\\langle im,jp\\mid\\ell s\\rangle$ は入力二つの回転成分を出力の回転成分へ合成する基底変換の係数、$c_{ij\\ell}$ は磁気量子数に依存しない積の強さである。行列積も同じ回転共変性をもち、ある係数 $\\mathcal R_{ij\\ell}^{(J)}$ により

$$
Y_m^iY_p^j
=\\sum_{\\ell\\leq2J,s}\\mathcal R_{ij\\ell}^{(J)}
\\langle im,jp\\mid\\ell s\\rangle Y_s^\\ell
\\tag{6.37}
$$

と書ける。この係数は、行列要素を掛ける際の角運動量の結合順を変える $6j$ 係数で求まる。

境界側の[primaryのOPE](/6-2#ref-boundary-ope)は、順序 $x_1>x_2$、$x_{12}=x_1-x_2$ で

$$
\\widehat\\psi_{i,m}(x_1)\\widehat\\psi_{j,p}(x_2)
=\\sum_{\\ell,s}x_{12}^{h_\\ell-h_i-h_j}
\\langle im,jp\\mid\\ell s\\rangle
\\widehat F_{J\\ell}\\!\\begin{bmatrix}i&j\\\\J&J\\end{bmatrix}
\\widehat\\psi_{\\ell,s}(x_2)+\\cdots.
\\tag{6.39}
$$

$\\widehat F$ は6.1節の正規直交な括り替え係数を用いたfusing matrix、$\\widehat\\psi$ はその規格化での境界場である。$\\cdots$ はdescendantの寄与を表す。行列と同じ回転成分を既に対応させているので、比べるべき残りは距離因子と、このスカラー係数になる。

この照合には、原著 pp.250–251、式 (6.37)–(6.40) の大体積の括り替え結果を使う。境界ラベル $J$ と回転成分のスピンを固定して $k\\to\\infty$ とすると、量子 $6j$ で書かれたfusing係数は通常の角運動量の $6j$ へ近づく。固定 $J$ で許される各 $h_j$ も零へ近づくため、固定した正の $x_{12}$ でprimaryの距離因子は1になる。行列基底と規格化をそろえるため、整数スピン $j$ ごとに

$$
\\psi_{j,m}:=a_j\\widehat\\psi_{j,m},\\qquad a_j:=(-1)^j\\sqrt{2j+1},\\qquad
F_{J\\ell}:=\\frac{a_ia_j}{a_\\ell}\\widehat F_{J\\ell}
$$

と換算する。二つの入力に $a_i,a_j$、出力に $a_\\ell^{-1}$ が掛かるので、この係数変換になる。換算後の係数は $F_{J\\ell}^{(\\infty)}=\\mathcal R_{ij\\ell}^{(J)}$ を満たす。これは、上で採用した括り替え結果を、この場と行列の共通の規格化で書いた一致である。

次に点を近づける。primaryからのウェイトの増分をgrade $N$ と呼ぶと、各descendantの距離因子には $x_{12}^{N}$ が余分に付く。ここでは、固定 $J$ の大体積OPEについて原著式 (6.40) の結果を用いる。先に $k\\to\\infty$、次に $x_1\\to x_2$ とする順序では、正のgradeのdescendantが消え、primaryの積だけが残る。この結果で積を取ると

$$
\\lim_{x_1\\to x_2}\\lim_{k\\to\\infty}
\\psi_{i,m}(x_1)\\psi_{j,p}(x_2)
=\\sum_{\\ell,s}\\mathcal R_{ij\\ell}^{(J)}
\\langle im,jp\\mid\\ell s\\rangle\\psi_{\\ell,s}(x_2).
\\tag{6.40}
$$

式 (6.37) と係数が一致したので、$\\psi_{j,m}\\leftrightarrow Y_m^j$ は、回転の対応に加えて **積を保つ対応**になる。最初の $J=1/2$ へ戻ると、式 (spin-half-fuzzy-product) のPauli行列の積が、そのまま極限の境界場の積になる。二つのベクトル成分を掛けても、恒等場とベクトル成分だけが現れ、普通の積で生じたスピン2は現れない。例えば $\\sigma_1$ に対応する場を先に、$\\sigma_2$ に対応する場を後に掛ければ、$i\\sigma_3$ に対応する場を得る。順序を逆にすれば符号も逆になる。

こうして、どの境界場が積から現れるかを、有限行列の掛け算で計算できるようになった。有限 $k$ のまま点を重ねる場合や、$J$ を $k$ と同程度に増やす場合には、この極限の行列積へそのまま置き換えられない。積の出力は求まったので、次はその出力の期待値を取り、円板の相関関数へ戻す。

<details>
<summary>行列要素から $6j$ の係数と場の規格化を求める</summary>

標準Condon–Shortley位相のClebsch–Gordan係数を使い、行列基底を

$$
\\langle J,n'|Y_m^j|J,n\\rangle
=\\sqrt{2j+1}\\,\\langle Jn,jm\\mid Jn'\\rangle
$$

と定める。右辺の係数は $V_J\\otimes V_j$ 内の、全スピン $J$ の結合基底との重なりである。$Y_0^0=\\mathbf1$ となり、normalized traceによる内積は $\\operatorname{tr}((Y_m^j)^\\dagger Y_p^i)/(2J+1)=\\delta_{ji}\\delta_{mp}$ となる。

行列積の要素は

$$
\\langle J,n'|Y_m^iY_p^j|J,n\\rangle
=\\sqrt{(2i+1)(2j+1)}\\sum_r
\\langle Jr,im\\mid Jn'\\rangle\\langle Jn,jp\\mid Jr\\rangle.
$$

この「$j$ を先に作用させてから $i$ を作用させる」結合を、$i,j$ を先に $\\ell$ へ合成する結合へ変えると、通常のWigner $6j$ を用いて

$$
\\mathcal R_{ij\\ell}^{(J)}
=(-1)^{2J+\\ell}\\sqrt{(2J+1)(2i+1)(2j+1)}
\\begin{Bmatrix}i&j&\\ell\\\\J&J&J\\end{Bmatrix}_{\\mathrm W}
$$

を得る。原著の $\\{\\cdots\\}$ は規格化を含むrecoupling係数であるため、裸のWigner symbolと同じ数とは限らない。unit channelでは $\\mathcal R_{0jj}^{(J)}=1$ であり、$Y_0^0Y_m^j=Y_m^j$ を検算できる。

境界側でも場の規格化を明記する。三点結合を正規直交CG係数で選んだ場を $\\widehat\\psi_{j,m}$、その係数を $\\widehat F$ とする。順に $i,j$ を境界へ結合する標準的なtreeでは

$$
\\widehat F_{J\\ell}^{(\\infty)}
=(-1)^{2J+i+j}\\sqrt{(2J+1)(2\\ell+1)}
\\begin{Bmatrix}i&j&\\ell\\\\J&J&J\\end{Bmatrix}_{\\mathrm W}.
$$

$\\psi_{j,m}=a_j\\widehat\\psi_{j,m}$、$a_j=(-1)^j\\sqrt{2j+1}$ と取ると、二入力と一出力の換算により

$$
F_{J\\ell}^{(\\infty)}
=\\frac{a_ia_j}{a_\\ell}\\widehat F_{J\\ell}^{(\\infty)}
=\\mathcal R_{ij\\ell}^{(J)}.
$$

ここでの $j$ は整数で $a_0=1$ なので恒等場も保つ。別のCG位相やfusing matrixの基底を使うと表示係数も変わるが、同じ換算を両側へ施せば積を保つ対応は変わらない。有限 $k$ での変換には、その有限 $k$ の三点結合の規格化もそろえる。

量子数 $[n]_k=\\sin(n\\pi/(k+2))/\\sin(\\pi/(k+2))$ は固定整数 $n$ で $n$ へ近づく。固定 $J,i,j,\\ell$ では量子 $6j$ の階乗の引数と和の項数が固定されるので、各量子階乗を通常の階乗へ置き換えた極限が上のWigner $6j$ になる。

descendantを落とす際は、有限に規格化した状態の、固定スピン・固定gradeのOPE係数がこの極限で有限である結果を使う。負モード $J_{-n}$ はウェイトを $n$ 上げるため、descendantのgrade $N$ が距離因子の追加次数になる。ここでの積は、まず $k\\to\\infty$ を取り、次に点を近づけてgrade 0へ射影した積である。

</details>

<details>
<summary>$J=1/2$ の境界OPEをPauli行列で検算する</summary>

上の基底では

$$
Y_0^1=\\sigma_3,\\quad
Y_{+1}^1=-\\frac{\\sigma_1+i\\sigma_2}{\\sqrt2},\\quad
Y_{-1}^1=\\frac{\\sigma_1-i\\sigma_2}{\\sqrt2}.
$$

Wigner $6j$ の値と規格化因子から $\\mathcal R_{110}^{(1/2)}=-\\sqrt3$、$\\mathcal R_{111}^{(1/2)}=-\\sqrt2$ を得る。対応するCG係数は、$(m,p)=(0,0)$ のspin 0への係数が $-1/\\sqrt3$、$(1,-1),(-1,1)$ のspin 0への係数がともに $1/\\sqrt3$、spin 1の $m=0$ への係数がそれぞれ $1/\\sqrt2,-1/\\sqrt2$ である。従って極限の積 $\\star$ は

$$
\\psi_{1,0}\\star\\psi_{1,0}=\\mathbf1,\\quad
\\psi_{1,+1}\\star\\psi_{1,-1}=-\\mathbf1-\\psi_{1,0},\\quad
\\psi_{1,-1}\\star\\psi_{1,+1}=-\\mathbf1+\\psi_{1,0}.
$$

Cartesian基底へ戻せば、式 (spin-half-fuzzy-product) と同じ積になる。許される出力はspin 0と1だけで、spin 2はない。

</details>

### 3.5 円板相関関数が行列のtraceになる

行列 $A=\\sum_{j,m}a_{j,m}Y_m^j$ に対応する境界場を、同じ係数で $\\psi[A]:=\\sum_{j,m}a_{j,m}\\psi_{j,m}$ と定める。固定 $J$ の極限では、前のOPEが $\\psi[A]\\psi[B]=\\psi[AB]$ になる。

相関関数を取る操作も求めよう。回転不変な一成分は単位行列だけなので、境界場の期待値は行列のスカラー成分、すなわちtraceに比例する。係数を決める真空結合は $g_J:=B_J^0$ である。一点関数の正弦の比から

$$
\\frac{g_J}{g_0}=\\frac{\\sin((2J+1)\\pi/(k+2))}{\\sin(\\pi/(k+2))}
\\longrightarrow2J+1.
$$

全 $J$ に共通する $g_0$ で円板相関関数を割る規格化を使えば、恒等場の期待値は $2J+1=\\operatorname{tr}\\mathbf1$ になる。

位置への依存には、カレントのWard恒等式とSugawara構成から得るKZ方程式の結果を使う。これは、相関関数の挿入点による変化を与える方程式である。固定スピンでは変化を生成する係数が $1/(k+2)$ に比例するので、互いの距離を正に保つ有限の経路で点を動かすと、その変化は大体積極限で消える。従って、有限に規格化した極限の相関関数は、挿入順を保つ領域で位置に依存しない。その後で点を近づけ、OPEを繰り返して同じ値を求めると

$$
\\left\\langle\\psi[A_1](x_1)\\cdots\\psi[A_n](x_n)\\right\\rangle
=\\operatorname{tr}(A_1\\cdots A_n)
\\tag{6.41}
$$

となる。恒等場の期待値を1にする規格化なら、右辺を $2J+1$ で割る。traceは巡回的な順序変更には不変だが、隣り合う二つの交換には一般に不変でない。$J=1/2$ で三つのPauli成分を入れると $\\operatorname{tr}(\\sigma_1\\sigma_2\\sigma_3)=2i$、順序を一つ交換すると $-2i$ であり、非可換性が円板の三点関数に現れる。

<details>
<summary>KZ方程式から挿入点への依存が消える範囲を確かめる</summary>

$T_a$ がスピン生成子 $[T_a,T_b]=if_{ab}{}^cT_c$ の規約なら、境界primaryの相関関数ベクトル $\\mathcal G_k$ は

$$
\\partial_{x_r}\\mathcal G_k
=\\frac2{k+2}\\sum_{s\\ne r}\\frac{\\sum_aT_{a,(r)}T_{a,(s)}}{x_r-x_s}\\mathcal G_k
$$

に従う。これはgluingによる反射、カレントのWard恒等式、Sugawara構成を使ったchiral KZ方程式である。

全スピンを固定し、互いの距離が正の下限をもつ有限の経路で点を動かすと、右辺の接続行列の積分は $O(1/k)$ となる。従って有限に規格化した極限の相関関数は、各順序領域で一定になる。点間距離を $k$ とともに縮める場合は一様な評価ではないため、式 (6.40) と同じく先に $k\\to\\infty$ を取る。

</details>

### 3.6 行列の大きさを増やすと古典球面の積に近づく

有限行列は角運動量 $j\\leq2J$ の模様しか持たず、任意に細かい角度依存を表せない。古典球面の積を回復する際には、行列の半径を一定に規格化して、調べる模様の角運動量を固定したまま $J\\to\\infty$ とする。

具体的に $N_a:=T_a^{(J)}/\\sqrt{J(J+1)}$ と置くと

$$
\\sum_aN_a^2=\\mathbf1,\\qquad
[N_a,N_b]=\\frac{if_{ab}{}^c}{\\sqrt{J(J+1)}}N_c.
$$

$N_a$ の作用素ノルムは1以下であり、隣り合う二因子を交換する誤差は $O(1/J)$ になる。比べる関数と行列も指定する。古典単位球面の座標を $n_a$ とし、球面調和関数をその対称トレースレス多項式で表す。各 $n_a$ を $N_a$ へ置き換えて全順序の平均を取り、有限個の調和成分へ線形に延ばす写像を $Q_J$ とする。定数は $Q_J(1)=\\mathbf1$ へ移る。

固定次数の球面関数 $f,g$ に対し、$Q_J(f)Q_J(g)$ を対称順序へ並べ替える回数は有限である。球面の関係 $\\sum_an_a^2=1$ も行列のCasimirで再現されるため、作用素ノルムで

$$
\\|Q_J(f)Q_J(g)-Q_J(fg)\\|=O(1/J)\\longrightarrow0.
$$

この対応を通して、固定角運動量の範囲で行列積が古典球面の点ごとの積へ近づく。$J$ と同程度の高い角運動量まで同時に追う主張ではない。

<details>
<summary>関数を対称化行列へ移す写像と積の誤差</summary>

半径 $r$ を固定し、$\\widehat x_a=rN_a$ とすれば $\\sum_a\\widehat x_a^2=r^2\\mathbf1$ となる。古典単位球面の座標 $n_a$ の対称トレースレス多項式で球面調和関数を表し、各 $n_a$ を $N_a$ へ置き換えて全順序の平均を取る写像を $Q_J$ とする。$Q_J(1)=\\mathbf1$ とし、固定した有限個の調和成分へ線形に延ばす。

二つの行列多項式の積を対称順序へ戻す際の差は、有限回の $[N_a,N_b]=O(1/J)$ である。球面の関係 $\\sum_an_a^2=1$ は行列のCasimirで再現されるので、固定次数の $f,g$ に対して

$$
\\|Q_J(f)Q_J(g)-Q_J(fg)\\|=O(1/J)\\to0.
$$

normalized traceも球面平均へ近づく。$N_3$ の固有値は $m/\\sqrt{J(J+1)}$ なので、固定次数のtraceは $\\frac12\\int_{-1}^1du$ のRiemann和へ収束する。他の成分は回転不変性から同じ球面平均を得る。一般の滑らかな関数へ延ばすには、有限調和成分への近似誤差も評価する。

</details>

同じCardyラベル $J$ が、閉弦結合では球面の位置を、開弦OPEでは行列代数を指定した。ただしそれぞれを確立した極限は違う。

$$
\\begin{array}{rcl}
J/k\\text{ を固定した閉弦結合}&\\longrightarrow&\\vartheta_J\\text{ の共役類},\\\\
J\\text{ を固定した開弦OPE}&\\longrightarrow&\\operatorname{End}(V_J)\\text{ の積}.
\\end{array}
\\tag{cardy-label-as-quantised-geometry}
$$

原著第1章の一定磁束を持つ平坦braneの低エネルギー結果を使うと、境界OPEは非可換積を与え、その極限の相関関数は積と積分で表される。ここではfusion則が開弦の角運動量成分を有限に切り、積分に相当する操作が有限行列のtraceになる。原著 p.252 は、適切な極限での同様の切断量子化が他のコンパクト背景にも現れる可能性を指摘するが、一般の場合の証明としては扱わない。

## 4. 境界相互作用から球面上の有効作用へ

### 4.1 ブレーンの枚数と球面の行列サイズを分ける

<!-- reference: brane-stack -->

同じ境界条件 $J$ を $M$ 個重ねた配置を $(M,J)$ とする。重ね合わせでは円板の境界がそのどれであるかを $M$ 通り選べるので、閉弦への各一点関数が $M$ 倍になる。これを同じ形と位置のブレーン $M$ 枚のstackとして読む。追加した内部ラベルをChan–Patonラベルという。

<!-- /reference -->

<!-- reference: chan-paton-open-fields -->

開弦には両端のラベル $r,s=1,\\ldots,M$ が付き、片端を $s$ から $r$ へ変える内部演算子は行列単位 $E_{rs}=|r\\rangle\\langle s|$ になる。従って境界場の空間には $\\operatorname{Mat}(M)$ の因子が加わる。境界に沿う挿入の間でラベルを足し合わせると $E_{rs}E_{tu}=\\delta_{st}E_{ru}$、一周するとtraceとなる。

<!-- /reference -->

既に求めた球面の積と合わせると、stack上のprimaryに対応する行列は

$$
A\\in\\operatorname{Mat}(M)\\otimes\\operatorname{Mat}(2J+1).
$$

二つの因子の意味を区別する。

| 因子 | 記録するもの | 次元 |
|---|---|---|
| $\\operatorname{Mat}(M)$ | 弦端が付くブレーンの番号 | $M^2$ |
| $\\operatorname{Mat}(2J+1)$ | 一枚の球面の角運動量成分 | $(2J+1)^2$ |

円板の境界場相関関数は、両方の因子について積を取りtraceを取る。annulusでは両端を独立に選ぶので、相互作用を入れる前の開弦分配関数は一枚のものの $M^2$ 倍になる。

<details>
<summary>境界上の内部状態を使ってstackと行列因子を構成する</summary>

状態空間 $W=\\mathbb C^M$、Hamiltonian $H_\\partial=0$ の内部量子系を境界に置く。境界の一区間に沿う伝播は $\\langle s|e^{-tH_\\partial}|r\\rangle=\\delta_{sr}$ であり、一周すると $\\operatorname{Tr}_W1=M$ となる。伝播が長さに依存せず、元のCFTから独立なので、この付加だけでは共形性を変えない。

境界場は $\\psi_\\alpha^{JJ}\\otimes E_{rs}$ となり、ウェイトは元の境界場のままである。帯の状態空間も $\\mathcal H_{JJ}\\otimes W\\otimes W^*$ となり、$W\\otimes W^*\\simeq\\operatorname{Mat}(M)$ が同じ行列因子を与える。

ここでの円板振幅は真空分配関数で割る前の量である。内部ラベルに触れない観測を同じ円板の分配関数で割れば $M$ は相殺するが、境界成分が $b$ 個ある世界面の因子 $M^b$ は、異なる世界面の相対的な寄与に残る。

</details>

### 4.2 どの開弦成分を軽い場として残すか

球面上の相互作用を調べるため、primaryの上へカレントを一回励起した状態を使う。その内部ウェイトは $1+h_j$ である。この状態を弦の質量へ結びつけるには、WZW因子を外部時空のCFTへ組み込む。ここでは外部時空を平坦と近似し、ブレーンに沿うNeumann方向の運動量を $p_\\mu$、座標場を $X^\\mu$ とする。その他の因子は真空に固定する。外部の境界頂点 $:e^{ip_\\mu X^\\mu}:$ のウェイトは $\\alpha'p^2$ であり、Lorentz計量を $(-,+,\\ldots,+)$ とし、$p^2$ をその計量での運動量の二乗とすれば $p^2=-m_j^2$ である。

完全な境界頂点は、この外部運動量因子と一回のカレント励起の内部因子を掛けたものである。bosonic開弦の積分するmatter頂点は全ウェイト1を満たす必要がある。外部因子と内部因子のウェイトを足すと $\\alpha'p^2+1+h_j=1$ なので、質量二乗は $m_j^2=h_j/\\alpha'$ となる。従って

$$
m_j^2=\\frac{j(j+1)}{(k+2)\\alpha'},
\\qquad \\Delta m^2=\\frac N{\\alpha'}
$$

である。二番目はさらに弦振動をgrade $N\\geq1$ だけ加えた際の増分である。primary自体を頂点の内部因子に使えば、同じ条件から質量二乗 $(h_j-1)/\\alpha'$ となり、固定 $j$、大きな $k$ ではtachyonになる。以下ではその成分を含めず、一回のカレント励起による場の作用を扱う。

固定した $J,M$ の有限個の成分を残し、追加の振動を無限に重くする条件は

$$
\\alpha'\\to0,\\qquad k\\to\\infty,\\qquad k\\alpha'\\to\\infty.
$$

このとき $m_j^2\\to0$、$\\Delta m^2\\to\\infty$ となる。これで、球面の調和成分を持つ一回励起の場と、追加の弦振動を分けられる。質量を決めたのは境界頂点のウェイトであり、作用にもこの開弦スペクトルに対応する微分と計量を使う。

残した三つの偏極をHermitian行列 $A_a$、$a=1,2,3$ へまとめる。その幾何的な読み方には、開弦の一回励起がNeumann方向ではゲージ接続、Dirichlet方向ではブレーンの位置変化に対応する頂点の同定を使う。滑らかな共役球面として記述できる場合、$S^3$ 内の二つの接方向には磁束を伴うNeumann型の混合条件、残る一つの法線方向にはDirichlet条件を課すので、三成分は接方向のゲージ接続と法線方向の位置変化を合わせている（原著§6.3.4、Alekseev–Recknagel–Schomerus §4）。有限行列でも三つの $A_a$ を残し、球面の半径を固定する制約は課さない。このため、点状ブレーンのstackから球面を作る配置も同じ変数で扱える。tachyonを除いたこのbosonic作用だけで、ブレーンの全安定性を主張するものではない。

### 4.3 円板振幅が微分、積、三次の結合を指定する

カレントの規格化を明記する。$T_a=\\sigma_a/2$ に対応する通常の成分カレントを $\\mathcal J^a$ とすると

$$
\\mathcal J^a(x)\\mathcal J^b(x')
\\sim\\frac{k\\delta^{ab}}{2(x-x')^2}
+\\frac{if^{ab}{}_c\\mathcal J^c(x')}{x-x'}.
\\tag{6.43}
$$

これは6.1節の直交生成子 $\\sigma_a/\\sqrt2$ のカレント成分を $1/\\sqrt2$ 倍した規格化である。原著の式 (6.43) の弦の単位への換算は下の補足に記す。

行列 $A_a$ の各調和成分を境界場へ移した $\\psi[A_a]$ を使うと、頂点の内部因子は

$$
:\\mathcal J^a\\psi[A_a]:(x)
=\\sum_{a;j,m}a_{j,m;a}:\\mathcal J^a\\psi_{j,m}:(x).
\\tag{6.42}
$$

コロンはOPEの特異部分を引いた正規順序積を表す。これが状態 $\\mathcal J^a_{-1}|A_a\\rangle$ に対応し、先に残した一回の励起を表している。完全な弦の頂点は4.2節の外部運動量因子を掛けたものであり、質量殻条件が全ウェイトを1にする。さらにVirasoroの $L_1$ 条件を使うと、内部の横条件 $\\ell^aA_a=0$ が得られる。

<!-- reference: chan-paton-background -->

この頂点を境界に積分する $\\delta S_\\partial\\propto\\int dx\\,:\\mathcal J^a\\psi[A_a]:$ が、行列係数 $A_a$ による境界相互作用である。平坦空間では $\\int a_i(X)\\partial_xX^i dx$ が端点の内部状態の平行移動を指定するゲージ接続の結合になる。WZWではカレントがその微分成分を担い、球面上の係数関数を $\\psi[A_a]$ が担う。従って同じ頂点を、ブレーン上のゲージ場・位置変形の背景へ端点を結合するものとして読む。

<!-- /reference -->

円板の三点・四点振幅でこの頂点を掛け合わせると、次の対応が得られる。

| 世界面の操作 | 行列での結果 |
|---|---|
| primaryのOPEと相関関数 | 行列積とtrace |
| カレントをprimaryへ作用させる一重極 | 回転微分 $\\ell_aA=[T_a,A]$ |
| カレント同士の $f^{ab}{}_c\\mathcal J^c$ の極 | $f_{abc}\\operatorname{tr}(A_aA_bA_c)$ 型の三次結合 |

最後の極は平坦な可換カレントにはなく、曲がった背景に特有の三次項を生む。最低次の四次結合では二重極二組の縮約が寄与し、この非可換カレント項は高次になる。作用の相対係数は、ghost因子、挿入順序の和、四点の交換振幅との分離も含めた計算の結果を用いる（原著 pp.252–254）。上の対応だけから係数を推測するものではない。

<details>
<summary>ゲージ接続としての境界結合と物理状態条件</summary>

平坦空間の境界が $X_i$ から $X_i+\\Delta X_i$ へ進む際、内部状態を運ぶ行列は $U_i=1+ia_j(X_i)\\Delta X_i^j+\\cdots$ である。区間をつなぎ一周すると $\\operatorname{Tr}\\mathcal P\\exp(i\\oint a_jdX^j)$ となる。内部基底を $u(X)$ で変えたとき、一区間の伝播は $u(X_f)U_iu(X_i)^{-1}$ へ変わる。両端の基底変換を相殺する接続の変換が $a_j\\mapsto ua_ju^{-1}-i(\\partial_ju)u^{-1}$ であり、一周のtraceは不変になる。これが係数 $a_j$ にゲージ接続の意味を与える。

WZWの頂点状態では $[L_1^{\\mathrm{Vir}},\\mathcal J^a_{-1}]=\\mathcal J^a_0$、primaryには $L_1^{\\mathrm{Vir}}=0$ である。零モードは行列に $\\ell^a$ として作用するので

$$
L_1^{\\mathrm{Vir}}\\sum_a\\mathcal J^a_{-1}|A_a\\rangle=0
\\quad\\Longrightarrow\\quad \\sum_a\\ell^aA_a=0.
$$

これは散乱振幅の外線に課す横条件である。有効作用を変分する際に全変数へ課す制約ではなく、任意の場へ拡張したゲージ不変な作用を用いる。

滑らかな球面との対応では、単位法線を $n_a$ とすると三成分を $A_a=A_a^\\parallel+n_a\\phi$、$\\sum_an_aA_a^\\parallel=0$ と分けられる。接方向の二成分 $A^\\parallel$ は回転を生成する接ベクトルに沿ったゲージ接続の成分であり、$\\phi$ は法線方向の位置変形を表すscalarである。これは4.2節で採用したNeumann・Dirichlet方向での頂点の同定である。横条件 $\\ell^aA_a=0$ は微分を含み、$\\phi=0$ を要求する条件とは違う。有限行列では、背景と場を合わせた座標の二乗和が背景Casimirからずれる量が、この法線変形に対応する。

</details>

### 4.4 ゲージ不変な作用と共変座標

円板振幅で決まる結合を、任意の行列場へ使えるゲージ不変な作用にまとめる。以下では無次元生成子 $T_a$、微分 $\\ell_a=[\\mathbf1_M\\otimes T_a,\\,\\cdot\\,]$、$\\delta_{ab}$ による縮約を使う。開弦の計量と弦の単位の共通係数を外へ出した表示である。場 $A_a$ もこの表示では無次元とする。

<!-- reference: gauge-conventions -->

この規約で、同種ブレーン $M$ 枚、ラベル $J$ の最低次の作用は

$$
S_{(M,J)}[A]
=\\frac14\\operatorname{tr}(F_{ab}F_{ab})
-\\frac i2\\operatorname{tr}(f_{abc}\\operatorname{CS}_{abc})
\\tag{6.44}
$$

となり、

$$
F_{ab}=i\\ell_aA_b-i\\ell_bA_a+i[A_a,A_b]+f_{ab}{}^cA_c,
\\tag{6.45}
$$

$$
\\operatorname{CS}_{abc}=(\\ell_aA_b)A_c
+\\frac13A_a[A_b,A_c]-\\frac i2f_{ab}{}^dA_dA_c
\\tag{6.46}
$$

と定める。traceは両行列因子について取る。最初の項がYang–Mills項、二番目がこの行列模型のChern–Simons型項である。微分 $\\ell_a$ は球面の因子だけに作用し、$[\\ell_a,\\ell_b]=if_{ab}{}^c\\ell_c$ を満たす。

<!-- /reference -->

停留点の作用値を比較するため、全体規格化もここで固定する。まず弦の単位からの係数には、一次論文の式 (4.18) で作用を無次元にするために掛ける $(2\\pi\\alpha')^2$ を使う。弦の単位では、下げた添字の回転微分・場をそれぞれ $1/\\sqrt{2\\alpha'}$ 倍し、Lie括弧の構造定数 $f_{ab}{}^c$ にも同じ尺度を用いる。開弦逆計量 $G^{ab}=(2/k)\\delta^{ab}$ で添字を上げて縮約すると、式 (6.44) の二項はともに $1/(k^2\\alpha'^2)$ 倍となるので、共通係数は $(2\\pi\\alpha')^2/(k^2\\alpha'^2)=4\\pi^2/k^2$ である。単位換算の詳細は下の補足に記す。

次に、開始配置の円板真空で相関関数を割り、恒等場の期待値を1にする規約を使う。3.5節のtrace表示では、総行列次元 $d=M(2J+1)$ の恒等行列のtraceが $d$ なので、この規約は $\\operatorname{tr}/d$ に対応する。したがって境界エントロピーと比べる無次元作用は

$$
\\mathscr S_{(M,J)}[A]=\\frac{4\\pi^2}{k^2d}S_{(M,J)}[A].
$$

この全体係数は運動方程式を変えないが、作用値の比較には必要である。弦の単位による $4\\pi^2/k^2$ と、円板真空による $1/d$ はそれぞれ以上の規約から固定している。[disk振幅と作用規格化（Alekseev–Recknagel–Schomerus、§§4–5）](https://arxiv.org/html/hep-th/0003187v2)

この場の強さ $F_{ab}$ の意味は、背景と場を合わせると明瞭になる。背景生成子を $T_a^{\\mathrm{bg}}:=\\mathbf1_M\\otimes T_a^{(J)}$ とし、共変座標

$$
X_a:=T_a^{\\mathrm{bg}}+A_a
\\tag{covariant-coordinate}
$$

を作る。すると

$$
F_{ab}=i[X_a,X_b]+f_{ab}{}^cX_c.
$$

ユニタリ基底変換 $X_a\\mapsto UX_aU^{-1}$ のもとで $F_{ab}\\mapsto UF_{ab}U^{-1}$ となり、traceが不変になる。これがゲージ対称性である。背景だけでは $[T_a^{\\mathrm{bg}},T_b^{\\mathrm{bg}}]=if_{ab}{}^cT_c^{\\mathrm{bg}}$ なので $F_{ab}=0$ であり、$F$ はこの回転代数からのずれを測っている。Hermitianな行列 $\\lambda$ をゲージ変換のパラメーターとすると、$A_a$ の無限小変換は $\\delta A_a=i\\ell_a\\lambda+i[A_a,\\lambda]$ と書ける。

式 (6.44) の相対係数では、二つの項の微分を含まない二次項が相殺する。従って一定の変位に質量項が生じず、後でブレーンを移動する解が得られる。Chern–Simons型項の係数を自由に変えると、この性質を失う。ここでは弦の振幅が指定する組合せを使う。

超対称背景へこの作用を使う場合には、bosonicカレントのレベルを $k$ とし、世界面の超対称性を生成する超カレントを保存し、GSO射影という超弦の物理状態を選ぶ射影に適合するブレーンを選ぶ。外部因子を平坦と近似し、同じ低エネルギー極限を取ったとき、$S^3$ に対応する三つの場のbosonic作用が式 (6.44) になるという外部結果を用いる（原著 p.254、Alekseev–Recknagel–Schomerus §4後半）。外部方向のゲージ場、場どうしを混ぜる結合、時空フェルミオンはこの式の対象には含めていない。

<details>
<summary>原著の単位、円板規格化、二次・三次・四次項</summary>

原著の弦の単位の生成子と構造定数は

$$
\\mathsf T_a=\\frac{T_a}{\\sqrt{2\\alpha'}},\\qquad
\\mathfrak f_{ab}{}^c=\\frac{f_{ab}{}^c}{\\sqrt{2\\alpha'}},\\qquad
L_a=\\frac{\\ell_a}{\\sqrt{2\\alpha'}}.
$$

物理単位の場も $A_a^{\\mathrm{phys}}=A_a/\\sqrt{2\\alpha'}$ とする。開弦逆計量は $G^{ab}=(2/k)\\delta^{ab}$ であり、弦の単位のカレント $j^a=\\sqrt{2\\alpha'}\\mathcal J^a/k$ は

$$
j^a(x)j^b(x')\\sim\\frac{\\alpha'}2\\frac{G^{ab}}{(x-x')^2}
+\\alpha'\\frac{i\\mathfrak f^{ab}{}_cj^c(x')}{x-x'},
\\qquad
j^a(x)\\psi[A](x')\\sim\\frac{\\alpha'}{x-x'}\\psi[L^aA](x').
$$

これが原著の式 (6.43) の規格化である。構造定数は $\\mathfrak f^{ab}{}_c=G^{ad}G^{be}G_{cf}\\mathfrak f_{de}{}^f$、$L^a=G^{ab}L_b$ と上げる。二重極は直接 $\\alpha'\\delta^{ab}/k$、一重極も同じ換算で一致する。

物理単位の式 (6.44) へ代入すると、本文の作用全体に $1/(k^2\\alpha'^2)$ が掛かる。これに本文で採用した $(2\\pi\\alpha')^2$ の因子を掛け、開始配置の円板真空で割るtraceの規格化を用いると、上に示した $\\mathscr S_{(M,J)}$ になる。

横条件 $D:=\\ell_aA_a=0$ を満たす外線上での作用の各次数を、本文の単位で書けば

$$
\\begin{aligned}
S_0&=\\frac12\\operatorname{tr}(A_a\\ell_b\\ell_bA_a),\\\\
S_3&=-\\operatorname{tr}((\\ell_aA_b)[A_a,A_b])
+\\frac i3f_{abc}\\operatorname{tr}(A_a[A_b,A_c]),\\\\
S_4&=-\\frac14\\operatorname{tr}([A_a,A_b][A_a,A_b]).
\\end{aligned}
$$

任意の場へ拡張したゲージ不変な表示は $S_0+S_3+S_4+\\frac12\\operatorname{tr}(D^2)$ であり、式 (6.44) に一致する。$D^2$ は外線条件の上で消えるため、その追加は物理振幅を変えない。作用の場の再定義には自由度があり、ここではこの表示を選ぶ。

三点の一つの縮約経路を追うと、二つのカレントを一重極で縮約して残りと二重極で縮約することで $if_{abc}\\operatorname{tr}(A_aA_bA_c)$ が生じる。四点の最低次には二重極二組の三通りの縮約が寄与する。ghostを掛け、全境界順序を足し、軽い場の交換寄与と局所四次結合を分けた結果が上の相対係数になる。

原著 p.254 が比較する既存のfuzzy sphereのYang–Mills模型や任意のYM–CS結合と、この弦からの作用を区別するのも、この特定の相対係数である。

</details>

## 5. 行列の定常点をブレーンの凝縮先として読む

### 5.1 停留条件と、境界RG終点を同定する二つの照合

行列配置を変分して作用の停留点を求める。共変座標 $X_a=T_a^{\\mathrm{bg}}+A_a$ を使うと、式 (6.44) は背景だけの定数を引いた

$$
S_{(M,J)}[A]=P(X)-P(T^{\\mathrm{bg}}),\\qquad
P(X):=\\operatorname{tr}\\left(-\\frac14[X_a,X_b]^2
+\\frac i3f_{abc}X_a[X_b,X_c]\\right)
$$

となる。二次の質量項が相殺することも、この表示から読める。traceを巡回して変分を一つにまとめると、停留条件は $[X_a,[X_a,X_b]-if_{ab}{}^cX_c]=0$ であり、場の強さで書き直せば

$$
\\ell_aF_{ab}+[A_a,F_{ab}]=0.
\\tag{6.49}
$$

である。

境界相互作用の係数は世界面の観測尺度によって繰り込まれる。その変化が境界RG flow、係数の変化率が $\\beta$ であり、$\\beta=0$ が共形境界条件となる固定点を指定する。低エネルギー作用の停留点は、その固定点の候補である。ただし行列方程式を解いただけでは、どの境界CFTへ流れたかは分からない。閉弦側の照合には円板の真空結合 $g$ を使う。その物理的な読み方として、閉弦背景、弦の結合定数、共通する外部・ghost因子を固定したブレーンの張力は、真空結合 $g$ に同じ係数で比例するという結果を採用する（原著 p.255、式 (6.47)–(6.48)）。従って二配置の $g$ の比は張力の比にもなり、$\\ln g$ の差を張力比の対数として読める。原著 §6.3.4 は、次の二つの独立な情報で終点を同定する。

- **開弦側**：解の周りの揺らぎの作用が、候補となる新しいブレーンの作用に一致する。
- **閉弦側**：解を代入した作用値が、両配置の真空結合 $g$ の比から求める境界エントロピー差に一致する。

配置のラベルを $Q=(M,J)$、解を $A=\\Lambda$、候補の終点を $Q'$ とする。$\\delta A$ は解からの揺らぎである。作用の全体規格化も含む無次元作用を $\\mathscr S_Q$ とすれば、照合する式は

$$
\\mathscr S_Q(\\Lambda+\\delta A)
=\\mathscr S_Q(\\Lambda)+\\mathscr S_{Q'}(\\delta A),\\qquad
\\mathscr S_Q(\\Lambda)=\\left[\\ln\\frac{g_{Q'}}{g_Q}\\right]_{\\text{同じ近似次数}}
\\tag{6.47}
$$

である。ここで $g_Q$ は配置 $Q$ の円板真空結合、$\\ln g_Q$ は境界エントロピーである。先に固定した $\\mathscr S_Q$ の規約を使うので、式 (6.47) は解の同定を照合する条件になる。6.2節のCardy係数から

$$
g_{(M,J)}=Mg_J=M\\frac{S_{J0}}{\\sqrt{S_{00}}}
\\tag{6.48}
$$

と分かる。$S_{J0}$ はmodular $S$-matrixの成分で、作用 $S_{(M,J)}$ とは別の量である。$g_{Q'}<g_Q$ なら終点の張力が小さい。式 (6.47) は有効作用を求めた $1/k$ の次数で比べる式であり、全弦作用の厳密等式ではない。

<details>
<summary>共変座標による作用の変分</summary>

$\\delta[X_a,X_b]=[\\delta X_a,X_b]+[X_a,\\delta X_b]$ とtraceの巡回性を用いると、四次項は

$$
\\delta P_4=\\operatorname{tr}\\bigl(\\delta X_b[X_a,[X_a,X_b]]\\bigr)
$$

を与える。三次項では三つの変分が $f$ の反対称性と巡回性で同じ形になるため

$$
\\delta P_3=-i\\operatorname{tr}\\bigl(\\delta X_bf_{ab}{}^c[X_a,X_c]\\bigr).
$$

和が任意のHermitian $\\delta X_b$ で零となる条件が本文の二重交換子の式である。$F_{ab}/i=[X_a,X_b]-if_{ab}{}^cX_c$、$[X_a,\\,\\cdot\\,]=\\ell_a+[A_a,\\,\\cdot\\,]$ を代入すると式 (6.49) になる。

境界RGの尺度変化と標的空間での時間発展は別の操作である。ここでは静的な場の配置とCFTの固定点を照合する。任意の停留点が実際に到達可能なRG終点であることは、この近似の運動方程式だけでは保証されない。

</details>

### 5.2 一定場の可換解とスピン表現の解

まず $\\ell_aS_b=0$ の場 $A_b=S_b$ に制限する。既約 $V_J$ 上の全生成子と可換なので、この場は $S_b\\in\\operatorname{Mat}(M)\\otimes\\mathbf1$、すなわち球面の模様を持たずChan–Paton因子だけに作用する。式 (6.49) は

$$
[S_a,[S_a,S_b]-if_{ab}{}^cS_c]=0
\\tag{6.50}
$$

へ簡約される。

<!-- reference: constant-current-perturbation -->

この一定場に対応する $\\psi[S_a]$ は、球面側では恒等場である。従って頂点の境界積分は

$$
\\delta S_\\partial\\propto\\int dx\\,S_a\\mathcal J^a(x)
$$

になる。以下の二種類の行列は、同じcurrentへ異なる内部状態の結合を指定している。

<!-- /reference -->

可換なHermitian行列 $[S_a,S_b]=0$ は同時対角化できる。各対角成分ではcurrentの境界積分が群の零モード作用を生成し、ブレーンを群多様体内で移す。実際、右移動 $g\\mapsto gs$ はgluingを $J=\\bar J$ から $J=s\\bar Js^{-1}$ へ変え、球面を $\\mathcal C_{\\vartheta_J}s$ へ移す。従ってこの解は $M$ 枚それぞれの移動を表す。この変形は共形性を保つchiral marginal変形である。

もう一つは、三つの行列がスピン表現

$$
[S_a,S_b]=if_{ab}{}^cS_c
$$

をなす場合である。式 (6.50) の内側が零になるので、これも自動的に停留点になる。可換解と異なり、三方向の内部状態を独立には対角化できない。その解が一枚の球面を表すことを、上の二つの照合で調べる。

### 5.3 $M$ 枚の点状ブレーンが一枚の球面になる

出発点を $(M,0)$ とする。$J=0$ の球面因子は $\\operatorname{Mat}(1)$ なので、全自由度は端点の番号を記録する $\\operatorname{Mat}(M)$ にある。$S_a$ に $M$ 次元の既約スピン表現を選び、そのスピンを

$$
J_M:=\\frac{M-1}{2}
$$

と書く。すると $M=2J_M+1$ であり、同じ $M\\times M$ 行列がスピン $J_M$ の球面の関数代数になる。

| 同じ行列 $\\operatorname{Mat}(M)$ の読み方 | 背景 | 揺らぎに作用する微分 |
|---|---|---|
| 凝縮前の点状stack | $T^{\\mathrm{bg}}=0$ | $\\ell=0$ |
| 表現解の周り | $S_a=T_a^{(J_M)}$ | $[S_a,\\,\\cdot\\,]$ |
| 一枚の $J_M$ 球面 | $T_a^{(J_M)}$ | $[T_a^{(J_M)},\\,\\cdot\\,]$ |

数の一致だけでなく、揺らぎの微分も一致している。作用 $P$ は同じ全行列空間で定義されるので

$$
S_{(M,0)}[S+\\delta A]-S_{(M,0)}[S]
=P(S+\\delta A)-P(S)=S_{(1,J_M)}[\\delta A].
$$

三次・四次の相互作用まで同じになる。この両配置の総行列次元はともに $M$ で、円板規格化の係数も同じである。これが開弦側からの球面の同定である。

<details id="note-chan-paton-becomes-space">
<summary>球面へ向かう行列配置と、エネルギー低下</summary>

$M\\geq2$ とし、$A_a=tT_a^{(J_M)}$ という一つの経路へ作用を制限する。$t$ は行列振幅で、$t=0$ が点状stack、$t=1$ が表現解であり、RG時間ではない。$C:=2\\operatorname{tr}\\sum_a(T_a^{(J_M)})^2>0$ とすると、交換関係を $P$ へ代入して

$$
V(t)=C\\left(\\frac{t^4}{4}-\\frac{t^3}{3}\\right),\\qquad
V'(t)=Ct^2(t-1)
$$

を得る。例えば四次項では $\\sum_{a,b}[T_a,T_b]^2=-2\\sum_aT_a^2$、三次項では $f_{abc}T_a[T_b,T_c]=2i\\sum_aT_a^2$ を用いる。

従って $0<t<1$ でエネルギーは減り、$t>1$ では増え、$V(1)=-C/12<V(0)=0$ となる。二次項が消え、背景による三次項が小さい振幅でエネルギーを下げ、四次項が大きい振幅を抑えることが有限の球面解を選んでいる。

![行列振幅tに沿う作用V/C。点状stackのt=0から下がり、表現解のt=1でマイナス十二分の一の極小になる。](/diagrams/sphere-energy.svg)

この曲線は一つの経路での低エネルギー作用であり、全方向の安定性やRG軌道を示すものではない。実際の終点の同定には、本文の揺らぎ作用と真空結合の照合を併せて用いる。

</details>

閉弦側では、式 (6.48) の厳密な結合の比は

$$
\\frac{g_{(1,J_M)}}{g_{(M,0)}}
=\\frac{\\sin(M\\pi/(k+2))}{M\\sin(\\pi/(k+2))}.
$$

固定した $M$ で正弦と対数を展開すると

$$
\\ln\\frac{g_{(1,J_M)}}{g_{(M,0)}}
=-\\frac{\\pi^2(M^2-1)}{6k^2}+O(k^{-3}).
$$

作用側でも、$P(S)=-M J_M(J_M+1)/6$ となる。4.4節で固定した全体規格化では、開始配置 $(M,0)$ の総行列次元は $d=M$ なので、係数 $4\\pi^2/(k^2M)$ を掛ければ

$$
\\mathscr S_{(M,0)}[S]
=-\\frac{4\\pi^2}{6k^2}J_M(J_M+1)
=-\\frac{\\pi^2(M^2-1)}{6k^2}.
$$

最低次の作用値と境界エントロピー差が一致し、負号も終点の低い張力を示す。

<!-- reference: condensation-identification -->

従って、開弦の揺らぎと閉弦の真空結合の両方が

$$
(M,0)\\longrightarrow(1,J_M),\\qquad J_M=(M-1)/2
$$

という凝縮先を支持する。三つのChan–Paton行列がスピン表現になることで、端点の番号として導入した行列空間が一枚の球面の空間依存を担うようになった。

<!-- /reference -->

large-$k$ の作用は終点の候補とその照合を与えた。実際に紫外からそこへ流れるには、current結合の符号と繰り込みによる変化が必要である。次節では反強磁性的な結合を指定し、そのRG方向と有限 $k$ の固定点を与えるCFTの結果を用いる。

<details>
<summary>可約表現、非一定解、他の背景との比較</summary>

$S_a$ が既約ブロックの直和なら、各ブロックが一枚の球面を与え、終点はその重ね合わせになる。一般の $(M,J)$ でも、共変座標 $X_a$ に次元 $M(2J+1)$ の任意の $\\mathfrak{su}(2)$ 表現を選べば $F=0$ の解になる。ここでの表現は $A_a$ 自身ではなく、背景を足した $X_a$ の表現である。$\\ell_aA_b\\neq0$ の非一定場も含まれる。

同じ球面形成は他のNS–NS背景の議論やR–R背景でのdielectric効果とも比較される（原著 pp.255–256）。SU(2) WZWでの利点は、NS–NS背景の模型が世界面CFTとして扱え、有限レベルの補正を境界データで調べられることである。

</details>

## 6. 有限レベルでの凝縮をKondo固定点から求める

### 6.1 Kondo模型の境界相互作用と固定点

large-$k$ の作用では、$M$ 枚の点状ブレーンの端点にスピン $J_M=(M-1)/2$ の行列を結合すると、一枚の $J_M$ 球面を終点の候補として得た。有限 $k$ でも同じ境界条件へ流れるだろうか。その判定には、近似した球面の形より、終点の開弦スペクトルが欲しい。別の分野で、このスペクトルを求める同じ境界問題が現れる。

Kondo模型では、伝導電子のスピンと一つの磁性不純物のスピンを結合する。不純物との散乱をs波へ制限すると空間依存が動径だけになり、Euclid時間 $x$ と動径 $y\\geq0$ の半平面上で、不純物を境界へ置いた問題になる。

$k$ 個の独立な伝導チャネルのスピンカレントを足すと、各チャネルのレベル1の中心項も足され、$\\widehat{\\mathfrak{su}}(2)_k$ のカレントになる。不純物のスピン $J_M$ を $M=2J_M+1$ 次元表現の行列 $\\Lambda_a$ とすると、境界相互作用は

$$
S_{\\mathrm{pert}}\\sim\\lambda\\int dx\\,\\Lambda_a\\mathcal J^a(x,0)
\\tag{6.51}
$$

である。ブレーン側で $S_a=\\Lambda_a$ と置くと、5.2節の境界積分は式 (6.51) と同じスピン表現を同じ $\\widehat{\\mathfrak{su}}(2)_k$ カレントへ結合する。Kondo模型の全状態ではなく、表示したスピンカレントと不純物スピンが結合する部分の固定点スペクトルを、ブレーン端点の内部状態に作用する境界相互作用へ使える。

$\\lambda>0$ を、Hamiltonianに正の $\\lambda\\,\\boldsymbol\\Lambda\\cdot\\boldsymbol{\\mathcal J}$ を加える反強磁性的な結合と定める。currentのウェイトは1なので、この結合は古典的には無次元である。使うKondo RGの結果は、この符号の弱い結合が赤外で増大するというもの（原著 pp.256–258、[Affleck–Ludwig](https://doi.org/10.1016/0550-3213(91)90109-B)）であり、この意味でmarginally relevantと呼ぶ。負の結合に同じRG方向を仮定しない。

固定点が現れる結合については、原著 p.257 がまとめるKondo模型のRG結果を、原著が用いる繰り込まれた結合の表示で採用する。$2J_M\\leq k$ なら有限の繰り込まれた結合 $\\lambda^*$ に赤外固定点があり、$2J_M>k$ なら低温の固定点は無限結合に現れる。前者の有限結合固定点のスペクトルを求める外部結果が、Affleck–Ludwigの「境界スピンの吸収」である。この条件下では、紫外の $V_{J_M}\\otimes\\mathcal H_j$ のスペクトルは固定点で

$$
\\left.\\operatorname{Tr}_{V_{J_M}\\otimes\\mathcal H_j}
q^{H_{\\mathrm{unpert}}+H_{\\mathrm{pert}}(\\lambda)}\\right|_{\\lambda=\\lambda^*}
=\\sum_lN_{jJ_M}{}^l\\chi_l(q)
\\tag{6.52}
$$

となる（原著 pp.257–258、[Affleck–Ludwigのfusion則](https://doi.org/10.1016/0550-3213(91)90109-B)）。$H_{\\mathrm{unpert}}=L_0-c/24$ で、$c=3k/(k+2)$ は中心電荷である。$q$ はannulusの形状が決める $0<q<1$ の重みであり、$\\chi_l$ はアフィン表現 $\\mathcal H_l$ の全状態を数える指標である。$N_{jJ_M}{}^l$ は $SU(2)_k$ のfusion多重度を使う。

相互作用のない紫外ではスピンの $M$ 成分が独立なので、左辺は $M\\chi_j$ である。従って固定点間のスペクトル変化を

$$
M\\chi_j(q)\\longrightarrow\\sum_lN_{jJ_M}{}^l\\chi_l(q)
\\tag{6.53}
$$

と書ける。独立だった有限次元のスピンが、赤外ではアフィン表現とのfusionへ組み込まれることが「吸収」の意味である。

$2J_M=k$ はexact screening、$2J_M<k$ はoverscreeningの場合である。$2J_M>k$ のunderscreeningでは、先に採用したRG結果が無限結合の固定点を指定するので、ここでの有限結合固定点の吸収則を使わない。これで、large-$k$ の表現解を有限 $k$ の境界条件へ移す際の条件 $2J_M\\leq k$ が得られた。次にこの範囲で、開弦の端点へ吸収則を適用して終点のラベルを求める。

### 6.2 開弦の両端へ吸収則を適用する

$M$ 枚の $J=0$ ブレーンでは、両端の番号を独立に選ぶので、分配関数は $M^2\\chi_0$ である。片端へ式 (6.53) を適用すると、$0\\star J_M=J_M$ より $M\\chi_{J_M}$ になる。もう片端にも適用すると

$$
M^2\\chi_0\\longrightarrow M\\chi_{J_M}
\\longrightarrow\\sum_jN_{J_MJ_M}{}^j\\chi_j
=Z_{(1,J_M)}.
$$

最後の式は、一枚のCardy境界 $J_M$ の自己annulusと一致する。ラベルも同定するため、他端を試験境界 $0$ に固定する。この場合はstack側の一端だけに吸収則を使うので

$$
Z_{0,(M,0)}=M\\chi_0
\\longrightarrow\\sum_lN_{0J_M}{}^l\\chi_l
=\\chi_{J_M}=Z_{0,J_M}.
$$

$0\\star J_M=J_M$ により、試験境界とのスペクトルは $J_M$ を直接選ぶ。従って

$$
(M,0)\\longrightarrow(1,J_M),\\qquad M-1=2J_M\\leq k
\\tag{6.54}
$$

の凝縮が有限レベルにも存続する。最初にlarge-$k$ の作用から得たラベル $J_M$ が、有限 $k$ の固定点スペクトルからも選ばれた。ただし今同定したのは共形境界条件であり、有限 $k$ のブレーンを厚みのない古典球面へ置き換えたわけではない。

この方法なら、低エネルギー作用を有限 $k$ で求め直さなくても、指定したcurrent相互作用の終点を計算できる。必要なのは吸収するスピンと、元の境界ラベルのfusionである。

同じ規則は $J$ 型の球面を $M=2J_M+1$ 枚重ねた配置にも使える。終点は

$$
(M,J)\\longrightarrow\\bigoplus_lN_{J\\,J_M}{}^l(1,l)
$$

となり、fusionで現れる各ラベルの境界条件の重ね合わせになる。$J=0$ を代入すれば $N_{0\\,J_M}{}^l=\\delta_{J_M,l}$ なので、初めの一枚への凝縮を再現する。有限 $k$ のfusion切断もこの式に含まれる。終点のラベルは求まった。では、枚数が変わるこのflowの前後で、何が保存されるのだろうか。

<details>
<summary>任意の試験境界とのannulusで終点を判定する</summary>

他端に任意のCardy境界 $I$ を置く。stack側だけに吸収則を用いると

$$
\\begin{aligned}
M\\sum_jN_{IJ}{}^j\\chi_j
&\\longrightarrow\\sum_{j,r}N_{IJ}{}^jN_{jJ_M}{}^r\\chi_r\\\\
&=\\sum_lN_{J\\,J_M}{}^l\\sum_rN_{Il}{}^r\\chi_r.
\\end{aligned}
$$

二行目はfusionの結合則による。任意の $I$ とのannulusが、このラベルの重ね合わせとのannulusへ変わっている。$J=0$ なら一つの $J_M$ だけが現れ、式 (6.54) を再現する。

</details>

## 7. RG flowが保存する電荷を数える

一枚ずつ数えた整数を、そのままブレーン電荷にできるだろうか。北極側の一枚の電荷を $q_0$ とすると、$M$ 枚には $Mq_0$ を割り当てるのが自然である。しかし、電荷には重ね合わせに対する加算性だけでなく、許される境界RG flowの前後で変わらないことも要求する。この二つを、いま求めた凝縮先と照合する。

ここからは原著 pp.258–259 が扱う**超対称模型**の電荷を考える。$k$ は引き続きbosonicアフィン因子のレベルで、全超対称カレントのレベルは $\\kappa=k+2$ である。同じ向きのブレーン、共通のフェルミオン・外部因子、許容スピンの範囲で、bosonic境界ラベルが上のfusion則に従う結果を使う。R–R閉弦への結合だけを整数電荷とみなすと有限レベルでは適切に量子化されないため、原著はRG不変な電荷から調べている。

式 (6.54) によれば、$M=2J+1$ 枚が一枚の $J$ 型へ流れる。従ってRG不変性は、その一枚の電荷を $(2J+1)q_0$ に指定する。最大の許容枚数 $M=k+1$ では、終点は $J=k/2$ なので $q_{k/2}=(k+1)q_0$ になる。

ここで、同じ終点を別の経路から見る。南極側のこの境界条件は、向きまで含めると北極側の反ブレーンを移動したものに対応する（原著 p.258）。反ブレーンは電荷の符号を逆にし、移動は電荷を変えないので、同じ終点には $q_{k/2}=-q_0$ と割り当てる必要がある。球面の位置だけでは向きは分からず、この反ブレーンの同定は追加の入力である。

| 同じ終点 $J=k/2$ への到達の仕方 | 保存される電荷 |
|---|---|
| 北極側の $k+1$ 枚を凝縮する | $(k+1)q_0$ |
| 北極側の反ブレーンを移動する | $-q_0$ |

両方が同じ電荷を与える条件は

$$
(k+1)q_0=-q_0,\\qquad (k+2)q_0=0.
$$

である。非零の整数 $q_0$ では、この関係を満たせない。必要なのは、$q_0$ を繰り返し足すと零に戻る有限周期の電荷である。この関係だけなら、周期は $k+2$ の約数と分かる。

周期を正確に決める別の結果が、$S^3$ の $H$ 磁束を組み込んだtwisted K-theoryである。ここで $H$ は、この超対称背景の反対称場から局所的に $H=dB_{\\mathrm{bulk}}$ と得られる3形式である。その球面上の積分をWZWの量子化単位で数えた整数磁束classが、twist $\\kappa$ を指定する。$\\kappa=k+2$ 単位の磁束をもつこの球面因子のtwisted K-groupは $\\mathbb Z_{k+2}$ となり、北極側の一枚が生成元になる。この外部結果を用い、電荷を枚数の $k+2$ による余りとして扱う。[SU(2)の電荷とtwisted K-group（Fredenhagen–Schomerus、§§2.3, 4.3）](https://arxiv.org/pdf/hep-th/0012164)

同じ終点へ戻って検算すると、$k+1$ 枚の余りは $k+1$、反ブレーンの $-1$ も $k+2$ で割った余りは $k+1$ であり、二つの割り当てが一致する。整数としての枚数は変わっても、得られた周期の電荷は変わらない。任意の許容ラベル $J$ に対しても、式 (6.54) から一枚の電荷は $(2J+1)q_0$、すなわち $2J+1$ の余りとして読める。

これで、冒頭の「枚数を数える」操作を、凝縮と反ブレーンの移動に両立する数え方へ修正できた。ただし、一つのflowの関係だけで完全な電荷群を証明したわけではない。周期が正確に $k+2$ であることには、この背景のtwisted K-groupとの照合を使った。すべての許容境界条件とflowを分類したという主張には進まない。

<details>
<summary>超対称模型への移行、南極側の位置、分類の射程</summary>

超対称 $SU(2)$ 因子は、全カレントからフェルミオン双線形を分離すると、レベル $k=\\kappa-2$ のbosonicカレントと三つの自由フェルミオンの積へ書ける。最大対称境界ではcurrentとフェルミオンをgluingし、超カレントにも $G=\\pm\\bar G$ を課す。完全な超弦背景では外部因子とGSO射影へ適合する境界条件を選ぶ。

超対称なゲージ場頂点はフェルミオンによる状態と、その超対称descendantから作るので、境界相互作用にはcurrent項とフェルミオン項が伴う。bosonic作用 (6.44) が同じでも、bosonic模型のtachyonを残したまま超対称電荷の議論へ移るものではない。原著 pp.254, 258 と原論文の適合する超対称背景についての結果を使っている。

有限 $k$ で $J=k/2$ の角度は $\\vartheta_{k/2}=\\pi-\\pi/(k+2)$ であり、閉弦の有限個の波から得る分布は文字通り南極のdeltaではない。$J=0$ も同様である。原著Figure 6.2の、点から球面が大きくなり赤道を越えて縮む像は、これらの境界条件の半古典的な配置を表す。電荷の関係は、有限レベルの厳密なflowと向きの同定から求めている。

K理論では、ブレーンと反ブレーンの生成・消滅なども含めた電荷の同値類を扱い、twisted K理論はそこに背景の積分 $H$ 磁束を組み込む。原著は、すべての許容共形境界条件やすべてのRG flowが既知ではないことにも注意する。一つのflowから完全な電荷群を証明したわけではなく、RGで得た関係と、この背景の数学的なtwisted K-groupを照合している。一般の背景でどのK理論が全弦的な電荷を捉えるかは、別に判定する必要がある。

</details>

閉弦の一点関数からは共役球面の位置が、開弦OPEからは有限行列の積が得られた。さらに、その行列を境界currentへ結合すると別のCardy境界へ流れ、有限 $k$ でもfusion則で終点を選べた。同じラベル $J$ を、位置、積、凝縮先の三つの計算で使い直せるようになった。超対称背景では、その凝縮で変わる枚数から、保存される $k+2$ 周期の電荷も読み取れる。

## 参考文献

- Recknagel–Schomerus, *Boundary Conformal Field Theory and the Worldsheet Approach to D-Branes*, Chapter 6, pp.245–259。§6.3.1、式 (6.24)–(6.25)：閉弦波と球面への局在。§6.3.2、式 (6.26)–(6.31)：gluing、共役類、磁束、局所Poisson構造。§6.3.3、式 (6.32)–(6.41)：有限行列と境界OPE。§6.3.4、式 (6.42)–(6.54)：有効作用、凝縮、Kondo固定点、電荷。
- 同書 §6.2、式 (6.16)–(6.23)：Cardy境界状態の真空結合、開弦スペクトル、boundary primaryのOPE。
- G. Felder, J. Fröhlich, J. Fuchs and C. Schweigert, [“The geometry of WZW branes”](https://arxiv.org/abs/hep-th/9909030), §2：境界状態の位置表示。
- N. Seiberg and E. Witten, [“String Theory and Noncommutative Geometry”](https://arxiv.org/abs/hep-th/9908142), §2.1：局所一定背景の境界伝播関数。
- A. Yu. Alekseev, A. Recknagel and V. Schomerus, [“Brane dynamics in background fluxes and non-commutative geometry”](https://arxiv.org/abs/hep-th/0003187), §§4–5：disk振幅、作用の規格化、古典解。
- I. Affleck and A. W. W. Ludwig, [“The Kondo effect, conformal field theory and fusion rules”](https://doi.org/10.1016/0550-3213(91)90109-B)：境界スピンとfusionによる固定点スペクトル。
- S. Fredenhagen and V. Schomerus, [“Branes on Group Manifolds, Gluon Condensates, and twisted K-theory”](https://arxiv.org/abs/hep-th/0012164), §§4–5：超対称模型の電荷とtwisted K-theoryとの比較。
`},{id:`6-4`,section:`6.4`,shortTitle:`WZW coset と orbifold`,content:`# 6.4 WZW模型のorbifold・cosetとbrane

6.3では、境界状態のbulk一点係数を群上の波動関数への応答として読み、$SU(2)$のbraneが共役二球面に局在することを得た。また、annulusのcharacter展開は、そのbraneを両端に持つ開弦のsectorと重複度を与えた。ここでは、$SU(2)$の点を対称性で同一視して別の理論を作り、この二つの測定から商空間のbraneを決める。

最初の例は $SO(3)=SU(2)/\\mathbb Z_2$ である。$g$ と $-g$ を同じ点とみなす。共役球面を指定する $\\operatorname{Tr}g$ の符号も反転するので、北側と南側の球面は一枚に重なる。$\\operatorname{Tr}g=0$ の赤道球面は、自分自身へ移る。この球面では、境界条件は一種類で尽きるのだろうか。形だけでは区別できない二種類の境界条件が生じる理由を、開弦の状態から確かめる。

次は、連続な部分群 $H\\subset G$ を使うcoset模型である。$g$ と $hgh^{-1}$ を同じ点とすると、例えば $SU(2)$ にはどんな座標が残るだろうか。その座標を表す量子状態は、親のWZW模型の状態のどこにあるのだろうか。座標と状態を順に求め、最後に、親理論の球面braneがdiskのどこへ写るかを調べる。ここでも、braneの位置と弦の状態の両方を使う。

## 1. $SO(3)$ orbifold：赤道braneの二種類の境界条件

$SO(3)=SU(2)/\\mathbb Z_2$ では、親理論の球面braneが中心作用で重ね合わされる。赤道球面は集合として自分自身へ移る。この一枚の球面から、商の境界条件は何種類作れるだろうか。まず点の同一視を確認し、弦の状態と端点の自由度にも同じ作用を与えて調べよう。

### 1.1 中心作用による球面と表現ラベルの同一視

$SU(2)\\simeq S^3$ を単位四元数の球面とみなすと、中心作用 $g\\mapsto-g$ はantipodal作用である。各点は反対点へ移るので、この作用は自由である。共役類は $\\operatorname{Tr}g=2\\cos\\vartheta$ を一定にした球面であり、中心作用は $\\vartheta\\mapsto\\pi-\\vartheta$ として北側と南側の球面を交換する。商ではこの対が一枚の球面となる。赤道 $\\operatorname{Tr}g=0$ は集合として保たれ、その商は

$$
S^2/(x\\sim-x)=\\mathbb{RP}^2
$$

となる。以下では、この幾何を与えるCFTとしてレベル

$$
k=4n,\\qquad n\\in\\mathbb Z_{>0}
$$

の場合を扱う。

親 $SU(2)_k$ 理論のsectorは $j=0,\\frac12,1,\\ldots,2n$ である。sector $\\mathcal H_j$ はspin $j$ の有限次元基底状態とcurrentの励起からなり、その基底ウェイトは $h_j=j(j+1)/(k+2)$ である。中心作用がbraneを交換する規則を、同じ表現ラベルの上でも求めよう。任意のsectorとfusionしても単一のsectorを与えるものを **simple current** と呼ぶ。この模型では

$$
j_{\\rm sc}:=\\frac{k}{2}=2n,
\\qquad
\\iota(j):=j_{\\rm sc}\\star j=2n-j
$$

が非自明なsimple currentとその作用を与える。[fusion則](/6-1#ref-fusion)の出力範囲に $j_{\\rm sc}=2n$ を入れると、下限 $|2n-j|$ と上限 $\\min(2n+j,2n-j)$ がともに $2n-j$ となるためである。$j_{\\rm sc}\\star j_{\\rm sc}=0$ なので、$\\{0,j_{\\rm sc}\\}$ はfusionについて $\\mathbb Z_2$ を作る。

braneにも親理論のsectorと同じ範囲のラベル $J$ が付く。6.3で一点係数から得た局在角は $\\vartheta_J=\\pi(2J+1)/(k+2)$ である。$k=4n$ を代入すれば、上のfusionによるラベル変換は

$$
\\vartheta_{\\iota(J)}
=\\frac{\\pi(4n-2J+1)}{4n+2}
=\\pi-\\vartheta_J.
\\tag{simple-current-reflects-latitude}
$$

orbit $[J]=\\{J,2n-J\\}$ は一般に二要素をもち、$J=n$ だけが一要素となる。この群作用で動かないラベルを **fixed label** と呼ぶ。対応する共役類は

$$
\\vartheta_n=\\frac\\pi2,
\\qquad \\operatorname{Tr}g=0
\\tag{fixed-label-is-equator}
$$

という赤道である。対応する赤道球面は集合として保たれるが、その上の各点は反対点へ移る。したがって標的空間に固定点はない。

$k=4n$ という条件は、simple currentをchiral algebraへ加えるときに現れる。その共形ウェイトは

$$
h_{j_{\\rm sc}}
=\\frac{2n(2n+1)}{4n+2}=n\\in\\mathbb Z.
$$

ここでは、自己局所的なsimple currentを加えると局所的・結合的な拡張OPEを構成できるという原著§4.A.3の結果を使う。自己局所性とは、追加する場どうしを一周させても位相が変わらない条件である。整数ウェイトを持つこのmoduleをvacuum moduleと合わせ、$\\mathcal A_{\\rm ext}=\\mathcal H_0\\oplus\\mathcal H_{j_{\\rm sc}}$ を拡張代数の候補とする。次節で自己局所性を確認し、さらにどのsectorが拡張した場と両立するかを求める。

<details id="so3-level-condition">
<summary>$SO(3)$のWZ位相と、本節で$k=4n$を選ぶ理由</summary>

WZ位相の量子化だけなら偶数 $k$ が必要である。被覆を $p:SU(2)\\to SO(3)$、商の規格化した3形式を $\\omega$ とすると、被覆の次数2から $\\int_{SU(2)}p^*\\omega=2\\int_{SO(3)}\\omega$ である。親理論のfluxが整数 $k$ なので、商上のfluxは $k/2$ となり、これも整数でなければならない。

本節ではさらに、追加するsimple currentのウェイト $h_{k/2}=k/4$ を整数にして、通常の局所的なchiral algebra拡張を使う。このため $k=4n$ に範囲を絞った。偶数levelの全てを本節の公式が扱うわけではない。

</details>

### 1.2 閉弦のtwisted sectorとorbifold分配関数

商で閉じる弦を被覆 $SU(2)$ へ持ち上げると、始点へ戻るものと、反対点で終わるものがある。後者も $g\\sim-g$ によって閉じるため、両方を状態空間に含める必要がある。

![SU(2)でUから反対点マイナスUへ至る開いた道を、UとマイナスUを同一視する射影でSO(3)へ写すと閉じたループになる。](/diagrams/orbifold-loop.svg)

親空間の場 $X(\\sigma)\\in SU(2)$ に対して

$$
X(\\sigma+2\\pi)=(-1)^aX(\\sigma),\\qquad a=0,1
$$

を課し、得られる閉弦の状態空間を $\\mathcal H_{\\rm cl}^{(a)}$ と書く。$a=0$ がuntwisted sector、$a=1$ が **twisted sector** である。

この二種類の閉じ方が、loopを縮められるかどうかも決める。三次元球面 $S^3$ 上のloopは一点へ縮められるという位相の結果を使う。商のloopを連続変形しても、被覆へ持ち上げた道の終点が $g$ か $-g$ かは、離れた二択なので変わらない。$a=1$ の道は、定数loopの閉じ方 $a=0$ には変えられず、商でも一点へ縮められない。一方、二周すると持ち上げた道が閉じ、$S^3$ 上で縮められる。その縮小を商へ写せば、商の二周も縮められる。このloopの二種類と連結則を $\\pi_1(SO(3))=\\mathbb Z_2$ と書く。

さらに各sectorで中心作用の不変状態を選ぶ。中心作用の演算子を $U_a$ とすれば、射影子は $(1+U_a)/2$ なので

$$
\\begin{aligned}
\\mathcal H_{\\rm orb}
&=\\left(\\mathcal H_{\\rm cl}^{(0)}\\right)^{\\mathbb Z_2}
\\oplus\\left(\\mathcal H_{\\rm cl}^{(1)}\\right)^{\\mathbb Z_2},\\\\
Z_{\\rm orb}&=\\frac12\\sum_{a,b=0}^1Z_{a,b},\\\\
Z_{a,b}&=\\operatorname{Tr}_{\\mathcal H_{\\rm cl}^{(a)}}
\\left(U_a^b q^{L_0-c/24}\\bar q^{\\bar L_0-c/24}\\right).
\\end{aligned}
$$

$b$ は時間方向の貼り合わせに中心作用を入れるかどうかを表す。torusの周期を交換する $S$ 変換は $(a,b)\\mapsto(b,a)$、$T$ 変換は $(a,b)\\mapsto(a,b+a)$ と四つの振幅を移す（添字はmodulo 2）。

親のbulk基底状態に対応する波動関数はspin $j$ の表現行列 $D^j(g)$ である。$D^j(-g)=(-1)^{2j}D^j(g)$ だから中心元の作用は $(-1)^{2j}$ となる。currentは中心作用で不変なので、同じ符号がsector全体に作用する。以下、$\\chi_j(q)=\\operatorname{Tr}_{\\mathcal H_j}q^{L_0-c/24}$ を親のchiral characterとする。

untwistedだけを射影すると整数spinの対角項が残る。しかし射影のtraceに入れた中心作用は、torusの二周期を交換すると空間方向のtwistへ移るため、この対角和だけではmodular不変にならない。twisted振幅を求めるには、既知のsine型 $S$ 行列に $\\iota(r)=2n-r$ を入れる。$\\sin((2j+1)\\pi-x)=(-1)^{2j}\\sin x$ より $S_{j,\\iota(r)}=(-1)^{2j}S_{jr}$ だから、$Z_{0,1}$ の $S$ 変換で $\\chi_r\\overline{\\chi_s}$ に掛かる係数は

$$
\\sum_j(-1)^{2j}S_{jr}\\overline{S_{js}}
=\\sum_jS_{j,\\iota(r)}\\overline{S_{js}}
=\\delta_{s,\\iota(r)}.
$$

従って $Z_{1,0}=\\sum_j\\chi_j\\overline{\\chi_{\\iota(j)}}$ である。さらに $T$ は各交差項へ $e^{2\\pi i(h_j-h_{\\iota(j)})}=e^{2\\pi i(j-n)}=(-1)^{2j}$ を掛け、$Z_{1,1}$ を与える。$Z_{0,0}+Z_{0,1}$ と $Z_{1,0}+Z_{1,1}$ は、それぞれこの符号が正の整数spinだけを二倍して残す。四振幅を平均すると、

$$
Z_{\\rm orb}
=\\sum_{\\substack{j=0\\\\j\\in\\mathbb Z}}^{2n}
\\left(|\\chi_j|^2+\\chi_j\\overline{\\chi_{2n-j}}\\right).
$$

ここで対角項はuntwisted、交差項はtwistedの不変部分から来る。twistによる交差の相手 $2n-j$ は、simple currentの作用 $\\iota(j)$ である。

<details id="so3-torus-amplitudes">
<summary>中心作用を入れたtraceのmodular変換と、四振幅の平均</summary>

untwistedの二振幅は、恒等演算子または中心作用を挿入したtraceである。それらを$S,T$変換するとtwistedの二振幅を得る。

$$
\\begin{aligned}
Z_{0,0}&=\\sum_j|\\chi_j|^2,&
Z_{0,1}&=\\sum_j(-1)^{2j}|\\chi_j|^2,\\\\
Z_{1,0}&=\\sum_j\\chi_j\\overline{\\chi_{\\iota(j)}},&
Z_{1,1}&=\\sum_j(-1)^{2j}\\chi_j\\overline{\\chi_{\\iota(j)}}.
\\end{aligned}
$$

ここで $S_{\\iota(i),j}=(-1)^{2j}S_{ij}$ と $S$ のunitarityを使った。具体的には、$Z_{0,1}$ の $S$ 変換で $\\chi_r\\overline{\\chi_s}$ に掛かる係数が

$$
\\sum_j(-1)^{2j}S_{jr}\\overline{S_{js}}
=\\sum_jS_{j,\\iota(r)}\\overline{S_{js}}
=\\delta_{s,\\iota(r)}
$$

となり、交差項を生む。また $T$ 変換の位相は $e^{2\\pi i(h_j-h_{\\iota(j)})}=e^{2\\pi i(j-n)}=(-1)^{2j}$ である。従って四振幅の平均はmodular不変であり、実際に和を取ると

$$
Z_{\\rm orb}
=\\sum_{\\substack{j=0\\\\j\\in\\mathbb Z}}^{2n}
\\left(|\\chi_j|^2+\\chi_j\\overline{\\chi_{2n-j}}\\right).
$$

</details>

半整数spinの項は射影で消えた。残った二要素orbitでは、$j$ と $2n-j$ の対角項・交差項が $|\\chi_j+\\chi_{2n-j}|^2$ にまとまる。fixed label $j=n$ では対角項と交差項が同じになる。よって

$$
\\boxed{
Z^{SO(3)}(q,\\bar q)
=\\sum_{j=0}^{n-1}
\\left|\\chi_j(q)+\\chi_{2n-j}(q)\\right|^2
+2\\left|\\chi_n(q)\\right|^2
}
$$

を得る。和は整数 $j$ について取り、これは $D_{\\mathrm{even}}$ modular invariantと呼ばれる。この計算で確認したのはtorusのmodular不変性である。以後の境界場の積には、有限群orbifold境界CFTの構成結果を入力として使い、該当箇所でその内容を指定する。

整数spinだけが残る条件を、chiral algebra拡張でも確かめる。simple currentの場とsector $j$ の場のOPEは、fusion先 $\\iota(j)$ に向かい、距離の冪 $h_{\\iota(j)}-h_{j_{\\rm sc}}-h_j$ を持つ。この冪の小数部分が、一方の場を他方の周囲に一周させたときの位相を定める。逆向きの位相を $e^{2\\pi iQ_{\\rm sc}(j)}$ と書いた量が **monodromy charge** であり、

$$
\\begin{aligned}
Q_{\\rm sc}(j)
&:=h_{j_{\\rm sc}}+h_j-h_{\\iota(j)}\\pmod1\\\\
&=n+\\frac{j(j+1)-(2n-j)(2n-j+1)}{4n+2}
=j\\pmod1.
\\end{aligned}
$$

分子の差が $(2j-2n)(2n+1)$ となることを使った。従って、拡張した場とのmonodromyが自明な $Q_{\\rm sc}=0$ のsectorは、射影に残った整数spinと一致する。$Q_{\\rm sc}(j_{\\rm sc})=2n\\equiv0$ は追加する場の自己局所性を確認している。また $Q_{\\rm sc}(2n-j)\\equiv j$ なので、この条件はorbit全体で共通である。

拡張代数では、二つの親sectorが追加した場の作用で結ばれ、$\\chi_j+\\chi_{2n-j}$ が一つのcharacterとなる。一方、$n$ は作用の前後で同じなので、この方法だけでは二つのコピーを区別できない。固定ラベルを動かさない群を **stabilizer** と呼ぶ。$n$ のstabilizerは $\\mathbb Z_2$ 全体で、その非自明元に $+1$ または $-1$ を割り当てる二つの一次元表現がある。原著§4.A.3のfixed-point resolutionでは、この符号を指定して二つの拡張sectorに分ける。上の $2|\\chi_n|^2$ は、それらを親characterで書いたものに当たる。

### 1.3 赤道braneの二つのholonomyと開弦スペクトル

赤道の商は一つの $\\mathbb{RP}^2$ である。それでも境界条件が二つに分かれるのは、何が違うからだろうか。まず幾何では、$\\mathbb{RP}^2$ 上の端点の運び方を指定する。

二次元球面 $S^2$ のloopも一点へ縮められるという位相の結果を使う。$\\mathbb{RP}^2=S^2/(x\\sim-x)$ のloopを被覆へ持ち上げると、道の終点は $x$ または $-x$ になる。前節と同じく、連続変形はこの二択を変えず、反対点で終わる道は商の非可縮loopを表す。二周の持ち上げは $S^2$ で閉じて縮められるため、商でも二周は縮められる。

端点の複素一次元の自由度を各点へ付けたものをline bundleと呼び、loopを一周したときの位相をholonomyと呼ぶ。flatなline bundleでは、この位相はloopの連続変形で変わらず、可縮loopには1を与える。連続した二周では位相を二度掛けるので、非可縮loop一周のholonomy $\\epsilon$ は $\\epsilon^2=1$ を満たし、$\\epsilon=\\pm1$ となる。どちらも、被覆上の端点座標 $z\\in\\mathbb C$ に対する $(x,z)\\sim(-x,\\epsilon z)$ という同一視で作れる。同じ位置の商に対し、端点の運び方は二通りある。

この端点同一視は、stabilizerの一次元表現 $W_\\epsilon=\\mathbb C$ に中心元を $\\gamma_\\epsilon=\\epsilon\\,\\operatorname{id}$ として作用させる選択である。ここで、親currentのgluingを保つsimple-current orbifoldの境界構成結果（原著§4.A.3、§6.4.1）を使う。固定orbitの基本境界条件には、stabilizerの既約端点表現を指定する。その二つの一次元表現に対応する基本braneを $[n]_\\epsilon$ と書く。この境界のfixed-point resolutionでは、bulkの分解で現れた群が端点の同一視にも作用する。large-volumeでは上で構成した二つのflat line bundleを与え、局在集合との対応は

$$
\\begin{array}{c|c}
\\text{境界条件}&\\text{商での幾何}\\\\\\hline
[J]\\quad(J<n)&\\text{二つの共役類を同一視した球面}\\\\
[n]_\\epsilon&\\mathbb{RP}^2\\text{ とholonomy }\\epsilon
\\end{array}
\\tag{so3-brane-destination}
$$

となる。図の上段は二つの共役類が一つの球面へ移る操作、下段は一枚の赤道に対する二つの端点同一視を示す。$+$ と $-$ の違いは、局在集合の違いではなくholonomyの違いである。

![北側と南側の共役二球面がSO(3)の一つの球面へ写る。赤道の反対点同一視はRP2を作り、同じRP2上で端点を同一視する符号がプラスまたはマイナスの二braneを区別する。](/diagrams/so3-conjugacy-quotient.svg)

一方、CFTでは境界条件を、その両端を持つ開弦のsectorと重複度から調べられる。同じ $\\mathbb{RP}^2$ 上の端点同一視を開弦へ作用させ、holonomyの二択と状態の二つの射影が同じ選択を表すかを確かめよう。

閉弦の射影は、中心作用で変わらないbulk状態を選んだ。境界条件は、親braneとその像を合わせた配置を商へ降ろして作る。したがって、親brane一枚が単独で中心作用に不変である必要はない。ここでは親の $\\widehat{\\mathfrak{su}}(2)_k$ currentのgluingを保ち、拡張で加えた場のgluingまで一律に固定しない境界条件を含める。このため、整数spinのbulk sectorだけでなく、半整数を含む全ての親Cardy labelを出発点にする。[simple-current orbifoldの境界構成](https://arxiv.org/abs/hep-th/0108126)により、二要素orbitは

$$
[J]=\\{J,2n-J\\},
\\qquad J=0,\\frac12,1,\\ldots,n-\\frac12
$$

というbraneを与える。半整数 $J$ のbraneも、その像と合わせて商の境界条件になる。

親の赤道brane間の開弦空間はfusion則から

$$
\\mathcal H_{nn}=\\bigoplus_{j=0}^{2n}\\mathcal H_j,
\\qquad j\\in\\mathbb Z
$$

である。中心作用 $U_{nn}$ はaffine currentの全modeと可換で、各 $\\mathcal H_j$ は重複度1の既約moduleであるため、作用はmodule全体で一つの符号になる。その値は原著式 (4.111), (4.112) のbraiding dataを本模型へ適用すると

$$
U_{nn}\\big|_{\\mathcal H_j}=(-1)^j
$$

となる（原著§6.4.1、式 (6.56)）。この有限levelの構成結果を用いるので、符号は全descendantにも共通する。

開弦は、始点の端点自由度を終点の端点自由度へ写す。したがって両端が $\\epsilon',\\epsilon$ の開弦には、波動状態とともに写像 $T:W_{\\epsilon'}\\to W_\\epsilon$ も付く。その変換は $\\gamma_\\epsilon T\\gamma_{\\epsilon'}^{-1}=\\epsilon\\epsilon'T$ であり、全群作用は

$$
\\mathcal U_{\\epsilon\\epsilon'}(\\psi\\otimes T)
=(U_{nn}\\psi)\\otimes(\\gamma_\\epsilon T\\gamma_{\\epsilon'}^{-1}).
$$

商で残るのは $\\mathcal H_{nn}\\otimes\\operatorname{Hom}(W_{\\epsilon'},W_\\epsilon)$ の不変部分である。その射影traceは

$$
Z_{\\epsilon\\epsilon'}(q)
=\\operatorname{Tr}\\left[\\frac{1+\\mathcal U_{\\epsilon\\epsilon'}}2q^{L_0-c/24}\\right]
=\\sum_{j=0}^{2n}\\frac{1+\\epsilon\\epsilon'(-1)^j}{2}\\,\\chi_j(q).
$$

従って

$$
\\boxed{
Z^{SO(3)}_{[n]_\\pm[n]_\\pm}(q)
=\\sum_{p=0}^{n}\\chi_{2p}(q),
\\qquad
Z^{SO(3)}_{[n]_\\pm[n]_\\mp}(q)
=\\sum_{p=1}^{n}\\chi_{2p-1}(q)
}
\\tag{6.56}
$$

となる。同符号の端点には偶数spin、異符号には奇数spinが残る。holonomyの積 $\\epsilon\\epsilon'$ が、親のspin $j$ の符号を打ち消すかどうかで決まったのである。二つのbraneの局在集合は同じでも、この不変状態の選び方は異なる。従って、位置を測るだけでは得られない端点の情報を、開弦スペクトルから取り出せる。

例えば恒等場を含む $j=0$ のsectorでは親の符号が $+1$ なので、射影係数は $(1+\\epsilon\\epsilon')/2$ となる。同じholonomyの両端ならこのsectorがあり、異なるholonomyの間では消える。これで、冒頭の「同じ $\\mathbb{RP}^2$ 上の二つの境界条件」を実際に区別できる。

未分裂braneは $[n]=[n]_+\\oplus[n]_-$ である。両端を独立に選ぶ四つの振幅を足せば

$$
Z^{SO(3)}_{[n][n]}(q)
=Z_{++}+Z_{--}+Z_{+-}+Z_{-+}
=2\\sum_{j=0}^{2n}\\chi_j(q),\\qquad j\\in\\mathbb Z
\\tag{6.55}
$$

を得る。これで四種類の端点の組合せごとに状態数が決まった。次に必要なのは、それらの場を掛けたとき、途中の端点がどう接合するかである。この境界OPEには、群作用と両立する親OPEからorbifoldの積を構成する [Matsubara–Schomerus–Smedbäck](https://arxiv.org/abs/hep-th/0108126) の結果を用いる。この構成では、不変な場どうしの積は不変部分へ閉じる。

### 1.4 赤道braneの境界OPEとcrossed product

開弦を数える式 (6.55) には、各spinが二コピーずつ現れた。次に、それらの場を掛けたときに四種類の端点がどう接合するかを調べる。

赤道braneの系列 $J=n=k/4$ に沿って $k\\to\\infty$ とする。この極限では、どの固定整数spin $j$ もやがて上限 $2n$ 以下になり、$h_j=j(j+1)/(k+2)\\to0$ となる。その基底場を球面調和関数 $Y_m^j$ と対応させれば、全ての固定 $j$ を通じて赤道 $S^2$ の関数を再構成できる。currentのdescendantは正整数の励起エネルギーを持つので、この低エネルギー代数には含めない。原著によれば、この極限では赤道上の $B$-fieldが消え、未分裂braneの境界OPEは、以下のcrossed productの積へ収束する（原著 p.262）。

球面の反対点を交換する作用を関数へ移したものを $\\iota^*$ と書く。

$$
(\\iota^*f)(x)=f(-x),
\\qquad
\\iota^*Y_m^j=(-1)^jY_m^j.
$$

この作用を実装する生成子 $\\theta$ を関数代数に加え、

$$
\\theta^2=1,
\\qquad \\theta f=(\\iota^*f)\\theta
$$

を課して得られる代数

$$
A=C^\\infty(S^2)\\rtimes_{\\iota^*}\\mathbb Z_2
$$

を **crossed product algebra** と呼ぶ。一般要素は $f+h\\theta$ であり、各整数spinに $Y_m^j$ と $Y_m^j\\theta$ の二multipletを持つ。これが未分裂スペクトル (6.55) の二重化に対応する。別の元を $u+v\\theta$ と書く。$u,v$ も $S^2$ 上の関数である。積は上の関係だけで定まり、例えば

$$
(f+h\\theta)(u+v\\theta)
=fu+h(\\iota^*v)
+\\bigl(fv+h(\\iota^*u)\\bigr)\\theta
$$

となる。群作用を挟むと、次の関数が反対点で評価されることがこの積に組み込まれている。

同じ代数の中でresolved braneを取り出すには、群生成子 $\\theta$ の固有値を $\\epsilon$ に限定する。対応する射影子を $e_\\epsilon=(1+\\epsilon\\theta)/2$ とすれば、$e_\\epsilon e_{\\epsilon'}=\\delta_{\\epsilon\\epsilon'}e_\\epsilon$ である。$\\epsilon'$ から $\\epsilon$ への開弦を表す部分は

$$
A_{\\epsilon\\epsilon'}:=e_\\epsilon A e_{\\epsilon'}.
$$

途中の端点が一致する二つの開弦を接合すると

$$
(e_\\epsilon a e_{\\epsilon'})(e_{\\epsilon'}b e_{\\epsilon''})
=e_\\epsilon a e_{\\epsilon'}b e_{\\epsilon''}
\\in A_{\\epsilon\\epsilon''},
\\qquad a,b\\in A
$$

となる。つまり $A_{\\epsilon\\epsilon'}A_{\\epsilon'\\epsilon''}\\subset A_{\\epsilon\\epsilon''}$ というblockの積が、開弦の接合を表している。

スペクトルとの対応も同じ生成関係から読み取れる。$e_\\epsilon Y_m^j=Y_m^j e_{\\epsilon(-1)^j}$ なので、

$$
e_\\epsilon Y_m^j e_{\\epsilon'}\\ne0
\\quad\\Longleftrightarrow\\quad
\\epsilon'=\\epsilon(-1)^j.
$$

これは式 (6.56) の射影条件である。対角blockの偶な関数は $\\mathbb{RP}^2$ 上の関数へ降りる。非対角blockの奇な関数は、反対点の同一視で符号が変わるため、二つのflat line bundleの間を写すsectionとなる。このようにcrossed productは、四種類の開弦とその積を一つの代数にまとめる。

### 1.5 力学と電荷

球面braneの力学には、ラベル $J$ を固定した $k\\to\\infty$ 極限を用いる。6.3では、この極限の低い開弦modeが行列代数 $\\operatorname{Mat}(2J+1)$ を作り、三つの行列値場のYang--Mills項とChern--Simons項を組み合わせた有効作用を得た。原著p.262によれば、この作用の計算は商の球面braneにも引き継がれる。原点に重ねたD0-braneのstackは不安定で、一枚の球面braneへ膨張するという力学的結論も、同じ原著p.262の入力として用いる。6.3の凝縮結果を使うと、$M$ 枚のD0-braneの端点行列 $S_a$ が既約spin $(M-1)/2$ 表現を作る解は、一枚の球面braneに対応する。行列サイズが元の枚数 $M$ であり、Casimir条件 $\\sum_a S_a^2=((M-1)/2)((M+1)/2)\\mathbf1$ が半径一定の行列球面を与える。これは停留点の形だけからの同定ではなく、6.3で開弦スペクトルと一点応答を照合した結果を引き継いだものである。前節の赤道代数では $J=k/4$ がレベルとともに増えており、この二つの極限は異なるスケーリングを用いている。

braneの電荷は、直和配置で加算でき、許された凝縮で保存される量として定める。$k=4n$ の未分裂braneについて、[Matsubara–Schomerus–Smedbäck §4.1](https://arxiv.org/abs/hep-th/0108126) は電荷群への寄与を

$$
\\mathbb Z_{k/2+1}=\\mathbb Z_{2n+1}
$$

とする。これは、この部分の電荷を整数の $2n+1$ による剰余で区別するという結果であり、背景の全braneを含む電荷群をここで決めたわけではない。

赤道のresolved braneにはさらに追加chargeがあり、large-$k$ ではtwisted sectorの閉弦との結合から測定できる（原著p.262、同論文§4.1）。ここで結合とは、その閉弦のbulk場の境界一点係数を指す。同じ $\\mathbb{RP}^2$ を台とする二つのbraneの違いは、開弦の射影に加えて、この閉弦への応答にも現れる。

<details id="so3-charge-source-convention">
<summary>未分裂braneの電荷について、書籍と一次論文で異なる位数</summary>

書籍p.262は $k=4n$ のもとで未分裂braneの寄与を $\\mathbb Z_{n+1}$ と記している。一方、同書がこのorbifoldの構成に参照するMatsubara–Schomerus–Smedbäckの一次論文§4.1（論文p.13、PDF第14ページ）は、同じ $k=4n$ の条件で $\\mathbb Z_{k/2+1}$ と記す。二つの表記は $k=4n$ を代入しても一致しない。

本文では一次論文の $\\mathbb Z_{2n+1}$ を採用した。書籍の $\\mathbb Z_{n+1}$ を別の独立したcharge寄与として加えてはいけない。また、resolved braneの追加chargeを含む全電荷群は、この一つの値だけから決まらない。

</details>

## 2. coset模型：状態の分解とbraneの幾何

ここまでは離散群 $\\mathbb Z_2$ によるorbifoldを扱った。次は、compact Lie群 $G$ の連続部分群 $H\\subset G$ を使い、$h\\in H$ による共役変換で結ばれた点を同じ点とする。群要素を表す座標のうち、どれがこの変換で動き、どれが変わらないのだろうか。

まず $SU(2)$ と $U(1)$ の行列を使って、残る座標を求めよう。そのあと、親WZW模型の状態を $H$ currentの作用に従って分解し、cosetで数える状態を定める。

左右に同じ埋め込み $H\\subset G$ を使う **vector gauging** を選ぶ。このときゲージ変換は

$$
g\\longmapsto hgh^{-1}
$$

という共役作用になる。本節の $G/H$ は、$g$ と $hgh^{-1}$ を同じ点とする共役作用の軌道空間である。通常の右剰余類 $gH$ との混同を避けるため、以下では必ずこの作用で商を取る。その射影、すなわち群要素をその軌道へ送る写像を

$$
\\pi^G_{G/H}:G\\longrightarrow G/H
\\tag{coset-orbit-projection}
$$

とする。この共役作用を使って、残る座標を実際に求める。

$SU(2)$の群要素を、二つの複素数 $\\alpha,\\beta$ を用いて

$$
g=
\\begin{pmatrix}
\\alpha&\\beta\\\\
-\\beta^*&\\alpha^*
\\end{pmatrix},
\\qquad |\\alpha|^2+|\\beta|^2=1
$$

と書く。次に、Cartan部分群 $U(1)$ の元を位相 $\\omega$ で

$$
h=
\\begin{pmatrix}
\\omega&0\\\\0&\\omega^*
\\end{pmatrix},\\qquad |\\omega|=1
$$

と書く。この共役作用を計算すると、

$$
hgh^{-1}
=
\\begin{pmatrix}
\\alpha&\\omega^2\\beta\\\\
-(\\omega^2\\beta)^*&\\alpha^*
\\end{pmatrix}
$$

となる。したがって$\\alpha$は不変で、$\\beta$の位相だけがorbitに沿って変わる。

$\\alpha$を固定すると$|\\beta|=\\sqrt{1-|\\alpha|^2}$も決まり、$|\\alpha|<1$では$U(1)$作用が$\\beta$のすべての位相を動かす。よって一つのorbitは一つの複素数$\\alpha$で表され、その範囲は

$$
\\boxed{|\\alpha|\\le1.}
$$

これは複素平面の閉diskである。$|\\alpha|$ が1へ近づくにつれて $\\beta$ の円は縮み、境界 $|\\alpha|=1$ では $\\beta=0$ の一点になる。この点では $U(1)$ のどの元も群要素を動かさない。diskの縁は、軌道を動かす自由度が失われる場所として現れた。

![同じalphaをもつ群要素のbetaの位相円全体がdiskの一点に写る。alphaの絶対値が1になるとbetaの円は一点へ縮み、その像はdiskの縁にある。](/diagrams/coset-orbits.svg)

orbifoldとcosetの違いは、一点の近くに残る方向を比べると見える。反対点同一視 $g\\sim-g$ では、十分小さな近傍は離れた別の近傍と重なるだけなので、各点の近くの三方向は保たれ、$SO(3)$ も三次元である。一方、$SU(2)$ に $U(1)$ が共役で作用するcosetでは、一般の点を動かす連続した一方向を同一視するため、二方向が残る。

この共役作用を、世界面の各点で独立に行えるゲージ対称性にした理論がvector gauged WZW模型である。ここで用いる $SU(2)/U(1)$ のsigma modelには、[Maldacena–Moore–Seiberg §2.2、式 (2.20), (2.21)](https://arxiv.org/abs/hep-th/0105038) の結果を採用する。ゲージ場を積分した理論には、disk上の長さを定める計量と、弦の相互作用の強さを位置に応じて定めるdilatonという場が現れる。従って、上で求めたdiskは座標の範囲を表しており、長さや相互作用にはこれらの場も必要になる。

残る座標は分かった。では、それを測る演算子と、その演算子が作用する量子状態をどう選ぶか。まず $H$ currentの全modeと可換な場を集め、その後で親の状態空間を分解する。この二つを構成してから、ゲージ量子化した理論との対応を述べる。

### 2.1 cosetの対称代数とVirasoro生成子

まず局所的なcurrent代数を定める。$G$のcurrent algebraのレベルを$k_G$とし、affine代数まで延びる埋め込み $\\mathfrak h\\hookrightarrow\\mathfrak g$ を選ぶ。不変内積$(\\ ,\\ )_G,(\\ ,\\ )_H$は、simple因子では長根の長さの二乗を2に、abelian因子ではcurrentの二点関数を固定するように選ぶ。以下のlevel式は $H$ の各simple因子または一つの $U(1)$ 因子ごとに用いる。複数因子では $T^H$ を各因子のSugawara tensorの和とし、高次元abelian部分では中心項の内積行列を使う。一因子について、$G$ 側の内積を $\\mathfrak h$ へ制限すると、$H$ 側の内積の一定倍になる。この倍率を **embedding index** $x_e$ と呼ぶ。同じ内積がcurrentの中心項を定めるため、$H$ currentのレベル $k_H$ は

$$
\\boxed{k_H=x_ek_G.}
$$

となる。倍率の定義を二つの元 $X,Y$ で書けば

$$
(X,Y)_G=x_e(X,Y)_H,
\\qquad X,Y\\in\\mathfrak h\\subset\\mathfrak g
$$

である。

残る局所演算子を定めよう。親chiral algebra $\\mathcal A_G$ のうち、全ての $H$ current $K^a(z)$ とのOPEが正則な場を集め、

$$
\\mathcal A_{G/H}=\\operatorname{Com}(\\widehat{\\mathfrak h}_{k_H},\\mathcal A_G)
$$

と定義する。$K^a$ のcontourを二つのcoset場を囲むように動かすと、どちらからも留数が出ない。従ってその二場のOPEの各係数場も $K^a$ と正則であり、積はこの集合の中に閉じる。結合性は親OPEから継承する。この代数のエネルギーを、二つのSugawara構成から求める。

以下の$L_n^G$はlevel $k_G$、$L_n^H$は誘導level $k_H$で[Sugawara構成](/6-1#ref-sugawara)したVirasoro生成子である。cosetの生成子を

$$
\\boxed{
L_n^{G/H}:=L_n^G-L_n^H
}
\\tag{6.57}
$$

と定める。

$H$ currentのmodeを $K_m^a$ とする。currentは両方のSugawara stress tensorに対して共形ウェイト1を持つため、

$$
[L_n^G,K_m^a]=-mK_{n+m}^a,\\qquad
[L_n^H,K_m^a]=-mK_{n+m}^a.
$$

差を取れば $[L_n^{G/H},K_m^a]=0$ となる。$L_n^H$ 自体も $H$ currentの二次式なので、$L_n^{G/H}$ と $L_m^H$ は可換である。従って

$$
T^G=T^{G/H}+T^H
$$

という互いに可換な分解になる。$G$のVirasoro交換関係から$H$の交換関係を引くと、混合交換子が零なので差もVirasoro代数となり、その中心項は二つの中心項の差である：

$$
\\boxed{
c_{G/H}=c_G(k_G)-c_H(k_H).
}
$$

$H$の励起に使われるエネルギーを差し引くことで、それ以外の励起のエネルギーだけを測っている。

<details id="coset-virasoro-check">
<summary>Virasoro生成子の差の交換関係と中心電荷</summary>

$H$のcurrentを$K_m^a$と書く。currentの共形ウェイトは両方のSugawara構成で$1$なので

$$
[L_n^G,K_m^a]=-mK_{n+m}^a,
\\qquad [L_n^H,K_m^a]=-mK_{n+m}^a.
$$

差を取ると$[L_n^{G/H},K_m^a]=0$となる。$L_m^H$も$H$のcurrentの二次式なので、$[L_n^{G/H},L_m^H]=0$である。$L_n^G=L_n^{G/H}+L_n^H$を$G$のVirasoro交換関係に入れ、$H$の交換関係を差し引けば

$$
[L_n^{G/H},L_m^{G/H}]
=(n-m)L_{n+m}^{G/H}
+\\frac{c_G-c_H}{12}n(n^2-1)\\delta_{n+m,0}
$$

を得る。混合交換子が消えるため、中心電荷も単純な差になる。

</details>

### 2.2 状態の分岐とcoset sectorの同一視

$\\widehat{\\mathfrak g}_{k_G}$の既約sectorを$\\mathcal H^G_\\lambda$、$\\widehat{\\mathfrak h}_{k_H}$の既約sectorを$\\mathcal H^H_{\\lambda'}$と書き、許容labelの集合をそれぞれ$I_G,I_H$とする。$H$ currentは$G$の表現上に作用するので、$G$のsectorを$H$のsectorへ分解できる。

同じ $H$ 表現が三コピー現れる有限次元の例を考えよう。状態を指定するには、コピーの中のベクトルと、三つのうちどのコピーかの二つを指定する。$H$ の演算子は各コピーの内部で同じように作用する。一方、$H$ と可換な演算子は、コピー間を移すことができる。このコピーを区別する三次元空間が **多重度空間** である。

同じ分解をaffine sectorにも使う。分母sector $\\lambda'$ のコピーを区別する空間を $\\mathcal H_{(\\lambda,\\lambda')}$ と書くと、親の状態空間は

$$
\\boxed{
\\mathcal H^G_\\lambda
=\\bigoplus_{\\lambda'}
\\mathcal H_{(\\lambda,\\lambda')}
\\otimes
\\mathcal H^H_{\\lambda'}.
}
$$

となる。$\\mathcal H_{(\\lambda,\\lambda')}$ は、分母sector $\\lambda'$ が親sectorの中に何度、どのエネルギーで現れるかを記録する **分岐多重度空間** である。$H$ currentで一つのコピーの内部を励起する状態は右の因子に入り、コピーを区別する状態とそのエネルギーは左の空間に残る。

cosetでは、各直和成分のうちこの多重度空間を状態空間として使う。$H$ currentの全modeは $\\mathcal H^H_{\\lambda'}$ の内部に作用し、それと可換なcosetの場はコピー側に作用する。特に $L_n^{G/H}$ はこの多重度空間だけに作用し、$L_0^{G/H}$ がそのエネルギーを測る。分母labelは、どの $H$ sectorに伴う空間を選んだかを記録している。

この意味で、cosetは $H$ currentが作る励起を数えず、そのコピーを担う状態を残す。零modeだけを取り扱っているのではなく、$\\mathcal H^H_{\\lambda'}$ には $H$ currentの全modeによる励起が入っている。標準のcompact cosetでは、正整数levelの可積分moduleから出発し、ゲージ制約を実装するために対応する分母の補助moduleを加える構成を用いる。このゲージ量子化後の物理状態が、上の分岐多重度空間に対応するという結果を採用する。これはゲージ量子化と代数的cosetを結ぶ外部入力であり、上の分解だけからゲージ量子化を導いたわけではない。詳しい条件とBRST構成は下の補足に記す。

characterの言葉では、上のHilbert空間の分解は

$$
\\chi^G_\\lambda(q,z_H)
=\\sum_{\\lambda'}
b_{(\\lambda,\\lambda')}(q)
\\chi^H_{\\lambda'}(q,z_H)
$$

となる。ここで$z_H$は$H$のCartan chargeを数える変数である。$L_0^G=L_0^{G/H}+L_0^H$と$c_G=c_{G/H}+c_H$により、各直和成分で$q^{L_0-c/24}$のtraceが二因子に分かれる。係数$b_{(\\lambda,\\lambda')}(q)$は残った多重度空間上のtrace、すなわちcoset characterである。

分岐だけでは、零の空間をラベルとして残したり、同じcoset表現を二度数えたりしてしまう。以下では、有限種類の既約sectorを持つrational cosetを選び、非零の分岐空間が下の同一視と必要な固定点分解によってそのsectorを与えることを仮定する。分岐公式だけから、どのcosetでもこの性質を持つとは結論しない。

この分解から二つの規則が生じる。

1. **selection rule**：
   
   $$
   \\mathcal E
   :=\\{(\\lambda,\\lambda')\\in I_G\\times I_H
   \\mid\\mathcal H_{(\\lambda,\\lambda')}\\neq0\\}
   $$
   
   だけを許す。これは、分子sector $\\lambda$ を $H$ へ制限したときに、分母sector $\\lambda'$ が実際に現れるという条件である。
2. **field identification**：異なる許容ラベル対であっても
   
   $$
   \\mathcal H_{(\\lambda,\\lambda')}
   \\cong
   \\mathcal H_{(\\mu,\\mu')}
   $$
   
   なら同じcoset sectorなので、
   
   $$
   (\\lambda,\\lambda')\\sim(\\mu,\\mu')
   $$
   
   と同一視する。本節で用いる模型では、この同一視は、分子と分母のラベルへ同時にfusionするsimple-current対から生じる。その有限群を $\\Gamma_{\\mathrm{id}}$ と書く。

$\\Gamma_{\\mathrm{id}}$ が許容ラベル対の集合 $\\mathcal E$ に自由に作用し、すべてのorbitが同じ長さ $N_0=|\\Gamma_{\\mathrm{id}}|$ を持つ場合、sector集合は

$$
\\boxed{I_{G/H}=\\mathcal E/\\!\\sim}
$$

によりラベルされる。$\\Gamma_{\\mathrm{id}}$ の作用に固定点がある場合は、この単純な商だけでは足りず、orbifoldの$[n]_\\pm$と同様のfixed-point resolutionや追加sectorが必要になる。

ここから一般公式には、$\\Gamma_{\\mathrm{id}}$ が自由に作用し、追加のsectorを要しない場合だけを用いる。3節のminimal modelはこの条件を満たす。以後、coset sectorを $i=[(\\lambda,\\lambda')]\\in I_{G/H}$ と書く。角括弧はfield-identification同値類を表し、括弧内はその代表である。cosetのcharacterを $\\chi_i=b_{(\\lambda,\\lambda')}$ と表す。

<details id="coset-gauged-action">
<summary>Vector gauged WZWの作用とゲージ対称性</summary>

共役軌道の同一視を世界面の理論として実現するため、$\\mathfrak h$ に値を取るゲージ場 $A_z,A_{\\bar z}$ を導入し、位置に依存する $h(z,\\bar z)$ による共役変換をゲージ対称性とする。その作用は、traceとWZW作用の規約を揃えて

$$
\\begin{aligned}
S_{\\rm gauged}[g,A]=S^G_{k_G}[g]
+\\frac{k_G}{2\\pi}\\int d^2z\\,\\operatorname{Tr}_G\\bigl(
&A_{\\bar z}\\partial_zg\\,g^{-1}-A_zg^{-1}\\partial_{\\bar z}g\\\\
&+A_{\\bar z}gA_zg^{-1}-A_zA_{\\bar z}\\bigr)
\\end{aligned}
$$

である。ここでは $A\\mapsto hAh^{-1}+dh\\,h^{-1}$、$g\\mapsto hgh^{-1}$ の規約を用いる。$A$ に運動項は加えず、経路積分で $A$ も積分し、ゲージ変換で結ばれる配置を同一視する。左右の埋め込みが誘導する内積が等しいため、左右のゲージanomalyは相殺する。levelの整数性と大域的に許されるゲージ群・sectorも指定する必要があり、以下では標準のcompact cosetを選ぶ。開いた世界面では、後に現れる共役類積上の境界2形式を加えてWZ作用を定義する。[Elitzur–Sarkissian §3、式 (3.2)–(3.18)](https://arxiv.org/abs/hep-th/0108142) はこの境界作用とその変分・量子化条件を与えている。

ゲージ場を消去して得るsigma modelは、共役orbitを座標とし、ゲージ場の積分から計量とdilatonも受け継ぐ。上で求めたdiskはこのsigma modelの座標空間であり、場の運動と量子効果は、受け継いだ計量とdilatonにも依存する。

</details>

<details id="coset-brst-branching">
<summary>BRST量子化と分岐多重度空間の対応</summary>

標準のcompact cosetでは、正整数levelの可積分moduleと対応する分母の補助moduleを用いると、量子化後の物理状態は分岐多重度空間 $\\mathcal H_{(\\lambda,\\lambda')}$ に収まる。この対応は [Hwang–RhedinのBRST coset構成](https://arxiv.org/abs/hep-th/9305174) から採用する。

BRST記述では、ゲージ固定によって分母の補助currentとghostを加え、ゲージ制約を表す冪零演算子 $Q$ に対して $\\ker Q/\\operatorname{im}Q$ を取る。$Q^2=0$ は誘導levelと補助current・ghostのanomaly相殺に依存する。非abelianのsimple分母では、補助currentのlevelを $-k_H-2h_H^\\vee$ とし、分母の基底最高ウェイトに対応する補助moduleはnull状態を持たないものを選ぶ（同論文§3、定理、式 (3.9)）。$h_H^\\vee$ は分母Lie代数のdual Coxeter数である。ghostのCartan零modeによる重複を除いた相対cohomologyを取ると、非零の成分はghost数0だけとなり、各分母moduleの励起が相殺され、その多重度空間が残る。abelian分母なら、対角chargeを固定した上で、その振動子とゲージ・ghostの振動子を除く操作になる。

したがって単に $K_0$ のsingletを親Hilbert空間から選ぶ操作では足りない。局所ゲージ対称性はcurrentの非零modeにも制約を課し、その励起を除去する。この残った空間に $\\mathcal A_{G/H}$ の場が作用するので、幾何の共役商と分岐多重度による量子理論が結び付く。左右のsectorの組合せとfield identificationまで指定して、full CFTが決まる。

</details>

### 2.3 cosetの$S$行列とfusion則

境界状態を作るには、coset characterがmodular変換でどう混ざるかと、coset sectorどうしのfusionが必要になる。先に求めた分岐式 $\\chi^G=\\sum b\\chi^H$ にmodular変換を施すと、$G$側の変換を行い、$H$側の変換を逆に除く。このため一つのラベル対に対する係数は $S^G\\overline{S^H}$ となる。

sector $i=[(\\lambda,\\lambda')]$ と $j=[(\\mu,\\mu')]$ を使う。$H$の$S$行列はunitaryなので、逆変換を複素共役で書ける。orbitをまとめられるためには、同一orbitの係数も同じである必要がある。simple-current型のselection ruleは、同一視を生成する各対 $(a,a')$ について $Q^G_a(\\mu)=Q^H_{a'}(\\mu')\\pmod1$ を要求する。ここで $Q_a(\\mu)=h_a+h_\\mu-h_{a\\times\\mu}\\pmod1$ はmonodromy chargeである。simple-currentの標準関係 $S_{a\\times\\lambda,\\mu}=e^{2\\pi iQ_a(\\mu)}S_{\\lambda\\mu}$ を使うと、分子の位相と複素共役した分母の逆位相が相殺するため、積は同一orbitの代表によらない。

同一視群が自由に作用するという先の条件の下では、同じcharacterと同じ係数をもつ $N_0$ 個の項をまとめられる。そのため係数は $N_0$ 倍され、cosetの行列は

$$
\\boxed{
S_{ij}
=N_0S^G_{\\lambda\\mu}
\\overline{S^H_{\\lambda'\\mu'}}
}
\\tag{6.59}
$$

となる。

次に、結果sectorを $r=[(\\kappa,\\kappa')]$ とする。固定点を持たず、追加のsectorを要しないこのcoset構成では、上の$S$行列に対応するfusion則として原著の式 (6.58)（p.263）を用いる。以下のorbit和は、その外部結果として採用する：

$$
\\boxed{
N_{ij}{}^r
=\\sum_{(\\nu,\\nu')\\sim(\\kappa,\\kappa')}
N^{G;\\nu}_{\\lambda\\mu}
N^{H;\\nu'}_{\\lambda'\\mu'}
}
\\tag{6.58}
$$

となる。$N^{G;\\nu}_{\\lambda\\mu}$ は $G$ のfusion $\\lambda\\times\\mu$ に $\\nu$ が現れる重複度であり、分母の係数も同様である。まず分子・分母のfusionを別々に行い、二つの出力ラベルを組にする。その組が $r$ と同じcoset表現を与えるたびに重複度を加えるため、field-identification orbit全体の和になる。この公式の成立には、上で指定した固定点のないsector構成を用いている（原著p.263）。

<details id="coset-modular-matrix">
<summary>cosetの$S$行列：複素共役とorbit長$N_0$の由来</summary>

$\\chi^G_\\lambda=\\sum_{\\lambda'}b_{(\\lambda,\\lambda')}\\chi^H_{\\lambda'}$の両辺を$S$変換し、$H$のcharacterの係数を比べると

$$
\\sum_{\\lambda'} b_{(\\lambda,\\lambda')}(-1/\\tau)S^H_{\\lambda'\\mu'}
=\\sum_\\mu S^G_{\\lambda\\mu}b_{(\\mu,\\mu')}(\\tau)
$$

となる。両辺に$\\overline{S^H_{\\nu'\\mu'}}$を掛けて$\\mu'$について和を取り、unitarityを使えば

$$
b_{(\\lambda,\\nu')}(-1/\\tau)
=\\sum_{\\mu,\\mu'}S^G_{\\lambda\\mu}
\\overline{S^H_{\\nu'\\mu'}}b_{(\\mu,\\mu')}(\\tau).
$$

右辺をfield-identification orbitごとにまとめる。ここで用いるsimple-current型のcosetでは、同一視を生成する対 $(J_G,J_H)$ に対し、許容ラベル対はmonodromy chargeの条件 $Q_{J_G}(\\lambda)-Q_{J_H}(\\nu')\\in\\mathbb Z$ を満たす。simple currentの $S$ 行列への作用を使うと

$$
\\begin{aligned}
S^G_{\\lambda,J_G\\mu}\\overline{S^H_{\\nu',J_H\\mu'}}
={}&e^{2\\pi i[Q_{J_G}(\\lambda)-Q_{J_H}(\\nu')]}
S^G_{\\lambda\\mu}\\overline{S^H_{\\nu'\\mu'}}\\\\
={}&S^G_{\\lambda\\mu}\\overline{S^H_{\\nu'\\mu'}}.
\\end{aligned}
$$

従って同一orbitではcharacterとその係数の両方が等しく、$N_0$ 個の項が一つの係数の $N_0$ 倍になる。これが式 (6.59) である。ここでは$H$のcharge変数に伴う共通因子は省略した。誘導levelを用いることで、その因子は分子と分母で一致する。

</details>


### 2.4 一点関数と開弦スペクトル

bulkにはcharge-conjugation modular invariant、すなわち各coset sectorを反chiralの共役sectorと一度ずつ組にした状態空間を取る。境界では左右のcoset chiral algebraを同じ生成子どうしで貼り合わせる自明なgluingを選ぶ。この条件では6.2のCardy構成が使え、最大対称なbraneを $A=[(\\Lambda,\\Lambda')]\\in I_{G/H}$ でラベルする。bulk sector $i$ に対する単位規格化した境界状態の係数は $S_{Ai}/\\sqrt{S_{0i}}$ であり、開弦の重複度にはfusion係数を用いる。代表に対応する有限次元表現は $V^G_\\Lambda\\otimes(V^H_{\\Lambda'})^*$ であり、分母側に双対表現が入る。原著p.264に従ってこの表現で境界ラベルを記述する。一点係数にも分母の複素共役が入るので、まずその値を求めよう。その後で、その因子がbraneの位置にどう現れるかを確かめる。

bulk sector $i=[(\\lambda,\\lambda')]$ のprimaryの共形ウェイトを $h_i$ とする。式 (6.59) を単位規格化したCardy係数 $S_{Ai}/\\sqrt{S_{0i}}$ に代入すると、共通因子 $\\sqrt{N_0}$ が付く。以下の式 (6.60) では原著の表示に合わせ、全primaryを共通に $1/\\sqrt{N_0}$ 倍した規約を用いる。この規約での一点関数は

$$
\\boxed{
\\left\\langle\\phi_i(z,\\bar z)\\right\\rangle_A
=\\underbrace{
\\frac{S^G_{\\lambda\\Lambda}\\overline{S^H_{\\lambda'\\Lambda'}}}
{\\sqrt{S^G_{0\\lambda}\\overline{S^H_{0\\lambda'}}}}
}_{B_A{}^i}
\\frac{1}{|z-\\bar z|^{2h_i}}
}
\\tag{6.60}
$$

である。この表示を絶対規格化が必要な計算に使う場合は、共通因子 $\\sqrt{N_0}$ を戻す。以下では規格化に依存しない位置情報を使うため、真空への結合で割った **相対応答**

$$
R_A{}^i:=\\frac{B_A{}^i}{B_A{}^0}
$$

とする。共通因子 $\\sqrt{N_0}$ はこの比で消える。$R_A{}^i$ は、真空sector $0$ への応答を基準に、bulk sector $i$ への応答が何倍になるかを表す。これを位置の分布へ読むための波動関数は、次の節で対応させる。

同じCardy構成では、二つの境界状態の重なりをmodular変換でopen channelのtraceへ移すと、$A_1$から$A_2$への開弦sector $i$ の重複度が $N_{A_1i}{}^{A_2}$ になる。従って

$$
\\boxed{
Z_{A_1}^{A_2}(q)
=\\sum_{i\\in I_{G/H}}N_{A_1i}{}^{A_2}\\,\\chi_i(q).
}
\\tag{6.61}
$$

となる。和はcoset sectorごとに取り、重複度は式 (6.58) のorbit和で評価する。したがって、境界ラベルと開弦の重複度にはともに、分子・分母の表現dataが現れる。

### 2.5 一点関数から求めるbraneの局在集合

annulusがbrane間の開弦を数えるのに対し、一点関数はbraneがbulkの各modeへどう結合するかを表す。位置分布を読むには、一点関数に現れるbulk modeのうち、large-level極限で軽くなるものを選ぶ。coset基底状態の共形ウェイトは一般に

$$
h_i
=h^G_\\lambda-h^H_{\\lambda'}+N_{(\\lambda,\\lambda')},
\\qquad N_{(\\lambda,\\lambda')}\\in\\mathbb Z_{\\ge0}
$$

となる。$N_{(\\lambda,\\lambda')}$は、$H$-sector $\\lambda'$が$G$-module $\\lambda$のどのaffine gradeで最初に現れるかを表す。有限次元Lie代数の表現$\\lambda$を$H$へ制限した段階ですでに$\\lambda'$が現れるラベル対では、このgradeは零である。

この分岐grade $N_{(\\lambda,\\lambda')}$ は代表ラベル対に付く量である。幾何に用いるsectorの集合は、分岐gradeが零になる代表を持つfield-identification同値類として定める。原著の $I^r_{G/H}$ はこの集合を表す。以下のlarge-level極限では、その代表の有限次元ラベルを固定して状態を追う。

分子・分母の各因子のlevelを一定比率で大きくし、有限次元表現のlabelを固定すると、$h^G_\\lambda$と$h^H_{\\lambda'}$は$1/k$の大きさになる。grade 0の場はこの極限で軽くなるが、正のgradeを持つ場にはcurrentを励起するエネルギーが残る。ここでは軽くなるgrade 0の場を選ぶ。では、この場を商空間のどの波動関数として読めば、braneの位置を測れるだろうか。後のminimal modelのようにlevelを固定した因子も含む場合は、その因子のウェイトが残るため別に評価する。

位置分布とは、各bulk波動関数をbrane上で平均した値を全て指定したものと考える。6.3で $SU(2)$ の一点係数を共役類上の平均と比べたのと同じ方法で、ここでも先に平均を作り、それが相対応答 $R_A{}^i$ と一致するかを確かめる。

brane $A=[(\\Lambda,\\Lambda')]$ の局在集合の候補を構成しよう。まず、分子・分母それぞれのWZW模型で境界ラベルが指定する共役類を入力として用意する。この親WZWの共役類選択は、原著§6.4.2と [Fredenhagen–Schomerus付録A](https://arxiv.org/abs/hep-th/0111189) のデータとして採用する。

有限次元の群characterを $\\chi^{G,\\mathrm{fin}}_\\lambda$ と書く。この選択では、境界ラベル $\\Lambda$ に対する代表点 $t_\\Lambda$ が $\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)=S^G_{\\lambda\\Lambda}/S^G_{0\\Lambda}$ を満たす。これはshiftしたweightとlevelによる選択であり、$SU(2)$ では $\\vartheta_J=\\pi(2J+1)/(k+2)$ に当たる。$H$ 側も同じ規約を用いる。

この代表点の共役類を $C^G_\\Lambda=\\{ht_\\Lambda h^{-1}\\mid h\\in G\\}$、$H$ 側の共役類を $C^H_{\\Lambda'}$ とする。後者は $H\\subset G$ により $G$ の部分集合として扱う。この二つから

$$
C^G_\\Lambda(C^H_{\\Lambda'})^{-1}
:=\\{uv^{-1}\\mid
u\\in C^G_\\Lambda,
v\\in C^H_{\\Lambda'}\\}
$$

を作る。この集合は$H$の共役作用で不変である。実際、$h(uv^{-1})h^{-1}=(huh^{-1})(hvh^{-1})^{-1}$の二因子はそれぞれ元の共役類に属する。このため集合全体をorbit空間へ射影できる。二つの共役類の積と射影によって得る候補は

$$
\\boxed{
C^{G/H}_A
=\\pi^G_{G/H}
\\left(C^G_\\Lambda(C^H_{\\Lambda'})^{-1}\\right)
\\subset G/H.
}
\\tag{6.62}
$$

これは、親brane上の点 $u$ を $H$ 共役類の各点 $v$ の逆元で右からずらし、得られた点 $uv^{-1}$ をその $H$ 共役orbitへ送る操作である。分母label $\\Lambda'$ は、ずらす点の集合を指定している。

この候補は、式 (6.60) が与えるbulk modeへの応答を再現するだろうか。調べるには、まず同じorbit上で値が変わらない波動関数を用意する。その関数を候補上で平均し、$R_A{}^i$ と比べよう。$G$の表現 $\\lambda$ を $H$ へ制限したときに現れる表現 $\\lambda'$ を選び、次元を $d_\\lambda:=\\dim V^G_\\lambda$、$d_{\\lambda'}:=\\dim V^H_{\\lambda'}$ とする。まず一つの $H$ 表現のコピーを選び、その内部の基底を $\\mu=1,\\ldots,d_{\\lambda'}$ で表す。この基底に沿って $D^\\lambda(g)$ の対角成分を足し、$d_{\\lambda'}$ で割る操作が、$H$ 添字だけの平均traceである。次に、同じ $H$ 表現が複数現れる場合のコピーを $r,t$ で区別する。二つのコピーの間でも同じ内部基底 $\\mu$ を対応させ、各blockの平均traceを

$$
F^{\\lambda\\lambda'}_{rt}(g)
:=\\frac1{d_{\\lambda'}}\\sum_{\\mu=1}^{d_{\\lambda'}}
\\langle r,\\mu|D^\\lambda(g)|t,\\mu\\rangle
$$

と定める。全体の体積を1にしたHaar測度で、行列要素の直交性 $\\int_G|D^\\lambda_{ab}|^2dg=1/d_\\lambda$ を使うと、trace内の $d_{\\lambda'}$ 個の項は互いに直交する。従って

$$
\\|F^{\\lambda\\lambda'}_{rt}\\|^2=\\frac1{d_\\lambda d_{\\lambda'}},
\\qquad
\\widehat F^{\\lambda\\lambda'}_{rt}
:=\\sqrt{d_\\lambda d_{\\lambda'}}F^{\\lambda\\lambda'}_{rt}
$$

が単位規格化したmodeである。

共役変換ではblockの両側に $H$ の表現行列とその逆行列が掛かる。traceの巡回性で相殺するため、$F^{\\lambda\\lambda'}_{rt}(hgh^{-1})=F^{\\lambda\\lambda'}_{rt}(g)$ となり、これは商空間の波動関数である。

この関数をCFTのprimaryと比べるには、両方の状態の内積も揃える必要がある。ここでは、各levelを一定比率で大きくし、有限次元labelを固定したgrade 0のcoset閉弦状態を、親WZWの位置波動関数のうち $H$ 共役作用で不変な成分として読む。これは原著§6.4.2と [Fredenhagen–Schomerus付録A](https://arxiv.org/abs/hep-th/0111189) の大体積の位置表示を採用したものである。この零mode対応では、親の体積1のHaar内積を引き継いで規格化する。商の曲がった計量の面積だけで規格化しているわけではない。

コピー側のcoset基底を $|r\\rangle$ とする。単位状態 $|r\\rangle\\otimes|t\\rangle^*$ を親の左右の状態へ戻すと、$H$ の内部添字を同じものどうしで結んだsinglet

$$
\\frac1{\\sqrt{d_{\\lambda'}}}
\\sum_{\\mu=1}^{d_{\\lambda'}}
|r,\\mu\\rangle\\otimes|t,\\mu\\rangle^*
$$

になる。和の $d_{\\lambda'}$ 個の項は互いに直交するので、この係数でノルムが1になる。6.3の親WZWの対応では、単位基底 $|a\\rangle\\otimes|b\\rangle^*$ は $\\sqrt{d_\\lambda}D^\\lambda_{ab}(g)$ へ移る。従って上のsingletの波動関数は

$$
\\sqrt{\\frac{d_\\lambda}{d_{\\lambda'}}}
\\sum_\\mu\\langle r,\\mu|D^\\lambda(g)|t,\\mu\\rangle
=\\widehat F^{\\lambda\\lambda'}_{rt}(g)
$$

となる。これで、同じコピー添字を持つ単位規格化primaryと $\\widehat F_{rt}$ を比較できる。真空では両方の表現が一次元で、この波動関数は定数1である。位置分布の結合を $\\int d\\nu_A\\,f$ と表示すれば、真空への応答は $\\int d\\nu_A$、相対応答は $\\int d\\nu_A\\,f/\\int d\\nu_A$ となる。ここで割っているのは分布の総重みであり、その台の通常の体積を直接測った値ではない。真空係数とbraneの張力との関係は、6.3の境界entropyの比較で用いた、共通の弦背景における比例関係である。

共役類上で表現行列を平均すれば、群作用と可換な行列になるため、Schurの補題により

$$
\\int_{C^G_\\Lambda}D^\\lambda(u)\\,d\\mu_G(u)
=\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)}{\\dim V^G_\\lambda}\\,\\mathbf 1.
$$

ここで $d\\mu_G$ は共役類上の不変確率測度である。$H$側の逆元 $v^{-1}$ に対する平均も同様で、characterが複素共役になる。従って、二つの共役類を独立に平均し、$D^\\lambda(uv^{-1})=D^\\lambda(u)D^\\lambda(v^{-1})$ を使うと、波動関数への応答は分子characterと分母characterの複素共役の積を含む。

一点係数の側も、式 (6.60) を $B_A{}^0$ で割り、指定したcharacterの対応を使えば

$$
R_A{}^i
=\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)
\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}
{\\sqrt{d^q_\\lambda d^q_{\\lambda'}}},
\\qquad d^q_\\lambda:=\\frac{S^G_{0\\lambda}}{S^G_{00}}
$$

となる。分母側の量子次元 $d^q_{\\lambda'}$ も $H$ の $S$ で定める。真空labelの共役類代表点 $t_0$ がlevelの増大とともに単位元へ近づくという、WZWの代表点選択の結果を使う。$S$ の対称性と先のcharacter対応から、$d^q_\\lambda=\\chi^{G,\\mathrm{fin}}_\\lambda(t_0)$ である。固定した有限次元表現のcharacterは連続で、単位元の値は $d_\\lambda$ だから、$d^q_\\lambda\\to d_\\lambda$ となる。$H$ 側も同様であり、相対応答の極限は

$$
R_A{}^i\\longrightarrow
\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)
\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}
{\\sqrt{\\dim V^G_\\lambda\\,\\dim V^H_{\\lambda'}}}.
$$

共役類平均を $\\widehat F$ に代入すると、コピー間はSchur平均の恒等行列によって $\\delta_{rt}$ となり、規格化因子を含めて

$$
\\int d\\mu_G(u)d\\mu_H(v)\\widehat F^{\\lambda\\lambda'}_{rt}(uv^{-1})
=\\delta_{rt}\\,
\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)
\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}
{\\sqrt{d_\\lambda d_{\\lambda'}}}
=\\lim\\delta_{rt}R_A{}^i
$$

になる。CFT側でもtrivial gluingは左右のコピーを $\\delta_{rt}$ で結ぶため、同じmodeへの応答が一致する。

これで位置分布全体を決められるかも確認しよう。compact群のPeter–Weylの定理を使うと、表現行列は群上の関数の完全な基底になる。各基底を $H$ 共役作用で平均すれば、$H$ 不変な関数の全成分を得る。$H$ への分岐にSchurの補題を使うと、この平均では異なる既約 $H$ 表現間のblockが消え、同じ表現間には恒等行列とコピー間の行列が残る。その係数は、上で作った各blockの部分trace $F^{\\lambda\\lambda'}_{rt}$ である。従ってこれらのmodeは不変関数を尽くし、全ての平均の一致は位置分布の一致を与える。式 (6.62) がbraneの台を与えるのは、この一点関数との照合による（原著p.264、[Fredenhagen–Schomerus付録A](https://arxiv.org/abs/hep-th/0111189)）。

ここで、二つの因子の役割も分かった。親共役類上で $u$ を平均すると分子characterが現れ、$v^{-1}$ を平均すると分母characterの複素共役が現れた。$H$ 添字のtraceによって同じorbit上では波動関数が変わらず、射影後も同じ平均を測れる。従って、一点係数にある分子因子と共役分母因子は、親braneを $v^{-1}$ でずらして商へ射影した集合への応答を表している。

この局在はlarge-level・低エネルギーでの解釈である。有限levelでは利用できるmodeが限られ、annulusには幾何の再構成に用いなかったsectorも含まれる。

<details id="coset-localization-response">
<summary>共役類積の分布と一点係数の一致：規格化と完全性</summary>

brane $A=[(\\Lambda,\\Lambda')]$ の位置分布は、単位規格化したbulk modeへの応答を一点係数と照合して求める。式 (6.60) は原著の表示を保っており、単位規格化したCardy係数との全体因子の差を比で除いて用いる。単位規格化したcoset Ishibashi状態のCardy係数 $S_{Ai}/\\sqrt{S_{0i}}$ には式 (6.59) から全体に $\\sqrt{N_0}$ が付くが、$R_A{}^i=B_A{}^i/B_A{}^0$ では消える。従って、以下ではこの比が要求する応答を有限次元characterで表す。

$C^G_\\Lambda$ と $C^H_{\\Lambda'}$ は、それぞれのWZW模型で境界ラベル $\\Lambda,\\Lambda'$ に対応する共役類とする。代表点 $t_\\Lambda,t_{\\Lambda'}$ には、有限次元characterとmodular $S$ の対応

$$
\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)=\\frac{S^G_{\\lambda\\Lambda}}{S^G_{0\\Lambda}},
\\qquad
\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})=\\frac{S^H_{\\lambda'\\Lambda'}}{S^H_{0\\Lambda'}}
$$

を満たすWZW共役類の規約を用いる。上付き $\\mathrm{fin}$ は有限次元の群characterを表す。この代表点の選択とWeyl character公式による対応は、原著§6.4.2および下記のFredenhagen–Schomerus付録Aから採用する。$SU(2)$ では6.3節の $\\vartheta_J=\\pi(2J+1)/(k+2)$ がこの選択に当たる。

式 (6.60) を真空への応答 $B_A{}^0$ で割ると

$$
R_A{}^i
=\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)
\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}
{\\sqrt{d^q_\\lambda d^q_{\\lambda'}}},
\\qquad d^q_\\lambda=\\frac{S^G_{0\\lambda}}{S^G_{00}}.
$$

分母側も同様に $d^q_{\\lambda'}$ を定める。有限次元表現を固定してlevelを大きくすると、量子次元 $d^q$ は通常の次元 $d$ へ近づく。従って比較する応答は

$$
R_A{}^i\\longrightarrow
\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)
\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}
{\\sqrt{d_\\lambda d_{\\lambda'}}},
\\qquad d_\\lambda=\\dim V^G_\\lambda,\\quad
 d_{\\lambda'}=\\dim V^H_{\\lambda'}.
$$

この応答を調べる位置modeを、規格化まで含めて構成する。

大きなlevelでgrade 0の有限次元表現を固定し、$V^G_\\lambda|_H=\\bigoplus_{\\lambda'}M_{\\lambda\\lambda'}\\otimes V^H_{\\lambda'}$ と分岐させる。$d_\\lambda=\\dim V^G_\\lambda$、$d_{\\lambda'}=\\dim V^H_{\\lambda'}$ とし、同じ $H$ 表現のコピー $r,t$ の間のblockを使って

$$
F^{\\lambda\\lambda'}_{rt}(g)
=\\frac1{d_{\\lambda'}}\\sum_{\\mu=1}^{d_{\\lambda'}}
\\langle r,\\mu|D^\\lambda(g)|t,\\mu\\rangle
$$

と定める。$H$ 表現の添字 $\\mu$ をtraceしているため、この関数は $g\\mapsto hgh^{-1}$ で不変であり、coset上のmodeとなる。

位置modeの規格化は、全体の体積を1にしたHaar測度 $dg$ で決まる。行列要素の直交性を部分traceの定義に使うと、固定した $\\lambda,\\lambda'$ について

$$
\\int_Gdg\\,\\overline{F^{\\lambda\\lambda'}_{rt}(g)}
F^{\\lambda\\lambda'}_{uv}(g)
=\\frac{\\delta_{ru}\\delta_{tv}}{d_\\lambda d_{\\lambda'}}
$$

となる。そこで

$$
\\widehat F^{\\lambda\\lambda'}_{rt}
:=\\sqrt{d_\\lambda d_{\\lambda'}}F^{\\lambda\\lambda'}_{rt}
$$

とすれば、単位規格化した不変modeになる。CFT側でもtrivial gluingは左右の多重度添字を $\\delta_{rt}$ で結ぶため、このmodeに照合する応答は $\\delta_{rt}R_A{}^i$ である。

$C^G_\\Lambda$ と $C^H_{\\Lambda'}$ 上の不変確率測度を $d\\mu_G(u),d\\mu_H(v)$ とする。Schurの補題より

$$
\\int_{C^G_\\Lambda}d\\mu_G(u)D^\\lambda(u)
=\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)}{d_\\lambda}\\,\\mathbf1,
\\quad
\\int_{C^H_{\\Lambda'}}d\\mu_H(v)D^{\\lambda'}(v^{-1})
=\\frac{\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}{d_{\\lambda'}}\\,\\mathbf1.
$$

$D^\\lambda(uv^{-1})=D^\\lambda(u)D^\\lambda(v^{-1})$ を使えば

$$
\\boxed{
\\int d\\mu_G(u)d\\mu_H(v)\\widehat F^{\\lambda\\lambda'}_{rt}(uv^{-1})
=\\delta_{rt}\\,
\\frac{\\chi^{G,\\mathrm{fin}}_\\lambda(t_\\Lambda)
\\overline{\\chi^{H,\\mathrm{fin}}_{\\lambda'}(t_{\\Lambda'})}}{\\sqrt{d_\\lambda d_{\\lambda'}}}.
}
$$

右辺は先に求めた $\\delta_{rt}R_A{}^i$ の極限と一致する。$r\\ne t$ への応答も両側で零となる。

6.3節のPeter–Weyl分解を $H$ 共役不変な関数へ制限すると、$H$ の既約表現の添字はこの部分traceにまとまり、残る $r,t$ が全ての不変modeをラベルする。これにより、各modeへの応答を位置分布として読める。

この計算が、二つの共役類の測度を $uv^{-1}$ へ移した分布を与える。この分布の台は $C^G_\\Lambda(C^H_{\\Lambda'})^{-1}$、観測するmodeは $H$-共役不変なので、その商への射影がbraneの位置分布になる。逆元は分母の複素共役から生じる。この対応を一般のcoset modeで行った原典は [Fredenhagen–Schomerus、付録A](https://arxiv.org/abs/hep-th/0111189) である。

</details>

### 2.6 coset模型における境界spin吸収

coset braneの間でも境界摂動によるRG flowを考える。6.3で使ったboundary spin absorptionは、境界の端点自由度に有限次元表現 $\\sigma$ を付けてcurrentへ結合すると、終状態のbraneラベルへ $\\sigma$ をfusionするという規則であった。cosetでは初期配置にどの境界条件を並べ、終状態にどのlabelを与えるのだろうか。ここでは、その両方を指定する提案されたRG則を使う。

可積分affine sectorに対応する $G$ の有限次元表現を $\\sigma$ とする。これを $H$ の既約表現へ分解し、各成分を分母の可積分affine sectorへ持ち上げて足した直和を $\\sigma|_H$ と書く。$\\times$ は、それぞれのaffine代数のfusion積を表す。flow則は

$$
\\boxed{
(\\Lambda,\\sigma|_H\\times\\Lambda')
\\longrightarrow
(\\Lambda\\times\\sigma,\\Lambda')
}
\\tag{6.63}
$$

左辺では$\\sigma$の$H$成分が分母label側に付着し、右辺では同じ$\\sigma$が分子label$\\Lambda$へfusionされている。6.3節のboundary spin absorptionと同様に、境界に付けたspinが終状態のbrane labelへ取り込まれる。式 (6.63) はその機構のcoset版として提案された規則であり、labelの等式だけからflowの存在や向きが証明されるわけではない。[Fredenhagen–SchomerusのRG-flow則](https://arxiv.org/abs/hep-th/0205011)に従い、固定点のないcosetで両辺がselection ruleを満たす境界条件を与え、$G$のadjoint表現を$H$へ制限した成分を持つsector $(0,\\lambda')$ の境界場による摂動が存在する場合に用いる。両辺は一般に可約labelを含むので、物理的なbrane配置として読むときは既約Cardy braneの直和へ分解する。$H$を自明な群にすると、$\\sigma|_H$ は $\\dim\\sigma$ 個の自明表現になり、初期配置は $\\dim\\sigma$ 枚の同じbraneとなる。これにより、親WZW模型のspin吸収則を回復する。

## 3. $N=2$ minimal model：円板上の線分状brane

具体例として、$SU(2)_k$ とrational $U(1)_2$ から対角 $U(1)$ を除く $N=2$ minimal modelを扱う。有限levelの分岐で決まるbrane labelを用い、球面の射影から、円板（disk）の境界上の二点を結ぶ線分（chord）としてbraneの位置と端点を求める。その端点を使うと、境界spin吸収によるRG flowを、短い線分の鎖が一本へ凝縮する過程として追える。

### 3.1 対角$U(1)$の除去とminimal modelの表現

$N=2$超共形minimal modelは

$$
\\boxed{
\\frac{
\\widehat{\\mathfrak{su}}(2)_k
\\oplus\\widehat{\\mathfrak u}(1)_2
}{
\\widehat{\\mathfrak u}(1)_{k+2}
}
}
$$

である。ここで$N=2$は世界面の超対称性の種類を表す。Virasoro生成子に加えて、$U(1)$ chargeを測るcurrentと、それに対して逆符号のchargeを持つ二つのsupercurrentがある。二つの$\\widehat{\\mathfrak u}(1)$は、有限個のsectorを持つようchiral algebraを拡張したrational Gaussian modelである。

分母は、$SU(2)_k$ のCartan currentと、独立な $U(1)_2$ currentの対角結合である。まずCartan chargeを整数で数える規格化に揃える。前節までの $J^3_0$ はweight $m_j$ に固有値 $\\sqrt2m_j$ を持つので、

$$
C:=\\sqrt2J^3,\\qquad C_0=2m_j,
\\qquad C(z)C(w)\\sim\\frac{2k}{(z-w)^2}.
$$

$C$ は $SU(2)$ の整数Cartan chargeを測るcurrentである。次に、独立な分子 $U(1)_2$ の整数chargeを測るcurrentを $F$ とする。この規格化では

$$
F(z)F(w)\\sim\\frac4{(z-w)^2},\\qquad C(z)F(w)\\sim\\mathrm{regular}.
$$

対角chargeを測るcurrentを $K:=C+F$ と定めれば、独立な二因子の二点関数が加わり、

$$
K(z)K(w)\\sim\\frac{2k+4}{(z-w)^2}
=\\frac{2(k+2)}{(z-w)^2}.
$$

整数charge規約の $U(1)_\\ell$ は二重極係数 $2\\ell$ を持つので、$K$ が分母 $U(1)_{k+2}$ を生成する。電荷 $q$ の基底ウェイトは、このcurrentのSugawara構成から $q^2/(4\\ell)$ となる。各Gaussian modelの中心電荷は1であり、分子から対角分母を引くと

$$
c=\\frac{3k}{k+2}+1-1=\\frac{3k}{k+2}.
$$

分岐では、分子の $SU(2)$ 表現を整数 $l=2j$ で表す。分子 $U(1)_2$ のcharge labelを $s$ とする。この二つが分子ラベル $(l,s)$ になる。

次に、対角current $K=C+F$ が測るchargeのlabelを $m$ とすれば、分母ラベルは $m$ である。慣用の順序では、分岐空間を三つ組 $(l,m,s)$ で表す。

abelian currentだけでは電荷の異なる表現が無限にある。有限種類のsectorで境界を構成するため、ここではrationalな拡張を使う。$U(1)_\\ell$ の拡張では、電荷 $\\pm2\\ell$ のchiral場を代数に加える。その共形ウェイトは $(2\\ell)^2/(4\\ell)=\\ell$ であり、整数である。これらの場の作用で電荷が $2\\ell$ ずつ変わる状態は同じ拡張sectorに入るため、sector labelは $q\\bmod2\\ell$ となる（原著 §6.4.3、式 (5.48) の拡張）。

この周期に従い、三つ組の代表を

$$
l=0,1,\\ldots,k,
$$

$$
m=-k-1,-k,\\ldots,k+2
\\quad
\\left(m\\in\\mathbb Z_{2(k+2)}\\right),
$$

$$
s=-1,0,1,2
\\quad
\\left(s\\in\\mathbb Z_4\\right)
$$

と取る。

分岐多重度空間が非零になるselection ruleは

$$
\\boxed{l+m+s\\equiv0\\pmod2}
$$

である。spin $l/2$のCartan weightを二倍した整数chargeは$-l,-l+2,\\ldots,l$なので、すべて$l$と同じ偶奇を持つ。分子$U(1)_2$のcharge $s$を加えた対角chargeが$m$になるため、$m\\equiv l+s\\pmod2$が必要になる。currentによる励起もこの偶奇を変えない。この模型では、この偶奇条件を満たす三つ組の分岐空間は全て非零になるという原著p.265の分岐結果を用いる。上の電荷計算は、そのselection ruleが必要となる理由を示している。

$U(1)_2$ の追加には超対称性を作る役割もある。ここでは、原著§6.4.3の $N=2$ coset構成結果を使う。電荷 $\\pm2$ の場をウェイト $1/2$ のフェルミオンとして加え、$SU(2)$ の昇降currentと逆電荷どうしで掛けると、対角電荷零・ウェイト $3/2$ の二つのsupercurrentを得る。対角currentと可換なR-currentも合わせた生成子のOPEは $N=2$ 超共形代数を満たすという構成結果である。電荷とウェイトは上の規約で確認でき、詳しい生成子は下の補足に示す。

ここで数えている固定 $s$ の分岐空間は、supercurrentをまだ含まない偶部分代数のsectorである。supercurrentを作用させると $s$ と $s+2$ の二成分が結ばれる。従って、超共形代数全体の表現を読むときには二成分を合わせる。以下では、固定 $s$ のcharacterを使って境界データを記述する。

<details id="minimal-supercurrents">
<summary>$U(1)_2$のフェルミオンから$N=2$生成子とNS・R成分を作る</summary>

この模型で $U(1)_2$ を用いる理由は、電荷 $\\pm2$ の場が共形ウェイト $2^2/8=1/2$ を持ち、複素フェルミオン $\\eta^\\pm$ として使えることにある。$\\eta^+$ の $F$ 電荷は $+2$、$\\eta^-$ は $-2$ である。一方、$J^\\pm$ の整数Cartan電荷は $\\pm2$ なので、逆の符号を組にすると対角電荷が相殺する。これらを含むフェルミオンの代数へ拡張すると、

$$
G^+\\propto J^+\\eta^-,\\qquad G^-\\propto J^-\\eta^+
$$

は対角電荷が零、共形ウェイトが $1+1/2=3/2$ となり、cosetのsupercurrentになる。また $C-\\tfrac{k}{2}F$ は対角current $K=C+F$ との二重極が相殺し、規格化するとR-currentを与える。こうして $U(1)_2$ の追加と対角 $U(1)$ の除去により、$N=2$ の生成子を構成できる。

有限個のラベルとmodular dataは、この超共形代数の**偶部分代数**に対する分岐を表す。分子のrational $U(1)_2$ の真空代数は電荷 $4\\mathbb Z$ の場を含み、$\\eta^\\pm$ は電荷 $2\\bmod4$ の成分に属する。

偶数 $s$ は、円筒上でフェルミオンを反周期に貼るNS（Neveu–Schwarz）成分、奇数 $s$ は周期的に貼るR（Ramond）成分に対応する。supercurrentの作用は $s$ と $s+2$ の成分を結ぶので、超共形代数全体の表現はこの二成分を合わせて読む。以下の $\\chi_{[l,m,s]}$ は固定した $s$ の偶部分代数のcharacterであり、二成分の和がNSまたはR表現の通常のtraceを与える。この三つ組の規約は [Keller–Rossi §2.3](https://arxiv.org/abs/hep-th/0610175)にもまとめられている。

</details>

さらに、一般cosetのfield identificationはこの規約で

$$
\\boxed{
(l,m,s)
\\sim
(k-l,m+k+2,s+2)
}
$$

と具体化される。これは、分子の $SU(2)$ simple current $l=k$、分子 $U(1)_2$ のcharge $2$、分母 $U(1)_{k+2}$ のcharge $k+2$ を同時に作用させる同一視である。この同時作用が分岐空間のcoset生成子を変えないという表現論の結果を用いる（原著p.289、[Fredenhagen §4.7](https://arxiv.org/abs/hep-th/0301229)）。例えば $[0,0,0]=[k,k+2,2]$ は同じ真空sectorを二通りに書いている。selection ruleが許される組を選び、field identificationはその後に同じ空間の重複を除く、という違いがここにも現れる。

<details id="minimal-field-identification">
<summary>Spectral flowによるfield identificationの導出</summary>

整数charge current $C,F,K$ に対し、次の付け替えを行う：

$$
C_n\\mapsto C_n+k\\delta_{n0},\\qquad
J^\\pm_n\\mapsto J^\\pm_{n\\pm1},\\qquad
F_n\\mapsto F_n+2\\delta_{n0}.
$$

これはaffine spectral flowと呼ばれるcurrent代数の自己同型である。$SU(2)_k$ の可積分moduleを $l\\mapsto k-l$ へ、rational $U(1)_2$ moduleを $s\\mapsto s+2$ へ移すという表現論の結果を用いる。対角chargeは $K=C+F$ により $m\\mapsto m+k+2$ へ移る。このmoduleの対応は外部入力であり、原著§6.4.2およびp.289のminimal-model同一視、[Fredenhagen §4.7](https://arxiv.org/abs/hep-th/0301229) に従う。

この写像が残ったcosetの作用を保つことは、生成子について確かめられる。Sugawara生成子の変化は

$$
\\begin{aligned}
L_n^{\\rm num}&\\mapsto L_n^{\\rm num}
+\\tfrac12(C_n+F_n)+\\tfrac{k+2}{4}\\delta_{n0},\\\\
L_n^{\\rm den}&\\mapsto L_n^{\\rm den}
+\\tfrac12K_n+\\tfrac{k+2}{4}\\delta_{n0}.
\\end{aligned}
$$

であり、$K=C+F$ なので差 $L_n^{\\rm coset}$ は変わらない。R-currentに比例する $C-\\tfrac{k}{2}F$ でも零modeのshiftが相殺する。supercurrent $J^+\\eta^-$ と $J^-\\eta^+$ には、spectral flowでそれぞれ $z^{\\pm1}$ と $z^{\\mp1}$ が掛かり、その積は変わらない。

従ってcosetの生成子と可換な写像として

$$
\\mathcal H_{(l,m,s)}
\\cong\\mathcal H_{(k-l,m+k+2,s+2)}
$$

を得る。特に真空 $[0,0,0]$ のもう一つの表示が $[k,k+2,2]$ である。

</details>

このラベル変換を二回行うと元へ戻る。また$s\\mapsto s+2$は$\\mathbb Z_4$上で固定点を持たないので、すべてのfield-identification orbitは二要素からなる。したがって一般式 (6.59) のorbit長は、この模型では

$$
\\boxed{N_0=2}
$$

であり、追加のfixed-point resolutionは要らない。

境界には、原著§6.4.3のdiagonal bulk modular invariantに対する **A-type gluing** のCardy構成結果を用いる。A-typeは、左右の $N=2$ のR-currentを反対符号で貼り合わせ、二つのsupercurrentを $G^+\\leftrightarrow\\bar G^-$、$G^-\\leftrightarrow\\bar G^+$ の組で貼る条件である。このbulkとgluingの組で、以下の一点係数と開弦重複度を持つ境界条件が得られるという入力を使う。まず分子 $SU(2)$ のラベルを $L$、分子 $U(1)_2$ のラベルを $S$ とする。この二つの表現のtensor積が分子側の状態空間を指定する。次に分母のラベルを $M$ とし、braneラベルを $[L,M,S]$ とまとめる。このラベルもbulkと同じselection ruleとfield identificationを満たす（原著§6.4.3）。以下で、この境界条件の一点関数をdisk上の位置へ翻訳する。

幾何とflowには、原著に合わせて $S=0$ のbraneを使う。比較のため $S=2$ も残すと、$S\\mapsto S+2$ は同じ線分の向きを反転し、braneとanti-braneを交換する。線分の位置は $L,M$ で決まる。この向きの規約は [Fredenhagen §4.7](https://arxiv.org/abs/hep-th/0301229) に従い、後にfield identificationとの整合を端点で確かめる。

一点係数を計算するため、代入する三つの $S$ 行列要素をそろえる。整数スピンラベル $l=2j$ を使う分子 $SU(2)_k$ では

$$
S^{SU(2)_k}_{lL}=\\sqrt{\\frac{2}{k+2}}
\\sin\\!\\left(\\frac{\\pi(l+1)(L+1)}{k+2}\\right).
$$

分子 $U(1)_2$ には $S^{U(1)_2}_{sS}=\\tfrac12 e^{-i\\pi sS/2}$、分母 $U(1)_{k+2}$ には $S^{U(1)_{k+2}}_{mM}=[2(k+2)]^{-1/2}e^{-i\\pi mM/(k+2)}$ を用いる。これらは各Gaussian modelのcharge基底のFourier変換であり、この符号規約を以下で保つ。

式 (6.60) は二つの分子要素と分母要素の複素共役の積を、真空行の同じ積の平方根で割る。分子積の共通係数は $1/[2(k+2)]$、真空行の積はこれに $\\sin(\\pi(l+1)/(k+2))$ を掛けた値である。$0\\le l\\le k$ ではこの正弦は正なので平方根に正の値を取れる。従って一点係数は

$$
B^{[l,m,s]}_{[L,M,S]}
=\\frac{1}{\\sqrt{2(k+2)}}
\\frac{\\sin\\!\\left(\\frac{\\pi(l+1)(L+1)}{k+2}\\right)}
{\\sqrt{\\sin\\!\\left(\\frac{\\pi(l+1)}{k+2}\\right)}}
\\exp\\!\\left(\\frac{i\\pi mM}{k+2}-\\frac{i\\pi sS}{2}\\right).
$$

ここでは式 (6.60) と同じ全体規格化を使う。分子 $U(1)_2$ の$S$行列が $sS$ の位相を与え、分母 $U(1)_{k+2}$ は複素共役するため $mM$ の位相が逆符号になる。この二つの位相が、次に取り出す位置と向きの情報を区別する。全ての係数とannulusの具体式は下に示す。

<details id="minimal-modular-boundary-data">
<summary>Minimal modelの$S$行列・一点係数・開弦スペクトル</summary>

式 (6.59)--(6.61)への代入に必要な三つのmodular dataとfusion dataを揃える。まず分子の$U(1)_2$では

$$
s_1\\times s_2=s_1+s_2\\pmod4,
\\qquad
S^{U(1)_2}_{s_1s_2}
=\\frac12
\\exp\\!\\left(-\\frac{i\\pi s_1s_2}{2}\\right).
$$

分母の$U(1)_{k+2}$では

$$
m_1\\times m_2=m_1+m_2
\\pmod{2(k+2)},
$$

$$
S^{U(1)_{k+2}}_{m_1m_2}
=\\frac{1}{\\sqrt{2k+4}}
\\exp\\!\\left(-\\frac{i\\pi m_1m_2}{k+2}\\right).
$$

$SU(2)_k$では整数label $l=2j$を使うと

$$
S^{SU(2)_k}_{lL}
=\\sqrt{\\frac{2}{k+2}}
\\sin\\!\\left(
\\frac{\\pi(l+1)(L+1)}{k+2}
\\right),
$$

fusion multiplicityは$N^{SU(2);L_2}_{L_1l}$で表す。$U(1)$側のfusion係数は、上の周期的charge加法が成立するとき$1$、それ以外は$0$である。

$N_0=2$と三つの$S$-matrixを式 (6.59) へ入れると、係数は

$$
2
\\sqrt{\\frac{2}{k+2}}
\\cdot\\frac12
\\cdot\\frac{1}{\\sqrt{2(k+2)}}
=\\frac{1}{k+2}
$$

となる。したがってminimal modelのmodular $S$-matrixは

$$
\\boxed{
S^{\\mathrm{min}}_{[l,m,s],[L,M,S]}
=\\frac{1}{k+2}
\\sin\\!\\left(
\\frac{\\pi(l+1)(L+1)}{k+2}
\\right)
\\exp\\!\\left(
\\frac{i\\pi mM}{k+2}
-\\frac{i\\pi sS}{2}
\\right)
}
$$

となる。角括弧はfield-identification同値類を表す。

一点関数では、原著式 (6.60) の全体因子を除いた表示に合わせてminimal modelへ特殊化する。すると

$$
\\begin{aligned}
B^{[l,m,s]}_{(L,M,S)}
&:=
\\frac{
S^{SU(2)_k}_{lL}
S^{U(1)_2}_{sS}
\\overline{S^{U(1)_{k+2}}_{mM}}
}{
\\sqrt{
S^{SU(2)_k}_{0l}
S^{U(1)_2}_{0s}
\\overline{S^{U(1)_{k+2}}_{0m}}
}
}\\\\[1mm]
&=
\\frac{1}{\\sqrt{2(k+2)}}
\\frac{
\\sin\\!\\left(\\frac{\\pi(l+1)(L+1)}{k+2}\\right)
}{
\\sqrt{\\sin\\!\\left(\\frac{\\pi(l+1)}{k+2}\\right)}
}
\\exp\\!\\left(
\\frac{i\\pi mM}{k+2}
-\\frac{i\\pi sS}{2}
\\right),
\\end{aligned}
$$

となる。単位規格化したIshibashi状態のCardy係数を使う場合は、式 (6.59) から右辺を $\\sqrt{N_0}=\\sqrt2$ 倍する。以下の $B^{[l,m,s]}_{(L,M,S)}$ は原著式 (6.60) に合わせた表示を指し、位置の照合には真空係数との比を用いる。

$$
\\left\\langle
\\phi_{[l,m,s]}(z,\\bar z)
\\right\\rangle_{(L,M,S)}
=
\\frac{B^{[l,m,s]}_{(L,M,S)}}
{|z-\\bar z|^{2h_{[l,m,s]}}}.
$$

同様に式 (6.61) へfusion dataを入れる。$\\delta^{(r)}_{a,b}$を$a\\equiv b\\pmod r$のとき$1$、それ以外は$0$と定めれば

$$
\\begin{aligned}
\\mathcal N^{[L_2,M_2,S_2]}_{[L_1,M_1,S_1]\\,[l,m,s]}
:={}&
N^{SU(2);L_2}_{L_1l}
\\delta^{(4)}_{S_2,S_1+s}
\\delta^{(2(k+2))}_{M_2,M_1+m}\\\\
&+
N^{SU(2);k-L_2}_{L_1l}
\\delta^{(4)}_{S_2+2,S_1+s}
\\delta^{(2(k+2))}_{M_2+k+2,M_1+m}.
\\end{aligned}
$$

第二項は、結果braneと同じfield-identification同値類に属するもう一つの代表$(k-L_2,M_2+k+2,S_2+2)$から来る。したがって開弦分配関数は

$$
\\boxed{
Z^{[L_2,M_2,S_2]}_{[L_1,M_1,S_1]}(q)
=\\sum_{[l,m,s]\\in I_{\\mathrm{min}}}
\\mathcal N^{[L_2,M_2,S_2]}_{[L_1,M_1,S_1]\\,[l,m,s]}
\\chi_{[l,m,s]}(q)
}
$$

となる。$I_{\\mathrm{min}}$ はselection ruleを満たすfield-identification同値類全体であり、和はその各要素について取る。

</details>

### 3.2 球面の射影と線分状braneの端点

前節の境界条件 $[L,M,0]$ には、$SU(2)$ のsine係数と分母の位相 $e^{i\\pi mM/(k+2)}$ が付いた。一方、式 (6.62) は共役球面を $U(1)$ の点でずらして商へ写す。この射影像は、minimal modelの軽いbulk modeへの応答も再現するだろうか。まず固定levelの $U(1)_2$ 因子を評価し、残った位置modeを使って、ラベル $L,M$ からdisk上の端点を計算しよう。

両側を比較するのは、large-$k$ で軽くなるbulk modeへの相対応答である。分子 $U(1)_2$ の真空成分 $s=0$ と、$SU(2)$ のgrade 0にある $m=-l,-l+2,\\ldots,l$ を取ると、対角charge $m$ はCartan chargeに一致し、

$$
h_{[l,m,0]}=\\frac{l(l+2)-m^2}{4(k+2)}\\longrightarrow0
\\qquad(l,m\\text{ を固定})
$$

となる。固定レベルのフェルミオンを励起する成分には、そのウェイトが残る。そこで位置を読むmodeにはこの真空成分を用いる。その一点係数では $e^{-i\\pi sS/2}=1$ となり、真空への応答で割ると分子 $U(1)_2$ の共通係数も消える。残る $SU(2)$ の係数と $e^{i\\pi mM/(k+2)}$ が位置分布を定める。従ってdisk上の位置を読むには $SU(2)$ の $U(1)$ 共役不変な波動関数だけで足りる。これが、追加した $U(1)_2$ 因子をこのbraneの位置計算から外せる理由である。境界ラベル $S$ は、これらの位置modeへは結合せず、向きなどの境界情報を区別する。

2節で求めた共役作用の商では、群要素の左上成分 $\\alpha$ がdisk上の位置を表す。同じ $\\alpha$ をもつ群要素は、$\\beta$ の位相が違っても一つの点へ写る。一点係数も球面上の平均も、この共役不変modeへの応答を与えることは2.5節で確かめた。そこで式 (6.62) の「点でずらす操作」と「共役orbitへの射影」を実行し、球面上でdisk座標 $\\alpha$ の取り得る値を集めればよい。

境界ラベル $L,M$ は、probeであるbulkラベル $l,m$ と区別する。有限 $L$ を固定して $k\\to\\infty$ とすると球面は端へ縮むので、disk内の有限な線分を残すには、以下の角度が有限に保たれるよう $L,M$ もlevelとともに動かす。各bulk probe $l,m$ は先の通り固定する。

$SU(2)$のlabel $L$のbraneに対応する共役類は

$$
C^G_L:
\\qquad
\\operatorname{Tr}u
=2\\cos\\psi_L,
\\qquad
\\psi_L:=\\frac{\\pi(L+1)}{k+2}
$$

である。行列$u$の左上成分を$a$と書けば$\\operatorname{Tr}u=2\\operatorname{Re}a$なので

$$
\\operatorname{Re}a=\\cos\\psi_L.
$$

brane label $M\\in\\mathbb Z_{2(k+2)}$ は分母 $U(1)$ の整数chargeである。$H=U(1)$ は可換なので、各共役類$C^H_M$は一つの点

$$
h_{M}=
\\begin{pmatrix}
e^{-i\\phi_{M}}&0\\\\
0&e^{i\\phi_{M}}
\\end{pmatrix},
\\qquad
\\phi_{M}
:=\\frac{\\pi M}{k+2}
$$

だけからなる。この符号は、分母の $S_{mM}/S_{0M}=e^{-i\\pi mM/(k+2)}$ を有限character $\\chi_m(h_M)=e^{-im\\phi_M}$ に合わせる規約である。一般式 (6.62) に従って$uh_{M}^{-1}$を作ると、その左上成分、すなわちdisk座標は

$$
\\alpha=ae^{i\\phi_{M}}
$$

になる。したがって共役類の条件$\\operatorname{Re}a=\\cos\\psi_L$は

$$
\\boxed{
\\operatorname{Re}
\\left(e^{-i\\phi_{M}}\\alpha\\right)
=\\cos\\psi_L,
\\qquad |\\alpha|\\le1.
}
$$

これは直線を単位diskの内部に制限した線分である。一点係数の $SU(2)$ 因子は共役球面上の平均へ、分母の位相はその射影像の回転角 $\\phi_M$ へ対応した。boundary stateの低エネルギー一点係数は、この線分に沿うmode profileを与える。単位円上で $\\alpha=e^{i\\theta}$ と置くと $\\cos(\\theta-\\phi_M)=\\cos\\psi_L$ なので、二端点は

$$
\\alpha_\\pm(L,M)
=e^{i(\\phi_M\\pm\\psi_L)}
=\\exp\\!\\left[\\frac{i\\pi}{k+2}\\bigl(M\\pm(L+1)\\bigr)\\right].
$$

$S=0$ の基準の向きを $\\alpha_-\\to\\alpha_+$ と定める。端点の角度差は $2\\psi_L$ であり、線分の長さは $2\\sin\\psi_L$ となる。$S=0$ かつ $L$ を固定すると、selection ruleにより $M$ は2ずつ変わるので、隣り合う許容線分の回転角は $2\\pi/(k+2)$ である。$M$を1だけ変える場合は $S$ のparityも変える。

selection ruleは、端点の取り得る位置も定める。$L+M$ が偶数なら $M\\pm(L+1)$ は奇数だから、すべての端点は単位円に内接する正 $(k+2)$ 角形の頂点

$$
v_r:=\\exp\\!\\left[\\frac{i\\pi(2r+1)}{k+2}\\right],
\\qquad r\\in\\mathbb Z_{k+2}
$$

に乗る。整数の代表 $L,M$ に対して

$$
r_-:=\\frac{M-L-2}{2},\\qquad
r_+:=\\frac{M+L}{2},\\qquad r_+-r_-=L+1
$$

と置けば、braneは

$$
\\boxed{[L,M,0]:\\quad v_{r_-}\\longrightarrow v_{r_+}}
$$

を結ぶ線分である。頂点番号は $k+2$ を法として読む。$L=0$ は隣接頂点を結び、一般の $L$ は正多角形の周に沿って $L+1$ 辺離れた二頂点を結ぶ。

field identificationもこの幾何と整合する。変換

$$
(L,M,S)\\longmapsto(k-L,M+k+2,S+2)
$$

は $\\psi_L\\mapsto\\pi-\\psi_L$、$\\phi_M\\mapsto\\phi_M+\\pi$ を与える。線分の方程式の両辺がともに逆符号になるため、直線は同じであり、端点は $\\alpha'_+=\\alpha_-$、$\\alpha'_-=\\alpha_+$ と交換される。$S\\mapsto S+2$ も先に採用した規約で向きを反転するので、同時に変換した境界条件は向きまで含めて同じbraneを表す。

この線分はlarge-levelでの低エネルギー位置分布を読む幾何であり、有限levelの全開弦sectorを線分上の関数と同一視したものではない。その範囲で、位置modeの一点係数を最初から平均し直すことなく、境界ラベルから二端点と向きを求められる。

例えば $k=4$ では端点は正六角形の頂点である。$[2,2,0]$ を端点番号の式へ入れると $r_-=-1\\equiv5$、$r_+=2$ となり、線分は $v_5\\to v_2$ の直径になる。$[0,0,0]$ なら $r_-=-1\\equiv5$、$r_+=0$ なので、六角形の一辺 $v_5\\to v_0$ を得る。同じラベルの計算で長い線分と最短線分を描き分けられた。次には、この短い線分を並べた境界条件が、一本の線分へ流れるというRG則を調べる。

### 3.3 境界RG flowによる線分状braneの鎖の凝縮

前節では、一つの境界ラベルを二端点へ写せるようになった。今度は式 (6.63) が与える初期・終境界条件を両方とも写し、spin吸収の代数的な変化が、どの短い線分をどの一本へ変えるかを求めよう。

$SU(2)$ の $(P+1)$ 次元既約表現 $\\sigma_P$ はspin $P/2$ を持ち、$U(1)$ へ制限すると整数charge

$$
-P,-P+2,\\ldots,P
$$

に分かれる。$0\\le P\\le k$ とし、target braneを $[P,M,0]$、$P+M$ を偶数とする。式 (6.63) で分子の初期labelを $L=0$ とすると、このweight分解と $0\\times P=P$ から

$$
\\boxed{
\\bigoplus_{\\nu=0}^{P}[0,M+2\\nu-P,0]
\\longrightarrow[P,M,0]
}
$$

を得る。左辺でも $M+2\\nu-P$ は偶数なので、すべて許容braneである。chargeは $2(k+2)$ を法として扱い、角括弧はfield-identification同値類を表す。

一方、diskでは各 $L=0$ braneが隣り合う二頂点を結び、$L=P$ braneは周に沿って $P+1$ 辺離れた二頂点を結ぶ。代数式の両辺に現れる境界条件が、その二つの幾何のどこに当たるかを、同じ端点公式で照合する。使う対応は

$$
[L,M,0]:\\quad v_a\\longrightarrow v_{a+L+1},\\qquad
 a=\\frac{M-L-2}{2},\\qquad
 v_a=e^{i\\pi(2a+1)/(k+2)}
$$

である。頂点番号は $k+2$ を法として読む。終状態 $[P,M,0]$ の始点番号を

$$
r:=\\frac{M-P-2}{2}
$$

とすると、その線分は $v_r\\to v_{r+P+1}$ である。初期状態の $\\nu$ 番目に同じ端点公式を用いると

$$
[0,M+2\\nu-P,0]:\\quad
v_{r+\\nu}\\longrightarrow v_{r+\\nu+1}.
$$

従って $\\nu=0,1,\\ldots,P$ の順に並べれば

$$
\\boxed{v_r\\longrightarrow v_{r+1}\\longrightarrow\\cdots
\\longrightarrow v_{r+P+1}}
$$

という $P+1$ 本の最短線分の鎖になる。初期鎖の始点は $v_r$、終点は $v_{r+P+1}$ であり、終状態の一本の二端点と一致する。$\\sigma_P|_{U(1)}$ の $P+1$ 個のweightが、鎖の $P+1$ 本へ一つずつ対応した。$P=k$ では正 $(k+2)$ 角形の $k+1$ 辺をたどり、残る一辺の両端へ到達する。

この端点一致が確かめるのは、代数式と位置の対応である。矢印の終点は式 (6.63) のRG則からの予測であり、鎖が一本へ短くなる図形だけでは境界摂動の存在を証明しない。動力学の側で、左辺の直和境界に隣り合うbraneを結ぶ境界変更場があり、その摂動がrelevantであることを確かめる。$P\\ge1$ とし、$B_\\nu:=[0,M+2\\nu-P,0]$ と置く。$B_\\nu$ から $B_{\\nu+1}$ への開弦では、式 (6.61) のcharge差が $m=2,s=0$、分子fusionが $0\\times0=0$ なので、sector $[0,2,0]$ が重複度1で現れる。逆向きには共役sector $[0,-2,0]$ が現れる。

分子の真空moduleでcharge $\\pm2$ を持つ最も低い状態は $J^\\pm_{-1}|0\\rangle$ である。grade 0の真空はcharge 0しか持たないので、ここではgrade 1を使う。分子ウェイト1から分母 $U(1)_{k+2}$ のウェイトを引くと

$$
h_\\psi=1-\\frac{(\\pm2)^2}{4(k+2)}
=1-\\frac1{k+2}<1
$$

となる。境界摂動の結合は長さに対して重み $1-h_\\psi$ を持つので、有限 $k\\ge1$ でこの場はrelevantである。ここではgrade 1の励起が $h=1$ に下側から近づく。幾何の抽出に使った $h\\to0$ の条件と、RGでの $h<1$ の条件は、異なるエネルギーの範囲を選んでいる。この計算により、鎖の隣接braneを結ぶ摂動の結合がRGで増えることは分かる。終点を指定するため、spin吸収に対応する枝を選ぶ。端点ラベル $\\nu=0,\\ldots,P$ の空間をスピン $P/2$ のweight基底とすると、隣り合う端点を結ぶ昇降行列の要素は $\\sqrt{(\\nu+1)(P-\\nu)}$ である。large-levelの記述では、$B_\\nu$ から $B_{\\nu+1}$ への場の結合を $u_\\nu=u\\sqrt{(\\nu+1)(P-\\nu)}$ とし、逆向きにはその複素共役を用いる。$u$ は共通の摂動強度である。この結合の比で吸収するスピンを指定し、端点行列の経路順序付き積と端点traceによって摂動展開を定める。有限levelでの赤外終点には下に明示するRG則の予測を使い、RGで生成される対角結合なども含めて発展させる。

<details id="minimal-rg-perturbation">
<summary>直和境界の端点行列と、spin吸収に対応する境界摂動</summary>

これらの場を $\\psi_{\\nu+1,\\nu}$ とそのHermitian共役 $\\psi_{\\nu,\\nu+1}$ と書けば、実作用への摂動は

$$
\\delta S_\\partial
=\\int dx\\sum_{\\nu=0}^{P-1}
\\left(u_\\nu\\psi_{\\nu+1,\\nu}(x)
+\\overline{u_\\nu}\\psi_{\\nu,\\nu+1}(x)\\right)
$$

と書ける。端点を $\\nu=0,\\ldots,P$ のweight基底として見ると、spin $P/2$ の昇降演算子の行列要素は $\\sqrt{(\\nu+1)(P-\\nu)}$ である。large-levelのspin吸収の記述では、これに合わせた組合せとして

$$
u_\\nu=u\\sqrt{(\\nu+1)(P-\\nu)}
$$

を選ぶ。$u$ は共通の摂動強度である。この行列要素の選択だけで有限levelの赤外終点を証明することはできず、終点には本文に示したRG則を入力する。RGでは、この摂動のOPEから生成される対角結合なども含めて発展させる。境界変更場は直和境界の端点行列を含み、その経路順序付き積と端点traceにより摂動展開を定める。

</details>

$[0,\\pm2,0]$ は、分子のadjointを分母へ制限したcharge $\\pm2$ に対応し、[Fredenhagen–Schomerusの式 (2)](https://arxiv.org/abs/hep-th/0205011) が指定する摂動sectorに含まれる。spinを吸収する枝の赤外終点 $[P,M,0]$ は、[Fredenhagen §4.7、式 (33)](https://arxiv.org/abs/hep-th/0301229) の有限levelでのRG-flow予測を用いる。上の計算は、必要な境界変更場が存在してrelevantであり、その吸収則に適合することを示している。$P=0$ では初期・終境界条件が同じで、凝縮を起こす隣接sectorはない。

両側を結ぶことで、RG則に与えられたlabelの直和を、どの辺がつながり、どの二点を終状態が結ぶかという配置へ変換できる。摂動の適用条件と位置の検算を区別したまま、一つのflowを両方の記述で追えるようになった。

例えば $k=4,P=2,M=2$ では、許される頂点は正六角形上にある。初期配置の三本を順に並べると $[0,0,0]$、$[0,2,0]$、$[0,4,0]$ であり、$v_5\\to v_0\\to v_1\\to v_2$ の鎖になる。終状態 $[2,2,0]$ は同じ外端 $v_5,v_2$ を結ぶ直径である。図では、境界RG則が与える二つの境界条件に、この端点公式を適用している。

![正六角形の三辺をつなぐv5からv0、v1、v2への初期braneの鎖と、同じ外端v5とv2を直接結ぶ終状態braneの直径を比較する。k=4、P=2、M=2。](/diagrams/minimal-brane-flow.svg)

この例では、三本の初期braneが共有する内側の頂点 $v_0,v_1$ は、終状態の端点ではなくなり、外側の $v_5,v_2$ が一本の直径の端点として残った。短い線分の鎖という幾何は、全weightを並べた可約境界条件を表し、一本の線分はspinを吸収した既約境界条件を表している。

## 4. orbifoldとcosetのbrane構成の比較

本節の $\\mathbb Z_2$ simple-current orbifoldと、上で条件を指定したcosetでは、braneを次のように構成した。

$$
\\begin{array}{ccl}
\\text{親 }G\\text{ 理論のbrane}
&:&C^G_\\Lambda\\\\[2mm]
\\text{orbifold}
&:&\\text{Z}_2\\text{ orbitを重ねる。固定orbitはstabilizer表現で分裂する。}\\\\[2mm]
\\text{coset}
&:&C^G_\\Lambda(C^H_{\\Lambda'})^{-1}\\\\
&&\\text{を作り、}H\\text{ 共役orbitへ射影する。}
\\end{array}
$$

$SO(3)$ orbifoldでは、北側と南側の球面braneが一つのorbit braneになり、集合として不変な赤道$S^2$は商で$\\mathbb{RP}^2$へ降り、その上の二つのflat bundleが$[n]_\\pm$を与えた。$N=2$ minimal modelでは、$SU(2)$の共役二球面を$U(1)$点でずらし、$U(1)$共役方向を忘れるとdisk上の線分になった。

代数側では、orbifoldの群作用が開弦と端点へ同時に作用し、その不変部分を選んだ。同じ赤道 $\\mathbb{RP}^2$ 上でも、holonomyが同じ両端には偶数spin、異なる両端には奇数spinが残る。従って幾何の台が一致していても、例えば恒等sectorがあるかどうかで二つの境界条件を区別できる。

cosetでは、分岐のselection ruleが存在する状態を選び、field identificationが同じ残りの状態空間の重複を除いた。このsectorとfusion dataから一点係数と開弦を求め、large-levelの位置modeへの応答を射影した共役類へ結んだ。minimal modelでは、その結果が $[L,M,0]\\mapsto v_{r_-}\\to v_{r_+}$ という端点公式になった。これを境界spin吸収則の両辺へ使えば、短い線分の鎖と一本の終状態が同じ外端を持つことまで計算できる。

商空間のbraneを決めるには、親braneの位置を写すだけでなく、商へ残す弦の状態と端点の変換を定める必要があった。その情報が、orbifoldでは同じ形の二境界を見分け、cosetでは境界ラベルを位置とflowの配置へ変換する手段になった。

## 参考文献

- Recknagel--Schomerus, *Boundary Conformal Field Theory and the Worldsheet Approach to D-Branes*, §6.4, pp.259--266。$SO(3)$ fixed braneの開弦分配関数は式 (6.55), (6.56)、coset Virasoro・fusion・$S$-matrix・一点関数・開弦スペクトル・brane局在・RG flowは式 (6.57)--(6.63)。
- simple current、monodromy charge、orbifold partition function、fixed-point resolutionの一般則は同書 §4.A.3、式 (4.108)--(4.112)。$SU(2)_{4n}$への特殊化が§1の式を与える。
- 一般埋め込みでの誘導level $k_H=x_ek_G$はaffine currentの二点関数から従う。$N=2$模型では対角currentのlevel加法を用いる。
- Cardy境界状態と開弦スペクトルの一般式は同書 §4.4.1、式 (4.80), (4.81)。
- $N=2$のA-type gluingは同書の式 (4.14)、minimal-modelのfield identification $(l,m,s)\\sim(k-l,m+k+2,s+2)$は§6.4.2の一般則の特殊化であり、同書p.289にも明記されている。
- $U(1)_{k+2}$の$S$-matrixは原著p.265、$U(1)_2$のデータは同じrational Gaussian modelのlevel $2$への特殊化である。
- $SU(2)_k$の共形ウェイト、fusion、bulk spectrum、共役類braneの局在は同書の式 (6.7), (6.11), (6.14) および §6.3.1。
- crossed productによるlarge-$k$境界OPE、cosetの一般modular data、式 (6.62) の局在解析、式 (6.63) のRG flowについては、原著 §6.4 と同節の参照文献。

- vector-gauged WZWの境界作用：Elitzur–Sarkissian, [D-Branes on a gauged WZW model](https://arxiv.org/abs/hep-th/0108142), §3。ゲージ量子化とGKO状態空間の対応：Hwang–Rhedin, [The BRST formulation of G/H WZNW models](https://arxiv.org/abs/hep-th/9305174)。
- 共役類積の一点関数による検証：Fredenhagen–Schomerus, [D-branes in coset models](https://arxiv.org/abs/hep-th/0111189), 付録A。境界摂動sectorの指定：[On Boundary RG-Flows in Coset Conformal Field Theories](https://arxiv.org/abs/hep-th/0205011), 式 (2)。minimal-modelでの有限levelのflow予測：Fredenhagen, [Organizing boundary RG flows](https://arxiv.org/abs/hep-th/0301229), §4.7、式 (33)。
`}];function XE(e){return typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(XE).join(``):e&&typeof e==`object`&&`props`in e?XE(e.props?.children):``}function ZE(e){return e.toLowerCase().replace(/[$\\{}_^*`]/g,``).replace(/[\s・：、。／/]+/g,`-`).replace(/[^\p{L}\p{N}-]/gu,``).replace(/^-+|-+$/g,``)}function QE(e,t,n){return t?`${e}-heading-${t}`:`${e}-${ZE(n)}`}function $E(e){let t=[],n=!1;return e.content.split(`
`).forEach((r,i)=>{if(/^\s*```/.test(r)){n=!n;return}if(n)return;let a=r.match(/^(##|###)\s+(.+?)\s*#*\s*$/);a&&t.push({id:QE(e.id,i+1,a[2]),depth:a[1].length,label:a[2]})}),t}function eD(e){let t=new Map,n=e.matchAll(/```equation\s*\n([\s\S]*?)```/g);for(let e of n){let n=wg(e[1]);n&&t.set(n.id,n.tex)}for(let n of e.matchAll(/^([ \t]*)\$\$[ \t]*\n([\s\S]*?)\n\1\$\$[ \t]*$/gm)){let e=n[2].match(/\\tag\*?\{([^}]+)\}/);e&&t.set(e[1],n[2].replace(e[0],``).trim())}return t}var tD=new Map(YE.flatMap(e=>[...eD(e.content)])),nD={ids:[...tD.keys()]};function rD({equation:e,preview:t=!1}){return(0,N.jsx)(`div`,{id:t?void 0:`eq-${e.id}`,className:`referenced-equation`,children:(0,N.jsx)(Cg,{children:`$$\n${e.tex}\n$$`})})}function iD({id:e,tex:t,children:n}){return(0,N.jsx)(KE,{label:n,title:`式 (${e})`,children:(0,N.jsx)(Cg,{children:`$$\n${t}\n$$`})})}var aD=Ag(YE);function oD({reference:e,components:t}){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`note-source-heading`,children:(0,N.jsx)(Cg,{children:e.heading})}),(0,N.jsx)(cD,{source:e.content,components:t}),(0,N.jsxs)(`a`,{className:`note-source-link`,href:JE(e.href),children:[`参照先の本文へ `,(0,N.jsx)(Ug,{size:14,"aria-hidden":`true`})]})]})}function sD({reference:e,children:t,components:n}){return(0,N.jsx)(KE,{label:t,title:`${e.section} · 本文の参照`,children:(0,N.jsx)(oD,{reference:e,components:n})})}function cD({source:e,components:t}){return(0,N.jsx)(Cg,{remarkPlugins:[Og,Eg,[Dg,nD]],components:t,children:e})}function lD(e,t,n=!1){return{div:({node:e,children:t,...r})=>{let i=e?.properties.dataMathHint;return typeof i==`string`&&n?(0,N.jsx)(N.Fragment,{children:t}):typeof i==`string`?(0,N.jsxs)(`div`,{className:`hinted-equation`,children:[t,(0,N.jsx)(UE,{note:i})]}):(0,N.jsx)(`div`,{...r,children:t})},summary:({children:e})=>(0,N.jsxs)(`summary`,{className:`disclosure-summary`,children:[(0,N.jsx)(`svg`,{className:`disclosure-marker`,width:`12`,height:`12`,viewBox:`0 0 12 12`,"aria-hidden":`true`,children:(0,N.jsx)(`path`,{d:`M4 2 9 6 4 10Z`,fill:`currentColor`})}),(0,N.jsx)(`span`,{children:e})]}),h1:({children:e})=>(0,N.jsx)(`h1`,{children:e}),h2:({node:e,children:r})=>(0,N.jsx)(`h2`,{id:n?void 0:QE(t,e?.position?.start.line,XE(r)),children:r}),h3:({node:e,children:r})=>(0,N.jsx)(`h3`,{id:n?void 0:QE(t,e?.position?.start.line,XE(r)),children:r}),h4:({children:e})=>(0,N.jsx)(`h4`,{id:n?void 0:ZE(XE(e)),children:e}),img:({src:e,alt:t,title:n})=>typeof e==`string`&&e.startsWith(`/diagrams/`)?(0,N.jsx)(`span`,{className:`concept-figure`,tabIndex:0,role:`region`,"aria-label":`説明図。画面幅が狭い場合は横にスクロールできます。`,children:(0,N.jsx)(`img`,{src:JE(e),alt:t??``,title:n,loading:`lazy`})}):(0,N.jsx)(`img`,{src:typeof e==`string`?JE(e):e,alt:t??``,title:n,loading:`lazy`}),a:({href:r,children:i})=>{let a=jg(r,t,aD);if(a&&!n)return(0,N.jsx)(sD,{reference:a,components:lD(e,YE.find(e=>e.id===a.chapterId).id,!0),children:i});if(n)return(0,N.jsx)(`a`,{href:JE(r?.startsWith(`#`)?`/${t}${r}`:r),children:i});let o=r?.startsWith(`#eq-`)?decodeURIComponent(r.slice(4)):null,s=o?e.get(o):null;return o&&s?(0,N.jsx)(iD,{id:o,tex:s,children:i}):r?.startsWith(`#`)?(0,N.jsx)(`a`,{href:r,onClick:e=>{e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||uD(r)},children:i}):(0,N.jsx)(`a`,{href:JE(r),target:r?.startsWith(`http`)?`_blank`:void 0,rel:`noreferrer`,children:i})},pre:({children:e})=>{let t=Array.isArray(e)?e[0]:e,n=(0,P.isValidElement)(t)?t.props.className:void 0;return n===`language-math-steps`||n===`language-equation`?(0,N.jsx)(N.Fragment,{children:e}):(0,N.jsx)(`pre`,{children:e})},code:({className:e,children:t,...r})=>{if(e===`language-equation`){let i=wg(XE(t));return i?(0,N.jsx)(rD,{equation:i,preview:n}):(0,N.jsx)(`code`,{className:e,...r,children:t})}if(e===`language-math-steps`){let n=Tg(XE(t));return n?(0,N.jsx)(WE,{...n}):(0,N.jsx)(`code`,{className:e,...r,children:t})}return(0,N.jsx)(`code`,{className:e,...r,children:t})}}}function uD(e){let t;try{t=decodeURIComponent(e.slice(1))}catch{return}if(!t)return;let n=document.getElementById(t);if(n){for(let e=n;e;e=e.parentElement)e instanceof HTMLDetailsElement&&(e.open=!0);n.scrollIntoView({block:`start`})}}function dD({initialId:e=`6-1`}){o();let[t,n]=(0,P.useState)(YE.some(t=>t.id===e)?e:`6-1`),[r,i]=(0,P.useState)(!1),[a,s]=(0,P.useState)(0),c=YE.findIndex(e=>e.id===t),l=YE[c],u=(0,P.useMemo)(()=>$E(l),[l]),d=(0,P.useMemo)(()=>new Map([...tD,...eD(l.content)]),[l.content]),f=(0,P.useMemo)(()=>lD(d,t),[t,d]);(0,P.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;s(e>0?Math.min(100,window.scrollY/e*100):0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[t]),(0,P.useEffect)(()=>{let e=()=>{uD(window.location.hash)},t=requestAnimationFrame(e);return window.addEventListener(`hashchange`,e),()=>{cancelAnimationFrame(t),window.removeEventListener(`hashchange`,e)}},[t]);let p=e=>{if(e){window.location.assign(JE(`/${e}/`));return}},m=e=>{i(!1),requestAnimationFrame(()=>uD(e))};return(0,N.jsxs)(`div`,{className:`reader-shell`,children:[(0,N.jsx)(`div`,{className:`progress-line`,style:{width:`${a}%`}}),(0,N.jsxs)(`header`,{className:`reader-header`,children:[(0,N.jsx)(`button`,{className:`header-icon nav-toggle`,onClick:()=>i(!0),"aria-label":`章一覧を開く`,children:(0,N.jsx)(Gg,{size:19})}),(0,N.jsx)(`a`,{className:`wordmark`,href:`#article-top`,children:`WZW Notes`}),(0,N.jsx)(GE,{})]}),(0,N.jsxs)(`aside`,{className:`chapter-index ${r?`is-open`:``}`,"aria-label":`章一覧`,children:[(0,N.jsxs)(`div`,{className:`panel-mobile-head`,children:[(0,N.jsx)(`span`,{children:`章一覧`}),(0,N.jsx)(`button`,{onClick:()=>i(!1),"aria-label":`章一覧を閉じる`,children:(0,N.jsx)(Jg,{size:18})})]}),(0,N.jsx)(`nav`,{className:`chapter-list`,"aria-label":`章と節`,children:YE.map(e=>{let n=e.id===t;return(0,N.jsxs)(`div`,{className:`chapter-group`,children:[(0,N.jsx)(`button`,{className:n?`is-active`:``,onClick:()=>p(e.id),"aria-label":`${e.section} ${e.shortTitle}`,"aria-expanded":n,"aria-current":n?`page`:void 0,children:(0,N.jsxs)(`span`,{className:`chapter-label`,children:[(0,N.jsx)(`b`,{children:e.section}),(0,N.jsx)(`strong`,{children:(0,N.jsx)(Cg,{inline:!0,children:e.shortTitle})})]})}),n&&(0,N.jsx)(`ol`,{className:`subsection-list`,"aria-label":`${e.section}の節`,children:u.map(e=>(0,N.jsx)(`li`,{className:`depth-${e.depth}`,children:(0,N.jsx)(`a`,{href:`#${e.id}`,onClick:()=>m(`#${e.id}`),children:(0,N.jsx)(Cg,{inline:!0,children:e.label})})},e.id))})]},e.id)})})]}),(0,N.jsx)(`main`,{className:`article-column`,id:`article-top`,children:(0,N.jsxs)(`div`,{className:`article-inner`,children:[(0,N.jsx)(`article`,{className:`note-content`,children:(0,N.jsx)(cD,{source:l.content,components:f})}),(0,N.jsxs)(`nav`,{className:`chapter-pager`,"aria-label":`前後の章`,children:[(0,N.jsxs)(`button`,{disabled:c===0,onClick:()=>p(YE[c-1]?.id),children:[(0,N.jsx)(Hg,{size:16,"aria-hidden":`true`}),`前の章`]}),(0,N.jsxs)(`button`,{disabled:c===YE.length-1,onClick:()=>p(YE[c+1]?.id),children:[`次の章`,(0,N.jsx)(Ug,{size:16,"aria-hidden":`true`})]})]})]})}),r&&(0,N.jsx)(`button`,{className:`screen-backdrop`,onClick:()=>i(!1),"aria-label":`章一覧を閉じる`})]})}function fD(){return(0,N.jsx)(dD,{})}export{dD as NotesReader,fD as default};