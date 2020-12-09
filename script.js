var app = new Vue(
  {
  el: "#vue_container",
    data: {
      imageIndex: 0,
      images: [
        "https://file.cure-naturali.it/site/image/hotspot_article_first/29131.jpg",
        "https://www.intoscana.it/wp-content/uploads/dalia_credits_-lkordela_shutterstock.jpg",
        "https://www.faidateingiardino.com/wp-content/uploads/2018/03/gazania-750x400.jpg",
        "https://bulbishop.it/wp-content/uploads/2014/12/Bulbi-Tulipano-Gavota-01b.jpg"
      ]
    },
    methods: {
      nextImage: function () {
        this.imageIndex++;
        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
          }
      },
      prevImage: function () {
        this.imageIndex--;
        if (this.imageIndex == -1) {
          this.imageIndex = (this.images.length -1);
        }
      },
      autoPlay: function () {
        setInterval(function () {
          this.nextImage;
        }, 3000);

      }
    }
  }
);
