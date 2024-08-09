import React from "react";
import { socialLinks } from "./data";

export default function ContactSection() {
  return (
    <div
      className="header-overlay h-[50vh] inset-0 flex items-center justify-center bg-white overflow-hidden"
      id="contact"
    >
      <div className="relative z-20 mx-auto px-5 sm:px-10 md:max-w-[1080px] md:px-16 lg:px-12 xl:px-4 text-center">
        <div className="relative z-20">
          <h5 className="header-subtitle text-black z-10 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter">
            Get in Touch
          </h5>
          <div className="flex justify-center mt-6 space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`text-black text-3xl md:text-4xl hover:${link.hoverColor} cursor-pointer`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
