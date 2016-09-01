function create(username) {
    return function(request, response, next) {
      // Add a user object to the request
      request.user = {name: username};
      next();
    }
}

module.exports = create;
