import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Are you ready? Take a tour</h1>
        <p className="pl-desc">
          In this projects, I have demonstrated my competence and knowledge of
          React, React Native, Bootstrap, Material-ui, Redux, Saga, hooks and
          contextAPI, TailwindCSS, and lots more...
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
