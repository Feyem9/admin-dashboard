// // // import * as React from 'react';
// // // import { extendTheme, styled } from '@mui/material/styles';
// // // import DashboardIcon from '@mui/icons-material/Dashboard';
// // // import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
// // // import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// // // import { PageContainer } from '@toolpad/core/PageContainer';
// // // import Grid from '@mui/material/Grid2';
// // // import ChevronRight from '@mui/icons-material/ChevronRight';
// // // import PersonIcon from '@mui/icons-material/Person';//user
// // // import NoteIcon from '@mui/icons-material/Note'; // Note
// // // import ChildCareIcon from '@mui/icons-material/ChildCare'; // Child-care
// // // import CommentIcon from '@mui/icons-material/Comment'; // Comment
// // // import Folder from '@mui/icons-material/Folder'; // courses
// // // import EventIcon from '@mui/icons-material/Event'; // Calendar
// // // import Courses from '../dashbordCourse/courses/Courses';
// // // // import User from '../auth/User';

// // // const NAVIGATION: Navigation = [
// // //   {
// // //     kind: 'header',
// // //     title: 'Main items',
// // //   },
// // //   {
// // //     segment: 'dashboard',
// // //     title: 'Dashboard',
// // //     icon: <DashboardIcon />,
// // //   },
// // //   {
// // //     segment:'courses',
// // //     title:'courses',
// // //     icon:<Folder />,
// // //   },
// // //   {
// // //     segment: 'user',
// // //     title: 'profile',
// // //     icon: <PersonIcon />,
// // //   },
// // //   {
// // //     segment: 'note',
// // //     title: 'Note',
// // //     icon: <NoteIcon />,
// // //   },
// // //   {
// // //     segment: 'child-care',
// // //     title: 'kids',
// // //     icon: <ChildCareIcon />,
// // //   },
// // //   {
// // //     segment: 'comments',
// // //     title: 'chat',
// // //     icon: <CommentIcon />,
// // //   },
// // //   {
// // //     segment: 'calendar',
// // //     title: 'calendar',
// // //     icon: <EventIcon />,
// // //   },
// // //   {
// // //     segment: 'logout',
// // //     title: 'Logout',
// // //     icon: <ChevronRight />,
// // //   },
// // // ];

// // // const demoTheme = extendTheme({
// // //   colorSchemes: { light: true, dark: true },
// // //   colorSchemeSelector: 'class',
// // //   breakpoints: {
// // //     values: {
// // //       xs: 0,
// // //       sm: 600,
// // //       md: 600,
// // //       lg: 1200,
// // //       xl: 1536,
// // //     },
// // //   },
// // // });

// // // function useDemoRouter(initialPath: string): Router {
// // //   const [pathname, setPathname] = React.useState(initialPath);

// // //   const router = React.useMemo(() => {
// // //     return {
// // //       pathname,
// // //       searchParams: new URLSearchParams(),
// // //       navigate: (path: string | URL) => setPathname(String(path)),
// // //     };
// // //   }, [pathname]);

// // //   return router;
// // // }

// // // const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
// // //   backgroundColor: theme.palette.action.hover,
// // //   borderRadius: theme.shape.borderRadius,
// // //   height,
// // //   content: '" "',
// // // }));

// // // export default function DashboardLayoutBasic(props: any) {
// // //   const { window } = props;

// // //   const router = useDemoRouter('/dashboard');
// // //   const { pathname } = router;

// // //   // Remove this const when copying and pasting into your project.
// // //   const demoWindow = window ? window() : undefined;

// // //   return (
// // //     <AppProvider
// // //       navigation={NAVIGATION}
// // //       router={router}
// // //       theme={demoTheme}
// // //       window={demoWindow}
// // //     >
// // //       <DashboardLayout>
// // //         <PageContainer>
// // //           {pathname === '/courses' ? (
// // //             <Courses />
// // //           ) : (
// // //           <Grid container spacing={1}>
// // //             <Grid size={5} />
// // //             <Grid size={12}>
// // //               <Skeleton height={14} />
// // //             </Grid>
// // //             <Grid size={12}>
// // //               <Skeleton height={14} />
// // //             </Grid>
// // //             <Grid size={4}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={8}>
// // //               <Skeleton height={100} />
// // //             </Grid>

// // //             <Grid size={12}>
// // //               <Skeleton height={150} />
// // //             </Grid>
// // //             <Grid size={12}>
// // //               <Skeleton height={14} />
// // //             </Grid>

// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //           </Grid>
// // //           )}
// // //         </PageContainer>
// // //       </DashboardLayout>
// // //     </AppProvider>
// // //   );
// // // }

// // // import * as React from 'react';
// // // import { extendTheme, styled } from '@mui/material/styles';
// // // import DashboardIcon from '@mui/icons-material/Dashboard';
// // // import { AppProvider, Navigation } from '@toolpad/core/AppProvider';  // On garde seulement AppProvider sans Router
// // // import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// // // import { PageContainer } from '@toolpad/core/PageContainer';
// // // import Grid from '@mui/material/Grid2';
// // // import ChevronRight from '@mui/icons-material/ChevronRight';
// // // import PersonIcon from '@mui/icons-material/Person';  // user
// // // import NoteIcon from '@mui/icons-material/Note';  // Note
// // // import ChildCareIcon from '@mui/icons-material/ChildCare';  // Child-care
// // // import CommentIcon from '@mui/icons-material/Comment';  // Comment
// // // import Folder from '@mui/icons-material/Folder';  // courses
// // // import EventIcon from '@mui/icons-material/Event';  // Calendar
// // // import Courses from '../dashbordCourse/courses/Courses';
// // // import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom';  // Importation de React Router

// // // const NAVIGATION: Navigation = [
// // //   {
// // //     kind: 'header',
// // //     title: 'Main items',
// // //   },
// // //   {
// // //     segment: 'dashboard',
// // //     title: 'Dashboard',
// // //     icon: <DashboardIcon />,
// // //   },
// // //   {
// // //     segment: 'courses',
// // //     title: 'Courses',
// // //     icon: <Folder />,
// // //   },
// // //   {
// // //     segment: 'user',
// // //     title: 'Profile',
// // //     icon: <PersonIcon />,
// // //   },
// // //   {
// // //     segment: 'note',
// // //     title: 'Notes',
// // //     icon: <NoteIcon />,
// // //   },
// // //   {
// // //     segment: 'child-care',
// // //     title: 'Kids',
// // //     icon: <ChildCareIcon />,
// // //   },
// // //   {
// // //     segment: 'comments',
// // //     title: 'Chat',
// // //     icon: <CommentIcon />,
// // //   },
// // //   {
// // //     segment: 'calendar',
// // //     title: 'Calendar',
// // //     icon: <EventIcon />,
// // //   },
// // //   {
// // //     segment: 'logout',
// // //     title: 'Logout',
// // //     icon: <ChevronRight />,
// // //   },
// // // ];

// // // const demoTheme = extendTheme({
// // //   colorSchemes: { light: true, dark: true },
// // //   colorSchemeSelector: 'class',
// // //   breakpoints: {
// // //     values: {
// // //       xs: 0,
// // //       sm: 600,
// // //       md: 600,
// // //       lg: 1200,
// // //       xl: 1536,
// // //     },
// // //   },
// // // });

// // // export default function DashboardLayoutBasic(props: any) {
// // //   const { window } = props;

// // //   const demoWindow = window ? window() : undefined;

// // //   return (
// // //     <AppProvider
// // //       navigation={NAVIGATION}
// // //       theme={demoTheme}
// // //       window={demoWindow}
// // //     >
// // //       <ReactRouter> {/* Utilisation de React Router uniquement pour gérer les routes */}
// // //         <DashboardLayout>
// // //           <PageContainer>
// // //             <Routes>  {/* Routes définies avec React Router */}
// // //               <Route path="/courses" element={<Courses />} />  {/* Page des cours */}
// // //               <Route path="/" element={
// // //                 <Grid container spacing={1}>
// // //                   <Grid size={5} />
// // //                   <Grid size={12}>
// // //                     {/* Contenu général du tableau de bord */}
// // //                   </Grid>
// // //                 </Grid>
// // //               } />
// // //               {/* Autres routes peuvent être ajoutées ici */}
// // //             </Routes>
// // //           </PageContainer>
// // //         </DashboardLayout>
// // //       </ReactRouter>
// // //     </AppProvider>
// // //   );
// // // }

// // // import * as React from 'react';
// // // import { extendTheme, styled } from '@mui/material/styles';
// // // import DashboardIcon from '@mui/icons-material/Dashboard';
// // // import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
// // // import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// // // import { PageContainer } from '@toolpad/core/PageContainer';
// // // import Grid from '@mui/material/Grid2';
// // // import ChevronRight from '@mui/icons-material/ChevronRight';
// // // import PersonIcon from '@mui/icons-material/Person';  // user
// // // import NoteIcon from '@mui/icons-material/Note';  // Note
// // // import ChildCareIcon from '@mui/icons-material/ChildCare';  // Child-care
// // // import CommentIcon from '@mui/icons-material/Comment';  // Comment
// // // import Folder from '@mui/icons-material/Folder';  // courses
// // // import EventIcon from '@mui/icons-material/Event';  // Calendar
// // // import Courses from '../dashbordCourse/courses/Courses';  // Importation du composant Courses

// // // const NAVIGATION: Navigation = [
// // //   {
// // //     kind: 'header',
// // //     title: 'Main items',
// // //   },
// // //   {
// // //     segment: 'dashboard',
// // //     title: 'Dashboard',
// // //     icon: <DashboardIcon />,
// // //   },
// // //   {
// // //     segment: 'courses',
// // //     title: 'Courses',
// // //     icon: <Folder />,
// // //   },
// // //   {
// // //     segment: 'user',
// // //     title: 'Profile',
// // //     icon: <PersonIcon />,
// // //   },
// // //   {
// // //     segment: 'note',
// // //     title: 'Notes',
// // //     icon: <NoteIcon />,
// // //   },
// // //   {
// // //     segment: 'child-care',
// // //     title: 'Kids',
// // //     icon: <ChildCareIcon />,
// // //   },
// // //   {
// // //     segment: 'comments',
// // //     title: 'Chat',
// // //     icon: <CommentIcon />,
// // //   },
// // //   {
// // //     segment: 'calendar',
// // //     title: 'Calendar',
// // //     icon: <EventIcon />,
// // //   },
// // //   {
// // //     segment: 'logout',
// // //     title: 'Logout',
// // //     icon: <ChevronRight />,
// // //   },
// // // ];

// // // const demoTheme = extendTheme({
// // //   colorSchemes: { light: true, dark: true },
// // //   colorSchemeSelector: 'class',
// // //   breakpoints: {
// // //     values: {
// // //       xs: 0,
// // //       sm: 600,
// // //       md: 600,
// // //       lg: 1200,
// // //       xl: 1536,
// // //     },
// // //   },
// // // });

// // // export default function DashboardLayoutBasic(props: any) {
// // //   const { window } = props;

// // //   const [pathname, setPathname] = React.useState('/dashboard');  // Gérer dynamiquement le pathname

// // //   const demoWindow = window ? window() : undefined;

// // //   return (
// // //     <AppProvider

// // //       navigation={NAVIGATION}
// // //       router={{ pathname, searchParams: new URLSearchParams(), navigate: setPathname }}  // Gestion du routage interne
// // //       theme={demoTheme}
// // //       window={demoWindow}
// // //     >
// // //       <DashboardLayout>
// // //         <PageContainer>
// // //           {/* Logique pour afficher le contenu dynamique en fonction du pathname */}
// // //           {pathname === '/courses' ? (
// // //             <Courses />
// // //           ) : (
// // //             <Grid container spacing={1}>
// // //               <Grid size={5} />
// // //               <Grid size={12}>
// // //                 <div style={{ backgroundColor: '#f0f0f0', height: '100px' }} />  {/* Exemple de contenu */}
// // //               </Grid>
// // //             </Grid>
// // //           )}
// // //         </PageContainer>
// // //       </DashboardLayout>
// // //     </AppProvider>
// // //   );
// // // }
// // import * as React from 'react';
// // import { extendTheme, styled } from '@mui/material/styles';
// // import DashboardIcon from '@mui/icons-material/Dashboard';
// // import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
// // import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// // import { PageContainer } from '@toolpad/core/PageContainer';
// // import Grid from '@mui/material/Grid2';
// // import ChevronRight from '@mui/icons-material/ChevronRight';
// // import PersonIcon from '@mui/icons-material/Person';  // user
// // import NoteIcon from '@mui/icons-material/Note';  // Note
// // import ChildCareIcon from '@mui/icons-material/ChildCare';  // Child-care
// // import CommentIcon from '@mui/icons-material/Comment';  // Comment
// // import Folder from '@mui/icons-material/Folder';  // courses
// // import EventIcon from '@mui/icons-material/Event';  // Calendar
// // import Courses from '../dashbordCourse/courses/Courses';  // Importation du composant Courses
// // import Avatar from '@mui/material/Avatar/Avatar';
// // import NotificationsIcon from '@mui/icons-material/Notifications';  // Icône de notification (cloche)
// // import Card from '@mui/material/Card';
// // import { Button } from '@chakra-ui/react';
// // import { CardMedia, CardContent, Typography } from '@mui/material';


