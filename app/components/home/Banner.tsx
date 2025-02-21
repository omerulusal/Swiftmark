import Image from "next/image"

const Banner = () => {
    return (
        <div className="h-[570px] flex items-center justify-center">
            <div className="h-full relative w-full">
                <Image src={"/Banner1.jpg"} fill alt="Banner" className="object-cover object-center" />
            </div>
        </div>
    )
}

export default Banner

/**
 * Sonrasında Slider Ekle
 */