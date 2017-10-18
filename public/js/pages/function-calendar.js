/* function-calendar page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running function-calendar page javascript');
        me.calendar();
    };

    me.calendar = function() {
      	/* initialize the external events
		-----------------------------------------------------------------*/
		$('#external-events .fc-event').each(function() {
			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				className: $(this).data('classname'), // use the element's class as the className
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});
			$(this).addTouch();
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 500  //  original position after the drag
			});
		});
		/* initialize the calendar
		-----------------------------------------------------------------*/
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultView: 'agendaWeek',
			contentHeight: 600,
			// contentHeight: "auto",
			firstDay: 1,
			scrollTime: '08:00',
            businessHours: true, // display business hours
            editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			eventRender: function(event, element) {
				$(element).addTouch();
			},
			eventClick: function(event, element) {
				// First prepare the modal content form with our data
	            $('#event-modal').find('#_title').val(event.title);
	            $('#event-modal').find('#_id').val(event._id);
	            $('#event-modal').addClass('modal-'+event.className);
	            // Call the modal
				parent.run('modal_bsmodal', {data: {
						target: '#event-modal',
						title: 'Event: ' + event.title,
		            	callback_function: function () {
			            	_id = $('#event-modal').find('#_id').val();
			            	_event = $('#calendar').fullCalendar('clientEvents', _id)[0];
			            	_event.title = $('#event-modal').find('#_title').val();
			            	$('#calendar').fullCalendar('updateEvent', _event);
			            	$('#event-modal').removeClass('modal-'+event.className);
			            }
					}
				});
			},
			events: [
			{
				title: 'Morning Status',
				start: '09:00',
				end: '09:55',
				dow: [ 1,2,3,4,5 ],
				constraint: 'businessHours',
				className: 'yellow'
			},
			{
				title: 'Project Alpha',
				start: '15:00',
				end: '17:00',
				dow: [ 1 ],
				constraint: 'businessHours',
				className: 'orange'
			},
			{
				title: 'Weekly Strategy Meeting',
				start: '11:00',
				end: '13:00',
				dow: [ 1 ],
				constraint: 'businessHours',
				className: 'purple'
			},
			{
				title: 'Weekly Security Roundup',
				start: '15:00',
				end: '17:00',
				dow: [ 5 ],
				constraint: 'businessHours',
				className: 'brand2'
			},
			{
				title: 'Review Brochure Visuals',
				start: '11:00',
				end: '12:30',
				dow: [ 5 ],
				constraint: 'businessHours',
				className: 'green'
			},
			{
				title: 'Outstanding Bugs',
				start: '10:00',
				end: '12:00',
				dow: [ 2 ],
				constraint: 'businessHours',
				className: 'red'
			},
			{
				title: 'New Features',
				start: '14:00',
				end: '16:00',
				dow: [ 4 ],
				constraint: 'businessHours',
				className: 'red'
			},
            {
                title: 'Weekend Support Status',
                start: '10:00',
                end: '11:00',
                dow: [0,6],
                className: 'yellow',
            },
			
			{
                title: 'Weekend Support Hours',
			    start: '08:00',
			    end: '18:00',
			    dow: [0,6],
			    rendering: 'background',
			    className: 'purple-light',
			},

			]
		});
    };
    
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();