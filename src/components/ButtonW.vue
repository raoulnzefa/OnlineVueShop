<template>
  <a
    href="https://wa.me/573122448983?text=Hola%20me%20gustaria%20informacion"
    class="float child"
    target="_blank"
  >
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</template>

<script>
export default {};
</script>

<style>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>
