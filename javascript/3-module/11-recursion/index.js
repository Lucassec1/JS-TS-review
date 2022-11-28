function returnEvenNumber (i) {
   if (i % 2 == 0) {
      console.log("The number " + i + " is even");
   } else {
      console.log()
      returnEvenNumber(i - 1);
   }
}

returnEvenNumber(13);
