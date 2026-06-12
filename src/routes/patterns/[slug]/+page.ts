import { error } from '@sveltejs/kit';
import { getPatternPage, patternPages } from '$lib/patterns';

export const prerender = true;

export function entries() {
  return patternPages.map((page) => ({ slug: page.slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const pattern = getPatternPage(params.slug);
  if (!pattern) error(404, 'Pattern not found');

  const related = pattern.related
    .map((slug) => getPatternPage(slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pattern.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return { pattern, related, faqSchema };
}
