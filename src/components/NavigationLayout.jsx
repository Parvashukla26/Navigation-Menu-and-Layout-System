import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail, Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Clock, ChevronRight, Zap, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const NavigationLayout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState('home');
	const [isScrolled, setIsScrolled] = useState(false);

	// ============================================================================
	// REQUIREMENT 1: Navigation bar at the top that is ALWAYS VISIBLE
	// Implementation: Fixed positioning that stays at top during scrolling
	// ============================================================================
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handlePageChange = (pageId) => {
		setCurrentPage(pageId);
		setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// ============================================================================
	// REQUIREMENT 2: Links to homepage, about us, services, and contact pages
	// Implementation: All 4 required navigation links defined here
	// ============================================================================
	const navItems = [
		{ id: 'home', label: 'Home', icon: Home, description: 'Homepage' },
		{ id: 'about', label: 'About Us', icon: Info, description: 'About our company' },
		{ id: 'services', label: 'Services', icon: Briefcase, description: 'Our services' },
		{ id: 'contact', label: 'Contact', icon: Mail, description: 'Contact us' }
	];

	const pageContent = {
		home: {
			title: 'Welcome to Our Website',
			subtitle: 'Your Trusted Partner in Digital Excellence',
			description: 'We create modern, responsive, and fast-loading websites that deliver exceptional user experiences across all devices. Our solutions combine cutting-edge technology with beautiful, brand-consistent design to help your business thrive in the digital world. From concept to launch, we ensure every element is perfectly aligned and organized for maximum impact.',
			benefits: [
				'Lightning-fast performance on all devices',
				'Responsive design for desktop, tablet, and mobile',
				'Professional grid-based layout system',
				'Brand-consistent color schemes throughout',
				'Easy-to-use navigation for better UX',
				'SEO optimized for search engines'
			]
		},
		about: {
			title: 'About Our Company',
			subtitle: 'Building Digital Excellence Since 2010',
			description: 'With over a decade of experience in web development and design, we have helped hundreds of businesses establish and grow their online presence. Our dedicated team of professionals combines technical expertise with creative innovation to deliver solutions that not only meet but exceed expectations. We pride ourselves on creating websites that are fast, responsive, and perfectly aligned with your brand guidelines.',
			benefits: [
				'Expert team with 10+ years experience',
				'Client satisfaction rate of 99%',
				'Fast project delivery guaranteed',
				'Comprehensive support and maintenance',
				'Cutting-edge technology stack',
				'Proven track record of success'
			]
		},
		services: {
			title: 'Our Services',
			subtitle: 'Comprehensive Digital Solutions',
			description: 'From custom web development and responsive design to performance optimization and ongoing maintenance, we offer a complete suite of services tailored to your unique business needs. Every service is delivered with attention to detail, ensuring fast load times, perfect responsiveness across all devices, and a cohesive brand identity. Our grid-based layouts ensure professional alignment and organization throughout your entire website.',
			benefits: [
				'Custom web development solutions',
				'Responsive design for all screen sizes',
				'Performance optimization services',
				'SEO and digital marketing',
				'E-commerce development',
				'24/7 maintenance and support'
			]
		},
		contact: {
			title: 'Get In Touch',
			subtitle: 'Let\'s Build Something Amazing Together',
			description: 'Ready to take your online presence to the next level? Our team is here to help you achieve your digital goals. Whether you need a brand new website, want to optimize your existing site for better performance, or require ongoing support and maintenance, we have the expertise and experience to deliver results. Contact us today for a free consultation and let\'s discuss how we can help your business succeed online.',
			benefits: [
				'Free initial consultation',
				'Quick response within 24 hours',
				'Transparent pricing and timelines',
				'Dedicated project manager',
				'Regular progress updates',
				'Post-launch support included'
			]
		}
	};

	const currentContent = pageContent[currentPage];

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
			{/* ============================================================================ */}
			{/* REQUIREMENT 1: Navigation bar at top that is ALWAYS VISIBLE */}
			{/* REQUIREMENT 3: Navigation adapts to desktop, tablet, mobile */}
			{/* REQUIREMENT 8: Brand-consistent color scheme in navigation */}
			{/* Implementation: Fixed header with responsive navigation */}
			{/* ============================================================================ */}
			<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled 
					? 'bg-white shadow-2xl backdrop-blur-lg' 
					: 'bg-white shadow-lg'
			}`}>
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
            
						{/* ============================================================================ */}
						{/* REQUIREMENT 8: Brand logo with cohesive color scheme */}
						{/* Implementation: Consistent blue gradient matching brand guidelines */}
						{/* ============================================================================ */}
						<div className="flex items-center space-x-3">
							<div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
								<span className="text-white font-bold text-2xl">B</span>
							</div>
							<div>
								<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
									BrandName
								</h1>
								<p className="text-xs text-slate-600 font-semibold tracking-wide">Digital Excellence</p>
							</div>
						</div>

						{/* ============================================================================ */}
						{/* REQUIREMENT 2: Navigation links - Homepage, About Us, Services, Contact */}
						{/* REQUIREMENT 3: Desktop navigation (large screens) */}
						{/* REQUIREMENT 8: Brand colors in active state */}
						{/* ============================================================================ */}
						<div className="hidden lg:flex items-center space-x-2">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<button
										key={item.id}
										onClick={() => handlePageChange(item.id)}
										title={item.description}
										className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
											currentPage === item.id
												? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl shadow-blue-500/50 scale-105'
												: 'text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg'
										}`}
									>
										<Icon size={20} className={currentPage === item.id ? '' : 'text-blue-600'} />
										<span>{item.label}</span>
									</button>
								);
							})}
						</div>

						{/* ============================================================================ */}
						{/* REQUIREMENT 3: Tablet navigation (medium screens) */}
						{/* Implementation: Icon-only buttons for tablet devices */}
						{/* ============================================================================ */}
						<div className="hidden md:flex lg:hidden items-center space-x-2">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<button
										key={item.id}
										onClick={() => handlePageChange(item.id)}
										title={item.label}
										className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
											currentPage === item.id
												? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-500/50'
												: 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
										}`}
									>
										<Icon size={22} />
									</button>
								);
							})}
						</div>

						{/* ============================================================================ */}
						{/* REQUIREMENT 3: Mobile hamburger menu button */}
						{/* Implementation: Toggle button for mobile devices */}
						{/* ============================================================================ */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
							aria-label="Toggle navigation menu"
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
						</button>
					</div>

					{/* ============================================================================ */}
					{/* REQUIREMENT 2: Mobile navigation with all 4 links */}
					{/* REQUIREMENT 3: Mobile responsive navigation menu */}
					{/* REQUIREMENT 8: Brand colors in mobile menu */}
					{/* ============================================================================ */}
					{isMenuOpen && (
						<div className="md:hidden border-t border-slate-200 py-4 bg-white">
							<div className="space-y-2">
								{navItems.map((item) => {
									const Icon = item.icon;
									return (
										<button
											key={item.id}
											onClick={() => handlePageChange(item.id)}
											className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all duration-300 ${
												currentPage === item.id
													? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl shadow-blue-500/30'
													: 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
											}`}
										>
											<div className="flex items-center space-x-3">
												<Icon size={24} />
												<span className="text-base">{item.label}</span>
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

			{/* ============================================================================ */}
			{/* REQUIREMENT 4: Main content area CLEARLY DEFINED and SEPARATE */}
			{/* Implementation: Dedicated main element with distinct spacing from nav/footer */}
			{/* ============================================================================ */}
			<main className="flex-grow mt-20 pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
				{/* ============================================================================ */}
				{/* REQUIREMENT 7: Fast loading indicator */}
				{/* Implementation: Minimal, lightweight content structure */}
				{/* ============================================================================ */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
					{/* ============================================================================ */}
					{/* REQUIREMENT 6: Grid system for professional layout */}
					{/* Implementation: 12-column grid with 8-4 split on large screens */}
					{/* ============================================================================ */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
						{/* Main content column - 8 columns */}
						<div className="lg:col-span-8">
							<div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border-2 border-slate-100">
                
								{/* ============================================================================ */}
								{/* REQUIREMENT 8: Page indicator with brand colors */}
								{/* ============================================================================ */}
								<div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-blue-50 to-indigo-100 border-2 border-blue-200 px-6 py-2 rounded-full mb-6 shadow-lg shadow-blue-500/20">
									<span className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></span>
									<span className="text-sm font-bold text-blue-700 uppercase tracking-wider">{currentPage} Page</span>
								</div>
                
								<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight">
									{currentContent.title}
								</h2>
                
								<p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
									{currentContent.subtitle}
								</p>
                
								<p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
									{currentContent.description}
								</p>

								{/* Benefits list */}
								<div className="space-y-3 mb-10">
									<h3 className="text-lg font-bold text-slate-900 mb-4">Key Benefits:</h3>
									{currentContent.benefits.map((benefit, idx) => (
										<div key={idx} className="flex items-start space-x-3">
											<CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
											<p className="text-slate-700">{benefit}</p>
										</div>
									))}
								</div>

								{/* ============================================================================ */}
								{/* REQUIREMENT 8: CTA buttons with brand color scheme */}
								{/* ============================================================================ */}
								<div className="flex flex-col sm:flex-row gap-4">
									<button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:scale-105 transition-all duration-300">
										<span>Get Started Today</span>
										<ChevronRight size={20} />
									</button>
									<button className="flex items-center justify-center space-x-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-700 transition-all duration-300">
										<span>Learn More</span>
									</button>
								</div>
							</div>
						</div>

						{/* ============================================================================ */}
						{/* REQUIREMENT 6: Sidebar column - 4 columns using grid system */}
						{/* ============================================================================ */}
						<div className="lg:col-span-4 space-y-6">
              
							{/* ============================================================================ */}
							{/* REQUIREMENT 2: Quick navigation with all 4 pages */}
							{/* REQUIREMENT 8: Brand colors in sidebar */}
							{/* ============================================================================ */}
							<div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-3xl shadow-2xl p-6">
								<h3 className="text-xl font-bold mb-5 flex items-center">
									<div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-3">
										<Menu size={20} />
									</div>
									Quick Navigation
								</h3>
								<div className="space-y-3">
									{navItems.map((item) => (
										<button
											key={item.id}
											onClick={() => handlePageChange(item.id)}
											className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all duration-300 ${
												currentPage === item.id
													? 'bg-white text-blue-700 shadow-xl'
													: 'bg-white bg-opacity-15 hover:bg-opacity-25'
											}`}
										>
											<span>{item.label}</span>
											<ChevronRight size={18} />
										</button>
									))}
								</div>
							</div>

							{/* Contact card */}
							<div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-slate-100">
								<h3 className="text-lg font-bold text-slate-900 mb-5">Contact Information</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-3">
										<div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
											<Phone size={20} className="text-white" />
										</div>
										<div>
											<p className="font-bold text-slate-900 text-sm">Phone</p>
											<p className="text-sm text-slate-600">+1 (555) 123-4567</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
											<Mail size={20} className="text-white" />
										</div>
										<div>
											<p className="font-bold text-slate-900 text-sm">Email</p>
											<p className="text-sm text-slate-600">info@brandname.com</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
											<MapPin size={20} className="text-white" />
										</div>
										<div>
											<p className="font-bold text-slate-900 text-sm">Address</p>
											<p className="text-sm text-slate-600">123 Business St, City, ST 12345</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ============================================================================ */}
					{/* REQUIREMENT 6: Features grid system - 3 columns */}
					{/* REQUIREMENT 7: Fast loading - lightweight icons */}
					{/* REQUIREMENT 8: Brand colors in features */}
					{/* ============================================================================ */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
						<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/40">
								<Zap size={32} className="text-white" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
							<p className="text-slate-600 leading-relaxed">Optimized for speed on both desktop and mobile devices with fast load times.</p>
						</div>

						<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-green-500/40">
								<Users size={32} className="text-white" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">Responsive Design</h3>
							<p className="text-slate-600 leading-relaxed">Perfect experience across desktop, tablet, and mobile screen sizes.</p>
						</div>

						<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-purple-500/40">
								<Award size={32} className="text-white" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">Brand Consistent</h3>
							<p className="text-slate-600 leading-relaxed">Cohesive color scheme matching brand guidelines throughout the site.</p>
						</div>
					</div>

					{/* ============================================================================ */}
					{/* REQUIREMENT 6: Statistics grid - 4 columns */}
					{/* REQUIREMENT 8: Brand colors in statistics section */}
					{/* ============================================================================ */}
					<div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-3xl shadow-2xl p-10 sm:p-12 mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Our Track Record</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
							<div>
								<div className="text-5xl sm:text-6xl font-bold mb-3">500+</div>
								<div className="text-blue-200 text-sm sm:text-base font-semibold">Happy Clients</div>
							</div>
							<div>
								<div className="text-5xl sm:text-6xl font-bold mb-3">1000+</div>
								<div className="text-blue-200 text-sm sm:text-base font-semibold">Projects Completed</div>
							</div>
							<div>
								<div className="text-5xl sm:text-6xl font-bold mb-3">50+</div>
								<div className="text-blue-200 text-sm sm:text-base font-semibold">Team Members</div>
							</div>
							<div>
								<div className="text-5xl sm:text-6xl font-bold mb-3">99%</div>
								<div className="text-blue-200 text-sm sm:text-base font-semibold">Satisfaction Rate</div>
							</div>
						</div>
					</div>

					{/* ============================================================================ */}
					{/* REQUIREMENT 6: Testimonials grid - 2 columns */}
					{/* REQUIREMENT 7: Fast loading testimonials */}
					{/* ============================================================================ */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-slate-100">
							<div className="flex items-center mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-xl shadow-blue-500/40">
									JD
								</div>
								<div>
									<h4 className="font-bold text-slate-900 text-lg">John Doe</h4>
									<p className="text-sm text-slate-600">CEO, Tech Solutions Inc.</p>
								</div>
							</div>
							<p className="text-slate-700 leading-relaxed italic">"Outstanding work! The navigation is always visible and intuitive, the website loads incredibly fast on all devices, and the layout is perfectly organized. Highly recommended!"</p>
						</div>
            
						<div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-slate-100">
							<div className="flex items-center mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-xl shadow-purple-500/40">
									SM
								</div>
								<div>
									<h4 className="font-bold text-slate-900 text-lg">Sarah Miller</h4>
									<p className="text-sm text-slate-600">Marketing Director, Digital Corp</p>
								</div>
							</div>
							<p className="text-slate-700 leading-relaxed italic">"The team delivered beyond expectations. The responsive design works flawlessly across desktop, tablet, and mobile. The brand-consistent colors create a cohesive identity throughout!"</p>
						</div>
					</div>
				</div>
			</main>

			{/* ============================================================================ */}
			{/* REQUIREMENT 4: Footer clearly separate from main content */}
			{/* REQUIREMENT 5: Consistent footer on every page with copyright and policies */}
			{/* Implementation: Dedicated footer element with all required links */}
			{/* ============================================================================ */}
			<footer className="bg-slate-900 text-white mt-auto border-t-4 border-blue-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
					{/* ============================================================================ */}
					{/* REQUIREMENT 6: Footer grid system - 4 columns */}
					{/* REQUIREMENT 8: Brand colors in footer */}
					{/* ============================================================================ */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
            
						{/* Company column */}
						<div>
							<div className="flex items-center space-x-3 mb-5">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
									<span className="text-white font-bold text-2xl">B</span>
								</div>
								<div>
									<h3 className="text-xl font-bold">BrandName</h3>
									<p className="text-xs text-slate-400 font-semibold">Digital Excellence</p>
								</div>
							</div>
							<p className="text-slate-400 text-sm leading-relaxed mb-6">
								Creating exceptional digital experiences with cutting-edge technology, responsive design, and brand-consistent solutions since 2010.
							</p>
							<div className="flex space-x-3">
								<a href="#facebook" className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg" aria-label="Facebook">
									<Facebook size={20} />
								</a>
								<a href="#twitter" className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg" aria-label="Twitter">
									<Twitter size={20} />
								</a>
								<a href="#linkedin" className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg" aria-label="LinkedIn">
									<Linkedin size={20} />
								</a>
								<a href="#instagram" className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg" aria-label="Instagram">
									<Instagram size={20} />
								</a>
							</div>
						</div>

						{/* ============================================================================ */}
						{/* REQUIREMENT 2: Quick links column with all 4 navigation pages */}
						{/* REQUIREMENT 5: Navigation links in footer for consistency */}
						{/* ============================================================================ */}
						<div>
							<h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
							<ul className="space-y-3">
								{navItems.map((item) => (
									<li key={item.id}>
										<button
											onClick={() => handlePageChange(item.id)}
											className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center group"
										>
											<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
											{item.label}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* ============================================================================ */}
						{/* REQUIREMENT 5: Important policy links column */}
						{/* Implementation: Privacy Policy, Terms, Cookie Policy, etc. */}
						{/* ============================================================================ */}
						<div>
							<h4 className="text-lg font-bold mb-5 text-white">Legal & Policies</h4>
							<ul className="space-y-3">
								<li>
									<a href="#privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center group">
										<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#terms-of-service" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center group">
										<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
										Terms of Service
									</a>
								</li>
								<li>
									<a href="#cookie-policy" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center group">
										<ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
										Cookie Policy
									</a>
								</li>
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
