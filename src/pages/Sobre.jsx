import React from 'react';
import Imagem from '../assets/imagem.png';

const Sobre = () => {
    return (
        <section className="flex items-center justify-center min-h-screen py-24 p-6 md:py-6">
            <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl'>
                <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-customBlue">Sobre Mim</h1>
                    <p className="text-xl md:text-2xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                    Prazer, eu sou Fabricio Bettarello. Com 18 anos de idade, sou estudante de Engenharia de Software, uma área que me fascina pela sua capacidade de transformar ideias em realidade através da tecnologia. Além disso, meu principal hobby é som automotivo; adoro a vibração poderosa e as batidas perfeitas que apenas um bom sistema de som pode proporcionar. Unindo minha paixão pelo desenvolvimento de software e pela qualidade sonora, busco sempre inovar e aperfeiçoar cada projeto em que me envolvo. 
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-6 flex justify-center md:justify-end">
                    <img
                        src={Imagem}
                        alt="Imagem sobre mim"
                        className="w-full md:w-4/5 rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Sobre;
