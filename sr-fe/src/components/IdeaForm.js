// import React, { Component } from 'react';
// import axios from 'axios';
//
// class EventForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: this.props.event.city,
//       address: this.props.event.address
//     };
//   }
//
//   handleInput = (e) => {
//     this.props.resetNotification();
//     this.setState({[e.target.name]: e.target.value});
//   }
//
//   handleBlur = () => {
//     const event = {
//       city: this.state.city,
//       address: this.state.address
//     };
//
//     axios.put(
//       `http://localhost:3001/api/v1/events/${this.props.event._id}`,
//       {
//         event: event
//       })
//       .then(response => {
//         console.log(response);
//         this.props.updateEvent(response.data);
//       })
//       .catch(error => console.log(error));
//   }
//
//   render() {
//     return (
//       <div className="tile">
//         <form onBlur={this.handleBlur} >
//           <input className='input' type="text"
//             name="city" placeholder='Enter a Title'
//             value={this.state.city} onChange={this.handleInput}
//             ref={this.props.cityRef}/>
//           <textarea className='input' name="address"
//             placeholder='Describe your event'
//             value={this.state.address} onChange={this.handleInput}>
//           </textarea>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default EventForm;
