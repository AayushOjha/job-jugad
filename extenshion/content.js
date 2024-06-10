//!FIME:  use safe method
import { OPEN_AI_API_KEY } from "../constants/CRED"

var turndownService = new TurndownService()


if ($(".jobs-box__html-content")) {
  const JD = turndownService.turndown($(".jobs-box__html-content").html())
  console.log(OPEN_AI_API_KEY)  
}else{
  // TDOD: handle error/failure
  // handle things like if the JD is bigger that GPT api can handle
}
