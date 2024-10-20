import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CustomInput from "./CustomInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MultiStepForm.css";

const steps = [
  {
    inputs: [
      { label: "Name", name: "name", type: "text", validationRules: { required: "Name is required" }, autocomplete: "name" },
      { label: "Email", name: "email", type: "email", validationRules: { required: "Email is required" }, autocomplete: "email" },
    ],
  },
  {
    inputs: [
      { label: "Address", name: "address", type: "text", validationRules: { required: "Address is required" }, autocomplete: "address-line1" },
      { label: "Phone Number", name: "phone", type: "tel", validationRules: { required: "Phone number is required" }, autocomplete: "tel" },
    ],
  },
  {
    inputs: [
      {
        label: "Password",
        name: "password",
        type: "password",
        validationRules: {
          required: "Password is required",
          minLength: { value: 8, message: "Password must be at least 8 characters long" },
          validate: {
            hasUpperCase: (value) => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
            hasLowerCase: (value) => /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
            hasNumber: (value) => /[0-9]/.test(value) || "Password must contain at least one number",
            hasSpecialChar: (value) => /[!@#$%^&*]/.test(value) || "Password must contain at least one special character",
          },
        },
        autocomplete: "new-password",
      },
    ],
  },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const methods = useForm();
  const { handleSubmit, trigger } = methods;

  const onSubmit = (data) => {
    console.log("Final Form Data Submitted:", JSON.stringify(data, null, 2));
    toast.success("Form submitted successfully!"); // Show success notification
  };

  const handleNextStep = async () => {
    const currentInputs = steps[step]?.inputs;
    if (!currentInputs) return;

    // Validate current step inputs
    const isValid = await trigger(currentInputs.map(input => input.name));
    if (isValid) {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev)); // Move to next step

      // If it's the last step, handle form submission
      if (step === steps.length - 1) {
        handleSubmit(onSubmit)(); // Submit if it's the last step
      }
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
  };

  return (
    <FormProvider {...methods}>
      <h1 className="container">React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {steps[step].inputs.map((input) => (
          <CustomInput
            key={input.name} // Use name as key for stability
            label={input.label}
            name={input.name}
            type={input.type}
            validationRules={input.validationRules}
            autocomplete={input.autocomplete}
          />
        ))}

        <div className="button-container">
          {step > 0 && (
            <button type="button" onClick={handlePrevStep}>
              Back
            </button>
          )}
          <button type="button" onClick={handleNextStep}>
            {step < steps.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>

        <div className="portfolio-link-container">
          <a href="https://mfaiz01.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className="portfolio-link">
            View My Portfolio
          </a>
        </div>
      </form>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </FormProvider>
  );
};

export default MultiStepForm;
