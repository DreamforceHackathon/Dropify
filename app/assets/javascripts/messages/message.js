Dropify.Message = function(args) {
  this.id = args.id
  this.title = args.title;
  this.url = args.url;
  this.content = args.content;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  if (args.picture != undefined) {
    this.picturePath = args.picture.picture.url
  }

  if (args.comments != undefined) {
    this.comments = args.comments
  }

  if (args.vote_count != undefined) {
    this.voteCount = args.vote_count
  }

  if (args.advert != undefined) {
    this.advert = args.advert
  };

  this.user = args.user
  console.log(args)
}