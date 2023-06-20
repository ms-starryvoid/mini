
import { Button } from 'antd'

import Link from 'next/link'

export default function Home() {
  
  return (
    <div>
      <h1>Homepage</h1>
     <Link href="/adminlogin">Login</Link> <br>
     </br>
     <Link href="/adminlogin">signup</Link>
    </div>
  )
}
