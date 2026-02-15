import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineTruck, HiOutlineWrenchScrewdriver, HiOutlineShieldCheck } from 'react-icons/hi2';

const services = [
    {
        icon: <HiOutlineSparkles className="text-4xl text-purple-400" />,
        title: "Custom Design",
        description: "Tailored to your unique style and space requirements."
    },
    {
        icon: <HiOutlineTruck className="text-4xl text-blue-400" />,
        title: "Home Delivery",
        description: "Safe and timely delivery to your doorstep."
    },
    {
        icon: <HiOutlineWrenchScrewdriver className="text-4xl text-pink-400" />,
        title: "Installation",
        description: "Professional assembly and installation services included."
    },
    {
        icon: <HiOutlineShieldCheck className="text-4xl text-green-400" />,
        title: "Quality Guarantee",
        description: "Built to last with premium materials and craftsmanship."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md"
                    >
                        Why Choose Us
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-neutral-800/80 transition-colors duration-300 group shadow-lg"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
