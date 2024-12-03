import FeatureCard from "./FeatureCard";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto pb-8 pl-8 pr-8">
            <h1 className="text-5xl text-secondary font-bold">Your Goals, One Photo Away.</h1>
            <p className="text-md text-secondary font-semibold mt-5">CalVision makes calorie tracking effortless. Simply snap a photo of your meals, and our AI calculates the calories and macros for you. Stay on top of your fitness goals with ease.</p>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-secondary font-bold mt-8">Q&A</h1>
                <FeatureCard title="How does CalVision work?" description="CalVision simplifies calorie tracking with cutting-edge AI. Just snap a photo of your meal, and our app with instantly anazlye the image to calculate the calories and macros. Whether you're looking to lose weight, gain muscle, or maintain, CalVision helps you stay on track effortlessly."/>
                <FeatureCard title="Is the camera tracking accurate?" description="CalVision's calorie tracking provides an estimated accuracy of around 85%-90% for most common meals. This high accuracy is achieved through advanced AI analysis of visual and contextual data from your meal photos. While the results are reliable for general tracking, factors like lighting, photo quality, and complex dishes may slightly affect precision. To improve accuracy, users can manually adjust portion sizes or provide additonal details when needed."/>
                <FeatureCard title="How does CalVision set my goals?" description="CalVision sets your goals by using the biometic information you provide during onboarding, such as your sex, height, current weight, target weight, and activity level. The app calculates your daily calorie and macronutrient requirements based on scientifically-backed formulas and adjusts them to fit your specific needs. Whether your aim is to lose weight, gain muscle, or maintain your current physique, CalVision provides personalized targets to help you reach your fitness goals efficiently." />
                <FeatureCard title="Do you guys offer a free trial?" description="Yes! CalVision offers a 7-day free trial for all new users. During the trial period, you'll have access to all premium features. After the trial ends, you can choose to subscribe to a monthly or yearly plan to continue using the app. We're confident that you'll love the convenience and accuracy of CalVision's calorie tracking, so give it a try today!" />
            </div>
        </section>
    );   
};

export default Hero;
