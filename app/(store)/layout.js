import localFont from 'next/font/local';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
   return (
      <ClerkProvider dynamic>
         <html lang='en'>
            <body>
               <main>
                  <Header />
                  {children}
               </main>
            </body>
         </html>
      </ClerkProvider>
   );
}
