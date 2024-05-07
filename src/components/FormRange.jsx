import { formatPrice } from "../utils";
import { useState } from "react";

function FormRange({ name, label, size }) {
  const step = 1000;
  const maxPrise = 10000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrise);
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrise}
        value={selectedPrice}
        onChange={(e)=>setSelectedPrice(e.target.value)}
        className={`range range-secondary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2" >
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrise)}</span>
      </div>
    </div>
  );
}

export default FormRange;
