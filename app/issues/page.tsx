import React, { useEffect } from 'react'
import { Button } from "@radix-ui/themes"
import Link from 'next/link'
import IssueListing from '@/components/IssueListing'






const IssuesPage = () => {

  return (
    <div className="space-y-2">
        <Button><Link href="/issues/new">New Issue</Link></Button>


        <IssueListing></IssueListing>



        
    </div>
  )






}



export default IssuesPage