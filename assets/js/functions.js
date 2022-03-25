$(function () {
	//$('.tlt').textillate();

	$('.tlt').textillate({
    loop: true,
    in: {
  	// set the effect name
    effect: 'flash',

    // set the delay factor applied to each consecutive character
    delayScale: 3,

    // set the delay between each character
    delay: 30,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {}
  },
    out: {
    effect: 'flash',
    delayScale: 6,
    delay: 10,
    sync: false,
    shuffle: true,
    reverse: false,
    callback: function () {}
  },
  });

})
