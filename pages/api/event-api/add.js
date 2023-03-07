import ConnectMongoDB from "../../../lib/connect_mongo_db";
import EventModel from "../../../lib/models/event-model";

const addEvent = async (req, res) => {
  try {
    console.log("Connecting to Mongo DB");
    await ConnectMongoDB();
    console.log("Succesfully Connected to Mongo DB");
    console.log("Creating Document");
    const NewEventModel = await EventModel.create(req.body);
    console.log("Document Created");
    res.json({ NewEventModel });
  } catch (error) {
    res.json({ error });
    console.log(error)
  }
};

export default addEvent;
