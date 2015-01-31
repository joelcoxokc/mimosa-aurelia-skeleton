System.register(["app/routes/app", "./utils"], function (_export) {
  "use strict";

  var App, expect, RouterStub;
  return {
    setters: [function (_appRoutesApp) {
      App = _appRoutesApp.App;
    }, function (_utils) {
      expect = _utils.expect;
      RouterStub = _utils.RouterStub;
    }],
    execute: function () {
      describe("the App module", function () {
        var sut = undefined;

        beforeEach(function () {
          sut = new App(new RouterStub());
        });

        it("contains a router property", function () {
          expect(sut).to.have.property("router");
        });

        it("configures the routers title", function () {
          expect(sut.router.title).to.equal("Application Title");
        });
      });
    }
  };
});
//# sourceMappingURL=app.spec.js.map