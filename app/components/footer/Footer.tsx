import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box className='mt-10' component="footer" sx={{ bgcolor: '#24342e', color: 'grey.300', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Şirket Bilgileri */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            ShopName
                        </Typography>
                        <Typography variant="body2" mb={2}>
                            En kaliteli ürünleri uygun fiyatlarla sizlere sunuyoruz. 7/24 müşteri hizmetleri desteğiyle yanınızdayız.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                <FaInstagram size={24} />
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Hızlı Linkler */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Hızlı Linkler
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Hakkımızda
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Kampanyalar
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Blog
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Kariyer
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Müşteri Hizmetleri */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Müşteri Hizmetleri
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Sipariş Takibi
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                İade ve Değişim
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Kargo Bilgileri
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: 'white' } }}>
                                Sıkça Sorulan Sorular
                            </Link>
                        </Stack>
                    </Grid>

                    {/* İletişim */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            İletişim
                        </Typography>
                        <Stack spacing={2}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <FaPhone />
                                <Typography variant="body2">+90 555 123 45 67</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <FaEnvelope />
                                <Typography variant="body2">info@shopname.com</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <FaMapMarkerAlt />
                                <Typography variant="body2">İstanbul, Türkiye</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Alt Footer */}
                <Box sx={{ borderTop: 1, borderColor: 'grey.800', mt: 4, pt: 4 }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={6} mb={{ xs: 2, md: 0 }}>
                            <Typography variant="body2">
                                © 2025 <Link href="https://github.com/omerulusal" color="inherit" target="_blank" sx={{ '&:hover': { color: 'white' } }}>
                                    SwiftMark
                                </Link>. Tüm Hakları Saklıdır.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;