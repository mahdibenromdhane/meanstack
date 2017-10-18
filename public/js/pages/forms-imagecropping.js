/* forms-imagecropping page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-imagecropping page javascript');
        me.handler_cropper({target:'#cropperimg1', guides: true, aspectRatio: 16/9, crop: function(e) { $('#cropperx1').text(Math.round(e.x)); $('#croppery1').text(Math.round(e.y)); $('#cropperw1').text(Math.round(e.width)); $('#cropperh1').text(Math.round(e.height)); }});
        me.handler_cropper({target:'#cropperimg2', autoCropArea: 0.9, preview:'.crop-preview-top-right', crop: function(e) { $('#cropperx2').text(Math.round(e.x)); $('#croppery2').text(Math.round(e.y)); $('#cropperw2').text(Math.round(e.width)); $('#cropperh2').text(Math.round(e.height)); }});
        me.handler_cropper({target:'#cropperimg4', autoCrop: false, guides: true, aspectRatio: 16/9, crop: function(e) { $('#cropperx4').text(Math.round(e.x)); $('#croppery4').text(Math.round(e.y)); $('#cropperw4').text(Math.round(e.width)); $('#cropperh4').text(Math.round(e.height)); }});
        me.handler_cropper({target:'#cropperimg5', guides: true, preview:'.crop-preview-top-left', aspectRatio: NaN, crop: function(e) { $('#cropperx5').text(Math.round(e.x)); $('#croppery5').text(Math.round(e.y)); $('#cropperw5').text(Math.round(e.width)); $('#cropperh5').text(Math.round(e.height)); }});
    };

    me.handler_cropper = function(options) {
        var target = parent.option('target',options);
        if (!target) {
            parent.log('Error: handler_cropper called without a target');
            return false;
        }
        var zoomable = parent.option('zoomable',options,false);
        var aspectRatio = parent.option('aspectRatio',options,1);
        var autoCrop = parent.option('autoCrop',options,true);
        var autoCropArea = parent.option('autoCropArea',options,0.8);
        var preview = parent.option('preview',options,null);
        var guides = parent.option('guides',options,false);
        var crop = parent.option('crop',options,null);
        $(target).cropper({
            zoomable: zoomable,
            aspectRatio: aspectRatio,
            autoCrop: autoCrop,
            autoCropArea: autoCropArea,
            preview: preview,
            guides: guides,
            crop: crop
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();