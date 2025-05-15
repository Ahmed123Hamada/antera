import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa'
import logo from '../images/logo.png'
const Footer = () => {
const socialLinks = [
{ icon: <FaWhatsapp className="w-6 h-6" />, url: 'https://wa.me/96597338883' },
    { icon: <FaTwitter className="w-6 h-6" />, url: 'https://x.com/3nza_news?s=21&t=FhpmWqDeRqG4x7gdsNW4YQ' },
    { icon: <FaInstagram className="w-6 h-6" />, url: 'https://www.instagram.com/3nza_newss?igsh=MWNtNXFuMHF3MXNobg%3D%3D&utm_source=qr' },
    { icon: <FaYoutube className="w-6 h-6" />, url: 'https://youtube.com/@3nza_news?si=pu0NCLUh4NIG-84-' },
    { icon: <FaSnapchatGhost className="w-6 h-6" />, url: 'https://snapchat.com/t/49My8Ljg' },
]

  const footerLinks = [
    {
      title: 'روابط سريعة',
      links: [
        { name: 'الرئيسية', url: '/' },
        { name: 'من نحن', url: '/about' },
        { name: 'معرض الصور', url: '/gallery' },
        { name: 'اتصل بنا', url: '/contact' },
      ],
    },
    {
      title: 'خدماتنا',
      links: [
        { name: 'حفلات الزفاف', url: '#' },
        { name: 'حفلات الاجتماعات', url: '#' },
        { name: 'حفلات', url: '#' },
        { name: 'حفلات التدريب', url: '#' },
      ],
    },
    {
      title: 'معلومات الاتصال',
      links: [
        { name: 'الهاتف: +96597338883', url: 'tel:+96597338883' },
        // { name: 'البريد الإلكتروني: info@qabeela-antara.com', url: 'mailto:info@qabeela-antara.com' },
        // { name: 'العنوان: شارع الملك فهد، جدة', url: '#' },
      ],
    },
  ]

  return (
    <footer className=" border-t border-white  "

      style={{
        fontFamily: 'HomeScandBold',
        backgroundColor: 'var(--gold) ',
        color: 'var(--text)',
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4"
              style={{ fontFamily: 'HomeScandBold', color: 'var(--text)' }}
            > شباب قبيلة عنزة الرسمية</h2>
            <p className="mb-6">
              وجهتك المثالية للاحتفالات والمناسبات في جدة
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className=" hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className=" hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center ">
          <p>
            © {new Date().getFullYear()} قبيلة عنزة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 