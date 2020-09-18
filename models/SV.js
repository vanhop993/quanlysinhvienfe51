var SinhVien = function(maSinhVien,tenSinhVien,email,diemToan,diemLy,diemHoa,diemRenLuyen,loaisinhvien) {//lớp đối tượng sinh viên 
    // các thuộc tính của đối tượng sinh viên
    this.maSV = maSinhVien;
    this.tenSV = tenSinhVien;
    this.email = email;
    this.loaiSV = loaisinhvien;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemTB = function(){
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
    }
    this.diemRenLuyen = diemRenLuyen;
}