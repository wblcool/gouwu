// JavaScript Document
$(function(){
	$('.address_left .dress').click(function(){
		var $ull=$('.address_left ul')
		 $ull.toggle()
		})
		var $ula=$('.address .address_left ul a')
		 $ula.click(function(e){
			 $('.address_left .dress').html($(e.target).html())
			 $('.address_left ul').hide()
		 })//地址栏的显示与选择
		 $('.lastdl dd>a:eq(0)').click(function(){
			 $('.ul01').toggle() 
			 })
			 $('.lastdl dd .ul01 a').click(function(e){
				  $('.lastdl dd>a:eq(0)').html($(e.target).html())
                   $('.ul01').hide() 
				 })//CPU核心数
				  $('.lastdl dd>a:eq(1)').click(function(e){
			 $('.ul02').toggle() 
			 })
			 $('.lastdl dd .ul02 a').click(function(e){
				  $('.lastdl dd>a:eq(1)').html($(e.target).html())
                   $('.ul02').hide() 
				 })//主摄像头核心数
				 $('.normoldl span a').click(function(e){
					 var $sho= $(e.target).parent().prev().children('ul');
					$sho.toggle()
					 })
	$('.produces').mouseenter(function(){
		$(this).css({"backgroundColor":"#DBDBB0","opacity":"0.8"});
		$(this).find('a').css("color","red")
		})
		$('.produces').mouseleave(function(){
		$(this).css({"backgroundColor":"white","opacity":"1"});
			$(this).find('a').css("color","#A5A5C2")
		})
		$('.shopImg').mouseenter(function(){
		$(this).css("opacity","0.5")
		})
		$('.shopImg').mouseleave(function(){
		$(this).css("opacity","1")
		})
	})
	
