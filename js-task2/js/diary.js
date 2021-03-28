$(document).ready(function () {
    var a = sessionStorage.getItem("identity");
    var identity = a.split(",");
    if (sessionStorage.getItem("person") != null) {
        var person = JSON.parse(sessionStorage.getItem("person"));
    }
    else {
        var person = [];
        for (let i = 0; i < identity.length; i++) {
            person[i] = {
                number: (i + 1) + "号",
                identity: identity[i],
                condition: "alive",
                beVote: 0,
                beKill: 0
            };
        }
        sessionStorage.setItem("person", JSON.stringify(person));
    }
    //根据人数创建格子
    for (var i = 0; i < identity.length; i++) {
        $("#well").append('<div class="block"> ' +
            '<button type="button" class="block-toggle"> ' +
            '<div class="block-toggle-header">' + identity[i] + '</div>' +
            '<div class="block-toggle-footer">' + (i + 1) + '号</div>' +
            '</button>' +
            '</div>')
        if (person[i].condition != "alive") {
            $(".block-toggle-header").eq(i).css("background-color", "#83b09a");
            $(".block-toggle").eq(i).attr("disabled", true);
        }
    }
    //检测是从哪个页面跳转过来的
    if (sessionStorage.getItem("ben") != null) {
        $("#back").click(function () {
            window.location.href = "ben.html";
        })
    }
    else {
        $("#back").click(function () {
            window.location.href = "fan.html";
        })

        $("body").append('<footer class="pt-20 pr-50 pb-20 pl-50 bgc-29">' +
            '<button type="button" id="go" class="btn bgc-ly w-100p h-100p">' +
            '<a class="w-100p ft-20 ls-02 lh-50 c-white">开始游戏</a>' +
            '</button>' +
            '</footer>')
    }
    //跳转下个页面
    $("#go").click(function () {
        window.location.href = "ben.html";
    })
});