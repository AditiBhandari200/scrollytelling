"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FaCircle } from "react-icons/fa6";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselApi,
} from "@/components/ui/carousel";
import { AppContext } from "@/contexts/app-context-provider";
import { redirect, useParams } from "next/navigation";
import { useArticle } from "@/hooks/useArticles";
import { ArticleData } from "@/util/supabase/fetch-article";
import { ReadMore } from "@/util/supabase/fetch-related";
import { useFetchRelated } from "@/hooks/useRelated";
import { Link as LucideLink } from "lucide-react";

// ================================
// BANNER
// ================================

const Banner = ({ data }: { data: ArticleData }) => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center gap-8 text-[#000000] sm:my-16 sm:w-10/12 sm:max-w-[1200px]">
      <div className="text-center text-2xl font-semibold sm:text-4xl mx-2">
        {data.title || ""}
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="font-semibold sm:text-lg">{data.authors[0].name || ""}</div>
        <FaCircle className="text-[6px]" />
        <div className="font-semibold sm:text-lg">{new Date(data.published_at).toLocaleDateString() || ""}</div>
        <FaCircle className="text-[6px]" />
        <div className="font-semibold sm:text-lg">
          {data.readTime || ""}
        </div>
      </div>
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          {data.poster && (
            <Image
              src={data.poster || ""}
              alt={data.title || ""}
              fill
              className="object-contain"
            />
          )}
        </AspectRatio>
      </div>
    </div>
  );
};

// ================================
// ARTICLE
// ================================

const ArticleContent = ({ content }: { content: string }) => {
  return (
    <div className="w-11/12 sm:w-9/12 sm:max-w-[1100px]">
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

// ================================
// SHARE NOW
// ================================

const ShareNow = ({ slug }: { slug: string }) => {
  const baseUrl = "https://invincibleyou.world/resources";
  const currentUrl = `${baseUrl}/${slug}`;

  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const instagramShare = `https://www.instagram.com/`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard");
  }

  return (
    <div className="my-6 flex w-11/12 flex-col gap-2 text-[--purple900] sm:w-9/12 sm:max-w-[1100px] sm:gap-2">
      <div className="text-xl font-semibold">Share it Now</div>
      <div className="flex gap-4">
        {/* LinkedIn Share Link */}
        <Link href={linkedInShare} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center rounded-full bg-[#4D4D4D]/10 p-1 transition-all duration-200 hover:scale-110 sm:p-2">
            <TiSocialLinkedin className="text-xl" />
          </div>
        </Link>

        {/* Instagram Link */}
        <Link href={instagramShare} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center rounded-full bg-[#4D4D4D]/10 p-1 transition-all duration-200 hover:scale-110 sm:p-2">
            <FaInstagram className="text-xl" />
          </div>
        </Link>

        {/* Copy Resource Link */}
        <div className="flex items-center rounded-full bg-[#4D4D4D]/10 p-1 transition-all duration-200 hover:scale-110 sm:p-2 cursor-pointer" onClick={handleCopyLink}>
          <LucideLink size={20} />
        </div>
      </div>
    </div>
  );
};

// ================================
// AUTHOR
// ================================

const Author = ({ data }: { data: ArticleData }) => {
  return (
    <div className="sm:w-sm:w-9/12 my-6 flex w-11/12 flex-col gap-2 text-black sm:max-w-[1100px] sm:gap-4">
      <div className="flex max-w-[100px] items-center overflow-hidden rounded-full">
        <AspectRatio ratio={1 / 1}>
          <Image src={data.authors[0].image || ""} alt={data.authors[0].name || ""} fill className="object-contain bg-slate-300" />
        </AspectRatio>
      </div>
      <div className="flex flex-col sm:gap-2">
        <div className="text-xl font-semibold sm:text-2xl">
          {data.authors[0].name || ""}
        </div>
        <div className="text-lg">{data.authors[0].designation || ""}</div>
        <div>{data.authors[0].bio || ""}</div>
      </div>
    </div>
  );
};

// ================================
// RELATED RESOURCES
// ================================

const RelatedResourcesItem = ({
  item,
}: {
  item: ReadMore;
}) => {
  return (
    <Link href={`/resources/${item.slug}`}>
      <Card className="flex flex-col gap-2 rounded-sm p-4 shadow-none">
        <div className="flex items-center justify-center overflow-hidden rounded-md">
          <AspectRatio ratio={4 / 3}>
            {item.poster && (
              <Image src={item.poster || ""} alt={item.title || ""} fill sizes="100vw" className="object-contain" />
            )}
          </AspectRatio>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{item.type}</div>
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="h-[100px] overflow-hidden text-ellipsis text-sm">
            {item.details}
          </div>
        </div>
      </Card>
    </Link>
  );
};

const RelatedResourcesCarousel = ({ data }: { data: ReadMore[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-4 w-8/12 sm:w-10/12">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.title}
              className="sm:basis-1/2 md:basis-1/3"
            >
              <RelatedResourcesItem item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className="mt-4 flex flex-col items-center justify-center gap-6 sm:mt-6">
        <div className="flex h-[6px] flex-row items-center justify-center gap-1">
          {data.map((_, index) => (
            <div
              key={index}
              data-current={current === index + 1}
              className="h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RelatedResources = ({ data }: { data: ReadMore[] }) => {
  return (
    <div className="my-16 flex w-full flex-col items-center justify-center gap-4 text-[--text-color] sm:w-10/12 sm:max-w-[1200px]">
      <div className="mb-4 flex w-full flex-col items-center justify-start gap-4 border-b-[1px] border-[#4d4d4d]/20 sm:flex-row sm:gap-4 sm:border-0">
        <div className="mb-4 text-2xl font-semibold sm:mb-0">
          What&apos;s New
        </div>
        <div className="hidden h-[1px] flex-1 bg-[#4d4d4d]/40 sm:block"></div>
      </div>
      <RelatedResourcesCarousel data={data} />
    </div>
  );
};

function Article() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/resources/article", name: "Article" });
  }, [setActiveRoute]);

  const params = useParams();
  const slug = params?.slug as string | undefined;

  if (!slug) {
    redirect("/resources");
  }

  const { data: articleData, loading: articleLoading } = useArticle(slug);
  const { data: relatedData, loading: relatedLoading } = useFetchRelated();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      {articleLoading && <LoaderCircle className="animate-spin my-24" />}
      {articleData && <>

        <Banner data={articleData} />
        <ArticleContent content={articleData.content || ""} />
        <ShareNow slug={articleData.slug || ""} />
        <Author data={articleData} />
      </>
      }
      {relatedLoading && <LoaderCircle className="animate-spin my-24" />}
      {relatedData && <RelatedResources data={relatedData} />}
      <Footer />
    </div>
  );
}

export default Article;
