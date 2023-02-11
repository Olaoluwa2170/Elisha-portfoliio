import React from "react";
import mail from './assets/img/mail.svg'
import coffee from './assets/img/coffee.svg'



const ButtonFacing = () => {
  return (
    <div className="flex gap-5 mt-8 justify-center">
        <a href="mailto:elitebabson@gmail.com" target=" _blank" rel="noopener noreferrer" class="text-white mt-2 font-bold text-xs py-2 px-4 rounded hover:shadow-lg">
        <img src={mail} className="w-5 mr-2 inline" alt="" srcset="" />
            Send Me A Mail
        </a>
        <a href="https://www.buymeacoffee.com/elitebabsoC" target={"_blank"}  class="text-white font-bold text-xs py-2 px-4 rounded hover:shadow-lg">
            <img src={coffee} className="w-7 mr-1 inline" alt="" srcset="" />
            Buy me a coffee
        </a>
    </div>
  );
};

export default ButtonFacing;
