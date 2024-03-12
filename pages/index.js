'use client';
import { Footer, Navbar, WalletContextProvider } from '../components'
import { Hero, Insight, About, Brand, Community, Buy, Features, ActiveSlider} from '../sections';
const Home = () => {
  return (
  <WalletContextProvider>
  <div className='bg-hero'>
    <Navbar />
    <Hero />
  </div>
  <div className='bg-gray-900 overflow-hidden'>
    <ActiveSlider />
    <Features />  
    <Insight />  
    <Buy />
    </div>    
    <div className='bg-gray-800 overflow-hidden'>
      <Brand />
    </div>
  <div className='bg-gray-900 overflow-hidden'>
  <About />
    <Community />
    <Footer />
  </div>
  </WalletContextProvider>
  );
}

export default Home;
