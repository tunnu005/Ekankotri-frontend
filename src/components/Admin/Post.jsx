import React, { useState } from "react";
import { postupload } from "../../states/action-creators";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
  const [selectImage, setSelectImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const notify = (Message) => toast(Message);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectImage(file);
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
    }
  };

  const uploadTemplates = async () => {
    setLoading(true); // Set loading to true when upload starts
    const data = new FormData();
    data.append("file", selectImage);
    data.append("title", title);
    data.append("type", type);

    const resp = await postupload(data);
    setTitle("");
    setType("");
    setSelectImage(null);
    setImagePreview(null);
    setLoading(false); // Reset loading state after upload
    
    if(resp.status === 201){
        notify("Upload successful")
    }else if(resp.status === 401){
      console.log(resp.data.message)
      notify(resp.data.message);
    }
   
  };

  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
      <div className="bg-slate-500 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-4">
        <ToastContainer />
        <h1 className="text-white text-center mt-3 font-thin">
          Form For Upload Images Of Card
        </h1>

        <div className="mt-6">
          <h1 className="text-white text-start ml-4 font-thin">
            Enter The Title Of Card:
          </h1>
          <label htmlFor="title" className="block">
            <input
              type="text"
              id="title"
              className="w-full ml-0 sm:w-60 sm:ml-52 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-start ml-4 font-thin">
            Select The Type Of Card:
          </h1>
          <label htmlFor="type" className="block">
            <select
              id="type"
              className="w-full ml-0 sm:w-60 sm:ml-52 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option value="">Select card type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Graduation">Graduation</option>
              <option value="Holiday">Holiday</option>
            </select>
          </label>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-start ml-4 font-thin">
            Enter The Image:
          </h1>
          <label htmlFor="image" className="block">
            <input
              type="file"
              id="image"
              className="w-full ml-0 sm:w-60 sm:ml-52 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {imagePreview && (
          <div className="mt-4 flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-48 h-48 object-cover border border-gray-300 rounded-md"
            />
          </div>
        )}

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 block mx-auto"
          onClick={uploadTemplates}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Uploading..." : "Upload"} {/* Show loading text */}
        </button>
      </div>
    </div>
  );
};

export default Post;
