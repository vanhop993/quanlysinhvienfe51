// console.log(axios);

// khai báo services
var svService = new sinhVienService();

var layThongTinSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
    promise.then(function (result) {
        var content = '';
        for(var i = 0; i < result.data.length; i++){
            // lấy ra từng sinh viên từ kết quả server trả về
            var sv = result.data[i];
            // tạo đối tượng sv
            var sinhVien = new SinhVien();
            sinhVien.maSV = sv.maSinhVien;
            sinhVien.tenSV = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.loaiSV = sv.loaiSinhVien;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            content +=`<tr>
                <td>${sinhVien.maSV}</td>
                <td>${sinhVien.tenSV}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSV}</td>
                <td>${sinhVien.diemTB().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td>
                    <button class="btn btn-danger" onclick = "xoaSinhVien('${sinhVien.maSV}')">Xóa</button>
                    <button class="btn btn-primary mr-1" onclick = "chinhSua('${sinhVien.maSV}')">Chỉnh sửa</button>
                </td>
            </tr>
            `
        }
        document.getElementById('tb1SV').innerHTML = content;
    }).catch(function(err){
        console.log(err.response.data);
    })
}
layThongTinSinhVien();
// tạo ra 1 object chưa các thông tin mà backend cung cấp 
// var objectGetSinhVien = {
//     url:'http://svcy.myclass.vn//api/SinhVienApi/LayDanhSachSinhVien',// đường dẫn backend cung cấp để lấy dữ liệu hoặc thêm dữ liệu
//     method:'GET',// phương thức lấy dữ liệu do backend cung cấp 
// }

// var promise = axios({
//     url:'http://svcy.myclass.vn//api/SinhVienApi/LayDanhSachSinhVien',// đường dẫn backend cung cấp để lấy dữ liệu hoặc thêm dữ liệu
//     method:'GET',// phương thức lấy dữ liệu do backend cung cấp 
// })
// dùng thư viện axios gửi yêu cầu đến server
// var promise = axios(objectGetSinhVien);

// var layDuLieuThanhCong = function(result){
//     var content = '';
//     for(var i = 0; i < result.data.length; i++){
//         // lấy ra từng sinh viên từ kết quả server trả về
//         var sv = result.data[i];
//         // tạo đối tượng sv
//         var sinhVien = new SinhVien();
//         sinhVien.maSV = sv.maSinhVien;
//         sinhVien.tenSV = sv.tenSinhVien;
//         sinhVien.email = sv.email;
//         sinhVien.loaiSV = sv.loaiSinhVien;
//         sinhVien.diemToan = sv.diemToan;
//         sinhVien.diemLy = sv.diemLy;
//         sinhVien.diemHoa = sv.diemHoa;
//         sinhVien.diemRenLuyen = sv.diemRenLuyen;
//         content +=`<tr>
//             <td>${sinhVien.maSV}</td>
//             <td>${sinhVien.tenSV}</td>
//             <td>${sinhVien.email}</td>
//             <td>${sinhVien.loaiSV}</td>
//             <td>${sinhVien.diemTB().toFixed(2)}</td>
//             <td>${sinhVien.diemRenLuyen}</td>
//         </tr>
//         `
//     }
//     document.getElementById('tb1SV').innerHTML = content;
// }

// var layDuLieuThatBai = function(err){// hàm xử lý khi kết quả trả về thất bại
//     console.log(err.response.data);
// }

// phương thức .then(callback) : nhận vào 1 hàm có 1 tham số là kết quả trả về thành công từ phía server (trả dữ liệu) 
// phương thức .catch(callback) : nhận vào 1 hàm có 1 tham số là kết quả trả về từ phía server thất bại (trả lỗi )
// promise.then(layDuLieuThanhCong).catch(layDuLieuThatBai);

//-----------POST: chức năng thêm sinh viên cho sever

