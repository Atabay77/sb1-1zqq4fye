import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  rows
}: FormInputProps) {
  const baseClassName = "mt-1 block w-full rounded-lg bg-gray-700/50 border border-blue-500/20 text-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseClassName}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClassName}
        />
      )}
    </div>
  );
}