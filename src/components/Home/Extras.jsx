import React from 'react';
import imgSobre from '../../assets/sobre.svg';

const Extras = () => {
    return (
        <section className="flex items-center justify-center p-6 mb-32">
            <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl'>
                <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-customBlue">Quem sou eu?</h1>
                    <p className="text-xl md:text-2xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                    Olá! Sou um desenvolvedor apaixonado por desenvolvimento front-end e design. Adoro criar soluções inovadoras e eficientes. Tenho experiência em diversas tecnologias e estou sempre em busca de novos desafios. Meu objetivo é combinar criatividade e habilidade técnica para entregar projetos de alta qualidade que encantem e inspirem.
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-6 flex justify-center md:justify-end">
                    <img
                        src={imgSobre}
                        alt="Imagem sobre mim"
                        className="w-full md:w-4/5"
                    />
                </div>
            </div>
        </section>
    );
};

export default Extras;