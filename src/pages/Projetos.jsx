import React from 'react';

const projects = [
    {
        title: 'Mahindra Racing',
        description: 'Este projeto foi desenvolvido com React, feito para a Mahindra.',
        link: 'https://github.com/FabricioBettarello/Mahindra',
        image: '/projects/Mahindra.png'
    },
    {
        title: 'VerdeViva',
        description: 'Este projeto foi desenvolvido com HTML, CSS e JS, feito para um trabalho da faculdade.',
        link: 'https://github.com/FabricioBettarello/VerdeViva',
        image: '/projects/VerdeViva.png'
    },
    {
        title: 'EcoPets',
        description: 'Este projeto foi desenvolvido com HTML, CSS e JS, feito para a Global Solution.',
        link: 'https://github.com/FabricioBettarello/EcoPets',
        image: '/projects/EcoPets.png'
    },
];

const Projetos = () => {
    return (
        <>
            <section className="py-32 md:py-64">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center text-customBlue mb-24">Projetos Desenvolvidos</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div key={index} className="backdrop-blur-sm bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-semibold mb-2 text-customBlue">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a href={project.link} target="_blank" className="text-customBlue font-bold hover:underline">Ver Projeto</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projetos;
