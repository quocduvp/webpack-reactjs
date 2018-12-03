import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import ContactForm from './components/pages/contact/ContactForm';
import Done from './components/pages/contact/Done';
const routes = [
    {
      path: "/contact",
      component: Contact,
      routes: [
        {
          path: "/contact/submit",
          component: ContactForm,
          routes: [
            {
              path: "/contact/submit/done",
              component: Done
            }
          ]
        }
      ]
    },
    {
      path: "/",
      component: Home,
    }
];

export default routes