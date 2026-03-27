"use client";

import { motion } from "framer-motion";

interface StatsProps {
  items: { value: string; label: string }[];
}

export function Stats({ items }: StatsProps) {
  return (
    <section className="bg-dark-teal py-10 md:py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {items.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-lime leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/55">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
