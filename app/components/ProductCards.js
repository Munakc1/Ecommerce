import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function ProductCards() {
  const products = [
    {
      imageUrl: '/images/image1.png',
      title: 'Gaming Mouse 3000',
      salePrice: '₹1,499',
      regularPrice: '₹2,999',
      discount: '50% off',
    },
    {
      imageUrl: '/images/image2.png',
      title: 'RGB Keyboard 5000',
      salePrice: '₹2,299',
      regularPrice: '₹4,999',
      discount: '54% off',
    },
    {
      imageUrl: '/images/image3.png',
      title: 'Wireless Headset Pro',
      salePrice: '₹2,199',
      regularPrice: '₹4,499',
      discount: '50% off',
    },
    {
      imageUrl: '/images/image4.png',
      title: 'Gaming Chair Elite',
      salePrice: '₹5,499',
      regularPrice: '₹8,999',
      discount: '39% off',
    },
    {
      imageUrl: '/images/image5.png',
      title: 'Curved Monitor 27"',
      salePrice: '₹12,999',
      regularPrice: '₹19,999',
      discount: '35% off',
    },
    {
      imageUrl: '/images/image6.png',
      title: 'Gaming Desk Pro',
      salePrice: '₹7,999',
      regularPrice: '₹11,999',
      discount: '33% off',
    },
  ];

  return (
    <Box sx={{ textAlign: 'center', mb: 4, px: 2 }}>
      <Typography
        level="h2"
        sx={{ fontWeight: 'bold', fontSize: { xs: '22px', md: '28px' } }}
      >
        <span style={{ color: '#000' }}>Sale Is </span>
        <span style={{ color: 'red', textDecoration: 'underline' }}>Live</span>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          mt: 3,
        }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            sx={{
              flex: '1 1 100%', // full width on mobile
              maxWidth: { xs: '100%', sm: '45%', md: 220 }, // responsive widths
              minWidth: 180,
              borderRadius: 4,
              padding: 0,
              backgroundColor: '#fff',
              boxShadow: 'sm',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.03)' },
            }}
          >
            <AspectRatio ratio="1" objectFit="cover">
              <img
                src={product.imageUrl}
                alt={product.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AspectRatio>

            <CardContent sx={{ px: 1.5, py: 1.2 }}>
              <Typography
                level="body-xs"
                sx={{ fontSize: '12px', fontWeight: 500, color: '#555' }}
              >
                Gaming Accessories
              </Typography>

              <Typography
                component="h3"
                sx={{ fontWeight: 600, fontSize: '14px', my: 0.5 }}
              >
                {product.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>
                  {product.salePrice}
                </Typography>
                <Typography sx={{ color: 'gray', fontSize: '12px' }}>
                  <s>{product.regularPrice}</s>
                </Typography>
              </Box>

              <Typography
                sx={{ color: 'green', fontSize: '12px', fontWeight: 500 }}
              >
                {product.discount}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
