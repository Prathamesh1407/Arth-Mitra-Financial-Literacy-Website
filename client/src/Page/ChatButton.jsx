import React from 'react';

const ChatButton = () => {
  const handleClick = () => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/5e160793-5606-4412-ba4c-337e416f14fe/webchat/config.js";
    script2.defer = true;
    document.head.appendChild(script2);
  };

  return (
    <button id="chatWithChanakya" onClick={handleClick} className="bg-gradient-to-r from-green-400 to-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">
      Chat with Chanakya
    </button>
  );
};

export default ChatButton;
