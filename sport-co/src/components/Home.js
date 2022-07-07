
import NavBar from "./Navbar/Navbar.js"
import Stats from "./HomeSreen"

function Home(){
    return(
        <div>
        {NavBar("Home")}
        <dl className="mt-5 grid grid-cols-2 sm:grid-cols-2">
        {Stats()}
        {Stats()}
        </dl>


        </div>
    )
}

export default Home