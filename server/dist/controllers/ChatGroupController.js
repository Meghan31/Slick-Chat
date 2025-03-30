import prisma from '../config/db.config.js';
class ChatGroupController {
    static async index(req, res) {
        try {
            const user = req.user;
            const groups = await prisma.chatGroup.findMany({
                where: {
                    user_id: Number(user.id),
                },
                orderBy: {
                    created_at: 'desc',
                },
            });
            return res.status(201).json({
                message: 'Chat Groups are fetched successfully',
                data: groups,
            });
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: 'Something went wrong, Please try again' });
        }
    }
    static async show(req, res) {
        try {
            const { id } = req.params;
            const groups = await prisma.chatGroup.findUnique({
                where: {
                    id: id,
                },
            });
            return res
                .status(201)
                .json({ message: 'Chat Group fetched successfully', data: groups });
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: 'Something went wrong, Please try again' });
        }
    }
    static async store(req, res) {
        try {
            const body = req.body;
            const user = req.user;
            await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: Number(user.id),
                },
            });
            return res.status(201).json({ message: 'Group created successfully' });
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: 'Something went wrong, Please try again' });
        }
    }
    static async update(req, res) {
        try {
            const body = req.body;
            const { id } = req.params;
            await prisma.chatGroup.update({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                },
                where: {
                    id: id,
                },
            });
            return res
                .status(201)
                .json({ message: 'Chat Group updated successfully' });
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: 'Something went wrong, Please try again' });
        }
    }
    static async destroy(req, res) {
        try {
            const { id } = req.params;
            const groups = await prisma.chatGroup.delete({
                where: {
                    id: id,
                },
            });
            return res
                .status(201)
                .json({ message: 'Chat Group deleted successfully' });
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: 'Something went wrong, Please try again' });
        }
    }
}
export default ChatGroupController;
