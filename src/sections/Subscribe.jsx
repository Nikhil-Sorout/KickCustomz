import Button from "../components/button"
const Subscribe = () => {
  return (
    <section id="Subscribe" className="flex max-lg:flex-col justify-center
    items-center gap-14 max-container w-full">
      <p className="text-xl font-montserrat font-bold">Join us today and unlock a world of <span className="text-pink-600">exclusive benefits and extraordinary experiences!</span></p>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray rounded-full gap-4 p-2.5">
        <input type="text" placeholder="Subscribe now" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe