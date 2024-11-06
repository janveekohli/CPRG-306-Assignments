


export default function Item({name, quantity,category, onSelect}){
    return(
        <div className="bg-slate-900 w-7/12 m-5">
        <section className="p-4 "
         onClick={() => onSelect()}>
                    <h1 
                     onClick={() => onSelect()}
                     className="font-bold text-2xl text-white" >{name}</h1>
                     
                    <p
                     onClick={() => onSelect()} 
                     className="text-sm  text-white">Buy {quantity} in {category}</p>
       </section>
       </div>
    
    );
}