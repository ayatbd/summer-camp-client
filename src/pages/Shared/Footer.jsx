import img0 from "../../assets/images/img0.png"

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img className="w-20 h-20" src={img0} />
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