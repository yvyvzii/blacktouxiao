import router from '../router'
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()// 導航守衛直接放過
    } else {
      next('/login')
    }
  } else {
    next()// 導航守衛直接放過
  }
})
