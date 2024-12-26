import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitSupportMessage } from '../services/support';
import { StatusMessage } from './support/StatusMessage';
import { FormInput } from './support/FormInput';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function SupportForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitSupportMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        id="name"
        name="name"
        label="Adyňyz"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        id="message"
        name="message"
        type="textarea"
        label="Hatyňyz"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
      />

      {submitStatus !== 'idle' && <StatusMessage status={submitStatus} />}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        {isSubmitting ? 'Ugradylýar...' : 'Ugrat'}
      </button>
    </form>
  );
}