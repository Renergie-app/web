<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

html {
  color: #1b1b1b;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  background-color: #eaedf2;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  --bg: #edf0f5;
  --bg-card: #ffffff;
  --bg-sec: #f4f6f8;
  --bg-grey: #dddddd;
  --blue: #0459fd;
  --red: #ff374c;
  --text-main: #000000;
  --text-sec: #8b8ca5;
}
body,
html,
#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
  width: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* Tooltip container */
.tip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tip .tip-text {
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

.tip .tip-text::after {
  content: ' ';
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tip:hover .tip-text {
  visibility: visible;
}
</style>
