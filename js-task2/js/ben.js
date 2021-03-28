$(document).ready(function () {
    //检测是否第一次进入这个页面
    if (sessionStorage.getItem("stepTime") != null) {
        var aTime = sessionStorage.getItem("stepTime");
        var stepTime = aTime.split(",");
    }
    else {
        var stepTime = [];
        stepTime[0] = parseInt(sessionStorage.getItem("startTime"));
    }
    //当杀手人数为0或平民人数小于杀手人数时结束游戏
    //如果游戏没结束则检测是否第一次进入这个页面，并把天数记录下
    if (parseInt(sessionStorage.getItem("civilianNumber")) < parseInt(sessionStorage.getItem("heatmanNumber"))) {
        var a = new Date();
        var time = a.getTime();
        sessionStorage.setItem("endTime", time);
        stepTime.push(time);
        sessionStorage.setItem("stepTime", stepTime);
        alert("游戏结束。")
        voteReturn();
        sessionStorage.setItem("heatmanWin", 0);
        location.href = "result.html"
    }
    else if (sessionStorage.getItem("heatmanNumber") == 0) {
        var a = new Date();
        var time = a.getTime();
        sessionStorage.setItem("endTime", time);
        stepTime.push(time);
        sessionStorage.setItem("stepTime", stepTime);
        alert("游戏结束。")
        voteReturn();
        sessionStorage.setItem("civilianWin", 0);
        location.href = "result.html"
    }
    else if (sessionStorage.getItem("day") != null) {
        var z = sessionStorage.getItem("day");
        var day = new Array;
        day = z.split(",");
        if (sessionStorage.getItem("vote-step") != null) {
            var a = new Date();
            var time = a.getTime();
            stepTime.push(time);
            sessionStorage.setItem("stepTime", stepTime);
        }
    }
    else {
        var day = [0];
        sessionStorage.setItem("day", day);
    }

    sessionStorage.removeItem("kill-step");
    sessionStorage.removeItem("vote-step");
    if (sessionStorage.getItem("beKill") != null) {
        var beKill = sessionStorage.getItem("beKill").split(",");
    }
    if (sessionStorage.getItem("beVote") != null) {
        var beVote = sessionStorage.getItem("beVote").split(",");
    }
    var identity = sessionStorage.getItem("identity").split(",");

    function voteReturn() {
        if (sessionStorage.getItem("vote-step") != null) {
            var a = sessionStorage.getItem("day");
            var day = a.split(",");
            day.splice(1, 1);
            sessionStorage.setItem("day", day);
        }
    }
    //将阿拉伯数字转为汉字，用于显示第几天
    function convertToChinese(num) {
        var str = num.toString();
        var len = num.toString().length;
        var C_Num = [];
        for (var i = 0; i < len; i++) {
            C_Num.push(N[str.charAt(i)]);
        }
        return C_Num.join('');
    }
    //根据天数创建页面
    for (var o = 0; o < day.length; o++) {
        var number = o + 1;
        var N = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        var chinese = convertToChinese(number);
        $("#well").append('<div class="w-100p bd-01 bdc-c9 mb-25">' +
            '<div class="dayHeader ft-15 lh-40 ls-02 text-center bgc-white c-29">第' + chinese + '天</div>' +
            '<div class="dayBody dis-f bdt-01 bdc-c9 bgc-c9">' +
            '<div class="f-l w-20 bgc-white bdr-01 bdc-c9 brts-02"></div>' +
            '<div class="flex1 pt-25 pr-30 pl-30 pb-40 bgc-white blts-02">' +
            '<div class="moon">' +
            '<button class="step kill">杀手杀人</button>' +
            '<p class="text-center ft-14 lh-30 killperson" style="position:relative;bottom:0.5rem"></p>' +
            '</div>' +
            '<div class="sun">' +
            '<button class="step Dspeak">亡灵发表遗言</button>' +
            '<button class="step Lspeak">玩家依次发言</button>' +
            '<button class="step vote">投票</button>' +
            '<p class="text-center ft-14 lh-30 voteperson" style="position:relative;bottom:0.5rem"></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>')
        if (sessionStorage.getItem("beKill") != null && beKill[o] != undefined) {
            $(".killperson").eq(o).text((parseInt(beKill[o]) + 1) + "号被杀死，身份是" + identity[beKill[o]])
        }
        if (sessionStorage.getItem("beVote") != null && beVote[o] != undefined) {
            $(".voteperson").eq(o).text((parseInt(beVote[o]) + 1) + "号被投死，身份是" + identity[beVote[o]])
        }
    }



    if (day.length > 1) {
        for (let i = 0, len = day.length - 1; i < len; i++) {
            $(".dayBody").eq(i).hide();
        }
        for (let i = 0; i < day.length; i++) {
            $(".dayHeader").eq(i).click(function () {
                $(".dayBody").eq(i).toggle();
            })
        }
    }


    //根据进行到第几步并给按钮上色
    if (sessionStorage.getItem("step") != null) {
        var a = sessionStorage.getItem("step");
        var x = a.split(",");
        $(".Dspeak").attr("disabled", false);
    }
    else {
        var x = [];
    }

    function disable() {
        var p = x.length;
        for (var i = 0; i < x.length; i++) {
            $(".step").eq(i).css("background-color", "#92b7a5");
            $(".step").eq(i).addClass("step-chance");
        }
        $(".step").eq(p).attr("disabled", false);
    }
    disable();

    //杀人按钮点击效果
    for (let i = 0; i < day.length; i++) {
        $(".kill").eq(i).click(function () {
            x.push(0);
            sessionStorage.setItem("step", x);
            sessionStorage.setItem("kill-step", 1)
            window.location.href = "kill.html";
        });
        //死者发言按钮点击效果
        $(".Dspeak").eq(i).click(function () {
            if (x.length % 4 != 1) {
                alert("请按顺序来！")
            }
            else {
                x.push(0);
                disable();
                alert("请死者亮明身份并发表遗言。")
            }
        })
        //讨论按钮点击效果
        $(".Lspeak").eq(i).click(function () {
            if (x.length % 4 != 2) {
                alert("请按顺序来！")
            }
            else {
                x.push(0);
                disable();
                alert("玩家依次发言讨论。")
            }
        })
        //投票按钮点击效果
        $(".vote").eq(i).click(function () {
            if (x.length % 4 != 3) {
                alert("请按顺序来！")
            }
            else {
                x.push(0);
                day.push(0)
                sessionStorage.setItem("day", day);
                sessionStorage.setItem("step", x);
                sessionStorage.setItem("vote-step", 1);
                window.location.href = "kill.html";
            }
        });
    }

    $("#end").click(function () {
        var c = confirm("确定要结束游戏吗？")
        if (c == true) {
            sessionStorage.clear();
            location.href = "choose.html"
        }
    })
    //法官日记按钮点击效果
    $("#diary").click(function () {
        sessionStorage.setItem("ben", 0);
        location.href = "diary.html"
    })
});