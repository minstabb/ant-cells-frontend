import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-white px-6 shadow-sm dark:bg-zinc-900">
      <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
        Ant Cells
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
