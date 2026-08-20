import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const title = "Ali Shaikh — Python Backend Developer";
const description =
  "Portfolio of Ali Shaikh, a Python backend developer building secure REST APIs and scalable systems with FastAPI, PostgreSQL and Docker.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <RecentWorks />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
