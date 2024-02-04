import { ProductForm } from "./components/product-form";

const SanPhamIdPage = async ({ params }: { params: { sanPhamId: string } }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm />
      </div>
    </div>
  );
};

export default SanPhamIdPage;
