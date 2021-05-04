import React,{useState} from 'react'
import './Link.css' 
import { FaArrowUp , FaArrowDown, FaRegTrashAlt, FaRegStar } from 'react-icons/fa';

const Link = (props) => {
  const {item, upVoteLink, downVoteLink, removeLink}=props;
  const [display, setDisplay] = useState('hidden')

  return (
    <div className='link-card' onMouseEnter={() => setDisplay('block')} onMouseLeave={() => setDisplay('hidden')} >
        <div className='link-body'>
          <h5>{item.name}</h5>
          <h6 className='mb-2 text-muted'>{item.url}</h6>
          <div className='vote-buttons'>
            <span onClick={()=> upVoteLink()}><FaArrowUp />Up Vote</span>
            <span onClick={()=> downVoteLink()}><FaArrowDown />Down Vote</span>
          </div>
        </div>
        <div className='link-img'>
            <FaRegStar />
            <h6 className='link-point'>{item.vote} Points</h6>
        </div>
        <FaRegTrashAlt className={`${display} remove-btn`} onClick={()=>removeLink()} />

    </div>
  );
}

export default Link
