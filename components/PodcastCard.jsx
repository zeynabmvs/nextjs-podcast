import Image from "next/image";

const PodcastCard = ({ item }) => {
  return (
    <div className="cursor-pointer">
      <Image src={item.imgURL} width={174} height={174} alt={item.title} className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]" />
      <div className="flex flex-col">
        <h1 className="text-16 truncate font-bold text-white-1">{item.title}</h1>
        <p className="text-12 truncate font-normal capitalize text-white-4">{item.description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
