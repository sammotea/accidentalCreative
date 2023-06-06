const Footnote = ({
    fnString,
    fnIndex,
}: {
    fnString: string;
    fnIndex: number;
}) => {
    return (
        <li className="footnote" id={`footnote${fnIndex}`}>
            <div dangerouslySetInnerHTML={{ __html: fnString }}></div>
            <a
                className="footnote__returnLink"
                href={`#footnoteLink${fnIndex}`}
            >
                ↩
            </a>
        </li>
    );
};

export default Footnote;
