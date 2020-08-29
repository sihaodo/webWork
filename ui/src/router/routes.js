import login from '../views/login'
import home from '../views/home'


const routes = [
    {
        path:"/login",
        component: login
    },
    {
        path:"/home",
        component: home
    },
    {
        path:"/",
        redirect: "/login"
    }
    
]

export default routes
