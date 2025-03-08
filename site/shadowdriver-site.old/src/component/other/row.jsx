export default function RowComponent({ children }) {
  return (
    <div className="container">
      <div className="row g-4 align-items-stretch mt-4">
        {children}
      </div>
    </div>
  )
}