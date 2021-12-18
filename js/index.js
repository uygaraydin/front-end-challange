document.addEventListener("DOMContentLoaded", () => {
  var app = new Vue({
    el: "#app",
    data: {},
    methods: {},
    mounted() {
      (document.querySelectorAll("select") || []).forEach(($elem) => {
        $elem.onblur = function () {
          const color = $elem.validity.valid ? "#79CD6C" : "#f14668";
          $elem.style.borderColor = color;
        };
      });
    },
    updated() {
      _self = this;
    },
  });
});
