;
$(document).ready(function() {
    $("#back").click(function(event) {
        window.location.href = 'http://www.zzgxfyzx.gov.cn:6100/CarApply';
    });
    // // 流程图
    // if ($("#box").length) {
    //     var strJson = [{ Name: "刘江涛", ApproveOpinion: "没", Status: 2 }, { Name: "刘庭长", ApproveOpinion: "没", Status: 2 }, { Name: "赵科长", ApproveOpinion: "没", Status: 2 }, { Name: "王主任", ApproveOpinion: "没", Status: 2 }, { Name: "刘党组", ApproveOpinion: "没", Status: 3 }];
    //     drawFlowChart('box', strJson);
    // }

});
// 时间转换
function ChangeDateFormat(jsondate) {
    jsondate = jsondate.replace("/Date(", "").replace(")/", "");
    if (jsondate.indexOf("+") > 0) {
        jsondate = jsondate.substring(0, jsondate.indexOf("+"));
    } else if (jsondate.indexOf("-") > 0) {
        jsondate = jsondate.substring(0, jsondate.indexOf("-"));
    }

    var date = new Date(parseInt(jsondate, 10));
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    return date.getFullYear() + "-" + month + "-" + currentDate;
}
// 时间转换

// 获取url里面的search
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}
// 获取url里面的search

function seePhoto() {
    // 预览图片
    $('#DrivingLicense img').click(function(event) {
        var pb1 = $.photoBrowser({
            items: [this.src]
        });
        pb1.open(); //打开
        $('.photo-container').click(function(event) {
            pb1.close(); //关闭
        });
    });
    // 预览图片
}