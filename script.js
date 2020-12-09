var app = new Vue(
  {
  el: '#wrapper',
    data: {
      imageIndex: 0,
      images: [
        "https://file.cure-naturali.it/site/image/hotspot_article_first/29131.jpg",
        "https://www.intoscana.it/wp-content/uploads/dalia_credits_-lkordela_shutterstock.jpg",
        "https://www.faidateingiardino.com/wp-content/uploads/2018/03/gazania-750x400.jpg",
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
      }
    }
  }
);
