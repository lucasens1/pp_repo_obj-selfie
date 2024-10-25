import { recensioni } from "./utils/utils"
import { ReviewCard } from "./ReviewCard"
export function RecensioniUtenti(){
    return(
        <> 
        <div className="flex flex-col p-4 max-sm:w-full w-1/2 mx-auto">
            <h2 className="text-xl bg-slate-900 text-center text-white rounded-t-xl p-2">Scopri cosa dicono di noi 😁 </h2>
            <div className="w-full mt-10">
                {/* Card -> tutto come prop */}
                { recensioni.map((recensione,idx) => {
                    return(
                        <ReviewCard
                            key={idx}
                            autore={recensione.autore}
                            voto={recensione.voto}
                            titolo={recensione.titolo}
                            testo={recensione.testo}
                        />
                    )
                }) }
            </div>
        </div>
        </>
    )
}