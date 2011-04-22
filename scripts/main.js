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
		/*
		$("#solutionsNav a").each(function(){
			$(this).find('img').removeClass('current');
		});
		
		$(this).find('img').addClass('current');*/
		$('#solHeader').hide();
		$('#solFooter').hide();
		
		var pane = $(this).attr('href');
		$('#solPanes div[id*=Pane]').hide();
		
		$(pane).show();
		$('#logoButton').focus()
	});
	
	//Solution Links actions
	$('#periodicLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.sh.png');
		$('#periodicLink > span').addClass('text-shadow');
		$('#booksLink > img').attr('src','images/sol.books.png');
		$('#booksLink > span').removeClass('text-shadow');	
		$('#bookletsLink > img').attr('src','images/sol.booklets.png');
		$('#bookletsLink > span').removeClass('text-shadow');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.png');
		$('#catalogsLink > span').removeClass('text-shadow');
	});
	
	$('#booksLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.png');
		$('#periodicLink > span').removeClass('text-shadow');
		$('#booksLink > img').attr('src','images/sol.books.sh.png');
		$('#booksLink > span').addClass('text-shadow');	
		$('#bookletsLink > img').attr('src','images/sol.booklets.png');
		$('#bookletsLink > span').removeClass('text-shadow');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.png');
		$('#catalogsLink > span').removeClass('text-shadow');
	});

	$('#bookletsLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.png');
		$('#periodicLink > span').removeClass('text-shadow');
		$('#booksLink > img').attr('src','images/sol.books.png');
		$('#booksLink > span').removeClass('text-shadow');	
		$('#bookletsLink > img').attr('src','images/sol.booklets.sh.png');
		$('#bookletsLink > span').addClass('text-shadow');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.png');
		$('#catalogsLink > span').removeClass('text-shadow');
	});
	
	$('#catalogsLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.png');
		$('#periodicLink > span').removeClass('text-shadow');
		$('#booksLink > img').attr('src','images/sol.books.png');
		$('#booksLink > span').removeClass('text-shadow');	
		$('#bookletsLink > img').attr('src','images/sol.booklets.png');
		$('#bookletsLink > span').removeClass('text-shadow');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.sh.png');
		$('#catalogsLink > span').addClass('text-shadow');
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
		$('#projectsCount').hide();
		$(pane).fadeIn(2000);
		
		switch (pane){
			case '#edetPane':
				$('#projectNumPage').text('-03:3-');
			break;
			case '#miniPane':
				$('#projectNumPage').text('-03:1-');
			break;
			case '#infoPane':
				$('#projectNumPage').text('-03:2-');
			break;
			case '#tronPane':
				$('#projectNumPage').text('-03:4-');
			break;
			default:
				$('#projectNumPage').text('-03-');
			break;
		}
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
	
	$('#mask').click(function(){
		Close_Popup();
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
