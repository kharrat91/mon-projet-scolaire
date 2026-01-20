import { useEffect, useState } from 'react';
import { auth } from '../firebase';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        window.location.href = '/login';
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = '/login';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenue, {user?.email}</h1>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}