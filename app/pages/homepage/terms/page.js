import "@/app/pages/homepage/terms/page.css"
import NavbarComponent from "@/components/Navbar/Navbar"
import FooterComponent from "@/components/Footer/Footer";
const TermsAndConditions = () => {
    return (
        <div className="main-terms-container">
            <NavbarComponent />
            <h1 className="title">Terms and Conditions</h1>
            <main style={{ padding: "30px" }}>
                <div className="inner-content">
                    <p>Welcome to Krushibazaar!</p>
                    <p>
                        These terms and conditions outline the rules and regulations for the use of Krushibazaar&apos;
                        Website.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not
                        continue to use Krushibazaar if you do not agree to take all of the terms and conditions
                        stated on this page.
                    </p>

                </div>

                <span className="small-title">Cookies</span>
                <div className="inner-content">
                    <p>
                        We employ the use of cookies. By accessing Krushibazaar, you agreed to use cookies in
                        agreement with the Krushibazaar&apos; Privacy Policy.
                    </p>

                    <p>
                        Most interactive websites use cookies to let us retrieve the user’s details for each
                        visit. Cookies are used by our website to enable the functionality of certain areas to
                        make it easier for people visiting our website. Some of our affiliate/advertising
                        partners may also use cookies.
                    </p>
                </div>
                <span className="small-title">License</span>
                <div className="inner-content">
                    <p>
                        Unless otherwise stated, Krushibazaar and/or its licensors own the intellectual property
                        rights for all material on Krushibazaar. All intellectual property rights are reserved.
                        You may access this from Krushibazaar for your own personal use subjected to restrictions
                        set in these terms and conditions.
                    </p>
                    <p>You must not:</p>
                    <ul>
                        <li>Republish material from Krushibazaar</li>
                        <li>Sell, rent or sub-license material from Krushibazaar</li>
                        <li>Reproduce, duplicate or copy material from Krushibazaar</li>
                        <li>Redistribute content from Krushibazaar</li>
                    </ul>
                    <p>This Agreement shall begin on the date hereof.</p>
                </div>

                <span className="small-title">Hyperlinking to our Content</span>
                <div className="inner-content">
                    <p>
                        The following organizations may link to our Website without prior written approval:
                    </p>
                    <ul>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>
                            Online directory distributors may link to our Website in the same manner as they
                            hyperlink to the Websites of other listed businesses; and
                        </li>
                        <li>
                            System wide Accredited Businesses except soliciting non-profit organizations, charity
                            shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                        </li>
                    </ul>
                </div>


                <span className="small-title">iFrames</span>
                <div className="inner-content">
                    <p>
                        Without prior approval and written permission, you may not create frames around our
                        Webpages that alter in any way the visual presentation or appearance of our Website.
                    </p>
                </div>

                <span className="small-title">Content Liability</span>
                <div className="inner-content">
                    <p>
                        We shall not be hold responsible for any content that appears on your Website. You agree
                        to protect and defend us against all claims that is rising on your Website. No link(s)
                        should appear on any Website that may be interpreted as libelous, obscene or criminal, or
                        which infringes, otherwise violates, or advocates the infringement or other violation of,
                        any third party rights.
                    </p>
                </div>
                <span className="small-title">Reservation of Rights</span>
                <div className="inner-content">
                    <p>
                        We reserve the right to request that you remove all links or any particular link to our
                        Website. You approve to immediately remove all links to our Website upon request. We also
                        reserve the right to amen these terms and conditions and it&apos; linking policy at any time.
                        By continuously linking to our Website, you agree to be bound to and follow these linking
                        terms and conditions.
                    </p>
                </div>

                <span className="small-title">Removal of links from our website</span>
                <div className="inner-content">
                    <p>
                        If you find any link on our Website that is offensive for any reason, you are free to
                        contact and inform us any moment. We will consider requests to remove links but we are
                        not obligated to or so or to respond to you directly.
                    </p>
                    <p>
                        We do not ensure that the information on this website is correct, we do not warrant its
                        completeness or accuracy; nor do we promise to ensure that the website remains available
                        or that the material on the website is kept up to date.
                    </p>
                </div>
                <span className="small-title">Disclaimer</span>
                <div className="inner-content">
                    <p>
                        To the maximum extent permitted by applicable law, we exclude all representations,
                        warranties and conditions relating to our website and the use of this website. Nothing in
                        this disclaimer will:
                    </p>
                    <ul>
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>
                            limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                        </li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>
                    <p>
                        The limitations and prohibitions of liability set in this Section and elsewhere in this
                        disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities
                        arising under the disclaimer, including liabilities arising in contract, in tort and for
                        breach of statutory duty.
                    </p>
                    <p>
                        As long as the website and the information and services on the website are provided free
                        of charge, we will not be liable for any loss or damage of any nature.
                    </p>
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};

export default TermsAndConditions;
