


export default function Item({name, quantity,category}){
    return(
        <div className="bg-slate-900 w-7/12 m-5">
        <section className="p-4 ">
                    <h1 className="font-bold text-2xl text-white" >{name}</h1>
                    <p className="text-sm  text-white">Buy {quantity} in {category}</p>
       </section>
       </div>
    
    );
}