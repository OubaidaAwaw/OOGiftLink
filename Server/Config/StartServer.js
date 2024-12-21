  // import graceful shutdown handler
import handleGracefulShutdown from "../Config/GracefulShutdown.js"
  // import initialize to init the db
import { initializeDatabase } from "../Config/DB.js"

const StartServer = async (app) =>{
  try{
      // initialize the database connection and get the client
    await initializeDatabase()
      // listen server on PORT:5000 http://localhost:5000/
    const server = app.listen(process.env.PORT,() => console.log(`🚀  The Server Have Started On http://localhost:${process.env.PORT}`)/* for dev*/)
      // apply the graceful shutdown
    handleGracefulShutdown(server)
  } catch(err) {
    console.error(err)
      // Exit process if database initialization fails
    process.exit(1)
  } 
}

export default StartServer