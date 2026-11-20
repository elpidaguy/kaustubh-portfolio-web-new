import * as Icons from "lucide-react";

interface LinkProps {
  href: string;
  label: string;
  external?: boolean;
  icon?: string;
}

export const Link = ({ href, label, external = false, icon }: LinkProps) => {
  let IconComponent = null;
  if (icon) {
    const formattedIconName = icon.charAt(0).toUpperCase() + icon.slice(1);
    IconComponent = (Icons as Record<string, any>)[formattedIconName] || null;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
    >
      {IconComponent && <IconComponent size={16} />}
      {label}
    </a>
  );
};