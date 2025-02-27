import { getProductsId } from "@/app/actions/getProductsId"
import DetailClient from "@/app/components/detail/DetailClient"

interface IParams {
    urunId: string
}
//urnuId bana [urunId] adlı dinamik klasörden geliyor rotaya tekabul eder

const ProductDetail = async ({ params }: { params: IParams }) => {
    const product = await getProductsId({ productId: params.urunId })

    if (!product) {
        return <div>Ürün Bulunamadı</div>
    }

    return (
        <DetailClient product={product} />
    )
}

export default ProductDetail
/**
 * ProductCartta herbir ürüne tıklayınca urle product/o ürüne ait olan id yazılacak.
 * sonra dinamik rotalama(klasör adları) sayesinde bu sayfa açılır. 
 * localhost:3000/product/hğağa yazınca bu sayfa açılır
 * 
 * Ürün Detayları sayfasında ürünü sepete ekle çıkar vb işlemleri yaparken
 * react elemanları kullandığımdan DetailClient üzerinden yapmam daha sağlıklı olur
 */