/* forms inplace-editing page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms inplace-editing page javascript');
        me.xeditable();
    };

    me.xeditable = function() {
      $(function() {
        // Register a mock action to /post
        $.mockjax({
            url: '/post',
            response: function(settings) {
                log(settings, this);
            }
        });
        
        function log(settings, response) {
              var s = [], str;
              s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
              for(var a in settings.data) {
                  if(settings.data[a] && typeof settings.data[a] === 'object') {
                      str = [];
                      for(var j in settings.data[a]) {str.push(j+': "'+settings.data[a][j]+'"');}
                      str = '{ '+str.join(', ')+' }';
                  } else {
                      str = '"'+settings.data[a]+'"';
                  }
                  s.push(a + ' = ' + str);
              }
              s.push('RESPONSE: status = ' + response.status);
  
              if(response.responseText) {
                  if($.isArray(response.responseText)) {
                      s.push('[');
                      $.each(response.responseText, function(i, v){
                         s.push('{value: ' + v.value+', text: "'+v.text+'"}');
                      }); 
                      s.push(']');
                  } else {
                     s.push($.trim(response.responseText));
                  }
              }
              s.push('--------------------------------------\n');
              $('#console').val(s.join('\n') + $('#console').val());
        }               
      });
      
      $.fn.editableform.buttons = '<button type="submit" class="btn btn-success btn-sm editable-submit">' +
        '<i class="glyphicon glyphicon-ok"></i>' +
        '</button>' +
        '<button type="button" class="btn btn-danger btn-sm editable-cancel">' +
        '<i class="glyphicon glyphicon-remove"></i>' +
        '</button>';
      //defaults
      $.fn.editable.defaults.url = '/post'; 
      $.fn.editable.defaults.mode = 'popover';
      $('a[data-trigger="x-editable"]').each(function() {
        $(this).editable({ combodate: { maxYear: 2020 }});
      });
      // add 'required' examples functionality
      $('#in2-1').editable('option', 'validate', function(v) {
        if(!v) return 'Required field';
      });
      $('#in2-2').editable('option', 'validate', function(v) {
        if(!v) return 'Required field';
      });
      $('#in12-1').editable('option', 'validate', function(v) {
        if(!v) return 'Required field';
      });
      $('#in12-2').editable('option', 'validate', function(v) {
        if(!v) return 'Required field';
      });
      // $('a[data-trigger="x-editable"]').editable();
      // $('#username').editable();
      $('#in7-1').editable({
        url: '#',
        value: {
            city: "London", 
            street: "Brewer St", 
            building: "1"
        },
        validate: function(value) {
            if(value.city === '') return 'city is required!'; 
        },
        display: function(value) {
            if(!value) {
                $(this).empty();
                return; 
            }
            var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
            $(this).html(html); 
        }         
      });
      var fruits = [{id: 1, text: "Banana"}, {id: 2, text: "Peach"}, {id: 3, text: "Apple"}, {id: 4, text: "Watermelon"}, {id: 5, text: "Orange"}];
      $('#select2down1').editable({
        source: fruits,
        select2: {
            width: "200px",
            placeholder: 'Select fruit',
            allowClear: false,
        },
      });
      $('#select2down2').editable({
        source: fruits,
        select2: {
            width: 200,
            placeholder: 'Select fruit',
            allowClear: false
        }
      });
      $('#select2tag1').editable({
        inputclass: 'input-large',
        select2: {
            tags: ["Banana", "Peach", "Apple", "Watermelon", "Orange"],
            tokenSeparators: [",", " "]
        } 
      });  
      $('#select2tag2').editable({
        inputclass: 'input-large',
        select2: {
            tags: ["Banana", "Peach", "Apple", "Watermelon", "Orange"],
            tokenSeparators: [",", " "]
        } 
      });
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();