// // // Définition de la navigation du tableau de bord

// // const products = [
// //   {
// //     id: 1,
// //     name: 'Product 1',
// //     description: 'Description of product 1.',
// //     price: '$99.99',
// //     image: 'https://via.placeholder.com/300',
// //   },
// //   {
// //     id: 2,
// //     name: 'Product 2',
// //     description: 'Description of product 2.',
// //     price: '$129.99',
// //     image: 'https://via.placeholder.com/300',
// //   },
// //   {
// //     id: 3,
// //     name: 'Product 3',
// //     description: 'Description of product 3.',
// //     price: '$49.99',
// //     image: 'https://via.placeholder.com/300',
// //   },
// //   {
// //     id: 4,
// //     name: 'Product 4',
// //     description: 'Description of product 4.',
// //     price: '$79.99',
// //     image: 'https://via.placeholder.com/300',
// //   },
// // ];
// // const NAVIGATION: Navigation = [
// //   {
// //     kind: 'header',
// //     title: 'Main items',
// //   },
// //   {
// //     segment: 'dashboard',
// //     title: 'Dashboard',
// //     icon: <DashboardIcon />,
// //   },
// //   {
// //     segment: 'courses',
// //     title: 'Courses',
// //     icon: <Folder />,
// //   },
// //   {
// //     segment: 'user',
// //     title: 'Profile',
// //     icon: <PersonIcon />,
// //   },
// //   {
// //     segment: 'note',
// //     title: 'Notes',
// //     icon: <NoteIcon />,
// //   },
// //   {
// //     segment: 'child-care',
// //     title: 'Kids',
// //     icon: <ChildCareIcon />,
// //   },
// //   {
// //     segment: 'comments',
// //     title: 'Chat',
// //     icon: <CommentIcon />,
// //   },
// //   {
// //     segment: 'calendar',
// //     title: 'Calendar',
// //     icon: <EventIcon />,
// //   },
// //   {
// //     segment: 'logout',
// //     title: 'Logout',
// //     icon: <ChevronRight />,
// //   },
// // ];

// // // Thème de l'application
// // const demoTheme = extendTheme({
// //   colorSchemes: { light: true, dark: true },
// //   colorSchemeSelector: 'class',
// //   breakpoints: {
// //     values: {
// //       xs: 0,
// //       sm: 600,
// //       md: 600,
// //       lg: 1200,
// //       xl: 1536,
// //     },
// //   },
// // });

// // // Carte de produit personnalisée
// // const ProductCard = styled(Card)({
// //   maxWidth: 345,
// //   margin: '20px',
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'space-between',
// // });
// // const Header = styled('header')({
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// //   padding: '10px 20px',
// //   backgroundColor: '#fff',
// //   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// //   borderRadius: '8px',
// //   marginBottom: '20px',
// // });

// // const OrganisationInfo = styled('div')({
// //   display: 'flex',
// //   alignItems: 'center',
// //   gap: '10px',
// // });

// // const OrgName = styled('h2')({
// //   fontSize: '20px',
// //   fontWeight: 'bold',
// //   margin: 0,
// // });

// // const NotificationIconWrapper = styled('div')({
// //   display: 'flex',
// //   alignItems: 'center',
// //   cursor: 'pointer',
// // });

// // // Composant principal du tableau de bord
// // export default function DashboardLayoutBasic(props: any) {
// //   const { window } = props;

// //   // Gestion du pathname pour déterminer quelle section afficher
// //   const [pathname, setPathname] = React.useState('/dashboard');  // Gérer dynamiquement le pathname

// //   // Fonction de navigation
// //   const demoWindow = window ? window() : undefined;

