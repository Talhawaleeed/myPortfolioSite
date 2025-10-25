import React from "react";

function Contact() {
  return (
    <div id="contact" className="w-full sm:h-screen h-[55%] relative flex justify-center items-center bg-zinc-900">

      <div className="container absolute w-1/2 h-1/2 flex flex-col justify-center items-center gap-8">
            <div className="heading mb-10 text-center">
        <p className=" text-gray-400 text-sm md:text-base font-mono text-center max-w-lg px-4 whitespace-pre-line">
          {"{ Contact }"}
        </p>
      </div>
        <form
          action="https://formspree.io/f/mrbywdny"
          method="POST"
          // className="flex flex-col gap-6 w-3/4 text-white "
          className="flex flex-col gap-8 w-full max-w-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            required
            autoCapitalize="off"
            className="text-white bg-zinc-800 h-8 text-sm font-mono border border-zinc-700 focus:outline-none focus:border-zinc-600  placeholder-zinc-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            id="email"
            autoCapitalize="off"
            className="text-white bg-zinc-800 h-8 text-sm font-mono border border-zinc-700 focus:outline-none focus:border-zinc-600  placeholder-zinc-400"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            id="subject"
            required
            autoCapitalize="off"
            className="text-white bg-zinc-800 h-8 text-sm font-mono border border-zinc-700 focus:outline-none focus:border-zinc-600  placeholder-zinc-400"
          />

          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Your message..."
            required
            autoCapitalize="off"
            resize-none
            className="text-white bg-zinc-800 h-8 text-sm font-mono border border-zinc-700 focus:outline-none focus:border-zinc-600  placeholder-zinc-400"
          />

          <button
            type="submit"
            className="text-white bg-zinc-950 h-8 text-sm font-mono border border-zinc-700 focus:outline-none focus:border-zinc-600  placeholder-zinc-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
