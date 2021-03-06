var protocol = require('../../lib/selenium/protocol.js');

module.exports = {
  setUp: function (callback) {
    this.server = require('mockserver').init();
    this.client = require('../nightwatch.js').init();
    callback();
  },
  
  testElement : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.element.call(client, 'id', '#weblogin', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"using":"id","value":"#weblogin"}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element');
    });
  },
  
  testElementPlural : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elements.call(client, 'id', '#weblogin', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"using":"id","value":"#weblogin"}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/elements');
    });
  },
  
  testElementActive : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementActive.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/active');
    });
  },
  
  testElementIdClear : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdClear.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/clear');
    });
  },
  
  testElementIdSelected : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdSelected.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/selected');
    });
  },
  
  testElementIdEnabled : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdEnabled.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/enabled');
    });
  },
  
  testElementIdEquals : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdEquals.call(client, 'ELEMENT1', 'ELEMENT2', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/ELEMENT1/equals/ELEMENT2');
    });
  },
  
  testElementIdAttribute : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdAttribute.call(client, 'TEST_ELEMENT', 'test_attr', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/attribute/test_attr');
    });
  },
  
  testElementIdClick : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdClick.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/click');
    });
  },
  
  testElementIdCssProperty : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdCssProperty.call(client, 'TEST_ELEMENT', 'test_property', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/css/test_property');
    });
  },
  
  testElementIdDisplayed : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdDisplayed.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/displayed');
    });
  },
  
  testElementIdLocation : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdLocation.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/location');
    });
  },
  
  testElementIdLocationInView : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdLocationInView.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/location_in_view');
    });
  },
  
  testElementIdName : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdName.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/name');
    });
  },
  
  testElementIdSize : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdSize.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/size');
    });
  },
  
  testElementIdText : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdText.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/text');
    });
  },
  
  testElementIdValueGet : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdValue.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/value');
    });
  },
  
  testElementIdValuePost : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.elementIdValue.call(client, 'TEST_ELEMENT', 'test', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"value":["t","e","s","t"]}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/value');
    });
  },
  
  testExecute : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.execute.call(client, '<script>test();</script>', ['arg1'], function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"script":"<script>test();</script>","args":["arg1"]}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/execute');
    });
  },
  
  testFrameDefault : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.frame.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/frame');
    });
  },
  
  testFramePost : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.frame.call(client, 'testFrame', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"frameId":"testFrame"}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/frame');
    });
  },
  
  testMouseButtonDown : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.mouseButtonDown.call(client, 'left', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"button":0}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/buttondown');
    });
  },
  
  testMouseButtonDownMiddle : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.mouseButtonDown.call(client, 'middle', function callback() {
        test.done();
      });
      
      test.equal(command.data, '{"button":1}');
    });
  },
  
  testMouseButtonDownCallback : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.mouseButtonDown.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.data, '{"button":0}');
    });
  },
  
  testMouseButtonUp : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.mouseButtonUp.call(client, 'right', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"button":2}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/buttonup');
    });
  },
  
  testMoveTo : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.moveTo.call(client, 'testElement', 0, 1, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '{"element":"testElement","xoffset":0,"yoffset":1}');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/moveto');
    });
  },
  
  testScreenshot : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.screenshot.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/screenshot');
    });
  },
  
  testStatus : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.status.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/status');
    });
  },
  
  testSubmit : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.submit.call(client, 'TEST_ELEMENT', function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "POST");
      test.equal(command.data, '');
      test.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/submit');
    });
  },
  
  testTitle : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.title.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/title');
    });
  },
  
  testWindowHandle : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.window_handle.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/window_handle');
    });
  },
  
  testWindowHandlePlural : function(test) {
    var client = this.client;
    
    this.client.on('selenium:session_create', function(sessionId) {
      var command = protocol.actions.window_handles.call(client, function callback() {
        test.done();
      });
      
      test.equal(command.request.method, "GET");
      test.equal(command.request.path, '/wd/hub/session/1352110219202/window_handles');
    });
  },
          
  tearDown : function(callback) {
    this.client = null;
    this.server.close();
    this.server = null;
    // clean up
    callback();
  }
}
