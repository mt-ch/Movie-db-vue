<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">MovieDB</router-link>
    <div class="input-group w-50">
      <input type="text" class="form-control" placeholder="Search a film..." />
      <div class="input-group-append">
        <button class="btn btn-success" type="button">Go</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>
