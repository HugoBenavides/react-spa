import ListPosts from "../components/ListPosts" // se importa para poder agregar la informacionde API REST que tenemos guarda en loscalhost:5000

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
        <ListPosts  url={"/posts"} />
    </main>
  )
}

export default Home
