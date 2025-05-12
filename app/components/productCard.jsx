export default function ProductCard() {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <h6 className="card-title mt-2">
            Category: <strong>Garden</strong>
          </h6>
          <h3 className="card-title m-1">436</h3>
        </div>

        <div className="d-flex justify-content-center">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            className="img-fluid"
            alt="Product"
            style={{ maxHeight: "22rem", maxWidth: "17rem" }}
          />
        </div>

        <h5 className="card-text m-3 ">Ergonomic Granite Shoes</h5>
      </div>
    </div>
  );
}
