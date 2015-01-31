System.register(["../../services/blog", "moment", "./post.html!"], function (_export) {
  "use strict";

  var BlogService, moment, view, _prototypeProperties, Index;
  return {
    setters: [function (_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function (_moment) {
      moment = _moment["default"];
    }, function (_postHtml) {
      view = _postHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Index = _export("Index", (function () {
        function Index(blogService) {
          this.blogService = blogService;
        }

        _prototypeProperties(Index, {
          inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            configurable: true
          }
        }, {
          canActivate: {
            value: function canActivate(params, qs, config) {
              var _this = this;
              var date = params.date;
              var month = params.month;
              var year = params.year;
              var slug = params.slug;
              return this.blogService.getPost(year, month, date, slug).then(function (post) {
                if (post === null) return false;

                _this.post = post;
                config.navModel.title = post.title;
                return true;
              });
            },
            writable: true,
            configurable: true
          },
          url: {
            value: function url(post) {
              var date = moment(post.date);
              return "#/blog/" + date.format("YYYY/MM/DD") + "/" + post.slug + "/";
            },
            writable: true,
            configurable: true
          },
          date: {
            value: function date(post) {
              return moment(post.date).format("MMM D");
            },
            writable: true,
            configurable: true
          },
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });

        return Index;
      })());
    }
  };
});
//# sourceMappingURL=post.js.map