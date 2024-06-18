import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

// Centralized SEO data
const SEO_DATA = {
  "/": {
    title: "Home Helmet",
    description: "Saran home helmet",
    keywords: "home, helmet, Saran, pets, products",
    og: {
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image",
      url: "http://localhost:3000/",
      site_name: "Pets - Products",
      locale: "en_US",
      type: "article"
    },
    canonical: "http://localhost:3000/",
    robots: "index, follow",
    author: "Saran",
    publisher: "Saran's Company"
  },
  "/about": {
    title: "About Helmet",
    description: "Saran about helmet",
    keywords: "about, helmet, Saran, pets, products",
    og: {
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image",
      url: "http://localhost:3000/about",
      site_name: "Pets - Products",
      locale: "en_US",
      type: "article"
    },
    canonical: "http://localhost:3000/about",
    robots: "index, follow",
    author: "Saran",
    publisher: "Saran's Company"
  },
  "/contact": {
    title: "Contact Helmet",
    description: "Saran contact helmet",
    keywords: "contact, helmet, Saran, pets, products",
    og: {
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image",
      url: "http://localhost:3000/contact",
      site_name: "Pets - Products",
      locale: "en_US",
      type: "article"
    },
    canonical: "http://localhost:3000/contact",
    robots: "index, follow",
    author: "Saran",
    publisher: "Saran's Company"
  }
};

// Default SEO data
const DEFAULT_SEO = {
  title: "Default Helmet",
  description: "Default description",
  keywords: "default, helmet, Saran, pets, products",
  og: {
    title: "Default Title",
    description: "Default description",
    image: "default_url_to_image",
    url: "http://localhost:3000/default",
    site_name: "Default Site",
    locale: "en_US",
    type: "article"
  },
  canonical: "http://localhost:3000/default",
  robots: "index, follow",
  author: "Saran",
  publisher: "Saran's Company"
};

// Common meta tags
const COMMON_META_TAGS = {
  twitter: {
    card: "summary_large_image",
    site: "@user",
    creator: "@user"
  },
  fb: {
    app_id: "ID_APP_FACEBOOK"
  },
  youtube: {
    channel: "CHANNEL_ID",
    video: "VIDEO_ID"
  }
};

const SEO = () => {
  const location = useLocation();
  const seo = SEO_DATA[location.pathname] || DEFAULT_SEO;
  const mergedSEO = {
    ...seo,
    twitter: { ...COMMON_META_TAGS.twitter, ...seo.twitter },
    fb: { ...COMMON_META_TAGS.fb, ...seo.fb },
    youtube: { ...COMMON_META_TAGS.youtube, ...seo.youtube }
  };

  return (
    <Helmet>
      <title>{mergedSEO?.title}</title>
      <meta name="description" content={mergedSEO?.description} />
      <meta name="keywords" content={mergedSEO?.keywords} />
      <meta name="twitter:card" content={mergedSEO?.twitter?.card} />
      <meta name="twitter:site" content={mergedSEO?.twitter?.site} />
      <meta name="twitter:creator" content={mergedSEO?.twitter?.creator} />
      <meta name="twitter:title" content={mergedSEO?.twitter?.title} />
      <meta
        name="twitter:description"
        content={mergedSEO?.twitter?.description}
      />
      <meta name="twitter:image" content={mergedSEO?.twitter?.image} />
      <meta property="og:title" content={mergedSEO?.og?.title} />
      <meta property="og:description" content={mergedSEO?.og?.description} />
      <meta property="og:image" content={mergedSEO?.og?.image} />
      <meta property="og:url" content={mergedSEO?.og?.url} />
      <meta property="og:site_name" content={mergedSEO?.og?.site_name} />
      <meta property="og:locale" content={mergedSEO?.og?.locale} />
      <meta property="og:type" content={mergedSEO?.og?.type} />
      <meta property="fb:app_id" content={mergedSEO?.fb?.app_id} />
      <meta property="youtube:channel" content={mergedSEO?.youtube?.channel} />
      <meta property="youtube:video" content={mergedSEO?.youtube?.video} />
      <link rel="canonical" href={mergedSEO?.canonical} />
      <meta name="robots" content={mergedSEO?.robots} />
      <meta name="author" content={mergedSEO?.author} />
      <meta name="publisher" content={mergedSEO?.publisher} />
    </Helmet>
  );
};

export default SEO;
