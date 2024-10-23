


export default function Item({name, quantity,category}){
    return(
        <div className=" ">
        <section className=" m-1  p-2 ">
                    <h1 className="font-bold text-2xl text-white" >{name}</h1>
                    <p className="text-sm  text-white">Buy {quantity} in {category}</p>
       </section>
       </div>
    
    );
}