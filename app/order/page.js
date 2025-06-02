'use client';

import { Button, Chip, Rating } from '@mui/material';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="bg-blue shadow-md rounded-xl overflow-hidden p-4 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
      
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/3">
        <div className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded">EXTRA ₹100 OFF</div>
        <Image
          src="/images/background.jpg"
          alt="boAt Airdopes"
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-auto"
        />
        <div className="absolute bottom-2 left-2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded">
          100 Hours Playback
        </div>
      </div>

      {/* Right Details Section */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          {/* Rating & Title */}
          <div className="flex items-center gap-2">
            <Rating value={4.8} precision={0.1} readOnly size="small" />
            <span className="text-sm font-semibold text-gray-600">40</span>
          </div>

          <h2 className="text-lg font-semibold mt-1">boAt Airdopes 181 Pro</h2>

          {/* Price Section */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">₹1,199</span>
            <span className="line-through text-sm text-gray-400">₹4,990</span>
            <span className="text-green-600 text-sm font-semibold">76% off</span>
          </div>

          {/* Feature Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip label="ENx™ Tech" size="small" />
            <Chip label="ASAP™ Charge" size="small" />
            <Chip label="BEAST™ Mode" size="small" />
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <Button variant="contained" fullWidth className="bg-black text-white rounded-md py-2 text-sm">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
