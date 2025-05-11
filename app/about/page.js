import Image from 'next/image';
import Header from '../components/Header';

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bgsection-bg)', color: 'var(--text)', fontFamily: 'HomeScandBold' }}>
      
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center" style={{ background: 'var(--section-bg)' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="عن قبيلة عنزة"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60" style={{ background: 'var(--section-bg)', opacity: 0.85 }}></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold" style={{ color: 'var(--gold)' }}>نبذة عن قبيلة عنزة</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="" style={{ background: '#1A2A44' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--gold)' }}> قبيلة عنزة</h2>
              <p className="mb-4" style={{ color: 'white' , fontSize: '1.125rem',fontFamily: 'Home'}}>
قبيلة عنزة هي قبيلة عربية عدنانية مسكنها نجد وشمال الحجاز وبادية الشام والعراق والكويت وشمال الجزيرة العربية، ومن هناك انتشرت إلى غيرها من المناطق، منها ليبيا والأهواز وسيناء وتركيا. وتُعدّ عنزة من أكبر القبائل في الخليج والشام.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className=" p-6 rounded-lg shadow-md"
                style={{ background: 'var(--card-border)' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>رؤيتنا</h3>
                <p className='text-white'>
                  أن نكون الوجهة الأولى للعرسان في المنطقة، من خلال تقديم تجربة فريدة ومميزة لحفل الزفاف.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-md"
                style={{ background: 'var(--card-border)' }}
               >
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>رسالتنا</h3>
                <p className='text-white'>
                  تقديم خدمات عالية الجودة مع الحفاظ على التقاليد العربية، وخلق ذكريات جميلة تدوم مدى الحياة.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--gold)' }}> مسكن قبيلة عنزة</h3>
              <ul className="space-y-4 "
                style={{ color: 'white', fontSize: '1.125rem', fontFamily: 'Home' }}>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: 'white' }}>نجد </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: 'white' }}> شمال الحجاز </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: 'white' }}>بادية الشام</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: 'white' }}> العراق  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: 'white' }}> والكويت </span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: 'white' }}>شمال الجزيرة العربية </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </main>
  );
} 