var Header = function (container, data) {
    this.container = container;
    this.data = data;
    this.init();
}

Header.prototype = {
    init: function () {
        this.createDom();
        this.bindEvent();
    },
    createDom: function () {
        this.container.html(
            '<!-- 顶部名字-->' +
            '<h1 class="cao name">曹</h1>' +
            '<h1 class="yu name">昱</h1>' +
            '<h1 class="hao name">豪</h1>' +

            '<ul class=header-ul>' +
            '<li><a href="index.html">首页</a></li>' +
            '<li><a href="about.html">关于我</a></li>' +
            '<li><a href="https://github.com/CanvasCao" target="_blank">Github </a></li>' +
            '<li><a href="contact.html">联系我</a></li>' +
            '</ul>'
        )
    },
    bindEvent: function () {
        $(function () {
            setTimeout(function () {
                $('.cao').animate({'opacity': 1, 'top': 0}, 1000,'swing')
            }, 0)

            setTimeout(function () {
                $('.yu').animate({'opacity': 1, 'top': 0},1000,'swing')
            }, 50)

            setTimeout(function () {
                $('.hao').animate({'opacity': 1, 'top': 0},1000,'swing')
            }, 500)


            setInterval(function () {
                $('.cao').velocity('callout.swing', 2000, true);
            }, 2000)
            setInterval(function () {
                $('.yu').velocity('callout.shake', 2000, true);
            }, 2500)
            setInterval(function () {
                $('.hao').velocity('callout.tada', 2000, true);
            }, 3000)


            //header下降........................................................................
            $('.header').animate({'top': 0}, 1000);
        })
    }

}
var h = new Header($('.header'));
