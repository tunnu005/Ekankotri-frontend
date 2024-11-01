import { useEffect, useRef, useState } from 'react';
import image from '../../assets/images/1.png';
import Typewriter from 'typewriter-effect';
import image2 from '../../assets/images/ganesh-removebg.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import 'animate.css';

const Middle1 = ({data}) => {
 

  const [visibleCards, setVisibleCards] = useState(Array(data.events.length).fill(false));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true;
            return newVisibleCards;
          });
          observer.unobserve(entry.target); // Stop observing once in view
        }
      });
    });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setOpenDrawer(true);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-950 to-violet-800 overflow-y-scroll">
      {/* Header, Image, and Main Text */}
      <div className='mt-24 flex items-center justify-center font3 text-6xl text-[#ffffff] font-thin'>
        | | Shri Ganeshai Namah | |
      </div>
      <div className='flex justify-center items-center my-28'>
        <img src={image2} alt="" className='w-72' />
      </div>
      <div className="flex justify-center items-center text-3xl my-12 text-[#ffffff] font-bold md:text-6xl">
        {data.weddingDetails.brideName} & {data.weddingDetails.groomName}
      </div>
      <div className="flex justify-center text-center mx-2 my-20 text-[#ffffff] md:text-xl md:mx-10">
        <Typewriter
          options={{
            strings: [data.weddingDetails.story],
            autoStart: true,
            loop: true,
            delay: 45,
          }}
        />
      </div>
      <div className='flex justify-center text-center my-32 md:my-32'>
        <img src={data.photo} alt="" className='h-72 w-72 rounded-full' />
      </div>

      {/* Event Cards with Drawer */}
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full md:w-2/3 flex flex-col gap-4'>
          {data.events.map((event, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)} data-index={index}>
              <Card className={`w-[90%] mx-2 ${visibleCards[index] ? 'animate__animated animate__fadeInBottomRight' : 'opacity-0'} bg-purple-800 text-white`}>
                <CardHeader>
                  <CardTitle className='text-white'>{event.name}</CardTitle>
                  <CardDescription className='text-white'>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-white'>{event.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <button
                    onClick={() => handleReadMore(event)}
                    className="bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                  >
                    Read More
                  </button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer Component */}
     <Drawer 
        open={openDrawer} 
        onOpenChange={setOpenDrawer} 
        className="fixed inset-0 flex justify-center items-center"
      >
        <DrawerContent className="w-[90%] max-w-md mx-auto bg-purple-700 text-white rounded-lg shadow-lg p-4">
          <DrawerClose />
          <DrawerHeader>
            <DrawerTitle className="text-center text-xl font-semibold">{selectedEvent?.name}</DrawerTitle>
          </DrawerHeader>
          <DrawerDescription className="mt-4 text-center">
            <p>{selectedEvent?.details}</p>
          </DrawerDescription>
          <DrawerFooter className="flex justify-center mt-6">
            <button
              onClick={() => setOpenDrawer(false)}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-md"
            >
              Close
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="my-44">
        <div className="flex justify-center text-center text-xl text-[#ffffff] md:text-2xl">
          Invited by:
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center text-[#ffffff] gap-4 mt-4">
          {data.invitedBy.map((invited, index) => (
            <div key={index} className="text-lg md:text-xl">{invited}</div>
          ))}
        </div>
      </div>

      <div className="my-44">
        <div className="flex justify-center text-center text-xl text-[#ffffff] md:text-2xl font-semibold">
          Location:
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center  gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full md:w-2/3 text-center">
            <p className="text-lg md:text-xl">{data.weddingDetails.location}</p>
          </div>
        </div>

        <div className="mt-44 flex justify-center">
          <iframe
            src={`${data.locationUrl}`}
            className="w-full lg:w-1/2 h-64 lg:h-[22rem] lg:mr-4 lg:mb-0 rounded-lg shadow-md"
            title="Map"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Middle1;
