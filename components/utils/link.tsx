import NextLink, { LinkProps } from 'next/link'
import { Lang } from '@/app/[lang]/page'

export const Link = ({ href, lang, children, ...props }: LinkProps & { lang: Lang, children?: React.ReactNode | undefined, className?: string }) => {
    const hrefWithoutLang = (href as string).replace(/^\/(en|ru)/, '');
    const enrichedHref = `/${lang}${hrefWithoutLang}`;
    return (
      <NextLink href={enrichedHref} {...props}>
        {children}
      </NextLink>
    );
  };