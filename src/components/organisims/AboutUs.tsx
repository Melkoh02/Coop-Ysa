import * as React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useTranslation } from 'react-i18next';
import {
  CARD_BORDER,
  GREEN,
  SOFT_SHADOW,
  TEXT_MUTED,
} from '../../lib/constants/home';

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '10px',
          border: '1px solid ' + CARD_BORDER,
          display: 'grid',
          placeItems: 'center',
          color: GREEN,
          flexShrink: 0,
        }}>
        {icon}
      </Box>

      <Stack spacing={0.5}>
        <Typography variant="subtitle1" fontWeight={800}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: TEXT_MUTED }}>
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <Box id="nosotros" sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
      <Typography variant="h5" fontWeight={800} sx={{ mb: 4 }}>
        {t('about.title')}
      </Typography>

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              width: { xs: '100%', md: '100%' },
              maxWidth: 320,
              height: { xs: 220, md: 240 },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: SOFT_SHADOW,
              mx: { xs: 'auto', md: 0 },
            }}>
            <Box
              component="img"
              alt={t('about.title')}
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop"
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="body1"
            sx={{ color: TEXT_MUTED, mb: 4, maxWidth: 640 }}>
            {t('about.description')}
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Feature
                icon={<Groups2OutlinedIcon fontSize="large" />}
                title={t('about.solidarityTitle')}
                text={t('about.solidarityText')}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Feature
                icon={<HomeOutlinedIcon fontSize="large" />}
                title={t('about.productionTitle')}
                text={t('about.productionText')}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Feature
                icon={<SchoolOutlinedIcon fontSize="large" />}
                title={t('about.educationTitle')}
                text={t('about.educationText')}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
