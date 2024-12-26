import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"
const PopularProducts = () => {
  return (
    <section id="products"
    className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-pink-600">popular</span> customization</h2>
        <p className="font-montserrat lg:max-w-lg mt-2
        text-slate-gray">Infusing Excellence into Every Custom Creation.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4 mt-16"> 
        {products.map((pro)=>(
          <PopularProductsCard
          product = {pro} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts