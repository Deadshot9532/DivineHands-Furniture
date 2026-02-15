import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Inquiry from ${formData.firstName} ${formData.lastName}`;
        const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:divinehandsfurniture@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-20 relative bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md"
                    >
                        Get In Touch
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
                    <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
                        Ready to transform your space? Contact us for a consultation or visit our showroom to experience our collection in person.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 bg-neutral-800/50 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between hover:bg-neutral-800/80 transition-colors duration-500 shadow-xl"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-8 text-white">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group cursor-pointer" onClick={() => window.open('tel:+918808146666')}>
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                        <HiOutlinePhone className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Phone</p>
                                        <p className="font-medium text-white text-lg hover:text-purple-400 transition-colors">+91-8808146666</p>
                                        <p className="font-medium text-white text-lg hover:text-purple-400 transition-colors">+91-7307289995</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group cursor-pointer" onClick={() => window.open('mailto:divinehandsfurniture@gmail.com')}>
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <HiOutlineMail className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Email</p>
                                        <p className="font-medium text-white text-lg hover:text-blue-400 transition-colors">divinehandsfurniture@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                        <HiOutlineLocationMarker className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Address</p>
                                        <p className="font-medium text-white leading-relaxed">
                                            38, Geeta Vihar Colony,<br />
                                            Madhasmau Kalan Arjunganj,<br />
                                            Lucknow - 226002
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h4 className="font-bold mb-4 text-white">Business Hours</h4>
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Mon - Sat</span>
                                <span>9:00 AM - 7:00 PM</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>Sunday</span>
                                <span className="text-pink-400">Closed</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 bg-neutral-800/50 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-black/40 text-white placeholder-gray-500 transition-all"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-black/40 text-white placeholder-gray-500 transition-all"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-black/40 text-white placeholder-gray-500 transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-black/40 text-white placeholder-gray-500 transition-all resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:scale-[1.01]">
                                Send Message (Opens Email App)
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
