(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
$(document).ready(function () {
  $('.fullMenu').on('click', function () {
    $('.menu').fadeIn("slow");
  });
  $('.exit').on('click', function () {
    $('.menu').fadeOut("slow");
  });
  $('.navLink__mobile').on('click', function () {
    $('.menu').fadeOut("slow");
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQU0sUUFBUSxHQUFHLElBQUksTUFBSixDQUFXLG1CQUFYLEVBQWdDO0FBQzdDLEVBQUEsVUFBVSxFQUFFO0FBQ1IsSUFBQSxFQUFFLEVBQUUsb0JBREk7QUFFUixJQUFBLElBQUksRUFBRTtBQUZFLEdBRGlDO0FBTTdDLEVBQUEsVUFBVSxFQUFFO0FBQ1IsSUFBQSxNQUFNLEVBQUUscUJBREE7QUFFUixJQUFBLE1BQU0sRUFBRTtBQUZBO0FBTmlDLENBQWhDLENBQWpCO0FBWUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixFQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQVk7QUFDbkMsSUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsTUFBWCxDQUFrQixNQUFsQjtBQUNILEdBRkQ7QUFHQSxFQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFZO0FBQy9CLElBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkI7QUFDSCxHQUZEO0FBR0EsRUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQixFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFZO0FBQzFDLElBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkI7QUFDSCxHQUZEO0FBR0gsQ0FWRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuY29uc3QgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfVxufSlcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5mdWxsTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1lbnUnKS5mYWRlSW4oXCJzbG93XCIpO1xuICAgIH0pO1xuICAgICQoJy5leGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubWVudScpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgIH0pO1xuICAgICQoJy5uYXZMaW5rX19tb2JpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5tZW51JykuZmFkZU91dChcInNsb3dcIik7XG4gICAgfSk7IFxufSk7XG5cbiAgIFxuIl19
