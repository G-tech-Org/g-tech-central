import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import Button from './Button';

interface PageCtaProps {
  title: string;
  body: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function PageCta({ title, body, actionLabel = 'Get a Quote', actionHref }: PageCtaProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-20">
      <div className="max-w-container-max mx-auto overflow-hidden rounded-[2rem] bg-coral text-on-secondary px-8 py-14 md:px-16 md:py-20 text-center relative">
        <div className="absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="relative">
          <p className="font-label-md uppercase tracking-[0.16em] mb-4 opacity-70">Version 02</p>
          <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile mb-4">{title}</h2>
          <p className="font-body-md text-body-md max-w-xl mx-auto mb-8 opacity-80">{body}</p>
          {actionHref ? (
            <Button to={actionHref} variant="secondary" size="md">
              {actionLabel}
            </Button>
          ) : (
            <Button type="button" variant="secondary" size="md" onClick={() => dispatch(openQuoteModal())}>
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
