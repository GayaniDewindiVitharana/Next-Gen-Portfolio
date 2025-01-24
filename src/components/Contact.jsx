import { useState } from 'react';
import Telephone from '../assets/Contact/Telephone.png';
import Email from '../assets/Contact/Email.png';
import Location from '../assets/Contact/Location.png';
import SocialMedia from './SocialMedia';
import Background from '../assets/Contact/Contactback.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, phone, subject, message } = formData;

    // Validate form fields
    if (!name || !email || !phone || !subject || !message) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');

    // Construct the mailto link
    const mailtoLink = `mailto:gayanidewindi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="relative flex flex-col h-auto p-4 mt-8 bg-black bg-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-row items-center justify-between flex-grow p-4 pt-10">
        <div className="relative flex flex-grow flex-wrap w-full md:w-[800px]">
          <h1
            className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
            style={{
              WebkitTextStroke: '0.5px #08D665',
              color: 'transparent',
            }}
          >
            Contact Us
          </h1>
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl text-[#08D665] font-bold uppercase">Contact us</p>
            <h2 className="text-3xl md:text-6xl text-[#ffffff] font-bold uppercase">
              Let's get in <br />
              touch today!
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 sm:flex-col md:flex-row">
        <div className="flex flex-col flex-grow p-4 text-white">
          <h2 className="text-2xl md:text-l font-bold mb-4 text-[#ffffff] italic">
            Always available for freelance work if the right project comes along,
            <br />
            Feel free to contact me!
          </h2>
          <div className="flex flex-row my-4">
            <img className="w-6 h-6" src={Telephone} alt="Telephone" />
            <p className="ml-2 text-xl font-bold md:text-xl">
              +94 760 904 402 <br /> +94 783 383 747
            </p>
          </div>
          <div className="flex flex-row mb-4">
            <img className="w-6 h-6" src={Email} alt="Email" />
            <p className="ml-4 text-xl font-bold md:text-l">gayanidewindi@gmail.com</p>
          </div>
          <div className="flex flex-row mb-4">
            <img className="w-6 h-8" src={Location} alt="Location" />
            <p className="ml-4 text-xl font-bold md:text-l">
              536/B,
              <br /> Hipankanda,
              <br /> Nawadagal.
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl text-[#08D665] font-bold uppercase mt-8">Follow me</h2>
          <div className="mb-8">
            <SocialMedia />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[50%] bg-[#0B0D0E] flex-grow h-auto p-8 border-8 border-[#08D665]">
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-white">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full p-4 border-2 border-[#08D665] text-white text-xs bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-grow">
                <label className="block font-medium text-white">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full p-4 border-2 border-[#08D665] text-white text-xs bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex-grow">
                <label className="block font-medium text-white">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full p-4 border-2 border-[#08D665] text-white text-xs bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                  placeholder="Ex. 076 0904 402"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-white">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 w-full p-4 border-2 border-[#08D665] text-white text-xs bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                placeholder="Enter the subject"
              />
            </div>
            <div>
              <label className="block font-medium text-white">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full p-4 border-2 border-[#08D665] text-white text-xs bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                placeholder="Your message here"
              />
            </div>
          </form>
          {error && <p className="mt-2 text-red-500">{error}</p>}
          <button
            onClick={handleSubmit}
            className="bg-[#08D665] text-white uppercase text-lg font-bold px-6 py-3 mt-4 rounded-[6px]"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
