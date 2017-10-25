/*
* @Author: hp
* @Date:   2017-04-15 13:45:00
* @Last Modified by:   hp
* @Last Modified time: 2017-04-22 13:51:48
*/

'use strict';

$(function(){
	var num=0;
	var timer=null;
	$('.screen1').removeClass('no');
	$('.gps li').click(function(event) {
		var index=$(this).index();	
		num=index;
		$(this).addClass('current');
		$(this).siblings().removeClass('current')
		$('.doc').animate({'top':-100*index+'%'}, 300)
		$('.doc>div').eq(num).removeClass('no').siblings().addClass('no');
	});
	// $('p').removeClass('fake');
	

	
	$(document).mousewheel(function(e,d){

		clearTimeout(timer)
		timer=setTimeout(function(){
			num=num-d;
			if(num>6){
				num=6;
			}
			if(num<0){
				num=0;
			}
			
			 $('.doc').stop().animate({'top':-100*num+'%'}, 300);
			 $('.gps li').eq(num).addClass('current').siblings().removeClass();
			$('.doc>div').eq(num).removeClass('no').siblings().addClass('no');
		},800)
   // $('p').removeClass('fake');
	
	})
	
	$('.music').click(function(event) {
		$(this).toggleClass('play');
		if($(this).hasClass('play')){
			$('audio').get(0).currentTime=0;
			$('audio').get(0).play()
		
		}else{
			$('audio').get(0).pause()
		}
	});



})

