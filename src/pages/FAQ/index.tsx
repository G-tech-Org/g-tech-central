import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageCta } from '@components/ui';

type Category = 'Services' | 'Media & Design' | 'Support';
type Question = { question: string; answer: string; category: Category };

const QUESTIONS: Question[] = [
  { category: 'Services', question: 'What services do you offer?', answer: 'We offer graphic design, networking, videography, cinematography, professional ad campaigns, social media growth, frontend development, mobile app development with Flutter, backend development with Firebase, Django, and Laravel, and laptop and gadget sales.' },
  { category: 'Services', question: 'Do you work on both branding and technical projects?', answer: 'Yes. We support creative work such as branding and marketing, as well as technical delivery including websites, apps, systems, and networking setups.' },
  { category: 'Services', question: 'Can you help with a full project from idea to launch?', answer: 'Yes. We can guide the process from concept and planning through design, production, build, deployment, and ongoing support depending on the scope.' },
  { category: 'Media & Design', question: 'Do you create marketing visuals and social media content?', answer: 'Yes. We create brand visuals, ad creatives, campaign materials, and social media content designed to increase reach and engagement.' },
  { category: 'Media & Design', question: 'Do you handle video production and cinematography?', answer: 'Yes. We cover videography and cinematography for promotional content, storytelling, events, and branded campaigns.' },
  { category: 'Support', question: 'How can I contact G-Tech?', answer: 'You can use the contact form on the website or email g.technologies237@gmail.com with your inquiry, project needs, or service request.' },
  { category: 'Support', question: 'Do you support businesses after delivery?', answer: 'Yes. Depending on the project, we can provide follow-up support, refinements, maintenance, optimization, and guidance after launch.' },
];

const CATEGORIES: Category[] = ['Services', 'Media & Design', 'Support'];

function CategoryIcon({ category }: { category: Category }) {
  return <span className="text-teal" aria-hidden="true">{category === 'Services' ? '⚒' : category === 'Media & Design' ? '▣' : '?'}</span>;
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
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Find answers to common questions about our services, creative work, and support. Type your query below or browse the categories.</p>
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
