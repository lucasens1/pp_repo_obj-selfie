import { useState } from "react";
import CarouselImages from "./carousel_images_obj/CarouselImages";

/* const images = [
  {
    href: "https://fastly.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs",
    alt: "img1",
  },
  {
    href: "https://fastly.picsum.photos/id/653/200/200.jpg?hmac=tZtho3csFdJ2rLHTTlT7WhXtDwbXgJNIIUvOQQb2dIo",
    alt: "img2",
  },
  {
    href: "https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY",
    alt: "img3",
  },
  {
    href: "https://fastly.picsum.photos/id/958/200/200.jpg?hmac=WdLUMERHKTLw-sP-eIf1-JlwdIT2ZY12zf4JbnQR_s8",
    alt: "img4",
  },
]; */

const selectedImage = <i className="fa-solid fa-circle mx-1 ms_bounce-effect" />;
const selectorImage = <i className="fa-regular fa-circle mx-1" />;

export function MsCarousel() {
  const [index, setIndex] = useState(0);
  /* Converto e prendo i valori presenti nell'oggetto */
  const imagesCarouselArray = Object.values(CarouselImages);
  function showNext() {
    setIndex((indiceAttuale) => {
      if (indiceAttuale === imagesCarouselArray.length - 1) {
        return 0;
      } else {
        return indiceAttuale + 1;
      }
    });
  }

  function showPrev() {
    setIndex((indiceAttuale) => {
      if (indiceAttuale === 0) {
        return (indiceAttuale = imagesCarouselArray.length - 1);
      } else {
        return indiceAttuale - 1;
      }
    });
  }

  function onScreen(idx) {
    setIndex(idx);
  }

  /* Funzione di debug */
  /* function showPhoto() {
    console.log(event.target.src);
  } */

  return (
    <>
      <div>
        {/* Immagine principale */}
        <div className="flex justify-center relative p-2 max-h-96">
          <img
            src={imagesCarouselArray[index]}
            alt="Immagine non disponibile"
            className="md:max-w-80 w-full object-cover"
          />
          <button onClick={showPrev} className="absolute left-0 bottom-1/2 ml-2">
            <i className="fa-solid fa-arrow-left max-sm:text-white p-1"></i>
          </button>
          <button onClick={showNext} className="absolute right-0 bottom-1/2 mr-2">
            <i className="fa-solid fa-arrow-right max-sm:text-white p-1"></i>
          </button>
        </div>
        {/* Puntini */}
        <div className="flex justify-center mt-2">
          {/* Non mi serve valore dell'array ma solo idx */}
          {imagesCarouselArray.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onScreen(idx)}
              /* className={index === idx ? "text-black" : "text-gray-500"} */
            >
              {index === idx ? selectedImage : selectorImage}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
