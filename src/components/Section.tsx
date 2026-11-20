import { ReactNode } from "react";

export const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section id={id} className="py-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
};