import Button from "../components/button"
import { offer } from "../assets/images"
const SpecialOffer = () => {
  return (
    <section id="SpecialOffer" className="flex w-full justify-between items-center max-lg:flex-col-reverse max-container gap-10 ">
      <div className="flex justify-center items-center flex-1">
        <img src={offer} alt="default" />
      </div>
      <div className="flex flex-col flex-1 
      gap-4 items-start">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Level Up Your Game with <span className="text-pink-600">Exclusive</span> Deals on <span className="text-pink-600">Customized</span> Foot Wear!
        </h2>
        <p className="font-montserrat mt-6  max-w-lg info-text">Elevate your day-to-day experience with exclusive deals on personalized footwear products. Customize your wear to reflect your unique style and take your confidence to the next level. Don't miss out on these limited-time offers to level up your game in both performance and aesthetics! </p>
        <p className='info-text max-w-lg'>Gear Up for Greatness: Unleash Customized Excellence with Exclusive Offers!</p>
        <div className='flex mt-10 gap-10'>
          <Button label="Show offers" />
          <Button label="Try now"
            backgroundColor = "bg-white"
            borderColor = "border-slate-gray"
            textColor = "text-pink-600"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer