"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GMAIL CLONE",
    description: "Project to send and recieve Email",
    image: "/images/projects/mailbox.jpeg",
    tag: ["FullStack", "Web"],
    gitUrl: "https://github.com/abhinavjha29/Mail-box-client",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Expense Tracker Project",
    description: "Users can track daily Expenses",
    image: "/images/projects/exptracker.jpeg",
    tag: ["FullStack", "Web"],
    gitUrl: "https://github.com/abhinavjha29/Expense-tracker",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Shopping Website for users",
    image: "/images/projects/3.png",
    tag: ["FullStack", "Web"],
    gitUrl: "https://github.com/abhinavjha29/e-commerce-1.0",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Group Chat Application",
    description: "Chat application For users",
    image: "/images/projects/chatapp.jpeg",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/abhinavjha29/chatappdemo",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Resturant Page",
    description: "Simple Restraunt Page with cart",
    image: "/images/projects/resturant.jpeg",
    tag: ["Frontend", "Web"],
    gitUrl: "https://github.com/abhinavjha29/restaurant-app",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
