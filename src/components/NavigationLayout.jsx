import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail, Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Clock, ChevronRight, Zap, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const NavigationLayout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	import React, { useState, useEffect } from 'react';
	import { Menu, X, Home, Info, Briefcase, Mail, Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Clock, ChevronRight, Zap, Globe, Award } from 'lucide-react';

	const NavigationLayout = () => {
		const [isMenuOpen, setIsMenuOpen] = useState(false);
		const [currentPage, setCurrentPage] = useState('home');
		const [isScrolled, setIsScrolled] = useState(false);

		// REQUIREMENT 1: Always visible navigation
		useEffect(() => {
			const handleScroll = () => setIsScrolled(window.scrollY > 20);
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}, []);

		const handlePageChange = (pageId) => {
			setCurrentPage(pageId);
			setIsMenuOpen(false);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		};

		// REQUIREMENT 2: Homepage, About Us, Services, Contact links
		const navItems = [
			{ id: 'home', label: 'Home', icon: Home },
			{ id: 'about', label: 'About Us', icon: Info },
			{ id: 'services', label: 'Services', icon: Briefcase },
			{ id: 'contact', label: 'Contact', icon: Mail }
		];

		const pageContent = {
			home: {
				title: 'Welcome to Our Website',
				content: 'We build modern, responsive websites that work perfectly on all devices. Our navigation system is always visible, making it easy for users to find what they need. Experience fast loading times, professional grid layouts, and brand-consistent design throughout.'
			},
			about: {
				title: 'About Our Company',
				content: 'With over a decade of experience, we specialize in creating websites with exceptional user experience. Our team focuses on responsive design, fast performance, and maintaining brand consistency across all pages with professional grid-based layouts.'
			},
			services: {
				title: 'Our Services',
				content: 'We offer comprehensive web development services including responsive design, performance optimization, and brand-consistent layouts. Every website we build features always-visible navigation, clear content separation, and professional grid systems for perfect alignment.'
			},
			contact: {
				title: 'Contact Us',
				content: 'Ready to start your project? Get in touch with our team today. We ensure fast response times and deliver websites with excellent navigation, responsive design across all devices, and layouts that follow grid systems for professional organization.'
			}
		};

		return (
			<div className="min-h-screen flex flex-col bg-gray-50">
				{/* ...existing code... */}
			</div>
		);
	};

	export default NavigationLayout;
								<li>
									<a href="#disclaimer" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center group">
										<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
										Disclaimer
									</a>
								</li>
								<li>
									<a href="#accessibility" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center group">
										<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
										Accessibility
									</a>
								</li>
							</ul>
						</div>

						{/* Contact information column */}
						<div>
							<h4 className="text-lg font-bold mb-5 text-white">Contact Us</h4>
							<ul className="space-y-4 text-sm">
								<li className="flex items-start space-x-3">
									<Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-semibold text-slate-300 mb-1">Email</p>
										<a href="mailto:info@brandname.com" className="text-slate-400 hover:text-white transition-colors">info@brandname.com</a>
									</div>
								</li>
								<li className="flex items-start space-x-3">
									<Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-semibold text-slate-300 mb-1">Phone</p>
										<a href="tel:+15551234567" className="text-slate-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
									</div>
								</li>
								<li className="flex items-start space-x-3">
									<MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-semibold text-slate-300 mb-1">Address</p>
										<p className="text-slate-400">123 Business Street<br />City, State 12345</p>
									</div>
								</li>
								<li className="flex items-start space-x-3">
									<Clock size={18} className="text-blue-400 mt-1 flex-shrink-0" />
									<div>
										<p className="font-semibold text-slate-300 mb-1">Business Hours</p>
										<p className="text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
									</div>
								</li>
							</ul>
						</div>
					</div>

					{/* ============================================================================ */}
					{/* REQUIREMENT 5: Copyright information at bottom of footer */}
					{/* Implementation: Current year copyright notice */}
					{/* ============================================================================ */}
					<div className="border-t border-slate-800 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p className="text-slate-400 text-sm text-center md:text-left">
								© {new Date().getFullYear()} BrandName. All rights reserved. Designed and developed with excellence.
							</p>
							<p className="text-slate-500 text-xs text-center md:text-right">
								Built with React, Next.js & Tailwind CSS | Fast, Responsive, Brand-Consistent
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default NavigationLayout;
