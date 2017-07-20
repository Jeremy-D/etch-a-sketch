$(document).ready(function() {
    //create grid
    for(var x = 0; x < 20; x++) {
        for(var y = 0; y < 20; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container'); 
        };
    };
    
    //drawing function

    function draw () {
    	$('.unit').mouseenter(function(){
			$(this).addClass('mouseenter');
	    });
	    $('.unit').mouseleave(function(){
	        $(this).addClass('mouseleave');
	    });
	}	

	draw();

     //clear grid, empties container div, then rebuilds grid
    document.getElementById('clear').onclick = function(){
        $('#container').empty();
        for(var x = 0; x < 20; x++) {
        for(var y = 0; y < 20; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container'); 
        }
    }
    //drawing function for clear button
 	var gridsquares = document.querySelectorAll('.unit');
  	draw();


    };

    //divpocalypse
    document.getElementById('divPocalypse').onclick = function(){
    	$('.unit').hover(function(){
    	$(this).hide({});
    	
    	$('.unit').mouseenter(function(){
		$(this).css('background-color','yellow');
		});
    	$('.unit').mouseleave(function(){
        $(this).css('background-color','#68ffd6');
    	});
    	});
    };
/*========================

vanilla js functions

========================*/

//select gridsquares
var gridsquares = document.querySelectorAll('.unit');

/*========================

erase

========================*/
//erase function
rainbowBackground = false;

function eraseFunction() {
	this.removeAttribute('style');
	this.classList.remove('mouseenter');
	this.classList.remove('mouseleave');
	this.classList.add('unit');
	if (rainbowBackground === true) {
		this.classList.add('rainbow-background')
	}
}

//add event listener to erase
var clickToErase = function clickToErase() {
	for (var i=0; i<gridsquares.length; i++) {
		gridsquares[i].onmouseleave = eraseFunction;
	}
}

//clickToErase();
//erase button functionality
var erase = document.querySelector('#erase');
erase.onclick = clickToErase;



/*========================

draw button

========================*/


//drawing function
function drawFunction () {
	this.removeAttribute('style');
	this.classList.remove('rainbow-background');
	this.classList.add('mouseleave');
	this.classList.add('draw');
}

//add event listener to draw
var clickToDraw = function clickToDraw() {
	for (var i=0; i<gridsquares.length; i++) {
		
		gridsquares[i].onmouseleave = drawFunction;
	}
}

clickToDraw();

//drawing button functionality
var drawFun = document.querySelector('#draw');
drawFun.onclick = clickToDraw;

/*========================

random color

========================*/
//random color funciton
function randomHsl () {
	var randomNum = Math.floor(Math.random()*300);
	var randomColor = "hsl("+randomNum+", 100%, 50%)";
	this.style.backgroundColor = randomColor;

}

//add event listener to randomcolor
function clickToRandomColor() {
	for (var i=0; i<gridsquares.length; i++) {
			if (rainbowBackground === false) {
			gridsquares[i].classList.add('rainbow-background');
			}
		gridsquares[i].onmouseleave = randomHsl;
	}
	rainbowBackground = true;
}

//random color button functionality
var rainbow = document.querySelector('#rainbow');
rainbow.onclick = clickToRandomColor;

// /*========================

// disco

// ========================*/
// function disco() {
// 	var randomNum = Math.floor(Math.random()*300);
// 	var randomColor = "hsl("+randomNum+", 100%, 50%)";
// 	//this.style.backgroundColor = randomColor;
// 	document.body.style.backgroundColor = randomColor;
//  }
// discoOn = true;

// // function setDisco() {
// // 	if(discoOn === true) {
// // 		setInterval(disco, 1000);
// // 		discoOn = false;
// // 	} else {
// // 		clearInterval(disco);
// // 		discoOn = true;
// // 	}
// // }

// function setDisco() {
// 	setInterval(disco, 1000);
// }

// function stopDisco(){
// 	clearInterval(disco);
// }


// //add event listener to disco
// function clickToDisco() {
// 		setDisco();
// 		discoOn = true;
// 	}

// function clickToStopDisco(){
// 	stopDisco();
// 	discoOn = false;
// }

// function discoToggle() {
// 	if (discoOn === true){
// 		clickToDisco;
// 	} else {
// 		clickToStopDisco;
// 	}
// }

// //disco button functionallity
// var discoClick = document.querySelector('#disco');
// discoClick.onclick = discoToggle;

});


