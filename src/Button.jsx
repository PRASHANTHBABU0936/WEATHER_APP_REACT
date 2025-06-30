function printHello(){
    console.log("Hello");
}
export default function Button(){
    return(<div>
        <button onClick={printHello}>CLICK ME!</button>
        <p onClick={printHello}>This is for event demo</p>
        </div>);
}