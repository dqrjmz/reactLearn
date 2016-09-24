(function() {
    $(() => {
        var zt = {};

        zt.pageInit = {
            init: function() {
                zt.backTop.init();

                // $('body').on('tap', (event)=>{
                //     console.log('tap');
                // });
            }
        };

        // 返回底部模块
        zt.backTop = {
            init: function() {
                this.backTop();
            },
            backTop: function() {
                var clickCount = 0;
                $(".toTop").click(()=> {

                    //获取窗口滚动高度
                    var scrollHeight = $(window).scrollTop();
                    var timer = setInterval(move, 10);

                    function move() {
                        scrollHeight -= 30;
                        if (scrollHeight <= 0) {
                            clearInterval(timer);
                        } else {
                            //设置窗口的滚动高度
                            $(window).scrollTop(scrollHeight);
                        }
                    }
                });

                //返回顶部
                $(".nav-fixed").click(function() {
                    if (clickCount % 2 == 0) {
                        var oTrig = $(".nav-triangle");
                        $(".nav-retract").removeClass("none");
                        $(".nav-fixed .bg").removeClass("retract");
                        $(".fixed-txt").html("收起");
                        oTrig.addClass("triangle_activeUp");
                        if (oTrig.hasClass("triangle_activeDown")) {
                            oTrig.removeClass("triangle_activeDown");
                        }
                    } else {
                        $(".nav-retract").addClass("none");
                        $(".nav-fixed .bg").addClass("retract");
                        $(".fixed-txt").html("导航");
                        $(".nav-triangle").removeClass("triangle_activeUp");
                        $(".nav-triangle").addClass("triangle_activeDown");
                    }
                    clickCount++;
                });

                //窗口滚动
                window.onscroll = function() {
                    if ($(window).scrollTop() > 300) {
                        $(".borderside-nav").removeClass("none");
                        $(".toTop").removeClass("none");
                    } else {
                        $(".borderside-nav").addClass("none");
                        $(".toTop").addClass("none");
                    }
                };
            }
        };

        // 执行页面初始化
        zt.pageInit.init();
    });
})();
