import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profileData } from '../data/profile'
import { fadeUp } from '../motion/variants'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-24">
      <h2 className="text-5xl font-black font-display mb-2">Blogs</h2>
      <SquiggleDivider className="w-32 h-6 text-primary mb-12" />
      <div className="grid md:grid-cols-3 gap-6">
        {profileData.blogs.map((blog) => (
          <motion.a
            key={blog.url}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group p-8 bg-card rounded-3xl border border-token shadow-sm hover:shadow-hard transition-all"
          >
            <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
            <p className="text-muted leading-relaxed mb-6">{blog.description}</p>
            <span className="inline-flex items-center gap-2 font-bold text-primary">
              Read article <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Blogs
