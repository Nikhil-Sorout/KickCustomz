const AccCard = ({ object, changeBigAcc, bigAccImage }) => {
    const handleClick = () => {
        if (bigAccImage !== object.acc) {
            changeBigAcc(object.acc);
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigAccImage === object.acc ? 'border-pink-600' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
            <div className="flex justify-center items-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-card bg-center">
                <img src={object.acc} alt="img1" width={127} height={103} className="object-contain" />
            </div>
        </div>
    )
}

export default AccCard;
