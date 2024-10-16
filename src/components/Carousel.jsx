import { useState } from "react";
const images = [
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
];

const selectedImage = <i className="fa-solid fa-circle mx-1 ms_bounce-effect" />;
const selectorImage = <i className="fa-regular fa-circle mx-1" />;

export function MsCarousel() {
  const [index, setIndex] = useState(0);

  function showNext() {
    setIndex((indiceAttuale) => {
      if (indiceAttuale === images.length - 1) {
        return 0;
      } else {
        return indiceAttuale + 1;
      }
    });
  }

  function showPrev() {
    setIndex((indiceAttuale) => {
      if (indiceAttuale === 0) {
        return (indiceAttuale = images.length - 1);
      } else {
        return indiceAttuale - 1;
      }
    });
  }

  function onScreen(idx) {
    setIndex(idx);
  }
  return (
    <>
      <div className="relative">
        {/* Immagine principale */}
        <div className="flex justify-center">
          <img
            src={images[index].href}
            alt={images[index].alt}
            className="h-full md:max-w-80 w-full object-cover"
          />
        </div>
        {/* Bottoni */}
        <div className="flex justify-center gap-5">
          <button onClick={showPrev} className="absolute left-0">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button onClick={showNext} className="absolute right-0">
            {" "}
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </div>
        {/* Miniature */}
        <div className="flex justify-center mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onScreen(idx)}
              className={index === idx ? "text-black-500" : "text-gray-500"}
            >
              {index === idx ? selectedImage : selectorImage}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
