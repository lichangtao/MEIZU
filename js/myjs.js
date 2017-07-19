
	var n = 0;
	var Time;

	$(".but ul li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var i = $(this).index();
		$(".pic").eq(i).fadeIn().siblings(".pic").fadeOut();

		n = i;
		clearInterval(Time);
		auto();
	});

	function auto(){
		Time = setInterval(function(){
			if(n>3)
				n=0;
			else
				n++;
			$(".but ul li").eq(n).addClass("active").siblings().removeClass("active");
			$(".pic").eq(n).fadeIn(1000).siblings(".pic").fadeOut(1000);
		},4000);
	};

	auto();

	$("#product").hover(function(){
		
		$("#hid").stop(true).slideDown().css("background","#fff");  //鼠标移动，对应盒子弹出
		$(".nav").css("background","#fff"); //添加css属性，语法：$("选择器").css("属性","属性值");
		$(".li_a").css("color","#000");
		$(this).find(".li_a").css("color","#31a5e7");
		$(".login").css("color","#000");
		$(".logo img").attr("src","images/logo-b.png");
	},function(){
		$("#hid").stop(true).slideUp(function(){
			$(".nav").css("background",""); //移除css属性，语法：$("选择器").css("属性","空值");
			$(".li_a").css("color","");
			$(".login").css("color","");
			$(".logo img").attr("src","images/logo.png");
			$(this).css("background","");
		});  //鼠标离开，对应盒子收起
		
	});
	
	//产品下面的预览图效果
	$("#hid li").hover(function(){
		$(this).stop(true).animate({opacity:"1"},100).siblings().stop(true).animate({opacity:"0.5"},100); //鼠标移动li的时候产生一个动画，除了这个li其他的li透明度为0.5
	},function(){
		$("#hid li").stop(true).animate({opacity:"1"},100); //鼠标离开时所有li透明度变为1
	});


	//微信二维码显示隐藏

	//写法一：原生js
	/*
	var wx = document.getElementById("wx");
	var hid = document.getElementById("wx_hid");
	wx.onmouseover = function(){
		hid.style.display = "block";
	};
	wx.onmouseout = function(){
		hid.style.display = "none";
	};
	*/

	//写法二：调用jq
	
	$("#wx").hover(function(){
		$("#wx_hid").show();
	},function(){
		$("#wx_hid").hide();
	});
	

	//选择语言项产生背景颜色
	
	$("#lang_hid li").hover(function(){
		$(this).css("background","#00a7ea");
	},function(){
		$(this).css("background","");
	});

	//语言项显示隐藏
	$("#lang").hover(function(){
		$("#lang_hid").show();
	},function(){
		$("#lang_hid").hide();
	});