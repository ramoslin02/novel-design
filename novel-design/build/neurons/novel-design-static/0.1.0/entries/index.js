!function(){function t(t,e){for(var n in e)t[n]=e[n];return t}var e="novel-design-static@0.1.0/entries/collections.js",n="novel-design-static@0.1.0/entries/detail.js",i="novel-design-static@0.1.0/entries/index.js",o="seaport-bridge@^0.2.2",a="zepto@^1.1.3",r="fastclick@^1.0.2",s="novel-design-static@0.1.0/lib/common.js",d="spin.js@^2.0.1",c=[e,n,i],l={},m=l;define(i,[o,a,r,s],function(t){function e(){p.spin(document.body),c(".spinner").css({position:"fixed"})}function n(){p.stop()}function i(){c(".error").removeClass("hide")}function o(){c(".error").addClass("hide")}function a(){c(".category-list").removeClass("spread")}function r(){c(".category-list").toggleClass("spread")}function s(t){function r(){e(),t.http.get({domain:m.domain,path:"/api/category"},function(t){return t?(s("最新"),void t.forEach(function(t){s(t)})):(n(),void i())})}function s(e){var n=c(h.html());n.text(e),n.appendTo(g),l(n[0]),n.on("click",function(){c(".category").removeClass("active"),c(this).addClass("active"),C=c(this).text().trim(),t.data.send({title:c(this).text().trim()}),"最新"==C&&(C=""),y=1,d(),a()})}function d(){u||(o(),e(),u=!0,t.http.get({domain:m.domain,path:"/api/design",params:{page:y,category:C}},function(t){return n(),u=!1,t?0==t.length?void m.alert("没有更多咯"):(1==y&&(f.empty(),c(window).scrollTop(0)),t.forEach(function(t){p(t)}),w.removeClass("hide"),void y++):(m.alert("网络连接错误"),void i())}))}function p(e){var n=c(v.html());return n.find(".title").text(e.title),n.find(".description").text(e.description),n.find(".likes .txt").text(e.favs||0),n.on("click",function(){a(),t.data.send({segue:"detail",data:e})}),n.appendTo(f),l(n[0]),n.find(".thumb img")[0].onload=function(){this.style.opacity=1,n.find(".loading").addClass("hide"),setTimeout(function(){n.find(".likes").css("opacity",1)},1300)},n.find(".thumb img").attr("src",e.thumb),n}var u=(c(document).width(),!1),f=c(".design-list"),v=c(".design-template"),g=c(".category-list"),h=c(".category-template"),w=c(".more"),y=1,C="";w.on("click",function(){d()}),r(),d()}var d=t("seaport-bridge"),c=t("zepto"),l=t("fastclick"),m=t("../lib/common"),p=m.spinner;d.connect(function(){r()},s)},{entries:c,map:t(m,{"../lib/common":s})}),define(s,[d],function(t,e){var n=t("spin.js");e.domain="223.4.15.141:8090",e.alert=function(t){var e=document.createElement("IFRAME");e.setAttribute("src","data:text/plain,"),document.documentElement.appendChild(e),window.frames[0].window.alert(t),e.parentNode.removeChild(e)},e.prompt=function(t){var e=document.createElement("IFRAME");e.setAttribute("src","data:text/plain,"),document.documentElement.appendChild(e);var n=window.frames[0].window.prompt(t);return e.parentNode.removeChild(e),n},e.spinner=new n({color:"#111111",lines:12,length:9,width:2}),window.onerror=function(t,e,n){alert(n+":"+t)}},{entries:c,map:m})}();