import Features from '../components/landingComponents/Features';
import HowItWorks from '../components/landingComponents/HowItWorks';
import MainArea from '../components/landingComponents/MainArea';
import WhyChooseUs from '../components/landingComponents/WhyChooseUs';

const Landing = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <MainArea/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Features/>
    </div>
  )
}

export default Landing;
