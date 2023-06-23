// withAuth.js
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if the token exists in local storage
      const accessToken = localStorage.getItem('token');

      if (!accessToken) {
        // Redirect to the login page if the token is not found
        router.replace('/adminlogin');
      }
    }, []);

    // Render the wrapped component if the token exists
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
