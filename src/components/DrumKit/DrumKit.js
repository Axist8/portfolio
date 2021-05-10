import { sounds } from '../../assets/sounds/sounds';

export const DrumKit = () => {

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        if (!audio) return; // stop
        audio.currentTime = 0; // rewind
        audio.play(); // hammertime
        key.classList.add('playing');
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

    return (
        <div>
            <div class="keys">
                <div data-key="65" className="key">
                    <kbd>A</kbd>
                    <span class="sound">808</span>
                </div>
                <div data-key="83" className="key">
                    <kbd>S</kbd>
                    <span class="sound">808</span>
                </div>
                <div data-key="68" className="key">
                    <kbd>D</kbd>
                    <span class="sound">kick</span>
                </div>
                <div data-key="70" className="key">
                    <kbd>F</kbd>
                    <span class="sound">hat</span>
                </div>
                <div data-key="71" className="key">
                    <kbd>G</kbd>
                    <span class="sound">ohat</span>
                </div>
                <div data-key="72" className="key">
                    <kbd>H</kbd>
                    <span class="sound">clap</span>
                </div>
                <div data-key="74" className="key">
                    <kbd>J</kbd>
                    <span class="sound">ride</span>
                </div>
                <div data-key="75" className="key">
                    <kbd>K</kbd>
                    <span class="sound">perc</span>
                </div>
            </div>

            <audio data-key="65" src={sounds.eightOeight}></audio>
            <audio data-key="83" src={sounds.eightOHeight}></audio>
            <audio data-key="68" src={sounds.kick}></audio>
            <audio data-key="70" src={sounds.hat}></audio>
            <audio data-key="71" src={sounds.ohat}></audio>
            <audio data-key="72" src={sounds.clap}></audio>
            <audio data-key="74" src={sounds.ride}></audio>
            <audio data-key="75" src={sounds.perc}></audio>
        </div>
    )
}