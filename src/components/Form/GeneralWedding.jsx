import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveuser } from "../../states/counter/user";
// import { increment } from "../../states/counter/counter";
const GeneralWedding = () => {

  const model = useSelector((state)=>state.generalState.model)
  // console.log(model)
  const [events, setEvents] = useState([
    { name: "", date: "", description: "" },
    { name: "", date: "", description: "" },
    { name: "", date: "", description: "" },
  ]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Bride_name: "",
    Groom_name: "",
    location: "",
    Wedding_Date: "",
    map_url: "",
    invitedBy: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEventChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEvents = [...events];
    updatedEvents[index][name] = value;
    setEvents(updatedEvents);
  };

  const addEvent = () => {
    setEvents([...events, { name: "", date: "", description: "" }]);
  };

  const extractSrcFromIframe = (embedCode) => {
    const srcMatch = embedCode.match(/src="([^"]*)"/);
    return srcMatch ? srcMatch[1] : "";
  };

  const handleMapUrlChange = () => {
    const embedCode = prompt("Please paste the Google Maps embed code:");
    if (embedCode) {
      const mapUrl = extractSrcFromIframe(embedCode);
      setFormData({
        ...formData,
        map_url: mapUrl,
      });
    }
  };

  const handleInviteeChange = (e, index) => {
    const { value } = e.target;
    const updatedInvitedBy = [...formData.invitedBy];
    updatedInvitedBy[index] = value;
    setFormData({
      ...formData,
      invitedBy: updatedInvitedBy,
    });
  };

  const addInvitee = () => {
    setFormData({
      ...formData,
      invitedBy: [...formData.invitedBy, ""],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalFormData = {
      ...formData,
      events,
    };

    // sessionStorage.setItem("Formdata", JSON.stringify(finalFormData));
    // localStorage.setItem("mode", "preview");

    // console.log("form's data is collected",finalFormData.events[0].name);
    // const Modelname = sessionStorage.getItem("modelname");
    // navigate(`/preview/${Modelname}`, { state: { Modelname: Modelname } });
    console.log(finalFormData);
    dispatch(saveuser(finalFormData))

    navigate(`/preview`)

  };

  const placeholders = {
    Wedding_Date: "Enter Date",
    Bride_name: "Enter Bride's Name",
    Groom_name: "Enter Groom's Name",
    hastag: "Enter #Couple",
    location: "Enter Venue Location",
  };

  return (
    <div className="container mx-auto p-6 bg-slate-200">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-serif italic">Enter The Details</h1>
        {Object.entries(placeholders).map(([name, placeholder]) => (
          <div key={name}>
            <label htmlFor={name} className="font-bold border-1">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
              type={name === "Wedding_Date" ? "date" : "text"}
              name={name}
              id={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="input border-2 py-1 px-3 rounded w-full"
            />
          </div>
        ))}

        {events.map((event, index) => (
          <div key={index} className="grid gap-4">
            <label className="font-bold border-1">Event {index + 1}</label>
            <input
              type="text"
              name="name"
              placeholder={`Event Name ${index + 1}`}
              value={event.name}
              onChange={(e) => handleEventChange(e, index)}
              className="input border-2 py-1 px-3 rounded w-full"
            />
            <input
              type="date"
              name="date"
              placeholder={`Event Date ${index + 1}`}
              value={event.date}
              onChange={(e) => handleEventChange(e, index)}
              className="input border-2 py-1 px-3 rounded w-full"
            />
            <textarea
              name="description"
              placeholder={`Event Description ${index + 1}`}
              value={event.description}
              onChange={(e) => handleEventChange(e, index)}
              className="input border-2 py-1 px-3 rounded w-full"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addEvent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded"
        >
          Add Another Event
        </button>

        <div>
          <label htmlFor="map_url" className="font-bold border-1">
            Map URL
          </label>
          <input
            type="text"
            name="map_url"
            id="map_url"
            placeholder="Enter Map Location"
            value={formData.map_url}
            onChange={handleChange}
            className="input border-2 py-1 px-3 rounded w-full"
          />
          <button
            type="button"
            onClick={() => window.open("https://www.google.com/maps", "_blank")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded mt-2"
          >
            Open Google Maps
          </button>
          <button
            type="button"
            onClick={handleMapUrlChange}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded mt-2"
          >
            Set Google Maps Link
          </button>
        </div>

        <div>
          <label className="font-bold border-1">Invited By</label>
          {formData.invitedBy.map((invitee, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Invitee ${index + 1}`}
              value={invitee}
              onChange={(e) => handleInviteeChange(e, index)}
              className="input border-2 py-1 px-3 rounded w-full mt-2"
            />
          ))}
          <button
            type="button"
            onClick={addInvitee}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded mt-2"
          >
            Add Another Invitee
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default GeneralWedding;