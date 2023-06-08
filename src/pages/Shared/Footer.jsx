

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-xl font-bold">Website Logo</h1>
            {/* You can replace 'Website Logo' with an actual logo image if desired */}
          </div>
          <div className="text-gray-500 text-sm">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;