// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
// import { GoogleApiWrapper } from "google-maps-react";

// class AddressForm extends Component {
//   constructor(props) {
//     super(props);
//     this.autocompleteInput = React.createRef();
//     this.state = {
//       city: "",
//       state: "",
//       zipcode: "",
//     };
//   }

//   componentDidMount() {
//     // Check if the google object is available before using it
//     const { google } = this.props;
//     if (google) {
//       // Initialize Google Autocomplete
//       this.autocomplete = new google.maps.places.Autocomplete(
//         this.autocompleteInput.current
//       );
//       this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
//     }
//   }

//   handlePlaceChanged = () => {
//     const place = this.autocomplete.getPlace();
//     console.log("Selected Place:", place);

//     // Extract address components and update the state
//     const addressComponents = place.address_components;
//     addressComponents.forEach((component) => {
//       if (component.types.includes("locality")) {
//         this.setState({ city: component.long_name });
//       } else if (component.types.includes("administrative_area_level_1")) {
//         this.setState({ state: component.short_name });
//       } else if (component.types.includes("postal_code")) {
//         this.setState({ zipcode: component.long_name });
//       }
//     });
//   };

//   render() {
//     // Rest of your render method
//     return (
//       <Form>
//         <Form.Group controlId="address">
//           <Form.Label>Address</Form.Label>
//           <input
//             ref={this.autocompleteInput}
//             type="text"
//             placeholder="Enter your address"
//             className="form-control"
//           />
//         </Form.Group>
//         {/* Rest of your code... */}
//         <Form.Group controlId="city">
//           <Form.Label>City</Form.Label>
//           <input
//             type="text"
//             placeholder="Enter your city"
//             className="form-control"
//             value={this.state.city}
//             onChange={() => {}}
//           />
//         </Form.Group>
//         <Form.Group controlId="state">
//           <Form.Label>State</Form.Label>
//           <input
//             type="text"
//             placeholder="Enter your state"
//             className="form-control"
//             value={this.state.state}
//             onChange={() => {}}
//           />
//         </Form.Group>
//         <Form.Group controlId="zipcode">
//           <Form.Label>Zipcode</Form.Label>
//           <input
//             type="text"
//             placeholder="Enter your zipcode"
//             className="form-control"
//             value={this.state.zipcode}
//             onChange={() => {}}
//           />
//         </Form.Group>
//         {/* Rest of your code... */}
//       </Form>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAlegkgNSCs2tjrGNSg9k5x7OJrz-g8dY4",
// })(AddressForm);
