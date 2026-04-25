import { createContext } from 'react';
import type { Step1FormData } from '../schemas/step1Schema';
import type { Step2FormData } from '../schemas/step2Schema';
import type { Step3FormData } from '../schemas/step3Schema';

interface FormState {
  step1: Partial<Step1FormData>;
  step2: Partial<Step2FormData>;
  step3: Partial<Step3FormData>;
}

export interface FormContextValue {
  formData: FormState;
  setStep1: (data: Step1FormData) => void;
  setStep2: (data: Step2FormData) => void;
  setStep3: (data: Step3FormData) => void;
}

export const FormContext = createContext<FormContextValue | null>(null);