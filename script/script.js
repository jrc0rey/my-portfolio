console.log('working')

$('.banner').css('cursor', 'pointer');

// Scroll Effect

$('.backBtn').click(function() {
    $('html,body').animate({
        scrollTop: $('.top').offset().top},
        'slow');
});

$('.backBtn2').click(function() {
    $('html,body').animate({
        scrollTop: $('.top').offset().top},
        'slow');
});

$('.backBtn3').click(function() {
    $('html,body').animate({
        scrollTop: $('.top').offset().top},
        'slow');
});

$('#Layer_1').click(function() {
    $('html,body').animate({
        scrollTop: $('.borderThree').offset().top},
        'slow');
});

$('#Layer_2').click(function() {
    $('html,body').animate({
        scrollTop: $('.borderFour').offset().top},
        'slow');
});

$('#Layer_3').click(function() {
    $('html,body').animate({
        scrollTop: $('.borderSeven').offset().top},
        'slow');
});

$('#Layer_4').click(function() {
    $('html,body').animate({
        scrollTop: $('.borderEight').offset().top},
        'slow');
});




 // Icon animations

$('.less, .close, .baseFill').hide().attr('hidden','true')
$('.eraser, .yellow, .tip, .pencilLines').hide().attr('hidden','true')

$('#Layer_1').mouseenter(function(){
	$('.web').css('visibility', 'visible')
	$('.less').css('animation-play-state', 'running')
	$('.close').css('animation-play-state', 'running')
	$('.baseFill').css('animation-play-state', 'running')
	$('.less, .close, .baseFill').show().attr('hidden','false')
});

$('#Layer_1').mouseleave(function(){
	$('.web').css('visibility', 'hidden')
	// $('.less, .close, .baseFill').hide().attr('hidden','true')
});

$('#Layer_2').mouseenter(function(){
	$('.art-direction').css('visibility', 'visible')
	$('.eraser, .yellow, .tip, .pencilLines').css('animation-play-state', 'running')
	$('.eraser, .yellow, .tip, .pencilLines').show().attr('hidden','false')
});

$('#Layer_2').mouseleave(function(){
	$('.art-direction').css('visibility', 'hidden')
	// $('.eraser, .yellow, .tip, .pencilLines').hide().attr('hidden','true')
});

$('#Layer_3').mouseenter(function(){
	$('.design').css('visibility', 'visible')
});

$('#Layer_3').mouseleave(function(){
	$('.design').css('visibility', 'hidden')
});

$('#Layer_4').mouseenter(function(){
	$('.photography').css('visibility', 'visible')
});

$('#Layer_4').mouseleave(function(){
	$('.photography').css('visibility', 'hidden')
});



// Lightbox

$('.banner').click(function(){
	$.SimpleLightbox.open({
    	items: ['https://player.vimeo.com/video/95600745']
	});
});









