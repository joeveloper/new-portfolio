"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <p className="mb-3">
        After graduating with a degree in{" "}<span className="font-medium">Electrical Electronics Engineering</span>, I embarked on a journey to pursue my passion for programming. 
        At the outset, I immersed myself in various coding bootcamps, where I delved into the realm of{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What truly captivates me about programming is its inherent creativity and problem-solving essence.</span>
        There's an unparalleled satisfaction in crafting exceptional products from mere lines of code and unraveling complex issues to find effective solutions.  
        I'm continuously driven to explore new <span className="italic">technologies and methodologies</span>, always seeking opportunities to broaden my skill set.
        My primary tech stack revolves around{" "}
        <span className="font-medium">
        React, Next.js, Node.js, and MongoDB
        </span>
        , with a strong familiarity with TypeScript. I am always looking to
        learn new technologies and I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I find joy in various hobbies. 
Whether it's indulging in video games, immersing myself in cinematic experiences{" "}
        <span className="font-medium">or expressing myself through drumming 🥁</span>. {" "}
        <span className="font-medium">and reading history</span>.
        I relish the balance that these activities bring to my life
      </p>
    </motion.section>
  );
}
