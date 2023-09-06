import HomeSectionShow from "../Features/HomeSectionShow"
import Slider from "./HomeFeatures/slider"
import Footer from '../Features/Footer'

const Home = () => {
    return (
        <>
            <main className="bg-gray-100 pt-24 flex flex-col gap-y-16">
                <Slider />
                <HomeSectionShow />
            </main>
            <Footer/>
        </>
    )
}

export default Home