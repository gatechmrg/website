import { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Link as MuiLink, Typography } from '@mui/material';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';

type DetailPageProps = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
};

export default function DetailPage({ title, description, image, imageAlt, children }: DetailPageProps) {
  return (
    <>
      <Head>
        <title>{title} | RobotX 2026</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container component="main" maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
          <MuiLink component={Link} href="/projects/robotx/2026" underline="hover" sx={{ display: 'inline-block', mb: 3 }}>
            Back to RobotX 2026
          </MuiLink>
          <Typography component="h1" variant="h3" sx={{ color: 'primary.light', fontWeight: 400, mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
            {title}
          </Typography>
          {description && <Typography sx={{ lineHeight: 1.8, mb: 3 }}>{description}</Typography>}
          {image && (
            <Box sx={{ position: 'relative', aspectRatio: '3 / 2', borderRadius: 2, overflow: 'hidden', mb: 4 }}>
              <Image src={image} alt={imageAlt || ''} fill sizes="(max-width: 899px) 100vw, 850px" style={{ objectFit: 'cover' }} />
            </Box>
          )}
          <Box sx={{ '& p': { lineHeight: 1.8, mb: 3 }, '& h2': { fontWeight: 400, mb: 2 } }}>
            {children}
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
}
