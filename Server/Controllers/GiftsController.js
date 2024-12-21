  // import objectId from mongodb 
import { ObjectId } from "mongodb"

  // import file system
import fs from "fs"

  // import validator
import { validationResult } from 'express-validator'

  // import clamscan
// import NodeClam  from 'clamscan';

async function GetGiftById(req, res) {
  try{
      // get the id
    const { id } = req.params
      // check the id
    if(!id || !ObjectId.isValid(id)) return res.status(201).json({
      error: true,
      message: "the request is not good!",
      data: []
    })
      // declare the id correctly
    const _id = new ObjectId(id)
      // get the db
    const db = req.db
      // connect the collection
    const gifts = await db.collection("Gifts")
      // find by id
    const Founded = await gifts.find({_id}).toArray()
      // check if founded
    if(Object.keys(Founded).length === 0) return res.status(500).json({
      error: true,
      message: "the gift is not exist!",
      data: []
    })
    res.status(200).json({
      error: false,
      message: "",
      data: Founded[0],
    })
  } catch(err){
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!",
      data: []
    })
  }
}

async function GetGifts(req, res) {
  try{
      // get the db
    const db = req.db
      // connect the collection
    const gifts = await db.collection("Gifts")
      // find by id
    const Founded = await gifts.find().toArray()
      // check if founded
    if(Object.keys(Founded).length === 0) return res.status(201).json({
      error: true,
      message: "No gifts yet, you can try again later.",
      data: []
    })
    res.status(200).json({
      error: false,
      message: "the operation done successfully!",
      data: Founded,
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!",
      data: []
    })
  }
}

async function DeleteGiftById(req, res) {
  try{
      // get the id
    const { id } = req.params
      // check the id
    if(!id || !ObjectId.isValid(id)) return res.status(201).json({
      error: true,
      message: "the request is not good!",
      data: []
    })
      // declare the id correctly
    const _id = new ObjectId(id)
      // get the db
    const db = req.db
      // connect the collection
    const gifts = await db.collection("Gifts")
      // check if the user should delete it or not based on the name
    const name = req.name
    const isFounded = await gifts.find({ $and: { name, _id } })
    if(isFounded.length === 0) return req.status(500).json({
      error: true,
      message: "you can't delete this gift",
      data: []
    })
      // find by id
    const isDeleted = await gifts.deleteOne({_id})
      // check if founded
    if(isDeleted.deletedCound === 0) return res.status(500).json({
      error: true,
      message: "the gift is not found!",
      data: []
    })
    res.status(200).json({
      error: false,
      message: "the gift is deleted",
      data: []
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!",
      data: []
    })
  }
}

async function CreateGift(req, res) {
  try {
      // check if we have errors vaildation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        "error": true,
        "message": 'Validation failed',
        "errors": errors.array(),
        data: []
      });
    }
      // check if dir not exist
    if (!fs.existsSync('/uploads')) {
      fs.mkdirSync('/uploads', { recursive: true });
    }
      // Initialize ClamAV
    if (!req.file) return res.status(400).json({
      error: true,
      message: 'No file uploaded.' ,
      data: []
    })
    
    // const clamscan = new NodeClam().init({
    //   remove_infected: false,
    //   quarantine_infected: null,
    //   debug_mode: true,
    // }); 
    //   // scan the file buffer with ClamAV
    // const { is_infected } = await clamscan.then((clamscan) => clamscan.scan_file(req.file.path))
    // if (is_infected) {
    //   fs.unlinkSync(req.file.path)
    //   return res.status(400).json({
    //     error: true, 
    //     message: 'File is infected and was rejected.',
    //   })
    // }
      // get the data
    const { title, status, catigury} = req.body
    const name = req.name
    const now = new Date()
    const date = `${now.getFullYear()}/${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}` 
    const image = req.file.filename
      // get the db
    const db = req.db
      // connect the collection
    const gifts = await db.collection("Gifts")
      // declare the new gift
    const NewGift = {
      name,
      title,
      status,
      catigury,
      date,
      image,
    }
      // insert new gift
    const isInserted = await gifts.insertOne(NewGift)
    if(isInserted.insertedCount === 0) return res.status(500).json({
      "error": true,
      "message": 'Failed to add the new gift data.',
      data: []
    })
    res.status(200).json({
      error: false,
      message: "the gift is deleted",
      data: NewGift
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!",
      data: []
    })
  }
}

async function UpdateGift(req, res) {
  try{
      // check if we have errors vaildation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        "error": true,
        "message": 'Validation failed',
        "errors": errors.array(),
        data: []
      })
    }
      // get the id
    const { id } = req.params
      // check the id
    if(!id || !ObjectId.isValid(id)) return res.status(201).json({
      error: true,
      message: "the request is not good!",
      data: []
    })
      // get updated data
    const {name , email} = req.body
      // declare the id correctly
    const _id = new ObjectId(id)
      // get the db
    const db = req.db
      // connect the collection
    const gifts = await db.collection("Gifts")
    // update user data
    const UpdatedData = {name , email}
    const isUpdated = await gifts.updateOne({ _id } , { $set: UpdatedData })
    if(isUpdated.modifiedCount === 0) return res.status(500).json({
      error: true,
      message: 'Failed to update the refresh token.',
      data: []
    });
    res.status(200).json({
      error: false,
      message: "the data is updated successfully",
      data: UpdatedData
    })
  } catch(err) {
    fs.unlinkSync(req.file.path);
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!",
      data: []
    })
  }
}

export default {
  GetGifts,
  GetGiftById,
  DeleteGiftById,
  CreateGift,
  UpdateGift,
}