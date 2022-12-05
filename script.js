App = new Vue({
  el: "#app",
  data: {
    status: false,
    
      menu_class: "menu",
      class_btn: "",
      hy: "1234555"
  },
  methods: {
      setMessage: function(event){
          this.message = event.target.value;
      }
  }
})

$(function() {
  $.scrollify({
    section : ".section-class-name",
    sectionName : "section-name"
  });
});