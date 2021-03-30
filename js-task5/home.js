$(document).ready(function () {
    var index = $("#login");
    var user = $("#input-yonghu");
    var password = $("#input-mima");
    var prompt = $("#prompt");

    index.click(function () {
        if (user.val().length == 0) {
            prompt.text("请输入用户名！")
        }
        else if (password.val().length == 0) {
            prompt.text("请输入密码！")
        }
        else {
            $.ajax({
                type: "post",
                url: "/a/login",
                data: { "name": user.val(), "pwd": password.val() },
                success: function (result) {
                    let co = JSON.parse(result);
                    if (co.code == 0) {
                        location.href = "http://dev.admin.carrots.ptteng.com";
                    }
                    else {
                        prompt.text(co.message);
                    }
                }
            })
        }

        //else {
        //    let xmlhttp = new XMLHttpRequest();
        //    xmlhttp.open("post", "/a/login", true);
        //    xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        //    xmlhttp.send("name=" + user.val() + "&pwd=" + password.val());
        //    xmlhttp.onreadystatechange = function () {
        //        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //            let co =JSON.parse(xmlhttp.responseText)
        //            if (co.code == 0) {
        //                location.href = "http://dev.admin.carrots.ptteng.com";
        //            }
        //            else {
        //                prompt.text(co.message);
        //            }
        //        }
        //   }
        //}
    })
});