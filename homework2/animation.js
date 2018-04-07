//variable declaration

var start_control = document.getElementById("start");
var canel = document.getElementById("canal");
var ship = document.getElementById("ship");
var start_button = document.getElementById("start");
var canal_money = document.getElementById("canal_money");
var start_countdown = document.getElementById("start_countdown");
var fly_coin = document.getElementById("fly_coin");
var click_shining = document.getElementById("click_shining");
var coin_hundred = document.getElementById("coin_hundred");
var coin_ten = document.getElementById("coin_ten");
var coin_one = document.getElementById("coin_one");
var tilt = document.getElementById("tilt");
var countdown_ten = document.getElementById("countdown_ten");
var countdown_one = document.getElementById("countdown_one");
var sec = document.getElementById("sec");
var word_coins = document.getElementById("word_coins");
var noodle_picture = document.getElementById("noodle_picture");
var noodle_intro = document.getElementById("noodle_intro");
var sushi_picture = document.getElementById("sushi_picture");
var sushi_intro = document.getElementById("sushi_intro");
var drop_coin1 = document.getElementById("drop_coin1");
var drop_coin2 = document.getElementById("drop_coin2");
var drop_coin3 = document.getElementById("drop_coin3");
var drop_coin4 = document.getElementById("drop_coin4");
var drop_coin5 = document.getElementById("drop_coin5");




var click_time = 0;
var countdown_time = 0;


//hide something that does not need at first

canal_money.style.display = "none";
start_countdown.style.display = "none";
fly_coin.style.display = "none";
click_shining.style.display = "none";
coin_hundred.style.display = "none";
coin_ten.style.display = "none";
coin_one.style.display = "none";
tilt.style.display = "none";
countdown_ten.style.display = "none";
countdown_one.style.display = "none";
sec.style.display = "none";
word_coins.style.display = "none";
noodle_picture.style.display = "none";
noodle_intro.style.display = "none";
sushi_picture.style.display = "none";
sushi_intro.style.display = "none";
drop_coin1.style.display = "none";
drop_coin2.style.display = "none";
drop_coin3.style.display = "none";
drop_coin4.style.display = "none";
drop_coin5.style.display = "none";




function start(){
	//start disappear

	$(start_button).fadeOut(100);
	
	//ship disappear
	$(ship).animate({
		opacity:'0',
		top:'25%',
		left:'55%',
		height:'10%',
	},2000);
	
	
	//3 2 1 start!!
	start_countdown.style.display = "block";
	start_countdown.style.opacity = "0";
	$(start_countdown).animate({
		opacity:'1',
		top:'40%',
		left:'65%',
		height:'5%',
	},1000);
	
	setTimeout(function(){
		start_countdown.src = "2.png";
		start_countdown.style.opacity = "0";
		start_countdown.style.left = "60%";
		start_countdown.style.top = "35%";
		start_countdown.style.height = "15%";
		$(start_countdown).animate({
			opacity:'1',
			top:'40%',
			left:'65%',
			height:'5%',
		},1000);
	},1000);
	
	setTimeout(function(){
		start_countdown.src = "1.png";
		start_countdown.style.opacity = "0";
		start_countdown.style.left = "60%";
		start_countdown.style.top = "35%";
		start_countdown.style.height = "15%";
		$(start_countdown).animate({
			opacity:'1',
			top:'40%',
			left:'65%',
			height:'5%',
		},1000);
	},2000);
	
	setTimeout(function(){
		start_countdown.style.display = "none";
	},3000);
	
	
	
	
	
	//click shining , countdown & score record
	

	
	setTimeout(function(){
		coin_hundred.style.display = "block";
		coin_ten.style.display = "block";
		coin_one.style.display = "block";
		tilt.style.display = "block";
		countdown_ten.style.display = "block";
		countdown_one.style.display = "block";
		sec.style.display = "block";
		canal.onclick = function(){
			click_time++;
			fly_coin.style.top = '39%';
			fly_coin.style.opacity = '0.7';
			fly_coin.style.display = "block";
			print_coin(click_time);
			$(fly_coin).animate({
				top:'25%',
				opacity:'0',
			},100);

		}
		
		setInterval(function(){
			
			if(countdown_time <= 30000){
				countdown_time+=10;
				print_time(30 - Math.floor(countdown_time/1000));
			
				if( ((countdown_time/250)%2) == 1){
					click_shining.style.display = "block";
				}
				else if( ((countdown_time/250)%2) == 0 ){
					click_shining.style.display = "none";
				}
			}
			else{
				click_shining.style.display = "none";
				tilt.style.display = "none";
				countdown_ten.style.display = "none";
				countdown_one.style.display = "none";
				sec.style.display = "none";
				canal.style.display = "none";
				fly_coin.style.display = "none";
				
				word_coins.style.display = "block";
				noodle_picture.style.display = "block";
				noodle_intro.style.display = "block";
				sushi_picture.style.display = "block";
				sushi_intro.style.display = "block";
				drop_coin1.style.display = "block";
				drop_coin2.style.display = "block";
				drop_coin3.style.display = "block";
				drop_coin4.style.display = "block";
				drop_coin5.style.display = "block";
				
				drop_coin1.style.opacity = "0";
				drop_coin2.style.opacity = "0";
				drop_coin3.style.opacity = "0";
				drop_coin4.style.opacity = "0";
				drop_coin5.style.opacity = "0";
				
				coin_hundred.style.top = "18%";
				coin_hundred.style.left = "73%";
				coin_hundred.style.height = "7%";
				coin_ten.style.top = "18%";
				coin_ten.style.left = "75%";
				coin_ten.style.height = "7%";
				coin_one.style.top = "18%";
				coin_one.style.left = "77%";
				coin_one.style.height = "7%";
				
				
				setInterval(function(){
					drop_coin1.style.opacity = "1";
					drop_coin1.style.top = "0%";
					$(drop_coin1).animate({
						top:'100%',
						opacity:'0',
					},5000);
				},6000);
				
				setInterval(function(){
					drop_coin2.style.opacity = "1";
					drop_coin2.style.top = "0%";
					$(drop_coin2).animate({
						top:'100%',
						opacity:'0',
					},10000);
				},3000);
				
				setInterval(function(){
					drop_coin3.style.opacity = "1";
					drop_coin3.style.top = "0%";
					$(drop_coin3).animate({
						top:'100%',
						opacity:'0',
					},7000);
				},1000);
				
				setInterval(function(){
					drop_coin4.style.opacity = "1";
					drop_coin4.style.top = "0%";
					$(drop_coin4).animate({
						top:'100%',
						opacity:'0',
					},10000);
				},2000);
				
				setInterval(function(){
					drop_coin5.style.opacity = "1";
					drop_coin5.style.top = "0%";
					$(drop_coin5).animate({
						top:'100%',
						opacity:'0',
					},7000);
				},3000);
				
				
			}
			
		},10);
		
	},3000);
	
	
	
	
}


