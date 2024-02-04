import { format } from "date-fns";

import { formatter } from "@/lib/utils";
import { ProductsClient } from "./components/client";

const KhachHangPage = () => {
  const myProduct: SanPham[] = [
    {
      id: "aa-ee-22-33",
      giaBan: 100.5,
      giaNhap: 80.25,
      mota: "This is a sample product",
      soLuongTon: 50,
      tenSanPham: "Sample Product",
      tieuDe: "Sample Product Title",
      trangThai: 1,
      idPhieuNhap: 123,
      createBy: "John Doe",
      createDate: new Date(),
      lastUpdatedBy: "Jane Smith",
      lastUpdatedDate: "2024-02-02T10:00:00", // Assuming this is a valid date string
    },
    {
      id: "aa-ee-22-33",
      giaBan: 100.5,
      giaNhap: 80.25,
      mota: "This is a sample product",
      soLuongTon: 50,
      tenSanPham: "Sample Product",
      tieuDe: "Sample Product Title",
      trangThai: 0,
      idPhieuNhap: 123,
      createBy: "John Doe",
      createDate: new Date(),
      lastUpdatedBy: "Jane Smith",
      lastUpdatedDate: "2024-02-02T10:00:00", // Assuming this is a valid date string
    },
  ];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={myProduct} />
      </div>
    </div>
  );
};

export default KhachHangPage;
