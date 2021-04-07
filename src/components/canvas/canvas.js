import React, { useState, useEffect } from "react"
// import { fabric } from "fabric"

import image1src from "../../images/dontstarve.jpeg"
import image2src from "../../images/milfkiara.jpeg"
import image3src from "../../images/smolltakamori.jpeg"

import "./canvas.css"

var canvas = null
var imageZoom = 1
var imageInstances = []

function setCanvasZoom(zoom) {
  var objects = canvas.getObjects();
  for(var i in objects) {
     var object = objects[i];
    var scaleX = object.scaleX,
      scaleY = object.scaleY,
      left = object.left,
      top = object.top;
    
    // preserve the original dimensions.
    object.original_scaleX = !object.original_scaleX ? scaleX : object.original_scaleX;
    object.original_scaleY = !object.original_scaleY ? scaleY : object.original_scaleY;
    object.original_left = !object.original_left ? left : object.original_left;
    object.original_top = !object.original_top ? top : object.original_top;
    
    object.scaleX = object.original_scaleX * zoom;
    object.scaleY = object.original_scaleY * zoom;
    object.left = object.original_left * zoom;
    object.top = object.original_top * zoom;
    
    object.setCoords();
  }
};


export default class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { canvas: null }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const fabric = require("fabric").fabric 
      
      canvas = new fabric.Canvas("imageboard")
      
      canvas.selection = false

      canvas.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight - 55,
      })

      window.onresize = function(){
        var width = window.innerWidth;
        var height = window.innerHeight - 55;
        console.log('height: ' + height);
        console.log('width: ' + width);

        canvas.setDimensions({
            width: width,
            height: height
        });


        setCanvasZoom(width / 1710)
        //canvas.calcOffset();
        canvas.renderAll();
      };

      //zoom function
      canvas.on("mouse:wheel", function (opt) {
        var delta = opt.e.deltaY
        var zoom = canvas.getZoom()
        zoom *= 0.999 ** delta
        if (zoom > 10) zoom = 10
        if (zoom < 1) zoom = 1
        canvas.zoomToPoint(
          { x: opt.e.offsetX, y: opt.e.offsetY },
          zoom
        )
        opt.e.preventDefault()
        opt.e.stopPropagation()
      })

      // drag function
      canvas.on("mouse:down", function (opt) {
        console.log(this.viewportTransform)
        var evt = opt.e
        var x = 0;
        var y = 0;
        console.log(evt)
        if (evt.clientX != null)
        {
          x = evt.clientX;
          y = evt.clientY;
        }
        else
        {
          x = evt.changedTouches[0].clientX;
          y = evt.changedTouches[0].clientY;
        }
        this.isDragging = true
        this.lastPosX = x
        this.lastPosY = y
      })
      canvas.on("mouse:move", function (opt) {
        if (this.isDragging) {
          var evt = opt.e
          var x = 0;
          var y = 0;
          // console.log(evt)
          if (evt.clientX != null)
          {
            x = evt.clientX;
            y = evt.clientY;
          }
          else
          {
            x = evt.changedTouches[0].clientX;
            y = evt.changedTouches[0].clientY;
          }
          var vpt = this.viewportTransform
          vpt[4] += x - this.lastPosX
          vpt[5] += y - this.lastPosY
          this.requestRenderAll()
          this.lastPosX = x
          this.lastPosY = y
        }
      })
      canvas.on("mouse:up", function (opt) {
        this.setViewportTransform(this.viewportTransform)
        this.isDragging = false
      })

      canvas.on("mouse:over", function (e) {
        let tooltip = e.target?.tooltipRef
        console.log(tooltip)
        if (tooltip) {
          let span = document.querySelector('span[id="' + tooltip + '"]')
          span.style.visibility = 'visible'
          span.style.top = e.e.offsetY + 'px'
          span.style.left = e.e.offsetX + 'px'
        }
      })

      canvas.on("mouse:out", function (e) {
        let tooltip = e.target?.tooltipRef
        if (tooltip) {
          let span = document.querySelector('span[id="' + tooltip + '"]')
          span.style.visibility = 'hidden'
        }
      })

      // canvas.on('after:render', function() {
      //   setCanvasZoom(window.innerWidth / 1710)
      // });

      images.forEach( (imageItem, index) => {
        let image = new Image()
        image.src = imageItem.src
        image.onload = () => {
          let imgInstance = new fabric.Image(image, {
            left: imageItem.left,
            top: imageItem.top,
            angle: imageItem.angle,
            opacity: imageItem.opacity,
            scaleX: imageItem.scaleX,
            scaleY: imageItem.scaleY,
          })
          //dissables to select this image
          imgInstance.set("selectable", false)
          imgInstance.set("tooltipRef", "ref" + index)
          canvas.add(imgInstance)
        }
      })
      
      
    }
    
  }

  render() {
    return (
      <React.Fragment>
        <div id="canvas-container">
          <canvas style={{ border: "solid 1px #555" }} id="imageboard" />
          {images.map((image, index) => {
            return <span id={"ref" + index} className="toolTip">{"ToolTip" + index}</span>
          })}
        </div>
      </React.Fragment>
    )
  }
}


const images = [
  {
    src: image1src,
    left: 0,
    top: 0,
    angle: 0,
    opacity: 1,
    scaleX: 0.3,
    scaleY: 0.3,
  },
  {
    src: image2src,
    left: 1490,
    top: 0,
    angle: 0,
    opacity: 1,
    scaleX: 0.3,
    scaleY: 0.3,
  },
  {
    src: image3src,
    left: 500,
    top: 600,
    angle: 0,
    opacity: 1,
    scaleX: 0.2,
    scaleY: 0.2,
  },
]
