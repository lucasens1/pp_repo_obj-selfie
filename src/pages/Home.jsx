import partyImage from "../assets/carousel_images/party1.jpg";
import props from "../assets/carousel_images/props&wally.jpg";
import { RecensioniUtenti } from "../components/Recensioni";
export default function Home() {
  // {Già presente in App Header}
  // Questa pagina avrà dentro Slider di foto degli eventi
  // Informazioni principali sul servizio
  // Form di contatto
  // {Già presente in App Footer}

  return (
    <>
      {/* Prima Sect */}
      <div className="ms_pt-18 flex justify-center max-sm:flex-col">
        <div className="relative w-1/3 max-sm:w-full">
          <img
            src={partyImage}
            alt=""
            className="w-full max-h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 max-h-96 flex items-center justify-center">
            <h1 className="text-white text-3xl font-light italic">
              Obiettivo selfie!
            </h1>
          </div>
        </div>
        <section className="p-4 w-1/3 max-sm:w-full">
          <p className="text-lg">
            <i>Aspettate, aspettate... siete alla ricerca di un tocco di
            originalità che faccia brillare le vostre <strong>nozze</strong>?</i> Non è magia, ma è
            quasi come se leggessimo nella vostra mente, vero? Diciamo la
            verità: Il nostro <strong>Photo Booth Wolly</strong> non è banalmente un passatempo,
            è un modo fantastico per creare ricordi indimenticabili e far
            divertire tutti gli ospiti.
            Se volete un servizio che sorprenda davvero tutti, allora siete nel
            posto giusto!
          </p>
        </section>
      </div>

      {/* Seconda Sect */}
      <div className="flex justify-center max-sm:flex-col">
        <section className="p-4 w-1/3 max-sm:w-full">
          <p className="text-lg">
            <strong>Obiettivo Selfie</strong> è pronto a portare un'ondata di
            divertimento, creatività e unicità al vostro matrimonio, grazie
            anche al super staff altamente qualificato, il quale accompagnerà
            ogni vostro invitato e voi in ogni momento del servizio!Ogni scatto
            sarà un ricordo da custodire gelosamente! Mettetevi in posa, al
            resto penseranno loro e il loro Wolly! Obiettivo Selfie è qui per
            trasformare il vostro matrimonio in un evento straordinario.
            <span className="block"><i>3, 2 ,1...</i> <strong className="text-2xl">selfie!</strong><span className="text-2xl">📸</span></span>
          </p>
        </section>
        <div className="relative w-1/3 max-sm:w-full">
          <img src={props} alt="" className="w-full max-h-96 object-cover" />
          {/* <img src="../assets/carousel_images/wally1.jpg" alt="" /> Percorso Relativo non va! import Ok! */}
          <div className="absolute inset-0 bg-black bg-opacity-30 max-h-96 flex items-center justify-center">
            <h1 className="text-white text-3xl font-light italic">
              Wolly 
            </h1>
          </div>
        </div>
      </div>
      <section className="w-full my-10">
        <RecensioniUtenti />
      </section>
    </>
  );
}
