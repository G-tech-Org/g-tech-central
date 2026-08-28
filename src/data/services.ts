import type { Service } from '@app-types/index';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    preview:
      'Fast, accessible websites and web apps shaped around how your customers actually buy and work.',
    description:
      'We build fast, secure, and scalable websites tailored to your business. The work prioritizes clarity, performance, and a path you can maintain.',
    features: [
      'Marketing sites and custom web apps',
      'E-commerce and content platforms',
      'Responsive, accessible design',
      'SEO foundations',
    ],
    accent: 'teal',
  },
  {
    id: 'apps',
    title: 'App Development',
    preview:
      'Mobile experiences that put your service in customers’ hands, with a backend your team can trust.',
    description:
      'We design and build mobile applications for iOS and Android so your customers can reach you on the go—without a brittle, one-off prototype.',
    features: [
      'Native and cross-platform apps',
      'User-centred UI and UX',
      'API and backend integration',
      'Store listing and launch support',
    ],
    accent: 'coral',
  },
  {
    id: 'design',
    title: 'Graphics Design',
    preview:
      'Brand systems and visual assets that stay consistent from the first impression to every campaign.',
    description:
      'We create visual identity and marketing assets that make your offer recognisable and easier to trust.',
    features: [
      'Brand identity and logo design',
      'Marketing collateral',
      'Digital illustration',
      'UI and UX prototyping',
    ],
    accent: 'teal',
  },
  {
    id: 'hardware',
    title: 'Laptops & Accessories',
    preview:
      'Laptops, workstations, and accessories chosen for the work your team actually does.',
    description:
      'We help you equip people with hardware that holds up—procurement, setup, and ongoing support included.',
    features: [
      'Laptop and workstation procurement',
      'Accessories and peripherals',
      'Networking basics',
      'Hardware support and maintenance',
    ],
    accent: 'navy',
  },
];
