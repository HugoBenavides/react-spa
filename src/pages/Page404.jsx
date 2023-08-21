import image from "../assets/img/doguito404.svg"
import '../assets/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Esta página no existe y nuestro perrito está confundido. Favor de contactar a su becario local para que trate de arreglar este problema.</p>
        </main>
    )
}

export default Page404
