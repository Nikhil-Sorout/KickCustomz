import { star } from "../assets/icons"


const CustomerReviewsCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt="customer" className="object-cover
            w-[120px] h-[120px] rounded-full " />
      <p className="mt-4 text-center info-text">{feedback}</p>
      <div className="flex mt-8 gap-2"><img src={star} alt="" />
        <p className="text-slate-gray font-montserrat ">({rating})</p>
      </div>
      <h3 className="mt-6 font-palanquin font-bold text-pink-600 text-2xl">{customerName}</h3>
    </div>
  )
}

export default CustomerReviewsCard