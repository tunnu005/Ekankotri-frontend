import React, { useState } from "react";
import Video from "../../public/fire.mp4";
import { forgetPassword } from "../states/action-creators";
const Forget = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const handleHide = () => {
    setShowResetForm(true);
  };

  const handleForget = async () => {
    res = await forgetPassword(mail);
    console.log(res);
  };

  return (
    <div className="relative">
      <video src={Video} className="absolute w-full" muted loop autoPlay />
      <div className="absolute inset-0 flex justify-center items-center mt-96">
        <div className="bg-gradient-to-bl from-orange-500 via-black to-yellow-900 text-black max-w-md w-full mx-auto px-6 py-8 rounded-lg shadow-lg">
          <h1 className="font-mono text-center text-3xl text-white mb-8">
            Forget Password?
          </h1>
          <input
            type="email"
            className="border-2 px-3 py-2 w-full mb-4"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Enter E Mail Id"
          />

          {(showResetForm && (
            <div>
              <input
                type="password"
                value={password}
                className="border-2 px-3 py-2  w-full"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password Here"
              />
              <input
                type="password"
                value={cpassword}
                className="border-2 px-3 py-2 mt-4 w-full"
                onChange={(e) => setCpassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-200 px-3 py-2 mt-4 w-full rounded-3xl"
              >
                Submit
              </button>
            </div>
          )) || (
            <button
              className="border py-2 text-white w-full rounded-full"
              onClick={() => {
                handleHide();
                handleForget();
              }}
            >
              GET OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forget;
