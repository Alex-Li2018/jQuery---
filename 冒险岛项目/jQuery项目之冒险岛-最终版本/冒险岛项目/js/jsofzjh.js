/**
 * Created by zengjiahao on 2018/8/10.
 */

//��ں���
$(function () {
    //���붯��
    setTimeout(function () {
        $('#main .slogan').animate({
            opacity:'0.8'
        },25,'linear', function () {
            $('#main .slogan').removeClass('sloganscale1').addClass('sloganscale2');

            $('#main .slogan').animate({
                opacity:'0.9'
            },25,'linear', function () {
                $('#main .slogan').removeClass('sloganscale2').addClass('sloganscale3');
                $('#main .slogan').animate({
                    opacity:'0.9'
                },25,'linear', function () {
                    $('#main .slogan').removeClass('sloganscale3').addClass('sloganscale4');
                    $('#main .slogan').animate({
                        opacity:'1'
                    },25,'linear', function () {
                        $('#main .slogan').removeClass('sloganscale4').addClass('sloganscale5');
                    })
                })
            })
        })
    },1000)


    setInterval(function () {
        //������˸1
        $('#main .star1').animate({
            opacity:'0'
        },100,'swing', function () {
            $('#main .star1').animate({
                opacity:'1'
            },1200,'swing', function () {
                $('#main .star1').animate({
                    opacity:'0'
                },600,'swing')
            })
        })
        //������˸2
        $('#main .star2').animate({
            opacity:'0'
        },400,'swing', function () {
            $('#main .star2').animate({
                opacity:'1'
            },1000,'swing', function () {
                $('#main .star2').animate({
                    opacity:'0'
                },600,'swing')
            })
        })
        },3000)

    //NBA��������¼�
    $('.top-ad').on('mouseenter', function () {
        $('.nba-ad').show();
        $('.top-nav').hide();
        $('.logo').css('zIndex',10);
    })

    //NBA����Ƴ��¼�
    $('.nba-ad').on('mouseleave', function () {
        $('.nba-ad').hide();
        $('.top-nav').show();
        $('.logo').css('zIndex',0);
    })

    //���ε�������
    $('.rank-item').on('mouseenter', function () {
        $(this).siblings('.rank-item').css('height','27px')
        $(this).css('height','97px').addClass('current').siblings('.rank-item').removeClass('current');
    })

    $('.rank-item').on('mouseleave', function () {
        $(this).css('height','97px');
    })

    //�����������¼�
    $('.col-body1').on('mouseenter','.rank-item', function () {
        $('.col-body2 .rank-item').removeClass('current').css('height','27px');;
    })

    $('.col-body2').on('mouseenter','.rank-item', function () {
        $('.col-body1 .rank-item').removeClass('current').css('height','27px');;
    })
    
    //�������������¼�
    $('.top-nav2').on('mouseenter', function () {
        $('.game-list').show();
        $('.top-nav2').addClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-170PX');
    })

    $('.top-nav2').on('mouseleave', function () {
        $('.game-list').hide();
        $('.top-nav2').removeClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-150PX');
    })

    $('.game-list').on('mouseenter', function () {
        $('.game-list').show();
        $('.top-nav2').addClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-170PX');
    })

    $('.game-list').on('mouseleave', function () {
        $('.game-list').hide();
        $('.top-nav2').removeClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-150PX');
    })

    //��ά�������Ƴ�
    $('.header-right').on('mouseenter', function () {
        $('.b-qr-box').css('zIndex',10).show();
    })
    $('.header-right').on('mouseleave', function () {
        $('.b-qr-box').css('zIndex',0).hide();
    })

    //��¼ҳ��
    $('#header .login').on('click', function () {
        $('#cover-bg').show();
        $('#login-web').show();
    })


    //��¼ҳ�ر�
    $('.login-header .close').on('click', function () {
        $('#cover-bg').hide();
        $('#login-web').hide();
    })

    //��¼ҳ����
    $('#login-web .qr-box>img').on('mouseenter', function () {
        $('#login-web .qr-box').stop(true,false).animate({
            left:'-70px'
        },150,'swing', function () {
            $('#login-web .scan').stop(true,false).animate({
                opacity:'1'
            },150,'swing')
        })
    })

    $('#login-web .qr-box>img').on('mouseleave', function () {
        $('#login-web .scan').stop(true,false).animate({
            opacity:'0'
        },150,'swing', function () {
            $('#login-web .qr-box').stop(true,false).animate({
                left:'0'
            },150,'swing')
        })
    })
})
