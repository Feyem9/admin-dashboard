// import { Container, Heading, Text } from '@chakra-ui/react';
// import './App.css';

// function App() {
//   return (
//     <Container>
//       <Heading>Hello, KidsCode!</Heading>
//       <Text>Welcome to our admin dashboard.</Text>
//       <Text>Please use the navigation menu to access different sections.</Text>
//     </Container>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Button } from './button';
export const App1 = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulation d'un chargement de 3 secondes
  };

  return (
    <div>
      <Button
        loading={loading}  // Activer le mode chargement
        loadingText="Chargement..."  // Texte de chargement
        onClick={handleClick}  // Action lors du clic
      >
        Cliquez-moi
      </Button>
    </div>
  );
};

import { DialogRoot, DialogContent, DialogBody, DialogFooter, DialogHeader, DialogTrigger } from './dialog';
import { motion } from 'framer-motion';
const MotionDialogContent = motion(DialogContent);

export const App2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <div>
      <Button onClick={onOpen}>Ouvrir le dialogue</Button>

      <DialogRoot open={isOpen} 
      onClose={onClose}
      >
        <DialogTrigger />
        
        {/* Contenu animé */}
        <MotionDialogContent 
          backdrop 
          portalled
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DialogHeader>Titre animé</DialogHeader>
          <DialogBody>
            Ce dialogue a une animation d'apparition et de disparition.
          </DialogBody>
          <DialogFooter>
            <Button variant="ghost" onClick={onClose}>Fermer</Button>
            <Button colorScheme="blue" onClick={onClose}>Confirmer</Button>
          </DialogFooter>
        </MotionDialogContent>
      </DialogRoot>
    </div>
  );
};


// export default { App , App1 } ;


