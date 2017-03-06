
	//nav
	$(".icon").click(function(){			
		$(".nav").toggle()
	})

	//backtop
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll>300) {
			$(".backtop").fadeIn(300);
		}else{
			$(".backtop").fadeOut(300);
		};
	})
	$(".backtop").click(function(){
		$("html,body").animate({"scrollTop":"0"},300)
	});

