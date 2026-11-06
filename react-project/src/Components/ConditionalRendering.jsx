import { useState } from "react";

const HouseForRent = () => {
  return (
    <div>
      <h1>House For Rent</h1>
      <p>Location: Chennai, Tamil Nadu</p>
      <p>Bedrooms: 3</p>
      <p>Monthly Rent: Rs. 25,000</p>
      <p>Contact: rent@example.com</p>
    </div>
  );
};

const HouseForSale = () => {
  return (
    <div>
      <h1>House For Sale</h1>
      <p>Location: Bengaluru, Karnataka</p>
      <p>Bedrooms: 4</p>
      <p>Price: Rs. 85,00,000</p>
      <p>Contact: sale@example.com</p>
    </div>
  );
};

const ConditionalRendering = () => {
  const [selection, setSelection] = useState("rent");

  return (
    <div>
      <h2>Choose what you are looking for:</h2>
      <select value={selection} onChange={(e) => setSelection(e.target.value)}>
        <option value="rent">House For Rent</option>
        <option value="sale">House For Sale</option>
      </select>

      {selection === "rent" ? <HouseForRent /> : <HouseForSale />}
    </div>
  );
};

export default ConditionalRendering;
