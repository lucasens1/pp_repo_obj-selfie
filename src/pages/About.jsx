import { MsCarousel } from "../components/Carousel";
import { ContactForm } from "../components/ContactForm";
export default function About() {
  // {Già presente in App Header}
  // Questa pagina avrà dentro Slider di foto degli eventi
  // Informazioni principali sul servizio
  // Form di contatto
  // {Già presente in App Footer}

  return (
    <>
      <div className="pt-20 pb-10">
        <h1 className="text-center text-xl font-extrabold p-2">Chi siamo? </h1>
        {/* Sezione con Benvenuto nella Pagina di Obiettivo Selfie */}
        <section className="flex justify-center max-sm:flex-col max-sm:w-full p-4 pb-12 ">
          <div className="w-1/3 max-sm:w-full pt-2">
            <MsCarousel />
          </div>
          <div className="w-1/3 max-sm:w-full pt-2">
            <div className="bg-slate-900 text-white h-full border rounded-xl p-4">
              Siamo Martina e Luca, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi repellendus molestias architecto hic nisi
              illum vel illo quo quidem odio reprehenderit dolore a, odit
              voluptates totam sit id ab. Voluptatibus! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Magnam molestias placeat,
              inventore, facere vel repellat necessitatibus reprehenderit
              nostrum provident libero impedit officiis distinctio consectetur
              nesciunt perferendis veniam recusandae maxime odio?
            </div>
          </div>
        </section>
        {/* Form di contatto */}
        <ContactForm/>
      </div>
    </>
  );
}
