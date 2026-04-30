import { MetadataRoute } from "next";
import { tours } from "@/lib/data/tours";
import { blogPosts } from "@/lib/data/blog";
import { DOMAIN } from "@/lib/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DOMAIN;
  const lastModified = new Date();
  const locales = ["en-US", "el"] as const;

  const tourUrls = tours.flatMap((tour) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/tour/${tour.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  const blogUrls = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.dateModified ? new Date(post.dateModified) : new Date(post.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const staticPages = [
    {
      url: `${baseUrl}/en-US`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/el`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/private-tours-athens`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/services/athens-airport-private-transfer`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/booking-wizard`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/terms`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return [...staticPages, ...tourUrls, ...blogUrls];
}
