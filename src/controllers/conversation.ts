import Conversation from "../models/conversation_model";
import Request from "../common/Request";
import Response from "../common/Response";
import Error from "../common/Error";

const getConversation = async (req) => {
  console.log("getConversation");
  // const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;
  const senderId = req.userId;
  try {
    let isExist = await Conversation.findOne({
      members: [senderId, receiverId],
    });
    if (!isExist)
      isExist = await Conversation.findOne({
        members: [receiverId, senderId],
      });
    //new conversation
    if (!isExist) {
      const newConversation = await new Conversation({
        members: [senderId, receiverId],
      });
      const savedConversation = await newConversation.save();
      return new Response(savedConversation, senderId, null);
    } else {
      //exist conversation
      console.log("conversation exists in db");
      return new Response(isExist, senderId, null);
    }
  } catch (err) {
    return new Response(null, senderId, new Error(400, err.message));
  }
};

export = {
  getConversation,
};
