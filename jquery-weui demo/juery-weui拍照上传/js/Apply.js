
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
//var $UserName = $('#UserName');
//var $DepartmentName = $('#DepartmentName');
//var $StartTime = $('#StartTime');
//var $EndTime = $('#EndTime');
//var $TotalTime = $('#TotalTime');
//var $Departure = $('#Departure');
//var $RegionCode = $('#RegionCode');
//var $Destination = $('#Destination');
//var $PeopleNumber = $('#PeopleNumber');
//var $IsDriver = $('#IsDriver');
//var $UseReason = $('#UseReason');
//var $ApproverName = $('#ApproverName');
var imgSrc = ''; //定义参数
var imgSrc2="";//
//var TotalTime; //要显示的请假总时长（天数）
//var TotalM; //分钟显示请假总时长

/*获取现在的时间input[date]控件*/



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
                            '<img src="' + imgSrc + '" width="300" height="300" class="upimg" />' +
                            '<img src="image/close.png" width="10" height="10" class="deleatimg">' +
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
                    }
                }
                reader.readAsDataURL(file);
            } else {
                alert('失败，从新再来');
            }
        });
    })

/*图片压缩*/
function resizeMe(img) {
    //压缩的大小
    var max_width = 1024;
    var max_height = 768;

    var canvas = document.createElement('canvas');
    var width = img.width;
    var height = img.height;

//  if (width > height) {
//      if (width > max_width) {
//          height = Math.round(height *= max_width / width);
//          width = max_width;
//      }
//  } else {
//      if (height > max_height) {
//          width = Math.round(width *= max_height / height);
//          height = max_height;
//      }
//  }

    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    //压缩率
    return canvas.toDataURL("image/jpeg", 0.7);
}
//图片压缩2


function resizeMe2(img) {
    //压缩的大小
    var max_width = 1024;
    var max_height = 768;

  var canvas = document.createElement('canvas');
    var width = img.width;
    var height = img.height;
//
//  if (width > height) {
//      if (width > max_width) {
//          height = Math.round(height *= max_width / width);
//          width = max_width;
//      }
//  } else {
//      if (height > max_height) {
//          width = Math.round(width *= max_height / height);
//          height = max_height;
//      }
//  }

    canvas.width = width;
    canvas.height = height;

    var ctx2 = canvas.getContext("2d");
    ctx2.drawImage(img, 0, 0, width, height);
    //压缩率
    return canvas.toDataURL("image/jpeg", 0.7);
}

//上传图片二
  $('#addImg2').click(function(event) {
            $('#addImgFile2').click();
        });
 $('#addImgFile2').change(function(event) {
            var file = this.files[0];
            var imageType2 = /image.*/;
            if (file.type.match(imageType2)) {
                var reader2 = new FileReader();
                reader2.onload = function() {
                    var blobURL = reader2.result; 
                    var image2 = new Image();
                    image2.src = blobURL;
                    image2.onload = function() {
                    imgSrc2 = resizeMe2(image2);
                        $('#upImg2').append('<div class="wrapImg">' +
                            '<img src="' + imgSrc2 + '" width="300" height="300" class="upimg2" />' +
                            '<img src="image/close.png" width="10" height="10" class="deleatimg2">' +
                            '</div>');
                        // 删除照片
                        $('.deleatimg2').click(function(event) {
                            $(this).parent().remove();
                            $('#addImg2').show();
                            $('#addImgFile2').val('');
                        });
                        // 删除照片
                        $('#addImg2').hide();
                        // 预览图片
                        $('.upimg2').click(function(event) {
                            var pb1 = $.photoBrowser({
                                items: [this.src]
                            });
                            pb1.open(); //打开
                            $('.photo-container').click(function(event) {
                                pb1.close(); //关闭
                            });
                        });
                    }
                }
                reader2.readAsDataURL(file);
            } else {
                alert('失败，从新再来');
            }

    })








/*图片压缩*/

//
//function seePhoto() {
//  // 预览图片
//  $('#DrivingLicense img').click(function(event) {
//      var pb1 = $.photoBrowser({
//          items: [this.src]
//      });
//      pb1.open(); //打开
//      $('.photo-container').click(function(event) {
//          pb1.close(); //关闭
//      });
//  });
//  // 预览图片
//}










$("#submit").click(function(){
	alert(imgSrc);
	alert(imgSrc2);
	    $.post('/path/to/file', {'imgbase64': imgSrc}, function(data) {
                               /*optional stuff to do after success */
                               if(res.state){
                                   console.log('上传成功');
                               }else{
                                   console.log('上传失败');
                               }
                           });
})