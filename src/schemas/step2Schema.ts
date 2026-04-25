import { z } from 'zod';

export const step2Schema = z.object({
  workplace: z.string().min(1, 'Выберите место работы'),
  address: z.string().min(1, 'Введите адрес проживания'),
});

export type Step2FormData = z.infer<typeof step2Schema>;