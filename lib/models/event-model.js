import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  event_Name: {
    type: String,
    required: true,
  },
  event_Description: {
    type: String,
    required: true,
  },
  event_Poster: {
    data: Buffer,
    contentType: String,
  },
});

const EventModel = models.EventModel || model("EventModel", eventSchema);

export default EventModel;
