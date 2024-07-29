import ImageSlider from "./ImageSlider";
import { IntroductionSection } from "./IntroductionSection"
import Updates from "./Updates";
import Events from "./AboutUsPage/Events";
import AboutUniversity from "./AboutUsPage/AboutUniversity";

export const Home=()=>{
    return(
        <>
        <IntroductionSection/>
        <Updates/>
        <Events/>
        <AboutUniversity/>
        <ImageSlider/>
        </>
        
    )
}
export default Home;
