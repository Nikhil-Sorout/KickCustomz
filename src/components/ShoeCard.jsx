const ShoeCard = ({imageUrl,changeBigShoeImage, 
bigShoeImage}) => {
    const handleClick = ()=>{
        if(bigShoeImage !== imageUrl.bigShoe){
            changeBigShoeImage(imageUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImage===imageUrl.bigShoe? 'border-pink-600':'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div className="flex justify-center items-center bg-cover sm:w-40 sm:h-40
        rounded-xl max-sm:p-4 bg-card bg-center">
            <img src={imageUrl.thumbnail} alt=""
            width={127} height={103}
            className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard