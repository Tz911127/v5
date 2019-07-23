<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
li, ul, p, div, body, html, table {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    height: 100%;
    overflow: hidden;
}
li {
    list-style: none;
}
#app {
    height: 100%;
}
 ::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}
  ::-webkit-scrollbar-button,
  ::-webkit-scrollbar-button:vertical {
  display: none;
}
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-track:vertical {
  background-color: black;
}
  ::-webkit-scrollbar-track-piece {
  background-color: #f5f5f5;
}
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-thumb:vertical {
  margin-right: 10px;
  background-color: #6964E2;
  border-radius:3px;
}
  ::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:vertical:hover {
  background-color: #aaa;
}
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-corner:vertical {
  background-color: #aaa;
}
  ::-webkit-scrollbar-resizer,
  ::-webkit-scrollbar-resizer:vertical {
  background-color: #ff6e00;
}

</style>
