import { Header } from './Header';
import { Footer } from './Footer';

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: '60vh' }}>{children}</main>
      <Footer />
    </>
  );
}
