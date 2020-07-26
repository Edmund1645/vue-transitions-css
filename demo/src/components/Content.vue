<template>
  <div class="dummy__box">
    
    <div class="dummy">
      Lorem
    </div>
  </div>
</template>

<script>
export default {
  name: 'DummyContent',
};
</script>

<style scoped>
.dummy__box {
  width: 100%;
  height: 300px; 
}
  .dummy{
    width: 300px;
    margin: auto;
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--color-primary);
    font-size:40px;
    height:300px;
    color:white;
    border-radius:10px;
  }

  @media only screen and (max-width: 600px) {
    .dummy {
      width: 250px;
      height: 250px;
    }
  }
</style>
