/*

<%= tab %><%= constructorName %>
<%= tab %>VERSION 0.0.1
<%= tab %>AUTHOR <%= author %>

*/

<%= constructorName %> = function (options) {
<%= tab %>var self = this,
<%= tab %><%= tab %>defaults,
<%= tab %><%= tab %>option;

<%= tab %>self.callbacks = {};

<%= tab %>// Options ----------------------------------------------------------------

<%= tab %>defaults = {};

<%= tab %>for (option in options) {
<%= tab %><%= tab %>defaults[option] = options[option] || defaults[option];
<%= tab %>}

<%= tab %>self.options = defaults;

<%= tab %>// Element references -----------------------------------------------------


<%= tab %>// Properties -------------------------------------------------------------


<%= tab %>// Setup ------------------------------------------------------------------


<%= tab %>// Event Delegation -------------------------------------------------------


};

<%= constructorName %>.prototype = new Komponent();
