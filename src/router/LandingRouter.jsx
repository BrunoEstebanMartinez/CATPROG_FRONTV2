
import { About } from './components/About';
import { Analytics } from './components/Analytics';
import { Canvas } from './components/Canvas';
import Checker from './components/Checker';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { LazyShow } from './components/LazyShow';
import { MainHero } from './components/MainHero';
import { MainHeroImage } from './components/MainHeroImage';
import { Pricing } from './components/Pricing';
import { Product } from './components/Product';
import { Regist } from './components/Regist';
import SecondProduct from './components/SecondProduct';

export const LandingRouter = () => {
  return (
    <div className={`bg-white grid gap-y-8 overflow-hidden `} >
    <div className={`relative bg-white `} >
      <div className="max-w-7xl md:mx-64 mx-auto">
        <div
          className={`relative z-10 pb-8 bg-white sm:pb-8 md:pb-8 lg:max-w-2xl lg:w-full lg:pb-8 xl:pb-60`}
        >
          <Header />
          <MainHero />
        </div>
      </div>
      <MainHeroImage />
    </div>
    {/* <Canvas /> */}
    <LazyShow>
      <>
        <Product />
        <Canvas />
      </>
    </LazyShow>
    {/* <LazyShow>
      <>
        <SecondProduct />
        <Canvas />
      </>
    </LazyShow> */}
    <LazyShow>
      <>
        <Info />
        <Canvas />
      </>
    </LazyShow>
    <LazyShow>
      <>
        <Features />
        <Canvas />
      </>
    </LazyShow>

    <LazyShow> 
       <Regist /> 
      <Canvas />
    </LazyShow> 

    <LazyShow>
      <>
        <Checker />
        <Canvas />
      </>
    </LazyShow>

    

    <LazyShow>
    {/* <Canvas /> */}
      <Pricing />
    </LazyShow>
    <LazyShow>
      <>
        <Canvas />
        <About />
      </>
    </LazyShow>
    <Analytics />
  </div>
  )
}
