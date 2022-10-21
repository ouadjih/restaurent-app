import React from "react";
import { MdShoppingBasket,MdAdd,MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import {app} from '../firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import {useStateValue} from '../context/StateProvider'
import {actionType} from '../context/reducer'

export default function Header() {
  const firebaseauth = getAuth(app)
  const provider= new GoogleAuthProvider()
  const [{user},dispatch] = useStateValue()

  async function login () {
    if(!user){
      const {user: {refreshToken ,providerData}} =  await signInWithPopup(firebaseauth,provider)
      dispatch({
        type: actionType.SET_USER,
        user : providerData[0]
      })
      localStorage.setItem('user',JSON.stringify(providerData[0]))
    }
   
  };
  return (
    <header className=" fixed z-50 w-full p-6  px-16">
      {/*desktop and tabletteµ/*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex item-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">Fast</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
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
          </ul>

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
              src={user? user.photoURL :avatar}
              alt="userprofile"
              onClick={login}
            />
               <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-10 right-0 ">
               <Link to={'/createItem'}>
                <p  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor  text-base">New Item <MdAdd/></p>
                </Link>
            {
            user && user.email === 'ouadjak42@gmail.com' && (
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor  text-base">Logout <MdLogout/></p>)
           }
          </div>
          </div>
       
        </div>
      </div>
      {/*mobile*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}
