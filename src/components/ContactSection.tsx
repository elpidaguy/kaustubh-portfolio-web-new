import { Section } from "./Section";
import { ContactForm } from "./ContactForm";
import { profileData } from "../data/profile";
import { Link } from "./Link";

export const ContactSection = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium mb-4">Contact Me</h2>
          <div className="space-y-2">
            <Link
              href={`mailto:${profileData.links.email}`}
              label={profileData.links.email}
              external
            />
            <Link
              href={profileData.links.github}
              label="GitHub"
              external
              icon="Github"
            />
            <Link
              href={profileData.links.linkedin}
              label="LinkedIn"
              external
              icon="Linkedin"
            />
            <Link
              href={profileData.links.resume}
              label="Download Resume"
              external
              icon="Download"
            />
          </div>
        </div>
        <div>
          <ContactForm email={profileData.links.email} />
        </div>
      </div>
    </Section>
  );
};