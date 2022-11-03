import Twitter from './Twitter'
import LinkedIn from './LinkedIn'


function Footer(props) {
    const getDate = new Date   
    const getYear = getDate.getFullYear()

    return(
        <footer>
            &#169; {getYear} The Evan Project
            <ul>
                <Twitter />
                <LinkedIn />
                
                <li><a href="https://github.com/EvShaw">GitHub</a></li>
                <li><a href="https://theevanproject.netlify.app/">Portfolio</a></li>
            </ul>
        </footer>
    )
}

export default Footer