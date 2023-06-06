const FootnoteLink = ({ fnIndex }: { fnIndex: number }) => {
    return (
        <a
            className="footnote__link"
            id={`footnoteLink${fnIndex}`}
            href={`#footnote${fnIndex}`}
        >
            {fnIndex}
        </a>
    );
};

export default FootnoteLink;
