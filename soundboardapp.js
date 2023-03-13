const sounds = [
    "YADCKYS", 
    "CCC", 
    "BYNTGAGB", 
    "Y2AFZ", 
    "ENEMIES", 
    "ARGHHHHH", 
    "ASDFGHJKL",
    "WHATEVAMAN",
    "WGAF",
    "YSASU",
    "DMWSWFYFR",
    "BUBUBUBUBU",
    "LWIJSYSC",
    "AREYOUZOOTED",
    "AREYOUAGOBLIN",
    "GHBOI"
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAudio();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopAudio() {
  sounds.forEach((sound) => {
    const clip = document.getElementById(sound);

    clip.pause();
    clip.currentTime = 0;
  });
}
