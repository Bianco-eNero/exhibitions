function pixflow_pixflowSlider() {
    "use strict";

    var $pixflowSliders = $('.pixflow-slider');
    if(!$pixflowSliders.length) {
        return;
    }

    $pixflowSliders.each(function () {
        var $slider = $(this);
        if ( $slider.parents('.md-pixflow-slider').is('.vertical')) {
            pixflow_verticalPixflowSlider($slider);
        } else {
            pixflow_classicPixflowSlider($slider);
        }
    });


}

function pixflow_verticalPixflowSlider($slider){
    "use strict";
    var sliderSkin = $slider.attr('data-skin'),
        sliderID = $slider.attr('data-slider-id'),
        sliderHeight = $slider.attr('data-height-mode'),
        sliderAutoplay = $slider.attr('data-autoplay'),
        sliderAutoplaySpeed = Number($slider.attr('data-autoplay-speed')) * 1000,
        $sliderDotsContainer = $('.pixflow-slider-dots-container[data-slider-id="' + sliderID + '"]'),
        vertical = false;
    // Upadet slides height (if heigth mode set to fit)
    if (sliderHeight == 'fit') {
        $slider.find('.pixflow-slide').height($(window).height());
    }

    if ('yes' == sliderAutoplay) {
        sliderAutoplay = true;
    } else {
        sliderAutoplay = false;
    }
    if ('vertical' == sliderSkin) {
        vertical = true;
    }
    $slider.slick({
        infinite: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        vertical: vertical,
        verticalSwiping: vertical,
        autoplay: sliderAutoplay,
        autoplaySpeed: sliderAutoplaySpeed,
        draggable: true,
        swipeToSlide: true,
        touchThreshold:200,
        speed: 400
    });

    // Upadate custom dots
    $slider.on('setPosition', function (event, slick, direction){
        var currentSlide = slick.currentSlide+1;

        $sliderDotsContainer.find('.current-slide-no').html('0'+currentSlide);
        $sliderDotsContainer.find('.pixflow-slider-dot').removeClass('active');
        $sliderDotsContainer.find('.pixflow-slider-dot[data-slide-no="'+ currentSlide +'"]').addClass('active');
    });
    $sliderDotsContainer.find('.pixflow-slider-dot .circle-dot').click(function(){
        var slideNo = $(this).parent().attr('data-slide-no');
        slideNo = parseInt(slideNo) - 1;
        $slider.slick('slickGoTo',slideNo);
    })

    $slider.on('swipeMove', function(event){
        // Fire on Draging
    });

}

