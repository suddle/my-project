import { Validator } from 'vee-validate';
// 表单验证器
Validator.extend('phone', (val)=>{ return /^0{0,1}(13[0-9]|14[5-7]|15[0-3]|15[5-9]|18[0-9]|17[0-9])[0-9]{8}$/.test(val)});
Validator.extend('code', (val)=>{ return /^[0-9]{6}$/.test(val)});
Validator.extend('password', (val)=>{ return /^[A-Za-z0-9\@\!\#\$\%\^\&\*\.\~]{6,10}$/.test(val)});
Validator.extend('realname', (val)=>{ return /^[\u4E00-\u9FA5]+$/.test(val)});
export default Validator;