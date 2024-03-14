import { Footer } from "../../common/footer"
import { BestSellers } from "./bestSellers"
import { Fire } from "./fire"
import { Flavour } from "./flavour"
import { Hero } from "./hero"
import { Inbox } from "./inbox"
import { Maker } from "./maker"
import { Threecards } from "./threecards"

export const Home = () => {
  return(
    <>
      <Hero/>

     <div className="max-w-[1200px] mx-auto">
      <BestSellers/>
      <Flavour/>
      <Fire/>
      <Inbox/>
      <Maker/>
      <Threecards/>
     </div>
     <Footer/>
    </>
  )
}