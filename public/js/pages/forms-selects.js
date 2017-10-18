/* forms-selects page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-selects page javascript');
        // me.select2();
        me.onclicks();
    };

    me.onclicks = function() {
		$( ":checkbox" ).on('click',  function() {
			$( this ).parent().nextAll( "select" ).prop( "disabled", !this.checked );
		});
		
		$( "button[data-select2-open]" ).on('click',  function() {
			$( "#" + $( this ).data( "select2-open" ) ).select2( "open" );
		});        
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();