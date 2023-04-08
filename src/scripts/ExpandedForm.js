function ExpandedForm(num) {
   let numStr = String(num).split("");

   for (let i = 0; i < numStr.length; i++) {
      for (let j = numStr.length - i; j > 1; j--) {
         numStr[i] == "0" ? i++ : (numStr[i] += "0");
      }
   }

   return numStr.filter((item) => item != "0").join(" + ");
}

module.exports = ExpandedForm;
