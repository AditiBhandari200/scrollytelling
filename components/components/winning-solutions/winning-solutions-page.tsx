"use client";

import React, { useEffect, useContext, useRef } from "react";
import { AppContext } from "@/contexts/app-context-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useSearchParams } from "next/navigation";
import { ReadMore } from "@/components/ui/read-more";
// =============== Custom Card ===============

const Cards = [
  {
    id: 1,
    num: "1500+",
    desc: "leaders ignited",
  },
  {
    id: 2,
    num: "500+",
    desc: "leaders elevated",
  },
  {
    id: 3,
    num: "300+",
    desc: "top leaders and managers aligned",
  },
  {
    id: 4,
    num: "1000+",
    desc: "inclusive mindsets cultivated",
  },
  {
    id: 5,
    num: "25+",
    desc: "organizations transformed",
  },
];

const customCard = (card: (typeof Cards)[number]): React.ReactNode => {
  return (
    <Card
      key={card.id}
      className="flex h-[140px] min-w-[150px] max-w-[165px] flex-1 flex-col items-center justify-center gap-2 border-2 border-[#68008780] px-2 py-6 shadow-none sm:h-[180px] sm:w-[200px] sm:max-w-[250px] sm:border-none sm:shadow-xl"
    >
      <CardHeader className="flex flex-1 items-center justify-center p-0">
        <span className="text-3xl font-semibold text-[#680087] sm:text-4xl sm:text-[--text-color]">
          {card.num}
        </span>
      </CardHeader>
      <CardContent className="text-md flex flex-1 items-center justify-center p-0 text-center text-[--text-color] sm:text-lg">
        {card.desc}
      </CardContent>
    </Card>
  );
};

const banner = () => {
  return (
    <div className="flex h-[350px] w-11/12 max-w-[1200px] flex-col items-center gap-5 rounded-3xl bg-[#680087] sm:h-[300px] sm:gap-8">
      <span className="mt-[80px] text-3xl font-semibold tracking-wider text-white sm:text-4xl">
        Invincible Impact
      </span>
      <span className="w-9/12 text-center text-lg text-white sm:text-xl">
        Give your leaders and teams the Invincible advantage. Our results speak
        for themselves.
      </span>
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="bor my-6 mb-16 flex w-full flex-col items-center justify-center sm:my-28">
      {banner()}
      <div className="mt-[-70px] flex w-10/12 flex-row flex-wrap items-center justify-center gap-2 sm:max-w-[1100px] sm:justify-between sm:gap-4">
        {Cards.map((card) => customCard(card))}
      </div>
    </div>
  );
};

// =============== Carousel ===============

