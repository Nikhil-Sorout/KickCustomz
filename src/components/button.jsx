const button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-pink-600 text-white border-slate-gray"} 
    rounded-full ${fullWidth && 'w-full'} py-2 px-4 text-lg gap-2 border-[.3px] font-montserrat`}>
      {label}
      {iconUrl && <img src={iconUrl} alt=" " className="w-6 h-6" />}
    </button>
  )
}

export default button