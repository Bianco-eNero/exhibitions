
function pixflow_recentPostWidget() {
    "use strict";

    if ($('.widget.widget_recent_entries').length < 1)
        return;

    var $str = $('.widget.widget_recent_entries ul li a'),
        str,
        subStr;

    $str.each(function () {
        str = $(this).html();

        if (str.length > 30) subStr = '...';
        else subStr = '';

        $(this).html(str.substr(0, 30) + subStr);
    });

}
document_ready_functions.pixflow_recentPostWidget =[];
