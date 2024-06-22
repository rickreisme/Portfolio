import "../../assets/styles/footer.scss"

const currentYear = new Date().getFullYear();

const FooterEnglish = () => {
    return (
        <footer>
            <h3>
                {currentYear} <span>&lt;rickreisme/&gt;</span> <br />
                Developed by Rick Reis
            </h3>
        </footer>
    )
}

export default FooterEnglish