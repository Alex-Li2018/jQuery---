

console.log($('.g-header .g-header-con  .login-btn'));
//$('.login-box').on('click',function(){
//    $('#login-web').show();
//})


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
