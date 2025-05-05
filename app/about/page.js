import Image from 'next/image';
import Header from '../components/Header';

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)', fontFamily: 'Tajawal, Arial, Helvetica, sans-serif' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center" style={{ background: 'var(--gradient)' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="عن قبيلة عنترة"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60" style={{ background: 'linear-gradient(135deg, #fbf4f6 0%, #fcd47d 100%)', opacity: 0.85 }}></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold" style={{ color: 'var(--gold)' }}>عن القاعة</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20" style={{ background: '#f7f5f2' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--gold)' }}>قاعة قبيلة عنترة</h2>
              <p className="mb-4" style={{ color: '#7c7c7c' }}>
                قاعة قبيلة عنترة هي وجهة العرسان الذين يبحثون عن مكان مميز لحفل زفافهم. نحن نقدم تجربة فريدة تجمع بين الأصالة والحداثة، مع الحفاظ على التقاليد العربية الأصيلة.
              </p>
              <p style={{ color: '#7c7c7c' }}>
                تتميز قاعتنا بتصميم عصري وأنيق، مع مساحات واسعة تتسع لأعداد كبيرة من الضيوف. نقدم خدمات متكاملة تشمل التصوير، الضيافة، والديكور، لنجعل من حفل زفافك ذكرى لا تنسى.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>رؤيتنا</h3>
                <p style={{ color: '#7c7c7c' }}>
                  أن نكون الوجهة الأولى للعرسان في المنطقة، من خلال تقديم تجربة فريدة ومميزة لحفل الزفاف.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>رسالتنا</h3>
                <p style={{ color: '#7c7c7c' }}>
                  تقديم خدمات عالية الجودة مع الحفاظ على التقاليد العربية، وخلق ذكريات جميلة تدوم مدى الحياة.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--gold)' }}>مميزات القاعة</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: '#7c7c7c' }}>مساحة واسعة تتسع لأعداد كبيرة من الضيوف</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: '#7c7c7c' }}>تصميم عصري وأنيق</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: '#7c7c7c' }}>خدمات متكاملة تشمل التصوير والضيافة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: '#7c7c7c' }}>مواقف سيارات واسعة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                  <span style={{ color: '#7c7c7c' }}>فريق عمل محترف وذو خبرة</span>
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