import { NavbarWrapper } from "@/components/dashboard/navbar/navbar";
import { SidebarWrapper } from "@/components/dashboard/sidebar/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SidebarWrapper />
      <div className="w-full">
        <NavbarWrapper />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
