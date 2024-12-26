import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
import Button from '../components/button'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex w-full justify-between items-center max-lg:flex-col max-container gap-10">
      <div className="flex flex-col flex-1 
      gap-4"> 
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="font-palanquin font-bold ">Setting the <span className='text-pink-600'>Gold Standard</span> for Unsurpassed Custom <span className='text-pink-600'>Quality</span></span>
          <br />
        </h2>
        <p className="font-montserrat mt-6  max-w-lg info-text">Embrace a new echelon of luxury and craftsmanship with our high-quality custom products. Meticulously curated and masterfully created, each piece exemplifies our dedication to delivering the best. </p>
        <p className='info-text max-w-lg'>Elevate your standards and experience true excellence like never before, because you deserve nothing less than the best quality ever</p>
        <div className='mt-10'>
        <Button label="Explore Now" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality