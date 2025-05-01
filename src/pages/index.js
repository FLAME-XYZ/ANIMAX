import Layout from "./layout/Layout";
import Head from "next/head";
import { BsPlay, BsPatchCheck, BsSearch, BsBookmarkCheck, BsShieldCheck, BsLaptop } from "react-icons/bs";

export default function Home() {

  const features = [
    {
      icon: <BsPlay />,
      title: "Mulai Menonton",
      description: "Klik Anime Dan Tunggu Untuk Instalasinya Ya Pantek"
    },
    {
      icon: <BsPatchCheck />,
      title: "Enjoy Dulu Mek",
      description: "Silahkan Menonton Dan Relax Ya Babi Jangan Lupa Cemilan"
    },
    {
      icon: <BsSearch />,
      title: "Konten Browser",
      description: "Cari Anime Favoritmu Disini Dan Mudah Di Telusuri"
    },
    {
      icon: <BsBookmarkCheck />,
      title: "List Tontonan",
      description: "Simpan Anime Favoritmu Disini Untuk Di Tonton Nanti"
    },
    {
      icon: <BsShieldCheck />,
      title: "Keamanan Streaming",
      description: "Data Anda Akan Sangat Terjamin Dan Sangat Secure"
    },
    {
      icon: <BsLaptop />,
      title: "Platform Support",
      description: " phone, tablet, or desktop."
    }
  ];

  return (
    <>
      <Head>
        <title>ANIMEDAILY</title>
        <meta name="description" content="Your go-to platform for daily anime news, reviews, and updates." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="JoAnimeCode - Sumber Harian Anime" />
        <meta property="og:description" content="Stay Disini Untuk Update Anime Terbaru Dan Episodenya - JoAnimeCode" />
        <meta property="og:image" content="https://joanimecode.vercel.app/favicon.avif" />
        <meta property="og:url" content="https://joanimecode.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en" />
        <meta name="author" content="Rxvxn" />
        <link rel="canonical" href="https://joanimecode.vercel.app" />
      </Head>
      <Layout>
        <section className="py-10">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div className="text-center" key={index}>
                  <div className="bg-orange rounded-full p-6 inline-block mb-4 text-4xl">
                    {feature.icon}
                  </div>
                  <h1 className="text-xl font-semibold mb-2">{feature.title}</h1>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}