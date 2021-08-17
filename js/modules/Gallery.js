function handlePictures() {
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
}

export {
    handlePictures,
}