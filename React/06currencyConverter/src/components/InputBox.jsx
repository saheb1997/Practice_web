import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  const id = useId();

  const currencyToCountry = {
    usd: "us",
    inr: "in",
    eur: "eu",
    gbp: "gb",
    jpy: "jp",
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md flex justify-between items-center">

      {/* Amount */}
      <div className="flex flex-col w-1/2">
        <label htmlFor={id} className="text-gray-500 text-sm">
          {label}
        </label>

        <input
          id={id}
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange?.(e.target.value)}
          className="text-xl font-semibold bg-transparent outline-none"
        />
      </div>

      {/* Currency */}
      <div className="flex items-center gap-2">

        {/* Flag */}
        <span className={`fi fi-${currencyToCountry[selectCurrency]}`}></span>

        {/* Dropdown */}
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          className="bg-gray-100 rounded-lg px-3 py-1 outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}

export default InputBox;