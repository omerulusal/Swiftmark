import getProducts from "./actions/getProducts"
import Products from "./components/home/Products"
import PageContainer from "./components/containers/PageContainer"
import Heading from "./components/general/Heading"
import Banner from "./components/home/Banner"

export default async function Home() {
  const products = await getProducts({ category: null })

  if (!products || products.length === 0) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center h-[50vh]">
          <Heading center text="Henüz Ürün Bulunmamaktadır!" />
        </div>
      </PageContainer>
    )
  }

  return (
    <div>
      <Banner />
      <Heading center text="Tüm Ürünler" />
      <Products products={products} />
    </div>
  )
}