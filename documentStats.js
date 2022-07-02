/////////////////////////////////////////////////
//                                             //
//   This is a test Document                   //
//   Testing                                   //
//   123                                       //
//                                             //
/////////////////////////////////////////////////

// Breakup text to max 80 character
const brakeUpText = (text)=> {
  let textLength = text.length;
  if (textLength > 40){
    textSegments = text.split(" ");
    let segmentLengthSum = 0;
    let next = 0;
    let line = "";
  
    for (let i=0; i <= textSegments.length; i++){
      segmentLengthSum += textSegments[i].length;
      line += textSegments.splice(next,i).join(" ");
      console.log(segmentLengthSum);
      if(segmentLengthSum > 10){
        console.log(line + "\n");
        segmentLengthSum = 0;
        next = i;
        line = "";
      }
    }
  }
}

let text = "this is a sample text for the document, it should be properly modified and presented in the document.";
brakeUpText(text+text+text+text+text+text);