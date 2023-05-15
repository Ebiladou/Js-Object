const car = {
  driving: false,
  //status: driving,

  start: function () {
    let status = this.driving;
    if (status === false) {
      this.driving = true;
    }
  },

  break: function () {
    let status = this.driving;
    if (status === true) {
      this.driving = false;
    }
  },
};

car.start();


