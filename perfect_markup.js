// perfectmarkup.js
// Unknown script for pixel perfect html/css coding
// https://github.com/nazz-nazz/perfect_markup
var pm = {

  initialize: {

    go: function() {

      var overlay = pm.initialize.go.prototype.overlay = pm.help.ce("div");
      var overlayImg = pm.initialize.go.prototype.overlayImg = pm.help.ce("img");

      pm.help.sa( overlay, "id", "overlay" );
      document.body.appendChild( overlay );

      pm.help.sa( overlayImg, "id", "overlay_img" );

      overlay.appendChild( overlayImg );

      if ( pm.doDisplay() == "" ) {
        pm.doDisplay("none");
      }

      pm.addGlobalStyle(
        "#overlay {" +
        " display: " + pm.doDisplay() + ";" +
        " position: absolute;" +
        " top: 0;" +
        " left: 0;" +
        " width: 100%;" +
        " z-index: 99;" +
        " opacity: 0.5" +
        "}" +
        "#overlay img {" +
        " display: block;" +
        " margin: 0 auto;" +
        "}"
      );

      var keyEvent = "keypress";

      // Add hotkeys
      pm.addEvent( document, keyEvent, function ( event ) {
          event = event || window.event;
          var key = event.keyCode || event.which;

          // Shift + Space to show / Hide overlay
          if ( event.shiftKey && (key == 32) ) {
            ( pm.doDisplay() == "none" ) ? pm.doDisplay("block") : pm.doDisplay("none");

            if ( event.preventDefault ) {
              event.preventDefault();
            }
            event.returnValue = false;

            return true;
          }

          // Ctrl + Enter - resize window to size of layout
          if ( event.ctrlKey && (key == 13) ) {
            $("#overlay").css( "opacity", "1" );
          }
      });

      pm.setLayoutImage( "_dev/layout.png" );
    }

  },

  // Crossbrowser addEventListener
  addEvent: function( obj, event, handler ) {
    if ( obj.addEventListener ) {
      obj.addEventListener( event, handler, false );
    }
    else if
      ( obj.attachEvent( 'on' + event, handler ) );
  },

  addGlobalStyle: function( css ) {
    var globalStyle = pm.help.ce("style");
    pm.help.sa( globalStyle, "type", "text/css" );

    var cssText = document.createTextNode( css );
    globalStyle.appendChild( cssText );

    document.getElementsByTagName('head')[0].appendChild( globalStyle );
  },

  setLayoutImage: function( src ) {
    var img = new Image();
    var overlayW, overlayH;
    var overlay = pm.initialize.go.prototype.overlay;
    var overlayImg = pm.initialize.go.prototype.overlayImg;

    pm.help.sa( overlayImg, "id", "overlay_img" );
    overlay.appendChild( overlayImg );

    pm.addEvent( img, "load", function () {
      overlayImg.src = src;
      overlayW = img.width;
      overlayH = img.height;
    });

    img.src = src;
  },

  doDisplay: function( val ) {
    if ( val ) {
      overlay.style.display = val;
      window.name = val;
    }

    return window.name;
  },

  // window.name storage routine
  help: {

    ge: function(id) {
      return document.getElementById( id );
    },

    ce: function(tag) {
      return document.createElement( tag );
    },

    sa: function( el, attr, val ) {
      el.setAttribute( attr, val );
    },

  }

};

pm.initialize.go();