// //   return (
// //     <AppProvider
// //       navigation={NAVIGATION}
// //       router={{ pathname, searchParams: new URLSearchParams(), navigate: setPathname }}  // Gestion du routage interne
// //       theme={demoTheme}
// //       window={demoWindow}
// //     >
// //       <DashboardLayout>
// //         <PageContainer style={{ minHeight: '100%', display: 'flex', flexDirection: 'row' }}>
// //            {/* Section produit sur le dashboard */}
// //            {pathname === '/dashboard' && (
// //             <Grid container spacing={4} justifyContent="center">
// //               {products.map((product) => (
// //                 <Grid item xs={12} sm={6} md={3} key={product.id}>
// //                   <ProductCard>
// //                     <CardMedia
// //                       component="img"
// //                       alt={product.name}
// //                       height="200"
// //                       image={product.image}
// //                       title={product.name}
// //                     />
// //                     <CardContent>
// //                       <Typography variant="h6" component="div">
// //                         {product.name}
// //                       </Typography>
// //                       <Typography variant="body2" color="text.secondary">
// //                         {product.description}
// //                       </Typography>
// //                       <Typography variant="h6" color="primary">
// //                         {product.price}
// //                       </Typography>
// //                     </CardContent>
// //                     <Button size="small" color="primary" variant="contained">
// //                       View Details
// //                     </Button>
// //                   </ProductCard>
// //                 </Grid>
// //               ))}
// //             </Grid>
// //           )}
// //                     {/* En-tête avec organisation, photo et cloche */}
// //                     <Header>
// //             <OrganisationInfo>
// //               <Avatar alt="Organization Logo" src="https://via.placeholder.com/40" /> {/* Image de l'organisation */}
// //               <OrgName>My Organization</OrgName> {/* Nom de l'organisation */}
// //             </OrganisationInfo>
// //             <NotificationIconWrapper>
// //               <NotificationsIcon fontSize="large" /> {/* Icône de notification */}
// //             </NotificationIconWrapper>
// //           </Header>
// //           {/* Affichage dynamique en fonction de la route active */}
// //           {pathname === '/courses' ? (
// //             // Affiche le composant Courses lorsque /courses est sélectionné
// //             <Courses />
// //           ) : pathname === '/dashboard' ? (
// //             // Exemple de contenu pour le tableau de bord par défaut
// //             <Grid container spacing={3}>
// //               <Grid item xs={12} md={6}>
// //                 <div style={{ backgroundColor: '#f0f0f0', height: '300px' }} />
// //               </Grid>
// //               <Grid item xs={12} md={6}>
// //                 <div style={{ backgroundColor: '#e0e0e0', height: '300px' }} />
// //               </Grid>
// //             </Grid>
// //           ) : pathname === '/user' ? (
// //             // Exemple pour le profil utilisateur
// //             <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
// //               <h2>User Profile</h2>
// //               <p>Manage your profile and settings here.</p>
// //             </div>
// //           ) : (
// //             // Par défaut, une autre section ou un message générique
// //             <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
// //               <h2>Welcome to the Dashboard</h2>
// //               <p>Select a section from the navigation.</p>
// //             </div>
// //           )}
// //         </PageContainer>
// //       </DashboardLayout>
// //     </AppProvider>
// //   );
// // }
// import * as React from 'react';
// import { extendTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid2';
// import ChevronRight from '@mui/icons-material/ChevronRight';
// import PersonIcon from '@mui/icons-material/Person';  // user
// import NoteIcon from '@mui/icons-material/Note';  // Note
// import ChildCareIcon from '@mui/icons-material/ChildCare';  // Child-care
// import CommentIcon from '@mui/icons-material/Comment';  // Comment
// import Folder from '@mui/icons-material/Folder';  // courses
// import EventIcon from '@mui/icons-material/Event';  // Calendar
// import Courses from '../dashbordCourse/courses/Courses';  // Importation du composant Courses
// import Avatar from '@mui/material/Avatar/Avatar';
// import NotificationsIcon from '@mui/icons-material/Notifications';  // Icône de notification (cloche)
// import Card from '@mui/material/Card';
// import { Button } from '@chakra-ui/react';
// import { CardMedia, CardContent, Typography } from '@mui/material';

// // Définition de la navigation du tableau de bord
// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'Description of product 1.',
//     price: '$99.99',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     description: 'Description of product 2.',
//     price: '$129.99',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     description: 'Description of product 3.',
//     price: '$49.99',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     description: 'Description of product 4.',
//     price: '$79.99',
//     image: 'https://via.placeholder.com/300',
//   },
// ];

