export default async function Search(req, res){
  try{
      // get the filter options
    const {status, catigury , title} = req.body
      // Get the database
    const db = req.db 
      // check for duplicate usernames in the db
    const giftsDB = db.collection('Gifts')
      // find the user
      console.log({status, catigury , title})
    const FindUser = await giftsDB.find({status, catigury , title}).toArray()
      // return error if exist before
    if (FindUser.length === 0) return res.status(201).json({
      "error": true,
      "message": 'no data to present!',
      data: []
    })
    res.status(200).json({
      error: false,
      message: "the user is exist",
      data: FindUser
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": 'Server error. Please try again later.',
      data: []
    })
  }   
}