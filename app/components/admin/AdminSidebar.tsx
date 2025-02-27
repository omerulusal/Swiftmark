"use client"
import { MdBorderOuter, MdDashboard } from "react-icons/md"
import { IoIosCreate } from "react-icons/io"
import AdminSidebarItem from "./AdminSidebarItem"
import { usePathname } from "next/navigation"

const AdminSidebar = () => {
  const pathname = usePathname()
  const adminPanel = [
    {
      name: "Urun Oluştur",
      icon: IoIosCreate,
      url: "/admin/create"
    },
    {
      name: "Urun Yonetimi",
      icon: IoIosCreate,
      url: "/admin/manage"
    },
  ]
  return (
    <div className="w-1/6 border-r h-screen p-4 bg-teal-900">
      <div className="space-y-4">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            key={i}
            selected={pathname == admin.url}
            icon={admin.icon} name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar
/**
 * Admin Sayfasında Sol taraftaki sidebardır.
 * 
 */