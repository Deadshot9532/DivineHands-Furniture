import { motion } from 'framer-motion';

const catalog = [
    {
        category: 'Home Furniture',
        items: [
            { name: 'Living Room', image: 'https://i.ibb.co/rGyNkGcs/61-Ivo-t4-De-L.jpg', description: 'Comfortable & stylish seating' },
            { name: 'Bedroom', image: 'https://i.ibb.co/5xg1cT4z/images.jpg', description: 'Rest in luxury & comfort' },
            { name: 'Dining Room', image: 'https://i.ibb.co/4n9tt3wG/6943f003ffdd3ceb48019e04-little-tree-dining-table-for-4-6-people.jpg', description: 'Gather around beautiful tables' },
            { name: 'Home Office', image: 'https://i.ibb.co/TqNHhzYt/36bebf51-47fc-42c3-9adf-759dfecf553b.jpg', description: 'Productive workspaces' },
        ]
    },
    {
        category: 'School Furniture',
        items: [
            { name: 'Desk & Chair Set', image: 'https://i.ibb.co/wFx5k70z/5349716.jpg', price: '₹3,500' },
            { name: 'Single School Desk', image: 'https://i.ibb.co/XxzfFfdb/Whats-App-Image-2023-04-13-at-12-53-49-PM.jpg', price: '₹2,200' },
            { name: 'Bench Seating', image: 'https://i.ibb.co/M5nF2TbM/Feature-image.webp', price: '₹4,800' },
            { name: 'Student Chair', image: 'https://i.ibb.co/G3McRMJP/BS-PXZ-014-6-e1697186489268.webp', price: '₹1,800' },
        ]
    },
    {
        category: 'Hospital Furniture',
        items: [
            { name: 'ICU Hospital Bed', image: 'https://i.ibb.co/C3cjPWVn/IMG-20240129-WA0005.jpg', price: '₹1,85,000' },
            { name: 'Examination Table', image: 'https://i.ibb.co/qYK6kjP0/IMG-20240129-WA0006.jpg', price: '₹42,000' },
        ]
    },
    {
        category: 'Premium Selection',
        items: [
            { name: 'Premium Velvet Sofa', image: 'https://i.ibb.co/rGryYVZC/20211021-DSC8588-Copy-2-large.webp', price: '₹1,29,900' },
            { name: 'Upholstered Platform Bed', image: 'https://i.ibb.co/sv59Wstv/6938287e0b8a9d551e0b0d68-grounded-bed-upholstered-platform-bed.jpg', price: '₹89,900' },
            { name: 'Executive Wooden Desk', image: 'https://i.ibb.co/7dCBh68F/images.jpg', price: '₹74,900' },
            { name: 'Luxe Accent Chair', image: 'https://i.ibb.co/VcgNtGHy/81-FVBGBK-ZL-AC-UF1000-1000-QL80.jpg', price: '₹49,900' },
        ]
    }
];

const ProductShowcase = () => {
    return (
        <section id="collection" className="py-20 bg-neutral-900 relative">
            {/* Background gradient blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white mb-4 text-center drop-shadow-md"
                    >
                        Our Full <span className="text-gradient font-bold">Catalog</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
                </div>

                {catalog.map((section, sIndex) => (
                    <div key={sIndex} className="mb-24">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-serif text-gray-300 mb-8 border-l-4 border-purple-500 pl-4"
                        >
                            {section.category}
                        </motion.h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {section.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-xl"
                                >
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                        {item.price && (
                                            <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg border border-white/20">
                                                {item.price}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-400 text-sm font-light">
                                            {item.description || 'Premium quality craftsmanship for your space.'}
                                        </p>
                                        <button className="mt-4 text-xs uppercase tracking-widest text-purple-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                            Inquiry Now <span>→</span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;
