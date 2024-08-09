import React from "react";
import { introduction } from "./data";

export default function Introduction() {
  return (
    <div className="text-primary px-5 lg:px-0">
      <h3 className="text-lg mb-2 font-semibold leading-loose text-secondary md:text-xl">
        {introduction.heading}
      </h3>
      {introduction.paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-2 text-sm leading-relaxed lg:text-base">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
