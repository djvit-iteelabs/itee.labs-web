$(document).ready(function() {
	
	// Menu Item clicks animation 
	$('.menuItem').click(function() {
		var opts = {};
		
		// Hide all previous items
		$('.subMenu').each(function() {
			if ($(this).css('display') != 'none') {
				$(this).hide('blind', opts, 200);
			}
		});
		
		// Show selected sub-menu item
		$(this).next('[class^="subMenu"]').show('blind', opts, 200);
		
	});

	//Projects navigation push effect
	$("#projectsNav a").click(function(){
		$("#projectsNav a").each(function(){
			$(this).removeClass('current');
		});
		
		//Panes showing
		var id = $(this).attr('href');
		var pane = $(document).find(id);
		$("#projectsPanes div").css({"display":"none"});
		$(pane).fadeIn(2000);

		$(this).addClass('current');
	});

	//Solutions navigation push effect
	$("#solutionsNav a").click(function(){
		$("#solutionsNav a").each(function(){
			$(this).removeClass('current');
		});
		
		//Panes showing
		var id = $(this).attr('href');
		var pane = $(document).find(id);
		$("#solutionsPanes div").css({"display":"none"});
		$(pane).fadeIn(2000);

		$(this).addClass('current');
	});
	
	$('#contactsClip').click(function(){
		$('#wrapper1').animate({top: "180px"},{queue:false, duration: 2000});
		$('#mask').animate({top: "180px"},{queue:false, duration: 2000});
		$('#contactPanel').animate({top: "0px"},{queue:false, duration: 2000});
		$('#footer').animate({top: "180px"},{queue:false, duration: 2000});		
	});	
});

function Show_Popup() {
	//$('#mask').height($(document).height());
	//$('#mask').width($(document).width());
	$('#mask').height($('#wrapper1').height());
	$('#mask').width($('#wrapper1').width());
	$('#mask').fadeIn(500);
	var tHeight, tWidth, wHeight, wWidth;
	
	//$('#window').css('top', ($(window).height() - $('#window').height())/2  + 'px');
	//$('#window').css('left', ($(window).width() - $('#window').width())/2  + 'px');
	
	//$('#window').show('drop', { direction: 'up' }, 500);
}

function Close_Popup() {
	//$('#mask').fadeOut(500);
	//$('#window').hide('drop', { direction: 'up' }, 500);
	$('#wrapper1').animate({top: "0px"},{queue:false, duration: 2000});
	$('#mask').animate({top: "0px"},{queue:false, duration: 2000}).fadeOut(500);
	$('#contactPanel').animate({top: "-180px"},{queue:false, duration: 2000});
	$('#footer').animate({top: "0px"},{queue:false, duration: 2000});
}
