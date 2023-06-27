'use client'
import { useParams, useRouter } from 'next/navigation';

import React from 'react';

const just = () => {
  const router = useRouter();
  const { name } = router.query || {};
  const decodedName = decodeURIComponent(name)
  if (decodedName) {
    return (
      <div>just {decodedName}
        <p>{decodedName} </p>
      </div>
    );
  } else {
    return (
      <div>No name passed</div>
    );
  }
};

export default  just
