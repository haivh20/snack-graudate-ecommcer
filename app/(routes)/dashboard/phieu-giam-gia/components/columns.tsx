"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";
import { Badge } from "@/components/ui/badge";

export type ProductColumn = {
  id: string;
  tieuDe?: string;
  tenSanPham?: string;
  giaBan?: number;
  giaNhap?: number;
  mota?: string;
  soLuongTon?: number;

  trangThai: number;
  idPhieuNhap?: number;
  createBy?: string;
  createDate?: Date | string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: Date | string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "tenSanPham",
    header: "Tên Sản Phẩm",
  },
  {
    accessorKey: "tieuDe",
    header: "Tiêu Đề",
  },

  {
    accessorKey: "giaBan",
    header: "Giá Bán",
  },
  {
    accessorKey: "giaNhap",
    header: "Giá Nhập",
  },
  {
    accessorKey: "soLuongTon",
    header: "Số Lượng Tồn",
  },
  {
    accessorKey: "trangThai",
    header: "TrạngThái",
    cell: ({ row }: any) => {
      const trangThai = row.getValue("trangThai");
      let badgeText = "";
      let badgeColor = "";

      if (trangThai === 1) {
        badgeText = "Active";
        badgeColor = "blue";
      } else {
        badgeText = "Offline";
        badgeColor = "red";
      }

      return <Badge style={{ backgroundColor: badgeColor }}>{badgeText}</Badge>;
    },
  },

  {
    id: "actions",
    cell: ({ row }: any) => <CellAction data={row.original} />,
  },
];
