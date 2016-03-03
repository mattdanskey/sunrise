document.body.innerHTML = `<h1> Hello! Seeing this means everything is working as expected. </h1>`;

let audioContext = new AudioContext();
let oscillator = audioContext.createOscillator();
let gainNode = audioContext.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

oscillator.type = 'square';
oscillator.frequency.value = 140;
oscillator.detune.value = 10;
oscillator.start(0);

gainNode.gain.value = 0.1;

setTimeout(() => gainNode.disconnect(), 1000);