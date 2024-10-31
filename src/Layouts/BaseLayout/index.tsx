import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const BaseLayout: React.FC<React.PropsWithChildren & { className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={className}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default BaseLayout;
