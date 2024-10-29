import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, liveLink, githubLink }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform transform hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div className="relative p-4 bg-transparent">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="mt-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 block"
          >
            <span className="font-bold">Live Site:</span> {liveLink}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 block"
          >
            <span className="font-bold">Github Repository:</span> {githubLink}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
