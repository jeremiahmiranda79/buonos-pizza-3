import React from "react";
import AddressForm from "../components/SignUpFormTest";
// import { GoogleApiWrapper } from ".";
const googleAutoAddress = () => {
  return (
    <div className="container fluid">
      <h1>Address Form with Autocomplete</h1>
      <AddressForm />
    </div>
  );
};
export default googleAutoAddress;