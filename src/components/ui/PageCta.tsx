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
    <section className="bg-primary-container text-white text-center px-margin-mobile md:px-margin-desktop py-16 md:py-20">
      <h2 className="font-headline-md text-headline-md mb-4">{title}</h2>
      <p className="font-body-md text-body-md text-white/80 max-w-xl mx-auto mb-8">{body}</p>
      {actionHref ? (
        <Button to={actionHref} variant="primary" size="md">
          {actionLabel}
        </Button>
      ) : (
        <Button type="button" variant="primary" size="md" onClick={() => dispatch(openQuoteModal())}>
          {actionLabel}
        </Button>
      )}
    </section>
  );
}
