import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { Icon } from '@iconify/react';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); // returns an array of all the keys

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1688141585146-1fb4a1358c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="w-full absolute top-0 sm:relative p-2 md:p-0">
          <div className="w-full max-w-md mx-auto border border-gray-400 rounded-lg p-5 backdrop-blur-sm bg-black/30">
            <div><h1 className="text-3xl text-white text-center mb-6 font-semibold">CURRENCY CONVERTER</h1></div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={(amount)=> setAmount(amount)}
                  currencyOptions={options}
                  onCurrencyChange={(currency) =>
                    setFrom(currency)
                  }
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute pb-1.5 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-rose-600 hover:bg-rose-700  text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap <Icon className="inline-block" icon="iconamoon:swap-bold" />
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white px-4 py-3 rounded-lg hover:bg-rose-700"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
