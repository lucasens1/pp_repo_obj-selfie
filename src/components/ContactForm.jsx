import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  /* Errore e Successo */
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const renderMessage = () => {
    if (error) {
      return <h2 className="text-red-600">{error}</h2>;
    } else if (success) {
      return <h2 className="text-green-600">{success}</h2>;
    }
    return null; // Assicurati che ritorni null se non ci sono messaggi
  };

  function resetInputFields() {
    setEmail("");
    setMessage("");
    setSubject("");
    setName("");
    setPhone("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, phone, subject, message });
    // Presi i dati li salvo e li invio al Back-end, andranno a popolare le notifiche dei due proprietari
    if (!name || !email || !message || !phone || !subject) {
      // Se manca un campo mando l'errore
      setError("Tutti i campi sono obbligatori!");
      // Esco dal submit
      return;
    }
    /* Body */
    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };
    try {
      const response = await fetch("http://localhost:8000/api/messages", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Errore nella richiesta di invio Messaggio");
      }
      // Prendo i dati dalla response
      const data = await response.json();
      // Leggo i dati della Response
      console.log(data);
      setError('');
      setSuccess("Messaggio inviato con successo");
      resetInputFields();
    } catch (error) {
      console.error("Errore : ", error);
      setError("Si è verificato un problema durante l&#39;invio del messaggio");
      setSuccess('');
    }
  };

  return (
    <div className="flex justify-center max-sm:flex-col max-sm:w-full p-4 pb-10 items-center">
      <div className="text-center w-1/3 max-sm:w-full text-white mx-3 my-3 h-fit ms_bg-obj-selfie shadow-xl rounded-xl font-semibold p-4">
        <i>
          Facci sapere le tue preferenze, in che località ti possiamo tornare
          utili? Qual è il tema della festa? Quanti sono gli invitati?{" "} <br />
          Troveremo una soluzione ad hoc per te!
        </i>
      </div>
      <form className="p-2 w-1/3 max-sm:w-full">
        <div className="mb-3 text-center flex flex-col justify-center gap-2">
          <h2 className="font-extrabold text-slate-900 text-xl">Compila per chiedere informazioni!</h2>
          <p>Ti contatteremo appena possibile 😄</p>
        </div>
        <div className="mb-3 text-center flex justify-center gap-2">
          <label
            htmlFor="name"
            className="form-label text-start w-1/3 p-1 max-sm:w-1/4 font-semibold"
          >
            Nome
          </label>

          <input
            type="text"
            className="form-control p-1 w-2/3 max-sm:w-3/4"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Inserisci il tuo nome"
            value={name}
            onChange={(event) => setName(event.target.value)} // Prendo il valore quando input cambia
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label
            htmlFor="email"
            className="form-label font-semibold text-start p-1 w-1/3 max-sm:w-1/4"
          >
            E-mail
          </label>

          <input
            type="email"
            className="form-control w-2/3 p-1 max-sm:w-3/4"
            id="email"
            placeholder="Inserisci la tua mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label
            htmlFor="phone"
            className="form-label text-start font-semibold p-1 w-1/3 max-sm:w-1/4"
          >
            Telefono
          </label>

          <input
            type="text"
            className="form-control w-2/3 p-1 max-sm:w-3/4"
            id="phone"
            placeholder="+39"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label
            htmlFor="subject"
            className="form-label text-start font-semibold p-1 w-1/3 max-sm:w-1/4"
          >
            Oggetto
          </label>

          <input
            type="text"
            className="form-control w-2/3 p-1 max-sm:w-3/4"
            id="subject"
            placeholder="Oggetto Messaggio"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-3 text-center flex justify-center gap-2">
          <label
            htmlFor="message"
            className="form-label text-start font-semibold p-1 w-1/3 max-sm:w-1/4"
          >
            Messaggio
          </label>

          <textarea
            className="form-control w-2/3 p-1 max-sm:w-3/4"
            id="message"
            rows="3"
            placeholder="Salve, vorremmo avere informazioni sui vostri servizi, attendiamo la vostra risposta."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3 text-center flex flex-wrap justify-center gap-2">
          <button
            type="submit"
            className="bg-slate-900 rounded-xl px-4 py-2 text-lg text-white border-0 text-center mt-8 font-bold"
            onClick={handleSubmit}
          >
            Contattaci
          </button>
        </div>
      <div className=" border-1 text-center">{renderMessage()}</div>
      </form>
      
    </div>
  );
}
