import Link from "next/link";
export default function page(){
  return(
    <main className="bg-black-200 h-screen" >
      <h1 className="text-2xl py-3 text-white-700" >CPRG 306: Web Development 2 - Assignments </h1>
      <ul>
        <li><Link href="./week-2" className="text-white-700 pl-2">Week-2 assignments</Link></li>
        <li><Link href="./week-3" className="text-white-700 pl-2">Week-3 assignments</Link></li>
        <li><Link href="./week-4" className="text-white-700 pl-2">Week-4 assignments</Link></li>
        <li><Link href="./week-5" className="text-white-700 pl-2">Week-5 assignments</Link></li>
        <li><Link href="./week-6" className="text-white-700 pl-2">Week-6 assignments</Link></li>
        <li><Link href="./week-7" className="text-white-700 pl-2">Week-7 assignments</Link></li>
        <li><Link href="./week-8" className="text-white-700 pl-2">Week-8 assignments</Link></li>
        <li><Link href="./week-9" className="text-white-700 pl-2">Week-9 assignments</Link></li>
        <li><Link href="./week-10" className="text-white-700 pl-2">Week-10 assignments</Link></li>
      </ul>
    </main>
  );
}