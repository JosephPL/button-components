const buttons = ({variant, startIcon, endIcon, textCode, color, size}) => {
  let bottonType = '';
  if(variant !== undefined){
    bottonType+= variant;
  }

  if(color !== '' && variant !== undefined){
    bottonType+= '-' + color;
  }else if(color !== '' && variant === undefined){
    bottonType+= color;
  }

  if(size !== ''){
    bottonType+= ' ' + size;
  }else {
    bottonType+= ' md'
  }

  
  const start = <i className={startIcon}></i>
  
  
  const end = <i className={endIcon}></i>

  return (
      <>
        <p>{textCode}</p> 
        <button className={bottonType}>{start} Default {end}</button>
      </>
  )
}

export default buttons
