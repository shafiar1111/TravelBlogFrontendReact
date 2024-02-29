import leaf from '../../Assets/leaf.png';
import React from 'react';
import './LeafWithText.css';

function LeafWithText({text})
{
return (
<div>
    <div className='leafwithtext'>
    <img src={leaf} className='leftleaf' width='80' height='80'alt='leaf'/>
    <h3>{text}</h3>
    <img src={leaf} className='rightleaf' width='80' height='80'alt='leaf'/>
    </div>
</div>
);
}

export default LeafWithText;