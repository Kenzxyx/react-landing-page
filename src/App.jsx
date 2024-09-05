import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* navbar start */}
     <div className="navbar">
      <div className="left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/348px-Harley-Davidson_logo.svg.png" alt="" />
        <ul>
          <li><a href="">sepeda motor</a></li>
          <li><a href="">komponen</a></li>
          <li><a href="">pria</a></li>
          <li><a href="">Wanita</a></li>
          <li><a href="">Pengalaman Bersama H-D</a></li>
        </ul>
      </div>
     </div>
     {/* navbar end */}
     {/* hero section start*/}
     <div className="hero">
    <div className="konten">

      <h1>Petualangan Musim <br/>
      panas tiada akhir</h1>
      <p>Rajut kenangan abadi bersama jajaran grand american tour 2024</p>
      <a href="#" class="cta">lihat motornya</a>
     </div>
    </div>
    <div className="jajaran">
      <div className="judul">
      <h1>Telusuri jajaran motor 2024</h1>
      </div>
      <div className="list">
        <div className="list1">
        <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/hero-cards/3-up/ss-v2-hc3.jpg?impolicy=myresize&rw=600" alt="" />
        {/* <h1>SPORTSTERS</h1>
        <p>dibangun dari legasi yang lahir pada tahun 1957,sportster S 2024 yang canggih dan kasar ini secepat kilat,dan sangat gesit,dan amat sangat menyenagkan dikendarai.</p> */}
        </div>

        <div className="list2">
         <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/hero-cards/3-up/heritage-classic-hc3.jpg?impolicy=myresize&rw=600" alt="" />
        </div>
        <div className="list3">
         <img src="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/hero-cards/3-up/rg-v2-hc3.jpg?impolicy=myresize&rw=600" alt="" />
        </div>
      </div>

    </div>
     <div className="down">
      <div className="downimg">

      <img src="https://www.harley-davidson.com/content/dam/h-d/images/category-images/2022/media-card/mens-womens-zolora-media-card.jpg?impolicy=myresize&rw=1000" alt="" />
     
        
        <div className="downp">
        <h1>BARU! BELI PAKAIAN H-D ONLINE DI ZALORA</h1>
        <p>Beli kaus,jaket,baju hangat, dan lain lain</p>
        </div>
      </div>

      
      </div>
  


    </>
  )
}

export default App
