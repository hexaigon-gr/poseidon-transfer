import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog";
import { tours } from "@/lib/data/tours";
import { DOMAIN } from "@/lib/data/config";
import {
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  jsonLdScript,
} from "@/lib/seo/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const revalidate = 86400;

export async function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { locale: "en-US", slug: post.slug },
    { locale: "el", slug: post.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }

  const url = `${DOMAIN}/${locale}/blog/${slug}`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/blog/${slug}`,
        el: `${DOMAIN}/el/blog/${slug}`,
        "x-default": `${DOMAIN}/en-US/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      locale,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: post.image.startsWith("http") ? post.image : `${DOMAIN}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image.startsWith("http") ? post.image : `${DOMAIN}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const url = `${DOMAIN}/${locale}/blog/${slug}`;

  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: `${DOMAIN}/${locale}` },
    { name: "Blog", url: `${DOMAIN}/${locale}/blog` },
    { name: post.title, url },
  ]);

  const article = articleSchema({
    title: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    url,
  });

  const faqLd = post.faq.length > 0 ? faqPageSchema(post.faq) : null;

  const relatedTours = tours.filter((t) => post.relatedTourSlugs.includes(t.slug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(article)} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqLd)} />}

      <article>
        {/* Hero */}
        <header className="relative h-[45vh] w-full">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />{" "}
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {post.readMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Intro */}
          <div className="prose prose-invert max-w-none mb-10 space-y-4">
            {post.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <section key={i} className="prose prose-invert max-w-none mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.list && section.list.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                  {section.list.map((item, li) => (
                    <li key={li}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQ */}
          {post.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
              <div className="divide-y divide-border bg-card rounded-xl border p-2 md:p-6">
                {post.faq.map((item) => (
                  <details key={item.question} className="group py-4 px-4 md:px-2">
                    <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-medium hover:text-primary transition-colors">
                      <span>{item.question}</span>
                      <span className="text-primary text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related tours */}
          {relatedTours.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Book the tour</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedTours.map((tour) => (
                  <Card key={tour.slug} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <Link href={`/${locale}/tour/${tour.slug}`}>
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {tour.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {tour.subtitle}
                        </p>
                        <div className="flex justify-between items-center pt-2 border-t border-border">
                          <span className="text-sm">
                            <span className="font-bold text-primary">
                              From ${tour.costUSD || tour.cost}
                            </span>{" "}
                            <span className="text-xs text-muted-foreground">· {tour.hours}h</span>
                          </span>
                          <span className="text-sm text-primary font-medium">View →</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href={`/${locale}/blog`}
              className="text-primary hover:underline font-medium"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
