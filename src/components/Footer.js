import Twitter from './Twitter'
import LinkedIn from './LinkedIn'


function Footer(props) {
    const getDate = new Date   
    const getYear = getDate.getFullYear()

    return(
        <footer>
          
            <ul>
                <li>&#169; {getYear} The Evan Project</li>
                <li><Twitter /></li>
                <li><LinkedIn /></li>
                
                <li><a href="https://github.com/EvShaw"><i class="fa-brands fa-square-github social-icons"></i></a></li>
                <li><a href="https://theevanproject.netlify.app/"><i class="fa-solid fa-square-up-right"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer

