import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, Chrome } from "lucide-react";
import { motion } from "framer-motion";

export default function ThoughtBoardLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] text-white px-6 py-12">
      <header className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFE53B] via-[#FF2525] to-[#FFA500]"
        >
          ThoughtBoard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-200"
        >
          Organize your thoughts, take notes, plan your day — all in one place.
        </motion.p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="bg-gradient-to-br from-[#2e2c54] to-[#3f3351] border-none shadow-2xl">
          <CardContent className="p-6">
            <Sparkles className="text-yellow-300 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">AI Knowledge Companion</h3>
            <p className="text-sm text-gray-300">
              Talk to our AI to build your knowledge graph, brainstorm, and generate new ideas on the fly.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] border-none shadow-2xl">
          <CardContent className="p-6">
            <Brain className="text-purple-300 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-sm text-gray-200">
              Let the AI help you create your daily schedule intelligently based on your goals and tasks.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] border-none shadow-2xl">
          <CardContent className="p-6">
            <Chrome className="text-white mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Browser Extension</h3>
            <p className="text-sm text-gray-100">
              Capture ideas, clip content, and sync thoughts instantly from your favorite browser.
            </p>
          </CardContent>
        </Card>
      </section>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center"
      >
        <Button className="text-lg px-6 py-3 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-[#2575fc] hover:to-[#6a11cb] rounded-2xl shadow-xl">
          Get Started — It’s Free
        </Button>
      </motion.div>
    </div>
  );
}
