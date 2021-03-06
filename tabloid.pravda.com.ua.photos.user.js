// ==UserScript==
// @name         TabloID | Photos
// @namespace    https://tabloid.pravda.com.ua/photos
// @noframes
// @version      0.1
// @description  TabloID | www.pravda.com.ua | Photos
// @author       oleh.kyshlyan
// @match        http://tabloid.pravda.com.ua/photos/*
// @match        https://tabloid.pravda.com.ua/photos/*
// @grant        none
// ==/UserScript==

var TabloIDPhotos = new function(){
  this.bodyBackgroundStyle = function(){
    var bodyBgrStInclosure = function(){
      var body = document.body;
      //body.style.backgroundColor = 'transparent';
      body.style.backgroundImage = 'none';
      body.style.backgroundRepeat = 'repeat';
      body.style.backgroundAttachment = 'scroll';
      body.style.backgroundPosition = '0% 0%';
    }
    setTimeout(bodyBgrStInclosure,2000);
  }

  this.main2Form = function(){
    var main2 = document.getElementById('main2');
    var form = main2.children[0];
    if(form != undefined && form.tagName == 'FORM'){
      var formCSSStyle = window.getComputedStyle(form);
      var formMarginTop = formCSSStyle.getPropertyValue("margin-top");
      if(formMarginTop == '2px'){
        form.style.marginTop = '4px';
      }
    }
  }

  this.ttZeroElChildren = function(){
    var ttCollection = document.getElementsByClassName('tt');
    var ttZeroEl = ttCollection[0];
    var ttZeroElChildren = ttZeroEl.children;
    var ttZrElChLen = ttZeroElChildren.length;

    for(var i=0; i<ttZrElChLen; i++){
      var currEl = ttZeroElChildren[i];

      if(currEl.id.indexOf('admixer') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('adnet') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('go2net') != -1){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt2ZeroElParentChildren = function(){
    var tt2Collection = document.getElementsByClassName('tt2');
    var tt2ZeroEl = tt2Collection[0];
    var tt2ZeroElParent = tt2ZeroEl.parentElement;
    var tt2ZrElParCSSStyle = window.getComputedStyle(tt2ZeroElParent);
    var tt2ZrElParChildren = tt2ZeroElParent.children;
    var tt2ZrElPrChLength = tt2ZrElParChildren.length;
    for(var i=0; i<tt2ZrElPrChLength; i++){
      var currEl = tt2ZrElParChildren[i];

      if(currEl.className == 'sp'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt2ZeroElChildren = function(){
    var tt2Collection = document.getElementsByClassName('tt2');
    var tt2ZeroEl = tt2Collection[0];
    var tt2ZeroElChildren = tt2ZeroEl.children;
    var tt2ZElChLength = tt2ZeroElChildren.length;
    for(var i=0; i<tt2ZElChLength; i++){
      var currEl = tt2ZeroElChildren[i];

      if(currEl.className == 'socialb1'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'text'){
        var br = currEl.children[0];
        if(br.tagName == 'BR'){
          br.style.display = 'none';
        }
      }

      if(currEl.className == 'socialb2'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'space12'){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'A' && currEl.name == 'comments'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'fb-comments'){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('admixer') != -1){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt3ZeroElChildren = function(){
    var tt3Collection = document.getElementsByClassName('tt3');
    var tt3ZeroEl = tt3Collection[0];
    var tt3ZeroElChildren = tt3ZeroEl.children;
    var tt3ZElChLength = tt3ZeroElChildren.length;
    for(var i=0; i<tt3ZElChLength; i++){
      var currEl = tt3ZeroElChildren[i];

      if(currEl.id == 'link11'){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('admixer') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('phoenix') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'BR'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt2FirstElChildren = function(){
    var tt2Collection = document.getElementsByClassName('tt2');
    var tt2FirstEl = tt2Collection[1];
    tt2FirstEl.style.marginTop = '12px';
    var tt2FirstElChildren = tt2FirstEl.children;
    var tt2FElChLength = tt2FirstElChildren.length;
    for(var i=0; i<tt2FElChLength; i++){
      var currEl = tt2FirstElChildren[i];

      if(currEl.className == 'space12'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt3FirstElChildren = function(){
    var tt3Collection = document.getElementsByClassName('tt3');
    var tt3FirstEl = tt3Collection[1];
    tt3FirstEl.style.marginTop = '12px';
    var tt3FirstElChildren = tt3FirstEl.children;
    var tt3FElChLength = tt3FirstElChildren.length;
    for(var i=0; i<tt3FElChLength; i++){
      var currEl = tt3FirstElChildren[i];

      if(currEl.className == 'space12'){
        currEl.style.display = 'none';
      }
    }
  }

  this.tt4ZeroEl = function(){
    var tt4Collection = document.getElementsByClassName('tt4');
    var tt4ZeroEl = tt4Collection[0];
    tt4ZeroEl.style.display = 'none';
  }
}

TabloIDPhotos.bodyBackgroundStyle();
TabloIDPhotos.main2Form();
TabloIDPhotos.ttZeroElChildren();
TabloIDPhotos.tt2ZeroElParentChildren();
TabloIDPhotos.tt2ZeroElChildren();
TabloIDPhotos.tt3ZeroElChildren();
TabloIDPhotos.tt2FirstElChildren();
TabloIDPhotos.tt3FirstElChildren();
TabloIDPhotos.tt4ZeroEl();
