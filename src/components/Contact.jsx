import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateForm();
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Si el formulario es válido, puedes enviar los datos aquí.
    if (isFormValid) {
      // Enviar el formulario
    }
  };

  return (
    <div name="contact" className="w-full  md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action="https://getform.io/f/47edf86a-25e5-4c4b-907f-1ad8ef33d869"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={message}
              onChange={handleMessageChange}
            />
            <button
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isFormValid}
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
