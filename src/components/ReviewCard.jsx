export function ReviewCard({ autore, voto, titolo, testo }){
    const stelle = Array.from({ length: voto }, (_, index) => (
        <span key={index} className="text-yellow-500">⭐</span>
    ));
    return(
        <div className="bg-slate-900 text-white p-2 rounded-xl my-4">
            <h3 className="font-bold text-lg ">{autore}</h3>
            <div className="flex my-2">{stelle}</div>
            <p className="font-semibold">{titolo}</p>
            <p className="font-light">{testo}</p>
        </div>
    )
}