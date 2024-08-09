import React from "react";
import ProjectCard from "@/components/Section/ProjectSection/ProjectCard";
import { projects } from "./data"; // Perbarui jalur jika perlu

const ProjectSection = () => (
  <section
    className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
    id="project"
  >
    <div className="flex flex-col items-center gap-5 pb-32 h-full overflow-auto">
      <div className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]">
        <h1 className="font-semibold text-secondary md:text-6xl px-4">
          What I&apos;ve Made
        </h1>
        <div className="h-[1px] w-32 bg-white md:w-96"></div> {/* White line */}
      </div>

      <div className="flex flex-col items-center gap-5 w-full p-2">
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project) => (
            <div key={project.id} className="w-full mb-8">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectSection;
