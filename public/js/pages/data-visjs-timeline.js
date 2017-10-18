/* data-visjs-timeline page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-visjs-timeline page javascript');
        me.timeline_basic();
        me.timeline_styled();
        me.timeline_coloured();
        me.timeline_col_groups();
        me.timeline_program();
        me.timeline_groups();
        me.timeline_editing();
        me.timeline_worldcup();
        me.timeline_customstyle();
    };

 	  me.timeline_basic = function() {
 	    // DOM element where the Timeline will be attached
      var container = document.getElementById('timeline_basic');
      // Create a DataSet (allows two way data-binding)
      var items = new vis.DataSet([
        {id: 1, content: 'item 1 (stamp)', start: '2016-04-14'},
        {id: 2, content: 'item 2 (range)', start: '2016-04-14', end: '2016-04-17'},
        {id: 3, content: 'item 3 (stamp)', start: '2016-04-15'},
        {id: 4, content: 'item 4 (stamp)', start: '2016-04-18T12:00'},
        {id: 5, content: 'item 5 (range)', start: '2016-04-18', end: '2016-04-20'},
        {id: 6, content: 'item 6 (point)', start: '2016-04-20', type:'point'},
        {id: 7, content: 'item 7 (point)', start: '2016-04-20T12:00', type:'point'},
        {id: 8, content: 'item 8 (point)', start: '2016-04-21', type:'point'},
      ]);
      // Configuration for the Timeline
      var options = {
        start: '2016-04-13',
        end: '2016-04-22',
        editable: true,
        showCurrentTime: true,
        zoomKey: 'ctrlKey'
      };
      // Create a Timeline
      var timeline = new vis.Timeline(container, items, options);
    };

 	  me.timeline_styled = function() {
      var container = document.getElementById('timeline_styled');
      var items = new vis.DataSet([
        {id: 1, content: 'item 1 (stamp)', start: '2016-04-14'},
        {id: 2, content: 'item 2 (range)', start: '2016-04-14', end: '2016-04-17'},
        {id: 3, content: 'item 3 (stamp)', start: '2016-04-15'},
        {id: 4, content: 'item 4 (stamp)', start: '2016-04-18T12:00'},
        {id: 5, content: 'item 5 (range)', start: '2016-04-18', end: '2016-04-20'},
        {id: 6, content: 'item 6 (point)', start: '2016-04-20', type:'point'},
        {id: 7, content: 'item 7 (point)', start: '2016-04-20T12:00', type:'point'},
        {id: 8, content: 'item 8 (point)', start: '2016-04-21', type:'point'},
      ]);
      var options = {
        start: '2016-04-13',
        end: '2016-04-22',
        editable: true,
        showCurrentTime: true,
        zoomKey: 'ctrlKey'
      };
      var timeline = new vis.Timeline(container, items, options);
    };
    
 	  me.timeline_coloured = function() {
      var container = document.getElementById('timeline_coloured');
      var items = new vis.DataSet([
        {id: 1, content: '.brand1', start: '2016-04-13T12:00', end: '2016-04-15T00:00', className: 'brand1', group: 1},
        {id: 2, content: '.brand2', start: '2016-04-15T12:00', end: '2016-04-17T00:00', className: 'brand2', group: 1},
        {id: 3, content: '.blue', start: '2016-04-17T12:00', end: '2016-04-19T00:00', className: 'blue', group: 1},
        {id: 4, content: '.yellow', start: '2016-04-19T12:00', end: '2016-04-21T00:00', className: 'yellow', group: 1},
        {id: 5, content: '.red', start: '2016-04-21T12:00', end: '2016-04-23T00:00', className: 'red', group: 1},
        {id: 6, content: '.green', start: '2016-04-23T12:00', end: '2016-04-25T00:00', className: 'green', group: 1},
        
        {id: 7, content: '.orange', start: '2016-04-13T00:00', end: '2016-04-14T12:00', className: 'orange', group: 2},
        {id: 8, content: '.purple', start: '2016-04-15T00:00', end: '2016-04-16T12:00', className: 'purple', group: 2},
        {id: 9, content: '.gold', start: '2016-04-17T00:00', end: '2016-04-18T12:00', className: 'gold', group: 2},
        {id: 10, content: '.bronze', start: '2016-04-19T00:00', end: '2016-04-20T12:00', className: 'bronze', group: 2},
        {id: 11, content: '.silver', start: '2016-04-21T00:00', end: '2016-04-22T12:00', className: 'silver', group: 2},
        {id: 12, content: '.grey', start: '2016-04-23T00:00', end: '2016-04-24T12:00', className: 'grey', group: 2},
        
        {id: 13, content: '.brand1-light', start: '2016-04-13T12:00', end: '2016-04-15T00:00', className: 'brand1-light', group: 3},
        {id: 14, content: '.brand2-light', start: '2016-04-15T12:00', end: '2016-04-17T00:00', className: 'brand2-light', group: 3},
        {id: 15, content: '.blue-light', start: '2016-04-17T12:00', end: '2016-04-19T00:00', className: 'blue-light', group: 3},
        {id: 16, content: '.yellow-light', start: '2016-04-19T12:00', end: '2016-04-21T00:00', className: 'yellow-light', group: 3},
        {id: 17, content: '.red-light', start: '2016-04-21T12:00', end: '2016-04-23T00:00', className: 'red-light', group: 3},
        {id: 18, content: '.green-light', start: '2016-04-23T12:00', end: '2016-04-25T00:00', className: 'green-light', group: 3},
        
        {id: 19, content: '.orange-light', start: '2016-04-13T00:00', end: '2016-04-14T12:00', className: 'orange-light', group: 4},
        {id: 20, content: '.purple-light', start: '2016-04-15T00:00', end: '2016-04-16T12:00', className: 'purple-light', group: 4},
        {id: 21, content: '.gold-light', start: '2016-04-17T00:00', end: '2016-04-18T12:00', className: 'gold-light', group: 4},
        {id: 22, content: '.bronze-light', start: '2016-04-19T00:00', end: '2016-04-20T12:00', className: 'bronze-light', group: 4},
        {id: 23, content: '.silver-light', start: '2016-04-21T00:00', end: '2016-04-22T12:00', className: 'silver-light', group: 4},
        {id: 24, content: '.grey-light', start: '2016-04-23T00:00', end: '2016-04-24T12:00', className: 'grey-light', group: 4},
        
        {id: 25, content: '.brand1 (point)', start: '2016-04-13T12:00', type:'point', className: 'brand1', group: 5},
        {id: 26, content: '.brand2 (point)', start: '2016-04-15T12:00', type:'point', className: 'brand2', group: 5},
        {id: 27, content: '.blue (point)', start: '2016-04-17T12:00', type:'point', className: 'blue', group: 5},
        {id: 28, content: '.yellow (point)', start: '2016-04-19T12:00', type:'point', className: 'yellow', group: 5},
        {id: 29, content: '.red (point)', start: '2016-04-21T12:00', type:'point', className: 'red', group: 5},
        {id: 30, content: '.green (point)', start: '2016-04-23T12:00', type:'point', className: 'green', group: 5},
        
        {id: 31, content: '.brand1-light', start: '2016-04-14T00:00', type:'point', className: 'brand1-light', group: 5},
        {id: 32, content: '.brand2-light', start: '2016-04-16T00:00', type:'point', className: 'brand2-light', group: 5},
        {id: 33, content: '.blue-light', start: '2016-04-18T00:00', type:'point', className: 'blue-light', group: 5},
        {id: 34, content: '.yellow-light', start: '2016-04-20T00:00', type:'point', className: 'yellow-light', group: 5},
        {id: 35, content: '.red-light', start: '2016-04-22T00:00', type:'point', className: 'red-light', group: 5},
        {id: 36, content: '.green-light', start: '2016-04-24T00:00', type:'point', className: 'green-light', group: 5},
      ]);
      var groups = new vis.DataSet([
        {id: 1, content: '1'},
        {id: 2, content: '2'},
        {id: 3, content: '3'},
        {id: 4, content: '4'},
        {id: 5, content: '5'}
      ]);
      var options = {
        start: '2016-04-13',
        end: '2016-04-25',
        editable: true,
        showCurrentTime: true,
        orientation: 'top',
        margin: {
          item : {
            horizontal : 0
          }
        },
        zoomKey: 'ctrlKey'
      };
      var timeline = new vis.Timeline(container, items, groups, options);
    };

 	  me.timeline_col_groups = function() {
      var container = document.getElementById('timeline_col_groups');
      var items = new vis.DataSet([
        {id: 1, content: 'item 1', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 1},
        {id: 2, content: 'item 2', start: '2016-04-16T12:00', end: '2016-04-19T00:00', group: 1},
        {id: 3, content: 'item 3', start: '2016-04-21T12:00', end: '2016-04-23T00:00', group: 1},
        
        {id: 4, content: 'item 4', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 2},
        {id: 5, content: 'item 5', start: '2016-04-18T00:00', end: '2016-04-20T12:00', group: 2},
        
        {id: 6, content: 'item 6', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 3},
        {id: 7, content: 'item 7', start: '2016-04-16T00:00', end: '2016-04-18T00:00', group: 3},
        {id: 8, content: 'item 8', start: '2016-04-20T12:00', end: '2016-04-22T00:00', group: 3},
        
        {id: 9, content: 'item 9', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 4},
        {id: 10, content: 'item 10', start: '2016-04-17T00:00', end: '2016-04-19T12:00', group: 4},
        
        {id: 11, content: 'item 11', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 5},
        {id: 12, content: 'item 12', start: '2016-04-17T12:00', end: '2016-04-19T00:00', group: 5},
        {id: 13, content: 'item 13', start: '2016-04-21T12:00', end: '2016-04-23T00:00', group: 5},
        
        {id: 14, content: 'item 14', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 6},
        {id: 15, content: 'item 15', start: '2016-04-18T00:00', end: '2016-04-20T12:00', group: 6},
        
        {id: 16, content: 'item 16', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 7},
        {id: 17, content: 'item 17', start: '2016-04-16T12:00', end: '2016-04-18T00:00', group: 7},
        {id: 18, content: 'item 18', start: '2016-04-22T12:00', end: '2016-04-24T00:00', group: 7},
        
        {id: 19, content: 'item 19', start: '2016-04-13T12:00', end: '2016-04-15T00:00', group: 8},
        {id: 20, content: 'item 20', start: '2016-04-19T00:00', end: '2016-04-22T12:00', group: 8},
      ]);
      var groups = new vis.DataSet([
        {id: 1, content: '.blue-lighter', className: 'blue-lighter'},
        {id: 2, content: '.yellow-lighter', className: 'yellow-lighter'},
        {id: 3, content: '.red-lighter', className: 'red-lighter'},
        {id: 4, content: '.green-lighter', className: 'green-lighter'},
        {id: 5, content: '.orange-lighter', className: 'orange-lighter'},
        {id: 6, content: '.purple-lighter', className: 'purple-lighter'},
        {id: 7, content: '.gold-lighter', className: 'gold-lighter'},
        {id: 8, content: '.bronze-lighter', className: 'bronze-lighter'}
      ]);
      var options = {
        start: '2016-04-13',
        end: '2016-04-25',
        editable: true,
        showCurrentTime: true,
        margin: {
          item : {
            horizontal : 0
          }
        },
        zoomKey: 'ctrlKey'
      };
      var timeline = new vis.Timeline(container, items, groups, options);
    };

 	  me.timeline_program = function() {
      // create a dataset with items
      // we specify the type of the fields `start` and `end` here to be strings
      // containing an ISO date. The fields will be outputted as ISO dates
      // automatically getting data from the DataSet via items.get().
      var items = new vis.DataSet({
        type: { start: 'ISODate', end: 'ISODate' }
      });
      // add items to the DataSet
      items.add([
        {id: 1, content: 'item 1<br>start', start: '2016-01-23'},
        {id: 2, content: 'item 2', start: '2016-01-18'},
        {id: 3, content: 'item 3', start: '2016-01-21'},
        {id: 4, content: 'item 4', start: '2016-01-19', end: '2016-01-24'},
        {id: 5, content: 'item 5', start: '2016-01-28', type:'point'},
        {id: 6, content: 'item 6', start: '2016-01-26'}
      ]);
      var container = document.getElementById('timeline_program');
      var options = {
        start: '2016-01-10',
        end: '2016-02-10',
        editable: true,
        showCurrentTime: true,
        zoomKey: 'ctrlKey'
      };
      var timeline = new vis.Timeline(container, items, options);
      document.getElementById('window1').onclick = function() {
        timeline.setWindow('2016-01-01', '2016-04-01');
      };
      document.getElementById('fit').onclick = function() {
        timeline.fit();
      };
      document.getElementById('select').onclick = function() {
        timeline.setSelection([5, 6], {
          focus: true
        });
      };
      document.getElementById('focus1').onclick = function() {
        timeline.focus(2);
      };
      document.getElementById('focus2').onclick = function() {
        timeline.focus([5, 6], {animation: {duration: 3000, easingFunction: 'linear'}}); // ms
      };
      document.getElementById('focus3').onclick = function() {
        var selection = timeline.getSelection();
        timeline.focus(selection);
      };
      document.getElementById('moveTo').onclick = function() {
        timeline.moveTo('2016-02-01');
      };
    };
    
    me.timeline_groups = function() {
       var items = new vis.DataSet([
        {id: 'A', content: 'Period A', start: '2016-01-16', end: '2016-01-22', type: 'background', group: 1},
        {id: 'B', content: 'Period B', start: '2016-01-23', end: '2016-01-26', type: 'background', group: 2},
        {id: 'C', content: 'Period C', start: '2016-01-27', end: '2016-02-03', type: 'background'}, // no group
        {id: 'D', content: 'Period D', start: '2016-01-14', end: '2016-01-20', type: 'background', group: 'non-existing'},
        {id: 1, content: 'item 1<br>start', start: '2016-01-30', group: 1},
        {id: 2, content: 'item 2', start: '2016-01-18', group: 1},
        {id: 3, content: 'item 3', start: '2016-01-21', group: 2},
        {id: 4, content: 'item 4', start: '2016-01-17', end: '2016-01-21', group: 2},
        {id: 5, content: 'item 5', start: '2016-01-28', type:'point', group: 2},
        {id: 6, content: 'item 6', start: '2016-01-25', group: 2}
      ]);
      var groups = new vis.DataSet([
        {id: 1, content: 'Group 1'},
        {id: 2, content: 'Group 2'}
      ]);
      var container = document.getElementById('timeline_groups');
      var options = {
        start: '2016-01-10',
        end: '2016-02-10',
        editable: true,
        zoomKey: 'ctrlKey'
      };
      var timeline = new vis.Timeline(container, items, groups, options);
    };
    
    me.timeline_editing = function() {
      // note that months are zero-based in the JavaScript Date object, so month 3 is April
      var items = new vis.DataSet([
        {id: 1, content: 'item 1', start: new Date(2016, 3, 20)},
        {id: 2, content: 'item 2', start: new Date(2016, 3, 14)},
        {id: 3, content: 'item 3', start: new Date(2016, 3, 18)},
        {id: 4, content: 'item 4', start: new Date(2016, 3, 16), end: new Date(2016, 3, 19)},
        {id: 5, content: 'item 5', start: new Date(2016, 3, 25)},
        {id: 6, content: 'item 6', start: new Date(2016, 3, 27)}
      ]);
      var min = new Date(2016, 3, 1); // 1 april
      var max = new Date(2016, 3, 30, 23, 59, 59); // 30 april
      var container = document.getElementById('timeline_editing');
      var options = {
        editable: true,
        zoomKey: 'ctrlKey',
        onAdd: function (item, callback) {
          prettyPrompt('Add item', 'Enter text content for new item:', item.content, '#3b973b', function (value) {
            if (value) {
              item.content = value;
              callback(item); // send back adjusted new item
            }
            else {
              callback(null); // cancel item creation
            }
          });
        },
        onMove: function (item, callback) {
          var title;
          if (item.end) {
            title = 'Do you really want to move the item to\n' +
                'start: ' + item.start + '\n' +
                'end: ' + item.end + '?';
          } else {
            title = 'Do you really want to move the item to\n' + item.start + '?';
          }
          prettyConfirm('Move item', title, '#d59337', function (ok) {
            if (ok) {
              callback(item); // send back item as confirmation (can be changed)
            }
            else {
              callback(null); // cancel editing item
            }
          });
        },
        onMoving: function (item, callback) {
          if (item.start < min) item.start = min;
          if (item.start > max) item.start = max;
          if (item.end   > max) item.end   = max;
    
          callback(item); // send back the (possibly) changed item
        },
        onUpdate: function (item, callback) {
          prettyPrompt('Update item', 'Edit item\'s text:', item.content, '#2a5989', function (value) {
            if (value) {
              item.content = value;
              callback(item); // send back adjusted item
            }
            else {
              callback(null); // cancel updating the item
            }
          });
        },
        onRemove: function (item, callback) {
          prettyConfirm('Remove item', 'Do you really want to remove item ' + item.content + '?', '#d59337', function (ok) {
            if (ok) {
              callback(item); // confirm deletion
            }
            else {
              callback(null); // cancel deletion
            }
          });
        }
      };
      var timeline = new vis.Timeline(container, items, options);
      items.on('*', function (event, properties) {
        logEvent(event, properties);
      });
      function logEvent(event, properties) {
        var log = document.getElementById('editing_log');
        var msg = document.createElement('div');
        msg.innerHTML = 'event=' + JSON.stringify(event) + ', ' +
            'properties=' + JSON.stringify(properties);
        if (log.firstChild) {
          log.insertBefore(msg, log.firstChild);
        } else {
          log.appendChild(msg);
        }
      }
      function prettyConfirm(title, text, buttonColor, callback) {
        swal({
          title: title,
          text: text,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: buttonColor
        }, callback);
      }
      function prettyPrompt(title, text, inputValue, buttonColor, callback) {
        swal({
          title: title,
          text: text,
          type: 'input',
          showCancelButton: true,
          confirmButtonColor: buttonColor,
          inputValue: inputValue
        }, callback);
      }
    };
    
    me.timeline_worldcup = function() {
      // create a handlebars template
      var source   = document.getElementById('item-template').innerHTML;
      var template = Handlebars.compile(document.getElementById('item-template').innerHTML);
      // DOM element where the Timeline will be attached
      var container = document.getElementById('timeline_worldcup');
      // Create a DataSet (allows two way data-binding)
      var items = new vis.DataSet([
        // round of 16
        {
          player1: 'Brazil',
          abbr1: 'br',
          score1: '1 (3)',
          player2: 'Chile',
          abbr2: 'cl',
          score2: '1 (2)',
          description: 'round of 16',
          start: '2014-06-28 13:00'
        },
        {
          player1: 'Colombia',
          abbr1: 'co',
          score1: 2,
          player2: 'Uruguay',
          abbr2: 'uy',
          score2: 0,
          description: 'round of 16',
          start: '2014-06-28 17:00'
        },
        {
          player1: 'Netherlands',
          abbr1: 'nl',
          score1: 2,
          player2: 'Mexico',
          abbr2: 'mx',
          score2: 1,
          description: 'round of 16',
          start: '2014-06-29 13:00'
        },
        {
          player1: 'Costa Rica',
          abbr1: 'cr',
          score1: '1 (5)',
          player2: 'Greece',
          abbr2: 'gr',
          score2: '1 (3)',
          description: 'round of 16',
          start: '2014-06-29 17:00'
        },
        {
          player1: 'France',
          abbr1: 'fr',
          score1: 2,
          player2: 'Nigeria',
          abbr2: 'ng',
          score2: 0,
          description: 'round of 16',
          start: '2014-06-30 13:00'
        },
        {
          player1: 'Germany',
          abbr1: 'de',
          score1: 2,
          player2: 'Algeria',
          abbr2: 'dz',
          score2: 1,
          description: 'round of 16',
          start: '2014-06-30 17:00'
        },
        {
          player1: 'Argentina',
          abbr1: 'ar',
          score1: 1,
          player2: 'Switzerland',
          abbr2: 'ch',
          score2: 0,
          description: 'round of 16',
          start: '2014-07-01 13:00'
        },
        {
          player1: 'Belgium',
          abbr1: 'be',
          score1: 2,
          player2: 'USA',
          abbr2: 'us',
          score2: 1,
          description: 'round of 16',
          start: '2014-07-01 17:00'
        },
        // quarter-finals
        {
          player1: 'France',
          abbr1: 'fr',
          score1: 0,
          player2: 'Germany',
          abbr2: 'de',
          score2: 1,
          description: 'quarter-finals',
          start: '2014-07-04 13:00'
        },
        {
          player1: 'Brazil',
          abbr1: 'br',
          score1: 2,
          player2: 'Colombia',
          abbr2: 'co',
          score2: 1,
          description: 'quarter-finals',
          start: '2014-07-04 17:00'
        },
        {
          player1: 'Argentina',
          abbr1: 'ar',
          score1: 1,
          player2: 'Belgium',
          abbr2: 'be',
          score2: 0,
          description: 'quarter-finals',
          start: '2014-07-05 13:00'
        },
        {
          player1: 'Netherlands',
          abbr1: 'nl',
          score1: '0 (4)',
          player2: 'Costa Rica',
          abbr2: 'cr',
          score2: '0 (3)',
          description: 'quarter-finals',
          start: '2014-07-05 17:00'
        },
        // semi-finals
        {
          player1: 'Brazil',
          abbr1: 'br',
          score1: 1,
          player2: 'Germany',
          abbr2: 'de',
          score2: 7,
          description: 'semi-finals',
          start: '2014-07-08 17:00'
        },
        {
          player1: 'Netherlands',
          abbr1: 'nl',
          score1: '0 (2)',
          player2: 'Argentina',
          abbr2: 'ar',
          score2: '0 (4)',
          description: 'semi-finals',
          start: '2014-07-09 17:00'
        },
        // final
        {
          player1: 'Germany',
          score1: 1,
          abbr1: 'de',
          player2: 'Argentina',
          abbr2: 'ar',
          score2: 0,
          description: 'final',
          start: '2014-07-13 16:00'
        }
      ]);
      // Configuration for the Timeline
      var options = {
        // specify a template for the items
        template: template,
        zoomKey: 'ctrlKey'
      };
      // Create a Timeline
      var timeline = new vis.Timeline(container, items, options);
    }; 

    me.timeline_customstyle = function() {
      var container = document.getElementById('timeline_customstyle');
      // note that months are zero-based in the JavaScript Date object
      var items = new vis.DataSet([
        {start: new Date(2016,7,23), content: '<div>Conversation</div><img src="assets/plugins/visjs/img/timeline/community-users-icon.png" style="width:32px; height:32px;">'},
        {start: new Date(2016,7,23,23,0,0), content: '<div>Mail from boss</div><img src="assets/plugins/visjs/img/timeline/mail-icon.png" style="width:32px; height:32px;">'},
        {start: new Date(2016,7,24,16,0,0), content: 'Report'},
        {start: new Date(2016,7,26), end: new Date(2016,8,2), content: 'Traject A'},
        {start: new Date(2016,7,28), content: '<div>Memo</div><img src="assets/plugins/visjs/img/timeline/notes-edit-icon.png" style="width:48px; height:48px;">'},
        {start: new Date(2016,7,29), content: '<div>Phone call</div><img src="assets/plugins/visjs/img/timeline/Hardware-Mobile-Phone-icon.png" style="width:32px; height:32px;">'},
        {start: new Date(2016,7,31), end: new Date(2016,8,3), content: 'Traject B'},
        {start: new Date(2016,8,4,12,0,0), content: '<div>Report</div><img src="assets/plugins/visjs/img/timeline/attachment-icon.png" style="width:32px; height:32px;">'}
      ]);
      var options = {
        editable: true,
        margin: {
          item: 20,
          axis: 40
        },
        zoomKey: 'ctrlKey'
      };
      var timeline = new vis.Timeline(container, items, options);
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();