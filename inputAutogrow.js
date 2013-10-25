(function($) {
	$.fn.inpAutoGrow = function() {
		
		//create the text holder element if it doesn't exist
		if ($('#input_width_holder_box').length == 0) {
			$('body').append('<div id="input_width_holder_box">' + this.attr('placeholder') + '</div>')
			$('#input_width_holder_box').css('display', 'none')
		}
		else {
			$('#input_width_holder_box').html( this.attr('placeholder') )
		}
		
		//set textarea precondition values
		//first make sure the holder box has matched css rules to make sure min-width is properly set
		$('#input_width_holder_box').css({
			//width: $(this).css('width'),
			padding: $(this).css('padding'),
			'font-size': $(this).css('font-size'),
			'font-family': $(this).css('font-family'),
			'font-weight': $(this).css('font-weight'),
			'letter-spacing': $(this).css('letter-spacing'),
			'word-spacing': $(this).css('word-spacing'),
			'line-height': $(this).css('line-height'),
			'text-indent': $(this).css('text-indent'),
			'white-space': 'pre',
			'word-wrap': $(this).css('word-wrap'),
			'text-align': $(this).css('text-align')
		})
		//then set the textareas values
		this.css({
			overflow: 'hidden',
			resize: 'none',
			'min-width': $('#input_width_holder_box').width() + 'px',
			'width': $('#input_width_holder_box').width() + 'px',
			'vertical-align': 'top'
		})
		
		//create listeners to set widths equal
		
		this.live('focus', function() {
			//set holder elements text properties to match those of the textarea
			$('#input_width_holder_box').css({
				//width: $(this).css('width'),
				padding: $(this).css('padding'),
				'font-size': $(this).css('font-size'),
				'font-family': $(this).css('font-family'),
				'font-weight': $(this).css('font-weight'),
				'letter-spacing': $(this).css('letter-spacing'),
				'word-spacing': $(this).css('word-spacing'),
				'line-width': $(this).css('line-width'),
				'text-indent': $(this).css('text-indent'),
				'white-space': 'pre',
				'word-wrap': $(this).css('word-wrap'),
				'text-align': $(this).css('text-align')
			})
			currentVal = $(this).val()
			$('#input_width_holder_box').html(currentVal)
			boxwidth = $('#input_width_holder_box').width()
			$(this).css('width', boxwidth + 'px')
		})
		
		//also use keypress to avoid setting vars every time key is pressed  --  keypress doen't catch backspace on all browsers
		this.live('keypress', function(e) {
			var keyCode = e.which
			//prevent doubled space characters
			//CHANGE THIS TO CHECK VALUE AGAINST CHARACTERS TO LEFT&RIGHT OF CARAT, NOT AT END OF STRING
			if (keyCode == 32 && $(this).val().substr($(this).val().length - 1) == ' ') {
				e.preventDefault()
				console.log('trig')
			}
			//prevent return press
			else if (keyCode == 13) {
				e.preventDefault()
			}
			else {
				var currentVal = $(this).val() + String.fromCharCode(e.which)
				if (currentVal != '') {
					$('#input_width_holder_box').html(currentVal)
					boxwidth = $('#input_width_holder_box').width()
					$(this).css('width', boxwidth + 'px')
				}
				else {
					$(this).width($(this).css('min-width'))
				}
			}
		})
		this.live('keyup', function(e) {
			var keyCode = e.which
			if (keyCode == 8) {
				var currentVal = $(this).val()
				$('#input_width_holder_box').html(currentVal)
				boxwidth = $('#input_width_holder_box').width()
				$(this).css('width', boxwidth + 'px')
			}
		})
	}
})(jQuery)
