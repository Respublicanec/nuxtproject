<template>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">
      4dfgdfg dfgdfgdf4dfgdfgd fgdfgdf4dfgd dfgdfgdfg df4dfgdfgdfgdfgdf4df
      gdfgdfgdfgdf4dfgdf dfgdfgdf4dfgdfg dfgdfgdf4dfgdfgd fgdfgdf4dfgd dfgdfgdfg
      df4dfgdfgdfgdfgdf4df gdfgdfgdfgdf4dfgdf dfgdfgdf4dfgdfg dfgdfgdf4dfgdfgd
      fgdfgdf4dfgd dfgdfgdfg df4dfgdfgdfgdfgdf4df gdfgdfgdfgdf4dfgdf
      dfgdfgdf4dfgdfg dfgdfgdf4dfgdfgd fgdfgdf4dfgd dfgdfgdfg
      df4dfgdfgdfgdfgdf4df gdfgdfgdfgdf4dfgdf dfgdfgdf4dfgdfg dfgdfgdf4dfgdfgd
      fgdfgdf4dfgd dfgdfgdfg df4dfgdfgdfgdfgdf4df gdfgdfgdfgdf4dfgdf dfgdfgdf
    </div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.grid-item {
  background-color: lightblue;
  padding: 10px;
  text-align: center;
}
</style>
