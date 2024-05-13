import { ProductsGrid } from '@components';
import { getAllProducts } from '@graphql/products';

const Page = async () => {
  const initialData = await getAllProducts();

  return <ProductsGrid data={initialData.products} />;
};
export default Page;
