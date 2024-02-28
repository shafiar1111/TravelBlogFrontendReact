import leaf from '../../Assets/leaf.png';

import './LeafWithText.css';

function LeafWithText()
{
return (
<div>
    <div className='leafwithtext'>
    <img src={leaf} className='leftleaf' width='80' height='80'alt='leaf'/>
    <h3>My recent adventures</h3>
    <img src={leaf} className='rightleaf' width='80' height='80'alt='leaf'/>
    </div>
</div>
);
}

export default LeafWithText;