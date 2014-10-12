Dropify.Message = function(args) {
  this.title = args.title;
  this.url = args.url;
  this.content = args.content;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  if (args.picture != undefined) {
    this.picturePath = args.picture.picture.url
  }
  this.user = args.user
}