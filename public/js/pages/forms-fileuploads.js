/* forms-fileuploads page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-fileuploads page javascript');
        me.dropzone();
    };

    me.dropzone = function() {
        Dropzone.autoDiscover = false;
        var msg = '<i class="fa fa-3x fa-cloud-upload"></i><b>Drop files here</b> <i>or click to upload</i>';
        var msg2 = '<i class="fa fa-3x fa-upload"></i><b>This text can say whatever you like</b> <i>...it\'s very easy to change</i>';
        /*
        Dropzone.options.dropzonem = {
            maxFilesize: 1,
        };
        */
        $('#dropzone1-1').dropzone({ url: '#', maxFilesize: 1, maxFiles: 1, uploadMultiple: false, dictDefaultMessage: msg });
        $('#dropzone1-2').dropzone({ url: '#', maxFilesize: 1, maxFiles: 1, uploadMultiple: false, dictDefaultMessage: msg });
        $('#dropzone1-3').dropzone({ url: '#', maxFilesize: 1, maxFiles: 1, uploadMultiple: false, dictDefaultMessage: msg });
        $('#dropzone2-1').dropzone({ url: '#', maxFilesize: 1, dictDefaultMessage: msg });
        $('#dropzone2-2').dropzone({ url: '#', maxFilesize: 1, dictDefaultMessage: msg });
        $('#dropzone2-3').dropzone({ url: '#', maxFilesize: 1, dictDefaultMessage: msg });
        $('#dropzone2-4').dropzone({ url: '#', maxFilesize: 1, dictDefaultMessage: msg });
        $('#dropzone2-5').dropzone({ url: '#', maxFilesize: 1, dictDefaultMessage: msg2 });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();