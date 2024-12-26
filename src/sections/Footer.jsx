import myLogo from '../assets/images/myLogo.png'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => {
  return (
    <section id='contact-us' className='max-container w-full'>
      <div className='flex justify-between items-start gap-20 flex-wrap
      max-lg:flex-col'>
        <div className='flex flex-col items-start gap-10'>
          <a href="/">
            <img src={myLogo} alt="Logo" width={150} height={150} />
          </a>
          <h3 className='text-white font-montserrat text-2xl sm:max-w-sm'>Discover the world of customized products where your style takes center stage.</h3>
          <div className='flex gap-10'>
            {socialMedia.map((handle) => (
              <img src={handle.src} alt="social" width={50} height={50} className='bg-pink-600 rounded-full p-2'/>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between flex-wrap gap-20 lg:gap-10 '>
          {footerLinks.map((section)=>(
            <div className=''>
              <h4 className='text-pink-600 text-2xl'>{section.title}</h4>
              <ul>
                {section.links.map((link)=>
                (
                  <li className='text-white hover:text-slate-gray hover:cursor-pointer text-xl font-montserrat mt-3'>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer