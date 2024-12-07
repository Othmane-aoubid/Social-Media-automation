import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { AuthProvider } from '../contexts/AuthContext'; // AuthProvider context
import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: 'SocialAI - Social Media Automation',
  description: 'Automate your social media posting with AI-driven behavior mimicry',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
        <Router>
          <AuthProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
          </AuthProvider>
          <Footer />
        </Router>
      </body>
    </html>
  );
}
