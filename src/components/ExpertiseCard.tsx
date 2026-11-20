import { motion } from "framer-motion"

interface ExpertiseCardProps {
  title: string;
  skills: string[];
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fade-in bg-secondary p-6 rounded-lg border border-secondary/30"
    >
      <h3 className="text-xl font-semibold mb-4 text-accent">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="tech-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ExpertiseCard