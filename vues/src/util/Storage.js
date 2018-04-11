
import md5 from 'js-md5'
export const local = {
	setData: (key, data) => {
		data = JSON.stringify(data);
		console.log(md5(data));
		window.localStorage.setItem(key, data);
	},
	remove: (key) => {
		window.localStorage.removeItem(key);
	},
	isKey: (key) => {
		let _str = window.localStorage.getItem(key);
		if(_str.length){
			return true;
		}
		return false;

	},
	getData: (key, {dataType = "string"}) => {
		let _str = window.localStorage.getItem(key);
		if(dataType === "string"){
			return _str;
		}
		let _obj = JSON.parse(_str);
		return _obj;


	}
}
export const session = {
	setData: (key, data) => {
		data = JSON.stringify(data);
		console.log(md5(data));
		window.sessionStorage.setItem(key, data);
	},
	remove: (key) => {
		window.sessionStorage.removeItem(key);
	},
	isKey: (key) => {
		let _str = window.sessionStorage.getItem(key);
		console.log("key",_str)

		if(_str&&_str.length){
			return true;
		}
		return false;

	},
	getData: (key, {dataType = "string"}) => {
		let _str = window.sessionStorage.getItem(key);
		if(dataType === "string"){
			return _str;
		}
		let _obj = JSON.parse(_str);
		return _obj;


	}
}
