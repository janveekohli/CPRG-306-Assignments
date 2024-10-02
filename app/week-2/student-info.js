import Link from "next/link";

export default function StudentInfo(){
    return(
        <main className="bg-slate">
            <h1 className="py-3 text-white-1500 pl-2"> janveeKohli</h1>
            <Link href="https://github.com/janveekohli/" className="text-gold-1500 pl-2">Github account</Link>
        </main>
    );
}

