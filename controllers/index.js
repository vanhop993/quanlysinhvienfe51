// mangSV là biến toàn cục nên để trên đầu cùng của file
var mangSV = [];

// ntaoj new validation theo class validation.js
var validate = new validation();

// định nghĩa sự kiện khi người dùng click vào nút thêm sinh viên
document.getElementById('btnThemSV').onclick = function(){
    // tạo mảng chứa thông tin sinh viên
    // tạo đối tượng lưu trữ thông tin người dùng nhập vào 
    var sv = new SinhVien();
    sv.maSV = document.getElementById('maSV').value;
    sv.tenSV = document.getElementById('tenSV').value;
    sv.email = document.getElementById('email').value;
    sv.loaiSV = document.getElementById('loaiSV').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    var valid = true;


    // kiểm tra dữ liệu hợp lệ
    // hàm trim() là hàm loại bỏ các khoảng space ở đầu vào cuối của chuỗi
    // 1 kiểm tra rỗng 

    // cách 1
    // if(sv.maSV.trim() === ''){
    //     document.getElementById('err_maSV_ktRong').innerHTML = 'Mã sinh viên không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_maSV_ktRong').innerHTML = '';
    // }
    // if(sv.tenSV.trim() === ''){
    //     document.getElementById('err_tenSV_ktRong').innerHTML = 'Tên sinh viên không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_tenSV_ktRong').innerHTML = '';
    // }
    // if(sv.email.trim() === ''){
    //     document.getElementById('err_email_ktRong').innerHTML = 'email không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_email_ktRong').innerHTML = '';
    // }
    // if(sv.diemToan.trim() === ''){
    //     document.getElementById('err_diemToan_ktRong').innerHTML = 'Điểm không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_diemToan_ktRong').innerHTML = '';
    // }
    // if(sv.diemLy.trim() === ''){
    //     document.getElementById('err_diemLy_ktRong').innerHTML = 'Điểm không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_diemLy_ktRong').innerHTML = '';
    // }
    // if(sv.diemHoa.trim() === ''){
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = 'Điểm không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = '';
    // }
    // if(sv.diemRenLuyen.trim() === ''){
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = 'Điểm không được bỏ trống';
    //     valid = false;
    //     // return; // lệnh trả về và không làm tiếp các đoạn code phía sau.
    // }else{
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = '';
    // }


    //kiểm tra rỗng cách 2 sẽ viết hàm Validation.js trong controllers rồi lấy ra sử dụng
    valid &= validate.kiemTraRong(sv.maSV,'mã sinh viên','#err_maSV_ktRong') & 
    validate.kiemTraRong(sv.tenSV,'tên sinh viên','#err_tenSV_ktRong') & validate.kiemTraRong(sv.email,'email','#err_email_ktRong') & validate.kiemTraRong(sv.diemToan,'điểm toán','#err_diemToan_ktRong') & validate.kiemTraRong(sv.diemLy,'điểm Lý','#err_diemLy_ktRong') & validate.kiemTraRong(sv.diemHoa,'điểm Hóa','#err_diemHoa_ktRong') & validate.kiemTraRong(sv.diemRenLuyen,'điểm rèn luyện','#err_diemRenLuyen_ktRong');
     
    // kiểm tra toàn bộ là chữ 
    valid &= validate.kiemTraChuoi(sv.tenSV,'tên sinh viên','#err_tenSV_allLetters') ;
    // kiểm tra email
    valid &= validate.kiemTraEmail(sv.email,'email','#err_email_allLetters');
    // kiểm tra chuỗi là số
    valid &= validate.kiemTraSo(sv.maSV,'mã sinh viên','#err_maSV_allNumber') & validate.kiemTraSo(sv.diemToan,'điểm toán','#err_diemToan_allNumber') & validate.kiemTraSo(sv.diemLy,'điểm lý','#err_diemLy_allNumber') & validate.kiemTraSo(sv.diemHoa,'điểm hóa','#err_diemHoa_allNumber') & validate.kiemTraSo(sv.diemRenLuyen,'điểm rèn luyện','#err_diemRenLuyen_allNumber');
    // kiểm tra độ dài 
    valid &= validate.kiemTraDoDai(sv.maSV,'mã sinh viên','#err_maSV_maxMinLength',4,6);
    // kiểm tra giá trị 
    valid &= validate.kiemTraGiaTri(sv.diemToan,'điểm toán','#err_diemToan_maxMinValue',0,10) & validate.kiemTraGiaTri(sv.diemLy,'điểm lý','#err_diemLy_maxMinValue',0,10) & validate.kiemTraGiaTri(sv.diemHoa,'điểm Hóa','#err_diemHoa_maxMinValue',0,10) & validate.kiemTraGiaTri(sv.diemRenLuyen,'điểm rèn luyện','#err_diemRenLuyen_maxMinValue',0,10);

     // kiểm tra định dạng
    var regexAllLetters = /^[A-Z a-z]+$/; 
    if(!regexAllLetters.test(sv.tenSV)){
        document.getElementById('err_tenSV_allLetters').innerHTML = 'Tên sinh viên phải nhập chữ!';
        valid = false;
    }else{
        document.getElementById('err_tenSV_allLetters').innerHTML = '';
    }

    if(!valid){
        return;
    }

   


    mangSV.push(sv);
    // gọi hàm tạo bảng
    taoBang(mangSV);
    // gọi hàm lưu localStorage
    luuLocalStorage();

    // c1 làm theo kiểu hướng giao diện
    // 
    // //tạo thẻ td chưa nội dung
    // var tdMaSV = document.createElement('td');
    // tdMaSV.innerHTML = sv.maSV;
    // var tdTenSV = document.createElement('td');
    // tdTenSV.innerHTML = sv.tenSV;
    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;
    // var tdLoaiSV = document.createElement('td');
    // tdLoaiSV.innerHTML = sv.loaiSV;
    // var tdDiemTB = document.createElement('td');
    // tdDiemTB.innerHTML = sv.diemTB().toFixed(2);// toFixed(2) để làm tròn 2 chữ số hàn đơn vị
    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;
    // var tdChucNang = document.createElement('td');
    // var btnXoaSV = document.createElement('button');
    // btnXoaSV.className = 'btn btn-danger';
    // btnXoaSV.innerHTML = 'Xóa';
    // btnXoaSV.onclick = function() {
    //     // this đại diện cho button
    //     this.parentElement.parentElement.remove();
    // }

    // //thêm button xoaSV
    // tdChucNang.appendChild(btnXoaSV);
    // //tạo thẻ tr chưa thẻ td bên trên
    // var trSV = document.createElement('tr');

    // //thẻ thẻ td vảo trong tr
    // trSV.appendChild(tdMaSV);
    // trSV.appendChild(tdTenSV);
    // trSV.appendChild(tdEmail);
    // trSV.appendChild(tdLoaiSV);
    // trSV.appendChild(tdDiemTB);
    // trSV.appendChild(tdDiemRenLuyen);
    // trSV.appendChild(tdChucNang);

    // var tbodySV = document.getElementById('tb1SV');
    // tbodySV.appendChild(trSV);
}

