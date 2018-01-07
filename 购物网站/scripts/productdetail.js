// JavaScript Document
$(function(){
	   $('.des li:eq(0)').click(function(){
			$('.des li:eq(0)').addClass('activeLi');
			$('.des li:eq(1)').removeClass('activeLi');
			$('.right_Item').show();
			$('.pro_des').hide();
	}).click()
	 $('.des li:eq(1)').click(function(){
			$('.des li:eq(1)').addClass('activeLi');
			$('.des li:eq(0)').removeClass('activeLi');
		$('.right_Item').hide();
			$('.pro_des').show();
	})
	$('.right_middleContent a').click(function(){
		$(this).addClass('act').siblings().removeClass('act')
		})
	$('.middle4 span:eq(0)').click(function(){
		var i=parseInt($('.middle4 i').text());
		i-=1;
		if(i<=1){
	        i=1;
			}
			$('.middle4 i').text(i)
		})
	  $('.middle4 span:eq(1)').click(function(){
	  var i=parseInt($('.middle4 i').text());
	  i+=1;
	  if(i>=10){
		  i=10;
		 alert('最多购买10件')
		  }
		  $('.middle4 i').text(i)
	  })
})