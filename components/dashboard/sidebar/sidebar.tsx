"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CompaniesDropdown } from "./companies-dropdown";

import { usePathname } from "next/navigation";
import useCollapsed from "@/hooks/useCollapsed";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";

import { ProductsIcon } from "@/icons/sidebar/products-icon";
import { DevIcon } from "@/icons/sidebar/dev-icon";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import ReviewIcon from "@/icons/sidebar/review-icon";
import KhuyenMaiIcon from "@/icons/sidebar/khuyen-mai";
import PhieuGiamGiaIcon from "@/icons/sidebar/phieu-giam-gia";
import KhachHangIcon from "@/icons/sidebar/khach-hang";
import CauHoiIcon from "@/icons/sidebar/cau-hoi";
import DonHangIcon from "@/icons/sidebar/don-hang";
import TonKhoIcon from "@/icons/sidebar/ton-kho";
import DanhMucIcon from "@/icons/sidebar/danh-muc";
import ThongKeIcon from "@/icons/sidebar/thong-ke";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useCollapsed();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div
          className={Sidebar.Overlay()}
          onClick={() => setCollapsed(!collapsed)}
        />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />

            <SidebarMenu title="Quản Lý Người Dùng">
              <SidebarItem
                isActive={pathname === "/dashboard/nhan-vien"}
                title="Nhân Viên"
                icon={<DevIcon />}
                href="/dashboard/nhan-vien"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/khach-hang"}
                title="Khách Hàng"
                icon={<KhachHangIcon />}
                href="/dashboard/khach-hang"
              />
            </SidebarMenu>

            <SidebarMenu title="Quản Lý Sản Phẩm">
              <SidebarItem
                isActive={pathname === "/dashboard/san-pham"}
                title="Sản Phẩm"
                icon={<ProductsIcon />}
                href="/dashboard/san-pham"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/ton-kho"}
                title="Tồn Kho"
                icon={<TonKhoIcon />}
                href="/dashboard/ton-kho"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/danh-muc"}
                title="Danh Mục"
                icon={<DanhMucIcon />}
                href="/dashboard/danh-muc"
              />
            </SidebarMenu>

            <SidebarMenu title="Quản Lý Đơn Hàng">
              <SidebarItem
                isActive={pathname === "/dashboard/don-hang"}
                title="Đơn Hàng"
                icon={<DonHangIcon />}
                href="/dashboard/don-hang"
              />
            </SidebarMenu>
            <SidebarMenu title="Quản Lý Khuyến Mãi">
              <SidebarItem
                isActive={pathname === "/dashboard/phieu-giam-gia"}
                title="Phiếu Giảm Giá"
                icon={<PhieuGiamGiaIcon />}
                href="/dashboard/phieu-giam-gia"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/khuyen-mai"}
                title="Khuyển Mãi"
                icon={<KhuyenMaiIcon />}
                href="/dashboard/khuyen-mai"
              />
            </SidebarMenu>
            <SidebarMenu title="Phản Hồi Khách Hàng">
              <SidebarItem
                isActive={pathname === "/dashboard/danh-gia"}
                title="Đánh Giá"
                icon={<ReviewIcon />}
                href="/dashboard/danh-gia"
              />
              <SidebarItem
                // isActive={pathname === "/dashboard/khuyen-mai"}
                title="Câu Hỏi"
                icon={<CauHoiIcon />}
                // href="/dashboard/khuyen-mai"
              />
            </SidebarMenu>
            <SidebarMenu title="Báo Cáo">
              <SidebarItem
                isActive={pathname === "/dashboard/bao-cao"}
                title="Thống Kê "
                icon={<ThongKeIcon />}
                href="/dashboard/bao-cao"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
