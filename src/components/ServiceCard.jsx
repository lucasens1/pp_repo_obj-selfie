export function ServiceCard({ titolo, descrizione, punti, imgPath }) {
  return (
    <>
       <div className="ms_bg-obj-selfie-3 flex-grow flex flex-col w-1/4 max-sm:w-full text-white p-6 rounded-xl my-6">
            <div className="my-2">
                <h3 className="font-bold text-2xl text-center">{titolo}</h3>
            </div>
            <p className="text-md font-normal my-2">{descrizione}</p>
            <hr />
            <ul className="font-light text-md my-4">
                { punti.map((punto, idx) => {
                    return(<li key={idx}>- {punto}</li>)            
                })}
            </ul>
        </div>
    </>
    )
}
