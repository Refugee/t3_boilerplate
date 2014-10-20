$(document).ready(function() {

	$(".menu-toggle-wrapper").click(function(){
		$(".nav-main").slideToggle();
	});

	$(".nav-main li:has(ul)").addClass("menu-with-sub");
	$('.menu-with-sub').prepend("<div class=\"sub-toggle\"><i class=\"fa fa-angle-right\"></i></div>");
	$(".nav-main li a:contains('Suche')").html("<i class=\"fa fa-search\"></i> Suche");

	$(".sub-toggle").click(function(){
		$(this).parent().find("ul").slideToggle();
		$(this).parent().toggleClass("open");
	});

	if($(".flexslider").length > 0){
		$(".flexslider").flexslider({
			slideshow: false,
			animation: "slide", 
			selector: ".csc-textpic-imagewrap > .csc-textpic-imagerow",
			controlNav: true,
			directionNav: true,  
		});
	}

	$("a.download").prepend("<i class=\"fa fa-download\"></i>&nbsp;");
	$(".content-wrapper ul.ul-check li").prepend("<i class=\"fa fa-check\"></i>&nbsp;");
	$(".aside-main a.internal-link").prepend("<i class=\"fa fa-caret-right\"></i>&nbsp;");
	
	$('.two-col h4').each(function(){
		$(this).prepend("<i class=\"fa fa-plus-circle\"></i>&nbsp;");
		$(this).nextUntil("h4").wrapAll('<div class="content"><div class=\"inside\"></div></div>');
    	$(this).nextUntil("h4").andSelf().wrapAll('<div class="accordion-small" />');
	});

	$('.two-col .content').hide();
	$('.two-col h4').click(function(){
		$(this).toggleClass("open");
		$(this).siblings().slideToggle();
	});

	$(".page-navigation .previous a").html("<i class=\"fa fa-angle-left\"></i>&nbsp;");
	$(".page-navigation .next a").html("<i class=\"fa fa-angle-right\"></i>&nbsp;");
	
	$(".search-toggle").click(function(){
		$(".search-wrapper").slideToggle();
	});

	$(".Tx-Formhandler .error").click(function(){
		$(this).hide();
	});

	$(".Tx-Formhandler .error").each(function(index, value) {
		$(this).append(" <i class=\"fa fa-times\"></i> ");
	});


});

/*
$(document).ajaxComplete(function(){

	$(".Tx-Formhandler .error").click(function(){
		$(this).hide();
	});

	$(".Tx-Formhandler .error").each(function(index, value) {
		$(this).append(" <i class=\"fa fa-times\"></i> ");
	});

});
*/