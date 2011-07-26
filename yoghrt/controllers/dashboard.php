<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends Yoghrt {
    function  __construct() {
        parent::__construct();
    }

    function home() {
        $this->load->view('dashboard/home');
    }

}

/* End of file dashboard.php */
/* Location: ./application/controllers/dashboard.php */