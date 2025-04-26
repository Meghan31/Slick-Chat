<<<<<<< HEAD
import { Request, Response } from "express";
import prisma from "../config/db.config.js";

interface GroupUserType {
  name: string;
  group_id: string;
}

class ChatGroupUserController {
  static async index(req: Request, res: Response) {
    try {
      const { group_id } = req.query;
      const users = await prisma.groupUsers.findMany({
        where: {
          group_id: group_id as string,
        },
      });

      return res.json({ message: "Date fetched successfully!", data: users });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong.please try again!" });
    }
  }

  static async store(req: Request, res: Response) {
    try {
      const body: GroupUserType = req.body;
      const user = await prisma.groupUsers.create({
        data: body,
      });
      return res.json({ message: "User created successfully!", data: user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong.please try again!" });
    }
  }
}

export default ChatGroupUserController;
=======
// import prisma from "./config/db.config.js";
// import { producer, consumer } from "./config/kafka.config.js";

// export const produceMessage = async (topic: string, message: any) => {
//   await producer.send({
//     topic,
//     messages: [{ value: JSON.stringify(message) }],
//   });
// };

// export const consumeMessages = async (topic: string) => {
//   await consumer.connect();
//   await consumer.subscribe({ topic: topic });

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       const data = JSON.parse(message.value.toString());
//       console.log({
//         partition,
//         offset: message.offset,
//         value: data,
//       });

//       await prisma.chats.create({
//         data: data,
//       });

//       // Process the message (e.g., save to DB, trigger some action, etc.)
//     },
//   });
// };



import prisma from "./config/db.config.js";
import { producer, consumer } from "./config/kafka.config.js";

export const produceMessage = async (topic: string, message: any) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
};

export const consumeMessages = async (topic: string) => {
  await consumer.connect();
  await consumer.subscribe({ topic });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const data = JSON.parse(message.value.toString());
      console.log({
        partition,
        offset: message.offset,
        value: data,
      });

      // Save message to the database
      await prisma.chats.create({
        data: data,
      });

      // Process the message (e.g., save to DB, trigger some action, etc.)
    },
  });
};
>>>>>>> e120dd360e23dab67ea9a6aef4a3ae1c1f1650c7
