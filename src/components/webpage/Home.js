import ImageSlider from "./ImageSlider";
import { IntroductionSection } from "./IntroductionSection"
import Updates from "./Updates";
import Events from './Events/Events'
import AboutUniversity from "./AboutUniversity";

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
