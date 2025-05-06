import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="w-6 h-6" />, url: '#' },
    { icon: <FaTwitter className="w-6 h-6" />, url: '#' },
    { icon: <FaInstagram className="w-6 h-6" />, url: '#' },
    { icon: <FaYoutube className="w-6 h-6" />, url: '#' },
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
        { name: 'الهاتف: +966 12 345 6789', url: 'tel:+966123456789' },
        { name: 'البريد الإلكتروني: info@qabeela-antara.com', url: 'mailto:info@qabeela-antara.com' },
        { name: 'العنوان: شارع الملك فهد، جدة', url: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white"
      style={{
        fontFamily: 'HomeScandBold',

      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4"> شباب قبيلة عنزة الرسمية</h2>
            <p className="text-gray-400 mb-6">
              وجهتك المثالية للاحتفالات والمناسبات في جدة
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-primary transition-colors"
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
                      className="text-gray-400 hover:text-primary transition-colors"
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
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} قبيلة عنزة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 