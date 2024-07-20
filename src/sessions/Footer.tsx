import "../assets/styles/footer.scss"

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <h3>{currentYear} <span>&lt;rickreisme/&gt;</span></h3>

            <h3>Desenvolvido por Rick Reis</h3>
        </footer>
    )
}

export default Footer