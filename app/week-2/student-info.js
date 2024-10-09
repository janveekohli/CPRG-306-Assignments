import Link from "next/link";

export default function StudentInfo(){
    return(
        <main className="bg-black-200">
            <h1 className="py-3 text-white-700 pl-2">janvee kohli</h1>
            <Link href="https://github.com/" className="text-white-700 pl-2"> My Github account</Link>
        </main>
    );
}

