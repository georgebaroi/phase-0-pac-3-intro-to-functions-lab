function shout(string){
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string){
    console.log(string.toUpperCase())
}
function logWhisper(string){console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    let low = "I can\'t hear you!"
    let high = "YES INDEED!"
    let dinner = "I would love to!"
    if (string.toLowerCase(string) === string){
        return low;}
        else if (string.toUpperCase(string) === string){
            return high
        }
        else if ("Let\'s have dinner together!" === string){
            return dinner
        }
    } 