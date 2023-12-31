"use client";
import Jokes from "@/components/Jokes";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Header />
      <Jokes />
    </main>
  );
}
