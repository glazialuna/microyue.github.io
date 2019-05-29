(function($){
    $('.article img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            }
        }
    });

    if (typeof(moment) === 'function') {
        $('.article-meta time').each(function () {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }

    function adjustNavbar() {
        const navbarWidth = $('.navbar-main .navbar-start').outerWidth() + $('.navbar-main .navbar-end').outerWidth();
        if ($(document).outerWidth() < navbarWidth) {
            $('.navbar-main .navbar-menu').addClass('is-flex-start');
        } else {
            $('.navbar-main .navbar-menu').removeClass('is-flex-start');
        }
    }
    adjustNavbar();
    $(window).resize(adjustNavbar);

    //目录生成及隐藏函数
    var $toc = $('#toc');
    if ($toc.length > 0) {
        var $itemHasChild = $("#toc .toc-item:has(> .toc-child)");
        var $titleHasChild = $itemHasChild.children(".toc-link");
        //在大标题前面插上两个标签,y用于表示目录的展开和收起状态
        $itemHasChild.prepend("<i class='fa fa-caret-down'></i><i class='fa fa-caret-right'></i>");
        var $iconToFold = $(".toc-item > .fa-caret-down");
        $iconToExpand.addClass("hide");

        //点击小图标折叠次级目录，同时切换到相应图标
        var clickIcon = function(){
            $("#toc .toc-item > i").click(function(){
                $(this).siblings(".toc-child").slideToggle(100);
                $(this).toggleClass("hide");
                // 图标的显示状态从inline-hide 和none中切换，用toggleClass
                $(this).siblings("i").toggleClass("hide");
                })
        }()
        // 默认展开目录，所以隐藏掉表示“目录已展开”的图标（向下的小三角）
        var $iconToFold = $(".toc-item > .fa-caret-down");
        $iconToExpand.addClass("hide");

        //点击大标题
        var clickTitle = function(){
            //双击折叠目录
            $titleHasChild.dblclick(function(){
            $(this).siblings(".toc-child").hide(100);
            $(this).siblings("i").toggleClass("hide");
            })
            // After dblclick enent，单击展开目录
            $titleHasChild.click(function(){
                var $curentTocChild = $(this).siblings(".toc-child");
                if ($curentTocChild.is(":hidden")) {
                $curentTocChild.show(100);
                $(this).siblings("i").toggleClass("hide");
            }
            })
        }()

        //当有总目录的时候
        // var clickTocTitle = function(){
        //     var $iconToExpand = $(".toc-item > .fa-caret-right");
        //     var $iconToFold = $(".toc-item > .fa-caret-down");
        //     var $subToc = $titleHasChild.next(".toc-child");
        //     var $tocTitle = $("#toc .toc-title");
        //     // 当包含多级目录时再执行
        //     if ($titleHasChild.length) {
        //         $tocTitle.addClass("clickable");
        //         $tocTitle.click(function(){
        //             if ($subToc.is(":hidden")) {
        //                 $subToc.show(150);
        //                 $iconToExpand.removeClass("hide");
        //                 $iconToFold.addClass("hide");
        //             } else {
        //                 $subToc.hide(100);
        //                 $iconToExpand.addClass("hide");
        //                 $iconToFold.removeClass("hide");
        //             }
        //         })
        //     }
        // }()


    // var $mask = $('<div>');
    //     $mask.attr('id', 'toc-mask');

    //     $('body').append($mask);

    //     function toggleToc() {
    //         $toc.toggleClass('is-active');
    //         $mask.toggleClass('is-active');
    //     }


    //     $toc.on('click', toggleToc);
    //     $mask.on('click', toggleToc);
    //     $('.navbar-main .catalogue').on('click', toggleToc);
    }
})(jQuery);
