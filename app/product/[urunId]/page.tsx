import DetailClient from "@/app/components/detail/DetailClient";
import { defaultUrunler } from "@/utils/DefaultProducts";


type DetayProps = {
    urunId?: string
}
//urnuId bana [urunId] adlı dinamik klasörden geliyor rotaya tekabul eder

const Detail = ({ params }: { params: DetayProps }) => {
    const { urunId } = params;
    const product = defaultUrunler.find(urun => urun?.id == urunId);
    // defaultUrünler içerisindeki ürünlerin idsi ile urlden gelen ürünün idsine eşit olanını bul dedim
    console.log(product, "product");

    return (
        <div>
            <DetailClient product={product} />
            {/* ürünleri DetailClienta props olarak yolladım */}
        </div>
    )
}

export default Detail
/**
 * ProductCartta herbir ürüne tıklayınca urle product/o ürüne ait olan id yazılacak.
 * sonra dinamik rotalama(klasör adları) sayesinde bu sayfa açılır. 
 * localhost:3000/product/hğağa yazınca bu sayfa açılır
 * 
 * Ürün Detayları sayfasında ürünü sepete ekle çıkar vb işlemleri yaparken
 * react elemanları kullandığımdan DetailClient üzerinden yapmam daha sağlıklı olur
 */