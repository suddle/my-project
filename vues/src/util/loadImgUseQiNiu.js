/**
 * Created by Administrator on 2017-06-14.
 */
/**
 *
 * @param clickBtn String 点击上传的按键
 */
function getToken(){
  wAjax("/common/imgtoken","get",null,function(data){

      console.log(data);

  })
}
function aaa(){
    alert('msg')
}
/**
 *
 * @param clickBtn 点击按钮的id
 * @param multi 是否开启多选
 * @param cb  获取的是上传图片之后的url 并开启回调函数
 */
function loadImgUseQiNiu(clickBtn,multi,cb){
 Qiniu.uploader({
    runtimes: 'html5,flash,html4',    //上传模式,依次退化
    browse_button: clickBtn,       //上传选择的点选按钮，**必需**
    uptoken_url: "/common/imgtoken",            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
    domain: "http://static.chuanshangjia.com/",   //bucket 域名，下载资源时用到，**必需**
    get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
  //  container: 'container',           //上传区域DOM ID，默认是browser_button的父元素，
    max_file_size: '100mb',           //最大文件体积限制
    flash_swf_url: './js/plupload/Moxie.swf',  //引入flash,相对路径
    max_retries: 3,                   //上传失败最大重试次数
    dragdrop: false,                   //开启可拖曳上传
    //drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
    chunk_size: '4mb',                //分块上传时，每片的体积
    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
    unique_names: false,
    save_key: false,
    multi_selection: multi,
    init: {
        'FilesAdded': function (up, files) {
            plupload.each(files, function (file) {
            });
        },
        'BeforeUpload': function (up, file) {
            var _path = up.files[up.files.length-1].name;
            console.log("path",_path);
            var fileType = _path.substring(_path.lastIndexOf(".")).toLowerCase();
            var imgType= ".jpeg|.jpg|.png|";
            if(imgType.indexOf(fileType+"|")==-1){
                ErrMsg="该文件类型不允许上传。请上传 "+imgType+" 类型的文件，当前文件类型为"+fileType;
                alert(ErrMsg);
                up.stop();
            }
        },
        'UploadProgress': function (up, file) {
        },
        'FileUploaded': function (up, file, info) {
            var domain = up.getOption('domain');
            var res = $.parseJSON(info);
            var sourceLink = domain + res.key; //获取上传成功后的文件的Url
            cb(sourceLink);
        },
        'Error': function (up, err, errTip) {
            //上传出错时,处理相关的事情
        },
        'UploadComplete': function () {
            //队列文件处理完毕后,处理相关的事情
            $('#upload-filelist li span').remove();
        },
        'Key': function (up, file) {
            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            // 该配置必须要在 unique_names: false , save_key: false 时才生效
            var date = new Date();
            var _random = Math.random()*10000;
            var keycode = $.md5(date + _random);
            var fileType = file.name.substring(file.name.indexOf('.')+1);
            var key = "mallpic/mainproperty/"+keycode+"."+ fileType;
            // do something with key here
            console.log(key);
            return key
        }
    }
 });
}


function cropImg(_id1,_id2,options,cb){
    $(_id1).on("click",function(){
        $(_id2).click();
    });

    $(_id2).on('change', function(){
        var _path =this.value;
        var fileType = _path.substring(_path.lastIndexOf(".")).toLowerCase();
        var imgType= ".jpeg|.jpg|.png|";
        if(imgType.indexOf(fileType+"|")==-1){
            ErrMsg="该文件类型不允许上传。请上传 "+imgType+" 类型的文件，当前文件类型为"+fileType;
            alert(ErrMsg);
            return false;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
           options.imgSrc = e.target.result;
           cropper = $(options.imageBox).cropbox(options);
           cb(cropper);
        }
        reader.readAsDataURL(this.files[0]);
    })

}
/**
 * 要被上传图片的id
 * @param _id
 */
