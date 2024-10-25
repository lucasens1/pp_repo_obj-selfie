import partyImage from "../assets/carousel_images/party1.jpg";
import { RecensioniUtenti } from "../components/Recensioni";
export default function Home() {
  // {Già presente in App Header}
  // Questa pagina avrà dentro Slider di foto degli eventi
  // Informazioni principali sul servizio
  // Form di contatto
  // {Già presente in App Footer}

  return (
    <>
      <div className="pt-20 flex justify-center max-sm:flex-col">
        <div className="relative w-1/3 max-sm:w-full">
          <img src={partyImage} alt="" className="w-full max-h-96 object-cover" />
          {/* <img src="../assets/carousel_images/wally1.jpg" alt="" /> Percorso Relativo non va! import Ok! */}
          <div className="absolute inset-0 bg-black bg-opacity-60 max-h-96 flex items-center justify-center">
            <h1 className="text-white text-3xl font-light italic">Obiettivo selfie!</h1>
          </div>
        </div>
        <section className="p-4 w-1/3 max-sm:w-full">
          <p className="text-lg">
            Rendi unica ogni festa! <br />
            Immortala momenti indimenticabili Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quaerat minima aliquid quo quisquam eveniet? Iusto ex corrupti facilis dignissimos, ab asperiores culpa voluptas officiis blanditiis provident alias tenetur neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, sapiente. Autem temporibus quaerat tempore ullam.
          </p>
        </section>
      </div>
        <section className="w-full my-10">
          <RecensioniUtenti />
        </section>
    </>
  );
}
