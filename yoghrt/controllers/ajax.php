<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Ajax extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        return;
    }

    function get_tracks() {
        $this->load->library('soundcloud');
        $this->soundcloud->init("hlH1LGAYjqKal9AlGCMNkA", "x6dMmrCC9WbtwwPMROYpZHUevUeVqxdZ5pqOqvqMso");
        $params = array(
            "consumer_key" => "hlH1LGAYjqKal9AlGCMNkA",
            "genres" => 'hip hop',
            "filter" => 'streamable',
        );
        $tracks = $this->soundcloud->get("https://api.soundcloud.com/tracks.json", $params);
        echo $tracks;
    }
}

/* End of file ajax.php */
/* Location: ./application/controllers/ajax.php */
