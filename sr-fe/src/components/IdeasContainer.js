// import React, { Component } from 'react';
// import axios from 'axios';
// import update from 'immutability-helper';
//
// import Event from './Event';
// import EventForm from './EventForm';
//
//
// class EventsContainer extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       events: [],
//       editingEventId: null,
//       notification: ''
//     };
//   }
//
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//
//   callApi = async () => {
//     const response = await fetch('http://localhost:3001/api/v1/events');
//     const body = await response.json();
//
//     if (response.status !== 200) throw Error(body.message);
//
//     return body;
//   };
//
//   addNewEvent = () => {
//     axios.post(
//       'http://localhost:3001/api/v1/events',
//       { event:
//         {
//           title: '',
//           body: ''
//         }
//       }
//     )
//       .then(response => {
//         console.log(response);
//         const events = update(this.state.events, {
//           $splice: [[0, 0, response.data]]
//         });
//         this.setState({
//           events: events,
//           editingEventId: response.data.id});
//       })
//       .catch(error => console.log(error));
//   }
//
//   updateEvent = (event) => {
//     const eventIndex = this.state.events.findIndex(x => x.id === event.id);
//     const events = update(this.state.events, {
//       [eventIndex]: { $set: event }
//     });
//     this.setState({
//       events: events,
//       notification: 'Your event has been saved!'});
//   }
//
//   resetNotification = () => {
//     this.setState({notification: ''});
//   }
//
//   enableEditing = (id) => {
//     this.setState({editingEventId: id},
//       () => { this.title.focus() })
//   }
//
//   deleteEvent = (id) => {
//     axios.delete(`http://localhost:3001/api/v1/events/${id}`)
//       .then(response => {
//         const eventIndex = this.state.events.findIndex(x => x.id === id);
//         const events = update(this.state.events, { $splice: [[eventIndex, 1]]});
//         this.setState({events: events});
//       })
//       .catch(error => console.log(error));
//   }
//
//   render() {
//
//     return (
//       <div className="container">
//
//         <div className="new">
//           <button className="newEventButton"
//             onClick={this.addNewEvent} >
//             Ive had an event!
//           </button>
//
//           <span className="notification">
//             {this.state.notification}
//           </span>
//         </div>
//
//         <div className="mapped">
//           {this.state.events.map((event) => {
//             if(this.state.editingEventId === event.id) {
//               return(<EventForm event={event} key={event.id}
//                 updateEvent={this.updateEvent}
//                 titleRef= {input => this.title = input}
//                 resetNotification={this.resetNotification} />);
//             } else {
//               return (<Event event={event} key={event.id}
//                 onClick={this.enableEditing}
//                 onDelete={this.deleteEvent}/>);
//             }
//           })}
//         </div>
//
//       </div>
//     );
//   }
// }
//
// export default EventsContainer;
