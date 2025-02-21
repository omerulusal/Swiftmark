import Image from "next/image"

const Banner = () => {
    return (
        <div className="h-[480px] bg-black flex items-center justify-center">
            <div className="h-full relative w-full object-cover">
                <Image src={"/Banner1.jpg"} fill alt="Banner" className="object-cover" />
            </div>
        </div>
    )
}

export default Banner