import React,{useState} from 'react'
import LinkCard from '../link/Link'
import PaginationWrapper from '../pagination/PaginationWrapper'
import useLocalStorage from '../../useLocalStorage'
import { Button, Alert } from 'reactstrap'
import './Links.css'
import { FaPlus } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import _ from 'lodash';


const Links = () => {
    const [links, setLinks] = useLocalStorage('links', []);
    const [removeItem, setRemoveItem] = useState([]);
    const [removedAlert, setRemovedAlert] = useState(false);
    const [page, setPage] = useState(1);

    const upVoteLink = (id) => {
        links.forEach((item,index) => {
          if(item.id == id){
            item.vote += 1;
          }
        });
        setLinks(_.orderBy(links, ['vote', 'date'], ['desc', 'desc']))
      }
      const downVoteLink = (id) => {
        links.forEach((item,index) => {
          if(item.id == id && item.vote > 0){
            item.vote -= 1;
          }
        });
        setLinks(_.orderBy(links, ['vote', 'date'], ['desc', 'desc']))

      }
      const removeLink = (id,name) => {
        setLinks(links.filter(item => item.id !== id ), ...links);
        setRemoveItem(name);
        setRemovedAlert(true);
        setTimeout(() => {
            setRemovedAlert(false);
        }, 1000);
      }
      const sortVoted = (e) =>{
          if(e.target.attributes.sort.value == 'mostVoted'){
            setLinks(_.orderBy(links, ['vote', 'date'], ['desc', 'asc']));
          }else{
            setLinks(_.orderBy(links, ['vote'], ['asc', 'desc']))
          } 
      }
      const pageHandler = (p) => {
        setPage(p)
      }

    return (
        <div className='links-wrapper'>
            <Link to='/add-new-link'>
            <Button className='add-new-link'><FaPlus /> <span>Add a new link</span></Button>
            </Link>
           {links.length >0 && (
            <div className='sort-wrapper'>
            <div className="button-group tabs">
                <a sort="mostVoted" onClick={(e) => sortVoted(e)}>Most Voted</a>
                <a sort="lessVoted" onClick={(e) => sortVoted(e)}>Less Voted</a>
            </div>
            </div>
           )}
        {   removedAlert  &&(
            <Alert color='danger'>
            {removeItem} removed!
            </Alert>
        )
        }
        {
          links.length > 0 &&
          links.slice((page-1)*2, (page-1)*2 + 2)
          .map(item =>(
                <LinkCard key={item.id} item={item} upVoteLink={() => upVoteLink(item.id)} downVoteLink={() => downVoteLink(item.id)}
                removeLink={()=> removeLink(item.id,item.name)}  
                />    
            ))
        }
        <PaginationWrapper pageHandler={(page) => pageHandler(page)} page={page} links={links} />
        </div>
    )
}

export default Links
