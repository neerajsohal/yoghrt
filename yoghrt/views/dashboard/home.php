<?php $this->load->view('header'); ?>
<canvas id="yoghrt_stage"></canvas>
<div id="bar">
    <div id="logo"><img src="<?php echo base_url(); ?>statics/images/logo.png" /></div>
    <div class="divider"></div>
    <div id="yoghrt_player">
        <div id="artwork"></div>
        <div id="previous" class=""></div>
        <div id="stop"></div>
        <div id="play" class=""></div>
        <div id="next" class=""></div>
        <div id="ticker">00:00:00</div>
        <div id="volume"></div>
        <div class="divider"></div>
        <div id="osd">Loading ...</div>
        <div class="divider"></div>
        <div id="love"></div>
        <div id="meta">
            <div id="artwork"></div>
            <div id="info">
                <div id="title"></div>
                <div id="user" class="quiet"></div>
                <div id="play_count"><img class="icon" src="<?php echo base_url(); ?>statics/images/icons/counter.png" /> <span></span> plays</div>
                <div id="comments"><img class="icon" src="<?php echo base_url(); ?>statics/images/icons/balloon.png" /> <span></span> comments</div>
                <div id="genre"><span></span></div>
                <div id="actions"><span id="tweet" class="tipsify" title="Tweet This Song"><img src="<?php echo base_url(); ?>statics/images/icons/balloon-twitter-left.png" /></span> <span id="fb_share"  class="tipsify" title="Share This Song on Facebook"><img src="<?php echo base_url(); ?>statics/images/icons/balloon-facebook-left.png"</span></div>

            </div>
        </div>
    </div>
</div>

<div id="playlist">
    <div id="border"></div>
</div>

<div id="footer"><p><a href="http://www.soundcloud.com/" target="_blank" ><img title="Music by Soundcloud!" id="soundcloud_logo" src="<?php echo base_url(); ?>statics/images/white_transparent_48.png" /></a></p></div>

<?php $this->load->view('footer'); ?>
