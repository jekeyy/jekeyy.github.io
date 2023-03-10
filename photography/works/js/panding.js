function panding() {
    var but = $('.login').val();
    var phone = $('.phoneN').val();
    var name = $('.name').val();
    var password = $('#password').val();
    var codeIN = $('.codeIn').val();
    var xieyi = $('input:radio[id="xieyi"]:checked').val();
    var phonereg = /^1\d{10}$/;
    // var code = huoq();
    // console.log(code.str);
    if (phone == "" || name == "" || password == "" || codeIN == "") {
        alert("内容没有输入完")
    } else {
        if (phonereg.test(phone) == false) {
            alert("电话号码输入有误，请输入正确的电话号码")

        } else if (password.length < 6 || password.length > 12) {
            alert("密码输入有误，请输入正确的密码")
        } else {
            if (xieyi == null) {
                alert("需要同意协议才可以继续")
            } else {
                window.location.href = "../../首页/index/index.html";
            }
        }
    }

}

function huoq() {
    //做一个随机生成的验证码
    var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var oDiv = document.getElementById('codeImg');
    // 用来生成随机整数
    function getRandom(n, m) { // param: (Number, Number)
        n = Number(n);
        m = Number(m);
        // 确保 m 始终大于 n
        if (n > m) {
            var temp = n;
            n = m;
            m = temp;
        }
        return Math.floor(Math.random() * (m - n) + n);
    }
    // 将随机生成的整数下标对应的字母放入div中
    function getCode() {
        var str = '';
        // 验证码有几位就循环几次
        for (var i = 0; i < 4; i++) {
            var ran = getRandom(0, 62);
            str += codeStr.charAt(ran);
        }
        oDiv.innerHTML = str;
    }
    getCode(); // 调用函数，页面刷新也会刷新验证码
    // 点击刷新验证码
    oDiv.onclick = function() {
        getCode();
    }
}


/**
            //  * [btnCheck 按钮倒计时常用于获取手机短信验证码]
            //  */
// function btnCheck() {
//     $(this).addClass("on");
//     var time = 60;
//     $(this).attr("disabled", true);
//     var timer = setInterval(function() {
//         if (time == 0) {
//             clearInterval(timer);
//             $("#codeImg").attr("disabled", false);
//             $("#codeImg").val("获取验证码");
//             $("#codeImg").removeClass("on");
//         } else {
//             $('#codeImg').val("请" + time + "秒后重试");
//             time--;
//         }
//     }, 1000);
// }
// $("#codeImg").click(btnCheck);

function ret() {
    window.history.go(-1);
}