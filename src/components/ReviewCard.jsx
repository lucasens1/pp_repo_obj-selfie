export function ReviewCard({ autore, voto, titolo, testo }){
    const stelle = Array.from({ length: voto }, (_, index) => (
        <span key={index} className="text-yellow-500">⭐</span>
    ));
    return(
        <div className="bg-slate-900 text-white p-6 rounded-xl my-4">
            <div className="my-4">
                <h3 className="font-bold text-lg text-center">{autore}</h3>
                <div className="flex align-center justify-center">{stelle}</div>
            </div>
            <p className="font-semibold">{titolo}</p>
            <p className="font-light">{testo}</p>
        </div>
    )
}