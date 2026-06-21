import React from 'react';
import { motion } from 'motion/react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MenuOptionProps {
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
}

export default function MenuOption({ label, icon: Icon, isActive, onHover, onClick }: MenuOptionProps) {
  let activeColor = "text-white";
  let activeMarkerBg = "bg-white";
  
  if (label.toLowerCase() === 'multiplayer') {
    activeColor = "text-orange-500";
    activeMarkerBg = "bg-orange-600";
  } else if (label.toLowerCase() === 'zombies') {
    activeColor = "text-red-600";
    activeMarkerBg = "bg-red-600";
  }

  return (
    <motion.button
      onHoverStart={onHover}
      onClick={onClick}
      className={`group cursor-pointer py-3 transition-all duration-300 focus:outline-none flex items-center justify-between w-full max-w-sm text-left ${
        isActive ? 'pl-4' : ''
      }`}
    >
      <div className={`text-4xl font-black italic tracking-tighter uppercase flex items-center ${
        isActive ? activeColor : 'text-neutral-400 group-hover:text-white'
      }`}>
        <span className={`w-1 h-8 mr-4 transition-opacity duration-300 ${activeMarkerBg} ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
        }`}></span>
        {label}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className="ml-4"
      >
        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${activeColor}`} strokeWidth={1.5} />
      </motion.div>
    </motion.button>
  );
}
