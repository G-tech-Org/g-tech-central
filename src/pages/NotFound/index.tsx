import { Button } from '@components/ui';

export default function NotFound() {
  return (
    <main className="bg-surface min-h-[60vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop py-24">
      <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">404</p>
      <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">
        Page not found
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8">
        That address is not in use. Head home or see what we can take on.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button to="/" variant="primary">
          Back home
        </Button>
        <Button to="/services" variant="ghost">
          View services
        </Button>
      </div>
    </main>
  );
}
