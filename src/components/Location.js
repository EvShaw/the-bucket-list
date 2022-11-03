function Location(props) {
    console.log(props)
    return (
        <section className="location--container">

            <section className="location--imgContainer">
                <img src={props.img} alt="" className="location--img" />
            </section>


            <section className="location--info">

                <section className="location--header">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4 className="location--country">{props.country}</h4>
                    <a href={props.googleLink} target="_blank">View on Google Maps</a>


                </section>

                <section>
                    <h2 className="title">{props.title}</h2>
                    <span className="location--dateRange">{props.date[0]}, {props.date[1]}</span>
                    <p className="location--description">
                        {props.description}
                    </p>
                </section>

            </section>
        </section>
    )
}

export default Location
