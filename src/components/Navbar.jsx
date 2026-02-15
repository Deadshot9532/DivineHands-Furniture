import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Collection', href: '#collection' },
        { name: 'Contact', href: '#contact' },
    ];

    const categories = [
        'Home', 'School', 'Hospital', 'Premium'
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-neutral-900/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-2xl md:text-3xl font-serif text-white font-bold tracking-tight group-hover:text-purple-400 transition-colors">
                        Divine <span className="text-gradient">Hands</span>
                    </span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white font-medium text-sm tracking-widest uppercase transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <div className="h-6 w-px bg-white/10" />

                    <a
                        href="#contact"
                        className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest"
                    >
                        Inquiry
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-3xl p-2 rounded-lg bg-white/5 border border-white/10"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 w-full bg-neutral-900/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-2xl font-serif font-bold hover:text-purple-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px w-full bg-white/10 my-2" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold uppercase tracking-widest text-white"
                            >
                                Connect Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
