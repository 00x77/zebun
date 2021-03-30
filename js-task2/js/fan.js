$(document).ready(function () {
    var a = sessionStorage.getItem("identity");
    var identity = a.split(",");
    var FTxt = sessionStorage.getItem("FTxt");
    var STxt = sessionStorage.getItem("STxt");
    var i = 0;
    var c = 1;
    var n = 1;
    $(".number").text(n);
    $("#next").text("查看" + c + "号身份");
    c++;

    $("#back").click(function () {
        sessionStorage.clear();
        location.href = "setting.html";
    });

    $("#next").click(function () {
        let a = $("#front");
        let b = $("#contary");
        let f = $("#identity");
        let d = $(".number");
        let e = $("#next");
        if (i < identity.length * 2 - 2) {
            if (i == 0 || i % 2 == 0) {
                a.css({ "visibility": "visible" });
                b.css({ "visibility": "hidden" });
                f.text("角色:" + identity[(n - 1)])
                d.text(n);
                e.text("隐藏并传递给" + c + "号");
                if (identity[(n - 1)] == "杀手") {
                    $("#text").text("词组:" + STxt);
                }
                else {
                    $("#text").text("词组:" + FTxt);
                }
                i++;
                n++;
            }
            else {
                a.css({ "visibility": "hidden" });
                b.css({ "visibility": "visible" });
                d.text(n);
                e.text("查看" + c + "号身份");
                i++;
                c++;
            }
        }
        else if (i == identity.length * 2 - 2 ) {
            a.css({ "visibility": "visible" });
            b.css({ "visibility": "hidden" });
            d.text(n);
            e.text("法官页面");
            i++;
        }
        else (
            location.href = "diary.html"
        )
    });
});