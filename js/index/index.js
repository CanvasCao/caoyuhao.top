/**
 * Created by Administrator on 2016/1/26.
 */
(function () {
    //variable
    var Index = 0;
    var bgColorArr = ['#2f7ddb', '#090', '#0BD', '#800', '#706', '#0C8','#C60']; //length 7

    //mian pro..............................................
    $(function () {

        //初始化
        //背景变色........................................................................
        $('.stage').css('background', bgColorArr[Index])
        //第0个入场........................................................................
        inJson[0]();


        //events......................................................
        $('.left').click(function () {
            changePage(Index, Index - 1);
        })
        $('.right').click(function () {
            changePage(Index, Index + 1);
        })

        $('.nav li').click(function () {
            var clickIndex = parseInt($(this).attr('index'));
            if (clickIndex == Index) {
                return;
            }
            changePage(Index, clickIndex);
        })

        window.onkeydown = function (e) {
            var e = e || e.event;
            //e.which
            var key = e.which;
            if (key == 37) {
                changePage(Index, Index - 1);
            }
            if (key == 39) {
                changePage(Index, Index + 1);
            }
        }

    })


    //functions........................................................
    function changePage(oldIndex, newIndex) {
        newIndex = newIndex <= -1 ? bgColorArr.length - 1 : newIndex;//验收
        newIndex = newIndex >= bgColorArr.length ? 0 : newIndex;

        //舞台换颜色 底部nav换样式
        $('.stage').css('background', bgColorArr[newIndex]);
        $('.nav li').eq(newIndex).addClass('current').siblings().removeClass('current');

        //进场出场
        inJson[newIndex]();
        outJson[oldIndex]();

        //更新Index
        Index = newIndex;
    }

    //pro In&Out Animates.....................................................
    var inJson = [
        function () {
            //page1 每次进场先调opacity
            //screen1 pic1 进场两行代码 一行定位 一行移动
            //translateX translateY只是为了兼容性的往中间定位
            $('.s1p1').velocity({ 'translateX':'-50%', 'translateY':'-100px','translateZ': '1000px', 'opacity': 0}, 0);
            $('.s1p1').velocity({'translateZ': '0px', 'opacity': 1}, 1000);

            $('.s1p2').velocity({'translateX':'1000px','translateY':'50px','opacity': 1}, 0);
            $('.s1p2').velocity({'translateX':'150px'}, 1000);

        },
        function () {
            //page2
            $('.s2p1').velocity({'translateY':'-100px','rotateX': '90deg','translateX': '500px', 'opacity': 0}, 0);
            $('.s2p1').velocity({'rotateX': '0deg', 'translateX': '0px', 'opacity': 1}, 1000);
            $('.s2p2').velocity({'opacity': 0}, 0);
            $('.s2p2').velocity({'opacity': 1}, 1500);

            $('.s2pic').velocity({'rotateX': '20deg','translateX': '-600px','translateY': '300px','translateZ': '1500px','rotateZ':'200deg', 'opacity': 0}, 0);
            $('.s2pic').velocity({'rotateX': '0deg', 'translateX': '-300px','translateY': '-120px', 'translateZ': '0px','rotateZ':'0deg', 'opacity': 1}, 1000);
        },
        function () {
            //page3 jsjq
            $('.s3p1').velocity({'translateY':'-120px','translateX': '500px', 'translateZ': '500px','opacity': 0}, 0);
            $('.s3p1').velocity({'translateX': '-400px', 'translateZ': '0px', 'opacity': 1}, 1000);
            $('.s3p2').delay(100).velocity({'translateY':'-20px','translateX': '500px', 'translateZ': '500px','opacity': 0}, 0);
            $('.s3p2').delay(100).velocity({'translateX': '-400px', 'translateZ': '0px', 'opacity': 1}, 900);

            $('.s3pic').velocity({'translateY':'-120px','translateX': '500px','rotateZ':'720deg','opacity': 0}, 0);
            $('.s3pic').velocity({'translateX': '150px','rotateZ':'0deg','opacity': 1}, 1000);

        },
        function () {
            //page4 canvas
            $('.s4p1').velocity({'translateY':'-100px','translateX': '500px','translateZ': '500px','opacity': 0}, 0);
            $('.s4p1').velocity({'translateX': '0px','translateZ': '0px','opacity': 1}, 1000);
            $('.s4p2').velocity({'translateX': '500px','translateY': '-10px','translateZ': '500px','opacity': 0}, 0);
            $('.s4p2').velocity({'translateX': '0px','translateZ': '0px','opacity': 1}, 1000);
            $('.s4pic2').velocity({'translateX': '-350px','translateY':'-120px','opacity': 0}, 0);
            $('.s4pic2').velocity({'opacity': 1}, 1000);
            $('.s4pic1').delay(200).velocity({'translateX': '-350px','translateY':'-1000','opacity': 0}, 0);
            $('.s4pic1').delay(200).velocity({'translateY':'-122px','opacity': 1}, 800);
        },
        function () {
            //page5
            $('.s5p1').velocity({'translateX': '-250px','rotateZ': '90deg','rotateX': '-90deg','translateY':'200px', 'translateZ': '1000px', 'opacity': 0}, 0);
            $('.s5p1').velocity({'rotateZ': '0deg','rotateX': '0deg','translateY':'-100px','translateZ': '0px','opacity': 1}, 1000);

            $('.s5p2').velocity({'translateX': '-480px','rotateZ': '-90deg','rotateX': '90deg','translateY':'-200px', 'translateZ': '1000px', 'opacity': 0}, 0);
            $('.s5p2').velocity({'rotateZ': '0deg','rotateX': '0deg','translateY':'0px','translateZ': '0px','opacity': 1}, 1000);

            //背景方框
            $('.s5pic1').velocity({'translateY':'-135px','translateX': '90px','translateZ': '2000px','opacity': 0}, 0);
            $('.s5pic1').velocity({'translateZ': '0px','opacity': 0.05}, 1000);
            //vsLogo
            $('.s5pic2').velocity({'translateY':'-100px','translateX': '125px','translateZ': '-2000px','opacity': 0}, 0);
            $('.s5pic2').velocity({'translateZ': '0px','opacity': 1}, 1000);

        },
        function () {
            $('.s6p1').velocity({'translateY':'-500px','opacity': 0}, 0);
            $('.s6p1').velocity({'translateY':'-100px','opacity': 1}, 1000);
            $('.s6p2').velocity({'translateY':'500px','opacity': 0}, 0);
            $('.s6p2').velocity({'translateY':'0px','opacity': 1}, 1000);
            $('.s6Up').velocity({'translateY':'-930px','translateX': '-400px','opacity': 0}, 0);
            $('.s6Up').velocity({'translateY':'-130px','translateX': '-400px','opacity': 1}, 1000);
            $('.s6Left').velocity({'translateY':'-130px','translateX': '-1200px','opacity': 0}, 0);
            $('.s6Left').velocity({'translateY':'-130px','translateX': '-400px','opacity': 1}, 1000);
            $('.s6Middle').velocity({'translateY':'-130px','translateX': '-400px','opacity': 0}, 0);
            $('.s6Middle').velocity({'opacity': 1}, 1000);
        },
        function () {
            $('.s7p1').velocity({'translateZ': '-1000px','translateX': '0px','translateY':'-500px','opacity': 0}, 0);
            $('.s7p1').velocity({'translateZ': '0px','translateX': '-380px','translateY':'-100px','opacity': 1}, 1000);
            $('.s7p2').velocity({'translateZ': '-1000px','translateX': '0px','translateY':'500px','opacity': 0}, 0);
            $('.s7p2').velocity({'translateZ': '0px','translateX': '-380px','translateY':'0px','opacity': 1}, 1000);
            $('.s7pic1').velocity({'translateX': '100px','rotateY': '-900deg','translateY':'200px', 'translateZ': '1000px', 'opacity': 0}, 0);
            $('.s7pic1').velocity({'rotateY': '0deg','translateY':'-150px','translateZ': '0px','opacity': 1}, 1000);
        }
    ];
    var outJson = [
        function () {
            $('.s1p1').velocity({ 'translateZ': '1000px', 'opacity': 0}, 1000);
            $('.s1p2').velocity({'translateX':'1000px','opacity': 1}, 1000);
        },
        function () {
            $('.s2p1').velocity({'translateY':'-100px','rotateX': '90deg','translateX': '500px', 'opacity': 0}, 1000);
            $('.s2p2').velocity({'opacity': 0}, 1000);
            $('.s2pic').velocity({'rotateX': '20deg','translateX': '-600px','translateY': '300px','translateZ': '1500px','rotateZ':'200deg', 'opacity': 0}, 1000);
        },
        function () {
            //page3
            $('.s3p1').velocity({'translateY':'-100px','translateX': '500px', 'translateZ': '500px','opacity': 0}, 1000);
            $('.s3p2').delay(100).velocity({'translateY':'0px','translateX': '500px', 'translateZ': '500px','opacity': 0}, 900);
            $('.s3pic').velocity({'translateY':'-120px','translateX': '500px','rotateZ':'720deg','opacity': 0}, 1000);
        },
        function () {
            $('.s4p1').velocity({'translateY':'-100px','translateX': '500px','translateZ': '500px','opacity': 0}, 1000);
            $('.s4p2').velocity({'translateX': '500px','translateZ': '500px','opacity': 0}, 1000);
            $('.s4pic2').velocity({'translateX': '-350px','translateY':'-120px','opacity': 0}, 1000);
            $('.s4pic1').delay(200).velocity({'translateX': '-350px','translateY':'-1000','opacity': 0}, 800);
        },
        function () {
            $('.s5p1').velocity({'translateX': '-250px','rotateZ': '90deg','rotateX': '-90deg','translateY':'200px', 'translateZ': '1000px', 'opacity': 0}, 1000);
            $('.s5p2').velocity({'translateX': '-480px','rotateZ': '-90deg','rotateX': '90deg','translateY':'-200px', 'translateZ': '1000px', 'opacity': 0}, 1000);

            //背景方框
            $('.s5pic1').velocity({'translateY':'-135px','translateX': '90px','translateZ': '2000px','opacity': 0}, 1000);
            //vsLogo
            $('.s5pic2').velocity({'translateY':'-100px','translateX': '125px','translateZ': '-2000px','opacity': 0}, 1000);
        },
        function () {
            $('.s6p1').velocity({'translateY':'-500px','opacity': 0}, 1000);
            $('.s6p2').velocity({'translateY':'500px','opacity': 0}, 1000);
            $('.s6Up').velocity({'translateY':'-930px','translateX': '-400px','opacity': 0}, 1000);
            $('.s6Left').velocity({'translateY':'-130px','translateX': '-1200px','opacity': 0}, 1000);
            $('.s6Middle').velocity({'translateY':'-130px','translateX': '-400px','opacity': 0}, 1000);
        },
        function () {
            $('.s7p1').velocity({'translateZ': '-1000px','translateX': '0px','translateY':'-500px','opacity': 0}, 1000);
            $('.s7p2').velocity({'translateZ': '-1000px','translateX': '0px','translateY':'500px','opacity': 0}, 1000);
            $('.s7pic1').velocity({'translateX': '100px','rotateY': '-900deg','translateY':'200px', 'translateZ': '1000px', 'opacity': 0}, 1000);
        }
    ];


})()

