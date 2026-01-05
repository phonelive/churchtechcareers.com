<script setup lang="ts">
const youtubeUrl = 'https://www.youtube.com/@ChurchTechCareers'
const phoneliveUrl = 'https://phonelive.io'
const linkedinUrl = 'https://www.linkedin.com/in/plappert'

const host = {
  name: 'Hugh Plappert',
  title: 'CRO of PhoneLive.io',
  bio: 'Hugh brings years of experience in church technology and leadership to help you navigate your career path in ministry tech.'
}

const topics = [
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Career Growth',
    description: 'Learn strategies for advancing your career in church technology and taking on greater responsibilities.'
  },
  {
    icon: 'i-heroicons-users',
    title: 'Leadership Development',
    description: 'Develop the leadership skills needed to guide tech teams and serve your church community effectively.'
  },
  {
    icon: 'i-heroicons-light-bulb',
    title: 'Industry Insights',
    description: 'Stay current with trends, tools, and best practices in church technology and ministry.'
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Faith & Work',
    description: 'Discover how to integrate your faith with your technical career and find purpose in your work.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-900 shadow-sm">
      <UContainer class="py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-microphone" class="w-8 h-8 text-primary-500" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">Church Tech Careers</span>
          </div>
          <UButton
            :to="youtubeUrl"
            target="_blank"
            icon="i-simple-icons-youtube"
            color="primary"
            variant="solid"
          >
            Subscribe
          </UButton>
        </div>
      </UContainer>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950">
      <div class="absolute inset-0 bg-grid-white/10" />
      <UContainer class="relative py-24 lg:py-32">
        <div class="text-center max-w-3xl mx-auto">
          <UBadge color="white" variant="subtle" class="mb-4">
            Podcast
          </UBadge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Path to Ministry Through Technology
          </h1>
          <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Church Tech Careers is a podcast dedicated to helping you grow your career in church technology.
            Whether you're just starting out or looking to advance, we've got insights for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              :to="youtubeUrl"
              target="_blank"
              icon="i-simple-icons-youtube"
              size="xl"
              color="white"
              variant="solid"
            >
              Watch on YouTube
            </UButton>
            <UButton
              to="#topics"
              size="xl"
              color="white"
              variant="outline"
            >
              Learn More
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Topics Section -->
    <section id="topics" class="py-20 lg:py-28">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What We Cover
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Each episode dives deep into topics that matter for your church tech career journey.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard v-for="topic in topics" :key="topic.title" class="text-center">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                <UIcon :name="topic.icon" class="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {{ topic.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ topic.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Host Section -->
    <section class="py-20 lg:py-28 bg-gray-100 dark:bg-gray-900">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Host
          </h2>
          <div class="mt-8">
            <div class="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-user" class="w-12 h-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {{ host.name }}
            </h3>
            <p class="text-primary-600 dark:text-primary-400 font-medium mb-4">
              <a :href="phoneliveUrl" target="_blank" class="hover:underline">{{ host.title }}</a>
            </p>
            <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
              {{ host.bio }}
            </p>
            <UButton
              :to="linkedinUrl"
              target="_blank"
              icon="i-simple-icons-linkedin"
              color="gray"
              variant="soft"
            >
              Connect on LinkedIn
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-28 bg-white dark:bg-gray-950">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Grow Your Church Tech Career?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to Church Tech Careers on YouTube and join a community of technology professionals
            serving in ministry. New episodes drop regularly with insights, interviews, and practical advice.
          </p>
          <UButton
            :to="youtubeUrl"
            target="_blank"
            icon="i-simple-icons-youtube"
            size="xl"
            color="primary"
          >
            Subscribe on YouTube
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <UContainer class="py-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-microphone" class="w-6 h-6 text-primary-500" />
            <span class="font-semibold text-gray-900 dark:text-white">Church Tech Careers</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} Church Tech Careers. All rights reserved.
          </p>
          <div class="flex gap-4">
            <UButton
              :to="youtubeUrl"
              target="_blank"
              icon="i-simple-icons-youtube"
              color="gray"
              variant="ghost"
              size="lg"
            />
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<style>
.bg-grid-white\/10 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
