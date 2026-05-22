import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import InformationPage from '../pages/InformationPage.vue'
import GuidancePage from '../pages/GuidancePage.vue'
import TimelinePage from '../pages/TimelinePage.vue'
import TopicsPage from '../pages/TopicsPage.vue'
import SpeakersPage from '../pages/SpeakersPage.vue'
import CommitteesPage from '../pages/CommitteesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NewsPage from '../pages/NewsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: 'Home' } },
  { path: '/information.html', name: 'information', component: InformationPage, meta: { title: 'Information' } },
  { path: '/guidance.html', name: 'guidance', component: GuidancePage, meta: { title: 'Author Guidance' } },
  { path: '/timeline.html', name: 'timeline', component: TimelinePage, meta: { title: 'Conference Timeline' } },
  { path: '/topics.html', name: 'topics', component: TopicsPage, meta: { title: 'Topics' } },
  { path: '/speakers.html', name: 'speakers', component: SpeakersPage, meta: { title: 'Speakers' } },
  { path: '/committees.html', name: 'committees', component: CommitteesPage, meta: { title: 'Committees' } },
  { path: '/contact.html', name: 'contact', component: ContactPage, meta: { title: 'Contact' } },
  { path: '/news.html', name: 'news', component: NewsPage, meta: { title: 'News' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  document.title = `${to.meta.title ? `${to.meta.title} | ` : ''}2026 23rd ICCWAMTIP`
})

export default router
