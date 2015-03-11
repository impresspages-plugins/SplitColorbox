$(document).ready(function () {
    "use strict";

    if (ip.isManagementState) {
        return;
    }

    $.each($('.ipWidget'), function (key, widget){
        $(widget).find('a[rel*=lightbox]').colorbox({
            rel: 'ipwImage' + $(widget).index(),
            maxWidth: '90%',
            maxHeight: '90%',
            title: function(){return $(this).attr('title') + ($(this).data('description') ? '. ' + $(this).data('description') : '');}
        });
        $(widget).find('a[rel=standaloneLightbox]').colorbox({
            maxWidth: '90%',
            maxHeight: '90%'
        });

    });

});
