import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x28sxeg', 'template_bpgvo1m', form.current, 'sjcRQ7raDojf1fG2G')
      .then((result) => {
        console.log(result.text);
        navigate('/');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form ref={form} onSubmit={sendEmail} className="bg-opacity-90 backdrop-blur-lg p-6 md:p-8 w-full max-w-md md:max-w-lg rounded shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-customBlue">Entrar em contato</h1>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700">Nome</label>
          <input type="text" name="name" className="mt-1 p-2 md:p-3 w-full border rounded" required />
        </div>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" className="mt-1 p-2 md:p-3 w-full border rounded" required />
        </div>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700">Mensagem</label>
          <textarea name="message" className="mt-1 p-2 md:p-3 w-full border rounded" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded cursor-pointer hover:bg-blue-700">Enviar</button>
      </form>
    </div >
  );
};

export default ContactForm;