import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="flex space-x-4">
            <a href="#" className="text-[#d1d1d1]"><FaFacebook size={22} /></a>
            <a href="#" className="text-[#d1d1d1]"><FaTwitter size={22} /></a>
            <a href="#" className="text-[#d1d1d1]"><FaInstagram size={22} /></a>
        </div>
    );
};

const Bottombanner = () => {
    return (
        <div className="bg-[#CC092F] px-6 w-full h-16 fixed bottom-0 sm:hidden flex justify-between items-center">
            <SocialIcons />
            <a href="/" className="text-white font-sans">Get a Quote &#10141;</a>
        </div>
    );
};

export default Bottombanner;
