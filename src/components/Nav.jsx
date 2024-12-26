import myLogo from '../assets/images/myLogo.png';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { list } from 'postcss';
const Nav = () => {


  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="">
          <img src={myLogo} alt="Logo" width={100}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center
            gap-16 max-lg:hidden'>
         {navLinks.map((item) => (
            <li key={item.label} className='list-none'>
              <a 
                href={item.href} 
                className='font-montserrat leading-normal text-lg text-slate-gray'
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden max-lg:block'> 
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav