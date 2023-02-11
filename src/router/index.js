// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/Home.vue'
import weclome from '../components/weclome.vue'
import users from '../components/User/user.vue'
//创建并暴露一个路由器
const router =  new VueRouter({
	routes:[
        //
        {
            path:'/',
            redirect:'/login'
        },
		{
            path:'/login',
            component:login
			
		},
        {
            path:'/home',
            component:home,
            redirect:'/welcome',
            children:[{
              path:'/welcome',
              component:weclome
            },
            {
              path:'/users',
              component:users
            }
           
          
          ]
			
		}
    ]
			
		
	
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next();
  const token = window.sessionStorage.getItem('token')
  if(!token) return next('/login')
  next()
})
export default router
