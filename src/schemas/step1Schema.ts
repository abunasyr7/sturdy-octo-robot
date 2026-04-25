import { z } from 'zod';

export const step1Schema = z.object({
  phone: z.string().min(10, 'Введите номер телефона полностью'),
  firstName: z.string().min(1, 'Введите имя'),
  lastName: z.string().min(1, 'Введите фамилию'),
  gender: z.string().min(1, 'Выберите пол'),
});

export type Step1FormData = z.infer<typeof step1Schema>;