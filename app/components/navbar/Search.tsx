import { IoSearch } from "react-icons/io5"

const Search = () => {
  return (
    <div className="flex flex-1">
      <input className=" px-5 border flex-1 border-stone-900 shadow-md shadow-stone-600/50 focus-within:bg-transparent focus-within:outline-none placeholder:text-black/50 transition-all focus-within:pl-10 bg-transparent text-black rounded-md py-1 ml-12 w-[720px] hidden md:flex" type="text" placeholder="Search Here!" />
      <button className="p-2 hidden md:flex  bg-teal-700 rounded-md mx-2 hover:bg-teal-600 hover:text-black">Ara</button>
    </div>
  )
}

export default Search

/**
 * flex-1 diger navbar elementlerinden daha fazla alan kaplamasını saglar.
 */