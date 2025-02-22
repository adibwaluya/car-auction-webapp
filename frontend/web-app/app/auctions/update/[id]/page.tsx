import Heading from '@/app/components/Heading'
import React from 'react'
import AuctionForm from '../../AuctionForm'
import { getDetailedViewData } from '@/app/actions/auctionActions'

type Params = {
  id: string;
};

export default async function Update({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const data = await getDetailedViewData(resolvedParams.id);

  return (
    <div className='mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg'>
      <Heading title='Update your auction' subtitle='Please update the details of your car'/>
      <AuctionForm auction={data}/>
    </div>
  )
}
