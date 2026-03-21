const Footer = () => {
  return (
    <footer id='footer' className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Izquierdo: Tu Marca */}
          <div className="text-center md:text-left">
            <p className="font-black text-2xl text-slate-800 tracking-tighter">
              NATANAEL<span className="text-blue-600 text-3xl">.</span>
            </p>
            <p className="text-slate-500 text-sm mt-1">Ingeniero en Informática</p>
          </div>

          {/* Centro: Información de contacto rápida */}
          <div className="flex flex-col items-center md:items-start gap-2 text-sm text-slate-600">
            <a href="mailto:natanaelhuenullan31@gmail.com" className="contact-item flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span className="font-bold text-slate-800">Email:</span>
              natanaelhuenullan31@gmail.com
            </a>
            <a href="https://wa.me/56937245527" target="_blank" rel="noreferrer" className="contact-item flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span className="font-bold text-slate-800">Celular:</span>
              +56 9 3724 5527
            </a>
            <a href="https://www.linkedin.com/in/natanael-huenullan-acevedo-3140b0239" target="_blank" rel="noreferrer" className="contact-item flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span className="font-bold text-slate-800">LinkedIn:</span>
              natanael-huenullan-acevedo
            </a>
            <p className="flex items-center gap-2">
              <span className="font-bold text-slate-800">Ubicación:</span>
              Colina, Región Metropolitana
            </p>
          </div>

          {/* Lado Derecho: Copyright y Año */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm mt-2">
              &copy; {new Date().getFullYear()} - Natanael Huenullan
            </p>
          </div>
        </div>

        {/* Línea decorativa final */}
        <div className="flex justify-center mt-10">
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer