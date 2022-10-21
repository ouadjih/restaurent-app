import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { app } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export default function Header() {
  const firebaseauth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  async function login() {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseauth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  }
  const logout = ()=>{
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user:null
    })
  }
  return (
    <header className=" fixed z-50 w-full p-3 px-4 md:p-6 md:px-16">
      {/*desktop and tablette/*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex item-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold relative top-2">House</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ">
              Services
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className=" text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-1 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs  text-white font-semibold">1</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.8 }}
              className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl rounded-full cursor-pointer"
              src={user ? user.photoURL : avatar}
              alt="userprofile"
              onClick={login}
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-10 right-0 "
              >
                {user && user.email === "ouadjak42@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor  text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                
                <p
                 className="m-2 p-2 rounded-md shadow-md px-4 py-2 flex items-center gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor  text-base"
                 onClick={logout}
                 >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/*mobile*/}
      <div className="flex items-center justify-between md:hidden w-full h-full">
      <div className="relative">
          <motion.img
            whileTap={{ scale: 0.8 }}
            className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl rounded-full cursor-pointer"
            src={user ? user.photoURL : avatar}
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-10 left-0 "
            >
              {user && user.email === "ouadjak42@gmail.com" && (
                <Link to={"/createItem"} onClick ={()=>{setIsMenu(false)}}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor  text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col">
                <li onClick={()=> setIsMenu(false)} className="text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 duration-100 transition-all ease-in ">
                  Home
                </li>
                <li  onClick={()=> setIsMenu(false)}  className="text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 duration-100 transition-all ease-in ">
                  Menu
                </li>
                <li  onClick={()=> setIsMenu(false)} className="text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 duration-100 transition-all ease-in ">
                  About Us
                </li>
                <li onClick={()=> setIsMenu(false)}  className="text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 duration-100 transition-all ease-in ">
                  Services
                </li>
              </ul>
              <p 
              className="m-2 p-2 rounded-md shadow-md px-4 py-2 flex items-center justify-center gap-3 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor  text-base"
              onClick={logout}
              >
               
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>

     

        <Link to={"/"} className="flex item-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold relative top-2">House</p>
        </Link>

        
        <div className="relative flex items-center justify-center">
            <MdShoppingBasket className=" text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-1 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs  text-white font-semibold">1</p>
            </div>
      </div>
       
      </div>
    </header>
  );
}
