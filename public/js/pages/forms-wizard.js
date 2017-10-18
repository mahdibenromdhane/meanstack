/* forms-wizard page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-wizard page javascript');
        $(document).ready(function() {
            me.wizard_validation();
        });
    };

    me.wizard_validation = function() {
        var validator = $("#commentForm").validate({
            rules: {
                emailfield: {
                    required: true,
                    email: true,
                    minlength: 3
                },
                namefield: {
                    required: true,
                    minlength: 3
                },
                urlfield: {
                    required: true,
                    minlength: 3,
                    url: true
                }
            }
        });
  	  	$('#wizard_validation').bootstrapWizard({
            nextSelector: '.wiz-next',
            previousSelector: '.wiz-prev',
            onNext: function(tab, navigation, index) {
                var valid = $('#commentForm').valid();
                if(!valid) {
                    validator.focusInvalid();
                    return false;
                }
            }
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();