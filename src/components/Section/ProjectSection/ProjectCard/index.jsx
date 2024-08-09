import PropTypes from "prop-types";
import Image from "next/image";
import { SiMaplibre, SiSupabase, SiAstro, SiNextdotjs } from "react-icons/si";

// Create a mapping of icon names to actual icons
const iconMapping = {
  SiNextdotjs: SiNextdotjs,
  SiMaplibre: SiMaplibre,
  SiSupabase: SiSupabase,
  SiAstro: SiAstro,
};

const ProjectCard = ({ title, description, techStack = [], link, image }) => {
  return (
    <div className="rounded-lg border border-neutral-700 bg-black p-4">
      {/* Project image with adjusted size */}
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
        width={800}
        height={600}
      />
      {/* Rest of the card content */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-neutral-400 mt-2">{description}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {techStack.map((tech, index) => {
            const IconComponent = iconMapping[tech.icon];
            return (
              <div key={index} className="flex items-center gap-1">
                {IconComponent && (
                  <IconComponent className="text-lg text-white" />
                )}
                <span className="text-neutral-400">{tech.name}</span>
              </div>
            );
          })}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 mt-4 inline-block"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
