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
    //设置时间
    if (typeof(moment) === 'function') {
        $('.article-meta time').each(function () {
            // 设置成距离现在的时间
            // $(this).text(moment($(this).attr('datetime')).fromNow());
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

    // // icarus自带的toc设置
    // var $toc = $('#toc');
    // if ($toc.length > 0) {
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
    // }

    //目录生成及隐藏函数
    var $itemHasChild = $("#toc .toc-item:has(> .toc-child)");
    var $titleHasChild = $itemHasChild.children(".toc-link");
    // 默认被隐藏
    $titleHasChild.siblings(".toc-child").hide(100);  
    //点击大标题
    function clickTitle(){
        //单击折叠或展开目录
        $titleHasChild.click(function(){
            if($(this).siblings(".toc-child").is(":hidden")){
                $(this).siblings(".toc-child").show(100);
            }else{
                $(this).siblings(".toc-child").hide(100);
            }
        })
    }
    clickTitle();
    
})(jQuery);
