const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      /* fullname: "", */
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    /* name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    }, */
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    /* outputFullname() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Uçar";
    },
    setName(event) {
      this.name = event.target.value;
    }, */
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");

/* computed ile methods arasındaki fark: eğer html içinde method kullanırsam vue her data değişimde o methodu tekrar çağırıyor içinde değişen o data olabilir diye, bunu performans açısından istemeyiz, o yüzden eğer html içinde bir fonksiyon kullanılması lazımsa computed içinde tanımlamak lazım ve data ismi gibi isimlendirmek daha iyi çünkü data gibi kullanacağız. */
/* watcher  datadaki aynı isimle kullanılır, data değiştiğinde watcherdaki fonksiyon çağrılır, datanın en son hali value ile alınabilir*/
