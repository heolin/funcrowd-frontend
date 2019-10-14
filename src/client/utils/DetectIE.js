export default {
    detectIE: function () {
        let ua = window.navigator.userAgent;

        let msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10
            return true;
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11
            return true;
        }

        let edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge
            return true;
        }

        // other browser
        return false;
    }
}
