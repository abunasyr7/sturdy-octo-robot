interface Props {
  lastName: string;
  firstName: string;
  amount: number;
  term: number;
  onClose: () => void;
}

export default function ConfirmModal({ lastName, firstName, amount, term, onClose }: Props) {
  return (
    <>
      <div className="modal show d-block" tabIndex={-1} onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Заявка одобрена</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <p>
                Поздравляем, <strong>{lastName} {firstName}</strong>.
                Вам одобрена <strong>${amount}</strong> на <strong>{term}</strong> дней.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show" onClick={onClose} />
    </>
  );
}