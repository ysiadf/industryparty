/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.skins.add("kama",function(){var a="cke_ui_color";return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},richcombo:{canGroup:!1},templates:{css:["templates.css"]},margins:[0,0,0,0],init:function(b){function g(b){var c=b.getById(a);return c||(c=b.getHead().append("style"),c.setAttribute("id",a),c.setAttribute("type","text/css")),c}function h(a,b,c){var d,e,f;for(var g=0;g<a.length;g++)if(CKEDITOR.env.webkit)for(e=0;e<b.length;e++){f=b[e][1];for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);a[g].$.sheet.addRule(b[e][0],f)}else{f=b;for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);CKEDITOR.env.ie?a[g].$.styleSheet.cssText+=f:a[g].$.innerHTML+=f}}b.config.width&&!isNaN(b.config.width)&&(b.config.width-=12);var c=[],d=/\$color/g,e="/* UI Color Support */.cke_skin_kama .cke_menuitem .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:active .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_label,.cke_skin_kama .cke_menuitem a:focus .cke_label,.cke_skin_kama .cke_menuitem a:active .cke_label{\tbackground-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_label{\tbackground-color: transparent !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuseparator{\tbackground-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover,.cke_skin_kama .cke_menuitem a:focus,.cke_skin_kama .cke_menuitem a:active{\tbackground-color: $color !important;}";if(CKEDITOR.env.webkit){e=e.split("}").slice(0,-1);for(var f=0;f<e.length;f++)e[f]=e[f].split("{")}var i=/\$color/g;CKEDITOR.tools.extend(b,{uiColor:null,getUiColor:function(){return this.uiColor},setUiColor:function(a){var d,f=g(CKEDITOR.document),j="."+b.id,k=[j+" .cke_wrapper",j+"_dialog .cke_dialog_contents",j+"_dialog a.cke_dialog_tab",j+"_dialog .cke_dialog_footer"].join(","),l="background-color: $color !important;";return CKEDITOR.env.webkit?d=[[k,l]]:d=k+"{"+l+"}",(this.setUiColor=function(a){var g=[[i,a]];b.uiColor=a,h([f],d,g),h(c,e,g)})(a)}}),b.on("menuShow",function(a){var d=a.data[0],f=d.element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!f.getById("cke_ui_color")){var j=g(f);c.push(j);var k=b.getUiColor();k&&h([j],e,[[i,k]])}}),b.config.uiColor&&b.setUiColor(b.config.uiColor)}}}()),function(){function a(){CKEDITOR.dialog.on("resize",function(a){var b=a.data,c=b.width,d=b.height,e=b.dialog,f=e.parts.contents;if(b.skin!="kama")return;f.setStyles({width:c+"px",height:d+"px"})})}CKEDITOR.dialog?a():CKEDITOR.on("dialogPluginReady",a)}();