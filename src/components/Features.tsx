import { useState } from "react";

import phone from "../assets/phone.png";

const Features = () => {
    const [ isActive, setIsActive ] = useState(false)

    

  return (
    <section className="w-full bg-primary py-16 px-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary">Discover the Features of CalVision</h1>
        <p className="text-md text-gray-400 mt-4">
          Explore how CalVision helps you achieve your fitness goals with ease and precision.
        </p>
      </div>

      {/* Features Content */}
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center max-w-7xl mx-auto gap-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={phone}
            alt="CalVision app preview"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Feature Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8">
          {/* Feature Card */}
          {[
            {
              icon: "📷",
              title: "AI-Powered Scanning",
              description:
                "Use our AI-powered camera to quickly scan meals for accurate calorie and macro tracking.",
            },
            {
              icon: "📊",
              title: "Progress Tracking",
              description:
                "View your calorie intake trends and progress with visually intuitive graphs and insights.",
            },
            {
              icon: "🎯",
              title: "Personalized Goals",
              description:
                "Get goals tailored to your body and activity level, whether you’re aiming to lose weight, gain muscle, or maintain.",
            },
            {
              icon: "🍴",
              title: "Food Analysis",
              description:
                "CalVision analyzes food items, providing detailed calorie and macro data for each meal to help you stay on track.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-feature rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-primary-variant hover:cursor-pointer group"
            >
              <div className="text-5xl text-secondary group-hover:text-tertiary mr-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary group-hover:text-tertiary">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mt-2 group-hover:text-tertiary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
