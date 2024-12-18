import React from 'react';
import { Camera, Gauge, Search, PieChart, Utensils, Edit3 } from 'lucide-react';
import { FeatureSection } from './components/FeatureSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl font-bold text-gray-900">
              Plate
              <span className="text-indigo-600"> 360</span>
            </h1>
            <p className="text-xl text-gray-600">
            where Sci-fi meets Snack time
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#download"
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
              >
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <main className="container mx-auto px-4 py-20">
        <FeatureSection
          icon={Camera}
          title="If You Can See It, You Can Size It"
          description="Measure portion size in VR and let our Volume Intelligence take over."
          gifUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800&h=800"
        />
        
        <FeatureSection
          icon={Gauge}
          title="Coffee to Cocktails, We've Got You"
          description="13 nutrition factors including macros, micros, alcohol, caffeine and water."
          gifUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=800"
          reverse
        />

        <FeatureSection
          icon={Search}
          title="Zero Search. Zero Scrolling"
          description="Log exactly what you eat, not the closest food in a database."
          gifUrl="https://images.unsplash.com/photo-1651634983356-9e60163d3b79?auto=format&fit=crop&q=80&w=800&h=800"
        />

        <FeatureSection
          icon={PieChart}
          title="Watch Your Plate Come Alive"
          description="Visualize meal portions and macros through images."
          gifUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800&h=800"
          reverse
        />

        <FeatureSection
          icon={Utensils}
          title="Snap. Snack. Done."
          description="Log with a picture of your meal or food item or nutrition label."
          gifUrl="https://images.unsplash.com/photo-1472393365320-db77a5abbecc?auto=format&fit=crop&q=80&w=800&h=800"
        />

        <FeatureSection
          icon={Edit3}
          title="Your Food, Your Facts"
          description="Edit the ingredients to update the nutrition."
          gifUrl="https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&q=80&w=800&h=800"
          reverse
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center text-gray-600">
            <p>© 2024 Plate 360. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-indigo-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Free to try</span>
          <a
            href="#download"
            className="px-8 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Download on App Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;