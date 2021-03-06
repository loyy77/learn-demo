var that;
var app = new Vue({
  el: '#app',
  data: {
    timeline: null,
    autoplay: false,
    interval: 800,
    currIndex: 0
  },
  mounted() {
    that = this;
    that.init();
  },
  methods: {
    init() {
      var that = this;
      $.get("../data/timeline.json", function (res) {
        that.timeline = $("#timeline").timeline({
          domid: "timeline",
          times: res,
          isDate: true,
          autoplay: that.autoplay,
          interval: that.interval,
          currIndex: that.currIndex,
          value: new Date().format('yyyy-MM-dd'),
          timeChangeEvt: function (time) {
            that._timeChangeEvt(time)
          },
          dayChangeEvt: function (date) {
            that._dateChangeEvt(date);
          }
        })
      })
    },
    _timeChangeEvt(time) {
      console.log(time);
    },
    _dateChangeEvt(date) {
      console.log(date);
    }
  }
});
