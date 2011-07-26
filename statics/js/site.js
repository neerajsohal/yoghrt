
$(document).ready(function(){
    $.backstretch(base_url() + 'statics/images/wallpapers/2.jpg');
    $(".tipsify").tipsy();
    $("#playlist").css({
        'height' : $(window).height() - 34,
        'top' : 34,
        'display' : 'none'
    });
    $("#playlist #border").click(function(){
        $(this).parent().animate({
            'left' : -195
        })
    });
   	
    init_soundmanager(function(){
        yp = new yoghrt_player();
        yp.init();

        ys = new yoghrt_stage();
        ys.init();
    });
})

function init_soundmanager(callback) {
    soundManager.url = base_url() + 'statics/swf/soundmanager';
    soundManager.flashVersion = 9; // optional: shiny features (default = 8)
    soundManager.useFlashBlock = false; // optionally, enable when you're ready to dive in
    // enable HTML5 audio support, if you're feeling adventurous. iPad/iPhone will always get this.
    //soundManager.useHTML5Audio = true;
    soundManager.flash9Options.usePeakData= true;   // enable left/right channel peak (level) data
    //soundManager.flash9Options.useWaveformData=true;// enable sound spectrum (raw waveform data) - Note: May be CPU-intensive, UI redraw/layout etc.
    //soundManager.flash9Options.useEQData= true;     // enable sound EQ (frequency spectrum data) - Note: CPU potential also.
    soundManager.onready(function() {
        // Ready to use; soundManager.createSound() etc. can now be called.
        callback();
    });
}


