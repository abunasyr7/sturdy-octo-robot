import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';

export default function Step1() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');

  const handleNext = () => {
    navigate('/step2');
  };

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Личные данные</h2>

      <div className="mb-3">
        <label className="form-label">Телефон</label>
        <IMaskInput
          mask="0000 000 000"
          value={phone}
          onAccept={(value) => setPhone(value)}
          className="form-control"
          type="tel"
          placeholder="0XXX XXX XXX"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Имя</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Фамилия</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="form-label">Пол</label>
        <select
          className="form-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>

      <button className="btn btn-primary w-100" onClick={handleNext}>
        Далее
      </button>
    </div>
  );
}