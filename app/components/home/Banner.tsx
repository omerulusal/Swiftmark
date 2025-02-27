import Image from "next/image"

const Banner = () => {
    return (
        <div className="h-[680px] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
            <div className="h-full relative w-full z-0">
                <Image src={"/Banner1.jpg"} fill alt="Banner" className="object-cover object-center" />
            </div>
        </div>
    )
}

export default Banner

/**
 * Sonrasında Slider Ekle
 */