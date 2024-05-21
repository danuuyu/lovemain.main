
let i = 0;
let text1 = "Доброй ночи, любимая! Сегодня у нас большая дата! Трудно поверить, что прошел уже целый год с тех пор, как мы начали этот удивительный путь вместе.";
let text2 = "Я собрал немного наших личных моментов вместе, много сюда не влезло. Надеюсь, тебе будет приятно и теплее от просмотра))"
let speed = 100;

function typeWriter(text, para){
	if(ok == 3){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
