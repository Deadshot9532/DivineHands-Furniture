import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <img
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                            alt="Craftsman working"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        <div className="absolute -bottom-6 -right-6 bg-neutral-900/90 backdrop-blur-md p-8 rounded-tl-3xl shadow-lg hidden md:block border-none">
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">2025</p>
                            <p className="text-gray-300 text-sm">Established</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
                        Crafting Legacy <span className="text-gradient">Since 2025</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full" />

                    <p className="text-gray-200 mb-6 leading-relaxed font-light text-lg">
                        Divine Hands Furniture is a premier furniture retailer specializing in high-quality, handcrafted home furnishings. We are committed to providing our customers with beautiful, durable furniture that transforms houses into homes.
                    </p>
                    <p className="text-gray-200 mb-8 leading-relaxed font-light text-lg">
                        Our extensive collection includes furniture for every room, from elegant living room sets to comfortable bedroom furniture, functional office pieces, and stylish outdoor furnishings.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-neutral-800/60 border border-white/10">
                            <h4 className="font-bold text-white text-xl mb-1">Handcrafted</h4>
                            <p className="text-sm text-gray-300">Unique pieces made with care</p>
                        </div>
                        <div className="p-4 rounded-xl bg-neutral-800/60 border border-white/10">
                            <h4 className="font-bold text-white text-xl mb-1">Sustainable</h4>
                            <p className="text-sm text-gray-300">Eco-friendly materials</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
