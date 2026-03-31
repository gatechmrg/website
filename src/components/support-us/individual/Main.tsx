import { Container, Box, Typography, Stack, Paper, Button, Divider } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import LaunchIcon from '@mui/icons-material/Launch';


import { ReactNode } from 'react'; // Add this import

const InlineCode = ({ children }: { children: ReactNode }) => (
  <Box
    component="span"
    sx={{
      bgcolor: 'rgba(255,255,255,0.15)',
      px: '6px',
      py: '2px',
      borderRadius: '4px',
      color: '#fff',
      fontStyle: 'normal',
      display: 'inline-block',
      lineHeight: 1
    }}
  >
    {children}
  </Box>
);


export default function Main() {
    const cardStyle = {
        p: 4,
        bgcolor: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderTop: '4px solid',
        borderTopColor: 'primary.main',
        borderRadius: 3,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',
        '&:hover': {
            transform: 'translateY(-4px)',
            bgcolor: 'rgba(255,255,255,0.05)',
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box mb={8} textAlign="center">
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: 'white', letterSpacing: '-0.02em' }}>
                    Support Our Mission
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '700px', mx: 'auto' }}>
                    Individual donations help us purchase parts, attend competitions, and keep our robots in the water. 
                    Through the Georgia Tech Foundation, a 501(c)(3) nonprofit, you can contribute directly to fuel student innovation.
                </Typography>
            </Box>

            <Stack spacing={4}>
                {/* Check Donation Card */}
                <Paper sx={cardStyle}>
                    <Box display="flex" alignItems="center" gap={2} mb={3}>
                        <EditNoteIcon sx={{ fontSize: '2.5rem', color: 'primary.light' }} />
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                            Donate by Check
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                        Please make checks payable to <strong>Georgia Tech Foundation, Inc.</strong> and mail to:
                    </Typography>

                    <Box sx={{ 
                        bgcolor: 'rgba(0,0,0,0.2)', 
                        p: 3, 
                        borderRadius: 2, 
                        border: '1px dashed rgba(255,255,255,0.2)',
                        fontFamily: 'monospace',
                        color: 'primary.light',
                        mb: 3
                    }}>
                        Georgia Tech Foundation, Inc.<br />
                        760 Spring Street, Suite 400<br />
                        Atlanta, GA 30308
                    </Box>

                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', borderLeft: '3px solid', borderColor: 'primary.main', pl: 2 }}>
                        <strong>Important:</strong> Write &quot;ASDL Marine Robotics&quot; in the memo field to ensure the funds reach our team.
                    </Typography>
                </Paper>

                {/* Web Portal Card */}
                <Paper sx={cardStyle}>
                    <Box display="flex" alignItems="center" gap={2} mb={3}>
                        <OpenInBrowserIcon sx={{ fontSize: '2.5rem', color: 'primary.light' }} />
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                            Online Web Portal
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                        The Georgia Tech Foundation&apos;s donation portal supports <strong>Venmo, PayPal, CashApp</strong>, and all major credit cards. 
                        You can also set up recurring donations or specify employer matching.
                    </Typography>

                    <Stack spacing={2} sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Typography color="primary.light" fontWeight="bold">1.</Typography>
                            <Typography color="rgba(255,255,255,0.8)">Under <strong>Designation</strong>, select <InlineCode>Make a Special Gift to Georgia Tech (write in your preference)</InlineCode>.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Typography color="primary.light" fontWeight="bold">2.</Typography>
                            <Typography color="rgba(255,255,255,0.8)">Specify <strong>&quot;ASDL Marine Robotics&quot;</strong> in the Designation text box.  </Typography>
                        </Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', borderLeft: '3px solid', borderColor: 'primary.main', pl: 2 }}>
                            <strong>Note that the checkbox for <InlineCode>Is this gift on behalf of an organization</InlineCode> is referring to the party making the donation, not the organization receiving the gift.</strong>
                        </Typography>
                    </Stack>

                    <Button 
                        variant="contained" 
                        size="large" 
                        fullWidth
                        href="https://www.givecampus.com/campaigns/46972/donations/new"
                        target="_blank"
                        endIcon={<LaunchIcon />}
                        sx={{ 
                            py: 2, 
                            fontWeight: 700, 
                            fontSize: '1.1rem',
                            textTransform: 'none',
                            borderRadius: 2
                        }}
                    >
                        Make an Online Donation
                    </Button>
                </Paper>
            </Stack>

            <Typography variant="caption" sx={{ display: 'block', mt: 6, textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                The Georgia Tech Foundation is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
            </Typography>
        </Container>
    );
}