/* js.css.html generator qoutes*/
/* Please donate ihackyours */

document.addEventListener("DOMContentLoaded",function(){
  

  const quotesPool = [["Walau terlihat sulit, kalau tidak dicoba tidak akan pernah tahu bagaimana cara menaklukkannya", "404"],
                ["Perjuangan merupakan tanda perjalananmu menuju sukses", "404"],
                ["Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik, tetapi yang jelas membuka jalan kebaikan", "Eleanor Roosevelt"],
                ["Rahasia dari kesuksesan kita adalah bahwa kita tidak pernah menyerah", "Ilma Mankiller"],
                ["Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanyalah sementara", "Shah Rukh Khan"],
                ["Yang keren itu bukan anak muda yang banyak gaya, tapi anak muda yang banyak karya", "404"],
                ["Belajarlah rendah hati, rendahkan hatimu serendah-rendahnya hingga tidak ada seorangpun yang bisa merendahkanmu", "404"],
                ["Jangan biarkan opini orang lain menenggelamkan suara dari dalam diri Anda", "Steve Jobs"],
                ["Jika rencana Anda tidak berjalan, maka ganti rencana tersebut, jangan tujuannya.", "anonim"],
                ["Hidup tak selamanya tentang pacar", "IHackYours"],
                ["Kesepian terburuk adalah tidak nyaman dengan diri sendiri", "Mark Twain"],
                ["Secapek-capeknya kerja lebih capek nganggur", "Ernest Prakasa"],
                ["Balas dendam terbaik adalah menjadikan dirimu lebih baik", "Ali bin Abi Thalib"],
                ["Pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai", "JRR Tolkien"],
                ["Mulai setiap harimu dengan pikiran positif dan hati yang bersyukur", "Roy T. Bennett."]];


  const colorsPool = [["#ECF5B7", "#9CB418", "#7D9014"],
                    ["#B7E1CE", "#358260", "#1E4835"],
                    ["#FFAB91", "#FF7043", "#E64A19"],
                    ["#C3C8BC", "#919A84", "#5E6553"],
                    ["#EF9A9A", "#F44336", "#D32F2F"],
                    ["#E6EE9C", "#CDDC39", "#827717"],
                    ["#90CAF9", "#2196F3", "#1565C0"],
                    ["#CE93D8", "#AB47BC", "#6A1B9A"],
                    ["#F8BBD0", "#F06292", "#E91E63"],
                    ["#C5CAE9", "#7986CB", "#3F51B5"],
                    ["#B0BEC5", "#78909C", "#546E7A"],
                    ["#B2EBF2", "#26C6DA", "#0097A7"],
                    ["#BCAAA4", "#795548", "#3E2723"]];


  let oldQuoteIndex;
  let oldColorIndex;


  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }


  function generateNewQuote() {
    let index = generateNumber(quotesPool);

    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");

    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];

    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://wa.me/6283140861605"' + newQuote[0] + '" -' + newQuote[1];

    oldQuoteIndex = index;
  }


  function generateNewColor() {
    let index = generateNumber(colorsPool);

    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let twitterButton = document.querySelectorAll(".btn")[1];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
    let twitterBorder = document.querySelectorAll(".border-smaller")[1];

    randomQuoteButton.style.background = colorShade[0];
    twitterButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
    twitterBorder.style.borderColor = colorShade[1];
    twitterBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];

    oldColorIndex = index;
  }


  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();


  window.onload = function () {
    generateNewQuote();
    generateNewColor();
  };
  
});