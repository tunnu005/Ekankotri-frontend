
import '../../css/mainpage.css'
import { useState,useEffect } from 'react'
import { loadtemplates } from '../../states/action-creators'



const Show = () =>{

    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [end,setend] =useState(true)
    const row = 4,col=1;
    const pagesize = 4
    const getCard = async() =>{
        const resp = await loadtemplates(page,pagesize,row,col);
        console.log(resp.data)
       
        for(let i=0;i<row;i++)
        {
          for(let j=0;j<col;j++)
          {
            if(resp.data[i][j].imageURL == null )
            {
              setend(false)
              return}
          }
        }
          setCard((prev)=>[...prev,...resp.data]);
        console.log(card)
        
    }

    useEffect(()=>{
        // console.log('page : ',page)
        console.log('end : ',end)
       if(end)
       {
        getCard();
       }
       else{
        return
       }

        
    },[page])

    const handelInfiniteScroll = async () => {
      const scrollbar = document.getElementById('scroll')
      // console.log(scrollbar)
        // console.log("scrollHeight" + scrollbar.scrollHeight);
        // console.log("innerHeight" + scrollbar.clientHeight);
        // console.log("scrollTop" + scrollbar.scrollTop);
        try {
          if (
            scrollbar.clientHeight + scrollbar.scrollTop + 1 >=
            scrollbar.scrollHeight
          ) {
            setLoading(true);
            setPage((prev) => prev + 1);
          }
        } catch (error) {
          console.log(error);
        }
      };

      
      useEffect(() => {
        // console.log('here')
        const scrollbar = document.getElementById('scroll')
        
        scrollbar.addEventListener("scroll", handelInfiniteScroll);
        return () => scrollbar.removeEventListener("scroll", handelInfiniteScroll);
      }, []);

    // const Images = [[Image1,Image2,Image3,Image4,Image4],[Image1,Image2,Image3,Image4,Image4],[Image1,Image2,Image3,Image4,Image4],[Image1,Image2,Image3,Image4,Image4]]

    return(
        <div className='bg-gradient-to-br from-red-500 via-pink-300 to-rose-300 h-screen w-screen'>
            <div className='justify-center flex items-center'>
            <div>
        
      </div>
            <div  className='scrollbar h-screen overflow-y-scroll' id='scroll'>
            {card.map((images,index)=>(
               
                    <div className='flex' >
                            {images.map(((image,idex) =>(
                                
                                <div>
                                   <img src={image.imageURL} id={idex} alt="" className='s shadow-md' style={{height:200,width:230,margin:'15px 30px',border:'3px solid #f2ca5c',borderRadius:10,cursor:'pointer'}}/>
                                </div>
                            )))}
                    </div>
                
            ))}
          
        </div>
            </div>
        </div>
    )
}

export default Show;