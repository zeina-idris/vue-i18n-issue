<template>
  <div class="about">
    <h1>Page with i18n tag</h1>
    <p>{{ $t('hello', 'ja') }}</p>
    <p>{{ $t('hello', 'en') }}</p>
    <h2>{{$i18n.numberFormats}}</h2>
  </div>
</template>

<script>
export default {
}
</script>

<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界!"
  }
}
</i18n>
