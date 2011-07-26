<!DOCTYPE html>
<html>
    <head>
        <title>Yoghrt -  Hell Yeah I am high on music</title>
        <link rel="stylesheet" href="<?php echo base_url(); ?>statics/css/blueprint/screen.css" media="all" />
        <link rel="stylesheet" href="<?php echo base_url(); ?>statics/css/style.css" media="all" />
        <link rel="stylesheet" href="<?php echo base_url(); ?>statics/css/tipsy.css" media="all" />

        <script type="text/javascript">
        base_url = function() {
            return "<?php echo base_url(); ?>";
        }
        site_url = function() {
            return "<?php echo site_url(); ?>";
        }
        </script>
        <script type="text/javascript" src="https://www.google.com/jsapi?key=<?php echo $this->config->item('yoghrt_google_api_key'); ?>"></script>
        <script type="text/javascript" src=" https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
        <script src="<?php echo base_url(); ?>statics/js/processing-1.1.0.min.js"></script>
        <script src="<?php echo base_url(); ?>statics/js/soundmanager/soundmanager2.js"></script>
        <script src="<?php echo base_url(); ?>statics/js/yoghrt_player.js"></script>
        <script src="<?php echo base_url(); ?>statics/js/yoghrt_stage.js"></script>
        <script src="<?php echo base_url(); ?>statics/js/jrumble.1.1.min.js"></script>
                <script src="<?php echo base_url(); ?>statics/js/jquery.tipsy.js"></script>
        <script type="text/javascript" src="<?php echo base_url(); ?>statics/js/jquery.backstretch.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url(); ?>statics/js/site.js"></script>
    </head>
    <body>
