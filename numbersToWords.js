export function numbersToWords(num, lang) {
  var ones_ar = [
    "",
    "واحد",
    "اثنان",
    "ثلاثة",
    "أربعة",
    "خمسة",
    "ستة",
    "سبعة",
    "ثمانية",
    "تسعة",
  ];
  var tens_ar = [
    "",
    "",
    "عشرون",
    "ثلاثون",
    "أربعون",
    "خمسون",
    "ستون",
    "سبعون",
    "ثمانون",
    "تسعون",
  ];
  var teens_ar = [
    "عشرة",
    "أحد عشر",
    "اثنا عشر",
    "ثلاثة عشر",
    "أربعة عشر",
    "خمسة عشر",
    "ستة عشر",
    "سبعة عشر",
    "ثمانية عشر",
    "تسعة عشر",
  ];
  var ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  var teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  function numberToArabicWords(num) {
    function convert_millions_ar(num) {
      if (num >= 1000000) {
        return (
          convert_millions_ar(Math.floor(num / 1000000)) +
          " مليون " +
          convert_thousands_ar(num % 1000000)
        );
      } else {
        return convert_thousands_ar(num);
      }
    }

    function convert_thousands_ar(num) {
      if (num >= 1000) {
        return (
          convert_hundreds_ar(Math.floor(num / 1000)) +
          " ألف " +
          convert_hundreds_ar(num % 1000)
        );
      } else {
        return convert_hundreds_ar(num);
      }
    }

    function convert_hundreds_ar(num) {
      if (num > 99) {
        return (
          ones_ar[Math.floor(num / 100)] + " مئة " + convert_tens_ar(num % 100)
        );
      } else {
        return convert_tens_ar(num);
      }
    }

    function convert_tens_ar(num) {
      if (num < 10) return ones_ar[num];
      else if (num >= 10 && num < 20) return teens_ar[num - 10];
      else {
        return tens_ar[Math.floor(num / 10)] + " " + ones_ar[num % 10];
      }
    }
    if (num === 0) return "صفر";
    else return convert_millions_ar(num);
  }

  function convertNumbersToEnglish(num) {
    function convert_millions(num) {
      if (num >= 1000000) {
        return (
          convert_millions(Math.floor(num / 1000000)) +
          " million " +
          convert_thousands(num % 1000000)
        );
      } else {
        return convert_thousands(num);
      }
    }

    function convert_thousands(num) {
      if (num >= 1000) {
        return (
          convert_hundreds(Math.floor(num / 1000)) +
          " thousand " +
          convert_hundreds(num % 1000)
        );
      } else {
        return convert_hundreds(num);
      }
    }

    function convert_hundreds(num) {
      if (num > 99) {
        return (
          ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100)
        );
      } else {
        return convert_tens(num);
      }
    }

    function convert_tens(num) {
      if (num < 10) return ones[num];
      else if (num >= 10 && num < 20) return teens[num - 10];
      else {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
      }
    }

    function convert(num) {
      if (num == 0) return "zero";
      else return convert_millions(num);
    }

    return convert(num);
  }

  if (lang == "ar") {
    return numberToArabicWords(num);
  } else {
    return convertNumbersToEnglish(num);
  }
}

// Export the function for use in other files (Node.js style)
// module.exports = numbersToWords;

// Example usage:
console.log(numbersToWords(12345, "ar")); // Arabic output
console.log(numbersToWords(12345, "en")); // English output
