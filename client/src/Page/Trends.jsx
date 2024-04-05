import React from 'react';

const Trends = () => {
  return (
    <div className="container mx-1 mt-8">      
      <div className="font-source-sans-pro font-normal text-base leading-6 text-black border-0 box-border block h-46 w-full">
        <iframe className="h-full w-full" src='https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22AMEX%3ASPY%22%7D%2C%7B%22proName%22%3A%22NASDAQ%3AQQQ%22%7D%2C%7B%22proName%22%3A%22AMEX%3ADIA%22%7D%2C%7B%22proName%22%3A%22INDEX%3AV9Y0%22%7D%2C%7B%22proName%22%3A%22CAPITALCOM%3AEURUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22www.investopedia.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.investopedia.com%2F%22%7D' title="Financial Trends" />
      </div>
    </div>
  );
};

export default Trends;
