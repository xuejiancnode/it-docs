<template>
  <hr />
  <div>
    <div style="font-weight: bold;">赏杯咖啡吧。</div>
    <div style="font-weight: bold;">你的认可，我的动力。</div>
  </div>
  <div :class="$style.payment_container">
    <div :class="$style.wechat_qrcode">
      <img src="/wechat-qrcode.jpg" alt="微信收款码">
    </div>
    <div :class="$style.alipay_qrcode">
      <img src="/alipay-qrcode.jpg" alt="微信收款码">
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style module>
.payment_container {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
}
.wechat_qrcode,
.alipay_qrcode {
  width: 200px;
  height: 300px;
  margin-right: 30px;
}
.alipay_qrcode {
  margin-right: 0px;
}
.wechat_qrcode img, .alipay_qrcode img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
</style>