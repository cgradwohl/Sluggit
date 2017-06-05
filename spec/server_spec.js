var request = require("request");
var base_url = "http://localhost:3000/"
var req = require('dupertest');
var User = require('../models/user.js')
var Post = require('../models/post.js')

describe("Server requests", function() {
  describe("GET POST DELETE without http bodies", function() {

    it("returns status code 404 /", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns status code 200 /list", function(done) {
      request.get(base_url + 'posts/list', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /listUser", function(done) {
      request.get(base_url + 'posts/listUser/000', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /listUser", function(done) {
      request.get(base_url + 'posts/listUser/5934cf9dfde008086b3cd8f4', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /listUser", function(done) {
      request.get(base_url + 'posts/listUser/5934cf9dfde008086b3cd8f40', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /listPopular", function(done) {
      request.get(base_url + 'posts/listPopular', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 500 /post", function(done) {
      request.get(base_url + 'posts/post/000', function(error, response, body) {
        expect(response.statusCode).toBe(500);
        done();
      });
    });

    it("returns status code 200 /post", function(done) {
      request.get(base_url + 'posts/post/5934cf9dfde008086b3cd8f4', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 500 /post", function(done) {
      request.get(base_url + 'posts/post/5934cf9dfde008086b3cd8f40', function(error, response, body) {
        expect(response.statusCode).toBe(500);
        done();
      });
    });

    it("returns status code 500 /post", function(done) {
      request.get(base_url + 'posts/post/000', function(error, response, body) {
        expect(response.statusCode).toBe(500);
        done();
      });
    });

    it("returns status code 404 users", function(done) {
      request.get(base_url + 'users', function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns status code 404 posts", function(done) {
      request.get(base_url + 'posts', function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns status code 404 /edit-profile", function(done) {
      request.get(base_url + 'users/edit-profile', function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns status code 401 /users/profile", function(done) {
      request.get(base_url + 'users/profile', function(error, response, body) {
        expect(response.statusCode).toBe(401);
        done();
      });
    });

    it("returns status code 200 /edit-profile", function(done) {
      request.put(base_url + 'users/edit-profile', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /edit-profile", function(done) {
      request.post(base_url + 'users/auth', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /register", function(done) {
      request.post(base_url + 'users/register', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /add", function(done) {
      request.post(base_url + 'posts/add', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /postupvote", function(done) {
      request.post(base_url + 'posts/postupvote', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 200 /postdownvote", function(done) {
      request.post(base_url + 'posts/postdownvote', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 500 /delete", function(done) {
      request.delete(base_url + 'posts/delete/000', function(error, response, body) {
        expect(response.statusCode).toBe(500);
        done();
      });
    });

    it("returns status code 200 /delete", function(done) {
      request.delete(base_url + 'posts/delete/5934cf9dfde008086b3cd8f0', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns status code 500 /delete", function(done) {
      request.delete(base_url + 'posts/delete/5934cf9dfde008086b3cd8f00', function(error, response, body) {
        expect(response.statusCode).toBe(500);
        done();
      });
    });

  });
});
