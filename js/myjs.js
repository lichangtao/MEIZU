
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
		
		$("#hid").stop(true).slideDown().css("background","#fff");  //����ƶ�����Ӧ���ӵ���
		$(".nav").css("background","#fff"); //���css���ԣ��﷨��$("ѡ����").css("����","����ֵ");
		$(".li_a").css("color","#000");
		$(this).find(".li_a").css("color","#31a5e7");
		$(".login").css("color","#000");
		$(".logo img").attr("src","images/logo-b.png");
	},function(){
		$("#hid").stop(true).slideUp(function(){
			$(".nav").css("background",""); //�Ƴ�css���ԣ��﷨��$("ѡ����").css("����","��ֵ");
			$(".li_a").css("color","");
			$(".login").css("color","");
			$(".logo img").attr("src","images/logo.png");
			$(this).css("background","");
		});  //����뿪����Ӧ��������
		
	});
	
	//��Ʒ�����Ԥ��ͼЧ��
	$("#hid li").hover(function(){
		$(this).stop(true).animate({opacity:"1"},100).siblings().stop(true).animate({opacity:"0.5"},100); //����ƶ�li��ʱ�����һ���������������li������li͸����Ϊ0.5
	},function(){
		$("#hid li").stop(true).animate({opacity:"1"},100); //����뿪ʱ����li͸���ȱ�Ϊ1
	});


	//΢�Ŷ�ά����ʾ����

	//д��һ��ԭ��js
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

	//д����������jq
	
	$("#wx").hover(function(){
		$("#wx_hid").show();
	},function(){
		$("#wx_hid").hide();
	});
	

	//ѡ�����������������ɫ
	
	$("#lang_hid li").hover(function(){
		$(this).css("background","#00a7ea");
	},function(){
		$(this).css("background","");
	});

	//��������ʾ����
	$("#lang").hover(function(){
		$("#lang_hid").show();
	},function(){
		$("#lang_hid").hide();
	});