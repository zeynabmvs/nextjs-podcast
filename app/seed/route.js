// import bcrypt from "bcrypt";
// import { db } from "@vercel/postgres";
// import { authors, podcasts, users } from "@/lib/placeholder-data";

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedPodcasts() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//       CREATE TABLE IF NOT EXISTS podcasts (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         author_id UUID NOT NULL,
//         title VARCHAR(255) NOT NULL,
//         description VARCHAR(255),
//         imgURL VARCHAR(255) NOT NULL,
//         audioUrl VARCHAR(255) NOT NULL,
//         audioDuration INT NOT NULL,
//         views INT NOT NULL,
//         date DATE NOT NULL
//       );
//     `;

//   const insertedPodcasts = await Promise.all(
//     podcasts.map(
//       (podcast) => client.sql`
//           INSERT INTO podcasts (author_id, title, description, imgURL, audioUrl, audioDuration, views, date)
//           VALUES (${podcast.author_id}, ${podcast.title}, ${podcast.description}, ${podcast.imgURL}, ${podcast.audioUrl}, ${podcast.audioDuration}, ${podcast.views}, ${podcast.date})
//           ON CONFLICT (id) DO NOTHING;
//         `
//     )
//   );

//   return insertedPodcasts;
// }

// async function seedAuthors() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//       CREATE TABLE IF NOT EXISTS authors (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL,
//      listeners INT NOT NULL,
//       is_verified BOOLEAN NOT NULL
//       );
//     `;

//   const insertedAuthors = await Promise.all(
//     authors.map(
//       (authors) => client.sql`
//           INSERT INTO authors (id, name, email, image_url, listeners, is_verified)
//           VALUES (${authors.id}, ${authors.name}, ${authors.email}, ${authors.image_url}, ${authors.listeners}, ${authors.is_verified})
//           ON CONFLICT (id) DO NOTHING;
//         `
//     )
//   );

//   return insertedAuthors;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedUsers();
//     await seedPodcasts();
//     await seedAuthors();
//     await client.sql`COMMIT`;

//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
