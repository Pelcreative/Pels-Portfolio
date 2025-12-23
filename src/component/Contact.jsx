import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";



export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_58du8c7",
        "template_9aux3mp",
        e.target,
        "QB0m9tPyZg62rFLQg"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="w-full py-20 bg-[#0a192f] text-white">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-center text-3xl font-bold mb-10">Contact me</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
        {/* LEFT SIDE - CONTACT CARDS */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="bg-[#2da3e9] p-6 rounded-2xl text-center shadow-md">
            <div className="text-4xl mb-3 flex justify-center">
              <MdEmail />
            </div>
            <h3 className="font-semibold text-xl">Email</h3>
            <p className="mt-1 text-sm">pelumiakiinyemi08@gmail.com</p>
            <a href="mailto:pelumiakiinyemi08@gmail.com">
              <button className="text-sm mt-2 underline">send a message</button>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#2da3e9] p-6 rounded-2xl text-center shadow-md">
            <div className="text-4xl mb-3 flex justify-center">
              <FaLinkedinIn />
            </div>
            <h3 className="font-semibold text-xl">Linkedin</h3>
            <p className="mt-1 text-sm">Akinyemi Pelumi</p>
            <a
              href="https://www.linkedin.com/in/akinyemi-pelumi-3bab47304"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-sm mt-2 underline">send a message</button>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#2da3e9] p-6 rounded-2xl text-center shadow-md">
            <div className="text-4xl mb-3 flex justify-center">
              <FaWhatsapp />
            </div>
            <h3 className="font-semibold text-xl">WhatsApp</h3>
            <p className="mt-1 text-sm">09017859924</p>
            <a
              href="https://wa.me/9017859924"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-sm mt-2 underline">send a message</button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full p-3 bg-transparent border border-blue-400 rounded-md text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-transparent border border-blue-400 rounded-md text-white"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-transparent border border-blue-400 rounded-md text-white"
          />

          <input type="hidden" name="title" value="Portfolio Contact" />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#2da3e9] text-white px-6 py-2 rounded-md w-fit flex items-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
