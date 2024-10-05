const Footer = () => {
  return (
    <footer className="backdrop-blur-sm bg-white/30 py-3 bottom-0 w-full text-lg">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-5 mb-2">
          <a href="https://instagram.com/bettarello_" target="_blank" className="text-gray-900 hover:text-customBlue">
            <i className="bi bi-instagram w-8 h-8"></i> {/* Ícone 1 */}
          </a>
          <a href="https://wa.me/5511937350748" target="_blank" className="text-gray-900 hover:text-customBlue">
            <i className="bi bi-whatsapp w-8 h-8"></i> {/* Ícone 2 */}
          </a>
          <a href="https://www.linkedin.com/in/fabriciobettarello/" target="_blank" className="text-gray-900 hover:text-customBlue">
            <i className="bi bi-linkedin w-8 h-8"></i> {/* Ícone 3 */}
          </a>
          <a href="https://github.com/FabricioBettarello/" target="_blank" className="text-gray-900 hover:text-customBlue">
            <i className="bi bi-github w-8 h-8"></i> {/* Ícone 4 */}
          </a>
        </div>
        <p className="text-gray">Fabricio Bettarello | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
