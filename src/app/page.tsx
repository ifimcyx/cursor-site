"use client";

import React from "react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { motion } from "framer-motion";
import {
  practiceProjects,
  designExplorations,
  cursorIntroduction,
  cursorDesign,
} from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 导航栏 */}
      <Navbar />

      {/* 英雄区 */}
      <Hero />

      {/* 简介区域 */}
      <section
        id="intro"
        className="py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {cursorIntroduction.title}
            </h2>
            <p className="text-xl text-zinc-300 mb-12 text-center">
              {cursorIntroduction.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* 发展历程时间线 */}
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold mb-6 text-purple-400">发展历程</h3>
                <div className="space-y-8 relative">
                  {/* 中间的时间线 */}
                  <div className="absolute left-[15px] top-1 bottom-1 w-[2px] timeline-line"></div>
                  
                  {cursorIntroduction.history.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start relative pl-10"
                    >
                      {/* 时间线节点 */}
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center border-2 border-purple-400 z-10 shadow-lg shadow-purple-500/20 timeline-node">
                        <span className="text-xs font-bold text-white">{2022 + index}</span>
                      </div>
                      
                      <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 w-full hover:border-purple-500/50 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10 timeline-card">
                        <div className="flex flex-col">
                          <span className="text-purple-400 text-xs font-semibold mb-1">{`${2022 + index}年`}</span>
                          <span className="text-zinc-300">{item}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {cursorIntroduction.aiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800"
                  >
                    <h3 className="text-xl font-bold mb-4 text-purple-400">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span className="text-zinc-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 实践项目区域 */}
      <section
        id="projects"
        className="py-24 relative bg-zinc-950"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
        </div>
        
        {/* 添加更丰富的背景效果 */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
          <div className="absolute -right-20 top-20 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px]"></div>
          <div className="absolute -left-20 bottom-20 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px]"></div>
          <div className="absolute left-1/3 top-1/4 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
          <div className="absolute right-1/4 bottom-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">实践项目</h2>
            <p className="text-xl text-zinc-300 mb-12 text-center">
              使用Cursor完成的实际项目案例
            </p>
            
            <ExpandableCard items={practiceProjects} />
          </motion.div>
        </div>
      </section>

      {/* 产品设计探索区域 */}
      <section
        id="design"
        className="py-24 relative"
      >
        {/* 添加丰富的背景效果 */}
        <div className="absolute inset-0 bg-grid-white/[0.03] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-indigo-900/5 to-black"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
          <div className="absolute left-20 top-20 w-[450px] h-[450px] rounded-full bg-indigo-500/20 blur-[100px]"></div>
          <div className="absolute right-20 bottom-40 w-[350px] h-[350px] rounded-full bg-cyan-500/20 blur-[100px]"></div>
          <div className="absolute right-1/3 top-1/4 w-2 h-2 bg-indigo-300 rounded-full animate-ping"></div>
          <div className="absolute left-1/4 bottom-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">产品设计探索</h2>
            <p className="text-xl text-zinc-300 mb-12 text-center">
              探索Cursor在设计领域的应用
            </p>
            
            <ExpandableCard items={designExplorations} isFluid={true} />
          </motion.div>
        </div>
      </section>

      {/* Cursor与设计区域 */}
      <section className="py-24 relative bg-zinc-950">
        <div className="absolute inset-0 bg-grid-white/[0.05] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{cursorDesign.title}</h2>
            <p className="text-xl text-zinc-300 mb-12 text-center">
              {cursorDesign.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cursorDesign.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">{feature.title}</h3>
                  <p className="text-zinc-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-10 bg-black border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-zinc-400">© 2024 Cursor AI编辑器</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">关于我们</a>
              <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">博客</a>
              <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">使用条款</a>
              <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">隐私政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
