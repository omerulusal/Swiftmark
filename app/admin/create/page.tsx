import { getCurrentUser } from "@/app/actions/getCurrentUser"
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/WarningText";

const CreateProduct = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser || currentUser.role !== "ADMIN") {
    //role schema.prismadaki enumdan gelir
    return <WarningText text="Urun Ekleme Yetkiniz Yok" />;
  }
  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  )
}

export default CreateProduct
/**
 * Urun oluşturma sayfasına gelen user'ın rolunu kontrol ediyorum 
 * sadece admin oluşturabilir.
 */