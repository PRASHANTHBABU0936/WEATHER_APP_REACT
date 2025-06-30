import Product from "./Product.jsx";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    // let options = ["hi-tech","durable","fast"];
return (
<div style={styles}>
<Product title="Logitech MX Master" idx={0}/>
<Product title="Apple Pencil (2nd GEN)" idx={1}/>
<Product title="ZEBronics MX " idx={2}/>
<Product title="patronics aster"idx={3}/>

</div>    );
}
export default ProductTab;