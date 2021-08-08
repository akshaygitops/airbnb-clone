import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <main className="max-w-max mx-auto p-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://i.imgur.com/unAOJQX.jpg"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 ">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
