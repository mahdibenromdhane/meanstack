/* forms-validation page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function(options) {
        parent.log('Running forms-validation page javascript');
        $('[data-trigger="jquery-validation"]').each(function(el) {
          me.jquery_validation($(this), options);
        });
    };

    me.jquery_validation = function(el) {
      el.validate({
        submitHandler: function(form) {
          // For template demo, block the actual submit and just return a nice message instead
          el.find('.success-msg').html('<div class="text-success">Success!</div>');
          return false;
        }
      });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();