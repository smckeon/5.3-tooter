var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');

var Post = require('../app/scripts/models.js').Post;
var PostView = require('../app/scripts/views.js').PostView;
require('../app/scripts/index');

// ##############################################
// Model Tests
// ##############################################
describe('Post', function(){

  describe('fetch', function(){
    it('should return a promise', function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it('should resolve with an array of posts', function(done){
      Post.fetch().then(function(data){
        var post = data[0];

        expect(post).to.have.property('title');
        expect(post).to.have.property('body');
        expect(post).to.have.property('_id');

        done();
      })
    });
  });

});

// ##############################################
// View Tests
// ##############################################
describe('PostView', function(){
  var view, posts;

  beforeEach(function(){
    posts = [{title: 'Cool', body: 'awesome'}];
    view = new PostView();
    console.log($('.posts').length);
  });

  describe('showPosts', function(){

    it('should take a post array and list them', function(){
      view.showPosts(posts);
      expect($('.posts li').length).to.equal(1);
      expect($('.posts li').first().find('h1').text()).to.equal('Cool');
      expect($('.posts li').first().find('p').text()).to.equal('awesome');
    });

  });

});
<form id="blog-post">
<input type ="text" class="blog-title"/>
<input type ="text" class="blog-body"/>
<input type ="submit"/>
</form>

  describe('create post form', function(){

    it('should trigger a create:post event on the document with the title and body', function (done){
      $(document).on('create:post', function(event, post){
        expect(post).to.have.property('title');
        expect(post).to.have.property('body');

        done();
      });

        $('.blog-title').val("Title")
        $('.blog-body').val("Body")
        $('#blog-post').submit();

    });
  });



  });
