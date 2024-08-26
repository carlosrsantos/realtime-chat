import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ChatRoom from '../components/ChatRoom.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/chat', name: 'ChatRoom', component: ChatRoom, meta: { requiresAuth: true } }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next('/login');
    } else if ((to.path === '/login' || to.path === '/signup') && user) {
      next('/chat');
    } else {
      next();
    }
  });
});

export default router;