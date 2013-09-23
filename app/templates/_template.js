<% if (isAttributed) { %>/*

<%= tab %><%= constructorName %>
<%= tab %>VERSION 0.0.1
<%= tab %>AUTHOR <%= author %>

*/<%= newLine %><% } %>
define(['komponent'], function (Komponent) {
<%= tab %>var <%= constructorName %> = function (options) {
<%= tab %><%= tab %>var self = this,
<%= tab %><%= tab %><%= tab %>defaults,
<%= tab %><%= tab %><%= tab %>option;

<%= tab %><%= tab %>Komponent.mix(self);

<%= tab %><%= tab %>// Options ----------------------------------------------------------------

<%= tab %><%= tab %>defaults = {};

<%= tab %><%= tab %>for (option in options) {
<%= tab %><%= tab %><%= tab %>defaults[option] = options[option] || defaults[option];
<%= tab %><%= tab %>}

<%= tab %><%= tab %>self.options = defaults;

<%= tab %><%= tab %>// Element references -----------------------------------------------------

<%= tab %><%= tab %>// Properties -------------------------------------------------------------

<%= tab %><%= tab %>// Setup ------------------------------------------------------------------

<%= tab %><%= tab %>// Event Delegation -------------------------------------------------------

<%= tab %>};

<%= tab %><%= constructorName %>.prototype = {

<%= tab %>};

<%= tab %>return <%= constructorName %> ;
});