// const NAVIGATION: Navigation = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'courses',
//     title: 'Courses',
//     icon: <Folder />,
//   },
//   {
//     segment: 'user',
//     title: 'Profile',
//     icon: <PersonIcon />,
//   },
//   {
//     segment: 'note',
//     title: 'Notes',
//     icon: <NoteIcon />,
//   },
//   {
//     segment: 'child-care',
//     title: 'Kids',
//     icon: <ChildCareIcon />,
//   },
//   {
//     segment: 'comments',
//     title: 'Chat',
//     icon: <CommentIcon />,
//   },
//   {
//     segment: 'calendar',
//     title: 'Calendar',
//     icon: <EventIcon />,
//   },
//   {
//     segment: 'logout',
//     title: 'Logout',
//     icon: <ChevronRight />,
//   },
// ];

// // Thème de l'application
// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: true },
//   colorSchemeSelector: 'class',
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// // Carte de produit personnalisée
// const ProductCard = styled(Card)({
//   maxWidth: 345,
//   margin: '20px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   minHeight: '400px', // Définit une hauteur minimale pour chaque carte
// });

// // Section en-tête avec l'organisation et la cloche
// const Header = styled('header')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '10px 20px',
//   backgroundColor: '#fff',
//   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//   borderRadius: '8px',
//   marginBottom: '20px',
// });

// const OrganisationInfo = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '10px',
// });

// const OrgName = styled('h2')({
//   fontSize: '20px',
//   fontWeight: 'bold',
//   margin: 0,
// });

// const NotificationIconWrapper = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   cursor: 'pointer',
// });

// // Composant principal du tableau de bord
// export default function DashboardLayoutBasic(props: any) {
//   const { window } = props;

//   // Gestion du pathname pour déterminer quelle section afficher
//   const [pathname, setPathname] = React.useState('/dashboard');  // Gérer dynamiquement le pathname

//   // Fonction de navigation
//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={{ pathname, searchParams: new URLSearchParams(), navigate: setPathname }}  // Gestion du routage interne
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          
//           {/* En-tête avec organisation, photo et cloche */}
//           <Header>
//             <OrganisationInfo>
//               <Avatar alt="Organization Logo" src="https://via.placeholder.com/40" /> {/* Image de l'organisation */}
//               <OrgName>My Organization</OrgName> {/* Nom de l'organisation */}
//             </OrganisationInfo>
//             <NotificationIconWrapper>
//               <NotificationsIcon fontSize="large" /> {/* Icône de notification */}
//             </NotificationIconWrapper>
//           </Header>

//           {/* Affichage dynamique en fonction de la route active */}
//           {pathname === '/dashboard' && (
//             <Grid container spacing={4} justifyContent="center">
//               {products.map((product) => (
//                 <Grid item xs={12} sm={6} md={3} key={product.id}>
//                   <ProductCard>
//                     <CardMedia
//                       component="img"
//                       alt={product.name}
//                       height="200"
//                       image={product.image}
//                       title={product.name}
//                     />
//                     <CardContent>
//                       <Typography variant="h6" component="div">
//                         {product.name}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {product.description}
//                       </Typography>
//                       <Typography variant="h6" color="primary">
//                         {product.price}
//                       </Typography>
//                     </CardContent>
//                     <Button size="small" color="primary" variant="contained">
//                       View Details
//                     </Button>
//                   </ProductCard>
//                 </Grid>
//               ))}
//             </Grid>
//           )}

//           {/* Section de cours */}
//           {pathname === '/courses' ? (
//             <Courses />
//           ) : (
//             // Section pour autre contenu, par exemple le profil utilisateur
//             <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
//               <h2>User Profile</h2>
//               <p>Manage your profile and settings here.</p>
//             </div>
//           )}
          
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }
// import * as React from 'react';
// import { extendTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid2';
// import ChevronRight from '@mui/icons-material/ChevronRight';
// import PersonIcon from '@mui/icons-material/Person';  // user
// import NoteIcon from '@mui/icons-material/Note';  // Note
// import ChildCareIcon from '@mui/icons-material/ChildCare';  // Child-care
// import CommentIcon from '@mui/icons-material/Comment';  // Comment
// import Folder from '@mui/icons-material/Folder';  // courses
// import EventIcon from '@mui/icons-material/Event';  // Calendar
// import Courses from '../dashbordCourse/courses/Courses';  // Importation du composant Courses
// import Avatar from '@mui/material/Avatar/Avatar';
// import NotificationsIcon from '@mui/icons-material/Notifications';  // Icône de notification (cloche)
// import Card from '@mui/material/Card';
// import { Button, Link } from '@chakra-ui/react';
// import { CardMedia, CardContent, Typography } from '@mui/material';

