!function(){function n(n,t){for(var e in t)n[e]=t[e];return n}var t="novel-design-static@0.1.0/entries/collections.js",e="novel-design-static@0.1.0/entries/detail.js",i="novel-design-static@0.1.0/entries/index.js",o="seaport-bridge@^0.2.2",a="zepto@^1.1.3",d="fastclick@^1.0.2",s="novel-design-static@0.1.0/lib/common.js",c="spin.js@^2.0.1",r=[t,e,i],f={},m=f;define(e,[o,a,d,s],function(n){function t(n){function t(t){function e(n){var t=i(f.html());t.find(".name").text(n.name),t.find("img").attr("src",n.avatar),t.find(".comment").text(n.content),t.appendTo(m)}function d(t){p.find("img").addClass("like-animation"),setTimeout(function(){p.find("span").text("Liked"),p.find("img").removeClass("like-animation")},600);var e=t._id;e&&n.userDefaults.get("favs",function(t){var i=t||[];-1==i.indexOf(e)&&(i.push(e),n.userDefaults.set("favs",i))}),c(t)}function s(t){p.find("span").text("Like");var e=t._id;e&&n.userDefaults.get("favs",function(t){var i=t||[];-1!=i.indexOf(e)&&(i.splice(i.indexOf(e),1),n.userDefaults.set("favs",i))})}function c(t){n.http.post({domain:a.domain,path:"/api/design/"+t._id+"/fav",body:{}},function(){})}var r=i(".detail"),f=i(".comment-template"),m=i(".comments"),l=i(".comment-btn"),u=i(".dialog"),p=(u.find("textarea"),i(".like-btn")),v=i(".buy-btn");i(".loading").addClass("hide"),i(".title").text(t.title),i(".description").text(t.description).removeClass("hide"),t.detail.forEach(function(n){var t=new Image;t.src=n.pic,i(t).appendTo(r),t.onload=function(){this.style.opacity=1},n.txt&&i("<p></p>").text(n.txt).appendTo(r)}),t.comments&&t.comments.forEach(function(n){e(n)}),t.buyLink&&v.removeClass("hide").on("click",function(){n.url.open(t.buyLink)}),p.on("click",function(){"Liked"==p.find("span").text()?s(t):d(t)}),n.userDefaults.get("favs",function(n){var e=n||[];-1!=e.indexOf(t._id)&&p.find("span").text("Liked")}),l.on("click",function(){var i=a.prompt("输入评论");i&&n.http.post({domain:a.domain,path:"/api/design/"+t._id+"/comment",body:{content:i}},function(n){n&&e(n)})}),o(document.body)}n.param.get("data",t)}var e=n("seaport-bridge"),i=n("zepto"),o=n("fastclick"),a=n("../lib/common");e.connect(function(){},t)},{entries:r,map:n(m,{"../lib/common":s})}),define(s,[c],function(n,t){var e=n("spin.js");t.domain="223.4.15.141:8090",t.alert=function(n){var t=document.createElement("IFRAME");t.setAttribute("src","data:text/plain,"),document.documentElement.appendChild(t),window.frames[0].window.alert(n),t.parentNode.removeChild(t)},t.prompt=function(n){var t=document.createElement("IFRAME");t.setAttribute("src","data:text/plain,"),document.documentElement.appendChild(t);var e=window.frames[0].window.prompt(n);return t.parentNode.removeChild(t),e},t.spinner=new e({color:"#111111",lines:12,length:9,width:2}),window.onerror=function(n,t,e){alert(e+":"+n)}},{entries:r,map:m})}();