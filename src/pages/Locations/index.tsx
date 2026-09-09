import { PageCta } from '@components/ui';

interface LocationInfo {
  name: string;
  street: string;
  city: string;
  region: string;
  hours: {
    days: string;
    time: string;
  };
  embedUrl: string;
  mapUrl: string;
}

const LOCATIONS: LocationInfo[] = [
  {
    name: 'Bambili HQ',
    street: 'University Street, Next to Silicon Valley Hub',
    city: 'Bambili',
    region: 'North West Region, Cameroon',
    hours: { days: 'Monday - Friday', time: '10:00 AM - 6:00 PM' },
    embedUrl: 'https://maps.google.com/maps?q=University%20Street%2C%20Next%20to%20Silicon%20Valley%20Hub%2C%20Bambili%2C%20Cameroon&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=University%20Street%2C%20Next%20to%20Silicon%20Valley%20Hub%2C%20Bambili%2C%20Cameroon',
  },
  {
    name: 'Bamenda Branch',
    street: 'Commercial Avenue, Tech Plaza Floor 3',
    city: 'Bamenda',
    region: 'North West Region, Cameroon',
    hours: { days: 'Monday - Saturday', time: '9:00 AM - 5:00 PM' },
    embedUrl: 'https://maps.google.com/maps?q=Commercial%20Avenue%2C%20Tech%20Plaza%20Floor%203%2C%20Bamenda%2C%20Cameroon&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Commercial%20Avenue%2C%20Tech%20Plaza%20Floor%203%2C%20Bamenda%2C%20Cameroon',
  },
];

function LocationMap({ location }: { location: LocationInfo }) {
  return (
    <div className="relative h-64 w-full overflow-hidden bg-surface-container-low">
      <iframe
        title={`Map location for ${location.name}`}
        src={location.embedUrl}
        className="w-full h-full border-0 grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}

export default function Locations() {
  return (
    <main className="bg-surface min-h-screen pt-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
        <header className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">Visit G-Tech</p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-4">
            Our Locations
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Meet our team in Bambili or Bamenda to discuss design, media, software, and technology solutions for your next project.
          </p>
          </div>
          <div className="rounded-lg border border-outline-variant/50 bg-white px-5 py-4 md:max-w-xs">
            <p className="font-label-md text-label-md text-primary-container font-bold">Planning a visit?</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Send us a message first so we can prepare the right person to meet you.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {LOCATIONS.map((location) => (
            <article
              key={location.name}
              className="bg-white rounded-[16px] soft-shadow overflow-hidden hover:-translate-y-1 transition-all duration-300 border-b-2 border-transparent hover:border-teal flex flex-col"
            >
              <LocationMap location={location} />

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary-container mb-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/15 text-teal" aria-hidden="true">⌖</span>
                    {location.name}
                  </h2>
                  <div className="space-y-4 mb-6 text-on-surface-variant">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-teal" aria-hidden="true">+</span>
                      <address className="font-body-md text-body-md not-italic">
                        {location.street}<br />
                        {location.city}, {location.region}
                      </address>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-teal" aria-hidden="true">◷</span>
                      <div>
                        <p className="font-body-md text-body-md font-semibold">{location.hours.days}</p>
                        <p className="font-body-md text-body-md">{location.hours.time}</p>
                      </div>
                    </div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1.5 font-label-md text-label-md text-secondary">
                      <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
                      Visits by appointment recommended
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={location.mapUrl} target="_blank" rel="noreferrer" aria-label={`Get directions to ${location.name}`} className="w-full bg-teal hover:bg-secondary text-white font-label-md text-label-md py-3 px-4 rounded-[8px] transition-colors duration-200 flex items-center justify-center gap-2 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2">
                    <span aria-hidden="true">↗</span>
                    Get directions
                  </a>
                  <a href="mailto:g.technologies237@gmail.com" className="w-full border-2 border-teal text-primary-container hover:bg-teal hover:text-white font-label-md text-label-md py-3 px-4 rounded-[8px] transition-colors duration-200 flex items-center justify-center gap-2 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2">
                    Email the team
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <PageCta
        title="Planning a visit?"
        body="Send us a message before you arrive and we will make sure the right people are ready to meet you."
        actionLabel="Contact us"
        actionHref="/contact"
      />
    </main>
  );
}
