// JavaScript Document
$(document).ready(function(){
	$(".shopImg").mouseover(function(){
		$(this).css('opacity','0.5');
		$(this).addClass('shopIMG')
		})
			$(".shopImg").mouseout(function(){
		$(this).css('opacity','1');
		$(this).removeClass('shopIMG')
		})
	})
$(document).ready(function(){
	var n=0,timer=null ,Liheight=13;
	$('.shopScroll1 ul').clone().appendTo('.shopScroll1');
	$('.shopScroll2 ul').clone().appendTo('.shopScroll2');
	var $divu=$('.shopRecom .shopBorder div');
	var $lia=$('.shopRecom .shopBorder div ul li a');
	var divu=$divu[0];
	$.extend({'scrollUp':function(){
	      n+=1;
			divu.timer=setInterval('$.Move()',40)   
				}})		
	$.extend({'Move':function(){			
				if(n%Liheight==0){
						clearInterval(divu.timer);
						setTimeout('$.scrollUp()',2000);
						}else{
							n++;
							$('.shopRecom .shopBorder div').scrollTop(n);	
							if (n>=divu.scrollHeight/2){
					               n=1;
									$('.shopRecom .shopBorder div').scrollTop(1);	
									                                 }	
							}						
				}	
			})	
	setTimeout('$.scrollUp()',2000);	
	$.extend({'showimg':function(index){
		$('.banner_img').find('img').eq(index).stop(true.true).show().siblings().hide()
		}})//定义显示图片函数
		var index=0;
	$('.imgnum a').mouseover(function(){//给图片下方a元素绑定事件
		 index=$('.imgnum a').index(this);
		$.showimg(index)
		})
		.eq(0).mouseover()
		var Timer=null;
		$('.banner_img').hover(function(){
			if(Timer){
				clearInterval(Timer);
				}
			},function(){
				Timer=setInterval(function(){
					$.showimg(index);
					index++;
					if(index==3){
						index=0;
						}
					},2000)
				}).trigger('mouseleave')//模拟
	})