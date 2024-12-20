export default function Footer() {
  return (
    <>
      <footer className="footer flex max-h-fit justify-between bg-slate-900 w-full bottom-0 text-white p-4 max-sm:flex-col">
        <aside className="p-4">
          <img
            src="/obj_selfie_dark.png"
            className="max-sm:h-16 md:h-20"
            alt=""
          />
          <p>
            Obiettivo Selfie
            <br />
            P.Iva : BOBOBOOBBOOB
            <br />
            Portiamo divertimento dal 2024
          </p>
        </aside>
        <nav className="p-4">
          <h6 className="footer-title my-1">Seguici sui social!</h6>
          <div className="flex gap-5 mb-6">
            <a
              href="https://www.instagram.com/obiettivoselfie/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/p/ObiettivoSelfie-61556835440778/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
