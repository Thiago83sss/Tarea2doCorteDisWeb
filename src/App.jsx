import Card from './components/Card'

function IconoX({ className = "w-8 h-8" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="flex items-center gap-3 text-3xl font-bold text-sky-400">
        <IconoX /> Twitter(Equis pa' los panas)
      </h1>

      <Card
        nombre="Juan Caballo"
        usuario="juancaballo69"
        texto="Porque no he salido del balcon"
        likes={999}
        retweets={2}
        foto="https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/a/a3/FB_IMG_1596591789564.jpg/revision/latest?cb=20200806023457&path-prefix=es"
      />
      <Card
        nombre="MarioBros"
        usuario="mariomario"
        texto="Porque un caballo hizo un tuit"
        likes={20}
        retweets={1}
        foto="https://i.pinimg.com/736x/b3/07/dd/b307dda59ea94a3fe213d8ede84398b0.jpg"
      />
    </div>
  )
}

export default App