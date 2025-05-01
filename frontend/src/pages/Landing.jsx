import About from '../components/landingComponents/About';
import MainArea from '../components/landingComponents/MainArea';

const Landing = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <MainArea/>
      <About/>
    </div>
  )
}

export default Landing;
