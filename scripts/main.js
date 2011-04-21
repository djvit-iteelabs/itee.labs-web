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

	//Solutions navigation push effect
	$("#solutionsNav a").click(function(){
		$("#solutionsNav a").each(function(){
			$(this).find('img').removeClass('current');
		});
		
		$(this).find('img').addClass('current');
		$('#solHeader').hide();
		$('#solFooter').hide();
		
		var pane = $(this).attr('href');
		$('#solPanes div[id*=Pane]').hide();
		
		$(pane).show();
	});
	
	//projects Navigation
	$('#projectsNav a').click(function(){
		$("#projectsNav a").each(function(){
			$(this).find('img').removeClass('current');
		});
		
		$(this).find('img').addClass('current');
		
		$('#projectsNav').hide();
		
		var pane = $(this).attr('href');
		$('#projectsPanes div[id*=Pane]').hide();
		$(pane).fadeIn(2000);
	});
	
	//tabs actions
	$('#greenTab').click(function(){
		window.open('solutions.html', '_self');
	});
	$('#blueTab').click(function(){
		window.open('projects.html', '_self');
	});
	$('#violetTab').click(function(){
		window.open('technology.html', '_self');
	});		
	$('#redTab').click(function(){
		window.open('blog.html', '_self');
	});	
	$('#yellowTab').click(function(){
		window.open('about.html', '_self');
	});	
	
});

function Show_Popup() {
		$('#mask').animate({marginTop: "180px"},{queue:false, duration: 500});
		$('#contactPanel').animate({marginTop: "0px"},{queue:false, duration: 500});
		$('#mask').height($('#wrapper1').height() + 135);
		$('#mask').width($('#wrapper1').width());
		$('#mask').fadeIn(500);
		$('#contactButton').focus();
}

function Close_Popup() {
	$('#mask').animate({marginTop: "0px"},{queue:false, duration: 500}).fadeOut(500);
	$('#contactPanel').animate({marginTop: "-180px"},{queue:false, duration: 500});
}
