import { getCurrentUser } from "@/app/actions/getCurrentUser"
import getProducts from "@/app/actions/getProducts"
import ManageClient from "@/app/components/admin/ManageClient"
import AuthContainer from "@/app/components/containers/AuthContainer"
import WarningText from "@/app/components/WarningText"

const page = async () => {
  const currentUser = await getCurrentUser();
  const products = await getProducts({ category: null });

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Yetkiniz Yok!" />
  }

  return (
    <AuthContainer>
      <ManageClient products={products} />
    </AuthContainer>
  )
}

export default page