var input = document.querySelectorAll("textarea")[0],
  characterCount = document.querySelector("#characterCount"),
  wordCount = document.querySelector("#wordCount"),
  sentenceCount = document.querySelector("#sentenceCount"),
  paragraphCount = document.querySelector("#paragraphCount");

// updating the displayed stats after every keypress
input.addEventListener("keyup", function () {
  //keeping the console clean to make only the latest data visible
  console.clear();

  // character count
  // just displaying the input length as everything is a character
  characterCount.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  // console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  // sentence count	using ./!/? as sentense separators
  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    console.log(sentences);
    sentenceCount.innerHTML = sentences.length - 1;
  } else {
    sentenceCount.innerHTML = 0;
  }

  // paragraph count from
  if (words) {
    var paragraphs = input.value.replace(/\n$/gm, "").split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
});
