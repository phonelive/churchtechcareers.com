<template>
  <UApp>
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="py-4 border-b border-gray-200">
        <div class="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <span class="text-xl font-bold text-gray-900">Church Tech Careers</span>
          <UButton
            to="https://www.youtube.com/@ChurchTechCareers"
            target="_blank"
            size="sm"
            color="primary"
          >
            Subscribe
          </UButton>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="py-20 md:py-32 bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p class="text-indigo-200 text-sm font-medium tracking-wider uppercase mb-4">Podcast</p>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Path to Ministry Through Technology
          </h1>
          <p class="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed mb-10">
            Church Tech Careers is a podcast dedicated to helping you grow your career in church technology. Whether you're just starting out or looking to advance, we've got insights for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="https://www.youtube.com/@ChurchTechCareers"
              target="_blank"
              size="xl"
              color="white"
              variant="solid"
              class="px-8"
            >
              Watch on YouTube
            </UButton>
            <UButton
              to="#topics"
              size="xl"
              color="white"
              variant="outline"
              class="px-8"
            >
              Learn More
            </UButton>
          </div>
        </div>
      </section>

      <!-- Topics Section -->
      <section id="topics" class="py-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">What We Cover</h2>
            <p class="text-lg text-gray-600">
              Each episode dives deep into topics that matter for your church tech career journey.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center p-6">
              <div class="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p class="text-gray-600 text-sm">Learn strategies for advancing your career in church technology and taking on greater responsibilities.</p>
            </div>
            <div class="text-center p-6">
              <div class="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Leadership Development</h3>
              <p class="text-gray-600 text-sm">Develop the leadership skills needed to guide tech teams and serve your church community effectively.</p>
            </div>
            <div class="text-center p-6">
              <div class="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Industry Insights</h3>
              <p class="text-gray-600 text-sm">Stay current with trends, tools, and best practices in church technology and ministry.</p>
            </div>
            <div class="text-center p-6">
              <div class="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Faith & Work</h3>
              <p class="text-gray-600 text-sm">Discover how to integrate your faith with your technical career and find purpose in your work.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Host Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Your Host</h2>
          <p class="text-gray-600">
            Hosted by <a href="https://www.linkedin.com/in/plappert" target="_blank" class="font-medium text-gray-900 hover:text-gray-700 underline underline-offset-2">Hugh Plappert</a>
          </p>
          <p class="text-gray-500 mt-2">
            CRO of <a href="https://phonelive.io" target="_blank" class="text-gray-700 hover:text-gray-900 underline underline-offset-2">PhoneLive.io</a>
          </p>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Church Tech Career?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Subscribe to Church Tech Careers on YouTube and join a community of technology professionals serving in ministry.
          </p>
          <UButton
            to="https://www.youtube.com/@ChurchTechCareers"
            target="_blank"
            size="xl"
            color="primary"
            class="px-8"
          >
            Subscribe on YouTube
          </UButton>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-10 border-t border-gray-200">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p class="text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} Church Tech Careers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </UApp>
</template>
