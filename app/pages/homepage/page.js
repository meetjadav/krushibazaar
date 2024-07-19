"use client"
import NavbarComponent from "@/components/Navbar/Navbar";
import FooterComponent from "@/components/Footer/Footer";
import Image from 'next/image';
import Separator from "@/components/Separator/Separator";
import "@/app/pages/homepage/page.css";
import LoadingComponent from "@/components/Loading/Loading";
const Page = () => {

    return (
        <div className="main-homepage-container">
            <LoadingComponent>
                <NavbarComponent />

                <main>
                    <div className="para1">
                        <span className="title">What is Krushi Bazaar?</span>
                        <div className="boxes1">
                            <span className="title1_para1">Krushi Bazaar is a platform that enhance the productivity of farmers. It provides necessary equipments to farmer with reliable price. It also provides farming recommendations to boost farming. </span>
                            <Image className="title1_img1" src="/img4.jpg" alt="" width={500} height={500} priority={false} />
                        </div>
                    </div>
                    <div className="para2">
                        <span className="title">
                            Insights
                        </span>
                        <div className="boxes2">
                            <span className="title_rem_para">
                                Purchase any farming equipments or tools With our Website
                            </span>
                            <Image className="title1_img1" src="/img5.jpg" alt="" width={500} height={500} />
                        </div>
                        <Separator />
                        <div className="boxes2">
                            <Image className="title1_img1" src="/img6.jpg" alt="" width={500} height={500} />
                            <span className="title_rem_para">
                                Smart farming recommendations through our Website
                            </span>
                        </div>
                        <Separator />
                        <div className="boxes2">
                            <span className="title_rem_para">
                                Reliable market price
                            </span>
                            <Image className="title1_img1" src="/img7.jpg" alt="" width={500} height={500} />

                        </div>
                    </div>
                </main>

                <FooterComponent />
            </LoadingComponent>

        </div>
    );
};
export default Page;