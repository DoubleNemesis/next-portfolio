export default function History() {
    return (
        <>
            <div className="history-container">
                <h1>Work History</h1>
                <h2>2015 – present: Part-time freelance web-developer</h2>
                <p>Contributed to websites run by organisations including The Devon and Exeter Institution, Exeter English Online, Toby Tours, and Exeter Historic Buildings Trust.</p>
                <p>Tasks including:</p>
                <ul>
                    <li>Using HTML and PHP to customize Wordpress themes and templates to display staff profiles.</li>
                    <li>Using Javascript and CSS to add a filter to the staff profiles to enable clients to view prospective teachers by speciality.</li>
                    <li>Creating custom MySQL tables to hold staff data and writing a PHP script to display that data on the front-end.</li>
                    <li>Debugging major responsiveness issues.</li>
                    <li>Recovering broken WordPress installations by troubleshooting ACF issues and plugin conflicts.</li>
                    <li>Writing JavaScript logic to migrate a dataset from Excel to MySQL, plugging it into a Drupal installation and setting up advanced search functionality.</li>
                </ul>
                <h2>2002 – 2020: ESl Teacher @ Globe English</h2>
                <p>Tasks included:</p>
                <ul>
                    <li>Organising high-level classes and excursions/activities for groups throughout the Southwest. </li>
                </ul>
            </div>
            <style jsx>{`
            .history-container{
                display: flex;
                flex-direction: column;
                min-height: 100%;
                width: 100%;
                align-items: flex-start;
                justify-content: center;
                color: white;
                /* border: 1px solid orange; */
                padding: 0 2rem;
            }
            .history-container h1{
                font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
            }
            .history-container h2{
                font-size: clamp(.8rem, -0.875rem + 8.333vw, 1.2rem);
            }

            @media(min-width:1025px){
                .history-container{
                width: 60%;
                padding: 3rem 2rem;
            }

        ul{
            font-size: 1rem;
            font-family: 'Open Sans';
        }
            }        
            `}</style>
        </>
    )
}