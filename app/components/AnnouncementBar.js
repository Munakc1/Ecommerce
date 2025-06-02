'use client';
import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gray-100 py-2 px-4 sticky top-0 z-50 shadow-md"> {/* Light white background */}
      <div className="max-w-screen-xl mx-auto text-center">
        <Typography
          variant="body2"
          className="text-sm text-black"
          sx={{
            letterSpacing: '-0.5px',
            whiteSpace: { xs: 'normal', md: 'nowrap' },
            lineHeight: { xs: 1.2, md: 1.5 },
          }}
        >
          Get 10% OFF on Gaming Gear | Use Code: <strong>GAMER10</strong> |{' '}
          <MuiLink
            component={Link}
            href="/collections/gaming-deals"
            underline="hover"
            sx={{
              display: 'inline-block',
              mt: { xs: '2px', md: 0 },
              color: 'black',
              fontWeight: 600,
            }}
          >
            Shop Gaming Deals
          </MuiLink>
        </Typography>
      </div>
    </div>
  );
};

export default AnnouncementBar;
