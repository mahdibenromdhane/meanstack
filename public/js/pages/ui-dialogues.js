/* ui-dialogues page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        me.bootbox_custom();
        me.sweetalert_custom();
        me.jbox_custom();
        me.onclicks();
    };
    
    me.bootbox_custom = function() {
        /* Bootbox alerts handled by handler_dialogue_bootbox, except the following custom one */
        $(document).on('click', '.bbcustom', function(e) {
            bootbox.dialog({
                title: "Are you sure you wish to proceed?",
                message: "Life may never be the same again!",
                buttons: {
                    success: {
                        label: "Go for it!",
                        className: "btn-success",
                    },
                    danger: {
                        label: "Stop!",
                        className: "btn-danger",
                    },
                    main: {
                        label: "Proceed",
                        className: "btn-primary",
                    }
                }
            });
        });
    };
    
    me.sweetalert_custom = function() {
        /* Sweetalert alerts handled by handler_dialogue_sweetalert, except the following custom one */
        $(document).on('click', '.swquestion', function(e) {
            swal({ title: "Do you wish to proceed?", text: "Life may never be the same again!", type: "warning", showCancelButton: true, confirmButtonColor: "#d59337", confirmButtonText: "Go for it!", cancelButtonText: "No!", closeOnConfirm: false, closeOnCancel: false }, function(isConfirm){ if (isConfirm) { swal({ title: "It's too late now!", text: "Wonderful things will happen.", type: "success", confirmButtonColor: "#2a5989"});   } else { swal({ title: "Cancelled", text: "Phew; that was close!", type: "error", confirmButtonColor: "#2a5989"});   } });
        });
    };
    
    me.jbox_custom = function() {
    };
    
    me.onclicks = function() {
        $('#boringalert').on('click', function() { alert("Boring alert!"); });
    };

    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();