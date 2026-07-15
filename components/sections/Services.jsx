"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I provide services in web development to create production level websites for individual as well as organisations.",
    href: "#contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I can design beautiful sites with attractive design and animations for any kind of use case according to client.",
    href: "#contact",
  },
  {
    num: "03",
    title: "Java Development",
    description:
      "I have experience of 6 years in Java development and provides guidance and tutorials in Java. ",
    href: "#contact",
  },
  {
    num: "04",
    title: "Graphic Design",
    description:
      "Although I don't have much experience in this field but have designed some graphics and love to do it.",
    href: "#contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="services" className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-24">
      <div className="container mx-auto px-6 xl:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            return (
              <motion.div key={index} variants={cardVariants}>
                <SpotlightCard
                  className="p-8 h-full flex flex-col justify-between gap-6 group transition-all duration-300 hover:scale-[1.01]"
                  spotlightColor="rgba(0, 255, 153, 0.08)"
                  borderColor="rgba(0, 255, 153, 0.2)"
                >
                  <div className="flex flex-col gap-6">
                    {/* top */}
                    <div className="w-full flex justify-between items-center">
                      <div
                        className="text-5xl font-extrabold text-outline
                       text-transparent group-hover:text-outline-hover transition-all duration-500"
                      >
                        {service.num}
                      </div>
                      <Link
                        href={service.href}
                        className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all 
                        duration-500 flex justify-center items-center hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-white group-hover:text-primary text-2xl transition-all duration-500" />
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>
                    {/* description */}
                    <p className="text-white/60 leading-relaxed text-sm xl:text-base">
                      {service.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
