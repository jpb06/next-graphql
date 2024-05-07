import { ProductsByPropsDrilling } from '../../components/products/ProductsByPropsDrilling';
import { getAllProducts } from '../../graphql/queries/products.graphql';

const Page = async () => {
  const initialData = await getAllProducts();

  return <ProductsByPropsDrilling data={initialData.products} />;
};
export default Page;
