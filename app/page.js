import Link from "next/link";
export default function page(){
  return(
    <main className="bg-neutral " >
      <h1  >CPRG 306: Web Development 2 - Assignments </h1>
      <ul>
        <li><Link href="./week-2" >Week-2 assignments</Link></li>
        <li><Link href="./week-3" >Week-3 assignments</Link></li>
      </ul>
    </main>
  );
}