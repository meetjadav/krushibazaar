"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import Separator from "@/components/Separator";
import "../page.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="para1">
          <span className="title">What is Krushi Bazaar?</span>
          <div className="boxes1">
            <span className="title1_para1">Krushi Bajar connects farmers and stakeholders in agriculture, offering
              market prices, crop data, and transaction history. The platform facilitates buying/selling,
              enhances
              data analytics, and provides farming recommendations using web and mobile app development,
              databases, and data analytics.</span>
            <Image className="title1_img1" src="/img4.jpg" alt="" width={500} height={500} />
          </div>
          <Separator /> {/* Use the Separator component */}
        </div>
        <div className="para2">
          <span className="title">
            Insights
          </span>
          <div className="boxes2">
            <Image className="title1_img1" src="/img5.jpg" alt="" width={500} height={500} />
            <span className="title_rem_para">
              Smart Farming Recommendations Through Data Analytics
            </span>
          </div>
          <Separator /> {/* Use the Separator component */}
          <div className="boxes2">
            <span className="title_rem_para">
              Ease Buy/Sell With Mobile Application Development
            </span>
            <Image className="title1_img1" src="/img6.jpg" alt="" width={500} height={500} />
          </div>
          <Separator /> {/* Use the Separator component */}
          <div className="boxes2">
            <Image className="title1_img1" src="/img7.jpg" alt="" width={500} height={500} />
            <span className="title_rem_para">
              Catch-Up Live Market Prices
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
