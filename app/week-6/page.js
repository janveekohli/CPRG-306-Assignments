import ItemList from "./item-list"


export default function Page(){
    return(
        <main className="bg-black h-fullscreen" >
            <h1 className=" text-white text-4xl">Shopping List</h1>
            <ItemList/>
        </main>
    )
}