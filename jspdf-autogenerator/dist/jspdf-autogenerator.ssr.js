'use strict';var jspdf=require('jspdf');require('jspdf-autotable');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  name: 'jspdfgenerator',
  props: ['pdfData', 'fileName', 'lineSpace', 'sectionSpace', 'xCordinate', 'yCordinate', 'pdfContentSize', 'pdfTableContentSize', 'header', 'footer', 'footerHeight'],
  mounted: function mounted() {
    this.generationFunction();
  },
  methods: {
    generationFunction: function generationFunction() {
      var _this = this;

      var doc = new jspdf.jsPDF({
        lineHeight: 1.5
      });
      var pageSize = doc.internal.pageSize;
      var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
      var pageNumber = 1;
      var x = this.xCordinate;
      var y = this.yCordinate;
      doc.setFontSize(this.pdfContentSize);

      if (this.header != null) {
        doc.setFontSize(this.header.mainHeadingFontSize);
        var xCordinateForMainHeading = pageWidth / 2;
        doc.text(xCordinateForMainHeading, y, this.header.mainHeading, {
          align: 'center'
        }); //y = y+;

        y = y + this.header.mainHeadingFontSize / 2;
        doc.setFontSize(this.header.subHeadingFontSize);
        var xCordinateFOrSubHeading = pageWidth / 2;
        doc.text(xCordinateFOrSubHeading, y, this.header.subHeading, this.header.headingStyle);
        y = y + this.header.subHeadingFontSize / 2;

        if (this.header.horizontalMargin == true) {
          var x2 = pageWidth - x;
          doc.line(x, y, x2, y);
        }

        y = y + 2 * this.sectionSpace;
        doc.setFontSize(this.pdfContentSize);
      }

      if (this.footer.addFooter == true) {
        doc.setFontSize(this.footer.footerTextSize);
        var footerYCordinate = doc.internal.pageSize.getHeight() - 5;

        if (this.footer.addPageLeft == true) {
          var footerXCordinate = doc.internal.pageSize.getWidth() - this.xCordinate;
          var str = 'Page ' + pageNumber; //console.log(str);
          //console.log(footerXCordinate);

          doc.text(footerXCordinate, footerYCordinate, str, {
            align: 'right'
          });
        }

        if (this.footer.addPageRight == true) {
          var strRight = 'Page ' + pageNumber; //console.log(str);

          doc.text(this.xCordinate, footerYCordinate, strRight, {
            align: 'left'
          });
        }

        if (this.footer.addTextRight != null) {
          var rightText = this.footer.addTextRight; //console.log(str);
          //console.log(footerXCordinate);

          doc.text(this.xCordinate, footerYCordinate, rightText, {
            align: 'left'
          });
        }

        if (this.footer.addTextLeft != null) {
          var footerXCordinateText = doc.internal.pageSize.getWidth() - this.xCordinate;
          var leftText = this.footer.addTextLeft; //console.log(footerXCordinate);

          doc.text(footerXCordinateText, footerYCordinate, leftText, {
            align: 'right'
          });
        }

        doc.setFontSize(this.pdfContentSize);
      }

      this.pdfData.forEach(function (data) {
        //console.log(typeof data);
        if (data.type == "image") {
          var img = new Image();
          img.src = data.location;
        } else if (data.type == "table") {
          //console.log(data.tableData.length);
          doc.autoTable({
            head: data.tableHeaders,
            body: data.tableData,
            autoSize: true,
            startY: y,
            theme: data.tableStyle,
            headStyles: data.headerStyle,
            printHeaders: true,
            columnStyles: {
              columnWidth: 'auto'
            },
            styles: {
              fontSize: _this.pdfTableContentSize
            }
          }); //console.log(y);

          y = y + data.tableData.length * (_this.pdfTableContentSize + 1);
          y = y + 3 * _this.lineSpace; //console.log(y);
        } else {
          var splitTitle = doc.splitTextToSize(data.paraData, 180);
          var stringLength = data.paraData.length / 180;
          doc.text(x, y, splitTitle); //console.log(stringLength);

          y = y + stringLength * (_this.pdfContentSize + 1); //console.log(y);
        }

        if (y >= doc.internal.pageSize.getHeight() - _this.footerHeight) {
          doc.setFontSize(_this.footer.footerTextSize);
          var footerYCordinate = doc.internal.pageSize.getHeight() - 5;
          doc.addPage();
          pageNumber = pageNumber + 1;
          y = _this.yCordinate;

          if (_this.footer.addFooter == true) {
            if (_this.footer.addPageLeft == true) {
              var footerXCordinate = doc.internal.pageSize.getWidth() - _this.xCordinate;

              var str = 'Page ' + pageNumber; //console.log(str);
              //console.log(footerXCordinate);

              doc.text(footerXCordinate, footerYCordinate, str, {
                align: 'right'
              });
            }

            if (_this.footer.addPageRight == true) {
              var strRight = 'Page ' + pageNumber; //console.log(str);

              doc.text(_this.xCordinate, footerYCordinate, strRight, {
                align: 'left'
              });
            }

            if (_this.footer.addTextRight != null) {
              var rightText = _this.footer.addTextRight; //console.log(str);
              //console.log(footerXCordinate);

              doc.text(_this.xCordinate, footerYCordinate, rightText, {
                align: 'left'
              });
            }

            if (_this.footer.addTextLeft != null) {
              var footerXCordinateText = doc.internal.pageSize.getWidth() - _this.xCordinate;

              var leftText = _this.footer.addTextLeft; //console.log(footerXCordinate);

              doc.text(footerXCordinateText, footerYCordinate, leftText, {
                align: 'right'
              });
            }

            doc.setFontSize(_this.pdfContentSize);
          }

          if (_this.header != null) {
            if (_this.header.headerOnEachPage == true) {
              doc.setFontSize(_this.header.mainHeadingFontSize);
              var xCordinateForMainHeading = pageWidth / 2;
              doc.text(xCordinateForMainHeading, y, _this.header.mainHeading, {
                align: 'center'
              }); //y = y+;

              y = y + _this.header.mainHeadingFontSize / 2;
              doc.setFontSize(_this.header.subHeadingFontSize);
              var xCordinateFOrSubHeading = pageWidth / 2;
              doc.text(xCordinateFOrSubHeading, y, _this.header.subHeading, _this.header.headingStyle);
              y = y + _this.header.subHeadingFontSize / 2;

              if (_this.header.horizontalMargin == true) {
                var x2 = pageWidth - x;
                doc.line(x, y, x2, y);
              } // doc.line()


              y = y + 2 * _this.sectionSpace; //y = y+this.lineSpace;

              doc.setFontSize(_this.pdfContentSize);
            }
          }
        }

        y = y + _this.sectionSpace;
      });
      doc.save(this.fileName + ".pdf");
    }
  }
};// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('JspdfAutogenerator', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;