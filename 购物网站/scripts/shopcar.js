// JavaScript Document
$(function(){
	$('.dress').click(function(){
		$('.content_info  .selectDress').toggle()
		})
		$('.content_info  .selectDress a').click(function(e){
			$('.dress').html($(e.target).html());
			$('.content_info  .selectDress').hide()
			})	
})