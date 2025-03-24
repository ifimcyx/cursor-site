"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景渐变和网格 */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.05] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      </div>
      
      {/* 背景图片 */}
      <div className="absolute inset-x-0 bottom-0 z-0 opacity-50">
        <div className="relative w-full max-w-4xl h-[65vh] mx-auto flex items-end">
          <Image 
            src="/images/1.png" 
            alt="Cursor编辑器界面" 
            fill 
            style={{objectFit: "contain", objectPosition: "bottom"}}
            priority
            className="mix-blend-screen"
          />
        </div>
      </div>
      
      {/* 动画圆圈 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl"
        animate={{
          x: ["-50%", "50%", "-50%"],
          y: ["-50%", "50%", "-50%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "30%", top: "40%" }}
      />
      
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 blur-3xl"
        animate={{
          x: ["50%", "-50%", "50%"],
          y: ["50%", "-50%", "50%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ right: "30%", top: "40%" }}
      />
      
      {/* 内容 */}
      <div className="container mx-auto px-4 z-10 relative mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Cursor
              </span>{" "}
              <span>- AI驱动的代码编辑器</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto">
              Cursor 是基于VS Code 开发的编辑器，集成AI技术帮助用户更高效地编写代码。
              它保留了VS Code的强大功能和熟悉操作体验，同时专注于AI辅助编程。
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="#intro"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              了解更多
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-transparent border border-purple-500 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-purple-950/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看项目
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};