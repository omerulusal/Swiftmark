import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSidebarItemProps {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;

}
const AdminSidebarItem: React.FC<AdminSidebarItemProps> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <Link className={`cursor-pointer flex items-center gap-2 ${selected ? "underline text-black font-bold" : "font-medium text-white"}`}href={url}>
      <Icon size={25} />
      <div>{name}</div>
    </Link>
  )
}

export default AdminSidebarItem