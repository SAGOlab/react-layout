import Home from '../page/home/Home';
import About from '../page/about/About';
import Contact from '../page/contact/Contact';
import BlogList from '../page/blog-list/BlogList';
import SinglePost from '../page/single-post/SinglePost';

const Menu =  {
    Home: {
        component: Home,
        name: 'Home',
        path: '/'
    },
    About: {
        component: About,
        name: 'Chi siamo',
        path: '/chi-siamo'
    },
    Contact: {
        component: Contact,
        name: 'Contatti',
        path: '/contatti',
    },
    BlogList: {
        component: BlogList,
        name: 'Blog',
        path: '/news'
    }
};

const SingleArticle = {
    SinglePost: {
        component: SinglePost,
        path: "/news/:slug",
    }
}

export { Menu, SingleArticle };
