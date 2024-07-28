import AboutUniversity from "./AboutUsPage/AboutUniversity"
import Events from "./AboutUsPage/Events"
import Introduction from "./IntroductionSection"
import Updates from "./Updates"

export const Home=()=>{
    return(
        <>
        <Introduction/>
   
<div className="mx-[60px]">
           <Updates/>
        <Events/>
        <AboutUniversity/>
        </div>
        </>
        
    )
}
export default Home
