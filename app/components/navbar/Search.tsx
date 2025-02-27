const Search = () => {
  return (
    <div className="flex flex-1">
      <input className=" px-5 border flex-1 border-gray-100/25  focus-within:bg-transparent focus-within:outline-none placeholder:text-gray-50/50 transition-all focus-within:pl-10 bg-transparent text-gray-100 rounded-md py-1 ml-12 w-[720px] hidden md:flex" type="text" placeholder="Search Here!" />
      <button className="text-gray-200 p-2 hidden md:flex border border-[#344b43] rounded-md mx-2 hover:text-gray-50">Ara</button>
    </div>
  )
}

export default Search

/**
 * flex-1 diger navbar elementlerinden daha fazla alan kaplamasını saglar.
 */