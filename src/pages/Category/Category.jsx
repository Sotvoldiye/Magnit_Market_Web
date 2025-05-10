import { Link } from "react-router-dom";
import style from './Category.module.css'
import { useGetAllProductsQuery } from "../../lib/api/productApi";
function Category() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // faqat unikal category'lar
  const uniqueCategories =
    data &&
    data.products.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.category === item.category)
    );

  return (
    <div>
      <h3>Maxsulot turlari</h3>
     <ul className={style.categoryList}>
  {uniqueCategories.map((c) => (
    <li key={c.category} className={style.categoryItem}>
      <Link to={`/maxsulot-turi/${c.category}`}>
        <img src={c.thumbnail} alt={c.category} />
        <span>{c.category}</span>
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}

export default Category;
