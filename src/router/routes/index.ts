import type { RouteObject } from 'react-router-dom'

// import App from '@/App'
// import Login from '@/pages/login'

const AppRoute: RouteObject = {
  path: '/'
  // element: <App/>
}

const LoginRoute: RouteObject = {
  path: '/login'
  // element: <Login/>
}

export const BasicRoutes: RouteObject[] = [
  AppRoute,
  LoginRoute
]
