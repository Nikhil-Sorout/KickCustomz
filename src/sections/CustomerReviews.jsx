import { reviews } from "../constants"
import CustomerReviewsCard from "../components/CustomerReviewsCard"
const CustomerReviews = () => {
  return (
    <section id="CustomerReviews">
      <h3 className="font-palanquin text-center text-4xl font-bold">Customer <span className="text-pink-600">Voices:</span> What Our Clients Are <span className="text-pink-600">Saying</span> </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Discover the authentic experiences and valuable insights shared by our valued customers. Our customer reviews section is a treasure trove of feedback, testimonials, and success stories that showcase the exceptional quality of our products/services.</p>
      <div className="flex mt-24 justify-evenly items-center max-lg:flex-col gap-14 ">
          {reviews.map((rev)=>
          <CustomerReviewsCard 
          imgURL = {rev.imgURL}
          customerName = {rev.customerName}
          rating = {rev.rating}
          feedback = {rev.feedback}
          />)}
      </div>
    </section>
  )
}

export default CustomerReviews