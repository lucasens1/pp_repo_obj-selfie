import { ServiceCard } from "../components/ServiceCard";
import { servizi } from "../components/utils/utils";
export default function Services() {
  return (
    <>
      <section className="ms_pt-18 flex justify-center flex-col p-4 ">
        <h2 className="font-extrabold text-slate-900 text-xl text-center mt-6">
          Servizi
        </h2>
        <p className="my-1 italic text-center">
          Dai un'occhiata a tutti i nostri servizi!
        </p>
        <section className="w-full flex justify-center">
        {/* Services Card | Titolo Descrizione Punti Immagine */}
        <div className="flex w-full ms_max-w gap-2 flex-wrap max-sm:flex-col">
          {servizi.map((servizio, idx) => (
            <ServiceCard
              key={idx}
              titolo={servizio.titolo}
              descrizione={servizio.descrizione}
              punti={servizio.punti}
            />
          ))}
        </div>
        </section>
        
        <h1 className="font-3xl font-bold text-center">Abbiamo catturato la tua attenzione?</h1>
        <div className="mb-3 text-center flex flex-wrap justify-center gap-2">
          <button
            type="submit"
            className="bg-slate-900 rounded-xl px-4 py-2 text-lg text-white border-0 text-center mt-8 font-bold"
          >
            <a href="/contact">Contattaci</a>
          </button>
        </div>
      </section>
    </>
  );
}
