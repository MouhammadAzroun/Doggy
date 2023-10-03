import { Link } from "react-router-dom";

const Welcome = (props) => {
    return(
        <section>
            <h2>Welcome to the Doggy Daycare</h2>
            <p>Browse the catalog</p>
            <Link to = "/homepage">
                <button>Take me there</button>
            </Link>
        </section>
    )
}

export default Welcome;