$(document).ready(function () {
    var a = sessionStorage.getItem("identity");
    var identity = a.split(",");
    for (var i = 0; i < identity.length; i++) {
        $("#well").append('<div class="block"> ' +
            '<button type="button" class="block-toggle"> ' +
            '<div class="block-toggle-header">' + identity[i] + '</div>' +
            '<div class="block-toggle-footer">' + (i + 1) + '号</div>' +
            '</button>' +
            '</div>')
    }

    $("#back").click(function () {
        window.location.href = "fan.html";
    })
});