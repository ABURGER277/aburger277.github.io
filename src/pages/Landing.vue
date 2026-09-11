<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import siteContent from '@/content/site.json'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const sections = ref([])

const sectionsData = [
  { ...siteContent.landing.hero, className: 'hero' },
  { ...siteContent.landing.about, className: 'about' },
  { ...siteContent.landing.projects, className: 'projects' }
]

const goMain = () => router.push('/main')

onMounted(() => {
  sections.value.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})
</script>
<template>
  <div class="landing">
    <section
      v-for="(section, i) in sectionsData"
      :key="i"
      :ref="el => sections[i] = el"
      class="section"
      :class="section.className"
    >
      <h2>{{ section.title }}</h2>
      <p>{{ section.content }}</p>
    </section>

    <section class="more">
      <button class="more-btn" @click="goMain">{{ siteContent.landing.moreButton }}</button>
    </section>
  </div>
</template>
<style scoped>
.landing {
  overflow-x: hidden;
}

.section {
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero {
  background: linear-gradient(135deg, #6d5dfc, #46a0f5);
  color: white;
  text-align: center;
}

.about {
  background: #f7f7f7;
  color: black;
}

.projects {
  background: #5C786E;
  color: white;
  text-align: end;
}

.more {
  min-height: 20vh;
  background: #151B23;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.more-btn {
  font-size: 1.5rem;
  background: none;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.more-btn:hover {
  background: white;
  color: black;
}
</style>