// // Définition de la navigation du tableau de bord
// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'Description of product 1.',
//     price: '$99.99',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     description: 'Description of product 2.',
//     price: '$129.99',
//     image: 'https://via.placeholder.com/300',
//   },
//   // {
//   //   id: 3,
//   //   name: 'Product 3',
//   //   description: 'Description of product 3.',
//   //   price: '$49.99',
//   //   image: 'https://via.placeholder.com/300',
//   // },
//   // {
//   //   id: 4,
//   //   name: 'Product 4',
//   //   description: 'Description of product 4.',
//   //   price: '$79.99',
//   //   image: 'https://via.placeholder.com/300',
//   // },
// ];

// const NAVIGATION: Navigation = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'courses',
//     title: 'Courses',
//     icon: <Folder />,
//   },
//   {
//     segment: 'user',
//     title: 'Profile',
//     icon: <PersonIcon />,
//   },
//   {
//     segment: 'note',
//     title: 'Notes',
//     icon: <NoteIcon />,
//   },
//   {
//     segment: 'child-care',
//     title: 'Kids',
//     icon: <ChildCareIcon />,
//   },
//   {
//     segment: 'comments',
//     title: 'Chat',
//     icon: <CommentIcon />,
//   },
//   {
//     segment: 'calendar',
//     title: 'Calendar',
//     icon: <EventIcon />,
//   },
//   {
//     segment: 'logout',
//     title: 'Logout',
//     icon: <ChevronRight />,
//   },
// ];

// // Thème de l'application
// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: true },
//   colorSchemeSelector: 'class',
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// // Carte de produit personnalisée
// const ProductCard = styled(Card)({
//   maxWidth: 345,
//   margin: '20px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   minHeight: '400px', // Définit une hauteur minimale pour chaque carte
// });

// // Section en-tête avec l'organisation et la cloche
// const Header = styled('header')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '10px 20px',
//   backgroundColor: '#fff',
//   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//   borderRadius: '8px',
//   marginBottom: '20px',
// });

// const OrganisationInfo = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '10px',
// });

// const OrgName = styled('h2')({
//   fontSize: '20px',
//   fontWeight: 'bold',
//   margin: 0,
// });

// const NotificationIconWrapper = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   cursor: 'pointer',
// });

// // Composant principal du tableau de bord
// export default function DashboardLayoutBasic(props: any) {
//   const { window } = props;

//   // Gestion du pathname pour déterminer quelle section afficher
//   const [pathname, setPathname] = React.useState('/dashboard');  // Gérer dynamiquement le pathname

//   // Fonction de navigation
//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={{ pathname, searchParams: new URLSearchParams(), navigate: setPathname }}  // Gestion du routage interne
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          
//           {/* En-tête avec organisation, photo et cloche */}
//           <Header>
//             <OrganisationInfo>
//               <Avatar alt="Organization Logo" src="https://via.placeholder.com/40" /> {/* Image de l'organisation */}
//               <OrgName>My Organization</OrgName> {/* Nom de l'organisation */}
//             </OrganisationInfo>
//             <NotificationIconWrapper>
//               <NotificationsIcon fontSize="large" /> {/* Icône de notification */}
//             </NotificationIconWrapper>
//           </Header>

//           {/* Affichage dynamique en fonction de la route active */}
//           {pathname === '/dashboard' && (
//             <div style={{ overflowY: 'auto', flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//               {products.map((product) => (
//                 <ProductCard key={product.id}>
//                   <CardMedia
//                     component="img"
//                     alt={product.name}
//                     height="200"
//                     image={product.image}
//                     title={product.name}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" component="div">
//                       {product.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {product.description}
//                     </Typography>
//                     <Typography variant="h6" color="primary">
//                       {product.price}
//                     </Typography>
//                   </CardContent>
//                   {/* <Button size="small" color="primary" variant="contained">
//                     View Details
//                   </Button> */}
//                                     <Link to={Courses.link} style={{ textDecoration: 'none' }}>
//                     <Button size="small" color="primary" variant="contained">
//                       View Details
//                     </Button>
//                   </Link>
//                 </ProductCard>
//               ))}
//             </div>
//           )}

