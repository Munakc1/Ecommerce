"use client";

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

const allCategories = [
  { name: 'Gaming Mouse', image: '/images/gaming-mouse.jpg' },
  { name: 'Gaming Keyboard', image: '/images/gaming-keyboard.jpg' },
  { name: 'Gaming Headphones', image: '/images/gaming-headphones.jpg' },
  { name: 'Gaming Chairs', image: '/images/gaming-chairs.jpg' },
  { name: 'Gaming Laptops', image: '/images/gaming-laptops.jpg' },
  { name: 'Gaming Monitors', image: '/images/gaming-monitors.jpg' },
  { name: 'Gamepads', image: '/images/gamepads.jpg' },
  { name: 'Streaming Mics', image: '/images/streaming-mics.jpg' },
  { name: 'RGB Lights', image: '/images/rgb-lights.jpg' },
  { name: 'VR Headsets', image: '/images/vr-headsets.jpg' },
  { name: 'Cooling Pads', image: '/images/cooling-pads.jpg' },
  { name: 'Capture Cards', image: '/images/capture-cards.jpg' },
  { name: 'Gaming Glasses', image: '/images/gaming-glasses.jpg' },
  { name: 'Mouse Pads', image: '/images/mousepads.jpg' },
];

export default function ShopByCategories() {
  const [visibleCount, setVisibleCount] = React.useState(10); // Default 10 images visible

  const handleViewAllClick = () => {
    setVisibleCount(visibleCount === 10 ? allCategories.length : 10); // Toggle between 10 and all categories
  };

  return (
    <Box sx={{ px: 2, mb: 6 }}>
      <Typography
        component="h1"
        level="h1"
        sx={{
          fontSize: { xs: '26px', md: '32px' },
          fontWeight: 'bold',
          mb: 3,
        }}
      >
        Shop by <span style={{ color: '#ff4d4f' }}>Categories</span>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap', // Ensure all images are in the same row
          gap: 2,
          pb: 2,
          justifyContent: 'center', // Center the items
          overflowX: 'auto', // Allow horizontal scrolling for larger number of items
        }}
      >
        {allCategories.slice(0, visibleCount).map((cat, index) => (
          <Box
            key={index}
            sx={{
              width: 120, // Fixed width to keep items consistent
              textAlign: 'center',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="single_collection cat_single_column"
          >
            <Box
              className="img_container"
              sx={{
                width: '100%',
                height: 100, // Ensures the image container height is fixed
                position: 'relative',
                mb: 1,
              }}
            >
              <a href="#">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  layout="fill"
                  objectFit="cover" // Ensures the image covers the space without distortion
                  style={{ borderRadius: 8 }}
                />
              </a>
            </Box>
            <Box className="collection_title">
              <a href="#">
                <Typography level="body-sm" sx={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
                  {cat.name}
                </Typography>
              </a>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <button
          onClick={handleViewAllClick}
          style={{
            backgroundColor: 'white', // White background
            color: 'black', // Black text
            padding: '10px 20px',
            border: '2px solid black', // Blue border
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {visibleCount === 10 ? 'View All' : 'View Less'}
        </button>
      </Box>
    </Box>
  );
}
