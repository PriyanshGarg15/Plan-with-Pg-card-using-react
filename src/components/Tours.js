import Card from "./Card";


function Tours({tours, removeTour}){
    return(
        <div className="tours-container">
            <div className="title">
                <h2>Plan with PG</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return(
                            <Card key={tour.id} {...tour} removeTour = {removeTour} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tours;