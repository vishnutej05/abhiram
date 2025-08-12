import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const faqs = [
	{
		question: 'How long does it take to see results?',
		answer:
			' Results can typically be seen within 8-12 weeks, depending on your effort, consistency, and specific goals. However, this timeline varies significantly based on individual factors such as starting fitness level, program adherence, and the nature of your objectives.',
	},
	{
		question: '  What if I stop in between?',
		answer:
			' You can pause your program once and resume within 1 month tenure.',
	},
	{
		question: 'What level of support can I expect?',
		answer:
			" From detailed workout plans and nutrition strategies to regular progress reviews and motivational support - we're here to guide you every step of the way, support is extended to primarily 6 month and 12 month plans if that’s what you want.",
	},
	{
		question: ' How do you track progress in a virtual setting?',
		answer:
			' Progress tracking involves multiple methods including regular weight logs, progress photos, fitness assessments, and workout performance data recorded in training apps. All of this is communicated directly to your trainer for ongoing adjustments.',
	},
	{
		question: '  What if I have injuries or medical conditions?',
		answer:
			' Professional online trainers can work with clients who have specific health conditions or injuries, provided you have medical clearance to exercise. Programs can be modified to accommodate limitations and ensure safe, effective training within your capabilities.',
	},
	{
		question: ' Do you provide nutrition advice?',
		answer:
			'  Yes! Everything is covered in detail',
	},
	{
		question: ' How will we communicate during the program?',
		answer:
			'  Communication typically occurs through messaging systems, video calls, and sometimes phone consultations. We will primarily use WhatsApp to get through all communication related procedures.',
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
					? 'bg-black/60 bg-opacity-90'
					: 'bg-gradient-to-b from-slate-50 to-white'
			}`}
		>
			<div className="mx-auto max-w-2xl text-center">
				<h2
					className={`font-helvetica text-3xl font-bold tracking-tight sm:text-4xl ${
						theme === 'dark' ? 'text-white' : 'text-gray-900'
					}`}
				>
					FREQUENTLY ASKED{' '}
					<span
						className={
							theme === 'dark' ? 'text-electric-blue' : 'text-amber-gold'
						}
					>
						QUESTIONS
					</span>
				</h2>
				<p
					className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-4 ${
						theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
					}`}
				>
					Find answers to common questions about our transformation programs and
					coaching services.
				</p>
			</div>

			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8">
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
