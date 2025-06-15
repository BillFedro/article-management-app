import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 py-3 text-white">
      <div className="flex justify-center items-center space-x-2">
        <Image
          src="/logo/Logo.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <span className="text-sm">© 2025 Blog genzet. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
