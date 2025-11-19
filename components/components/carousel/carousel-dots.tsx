interface CarouselDotsProps {
  items: number;
  current: number;
  dotColor?: string;
}

function CarouselDots({ items, current, dotColor = "black" }: CarouselDotsProps) {
  const dotColorClass = {
    "black": "h-[6px] w-[6px] rounded-full bg-[#4d4d4d4D] data-[current='true']:bg-[#000]",
    "white": "h-[6px] w-[6px] rounded-full bg-[#000] data-[current='true']:bg-[#fff]",
    "yellow": "h-[6px] w-[6px] rounded-full bg-[#000] data-[current='true']:bg-[#FFCC00]",
    "green": "h-[6px] w-[6px] rounded-full bg-[#000]/30 data-[current='true']:bg-[#CCFF00]"
  }


  return (
    <div className="flex h-[50px] flex-row items-center justify-center gap-1 sm:hidden">
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          data-current={index === current - 1}
          className={`${dotColorClass[dotColor as keyof typeof dotColorClass]}`}
        ></div>
      ))}
    </div>
  );
}

export default CarouselDots;