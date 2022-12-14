import './Current.css'

export default function Current ({data}){
  return ( 
      <div className='weather-info'>
    
        <div className='weather-img'>
          <img 
            alt='weather' 
            className='weather-icon__img' 
            src={require(`../icons/${data.weather[0].icon}.png`)}/>
        </div>
    
        <p className='weather-degree'>{Math.round(data.main.temp)}°C</p>
        <p className='weather-date'>
          {new Date(data.dt * 1000).toLocaleDateString('en-GB', {
          month: '2-digit',day: '2-digit',year: 'numeric'
          })}
        </p>
    
      </div>
  )
}
