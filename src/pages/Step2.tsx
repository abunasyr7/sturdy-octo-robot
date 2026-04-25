import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Step2() {
  const navigate = useNavigate();

  const [workplace, setWorkplace] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Адрес и место работы</h2>

      <div className="mb-3">
        <label className="form-label">Место работы</label>
        <select
          className="form-select"
          value={workplace}
          onChange={(e) => setWorkplace(e.target.value)}
        >
          <option value="">Выберите место работы</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="form-label">Адрес проживания</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary w-100" onClick={() => navigate('/step1')}>
          Назад
        </button>
        <button className="btn btn-primary w-100" onClick={() => navigate('/step3')}>
          Далее
        </button>
      </div>
    </div>
  );
}