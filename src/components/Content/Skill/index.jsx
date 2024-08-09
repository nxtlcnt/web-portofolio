import React from "react";
import { skill } from "./data";

export default function Skill() {
  return (
    <div className="flex flex-col gap-8 text-primary px-5 lg:px-0">
      {skill.map((item, index) => (
        <div key={index}>
          <h3 className="text-lg mb-2 font-semibold leading-loose text-secondary md:text-xl">
            {item.title}
          </h3>
          <ul className="flex flex-wrap gap-4">
            {item.description.map((desc, idx) => (
              <li
                key={idx}
                className="inline-flex items-center text-sm leading-relaxed lg:text-base"
              >
                {desc.icon}
                <span className="ml-1">{desc.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
