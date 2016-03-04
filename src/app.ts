let audioContext = new AudioContext();
let gainNode = audioContext.createGain();

gainNode.connect(audioContext.destination);
gainNode.gain.value = 0.3;

function warble(context: AudioContext, frequency: number, duration: number) {
    let oscillator = audioContext.createOscillator();
    oscillator.type = 'triangle';
    oscillator.connect(gainNode);
    oscillator.frequency.value = frequency;
    oscillator.start(0);    
    oscillator.stop(audioContext.currentTime + duration);
}

warble(audioContext, 120, 1);

let hertz = <HTMLInputElement>document.getElementById('hertz');
let duration = <HTMLInputElement>document.getElementById('duration');
let soundButton = document.getElementById('makeSound');

soundButton.onclick = () => warble(audioContext, Number(hertz.value), Number(duration.value));