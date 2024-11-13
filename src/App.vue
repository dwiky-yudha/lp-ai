<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import NotFound from './components/404.vue'
import Faq from './components/faq.vue'
import KebijakanPrivasi from './components/kebijakanPrivasi.vue'
import SyaratPenggunaan from './components/syaratPenggunaan.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Cek apakah route tidak ditemukan
const routeState = ref(null)

const openGForm = ref(false);

const listPage = ['/FAQ', '/', '/Kebijakan-Privasi', '/Syarat-Penggunaan']

// Logika: Jika path tidak ada di listPage, anggap sebagai 404
if (listPage.includes(window.location.pathname)) {
  if (window.location.pathname === '/FAQ') {
    routeState.value = 'FAQ'
  } else if (window.location.pathname === '/') {
    routeState.value = 'home' // atau 'index' atau sesuai kebutuhan Anda
  } else if (window.location.pathname === '/Kebijakan-Privasi') {
    routeState.value = 'Kebijakan-Privasi'
  } else if (window.location.pathname === '/Syarat-Penggunaan') {
    routeState.value = 'Syarat-Penggunaan'
  }
} else {
  routeState.value = 'notFound'
}

const BASE_URL = import.meta.env.VITE_SIM

const caraKerja = ref([
  {
    Gambar: 'https://cdn.siap.id/s3/simpkb/Dikat%20GTK/photo_2024-08-29_16-49-51.jpg',
    Judul: 'Unggah Data Pengetahuan',
    SubJudul: 'Unggah dokumen pengetahuan Anda ke Asvri'
  },
  {
    Gambar: 'https://cdn.siap.id/s3/siap.id/asset%20img/portal/slide1.jpg',
    Judul: 'Berikan Pertanyaan',
    SubJudul: 'Tanyakan apapun yang berkaitan dengan data pengetahuan anda'
  },
  {
    Gambar: 'https://cdn.siap.id/s3/siap.id/asset%20img/portal/slide4.jpg',
    Judul: 'Dapatkan Jawaban',
    SubJudul: 'Dapatkan jawaban relevan beserta sumber referensinya'
  },
])

const keunggulan = ref([
  {
    image: 'https://cdn.siap.id/s3/ASVRI/hemat.svg',
    title: 'Mudah dan Cepat',
    description: 'Akses pengetahuan internal organisasi menjadi lebih mudah dan cepat.'
  },
  {
    image: 'https://cdn.siap.id/s3/ASVRI/028-interaction.svg',
    title: 'Efisien',
    description: 'Dengan kemudahan dan percepatan akses data pengetahuan, pengguna dapat lebih fokus pada tugas-tugas strategis dan kompleks.'
  },
  {
    // image : 'https://cdn.siap.id/s3/ASVRI/010-secure%20data.svg',
    image: 'https://cdn.siap.id/s3/ASVRI/012-data%20network.svg',
    title: 'Fleksibel',
    description: 'Dapat diakses melalui website serta aplikasi mobile (Android dan iOS).'
  },
  {
    image: 'https://cdn.siap.id/s3/ASVRI/internal-data.svg',
    title: 'Mendukung Pengambilan Keputusan',
    description: 'Membantu organisasi dalam memahami dan memanfaatkan pengetahuan internal secara lebih efektif untuk pengambilan keputusan.'
  },
  {
    image: 'https://cdn.siap.id/s3/ASVRI/privasi.svg',
    title: 'Keamanan dan Privasi Data',
    description: 'Mendukung pengelolaan data mandiri dan sistem isolasi data, memberikan organisasi kontrol penuh atas data pengetahuannya.'
  },
  // {
  //   image: 'https://cdn.siap.id/s3/ASVRI/028-interaction.svg',
  //   title: 'Efisiensi',
  //   description: 'Akses cepat dan akurat, menjadi lebih efektif & efisien'
  // }
])

const isMobile = ref(window.innerWidth <= 767)

const handleResize = () => {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches
  if (isPortrait) {
    isMobile.value = window.innerWidth <= 850
  } else {
    isMobile.value = window.innerWidth <= 960
  }
}

// Add resize event listener when the component is mounted
onMounted(() => {
  window.addEventListener('resize', handleResize), window.addEventListener('scroll', handleScroll)
})

// Remove resize event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize),
    window.removeEventListener('scroll', handleScroll)
})

const items = ref([
  {
    label: 'Beranda',
    key: 'beranda',
    active: true,
    command: () => {
      const element = document.getElementById('beranda')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = `/#beranda`
      }
    }
  },
  {
    label: 'Produk',
    key: 'produk',
    command: () => {
      const element = document.getElementById('produk')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = `/#produk`
      }
    }
  },
  {
    label: 'Hubungi Kami',
    key: 'kontak',
    command: () => {
      const element = document.getElementById('kontak')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = `/#kontak`
      }
    }
  },
  {
    label: 'MASUK',
    key: 'login',
    class: 'block w-full lg:w-auto p-3 lg:p-0',
    command: () => onLogin()
  }
])

//Scrolled Menubar
const isFixed = ref(false)

const handleScroll = () => {
  isFixed.value = window.pageYOffset > 0
}

//End Scrolled Menubar

const onLogin = () => {
  window.open(BASE_URL, '_blank')
}

const onLearn = () => {
  window.location.href = '/FAQ'
}


// Referensi elemen kontainer konten

// Status tab yang aktif
const activeTab = ref(0);

// Data tab dan konten
const tabs = ref([
  {
    label: 'ASVRI Basis Dokumen',
    icon: 'pi pi-lightbulb'
  },
  {
    label: 'ASVRI Data Analitik',
    icon: 'pi pi-file'
  }
]);

const contents = ref([
  {
    title: 'ASVRI Basis Dokumen',
    text: 'Asvri Basis Dokumen berfokus pada pengelolaan dan penelusuran informasi dari berbagai dokumen yang tersedia dalam organisasi. Dengan kemampuan ini, ASVRI dapat dengan cepat mencari, mengekstraksi, dan menyampaikan informasi yang relevan dari dokumen-dokumen yang terstruktur maupun tidak terstruktur. Hal ini sangat bermanfaat untuk keperluan pencarian data, pengetahuan internal, prosedur, atau dokumen pendukung lainnya, sehingga akses informasi menjadi lebih cepat dan mudah. ',
    video: 'https://soca.ai/wp-content/uploads/2024/02/ourworks1-1.mp4'
  },
  {
    title: 'ASVRI Data Analitik',
    text: 'ASVRI Data Analitik dirancang untuk mengolah dan menganalisis data transaksional organisasi guna mendukung pengambilan keputusan taktis ataupun strategis. Dengan memanfaatkan kemampuan analitik canggih, ASVRI dapat memberikan wawasan yang mendalam melalui visualisasi data yang relevan. Hal ini sangat berguna dalam mendukung peningkatan efisiensi dan produktivitas dalam operasional sehari-hari.',
    video: 'https://soca.ai/wp-content/uploads/2024/02/ourworks3-1.mp4'
  }
]);

// Fungsi untuk mengubah tab aktif
const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>

