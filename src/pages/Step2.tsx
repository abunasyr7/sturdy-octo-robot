import { useNavigate, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step2Schema, type Step2FormData } from '../schemas/step2Schema';

export default function Step2() {
  const navigate = useNavigate();
  const categories = useLoaderData() as string[];

  const { register, handleSubmit, formState: { errors } } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
  });

  const onSubmit = () => {
    navigate('/step3');
  };

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Адрес и место работы</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Место работы</label>
          <select
            className={`form-select ${errors.workplace ? 'is-invalid' : ''}`}
            {...register('workplace')}
          >
            <option value="">Выберите место работы</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.workplace && <div className="invalid-feedback">{errors.workplace.message}</div>}
        </div>

        <div className="mb-4">
          <label className="form-label">Адрес проживания</label>
          <input
            type="text"
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            {...register('address')}
          />
          {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
        </div>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-secondary w-100" onClick={() => navigate('/step1')}>
            Назад
          </button>
          <button type="submit" className="btn btn-primary w-100">
            Далее
          </button>
        </div>
      </form>
    </div>
  );
}