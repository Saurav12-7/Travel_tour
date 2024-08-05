import Card from './Card';
function Tours({tours,sortOut})
{
    
    return(
        <div className='content'>
            <div className='title'>
                <h2>Plan with Me</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return <Card {...tour} sorting={sortOut}></Card>
                    })
                }
            </div>
        </div>
    )

}

export default Tours;