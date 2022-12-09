import { Request, Response } from 'express'
import Message, { IMessageDocument } from '../models/message'

const getMessages = async (req: Request, res: Response) => {
  try {
    const Messages: IMessageDocument[] = await Message.find()
    res.status(200).json({
      message: 'Messages fetched successfully',
      data: Messages
    })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createMessage = async (req: Request, res: Response) => {
    try {
      const Messages: IMessageDocument = await Message.create(req.body)
      res.status(201).json({
        message: 'Messages created successfully',
        data: Messages
      })
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  }