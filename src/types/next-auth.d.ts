// src/types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      // Add any custom fields here
    };
  }
  interface User {
    id: string;
    // Add any custom fields here
  }
}
