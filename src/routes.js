import React, { Suspense, lazy } from 'react';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch } from 'react-router';
import {
 Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import history from './utils/history';

const Login = lazy(() => import('./components/login/Login')) 
const AdminLogin = lazy(() => import('./components/login/AdminLogin'))
const Community = lazy(() => import('./components/Community'))
const EditProfile = lazy(() => import('./components/EditProfile/EditProfile'))
const ProfileUpdate = lazy(() => import('./components/ProfileUpdate'))
const mutation = lazy(() => import('./components/mutation'))
const DemoVideos = lazy(() => import('./components/DemoVideos'))
const AddBlogDocument = lazy(() => import('./components/blog/AddBlogDocument'))
const DevBlogs = lazy(() => import('./components/blog/DevBlogs'))
const AddYourBlog = lazy(() => import('./components/blog/AddYourBlog'))
const ApiGuide = lazy(() => import('./components/apis/ApiGuide'))
const SearchApi = lazy(() => import('./components/apis/SearchApi'))
const Publish = lazy(() => import('./components/apis/Publish'))
const NewLanding = lazy(() => import('./components/landing/NewLanding'));
const Support = lazy(() => import('./components/support/Support'));
const Events = lazy(() => import('./components/events/Events'));
const CreateEvents = lazy(() => import('./components/events/CreateYourEvents'));
const UpComingEvent = lazy(() => import('./components/events/UpComingEvent'));
const Hackathon = lazy(() => import('./components/hackathon/Hackathon'));
const RegistrationCard = lazy(() => import('./components/common/RegistrationCard/RegistrationCard'));
const Signup = lazy(() => import('./components/signup/Signup'));


const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/editprofile',
    component: EditProfile,
  },
  {
    path: '/profileupdate',
    component: ProfileUpdate,
  },
  {
    path: '/mutation',
    component: mutation,
  },
  {
    path: '/adminlogin',
    component: AdminLogin,
  },
  {
    path: '/community',
    component: Community,
  },
  {
    path: '/apiguide',
    component: ApiGuide,
  },
  {
    path: '/searchapi',
    component: SearchApi,
  },
  {
    path: '/publish',
    component: Publish,
  },
  {
    path: '/demovideos',
    component: DemoVideos,
  },
  {
    path: '/addblogdocument',
    component: AddBlogDocument,
  },
  {
    path: '/devblogs',
    component: DevBlogs,
  },
  {
    path: '/addyourblog',
    component: AddYourBlog,
  },
  {
    path: '/newlanding',
    component: NewLanding,
  },
  {
    path: '/support',
    component: Support,
  },
  {
    path: '/events',
    component: Events,
  },
  {
    path: '/createEvents',
    component: CreateEvents,
  },
  {
    path: '/upcomingevent',
    component: UpComingEvent,
  },
  {
    path: '/hackathon',
    component: Hackathon,
  },
  {
    path: '/regis',
    component: RegistrationCard,
  },
  {
    path: '/signup',
    component: Signup,
  },
];

const AppRouter = () => {
  return (
    <Router history={history}>
      {/* <Switch> */}
      {/* <Redirect from="/" to="/login" exact /> */}
       {/* <Route exact path="/" component={Login} />  */}
      <div>
      {/* <Header /> */}
      <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
      {/* <Route
            exact
            path="/"
            render={() => {
              return (
                <Redirect to="/" />
              )
            }}
          /> */}
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
      </Suspense>
      
      </div>
      {/* </Switch> */}
    </Router>
  );
};

export default AppRouter;
