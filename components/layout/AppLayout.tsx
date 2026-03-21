import NavBar from './NavBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="pt-16">{children}</main>
    </>
  );
}
