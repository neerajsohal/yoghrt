yoghrt_player = function() {

    player = this;
    dom_el = $('#yoghrt_player');
    api_key = 'hlH1LGAYjqKal9AlGCMNkA';
    tracks = null;
    curr_track = null;
    curr_track_num = null;

    is_mute = false;
    is_playing = false;
    is_paused = null;
    is_auto_next = true;
    peak_data = new Object();
    

    this.init = function() {
        player.get_tracks(function(){
            this.setup_ui();
        //this.play();
        });
        peak_data.left = 0;
        peak_data.right = 0;
    }

    this.getPeakDataLeft = function() {
        return peak_data.left;
    }

    this.getPeakDataRight = function() {
        return peak_data.right;
    }

    this.togglePlay = function() {

        dom_el.find('#play').toggleClass('paused');

        if(is_playing == false) {
            tracks[curr_track_num].sm_sound.play({
                whileplaying: function(){
                    $("#yoghrt_player #ticker").html(time(this.position));
                    peak_data.left = this.peakData.left;
                    peak_data.right = this.peakData.right;
                },
                onfinish: function() {
                    if(is_auto_next) {
                        player.next();
                    }
                    soundManager._writeDebug(this.sID+' finished playing');
                }
            });
            is_playing = true;
        } else {
            tracks[curr_track_num].sm_sound.pause({
                });
            is_playing = false;
        }
    }

    this.next = function() {
        player.togglePlay();
        player.loadNextSound();
        player.loadArtwork();
        player.loadTitle();
        player.loadDetails();
        player.togglePlay();
    }

    this.previous = function() {
        player.togglePlay();
        player.loadPreviousSound();
        player.loadArtwork();
        player.loadTitle();
        player.loadDetails();
        player.togglePlay();
    }

    this.stop = function() {
        dom_el.find('#play').removeClass('paused');
        is_playing = false;
        player.reset_ticker();
        tracks[curr_track_num].sm_sound.stop();
    }

    this.pause = function() {
        tracks[curr_track_num].pause();
    }

    this.toggleMute = function() {
        if(is_mute == true) {
            soundManager.unmute();
            is_mute = false;
        } else {
            soundManager.mute();
            is_mute = true;
        }
    }

    this.loadArtwork = function() {
        dom_el.find('#artwork').html('<img src=\"'+tracks[curr_track_num].artwork_url+'\" />');
    }

    this.toggleMeta = function() {
    	dom_el.find("#meta").slideToggle();
    }


    this.loadTitle = function() {
        dom_el.find('#osd').html(tracks[curr_track_num].title);
    }

    this.loadDetails = function() {
        dom_el.find('#meta #artwork').html('<img src=\"'+tracks[curr_track_num].artwork_url+'\" />');
        dom_el.find('#meta #title').html(tracks[curr_track_num].title.substr(0, 32));
        dom_el.find('#meta #user').html(tracks[curr_track_num].user.username.substr(0, 32));
        dom_el.find('#meta #comments span').html(tracks[curr_track_num].comment_count);
        dom_el.find('#meta #play_count span').html(tracks[curr_track_num].playback_count);
        dom_el.find('#meta #genre span').html(tracks[curr_track_num].genre);
    }

    this.loadNextSound = function() {
        player.destroySound();

        curr_track_num++;
        if(curr_track_num > tracks.length) {
            curr_track_num = 0;
        }

        player.createSound();

    }

    this.loadPreviousSound = function() {
        player.destroySound();

        curr_track_num--;
        if(curr_track_num < 0) {
            curr_track_num = tracks.length - 1;
        }

        player.createSound();
    }

    this.destroySound = function() {
        if(tracks[curr_track_num].sm_sound.playState) {
            tracks[curr_track_num].sm_sound.destruct();
        }
    }

    this.createSound = function() {
        tracks[curr_track_num].sm_sound = soundManager.createSound('yp_'+tracks[curr_track_num].id, tracks[curr_track_num].stream_url+'?consumer_key='+api_key);
        console.log(tracks[curr_track_num].sm_sound);
    }

    this.reset_ticker = function() {
        dom_el.find("#ticker").html('00:00:00');
    }

    setup_ui = function() {
        dom_el.find('#stop').click(function(){
            player.stop();
        })
        dom_el.find('#play').click(function(){
            player.togglePlay();
        })
        dom_el.find('#love').click(function(){
            $(this).toggleClass('loved');
        })
        dom_el.find('#next').click(function(){
            player.next();
        })
        dom_el.find('#previous').click(function(){
            player.previous();
        })
        dom_el.find('#volume').click(function(){
            $(this).toggleClass('muted');
            player.toggleMute();
        })
        dom_el.find('#artwork').click(function(){
            $(this).parent().find('#meta').slideToggle();
        })
        $("#soundcloud_logo").jrumble();
    }

    this.get_tracks = function(callback) {
        $.ajax({
            'url' : site_url() + '/ajax/get_tracks',
            dataType: 'json',
            type: 'POST',
            data: 'genre=rock',
            success: function(data) {
                tracks = data;
                curr_track_num = 0;
                tracks[curr_track_num].sm_sound = soundManager.createSound('yp_'+tracks[curr_track_num].id, tracks[curr_track_num].stream_url+'?consumer_key='+api_key);
                player.loadTitle();
                player.loadArtwork();
                player.loadDetails();
                callback();
            }
        });
    }

}


function two(x) {
    return ((x>9)?"":"0")+x
}
function three(x) {
    return ((x>99)?"":"0")+((x>9)?"":"0")+x
}

function time(ms) {
    var sec = Math.floor(ms/1000)
    ms = ms % 100
    t = two(ms)

    var min = Math.floor(sec/60)
    sec = sec % 60
    t = two(sec) + ":" + t

    var hr = Math.floor(min/60)
    min = min % 60
    t = two(min) + ":" + t

    var day = Math.floor(hr/60)
    hr = hr % 60
    //t = two(hr) + ":" + t
    //t = day + ":" + t

    return t
}
