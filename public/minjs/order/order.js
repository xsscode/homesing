$(".sec").on("swipeLeft",function(){$(this).animate({"margin-left":-66},300),$(".delete").animate({right:0},300)}),$(".sec").on("swipeRight",function(){$(this).animate({"margin-left":0},300),$(".delete").animate({right:-66},300)}),$(".b").on("tap",function(){location.href="./order-form.html",console.log(56)}),$(".call").find(".c-b").on("tap",function(){$(".call").hide(),$(".bg").hide()}),$(".ban-c1").find(".c-r").on("tap",function(){$(".call").show(),$(".bg").show()}),$(".sec-click").on("tap",function(o){"h3-box"!=o.target.className&&($(this).find(".h3-box-click").length?location.href="./order-moredone.html":location.href="./order-more.html")}),$(".nav-r").on("tap",function(){$(".bg").show(),$(".change").show()}),$(".change").find(".b-r").on("tap",function(){$(".change").hide(),$(".ensure").show()}),$(".h3-box").on("tap",function(){location.href="./order-form.html"}),$(".bot-li").eq(0).on("tap",function(){location.href="./order-datechange.html"}),$(".en-bot").on("tap",function(){location.href="./order-form.html",$(".bot-li").eq(0).off("tap")}),$(".pre").on("tap",function(){location.href="./order.html"}),$(".pre1").on("tap",function(){location.href="./order.html"}),$(".nav-l").on("tap",function(){location.href="./order-form.html"}),$(".bot-li").eq(1).on("tap",function(){location.href="./order-complete.html"});