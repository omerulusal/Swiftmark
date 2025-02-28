import Image from "next/image"
import { RxAvatar } from "react-icons/rx"

interface AvatarProps {
  image?: string,
}
const Avatar: React.FC<AvatarProps> = ({ image }) => {
  if (image) return <Image width={25} height={25} src={image} alt="avatar" />
  return <div><RxAvatar size={25} /> </div>
}

export default Avatar
/**
 * Comment.tsx'ten gelen image propsunda kişilerin image'ları varsa img de,
 * yoksa RxAvatar iconu gösterilir.
 */