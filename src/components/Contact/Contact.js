
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbuo7me', 'template_8tuzhmo', form.current, 'user_5k1kjRhlGVFrBUk0Sug0t')
      .then((result) => {
          if (result.text == 'OK') {
              alert('Thanks , i will contact with you soon')
          }
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-5'>Contact with me</h1>
            <form ref={form} onSubmit={sendEmail} className='space-y-5 text-center'>
               
                <p>
                   
                    <input type="text" name="name" className='w-1/2 p-2 bg-gray-100 rounded-2xl ' placeholder='enter your name'required />
                </p>
                <p>
                   
                   <input type="email" name="email"  className='w-1/2 p-2 bg-gray-100 rounded-2xl ' placeholder='enter your email' required/>
                </p>
                
                <p>
                   
                   <textarea type="text" name="message"  className='w-1/2 p-2 bg-gray-100 rounded-2xl ' placeholder='message' required/>
               </p>
             
              
            
                <p className='flex justify-center'>
                    
                <input type="submit" className='font-bold bg-yellow-400 px-5 py-1 rounded-2xl block' value="Send" />
               </p>
            </form>
        </div>
    );
};

export default Contact;