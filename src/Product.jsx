import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["8,999","10,005","1,000","400"]
  let description=["8000 DPI","INiit surface","DESIGNED FOR IPAD","wireless"]
    return(
    <div className="Product" >
        <h4>{title}</h4>
        {/* <p>Title</p> */}
        <p>{description[idx]}</p>
        <Price oldPrice= {oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
);

}

export default Product;