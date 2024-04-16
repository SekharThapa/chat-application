import ConversationModel from "../model/Conversation.js";
import MessageModel from "../model/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const { _id: senderId } = req.user;

    const conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    
    if (!conversation) {
      ConversationModel.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new MessageModel({
      senderId: senderId,
      receiverId: receiverId,
      messages: message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Socket functionality here

    await conversation.save();
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(403).json({ message: error.message, success: false });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: usertoChatId } = req.params;
    const { _id: senderId } = req.user;

    const conversation = await ConversationModel.findOne({
      participants: { $all: [senderId, usertoChatId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json({ message: conversation.messages, success: true });
  } catch (error) {
    res.status(403).json({ message: error, success: false });
  }
};