const feedbacks = [
  {
    id: 1,
    name: "Prem",
    location: "India",
    designation: "Director of Engineering",
    feedback:
      "Shweta is an exceptional leadership coach who transforms the way leaders think and act. Her guidance helps find positives in challenges, handle crises with clarity, and embrace growth through self-reflection. With her empathy, encouragement, and unwavering support, she inspires leaders to unlock their full potential and thrive professionally.",
    type: "ALIGN",
    company: "Disprz",
    client: "/c3.png",
  },
  {
    id: 90,
    name: "Milan Shah",
    designation: "CFO",
    company: "Mafatlal",
    feedback:
      "The strategy workshop led by Shweta was a transformative experience for our team. Her unique approach helped us clarify our strategic direction and strengthened our sense of connection and alignment as a team. Shweta is a fabulous trainer when it comes to energising the team and igniting their potential. What impresses me is her unconventional and humane approach to mentoring and coaching assignments which help people to deeply reflect on their own strengths, weaknesses & hidden potential in their leadership journey.",
    type: "ALIGN",
    client: "/c3.png",
  },
  {
    id: 2,
    name: "Kuljit Chadha & Subbu Viswanathan",
    location: "India",
    designation: "Co-Founders",
    feedback:
      "Shweta and Invincible you put together a fantastic program built on their change agile leader framework. We have seen transformation in 2 quarters itself. We are already seeing a lot of change in how the leadership team is approaching day - to day function.",
    type: "ALIGN",
    company: "Disprz",
    client: "/c3.png",
  },
  {
    id: 3,
    name: "Nikhil Prabhu",
    location: "India",
    designation: "Chief Talent Officer",
    feedback:
      "The Invincible you team led by Shweta is helping us put the psychological founding blocks of the 'new ways of working' for a critical business function. The Invincible you team's capabilities in diagnostics, facilitation and follow through have been invaluable in helping us move the needle on the desired changes.",
    type: "ALIGN",
    client: "/c3.png",
    company: "Piramal Enterprises",
  },
  {
    id: 4,
    name: "Avani Vansia",
    location: "India",
    designation: "Sr. Dy. General Manager",
    feedback:
      "It was our first Leadership Development Program for Women. The feedback of the participants proves that the program has met the expectations of the organization. The journey helps each individual to recognize and manage their unique challenges in the path to reaching their true leadership potential. The highlight really is the beautiful experience and the feedback of the participants, who are able to feel the shift in their identity.",
    type: "IGNITE",
    client: "/c6.png",
    company: "Larsen and Toubro",
  },
  {
    id: 5,
    name: "Rajiv Sharma",
    location: "India",
    designation: "CHRO",
    feedback:
      "Shweta helped our women leaders to understand the neuroscience of stereotype-threat, the origins of patriarchy and the impact of sometimes being the only woman in the room. She provided tips on how to use networking and increase self-advocacy. The program was well received and it helped Aristocrat India by increasing the number of women in our leadership pipeline as well as towards the long-term strategy of creating a more gender-balanced workforce at Aristocrat India.",
    type: "IGNITE",
    client: "/c2.png",
    company: "Aristocrat",
  },
  {
    id: 6,
    name: "Shirshendu Pandey",
    location: "India",
    designation: "Head of L&OD",
    feedback:
      "The journey is tailored in a manner that unleashes the hidden leadership potential of all participants. The program fosters an environment where women can experiment with knowledge. The participants of the program were able to gain strength and confidence from the overall experience.",
    type: "IGNITE",
    client: "/c2.png",
    company: "Aristocrat",
  },
  {
    id: 7,
    name: "Debosree Roy",
    location: "India",
    designation: "Snr. Principal Architect",
    feedback:
      "My reflections became a powerful engine for my change. The program truly helped me temper the steel within to allow me the strength & tenacity to move forward in life with a lot of confidence, positivity & inspiration.",
    type: "IGNITE",
    client: "/c7.png",
    company: "Larsen and Toubro",
  },
  {
    id: 8,
    name: "Monika",
    location: "India",
    designation: "Team Lead",
    feedback:
      "The program was completely based upon true experiences and very practical. It had given me a clear insight about the real life challenges faced by women across industries to rise up in their career. The program has given me a new perspective to overcome my difficulties and challenges. It was structured in such a way that I was able to connect it with my work and it guided me to nourish my leadership.",
    type: "IGNITE",
    client: "/c2.png",
    company: "Aristocrat",
  },
  {
    id: 9,
    name: "Senior Leadership Team",
    location: "India",
    feedback:
      "There is openness and candor throughout the workshop. Participants were able to appreciate each other's point of view, which yields better results. The sessions gradually triggered the thought process towards diversity & inclusion. The workshop helps to concretely establish an inclusive way of communicating within groups.",
    type: "AMPLIFY",
    client: "/c6.png",
    company: "Larsen and Toubro",
  },
  {
    id: 10,
    name: "Preeti Sharma",
    location: "India",
    designation: "CHRO",
    feedback:
      "Their expertly facilitated session created a transformative environment that brought out unprecedented levels of engagement and openness within our team. What struck me most was their ability to create a safe space where team members felt comfortable sharing perspectives and experiences they had never voiced before. The facilitators demonstrated exceptional skill in navigating sensitive conversations while maintaining professionalism and ensuring everyone felt heard and valued. Our team's enthusiasm and the tangible results we've achieved are a testament to Team Invincible you's expertise in this space.",
    type: "AMPLIFY",
    client: "/c6.png",
    company: "Hines",
  },
  {
    id: 11,
    name: "Arijit",
    location: "India",
    designation: "Data Engineer",
    feedback:
      "The leadership program was very useful and helped us to understand the importance of authenticity and inclusion in the workplace. The sessions were interactive and engaging, and the participants were able to apply the learnings in their daily work.",
    type: "ELEVATE",
    client: "/c9.png",
    company: "Walmart",
  },
  {
    id: 12,
    name: "Smita",
    location: "India",
    designation: "VP Finance",
    feedback:
      "The leadership program has offered a fresh perspective on navigating challenges and difficulties. I gained valuable insights into my personal leadership style and appreciated the program's structured approach, which enabled me to seamlessly connect the learnings to my professional context",
    type: "ELEVATE",
    client: "/c8.png",
    company: "Mafatlal Industries",
  },
  {
    id: 13,
    name: "Priyavrata Mafatlal",
    designation: "Managing Director",
    feedback:
      "Invincible YOU has been instrumental in helping us rewire the way we think about strategy and execution. What stood out was their ability to move beyond frameworks—to ignite mindset shifts, embed accountability, and create real alignment across businesses. Through Project Prism, leadership interventions, and Balanced Scorecard rollouts, they brought uncommon clarity to complex problems. But more importantly, they helped us operationalize ambition—translating vision into visible traction. They have been a force multiplier for our transformation journey.",
    type: "AMPLIFY",
    client: "/c8.png",
    company: "Mafatlal Industries",
  },
];

