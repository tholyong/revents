import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onOpenEvent, onDeleteEvent } = this.props;
    return (
      <div>
        <h1>EventList</h1>
        {events.map(event => (
          <EventListItem
            onDeleteEvent={onDeleteEvent}
            onOpenEvent={onOpenEvent}
            key={event.id}
            event={event}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