function print_coin(click_time){
	if((Math.floor(click_time/100)) == 0) coin_hundred.src = "0.png";
	else if(Math.floor(click_time/100) == 1) coin_hundred.src = "1.png";
	else if(Math.floor(click_time/100) == 2) coin_hundred.src = "2.png";
	else if(Math.floor(click_time/100) == 3) coin_hundred.src = "3.png";
	else if(Math.floor(click_time/100) == 4) coin_hundred.src = "4.png";
	else if(Math.floor(click_time/100) == 5) coin_hundred.src = "5.png";
	else if(Math.floor(click_time/100) == 6) coin_hundred.src = "6.png";
	else if(Math.floor(click_time/100) == 7) coin_hundred.src = "7.png";
	else if(Math.floor(click_time/100) == 8) coin_hundred.src = "8.png";
	else if(Math.floor(click_time/100) == 9) coin_hundred.src = "9.png";
	
	if((Math.floor(click_time/10))%10 == 0) coin_ten.src = "0.png";
	else if((Math.floor(click_time/10))%10 == 1) coin_ten.src = "1.png";
	else if((Math.floor(click_time/10))%10 == 2) coin_ten.src = "2.png";
	else if((Math.floor(click_time/10))%10 == 3) coin_ten.src = "3.png";
	else if((Math.floor(click_time/10))%10 == 4) coin_ten.src = "4.png";
	else if((Math.floor(click_time/10))%10 == 5) coin_ten.src = "5.png";
	else if((Math.floor(click_time/10))%10 == 6) coin_ten.src = "6.png";
	else if((Math.floor(click_time/10))%10 == 7) coin_ten.src = "7.png";
	else if((Math.floor(click_time/10))%10 == 8) coin_ten.src = "8.png";
	else if((Math.floor(click_time/10))%10 == 9) coin_ten.src = "9.png";
	
	if(click_time%10 == 0) coin_one.src = "0.png";
	else if(click_time%10 == 1) coin_one.src = "1.png";
	else if(click_time%10 == 2) coin_one.src = "2.png";
	else if(click_time%10 == 3) coin_one.src = "3.png";
	else if(click_time%10 == 4) coin_one.src = "4.png";
	else if(click_time%10 == 5) coin_one.src = "5.png";
	else if(click_time%10 == 6) coin_one.src = "6.png";
	else if(click_time%10 == 7) coin_one.src = "7.png";
	else if(click_time%10 == 8) coin_one.src = "8.png";
	else if(click_time%10 == 9) coin_one.src = "9.png";

}

function print_time(remain_time){
	

	if(remain_time%10 == 0) countdown_one.src = "0.png";
	else if(remain_time%10 == 1) countdown_one.src = "1.png";
	else if(remain_time%10 == 2) countdown_one.src = "2.png";
	else if(remain_time%10 == 3) countdown_one.src = "3.png";
	else if(remain_time%10 == 4) countdown_one.src = "4.png";
	else if(remain_time%10 == 5) countdown_one.src = "5.png";
	else if(remain_time%10 == 6) countdown_one.src = "6.png";
	else if(remain_time%10 == 7) countdown_one.src = "7.png";
	else if(remain_time%10 == 8) countdown_one.src = "8.png";
	else if(remain_time%10 == 9) countdown_one.src = "9.png";
	
	if(Math.floor(remain_time/10) == 0) countdown_ten.src = "0.png";
	else if(Math.floor(remain_time/10) == 1) countdown_ten.src = "1.png";
	else if(Math.floor(remain_time/10) == 2) countdown_ten.src = "2.png";
	else if(Math.floor(remain_time/10) == 3) countdown_ten.src = "3.png";
	else if(Math.floor(remain_time/10) == 4) countdown_ten.src = "4.png";
	else if(Math.floor(remain_time/10) == 5) countdown_ten.src = "5.png";
	else if(Math.floor(remain_time/10) == 6) countdown_ten.src = "6.png";
	else if(Math.floor(remain_time/10) == 7) countdown_ten.src = "7.png";
	else if(Math.floor(remain_time/10) == 8) countdown_ten.src = "8.png";
	else if(Math.floor(remain_time/10) == 9) countdown_ten.src = "9.png";

}

function cost_money(){
	
	if(click_time >= 25){
		click_time -= 25;
		print_coin(click_time);
		alert("So yummy~~");
	}
	else{
		alert("You don't have enough money!!");
	}
}

