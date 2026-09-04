import "./ActivityCard.css"

function ActivityCard({ title, description, date, background="https://placehold.co/200" }) {
    return (
        <div
            id="main-box"
            style={{ backgroundImage: `url(${background})` }}
        >
            

            <div id="title-section">
                {title}
            </div>
        </div>
    )
}


export default ActivityCard