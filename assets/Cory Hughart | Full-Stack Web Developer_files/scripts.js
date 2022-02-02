function getNextIndex(e,t){var n=Math.floor(Math.random()*(e.length-1));return n==t&&(n+=1,n>=e.length&&(n=0)),n}function getPixelmanSrc(e,t,n){return e+"pixelman_"+t[n].src+".png"}function getPixelmanTitle(e,t){return e[t].name}!function(e){Modernizr.addTest("preserve3d",function(){var e=!1;if(Modernizr.testAllProps("transformStyle")){var t=document.getElementsByTagName("body")[0],n=document.createElement("p"),r={webkitTransformStyle:"-webkit-transform-style",MozTransformStyle:"-moz-transform-style",msTransformStyle:"-ms-transform-style",transformStyle:"transform-style"};t.insertBefore(n,null);for(var a in r)void 0!==n.style[a]&&(n.style[a]="preserve-3d");var o=window.getComputedStyle(n,null),l=o.getPropertyValue("-webkit-transform-style")||o.getPropertyValue("-moz-transform-style")||o.getPropertyValue("-ms-transform-style")||o.getPropertyValue("transform-style");"preserve-3d"==l&&(e=!0),document.body.removeChild(n)}return e});var t=e("#orbit-photo"),n=e("#photo");if(t&&n&&t.click(function(){n.toggleClass("flip")}),e.fn.waypoint){var r="current-menu-item",a=["home","web","games","about"],o=function(t){e("#site-nav ."+r).removeClass(r),e('#site-nav a[title="'+t+'"]').parent().addClass(r)},l=function(){var t=e(this.element).data("nav");o(t)};o(a[0]),e("#site-nav a").click(function(t){var n=e(this).attr("title");if(a.indexOf(n)>-1)if(t.preventDefault(),a[0]==n)e("html,body").animate({scrollTop:0},"slow");else{var r=e('[data-nav="'+n+'"]');e("html,body").animate({scrollTop:r.offset().top},"slow",function(){o(n)})}});for(var i=0;i<a.length;i++){var s=a[i];console.log("creating waypoint for "+s),e("[data-nav="+s+"]").waypoint({handler:l,offset:"50%"})}}if(e.fn.slick){var m=e(".gallery");e(window).load(function(){m.slick({dots:!0,infinite:!0,slide:"figure",slidesToShow:3,centerMode:!0,centerPadding:"0px",variableWidth:!0,prevArrow:'<button class="gallery-prev" data-role="none" type="button"><i class="fa fa-chevron-circle-left"></i></button>',nextArrow:'<button class="gallery-next" data-role="none" type="button"><i class="fa fa-chevron-circle-right"></i></button>'})})}e.fn.featherlightGallery&&e(".gallery a").featherlightGallery({previousIcon:'<i class="fa fa-chevron-circle-left"></i>',nextIcon:'<i class="fa fa-chevron-circle-right"></i>'}),e("#site-footer .to-top").click(function(){e("html,body").animate({scrollTop:0},"slow")})}(jQuery);var $pixelman=$("#pixelman"),$pixelmanImg=$("#pixelman img");if($pixelman&&$pixelmanImg){var pixelmanFolder="/wp-content/themes/boldlygo/img/pixelman/",pixelpeople=[{src:"chronotrigger",name:"Chrono Trigger"},{src:"ff7",name:"Final Fantasy VII"},{src:"gameboy",name:"Gameboy"},{src:"halflife",name:"Halflife"},{src:"halo",name:"Halo"},{src:"mario",name:"Super Mario Bros."},{src:"monkeyisland",name:"The Secret of Monkey Island"},{src:"pokemon",name:"Pokemon"},{src:"sonic",name:"Sonic the Hedgehog"},{src:"xenogears",name:"Xenogears"},{src:"zelda",name:"The Legend of Zelda"}],index=-1,nextIndex=getNextIndex(pixelpeople,index),nextImg=new Image;nextImg.src=getPixelmanSrc(pixelmanFolder,pixelpeople,nextIndex),$pixelman.click(function(){index=nextIndex,$pixelmanImg.attr("src",nextImg.src).attr("title",getPixelmanTitle(pixelpeople,index)),nextIndex=getNextIndex(pixelpeople,index),nextImg.src=getPixelmanSrc(pixelmanFolder,pixelpeople,nextIndex)})}