  // import express 
import express from 'express'

  // this middleware will check if the incoming body is valid JSON
export default express.json({
  strict: true, 
  limit: '100kb',
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf);
    } catch (err) {
      console.error(err)
      res.status(400).json({ 
        error: true,
        message: 'not valid JSON'
      })
    }
  }
})