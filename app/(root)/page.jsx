import { podcastData as trendingPodcasts } from "@/constants/index";
import PodcastCard from "@/components/PodcastCard";

const page = () => {
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map((item) => (
            <PodcastCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
