// JSON-LD builders for the service pages. @ids point at the homepage graph.
export const SITE = "https://www.techpersonastudio.com";
export const BUSINESS = { "@id": `${SITE}/#business` };
export const FOUNDER = { "@id": `${SITE}/#founder` };

export interface Faq { q: string; a: string; html?: string }

export const crumbs = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name, item: `${SITE}${path}` },
  ],
});

export const faqPage = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const service = (o: Record<string, unknown> & { path: string }) => {
  const { path, ...rest } = o;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}${path}#service`,
    url: `${SITE}${path}`,
    provider: BUSINESS,
    ...rest,
  };
};

export const offer = (name: string, price: number, extra: Record<string, unknown> = {}) => ({
  "@type": "Offer",
  name,
  price: String(price),
  priceCurrency: "USD",
  ...extra,
});
