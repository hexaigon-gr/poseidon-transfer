import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog";
import { DOMAIN } from "@/lib/data/config";
import { breadcrumbListSchema, jsonLdScript } from "@/lib/seo/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/blog`;
  const title = "Athens & Greece Travel Guides | Poseidon Transfers Blog";
  const description =
    "Travel guides for private day tours, archaeological sites, and luxury travel in Athens and Greece. Written by local drivers and tour operators.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/blog`,
        el: `${DOMAIN}/el/blog`,
        "x-default": `${DOMAIN}/en-US/blog`,
      },
    },
    openGraph: { title, description, url, type: "website", locale },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/blog`;

  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: `${DOMAIN}/${locale}` },
    { name: "Blog", url },
  ]);

  const sorted = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Athens & Greece travel guides</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical guides to Greece&apos;s archaeological sites, day trips from Athens, and what
            to expect when you go — written by the people who drive the routes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((post) => (
            <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <Link href={`/${locale}/blog/${post.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />{" "}
                      {new Date(post.datePublished).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readMinutes} min read
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="mt-3 text-sm text-primary font-medium group-hover:translate-x-1 transition-transform inline-block">
                    Read article →
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
