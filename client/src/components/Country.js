import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const Country = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Country;
