import "../assets/styles/footer.scss"

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <h3>
                {currentYear} <span>&lt;rickreisme/&gt;</span> <br />
                Desenvolvido por Rick Reis
            </h3>
        </footer>
    )
}

export default Footer