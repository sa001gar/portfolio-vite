import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block font-mono text-green-400 mb-2">
          &gt; Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-black/50 border-2 border-green-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-green-400 mb-2">
          &gt; Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-black/50 border-2 border-green-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-green-400 mb-2">
          &gt; Message:
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-black/50 border-2 border-green-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-400 text-black font-mono font-bold py-3 px-6 rounded hover:bg-green-300 transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}