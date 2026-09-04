import "./ActivityCard.css"

function ActivityCard({ title, description, date, backgroundImage="../../assets/imagePlaceholder" }) {
    return (
        <div id="main-box">
            

            <div id="title-section">
                {title}
            </div>
        </div>
    )
}


export default ActivityCard