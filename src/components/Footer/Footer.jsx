
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About CODE NEXUS</h2>
          <p className="text-sm  text-gray-400">
            Candy Match 3 Game is for making you earn money from your mobile phone by playing this amazing game.
          </p>
        </div>

        {/* Important Links Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Important Links</h2>
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">
            Developed by ARIf | <Link className='text-blue-600'>WhatsApp</Link>
          </p>
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">
            Domain Hosting <Link className='text-blue-600'>Buy Now</Link>
          </p>
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">
            Go Pro Host | <Link className='text-blue-600'>Terms & Conditions</Link> | <Link className='text-blue-600'>Telegram Channel</Link>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Social Media</h2>
          <div className="flex gap-6">
            <FaFacebook className="text-2xl text-gray-400 hover:text-blue-500 cursor-pointer transition duration-300" />
            <FaTwitter className="text-2xl text-gray-400 hover:text-blue-400 cursor-pointer transition duration-300" />
            <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 cursor-pointer transition duration-300" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} CODE NEXUS. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;