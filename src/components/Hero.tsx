import QuestionsCard from "./QuestionsCard";
import FeaturesCard from "./FeaturesCard";
import { qna } from "../constants/qna";

import AppleStoreBadgeWhite from "../assets/AppleStoreBadgeWhite.svg";
import AppleStoreBadgeBlack from "../assets/AppleStoreBadgeBlack.svg";
import phone from "../assets/phone.png";
// import GooglePlayStore from "../assets/GooglePlayStore.png";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen mx-auto pb-8 pl-8 pr-8">
            <div className="mt-10 h-screen">
                <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between">
                    <div className="lg:pr-10 mb-10 lg:mb-0">
                        <h1 className="text-5xl text-secondary font-bold">Calorie Tracking With Ease</h1>
                        <p className="text-md text-secondary font-semibold mt-5">Simply snap a photo of your meals and our AI will provide the calories and macronutrients</p>
                        <div className="flex flex-row mt-10">
                            {/* FIX: the targets should lead to the respective download pages, and the second image should be Google Play */}
                            {/* https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/ */}
                            <a href="target:blank" className="cursor-pointer mr-10">
                                <img src={AppleStoreBadgeBlack} alt="Apple Store" style={{ ...styles.badge }} />
                            </a>
                            {/* <a href="target:blank">
                                <img src={GooglePlayStore} alt="Google Play Store" style={{ ...styles.badge }} />
                            </a> */}
                        </div>
                    </div>
                    <div>
                        <img src={phone} alt="placeholder" style={{...styles.phone}}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-secondary font-bold">Features</h1>
                <p>Calorie Tracking image: CircularProgress</p>
                <p>Snap a photo of your meals to get instant calorie and macronutrient information. CalVision's AI analyzes your meal images to provide accurate nutritional data, making it easy to track your daily intake.</p>
                <p>Personalized Goals image: Bullseye</p>
                <p>Set your fitness goals and let CalVision do the rest. Our app calculates your daily calorie and macronutrient targets based on your biometric information and activity level. Stay on track with personalized nutrition goals tailored to your needs.</p>
                <p>Meal History image: Calendar (maybe)</p>
                <p>Keep a record of your meals with CalVision's meal history feature. View past meal photos and nutritional data to track your progress and make informed decisions about your diet. Stay organized and motivated with a complete overview of your daily intake.</p>
                <p>Food Database image: storage or list </p>
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
    badge: {
        width: "200px",
    },
    phone: {
        width: "500px",
    }
}

export default Hero;

