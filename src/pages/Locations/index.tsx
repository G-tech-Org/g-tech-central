import { PageCta } from '@components/ui';

interface LocationInfo {
  name: string;
  address: string[];
  hours: string[];
  area: string;
  embedUrl: string;
  mapUrl: string;
}

const LOCATIONS: LocationInfo[] = [
  {
    name: 'Bambili HQ',
    address: ['University Street, Next to Silicon Valley Hub', 'Bambili, North West Region, Cameroon'],
    hours: ['Monday - Friday', '10:00 AM - 6:00 PM'],
    area: 'Bambili',
    embedUrl: 'https://maps.google.com/maps?q=Bambili,Cameroon&t=&z=14&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bambili%2C%20Cameroon',
  },
  {
    name: 'Bamenda Branch',
    address: ['Commercial Avenue, Tech Plaza Floor 3', 'Bamenda, North West Region, Cameroon'],
    hours: ['Monday - Saturday', '9:00 AM - 5:00 PM'],
    area: 'Bamenda',
    embedUrl: 'https://maps.google.com/maps?q=Bamenda,Cameroon&t=&z=14&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bamenda%2C%20Cameroon',
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
        <header className="mb-12 text-center md:text-left">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-4">
            Our Locations
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Visit our offices in Bambili and Bamenda. We&apos;re ready to discuss your next big tech project.
          </p>
        </header>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {LOCATIONS.map((location) => (
            <article
              key={location.name}
              className="bg-white rounded-[16px] soft-shadow overflow-hidden hover:-translate-y-1 transition-all duration-300 border-b-2 border-transparent hover:border-teal flex flex-col"
            >
              {/* Actual Map Embed */}
              <LocationMap location={location} />

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary-container mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                    {location.name}
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline mt-1">map</span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {location.address[0]}
                        <br />
                        {location.address[1]}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline mt-1">schedule</span>
                      <div>
                        <p className="font-body-md text-body-md text-on-surface-variant font-semibold">{location.hours[0]}</p>
                        <p className="font-body-md text-body-md text-on-surface-variant">{location.hours[1]}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-teal hover:bg-secondary text-white font-label-md text-label-md py-3 px-4 rounded-[8px] transition-colors duration-200 flex items-center justify-center gap-2 font-bold"
                >
                  <span className="material-symbols-outlined">directions</span>
                  Open in Maps
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <PageCta
        title="Planning a visit?"
        body="Send us a message before you arrive and we will make sure the right people are ready to meet you."
        actionLabel="Contact us"
      />
    </main>
  );
}
