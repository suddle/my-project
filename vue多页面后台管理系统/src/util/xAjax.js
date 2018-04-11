

/**
 * 格式化发送的数据
 * @param  Object _object 传入对象参数
 
 */
//ajax封装

function wAjax(url, methods, data, cb){
	ajax({
		url: url,
		type: methods,
		data: data,
		dataType: 'JSON',
		success: function(res, xml) {

			cb(res,xml);
		},
		fail: function(status) {
			

		}

	});
}
/**
 * 格式化发送的数据
 * @param  Object _object 传入对象参数
 
 */
function formatParams(_object){
	var _arr = [];
	for(var name in _object){
		_arr.push(name + "=" + _object[name]);
	};
	return _arr.join("&");
}
function ajax(options){
	options = options || {};
	options.type = (options.type || 'GET').toUpperCase();

	options.dataType = options.dataType || 'json';

	var params = formatParams(options.data);
	var xhr = null;
	//非ie的数据请求
	
	if(window.XMLHttpRequest){
		xhr = new window.XMLHttpRequest();
	}else{
		xhr = new window.ActiveXObject('Microsoft.XMLHTTP');//ie的数据请求
	}
	//接收数据
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4){
			var _status = xhr.status;
			if(_status>=200&&_status<=300){
				
				options.success&&options.success(xhr.responseText, xhr.responseXML);
			}else{
				options.fail&&options.fail(status);
			}
		}
	}
	//连接与发送
	if(options.type === 'GET'){
		xhr.open('GET', options.url+"?"+params, true);
		
		xhr.send(JSON.stringify(options.data));
	}else if(options.type === 'POST'){
		xhr.open('POST', options.url, true);
	
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset = UTF-8');
		xhr.send(params);
	}else if(options.type === 'JSON_POST'){
		xhr.open('POST', options.url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(options.data));
	}else if(options.type === 'FILE'){
		xhr.open('POST', options.url, true);

		xhr.send(options.data);
	}else if(options.type === "QINIU"){
		
        xhr.open('POST', options.url, true);
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", "UpToken "+options.data.qiniuToken);
        xhr.send(options.data.pic);
	}

}
var xAjax = wAjax;
export default  xAjax;//暴露方法