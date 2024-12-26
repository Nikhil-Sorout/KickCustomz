import { star } from "../assets/icons"


const PopularProductsCard = ({ product }) => {
    return (
        <div className="flex flex-col gap-2 items-center w-full">
            <img src={product.imgURL} alt="Product-img" className="w-[300px]" />
            <div className=" flex gap-2 mt-2 justify-start">
                <img src={star} alt="rating" width={24} height={24}/>
                <p className="text-xl text-slate-gray font-montserrat">(4.5)</p>
            </div>
            <h3 className="text-pink-600 font-semibold text-xl font-palanquin leading-normal">{product.name}</h3>
            <p className="text-slate-gray font-bold font-montserrat">{product.price}</p>
        </div>
    )
}

export default PopularProductsCard