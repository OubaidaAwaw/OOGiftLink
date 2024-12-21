  // import rate limit lib
import { rateLimit } from "express-rate-limit"

  // ceate dynamic limitation func
const RateLimitRequested = (mins, limit) => rateLimit({
    // 'mins' minutes
	windowMs: mins * 60 * 1000, 
    // Limit each IP to 'limit' requests per `window` (here, per 15 minutes)
	limit: limit, 
    // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	standardHeaders: 'draft-7', 
    // Disable the `X-RateLimit-*` headers
	legacyHeaders: false, 
    // too many request error meesage
  message: {
    "error": true,
    "message": "too many request you can try again later."
  }
})

export default RateLimitRequested