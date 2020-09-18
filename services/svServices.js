var sinhVienService = function(){
    // phương thức giao tiếp Backend qua api => lấy thông tinsinh viên từ server về
    this.layDanhSachSinhVien = function(){
        var promise = axios({
            url:'http://svcy.myclass.vn//api/SinhVienApi/LayDanhSachSinhVien',// đường dẫn backend cung cấp để lấy dữ liệu hoặc thêm dữ liệu
            method:'GET',// phương thức lấy dữ liệu do backend cung cấp 
        });
        return promise;
    }
    this.xoaSinhVien = function(maSinhVien){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,// đường dẫn backend cung cấp để lấy dữ liệu hoặc thêm dữ liệu
            method:'DELETE',// phương thức XÓA dữ liệu do backend cung cấp 
        });
        return promise;
    }
    this.layThongTinSinhVien = function(maSinhVien){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,// đường dẫn backend cung cấp để lấy dữ liệu hoặc thêm dữ liệu
            method:'GET',// phương thức lấy dữ liệu do backend cung cấp 
        });
        return promise;
    }
    this.capNhapThongTinSinhVien = function(maSinhVien,sinhVienUpData){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method:'PUT',
            data:sinhVienUpData,
        })
        return promise;
    }
    this.timKiemSinhVien = function(keyword){
        console.log('chức năng tìm kiếm sinh viên');
        return '';
    }
}