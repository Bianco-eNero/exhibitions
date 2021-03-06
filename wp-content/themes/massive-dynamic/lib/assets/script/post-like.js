jQuery(document).ready(function () {
    jQuery('body').on('click', '.md-post-like,.portfolio-detail-like', function (event) {
        event.preventDefault();
        var heart = jQuery(this),
            post_id = heart.data("post_id"),
            type;
        if(heart.hasClass('portfolio-detail-like')){
            type = 'detail';
            heart.html('<i id="icon-like" class="icon-heart32"></i><span class="value">'+ "0" +'</span>');
        }else{
            type = 'shortcode';
            heart.html('<span class="like-heart"><i id="icon-like" class="icon-heart32"></i></span><span class="like-count">'+ "&nbsp;" +'</span>');
        }
        jQuery.ajax({
            type: "post",
            url: ajax_var.url,
            data: "action=pixflow-post-like&nonce=" + ajax_var.nonce + "&pixflow_post_like=&post_id=" + post_id,
            success: function (count) {
                if (count.indexOf("already") !== -1) {
                    var lecount = count.replace("already", "");
                    if (lecount === "0") {
                        lecount = "Like"
                    }
                    heart.prop('title', 'Like');
                    heart.removeClass("liked");
                    if('detail' == type){
                        heart.html('<i id="icon-unlike" class="icon-heart32"></i><span class="value">'+ count +'</span>');
                    }else{
                        heart.html('<span class="like-heart"><i id="icon-unlike" class="icon-heart32"></i></span><span class="like-count">'+ count +'</span>');
                    }
                } else {
                    heart.prop('title', 'Unlike');
                    heart.addClass("liked");
                    if ('detail' == type) {
                        heart.html('<i id="icon-like" class="icon-heart32"></i><span class="value">' + count + '</span>');
                    } else {
                        heart.html('<span class="like-heart"><i id="icon-like" class="icon-heart32"></i></span><span class="like-count">' + count + '</span>');
                    }
                }
            }
        })
    })
});