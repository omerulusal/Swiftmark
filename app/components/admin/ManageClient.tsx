"use client"
import { Product } from "@prisma/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import Button from "../general/Button"
import { useCallback } from "react"
import { deleteObject, getStorage, ref } from "firebase/storage"
import firebaseApp from "@/libs/firebase"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
interface ManageClientProps {
  products: Product[]
}

const ManageClient: React.FC<ManageClientProps> = ({ products }) => {
  const rota = useRouter()
  const stilBtn = "px-5 py-3 hover:shadow-xl shadow-gray-400 border rounded-xl shadow-lg bg-red-500 text-gray-100 mx-3  cursor-pointer"
  const depo = getStorage(firebaseApp)
  const urunuSil = useCallback(async (id: string, image: any) => {
    toast.success("Urun Siliniyor...")
    const resmiSil = async () => {
      try {
        const resimRef = ref(depo, image)
        await deleteObject(resimRef)
      } catch (error) {
        return console.log("Urun Silinemedi", error)
      }
    }
    await resmiSil()
    // sildirme işlemi icin api'a istek atıyorum
    axios.delete(`/api/product/${id}`)
      .then(async () => {
        toast.success("Urun Silindi 👍")
        rota.refresh()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }, [depo, rota])//useCallback firebase storeage ve router'a göre calısacak

  const sutunlar: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "ad", headerName: "Ad", width: 250 },
    { field: "fiyat", headerName: "Fiyat", width: 120 },
    { field: "kategori", headerName: "Kategori", width: 180 },
    { field: "marka", headerName: "Marka", width: 130 },
    {
      field: "stokta", headerName: "Stokta", width: 180,
      renderCell: (params) => {
        return (
          <div>
            {params.row.stokta == true ? "Stokta Mevcut" : "Stokta Mevcut Degil"}
          </div>
        )
      }
    },
    {
      field: "aksiyon", headerName: "Aksiyon", width: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <button onClick={() => urunuSil(params.row.id, params.row.resim)} className={stilBtn}>Sil</button>
        )
      }
    },
  ];

  let satirlar: any = []
  if (products) {
    satirlar = products.map((prd) => {
      return {
        id: prd.id,
        ad: prd.name,
        fiyat: prd.price + " €",
        kategori: prd.category,
        marka: prd.brand,
        stokta: prd.inStock,
        resim: prd.image,
      }
    })
  }


  return (
    <div>
      <DataGrid rows={satirlar} columns={sutunlar} initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        }
      }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ManageClient
/**
 * https://mui.com/x/react-data-grid/ 
 */