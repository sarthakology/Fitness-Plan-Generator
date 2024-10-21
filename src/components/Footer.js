import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5790757708486073"
       crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
       style={{ display: 'block', textAlign: 'center' }}
       data-ad-layout="in-article"
       data-ad-format="fluid"
       data-ad-client="ca-pub-5790757708486073"
       data-ad-slot="1398638388"></ins>
      <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Created by Sarthak
        </p>
        <a
          href="https://github.com/sarthakology"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-600 transition-colors"
        >
          GitHub
        </a>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm">
          Powered by Google Gemini
        </p>
      </div>
    </footer>
  );
};

export default Footer;
