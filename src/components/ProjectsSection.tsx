import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { Section } from "./Section";
import { profileData } from "../data/profile";

export const ProjectsSection = () => {
  const [filteredProjects, setFilteredProjects] = useState(profileData.featuredProjects);

  const handleFilter = (tags: string[]) => {
    if (tags.length === 0) {
      setFilteredProjects(profileData.featuredProjects);
    } else {
      setFilteredProjects(
        profileData.featuredProjects.filter((project) =>
          project.stack.some((tag) => tags.includes(tag))
        )
      );
    }
  };

  return (
    <Section id="projects" title="Featured Projects">
      <ProjectFilter projects={profileData.featuredProjects} onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};