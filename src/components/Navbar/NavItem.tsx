import { color, h2, h3, h3_, h4, h6_, titleColor } from '@/constants';
import { Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface NavItemProps {
    isHovered: boolean;
    title: string;
    onSomethingElse: boolean;
    breakPoint: boolean;
}

function NavItem({
    isHovered,
    title,
    onSomethingElse,
    breakPoint,
}: NavItemProps) {
    const linkStyles = {
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
        },
        color: color,
    };

    const Link = ({ page, children }) => {
        const lowerCasePage = page.toLowerCase();
        return (
            <AnchorLink style={linkStyles} href={`#${lowerCasePage}`}>
                {children}
            </AnchorLink>
        );
    };
    return (
        <span
            style={{
                opacity: onSomethingElse ? '0.4' : '1',
                transition: 'opacity 0.3s ease',
                position: 'relative',
            }}
        >
            <motion.span
                initial={{ width: isHovered ? 0 : '100%' }}
                animate={{ width: isHovered ? '100%' : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: 1,
                    backgroundColor: titleColor,
                }}
            />{' '}
            <Link page={title}>
                <Typography
                    variant="h4"
                    fontSize={breakPoint ? h6_ : h4}
                    padding="10px"
                >
                    {title}
                </Typography>
            </Link>
        </span>
    );
}

export default NavItem;
