$(document).ready(function() {
    //create grid
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container'); 
        };
    };
    //drawing function
    $('.unit').mouseenter(function(){
		$(this).css('background-color','yellow');
    });
    $('.unit').mouseleave(function(){
        $(this).css('background-color','black');
    });

        //clear grid, empties container div, then rebuilds grid
    document.getElementById('clear').onclick = function(){
        $('#container').empty();
        for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container'); 
        }
    }
            //drawing function for clear button
    $('.unit').mouseenter(function(){
        $(this).css('background-color','yellow');
    });
    $('.unit').mouseleave(function(){
        $(this).css('background-color','black');
    });

    };


    //erase drawing by reseting color to default bluish color
    document.getElementById('erase').onclick = function(){
        $('.unit').hover(function(){
        
        $('.unit').mouseenter(function(){
            $(this).css('background-color','yellow');
        });
        
        $('.unit').mouseleave(function(){
            $(this).css('background-color','#68ffd6');
        });
        });
    };


    //make divs disapear on hover
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


    //default draw again after hitting a different button
    document.getElementById('draw').onclick = function(){
    	$('unit').hover(function(){

    	$('unit').mouseenter(function(){
    		$(this).css('background-color', 'yellow');
    		});
    	$('unit').mouseleave(function(){
    		$(this).css('background-color', 'black')
    	});
    	});
    };


   //determine how to make user input === size of grid
  /*document.getElementById('resize').onclick = function(){
  	$('#container').empty();
  	prompt("How many units per side?")
  	for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container'); 
        }
    } 

  } 
*/



});