import React from 'react';
import { FloatingContainer } from '../FloatingContainer';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Check, Download } from 'lucide-react';
import { CountdownTimer } from '../CountdownTimer';

const VMESS_CODE = "vmess://eyJhZGQiOiI0Ni4zMi4xODQuMTg3IiwiYWlkIjoiMCIsImFscG4iOiJodHRwLzEuMSIsImZwIjoiY2hyb21lIiwiaG9zdCI6IiIsImlkIjoiNzYwMDliYjAtNWY2My00YjgyLTg0YWMtYjhiMTQ0YjQzMGViIiwibmV0IjoiZ3JwYyIsInBhdGgiOiIiLCJwb3J0IjoiNDQzIiwicHMiOiJTdGFydDogQFN3ZWNoIiwic2N5IjoiYXV0byIsInNuaSI6ImZyZWUuc3dlY2gucnUiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiZ3VuIiwidiI6IjIifQ==";

export function HiddifyContent() {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(VMESS_CODE);
  };

  return (
    <FloatingContainer>
      <div className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-8 flex flex-col items-center border border-blue-500/30">
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">HIDDIFY VPN</h1>
          <CountdownTimer />
        </div>

        <div className="w-full max-w-3xl rounded-[1.5rem] overflow-hidden mb-8 ring-2 ring-indigo-500/20 border border-blue-500/30">
          <img
            src="https://i.imgur.com/yI7Vp8t.jpeg"
            alt="Hiddify Code"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-6 text-center max-w-xl">
          Kody kapirawat edp suratdaky ýere basyň ve işlediň
        </h3>
        
        <hr className="w-full border-t border-blue-500/30 mb-6" />
        
        <div 
          onClick={handleClick}
          className="relative group cursor-pointer bg-gray-700/50 p-6 rounded-lg border border-blue-500/20 hover:bg-gray-700/70 transition-colors mb-8 w-full max-w-3xl"
        >
          <p className="text-gray-300 text-center break-all select-none">
            {VMESS_CODE}
          </p>
          {copied && (
            <div className="absolute top-4 right-4 flex items-center gap-2 text-green-400">
              <Check size={20} />
              <span className="font-medium">Copied!</span>
            </div>
          )}
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=app.hiddify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
        >
          <Download size={24} />
          VPN'i geçirmek
        </a>
      </div>
    </FloatingContainer>
  );
}