  // import object id from mongodb
import { ObjectId } from "mongodb"

async function GetCommentsByGiftId(req, res) {
  try{
      // get the id
    const { id } = req.params
      // check the id
    if(!id || !ObjectId.isValid(id)) return res.status(201).json({
      error: true,
      message: "the request is not good!",
      data: [],
    })
      // get the db
    const db = req.db
      // connect the collection
    const comments = await db.collection("Comments")
      // find by id
    const Founded = await comments.find({gid : id}).toArray()
      // check if founded
    if(Founded.length === 0) return res.status(200).json({
      error: true,
      message: "the gift is not exist!",
      data:[]
    })
    res.status(200).json({
      error: false,
      message: "these are all comments",
      data: Founded,
    })
  } catch(err){
    console.error(err)
    res.status(500).json({
      error: true,
      message: "internal server error!!",
      data: [],
    })
  }
}

async function CreateComment(req, res) {
  try{
    // declare the data
  const name = req.name
  const {gid , comment} = req.body
    // check the id
  if(!gid || !ObjectId.isValid(gid)) return res.status(201).json({
    error: true,
    message: "the request is not good!",
    data:[]
  })
    // new comment
  const newComment = {
    gid,
    comment,
    name,
  }
    // get db
  const db = req.db
  const comments = await db.collection('Comments')
    // insert and check
  const isInserted = await comments.insertOne(newComment)
  if(isInserted.insertedCount === 0) return res.status(500).json({
    error: true,
    message: 'Failed to add the new gift data.',
    data: newComment
  })
    // good res
  res.status(200).json({
    error: false,
    message: "the comment is added successfully",
    data:[]
  })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!",
      data:[]
    })
  }
}

async function DeleteComment(req, res) {
    // get the id
  const { id } = req.params
    // validate id
  if(!id || !ObjectId.isValid(id)) return res.status(201).json({
    error: true,
    message: "the request is not good!",
    data:[]
  })
    // get user name
  const name = req.name
    // get db
  const db = req.db
  const DComment = {
    name, 
    gid: id,
  }
  const comments = await db.collection('Comments')
    // delete comment or not found
  const isDeleted = await comments.deleteOne(DComment)
  if(isDeleted.deletedCound === 0) return res.status(500).json({
    error: true,
    message: "the comment is not found!",
    data:[]
  })
    // deleted
  res.status(200).json({
    error: false,
    message: "the comment is deleted successflly!",
    data:[]
  })
}

export default {
  GetCommentsByGiftId,
  CreateComment,
  DeleteComment
}

// comment
//* name
//* gid
//* comment