function pixflow_classicPixflowSlider($slider) {
    function classicPixflowSliderInit() {
        function classicPixflowSliderHeight() {
            var $this = $slider,
                $minHeight = 350,
                $definedHeight = ($(window).width() , ($this.attr("data-height-mode")=='fit')?$(window).height(): parseInt($this.find('.flickity-viewport').height())),
                responsive = (pixflow_isTouchDevice() && $(window).width() <= 1024),
                s = responsive ? $(window).width() / 1400 : $(window).width() /1900;

            if (window.innerWidth > 1e3 &&  $(".layout").width() == $(window).width()){
                if (0 == $this.parents(".col-sm-12").length) {
                    if(responsive){
                        $this.find(".pixflow-slide, .flickity-viewport").css("height", Math.ceil($definedHeight));
                    }else {
                        if(!responsive && window.innerWidth >= 1100) {
                            $this.find(".pixflow-slide, .flickity-viewport").css("height", Math.ceil($definedHeight));
                        }else{
                            $this.find(".pixflow-slide, .flickity-viewport").css("height", Math.ceil($definedHeight * s));
                        }
                    }
                }else{
                    $this.find(".pixflow-slide, .flickity-viewport").css("height", Math.ceil($definedHeight));
                }
            }
            else {
                var $parentCol = $this.parents(".wpb_column").length > 0 ? $this.parents(".wpb_column") : $this.parents(".col");
                if (0 == $parentCol.length && ($parentCol = $(".main-content")), $parentCol.hasClass("vc_span12") || $parentCol.hasClass("main-content") || $parentCol.hasClass("span_12") || $parentCol.hasClass("col-sm-12")) $minHeight >= $definedHeight * s ? $this.find(".pixflow-slide, .flickity-viewport").css("height", $minHeight) : $this.find(".pixflow-slide, .flickity-viewport").css("height", Math.ceil($definedHeight * s));
                else {
                    var $parentColWidth = columnWidth($parentCol),
                        $aspectRatio = $definedHeight / $parentColWidth;
                    $aspectRatio * $parentCol.width() <= $minHeight ? $this.find(".pixflow-slide, .flickity-viewport").css("height", $minHeight) : $this.find(".pixflow-slide, .flickity-viewport").css("height", $aspectRatio * $parentCol.width())
                }
            }
        }

        function columnWidth(parentCol) {
            var $parentColWidth = 1100,
                $columnNumberParsed = $(parentCol).attr("class").match(/\d+/);
            return "2" == e ? $parentColWidth = 170 : "3" == e ? $parentColWidth = 260 : "4" == e ? $parentColWidth = 340 : "6" == e ? $parentColWidth = 530 : "8" == e ? $parentColWidth = 700 : "9" == e ? $parentColWidth = 805 : "10" == e ? $parentColWidth = 916.3 : "12" == e && ($parentColWidth = 1100), $parentColWidth
        }

        var autoplay = ($slider.attr('data-autoplay') == 'true')? parseFloat($slider.attr('data-autoplay-speed')) * 1000:false,
            itemsCount = $slider.find('.pixflow-slide').length;

        Flickity.createMethods.push('_createPrevNextCells');

        Flickity.prototype._createPrevNextCells = function() {
            this.on( 'select', this.setPrevNextCells );
        };

        Flickity.prototype.setPrevNextCells = function() {
            // remove classes
            changeSlideClasses( this.previousSlide, 'remove', 'is-previous' );
            changeSlideClasses( this.nextSlide, 'remove', 'is-next' );
            // set slides
            this.previousSlide = this.slides[ this.selectedIndex - 1 ];
            this.nextSlide = this.slides[ this.selectedIndex + 1 ];
            // add classes
            changeSlideClasses( this.previousSlide, 'add', 'is-previous' );
            changeSlideClasses( this.nextSlide, 'add', 'is-next' );
        };

        function changeSlideClasses( slide, method, className ) {
            if ( !slide ) {
                return;
            }
            slide.getCellElements().forEach( function( cellElem ) {
                cellElem.classList[ method ]( className );
            });
        }

        if ($slider.hasClass('flickity-enabled')){

        }
        var $rpF = $slider.flickity({
            contain: true,
            draggable: true,
            lazyLoad: false,
            imagesLoaded: true,
            percentPosition: true,
            pageDots: true,
            resize: true,
            setGallerySize: true,
            wrapAround: true,
            autoPlay: autoplay,
            prevNextButtons: false,
            accessibility: false,
            selectedAttraction:.01,
            friction:.2,
            pauseAutoPlayOnHover: false
        });

        var sum = 0;
        setTimeout(function() {
            $slider.addClass("loaded"), "fit" == $slider.attr("data-height-mode") && $slider.find(".flickity-viewport,.flickity-slider,.pixflow-slide").height($(window).height())
        }, 1150);
        $rpF.data("flickity");

        $rpF.on("dragStart", function(event,pointer ) {
            $(".flickity-viewport").addClass("animating");
            TweenMax.set($rpF.find('.is-next .pixflow-slide-container > div'),{opacity:0,bottom:'-50px'});
        }),

            $rpF.on("dragEnd", function(e,pointer) {
                $(".flickity-viewport").removeClass("animating");
                setTimeout(function(){
                        TweenMax.staggerTo($rpF.find('.is-selected .pixflow-slide-container > div'),.5,{opacity:1,bottom:"0px"},0.2);
                    },
                    500);
            }),

            $rpF.on("settle", function() {
                $rpF.find('.pixflow-slide').removeClass('pre-selected');
                $rpF.find('.is-selected').addClass('pre-selected');
                TweenMax.set($rpF.find('.is-next .pixflow-slide-container > div'),{opacity:0,bottom:'-50px'});

            }),
            classicPixflowSliderHeight(),
            $(window).resize(classicPixflowSliderHeight),
        navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/) || $(window).resize(classicPixflowSliderParallaxMargins);
        $rpF.on( 'cellSelect', function() {
            setTimeout(function(){
                    TweenMax.staggerTo($rpF.find('.is-selected .pixflow-slide-container > div'),.5,{opacity:1,bottom:"0px",left:0},0.2);
                },
                1200);
        });
    }

    function classicPixflowSliderParallax() {
        var $this = $slider,
            $offset = parseInt($this.find(".flickity-slider").position().left),
            $slideLength = $this.find(".pixflow-slide").length,
            $lastChildIndex = $this.find(".pixflow-slide:last-child").index(),
            $slideWidth = $this.find(".pixflow-slide").width();

        if ($offset >= -3){
            $this.find(".pixflow-slide:last-child .pixflow-slide-bg").css("margin-left", parseInt(Math.ceil($slideWidth / 3.5)) + "px");
        }
        else {
            $this.find(".pixflow-slide:last-child .pixflow-slide-bg").css("margin-left", "-" + parseInt(Math.ceil($slideWidth / 3.5 * $lastChildIndex)) + "px");
        }

        if ( Math.abs($offset) >= ($slideLength - 1) * $slideWidth ) {
            $this.find(".pixflow-slide:first-child .pixflow-slide-bg").css("margin-left", "-" + parseInt(Math.ceil($slideWidth / 3.5 * $slideLength)) + "px")
        }
        else {
            $this.find(".pixflow-slide:first-child .pixflow-slide-bg").css("margin-left", "0px")
        }

        $this.find(".pixflow-slide-bg").css("transform", "translateX(" + Math.ceil($this.find(".flickity-slider").position().left / -3.5) + "px)")

        requestAnimationFrame(classicPixflowSliderParallax);
    }

    function classicPixflowSliderParallaxMargins() {
        var $slideWidth = $slider.find(".pixflow-slide").width();
        $slider.find(".pixflow-slide").each(function(i) {
            $(this).find(".pixflow-slide-bg").css("margin-left", "-" + parseInt(Math.ceil($slideWidth / 3.5) * i) + "px");
        });
    }
    classicPixflowSliderInit(), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/) || window.requestAnimationFrame(classicPixflowSliderParallax), $(window).resize();
}
window_load_functions.pixflow_pixflowSlider = [];