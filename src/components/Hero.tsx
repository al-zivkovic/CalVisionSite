import QuestionsCard from "./QuestionsCard";
import { qna } from "../constants/qna";
import AppleStore from "../assets/AppleStore.svg";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen mx-auto pb-8 pl-8 pr-8">
            <div className="mt-10">
                <h1 className="text-5xl text-secondary font-bold">Your Goals, One Photo Away.</h1>
                <p className="text-md text-secondary font-semibold mt-5">CalVision makes calorie tracking effortless. Simply snap a photo of your meals, and our AI calculates the calories and macros for you. Stay on top of your fitness goals with ease.</p>
                <div className="flex flex-row mt-10">
                    {/* FIX: the targets should lead to the respective download pages, and the second image should be Google Play */}
                    <a href="target:blank" className="cursor-pointer mr-10">
                        <img src={AppleStore} alt="Apple Store" style={{ ...styles.img }} />
                    </a>
                    <a href="target:blank">
                        <img src={AppleStore} alt="Apple Store" style={{ ...styles.img }} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-4xl text-secondary font-bold">Features</h1>
                <p>Calorie Tracking</p>
                <p>Snap a photo of your meals to get instant calorie and macronutrient information. CalVision's AI analyzes your meal images to provide accurate nutritional data, making it easy to track your daily intake.</p>
                <p>Personalized Goals</p>
                <p>Set your fitness goals and let CalVision do the rest. Our app calculates your daily calorie and macronutrient targets based on your biometric information and activity level. Stay on track with personalized nutrition goals tailored to your needs.</p>
                <p>Meal History</p>
                <p>Keep a record of your meals with CalVision's meal history feature. View past meal photos and nutritional data to track your progress and make informed decisions about your diet. Stay organized and motivated with a complete overview of your daily intake.</p>
                <p>Food Database</p>
                <p>Access a comprehensive database of foods and ingredients with CalVision. Our app recognizes thousands of items to provide accurate calorie and macronutrient information for your meals. Whether you're eating out or cooking at home, CalVision has you covered.</p>
            </div>
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-4xl text-secondary font-bold ">Q&A</h1>
                <QuestionsCard title={qna.q1.question} description={qna.q1.answer} />
                <QuestionsCard title={qna.q2.question} description={qna.q2.answer} />
                <QuestionsCard title={qna.q3.question} description={qna.q3.answer} />
                <QuestionsCard title={qna.q4.question} description={qna.q4.answer} />
            </div>
        </section>
    );   
};

const styles = {
    img: {
        width: "200px",
    }
}

export default Hero;

