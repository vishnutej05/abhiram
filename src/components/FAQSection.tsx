import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const faqs = [
	{
		question: 'How quickly will I see real progress?',
		answer:
			'Every transformation is unique, but most clients notice positive changes within 3-4 weeks. The real magic happens around week 8-12 when everything clicks together - your strength, confidence, and mindset align.',
	},
	{
		question: 'Can I train effectively without a gym?',
		answer:
			'Absolutely! Some of our most impressive transformations happened with home setups. We design programs around your available space and equipment - what matters most is consistency and the right guidance.',
	},
	{
		question: 'What level of support can I expect?',
		answer:
			"You're never alone in this journey. From detailed workout plans and nutrition strategies to regular progress reviews and motivational support - we're here to guide you every step of the way.",
	},
	{
		question: 'How do you create my personal program?',
		answer:
			'We start with a deep dive into your goals, lifestyle, and current fitness level. Your program evolves with you - adjusting as you get stronger, as your schedule changes, and as your confidence grows.',
	},
];

const FAQSection = () => {
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);
	const { theme } = useTheme();

	const toggleFAQ = (index: number) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};

	return (
		<section
			id="faq"
			className={`pt-16 pb-20 ${
				theme === 'dark'
					? 'bg-gradient-to-b from-zinc-800 to-zinc-900'
					: 'bg-gradient-to-b from-slate-50 to-white'
			}`}
		>
			<div className="mx-auto max-w-2xl text-center">
				<h2
					className={`font-formom text-3xl font-bold tracking-tight sm:text-4xl ${
						theme === 'dark' ? 'text-white' : 'text-gray-900'
					}`}
				>
					Frequently Asked{' '}
					<span
						className={
							theme === 'dark' ? 'text-electric-blue' : 'text-amber-gold'
						}
					>
						Questions
					</span>
				</h2>
				<p
					className={`mt-4 text-lg leading-7 font-helvetica ${
						theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
					}`}
				>
					Find answers to common questions about our transformation programs and
					coaching services.
				</p>
			</div>

			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12">
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className={`rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
								theme === 'dark'
									? 'bg-zinc-800/90 hover:bg-zinc-800'
									: 'bg-white/90 hover:bg-white shadow-md'
							}`}
						>
							<div className="space-y-6">
								<button
									onClick={() => toggleFAQ(index)}
									className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
										theme === 'dark'
											? openFAQ === index ? 'bg-zinc-700/50' : ''
											: openFAQ === index ? 'bg-gray-50/80' : ''
									}`}
								>
									<h3
										className={`text-lg font-formom font-medium pr-4 ${
											theme === 'dark' ? 'text-white' : 'text-gray-900'
										}`}
									>
										{faq.question}
									</h3>
									<div className="flex-shrink-0">
										{openFAQ === index ? (
											<ChevronUp
												className={`w-5 h-5 ${
													theme === 'dark'
														? 'text-electric-blue-600'
														: 'text-strong-green'
												}`}
											/>
										) : (
											<ChevronDown className="w-5 h-5 text-gray-400" />
										)}
									</div>
								</button>
							</div>
							{openFAQ === index && (
								<div
									className={`px-6 pb-5 font-helvetica leading-relaxed ${
										theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
									}`}
								>
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<p
						className={`font-helvetica ${
							theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
						} mb-4`}
					>
						Still have questions?
					</p>
					<button
						onClick={() =>
							document.getElementById('contact')?.scrollIntoView({
								behavior: 'smooth',
							})
						}
						className="btn-primary text-lg rounded-full"
					>
						Get Personal Answers
					</button>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
