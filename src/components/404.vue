<template>
  <section class="min-h-screen flex align-items-center justify-content-center">
    <div class="grid justify-content-center">
      <div class="col-12 lg:col-6 text-center">
        <figure>
          <img class="w-full md:w-8 lg:w-6" src="https://cdn.siap.id/s3/ASVRI/404-asvri.png" alt="">
        </figure>
        <div class="py-5">
          <h1 class="font-semibold mb-3">Maaf. Halaman Tidak Ditemukan</h1>
          <p class="line-height-3">Mohon maaf halaman yang Anda cari tidak dapat ditemukan. ini bisa terjadi karena
            kesalahan pengetikan atau
            halaman sudah idak tersedia</p>
        </div>
        <Button @click="toBeranda" label="BERANDA" severity="warning" rounded />
      </div>
    </div>
  </section>
</template>

<script setup>
const baseUrl = import.meta.env.VITE_BASE_URL;

const toBeranda = () => {
  window.open(baseUrl, "_self")
}


</script>