import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";


const RequestDemo = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    option: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    axios
      .post("https://erp-portal.onrender.com/api/contact", form)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          alert("Thank you. We will get back to you as soon as possible.");
  
          setForm({
            name: "",
            email: "",
            number: "",
            option: "",
            message: "",
          });
        } else {
          throw new Error("Failed to send the form data.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
  
        alert("Ahh, something went wrong. Please try again.");
      });
  };
  

  return (
    <div className="flex items-center justify-center bg-gray-900 border ml-20 mt-9 rounded-lg w-11/12">
        
      <div
      
        className='flex-[0.75] bg-gray-900 p-3 mt-3 rounded-2xl'
      >
        <p className='text-white font-bold text-2xl'>Free Live Demo</p>
        

        <form
          ref={formRef}
            onSubmit={handleSubmit}
          
          className='mt-3 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-1'>Your Number</span>
            <input
              type='number'
              name='number'
              value={form.number}
              onChange={handleChange}
              placeholder="What's your number?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
             <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Select an option</span>
            <select
              name="option"
              value={form.option}
              onChange={handleChange}
              placeholder="Select an option?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            >
              <option value="">Select</option>
              <option value="ERP">ERP</option>
              <option value="Soft Skill">Soft Skill</option>
              <option value="Services">Services</option>
            </select>
          </label>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
           
            className='bg-gray-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      
    </div>
    
  );
};

export default RequestDemo;
