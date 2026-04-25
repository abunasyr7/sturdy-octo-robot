import { useState, type ReactNode } from 'react';
import { FormContext } from './FormContext';
import type { Step1FormData } from '../schemas/step1Schema';
import type { Step2FormData } from '../schemas/step2Schema';
import type { Step3FormData } from '../schemas/step3Schema';

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState({
    step1: {} as Partial<Step1FormData>,
    step2: {} as Partial<Step2FormData>,
    step3: {} as Partial<Step3FormData>,
  });

  const setStep1 = (data: Step1FormData) =>
    setFormData((prev) => ({ ...prev, step1: data }));

  const setStep2 = (data: Step2FormData) =>
    setFormData((prev) => ({ ...prev, step2: data }));

  const setStep3 = (data: Step3FormData) =>
    setFormData((prev) => ({ ...prev, step3: data }));

  return (
    <FormContext.Provider value={{ formData, setStep1, setStep2, setStep3 }}>
      {children}
    </FormContext.Provider>
  );
}