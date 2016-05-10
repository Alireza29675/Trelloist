(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Board.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Board, Label, List, Member;

  List = require("./List");

  Member = require("./Member");

  Label = require("./Label");

  module.exports = Board = (function() {
    function Board(boardData, onReady) {
      var labelData, memberData, _i, _j, _len, _len1, _ref, _ref1;
      this.id = boardData.id;
      this.name = boardData.name;
      this.lists = [];
      this.members = [];
      this.labels = [];
      this.trelloObj = boardData;
      _ref = boardData.members;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        memberData = _ref[_i];
        this.members.push(new Member(memberData));
      }
      _ref1 = boardData.labels;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        labelData = _ref1[_j];
        this.labels.push(new Label(labelData));
      }
      this.makeReadyLists((function(_this) {
        return function() {
          return onReady(_this);
        };
      })(this));
      this;
    }

    Board.prototype.makeReadyLists = function(onReady) {
      var listData, _i, _len, _ref;
      _ref = this.trelloObj.lists;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        listData = _ref[_i];
        this.lists.push(new List(listData, this));
      }
      return onReady();
    };

    Board.prototype.getList = function(id) {
      var list, _i, _len, _ref;
      if (typeof id === "string") {
        _ref = this.lists;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          list = _ref[_i];
          if (list.name === id) {
            return list;
          }
        }
        return void 0;
      }
      return this.lists[id];
    };

    Board.prototype.getMember = function(id) {
      var member, _i, _len, _ref;
      if (typeof id === "string") {
        _ref = this.members;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          member = _ref[_i];
          if (member.id === id) {
            return member;
          }
        }
        return void 0;
      }
      return this.members[id];
    };

    Board.prototype.getMemberByUsername = function(username) {
      var member, _i, _len, _ref;
      _ref = this.members;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        member = _ref[_i];
        if (member.username === username) {
          return member;
        }
      }
      return void 0;
    };

    Board.prototype.getLabel = function(id) {
      var label, _i, _len, _ref;
      if (typeof id === "string") {
        _ref = this.labels;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          label = _ref[_i];
          if (label.id === id) {
            return label;
          }
        }
        return void 0;
      }
      return this.labels[id];
    };

    Board.prototype.getLabelByColor = function(color) {
      var label, _i, _len, _ref;
      _ref = this.labels;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        label = _ref[_i];
        if (label.color === color) {
          return label;
        }
      }
      return void 0;
    };

    Board.prototype.getLabelByName = function(name) {
      var label, _i, _len, _ref;
      _ref = this.labels;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        label = _ref[_i];
        if (label.name === name) {
          return label;
        }
      }
      return void 0;
    };

    return Board;

  })();

}).call(this);

},{"./Label":"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Label.js","./List":"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\List.js","./Member":"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Member.js"}],"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Card.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Card;

  module.exports = Card = (function() {
    function Card(cardData, board) {
      var labelId, memberId, _i, _j, _len, _len1, _ref, _ref1;
      this.board = board;
      this.id = cardData.id;
      this.name = this.text = cardData.name;
      this.desc = cardData.desc;
      this.members = [];
      this.labels = [];
      this.trelloObj = cardData;
      _ref = cardData.idMembers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        memberId = _ref[_i];
        this.members.push(this.board.getMember(memberId));
      }
      _ref1 = cardData.idLabels;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        labelId = _ref1[_j];
        this.labels.push(this.board.getLabel(labelId));
      }
    }

    Card.prototype.getMember = function(id) {
      var member, _i, _len, _ref;
      if (typeof id === "string") {
        _ref = this.members;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          member = _ref[_i];
          if (member.id === id) {
            return member;
          }
        }
        return void 0;
      }
      return this.members[id];
    };

    Card.prototype.getMemberByUsername = function(username) {
      var member, _i, _len, _ref;
      _ref = this.members;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        member = _ref[_i];
        if (member.username === username) {
          return member;
        }
      }
      return void 0;
    };

    Card.prototype.getLabel = function(id) {
      var label, _i, _len, _ref;
      if (typeof id === "string") {
        _ref = this.labels;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          label = _ref[_i];
          if (label.id === id) {
            return label;
          }
        }
        return void 0;
      }
      return this.labels[id];
    };

    Card.prototype.getLabelByColor = function(color) {
      var label, _i, _len, _ref;
      _ref = this.labels;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        label = _ref[_i];
        if (label.color === color) {
          return label;
        }
      }
      return void 0;
    };

    Card.prototype.getLabelByName = function(name) {
      var label, _i, _len, _ref;
      _ref = this.labels;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        label = _ref[_i];
        if (label.name === name) {
          return label;
        }
      }
      return void 0;
    };

    return Card;

  })();

}).call(this);

},{}],"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Label.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Label;

  module.exports = Label = (function() {
    function Label(labelData) {
      this.id = labelData.id;
      this.name = labelData.name;
      this.uses = labelData.uses;
      this.color = labelData.color;
    }

    return Label;

  })();

}).call(this);

},{}],"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\List.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Card, List;

  Card = require("./Card");

  module.exports = List = (function() {
    function List(listData, board) {
      this.board = board;
      this.id = listData.id;
      this.name = listData.name;
      this.cards = [];
      this.trelloObj = listData;
      this.makeReadyCards();
      this;
    }

    List.prototype.makeReadyCards = function() {
      var cardData, _i, _len, _ref, _results;
      _ref = this.board.trelloObj.cards;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cardData = _ref[_i];
        if (cardData.idList === this.id) {
          _results.push(this.cards.push(new Card(cardData, this.board)));
        }
      }
      return _results;
    };

    List.prototype.getCard = function(id) {
      var card, _i, _len, _ref;
      if (typeof id === "string") {
        _ref = this.cards;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          card = _ref[_i];
          if (card.id === id) {
            return card;
          }
        }
        return void 0;
      }
      return this.cards[id];
    };

    return List;

  })();

}).call(this);

},{"./Card":"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Card.js"}],"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Member.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Member;

  module.exports = Member = (function() {
    function Member(memberData) {
      this.id = memberData.id;
      this.name = memberData.fullName;
      this.type = memberData.memberType;
      this.url = memberData.url;
      this.status = memberData.status;
      this.bio = memberData.bio;
      this.username = memberData.username;
      this.trelloObj = memberData;
      this.isAdmin = function() {
        return this.type === "admin";
      };
    }

    return Member;

  })();

}).call(this);

},{}],"J:\\xampp\\htdocs\\Trelloist\\js\\Trelloist.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Board, Trelloist, api;

  api = require("./Utilites/trelloAPI");

  Board = require("./Objects/Board");

  Trelloist = (function() {
    function Trelloist() {}

    Trelloist.prototype.init = function(data, startApp) {
      this.GLOBAL_BOARD = null;
      if (typeof data !== "object") {
        data = {
          appName: data,
          boardId: null
        };
      }
      return Trello.authorize({
        name: data.appName,
        scope: {
          read: true,
          write: true,
          account: true
        },
        expiration: "never",
        success: (function(_this) {
          return function() {
            _this.key = Trello.key();
            _this.token = Trello.token();
            if (data.boardId === null) {
              return startApp(_this);
            } else {
              return _this.loadBoard(data.boardId, startApp);
            }
          };
        })(this),
        error: (function(_this) {
          return function(e) {
            return console.error("We have some problems to login");
          };
        })(this)
      });
    };

    Trelloist.prototype.loadBoard = function(boardId, onSuccess) {
      var API;
      API = new api("/boards/" + boardId, {
        lists: "open",
        members: "all",
        member_fields: "all",
        list_fields: "all",
        fields: "name",
        labels: "all",
        label_fields: "all",
        cards: "open",
        card_fields: "all"
      });
      API.run("GET", (function(_this) {
        return function(boardData) {
          return _this.GLOBAL_BOARD = new Board(boardData, function(board) {
            return onSuccess(board);
          });
        };
      })(this));
      return this;
    };

    return Trelloist;

  })();

  window.Trelloist = new Trelloist();

}).call(this);

},{"./Objects/Board":"J:\\xampp\\htdocs\\Trelloist\\js\\Objects\\Board.js","./Utilites/trelloAPI":"J:\\xampp\\htdocs\\Trelloist\\js\\Utilites\\trelloAPI.js"}],"J:\\xampp\\htdocs\\Trelloist\\js\\Utilites\\trelloAPI.js":[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var trelloAPI;

  module.exports = trelloAPI = (function() {
    function trelloAPI(url, params) {
      var key, value;
      this.apiURL = "https://api.trello.com/1" + url + "?";
      for (key in params) {
        value = params[key];
        this.apiURL += "" + key + "=" + value + "&";
      }
      this.apiURL += "key=" + (Trello.key()) + "&token=" + (Trello.token());
      this;
    }

    trelloAPI.prototype.run = function(method, onSuccess) {
      var request;
      request = new XMLHttpRequest();
      request.open(method, this.apiURL, true);
      request.onload = (function(_this) {
        return function() {
          if (request.status >= 200 && request.status < 400) {
            return onSuccess(JSON.parse(request.responseText));
          } else {
            return console.error("Something's goes wrong! Error " + request.status);
          }
        };
      })(this);
      request.onerror = (function(_this) {
        return function() {
          return console.error("Something's goes wrong! API Error!");
        };
      })(this);
      return request.send();
    };

    return trelloAPI;

  })();

}).call(this);

},{}]},{},["J:\\xampp\\htdocs\\Trelloist\\js\\Trelloist.js"]);
