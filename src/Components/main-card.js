import monthly from './data/data-monthly.json';
import anually from './data/data-anually.json';

export default function MainCard({ plan }){
    return (
        <div className='main-card-row'>
            {plan === "monthly" ? monthly.map(item => (
                <div key={item.name} className={`${item.className} card`}>
                    <h2>{item.name}</h2>
                    <h1><span>$</span>{item.plan_price}</h1>
                    <div>
                        {item.storage}
                    </div>
                    <div>
                        {item.users}
                    </div>
                    <div>
                        {item.send}
                    </div>
                    <button>Learn More</button>
                </div>
            )) : anually.map(item => (
                <div key={item.name} className={`${item.className} card`}>
                    <h2>{item.name}</h2>
                    <h1><span>$</span>{item.plan_price}</h1>
                    <div>
                        {item.storage}
                    </div>
                    <div>
                        {item.users}
                    </div>
                    <div>
                        {item.send}
                    </div>
                    <button>Learn More</button>
                </div>
            ))    
        }
        </div>
    )    
}