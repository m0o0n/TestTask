import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const PhoneField = () => {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"us"}
      value={phone}
      onChange={setPhone}
      inputProps={{
        name: "phone",
        required: true,
        autoFocus: true,
      }}
    />
  );
};

export default PhoneField;
