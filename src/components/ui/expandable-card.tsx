"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown as ChevronDownIcon, X as XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface CardItem {
  title: string;
  description: string;
  imageSrc: string;
  content: React.ReactNode;
  steps?: {
    title: string;
    content: React.ReactNode;
    image: string;
  }[];
}

interface ExpandableCardProps {
  items: CardItem[];
  isFluid?: boolean;
}

export const ExpandableCard = ({ items, isFluid = false }: ExpandableCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openModal = (item: CardItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className={`grid grid-cols-1 ${isFluid ? 'md:grid-cols-2 lg:grid-cols-2 gap-6' : 'gap-8'}`}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden transition-all duration-500 ${
              expandedIndex === index 
                ? 'shadow-lg shadow-purple-600/10' 
                : 'hover:shadow-md hover:shadow-purple-500/5 hover:border-zinc-700'
            } ${isFluid && expandedIndex === index ? 'md:col-span-2' : ''}`}
          >
            <div 
              className="flex flex-col cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-400"
                  >
                    <ChevronDownIcon className="h-5 w-5" />
                  </motion.div>
                </div>
                <p className="text-zinc-300 mb-4">{item.description}</p>
                
                <div className="relative h-48 mb-4 overflow-hidden rounded-md border border-zinc-700">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 overflow-hidden"
                  >
                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-headings:text-zinc-100">
                      {item.content}
                      {item.steps && (
                        <div className="mt-6">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(item);
                            }}
                            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
                          >
                            查看详情
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 详情模态窗 */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zinc-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-700"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              
              {selectedItem.steps && (
                <div className="space-y-8">
                  {selectedItem.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:bg-zinc-800/30 transition-colors duration-300">
                      <h4 className="text-xl font-semibold text-purple-400 mb-4">{step.title}</h4>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 prose prose-invert max-w-none prose-p:text-zinc-300">
                          {step.content}
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-md overflow-hidden border border-zinc-700">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              style={{ objectFit: "contain" }}
                              className="bg-zinc-950"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}; 