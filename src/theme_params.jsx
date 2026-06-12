import {  createTheme } from '@mui/material';

const FontSizeMultiplier = 1.4;
const menuWidth = 240;
const HeaderHeight = 80;
const FooterHeight = 60;
const black="#000000";
const HeaderBgColor = "#1c4f9b";
const HeaderTxtColor = '#ffffff'; 
const FooterBgColor = HeaderBgColor;
const FooterTxtColor = HeaderTxtColor; 
const PrimaryBgColor = HeaderBgColor;
const SecondaryBgColor = '#fdf2af';
const NavBgColor = '#fdf2af';
const NavTxtColor = black;
const NavHoverBgColor = '#1c4f9b';
const NavHoverTxtColor = '#ffffff';
const NavSelectedBgColor = '#1c4f9b';
const NavSelectedTxtColor = '#ffffff';
const BtnPrimaryColor = "#1c4f9b";
const BtnPrimaryColorHover = "#5290ed";
const BtnPrimaryContainedHoverBg = 'rgba(54, 194, 105, 0.04)';
const BtnRedColor = "#9b1c2f";
const BtnRedColorHover = "#f1556c";
const TableHeaderBgColor = "#1c4f9b";
const TableHeaderTxtColor = "#ffffff";
const TableEvenRowColor = "#cfcfcf";

