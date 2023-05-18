import React from 'react'
import {pic4} from '../assets'
import './style.css'
import { AiOutlineInstagram, AiOutlineLinkedin,AiOutlineFacebook, AiOutlineGoogle, AiOutlineRight,AiFillPrinter} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer bg-slate-300 border-2  rounded-t-3xl">
          <div className="footer-column">
            <img src={pic4} alt="Logo" />
          </div>
          <div className="footer-column">
            <h4 className='text-black font-semibold'>Quick Links</h4>
            <ul>
              <li>
                <a href="#" className='text-black font-semibold'>Home</a>
              </li>
              <li>
                <a href="#" className='text-black font-semibold'>About</a>
              </li>
              <li>
                <a href="#" className='text-black font-semibold'>Services</a>
              </li>
              <li>
                <a href="#" className='text-black font-semibold'>Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='text-black font-semibold'>Address</h4>
            <p className='text-black font-semibold'>123 Street, City, Country</p>
          </div>
          <div className="footer-column">
            <h4 className='text-black font-semibold'>Contact Us</h4>
            <p className='text-black font-semibold'>Email: info@example.com</p>
            <p className='text-black font-semibold'>Phone: 123-456-7890</p>
          </div>
          <div className="footer-column">
            <h4 className='text-black font-semibold  ml-20 '>Social Media</h4>
            <ul className="social-media">
              <li >
               
                <a href="#">
                <div className='flex items-center justify-center -ml-2 gap-3'>
                  <AiOutlineFacebook style={{color:'#06070c', fontSize: 30}}/>
                  <span>Facebook</span>
                  </div>
                </a>
                
              </li>
              <li>
                <a href="#">
                  <div className='flex items-center justify-center -ml-4 gap-3'>
                  <AiOutlineLinkedin style={{color:'#06070c', fontSize: 30}}/>
                <span>Linkedin</span>
                  </div>
                
                </a>
              </li>
              <li>
                <a href="#">

                  <div className='flex items-center justify-center gap-3' >
                  <AiOutlineInstagram style={{color:'#06070c', fontSize: 30}}/>
                  <span>Instagram</span>
                  </div>
                  
                </a>
              </li>
              <li>
                <a href="#">
                  <div className='flex items-center justify-center gap-3 -ml-4'>
                  <AiOutlineGoogle style={{color:'#06070c', fontSize: 30}}/>
                  <span>Google</span>
                  </div>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      
    </div>
  )
}

export default Footer
