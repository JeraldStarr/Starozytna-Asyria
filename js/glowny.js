window.addEventListener("load", displayMenuBar, false);

function fillWebsite() {

	var footerElementInnerHTML = [
		"mapa strony",
		"linki",
		"kontakt",
		"księga gości"
	];

	var footerLinks = [
		"mapa-strony.html",
		"linki.html",
		"kontakt.html",
		"http://net3.pl/uslugi/ksiega.php?p_user=sitnikl1&p_nrksiegi=1"
	];

	var footerElement = document.getElementById("bottom");

	for(i=0;i<footerLinks.length;i++) {
	var divElement = document.createElement("div");
	var aElement = document.createElement("a");
	aElement.setAttribute("href", footerLinks[i]);
	aElement.innerHTML = footerElementInnerHTML[i];
	divElement.appendChild(aElement);
	footerElement.appendChild(divElement);
	};
};

function displayMenuBar() {

	var innerHTML = [
		"Strona Główna",
		"Architektura",
		"Sztuka",
		"Miasta",
		"Historia",
		"Bogowie",
		"Piśmiennictwo"
	];

	var menuUrls = [
		"/",
		"asyryjska-architektura.html",
		"asyryjska-sztuka.html",
		"asyryjskie-miasta.html",
		"historia-asyrii.html",
		"asyryjscy-bogowie.html",
		"asyryjskie-pismiennictwo.html"
	];
	

	var menuBar = document.getElementById("menu");
	for(i=0;i<7;i++) {
		var aElement = document.createElement("a");
		aElement.setAttribute("href", menuUrls[i]);
		var divElement = document.createElement("div");
		divElement.setAttribute("class", "option");
		divElement.appendChild(aElement);
		aElement.innerHTML=innerHTML[i];
		menuBar.appendChild(divElement);
	}
	fillWebsite();
}

$(document).ready(function() {
	$('figure a').fancybox({
		overlayColor: 'black',
		overlayOpacity: .4,
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		easingIn: 'easeInSine',
		easingOut: 'easeOutSine',
		titlePosition: 'inside',	
		cyclic: true
	});
}); // end ready()


/*
	wyświetla etykietki
*/

$(document).ready(function() {
	$('.outside').hide();
	$('.label').mouseover(function() {
			var ttLeft,
		    ttTop,
			$this=$(this),
			$tip = $($this.attr('data-tooltip')),
		    triggerPos = $this.offset(),
		    triggerH = $this.outerHeight(),
		    triggerW = $this.outerWidth(),
			tipW = $tip.outerWidth(),
		    tipH = $tip.outerHeight(),
		    screenW = $(window).width(),
			scrollTop = $(document).scrollTop();
		
		if (triggerPos.top - tipH - scrollTop > 0 ) {
			ttTop = triggerPos.top - tipH - 10;
		} else {
			ttTop = triggerPos.top + triggerH +10 ;			
		}
		
		var overFlowRight = (triggerPos.left + tipW) - screenW;	
		if (overFlowRight > 0) {
			ttLeft = triggerPos.left - overFlowRight - 10;	
		} else {
			ttLeft = triggerPos.left;	
		}
		
		
		$tip
		   .css({
			left : ttLeft ,
			top : ttTop,
			position: 'absolute'
		    })
			.fadeIn(200);
	}); // end mouseover()

	$('.label').mouseout(function() {
		$('.outside').fadeOut(400);

	}); // end mouseout()

}); // end ready()



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55459898-3', 'auto');
  ga('send', 'pageview');

