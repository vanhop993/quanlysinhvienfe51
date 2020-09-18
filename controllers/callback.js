// ví dụ về hàm callback
var renderTitleH1 = function(title){
    var tagBody = document.querySelector('body');
    tagBody.innerHTML = `<h1>${title}</h1>`
}

// callback function là tham số truyền vào của một function khác 
var main = function(callback){
    callback('khai'); 
}
main(renderTitleH1);