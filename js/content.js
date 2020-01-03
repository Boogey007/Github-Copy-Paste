
var count = 0

jQuery.noConflict();
(function($) {
	$(function() {
		// copy text
		var e = $( '.link-gray-dark.js-project-card-details-external-link' ) // small flyout
		var e1 = $( '.js-issue-title' ) // Full page

		if( !! e ) e  = e[0]
		if ( !! e1) e1 = e1[0]
		
		if ( !! e ) 
		{ 
			if ( !! e.innerText )
				var innerText = e.innerText.slice(0, e.innerText.indexOf("#"));

			if ( !! e.href ) 
				var ghNumber = e.href.substring(e.href.lastIndexOf('/') + 1)

			// create msg
			if ( !! innerText && !! ghNumber )
				var msg = '#' + ghNumber + ' - ' + innerText
			
			
			if ( !! msg )    
				copyTextToClipboard(msg)
		}
		else if ( !! e1 ) 
		{ 

			if ( !! e1.innerText ) {
				var innerText = e1.innerText.slice(0, e1.innerText.indexOf("#"));
				var ghNumber = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
			}

			// create msg
			if ( !! innerText && !! ghNumber )
				var msg = '#' + ghNumber + ' - ' + innerText
					
					
			if ( !! msg )    
				copyTextToClipboard(msg)
		}
		else return

	});
})( jQuery );


function copyTextToClipboard(text) {
	//Create a textbox field where we can insert text to. 
	var copyFrom = document.createElement("textarea");
  
	//Set the text content to be the text you wished to copy.
	copyFrom.textContent = text;
  
	//Append the textbox field into the body as a child. 
	//"execCommand()" only works when there exists selected text, and the text is inside 
	//document.body (meaning the text is part of a valid rendered HTML element).
	document.body.appendChild(copyFrom);
  
	//Select all the text!
	copyFrom.select();
  
	//Execute command
	document.execCommand('copy');
  
	//(Optional) De-select the text using blur(). 
	copyFrom.blur();
  
	//Remove the textbox field from the document.body, so no other JavaScript nor 
	//other elements can get access to this.
	document.body.removeChild(copyFrom);
  }