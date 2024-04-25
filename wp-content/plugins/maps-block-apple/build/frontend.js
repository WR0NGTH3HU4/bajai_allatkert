(()=>{"use strict";var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.wp.domReady;var i=t.n(e);const a=window.wp.apiFetch;var s=t.n(a);const o=window.wp.data,l=window.wp.i18n;class n{constructor(t){this.element=t,this.mapOptions={},this.markerElements=this.element.querySelectorAll(".marker-annotation"),this.markers=[...this.markerElements].map((t=>{const{latitude:e,longitude:i,title:a,subtitle:s,color:o,glyphColor:l,glyphImage:n}=t.dataset;return{latitude:Number(e),longitude:Number(i),title:a||"",subtitle:s||"",color:o||null,glyphColor:l||null,glyphImage:n||null}})),this.mapkit=t.ownerDocument.defaultView.mapkit,this.mapkit&&this.init()}init(){this.createMap(),this.addMarkers(this.markers)}createMap(){const{mapType:t,latitude:e,longitude:i,rotation:a,zoom:s,showsMapTypeControl:o=!0,isRotationEnabled:l=!0,showsCompass:n,isZoomEnabled:r=!0,showsZoomControl:p=!0,isScrollEnabled:m=!0,showsScale:h}=this.element.dataset,u=new this.mapkit.Coordinate(Number(e)||51.48762585296625,Number(i)||-.1326724377053381);this.mapOptions={center:u,rotation:Number(a)||0,mapType:t||this.mapkit.Map.MapTypes.Satellite,showsMapTypeControl:"true"===o,isRotationEnabled:"true"===l,isZoomEnabled:"true"===r,showsZoomControl:"true"===p,isScrollEnabled:"true"===m,showsScale:h||this.mapkit.FeatureVisibility.Adaptive},this.mapOptions.isRotationEnabled&&(this.mapOptions.showsCompass=n||this.mapkit.FeatureVisibility.Adaptive),this.map=new this.mapkit.Map(this.element,this.mapOptions),this.map._impl.zoomLevel=Number(s)||15}addMarkers(t){this.clearMarkers();const e=[];t.forEach(((i,a)=>{const{latitude:s,longitude:o,title:l,subtitle:n,titleVisibility:r,subtitleVisibility:p,color:m,glyphColor:h,glyphText:u,glyphImage:c}=i,d=new this.mapkit.Coordinate(Number(s),Number(o)),b={title:l,subtitle:n||null,titleVisibility:r||this.mapkit.FeatureVisibility.Visible,subtitleVisibility:p||this.mapkit.FeatureVisibility.Visible,color:m||"green",glyphColor:h||"white",glyphText:u||"",draggable:!!this.isEditor};c&&(b.glyphImage={1:c});const k=new this.mapkit.MarkerAnnotation(d,b);this.setAttributes&&k.addEventListener("drag-end",(e=>{const{target:{coordinate:i}}=e,s=[...t];s[a].latitude=i.latitude,s[a].longitude=i.longitude,this.setAttributes({markers:s})})),e.push(k)})),this.map.addAnnotations(e)}clearMarkers(){this.map.removeAnnotations(this.map.annotations)}static authenticateMap(t){s()({path:"MapsBlockApple/v1/GetJWT/"}).then((()=>{t.init({authorizationCallback(t){s()({path:"MapsBlockApple/v1/GetJWT/"}).then(t)}})})).catch((e=>{(0,o.dispatch)("core/notices").createErrorNotice(e.message,{isDismissible:!0,type:"snackbar"}),t.dispatchEvent(new Event("error"))}))}}Object.keys(mapkit.Map.MapTypes).map((t=>({label:"MutedStandard"===t?(0,l.__)("Muted","maps-block-apple"):t,value:mapkit.Map.MapTypes[t]}))),Object.keys(mapkit.FeatureVisibility).map((t=>({label:t,value:mapkit.FeatureVisibility[t]}))),i()((async()=>{const t=document.querySelectorAll(".wp-block-tenup-maps-block-apple");t.length&&(n.authenticateMap(window.mapkit),t.forEach((t=>{new n(t)})))}))})();