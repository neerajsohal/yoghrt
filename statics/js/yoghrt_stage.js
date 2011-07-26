yoghrt_stage = function() {

    stage = this;
    ys_dom = $("#yoghrt_stage");
    stage_code = null;
    stage_instance = null;

    this.X = $(window).width();
    this.Y = $(window).height() - 34;


    this.getPeakDataLeft = function() {
        return yp.getPeakDataLeft();
    }

    this.getPeakDataRight = function() {
        return yp.getPeakDataRight();
    }


    this.init = function() {
        
        stage.set_stage(function() {
            stage_instance = new Processing(ys_dom.get(0), stage_code);
        });
    }

    this.set_stage = function(callback) {
        $.get(base_url() + "statics/visualizations/example.pjs", function(data) {
            stage_code = data;
            callback();
        });
    }
}