// hàm tạo bảng 
var taoBang = function (mangSV){
    var contentTable = '';
    // duyệt qua mảng tạo ra các dòng tr
    for(var index = 0; index < mangSV.length ; index++){
        // mỗi lần duyệt lấy ra 1 đối tượng sinhVien từ trong mảng
        var sv = mangSV[index];

        //tạo đối tượng
        // cách 2 để gán giá trị cho sinhVien
        var sinhVien = new SinhVien(sv.maSV,sv.tenSV,sv.email,sv.diemToan, sv.diemLy,sv.diemHoa,sv.diemRenLuyen,sv.loaiSV);
        // var sinhVien = new SinhVien();
        // // c1 để gán giá trị cho sinhVien
        // sinhVien.maSV = sv.maSV;
        // sinhVien.tenSV = sv.tenSV;
        // sinhVien.email = sv.email;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;
        // sinhVien.loaiSV = sv.loaiSV;

        // tạo thẻ tr cộng dồn vào nội dung
        contentTable += `
            <tr>
                <td>${sinhVien.maSV}</td>
                <td>${sinhVien.tenSV}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSV}</td>
                <td>${sinhVien.diemTB()}</td>
                <td>${sinhVien.diemRenLuyen}</td><td><button class="btn btn-primary" onclick="chinhSua('${sinhVien.maSV}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSV('${sinhVien.maSV}')">Xóa</button></td>
            </tr>
        `
    }
    // in đọa code trong contentTable vào thẻ có id=tb1SV
    document.getElementById('tb1SV').innerHTML = contentTable;
}

