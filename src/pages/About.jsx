import { MsCarousel } from "../components/Carousel";
export default function About() {
  // {Già presente in App Header}
  // Questa pagina avrà dentro Slider di foto degli eventi
  // Informazioni principali sul servizio
  // Form di contatto
  // {Già presente in App Footer}

  return (
    <>
      <div className="pt-20 pb-10">
        <h1 className="text-center p-2">Chi siamo? </h1>
        {/* Sezione con Benvenuto nella Pagina di Obiettivo Selfie */}
        <section className="flex max-sm:flex-col max-sm:w-full p-4 pb-16">
          <div className="w-1/2 max-sm:w-full">
            <MsCarousel />
          </div>
          <div className="w-1/2 p-2 max-sm:w-full">
            <div className="border-orange-400 border rounded-xl p-4">
            Siamo Pinco e Pallo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus molestias architecto hic nisi illum vel illo quo quidem odio reprehenderit dolore a, odit voluptates totam sit id ab. Voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam molestias placeat, inventore, facere vel repellat necessitatibus reprehenderit nostrum provident libero impedit officiis distinctio consectetur nesciunt perferendis veniam recusandae maxime odio?
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