const FeedbackItem = (feedback: (typeof feedbacks)[number]) => {
  return (
    <Card className="flex h-full flex-col items-end justify-between gap-2 rounded-lg bg-white text-[--text-color] shadow-none">
      <CardContent className="flex flex-1 flex-col justify-between gap-12 p-6 pb-0">
        <div className="flex flex-col gap-4">
          <Image
            src={feedback.type === "IGNITE" || feedback.type === "ELEVATE" ? "/ws1.svg" : "/ws2.svg"}
            alt="Quotes"
            width={30}
            height={30}
          />
          <ReadMore
            id={feedback.id.toString()}
            text={feedback.feedback}
            amountOfWords={36}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{feedback.name}</span>
          <span className="text-md">{feedback.designation}</span>
          <span className="text-md">{feedback.company}</span>
        </div>
      </CardContent>
      <CardFooter
        data-type={feedback.type}
        className="mb-6 w-[100px] rounded-l-lg px-4 py-2 text-center text-sm font-bold tracking-widest text-white data-[type='ALIGN']:bg-[#680087] data-[type='AMPLIFY']:bg-[#680087] data-[type='ELEVATE']:bg-[#CC0000] data-[type='IGNITE']:bg-[#CC0000]"
      >
        {feedback.type}
      </CardFooter>
    </Card>
  );
};

