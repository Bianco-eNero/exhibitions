
function pixflow_pieChart($id, barColor, trackColor) {
    'use strict';

    $.easyPieChart.defaultOptions = {
        barColor: barColor,
        trackColor: trackColor,
        lineCap: 'round',
        rotate: 0,
        size: 210,
        lineWidth: 3,
        animate: false,
        onStart: $.noop,
        onStop: $.noop,
        onStep: $.noop
    };
    $id.find('.percentage').easyPieChart({
        animate: 1500,
        lineWidth: 4,
        onStep: function (value) {
            this.$el.find('span').text(Math.round(value));
        },
        onStop: function (value, to) {
            this.$el.find('span').text(Math.round(to));
        }
    });
}