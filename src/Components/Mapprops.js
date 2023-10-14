import React from 'react';
import Cards from './Cards';
import dataRequest from './Arrays.json'

const Mapprops = () => {
  return (
    <div className='mapPropsRotation'>

      {dataRequest.map((elem) => {
        return (
          <Cards description={elem.description} url={elem.url}  title={elem.title} />
        )
      })}
    </div>
  )
}

export default Mapprops;