/**
 * Project views
 */
var $ = require('jquery');
var template = require('../templates/post.hbs');

function PostView(){
  console.log($('.app').length);
  $('.app').append('<ul class="posts">');
}
PostView.prototype.showPosts = function(posts){
  console.log(posts);
  posts.forEach(function(post){
    console.log($('.posts').length);
    $('.posts').append(template(post));
  });
};

module.exports = {
 'PostView': PostView
};
