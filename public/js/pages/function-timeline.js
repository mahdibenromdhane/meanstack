/* function-timeline page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running function-timeline page javascript');
        me.timeline();
        me.datepicker();
        me.onclicks();
        me.onchanges();
    };

 	  me.timeline = function() {
      var container = document.getElementById('timeline');
      var items = new vis.DataSet([]);
      // visjs doesn't do recurring items, so we have to use moment-recur to generate some.  
      var recurring = moment().recur("2016-08-01", "2016-08-31").every(1).days();
      x = 1;
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var _dates = recurring.all("YYYY-MM-DD");
      for (index = 0; index < _dates.length; ++index) {
        _date = _dates[index];
        _rand = getRandomInt(0,6);
        items.add({id: 1000+x, content: 'P Richards', title: 'Standard', start: _date+'T'+(10+_rand)+':00', end: _date+'T'+(16+_rand)+':00', className: 'green-light', group: 1, rate: '6.50', shift_type: '1', shift_lock: '0'});
        items.add({id: 2000+x, content: 'R Perkins', title: 'Standard', start: _date+'T0'+(2+_rand)+':00', end: _date+'T'+(12+_rand)+':00', className: 'green-light', group: 1, rate: '6.50', shift_type: '1', shift_lock: '0'});
        items.add({id: 3000+x, content: 'S Gruber', title: 'Standard', start: _date+'T0'+(3+_rand)+':00', end: _date+'T'+(10+_rand)+':00', className: 'green-light', group: 1, rate: '12.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 4000+x, content: 'W Brown', title: 'Holiday', start: _date+'T09:00', end: _date+'T17:00', className: 'yellow-light', group: 1, rate: '0', shift_type: '3', shift_lock: '0'});
        items.add({id: 5000+x, content: 'C Peeters', title: 'Standard', start: _date+'T12:30', end: _date+'T17:00', className: 'green-light', group: 1, rate: '9.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 6000+x, content: 'A Kuznetsov', title: 'Overtime', start: _date+'T17:00', end: _date+'T20:00', className: 'red-light', group: 1, rate: '13.50', shift_type: '2', shift_lock: '0'});
        items.add({id: 7000+x, content: 'R Delgado', title: 'Standard', start: _date+'T12:00', end: _date+'T19:00', className: 'green-light', group: 2, rate: '9.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 8000+x, content: 'B Smith', title: 'Standard', start: _date+'T'+(10+_rand)+':00', end: _date+'T'+(18+_rand)+':00', className: 'green-light', group: 2, rate: '9.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 9000+x, content: 'J Walker', title: 'Standard', start: _date+'T15:30', end: _date+'T18:00', className: 'green-light', group: 2, rate: '9.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 10000+x, content: 'K Melnyk', title: 'Overtime', start: _date+'T0'+(0+_rand)+':00', end: _date+'T'+(10+_rand)+':00', className: 'red-light', group: 2, rate: '13.50', shift_type: '2', shift_lock: '0'});
        items.add({id: 11000+x, content: 'P Harrison', title: 'Standard', start: _date+'T09:00', end: _date+'T17:00', className: 'green-light', group: 2, rate: '9.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 12000+x, content: 'P Murphy', title: 'Standard', start: _date+'T09:00', end: _date+'T17:00', className: 'green-light', group: 2, rate: '12.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 13000+x, content: 'J Smith', title: 'Sick', start: _date+'T'+(12+_rand)+':00', end: _date+'T'+(20+_rand)+':00', className: 'bronze-light', group: 3, rate: '3.00', shift_type: '4', shift_lock: '0'});
        items.add({id: 14000+x, content: 'B Farrugia', title: 'Holiday', start: _date+'T09:00', end: _date+'T17:00', className: 'yellow-light', group: 3, rate: '0', shift_type: '3', shift_lock: '0'});
        items.add({id: 15000+x, content: 'T Jones', title: 'Standard', start: _date+'T06:00', end: _date+'T14:00', className: 'green-light', group: 3, rate: '9.00', shift_type: '1', shift_lock: '0'});
        items.add({id: 16000+x, content: 'J MacDonald', title: 'Standard', start: _date+'T14:00', end: _date+'T22:00', className: 'green-light', group: 3, rate: '9.00', shift_type: '1', shift_lock: '0'});
        x ++;
      }
      var groups = new vis.DataSet([
        {id: 1, content: '<span class="text-red">Ops</span>'},
        {id: 2, content: '<span class="text-blue">Sales</span>'},
        {id: 3, content: '<span class="text-green">IT</span>'}
      ]);
      var options = {
        start: '2016-08-15T08:00',
        end: '2016-08-15T20:00',
        min: '2016-08-01',
        max: '2016-08-31',
        orientation: 'top',
        zoomMin: 1000*60*60*24, // 1 day
        zoomMax: 1000*60*60*24*31, // 1 month
        editable: true,
        showCurrentTime: true,
        order: customOrder,
        margin: {
          item : {
            horizontal : 0
          }
        },
        // zoomKey: 'ctrlKey',
        onMove: function (item, callback) {
          var title = 'Do you really want to move the item to\n' +
              'start: ' + item.start + '\n' +
              'end: ' + item.end + '?';
        },
        onUpdate: function (item, callback) {
          // First prepare the modal content form with our data
          $('#rota-modal').find('#shift_name').val(item.content);
          $('#rota-modal').find('#shift_type').val(item.shift_type);
          $('#rota-modal').find('#shift_start').val(item.start);
          $('#rota-modal').find('#shift_end').val(item.end);
          $('#rota-modal').find('#shift_rate').val(item.rate);
          $('#rota-modal').find('#shift_lock').val(item.lock);
          $('#rota-modal').addClass('modal-'+item.className.replace('-light', ''));
          // Call the modal
          parent.run('modal_custombox', {data: {
            effect: 'fadein', 
            target: '#rota-modal',
            overlay: false,
            title: 'Shift for: ' + item.content,
            callback_function: function() {
              $('#rota-modal').removeClass('modal-'+item.className.replace('-light', ''));
              _name = $('#rota-modal').find('#shift_name').val();
              items.update({id: item.id, content: _name});
            }
          }});
        },
      };
      var timeline = new vis.Timeline(container, items, groups, options);
      window.timeline = timeline;
    };
    
    function customOrder (a, b) {
      // order by id
      return a.id - b.id;
    }

    me.change_range = function() {
        var range = timeline.getWindow();
        var current_interval = range.end - range.start;
        var current_midpoint = range.start.valueOf() + (current_interval / 2);
        var period = $('#time_period').val();
        var new_interval = ((86400 * 1000) * period) / 2;
        timeline.setWindow({
          start: current_midpoint - new_interval,
          end: current_midpoint + new_interval,
        });
    };
    
    me.datepicker = function() {
        $('#timeline_datepicker').datetimepicker({
            format: 'YYYY-MM-DD',
            useCurrent: false,
            defaultDate: '2016-08-21',
            minDate: '2016-08-01',
            maxDate: '2016-08-31',
            allowInputToggle: true
        });
        $("#timeline_datepicker").on("dp.change", function (e) {
            e.date.set({'hour': 12});
            timeline.moveTo(e.date, { animation: {duration: 2000, easingFunction: 'easeInQuad'}});
        });
      };
      
      me.onclicks = function() {
        $('.custombox_close').on('click', function() { Custombox.close(); });
      };
      
      me.onchanges = function() {
        $('#time_period').change(function() { Theme.pages.change_range(); });
      };
      
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();