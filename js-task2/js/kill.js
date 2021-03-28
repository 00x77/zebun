$(document).ready(function () {
    //检测当前是杀人还是投票，并添加对应的样式
    if (sessionStorage.getItem("beKill") != null) {
        var beKill = sessionStorage.getItem("beKill").split(",");
    }
    else {
        var beKill = [];
    }

    if (sessionStorage.getItem("beVote") != null) {
        var beVote = sessionStorage.getItem("beVote").split(",");
    }
    else {
        var beVote = [];
    }

    if (sessionStorage.getItem("kill-step") != null) {
        $("#header-title").text("杀手杀人");
        $("#pop-ups").text("杀手请睁眼，杀手请选择要杀的对象。");
    }
    else if (sessionStorage.getItem("vote-step") != null) {
        $("#header-title").text("投票");
        $("#pop-ups").text("发言谈论结束，大家请投票。");
    }

    var heatmanNumber = parseInt(sessionStorage.getItem("heatmanNumber"));
    var civilianNumber = parseInt(sessionStorage.getItem("civilianNumber"));
    var a = sessionStorage.getItem("identity");
    var identity = a.split(",");
    var person = JSON.parse(sessionStorage.getItem("person"));
    //根据人数创建格子
    for (var i = 0; i < identity.length; i++) {
        $("#well").append('<div class="block"> ' +
            '<button type="button" class="block-toggle"> ' +
            '<div class="block-toggle-header">' + identity[i] + '</div>' +
            '<div class="block-toggle-footer">' + (i + 1) + '号</div>' +
            '</button>' +
            '<div class="block-dropmenu">' +
            '<button><img src="../img/kill.png" class="dropmenu-btn btn-sm-1"></button>' +
            '</div>' +
            '</div>')
        if (person[i].condition == "died") {
            $(".block-toggle-header").eq(i).css("background-color", "#83b09a");
            $(".block-toggle").eq(i).attr("disabled", true);
        }
    }
    //下拉按钮隐藏
    $(".block-dropmenu").hide();

    function numberReduce(i) {
        if (identity[i] == "杀手") {
            heatmanNumber--;
            sessionStorage.setItem("heatmanNumber", heatmanNumber)
        }
        else {
            civilianNumber--;
            sessionStorage.setItem("civilianNumber", civilianNumber)
        }
    }
    //按钮点击效果
    for (var i = 0, len = identity.length; i < len; i++) {
        !function (i) {
            $(".block-toggle").eq(i).click(function () {
                if (sessionStorage.getItem("kill-step") != null && person[i].identity == "杀手") {
                    alert("请选择正确的目标!");
                }
                else {
                    $(".block-dropmenu").hide();
                    $(".block-dropmenu").eq(i).toggle();
                }
            });

            $(".block-dropmenu").eq(i).click(function () {
                person[i].condition = "died";
                if (sessionStorage.getItem("kill-step") != null) {
                    person[i].beKill = 1;
                    beKill.push(i);
                    sessionStorage.setItem("beKill", beKill);
                    numberReduce(i);
                }
                else if (sessionStorage.getItem("vote-step") != null) {
                    person[i].beVote = 1;
                    beVote.push(i);
                    sessionStorage.setItem("beVote", beVote);
                    numberReduce(i);
                }
                sessionStorage.setItem("person", JSON.stringify(person));
                window.location.href = "ben.html";
            })
        }(i);
    }
});