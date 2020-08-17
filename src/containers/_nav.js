export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Seven Advanced Academy']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Home',
            to: '/pages/home'
          },
          {
            name: 'Admission',
            to: '/pages/admission'
          },
          {
            name: 'About Us',
            to: '/pages/about'
          }, 
          {
            name: 'Contact Page',
            to: '/pages/contact',
          },
         
        ]
      },//END
      {
        _name: 'CSidebarNavDropdown',
        name: 'Certification',
        route: '/certification',
        icon: 'cil-cursor',
        items: [
          {
            name: 'All Certification',
            to: '/certification/all'
          },
          {
            name: 'Add New',
            to: '/certification/add-new',
            badge: {
              color: 'primary',
              text: 'NEW'
            }
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Events',
        route: '/events',
        icon: 'cil-star',
        items: [
          {
            name: 'All Events',
            to: '/events/all',
          },
          {
            name: 'Add New',
            to: '/events/add-new',
            badge: {
              color: 'primary',
              text: 'NEW'
            }
          },
          {
            name: 'Event Category',
            to: '/events/category',
            badge: {
              color: 'primary',
              text: 'NEW'
            }
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Post',
        route: '/posts',
        icon: 'cil-bell',
        items: [
          {
            name: 'All Posts',
            to: '/posts/all'
          },
          {
            name: 'Add New',
            to: '/posts/add-new',
            badge: {
              color: 'primary',
              text: 'NEW',
              shape: 'pill'
            }
          },
          {
            name: 'Post Category',
            to: '/posts/category'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Course',
        route: '/course',
        icon: 'cil-star',
        items: [
          {
            name: 'All Courses',
            to: '/course/all',
          },
          {
            name: 'Add New',
            to: '/course/add-new',
            badge: {
              color: 'primary',
              text: 'NEW'
            }
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Course Corriculum',
        to: '/corriculum',
        icon: 'cil-calculator',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill'
        },
        items: [
          {
            name: 'All Corriculum',
            to: '/corriculum/all'
          },
          {
            name: 'Add New Corriculum',
            to: '/corriculum/add-new',
            badge: {
              color: 'primary',
              text: 'New',
              shape: 'pill'
            }
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Admin Users',
        to: '/users',
        icon: 'cil-user',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill'
        },
        items: [
          {
            name: 'All',
            to: '/users/all'
          },
          {
            name: 'Add New',
            to: '/users/add-new',
            badge: {
              color: 'primary',
              text: 'New',
              shape: 'pill'
            }
          },
        ]
      },
    ]
  }
]

