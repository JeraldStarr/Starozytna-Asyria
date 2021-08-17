function handleTooltip() {
    _hideTooltip();
	$('.label').mouseover(function() {
        let ttLeft;
        let ttTop;
        const $this = $(this);
        const $tip = $($this.attr('data-tooltip'));
        const triggerPosition = $this.offset();
        const triggerH = $this.outerHeight();
        const tipW = $tip.outerWidth();
        const tipH = $tip.outerHeight();
        const screenW = $(window).width();
        const scrollTop = $(document).scrollTop();
        const overFlowRight = (triggerPosition.left + tipW) - screenW;
        const overFlowTop = triggerPosition.top - tipH - scrollTop;
		
		if (overFlowTop > 0) {
            ttTop = _calculateTooltipPositionAboveTrigger(triggerPosition, tipH);
		} else {	
            ttTop = _calculateTooltipPositionUnderTrigger(triggerPosition, triggerH);	
		}
		
		
		if (overFlowRight > 0) {
			ttLeft = _moveTooltipPositionLeft(triggerPosition, overFlowRight);
		} else {
			ttLeft = triggerPosition.left;
		}
		
		_fadeInTooltip($tip, ttLeft, ttTop);
	});

        _fadeOutTooltip();
}
function _hideTooltip() {
    $('.outside').hide();
}
function _fadeInTooltip(popup, ttLeft, ttTop) {
    popup.css({
        left : ttLeft ,
        top : ttTop,
        position: 'absolute'
    }).fadeIn(200);
}
function _fadeOutTooltip() {
    $('.label').mouseout(function() {
		$('.outside').fadeOut(400);

	});
}
function _calculateTooltipPositionUnderTrigger(triggerPosition, triggerHight) {
    return triggerPosition.top + triggerHight + 10;
}
function _calculateTooltipPositionAboveTrigger(triggerPosition, tooltipHeight) {
    return triggerPosition.top - tooltipHeight - 10;
}
function _moveTooltipPositionLeft(triggerPosition, overFlowRight) {
    triggerPosition.left - overFlowRight - 10;	
}

export {
    handleTooltip,
}