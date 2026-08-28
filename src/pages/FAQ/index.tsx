import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageCta } from '@components/ui';

type Category = 'Services' | 'Products' | 'Support';
type Question = { question: string; answer: string; category: Category };

const QUESTIONS: Question[] = [
  { category: 'Services', question: 'What types of software development services do you offer?', answer: 'We build websites, mobile applications, internal tools, and integrations tailored to your team, customers, and operating needs.' },
  { category: 'Services', question: 'Do you provide ongoing maintenance after launch?', answer: 'Yes. We can provide maintenance, monitoring, improvements, and technical support after your project goes live.' },
  { category: 'Services', question: 'How do you handle project management?', answer: 'We agree on scope and milestones up front, share progress regularly, and keep decisions and next steps visible throughout the engagement.' },
  { category: 'Products', question: 'Is G-Tech CRM suitable for small businesses?', answer: 'Our tools can be shaped to the size and workflow of your business. Contact us so we can understand your requirements before recommending an approach.' },
  { category: 'Products', question: 'Can your products integrate with third-party tools?', answer: 'We design integrations around the systems you already use, subject to the available APIs and access requirements.' },
  { category: 'Support', question: 'What are your support hours?', answer: 'Our standard office hours are Monday to Friday, 10:00 AM to 6:00 PM. Support arrangements can be agreed for active projects.' },
  { category: 'Support', question: 'How do I submit a bug report?', answer: 'Email g.technologies237@gmail.com with the affected feature, what happened, and the steps to reproduce the issue. Screenshots are helpful too.' },
];

const CATEGORIES: Category[] = ['Services', 'Products', 'Support'];

function CategoryIcon({ category }: { category: Category }) {
  return <span className="text-teal" aria-hidden="true">{category === 'Services' ? '⚒' : category === 'Products' ? '▣' : '?'}</span>;
}

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [openQuestion, setOpenQuestion] = useState<string | null>(QUESTIONS[0].question);
  const filtered = useMemo(() => QUESTIONS.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <main className="bg-surface min-h-screen">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-20 pb-12 text-center">
        <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">Help centre</p>
        <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">How can we help you?</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Find answers to common questions about our services, products, and support. Type your query below or browse the categories.</p>
        <label className="relative block max-w-xl mx-auto mt-8 text-left">
          <span className="sr-only">Search frequently asked questions</span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden="true">⌕</span>
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search for answers..." className="w-full rounded-lg border-2 border-outline-variant bg-white py-3 pl-11 pr-4 font-body-md text-body-md text-on-surface outline-none focus:border-teal" />
        </label>
      </section>

      <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="space-y-12">
          {CATEGORIES.map((category) => {
            const categoryQuestions = filtered.filter((item) => item.category === category);
            if (!categoryQuestions.length) return null;
            return (
              <section key={category} aria-labelledby={`faq-${category}`}>
                <h2 id={`faq-${category}`} className="flex items-center gap-3 font-headline-sm text-headline-sm text-primary-container mb-5"><CategoryIcon category={category} />{category}</h2>
                <div className="overflow-hidden rounded-lg bg-white soft-shadow">
                  {categoryQuestions.map((item, index) => {
                    const isOpen = openQuestion === item.question;
                    return (
                      <div key={item.question} className={index ? 'border-t border-outline-variant/50' : ''}>
                        <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? null : item.question)} className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left font-body-md text-body-md text-on-surface hover:text-teal">
                          <span>{item.question}</span><span aria-hidden="true" className="text-on-surface-variant">{isOpen ? '−' : '⌄'}</span>
                        </button>
                        {isOpen && <p className="px-5 pb-5 pr-14 font-body-md text-sm text-on-surface-variant leading-relaxed">{item.answer}</p>}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
          {!filtered.length && <p className="py-12 text-center font-body-md text-body-md text-on-surface-variant">No answers found. Try a different search or contact our team.</p>}
        </div>
      </section>

      <PageCta title="Still have questions?" body="Can&apos;t find the answer you&apos;re looking for? Our team is ready to help you navigate your technology needs." actionLabel="Contact Support" />
      <p className="sr-only"><Link to="/contact">Contact G-Tech support</Link></p>
    </main>
  );
}
