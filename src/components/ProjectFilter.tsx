import { useState } from "react";
import { Project } from "../data/profile";

interface ProjectFilterProps {
  projects: Project[];
  onFilter: (filter: string[]) => void;
}

export const ProjectFilter = ({ projects, onFilter }: ProjectFilterProps) => {
  const allTags = projects.flatMap((project) => project.stack);
  const uniqueTags = [...new Set(allTags)];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => 
      prev.includes(tag) 
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
    onFilter(selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]);
  };

  return (
    <fieldset className="mb-8">
      <legend className="text-lg font-medium mb-4">Filter by Tech Stack</legend>
      <div className="flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={selectedTags.includes(tag)}
            onClick={() => handleTagClick(tag)}
            className={`min-h-11 px-4 py-2 rounded-full text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              selectedTags.includes(tag) 
                ? "bg-teal-500 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </fieldset>
  );
};