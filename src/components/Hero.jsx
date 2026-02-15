import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-neutral-900 z-0" />
            <div className="mesh-gradient opacity-40" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-purple-400 text-lg md:text-xl tracking-[0.2em] mb-4 uppercase font-bold">
                                Divine Hands Furniture
                            </h2>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                        >
                            Crafted with Care, <br />
                            <span className="text-gradient">Designed for Life</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 font-light"
                        >
                            Discover handcrafted furniture that brings warmth, style, and comfort to every room in your home. From elegant living rooms to professional environments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#collection"
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105"
                            >
                                Explore Collection
                            </a>
                            <a
                                href="#contact"
                                className="px-10 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                            >
                                Get Quote
                            </a>
                        </motion.div>
                    </div>

                    {/* User's Original Hero Image with a premium frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                            <img
                                src="https://i.ibb.co/wh8qRrtn/71w-X5uz-Yp-NL-AC-UF894-1000-QL80.jpg"
                                alt="Modern Living Room Set"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl z-20 hidden md:block"
                        >
                            <p className="text-white font-serif italic text-lg line-through-accent">Established 2025</p>
                            <p className="text-purple-400 text-sm font-bold tracking-widest uppercase">Premium Quality</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 text-xs tracking-widest uppercase mb-1">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
