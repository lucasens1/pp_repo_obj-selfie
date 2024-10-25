import { recensioni } from "./utils/utils"
import { ReviewCard } from "./ReviewCard"
import Slider from "react-slick";
export function RecensioniUtenti(){
    const settings = {
        dots:true,
        infinite: true,
        speed: 400,
        slidesToShow: 1, // Mostra una recensione alla volta
        slidesToScroll: 1,
        autoplay: true, // Abilita l'autoplay
        autoplaySpeed: 3000, // Velocità di autoplay
    };

    return(
        <> 
        <div className="flex flex-col p-4 max-sm:w-full w-1/2 mx-auto">
            <h2 className="text-2xl text-center text-slate-900 underline underline-offset-8 rounded-t-xl p-2">Scopri cosa dicono di noi 😁 </h2>
            <Slider {...settings} className="w-full mt-4">
                { recensioni.map((recensione,idx) => (   
                        <ReviewCard
                            key={idx}
                            autore={recensione.autore}
                            voto={recensione.voto}
                            titolo={recensione.titolo}
                            testo={recensione.testo}
                        />
                ))}
            </Slider>
        </div>
        </>
    )
}