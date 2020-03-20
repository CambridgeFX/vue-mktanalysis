<template>
  <div id="footer">
    <hr class="section" />
    <div class="container">
      <p>
        <span>
          <strong>Market Analysis - Currency Risk Analytics</strong> &#169; Copyright 2020, Cambridge Mercantile Corp.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
#footer {
  font-family: Roboto, Verdana;
  margin-bottom: 3em;
}
#footer .icon {
  height: 23px;
  display: inline-block;
  margin-bottom: -6px;
}
.hr {
  border-bottom: 1px solid;
  border-color: rgb(255, 129, 0);
  margin: 3em 0;
}
hr.section {
  border-top: 1px solid;
  border-color: rgb(255, 129, 0);
}
#footer p {
  font-size: 15px;
  color: #555555 !important;
}
h1 {
  color: rgb(59, 9, 66);
}
</style>