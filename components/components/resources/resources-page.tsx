"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuArrowDownRight } from "react-icons/lu";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Separator } from "@/components/ui/separator";
import ReactPlayer from "react-player";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { AppContext } from "@/contexts/app-context-provider";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IoSearch } from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import { FeaturedArticles, FeaturedVideos } from "@/util/supabase/fetch-featured";
import { useFetchFeatured } from "@/hooks/fetch-featured";
import { ArrowDownRight, LoaderCircle, X } from "lucide-react";
import { useQueryResources } from "@/hooks/useResources";
import { ResourceList } from "@/util/supabase/query-resource";

const formSchema = z.object({
  email: z.string().email(),
});

const searchSchema = z.object({
  search: z.string(),
});

const links = [
  {
    id: 1,
    title: "The Power of Social Identity",
    link: "https://www.youtube.com/watch?v=0LE0trd740Q",
  },
  {
    id: 2,
    title: "The Power of Social Identity",
    link: "https://www.youtube.com/watch?v=0LE0trd740Q",
  },
  {
    id: 3,
    title: "The Power of Social Identity",
    link: "https://www.youtube.com/watch?v=0LE0trd740Q",
  },
  {
    id: 4,
    title: "The Power of Social Identity",
    link: "https://www.youtube.com/watch?v=0LE0trd740Q",
  },
];

// ==============================
// Banner
// ==============================

const Banner = () => {
  return (
    <div className="my-8 flex w-11/12 flex-col items-start justify-center gap-2 text-center sm:my-16 sm:max-w-[1200px] sm:text-left">
      <span className="w-full text-2xl font-semibold text-[var(--purple900)]">
        Insights. Inspiration. Impact.
      </span>
      <span className="hidden max-w-[600px] text-lg text-[var(--text-color)] sm:block">
        Become invincible with inspiring stories, growth tips, and insights to
        challenge your perspective - empowering you on your journey
      </span>
    </div>
  );
};

// ==============================
// Highlight Resource
// ==============================

