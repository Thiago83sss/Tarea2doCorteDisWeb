function IconoLike({ className = "w-5 h-5" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
}

function IconoRetweet({ className = "w-5 h-5" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

function Card({ nombre, usuario, texto, likes, retweets, foto }) {
  return (
    <div className="max-w-md w-full bg-black text-white border border-gray-700 rounded-2xl p-4 shadow-lg">
      <div className="flex items-center gap-3">
        {foto ? (
          <img
        src={foto}
        alt={`Foto de ${nombre}`}
        referrerPolicy="no-referrer"
        className="w-12 h-12 rounded-full object-cover"
        />
        ) : (
          <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-xl">
            {nombre[0]}
          </div>
        )}
        <div>
          <p className="font-bold">{nombre}</p>
          <p className="text-gray-500 text-sm">@{usuario}</p>
        </div>
      </div>

      <p className="mt-3 text-lg">{texto}</p>

      <div className="flex gap-6 mt-4 text-gray-400 text-sm">
        <span className="flex items-center gap-1.5 hover:text-green-400 cursor-pointer transition-colors">
          <IconoRetweet /> {retweets}
        </span>
        <span className="flex items-center gap-1.5 hover:text-pink-500 cursor-pointer transition-colors">
          <IconoLike /> {likes}
        </span>
      </div>
    </div>
  )
}

export default Card