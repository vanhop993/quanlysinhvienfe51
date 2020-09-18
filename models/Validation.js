// kiểm tra định dạng của thông tin input
// cách 2
var validation = function(){
    this.kiemTraRong = function(value,name,selectorError){
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = `${name} không được để trống`;
            return false;
        }else{
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
    }
    this.kiemTraChuoi = function(value,name,selectorError){
        var regexAllLetters = /^[A-Z a-z]+$/;
        if(regexAllLetters.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }else{
            document.querySelector(selectorError).innerHTML = `${name} phải là chữ!`;
            return false;   
        }
    }
    this.kiemTraEmail = function(value,name,selectorError){
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }else{
            document.querySelector(selectorError).innerHTML = `${name} không đúng định dạng!`;
            return false;   
        }
    }
    this.kiemTraSo  = function(value,name,selectorError){
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }else{
            document.querySelector(selectorError).innerHTML = `${name} phải là số!`;
            return false;   
        }
    }
    this.kiemTraDoDai = function(value,name,selectorError,minLength,maxLength){
        // nếu độ dài giá trị nhập vào lớn hơn độ lớn hơn độ lớn nhất hoặc nhỏ hơn độ dài tối thiểu => ko hợp lệ
        if(value.trim().length > maxLength || value.trim().length < minLength){
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} tới ${maxLength} ký tự`;
            return false;
        }else{
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
    }
    this.kiemTraGiaTri = function(value,name,selectorError,minValue,maxValue){
        // nếu giá trị nằm ngoài phạm vi giá trị thì thông báo lỗi 
        if(Number(value) > maxValue || Number(value) < minValue){
            document.querySelector(selectorError).innerHTML = `${name} có giá trị từ ${minValue} tới ${maxValue}`;
            return false;
        }else{
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
    }
}