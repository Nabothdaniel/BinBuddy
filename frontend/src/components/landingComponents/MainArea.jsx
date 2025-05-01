import Header from './Header';
import Hero from './Hero';
import MainLogo from '../../assets/landing/waste-1.jpg';

const MainArea = () => {
  return (
    <div style={{ backgroundImage: `url(${MainLogo})` }} className='relative w-full  h-auto md:h-[650px]  bg-cover bg-center'>
      {/* overlay below content */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className='max-w-[90rem] py-2 text-white mx-auto relative z-10'>
        <Header />
        <Hero/>
      </div>
    </div>
  )
}

export default MainArea
