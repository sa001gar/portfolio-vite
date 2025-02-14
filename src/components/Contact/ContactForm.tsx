import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0abeed7e-2357-4ce9-9a8c-c6d88c4effbf', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', rating: 5 });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          name="name"
          className="w-full bg-black/50 border-2 border-green-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-green-400 mb-2">
          &gt; Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-black/50 border-2 border-green-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-green-400 mb-2">
          &gt; Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full bg-black/50 border-2 border-green-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label className="block font-mono text-green-400 mb-2">
          &gt; Rating:
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, rating }))}
              className={`p-1 focus:outline-none transition-colors ${
                formData.rating >= rating ? 'text-yellow-400' : 'text-gray-600'
              }`}
              disabled={status === 'submitting'}
            >
              <Star className="w-6 h-6 fill-current" />
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full font-mono font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors ${
          status === 'submitting'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-400 text-black hover:bg-green-300'
        }`}
      >
        <Send className="w-5 h-5" />
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
      
      {status === 'success' && (
        <div className="text-green-400 text-center font-mono">
          Message sent successfully!
        </div>
      )}
      {status === 'error' && (
        <div className="text-red-400 text-center font-mono">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
}