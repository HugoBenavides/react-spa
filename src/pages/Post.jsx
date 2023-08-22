
import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom" //devuele los parametros de un objeto por url 
import { buscar } from "../api/api"

//useEffect es un hook para poder comunicarse con un servidor

const Post = ({url}) => {

    const [post, setPost] = useState({})

    const {id} = useParams() //devuele los parametros de un objeto por url 

    const navigate = useNavigate() //se crea una contante para usar con .catch para los errores 404

    useEffect(()=>{

        buscar(`/posts/${id}`, setPost).catch(()=>{
            navigate("/note-found") //se consigura navigate para que en home se enlace con la Page404
        })
    },{id})

    return(
    <main className = "container flex flex--center">
        <article className = "card post">
            <h2 className = "post-card__title">{post.title}</h2>
            <p className = "text__card">{post.body}</p>
        </article>
    </main>
    )
}

export default Post