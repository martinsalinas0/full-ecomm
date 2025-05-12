import ProductCard from "./ProductCard";

export default function ProductPage() {
  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option value="">Sort by Category</option>
            <option value="aaa">aa</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option value="">Sort by Price</option>
            <option value="aaa">aa</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <ProductCard />
        </div>
        <div className="col-md-4">
          <ProductCard /> 
        </div>
        <div className="col-md-4">
          
        </div>
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
}