// Create a custom theme
const theme = createTheme({
    direction: 'rtl',
    typography: {
        // Scale all typography variants by the multiplier
        fontSize: 14 * FontSizeMultiplier, // Base font size
        h1: {
            fontSize: `${2.5 * FontSizeMultiplier}rem`,
        },
        h2: {
            fontSize: `${2 * FontSizeMultiplier}rem`,
        },
        h3: {
            fontSize: `${1.75 * FontSizeMultiplier}rem`,
        },
        h4: {
            fontSize: `${1.5 * FontSizeMultiplier}rem`,
        },
        h5: {
            fontSize: `${1.25 * FontSizeMultiplier}rem`,
        },
        h6: {
            fontSize: `${1.1 * FontSizeMultiplier}rem`,
        },
        body1: {
            fontSize: `${1 * FontSizeMultiplier}rem`,
        },
        body2: {
            fontSize: `${0.875 * FontSizeMultiplier}rem`,
        },
        button: {
            fontSize: `${0.875 * FontSizeMultiplier}rem`,
        },
        caption: {
            fontSize: `${0.75 * FontSizeMultiplier}rem`,
        },
        overline: {
            fontSize: `${0.75 * FontSizeMultiplier}rem`,
        },
    },
    palette: {
        primary: {
            main: PrimaryBgColor,
        },
        secondary: {
            main: SecondaryBgColor,
        },
        // Add custom colors to the theme
        background: {
            header: HeaderBgColor,
            footer: FooterBgColor,
            nav: NavBgColor
        },
        // Navigation-specific colors
        nav: {
            main: NavBgColor,
            text: NavTxtColor,
            hover: {
                background: NavHoverBgColor,
                text: NavHoverTxtColor
            },
            selected: {
                background: NavSelectedBgColor,
                text: NavSelectedTxtColor
            }
        }
    },
    // You can also create custom components styling
    components: {
        // For the AppBar component (usually used for headers)
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: HeaderBgColor,
                    color: HeaderTxtColor 
                }
            }
        },
        // For the Paper component (which can be used for footers)
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'footer' },
                    style: {
                        backgroundColor: FooterBgColor,
                        color: FooterTxtColor 
                    }
                }
            ]
        },
        
        // For navigation items (using List and ListItem components)
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: NavBgColor,
                    color: NavTxtColor,
                    '&:hover': {
                        backgroundColor: NavHoverBgColor,
                        color: NavHoverTxtColor,
                    },
                    '&.Mui-selected': {
                        backgroundColor: NavSelectedBgColor,
                        color: NavSelectedTxtColor,
                        '&:hover': {
                            backgroundColor: NavHoverBgColor,
                            color: NavHoverTxtColor,
                        }
                    }
                }
            }
        },
        // Add these to your components section
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit !important',
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit !important',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                // Style all primary variant buttons
                root: {
                    textTransform: 'none', // Optional: removes all-caps from buttons
                },
                primary: {
                    backgroundColor: BtnPrimaryColor, // Use your predefined button color
                    color: '#FFFFFF', // Text color for the button
                    '&:hover': {
                        backgroundColor: BtnPrimaryColorHover, // Slightly darker shade for hover state
                    },
                },
                // Style contained variant buttons
                contained: {
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
                    '&:hover': {
                        boxShadow: '0 5px 8px 2px rgba(0, 0, 0, .2)',
                    },
                },
            },
            variants: [
                // You can also define custom button variants
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        backgroundColor: BtnPrimaryColor,
                        '&:hover': {
                            backgroundColor: BtnPrimaryColorHover, // Darker shade for hover
                        },
                    },
                },
                {
                    props: { variant: 'outlined', color: 'primary' },
                    style: {
                        borderColor: BtnPrimaryColor,
                        color: BtnPrimaryColor,
                        '&:hover': {
                            borderColor: BtnPrimaryColorHover,
                            backgroundColor: BtnPrimaryContainedHoverBg,
                        },
                    },
                },
                // You can also add a custom "danger" button variant
                {
                    props: { variant: 'contained', color: 'danger' },
                    style: {
                        backgroundColor: BtnRedColor,
                        '&:hover': {
                            backgroundColor: BtnRedColorHover, // Slightly darker shade of BtnRedColor
                        },
                    },
                },
            ],
        },
        MuiIconButton: {
            styleOverrides: {
                // Base styles for all IconButtons
                root: {
                    // You can add common styles here
                    padding: 8,

                    // Style for different color variants
                    '&.MuiIconButton-colorPrimary': {
                        color: BtnPrimaryColor,
                        '&:hover': {
                            backgroundColor: `${BtnPrimaryColor}20`, // 20 is hex for 12% opacity
                        },
                    },
                    '&.MuiIconButton-colorSecondary': {
                        color: SecondaryBgColor,
                        '&:hover': {
                            backgroundColor: `${SecondaryBgColor}20`,
                        },
                    },
                    '&.MuiIconButton-colorError': {
                        color: BtnRedColor,
                        '&:hover': {
                            backgroundColor: `${BtnRedColor}20`,
                        },
                    },
                    '&.MuiIconButton-colorSuccess': {
                        color: BtnPrimaryColor,
                        '&:hover': {
                            backgroundColor: `${BtnPrimaryColor}20`,
                        },
                    },
                },
            },
            variants: [
                // You can also define custom IconButton variants
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        backgroundColor: BtnPrimaryColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: BtnPrimaryColor,
                            opacity: 0.9,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        backgroundColor: SecondaryBgColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: SecondaryBgColor,
                            opacity: 0.9,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'error' },
                    style: {
                        backgroundColor: BtnRedColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: BtnRedColor,
                            opacity: 0.9,
                        },
                    },
                },
                {
                    props: {  color: 'danger' },
                    style: {
                        color: BtnRedColor,
                        '&:hover': {
                            backgroundColor: BtnRedColor,
                            opacity: 0.3,
                            color: black,
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'success' },
                    style: {
                        backgroundColor: BtnPrimaryColor,
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: BtnPrimaryColor,
                            opacity: 0.9,
                        },
                    },
                },
            ],
        },

        // Table Header Cells
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: TableHeaderBgColor,
                    color: TableHeaderTxtColor,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                // Style for all table cells
                root: {
                    padding: '5px',
                    fontSize: `${1 * FontSizeMultiplier}rem`,
                },
                // Style for header cells
                head: {
                    backgroundColor: TableHeaderBgColor,
                    color: TableHeaderTxtColor,
                    fontWeight: 'bold',
                    fontSize: `${1.1 * FontSizeMultiplier}rem`,
                },
                // Style for body cells
                body: {
                    fontSize: `${1 * FontSizeMultiplier}rem`,
                },
            },
        },
        // Table Rows
        MuiTableRow: {
            styleOverrides: {
                // Style for all rows
                root: {
                    // Style for even rows in the table body
                    '&:nth-of-type(even)': {
                        backgroundColor: TableEvenRowColor, // Use your even row color
                    },
                    // Add hover effect
                    // '&:hover': {
                    //     backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    // },
                },
            },
        },
    }
});

export {
    menuWidth,
    HeaderHeight,
    FooterHeight,
    HeaderBgColor,
    HeaderTxtColor,
    FooterBgColor,
    FooterTxtColor,
    theme,
    TableHeaderTxtColor,
};