import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMaskInput } from 'react-imask';
import { step1Schema, type Step1FormData } from '../schemas/step1Schema';

export default function Step1() {
  const navigate = useNavigate();

  const { register, handleSubmit, control, formState: { errors } } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
  });

  const onSubmit = () => {
    navigate('/step2');
  };

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Личные данные</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Телефон</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <IMaskInput
                mask="0000 000 000"
                value={field.value ?? ''}
                onAccept={(value) => field.onChange(value)}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                type="tel"
                placeholder="0XXX XXX XXX"
              />
            )}
          />
          {errors.phone && <div className="invalid-feedback d-block">{errors.phone.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            {...register('firstName')}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Фамилия</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            {...register('lastName')}
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
        </div>

        <div className="mb-4">
          <label className="form-label">Пол</label>
          <select
            className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
            {...register('gender')}
          >
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Далее
        </button>
      </form>
    </div>
  );
}