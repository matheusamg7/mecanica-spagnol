export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#0252A7] mb-4">
              Entre em Contato
            </h1>
            <div className="w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#0252A7] to-transparent mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Estamos prontos para atender você. Entre em contato pelos nossos canais ou visite nossa oficina.
            </p>
          </div>
        </div>
      </section>

      {/* Contatos Rápidos */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Telefone */}
            <div className="bg-white rounded-sm p-6 text-center shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-[#0252A7] rounded-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#151515] mb-2 uppercase">Telefone</h3>
              <a href="tel:+555433441455" className="text-xl text-[#0252A7] hover:text-red-600 font-semibold transition-colors">
                (54) 3344-1455
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-sm p-6 text-center shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-green-600 rounded-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#151515] mb-2 uppercase">WhatsApp</h3>
              <a href="https://wa.me/555433441455?text=Olá! Vim pelo site e gostaria de informações." target="_blank" rel="noopener noreferrer" className="text-xl text-green-600 hover:text-red-600 font-semibold transition-colors">
                (54) 3344-1455
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-sm p-6 text-center shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-[#0252A7] rounded-sm flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#151515] mb-2 uppercase">E-mail</h3>
              <a href="mailto:contato@spagnol.com.br" className="text-lg text-[#0252A7] hover:text-red-600 transition-colors">
                contato@spagnol.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa e Informações */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mapa */}
            <div className="lg:col-span-2">
              <div className="rounded-sm overflow-hidden shadow-sm h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7813577128966!2d-52.46097508491982!3d-28.546482582468875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd493b92d79a0f%3A0x8f3e7fb98e3c6a13!2sMec%C3%A2nica%20Spagnol!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Informações Laterais */}
            <div className="space-y-6">
              {/* Endereço */}
              <div className="bg-white rounded-sm shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#151515] mb-4 flex items-center gap-2 uppercase">
                  <svg className="w-6 h-6 text-[#0252A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nosso Endereço
                </h3>
                <p className="text-gray-600 font-medium">
                  Av. Dom Pedro II, 120<br/>
                  Centro - Tapejara/RS<br/>
                  CEP: 99950-000
                </p>
              </div>

              {/* Redes Sociais */}
              <div className="bg-white rounded-sm shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#151515] mb-4 uppercase">Siga-nos</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com/mecanicaspagnol" 
                    className="group"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-7 h-7 fill-gray-500 group-hover:fill-[#1877F2] transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/mecanicaspagnol" 
                    className="group"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-7 h-7 fill-gray-500 group-hover:fill-[#E4405F] transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/555433441455" 
                    className="group"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-7 h-7 fill-gray-500 group-hover:fill-[#25D366] transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@mecanicaspagnol" 
                    className="group"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-7 h-7 fill-gray-500 group-hover:fill-[#FF0000] transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}