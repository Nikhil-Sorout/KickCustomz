import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap
    gap-8">
      <div className="flex gap-14 flex-wrap max-container">
        {services.map((serv)=>(
          <ServiceCard
          service = {serv}/>
        ))}
      </div>
    </section>
  )
}

export default Services