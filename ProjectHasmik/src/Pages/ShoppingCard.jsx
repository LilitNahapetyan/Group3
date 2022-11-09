import SelectedSingleProduct from "../Components/SelectedSingleProduct";
function ShoppingCard({ selectedProducts }) {
  return (
    <div>
      {selectedProducts.map((product) => (
        <SelectedSingleProduct title={product.title} img={product.img} />
      ))}
    </div>
  );
}

export default ShoppingCard;
