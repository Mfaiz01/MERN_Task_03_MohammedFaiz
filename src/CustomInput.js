import React from 'react';
import { useFormContext } from 'react-hook-form';

const CustomInput = ({
  label,
  name,
  type = 'text', // Default to 'text' input
  validationRules,
  autocomplete,
}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name, validationRules)}
        type={type}
        id={name}
        autoComplete={autocomplete}
      />
      {errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
  );
};

export default CustomInput;
