  // import client
import { getClient as client } from './DB.js'

  // import debug
import debug  from 'debug'

const handleGracefulShutdown = (server) => {
    // handle SIGTERM termination signal
  process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      debug('HTTP server closed');
    });
  });
  
    // handle SIGINT from Ctrl+C
  process.on('SIGINT', async () => {
    try {
        // close database connection
      if (client) {
        await client.close();
        console.error('Database connection closed.');
      }
    } catch (err) {
      console.error('Error during shutdown:', err);
    } finally {
        // exit the process with a success code
      process.exit(0);
    }
  });
};

export default handleGracefulShutdown ;