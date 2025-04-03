
import { useParams } from 'react-router';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/books_reviews.json";

function Product() {
   const { productId } = useParams();
   console.log("productId:", productId);
   const product = products.find(
      (x) => x.ID === Number(productId)
   );

   return (
      <div className="container mx-auto main-layout bg-gray-900">
         <Header
            title="AI Book Detail"
            slogan="An example made by Vite."
         />
         <ProductDetail product={product} className="content" />
         <Footer className="footer" />
      </div>
   );
}

export default Product;