"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";
import "@/app/pages/faq/page.css"; // Assume you have a separate CSS file for styling the FAQ page

const Page = () => {
    return (
        <div className="faq-main-container">
            <Navbar />
            <span className="title">Frequently Asked Questions</span>

            <div className="faq-item">
                <span className="faq-question">What is Krushi Bazaar?</span>
                <span className="faq-answer">
                    Krushi Bazaar is a platform that connects farmers and stakeholders in agriculture, It facilitates buying/selling, provides farming recommendations using web development, databases.
                </span>
            </div>
            <Separator />

            <div className="faq-item">
                <span className="faq-question">How can I join Krushi Bazaar?</span>
                <span className="faq-answer">
                    You can join Krushi Bazaar by visiting our website and signing up. Provide the necessary details, and you will be able to access all the features of the platform.
                </span>
            </div>
            <Separator />

            <div className="faq-item">
                <span className="faq-question">Is Krushi Bazaar free to use?</span>
                <span className="faq-answer">
                    Yes, Krushi Bazaar offers a free with full access to all features.
                </span>
            </div>
            <Separator />

            <div className="faq-item">
                <span className="faq-question">What services does Krushi Bazaar offer?</span>
                <span className="faq-answer">
                    Krushi Bazaar provides various services smart farming recommendations, and an easy platform for buying and selling agricultural products.
                </span>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
