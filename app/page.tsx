import Link from "next/link";




export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-5xl">
        Hola Mundo!!!
      </span>
      <Link href={'/abaout'}>Abaout page</Link>
    </main>
  );
}
