export default function Item({name, quantity,category}){
    return(
        <div className="bg-slate-950">
        <section className="bg-slate-900 m-1  p-2 ">
                    <h1 className="font-bold text-xl text-white" >{name}</h1>
                    <p className="text-sm  text-white">Buy {quantity} in {category}</p>
       </section>
       </div>
    
    );
}