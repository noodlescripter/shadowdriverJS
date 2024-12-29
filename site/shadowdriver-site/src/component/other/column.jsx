export default function ColumnComponent({ card_title, card_text }) {
  return (
    <div className="col-md-4 max-h-2">
      <div className="card bg-dark text-center text-white border-warning h-100">
        <div className="card-body">
          <div className="mb-3 text-wanring fs-1">
            <i className="fas fa-rocket"></i>
          </div>
          <h5 className="card-title">{card_title}</h5>
          <p className="card-text">{card_text}</p>
        </div>
      </div>
    </div>
  );
}