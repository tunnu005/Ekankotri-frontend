import { useState } from 'react';
import Image1 from '../../../public/sample1.jpg';
import Image2 from '../../../public/sample2.jpg';
import Image3 from '../../../public/sample3.png';
import Image4 from '../../../public/smaple4.png';
import '../../css/creation.css'

const ImageSlider = () => {

  const [currentImage,setcurrentImage] = useState(6);
  const [leftImage,setleftImage] = useState(5);
  const [rightImage,setrightImage] = useState(7);
  // const [temp,settemp] = useState(0)

  const Images = [Image1,Image2,Image3,Image4,Image1,Image2,Image3,Image4,Image1,Image2,Image3,Image4,Image1,Image2,Image3,Image4,]

  const Leftslide = () =>{
      // settemp(currentImage);
      setleftImage(currentImage)
      setcurrentImage(rightImage);
      setrightImage(rightImage+1)
      // console.log('rightImage : ',rightImage)
      
  }

  const Rightslide =() =>{

    setrightImage(currentImage)
    setcurrentImage(leftImage)
    setleftImage(leftImage-1)
  }



  return (

    <div className='upper-class' >
      <div className='mx-4 opacity-75 blur-[1px] '>
        <div>
        <img src={Images[leftImage]} alt="" style={{ borderRadius: 6, height: 250, width: 250 }} className='cursor-pointer' />
        </div>
      </div>
      <div className='flex'>
      <div className='mt-40' onClick={Leftslide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 48 48" className='cursor-pointer'>
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#b3b3b3', stopOpacity: 1 }} />
              {/* <stop offset="75%" style={{ stopColor: 'grey', stopOpacity: 1 }} /> */}
              <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />

            </linearGradient>

          </defs>
          <path fill='url(#grad2)' d="M38 24H10m8-8l-8 8 8 8" />
        </svg>
      </div>
      <div className='currentBox '>
        <img src={Images[currentImage]} alt="" style={{ borderRadius: 6, height: 400, width: 400 }} className='cursor-pointer' />
      </div>
      <div className='mt-40' onClick={Rightslide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 48 48" className='cursor-pointer'>
          <path fill='url(#grad2)' d="M10 24h28m-8-8l8 8-8 8" />
        </svg>


      </div>
      </div>
      <div className='mx-4 opacity-75 blur-[1px]'>
        <div>
        <img src={Images[rightImage]} alt="" style={{ borderRadius: 6, height: 250, width: 250 }} className='cursor-pointer' />
        </div>
      </div>
    </div>

  )
}


export default ImageSlider;