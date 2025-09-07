import getUser from "@/lib/data";
import { userType } from "@/lib/definitions";


export default async function Home() {
  const users: userType[] = await getUser();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-32 pb-80 gap-64 sm:p-80">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-8 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-4 py-2 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em] font-[900]">
            Save and see your changes instantly.
          </li>
        </ol>
        {users.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <div className="flex gap-16 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-8 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-40 sm:h-48 px-16 sm:px-20 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-40 sm:h-48 px-16 sm:px-20 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Footerspace</p>
      </footer>
    </div>
  );
}