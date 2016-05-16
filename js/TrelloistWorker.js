// Generated by CoffeeScript 1.8.0
(function() {
  var api, getLatestActions, getUpdateActions;

  api = require("./Utilites/trelloAPI");

  self.Trello = {};

  getLatestActions = function(onSuccess) {
    var API, postParams;
    if (onSuccess == null) {
      onSuccess = function() {};
    }
    postParams = {
      filter: "all",
      fields: "all",
      limit: 10
    };
    if (self.lastDate != null) {
      postParams.since = self.lastDate;
    }
    API = new api("/boards/" + self.boardId + "/actions", postParams);
    return API.run("GET", (function(_this) {
      return function(actionsData) {
        if (actionsData.length !== 0) {
          self.lastDate = actionsData[0].date;
        }
        return onSuccess(actionsData);
      };
    })(this));
  };

  getUpdateActions = function() {
    return getLatestActions(function(latestActions) {
      console.log(latestActions);
      if (latestActions !== void 0) {
        self.postMessage(latestActions);
      }
      return setTimeout((function() {
        return getUpdateActions();
      }), 1000);
    });
  };

  self.addEventListener('message', function(e) {
    switch (e.data.cmd) {
      case "start":
        Trello.token = function() {
          return e.data.token;
        };
        Trello.key = function() {
          return e.data.key;
        };
        self.boardId = e.data.boardId;
        return getLatestActions(function() {
          return getUpdateActions();
        });
    }
  }, false);

}).call(this);
