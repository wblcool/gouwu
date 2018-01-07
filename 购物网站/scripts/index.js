// JavaScript Document
function starMove(obj,json,fn){
	 clearInterval(obj.timer)
	 var flag=true;
     obj.timer=setInterval(function(){
	for( var Attr in json){ 	
			 var cur=0;
			 var speed=0;
			 if(Attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj,Attr)*100)); 
				 }
				 else{
					cur=parseInt(getStyle(obj,Attr)); 
					 }
			 if(cur<json[Attr]){
				 speed=10;
				 }
				 else if(cur>json[Attr]){
					  speed=-10;
					 }
			 else{
				 speed=0;
				 }
			 if(cur!=json[Attr]){
				 flag=false;
			 }
				 if(Attr=='opacity'){
				 obj.style.opacity=(cur+speed)/100;
				 obj.style.filter="alpha(opacity:"+cur+speed+")";
					 }else{
				 obj.style[Attr]=cur+speed+'px'
							}
								if(flag){
				 clearInterval(obj.timer);
					 if(fn){
					   fn();
							 }
					 	   }
			 }

},30 )	
}

function getStyle(obj,Attr){
	if(obj.currentStyle){
		return obj.currentStyle[Attr]
	}
	else{
	return getComputedStyle(obj,false)[Attr]
	}
}
/*滚动*/
 var k=0;
 var banner=document.getElementsByClassName('banner')
       bannimg=banner[0]. getElementsByTagName('img')
       bannera=banner[0].getElementsByTagName('a');
  var imgsrc=["images/jpgs/baner0.jpg","images/jpgs/banner1.jpg","images/jpgs/banner2.jpg","images/jpgs/banner3.jpg"];	
function Gun(){ 
	k++;
	if(k==4){
		k=0;
		}
		for(j=0;j<bannera.length;j++){
		bannera[j].style.backgroundColor="white";
		}
bannera[k].style.backgroundColor="#FF7700";
bannimg[0].setAttribute('src',imgsrc[k])
 }
 function Move(){
	 clearInterval(bannimg[0].timer);
 bannimg[0].timer=setInterval('Gun()' ,2000)
}
window.onload=function(){
var showL=document.getElementsByClassName('showList');
   for(var i=0;i<showL.length;i++){
   showL[i].onmouseover=function(){
	   starMove(this,{opacity:50}) 
	   }
	    showL[i].onmouseout=function(){
	   starMove(this,{opacity:100}) 
	   }
   }
var showListBottom=document.getElementsByClassName('showListBottom');
  for(var i=0;i<showL.length;i++){
   showListBottom[i].onmouseover=function(){
	  this.style.border="1px solid #FF7201"
	   }
	   showListBottom[i].onmouseout=function(){
	  this.style.border="none"
	   }
    }
  bannera[0].style.backgroundColor="#FF7700";
for(var i=0;i<bannera.length;i++){
		bannera[i].onclick=function(num){	
		return function(){
			clearInterval(bannimg[0].timer);
			for(j=0;j<bannera.length;j++){
		bannera[j].style.backgroundColor="white";}this.style.backgroundColor="#FF7700";//改变a元素背景颜色
	    bannimg[0].setAttribute('src',imgsrc[num])
		  setTimeout('Move()',2000)//再次把i的值传递给move函数就完美了
		  }
	}(i)
}
Move()
var dlist=document.getElementsByTagName('dl');
var rigList=document.getElementsByClassName('rightshopList');
for(var i=0;i<dlist.length;i++){
	dlist[i].onmouseover=function(num){
		return function(){
		this.className="active";
		rigList[num].style.display="block";
		};
		}(i)
	dlist[i].onmouseout=function(num){
		return function(){
			this.className=""
          rigList[num].style.display="none";
		}
		}(i)
	}
	for(var i=0;i<rigList.length;i++){	
		 rigList[i].onmouseover=function(){
			 this.style.display="block";			 
			 }
			 	 rigList[i].onmouseout=function(){
			 this.style.display="none";			 
			 }
		}
}
