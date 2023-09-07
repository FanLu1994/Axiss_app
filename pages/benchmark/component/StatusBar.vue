<template>
  <div class="status-bar">
    <div>
      选项
    </div>
    <div>
      <span class="date">{{dateFormatter(now)}}</span>
      <span class="time">{{timeFormatter(now)}}</span>
    </div>
  </div>
</template>
<script setup>
import { useNow } from '@vueuse/core'

const now = useNow()

const dateFormatter = (date)=>{
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const formattedDate = `${dayOfWeek} ${month} ${date.getDate()} ${date.getFullYear()}`;
  return formattedDate;
}

const timeFormatter = (date)=>{
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  // 将小时转换为 12 小时制
  hours = hours % 12;
  hours = hours ? hours : 12; // 12:00 PM 显示为 12:00 PM，而不是 00:00 AM
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedDate = `${hours}:${minutes} ${ampm}`;
  return formattedDate
}


</script>
<style scoped>
.time{
  margin-left: 1rem;
  /*margin-right: 1rem;*/
}
</style>
