import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step3Schema, type Step3FormData } from '../schemas/step3Schema';

export default function Step3() {
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: { amount: 200, term: 10 },
  });

  const amount = watch('amount');
  const term = watch('term');

  const onSubmit = () => {
    // отправка заявки
  };

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Параметры займа</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label className="form-label">Сумма займа: ${amount}</label>
          <input
            type="range"
            className="form-range"
            min={200}
            max={1000}
            step={100}
            {...register('amount', { valueAsNumber: true })}
          />
          <div className="d-flex justify-content-between text-muted small">
            <span>$200</span>
            <span>$1000</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Срок займа: {term} дней</label>
          <input
            type="range"
            className="form-range"
            min={10}
            max={30}
            step={1}
            {...register('term', { valueAsNumber: true })}
          />
          <div className="d-flex justify-content-between text-muted small">
            <span>10 дней</span>
            <span>30 дней</span>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-secondary w-100" onClick={() => navigate('/step2')}>
            Назад
          </button>
          <button type="submit" className="btn btn-primary w-100">
            Подать заявку
          </button>
        </div>
      </form>
    </div>
  );
}