/* data-fullcalendar page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-fullcalendar page javascript');
        me.calendar_basic();
        me.calendar_day();
        me.calendar_coloured();
        me.calendar_i18n();
        me.calendar_draggable();
        me.calendar_backgroundevents();
    };

    me.calendar_basic = function() {
	    $('#calendar_basic').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2016-01-12',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			eventRender: function(event, element) {
				$(element).addTouch();
			},
			events: [
				{
					title: 'All Day Event',
					start: '2016-01-01'
				},
				{
					title: 'Long Event',
					start: '2016-01-03',
					end: '2016-01-06'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2016-01-08T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2016-01-15T16:00:00'
				},
				{
					title: 'Conference',
					start: '2016-01-11',
					end: '2016-01-13'
				},
				{
					title: 'Meeting',
					start: '2016-01-12T10:30:00',
					end: '2016-01-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2016-01-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2016-01-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2016-01-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2016-01-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2016-01-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2016-01-27',
					end: '2016-01-29'
				},
				{
					start: '2016-01-31',
					color: '#cedceb',
					rendering: 'background'
				},
			]
		});
    };
    
    me.calendar_coloured = function() {
	    $('#calendar_coloured').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2016-07-12',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			eventRender: function(event, element) {
				$(element).addTouch();
			},
			events: [
				{
					title: '.brand1',
					start: '2016-06-26',
					className: 'brand1'
				},
				{
					title: '.brand2',
					start: '2016-06-27',
					className: 'brand2'
				},
				{
					title: '.blue',
					start: '2016-06-28',
					className: 'blue'
				},
				{
					title: '.yellow',
					start: '2016-06-29',
					className: 'yellow'
				},
				{
					title: '.red',
					start: '2016-06-30',
					className: 'red'
				},
				{
					title: '.green',
					start: '2016-07-01',
					className: 'green'
				},
				{
					title: '.orange',
					start: '2016-07-02',
					className: 'orange'
				},
				{
					title: '.purple',
					start: '2016-07-03',
					className: 'purple'
				},
				{
					title: '.gold',
					start: '2016-07-04',
					className: 'gold'
				},
				{
					title: '.bronze',
					start: '2016-07-05',
					className: 'bronze'
				},
				{
					title: '.silver',
					start: '2016-07-06',
					className: 'silver'
				},
				{
					title: '.grey',
					start: '2016-07-07',
					className: 'grey'
				},
				{
					start: '2016-07-10',
					className: 'brand1',
					rendering: 'background'
				},
				{
					start: '2016-07-11',
					className: 'brand2',
					rendering: 'background'
				},
				{
					start: '2016-07-12',
					className: 'blue',
					rendering: 'background'
				},
				{
					start: '2016-07-13',
					className: 'yellow',
					rendering: 'background'
				},
				{
					start: '2016-07-14',
					className: 'red',
					rendering: 'background'
				},
				{
					start: '2016-07-15',
					className: 'green',
					rendering: 'background'
				},
				{
					start: '2016-07-16',
					className: 'orange',
					rendering: 'background'
				},
				{
					start: '2016-07-17',
					className: 'purple',
					rendering: 'background'
				},
				{
					start: '2016-07-18',
					className: 'gold',
					rendering: 'background'
				},
				{
					start: '2016-07-19',
					className: 'bronze',
					rendering: 'background'
				},
				{
					start: '2016-07-20',
					className: 'silver',
					rendering: 'background'
				},
				{
					start: '2016-07-21',
					className: 'grey',
					rendering: 'background'
				},
				{
					title: '.brand1',
					start: '2016-07-10',
					className: 'fc-background'
				},
				{
					title: '.brand2',
					start: '2016-07-11',
					className: 'fc-background'
				},
				{
					title: '.blue',
					start: '2016-07-12',
					className: 'fc-background'
				},
				{
					title: '.yellow',
					start: '2016-07-13',
					className: 'fc-background'
				},
				{
					title: '.red',
					start: '2016-07-14',
					className: 'fc-background'
				},
				{
					title: '.green',
					start: '2016-07-15',
					className: 'fc-background'
				},
				{
					title: '.orange',
					start: '2016-07-16',
					className: 'fc-background'
				},
				{
					title: '.purple',
					start: '2016-07-17',
					className: 'fc-background'
				},
				{
					title: '.gold',
					start: '2016-07-18',
					className: 'fc-background'
				},
				{
					title: '.bronze',
					start: '2016-07-19',
					className: 'fc-background'
				},
				{
					title: '.silver',
					start: '2016-07-20',
					className: 'fc-background'
				},
				{
					title: '.grey',
					start: '2016-07-21',
					className: 'fc-background'
				},
				{
					start: '2016-07-24',
					className: 'brand1-light',
					rendering: 'background'
				},
				{
					start: '2016-07-25',
					className: 'brand2-light',
					rendering: 'background'
				},
				{
					start: '2016-07-26',
					className: 'blue-light',
					rendering: 'background'
				},
				{
					start: '2016-07-27',
					className: 'yellow-light',
					rendering: 'background'
				},
				{
					start: '2016-07-28',
					className: 'red-light',
					rendering: 'background'
				},
				{
					start: '2016-07-29',
					className: 'green-light',
					rendering: 'background'
				},
				{
					start: '2016-07-30',
					className: 'orange-light',
					rendering: 'background'
				},
				{
					start: '2016-07-31',
					className: 'purple-light',
					rendering: 'background'
				},
				{
					start: '2016-08-01',
					className: 'gold-light',
					rendering: 'background'
				},
				{
					start: '2016-08-02',
					className: 'bronze-light',
					rendering: 'background'
				},
				{
					start: '2016-08-03',
					className: 'silver-light',
					rendering: 'background'
				},
				{
					start: '2016-08-04',
					className: 'grey-light',
					rendering: 'background'
				},
				{
					start: '2016-07-24',
					title: '.brand1-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-25',
					title: '.brand2-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-26',
					title: '.blue-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-27',
					title: '.yellow-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-28',
					title: '.red-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-29',
					title: '.green-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-30',
					title: '.orange-light',
					className: 'fc-background'
				},
				{
					start: '2016-07-31',
					title: '.purple-light',
					className: 'fc-background'
				},
				{
					start: '2016-08-01',
					title: '.gold-light',
					className: 'fc-background'
				},
				{
					start: '2016-08-02',
					title: '.bronze-light',
					className: 'fc-background'
				},
				{
					start: '2016-08-03',
					title: '.silver-light',
					className: 'fc-background'
				},
				{
					start: '2016-08-04',
					title: '.grey-light',
					className: 'fc-background'
				},
			]
		});
    };
    
    me.calendar_i18n = function() {
      	var currentLangCode = 'en';
		// build the language selector's options
		$.each($.fullCalendar.langs, function(langCode) {
			$('#lang-selector').append(
				$('<option/>')
					.attr('value', langCode)
					.prop('selected', langCode == currentLangCode)
					.text(langCode)
			);
		});
		// rerender the calendar when the selected option changes
		$('#lang-selector').on('change', function() {
			if (this.value) {
				currentLangCode = this.value;
				$('#calendar_i18n').fullCalendar('destroy');
				renderCalendar();
			}
		});
		function renderCalendar() {
			$('#calendar_i18n').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
				},
				lang: currentLangCode,
				buttonIcons: false, // show the prev/next text
				weekNumbers: true,
				editable: true,
				eventRender: function(event, element) {
					$(element).addTouch();
				},
				eventLimit: true, // allow "more" link when too many events
			});
		}
		renderCalendar();
    };
    
    me.calendar_day = function() {
      	$('#calendar_day').fullCalendar({
			header: {
				left: 'prev,next',
				center: 'title',
				right: 'today'
			},
			defaultDate: '2016-11-04',
			titleFormat: 'D MMMM YYYY',
			defaultView: 'agendaDay',
			businessHours: true, // display business hours
			editable: true,
			eventRender: function(event, element) {
				$(element).addTouch();
			},
			events: [
				{
					title: 'Breakfast with CEO',
					start: '2016-11-04T07:00',
					end: '2016-11-04T08:00',
					constraint: 'businessHours',
					className: 'gold'
				},
				{
					title: 'Meeting with Paul',
					start: '2016-11-04T09:00:00',
					end: '2016-11-04T09:50:00',
					constraint: 'businessHours',
					className: 'green'
				},
				{
					title: 'Conference in Yew Suite',
					start: '2016-11-04T10:30:00',
					end: '2016-11-04T15:30:00',
					className: 'blue'
				},
			]
		});
    };
    
    me.calendar_backgroundevents = function() {
      	$('#calendar_backgroundevents').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2016-01-13',
			businessHours: true, // display business hours
			editable: true,
			eventRender: function(event, element) {
				$(element).addTouch();
			},
			events: [
				{
					title: 'Business Lunch',
					start: '2016-01-04T13:00:00',
					constraint: 'businessHours',
					className: 'gold'
				},
				{
					title: 'Meeting',
					start: '2016-01-13T11:00:00',
					constraint: 'availableForMeeting', // defined below
					className: 'green'
				},
				{
					title: 'Conference',
					start: '2016-01-18',
					end: '2016-01-20',
					className: 'blue'
				},
				{
					title: 'Party',
					start: '2016-01-30T20:00:00',
					className: 'purple'
				},
				// green areas where "Meeting" must be dropped
				{
					id: 'availableForMeeting',
					start: '2016-01-11',
					end: '2016-01-11',
					rendering: 'background',
					className: 'green'
				},
				{
					id: 'availableForMeeting',
					start: '2016-01-13',
					end: '2016-01-13',
					rendering: 'background',
					className: 'green'
				},
				// red areas where no events can be dropped
				{
					start: '2016-01-24',
					end: '2016-01-28',
					overlap: false,
					rendering: 'background',
					className: 'red-light'
				},
				{
					start: '2016-01-06',
					end: '2016-01-08',
					overlap: false,
					rendering: 'background',
					className: 'red-light'
				}
			]
		});
    };
    
    me.calendar_draggable = function() {
      	/* initialize the external events
		-----------------------------------------------------------------*/
		$('#external-events .fc-event').each(function() {
			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				className: $(this).attr('class'), // use the element's class as the className
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});
			$(this).addTouch();
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
		});
		/* initialize the calendar
		-----------------------------------------------------------------*/
		$('#calendar_draggable').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function() {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			},
			eventRender: function(event, element) {
				$(element).addTouch();
			}
		});
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();