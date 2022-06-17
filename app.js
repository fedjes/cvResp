$(document).ready(function(){

$('#menu').click(function(){
    $(this).toggleClass('fa-items');
    $('header').toggleClass('toggle');
});

$(window).on('scroll load', function(){

    $('#menu').removeClass('fa-items');
    $('header').removeClass('toggle');

});

});