/////////////////////////////////////////////////
//                                             //
//   This is a test Document                   //
//   Testing                                   //
//   123                                       //
//                                             //
/////////////////////////////////////////////////

// Breakup text to max characters
const brakeUpText = (text, commentType = "//")=> {
  const textLength = text.length;
  const padding = 4;
  const lineLimit = 30; // works from range 21+
  if (textLength > lineLimit){
    textSegments = text.split(" ");
    let segmentLengthSum = 0;
    let next = 0;
    let line = "";
    let i=0;
    for (i=0; i < textSegments.length; i++){
      segmentLengthSum += textSegments[i].length;
      if(segmentLengthSum > lineLimit){
        newLine = commentType + " ".repeat(padding/2) + textSegments.slice(next,i).join(" ");
        newLineSpace = " ".repeat(lineLimit*2 - newLine.length -2) + commentType ;
        line += newLine + newLineSpace + "\n";
        segmentLengthSum = 0;
        next = i;
      }
    }
    newLine = commentType + " ".repeat(padding/2)+textSegments.slice(next,i).join(" ");
    newLineSpace = " ".repeat(lineLimit*2 - newLine.length -2) + commentType ;
    line += newLine + newLineSpace;
    console.log(commentType .repeat(lineLimit));
    console.log(line);
    console.log(commentType .repeat(lineLimit));
  }
}

let text = "This is a sample text for the document, it should be properly modified and presented in the document.";
brakeUpText(text+text+text+text+text+text);
//output
////////////////////////////////////////////////////////////
//  This is a sample text for the                         //
//  document, it should be properly modified and          //
//  presented in the document.This is a sample            //
//  text for the document, it should be                   //
//  properly modified and presented in the                //
//  document.This is a sample text for the document, it   //
//  should be properly modified and presented             //
//  in the document.This is a sample text                 //
//  for the document, it should be properly               //
//  modified and presented in the document.This           //
//  is a sample text for the document, it                 //
//  should be properly modified and presented             //
//  in the document.This is a sample text                 //
//  for the document, it should be properly               //
//  modified and presented in the document.               //
////////////////////////////////////////////////////////////