/**
 * Created by Administrator on 2016/12/13 0013.
 */
var iaro=$(".i-aro")
var lilist=$(".i-list")

iaro.on("click",function(){
   var self=$(this);
   lilist.toggle()
	});
$(".i-li").on("click",function(){
	var self=$(this)
	var tt=self.text()
	$(".i-txt1").text(tt)
	$(".i-txt1" ).css("color","#000")
	})
$(".type-li").on("click",function(){
	var self=$(this)
	$(".l" ).removeClass("img-p")
	self.find(".l" ).addClass("img-p")
})
var bbt=$(".btn-bottom");
bbt.on("tap",function(){
	$(".btn-art").css("display","none")
	$(".btn-bg").css("display","none")
})

$(".boot-btn").on("tap",function(){
	$(".btn-bg").fadeIn(300)
	$(".btn-art").fadeIn(300)
})

$(".log-more").on("tap",function(){
	console.log("gggggggg")
	$(this ).find(".jj" ).toggleClass("log-img")
})

$(".nav-l").on("tap",function(){
	$(".btn-bg").fadeIn(300)
	$(".rele-out").fadeIn(300)
})

$(".pre-resours").on("tap",function(){
	console.log(66)
	location.href = "./release.html"
})

$(".b-l").on("tap",function(){
	$(".rele-out" ).fadeOut(300)
	$(".btn-bg" ).fadeOut(300)
	$(".dem-bg").fadeOut(300)
	$(".dem-out").fadeOut(300)
})
$(".b-r").on("tap",function(){
	console.log(668)
	location.href = "./release-1.html"
});
$(".re-box-l").on("tap",function(){
	console.log(66)
	location.href = "./release.html"
})
$(".re-box-r").on("tap",function(){
	console.log(66)
	location.href = "./dem-relse.html"
})
$(".can").on("tap",function(){
	console.log(66)
	$(".re-bg" ).hide()
	$(".re-box" ).hide()
	location.href = "../home/home.html"
})

$(".h-left").on("tap",function(){
	$(".dem-bg").fadeIn(300)
	$(".dem-out").fadeIn(300)

})
$(".h-right").on("tap",function(){
	location.href = "./dem-com.html"
})
$(".en-bot").on("tap",function(){
	location.href = "./release.html"
})
$(".en-bot1").on("tap",function(){
	location.href = "./release-1.html"
})
$(".head-add").on("tap",function(){
	location.href = "./new-resours.html"
})
$(".sec-submit").on("tap",function(){
	location.href = "./submit-com.html"
})
$(".head-search").on("tap",function(){
	location.href = "./release-search.html"
})
$(".nav-text").on("tap",function(){
	location.href = "./release.html"
})