//           {/* Section de cours */}
//           {pathname === '/courses' ? (
//             <Courses />
//           ) 
//           :
//            (
//             // Section pour autre contenu, par exemple le profil utilisateur
//             <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
//           {/* //     <h2>User Profile</h2>
//           //     <p>Manage your profile and settings here.</p> */}
//           {/* //  */}
//             </div>
//           )
//           }
          
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import ChevronRight from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';  // user
import NoteIcon from '@mui/icons-material/Note';  // Note
import ChildCareIcon from '@mui/icons-material/ChildCare';  // Child-care
import CommentIcon from '@mui/icons-material/Comment';  // Comment
import Folder from '@mui/icons-material/Folder';  // courses
import EventIcon from '@mui/icons-material/Event';  // Calendar
import Courses from '../dashbordCourse/courses/Courses';  // Importation du composant Courses
import Avatar from '@mui/material/Avatar/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';  // Icône de notification (cloche)
import Card from '@mui/material/Card';
import { Button } from '@chakra-ui/react';
import { CardMedia, CardContent, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Importation du composant Link pour la navigation

// Définition de la navigation du tableau de bord
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of product 1.',
    price: '$99.99',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of product 2.',
    price: '$129.99',
    image: 'https://via.placeholder.com/300',
  },
];

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'courses',
    title: 'Courses',
    icon: <Folder />,
  },
  {
    segment: 'user',
    title: 'Profile',
    icon: <PersonIcon />,
  },
  {
    segment: 'note',
    title: 'Notes',
    icon: <NoteIcon />,
  },
  {
    segment: 'child-care',
    title: 'Kids',
    icon: <ChildCareIcon />,
  },
  {
    segment: 'comments',
    title: 'Chat',
    icon: <CommentIcon />,
  },
  {
    segment: 'calendar',
    title: 'Calendar',
    icon: <EventIcon />,
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <ChevronRight />,
  },
];

// Thème de l'application
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Carte de produit personnalisée
const ProductCard = styled(Card)({
  maxWidth: 345,
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '400px', // Définit une hauteur minimale pour chaque carte
});

// Section en-tête avec l'organisation et la cloche
const Header = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  marginBottom: '20px',
});

const OrganisationInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const OrgName = styled('h2')({
  fontSize: '20px',
  fontWeight: 'bold',
  margin: 0,
});

const NotificationIconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

// Composant principal du tableau de bord
export default function DashboardLayoutBasic(props: any) {
  const { window } = props;
  

  // Gestion du pathname pour déterminer quelle section afficher
  const [pathname, setPathname] = React.useState('/dashboard');  // Gérer dynamiquement le pathname

//   const navigate = useNavigate()
//   const handleCourses = () => {
//   navigate('/courses')
// }
  // Fonction de navigation
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={{ pathname, searchParams: new URLSearchParams(), navigate: setPathname }}  // Gestion du routage interne
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          
          {/* En-tête avec organisation, photo et cloche */}
          <Header>
            <OrganisationInfo>
              <Avatar alt="Organization Logo" src="https://via.placeholder.com/40" /> {/* Image de l'organisation */}
              <OrgName>My Organization</OrgName> {/* Nom de l'organisation */}
            </OrganisationInfo>
            <NotificationIconWrapper>
              <NotificationsIcon fontSize="large" /> {/* Icône de notification */}
            </NotificationIconWrapper>
          </Header>

          {/* Affichage dynamique en fonction de la route active */}
          {pathname === '/dashboard' && (
            <div style={{ overflowY: 'auto', flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {products.map((product) => (
                <ProductCard key={product.id}>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="200"
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {product.price}
                    </Typography>
                  </CardContent>
                  {/* Lien vers la page de détails du produit */}
                  {/* <Link to={product.link} style={{ textDecoration: 'none' }}> */}
                    <Button size="small" color="primary" variant="contained">
                       
                      View Details
                    </Button>
                  {/* </Link> */}
                </ProductCard>
              ))}
            </div>
          )}

          {/* Section de cours */}
          {pathname === '/courses' ? (
            <Courses />
          ) : (
            // Section pour autre contenu, par exemple le profil utilisateur
            <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
              {/* <h2>User Profile</h2>
              <p>Manage your profile and settings here.</p> */}
            </div>
          )}
          
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
