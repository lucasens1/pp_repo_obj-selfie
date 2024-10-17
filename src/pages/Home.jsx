import partyImage from "../assets/carousel_images/party1.jpg";
export default function Home() {
  // {Già presente in App Header}
  // Questa pagina avrà dentro Slider di foto degli eventi
  // Informazioni principali sul servizio
  // Form di contatto
  // {Già presente in App Footer}

  return (
    <>
      <div className="pt-16">
        <div className="relative">
          <img src={partyImage} alt="" className="w-full h-auto object-cover" />
          {/* <img src="../assets/carousel_images/wally1.jpg" alt="" /> Percorso Relativo non va! import Ok! */}
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Photo Booth</h1>
          </div>
        </div>
        <section className="p-4">
          <p className="text-lg">
            Rendi unica ogni festa! <br />
            Immortala momenti indimenticabili
          </p>
        </section>
      </div>
    </>
  );
}
