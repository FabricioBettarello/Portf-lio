import React from 'react';

const Principal = () => {
  return (
    <>
      <div className="relative isolate px-3 pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-26 lg:py-30">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Você quer me conhecer melhor?{" "}
              <a href="/sobre" className="font-semibold text-customBlue">
                <span aria-hidden="true" className="absolute inset-0" />
                Saiba mais <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Me chamo <span className="text-customBlue">Fabricio Bettarello</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bem-vindo ao meu portfólio. Aqui, você vai conhecer tudo sobre mim, explorar minhas redes sociais e descobrir como entrar em contato comigo. Aproveite!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://www.linkedin.com/in/fabriciobettarello/" target="_blank" className="text-white font-semibold leading-6 bg-customBlue px-3 py-1 rounded-md hover:bg-customBlueHover">
                Linkedin <span aria-hidden="true"><i className="bi bi-linkedin w-8 h-8"></i></span>
              </a>
              <a href="https://github.com/FabricioBettarello/" target="_blank" className="text-white font-semibold leading-6 bg-buttonGithub px-3 py-1 rounded-md hover:bg-buttonGithubHover">
                Github <span aria-hidden="true"><i className="bi bi-github w-8 h-8"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3da8ff] to-[#008cff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Principal;
