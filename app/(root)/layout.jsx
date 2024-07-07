import LeftSidebar from "@/components/LeftSidebar";

export default async function Layout({ children }) {
  return (
    <div class="h-screen flex">
      <LeftSidebar />

      <main class="bg-white  w-4/6 h-full p-4 overflow-auto">{children}</main>

      <aside class="bg-black-1  w-1/6 h-full p-4"></aside>
    </div>
  );
}
