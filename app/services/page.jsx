"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I provide services in web development to create production level websites for individual as well as organisations.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I can design beautiful sites with attractive design and animations for any kind of use case according to client.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Java Development",
    description:
      "I have experience of 6 years in Java development and provides guidance and tutorials in Java. ",
    href: "/contact",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "Although I don't have much experience in this field but have designed some logos and love to do it.",
    href: "/contact",
  },
];
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 m">
      <div className=" container mx-28 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline
                   text-transparent group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all 
                  duration-500 flex justify-center items-center hover:-rotate-45  "
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="vorder-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
