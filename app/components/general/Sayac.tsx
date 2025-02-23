import { UrunKartiProps } from "../detail/DetailClient";

interface SayacProps {
    urunKarti: UrunKartiProps;
    //UrunKartiProps DetailClient.tsx'ten geliyor 
    arttirFunc: () => void;
    azaltFunc: () => void;
}

const Sayac: React.FC<SayacProps> = ({ urunKarti, arttirFunc, azaltFunc }) => {

    const butonStil = "border p-2 hover:bg-gray-200 rounded-md text-center w-10 h-10 flex items-center justify-center"

    return (
        <div className="flex gap-5 font-bold items-center">
            <div
                className={`${butonStil} cursor-pointer`}
                onClick={azaltFunc}>
                -
            </div>
            <div
                className={butonStil}>
                {urunKarti.quantity}
            </div>
            <div
                className={`${butonStil} cursor-pointer`}
                onClick={arttirFunc}>
                +
            </div>
        </div>
    )
}

export default Sayac
/**
 * Sayac.tsx'in amacı ürünün detay sayfası açıldığında ürünü sepete eklerkenki adeti girmek
 * sepetteki ürün miktarını arttırma ve azaltma fonksiyonlarını DetailClient
 * içerisinde tanımladım ve buraya props olarak geçirdim
 */