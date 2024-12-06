import { useState } from "react";
import phone from "../assets/phone.png";

const Features = () => {
  const [isActiveFeature, setIsActiveFeature] = useState(null);

  const features = [
    {
      id: 0,
      icon: "📷",
      title: "AI-Powered Scanning",
      description:
        "Use our AI-powered camera to quickly scan meals for accurate calorie and macro tracking.",
    },
    {
      id: 1,
      icon: "📊",
      title: "Progress Tracking",
      description:
        "View your calorie intake trends and progress with visually intuitive graphs and insights.",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Personalized Goals",
      description:
        "Get goals tailored to your body and activity level, whether you’re aiming to lose weight, gain muscle, or maintain.",
    },
    {
      id: 3,
      icon: "🍴",
      title: "Food Analysis",
      description:
        "CalVision analyzes food items, providing detailed calorie and macro data for each meal to help you stay on track.",
    },
  ];

  return (
    <section className="w-full bg-primary py-16 px-8">
      {/* Title Section */}
      <div className="lg:text-center mb-12">
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
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-start p-6 rounded-lg shadow-lg transition duration-300 transform cursor-pointer
                ${
                  isActiveFeature === feature.id
                    ? "bg-primary-variant scale-105 shadow-xl"
                    : "bg-feature hover:scale-105 hover:shadow-xl hover:bg-primary-variant"
                }
              `}
              onClick={() => setIsActiveFeature(feature.id)}
            >
              <div
                className={`text-5xl mr-6 transition ${
                  isActiveFeature === feature.id
                    ? "text-tertiary"
                    : "text-secondary group-hover:text-tertiary"
                }`}
              >
                {feature.icon}
              </div>
              <div>
                <h3
                  className={`text-xl font-bold transition ${
                    isActiveFeature === feature.id
                      ? "text-tertiary"
                      : "text-secondary group-hover:text-tertiary"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-gray-400 mt-2 transition ${
                    isActiveFeature === feature.id
                      ? "text-tertiary"
                      : "group-hover:text-tertiary"
                  }`}
                >
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
