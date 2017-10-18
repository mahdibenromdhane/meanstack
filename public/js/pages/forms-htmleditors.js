/* forms-htmleditors page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-htmleditors page javascript');
        $(me.tinymce());
        me.summernote();
        $(document).ready(function() {
            me.onclicks();
        });
    };
    
    me.tinymce = function() {
        // tinyMCE.baseURL = "assets/plugins/tinymce";
        tinymce.init({
            selector: '#tinymce1',
            height: 350,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        }); 
        tinymce.init({
            selector: '#tinymce2',
            height: 350,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            content_css: [
                'assets/css/theme.css',
                'assets/icons/flags/css/flag-icon.min.css'
            ]
        }); 
        tinymce.init({
            selector: '#tinymce3',
            height: 450,
            body_class: 'tinymce-editor',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            content_css: [
                'assets/css/theme.css',
                'assets/icons/flags/css/flag-icon.min.css'
            ]
        }); 
    };
    
    me.summernote = function() {
        $('#summernote-basic').summernote({
            height: 450,
            minHeight: null,
            maxHeight: null,
        });
        $('#summernote-airmode').summernote({
           airMode: true 
        });
    };
    
    me.summernote_edit = function(options) {
        var id = options.id;
        $(id).summernote({focus: true});
    };

    me.summernote_save = function(options) {
      var id = options.id;
      var markup = $(id).summernote('code');
      $(id).summernote('destroy');
    };
    
    me.onclicks = function() {
        // id='edit'+index, onclick='Theme.pages.summernote_edit({id: "#summernote-click"})'
        // id='save'+index, onclick='Theme.pages.summernote_save({id: "#summernote-click"})'
        $('#clickedit').on('click', function() { Theme.pages.summernote_edit({id: "#summernote-click"}); });
        $('#clicksave').on('click', function() { Theme.pages.summernote_save({id: "#summernote-click"}); });
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();