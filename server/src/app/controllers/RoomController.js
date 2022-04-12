import { Room } from '../models/Room';
import { PostModel } from '../models/Post';

export const getRooms = async (req, res) => {
try {
const post = new PostModel({
title: 'test',
content: 'test',
});
const rooms = await Room.find();
res.status(200).json(rooms);
} catch (error) {
res.status(500).json({ message: error.message });
}
};
export const createRoom = async (req, res) => {
try {
const room = new Room(req.body);
await room.save();
res.status(200).json(room);
} catch (error) {
res.status(500).json({ message: error.message });
}
};
