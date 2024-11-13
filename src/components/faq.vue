<template>
  <div class="fixed-menubar"></div>
  <header>
    <div class="relative bg-primary-50 py-8">
      <img src="https://cdn.siap.id/s3/ASVRI/left-faq.svg" alt="" class="absolute hidden lg:block left-image" />
      <img src="https://cdn.siap.id/s3/ASVRI/right-faq.svg" alt="" class="absolute hidden lg:block right-image" />
      <div class="grid">
        <div class="lg:col-8 lg:col-offset-2 md:col-10 md:col-offset-1 col-12 text-center">
          <h1 class="mb-3 font-semibold">FAQ</h1>
          <p class="font-regular line-height-3-5">
            Jika Anda memiliki pertanyaan tentang ASVRI, lihat beberapa pertanyaan dan jawaban yang
            mungkin bisa membantu Anda.
          </p>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="xl:min-h-screen grid py-6">
      <div class="lg:col-8 lg:col-offset-2 md:col-10 md:col-offset-1 col-12">
        <!-- <div class="md:text-right text-left w-full">Terakhir diperbarui : 30 November 2023</div> -->
        <div name="Apa itu ASVRI AI?">
          <h1 class="font-semibold mb-2 mt-5">Apa itu ASVRI AI?</h1>
          <p class="line-height-3-5 mb-3">
            ASVRI AI adalah layanan yang dirancang untuk memfasilitasi pembuatan chatbot khusus
            menggunakan basis pengetahuan yang dipersonalisasi. Aplikasi ini memanfaatkan model
            bahasa tingkat lanjut (LLM) untuk menghasilkan respons yang akurat dan sadar konteks.
            Selain itu, ia menggunakan Vector Database yang handal, sistem manajemen basis data
            relasional yang kuat, untuk operasi pencarian vektor yang efisien dan untuk menyimpan
            basis pengetahuan.
          </p>
        </div>
        <div name="Informasi yang Kami Kumpulkan">
          <h1 class="font-semibold mb-3 mt-5">
            ASVRI AI dapat digunakan dalam berbagai skenario apa saja ?
          </h1>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Personal Assistant:</span> ASVRI AI dapat digunakan untuk membuat chatbot yang
            dapat menjawab
            pertanyaan tentang topik tertentu. Hal ini dapat membantu orang menemukan informasi
            tentang topik yang mereka minati.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Meeting Assistant:</span> ASVRI AI dapat digunakan untuk merekam suara rapat,
            dan kemudian meringkat hasil rapat menjadi poin penting.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Customer Support:</span> ASVRI AI dapat digunakan untuk membuat chatbot yang
            dapat menjawab pertanyaan umum (FAQ) tentang suatu produk atau layanan. Hal ini dapat membantu mengurangi
            beban kerja agen dukungan pelanggan meningkatkan kepuasan pelanggan.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Pendidikan:</span> ASVRI AI dapat digunakan untuk membuat chatbot yang dapat
            menjawab pertanyaan tentang subjek tertentu. Hal ini dapat membantu siswa mempelajari lebih lanjut tentang
            suatu mata pelajaran dan meningkatkan pemahaman mereka tentang mata pelajaran tersebut.
          </p>
        </div>
        <div name="Apa saja fitur yang dimiliki ASVRI AI?">
          <h1 class="font-semibold mb-3 mt-5">
            Apa saja fitur yang dimiliki ASVRI AI?
          </h1>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Data Sumber Pengetahuan:</span> Muat Data sebagai basis pengetahuan Anda dengan
            mudah dari Situs Web, Youtube, PDF, CSV, dan lainnya
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Integrations:</span> Terintegrasi dengan sebagian besar aplikasi populer seperti
            WhatsApp, Telegram, API dan HTML Embed dan banyak lagi.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Chat Playground:</span> Chat Playground adalah fitur yang memungkinkan pengguna
            untuk berinteraksi dengan model AI secara fleksibel dan dinamis dalam konteks pengetahuan yang dapat
            diperbarui.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Transkrip Rekaman Suara:</span> Fitur yang mengubah rekaman audio langsung
            menjadi teks tertulis secara otomatis.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Ringkas Dokumen & Rekaman Suara:</span> Fitur yang mengubah Dokumen atau rekaman
            audio langsung menjadi teks tertulis secara otomatis kemudian diringkas menjadi dokumen poin penting.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Riwayat Percakapan:</span> Fitur yang memungkinkan pengguna untuk melacak,
            menyimpan, dan mengakses kembali semua percakapan yang telah mereka lakukan dengan AI atau dalam aplikasi
            tertentu.
          </p>
          <p class="line-height-3-5 mb-3">
            <span class="font-semibold">Analitik Percakapan:</span> Fitur yang menyediakan wawasan mendalam dan analisis
            komprehensif terhadap percakapan yang dilakukan oleh pengguna dengan AI atau dalam aplikasi tertentu.
          </p>

        </div>
      </div>
    </div>
  </section>

  <footer class="bg-cover bg-top bg-no-repeat object-cover w-full text-white"
    style="background-image: url('https://cdn.siap.id/s3/ASVRI/bg-footer.png')">
    <!-- KontakKami Section -->

    <div class="grid my-2 py-6 justify-content-center">
      <div class="col-12 controlling-footer"></div>
    </div>

    <!-- Footer Section -->

    <div class="grid lg:py-6 justify-content-center lg:jusify-content-start">
      <div class="md:col-4 my-3 lg:my-0 text-center md:text-left">
        <ul class="font-bold list-none line-height-4 p-0">
          Kontak
          <li><a href="mailto:marketing@jagr.id"><i class="fa-regular fa-envelope mr-3"></i>marketing@jagr.id</a></li>
        </ul>
      </div>
      <div class="md:col-4 my-3 lg:my-0 text-center md:text-left">
        <ul class="font-bold list-none line-height-4 p-0">
          Dukungan
          <li><a href="/FAQ">FAQ</a></li>
          <li><a href="/Kebijakan-Privasi">Kebijakan Privasi</a></li>
          <li><a href="/Syarat-Penggunaan">Syarat Penggunaan</a></li>
          <li><a href="http://bantuan.asvri.ai/" target="_blank">Bantuan</a></li>
        </ul>
      </div>
      <div class="md:col-4 my-3 lg:my-0 text-center md:text-left">
        <p class="font-bold">Temukan Kami</p>
        <div class="flex my-3 gap-4 justify-content-center lg:justify-content-start">
          <img class="w-5 lg:w-4" src="https://cdn.siap.id/s3/ASVRI/google-play.png" />
          <img class="w-5 lg:w-4" src="https://cdn.siap.id/s3/ASVRI/apple-store.png" />
        </div>
        <div class="sosmed flex gap-3 text-xl my-4 justify-content-center md:justify-content-start">
          <a href="http://"><i class="fa-brands fa-youtube"></i></a>
          <a href="http://"><i class="fa-brands fa-instagram"></i></a>
          <a href="http://"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="http://"><i class="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="col-12 text-center">
        <Divider class="mb-5" />
        <p class="text-sm mb-4">
          Copyright © 2024, ASVRI (Asisten Virtual Pribadi) "Data Adalah Sebuah Cerita". All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'KebijakanPrivasi'
}
</script>

<style scoped>
.fixed-menubar {
  background-image: url(https://cdn.siap.id/s3/ASVRI/bg-header.png);
  animation: slideBackground 5s;
  animation-duration: 250ms;
  padding: 3.6rem 0;
}

.controlling-footer {
  height: 14rem;
}

@media screen and (min-width: 992px) {
  .left-image{
    left: 8%;
    top: 30%;
    width: 12%;
  }
  .right-image{
    right: 8%;
    top: 40%;
    width: 12%;
  }
}

@media screen and (min-width: 1440px) {
  .left-image{
    left: 8%;
    top: 20%;
    width: 12%;
  }
  .right-image{
    right: 8%;
    top: 30%;
    width: 12%;
  }
}

@media screen and (min-width: 1900px) {
  .left-image{
    left: 8%;
    top: 14%;
    width: 8%;
  }
  .right-image{
    right: 8%;
    top: 24%;
    width: 8%;
  }
}

@media screen and (min-width: 2000px) {
  .controlling-footer {
    height: 24rem;
  }
}
</style>
