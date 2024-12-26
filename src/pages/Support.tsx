import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SupportForm } from '../components/SupportForm';

export function Support() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-indigo-400">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-2xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="text-indigo-400" size={32} />
          <h1 className="text-3xl font-bold text-white">Support</h1>
        </div>
        
        <p className="text-gray-300 mb-8">
          Kömek gerek bolsa aşakdaky forma arkaly ýüz tutuň. Biziň hünärmenlerimiz size gysga wagtda kömek ederler.
        </p>

        <SupportForm />
      </div>
    </div>
  );
}