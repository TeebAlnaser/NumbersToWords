export function numbersToWords(num, lang) {
  const ones_ar = [
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
  const tens_ar = [
    "",
    "عشر",
    "عشرون",
    "ثلاثون",
    "أربعون",
    "خمسون",
    "ستون",
    "سبعون",
    "ثمانون",
    "تسعون",
  ];
  const teens_ar = [
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
        const millions = Math.floor(num / 1000000);

        const remainder = num % 1000000;

        const FirstNumber =
          millions == 1 ? "مليون" : convert_hundreds_ar(millions) + " مليون ";
        return (
          FirstNumber +
          (remainder === 0 ? "" : " و " + convert_thousands_ar(remainder))
        );
      } else {
        return convert_thousands_ar(num);
      }
    }

    function convert_thousands_ar(num) {
      if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        const remainder = num % 1000;
        const FirstNumber =
          thousands == 1
            ? "الف"
            : thousands == 2
            ? "الفان"
            : convert_hundreds_ar(thousands) + " ألف ";
        return (
          FirstNumber +
          (remainder === 0 ? "" : " و " + convert_hundreds_ar(remainder))
        );
      } else {
        return convert_hundreds_ar(num);
      }
    }

    function convert_hundreds_ar(num) {
      if (num == 100) {
        return "مئة";
      } else if (num == 200) {
        return "مئتان";
      } else if (num > 99) {
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        const FirstNumber =
          hundreds == 1
            ? "مئة"
            : hundreds == 2
            ? "مئتان"
            : ones_ar[hundreds] + " مئة ";
        return (
          FirstNumber +
          (remainder === 0 ? "" : " و " + convert_tens_ar(remainder))
        );
      } else {
        return convert_tens_ar(num);
      }
    }

    function convert_tens_ar(num) {
      if (num < 10) return ones_ar[num];
      else if (num >= 10 && num < 20) return teens_ar[num - 10];
      else {
        const tensPart = tens_ar[Math.floor(num / 10)];
        const onesPart = ones_ar[num % 10];
        return onesPart ? `${onesPart} و ${tensPart}` : tensPart;
      }
    }

    if (num === 0) return "صفر";
    else return convert_millions_ar(num).trim();
  }

  function numberToEnglishWords(num) {
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

    if (num == 0) return "zero";
    else return convert_millions(num);
  }

  if (num > 999999999)
    return "we can only convert numbers from 1 to 999999999 :) ";
  else if (lang == "ar") {
    return numberToArabicWords(num);
  } else {
    return numberToEnglishWords(num);
  }
}
