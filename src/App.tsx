import React from 'react';
import { Eye, Camera, Gauge, SearchSlash, Target, PieChart, Utensils, Edit3, Trophy, BarChart } from 'lucide-react';
import { FeatureSection } from './components/FeatureSection';

// Import local images
import img_alcohol from '../assets/images/alcohol.png';
import img_caffeine from '../assets/images/caffeine.png';
import img_macro_plate from '../assets/images/macro_plate.png';
import img_camera_input_meal from '../assets/images/camera_input_meal.png';
import img_charts_1 from '../assets/images/charts_1.png';
import img_charts_2 from '../assets/images/charts_2.png';
import img_edit_ingredients_muffin from '../assets/images/edit_ingredients_muffin.png';
import food_salad from '../assets/images/food_salad.png';
import img_example from '../assets/images/example.png';
import img_goals from '../assets/images/goals.png';
import img_meal_view from '../assets/images/meal_view.png';
import img_measure_apple from '../assets/images/measure_apple.png';
import img_measure_muffin from '../assets/images/measure_muffin.png';
import img_nutrition_facts from '../assets/images/nutrition_facts.png';
import img_nutrients from '../assets/images/nutrients.jpg';


// Add more imports as needed

function App() {
  return (
    
    <div className="min-h-screen bg-white">

      <div className="header-container">
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center max-w-4xl mx-auto space-y-1">
              <h1 className="text-6xl font-bold text-gray-900">
                Plate
                <span className="text-indigo-600"> 360</span>
              </h1>
              <p className="text text-gray-400 drop-shadow-sm">
                supper meets sci-fi ✨
              </p>
            </div>
          </div>
        </header>

        {/* Pitch */}
        <div className="text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800 shimmer-text">
          Nutrition insights, in a class of its own.
          </h2>
        </div>
      </div>
      
      {/* Features Section */}
      <main className="container mx-auto px-4 py-10">
        <FeatureSection
          icon={Eye}
          title="If You Can See It, You Can Size It"
          description="Measure portion size in VR and let our Volume Intelligence take over."
          imageUrls={[img_measure_muffin, img_measure_apple]}
        />
        
        <FeatureSection
          icon={Gauge}
          title="Coffee to Cocktails, We've Got You"
          description="32 nutrition factors including macros, alcohol, caffeine, minerals, vitamins and water."
          imageUrls={[img_nutrients, img_alcohol, img_caffeine]}
          reverse
        />

        <FeatureSection
          icon={SearchSlash}
          title="Zero Search. Zero Scrolling"
          description="Log exactly what you eat, not the closest food in a database."
          imageUrls={[food_salad, img_camera_input_meal]}
        />

        <FeatureSection
          icon={PieChart}
          title="Watch Your Plate Come Alive"
          description="Visualize meal portion size and macros on the plate."
          imageUrls={[img_macro_plate, img_example]}
          reverse
        />

        <FeatureSection
          icon={Camera}
          title="Snap. Snack. Done."
          description="Log with a picture of your meal or food item or nutrition label."
          imageUrls={[img_camera_input_meal, img_nutrition_facts]}
        />

        <FeatureSection
          icon={Edit3}
          title="Your Food, Your Facts"
          description="Edit the ingredients to update the nutrition."
          imageUrls={[img_edit_ingredients_muffin, food_salad]}
          reverse
        />


        <FeatureSection
          icon={Trophy}
          title="Personalized Goals and Guidance"
          description="Set your goals and learn which foods are on target and which are off."
          imageUrls={[img_goals]}
        />

        <FeatureSection
          icon={BarChart}
          title="Slice and Dice Your Data"
          description="Get a detailed breakdown of your nutrition and see how things are trending."
          imageUrls={[img_charts_1, img_charts_2]}
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
      <a href="https://forms.gle/cKmvyh2CjHu1Bi8h9" className="fixed bottom-0 left-0 right-0 bg-indigo-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-md max-w-[750px] mx-auto">
          <div className="px-8 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition">
            Launching on iOS 
          </div>
          &nbsp; 
          <span className="text-md grow-shrink-text shimmer-text">get early access</span>
          &nbsp; 
        </div>
      </a>
    
    </div>
  );
}

export default App;