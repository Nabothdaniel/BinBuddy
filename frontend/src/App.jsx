import Landing from './pages/Landing';
import bgBanner from './assets/main-bg.png'

const App =() => {

  return (
    <>
     <main  style={{backgroundImage:`url(${bgBanner})`}} className='w-screen h-screen bg-cover bg-center  '>
      <Landing/>
     </main>
    </>
  )
}

export default App;
