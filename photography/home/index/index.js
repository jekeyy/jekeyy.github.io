//banner js
$(function() {
    var d = $("#slider-btn li");
    var j = $("#slider-back li");
    var a = $(".banner-text");
    var h = $(".slider-text");
    var e = $(".banner-txt a");
    var i = 0;
    d.each(function(l) {
        $(this).mouseover(function() {
            f(l)
        });
        $(this).data("index")
    });

    function f(l) {
        i = l;
        d.eq(l).addClass("active").siblings().removeClass();
        var m = a.eq(l);
        var n = m.children();
        m.siblings(".banner-text").stop(true).fadeOut(100);
        m.show();
        n.each(function() {
            var o = $(this);
            o.css({
                display: "block",
                opacity: 0,
                top: o.data("start_top") || 0,
                left: o.data("start_left") || 0
            });
            o.stop(true).delay(400).animate({
                    display: "none",
                    opacity: 1,
                    top: o.data("to_top"),
                    left: o.data("to_left")
                },
                1200);
            if (o.data("class") !== undefined) {
                o.removeClass(o.data("class"));
                setTimeout(function() {
                        o.addClass(o.data("class"))
                    },
                    0)
            }
        });
        j.eq(l).siblings().stop().animate({
                opacity: 0
            },
            600);
        j.eq(l).stop().animate({
                opacity: 1
            },
            600)
    }

    function g() {
        i++;
        if (i == d.length) {
            i = 0
        }
        f(i)
    }
    var c = null;
    var b = $("#slider-btn");
    var k = function() {
        var l = b.find(".active");
        c = setTimeout(function() {
                g();
                k()
            },
            l.data("delay") || 4000)
    };
    k();
    d.hover(function() {
            clearInterval(c)
        },
        function() {
            k()
        });
    f(0)
});

// 返回顶部
$(document).ready(function() {
    //首先将#returnTop隐藏
    $("#returnTop").hide();
    //当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $("#returnTop").fadeIn(500);
            } else {
                $("#returnTop").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#returnTop").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});

// 图片放大
$(function() {
    $(".right_bottom , .right_top , .zuo_top , .zuo_bottom").click(function() {
        var large_image = '<img src= ' + $(this).attr("src") + '></img>';
        console.log(large_image)
        $('.image_large').html($(large_image).css({
            display: "block",
            height: '70%',
            width: '30%',
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
        }, 500));
        $('.image_large').css("display", "block");
    });
    $('.image_large').click(function() {
        $(this).css("display", "none");
    })
});