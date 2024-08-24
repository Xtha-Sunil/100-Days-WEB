let ans = document.querySelector('.ans');

function fetcher(word) {
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
  .then(response => {
    ans.innerHTML = "loading...";
    return response.json();
  })
  .then(data => {
    ans.innerHTML = "";
    let audioSrc = data[0].phonetics[1].audio;
    let wordClass = data[0].meanings[0].partOfSpeech;
    let meaning = data[0].meanings[0].definitions[0].definition;

    ans.innerHTML += "Word : " + word + "<br>";
    if (phonetic = data[0].phonetic)
      ans.innerHTML += "Phonetic : " + phonetic + '<br>';
    ans.innerHTML += "Pronouncation : " + '<button onclick="aud.play()">🔊</button><audio id="aud" controls hidden><source src = ' +audioSrc + '> </audio> <br>';
    ans.innerHTML += "Word Class : " + wordClass+ '<br>';
    ans.innerHTML += "Meaning : " + meaning+ '<br>';
  }).catch(error => {
    ans.innerHTML = "Sorry no word found.";
  });
}