new Vue({
  el: "#app",
  data: {
    pesan: ""
  }
});

new Vue({
  el: "#app2",
  data: {
    pesan2: function() {
      alert("V-ON:CLICK DENGAN METHODS");
    }
  }
});

new Vue({
  el: "#app3",
  methods: {
    hasil: function() {
      alert("hasil enter");
    }
  }
});

new Vue({
  el: "#app4",
  data: {
    hasilkeyup: ""
  },
  methods: {
    hasilenter: function() {
      this.hasilkeyup = "tombol enter";
    },
    esc: function() {
      this.hasilkeyup = "tombol Escape";
    },
    space: function() {
      this.hasilkeyup = "tombol space";
    },
    up: function() {
      this.hasilkeyup = "tombol panah atas";
    },
    down: function() {
      this.hasilkeyup = "tombol panah bawah";
    },
    right: function() {
      this.hasilkeyup = "tombol panah kanan";
    },
    left: function() {
      this.hasilkeyup = "tombol panah kiri";
    }
  }
});

new Vue({
  el: "#app5",
  data: {
    hasilmouse: ""
  },
  methods: {
    kiri: function() {
      this.hasilmouse = "klik kiri";
    }
  }
});

new Vue({
  el: "#app6",
  data: {
    tampak: false
  }
});
