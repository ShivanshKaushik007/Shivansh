"use client";

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 7599188181",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shivanshkaushik1237@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Visvesvaraya-B Hostel, IET Lucknow",
  },
];

const Contact = () => {
  const form = useRef();
  const [service, setService] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_au0opt6',        // Replace with your actual service ID
      'template_n4eku2e',       // Replace with your actual template ID
      form.current,
      'uyMnPD0BeZa90REzO'         // Replace with your actual public key
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );

    e.target.reset();
    setService(""); // reset service select
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto px-6 xl:px-12">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <SpotlightCard
              className="p-10 border border-white/10"
              spotlightColor="rgba(0, 255, 153, 0.04)"
              borderColor="rgba(0, 255, 153, 0.15)"
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6"
              >
                <h3 className="text-4xl text-accent font-bold">Let's work together</h3>
                <p className="text-white/60 text-sm xl:text-base leading-relaxed">
                  Wanna work together? Drop your contact info and message below.
                </p>

                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="first_name" placeholder="First name" required />
                  <Input type="text" name="last_name" placeholder="Last name" required />
                  <Input type="email" name="email" placeholder="Email address" required />
                  <Input type="text" name="phone" placeholder="Phone number" />
                </div>

                {/* select */}
                <input type="hidden" name="service" value={service} />
                <Select onValueChange={(value) => setService(value)} value={service}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Graphic Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here."
                  required
                />

                {/* button */}
                <Button type="submit" size="md" className="max-w-40 bg-accent text-primary hover:bg-accent-hover transition-all duration-300 font-bold">
                  Send message
                </Button>
              </form>
            </SpotlightCard>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 w-full max-w-[400px]">
              {info.map((item, index) => (
                <li key={index}>
                  <SpotlightCard
                    className="p-5 flex items-center gap-6 transition-all duration-300 hover:scale-[1.02]"
                    spotlightColor="rgba(0, 255, 153, 0.05)"
                    borderColor="rgba(0, 255, 153, 0.2)"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[64px] xl:h-[64px] bg-[#1c1c22] border border-white/10 text-accent rounded-md flex items-center justify-center">
                      <div className="text-[24px] xl:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/50 text-xs xl:text-sm font-semibold uppercase tracking-wider">{item.title}</p>
                      <h3 className="text-base xl:text-lg text-white font-medium mt-1 select-all">{item.description}</h3>
                    </div>
                  </SpotlightCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
