import React from "react";

interface IProps {
    className?: string;
    children: React.ReactNode;
}

const PageWrapper: React.FC<IProps> = ({ className = "", children }) => {
    const cl = "l-header";

    return (
        <div className={className} style={{ opacity: 0 }}>
            {children}
        </div>
    );
};

export default PageWrapper;
