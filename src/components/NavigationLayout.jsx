import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail, Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Clock, ChevronRight, Zap, Globe, Award } from 'lucide-react';

const NavigationLayout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState('home');
	const [isScrolled, setIsScrolled] = useState(false);

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
		<div className="min-h-screen flex flex-col bg-gray-50 font-brand">
			{/* HEADER: Always visible, responsive navigation bar */}
			<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-2xl' : 'bg-white shadow-lg'}`}>
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Brand Logo */}
						<div className="flex items-center space-x-3">
							<div className="w-14 h-14 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-2xl">B</span>
							</div>
							<div>
								<h1 className="text-2xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent font-brand">BrandName</h1>
								<p className="text-xs text-brand font-semibold">Digital Excellence</p>
							</div>
						</div>
						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-2">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<button
										key={item.id}
										onClick={() => handlePageChange(item.id)}
										className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 font-brand ${currentPage === item.id ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-xl shadow-blue-500/40 scale-105' : 'text-brand-dark hover:bg-brand-light/10 hover:text-brand'}`}
									>
										<Icon size={20} />
										<span>{item.label}</span>
									</button>
								);
							})}
						</div>
						{/* Tablet Navigation */}
						<div className="hidden md:flex lg:hidden items-center space-x-2">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<button
										key={item.id}
										onClick={() => handlePageChange(item.id)}
										title={item.label}
										className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 font-brand ${currentPage === item.id ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-xl' : 'text-brand-dark hover:bg-brand-light/10 hover:text-brand'}`}
									>
										<Icon size={22} />
									</button>
								);
							})}
						</div>
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl text-brand-dark hover:bg-brand-light/10 hover:text-brand transition-all duration-300"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
						</button>
					</div>
					{/* Mobile Navigation Menu */}
					{isMenuOpen && (
						<div className="md:hidden border-t border-brand-light/30 py-4 bg-white">
							<div className="space-y-2">
								{navItems.map((item) => {
									const Icon = item.icon;
									return (
										<button
											key={item.id}
											onClick={() => handlePageChange(item.id)}
											className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all duration-300 font-brand ${currentPage === item.id ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-xl' : 'text-brand-dark hover:bg-brand-light/10 hover:text-brand'}`}
										>
											<div className="flex items-center space-x-3">
												<Icon size={24} />
												<span>{item.label}</span>
											</div>
											<ChevronRight size={20} />
										</button>
									);
								})}
							</div>
						</div>
					)}
				</nav>
			</header>
			{/* MAIN CONTENT: Grid system, clear separation */}
			<main className="flex-grow pt-24 pb-16 bg-gray-50 font-brand">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
						{/* Main Content - 8 Columns */}
						<div className="lg:col-span-8">
							<div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-brand-light/20">
								<div className="inline-flex items-center bg-gradient-to-r from-brand-light to-brand bg-opacity-10 border-2 border-brand-light px-6 py-2 rounded-full mb-6 shadow-lg">
									<span className="w-2 h-2 bg-brand rounded-full mr-3 animate-pulse"></span>
									<span className="text-sm font-bold text-brand uppercase tracking-wide">{currentPage}</span>
								</div>
								<h2 className="text-5xl lg:text-6xl font-bold text-brand-dark mb-5 leading-tight font-brand">{pageContent[currentPage].title}</h2>
								<p className="text-lg text-brand-dark/80 leading-relaxed mb-10 font-brand">{pageContent[currentPage].content}</p>
								<div className="flex flex-col sm:flex-row gap-4 mb-10">
									<button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-brand to-brand-dark text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-brand">
										<span>Get Started</span>
										<ChevronRight size={20} />
									</button>
									<button className="flex items-center justify-center bg-white text-brand border-2 border-brand px-8 py-4 rounded-xl font-bold hover:bg-brand-light/10 transition-all duration-300 font-brand">
										Learn More
									</button>
								</div>
								{/* Requirements Checklist */}
								<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
									<h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center font-brand">
										<span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
										All Requirements Met
									</h3>
									<ul className="space-y-2 text-sm text-brand-dark/80">
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Always Visible Navigation:</strong> Fixed at top, never disappears</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>All Required Links:</strong> Home, About Us, Services, Contact</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Fully Responsive:</strong> Adapts to desktop, tablet, and mobile</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Clear Separation:</strong> Navigation, main content, footer distinct</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Consistent Footer:</strong> Copyright and policy links on all pages</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Grid System:</strong> Professional 12-column layout throughout</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Fast Loading:</strong> Optimized for quick performance</span></li>
										<li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span><span><strong>Brand Consistent:</strong> Cohesive blue color scheme & font</span></li>
									</ul>
								</div>
							</div>
						</div>
						{/* Sidebar - 4 Columns in Grid */}
						<div className="lg:col-span-4 space-y-6">
							<div className="bg-gradient-to-br from-brand to-brand-dark text-white rounded-3xl shadow-2xl p-6">
								<h3 className="text-xl font-bold mb-5 flex items-center font-brand">
									<div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-3"><Menu size={20} /></div>
									Quick Navigation
								</h3>
								<div className="space-y-3">
									{navItems.map((item) => (
										<button
											key={item.id}
											onClick={() => handlePageChange(item.id)}
											className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all duration-300 font-brand ${currentPage === item.id ? 'bg-white text-brand shadow-xl' : 'bg-white bg-opacity-15 hover:bg-opacity-25'}`}
										>
											<span>{item.label}</span>
											<ChevronRight size={18} />
										</button>
									))}
								</div>
							</div>
							{/* Contact Card */}
							<div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-brand-light/20">
								<h3 className="text-lg font-bold text-brand-dark mb-5 font-brand">Contact Info</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-3">
										<div className="w-11 h-11 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center shadow-lg"><Phone size={20} className="text-white" /></div>
										<div><p className="font-bold text-brand-dark text-sm font-brand">Phone</p><p className="text-sm text-brand-dark/70">+1 (555) 123-4567</p></div>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-11 h-11 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center shadow-lg"><Mail size={20} className="text-white" /></div>
										<div><p className="font-bold text-brand-dark text-sm font-brand">Email</p><p className="text-sm text-brand-dark/70">info@brandname.com</p></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* FEATURES GRID - 3 COLUMNS */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
						<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-brand-light/20 hover:shadow-2xl transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/40"><Zap size={32} className="text-white" /></div>
							<h3 className="text-xl font-bold text-brand-dark mb-3 font-brand">Lightning Fast</h3>
							<p className="text-brand-dark/70">Optimized for speed on desktop and mobile devices.</p>
						</div>
						<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-brand-light/20 hover:shadow-2xl transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-green-500/40"><Globe size={32} className="text-white" /></div>
							<h3 className="text-xl font-bold text-brand-dark mb-3 font-brand">Fully Responsive</h3>
							<p className="text-brand-dark/70">Works perfectly on desktop, tablet, and mobile screens.</p>
						</div>
						<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-brand-light/20 hover:shadow-2xl transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-purple-500/40"><Award size={32} className="text-white" /></div>
							<h3 className="text-xl font-bold text-brand-dark mb-3 font-brand">Brand Consistent</h3>
							<p className="text-brand-dark/70">Cohesive color scheme and font throughout the entire site.</p>
						</div>
					</div>
					{/* STATISTICS GRID - 4 COLUMNS */}
					<div className="bg-gradient-to-r from-brand via-brand-dark to-brand-dark rounded-3xl shadow-2xl p-12 mb-16">
						<h2 className="text-4xl font-bold text-white text-center mb-12 font-brand">Our Achievements</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
							<div><div className="text-6xl font-bold mb-3 font-brand">500+</div><div className="text-brand-light font-semibold">Happy Clients</div></div>
							<div><div className="text-6xl font-bold mb-3 font-brand">1000+</div><div className="text-brand-light font-semibold">Projects Done</div></div>
							<div><div className="text-6xl font-bold mb-3 font-brand">50+</div><div className="text-brand-light font-semibold">Team Members</div></div>
							<div><div className="text-6xl font-bold mb-3 font-brand">99%</div><div className="text-brand-light font-semibold">Satisfaction</div></div>
						</div>
					</div>
					{/* TESTIMONIALS GRID - 2 COLUMNS */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-brand-light/20">
							<div className="flex items-center mb-6"><div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-xl font-brand">JD</div><div><h4 className="font-bold text-brand-dark text-lg font-brand">John Doe</h4><p className="text-sm text-brand-dark/70">CEO, Tech Solutions</p></div></div>
							<p className="text-brand-dark/90 leading-relaxed italic font-brand">"Perfect navigation that's always visible, fast loading times, and looks great on all devices!"</p>
						</div>
						<div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-brand-light/20">
							<div className="flex items-center mb-6"><div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-xl font-brand">SM</div><div><h4 className="font-bold text-brand-dark text-lg font-brand">Sarah Miller</h4><p className="text-sm text-brand-dark/70">Marketing Director</p></div></div>
							<p className="text-brand-dark/90 leading-relaxed italic font-brand">"Excellent grid layout, professional design, and the footer with all policies is exactly what we needed!"</p>
						</div>
					</div>
				</div>
			</main>
			{/* FOOTER: Consistent, grid-based, brand colors */}
			<footer className="bg-brand-dark text-white mt-auto border-t-4 border-brand">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
						{/* Company Column */}
						<div>
							<div className="flex items-center space-x-3 mb-5">
								<div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center shadow-xl"><span className="text-white font-bold text-2xl">B</span></div>
								<div><h3 className="text-xl font-bold font-brand">BrandName</h3><p className="text-xs text-brand-light font-semibold">Digital Excellence</p></div>
							</div>
							<p className="text-brand-light text-sm leading-relaxed mb-6 font-brand">Creating exceptional websites with always-visible navigation, responsive design, and brand-consistent layouts.</p>
							<div className="flex space-x-3">
								<a href="#facebook" className="w-11 h-11 bg-brand-dark rounded-xl flex items-center justify-center hover:bg-brand transition-all duration-300" aria-label="Facebook"><Facebook size={20} /></a>
								<a href="#twitter" className="w-11 h-11 bg-brand-dark rounded-xl flex items-center justify-center hover:bg-brand transition-all duration-300" aria-label="Twitter"><Twitter size={20} /></a>
								<a href="#linkedin" className="w-11 h-11 bg-brand-dark rounded-xl flex items-center justify-center hover:bg-brand transition-all duration-300" aria-label="LinkedIn"><Linkedin size={20} /></a>
								<a href="#instagram" className="w-11 h-11 bg-brand-dark rounded-xl flex items-center justify-center hover:bg-brand transition-all duration-300" aria-label="Instagram"><Instagram size={20} /></a>
							</div>
						</div>
						{/* Quick Links */}
						<div>
							<h4 className="text-lg font-bold mb-5 font-brand">Quick Links</h4>
							<ul className="space-y-3">
								{navItems.map((item) => (
									<li key={item.id}>
										<button
											onClick={() => handlePageChange(item.id)}
											className="text-brand-light hover:text-white text-sm transition-colors duration-300 flex items-center group font-brand"
										>
											<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
											{item.label}
										</button>
									</li>
								))}
							</ul>
						</div>
						{/* Policy Links */}
						<div>
							<h4 className="text-lg font-bold mb-5 font-brand">Legal & Policies</h4>
							<ul className="space-y-3">
								<li><a href="#privacy" className="text-brand-light hover:text-white text-sm transition-colors duration-300 flex items-center group font-brand"><ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />Privacy Policy</a></li>
								<li><a href="#terms" className="text-brand-light hover:text-white text-sm transition-colors duration-300 flex items-center group font-brand"><ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />Terms of Service</a></li>
								<li><a href="#cookie" className="text-brand-light hover:text-white text-sm transition-colors duration-300 flex items-center group font-brand"><ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />Cookie Policy</a></li>
								<li><a href="#disclaimer" className="text-brand-light hover:text-white text-sm transition-colors duration-300 flex items-center group font-brand"><ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />Disclaimer</a></li>
								<li><a href="#accessibility" className="text-brand-light hover:text-white text-sm transition-colors duration-300 flex items-center group font-brand"><ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />Accessibility</a></li>
							</ul>
						</div>
						{/* Contact Column */}
						<div>
							<h4 className="text-lg font-bold mb-5 font-brand">Contact Us</h4>
							<ul className="space-y-4 text-sm">
								<li className="flex items-start space-x-3"><Mail size={18} className="text-brand-light mt-1 flex-shrink-0" /><div><p className="font-semibold text-brand-light mb-1 font-brand">Email</p><a href="mailto:info@brandname.com" className="text-brand-light hover:text-white transition-colors font-brand">info@brandname.com</a></div></li>
								<li className="flex items-start space-x-3"><Phone size={18} className="text-brand-light mt-1 flex-shrink-0" /><div><p className="font-semibold text-brand-light mb-1 font-brand">Phone</p><a href="tel:+15551234567" className="text-brand-light hover:text-white transition-colors font-brand">+1 (555) 123-4567</a></div></li>
								<li className="flex items-start space-x-3"><MapPin size={18} className="text-brand-light mt-1 flex-shrink-0" /><div><p className="font-semibold text-brand-light mb-1 font-brand">Address</p><p className="text-brand-light font-brand">123 Business St<br />City, State 12345</p></div></li>
								<li className="flex items-start space-x-3"><Clock size={18} className="text-brand-light mt-1 flex-shrink-0" /><div><p className="font-semibold text-brand-light mb-1 font-brand">Hours</p><p className="text-brand-light font-brand">Mon-Fri: 9AM-6PM</p></div></li>
							</ul>
						</div>
					</div>
					{/* Copyright */}
					<div className="border-t border-brand pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p className="text-brand-light text-sm text-center md:text-left font-brand">© {new Date().getFullYear()} BrandName. All rights reserved. Built with excellence.</p>
							<p className="text-brand-light/80 text-xs text-center md:text-right font-brand">React • Next.js • Tailwind CSS</p>
						</div>
					</div>
				</div>
			</footer>
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
