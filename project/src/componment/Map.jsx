import React from 'react';

const Map = () => {
  return (
    <div className="flex items-center justify-center w-full h-full -mt-10 ">
      <div className='border-2 w-11/12 h-3/6 rounded-md bg-slate-100 overflow-hidden'>
      <iframe
      className='object-contain'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748.9466854901564!2d77.4971332389048!3d28.752600393899808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1684260802162!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default Map;