<template>
  <div id="app">

    <!-- Navigation Bar -->
    <Menubar :model="items" style="z-index: 1000; background-color: red" :class="{ 'fixed-menubar': isFixed }" :pt="{
      root: {
        class:
          'grid bg-transparent border-none py-5 justify-between z-5 fixed w-full border-noround'
      },
      button: {
        class: `text-50 hover:text-primary`
      }
    }">
      <template #start>
        <figure class="mr-auto">
          <img src="https://cdn.siap.id/s3/ASVRI/logo-asvri-putihi.png" alt="Image" class="h-2rem sm:h-3rem" />
        </figure>
      </template>
      <template #item="{ item }">
        <a v-if="!item.class"
          class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row p-3 cursor-pointer">
          <span :class="isMobile ? 'ml-2 text-900 ' : 'mx-2 text-50 '">{{ item.label }}</span>
        </a>
        <Button v-else class="p-button-rounded bg-orange-500 border-transparent lg:ml-2" @click="item.command">
          {{ item.label }}
        </Button>
      </template>
    </Menubar>

    <template v-if="routeState == 'home'">
      <section class="hero xl:min-h-screen bg-cover bg-bottom bg-no-repeat object-cover w-full relative"
        style="background-image: url(https://cdn.siap.id/s3/ASVRI/bg-header.png)">
        <div class="grid xl:min-h-screen py-4 sm:pt-5 lg:pt-8">
          <div class="xl:col-6 mt-7">
            <h1 class="text-5xl font-medium text-white">Enterprise ChatAI</h1>
            <h2 class="text-xl text-white pt-4">
              Solusi cerdas dalam mengelola pengetahuan internal menggunakan teknologi Generative AI dengan jaminan
              keamanan dan privasi data
            </h2>
            <Button @click="onLearn" class="mt-4 md:mt-8 mb-6 px-5 w-full lg:w-auto w-full lg:w-auto"
              label="Pelajari Lebih Lanjut" severity="warning" rounded />
            <div class="flex flex-wrap gap-4 justify-content-center lg:justify-content-start">
              <img class="w-5 md:w-4" src="https://cdn.siap.id/s3/ASVRI/google-play.png" />
              <img class="w-5 md:w-4" src="https://cdn.siap.id/s3/ASVRI/apple-store.png" />
            </div>
          </div>
        </div>

        <div class="box absolute hidden xl:block right-0" style="top: 12%">
          <div class="clipping-box relative overflow-hidden">
            <img class="absolute w-full h-full" src="https://cdn.siap.id/s3/ASVRI/bg-hand-hero.png" alt="" />
          </div>
        </div>
      </section>

      <!-- Hero Section -->

      <section id="beranda" class="xl:min-h-screen flex align-items-center pos ">
        <div class="grid align-items-center py-5 lg:py-0 py-5 lg:py-0">
          <div class="col-12 lg:col-6 flex-order-1 lg:flex-order-0">
            <h1 class="font-semibold text-4xl">Apa itu ASVRI</h1>
            <p class="my-4 line-height-3 text-lg">
              Asisten Virtual Pribadi (ASVRI) adalah layanan enterprise chat berbasis Generative AI yang memanfaatkan
              kemampuan pemrosesan bahasa alami (NLP) dalam bahasa Indonesia untuk meningkatkan efisiensi komunikasi,
              memberikan akses cepat ke informasi, dan mendukung pengambilan keputusan berbasis data.
            </p>
            <p class="my-4 line-height-3 text-lg">
              ASVRI didukung oleh teknologi terbaru yang mencakup kemampuan multi-modal, multi-LLM, serta multi-agent
              AI, serta manajemen sumber pengetahuan secara mandiri untuk memastikan bahwa setiap respons yang diberikan
              tidak hanya relevan dan akurat, tetapi juga didasarkan pada pengetahuan yang telah dikurasi dan
              diotorisasi.
            </p>
          </div>
          <div class="col-12 lg:col-6 flex-order-0 lg:flex-order-1">
            <figure class="text-center my-6 lg:my-0 my-6 lg:my-0">
              <img class="w-full lg:w-full" src="https://cdn.siap.id/s3/ASVRI/img-apa-itu.png" alt="" />
            </figure>
          </div>
        </div>
      </section>

      <!-- Keunggulan Section -->

      <section id="keunggulan" class="xl:min-h-screen flex align-items-center bg-primary py-8">
        <div class="grid py-8 justify-content-center row-gap-6">
          <div class="col-12 text-center">
            <h1 class="font-semibold text-4xl text-white mb-4 lg:mb-2">Apa Keunggulan ASVRI?</h1>
          </div>
          <div class="flex col-12 sm:col-6 lg:col-4 " v-for="item in keunggulan" :key="item.index">
            <Card :pt="{ root: { class: 'border-round-3xl shadow-6 text-center' } }">
              <template #header>
                <figure class="text-center p-5">
                  <img class="w-6" :src="item.image" alt="Image" />
                </figure>
              </template>
              <template #title>
                <h1 class="text-xl font-medium text-900">{{ item.title }}</h1>
              </template>
              <template #content>
                <p class="line-height-3">{{ item.description }}</p>
              </template>
            </Card>
          </div>
        </div>
      </section>

      <!-- CaraKerja Section -->

      <section id="carakerja" class="xl:min-h-screen flex align-items-center grid">
        <div class="grid align-items-center py-8 col-12">
          <div class="col-12 flex-order-1 lg:flex-order-0 py-4 lg:py-0">
            <h1 class="font-semibold text-4xl">Cara Kerja Asvri</h1>
            <div class="flex md:flex-row flex-column justify-content-center gap-4 align-items-center py-8 col-12">
              <Card style="width: 24rem; overflow: hidden" :pt="{ subtitle: { class: '' }, title: { class: '' } }"
                v-for="data in caraKerja" :key="data.index">
                <template #header>
                  <img alt="Gambar Cara Kerja" style="height: 28rem;" class="bg-cover bg-center" :src="data.Gambar" />
                </template>
                <template #title>{{ data.Judul }}</template>
                <template #subtitle>{{ data.SubJudul }}</template>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <!-- Vertical Tabs -->
      <section id="produk" class="xl:min-h-screen flex align-items-center grid">
        <div class="grid align-items-start py-8 col-12">
          <!-- Vertical Tabs -->
          <div class="col-4 pt-3">
            <ul>
              <li v-for="(tab, index) in tabs" :key="index"
                :class="['p-2 cursor-pointer flex align-items-center text-xl text-500', { 'text-primary font-medium': activeTab === index }]"
                @click="setActiveTab(index)">
                <i :class="tab.icon" class="mr-2"></i>
                {{ tab.label }}
              </li>
            </ul>
          </div>

          <!-- Tab Content with Fixed Height -->
          <div class="col-8 px-4 border-left-1 border-200">
            <TabView v-model:activeIndex="activeTab" :pt="{ navContainer: { class: 'hidden' } }">
              <TabPanel v-for="(content, index) in contents" :key="index" :header="content.title">
                <p class="text-2xl font-medium">{{ content.title }}</p>
                <div class="border-round-lg overflow-hidden">
                  <video class="elementor-video py-4 border-round-2xl" data-lazy-type="video" autoplay="" loop=""
                    muted="muted" playsinline="" controlslist="nodownload" poster="" data-poster=""
                    :src="content.video"></video>
                </div>
                <p>{{ content.text }}</p>

              </TabPanel>
            </TabView>
          </div>
        </div>
      </section>     

      <footer class="bg-cover bg-top bg-no-repeat object-cover w-full text-white"
        style="background-image: url('https://cdn.siap.id/s3/ASVRI/bg-footer.png')">
        <!-- KontakKami Section -->

        <div id="kontak" class="grid py-6 justify-content-center">
          <div class="col-12">
            <Card
              class="lg:px-8 shadow-7 lg:shadow-8 text-center lg:text-left text-center relative testt overflow-hidden">
              <template #content>
                <div class="grid align-items-center">
                  <div class="col-12 col-12 lg:col-8">
                    <h4 class="font-semibold text-2xl">Hubungi Kami Segera!</h4>
                    <p class="my-2 text-lg line-height-3">
                      Jadilah yang pertama merasakan inovasi terbaru dari kami...
                    </p>
                  </div>
                  <div class="col-12 col-12 lg:col-4 text-center">
                    <Button label="TANYA KAMI" severity="warning" rounded @click="openGForm = true" />
                    <Dialog v-model:visible="openGForm" modal header="TANYA KAMI" :style="{ width: '50vw' }"
                      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                      <iframe width="100%" class="border-none h-25rem md:h-28rem"
                        src=" https://docs.google.com/forms/u/0/d/e/1FAIpQLSdudjCgs5UkbttGwpAxNtA1qgDCM6gqd7fhk8FbUAV2lSdgHQ/formResponse?embedded=true">
                      </iframe>

                    </Dialog>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <!-- Footer Section -->

        <div class="grid lg:py-6 justify-content-center lg:jusify-content-start">
          <div class="md:col-4 my-3 lg:my-0 text-center md:text-left">
            <ul class="font-bold list-none line-height-4 p-0">
              Kontak
              <li><a href="mailto:marketing@jagr.id"><i class="fa-regular fa-envelope mr-3"></i>marketing@jagr.id</a>
              </li>
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
              Copyright © 2024, ASVRI (Asisten Virtual Pribadi) "Data Adalah Sebuah Cerita". All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </template>
    <template v-else-if="routeState == 'FAQ'">
      <Faq />
    </template>
    <template v-else-if="routeState == 'Kebijakan-Privasi'">
      <KebijakanPrivasi />
    </template>
    <template v-else-if="routeState == 'Syarat-Penggunaan'">
      <SyaratPenggunaan />
    </template>
    <template v-else>
      <NotFound />
    </template>
  </div>
</template>

<style>
.p-menubar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fixed-menubar {
  background: url(https://cdn.siap.id/s3/ASVRI/bg-header.png) !important;
  animation: slideBackground 5s;
  animation-duration: 250ms;
}

@keyframes slideBackground {
  0% {
    transform: translateY(-100%);
    transition:
      transform 0.12s cubic-bezier(0, 0, 0.2, 1),
      opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
