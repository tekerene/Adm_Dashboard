import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')


// Views - Components
const Admission = () => import('@/views/pages/Admission')//DONE


const Home = () => import('@/views/pages/Home')//DONE


const About = () => import('@/views/pages/About')//DONE

const Contact = () => import('@/views/pages/Contact')//DONE

// Views - Buttons
const AllCertification = () => import('@/views/certification/AllCertification')//SET
const AddNewCertification = () => import('@/views/certification/AddNewCertification')//SET


const AllCourses= () => import('@/views/course/AllCourses')//SET
const AddNewCourse = () => import('@/views/course/AddNewCourse')//SET

const AllCourseCorriculum = () => import('@/views/corriculum/AllCourseCorriculum')//SET
const AddNewCourseCorriculum = () => import('@/views/corriculum/AddNewCourseCorriculum')//SET

const AllAdmins = () => import('@/views/admin/AllAdmins')//SET
const AddNewAdmin = () => import('@/views/admin/AddNewAdmin')//SET


// Views - Icons
const AllEvents = () => import('@/views/events/AllEvents')
const AddNewEvent = () => import('@/views/events/AddNewEvent')
const EVentCategory = () => import('@/views/events/EventCategory')//SET

// Views - Notifications
const AllPosts = () => import('@/views/blog/AllPosts')//SET
const AddNewPosts = () => import('@/views/blog/AddNewPosts')//SET
const PostsCategory = () => import('@/views/blog/PostCategory')//SET

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'pages',
          // redirect: '/pages/home',
          name: 'Pages',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'admission',
              name: 'Admission',
              component: Admission
            },
            {
              path: 'home',
              name: 'Home',
              component: Home
            },
            {
              path: 'about',
              name: 'About Us',
              component: About
            },
            {
              path: 'contact',
              name: 'Contact Us',
              component: Contact
            },
          ]
        },
        {
          path: 'certification',
          redirect: '/certification/all',
          name: 'Certification',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'All Certification',
              component: AllCertification
            },
            {
              path: 'add-new',
              name: 'Add New',
              component: AddNewCertification
            },
          ]
        },
        {
          path: 'events',
          redirect: '/events/all',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'All Events',
              component: AllEvents
            },
            {
              path: 'add-new',
              name: 'Add New Event',
              component: AddNewEvent
            },
            {
              path: 'category',
              name: 'Add New Category',
              component: EVentCategory
            },
            
          ]
        },
        {
          path: 'posts',
          redirect: '/posts/all',
          name: 'Blog Post',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'All Posts',
              component: AllPosts
            },
            {
              path: 'add-new',
              name: 'Add New Posts',
              component: AddNewPosts
            },
            {
              path: 'category',
              name: 'Posts Category',
              component: PostsCategory
            }
          ]
        },
        {
          path: 'course',
          redirect: '/course/all',
          name: 'Course',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'All Courses',
              component: AllCourses
            },
            {
              path: 'add-new',
              name: 'Add New',
              component: AddNewCourse
            },
          ]
        },
        {
          path: 'corriculum',
          redirect: '/corriculum/all',
          name: 'Course Corriculum',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'All Course Corriculum',
              component: AllCourseCorriculum
            },
            {
              path: 'add-new',
              name: 'Add New Course Corriculum',
              component: AddNewCourseCorriculum
            },
          ]
        },
        {
          path: 'users',
          redirect: '/users/all',
          name: 'Admin Users',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'All Users',
              component: AllAdmins
            },
            {
              path: 'add-new',
              name: 'Add New',
              component: AddNewAdmin
            },
          ]
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

