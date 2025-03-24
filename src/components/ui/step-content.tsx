"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StepContentProps {
  steps: {
    title: string;
    content: React.ReactNode;
    image?: string;
  }[];
  className?: string;
}

export const StepContent = ({ steps, className }: StepContentProps) => {
  return (
    <div className={cn("space-y-8", className)}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-zinc-900/50 rounded-lg p-6 backdrop-blur-sm border border-zinc-800"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white mr-3 text-sm">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <div className="text-zinc-300 prose prose-invert max-w-none">
                {step.content}
              </div>
            </div>
            {step.image && (
              <div className="md:w-1/3 h-auto">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg w-full h-auto object-cover border border-zinc-700 shadow-xl transition-all duration-300 hover:shadow-purple-500/20 hover:scale-[1.02]"
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 