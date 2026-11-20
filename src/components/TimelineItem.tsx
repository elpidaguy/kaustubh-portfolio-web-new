import { motion } from "framer-motion"

interface TimelineItemProps {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ role, company, dates, bullets }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fade-in mb-8 flex"
    >
      <div className="hidden md:block w-1/4 pr-8">
        <div className="text-right text-accent font-medium">
          {dates}
        </div>
      </div>
      <div className="w-full md:w-3/4">
        <div className="bg-secondary p-6 rounded-lg border border-secondary/30">
          <h3 className="text-xl font-semibold text-accent mb-1">
            {role}
          </h3>
          <h4 className="text-lg font-medium mb-4">
            {company}
          </h4>
          <div className="md:hidden mb-4 text-accent font-medium">
            {dates}
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-secondary">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default TimelineItem