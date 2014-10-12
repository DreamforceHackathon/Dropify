Dropify.Message = function(args) {
  this.title = args.title;
  this.url = args.url;
  this.content = args.content;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  if (args.picture != undefined) {
    this.picturePath = args.picture.picture.url
  };

  if (args.advert != undefined) {
    this.advert = args.advert
  };
  this.user = args.user
}