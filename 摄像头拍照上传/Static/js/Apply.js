
/*
 *UserName:申请人姓名span
 *UserId:申请人ID data-userid
 *DepartmentName:部门名称 span
 *DepartmentId:部门Id data-DepartmentId
 *StartTime:开始时间 input
 *EndTime:结束时间 input
 *TotalTime:用车天数 span
 *:用车分钟
 *Departure:起始地 input
 *RegionCode:派车区域 input
 *Destination:目的地input
 *PeopleNumber:乘车人数input
 *IsDriver:是否当司机input
 *UseReason:用车原由textarea
 *ApproverName:审批人span
 */
var $UserName = $('#UserName');
var $DepartmentName = $('#DepartmentName');
var $StartTime = $('#StartTime');
var $EndTime = $('#EndTime');
var $TotalTime = $('#TotalTime');
var $Departure = $('#Departure');
var $RegionCode = $('#RegionCode');
var $Destination = $('#Destination');
var $PeopleNumber = $('#PeopleNumber');
var $IsDriver = $('#IsDriver');
var $UseReason = $('#UseReason');
var $ApproverName = $('#ApproverName');
var imgSrc = '';
var TotalTime; //要显示的请假总时长（天数）
var TotalM; //分钟显示请假总时长

/*获取现在的时间input[date]控件*/
$(function() {
    // $StartTime.calendar();
    $StartTime.attr('disabled', 'true');
    $EndTime.calendar();
    var nowTime = new Date();
    var year = nowTime.getFullYear();
    var month = nowTime.getMonth() + 1;
    var date = nowTime.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    // 给开始时间赋初始值
    $StartTime.val(year + "-" + month + "-" + date);
    // 给开始时间设置最小值
    $StartTime.attr('min', year + "-" + month + "-" + date);
    // 时间计算
    $("input[type=text]").change(function(event) {
        var time; //开始结束时间差

        // 获取开始时间，并变为2017-01-03格式
        var StartYear = (new Date($StartTime.val())).getFullYear();
        var StartMonth = (new Date($StartTime.val())).getMonth() + 1;
        var StartDate = (new Date($StartTime.val())).getDate();
        if (StartMonth < 10) {
            StartMonth = "0" + StartMonth;
        }
        if (StartDate < 10) {
            StartDate = "0" + StartDate;
        }
        // 当开始时间小于今天的时间，则赋值请假开始时间为现在的时间
        if (nowTime > new Date($StartTime.val())) {
            $StartTime.val(year + "-" + month + "-" + date);
        }
        // 当开始时间比今天的时间大三天，则让他重新选时间
        if (new Date($StartTime.val() + " 00:00:00") - new Date(year + "-" + month + "-" + date + " 00:00:00") > 172800000) {
            $.alert("时间超过三天，请从新选择开始时间")
            $StartTime.val('');
        }
        // 当开始时间比开始的时间大三天，则让他重新选时间
        if (new Date($EndTime.val() + " 00:00:00") - new Date($StartTime.val() + " 00:00:00") > 172800000) {
            $.alert("用车时间超过三天，请从新选择结束时间")
            $EndTime.val('');
        }
        // 当结束时间小于开始时间，则赋值请假结束时间为开始请假的时间
        if (new Date($EndTime.val()) < new Date($StartTime.val())) {
            $EndTime.val(StartYear + "-" + StartMonth + "-" + StartDate);
        }
        // 计算开始结束的时间差
        time = new Date($EndTime.val()) - new Date($StartTime.val());
        // 计算出请假的天数
        if (time != NaN) {
            var d = parseInt(time / (1000 * 60 * 60 * 24)) + 1;
            var h = parseInt(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var m = parseInt(time % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));

            // 显示请假的总时长（以天为单位）
            if (d) {
                $TotalTime.text(d + ' 天');
                TotalTime = d + '天';
                // 计算以分钟为单位的开始结束时间差
                TotalM = d * 24 * 60;
            }
        }

    });
});

// 表单提交
// 用车事由字数验证
$(function() {
    document.querySelector("textarea").oninput = function() {
        var length = $(this).val().length;
        var reason = $(this).val();
        if (length <= 1000) {
            $(".textLength").text(length);
            $(this).val(reason.substr(0, 1000));
        } else {
            $(".textLength").text(1000);
            $(this).val(reason.substr(0, 1000));
        }
    }
});
// 用车事由字数验证
// 派车区域
$(function() {
    $RegionCode.select({
        title: "选择派车区域",
        items: [{
            title: "市内",
            value: "1"
        }, {
            title: "市外",
            value: "2"
        }, {
            title: "省外",
            value: "3"
        }]
    });
});
// 派车区域


/*图片添加*/
$(function() {
        $('#addImg').click(function(event) {
            $('#addImgFile').click();
        });
        //图片显示插件
        $('#addImgFile').change(function(event) {
            var file = this.files[0];
            var imageType = /image.*/;
            if (file.type.match(imageType)) {
                var reader = new FileReader();
                reader.onload = function() {
                    var blobURL = reader.result; 
                    var image = new Image();
                    image.src = blobURL;
                    image.onload = function() {
                        imgSrc = resizeMe(image);
                        $('#upImg').append('<div class="wrapImg">' +
                            '<img src="' + imgSrc + '" width="50" height="50" class="upimg" />' +
                            '<img src="../Static/images/close.png" width="10" height="10" class="deleatimg">' +
                            '</div>');
                        // 删除照片
                        $('.deleatimg').click(function(event) {
                            $(this).parent().remove();
                            $('#addImg').show();
                            $('#addImgFile').val('');
                        });
                        // 删除照片
                        $('#addImg').hide();
                        // 预览图片
                        $('.upimg').click(function(event) {
                            var pb1 = $.photoBrowser({
                                items: [this.src]
                            });
                            pb1.open(); //打开
                            $('.photo-container').click(function(event) {
                                pb1.close(); //关闭
                            });
                        });
                        // 预览图片
                        // 上传
                        // $.post('/path/to/file', {'imgbase64': imgSrc}, function(data) {
                        //     /*optional stuff to do after success */
                        //     if(res.state){
                        //         console.log('上传成功');
                        //     }else{
                        //         console.log('上传失败');
                        //     }
                        // });
                    }
                }
                reader.readAsDataURL(file);
            } else {
                alert('失败，从新再来');
            }
        });
    })
/*图片添加*/

/*图片压缩*/
function resizeMe(img) {
    //压缩的大小
    var max_width = 1024;
    var max_height = 768;

    var canvas = document.createElement('canvas');
    var width = img.width;
    var height = img.height;

    if (width > height) {
        if (width > max_width) {
            height = Math.round(height *= max_width / width);
            width = max_width;
        }
    } else {
        if (height > max_height) {
            width = Math.round(width *= max_height / height);
            height = max_height;
        }
    }

    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    //压缩率
    return canvas.toDataURL("image/jpeg", 0.7);
}
/*图片压缩*/
