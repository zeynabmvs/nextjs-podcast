// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const authors = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
    listeners: 12458,
    is_verified: true,
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
    listeners: 0,
    is_verified: false,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
    listeners: 0,
    is_verified: false,
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
    listeners: 0,
    is_verified: false,
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
    listeners: 0,
    is_verified: false,
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
    listeners: 78555,
    is_verified: true,
  },
];

const podcasts = [
  {
    id: 1,
    author_id: authors[1].id,
    title: "The Joe Rogan Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 15000,
    date: '2023-10-29'
  },
  {
    id: 2,
    author_id: authors[0].id,
    title: "The Futur",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 2420,
    date: '2023-05-20'
  },
  {
    id: 3,
    author_id: authors[4].id,
    title: "Waveform",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 700,
    date: '2023-10-29'
  },
  {
    id: 4,
    author_id: authors[5].id,
    title: "The Tech Talks Daily Podcast",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 25000,
    date: '2024-06-29'
  },
  {
    id: 5,
    author_id: authors[1].id,
    title: "GaryVee Audio Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 35000,
    date: '2023-10-29'
  },
  {
    id: 6,
    title: "Syntax ",
    author_id: authors[3].id,
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 23800,
    date: '2023-10-29'
  },
  {
    id: 7,
    title: "IMPAULSIVE",
    author_id: authors[3].id,
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 300,
    date: '2023-10-29'
  },
  {
    id: 8,
    title: "Ted Tech",
    author_id: authors[2].id,
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
    audioUrl: "sample_audio.mp3",
    audioDuration: 42,
    views: 25000,
    date: '2023-10-29'
  },
];

export { users, authors, podcasts };
