"use client"
const Category = () => {
    const categoryList = [
        {
            name: "Telefon"
        },
        {
            name: "Bilgisayar"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ev Dekorasyon"
        },
        {
            name: "Kıyafet"
        },
        {
            name: "Spor"
        },
    ]
    return (
        <div className="flex items-center bg-teal-800 justify-center gap-3 md:gap-5 py-3 md:py-4 overflow-x-auto px-3 md:px-4 ">
            {categoryList.map((category, i) => (
                <div className="border text-slate-100 h-10 duration-700 hover:font-bold hover:text-lg hover:bg-teal-700 rounded-full min-w-[120px] px-2 py-2 text-center flex flex-1 items-center justify-center cursor-pointer " key={i}>
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default Category