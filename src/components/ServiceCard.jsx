

const ServiceCard = ({service}) => {
  return (
    <div className="flex flex-1 flex-col small items-start justify-start gap-5 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl shadow-pink-200 px-10 py-16">
        <div className="w-11 h-11 flex justify-center
        items-center bg-pink-600 rounded-full">
        <img src={service.imgURL} alt="" width={24}
        height={24} />
        </div>
        <h3 className="font-palanquin text-3xl mt-5 font-bold leading-normal">{service.label}</h3>
        <p className="break-words font-montserrat text-lg leading-normal text-slate-gray">{service.subtext}</p>
        
    </div>
  )
}

export default ServiceCard