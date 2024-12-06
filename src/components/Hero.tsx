import QuestionsCard from "./QuestionsCard";
import Features from "./Features";
import { qna } from "../constants/qna";
import AppleStoreBadgeBlack from "../assets/AppleStoreBadgeBlack.svg";
import phone from "../assets/phone.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto pb-8 pl-8 pr-8 bg-primary overflow-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-col lg:flex-row items-center lg:bottom-32 justify-around h-screen z-10">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl text-secondary font-extrabold leading-tight">
            AI That Understands Your Meals
          </h1>
          <p className="text-md text-secondary font-medium mt-5">
            Simply snap a photo of your meals, and let CalVision's advanced AI handle the rest. Get instant calorie and macronutrient breakdowns with 90% accuracy.
          </p>
          <div className="flex justify-start mt-10">
            <a href="target:blank" className="mr-5">
              <img
                src={AppleStoreBadgeBlack}
                alt="Apple Store"
                style={{ width: "180px" }}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Right: Tilted Phone Mockup with Glowing Scan Grid */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="relative transform rotate-6 scale-95">
            <img
              src={phone}
              alt="CalVision App Mockup"
              className="w-[400px] shadow-lg rounded-xl"
            />
            {/* Glowing Scan Grid */}
            <div className="absolute inset-0 rounded-xl border-4 border-dashed border-tertiary animate-pulse opacity-75"></div>
          </div>

          {/* AI Analyzing Animation */}
          <div className="absolute top-5 left-10 bg-gradient-to-r from-40% from-primary to-blue text-white text-lg font-bold px-3 py-1 rounded-lg shadow-lg animate-bounce">
            AI Analyzing...
          </div>

          {/* Floating Labels */}
          <div className="absolute bottom-20 right-5 bg-feature text-secondary text-lg font-bold px-3 py-1 rounded-md shadow">
            Calories: 480
          </div>
          <div className="absolute bottom-5 left-5 bg-feature text-secondary text-lg font-bold px-3 py-1 rounded-md shadow">
            Macros: 25g P / 30g C / 15g F
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20">
        <Features />
      </div>

      {/* Q&A Section */}
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-4xl text-secondary font-bold">Q&A</h1>
        <QuestionsCard title={qna.q1.question} description={qna.q1.answer} />
        <QuestionsCard title={qna.q2.question} description={qna.q2.answer} />
        <QuestionsCard title={qna.q3.question} description={qna.q3.answer} />
        <QuestionsCard title={qna.q4.question} description={qna.q4.answer} />
      </div>
    </section>
  );
};

export default Hero;
