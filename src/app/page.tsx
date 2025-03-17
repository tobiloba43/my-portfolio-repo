// app/portfolio/page.tsx
"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP TextPlugin
gsap.registerPlugin(TextPlugin);

const Portfolio = () => {
  useEffect(() => {
    gsap.fromTo(
      ".typing-title", 
      { text: "" }, 
      { 
        text: "Erinle Tobiloba", 
        duration: 2, 
        ease: "power2.out" 
      }
    );

    gsap.fromTo(
      ".typing-subtitle", 
      { text: "" }, 
      { 
        text: "Frontend Developer | Next.js Enthusiast", 
        duration: 3, 
        delay: 2, 
        ease: "power2.out"
      }
    );

    gsap.fromTo(
      ".typing-heading", 
      { text: "" }, 
      { 
        text: "About Me", 
        duration: 2, 
        ease: "power2.out" 
      }
    );

    gsap.fromTo(
      ".typing-desc", 
      { text: "" }, 
      { 
        text: "Hi! I'm Erinle Tobiloba, a passionate and driven frontend developer with a knack for creating engaging and intuitive user experiences.<br /> With a solid foundation in JavaScript, React, and Next.js, I specialize in building modern web applications that are both functional and aesthetically pleasing.<br /> Outside of coding, I enjoy collaborating with like-minded developers and designers.<br /> I believe that great software comes from combining a passion for coding with creativity and problem-solving. When I'm not coding, you can often find me exploring new technologies, reading about innovation, or creating digital art.", 
        duration: 3, 
        delay: 2, 
        ease: "power2.out"
      }
    );
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
    
      <section
        id="about"
        className="py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/img4.jpg')",
        }}
      >
        <div className="text-center mb-4">
          {/* Apply GSAP typing animation classes */}
          <h1 className="text-4xl font-bold typing-title"></h1>
          <p className="text-xl mt-2 typing-subtitle"></p>
        </div>
        <div className="container mx-auto text-center bg-transparent bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 typing-heading"></h2>
          <p className="text-lg leading-relaxed mb-6 typing-desc">
           
          </p>
        </div>
      </section>

      
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className=" bg-cover bg-center p-20 rounded shadow"
            style={{
              backgroundImage: "url('/images/img3.jpg')",
            }}
            >
              <h3 className="text-2xl font-semibold text-white">Project 1</h3>
              <p className="mt-2 font-bold text-white">A web app built with React and Next.js</p>
              <a href="https://my-prj.vercel.app/" className="text-white mt-2 block border border-blue-950 bg-blue-950 rounded-md justify-center text-center ml-14 hover:bg-blue-900 w-50">View Project</a>
            </div>
            <div className="bg-cover bg-center p-20 rounded shadow "
             style={{
              backgroundImage: "url('/images/img7.jpg')",
            }}
            >
              <h3 className="text-2xl font-semibold text-white">Project 2</h3>
              <p className="mt-2 text-white font-bold">A portfolio website built with Next.js and Tailwind</p>
              <a href="https://example.com" className="text-white mt-2 block border border-blue-950 bg-blue-950 rounded-md justify-center text-center ml-14 hover:bg-blue-900 w-50  ">View Project</a>
            </div>
            
          </div>
        </div>
      </section>

    
      <section id="contact" className="py-25 -mt-28 -mb-28">
        <div className="bg-cover bg-center p-10 m-5 pt-4"
        style={{
          backgroundImage: "url('/images/img6.jpg')",
        }}
        >
        <div className="container mx-auto text-center p-10 ">
          <h2 className="text-3xl font-semibold mb-8 text-white">Contact</h2>
          <p className="text-lg leading-relaxed mb-4 text-white">
            Feel free to reach out to me for collaboration or freelance work.
            Am always open to new opportunities.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md text-white placeholder:text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md text-white placeholder:text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border rounded-md text-white placeholder:text-white"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg cursor-pointer"
            >
              Send Message
            </button>
            <div className="text-xl text-white ">
              OR
              <p> send a direct message via whatsapp: +2349135713212, +2348125111584</p>
            </div>
          </form>
        </div>
        </div>
        
      </section>

     
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Erinle tobiloba. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
