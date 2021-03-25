$(document).ready(function () {
    var FTxt = sessionStorage.getItem("FTxt");
    var STxt = sessionStorage.getItem("STxt");
    var a = sessionStorage.getItem("day");
    var day = a.split(",").length;
    var beKill = sessionStorage.getItem("beKill").split(",");
    if (sessionStorage.getItem("beVote") != null) {
        var beVote = sessionStorage.getItem("beVote").split(",");
    }
    var identity = sessionStorage.getItem("identity").split(",");
    var startTime = parseInt(sessionStorage.getItem("startTime"));
    var endTime = parseInt(sessionStorage.getItem("endTime"));
    var x = sessionStorage.getItem("stepTime").split(",");
    var stepTime = [];
    var minuteTime = [];
    var secondTime = [];
    for (var i = 0; i < x.length; i++) {
        stepTime[i] = parseInt(x[i])
    }
    for (var i = 0; i < day; i++) {
        minuteTime[i] = Math.round((stepTime[i + 1] - stepTime[i]) / 1000 / 60);
        secondTime[i] = Math.round((stepTime[i + 1] - stepTime[i]) / 1000 % 60);
    }
    //根据获胜的人添加对应的样式
    if (sessionStorage.getItem("heatmanWin") != null) {
        $("#title").text("杀手胜利")
        $("#con").text("太棒了！你知道么？在捉鬼游戏中只有20%的卧底取得游戏最终的胜利哦！")
    }
    else {
        $("#title").text("平民胜利")
        $("#con").text("本轮游戏共抓出杀手" + Math.floor(identity.length / 4) + "人，共经历了" + day + "个白天，在杀人游戏中击败了67%的玩家！")
    }
    //给页面添加时间等样式
    $("#time").text("本次游戏时长共计0小时" + Math.round((endTime - startTime) / 1000 / 60) + "分钟");
    $("#heatmanNumber").text(Math.floor(identity.length / 4) + "人");
    $("#civilianNumber").text(identity.length - Math.floor(identity.length / 4) + "人");
    $("#heatmanVo").text("杀手词汇：" + STxt);
    $("#civilianVo").text("平民词汇：" + FTxt);

    for (var i = 0; i < day; i++) {
        //检测是否有人被投死
        if (sessionStorage.getItem("beVote") != null) {
            //检测是投票结束游戏还是杀人结束游戏
            if (beVote[i] != undefined) {
                $("main").append(
                    '<div class="result-line ft-13 lh-20">' +
                    '<p class="dis-f space-between">' +
                    '<span class="ft-15 c-51">第' + (i + 1) + '天</span>' +
                    '<span class="ft-12">' + minuteTime[i] + '分' + secondTime[i] + '秒</span>' +
                    '</p>' +
                    '<p>晚上：' + beKill[i] + '号被杀手杀死，' + beKill[i] + '号是' + identity[beKill[i]] + '</p>' +
                    '<p>白天：' + beVote[i] + '号被全民投票投死，' + beVote[i] + '号是' + identity[beVote[i]] + '</p>' +
                    '</div>'
                )
            }
            else {
                $("main").append(
                    '<div class="result-line ft-13 lh-20">' +
                    '<p class="dis-f space-between">' +
                    '<span class="ft-15 c-51">第' + (i + 1) + '天</span>' +
                    '<span class="ft-12">' + minuteTime[i] + '分' + secondTime[i] + '秒</span>' +
                    '</p>' +
                    '<p>晚上：' + beKill[i] + '号被杀手杀死，' + beKill[i] + '号是' + identity[beKill[i]] + '</p>' +
                    '</div>'
                )
            }
        }
        else {
            $("main").append(
                '<div class="result-line ft-13 lh-20">' +
                '<p class="dis-f space-between">' +
                '<span class="ft-15 c-51">第' + (i + 1) + '天</span>' +
                '<span class="ft-12">' + minuteTime[i] + '分' + secondTime[i] + '秒</span>' +
                '</p>' +
                '<p>晚上：' + beKill[i] + '号被杀手杀死，' + beKill[i] + '号是' + identity[beKill[i]] + '</p>' +
                '</div>'
            )
        }
    }

    $("#home").click(function () {
        sessionStorage.clear();
        location.href = "choose.html"
    })

    $("#more").click(function () {
        sessionStorage.clear();
        location.href = "choose.html"
    })
})