var chinhSua = function (maSV){
    // khóa input chỉnh sửa sinh viên 
    document.getElementById('maSV').disabled = true;
    // tìm sinh viên có mã sinh viên trong mảng 
    for(var index = 0 ; index < mangSV.length ; index++){
        var sv = mangSV[index];
        if(sv.maSV === maSV){
            document.getElementById('maSV').value = sv.maSV;
            document.getElementById('tenSV').value = sv.tenSV ;
            document.getElementById('email').value = sv.email ;
            document.getElementById('loaiSV').value = sv.loaiSV  ;
            document.getElementById('diemToan').value = sv.diemToan ;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
        }
    }
    // gán thông tin sinh viên tìm đc lên control(thẻ input) phía trên
}

document.getElementById('btnCapNhapSV').onclick = function(){
    // lấy thông tin người dùng đã thay đổi trên giao diện để gán cho đối tượng svUpdate
    var svUpdate = new SinhVien();
    svUpdate.maSV = document.getElementById('maSV').value;
    svUpdate.tenSV = document.getElementById('tenSV').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.loaiSV = document.getElementById('loaiSV').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;

    // tìm svUpdate có mã trùng với maSV trong mảng => gán dữ liệu sinhVien đó = svUpdate
    for(var index = 0 ; index < mangSV.length ; index++){
        var sv = mangSV[index];
        if(sv.maSV === svUpdate.maSV){
            // phải gán từng thuộc tính vì js quy định như vậy
            sv.maSV = svUpdate.maSV;
            sv.tenSV = svUpdate.tenSV;
            sv.email = svUpdate.email;
            sv.loaiSV = svUpdate.loaiSV;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            sv.diemRenLuyen = svUpdate.diemRenLuyen;
        }
    }
    taoBang(mangSV);
    luuLocalStorage();
    // clear hết thông tin sau khi cập nhập và mở input maSV
    document.getElementById('maSV').disabled = false;
    var mangTheInput = document.querySelectorAll('input');
    for(var i = 0; i < mangTheInput.length ; i++){
        var tagInput = mangTheInput[i];
        tagInput.value ='';
    }
}

var xoaSV = function (maSV) {
    // mangSV là biến toàn cục khai báo phia trên đầu file
    for(var index = mangSV.length - 1; index >= 0;index--){
        var sv = mangSV[index];
        if(sv.maSV === maSV){
            mangSV.splice(index,1); // hàm xóa phần tử của mảng trong js, index:vị trí xóa , 1 là tại vị trí đó xóa 1 phần tử 
        }
    }
    taoBang(mangSV);
    // gọi hàm luuLocalStorage để thay đổi lại LocalStorage sau khi ấn button xóa.
    // luuLocalStorage();
}

var luuLocalStorage = function(){
    // các bước lưu trữ mảng sv xuống localStorage
    var sMangSinhVien = JSON.stringify(mangSV); // biến mảng sv thành chuỗi
    console.log('sMangSinhVien',sMangSinhVien);
    console.log('mangSV',mangSV);

    // fileMangSV là ten file lưu xuống 
    localStorage.setItem('fileMangSV',sMangSinhVien);
}

var layDuLieuLocalStorage = function(){
    if(localStorage.getItem('fileMangSV')){
        // lấy dữ liệu từ LocalStorage (dữ liệu lấy ra là chuỗi)
        var sMangSinhVien = localStorage.getItem('fileMangSV');
        // biến đổi dữ liệu từ chuỗi json về mảng 
        mangSV = JSON.parse(sMangSinhVien);
        taoBang(mangSV);
    }
}
// gọi hàm layDuLieuLocalStorage
layDuLieuLocalStorage();