import { recensioni } from "./utils/utils"

export function RecensioniUtenti(){
    return(
        <> 
        <div>
            <h2 className="text-xl bg-slate-900 text-center text-white rounded-t-xl p-2">Scopri cosa dicono di noi 😁 </h2>
            <div className="w-full border border-orange-500">
                { recensioni.map((recensione,idx) => {
                    return(
                        <div key={idx}>
                            <p>{ recensione.autore }</p>
                            <span className="block"> {recensione.voto}</span>
                            <p className="font-semibold">{recensione.titolo}</p>
                            <p className="font-light">{recensione.testo}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
        </>
    )
}