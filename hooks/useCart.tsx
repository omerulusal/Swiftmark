"use client"
import { createContext, useContext, useState } from "react";


interface KartContextProps {
    urnKartQty: number;//KartContext'e bu tipte bir veri gelecek
}
const KartContext = createContext<KartContextProps | null>(null);
// context ya KartContextProps türünde ya da boş olucak


interface Props {
    [propName: string]: any;
    //provider'a herhangi bir string isimde ve türde özellik geçilebilir.
}
export const KartContextProvider = (props: Props) => {
    const [urnKartQty, setUrnKartQty] = useState(0);
    let value = { urnKartQty }
    return (
        <KartContext.Provider value={value} {...props} />
    )
}


const UseCart = () => {
    const context = useContext(KartContext);
    if (context == null) throw new Error("Bir Hata Oluştu");
    return context
}

export default UseCart

/**
 * Context API oluşturdum.
 * 
 * 
 * KartContextProvider'ı provider klasöründeki KartProvider.tsx'e ekledim
 * orada children alacağını belirttim zaten layout içerisinde sarmalama yapacağımdan
 * children yazmam gerekiyordu.
 */