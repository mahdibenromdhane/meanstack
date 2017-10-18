/* function-profile page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running function-profile page javascript');
        me.dropzone();
    };

    me.dropzone = function() {
        Dropzone.autoDiscover = false;
        var msg = '<b>Drop new photo here</b> <i>or click to upload</i>';
        $('#dropzone').dropzone({ url: '#', maxFilesize: 1, maxFiles: 1, uploadMultiple: false, dictDefaultMessage: msg });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();