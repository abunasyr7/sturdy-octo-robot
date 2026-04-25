import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step3Schema, type Step3FormData } from '../schemas/step3Schema';
import { useFormContext } from '../context/useFormContext';
import { API_URLS } from '../config/api';
import ConfirmModal from '../components/ConfirmModal';

export default function Step3() {
  const navigate = useNavigate();
  const { formData, setStep3 } = useFormContext();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, getValues, watch } = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: { amount: 200, term: 10, ...formData.step3 },
  });

  const amount = watch('amount');
  const term = watch('term');

  const onSubmit = async (data: Step3FormData) => {
    setStep3(data);
    setLoading(true);

    const { firstName, lastName } = formData.step1;

    await fetch(API_URLS.addProduct, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: `${firstName} ${lastName}` }),
    });

    setLoading(false);
    setShowModal(true);
  };

  const { firstName = '', lastName = '' } = formData.step1;
  const { amount: savedAmount, term: savedTerm } = formData.step3 as Step3FormData;

  return (
    <>
    {showModal && (
      <ConfirmModal
        firstName={firstName}
        lastName={lastName}
        amount={savedAmount}
        term={savedTerm}
        onClose={() => setShowModal(false)}
      />
    )}
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
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => { setStep3(getValues()); navigate('/step2'); }}
          >
            Назад
          </button>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Отправка...' : 'Подать заявку'}
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
