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
	//Menu Item hover
	$('.menuItem div').hover(function(){
		$(this).addClass('text-shadow');
	},function(){
		$(this).removeClass('text-shadow');
	});
	
	//Projects links ivents
	$('#projectsPanes a').hover(function(){
		$(this).css({'text-decoration':'underline'});
	},function(){
		$(this).css({'text-decoration':'none'});
	});
	
	$('#projectsPanes a').click(function(event){
		event.preventDefault();
		window.open($(this).attr('href'));
	});
	
	//Solutions navigation push effect
	$("#solutionsNav a").click(function(event){
		event.preventDefault();
		
		$('#solHeader').hide();
		$('#solFooter').hide();
		
		var pane = $(this).attr('href');
		$('#solPanes div[id*=Pane]').hide();
		$('#solutionsNav span').removeClass('underline');
		
		$(pane).fadeIn(2000);
		$(this).children('span').addClass('underline');

	});
	
	//Solution Links actions

	$('#periodicLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.sh.png');
		$('#booksLink > img').attr('src','images/sol.books.png');
		$('#bookletsLink > img').attr('src','images/sol.booklets.png');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.png');
	});
	
	$('#booksLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.png');
		$('#booksLink > img').attr('src','images/sol.books.sh.png');
		$('#bookletsLink > img').attr('src','images/sol.booklets.png');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.png');
	});

	$('#bookletsLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.png');
		$('#booksLink > img').attr('src','images/sol.books.png');
		$('#bookletsLink > img').attr('src','images/sol.booklets.sh.png');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.png');
	});
	
	$('#catalogsLink').click(function(){
		$('#periodicLink > img').attr('src','images/sol.periodic.png');
		$('#booksLink > img').attr('src','images/sol.books.png');
		$('#bookletsLink > img').attr('src','images/sol.booklets.png');
		$('#catalogsLink > img').attr('src','images/sol.catalogs.sh.png');
	});


	//projects Navigation
	$('#projectsNav a').click(function(event){
		event.preventDefault();
				
		$('#projectsNav').hide();
		
		var pane = $(this).attr('href');
		$('#projectsPanes div[id*=Pane]').hide();
		$('#projectsCount').hide();
		$('#headerCaption').html('<span class="solheaderText">PROJECTS</span>');
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
	})
	
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
