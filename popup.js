function setSpeed(speed)
{
	chrome.runtime.sendMessage({ type: 'setSpeed', speed: speed });
}

document.getElementById('tuning').onchange = () => setSpeed(document.getElementById('tuning').value);