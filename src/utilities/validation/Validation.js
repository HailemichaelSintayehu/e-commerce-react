export const isEmpty = value =>{
    if(!value) return true;
    return false
}
// export const isUserName = userName =>{
//     var re = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
//     if( (re.test(userName))) return true;
//     return false
// }
export const isEmail = email =>{
    var re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/  ;
    if((email.match(re))) return true;
    return false
}
export const isLength = password =>{
    if(!password.length < 6) return true;
    return false;
}
export const isMobileNumber = mobileNumber =>{
    if(!mobileNumber.length <=9) return true
    return false;
}

export const isMatch = (password,confirmPassword) =>{
    if(password ===confirmPassword) return true;
    return false;
}