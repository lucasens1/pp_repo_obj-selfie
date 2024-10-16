import { MsCarousel } from "../components/Carousel";
export default function About() {
  // {Già presente in App Header}
  // Questa pagina avrà dentro Slider di foto degli eventi
  // Informazioni principali sul servizio
  // Form di contatto
  // {Già presente in App Footer}

  return (
    <>
      <div className="pt-10 pb-10">
        <h1 className="text-center p-2">AboutPage</h1>
        {/* Sezione con Benvenuto nella Pagina di Obiettivo Selfie */}
        <section className="flex max-sm:flex-col max-sm:w-full p-4 pb-16">
          <div className="w-1/2 max-sm:w-full border-2">
            <p> Carosello tailwind? </p>
            <MsCarousel />
          </div>
          <div className="w-1/2 max-sm:w-full border-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            fugit consequuntur vel reprehenderit ab adipisci neque nihil!
            Delectus laudantium ut vitae soluta cumque? Voluptates libero alias,
            aperiam exercitationem quia totam!
          </div>
        </section>
      </div>
    </>
  );
}