document.getElementById('btnThemSV').onclick = function(){
    // lấy thông tin người dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSV = document.getElementById('maSV').value;
    sv.tenSV = document.getElementById('tenSV').value;
    sv.email = document.getElementById('email').value;
    sv.loaiSV = document.getElementById('loaiSV').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    console.log('sv',sv)
    // tạo ra object backend cần 
    var obj = {
        // {
        //     "maSinhVien": 0,
        //     "tenSinhVien": "string",
        //     "loaiSinhVien": "string",
        //     "diemToan": 0,
        //     "diemLy": 0,
        //     "diemHoa": 0,
        //     "diemRenLuyen": 0,
        //     "email": "string"
        //   }
        // cái phần thuộc tính trên là bên backend cho và phải trùng mới có thể đưa dữ liệu lên máy chủ đc nếu lớp đối tượng mình tạo ko giống thì phải gán lại như bên dưới 
        "maSinhVien":sv.maSV,
        "tenSinhVien":sv.tenSV,
        "loaiSinhVien":sv.loaiSV,
        "diemToan":sv.diemToan,
        "diemLy":sv.diemLy,
        "diemHoa":sv.diemHoa,
        "diemRenLuyen":sv.diemRenLuyen,
        "email":sv.email,
    }

    axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method:'POST',
        data:obj,
    }).then(function(result){
        console.log('kết quả',result.data);
        // để web hiển thị người mới thêm thì ta dùng 
        // cách 1: location.reload => load lại file scrip => gọi api lấy danh sách sinh viên mới về lại.
        location.reload();
        // cách 2: gọi lại api layDanhSachSinhVien tai đây.
    }).catch(function(err){
        console.log('kết quả',err.response.data);
    })
}

var xoaSinhVien = function(maSinhVien){
    // gọi api từ backend  => trả về promise
    var promise = svService.xoaSinhVien(maSinhVien);
    // dùng promise xử lý thành công hoặc thất bại
    promise.then(function(result){
        console.log(result.data);
        // load lại api để thấy thông tin sinh viên sau khi xóa
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data);
    })
}
var chinhSua = function(maSinhVien){
    // lấy thông tin từ server dựa vào mã sv
    var promise = svService.layThongTinSinhVien(maSinhVien);
    promise.then(function(result){
        var sinhVien = result.data;
        document.getElementById('maSV').value = sinhVien.maSinhVien;
        document.getElementById('tenSV').value = sinhVien.tenSinhVien ;
        document.getElementById('email').value = sinhVien.email ;
        document.getElementById('loaiSV').value  = sinhVien.loaiSinhVien  ;
        document.getElementById('diemToan').value = sinhVien.diemToan ;
        document.getElementById('diemLy').value = sinhVien.diemLy;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;
    }).catch(function(err){

    })
}

document.getElementById('btnCapNhapSV').onclick = function(){
    // lấy thông tin từ người dùng bấm nút cập nhập
    var svUpdate = new SinhVien();
    svUpdate.maSV = document.getElementById('maSV').value ;
    svUpdate.tenSV =  document.getElementById('tenSV').value ;
    svUpdate.email = document.getElementById('email').value ;
    svUpdate.loaiSV = document.getElementById('loaiSV').value ;
    svUpdate.diemToan = document.getElementById('diemToan').value ;
    svUpdate.diemLy = document.getElementById('diemLy').value ;
    svUpdate.diemHoa = document.getElementById('diemHoa').value ;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value ;
    
    var objUpdate = {
        "maSinhVien":svUpdate.maSV,
        "tenSinhVien":svUpdate.tenSV,
        "loaiSinhVien":svUpdate.loaiSV,
        "diemToan":svUpdate.diemToan,
        "diemLy":svUpdate.diemLy,
        "diemHoa":svUpdate.diemHoa,
        "diemRenLuyen":svUpdate.diemRenLuyen,
        "email":svUpdate.email,
    }

    // gọi api cap nhạp sinh viên từ BE cung cấp 
    var promise = svService.capNhapThongTinSinhVien(svUpdate.maSV,objUpdate);
    promise.then(function(result){
        console.log(result.data.tenSinhVien);
        console.log(result.data.loaiSinhVien);
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data);
    })
}
