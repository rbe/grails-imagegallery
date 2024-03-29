/*
 * ImageGallery
 * Copyright (C) 2011-2012 art of coding UG (haftungsbeschränkt).
 *
 * Alle Rechte vorbehalten. Nutzung unterliegt Lizenzbedingungen.
 * All rights reserved. Use is subject to license terms.
 */

var IMAGEGALLERY = IMAGEGALLERY || {};
IMAGEGALLERY.ADMIN = function($) {

    /**
     * Render an image when building the gallery.
     * @param row One row of data, got via JSON from server.
     * @param tmpl The just create new instance of the HTML template.
     */
    this.renderGalleryImage = function(row, tmpl) {
        tmpl.hide();
        $('a.email', tmpl).attr('href', 'mailto:' + row.email);
        $('img.gallery_image', tmpl).attr('src', '/imagegallery/image/' + row.contestId + '.jpg');
        $('a#freigeben', tmpl).click(function() {
            var url = '/imagegallery/image/' + row.contestId;
            $.get(url + '/approve', function() {
                alert(row.contestId + ' freigegeben!');
            });
        });
        $('a#deaktiveren', tmpl).click(function() {
            var url = '/imagegallery/image/' + row.contestId;
            $.get(url + '/reject', function() {
                alert(row.contestId + ' deaktivieren!');
            });
        });
        tmpl.fadeIn(2500);
    };

    /**
     * Render the gallery.
     * @param data
     * @param statusText
     * @param jqXHR
     */
    this.renderGallery = function(data, statusText, jqXHR) {
        FLUX.FASTMS.renderTemplate({
            template: '#admin_list_row',
            append: '#herewego',
            json: data.success.result,
            doAfterRow: IMAGEGALLERY.ADMIN.renderGalleryImage
        });
    };

    // Return object
    return this;

};

// Initialize with jQuery
if (typeof jQuery !== 'undefined') {
    IMAGEGALLERY.ADMIN = IMAGEGALLERY.ADMIN(jQuery);
} else {
    alert('Could not initialize IMAGEGALLERY.ADMIN: jQuery not loaded.');
}
