
import HomeAD from './components/HomeAD';
import Contact from './contact/page';



export default function Home() {


  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <HomeAD/>

      {/* Contact Section xa */}
      <Contact />
    </main>
  );
}