import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-purple-600/10 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif font-bold text-gradient">Divine Hands</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Crafting quality furniture for your home since 2025. Transforming spaces into elegant sanctuaries.
                        </p>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-1">Business Registration</p>
                            <p className="text-sm font-medium text-gray-300">GST: 09AALCD7909B1ZK</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-purple-500/30 pb-2 w-fit">Services</h4>
                        <ul className="space-y-4">
                            {['Custom Design', 'Home Delivery', 'Installation', 'Quality Guarantee'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-purple-500/30 pb-2 w-fit">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <HiOutlinePhone className="text-purple-500" />
                                <span>+91-8808146666</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiOutlineMail className="text-purple-500" />
                                <span>divinehandsfurniture@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiOutlineLocationMarker className="text-purple-500 mt-1" />
                                <span className="text-sm">
                                    38, Geeta Vihar Colony, Madhasmau Kalan Arjunganj, Lucknow - 226002
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-purple-500/30 pb-2 w-fit">Follow Us</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebookF />, color: 'bg-blue-600' },
                                { icon: <FaInstagram />, color: 'bg-pink-600' },
                                { icon: <FaWhatsapp />, color: 'bg-green-600' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    href="#"
                                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg transition-transform`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <p className="mt-8 text-sm text-gray-500 italic">
                            "Bringing warmth, style, and comfort to every room."
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Divine Hands Furniture. All rights reserved. | Produced by Antigravity AI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
