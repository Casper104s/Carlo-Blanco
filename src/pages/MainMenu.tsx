import React, { useState } from 'react';
import { MENU_ITEMS } from '../utils/constants';
import MenuOption from '../components/MenuOption';
import { motion } from 'motion/react';

export default function MainMenu() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedSystem, setSelectedSystem] = useState<string>('SYSTEM READY');

  const handleSelect = (label: string) => {
    setSelectedSystem(`ACCESSING: ${label}...`);
    // Reset back after a short mock loading phase
    setTimeout(() => {
      setSelectedSystem('SYSTEM READY');
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-transparent">
      {/* Header section simulating terminal readout */}
      <header className="flex justify-between items-start p-10 z-10 w-full">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
            Black Ops <span className="text-orange-600">I</span>
          </h1>
          <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.3em] mt-1">
            Tactical Operations Framework v7.0.2
          </p>
        </div>
        
        <div className="flex space-x-8">
          <div className="text-right hidden md:block">
            <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Network Status</p>
            <p className="text-sm font-mono text-green-500">CONNECTED [NAT: OPEN]</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-2 px-4 items-center space-x-4 hidden lg:flex">
            <div className="text-right">
              <p className="text-xs font-bold text-white">REDACTED_USER_01</p>
              <div className="flex items-center justify-end space-x-2">
                <div className="h-1 w-20 bg-neutral-800">
                  <div className="h-full bg-orange-600 w-3/4"></div>
                </div>
                <span className="text-[10px] font-mono text-orange-500">LVL 42</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-neutral-800 border border-neutral-700"></div>
          </div>
        </div>
      </header>

      {/* Main Menu Options */}
      <main className="flex-1 flex px-8 md:px-16 z-10">
        <nav className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center space-y-1">
          {MENU_ITEMS.map((item, index) => (
            <MenuOption
              key={item.id}
              label={item.label}
              icon={item.icon}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
              onClick={() => handleSelect(item.label)}
            />
          ))}
        </nav>

        {/* Right side decoration matching design */}
        <div className="hidden lg:flex flex-1 flex-col justify-center items-end opacity-20 pointer-events-none">
          <div className="text-[160px] font-black leading-none text-neutral-800 select-none">
            01
          </div>
          <div className="border border-neutral-700 p-4 w-64 mt-4 text-left">
            <div className="text-[10px] font-mono mb-2 uppercase tracking-tighter">Accessing Encrypted Data...</div>
            <div className="space-y-1">
              <div className="h-1 bg-neutral-800 w-full"></div>
              <div className="h-1 bg-neutral-800 w-4/5"></div>
              <div className="h-1 bg-neutral-800 w-full"></div>
              <div className="h-1 bg-neutral-800 w-3/4"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info / Status Bar */}
      <footer className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-end border-t border-white/5 bg-gradient-to-t from-black/50 z-10">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="mb-4 md:mb-0">
             <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-2">Social</p>
             <div className="flex space-x-4">
               <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                  <span className="text-[8px] text-neutral-500 font-bold">F1</span>
               </div>
               <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                  <span className="text-[8px] text-neutral-500 font-bold">F2</span>
               </div>
             </div>
          </div>
          <div className="flex flex-col justify-end">
             <p className="text-[10px] text-neutral-600 font-mono tracking-widest uppercase">
               STATUS: <span className="text-neutral-400">{selectedSystem}</span>
             </p>
             <p className="text-[10px] text-neutral-600 font-mono tracking-widest">LATITUDE: 38.8977° N</p>
             <p className="text-[10px] text-neutral-600 font-mono tracking-widest">LONGITUDE: 77.0365° W</p>
          </div>
        </div>

        <div className="text-right mt-4 md:mt-0">
          <p className="text-xs font-bold text-neutral-500 mb-1">[ ESC ] BACK</p>
          <p className="text-xs font-bold text-white">[ ENTER ] SELECT</p>
        </div>
      </footer>
    </div>
  );
}
