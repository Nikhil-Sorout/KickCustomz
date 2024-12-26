import { arrowRight } from "../assets/icons"
import Button from "../components/button"
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import { shoes } from '../constants'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react';


const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1)

  return (
    <section id="Home"
      className="w-full p-2 flex flex-col xl:flex-row justify-center items-start min-h-screen gap-10 max-container">
      <div className="realtive flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x mt-[10rem]">
        <p className="text-xl text-pink-600 font-montserrat">Our premium collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap rounded-xl relative z-10 pr-10">Newly Customized</span>
          <br />
          <span className="text-pink-600 mt-3 inline-block">Products</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">"Precision Crafted Comfort: Elevate Your Daily Experience with Customized Products."</p>
        <Button label="Customize now"
          iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div className="text-center">
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 w-full flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
        <img src={bigShoeImage} alt="shoe-pic" width={610} height={502} className="object-contain relative " />
        <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%]">
          {shoes.map((shoe) => {
            return(
            <div>
              <ShoeCard
                imageUrl={shoe}
                changeBigShoeImage={(selectedShoe) => setbigShoeImage(selectedShoe)}
                bigShoeImage={bigShoeImage} />
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Hero