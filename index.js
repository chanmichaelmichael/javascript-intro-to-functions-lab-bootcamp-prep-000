function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    return "I love you too"
  }
  else if(string === string.toUpperCase){
        expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  }
  else if(string === string.toLowerCase ){
    return "I can\'t hear you!"
  }
}