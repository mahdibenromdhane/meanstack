/* forms-pickers page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running forms-pickers page javascript');
        me.bootstrap_datepicker();
        me.bootstrap_datetimepicker();
        me.bootstrap_daterangepicker();
    };

    me.bootstrap_datepicker = function() {
        $('.input-daterange input').each(function() {
            $(this).datepicker("clearDates");
        });
        $('#datepicker1-1').datepicker();
        $('#datepicker1-1').on("changeDate", function() {
            $('#hidden_input1-1').val(
                $('#datepicker1-1').datepicker('getFormattedDate')
            );
        });
        $('#datepicker1-2').datepicker();
        $('#datepicker1-2').on("changeDate", function() {
            $('#hidden_input1-2').val(
                $('#datepicker1-2').datepicker('getFormattedDate')
            );
        });
        $('#datepicker1-3').datepicker();
        $('#datepicker1-3').on("changeDate", function() {
            $('#hidden_input1-3').val(
                $('#datepicker1-3').datepicker('getFormattedDate')
            );
        });
    };
    
    me.bootstrap_datetimepicker = function() {
        $('[id^="dtpicker4"]').datetimepicker({ 
            defaultDate: moment("2016 03 25 12:00", "YYYY MM DD HH:mm"),
            daysOfWeekDisabled: [5, 6],
            allowInputToggle: true
        });
        $("#dtpicker5-1").on("dp.change", function (e) {
            $('#dtpicker6-1').data("DateTimePicker").minDate(e.date);
        });
        $("#dtpicker6-1").on("dp.change", function (e) {
            $('#dtpicker5-1').data("DateTimePicker").maxDate(e.date);
        });
        $("#dtpicker5-2").on("dp.change", function (e) {
            $('#dtpicker6-2').data("DateTimePicker").minDate(e.date);
        });
        $("#dtpicker6-2").on("dp.change", function (e) {
            $('#dtpicker5-2').data("DateTimePicker").maxDate(e.date);
        });
        $("#dtpicker5-3").on("dp.change", function (e) {
            $('#dtpicker6-3').data("DateTimePicker").minDate(e.date);
        });
        $("#dtpicker6-3").on("dp.change", function (e) {
            $('#dtpicker5-3').data("DateTimePicker").maxDate(e.date);
        });
    };
    
    me.bootstrap_daterangepicker = function() {
        
        // example 1 (Date range picker))
        $('input[name="daterange1-1"]').daterangepicker({
            locale: {
                format: 'DD MMM YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
        });
        $('input[name="daterange1-2"]').daterangepicker({
            locale: {
                format: 'DD MMM YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
        });
        $('input[name="daterange1-3"]').daterangepicker({
            locale: {
                format: 'DD MMM YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
        });
        
        // example 2 (Preset ranges)
        function cb(start, end) {
            $('#daterange2-1').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            $('#daterange2-2').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            $('#daterange2-3').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        cb(moment().subtract(29, 'days'), moment());

        $('#daterange2-1').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
        
        $('#daterange2-2').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
        
        $('#daterange2-3').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
        
        // example 3 (Initially empty)
        $('input[name="daterange3-1"]').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
            autoUpdateInput: false
        });
        $('input[name="daterange3-1"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD-MM-YYYY') + ' - ' + picker.endDate.format('DD-MM-YYYY'));
        });
        $('input[name="daterange3-1"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
        $('input[name="daterange3-2"]').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
            autoUpdateInput: false
        });
        $('input[name="daterange3-2"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD-MM-YYYY') + ' - ' + picker.endDate.format('DD-MM-YYYY'));
        });
        $('input[name="daterange3-2"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
        $('input[name="daterange3-3"]').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger',
            autoUpdateInput: false
        });
        $('input[name="daterange3-3"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD-MM-YYYY') + ' - ' + picker.endDate.format('DD-MM-YYYY'));
        });
        $('input[name="daterange3-3"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
        
        // example 4 (Date and time range picker))
        $('input[name="daterange4-1"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 5,
            locale: {
                format: 'DD MMM YY, hh:mm',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger'
        });
        $('input[name="daterange4-2"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 5,
            locale: {
                format: 'DD MMM YY, hh:mm',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger'
        });
        $('input[name="daterange4-3"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 5,
            locale: {
                format: 'DD MMM YY, hh:mm',
                applyLabel: '<i class="fa fa-lg fa-check"></i>',
                cancelLabel: '<i class="fa fa-lg fa-times"></i>',
            },
            cancelClass: 'btn-danger'
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();