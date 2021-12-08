$(document).ready(function () {         
    $('li span').parent().find('ul').hide();
});

$('li span').click(function() {       
    $(this).parent().find('ul').slideToggle(1000);       
});

$('ul ul li').mouseover(function () { 
    $(this).css('color', 'green');
});

$('ul ul li').mouseout(function () { 
    $(this).css('color', 'black');
});

$('ul ul li').mousedown(function () { 
    $(this).css({'color': 'red'});
});

$('ul ul li').mouseup(function () { 
    $(this).css({'color': 'black'});
});