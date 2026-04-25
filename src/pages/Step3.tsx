import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Step3() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(200);
  const [term, setTerm] = useState(10);

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Параметры займа</h2>

      <div className="mb-4">
        <label className="form-label">Сумма займа: ${amount}</label>
        <input
          type="range"
          className="form-range"
          min={200}
          max={1000}
          step={100}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
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
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
        />
        <div className="d-flex justify-content-between text-muted small">
          <span>10 дней</span>
          <span>30 дней</span>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary w-100" onClick={() => navigate('/step2')}>
          Назад
        </button>
        <button className="btn btn-primary w-100">
          Подать заявку
        </button>
      </div>
    </div>
  );
}