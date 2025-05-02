import Features from '../components/landingComponents/Features';
import Footer from '../components/landingComponents/Footer';
import HowItWorks from '../components/landingComponents/HowItWorks';
import MainArea from '../components/landingComponents/MainArea';
import Waitlist from '../components/landingComponents/WaitList';
import WhyChooseUs from '../components/landingComponents/WhyChooseUs';
import TheDevelopers from '../components/landingComponents/TheDevelopers';
import Faq from '../components/landingComponents/Faq';
const Landing = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <MainArea />
      <HowItWorks />
      <WhyChooseUs />
      <Features />
      <TheDevelopers />
      <Waitlist />
      <Faq/>
      <Footer />
    </div>
  )
}

export default Landing;
