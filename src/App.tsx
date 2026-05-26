import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { AffiliatePage } from './pages/AffiliatePage';
import { BlogPage } from './pages/BlogPage';
import { ScheduleBookingPage } from './pages/ScheduleBookingPage';
import { PasswordGeneratorPage } from './pages/PasswordGeneratorPage';
import { PostPage } from './pages/PostPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/layout/CookieConsent';

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  ),
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage });
const servicesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/services', component: ServicesPage });
const teamRoute = createRoute({ getParentRoute: () => rootRoute, path: '/team', component: TeamPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactPage });
const pricingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/pricing', component: PricingPage });
const refundPolicyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/refund-policy', component: RefundPolicyPage });
const affiliateRoute = createRoute({ getParentRoute: () => rootRoute, path: '/affiliate', component: AffiliatePage });
const blogRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog', component: BlogPage });
const postRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog/$id', component: PostPage });
const loginRoute = createRoute({ getParentRoute: () => rootRoute, path: '/login', component: LoginPage });
const registerRoute = createRoute({ getParentRoute: () => rootRoute, path: '/register', component: RegisterPage });
const scheduleBookingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/schedule-booking', component: ScheduleBookingPage });
const passwordGeneratorRoute = createRoute({ getParentRoute: () => rootRoute, path: '/password-generator', component: PasswordGeneratorPage });

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  teamRoute,
  contactRoute,
  pricingRoute,
  refundPolicyRoute,
  affiliateRoute,
  postRoute,
  blogRoute,
  loginRoute,
  registerRoute,
  scheduleBookingRoute,
  passwordGeneratorRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}