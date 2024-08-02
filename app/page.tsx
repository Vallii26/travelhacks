import Navbar from "@/components/ui/Navbar";
import Button from "@/components/ui/buttonSelect";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between text-accent animated-bg">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <header className="text-center py-8 text-accent mb-20">
          <h1 className="text-7xl text-primary">Welcome to Travel Hacks</h1>
          <p className="text-xl mt-2">
            Your personalized <span className="text-white">AI</span> travel
            planning assistant
          </p>
        </header>
        <section className="mb-8 text-center">
          <h2 className="text-3xl">Plan Your Next Adventure</h2>
          <p className="text-lg">
            Discover personalized itineraries, hidden gems, and unforgettable
            experiences.
          </p>
        </section>

        <section className="w-full max-w-4xl flex justify-around">
          <Button
            name="Custom Itineraries"
            description="Get tailor-made travel plans that suit your interests and budget."
            route="/custom-itineraries"
          />
          <Button
            name="Local Insights"
            description="Explore recommendations from locals and seasoned travelers."
            route="/local-insights"
          />
          <Button
            name="Budget Management"
            description="Keep track of your spending and stay within your budget."
            route="/budget-management"
          />
        </section>
      </main>

      <footer className="text-center py-4 bg-secondary text-accent">
        <p>© 2024 TravelHacks. All rights reserved.</p>
      </footer>
    </div>
  );
}
