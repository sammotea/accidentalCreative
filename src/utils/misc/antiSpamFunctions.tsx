export function mailToFormer(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    const myName = "sam";
    const domain = "accidentalcreative";
    const tld = "co.uk";

    const [a, b, c, d, e] = ["ma", "ilt", "o:", "@", "."];
    const target = a + b + c + myName + d + domain + e + tld;

    window.location.href = target;
}

export function outputContactLink(
    intro: string = "Email ",
    styles: string = ""
) {
    const myName = "sam";
    const domain = "accidentalcreative";
    const tld = "co.uk";

    return (
        <>
            {intro}
            <a className={styles} href="#" onClick={mailToFormer}>
                <span
                    data-name={myName}
                    data-dom={domain}
                    data-tld={tld}
                ></span>
            </a>
        </>
    );
}