const HighlightResource = (article: FeaturedArticles) => {
  return (
    <Link href={`/resources/${article.slug}`}>
      <Card className="overflow-hidden rounded-none border-none shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-200 sm:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] sm:hover:scale-105">
        <div className="relative border-[#4d4d4d]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={article.image || ""}
              alt="resource"
              fill
              className="object-contain"
            />
          </AspectRatio>
        </div>
        <CardHeader className="pb-4 text-[var(--text-color)]">
          <CardTitle className="text-lg">{article.title}</CardTitle>
          <p className="flex items-center gap-2 text-base">
            {article.author}
            <FaCircle className="text-[4px]" />
            {article.readTime}
          </p>
        </CardHeader>
        <CardContent className="pb-2">
          <CardDescription className="text-base leading-5">
            {article.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-end">
          <LuArrowDownRight size={24} />
        </CardFooter>
      </Card>
    </Link>
  );
};

const OtherResource = (article: FeaturedArticles) => {

  const ClipDescription = (description: string) => {
    const clipLength = 90;

    if (description.length > clipLength) {
      return description.substring(0, clipLength) + "...";
    }
    return description;
  };
  return (
    <Link href={`/resources/${article.slug}`}>
      <Card className="flex flex-row overflow-hidden p-2 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] transition-all duration-200 sm:space-y-0 sm:shadow-none sm:hover:scale-105 rounded-md border-[1px] border-[#4d4d4d]/10">
        <div className="mt-6 basis-1/3 sm:mt-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={article.image || ""}
              alt="resource"
              fill
              className="object-contain"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col justify-center text-[var(--text-color)] basis-2/3">
          <CardHeader className="pb-2 sm:pt-0">
            <CardTitle className="text-lg font-semibold leading-6">
              {article.title}
            </CardTitle>
            <p className="flex items-center gap-2 text-small sm:text-base">
              {article.author}
              <FaCircle className="text-[4px]" />
              {article.readTime}
            </p>
          </CardHeader>
          <CardContent className="flex-shrink pb-2">
            <CardDescription className="overflow-ellipsis text-base leading-5">
              {ClipDescription(article.description)}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex items-center justify-end sm:hidden">
            <LuArrowDownRight size={18} />
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

const ResourcesSection = ({ articles }: { articles: FeaturedArticles[] }) => {
  return (
    <div className="my-8 flex w-11/12 max-w-[1200px] flex-col items-start justify-center gap-8 sm:mb-24">
      <div className="flex w-full items-center justify-between">
        <span className="text-2xl font-semibold mx-auto sm:mx-0">Blog & Insights</span>
        <div className="hidden sm:flex"><ViewAll type="text" /></div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:items-start sm:gap-12">
        <div className="basis-2/5">{HighlightResource(articles[0])}</div>
        <div className="basis-1/2 flex flex-col gap-6 sm:gap-12 sm:hidden">
          {HighlightResource(articles[1])}
          {HighlightResource(articles[2])}
          {HighlightResource(articles[3])}
          <ViewAll type="text" />
        </div>
        <div className="basis-1/2 flex-col hidden sm:flex sm:gap-6">
          {OtherResource(articles[1])}
          {OtherResource(articles[2])}
          {OtherResource(articles[3])}
        </div>
      </div>
    </div>
  );
};

// ==============================
// Video Carousel
// ==============================

const VideoCard = (link: (typeof links)[0], index: number, current: number) => {
  const [playing, setPlaying] = useState(false);
  return (
    <Card className="flex flex-col items-center justify-center gap-4 rounded-none border-none bg-transparent shadow-none">
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer
          playing={playing && current === index + 1}
          url={link.link}
          width="100%"
          height="100%"
          onStart={() => setPlaying(true)}
          fallback={<div>Loading...</div>}
        />
      </AspectRatio>
      <span className="text-lg font-semibold">{link.title}</span>
    </Card>
  );
};

const VideoCarousel = ({ videos }: { videos: FeaturedVideos[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    }),
  );

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
    <div className="mb-8 flex w-screen flex-col items-center justify-center gap-6 sm:mb-24 sm:w-10/12 sm:max-w-[1200px]">
      <div className="flex w-full items-center justify-between sm:items-start">
        <h1 className="mb-6 w-full text-center text-2xl font-semibold sm:text-left">
          Videos & Podcasts
        </h1>
        <div className="hidden sm:flex">
          <ViewAll type="text" />
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={() => plugin.current?.stop()}
        onMouseLeave={() => plugin.current?.reset()}
        className="mx-12 w-9/12 sm:w-11/12"
      >
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={video.id} className="3">
              {VideoCard(video, index, current)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className="hidden flex-col items-center justify-center gap-6 sm:flex">
        <div className="flex h-[6px] flex-row items-center justify-center gap-1">
          {links.map((_, index) => (
            <div
              key={index}
              data-current={current === index + 1}
              className="h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center sm:hidden">
        <ViewAll type="text" />
      </div>
    </div>
  );
};

// ==============================
// Newsletters Section
// ==============================

const NewslettersSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center sm:my-24 sm:w-10/12 sm:max-w-[1200px] sm:flex-row">
      <div className="mb-24 mt-10 flex w-full flex-col items-center justify-center gap-8 sm:items-start">
        <span className="text-2xl font-semibold text-[var(--purple900)]">
          Get Monthly Newsletters
        </span>
        <div className="flex w-4/5 basis-3/5 flex-col items-center justify-center gap-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        className="min-h-[48px] border-[#680087B3] text-lg"
                        placeholder="Enter your email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                onClick={() => form.handleSubmit(onSubmit)}
                className="w-1/2 rounded-md bg-[#680087] py-6 text-lg text-white transition-all duration-200 hover:bg-[#680087]/80 active:scale-95"
              >
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden w-full basis-2/5 sm:block">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={"/r1.png"}
            alt="newsletter"
            fill
            className="object-contain"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

// ==============================
// View All and Modal
// ==============================

const ViewAll = ({ type }: { type: "text" }) => {
  return (
    <Dialog>
      <DialogTrigger className="hover:cursor-pointer" asChild>
        <div>
          <Button
            data-type={type}
            className="w-full rounded-xl bg-[#6800871A] py-6 text-lg font-semibold text-[var(--purple900)] shadow-none transition-all duration-200 hover:bg-[#680087] hover:text-white data-[type='text']:bg-transparent data-[type='text']:shadow-none data-[type='text']:hover:bg-transparent data-[type='text']:hover:text-[var(--purple900)] sm:hidden"
          >
            View All
            <FaChevronRight data-type={type} />
          </Button>
          <div className="hidden justify-end gap-2 sm:flex">
            <div className="w-max">View All</div>
            <div className="flex h-6 w-8 items-center justify-center rounded-lg bg-[#680087]">
              <GoArrowRight className="text-white" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <ViewAllModal />
    </Dialog>
  );
};

const ViewAllModal = () => {
  const { data, loading, search, clear } = useQueryResources();
  return (
    <DialogContent className="w-11/12 sm:w-1/2 rounded-md max-h-11/12">
      <DialogHeader className="flex flex-col items-start justify-start gap-2">
        <DialogTitle className="text-xl font-semibold">
          View All Resources
        </DialogTitle>
        <SearchBar search={search} clear={clear} />
      </DialogHeader>


      <div className="flex flex-col gap-4 overflow-auto h-96 sm:pr-2">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <LoaderCircle className="animate-spin text-gray-500" />
          </div>
        ) : (
          data && data.map((item, index) => <ViewAllListItem key={index} item={item} />)
        )}
      </div>
    </DialogContent>
  );
};

const ViewAllListItem = ({ item }: { item: ResourceList }) => {
  return (
    <Card className="flex p-2 rounded-md w-full shadow-none flex-col justify-between items-end gap-2">
      <div className="flex flex-col items-start justify-start w-full">
        <span className="text-lg font-semibold">{item.title}</span>
        {item.author && <span className="text-sm text-[#4d4d4d]">{item.author} | {item.time_to_read}</span>}
      </div>
      <ListButton type={item.category as "video" | "article"} link={item.link} slug={item.slug} />
    </Card>
  );
};

const ListButton = ({ type, link, slug }: { type: ResourceList["category"], link?: string, slug?: string }) => {
  const createdLink = (type: ResourceList["category"], link?: string, slug?: string) => {
    if (type === "video") {
      return link || "";
    } else {
      return `/resources/${slug}`;
    }
  };
  return (
    <Link href={createdLink(type, link, slug)} target={type === "video" ? "_blank" : "_self"}>
      <Button variant="outline">
        {type === "video" ? "Watch" : "Read"}
        <ArrowDownRight />
      </Button>
    </Link>
  );
};

const SearchBar = ({ search, clear }: { search: (query: string) => void, clear: () => void }) => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    form.reset();
    clear();
  };

  const onSubmit = async (data: z.infer<typeof searchSchema>) => {
    search(data.search);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input {...field} placeholder="Search" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#680087] text-white hover:bg-[#680087]/80"
        >
          <IoSearch />
        </Button>

        <Button onClick={(e) => handleClear(e)} variant="outline">
          <X />
        </Button>
      </form>
    </Form>
  );
};

function ResourcesPage() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/resources", name: "Resources" });
  }, [setActiveRoute]);

  const { data, loading } = useFetchFeatured();

  console.log(data);

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <Header />
      <Banner />
      {loading && <LoaderCircle className="animate-spin my-48" />}
      {data && <>
        <ResourcesSection articles={data?.articles || []} />
        <Separator className="w-11/12 bg-[#4d4d4d]/40 sm:max-w-[1200px]" />
        <div className="my-16 flex w-full justify-center bg-gradient-to-b from-white to-[#DEC8E5] sm:mt-16">
          <VideoCarousel videos={data?.videos || []} />
        </div>
      </>
      }
      <NewslettersSection />
      <Footer />
    </div>
  );
}

export default ResourcesPage;
