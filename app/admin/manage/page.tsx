import { getCurrentUser } from "@/app/actions/getCurrentUser"
import CreateForm from "@/app/components/admin/CreateForm";
import ManageClient from "@/app/components/admin/ManageClient";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/WarningText";

const page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <WarningText text="Yetkiniz Yok!" />
    )
  }
  return (
    <AuthContainer>
      <ManageClient />
    </AuthContainer>
  )
}

export default page