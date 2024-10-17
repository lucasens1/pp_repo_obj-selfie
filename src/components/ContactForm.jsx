import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, message });
    // Presi i dati li salvo e li invio al Back-end, andranno a popolare le notifiche dei due proprietari
  };
  return (
    <div className="border p-1 rounded-2xl shadow-lg mx-auto flex max-sm:flex-col max-w-4xl">
      <form className="p-2 w-1/2 max-sm:w-full">
        <div className="mb-3 text-center flex justify-center gap-2">
          <h2 className="font-extrabold text-xl">Scrivici!</h2>
        </div>
        <div className="mb-3 text-center flex justify-center gap-2">
          <label htmlFor="user-name" className="form-label text-start w-1/3 max-sm:w-1/4">
            Nome
          </label>

          <input
            type="text"
            className="form-control w-2/3 max-sm:w-3/4"
            id="user-name"
            aria-describedby="emailHelp"
            placeholder="Inserisci il tuo nome"
            value={name}
            onChange={(event) => setName(event.target.value)} // Prendo il valore quando input cambia
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label htmlFor="user-email" className="form-label text-start w-1/3 max-sm:w-1/4">
            E-mail
          </label>

          <input
            type="email"
            className="form-control w-2/3 max-sm:w-3/4"
            id="user-email"
            placeholder="Inserisci la tua mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label htmlFor="user-phone" className="form-label text-start w-1/3 max-sm:w-1/4">
            Telefono
          </label>

          <input
            type="text"
            className="form-control w-2/3 max-sm:w-3/4"
            id="user-phone"
            placeholder="+39"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label htmlFor="user-phone" className="form-label text-start w-1/3 max-sm:w-1/4">
            Oggetto
          </label>

          <input
            type="text"
            className="form-control w-2/3 max-sm:w-3/4"
            id="user-phone"
            placeholder="Oggetto Messaggio"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label htmlFor="user-text" className="form-label text-start w-1/3 max-sm:w-1/4">
            Messaggio
          </label>

          <textarea
            className="form-control w-2/3 max-sm:w-3/4"
            id="user-text"
            rows="3"
            placeholder="Inserisci un messaggio"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3 text-center flex flex-wrap justify-center gap-2">
          <button
            type="submit"
            className="bg-gray-800 text-white border-0 p-2 text-center"
            onClick={handleSubmit}
          >
            Contattaci
          </button>
        </div>
      </form>
      <div className="text-center w-1/2 max-sm:w-full pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis, vel
        perferendis eaque dolorum aut esse, quasi nesciunt quaerat deserunt,
        similique impedit voluptates necessitatibus maiores officia aperiam
        minus numquam ipsam?
        <br />
        <i>Facci sapere le tue preferenze, in che località ti possiamo tornare utili? Qual è il tema della festa? Quanti sono gli invitati? </i>
      </div>
    </div>
  );
}
