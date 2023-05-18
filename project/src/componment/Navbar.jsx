import React, { useState, useEffect } from 'react';
import {pic4} from '../assets'
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user.email);
        localStorage.setItem('user', result.user.email);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  })

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  // Navbar scroll changeBackground function
 

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    
    // Add the event listener for scroll to change the background
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', updatePosition);
    }
  }, []);

  return (
    <div>
      <nav
        className={`${
          scrollPosition > 0
            ? 'shadow-md bg-blue-500 border-2 sticky top-0 z-50'
            : 'bg-white z-10'
        } transition-all duration-300 flex items-center justify-between rounded-b-lg border-2 `}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a href="#" className="flex items-center text-black font-bold text-lg">
            <img src={pic4} alt="Logo" className="h-16 w-24 mr-2 object-contain" />
          </a>
          <div>
          <ul className="flex space-x-8 gap-4">
            <li>
              <a
                href="#"
                className={`text-slate-600 text-xl font-semibold hover:text-blue-500 ${
                  navbar ? 'text-white' : 'text-black'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-slate-600 text-xl font-semibold hover:text-blue-500 ${
                  navbar ? 'text-white' : 'text-black'
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-slate-600 text-xl font-semibold hover:text-blue-500 ${
                  navbar ? 'text-white' : 'text-black'
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-slate-600 text-xl font-semibold hover:text-blue-500 ${
                  navbar ? 'text-white' : 'text-black'
                }`}
              >
                Free Demo
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-slate-600 text-xl font-semibold hover:text-blue-500 ${
                  navbar ? 'text-white' : 'text-black'
                }`}
              >
                Contact Us
              </a>
            </li>
          </ul>
          </div>
          
        

        {
          user ? (
            <div className="flex items-center p-3 mr-10">
          <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Log out
          </button>
        </div>
          ):
          (
            <div className="flex items-center p-3 mr-10">
            <button
              onClick={handleLogin}
              className="bg-blue-500 cursor-pointer hover:bg-blue-700 w-32 text-white font-bold py-3 px-4 rounded-3xl  shadow-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Log In
            </button>
          </div>
          
          )
        }

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