const FeedbackSection = (index: number = 1) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex w-full items-center justify-center bg-[#680087]/10">
      <div className="my-16 flex w-11/12 flex-col items-center justify-center gap-8 sm:my-28 sm:max-w-[1200px]">
        <span className="text-center text-2xl font-semibold sm:mb-8 sm:text-4xl sm:text-black">
          What Our Clients Say about us
        </span>
        <div className="flex w-screen items-center justify-center sm:w-full">
          <Carousel
            className="w-9/12 sm:w-11/12"
            setApi={setApi}
            opts={{ loop: true, startIndex: index }}
          >
            <CarouselContent>
              {feedbacks.map((feedback) => (
                <CarouselItem
                  key={feedback.id}
                  className="sm:basis-1/2 md:basis-1/3"
                >
                  {FeedbackItem(feedback)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
        <div className="flex h-[50px] flex-row items-center justify-center gap-1">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              data-current={current === feedback.id}
              className="h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =============== Video Section ===============

const videoLinks = [

  {
    id: "link7",
    link: "https://youtu.be/rMGxgiawgPs",
    title: "An organization's transformational journey",
    description:
      "Discover how a growing unicorn - Disprz, partnered with us to unlock leadership potential and foster an \"ubuntu\" culture of collaboration and shared success.",
    type: "align",
  },
  {
    id: "link8",
    link: "https://youtu.be/fQ-m1kowawU",
    title: "Future Vision Alignment Session",
    description:
      "A transformative workshop for leaders of Mafatlal Industries, fostering collaboration to co-create a forward-looking vision and strategic roadmap for sustainable growth and innovation.",
    type: "align",
  },
  {
    id: "link1",
    link: "https://youtu.be/iPJ8tU8YB68",
    title: "Leadership Evolution",
    description:
      "A transformative leadership journey enabling leaders to craft their unique brand, foster inclusion, master energy management, and uncover personal scripts for authentic, impactful leadership.",
    type: "elevate",
  },
  {
    id: "link2",
    link: "https://youtu.be/dBogT1bWtYw",
    title: "Foundational Managerial Development",
    description:
      "A customised managerial and leadership development program created to enhance skills, foster growth, and empower leaders to drive organizational success and inspire their teams.",
    type: "elevate",
  },
  {
    id: "link3",
    link: "https://youtu.be/KX3EjKJhVko",
    title: "Project Prism",
    description:
      "Developing leaders and fostering a culture of excellence through customized competency framework and 360-degree assessment-driven approaches, enabling growth and sustained organizational success.",
    type: "elevate",
  },
  {
    id: "link4",
    link: "https://youtu.be/dt32uHUQJqs",
    title: "Ignite Leadership Identity",
    description:
      "Discover the empowering leadership journeys of women at L&T and Walmart. Hear insights from our champions about their transformative experiences.",
    type: "ignite",
  },
  {
    id: "link5",
    link: "https://youtube.com/shorts/mqoJ9C2vpPI?feature=share",
    title: "Equileads Women Leadership Journey",
    description:
      "Empowering women leaders at Hitachi Rail involved fostering a transformative leadership identity through impactful experiences that promote growth, innovation, and inclusivity.",
    type: "ignite",
  },
  {
    id: "link6",
    link: "https://youtu.be/SvrS-EUot5g",
    title: "Leader Bridge Wings",
    description:
      "Empowering leadership excellence at Tata Technologies with focus on leadership identity and resilience in women leaders through transformative and impactful experiences.",
    type: "ignite",
  },
  {
    id: "link9",
    link: "https://youtu.be/I644cLq3i7A",
    title: "Transforming Together",
    description:
      "A collaborative leadership alignment initiative at a leading Indian bank, empowering leaders to drive transformation, foster inclusivity, and cultivate a culture of excellence.",
    type: "align",
  },
  {
    id: "link10",
    link: "https://youtu.be/m1-r-oVN-L0",
    title: "Unleash the Power of Inclusion!",
    description:
      "A dynamic lab designed to equip leaders and teams with the tools and insights to foster diversity, equity, and belonging for transformative success.",
    type: "amplify",
  },
  {
    id: "link11",
    link: "https://youtu.be/vFDakLdu10I",
    title: "Inclusion start with \"I\"",
    description:
      "A transformative initiative at a global real estate investment firm, enabling individuals to embrace diversity, foster belonging, and lead inclusively for global impact.",
    type: "amplify",
  },
  {
    id: "link12",
    link: "https://youtu.be/I_dV_mjPJSQ",
    title: "The Power of Inclusion",
    description:
      "A powerful initiative at Sun Pharma, inspiring employees to embrace individual responsibility in fostering diversity, equity, and inclusion, building a more collaborative and inclusive workplace.",
    type: "amplify",
  },
];

const VideoItem = (link: string, current: number, index: number) => {
  const [playing, setPlaying] = React.useState(false);

  return (
    <Card className="flex flex-col rounded-none border-none shadow-none">
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer
          playing={playing && current === index + 1} //only play when the video is in view
          url={link}
          width="100%"
          height="100%"
          onStart={() => setPlaying(true)}
          fallback={<div>Loading...</div>}
        />
      </AspectRatio>
    </Card>
  );
};

const VideoSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    return () => {
      api.off("select", () => { });
    };
  }, [api]);

  return (
    <div className="w-full">
      <div className="my-16 flex flex-col items-center justify-center gap-8">
        <span className="text-center text-2xl font-semibold sm:mb-8 sm:text-4xl sm:text-black">
          Success Stories
        </span>
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center sm:w-full">
            <Carousel className="w-[300px] sm:w-11/12" setApi={setApi}>
              <CarouselContent>
                {videoLinks.map((video, index) => (
                  <CarouselItem key={video.id}>
                    {VideoItem(video.link, current, index)}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 p-4 text-center sm:max-w-[800px]">
            <span className="text-md text-center text-lg font-bold">
              {videoLinks[current - 1 > 0 ? current - 1 : 0].title}
            </span>
            {videoLinks[current - 1 > 0 ? current - 1 : 0].description}
          </div>
          <div className="flex h-[50px] flex-row items-center justify-center gap-1">
            {videoLinks.map((_, index) => (
              <div
                key={index}
                data-current={current === index + 1}
                className="h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// =============== Type to Start Index ===============

const TypeToStartIndex = {
  ALIGN: 1,
  IGNITE: 4,
  AMPLIFY: 9,
  ELEVATE: 11,
};

function WinningSolutionsPage() {
  const { setActiveRoute } = useContext(AppContext);
  const feedbackSectionRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const type = searchParams?.get("type") as keyof typeof TypeToStartIndex;
  const StartIndex = type ? TypeToStartIndex[type] : 1;

  useEffect(() => {
    setActiveRoute({ id: "/winning-solutions", name: "Winning solutions" });
    if (type && feedbackSectionRef.current) {
      feedbackSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [setActiveRoute, type]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      {CardsSection()}
      <div ref={feedbackSectionRef} className="w-full">
        {FeedbackSection(StartIndex)}
      </div>
      {VideoSection()}
      <Footer />
    </div>
  );
}

export default WinningSolutionsPage;
