interface SanPham {
  id: string;
  giaBan?: number;
  giaNhap?: number;
  mota?: string;
  soLuongTon?: number;
  tenSanPham?: string;
  tieuDe?: string;
  trangThai: number;
  idPhieuNhap?: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
}

interface DanhMuc {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  nameDanhMuc?: string;
}

interface HinhThucThanhToan {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  hinhThucThanhToan?: 0 | 1; // assuming tinyint is used as boolean
}

interface KhuyenMai {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  giaTriKhuyenMai?: number;
  ngayBatDau?: Date | string;
  ngayKetThuc?: Date | string;
  tenKhuyenMai?: string;
  trangThai: number;
}

interface NhaCungCap {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  diaChiNhaCung?: string;
  email?: string;
  maNhaCungCap?: string;
  sdt?: string;
  tenNhaCungCap?: string;
}

interface Permision {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  method?: "POST" | "GET" | "DELETE" | "PUT";
  namePermision?: string;
  url?: string;
}

interface Role {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  role?: string;
  trangThai: number;
}

interface PermisionDetail {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  idPermision?: number;
  idRole?: number;
}

interface Ship {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  chiPhi?: number;
  maShip?: string;
  ngayShip?: Date | string;
  nhaVanChuyen?: string;
  trangThai: number;
}

interface TaiKhoan {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  loaitk?: "FACEBOOK" | "GOOOGLE";
  matKhau?: string;
  taiKhoan?: string;
}

interface KhachHang {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  dob?: Date | string;
  age: number;
  fullName?: string;
  gioiTinh?: "NAM" | "NU" | "KHAC";
  name?: string;
  trangThai: number;
  idTk?: number;
}

// Similar pattern for other tables...

interface DiaChi {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  huyen?: string;
  soNha?: string;
  tinh?: string;
  trangThai: number;
  xa?: string;
  idKh?: number;
}

// Continue defining interfaces for each table...

interface GioHang {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  ngayTao?: Date | string;
  trangThai: number;
  idKh?: number;
}

interface NhanVien {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  dob?: Date | string;
  age: number;
  fullName?: string;
  gioiTinh?: "NAM" | "NU" | "KHAC";
  name?: string;
  trangThai: number;
  idTk?: number;
}

interface DonHang {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  giaGiam?: number;
  ngayTao?: Date | string;
  ngayThanhToan?: Date | string;
  phiShip?: number;
  thoiGianDuKien?: Date | string;
  tongTien?: number;
  trangThai: number;
  idUser?: number;
  idDonHang?: number; // This seems like it might be a self-reference or error in naming.
  idShip?: number;
}

interface PhieuNhap {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  giaBan?: number;
  maPhieuNhap?: string;
  ngayHetHan?: Date | string;
  ngayNhap?: Date | string;
  ngaySanXuat?: Date | string;
  soLuong: number;
  tenPhieuNhap?: string;
  idNcc?: number;
  idPhieuNhap?: number; // Similar to DonHang, review if this self-reference is intended.
}

interface PhieuGiamGia {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  dieuKienGiam?: number;
  giaTriPhieuGiam?: number;
  loaiPhieuGiamGia?: string;
  ngayBatDau?: Date | string;
  ngayKetThuc?: Date | string;
  tenPhieuGiam?: string;
  idDh?: number;
}

// Define interfaces for RoleDetail, SanPham, ChiTietKhuyenMai, DanhMucChiTiet,
// DonHangChiTiet, GioHangChiTiet, Images, LoaiSanPham, ThanhToan following the same pattern.

// Example for a complex interface with enums and optional fields
interface LoaiSanPham {
  id: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
  tenLoaiSanPham?: string;
  trangThai: number;
  idSp?: number;
}

// Continue with the same structure for other tables...
