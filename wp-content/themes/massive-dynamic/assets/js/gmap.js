
/*!
 *  GMAP3 Plugin for JQuery
 *  Version   : 5.1.1
 *  Date      : 2013-05-25
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *
 *  Copyright (c) 2010-2012 Jean-Baptiste DEMONTE
 *  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above
 *     copyright notice, this list of conditions and the following
 *     disclaimer in the documentation and/or other materials provided
 *     with the distribution.
 *   - Neither the name of the author nor the names of its contributors
 *     may be used to endorse or promote products derived from this
 *     software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
!function(t,o){function e(){E||(E={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:{Map:google.maps.Map,Marker:google.maps.Marker,InfoWindow:google.maps.InfoWindow,Circle:google.maps.Circle,Rectangle:google.maps.Rectangle,OverlayView:google.maps.OverlayView,StreetViewPanorama:google.maps.StreetViewPanorama,KmlLayer:google.maps.KmlLayer,TrafficLayer:google.maps.TrafficLayer,BicyclingLayer:google.maps.BicyclingLayer,GroundOverlay:google.maps.GroundOverlay,StyledMapType:google.maps.StyledMapType,ImageMapType:google.maps.ImageMapType},map:{mapTypeId:google.maps.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function n(t,e){return t!==o?t:"gmap3_"+(e?A+1:++A)}function i(t){var o,e=function(t){return parseInt(t,10)},n=google.maps.version.split(".").map(e);for(t=t.split(".").map(e),o=0;o<t.length;o++){if(!n.hasOwnProperty(o))return!1;if(n[o]<t[o])return!1}return!0}function s(o,e,n,i,s){if(e.todo.events||e.todo.onces){var a={id:i,data:e.todo.data,tag:e.todo.tag};e.todo.events&&t.each(e.todo.events,function(e,i){var r=o,l=i;t.isArray(i)&&(r=i[0],l=i[1]),google.maps.event.addListener(n,e,function(t){l.apply(r,[s?s:n,t,a])})}),e.todo.onces&&t.each(e.todo.onces,function(e,i){var r=o,l=i;t.isArray(i)&&(r=i[0],l=i[1]),google.maps.event.addListenerOnce(n,e,function(t){l.apply(r,[s?s:n,t,a])})})}}function a(){var t=[];this.empty=function(){return!t.length},this.add=function(o){t.push(o)},this.get=function(){return t.length?t[0]:!1},this.ack=function(){t.shift()}}function r(o,e,n){function i(t){var o={};return o[t]={},o}function s(){var t;for(t in n)if(!(t in r))return t}var a,r={},l=this,u={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};"string"==typeof n&&(n=i(n)),this.run=function(){for(var i,l;i=s();){if("function"==typeof o[i])return a=i,l=t.extend(!0,{},E[i]||{},n[i].options||{}),void(i in u.latLng?n[i].values?j(n[i].values,o,o[i],{todo:n[i],opts:l,session:r}):S(o,o[i],u.latLng[i],{todo:n[i],opts:l,session:r}):i in u.geoloc?O(o,o[i],{todo:n[i],opts:l,session:r}):o[i].apply(o,[{todo:n[i],opts:l,session:r}]));r[i]=null}e.apply(o,[n,r])},this.ack=function(t){r[a]=t,l.run.apply(l,[])}}function l(t){var o,e=[];for(o in t)e.push(o);return e}function u(o,e){var n={};if(o.todo)for(var i in o.todo)"options"!==i&&"values"!==i&&(n[i]=o.todo[i]);var s,a=["data","tag","id","events","onces"];for(s=0;s<a.length;s++)c(n,a[s],e,o.todo);return n.options=t.extend({},o.opts||{},e.options||{}),n}function c(t,o){for(var e=2;e<arguments.length;e++)if(o in arguments[e])return void(t[o]=arguments[e][o])}function p(){var t=[];this.get=function(o){if(t.length){var e,n,i,s,a,r=l(o);for(e=0;e<t.length;e++){for(s=t[e],a=r.length==s.keys.length,n=0;n<r.length&&a;n++)i=r[n],a=i in s.request,a&&(a="object"==typeof o[i]&&"equals"in o[i]&&"function"==typeof o[i]?o[i].equals(s.request[i]):o[i]===s.request[i]);if(a)return s.results}}},this.store=function(o,e){t.push({request:o,keys:l(o),results:e})}}function d(o,e,n,i){var s=this,a=[];E.classes.OverlayView.call(this),this.setMap(o),this.onAdd=function(){var o=this.getPanes();e.pane in o&&t(o[e.pane]).append(i),t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(o,e){a.push(google.maps.event.addDomListener(i[0],e,function(o){t.Event(o).stopPropagation(),google.maps.event.trigger(s,e,[o]),s.draw()}))}),a.push(google.maps.event.addDomListener(i[0],"contextmenu",function(o){t.Event(o).stopPropagation(),google.maps.event.trigger(s,"rightclick",[o]),s.draw()}))},this.getPosition=function(){return n},this.draw=function(){var t=this.getProjection().fromLatLngToDivPixel(n);i.css("left",t.x+e.offset.x+"px").css("top",t.y+e.offset.y+"px")},this.onRemove=function(){for(var t=0;t<a.length;t++)google.maps.event.removeListener(a[t]);i.remove()},this.hide=function(){i.hide()},this.show=function(){i.show()},this.toggle=function(){i&&(i.is(":visible")?this.show():this.hide())},this.toggleDOM=function(){this.getMap()?this.setMap(null):this.setMap(o)},this.getDOMElement=function(){return i[0]}}function g(t,o){function e(){return this.onAdd=function(){},this.onRemove=function(){},this.draw=function(){},E.classes.OverlayView.apply(this,[])}e.prototype=E.classes.OverlayView.prototype;var n=new e;return n.setMap(t),n}function f(o,e,i){function a(t){T[t]||(delete A[t].options.map,T[t]=new E.classes.Marker(A[t].options),s(o,{todo:A[t]},T[t],A[t].id))}function r(){return(m=D.getProjection())?(k=!0,S.push(google.maps.event.addListener(e,"zoom_changed",function(){d()})),S.push(google.maps.event.addListener(e,"bounds_changed",function(){d()})),void h()):void setTimeout(function(){r.apply(P,[])},25)}function l(t){"object"==typeof j[t]?("function"==typeof j[t].obj.setMap&&j[t].obj.setMap(null),"function"==typeof j[t].obj.remove&&j[t].obj.remove(),"function"==typeof j[t].shadow.remove&&j[t].obj.remove(),"function"==typeof j[t].shadow.setMap&&j[t].shadow.setMap(null),delete j[t].obj,delete j[t].shadow):T[t]&&T[t].setMap(null),delete j[t]}function u(){var t,o,e,n,i,s,a,r;return arguments[0]instanceof google.maps.LatLng?(t=arguments[0].lat(),e=arguments[0].lng(),arguments[1]instanceof google.maps.LatLng?(o=arguments[1].lat(),n=arguments[1].lng()):(o=arguments[1],n=arguments[2])):(t=arguments[0],e=arguments[1],arguments[2]instanceof google.maps.LatLng?(o=arguments[2].lat(),n=arguments[2].lng()):(o=arguments[2],n=arguments[3])),i=Math.PI*t/180,s=Math.PI*e/180,a=Math.PI*o/180,r=Math.PI*n/180,6371e3*Math.acos(Math.min(Math.cos(i)*Math.cos(a)*Math.cos(s)*Math.cos(r)+Math.cos(i)*Math.sin(s)*Math.cos(a)*Math.sin(r)+Math.sin(i)*Math.sin(a),1))}function c(){var t=u(e.getCenter(),e.getBounds().getNorthEast()),o=new google.maps.Circle({center:e.getCenter(),radius:1.25*t});return o.getBounds()}function p(){var t,o={};for(t in j)o[t]=!0;return o}function d(){clearTimeout(v),v=setTimeout(function(){h()},25)}function f(t){var o=m.fromLatLngToDivPixel(t),e=m.fromDivPixelToLatLng(new google.maps.Point(o.x+i.radius,o.y-i.radius)),n=m.fromDivPixelToLatLng(new google.maps.Point(o.x-i.radius,o.y+i.radius));return new google.maps.LatLngBounds(n,e)}function h(){if(!b&&!x&&k){var o,n,s,a,r,u,d,g,h,v,m,L=[],I={},P=e.getZoom(),S="maxZoom"in i&&P>i.maxZoom,O=p(),C=!1;for(M=!1,P>3&&(r=c(),C=r.getSouthWest().lng()<r.getNorthEast().lng()),o=0;o<A.length;o++)!A[o]||C&&!r.contains(A[o].options.position)||y&&!y(_[o])||L.push(o);for(;;){for(o=0;I[o]&&o<L.length;)o++;if(o==L.length)break;if(a=[],B&&!S){m=10;do for(g=a,a=[],m--,d=g.length?r.getCenter():A[L[o]].options.position,r=f(d),n=o;n<L.length;n++)I[n]||r.contains(A[L[n]].options.position)&&a.push(n);while(g.length<a.length&&a.length>1&&m)}else for(n=o;n<L.length;n++)if(!I[n]){a.push(n);break}for(u={indexes:[],ref:[]},h=v=0,s=0;s<a.length;s++)I[a[s]]=!0,u.indexes.push(L[a[s]]),u.ref.push(L[a[s]]),h+=A[L[a[s]]].options.position.lat(),v+=A[L[a[s]]].options.position.lng();h/=a.length,v/=a.length,u.latLng=new google.maps.LatLng(h,v),u.ref=u.ref.join("-"),u.ref in O?delete O[u.ref]:(1===a.length&&(j[u.ref]=!0),w(u))}t.each(O,function(t){l(t)}),x=!1}}var v,m,y,w,L,b=!1,M=!1,x=!1,k=!1,B=!0,P=this,S=[],j={},O={},C={},T=[],A=[],_=[],D=g(e,i.radius);r(),this.getById=function(t){return t in O?(a(O[t]),T[O[t]]):!1},this.rm=function(t){var o=O[t];T[o]&&T[o].setMap(null),delete T[o],T[o]=!1,delete A[o],A[o]=!1,delete _[o],_[o]=!1,delete O[t],delete C[o],M=!0},this.clearById=function(t){return t in O?(this.rm(t),!0):void 0},this.clear=function(t,o,e){var n,i,s,a,r,l=[],u=I(e);for(t?(n=A.length-1,i=-1,s=-1):(n=0,i=A.length,s=1),a=n;a!=i&&(!A[a]||u&&!u(A[a].tag)||(l.push(C[a]),!o&&!t));a+=s);for(r=0;r<l.length;r++)this.rm(l[r])},this.add=function(t,o){t.id=n(t.id),this.clearById(t.id),O[t.id]=T.length,C[T.length]=t.id,T.push(null),A.push(t),_.push(o),M=!0},this.addMarker=function(t,e){e=e||{},e.id=n(e.id),this.clearById(e.id),e.options||(e.options={}),e.options.position=t.getPosition(),s(o,{todo:e},t,e.id),O[e.id]=T.length,C[T.length]=e.id,T.push(t),A.push(e),_.push(e.data||{}),M=!0},this.todo=function(t){return A[t]},this.value=function(t){return _[t]},this.marker=function(t){return t in T?(a(t),T[t]):!1},this.markerIsSet=function(t){return Boolean(T[t])},this.setMarker=function(t,o){T[t]=o},this.store=function(t,o,e){j[t.ref]={obj:o,shadow:e}},this.free=function(){for(var o=0;o<S.length;o++)google.maps.event.removeListener(S[o]);S=[],t.each(j,function(t){l(t)}),j={},t.each(A,function(t){A[t]=null}),A=[],t.each(T,function(t){T[t]&&(T[t].setMap(null),delete T[t])}),T=[],t.each(_,function(t){delete _[t]}),_=[],O={},C={}},this.filter=function(t){y=t,h()},this.enable=function(t){B!=t&&(B=t,h())},this.display=function(t){w=t},this.error=function(t){L=t},this.beginUpdate=function(){b=!0},this.endUpdate=function(){b=!1,M&&h()},this.autofit=function(t){for(var o=0;o<A.length;o++)A[o]&&t.extend(A[o].options.position)}}function h(t,o){this.id=function(){return t},this.filter=function(t){o.filter(t)},this.enable=function(){o.enable(!0)},this.disable=function(){o.enable(!1)},this.add=function(t,e,n){n||o.beginUpdate(),o.addMarker(t,e),n||o.endUpdate()},this.getById=function(t){return o.getById(t)},this.clearById=function(t,e){var n;return e||o.beginUpdate(),n=o.clearById(t),e||o.endUpdate(),n},this.clear=function(t,e,n,i){i||o.beginUpdate(),o.clear(t,e,n),i||o.endUpdate()}}function v(){function e(t){return{id:t.id,name:t.name,object:t.obj,tag:t.tag,data:t.data}}function i(t){"function"==typeof t.setMap&&t.setMap(null),"function"==typeof t.remove&&t.remove(),"function"==typeof t.free&&t.free(),t=null}var s={},a={};this.add=function(t,o,e,i){var r=t.todo||{},l=n(r.id);return s[o]||(s[o]=[]),l in a&&this.clearById(l),a[l]={obj:e,sub:i,name:o,id:l,tag:r.tag,data:r.data},s[o].push(l),l},this.getById=function(t,o,n){return t in a?o?a[t].sub:n?e(a[t]):a[t].obj:!1},this.get=function(t,o,n,i){var r,l,u=I(n);if(!s[t]||!s[t].length)return null;for(r=s[t].length;r;)if(r--,l=s[t][o?r:s[t].length-r-1],l&&a[l]){if(u&&!u(a[l].tag))continue;return i?e(a[l]):a[l].obj}return null},this.all=function(t,n,i){var r=[],l=I(n),u=function(t){var o,n;for(o=0;o<s[t].length;o++)if(n=s[t][o],n&&a[n]){if(l&&!l(a[n].tag))continue;r.push(i?e(a[n]):a[n].obj)}};if(t in s)u(t);else if(t===o)for(t in s)u(t);return r},this.rm=function(t,o,e){var n,i;if(!s[t])return!1;if(o)if(e)for(n=s[t].length-1;n>=0&&(i=s[t][n],!o(a[i].tag));n--);else for(n=0;n<s[t].length&&(i=s[t][n],!o(a[i].tag));n++);else n=e?s[t].length-1:0;return n in s[t]?this.clearById(s[t][n],n):!1},this.clearById=function(t,e){if(t in a){var n,r=a[t].name;for(n=0;e===o&&n<s[r].length;n++)t===s[r][n]&&(e=n);return i(a[t].obj),a[t].sub&&i(a[t].sub),delete a[t],s[r].splice(e,1),!0}return!1},this.objGetById=function(t){var o;if(s.clusterer)for(var e in s.clusterer)if((o=a[s.clusterer[e]].obj.getById(t))!==!1)return o;return!1},this.objClearById=function(t){if(s.clusterer)for(var o in s.clusterer)if(a[s.clusterer[o]].obj.clearById(t))return!0;return null},this.clear=function(t,o,e,n){var i,a,r,l=I(n);if(t&&t.length)t=k(t);else{t=[];for(i in s)t.push(i)}for(a=0;a<t.length;a++)if(r=t[a],o)this.rm(r,l,!0);else if(e)this.rm(r,l,!1);else for(;this.rm(r,l,!1););},this.objClear=function(o,e,n,i){if(s.clusterer&&(t.inArray("marker",o)>=0||!o.length))for(var r in s.clusterer)a[s.clusterer[r]].obj.clear(e,n,i)}}function m(){return _.geocoder||(_.geocoder=new google.maps.Geocoder),_.geocoder}function y(){return _.directionsService||(_.directionsService=new google.maps.DirectionsService),_.directionsService}function w(){return _.elevationService||(_.elevationService=new google.maps.ElevationService),_.elevationService}function L(){return _.maxZoomService||(_.maxZoomService=new google.maps.MaxZoomService),_.maxZoomService}function b(){return _.distanceMatrixService||(_.distanceMatrixService=new google.maps.DistanceMatrixService),_.distanceMatrixService}function M(){if(E.verbose){var t,o=[];if(window.console&&"function"==typeof console.error){for(t=0;t<arguments.length;t++)o.push(arguments[t]);console.error.apply(console,o)}else{for(o="",t=0;t<arguments.length;t++)o+=arguments[t].toString()+" ";alert(o)}}}function x(t){return("number"==typeof t||"string"==typeof t)&&""!==t&&!isNaN(t)}function k(t){var e,n=[];if(t!==o)if("object"==typeof t)if("number"==typeof t.length)n=t;else for(e in t)n.push(t[e]);else n.push(t);return n}function I(e){return e?"function"==typeof e?e:(e=k(e),function(n){if(n===o)return!1;if("object"==typeof n){for(var i=0;i<n.length;i++)if(t.inArray(n[i],e)>=0)return!0;return!1}return t.inArray(n,e)>=0}):void 0}function B(o,e,n){var i=e?o:null;return o&&"string"!=typeof o?o.latLng?B(o.latLng):o instanceof google.maps.LatLng?o:x(o.lat)?new google.maps.LatLng(o.lat,o.lng):!n&&t.isArray(o)&&x(o[0])&&x(o[1])?new google.maps.LatLng(o[0],o[1]):i:i}function P(o){var e,n;return!o||o instanceof google.maps.LatLngBounds?o||null:(t.isArray(o)?2==o.length?(e=B(o[0]),n=B(o[1])):4==o.length&&(e=B([o[0],o[1]]),n=B([o[2],o[3]])):"ne"in o&&"sw"in o?(e=B(o.ne),n=B(o.sw)):"n"in o&&"e"in o&&"s"in o&&"w"in o&&(e=B([o.n,o.e]),n=B([o.s,o.w])),e&&n?new google.maps.LatLngBounds(n,e):null)}function S(t,o,e,n,i){var s=e?B(n.todo,!1,!0):!1,a=s?{latLng:s}:n.todo.address?"string"==typeof n.todo.address?{address:n.todo.address}:n.todo.address:!1,r=a?D.get(a):!1,l=this;a?(i=i||0,r?(n.latLng=r.results[0].geometry.location,n.results=r.results,n.status=r.status,o.apply(t,[n])):(a.location&&(a.location=B(a.location)),a.bounds&&(a.bounds=P(a.bounds)),m().geocode(a,function(s,r){r===google.maps.GeocoderStatus.OK?(D.store(a,{results:s,status:r}),n.latLng=s[0].geometry.location,n.results=s,n.status=r,o.apply(t,[n])):r===google.maps.GeocoderStatus.OVER_QUERY_LIMIT&&i<E.queryLimit.attempt?setTimeout(function(){S.apply(l,[t,o,e,n,i+1])},E.queryLimit.delay+Math.floor(Math.random()*E.queryLimit.random)):(M("geocode failed",r,a),n.latLng=n.results=!1,n.status=r,o.apply(t,[n]))}))):(n.latLng=B(n.todo,!1,!0),o.apply(t,[n]))}function j(o,e,n,i){function s(){do r++;while(r<o.length&&!("address"in o[r]));return r>=o.length?void n.apply(e,[i]):void S(a,function(e){delete e.todo,t.extend(o[r],e),s.apply(a,[])},!0,{todo:o[r]})}var a=this,r=-1;s()}function O(t,o,e){var n=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){n||(n=!0,e.latLng=new google.maps.LatLng(i.coords.latitude,i.coords.longitude),o.apply(t,[e]))},function(){n||(n=!0,e.latLng=!1,o.apply(t,[e]))},e.opts.getCurrentPosition):(e.latLng=!1,o.apply(t,[e]))}function C(e){function l(){!S&&(S=O.get())&&S.run()}function c(){S=null,O.ack(),l.call(j)}function p(o){if(o.todo.callback){var n=Array.prototype.slice.call(arguments,1);"function"==typeof o.todo.callback?o.todo.callback.apply(e,n):t.isArray(o.todo.callback)&&"function"==typeof o.todo.callback[1]&&o.todo.callback[1].apply(o.todo.callback[0],n)}}function g(t,o,n){n&&s(e,t,o,n),p(t,o),S.ack(o)}function m(o,n){if(n=n||{},T)n.todo&&n.todo.options&&(n.todo.options.center&&(n.todo.options.center=B(n.todo.options.center)),T.setOptions(n.todo.options));else{var i=n.opts||t.extend(!0,{},E.map,n.todo&&n.todo.options?n.todo.options:{});i.center=o||B(i.center),T=new E.classes.Map(e.get(0),i)}}function x(o,n,i){var a=[],r="values"in o.todo;return r||(o.todo.values=[{options:o.opts}]),o.todo.values.length?(m(),t.each(o.todo.values,function(r,l){var c,p,d,g,f=u(o,l);if(f.options[i])if(f.options[i][0][0]&&t.isArray(f.options[i][0][0]))for(p=0;p<f.options[i].length;p++)for(d=0;d<f.options[i][p].length;d++)f.options[i][p][d]=B(f.options[i][p][d]);else for(p=0;p<f.options[i].length;p++)f.options[i][p]=B(f.options[i][p]);f.options.map=T,g=new google.maps[n](f.options),a.push(g),c=C.add({todo:f},n.toLowerCase(),g),s(e,{todo:f},g,c)}),void g(o,r?a:a[0])):void g(o,!1)}function I(n){var i,a,r=new f(e,T,n),l={},u={},c=[],p=/^[0-9]+$/;for(a in n)p.test(a)?(c.push(1*a),u[a]=n[a],u[a].width=u[a].width||0,u[a].height=u[a].height||0):l[a]=n[a];return c.sort(function(t,o){return t>o}),i=l.calculator?function(o){var n=[];return t.each(o,function(t,o){n.push(r.value(o))}),l.calculator.apply(e,[n])}:function(t){return t.length},r.error(function(){M.apply(j,arguments)}),r.display(function(a){var p,d,g,f,h,v=i(a.indexes);if(n.force||v>1)for(p=0;p<c.length;p++)c[p]<=v&&(d=u[c[p]]);d?(h=d.offset||[-d.width/2,-d.height/2],g=t.extend({},l),g.options=t.extend({pane:"overlayLayer",content:d.content?d.content.replace("CLUSTER_COUNT",v):"",offset:{x:("x"in h?h.x:h[0])||0,y:("y"in h?h.y:h[1])||0}},l.options||{}),f=j.overlay({todo:g,opts:g.options,latLng:B(a)},!0),g.options.pane="floatShadow",g.options.content=t(document.createElement("div")).width(d.width+"px").height(d.height+"px").css({cursor:"pointer"}),shadow=j.overlay({todo:g,opts:g.options,latLng:B(a)},!0),l.data={latLng:B(a),markers:[]},t.each(a.indexes,function(t,o){l.data.markers.push(r.value(o)),r.markerIsSet(o)&&r.marker(o).setMap(null)}),s(e,{todo:l},shadow,o,{main:f,shadow:shadow}),r.store(a,f,shadow)):t.each(a.indexes,function(t,o){r.marker(o).setMap(T)})}),r}var S,j=this,O=new a,C=new v,T=null;this._plan=function(t){for(var o=0;o<t.length;o++)O.add(new r(j,c,t[o]));l()},this.map=function(t){m(t.latLng,t),s(e,t,T),g(t,T)},this.destroy=function(t){C.clear(),e.empty(),T&&(T=null),g(t,!0)},this.infowindow=function(n){var i=[],a="values"in n.todo;a||(n.latLng&&(n.opts.position=n.latLng),n.todo.values=[{options:n.opts}]),t.each(n.todo.values,function(t,r){var l,c,p=u(n,r);p.options.position=B(p.options.position?p.options.position:r.latLng),T||m(p.options.position),c=new E.classes.InfoWindow(p.options),c&&(p.open===o||p.open)&&(a?c.open(T,p.anchor?p.anchor:o):c.open(T,p.anchor?p.anchor:n.latLng?o:n.session.marker?n.session.marker:o)),i.push(c),l=C.add({todo:p},"infowindow",c),s(e,{todo:p},c,l)}),g(n,a?i:i[0])},this.circle=function(o){var n=[],i="values"in o.todo;return i||(o.opts.center=o.latLng||B(o.opts.center),o.todo.values=[{options:o.opts}]),o.todo.values.length?(t.each(o.todo.values,function(t,i){var a,r,l=u(o,i);l.options.center=B(l.options.center?l.options.center:i),T||m(l.options.center),l.options.map=T,r=new E.classes.Circle(l.options),n.push(r),a=C.add({todo:l},"circle",r),s(e,{todo:l},r,a)}),void g(o,i?n:n[0])):void g(o,!1)},this.overlay=function(o,n){var i=[],a="values"in o.todo;return a||(o.todo.values=[{latLng:o.latLng,options:o.opts}]),o.todo.values.length?(d.__initialised||(d.prototype=new E.classes.OverlayView,d.__initialised=!0),t.each(o.todo.values,function(a,r){var l,c,p=u(o,r),g=t(document.createElement("div")).css({border:"none",borderWidth:"0px",position:"absolute"});g.append(p.options.content),c=new d(T,p.options,B(p)||B(r),g),i.push(c),g=null,n||(l=C.add(o,"overlay",c),s(e,{todo:p},c,l))}),n?i[0]:void g(o,a?i:i[0])):void g(o,!1)},this.getaddress=function(t){p(t,t.results,t.status),S.ack()},this.getlatlng=function(t){p(t,t.results,t.status),S.ack()},this.getmaxzoom=function(t){L().getMaxZoomAtLatLng(t.latLng,function(o){p(t,o.status===google.maps.MaxZoomStatus.OK?o.zoom:!1,status),S.ack()})},this.getelevation=function(t){var o,e=[],n=function(o,e){p(t,e===google.maps.ElevationStatus.OK?o:!1,e),S.ack()};if(t.latLng)e.push(t.latLng);else for(e=k(t.todo.locations||[]),o=0;o<e.length;o++)e[o]=B(e[o]);if(e.length)w().getElevationForLocations({locations:e},n);else{if(t.todo.path&&t.todo.path.length)for(o=0;o<t.todo.path.length;o++)e.push(B(t.todo.path[o]));e.length?w().getElevationAlongPath({path:e,samples:t.todo.samples},n):S.ack()}},this.defaults=function(o){t.each(o.todo,function(o,e){"object"==typeof E[o]?E[o]=t.extend({},E[o],e):E[o]=e}),S.ack(!0)},this.rectangle=function(o){var n=[],i="values"in o.todo;return i||(o.todo.values=[{options:o.opts}]),o.todo.values.length?(t.each(o.todo.values,function(t,i){var a,r,l=u(o,i);l.options.bounds=P(l.options.bounds?l.options.bounds:i),T||m(l.options.bounds.getCenter()),l.options.map=T,r=new E.classes.Rectangle(l.options),n.push(r),a=C.add({todo:l},"rectangle",r),s(e,{todo:l},r,a)}),void g(o,i?n:n[0])):void g(o,!1)},this.polyline=function(t){x(t,"Polyline","path")},this.polygon=function(t){x(t,"Polygon","paths")},this.trafficlayer=function(t){m();var o=C.get("trafficlayer");o||(o=new E.classes.TrafficLayer,o.setMap(T),C.add(t,"trafficlayer",o)),g(t,o)},this.bicyclinglayer=function(t){m();var o=C.get("bicyclinglayer");o||(o=new E.classes.BicyclingLayer,o.setMap(T),C.add(t,"bicyclinglayer",o)),g(t,o)},this.groundoverlay=function(t){t.opts.bounds=P(t.opts.bounds),t.opts.bounds&&m(t.opts.bounds.getCenter());var o,e=new E.classes.GroundOverlay(t.opts.url,t.opts.bounds,t.opts.opts);e.setMap(T),o=C.add(t,"groundoverlay",e),g(t,e,o)},this.streetviewpanorama=function(o){o.opts.opts||(o.opts.opts={}),o.latLng?o.opts.opts.position=o.latLng:o.opts.opts.position&&(o.opts.opts.position=B(o.opts.opts.position)),o.todo.divId?o.opts.container=document.getElementById(o.todo.divId):o.opts.container&&(o.opts.container=t(o.opts.container).get(0));var e,n=new E.classes.StreetViewPanorama(o.opts.container,o.opts.opts);n&&T.setStreetView(n),e=C.add(o,"streetviewpanorama",n),g(o,n,e)},this.kmllayer=function(o){var n=[],a="values"in o.todo;return a||(o.todo.values=[{options:o.opts}]),o.todo.values.length?(t.each(o.todo.values,function(t,a){var r,l,c,p=u(o,a);T||m(),c=p.options,p.options.opts&&(c=p.options.opts,p.options.url&&(c.url=p.options.url)),c.map=T,l=i("3.10")?new E.classes.KmlLayer(c):new E.classes.KmlLayer(c.url,c),n.push(l),r=C.add({todo:p},"kmllayer",l),s(e,{todo:p},l,r)}),void g(o,a?n:n[0])):void g(o,!1)},this.panel=function(n){m();var i,s,a=0,r=0,l=t(document.createElement("div"));l.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),n.opts.content&&(s=t(n.opts.content),l.append(s),e.first().prepend(l),n.opts.left!==o?a=n.opts.left:n.opts.right!==o?a=e.width()-s.width()-n.opts.right:n.opts.center&&(a=(e.width()-s.width())/2),n.opts.top!==o?r=n.opts.top:n.opts.bottom!==o?r=e.height()-s.height()-n.opts.bottom:n.opts.middle&&(r=(e.height()-s.height())/2),l.css({top:r,left:a,visibility:"visible"})),i=C.add(n,"panel",l),g(n,l,i),l=null},this.marker=function(o){var i="values"in o.todo,a=!T;if(i||(o.opts.position=o.latLng||B(o.opts.position),o.todo.values=[{options:o.opts}]),!o.todo.values.length)return void g(o,!1);if(a&&m(),o.todo.cluster&&!T.getBounds())return void google.maps.event.addListenerOnce(T,"bounds_changed",function(){j.marker.apply(j,[o])});if(o.todo.cluster){var r,l;o.todo.cluster instanceof h?(r=o.todo.cluster,l=C.getById(r.id(),!0)):(l=I(o.todo.cluster),r=new h(n(o.todo.id,!0),l),C.add(o,"clusterer",r,l)),l.beginUpdate(),t.each(o.todo.values,function(t,e){var n=u(o,e);n.options.position=B(n.options.position?n.options.position:e),n.options.map=T,a&&(T.setCenter(n.options.position),a=!1),l.add(n,e)}),l.endUpdate(),g(o,r)}else{var c=[];t.each(o.todo.values,function(t,n){var i,r,l=u(o,n);l.options.position=B(l.options.position?l.options.position:n),l.options.map=T,a&&(T.setCenter(l.options.position),a=!1),r=new E.classes.Marker(l.options),c.push(r),i=C.add({todo:l},"marker",r),s(e,{todo:l},r,i)}),g(o,i?c:c[0])}},this.getroute=function(t){t.opts.origin=B(t.opts.origin,!0),t.opts.destination=B(t.opts.destination,!0),y().route(t.opts,function(o,e){p(t,e==google.maps.DirectionsStatus.OK?o:!1,e),S.ack()})},this.directionsrenderer=function(o){o.opts.map=T;var e,n=new google.maps.DirectionsRenderer(o.opts);o.todo.divId?n.setPanel(document.getElementById(o.todo.divId)):o.todo.container&&n.setPanel(t(o.todo.container).get(0)),e=C.add(o,"directionsrenderer",n),g(o,n,e)},this.getgeoloc=function(t){g(t,t.latLng)},this.styledmaptype=function(t){m();var o=new E.classes.StyledMapType(t.todo.styles,t.opts);T.mapTypes.set(t.todo.id,o),g(t,o)},this.imagemaptype=function(t){m();var o=new E.classes.ImageMapType(t.opts);T.mapTypes.set(t.todo.id,o),g(t,o)},this.autofit=function(o){var e=new google.maps.LatLngBounds;t.each(C.all(),function(t,o){o.getPosition?e.extend(o.getPosition()):o.getBounds?(e.extend(o.getBounds().getNorthEast()),e.extend(o.getBounds().getSouthWest())):o.getPaths?o.getPaths().forEach(function(t){t.forEach(function(t){e.extend(t)})}):o.getPath?o.getPath().forEach(function(t){e.extend(t)}):o.getCenter?e.extend(o.getCenter()):o instanceof h&&(o=C.getById(o.id(),!0),o&&o.autofit(e))}),e.isEmpty()||T.getBounds()&&T.getBounds().equals(e)||("maxZoom"in o.todo&&google.maps.event.addListenerOnce(T,"bounds_changed",function(){this.getZoom()>o.todo.maxZoom&&this.setZoom(o.todo.maxZoom)}),T.fitBounds(e)),g(o,!0)},this.clear=function(o){if("string"==typeof o.todo){if(C.clearById(o.todo)||C.objClearById(o.todo))return void g(o,!0);o.todo={name:o.todo}}o.todo.id?t.each(k(o.todo.id),function(t,o){C.clearById(o)||C.objClearById(o)}):(C.clear(k(o.todo.name),o.todo.last,o.todo.first,o.todo.tag),C.objClear(k(o.todo.name),o.todo.last,o.todo.first,o.todo.tag)),g(o,!0)},this.exec=function(o){var n=this;t.each(k(o.todo.func),function(i,s){t.each(n.get(o.todo,!0,o.todo.hasOwnProperty("full")?o.todo.full:!0),function(t,o){s.call(e,o)})}),g(o,!0)},this.get=function(e,n,i){var s,a,r=n?e:e.todo;return n||(i=r.full),"string"==typeof r?(a=C.getById(r,!1,i)||C.objGetById(r),a===!1&&(s=r,r={})):s=r.name,"map"===s&&(a=T),a||(a=[],r.id?(t.each(k(r.id),function(t,o){a.push(C.getById(o,!1,i)||C.objGetById(o))}),t.isArray(r.id)||(a=a[0])):(t.each(s?k(s):[o],function(o,e){var n;r.first?(n=C.get(e,!1,r.tag,i),n&&a.push(n)):r.all?t.each(C.all(e,r.tag,i),function(t,o){a.push(o)}):(n=C.get(e,!0,r.tag,i),n&&a.push(n))}),r.all||t.isArray(s)||(a=a[0]))),a=t.isArray(a)||!r.all?a:[a],n?a:void g(e,a)},this.getdistance=function(t){var o;for(t.opts.origins=k(t.opts.origins),o=0;o<t.opts.origins.length;o++)t.opts.origins[o]=B(t.opts.origins[o],!0);for(t.opts.destinations=k(t.opts.destinations),o=0;o<t.opts.destinations.length;o++)t.opts.destinations[o]=B(t.opts.destinations[o],!0);b().getDistanceMatrix(t.opts,function(o,e){p(t,e===google.maps.DistanceMatrixStatus.OK?o:!1,e),S.ack()})},this.trigger=function(o){if("string"==typeof o.todo)google.maps.event.trigger(T,o.todo);else{var e=[T,o.todo.eventName];o.todo.var_args&&t.each(o.todo.var_args,function(t,o){e.push(o)}),google.maps.event.trigger.apply(google.maps.event,e)}p(o),S.ack()}}function T(t){var o;if(!t.hasOwnProperty("get"))return!1;for(o in t)if("get"!==o)return!1;return!t.get.hasOwnProperty("callback")}var E,A=0,_={},D=new p;t.fn.gmap3=function(){var o,n=[],i=!0,s=[];for(e(),o=0;o<arguments.length;o++)arguments[o]&&n.push(arguments[o]);return n.length||n.push("map"),t.each(this,function(){var o=t(this),e=o.data("gmap3");i=!1,e||(e=new C(o),o.data("gmap3",e)),1!==n.length||"get"!==n[0]&&!T(n[0])?e._plan(n):"get"===n[0]?s.push(e.get("map",!0)):s.push(e.get(n[0].get,!0,n[0].get.full))}),s.length?1===s.length?s[0]:s:this}}(jQuery);
