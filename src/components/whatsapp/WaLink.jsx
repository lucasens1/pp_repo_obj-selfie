import React from "react";
import WaIcon from "../../assets/icon/wa_icon.png";

export default function WaLink() {
  const phoneN = ""; /* Inserire numero di Telefono */
  const message = "Ciao! Vorrei informazioni riguardo il vostro servizio";

  return (
    <div className="fixed bottom-5 right-3 z-9999">
      <a
        href={`https://wa.me/${phoneN}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition-color flex items-center z-50"
      >
        <img src={WaIcon} alt="" className="mr-1" />
        <span>Chatta con noi!</span>
      </a>
      {/* Whatsapp Icon From ! <a href="https://www.freepik.com/icon/whatsapp_2504957#fromView=keyword&page=1&position=3&uuid=888fe9bd-d1f8-4456-86e2-1489a602ee7a">Icon by Ruslan Babkin</a> */}
    </div>
  );
}
