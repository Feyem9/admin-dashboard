// import React, { useEffect, useState } from 'react';
// import axios from 'axios';  // Importation d'Axios
// import { List, ListItem, ListItemText, Paper, CircularProgress, Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';

// function Courses() {
//   const [courses, setCourses] = useState<any[]>([]);  // Tableau pour stocker les cours
//   const [loading, setLoading] = useState(true);  // Indicateur de chargement
//   const [error, setError] = useState<string | null>(null);  // Gestion des erreurs

//   // Utilisation de useEffect pour récupérer les données
//   useEffect(() => {
//     axios.get('https://dummyjson.com/products')  // Utilisation d'Axios pour récupérer les données
//       .then((response) => {
//         setCourses(response.data.products);  // Mise à jour de l'état avec les produits
//         setLoading(false);  // Changement de l'état de chargement
//       })
//       .catch((err) => {
//         setError(err.message);  // Gestion des erreurs
//         setLoading(false);
//       });
//   }, []);  // Le tableau vide [] garantit que l'appel est effectué une seule fois au montage du composant

//   return (
//     <Paper sx={{ padding: 2 }}>
//       <Typography variant="h6">courses list</Typography>
      
//       {/* Affichage du message de chargement ou d'erreur */}
//       {loading && <CircularProgress />}
//       {error && <Typography color="error">Erreur: {error}</Typography>}
      
//       {/* Si les produits sont chargés et qu'il n'y a pas d'erreur, afficher la liste */}
//       {!loading && !error && (
//         <List>
//           {/* {courses.map((product) => (
//             <ListItem key={product.id}>
//               <ListItemText 
//                 primary={product.title} 
//                 secondary={`Prix: ${product.price} €`} 
//               />
//             </ListItem>
//           ))} */}
//               <Grid container spacing={4}>
//       {/* Affiche les produits */}
//       {courses.map((product) => (
//         <Grid item xs={12} sm={6} md={4} key={product.id}>
//           <Card sx={{ maxWidth: 345 }}>
//             {/* Image du produit */}
//             <CardMedia
//               component="img"
//               alt={product.title}
//               height="140"
//               image={product.image}  // Remplace par l'URL de l'image réelle
//             />
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 {product.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {product.description || 'A great course to learn new things!'} {/* Description, ou texte par défaut */}
//               </Typography>
//               <Typography variant="h5" color="text.primary" sx={{ mt: 2 }}>
//                 {product.price} €
//               </Typography>
//               <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//                 Ajouter au panier
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
  
//         </List>
//       )}
//     </Paper>
//   );
// }

// export default Courses;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Paper,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Box,
  Avatar,
  Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

interface Course {
  id: string;
  name: string;
  enrolmentDate: string;
  duration: string;
  status: 'in progress' | 'completed';
}

const GoogleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=subject:computer+science'; // Example: Google Books API for Computer Science books

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState<Course>({
    id: '',
    name: '',
    enrolmentDate: '',
    duration: '',
    status: 'in progress',
  });

  useEffect(() => {
    // Fetch courses from an external API (Google Books in this example)
    axios
      .get(GoogleBooksAPI)
      .then((response) => {
        const fetchedCourses = response.data.items.map((item: any) => ({
          id: item.id,
          name: item.volumeInfo.title,
          enrolmentDate: 'N/A', // Example placeholder
          duration: 'N/A', // Example placeholder
          status: 'in progress', // Default status
        }));
        setCourses(fetchedCourses);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this runs only once after the component mounts

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleAddCourse = () => {
    const newId = (courses.length + 1).toString();
    setCourses([...courses, { ...newCourse, id: newId }]);
    setNewCourse({ id: '', name: '', enrolmentDate: '', duration: '', status: 'in progress' });
    setOpen(false);
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleValidateCourse = (id: string) => {
    setCourses(
      courses.map((course) => (course.id === id ? { ...course, status: 'completed' } : course))
    );
  };

  return (
    <Container maxWidth="lg">
      {/* AppBar for Organization Name with a photo and Add Course button */}
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left section: Organization Name with a photo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Organization Logo (image or avatar) */}
            {/* <Avatar alt="Organization Logo" src="/static/logo.png" sx={{ marginRight: 2 }} /> */}
            <Typography variant="h6" sx={{ backgroundColor: 'transparent' }}>
              List of all courses
            </Typography>
          </Box>

          {/* Right section: Add Course Button */}
          <Button color="inherit" onClick={handleOpenDialog}>
            Add Course
          </Button>
        </Toolbar>
      </AppBar>

      <Paper sx={{ marginTop: 2 }}>
        {/* Table Header */}
        <div
          style={{
            display: 'flex',
            padding: '10px 20px',
            backgroundColor: '#f4f4f4',
            borderBottom: '2px solid #ddd',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          <div style={{ flex: 1 }}>Course ID</div>
          <div style={{ flex: 3 }}>Course Name</div>
          <div style={{ flex: 2 }}>Enrolment Date</div>
          <div style={{ flex: 2 }}>Duration</div>
          <div style={{ flex: 2 }}>Status</div>
          <div style={{ flex: 1 }}>Actions</div>
        </div>

        {/* Table Body */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '10px 20px',
                borderBottom: '1px solid #eee',
                backgroundColor: '#fff',
                alignItems: 'center',
              }}
            >
              <div style={{ flex: 1, textAlign: 'center' }}>{course.id}</div>
              <div style={{ flex: 3, textAlign: 'center' }}>{course.name}</div>
              <div style={{ flex: 2, textAlign: 'center' }}>{course.enrolmentDate}</div>
              <div style={{ flex: 2, textAlign: 'center' }}>{course.duration}</div>
              <div style={{ flex: 2, textAlign: 'center' }}>{course.status}</div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <IconButton onClick={() => handleValidateCourse(course.id)} color="success">
                  <CheckIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteCourse(course.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </Paper>

      {/* Dialog for adding a new course */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Add New Course</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Course Name"
                fullWidth
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Enrolment Date"
                fullWidth
                type="date"
                value={newCourse.enrolmentDate}
                onChange={(e) => setNewCourse({ ...newCourse, enrolmentDate: e.target.value })}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Duration"
                fullWidth
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                margin="normal"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCourse} color="primary">
            Add Course
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
