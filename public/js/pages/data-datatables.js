/* data-datatables page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-datatables page javascript');
        var dataSet = [
            ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
            ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
            ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
            ['Trident','Internet Explorer 6','Win 98+','6','A'],
            ['Trident','Internet Explorer 7','Win XP SP2+','7','A'],
            ['Trident','AOL browser (AOL desktop)','Win XP','6','A'],
            ['Gecko','Firefox 1.0','Win 98+ / OSX.2+','1.7','A'],
            ['Gecko','Firefox 1.5','Win 98+ / OSX.2+','1.8','A'],
            ['Gecko','Firefox 2.0','Win 98+ / OSX.2+','1.8','A'],
            ['Gecko','Firefox 3.0','Win 2k+ / OSX.3+','1.9','A'],
            ['Gecko','Camino 1.0','OSX.2+','1.8','A'],
            ['Gecko','Camino 1.5','OSX.3+','1.8','A'],
            ['Gecko','Netscape 7.2','Win 95+ / Mac OS 8.6-9.2','1.7','A'],
            ['Gecko','Netscape Browser 8','Win 98SE+','1.7','A'],
            ['Gecko','Netscape Navigator 9','Win 98+ / OSX.2+','1.8','A'],
            ['Gecko','Mozilla 1.0','Win 95+ / OSX.1+',1,'A'],
            ['Gecko','Mozilla 1.1','Win 95+ / OSX.1+',1.1,'A'],
            ['Gecko','Mozilla 1.2','Win 95+ / OSX.1+',1.2,'A'],
            ['Gecko','Mozilla 1.3','Win 95+ / OSX.1+',1.3,'A'],
            ['Gecko','Mozilla 1.4','Win 95+ / OSX.1+',1.4,'A'],
            ['Gecko','Mozilla 1.5','Win 95+ / OSX.1+',1.5,'A'],
            ['Gecko','Mozilla 1.6','Win 95+ / OSX.1+',1.6,'A'],
            ['Gecko','Mozilla 1.7','Win 98+ / OSX.1+',1.7,'A'],
            ['Gecko','Mozilla 1.8','Win 98+ / OSX.1+',1.8,'A'],
            ['Gecko','Seamonkey 1.1','Win 98+ / OSX.2+','1.8','A'],
            ['Gecko','Epiphany 2.20','Gnome','1.8','A'],
            ['Webkit','Safari 1.2','OSX.3','125.5','A'],
            ['Webkit','Safari 1.3','OSX.3','312.8','A'],
            ['Webkit','Safari 2.0','OSX.4+','419.3','A'],
            ['Webkit','Safari 3.0','OSX.4+','522.1','A'],
            ['Webkit','OmniWeb 5.5','OSX.4+','420','A'],
        ];
        $(document).ready(function() {
            $('#table1').DataTable({
                data: dataSet,
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }]
            });
            $('#table2').DataTable({
                data: dataSet,
                responsive: true,
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }]
            });
            $('#table3').DataTable({
                data: dataSet,
                dom: "R<'row'<'col-sm-4'l><'col-sm-8'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>",
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }]
            });
            $('#table4').DataTable({
                data: dataSet,
                dom: "<'row'<'col-sm-4'l><'col-sm-8'Cf>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>",
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }],
                rowReorder: true,
            });
            // table5 = fixed columns
            $('#table5').DataTable({
                data: dataSet,
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }],
                scrollX: true,
                fixedColumns: true
            });
            // table6 = scroller
            $('#table6').DataTable({
                data: dataSet,
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }],
                scroller: true,
                deferRender: true,
                scrollY: 200,
            });
            // table7 = scrolling table
            $('#table7').DataTable({
                data: dataSet,
                dom: "<'row'<'col-sm-4'l><'col-sm-8'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'>>",
                scrollY: '200px',
                scrollX: true,
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }]
            });
            // table8 = buttons
            $('#table8').DataTable({
                data: dataSet,
                dom: "<'row'<'col-sm-4'l><'col-sm-4'B><'col-sm-4'Tf>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>",
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }],
                buttons: [
                    'copy', 'csv', 'pageLength', 'pdf'
                ]
            });
            // table9 = select
            /*
            if (parent.helpers.viewport().width > 768) {
                $('#table9').DataTable({
                    data: dataSet,
                    dom: "<'row'<'col-sm-3'l><'col-sm-6'B><'col-sm-3'Tf>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>",
                    columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }],
                    select: {
                        style: 'os',
                        items: 'column'
                    },
                    buttons: [ 'selectCells', 'selectColumns', 'selectRows', 'selectAll', 'selectNone' ]
                });
            }
            */
            // table10 = colvis buttons
            $('#table10').DataTable({
                data: dataSet,
                dom: "<'row'<'col-sm-4'l><'col-sm-4'B><'col-sm-4'Tf>><'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>",
                columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }],
                buttons: [
                    'colvis',
                ]
            });
            var n;
            for (n = 1; n <= 12; n++) {
                $('#cctable' + n).DataTable({
                    data: dataSet,
                    columns: [{ title: 'Engine' }, { title: 'Browser' }, { title: 'Platform' }, { title: 'Version', class: 'center' }, { title: 'Grade', class: 'center' }]
                });
            }
            // Fix for table widths in tabs
            $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
                $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
            });
            // Call the resize after a bit to make sure the columns look OK on page load
            setTimeout($.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust, 250);
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();