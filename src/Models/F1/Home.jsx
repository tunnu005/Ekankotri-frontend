import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../states/action-creators';
import videoBg from '../../assets/v3.mp4';
import couple from '../../assets/couples.jpg';
import garba from '../../assets/Navratri.avif';
import mrgdone from '../../assets/mrgdone.jpeg';
import dine from '../../assets/dine.jpeg';
import hastmelap from '../../assets/hastmelap.webp';
import car from '../../assets/car.jpeg';
import './style.css';

const Home = ({ data }) => {
  const dispatch = useDispatch();

  const [selectedCoupleImage, setSelectedCoupleImage] = useState(couple);
  const [selectedGarbaImage, setSelectedGarbaImage] = useState(garba);
  const [selectedMrgdoneImage, setSelectedMrgdoneImage] = useState(mrgdone);
  const [selectedDineImage, setSelectedDineImage] = useState(dine);
  const [selectedHastmelapImage, setSelectedHastmelapImage] = useState(hastmelap);
  const [selectedCarImage, setSelectedCarImage] = useState(car);

  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (setImageState) => async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = await dispatch(uploadImage(file));
      console.log("Uploaded image URL:", imageUrl);
      if (imageUrl) {
        // Correctly concatenate the server URL with the image path
        const fullImageUrl = `http://localhost:8000${imageUrl}`;
        console.log(fullImageUrl)
        setImageState(fullImageUrl);
      }
    }
  };
  

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="mt-0 w-full h-full z-10 relative">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-[50%] h-full item-center p-10">
            <label htmlFor="coupleInput">
              <img
                src={selectedCoupleImage}
                className="h-24 rounded-full lg:h-[24rem] lg:mt-40 lg:ml-32 shadow-lg shadow-red-100 w-auto"
                alt=""
              />
            </label>
            {isEditing && (
              <input
                type="file"
                id="coupleInput"
                className="opacity-0"
                accept="image/*"
                onChange={handleImageChange(setSelectedCoupleImage)}
              />
            )}
          </div>
          <div className="w-[50%] h-full mt-6">
            <div className="text-orange-100 lg:ml-16 lg:mt-56">
              <p className="text-[0.8rem] z-10 font-serif lg:text-2xl">
                {data.Wedding_Date}
              </p>
              <p className="text-[2rem] font-serif lg:text-[5rem] z-10 text-shadow-lg shadow-red-200">
                {data.Bride_name}
              </p>
              <p className="font-serif text-[0.5rem] lg:text-[2rem] text-red-200">
                {data.hastag}
              </p>
              <p className="text-[2rem] font-serif lg:text-[5rem] z-10">
                {data.Groom_name}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleEditToggle}
          className="absolute bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {isEditing ? 'Finish Editing' : 'Change Images'}
        </button>
      </div>
      <div
        className="bg-gradient-to-r from-red-50 to-red-200 w-[100%] h-[60rem] relative lg:h-[65rem] pt-12"
        id="eventsSection"
      >
        <div className="text-black text-left text-[1rem] p-3 lg:ml-8 lg:text-3xl">
        <h1>{data.events[0].date}</h1>
        </div>
        <div className="lg:flex lg:pl-[18rem]">
          <div className={`flip-card ${isEditing ? 'no-flip' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <label htmlFor="mrgdoneInput">
                  <img
                    src={selectedMrgdoneImage}
                    className="h-[7rem] lg:h-[18rem] lg:mt-56 w-auto mt-12"
                    alt=""
                  />
                </label>
                {isEditing && (
                  <input
                    type="file"
                    id="mrgdoneInput"
                    className="opacity-0"
                    accept="image/*"
                    onChange={handleImageChange(setSelectedMrgdoneImage)}
                  />
                )}
              </div>
              <div className="flip-card-back w-40 text-black">
                <p>{data.events[0].description}</p>
              </div>
            </div>
          </div>
          <div className={`flip-card ${isEditing ? 'no-flip' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <label htmlFor="garbaInput">
                  <img
                    src={selectedGarbaImage}
                    className="h-[7rem] w-auto lg:h-[18rem] lg:mt-56 mt-40"
                    alt=""
                  />
                </label>
                {isEditing && (
                  <input
                    type="file"
                    id="garbaInput"
                    className="opacity-0"
                    accept="image/*"
                    onChange={handleImageChange(setSelectedGarbaImage)}
                  />
                )}
              </div>
              <div className="flip-card-back w-40 text-black">
                <p>{data.events[1].description}</p>
              </div>
            </div>
          </div>
          <div className={`flip-card ${isEditing ? 'no-flip' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <label htmlFor="dineInput">
                  <img
                    src={selectedDineImage}
                    className="h-[7rem] w-auto lg:h-[18rem] lg:mt-56 mt-[17rem]"
                    alt=""
                  />
                </label>
                {isEditing && (
                  <input
                    type="file"
                    id="dineInput"
                    className="opacity-0"
                    accept="image/*"
                    onChange={handleImageChange(setSelectedDineImage)}
                  />
                )}
              </div>
              <div className="flip-card-back w-40 text-black">
                <p>
                  {data.events[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left text-[1rem] p-3 mt-[12rem] lg:text-3xl lg:ml-8 lg:mt-64">
          {data.events[1].date}
        </div>
        <div className="lg:flex sm:flex-row sm:space-x-4 lg:pl-[15rem]">
          <div className={`flip-card ${isEditing ? 'no-flip' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <label htmlFor="carInput">
                  <img
                    src={selectedCarImage}
                    className="h-[7rem] lg:h-[14rem] lg:mt-56 w-auto mt-12"
                    alt=""
                  />
                </label>
                {isEditing && (
                  <input
                    type="file"
                    id="carInput"
                    className="opacity-0"
                    accept="image/*"
                    onChange={handleImageChange(setSelectedCarImage)}
                  />
                )}
              </div>
              <div className="flip-card-back w-40 text-black">
                {data.events[0].description}
              </div>
            </div>
          </div>
          <div className={`flip-card ${isEditing ? 'no-flip' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <label htmlFor="hastmelapInput">
                  <img
                    src={selectedHastmelapImage}
                    className="h-[7rem] w-auto lg:mt-56 lg:h-[14rem] mt-[10rem]"
                    alt=""
                  />
                </label>
                {isEditing && (
                  <input
                    type="file"
                    id="hastmelapInput"
                    className="opacity-0"
                    accept="image/*"
                    onChange={handleImageChange(setSelectedHastmelapImage)}
                  />
                )}
              </div>
              <div className="flip-card-back w-40 text-black">
                {data.events.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
